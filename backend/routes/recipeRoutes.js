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

// GET /api/recipes/search?q=biryani
// Used by: search bar in all pages
router.get('/search', searchRecipes);

// GET /api/recipes/pantry?keywords=egg,milk,flour

router.get('/pantry', getRecipesByPantry);

// GET /api/recipes/featured

router.get('/featured', getFeaturedRecipes);

// GET /api/recipes/category/BBQ
// GET /api/recipes/category/HeavyGravy
// GET /api/recipes/category/CheatMeal
// GET /api/recipes/category/Vegetarian
// GET /api/recipes/category/Breads
// GET /api/recipes/category/LightDinner

router.get('/category/:category', getRecipesByCategory);

// GET /api/recipes/subcategory/Tikka
// GET /api/recipes/subcategory/Nihari
// GET /api/recipes/subcategory/EggCurry
// GET /api/recipes/subcategory/FishFry
// GET /api/recipes/subcategory/Burger
// GET /api/recipes/subcategory/ChickenDal
// GET /api/recipes/subcategory/MuttonDal
// GET /api/recipes/subcategory/Dal
// GET /api/recipes/subcategory/Keema

router.get('/subcategory/:subCategory', getRecipesBySubCategory);

// GET /api/recipes/cuisine/Pakistani
// GET /api/recipes/cuisine/Chinese
// GET /api/recipes/cuisine/Italian
// GET /api/recipes/cuisine/Turkish
// GET /api/recipes/cuisine/Continental

router.get('/cuisine/:cuisine', getRecipesByCuisine);

// GET /api/recipes
// GET /api/recipes?category=BBQ&page=1&limit=20
// GET /api/recipes?subCategory=Tikka&cuisine=Pakistani
// GET /api/recipes?isVegetarian=true&difficulty=Easy
// GET /api/recipes?mealTime=Dinner&isFeatured=true
// Used by: general filtering across all pages
router.get('/', getAllRecipes);

// GET /api/recipes/:id
router.get('/:id', getRecipeById);

// ─────────────────────────────────────────────────────────
// PRIVATE ROUTES (Admin only)
// ─────────────────────────────────────────────────────────

// POST   /api/recipes        → add new recipe
// PUT    /api/recipes/:id    → update recipe
// DELETE /api/recipes/:id    → soft delete (isActive = false)

router.post('/',      protect, adminOnly, addRecipe);
router.put('/:id',    protect, adminOnly, updateRecipe);
router.delete('/:id', protect, adminOnly, deleteRecipe);

module.exports = router;