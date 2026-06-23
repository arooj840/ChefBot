const express = require('express');
const router = express.Router();
const { getPantryItems, addPantryItem, updatePantryItem, deletePantryItem } = require('../controllers/pantryController');
const { protect } = require('../middleware/authMiddleware');

// Get all pantry items
router.get('/', protect, getPantryItems);

// Add new item
router.post('/', protect, addPantryItem);

// Update item
router.put('/:itemId', protect, updatePantryItem);

// Delete item
router.delete('/:itemId', protect, deletePantryItem);

module.exports = router;