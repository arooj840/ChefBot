




const express = require('express');
const router = express.Router();
const { generateMealPlan, saveMealPlan } = require('../controllers/mealPlanController');

router.post('/generate', generateMealPlan);
router.post('/save', saveMealPlan);

module.exports = router;



