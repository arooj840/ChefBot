// ============================================================
// routes/mealplan.js
// ============================================================

const express    = require('express');
const router     = express.Router();
const { generateMealPlan, saveMealPlan } = require('../controllers/mealplanController');

// Agar aapke paas auth middleware hai toh use karo
const { protect } = require('../middleware/authMiddleware');

router.get('/generate', protect, generateMealPlan);
router.post('/save', protect, saveMealPlan);

// GET /api/mealplan/generate
// Query params: dietType, allergy, ageGroup, budget, familyCount, duration, pantry
router.get('/generate', generateMealPlan);

// POST /api/mealplan/save
router.post('/save', saveMealPlan);

module.exports = router;