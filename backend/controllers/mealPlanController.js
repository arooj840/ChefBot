const Recipe = require('../models/Recipe');
const MealPlan = require('../models/MealPlan');
const mongoose = require('mongoose');   // ObjectId generate karne ke liye

// Helper: random item from array
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate Meal Plan
exports.generateMealPlan = async (req, res) => {
  try {
    const { duration, dietType, allergies, budget, planningMode, pantryItems, familyMembers } = req.body;

    let filter = { isActive: true };

    if (dietType === 'veg') filter.isVegetarian = true;
    else if (dietType === 'non-veg') filter.isVegetarian = false;

    if (allergies && allergies.length) {
      const allergyRegex = allergies.map(a => new RegExp(a, 'i'));
      filter.ingredientsRaw = { $nin: allergyRegex };
    }

    if (planningMode === 'pantry' && pantryItems && pantryItems.length) {
      filter.pantryKeywords = { $in: pantryItems.map(p => new RegExp(p, 'i')) };
    }

    let recipes = await Recipe.find(filter).limit(100);
    if (recipes.length === 0) {
      recipes = await Recipe.find({ isActive: true }).limit(100);
    }

    const meals = ['breakfast', 'lunch', 'dinner'];
    const plan = {};

    const getRandomRecipe = () => {
      const recipe = randomItem(recipes);
      return {
        _id: recipe._id,
        name: recipe.title,
        image: recipe.image,
        available: true,
        tagline: recipe.tagline
      };
    };

    if (duration === 'daily') {
      const todayIndex = new Date().getDay();
      const dayIndex = todayIndex === 0 ? 6 : todayIndex - 1;
      plan[dayIndex] = {};
      meals.forEach(meal => { plan[dayIndex][meal] = getRandomRecipe(); });
    } else {
      for (let i = 0; i < 7; i++) {
        plan[i] = {};
        meals.forEach(meal => { plan[i][meal] = getRandomRecipe(); });
      }
    }

    res.json({ success: true, plan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Save Meal Plan API 
exports.saveMealPlan = async (req, res) => {
  try {
    const { name, duration, preferences, plan } = req.body;
    
    // 🔧 FIX: Agar user login hai to real ID lo, nahi to valid ObjectId generate karo
    let userId = req.user?._id;
    if (!userId) {
      // Dummy ObjectId generate karo (string ki jagah)
      userId = new mongoose.Types.ObjectId();
    }
    
    const newPlan = new MealPlan({
      userId,
      name: name || 'My Meal Plan',
      duration: duration || 'weekly',
      preferences: preferences || {},
      plan: plan || {},
      isActive: true
    });
    
    await newPlan.save();
    res.json({ 
      success: true, 
      message: 'Plan saved successfully', 
      planId: newPlan._id 
    });
  } catch (error) {
    console.error('Save plan error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};