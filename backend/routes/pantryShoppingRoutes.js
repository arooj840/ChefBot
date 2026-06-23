const express = require('express');
const router = express.Router();
const {
  getPantryShoppingList,
  addToPantryShoppingList,
  removeFromPantryShoppingList,
  clearPantryShoppingList
} = require('../controllers/pantryShoppingController');
const { protect } = require('../middleware/authMiddleware');

// GET  — fetch entire list
router.get('/', protect, getPantryShoppingList);

// POST — add one item
router.post('/', protect, addToPantryShoppingList);

// DELETE /:itemId — remove single item
router.delete('/:itemId', protect, removeFromPantryShoppingList);

// DELETE / — clear entire list
router.delete('/', protect, clearPantryShoppingList);

module.exports = router;