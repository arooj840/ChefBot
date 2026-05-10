// ============================================================
// controllers/mealplanController.js  — FIXED VERSION
// ============================================================
const Recipe = require('../models/Recipe');

// ── Diet mapping: frontend → DB ──────────────────────────
const mapDietType = (val) => {
  if (!val) return null;
  const map = {
    'veg':        'Vegetarian',
    'vegetarian': 'Vegetarian',
    'non-veg':    'Non-Vegetarian',
    'nonveg':     'Non-Vegetarian',
    'mixed':      null,           // Mixed = no filter (show everything)
    'eggetarian': 'Non-Vegetarian',
  };
  return map[val.toLowerCase()] ?? null;
};

// ── Allergy mapping: frontend → DB ──────────────────────
const mapAllergy = (val) => {
  if (!val || val === 'none') return null;
  const map = {
    'egg':       'eggs',
    'eggs':      'eggs',
    'peanut':    'peanuts',
    'peanuts':   'peanuts',
    'gluten':    'gluten',
    'lactose':   'dairy',
    'dairy':     'dairy',
    'shellfish': 'shellfish',
    'nuts':      'nuts',
  };
  return map[val.toLowerCase()] || null;
};

// ── AgeGroup mapping: frontend → DB ─────────────────────
const mapAgeGroup = (val) => {
  if (!val || val === 'general') return null;
  const map = {
    'kids':    ['kids', 'preteens'],
    'teens':   ['teens'],
    'elderly': ['seniors'],
    'patient': null, // handled separately
  };
  return map[val.toLowerCase()] || null;
};

// ── Pantry match score (0-100) ───────────────────────────
const calcMatchScore = (recipe, pantryItems) => {
  // FIX: use recipe.pantryKeywords properly
  if (!pantryItems || pantryItems.length === 0) return 85;
  if (!recipe.pantryKeywords || recipe.pantryKeywords.length === 0) return 70;

  const pantryLower   = pantryItems.map(p => p.toLowerCase().trim());
  const keywords      = recipe.pantryKeywords.map(k => k.toLowerCase().trim());
  let matched = 0;

  for (const kw of keywords) {
    if (pantryLower.some(p => p.includes(kw) || kw.includes(p))) matched++;
  }

  const score = Math.round((matched / keywords.length) * 100);
  return Math.max(score, 35); // minimum 35 taake card blank na rahe
};

// ── Format recipe for frontend ───────────────────────────
// FIX: recipe.title → name (frontend name expect karta hai)
const formatRecipe = (recipe, pantryItems) => {
  if (!recipe) return null;
  const score = calcMatchScore(recipe, pantryItems);
  return {
    _id:          recipe._id,
    name:         recipe.title,          // ✅ FIX: title → name
    image:        recipe.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    tagline:      recipe.tagline || `${recipe.dietType || ''} • ${recipe.cuisine || 'Pakistani'}`,
    available:    score >= 50,           // green badge
    matchScore:   score,
    dietType:     recipe.dietType,
    cuisine:      recipe.cuisine,
    cookingTime:  recipe.cookingTime,
    baseServings: recipe.baseServings,
    budget:       recipe.budget,
  };
};

// ── Shuffle array randomly ───────────────────────────────
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// ============================================================
// GET /api/mealplan/generate
// ============================================================
const generateMealPlan = async (req, res) => {
  try {
    const { dietType, allergy, ageGroup, budget, familyCount, duration, pantry } = req.query;

    // Parse pantry items
    const pantryItems = pantry
      ? pantry.split(',').map(p => p.trim()).filter(Boolean)
      : [];

    // ── Build base query ─────────────────────────────────
    const baseQuery = { isActive: true };

    // 1. Diet Type
    const mappedDiet = mapDietType(dietType);
    if (mappedDiet) {
      baseQuery.dietType = mappedDiet;
    }
    // Note: 'mixed' means no dietType filter → show all

    // 2. Allergy — exclude recipes containing this allergen
    const mappedAllergy = mapAllergy(allergy);
    if (mappedAllergy) {
      baseQuery.allergens = { $nin: [mappedAllergy] };
    }

    // 3. Age Group
    const mappedAge = mapAgeGroup(ageGroup);
    if (mappedAge) {
      baseQuery.ageGroup = { $in: mappedAge };
    }

    // 4. Patient special case
    if (ageGroup === 'patient') {
      baseQuery.patientFriendly = { $in: ['diabetes', 'heart', 'bp', 'lowsalt', 'lowfat'] };
    }

    // 5. Budget — FIX: exact match with DB value
    if (budget && budget !== '') {
      baseQuery.budget = budget.toLowerCase(); // 'economy'|'standard'|'premium'|'deluxe'
    }

    const totalDays = duration === 'daily' ? 1 : 7;
    const FETCH_LIMIT = totalDays * 5; // extra recipes taake variety ho

    // ── Fetch recipes per meal type ──────────────────────
    const fetchForMeal = async (mealTime) => {
      // mealTime must match DB enum: 'Breakfast' | 'Lunch' | 'Dinner'
      const query = {
        ...baseQuery,
        suitableForMeals: { $in: [mealTime] },
      };

      let recipes = [];

      // Step 1: Pantry-matching recipes pehle
      if (pantryItems.length > 0) {
        const pantryRegexes = pantryItems.map(p => new RegExp(p, 'i'));
        const pantryQuery   = {
          ...query,
          pantryKeywords: { $in: pantryRegexes },
        };
        recipes = await Recipe.find(pantryQuery)
          .select('_id title tagline image dietType cuisine pantryKeywords allergens budget suitableForMeals ageGroup baseServings cookingTime patientFriendly')
          .limit(FETCH_LIMIT)
          .lean();
      }

      // Step 2: Agar pantry match kam hai toh baaki bhi lo
      if (recipes.length < totalDays) {
        const existingIds = recipes.map(r => r._id.toString());
        const fillQuery   = { ...query, _id: { $nin: existingIds } };
        const fill = await Recipe.find(fillQuery)
          .select('_id title tagline image dietType cuisine pantryKeywords allergens budget suitableForMeals ageGroup baseServings cookingTime patientFriendly')
          .limit(FETCH_LIMIT)
          .lean();
        recipes = [...recipes, ...fill];
      }

      return recipes;
    };

    // Parallel fetch
    const [bRecipes, lRecipes, dRecipes] = await Promise.all([
      fetchForMeal('Breakfast'),
      fetchForMeal('Lunch'),
      fetchForMeal('Dinner'),
    ]);

    // Debug log — production mein hata dena
    console.log(`📊 Fetched: Breakfast=${bRecipes.length}, Lunch=${lRecipes.length}, Dinner=${dRecipes.length}`);
    console.log(`🔍 Filters applied:`, { dietType, mappedDiet: mapDietType(dietType), allergy, mappedAllergy: mapAllergy(allergy), budget, ageGroup, totalDays });

    // ── No recipes case ──────────────────────────────────
    if (bRecipes.length === 0 && lRecipes.length === 0 && dRecipes.length === 0) {
      return res.json({
        success:   false,
        noRecipes: true,
        message:   'Aapke selected filters ke according koi recipe nahi mili.',
        tip:       'Diet type ya budget change karein. Ya pantry mein items add karein.',
        debug:     { dietType, allergy, ageGroup, budget, mappedDiet: mapDietType(dietType) }
      });
    }

    // ── Build meal plan ──────────────────────────────────
    const shuffledB = shuffle(bRecipes);
    const shuffledL = shuffle(lRecipes);
    const shuffledD = shuffle(dRecipes);

    const plan = {};
    for (let d = 0; d < totalDays; d++) {
      plan[d] = {
        breakfast: formatRecipe(shuffledB[d % Math.max(shuffledB.length, 1)] || null, pantryItems),
        lunch:     formatRecipe(shuffledL[d % Math.max(shuffledL.length, 1)] || null, pantryItems),
        dinner:    formatRecipe(shuffledD[d % Math.max(shuffledD.length, 1)] || null, pantryItems),
      };
    }

    // Stats update (fire & forget)
    const usedIds = Object.values(plan)
      .flatMap(day => Object.values(day))
      .filter(Boolean)
      .map(r => r._id);
    Recipe.updateMany({ _id: { $in: usedIds } }, { $inc: { timesUsedInPlans: 1 } }).catch(() => {});

    return res.json({
      success:     true,
      plan,
      totalDays,
      duration,
      familyCount: parseInt(familyCount) || 4,
      filters:     { dietType, allergy, ageGroup, budget },
    });

  } catch (err) {
    console.error('generateMealPlan error:', err);
    return res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};

// ============================================================
// POST /api/mealplan/save  — ACTUAL DB SAVE
// ============================================================

// ✅ Clean import — MealPlan model
const MealPlan = require('../models/MealPlan');

const saveMealPlan = async (req, res) => {
  try {
    const { name, preferences, plan } = req.body;
    const userId = req.user?._id || null;

    const saved = await MealPlan.create({
      name:        name || `Meal Plan - ${new Date().toLocaleDateString()}`,
      preferences: preferences || {},
      plan:        plan || {},
      user:        userId,
    });

    return res.json({ success: true, message: 'Meal plan saved!', id: saved._id });
  } catch (err) {
    console.error('saveMealPlan error:', err);
    return res.status(500).json({ success: false, message: 'Save failed.', error: err.message });
  }
};

module.exports = { generateMealPlan, saveMealPlan };