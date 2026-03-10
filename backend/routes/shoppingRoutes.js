const express = require('express');
const router = express.Router();
const { 
  getShoppingItems, 
  addShoppingItem, 
  updateShoppingItem, 
  markAsPurchased,
  deleteShoppingItem 
} = require('../controllers/shoppingController');
const { protect } = require('../middleware/authMiddleware');

// Get all shopping items
router.get('/', protect, getShoppingItems);

// Add new item
router.post('/', protect, addShoppingItem);

// Update item
router.put('/:itemId', protect, updateShoppingItem);

// Mark as purchased
router.patch('/:itemId/purchased', protect, markAsPurchased);

// Delete item
router.delete('/:itemId', protect, deleteShoppingItem);

module.exports = router;