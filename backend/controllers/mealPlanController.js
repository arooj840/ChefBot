// ============================================================
// controllers/mealplanController.js — FINAL CLEAN VERSION
// ============================================================
const Recipe   = require('../models/Recipe');
const MealPlan = require('../models/MealPlan');

// ── Diet mapping: frontend → DB ──────────────────────────
const mapDietType = (val) => {
  if (!val) return null;
  const map = {
    'veg':        'Vegetarian',
    'vegetarian': 'Vegetarian',
    'non-veg':    'Non-Vegetarian',
    'nonveg':     'Non-Vegetarian',
    'mixed':      null,            // no filter — show all
    'eggetarian': 'Non-Vegetarian',
  };
  return map[val.toLowerCase()] ?? null;
};

// ── Allergy mapping: frontend → DB ───────────────────────
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

// ── AgeGroup mapping: frontend → DB ──────────────────────
const mapAgeGroup = (val) => {
  if (!val || val === 'general') return null;
  const map = {
    'kids':    ['kids', 'preteens'],
    'teens':   ['teens'],
    'elderly': ['seniors'],
    'patient': null, // handled separately below
  };
  return map[val.toLowerCase()] || null;
};

// ── Pantry match score 0–100 ──────────────────────────────
const calcMatchScore = (recipe, pantryItems) => {
  if (!pantryItems || pantryItems.length === 0) return 85;
  if (!recipe.pantryKeywords || recipe.pantryKeywords.length === 0) return 70;

  const pantryLower = pantryItems.map(p => p.toLowerCase().trim());
  const keywords    = recipe.pantryKeywords.map(k => k.toLowerCase().trim());
  let matched = 0;

  for (const kw of keywords) {
    if (pantryLower.some(p => p.includes(kw) || kw.includes(p))) matched++;
  }

  const score = Math.round((matched / keywords.length) * 100);
  return Math.max(score, 35);
};

// ── Format one recipe for frontend ───────────────────────
const formatRecipe = (recipe, pantryItems) => {
  if (!recipe) return null;
  const score = calcMatchScore(recipe, pantryItems);
  return {
    _id:          recipe._id,
    name:         recipe.title,   // DB mein 'title' hai
    image:        recipe.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    tagline:      recipe.tagline || `${recipe.dietType || ''} • ${recipe.cuisine || 'Pakistani'}`,
    available:    score >= 50,
    matchScore:   score,
    dietType:     recipe.dietType,
    cuisine:      recipe.cuisine,
    cookingTime:  recipe.cookingTime,
    baseServings: recipe.baseServings,
    budget:       recipe.budget,
  };
};

// ── Fisher-Yates shuffle ───
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// ── Pick recipes ensuring variety across days ─────────────
// Agar recipes kam hain toh bhi har din DIFFERENT recipe aaye
const pickForDays = (recipes, totalDays) => {
  if (recipes.length === 0) return Array(totalDays).fill(null);

  const picked = [];
  const shuffled = shuffle(recipes);

  for (let d = 0; d < totalDays; d++) {
    // Cycle through but try not to repeat until all used
    picked.push(shuffled[d % shuffled.length]);
  }
  return picked;
};

// ============================================================
// GET /api/mealplan/generate
// ============================================================
const generateMealPlan = async (req, res) => {
  try {
    const {
      dietType, allergy, ageGroup,
      budget, familyCount, duration, pantry,
    } = req.query;

    // Parse pantry
    const pantryItems = pantry
      ? pantry.split(',').map(p => p.trim()).filter(Boolean)
      : [];

    // ── Build base MongoDB query ──────────────────────────
    const baseQuery = { isActive: true };

    // 1. Diet Type
    const mappedDiet = mapDietType(dietType);
    if (mappedDiet) baseQuery.dietType = mappedDiet;

    // 2. Allergy — EXCLUDE recipes with this allergen
    const mappedAllergy = mapAllergy(allergy);
    if (mappedAllergy) baseQuery.allergens = { $nin: [mappedAllergy] };

    // 3. Age Group
    const mappedAge = mapAgeGroup(ageGroup);
    if (mappedAge) baseQuery.ageGroup = { $in: mappedAge };

    // 4. Patient special case
    if (ageGroup === 'patient') {
      baseQuery.patientFriendly = { $in: ['diabetes','heart','bp','lowsalt','lowfat'] };
    }

    // 5. Budget
    if (budget && budget !== '') {
      baseQuery.budget = budget.toLowerCase();
    }

    const totalDays  = duration === 'daily' ? 1 : 7;
    const FETCH_LIMIT = 30; // enough variety

    // ── Fetch per meal type ───────────────────────────────
    const fetchForMeal = async (mealTime) => {
      const query = {
        ...baseQuery,
        suitableForMeals: { $in: [mealTime] },
      };

      let recipes = [];

      // Priority 1: pantry-matching recipes
      if (pantryItems.length > 0) {
        const pantryRegexes = pantryItems.map(p => new RegExp(p, 'i'));
        recipes = await Recipe.find({
          ...query,
          pantryKeywords: { $in: pantryRegexes },
        })
          .select('_id title tagline image dietType cuisine pantryKeywords allergens budget suitableForMeals ageGroup baseServings cookingTime patientFriendly')
          .limit(FETCH_LIMIT)
          .lean();
      }

      // Priority 2: fill remaining from general query
      if (recipes.length < FETCH_LIMIT) {
        const existingIds = recipes.map(r => r._id.toString());
        const fill = await Recipe.find({
          ...query,
          _id: { $nin: existingIds },
        })
          .select('_id title tagline image dietType cuisine pantryKeywords allergens budget suitableForMeals ageGroup baseServings cookingTime patientFriendly')
          .limit(FETCH_LIMIT - recipes.length)
          .lean();
        recipes = [...recipes, ...fill];
      }

      return recipes;
    };

    // Parallel fetch all 3 meal types
    const [bRecipes, lRecipes, dRecipes] = await Promise.all([
      fetchForMeal('Breakfast'),
      fetchForMeal('Lunch'),
      fetchForMeal('Dinner'),
    ]);

    console.log(`📊 Fetched → Breakfast:${bRecipes.length} Lunch:${lRecipes.length} Dinner:${dRecipes.length}`);
    console.log(`🔍 Query → diet:${dietType}(${mappedDiet}) allergy:${allergy}(${mappedAllergy}) budget:${budget} age:${ageGroup} days:${totalDays}`);

    // ── No recipes at all ─────────────────────────────────
    if (!bRecipes.length && !lRecipes.length && !dRecipes.length) {
      return res.json({
        success:   false,
        noRecipes: true,
        message:   'Aapke selected filters ke according koi recipe nahi mili.',
        tip:       'Diet type ya budget change karein. Ya pantry mein items add karein.',
      });
    }

    // ── Build plan with variety ───────────────────────────
    const breakfastPicked = pickForDays(bRecipes, totalDays);
    const lunchPicked     = pickForDays(lRecipes, totalDays);
    const dinnerPicked    = pickForDays(dRecipes, totalDays);

    const plan = {};
    for (let d = 0; d < totalDays; d++) {
      plan[d] = {
        breakfast: formatRecipe(breakfastPicked[d], pantryItems),
        lunch:     formatRecipe(lunchPicked[d],     pantryItems),
        dinner:    formatRecipe(dinnerPicked[d],     pantryItems),
      };
    }

    // Fire & forget — stats update
    const usedIds = Object.values(plan)
      .flatMap(day => [day.breakfast, day.lunch, day.dinner])
      .filter(Boolean)
      .map(r => r._id);
    Recipe.updateMany(
      { _id: { $in: usedIds } },
      { $inc: { timesUsedInPlans: 1 } }
    ).catch(() => {});

    return res.json({
      success:     true,
      plan,
      totalDays,
      duration,
      familyCount: parseInt(familyCount) || 2,
      filters:     { dietType, allergy, ageGroup, budget },
    });

  } catch (err) {
    console.error('generateMealPlan error:', err);
    return res.status(500).json({
      success: false,
      message: 'Server error while generating meal plan.',
      error:   err.message,
    });
  }
};

// ============================================================
// POST /api/mealplan/save
// ============================================================
const saveMealPlan = async (req, res) => {
  try {
    const { name, preferences, plan } = req.body;
    const userId = req.user?._id || null;

    // ✅ FIX: Convert plan object to Map for MongoDB
    // plan comes as { "0": {...}, "1": {...} }
    // MealPlan schema uses Map type
    const planMap = new Map();
    if (plan && typeof plan === 'object') {
      Object.entries(plan).forEach(([key, value]) => {
        planMap.set(key, value);
      });
    }

    const saved = await MealPlan.create({
      name:        name || `Meal Plan - ${new Date().toLocaleDateString()}`,
      preferences: preferences || {},
      plan:        planMap,
      totalDays:   planMap.size || 7,
      familyCount: parseInt(preferences?.familyMembers) || 2,
      user:        userId,
    });

    return res.json({
      success: true,
      message: 'Meal plan saved successfully!',
      id:      saved._id,
    });

  } catch (err) {
    console.error('saveMealPlan error:', err);
    return res.status(500).json({
      success: false,
      message: 'Save failed.',
      error:   err.message,
    });
  }
};

module.exports = { generateMealPlan, saveMealPlan };