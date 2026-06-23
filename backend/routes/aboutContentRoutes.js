const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const {
  getAboutContent,
  updateAboutContent,
} = require('../controllers/aboutContentController');

// Public route
router.get('/', getAboutContent);

// Admin only route - FIXED: ensure updateAboutContent is defined
router.put('/', protect, adminOnly, updateAboutContent);

module.exports = router;