const Recipe = require('../models/Recipe');

// ============================================================
// RECIPE CONTROLLER - ChefBot FYP
// All 34 frontend pages covered
// ============================================================

// ─────────────────────────────────────────────────────────
// @desc    Add new recipe
// @route   POST /api/recipes
// @access  Private (Admin only)
// ─────────────────────────────────────────────────────────
const addRecipe = async (req, res) => {
  try {
    const recipe = new Recipe({
      ...req.body,
      createdBy: req.user._id,
    });

    const saved = await recipe.save();
    res.status(201).json({ message: 'Recipe added successfully', recipe: saved });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ─────────────────────────────────────────────────────────
// @desc    Get all recipes (with optional filters)
// @route   GET /api/recipes
// @access  Public
// Query params:
//   category       - e.g. BBQ, HeavyGravy, CheatMeal, Vegetarian
//   subCategory    - e.g. Tikka, Nihari, Burger, EggCurry, FishFry
//   cuisine        - e.g. Pakistani, Chinese, Italian
//   isVegetarian   - true/false
//   isHalal        - true/false
//   difficulty     - Easy/Medium/Hard
//   mealTime       - Breakfast/Lunch/Dinner/Snack/Anytime
//   isFeatured     - true/false
//   page, limit    - pagination
// ─────────────────────────────────────────────────────────
const getAllRecipes = async (req, res) => {
  try {
    const {
      category,
      subCategory,
      cuisine,
      isVegetarian,
      isHalal,
      difficulty,
      mealTime,
      isFeatured,
      page = 1,
      limit = 20,
    } = req.query;

    const filter = { isActive: true };

    if (category)     filter.category    = category;
    if (subCategory)  filter.subCategory = subCategory;
    if (cuisine)      filter.cuisine     = cuisine;
    if (difficulty)   filter.difficulty  = difficulty;
    if (mealTime)     filter.mealTime    = mealTime;

    if (isVegetarian !== undefined) filter.isVegetarian = isVegetarian === 'true';
    if (isHalal      !== undefined) filter.isHalal      = isHalal      === 'true';
    if (isFeatured   !== undefined) filter.isFeatured   = isFeatured   === 'true';

    const skip = (Number(page) - 1) * Number(limit);

    const recipes = await Recipe.find(filter)
      .select('title tagline image category subCategory cuisine difficulty mealTime isVegetarian isHalal isFeatured cookingTime servings')
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Recipe.countDocuments(filter);

    res.status(200).json({
      total,
      page:  Number(page),
      pages: Math.ceil(total / Number(limit)),
      recipes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─────────────────────────────────────────────────────────
// @desc    Get single recipe by ID (full details)
// @route   GET /api/recipes/:id
// @access  Public
// Returns: full recipe including ingredientsRaw, stepsRaw, voiceUrl
// Used by: recipe detail modal in ALL frontend pages
// ─────────────────────────────────────────────────────────
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe || !recipe.isActive) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─────────────────────────────────────────────────────────
// @desc    Search recipes by title or tagline
// @route   GET /api/recipes/search?q=biryani
// @access  Public
// Uses MongoDB text index on title + tagline fields
// ─────────────────────────────────────────────────────────
const searchRecipes = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const recipes = await Recipe.find({
      isActive: true,
      $text: { $search: q },
    }).select('title tagline image category subCategory cuisine isVegetarian');

    res.status(200).json({ total: recipes.length, recipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─────────────────────────────────────────────────────────
// @desc    Get recipes by pantry keywords
// @route   GET /api/recipes/pantry?keywords=egg,milk,flour
// @access  Public
// Used by: RecipeCheatMeal.jsx pantry suggestion feature
// ─────────────────────────────────────────────────────────
const getRecipesByPantry = async (req, res) => {
  try {
    const { keywords } = req.query;

    if (!keywords) {
      return res.status(400).json({ message: 'Keywords are required' });
    }

    const keywordArray = keywords
      .split(',')
      .map((k) => k.trim().toLowerCase())
      .filter(Boolean);

    const recipes = await Recipe.find({
      isActive: true,
      pantryKeywords: { $in: keywordArray },
    }).select('title tagline image category subCategory pantryKeywords');

    res.status(200).json({ total: recipes.length, recipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─────────────────────────────────────────────────────────
// @desc    Get recipes by category
// @route   GET /api/recipes/category/:category
// @access  Public
// Used by: RecipeFeature.jsx category navigation
// e.g. /api/recipes/category/BBQ
//      /api/recipes/category/HeavyGravy
//      /api/recipes/category/CheatMeal
// ─────────────────────────────────────────────────────────
const getRecipesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { page = 1, limit = 20 } = req.query;

    const skip = (Number(page) - 1) * Number(limit);

    const recipes = await Recipe.find({ isActive: true, category })
      .select('title tagline image category subCategory cuisine isVegetarian cookingTime difficulty')
      .skip(skip)
      .limit(Number(limit))
      .sort({ isFeatured: -1, createdAt: -1 });

    const total = await Recipe.countDocuments({ isActive: true, category });

    res.status(200).json({
      total,
      page:  Number(page),
      pages: Math.ceil(total / Number(limit)),
      recipes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─────────────────────────────────────────────────────────
// @desc    Get recipes by subCategory
// @route   GET /api/recipes/subcategory/:subCategory
// @access  Public
// Used by: sub-pages like RecipesBBQ, RecipesEggDishes etc.
// e.g. /api/recipes/subcategory/Tikka
//      /api/recipes/subcategory/EggCurry
//      /api/recipes/subcategory/FishFry
//      /api/recipes/subcategory/Nihari
// ─────────────────────────────────────────────────────────
const getRecipesBySubCategory = async (req, res) => {
  try {
    const { subCategory } = req.params;
    const { page = 1, limit = 20 } = req.query;

    const skip = (Number(page) - 1) * Number(limit);

    const recipes = await Recipe.find({ isActive: true, subCategory })
      .select('title tagline image category subCategory cuisine isVegetarian cookingTime difficulty')
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Recipe.countDocuments({ isActive: true, subCategory });

    res.status(200).json({
      total,
      page:  Number(page),
      pages: Math.ceil(total / Number(limit)),
      recipes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─────────────────────────────────────────────────────────
// @desc    Get featured recipes
// @route   GET /api/recipes/featured
// @access  Public
// Used by: RecipeFeature.jsx homepage featured section
// ─────────────────────────────────────────────────────────
const getFeaturedRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ isActive: true, isFeatured: true })
      .select('title tagline image category subCategory cuisine isVegetarian cookingTime difficulty')
      .limit(12)
      .sort({ createdAt: -1 });

    res.status(200).json({ total: recipes.length, recipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─────────────────────────────────────────────────────────
// @desc    Get recipes by cuisine
// @route   GET /api/recipes/cuisine/:cuisine
// @access  Public
// Used by: RecipeRegionalPage.jsx
// e.g. /api/recipes/cuisine/Pakistani  → 30 recipes
//      /api/recipes/cuisine/Chinese    → 20 recipes
//      /api/recipes/cuisine/Italian    → 20 recipes
// ─────────────────────────────────────────────────────────
const getRecipesByCuisine = async (req, res) => {
  try {
    const { cuisine } = req.params;
    const { page = 1, limit = 20 } = req.query;

    const skip = (Number(page) - 1) * Number(limit);

    const recipes = await Recipe.find({ isActive: true, cuisine })
      .select('title tagline image category subCategory cuisine isVegetarian cookingTime difficulty')
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Recipe.countDocuments({ isActive: true, cuisine });

    res.status(200).json({
      total,
      page:  Number(page),
      pages: Math.ceil(total / Number(limit)),
      recipes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─────────────────────────────────────────────────────────
// @desc    Update recipe
// @route   PUT /api/recipes/:id
// @access  Private (Admin only)
// ─────────────────────────────────────────────────────────
const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json({ message: 'Recipe updated successfully', recipe });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ─────────────────────────────────────────────────────────
// @desc    Delete recipe (soft delete - isActive = false)
// @route   DELETE /api/recipes/:id
// @access  Private (Admin only)
// ─────────────────────────────────────────────────────────
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addRecipe,
  getAllRecipes,
  getRecipeById,
  searchRecipes,
  getRecipesByPantry,
  getRecipesByCategory,
  getRecipesBySubCategory,
  getFeaturedRecipes,
  getRecipesByCuisine,
  updateRecipe,
  deleteRecipe,
};