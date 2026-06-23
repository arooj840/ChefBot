const Pantry = require('../models/Pantry');
const Recipe = require('../models/Recipe');
const ShoppingList = require('../models/ShoppingList');
const CookingLog = require('../models/CookingLog');
const { checkFundamentalIngredients } = require('../utils/pantryHelper');
const { normalizeIngredient, getIngredientCategory } = require('../utils/urduHelper');

// Import Levenshtein for fuzzy matching
const levenshtein = require('fast-levenshtein');

// ==================== NON-INGREDIENT KEYWORDS TO FILTER ====================
const nonIngredientKeywords = [
  'toaster', 'pressure cooker', 'pan', 'pot', 'oven', 'microwave', 
  'blender', 'mixer', 'grinder', 'stove', 'cooker', 'utensil',
  'bowl', 'plate', 'cup', 'spoon', 'fork', 'knife', 'cutting board',
  'hyderabadi', 'punjabi', 'mughlai', 'awadhi', 'kashmiri', 'bengali',
  'boil', 'fry', 'roast', 'bake', 'grill', 'steam', 'chop', 'slice', 'dice', 'mince'
];

// ==================== VALID INGREDIENT CHECK ====================
const isValidIngredient = (ingredient) => {
  if (!ingredient || typeof ingredient !== 'string') return false;
  const lowerIng = ingredient.toLowerCase().trim();
  if (lowerIng.length < 2) return false;
  const hasLetters = /[a-z\u0600-\u06FF]/i.test(lowerIng);
  if (!hasLetters) return false;
  
  for (const keyword of nonIngredientKeywords) {
    if (lowerIng.includes(keyword)) {
      console.log(`🚫 Filtered: "${ingredient}"`);
      return false;
    }
  }
  return true;
};

// ==================== NORMALIZE TEXT ====================
const normalizeText = (str) => {
  if (!str) return '';
  return normalizeIngredient(str);
};

// ==================== GET RECIPE INGREDIENTS ====================
const getRecipeIngredients = (recipe) => {
  let ingredients = [];
  
  if (recipe.pantryKeywords && recipe.pantryKeywords.length > 0) {
    ingredients = recipe.pantryKeywords;
  } else if (recipe.ingredients && recipe.ingredients.length > 0) {
    ingredients = recipe.ingredients.map(ing => ing.name);
  } else if (recipe.ingredientsRaw && recipe.ingredientsRaw.length > 0) {
    ingredients = recipe.ingredientsRaw;
  } else {
    return [];
  }
  
  return ingredients.filter(isValidIngredient);
};

// ==================== HELPER FUNCTIONS ====================
const scaleIngredientForDeduction = (ingredient, scaleFactor) => {
  if (!ingredient) return 1;
  const match = ingredient.match(/^([\d/.\s]+)?(.*)$/);
  const quantityStr = match[1]?.trim() || '';
  if (quantityStr) {
    let qty = 0;
    if (quantityStr.includes('/')) {
      const parts = quantityStr.split('/');
      qty = parseFloat(parts[0]) / parseFloat(parts[1]);
    } else {
      qty = parseFloat(quantityStr);
    }
    return qty * scaleFactor;
  }
  return 1;
};

const scaleIngredientText = (ingredient, scaleFactor) => {
  if (!ingredient) return ingredient;
  const match = ingredient.match(/^([\d/.\s]+)?(.*)$/);
  const quantityStr = match[1]?.trim() || '';
  const name = match[2]?.trim() || ingredient;
  
  if (quantityStr) {
    let qty = 0;
    if (quantityStr.includes('/')) {
      const parts = quantityStr.split('/');
      qty = parseFloat(parts[0]) / parseFloat(parts[1]);
    } else {
      qty = parseFloat(quantityStr);
    }
    const scaledQty = qty * scaleFactor;
    let newQty = Number.isInteger(scaledQty) ? scaledQty.toString() : scaledQty.toFixed(1);
    return `${newQty} ${name}`.trim();
  }
  return ingredient;
};

// Smart ingredient matching
const isIngredientMatch = (pantryItem, recipeIngredient) => {
  const p = normalizeText(pantryItem);
  const r = normalizeText(recipeIngredient);
  if (p === r) return true;
  if (p.includes(r) || r.includes(p)) return true;
  const distance = levenshtein.get(p, r);
  if (distance <= 2) return true;
  return false;
};

const calculateMatchPercentage = (recipe, pantryItems) => {
  try {
    const recipeIngredients = getRecipeIngredients(recipe);
    if (recipeIngredients.length === 0) return 50;
    if (!pantryItems || pantryItems.length === 0) return 0;
    
    const pantryNames = pantryItems.map(item => {
      const name = item.name?.toLowerCase() || item.itemName?.toLowerCase() || '';
      return normalizeText(name);
    }).filter(name => name.length > 0);
    
    if (pantryNames.length === 0) return 0;
    
    let matchedCount = 0;
    for (const ingredient of recipeIngredients) {
      const normalizedIng = normalizeText(ingredient);
      if (normalizedIng.length === 0) continue;
      const found = pantryNames.some(pantryName => isIngredientMatch(pantryName, normalizedIng));
      if (found) matchedCount++;
    }
    
    let matchPercent = Math.round((matchedCount / recipeIngredients.length) * 100);
    if (matchPercent === 0 && matchedCount > 0) matchPercent = 10;
    return Math.min(100, matchPercent);
  } catch (err) {
    console.error('Match calculation error:', err);
    return 50;
  }
};

const getMissingIngredients = (recipe, pantryItems) => {
  try {
    const recipeIngredients = getRecipeIngredients(recipe);
    if (recipeIngredients.length === 0) return [];
    if (!pantryItems || pantryItems.length === 0) return recipeIngredients.slice(0, 5);
    
    const pantryNames = pantryItems.map(item => {
      const name = item.name?.toLowerCase() || item.itemName?.toLowerCase() || '';
      return normalizeText(name);
    }).filter(name => name.length > 0);
    
    const missing = recipeIngredients.filter(ingredient => {
      const normalizedIng = normalizeText(ingredient);
      if (normalizedIng.length === 0) return false;
      const found = pantryNames.some(pantryName => isIngredientMatch(pantryName, normalizedIng));
      return !found;
    });
    
    return missing.filter(isValidIngredient).slice(0, 5);
  } catch (err) {
    console.error('Missing ingredients error:', err);
    return [];
  }
};

const deductPantryItems = async (userId, recipe, scaleFactor) => {
  try {
    const recipeIngredients = getRecipeIngredients(recipe);
    if (recipeIngredients.length === 0) return [];
    
    const pantry = await Pantry.findOne({ userId });
    if (!pantry || pantry.items.length === 0) return [];
    
    const deductedItems = [];
    for (const ingredient of recipeIngredients) {
      const normalizedIng = normalizeText(ingredient);
      const scaledQty = scaleIngredientForDeduction(ingredient, scaleFactor);
      
      const pantryItem = pantry.items.find(item => 
        isIngredientMatch(normalizeText(item.name), normalizedIng)
      );
      
      if (pantryItem) {
        const oldQuantity = pantryItem.quantity;
        pantryItem.quantity = Math.max(0, pantryItem.quantity - scaledQty);
        pantryItem.isLowStock = pantryItem.quantity <= (pantryItem.threshold || 2);
        pantryItem.lastUpdated = new Date();
        
        deductedItems.push({
          name: pantryItem.name,
          oldQuantity,
          newQuantity: pantryItem.quantity,
          deducted: scaledQty
        });
        
        if (pantryItem.quantity === 0) {
          pantry.items = pantry.items.filter(item => item.name !== pantryItem.name);
        }
      }
    }
    await pantry.save();
    return deductedItems;
  } catch (error) {
    console.error('Error deducting pantry:', error);
    return [];
  }
};

// ==================== MAIN API FUNCTIONS ====================

// GET /api/meal-suggestions
const getMealSuggestions = async (req, res) => {
  try {
    const { search = '', mealTime, dietType, allergy, ageGroup, limit = 50, skipFundamental = 'false', pantry: pantryQuery } = req.query;
    const userId = req.user._id || req.user.id;
    
    let pantryItems = [];
    if (pantryQuery && pantryQuery.trim() !== '') {
      try {
        const pantryNames = pantryQuery.split(',');
        pantryItems = pantryNames.map(name => ({ name: name.trim().toLowerCase(), itemName: name.trim().toLowerCase() }));
      } catch (err) {}
    }
    
    if (pantryItems.length === 0) {
      try {
        const pantryDoc = await Pantry.findOne({ userId }).lean();
        if (pantryDoc && pantryDoc.items) pantryItems = pantryDoc.items;
      } catch (pantryErr) {}
    }
    
    const shouldSkip = skipFundamental === 'true';
    let missingFundamentalsList = null;
    
    if (!shouldSkip) {
      let dietTypeForFundamental = null;
      if (dietType === 'veg') dietTypeForFundamental = 'veg';
      else if (dietType === 'non-veg') dietTypeForFundamental = 'non-veg';
      const fundamentalCheck = checkFundamentalIngredients(pantryItems, dietTypeForFundamental);
      if (!fundamentalCheck.hasFundamentals) missingFundamentalsList = fundamentalCheck.missingFundamentals;
    }
    
    let query = { isActive: true };
    if (search && search.trim() !== '') {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { tagline: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } },
        { subCategory: { $regex: search, $options: 'i' } }
      ];
    }
    if (mealTime && mealTime !== 'all') {
      const mealTimeCapitalized = mealTime.charAt(0).toUpperCase() + mealTime.slice(1).toLowerCase();
      query.suitableForMeals = { $in: [mealTimeCapitalized] };
    }
    if (dietType && dietType !== 'all') {
      let dietFilter = dietType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian';
      if (dietType === 'eggetarian') dietFilter = 'Vegetarian';
      query.dietType = dietFilter;
    }
    if (allergy && allergy !== 'none') query.allergens = { $nin: [allergy.toLowerCase()] };
    if (ageGroup && ageGroup !== 'general') {
      const ageMap = { 'toddler': 'toddlers', 'patient': 'seniors', 'family-mix': ['adults', 'seniors'] };
      const ageValue = ageMap[ageGroup];
      if (ageValue) query.ageGroup = Array.isArray(ageValue) ? { $in: ageValue } : { $in: [ageValue] };
    }
    
    let recipes = await Recipe.find(query).limit(parseInt(limit)).lean();
    if (!recipes || recipes.length === 0) return res.json({ success: true, suggestions: [], total: 0 });
    
    const suggestions = recipes.map(recipe => {
      try {
        const match = calculateMatchPercentage(recipe, pantryItems);
        const missing = getMissingIngredients(recipe, pantryItems);
        return {
          id: recipe._id,
          name: recipe.title || 'Untitled',
          category: recipe.category || 'General',
          subCategory: recipe.subCategory || '',
          dietType: recipe.dietType || 'Vegetarian',
          cookingTime: recipe.cookingTime || 30,
          match: isNaN(match) ? 50 : match,
          image: recipe.image || '',
          missing: missing.slice(0, 5),
          baseServings: recipe.baseServings || 4
        };
      } catch (err) { return null; }
    }).filter(s => s);
    
    suggestions.sort((a, b) => b.match - a.match);
    res.json({ success: true, suggestions, total: recipes.length, filtered: suggestions.length, missingFundamentals: missingFundamentalsList });
  } catch (error) {
    console.error('Error in getMealSuggestions:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/meal-suggestions/cook
const cookRecipe = async (req, res) => {
  try {
    const { recipeId, members, scaleFactor } = req.body;
    const userId = req.user._id || req.user.id;
    if (!recipeId) return res.status(400).json({ success: false, message: 'recipeId required' });
    
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) return res.status(404).json({ success: false, message: 'Recipe not found' });
    
    const selectedMembers = parseInt(members);
    const scale = scaleFactor || (selectedMembers / (recipe.baseServings || 4));
    const deductedItems = await deductPantryItems(userId, recipe, scale);
    
    const today = new Date().toISOString().split('T')[0];
    const dayName = new Date(today).toLocaleDateString('en-US', { weekday: 'long' });
    let cookingLog = await CookingLog.findOne({ userId, date: today });
    if (!cookingLog) cookingLog = new CookingLog({ userId, date: today, dayName, meals: [] });
    
    cookingLog.meals.push({ recipeId, recipeName: recipe.title, members: selectedMembers, ingredientsUsed: deductedItems });
    await cookingLog.save();
    
    const scaledIngredientsRaw = recipe.ingredientsRaw?.map(ing => scaleIngredientText(ing, scale)) || [];
    res.json({
      success: true,
      message: `${recipe.title} cooked for ${selectedMembers} people!`,
      deductedItems,
      scaledRecipe: {
        id: recipe._id, title: recipe.title, tagline: recipe.tagline, description: recipe.description,
        image: recipe.image, ingredientsRaw: scaledIngredientsRaw, stepsRaw: recipe.stepsRaw,
        cookingTime: recipe.cookingTime, difficulty: recipe.difficulty, cuisine: recipe.cuisine,
        dietType: recipe.dietType, category: recipe.category, subCategory: recipe.subCategory,
        baseServings: recipe.baseServings, requestedMembers: selectedMembers, scaleFactor: scale
      }
    });
  } catch (error) {
    console.error('Error in cookRecipe:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/meal-suggestions/add-to-shopping
const addToShoppingList = async (req, res) => {
  try {
    const { missingIngredients } = req.body;
    const userId = req.user._id || req.user.id;
    if (!missingIngredients || missingIngredients.length === 0) {
      return res.status(400).json({ success: false, message: 'No missing ingredients to add' });
    }

    let shoppingList = await ShoppingList.findOne({ userId });
    if (!shoppingList) shoppingList = new ShoppingList({ userId, items: [] });

    const addedItems = [];
    const alreadyExist = [];

    for (const ingredient of missingIngredients) {
      if (!isValidIngredient(ingredient)) continue;
      const existingItem = shoppingList.items.find(item => item.name?.toLowerCase() === ingredient.toLowerCase() && !item.purchased);
      if (existingItem) {
        alreadyExist.push(ingredient);
      } else {
        const category = getIngredientCategory(ingredient);
        shoppingList.items.push({ name: ingredient, quantity: 1, unit: 'pieces', category, fromPantry: false, purchased: false, source: 'meal-suggestion' });
        addedItems.push(ingredient);
      }
    }
    await shoppingList.save();

    res.json({ success: true, message: `Added ${addedItems.length} items`, addedItems, alreadyExist });
  } catch (error) {
    console.error('Error adding to shopping list:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/meal-suggestions/cooking-log/:date
const getCookingLogByDate = async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;
    const { date } = req.params;
    const cookingLog = await CookingLog.findOne({ userId, date });
    const isNoCookingDay = cookingLog?.isComplete === true && (!cookingLog?.meals || cookingLog.meals.length === 0);
    res.json({ success: true, date, meals: cookingLog?.meals || [], isComplete: cookingLog?.isComplete || false, isNoCookingDay });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/meal-suggestions/cooking-log
const addToCookingLog = async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;
    const { date, recipeId, recipeName, members, noCooking } = req.body;
    const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
    let cookingLog = await CookingLog.findOne({ userId, date });
    if (!cookingLog) cookingLog = new CookingLog({ userId, date, dayName, meals: [] });
    
    if (noCooking) {
      cookingLog.isComplete = true;
      cookingLog.meals = [];
      await cookingLog.save();
      return res.json({ success: true, message: 'Marked as no cooking day', isNoCookingDay: true });
    }
    cookingLog.meals.push({ recipeId, recipeName, members: parseInt(members), ingredientsUsed: [] });
    cookingLog.isComplete = false;
    await cookingLog.save();
    res.json({ success: true, message: 'Meal added successfully', cookingLog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PUT /api/meal-suggestions/cooking-log/:date/meal/:mealId
const updateCookingLogMeal = async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;
    const { date, mealId } = req.params;
    const { recipeId, recipeName, members } = req.body;
    const cookingLog = await CookingLog.findOne({ userId, date });
    if (!cookingLog) return res.status(404).json({ success: false, message: 'Log not found' });
    const meal = cookingLog.meals.id(mealId);
    if (!meal) return res.status(404).json({ success: false, message: 'Meal not found' });
    if (recipeId) meal.recipeId = recipeId;
    if (recipeName) meal.recipeName = recipeName;
    if (members) meal.members = parseInt(members);
    cookingLog.isComplete = false;
    await cookingLog.save();
    res.json({ success: true, message: 'Meal updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE /api/meal-suggestions/cooking-log/:date/meal/:mealId
const deleteCookingLogMeal = async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;
    const { date, mealId } = req.params;
    const cookingLog = await CookingLog.findOne({ userId, date });
    if (!cookingLog) return res.status(404).json({ success: false, message: 'Log not found' });
    cookingLog.meals = cookingLog.meals.filter(m => m._id.toString() !== mealId);
    if (cookingLog.meals.length === 0 && cookingLog.isComplete !== true) cookingLog.isComplete = false;
    await cookingLog.save();
    res.json({ success: true, message: 'Meal deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/meal-suggestions/cooking-log/month
const getMonthHistory = async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;
    const cookingLogs = await CookingLog.find({ userId }).sort({ date: -1 });
    const meals = [];
    for (const log of cookingLogs) {
      for (const meal of log.meals) {
        meals.push({ date: log.date, dayName: log.dayName, recipeName: meal.recipeName, members: meal.members, recipeId: meal.recipeId });
      }
    }
    res.json({ success: true, meals, total: meals.length });
  } catch (error) {
    console.error('Error fetching month history:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getMealSuggestions,
  addToShoppingList,
  cookRecipe,
  getCookingLogByDate,
  addToCookingLog,
  updateCookingLogMeal,
  deleteCookingLogMeal,
  getMonthHistory
};