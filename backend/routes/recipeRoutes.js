const express = require('express');
const router = express.Router();
const {
  addRecipe,
  getAllRecipes,
  getRecipeById,
  searchRecipes,
  getRecipesByPantry,
  updateRecipe,
  deleteRecipe,
} = require('../controllers/recipeController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// ─────────────────────────────────────────────────────────
// PUBLIC ROUTES
// ─────────────────────────────────────────────────────────

// GET /api/recipes               → get all recipes (with filters)
// GET /api/recipes/search?q=...  → search by name/tagline
// GET /api/recipes/pantry?keywords=egg,milk → pantry-based suggestions
// GET /api/recipes/:id           → get one recipe

router.get('/search', searchRecipes);
router.get('/pantry', getRecipesByPantry);
router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);

// ─────────────────────────────────────────────────────────
// PRIVATE ROUTES (Admin only)
// ─────────────────────────────────────────────────────────

// POST   /api/recipes      → add recipe
// PUT    /api/recipes/:id  → update recipe
// DELETE /api/recipes/:id  → delete recipe

router.post('/', protect, adminOnly, addRecipe);
router.put('/:id', protect, adminOnly, updateRecipe);
router.delete('/:id', protect, adminOnly, deleteRecipe);

module.exports = router;