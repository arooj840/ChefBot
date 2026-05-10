const express = require('express');
const router = express.Router();
const {
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
} = require('../controllers/recipeController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// ─────────────────────────────────────────────────────────
// PUBLIC ROUTES
// IMPORTANT: Specific routes pehle likhni hain — /:id se pehle
// Warna Express "featured", "search" etc. ko ID samajh leta hai
// ─────────────────────────────────────────────────────────

// GET /api/recipes/search?q=biryani
router.get('/search', searchRecipes);

// GET /api/recipes/pantry?keywords=egg,milk,flour
router.get('/pantry', getRecipesByPantry);

// GET /api/recipes/featured
router.get('/featured', getFeaturedRecipes);

// GET /api/recipes/category/BBQ
router.get('/category/:category', getRecipesByCategory);

// GET /api/recipes/subcategory/Tikka
router.get('/subcategory/:subCategory', getRecipesBySubCategory);

// GET /api/recipes/cuisine/Pakistani
router.get('/cuisine/:cuisine', getRecipesByCuisine);

// GET /api/recipes  (with optional filters)
router.get('/', getAllRecipes);

// GET /api/recipes/:id  (single recipe - yeh HAMESHA last honi chahiye)
// ✅ FIX: Duplicate route hata diya — sirf ek hi /:id route hai
router.get('/:id', getRecipeById);

// ─────────────────────────────────────────────────────────
// PRIVATE ROUTES (Admin only)
// ─────────────────────────────────────────────────────────

// POST   /api/recipes        → add new recipe
router.post('/', protect, adminOnly, addRecipe);

// PUT    /api/recipes/:id    → update recipe
router.put('/:id', protect, adminOnly, updateRecipe);

// DELETE /api/recipes/:id    → soft delete
router.delete('/:id', protect, adminOnly, deleteRecipe);

module.exports = router;