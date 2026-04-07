const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const {
  getContactContent,
  updateContactContent,
  submitMessage,
  getAllMessages,
  getMessage,
  updateMessageStatus,
  deleteMessage,
} = require('../controllers/contactController');

// Public routes
router.get('/content', getContactContent);
router.post('/message', submitMessage);

// Admin only routes
router.put('/content', protect, adminOnly, updateContactContent);
router.get('/messages', protect, adminOnly, getAllMessages);
router.get('/message/:id', protect, adminOnly, getMessage);
router.put('/message/:id/status', protect, adminOnly, updateMessageStatus);
router.delete('/message/:id', protect, adminOnly, deleteMessage);

module.exports = router;