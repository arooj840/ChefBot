const Recipe = require('../models/Recipe');

// ============================================================
// RECIPE CONTROLLER - ChefBot FYP
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
// Query params: category, subCategory, cuisine, isVegetarian, page, limit
// ─────────────────────────────────────────────────────────
const getAllRecipes = async (req, res) => {
  try {
    const {
      category, subCategory, cuisine,
      isVegetarian, page = 1, limit = 20,
    } = req.query;

    const filter = { isActive: true };
    if (category) filter.category = category;
    if (subCategory) filter.subCategory = subCategory;
    if (cuisine) filter.cuisine = cuisine;
    if (isVegetarian !== undefined) filter.isVegetarian = isVegetarian === 'true';

    const skip = (page - 1) * limit;

    const recipes = await Recipe.find(filter)
      .select('title tagline image category subCategory cuisine isVegetarian')
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Recipe.countDocuments(filter);

    res.status(200).json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      recipes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─────────────────────────────────────────────────────────
// @desc    Get single recipe by ID
// @route   GET /api/recipes/:id
// @access  Public
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
// ─────────────────────────────────────────────────────────
const searchRecipes = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(400).json({ message: 'Search query is required' });

    const recipes = await Recipe.find({
      isActive: true,
      $text: { $search: q },
    }).select('title tagline image category subCategory');

    res.status(200).json({ total: recipes.length, recipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─────────────────────────────────────────────────────────
// @desc    Get recipes by pantry keywords
// @route   GET /api/recipes/pantry?keywords=egg,milk,flour
// @access  Public
// ─────────────────────────────────────────────────────────
const getRecipesByPantry = async (req, res) => {
  try {
    const { keywords } = req.query;
    if (!keywords) return res.status(400).json({ message: 'Keywords are required' });

    const keywordArray = keywords.split(',').map((k) => k.trim().toLowerCase());

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
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.status(200).json({ message: 'Recipe updated', recipe });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ─────────────────────────────────────────────────────────
// @desc    Delete recipe (soft delete)
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
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
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
  updateRecipe,
  deleteRecipe,
};