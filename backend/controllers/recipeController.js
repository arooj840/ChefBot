const Recipe = require('../models/Recipe');

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
// ─────────────────────────────────────────────────────────
const getAllRecipes = async (req, res) => {
  try {
    const {
      category, subCategory, cuisine, isVegetarian, isHalal,
      difficulty, mealTime, isFeatured, page = 1, limit = 20,
    } = req.query;

    const filter = { isActive: true };

    if (category)    filter.category    = category;
    if (subCategory) filter.subCategory = subCategory;
    if (cuisine)     filter.cuisine     = cuisine;
    if (difficulty)  filter.difficulty  = difficulty;
    if (mealTime)    filter.mealTime    = mealTime;

    if (isVegetarian !== undefined) filter.isVegetarian = isVegetarian === 'true';
    if (isHalal      !== undefined) filter.isHalal      = isHalal      === 'true';
    if (isFeatured   !== undefined) filter.isFeatured   = isFeatured   === 'true';

    const skip = (Number(page) - 1) * Number(limit);

    const recipes = await Recipe.find(filter)
      .select('title name tagline image category subCategory cuisine difficulty mealTime isVegetarian isHalal isFeatured cookingTime servings')
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
// @desc    Get single recipe by ID (full details + scaling)
// @route   GET /api/recipes/:id
// @access  Public
// ─────────────────────────────────────────────────────────
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).lean();

    if (!recipe || !recipe.isActive) {
      return res.status(404).json({ success: false, message: 'Recipe not found' });
    }

    const members = parseInt(req.query.members) || 4;
    const scaleFactor = members / (recipe.baseServings || 4);

    // Scale ingredientsRaw if needed
    let scaledIngredients = recipe.ingredientsRaw || [];
    if (scaleFactor !== 1) {
      scaledIngredients = scaledIngredients.map(ing => {
        const match = ing.match(/^(\d+)(.*)/);
        if (match) {
          let qty = parseInt(match[1]) * scaleFactor;
          const newQty = Number.isInteger(qty) ? qty : qty.toFixed(1);
          return newQty + match[2];
        }
        return ing;
      });
    }

    res.json({
      success: true,
      _id: recipe._id,
      // ✅ both name and title send karo
      title: recipe.title,
      name: recipe.name || recipe.title,
      tagline: recipe.tagline,
      image: recipe.image,
      ingredientsRaw: scaledIngredients,
      stepsRaw: recipe.stepsRaw,
      cookingTime: recipe.cookingTime,
      difficulty: recipe.difficulty,
      cuisine: recipe.cuisine,
      dietType: recipe.dietType,
      category: recipe.category,
      baseServings: recipe.baseServings,
      requestedMembers: members,
      scaleFactor: scaleFactor
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
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

    if (!q) {
      return res.status(400).json({ success: false, message: 'Search query is required' });
    }

    // Try text search first, fallback to regex if no text index
    let recipes = [];
    try {
      recipes = await Recipe.find({
        isActive: true,
        $text: { $search: q },
      }).select('title name tagline image category cuisine dietType isVegetarian allergens');
    } catch (e) {
      // Fallback: regex search if text index not available
      recipes = await Recipe.find({
        isActive: true,
        $or: [
          { title: { $regex: q, $options: 'i' } },
          { name:  { $regex: q, $options: 'i' } },
          { tagline: { $regex: q, $options: 'i' } },
        ]
      }).select('title name tagline image category cuisine dietType isVegetarian allergens').limit(20);
    }

    // ✅ FIX: success:true add kiya, name field ensure kiya
    const formatted = recipes.map(r => {
      const obj = r.toObject ? r.toObject() : r;
      return {
        ...obj,
        name: obj.name || obj.title,   // frontend name field expect karta hai
        title: obj.title || obj.name,
      };
    });

    res.status(200).json({
      success: true,
      total: formatted.length,
      recipes: formatted
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
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
    }).select('title name tagline image category subCategory pantryKeywords');

    res.status(200).json({ success: true, total: recipes.length, recipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─────────────────────────────────────────────────────────
// @desc    Get recipes by category
// @route   GET /api/recipes/category/:category
// @access  Public
// ─────────────────────────────────────────────────────────
const getRecipesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const recipes = await Recipe.find({ isActive: true, category })
      .select('title name tagline image category subCategory cuisine isVegetarian cookingTime difficulty')
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
// ─────────────────────────────────────────────────────────
const getRecipesBySubCategory = async (req, res) => {
  try {
    const { subCategory } = req.params;
    const { page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const recipes = await Recipe.find({ isActive: true, subCategory })
      .select('title name tagline image category subCategory cuisine isVegetarian cookingTime difficulty')
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
// ─────────────────────────────────────────────────────────
const getFeaturedRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ isActive: true, isFeatured: true })
      .select('title name tagline image category subCategory cuisine isVegetarian cookingTime difficulty')
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
// ─────────────────────────────────────────────────────────
const getRecipesByCuisine = async (req, res) => {
  try {
    const { cuisine } = req.params;
    const { page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const recipes = await Recipe.find({ isActive: true, cuisine })
      .select('title name tagline image category subCategory cuisine isVegetarian cookingTime difficulty')
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