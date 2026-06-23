const express = require('express');
const router = express.Router();
const {
  generateTodayReport,
  getUserReports,
  getReportByDate,
  getAllReportsAdmin
} = require('../controllers/DailyReportController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// User routes (protected)
router.post('/generate', protect, generateTodayReport);
router.get('/my-reports', protect, getUserReports);
router.get('/my-report/:date', protect, getReportByDate);

// Admin route
router.get('/admin/all', protect, adminOnly, getAllReportsAdmin);

module.exports = router;