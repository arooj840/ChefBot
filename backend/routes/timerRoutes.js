const express = require('express');
const router  = express.Router();
const {
  createTimer,
  getUserTimers,
  getActiveTimers,
  completeTimer,
  deleteTimer,
} = require('../controllers/timerController');

const { protect } = require('../middleware/authMiddleware');

// Saare timer routes protected hain — login zaroori hai
router.post('/',               protect, createTimer);
router.get('/',                protect, getUserTimers);
router.get('/active',         protect, getActiveTimers);
router.put('/:id/complete',   protect, completeTimer);
router.delete('/:id',         protect, deleteTimer);

module.exports = router;