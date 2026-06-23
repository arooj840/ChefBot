const mongoose = require('mongoose');

// ─────────────────────────────────────────────────────────
// INGREDIENT SUB-DOCUMENT
// ─────────────────────────────────────────────────────────
const ingredientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    quantity: { type: String, default: '' },
    unit: { type: String, default: '' },
  },
  { _id: false }
);

// ─────────────────────────────────────────────────────────
// STEP SUB-DOCUMENT
// ─────────────────────────────────────────────────────────
const stepSchema = new mongoose.Schema(
  {
    stepNumber: { type: Number, required: true },
    instruction: { type: String, required: true, trim: true },
  },
  { _id: false }
);

// ─────────────────────────────────────────────────────────
// MAIN RECIPE SCHEMA (DUPLICATES REMOVED)
// ─────────────────────────────────────────────────────────
const recipeSchema = new mongoose.Schema(
  {
    // ────────── BASIC INFO ──────────
    title: { type: String, required: true, unique: true, trim: true },
    tagline: { type: String, trim: true, default: '' },
    description: { type: String, default: '' },
    image: { type: String, default: '' },

    // ────────── INGREDIENTS & STEPS ──────────
    ingredientsRaw: { type: [String], default: [] },
    stepsRaw: { type: [String], default: [] },
    ingredients: { type: [ingredientSchema], default: [] },
    steps: { type: [stepSchema], default: [] },
    voiceUrl: { type: String, default: '' },

    // ────────── CATEGORY (Meal Time: Lunch/Dinner/Breakfast) ──────────
    category: {
  type: String,
  required: true,
  enum: ['Breakfast', 'Lunch', 'Dinner', 'LightDinner', 'Snacks', 'Anytime'],
  default: 'Lunch'
},

    // ────────── SUB-CATEGORY (Recipe Type: Egg/Chicken/Rice/Vegetables) ──────────
   subCategory: {
  type: String,
  enum: [
    'plain-vegetables',
    'veg-mutton',
    'veg-chicken',
    'pure-mutton',
    'pure-chicken',
    'rice',
    'baking',
    'beverages',
    'breakfast',
    'desserts',
    'quick',
    'regional',
    'cheat-meal',
    'salads',
    'bbq',
    'bread',
    'dal-chicken',
    'appetizers',
    'plain-dal',
    'egg-dishes',
    'fish-dish',
    'heavy-gravy',
    'student',
    'qeema',
    'light-dinner',
    'soups',
    'snacks',
    'dal-mutton',
  ],
  default: 'other',
},
    // ────────── CUISINE ──────────
    cuisine: {
      type: String,
      enum: [
        'Pakistani', 'pakistani', 'Continental', 'continental',
        'Chinese', 'chinese', 'Italian', 'italian', 'Turkish', 'turkish'
      ],
      default: 'Pakistani',
    },

    // ────────── BEVERAGE CATEGORY ──────────
    beverageCategory: {
      type: String,
      enum: ['Hot Drinks', 'hot drinks', 'Cold Drinks', 'cold drinks', 'Smoothies', 'smoothies', 'Mocktails', 'mocktails', 'Cocktails', 'cocktails', 'Traditional', 'traditional', null],
      default: null,
    },

    // ────────── PANTRY KEYWORDS ──────────
    pantryKeywords: { type: [String], default: [] },

    // ────────── DIETARY (SINGLE FIELD - NO DUPLICATE) ──────────
    dietType: {
      type: String,
      enum: ['Vegetarian', 'Non-Vegetarian', 'Mixed'],
      default: 'Non-Vegetarian'
    },
    isHalal: { type: Boolean, default: true },

    // ────────── COOKING INFO ──────────
    cookingTime: { type: Number, default: null },
    difficulty: {
      type: String,
      enum: ['Easy', 'easy', 'Medium', 'medium', 'Hard', 'hard'],
      default: 'Medium',
    },
    
    // ────────── MEAL TYPE (SINGLE FIELD - Lunch/Dinner/Breakfast) ──────────
    suitableForMeals: {
      type: [String],
      enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Appetizer', 'Dessert','Anytime'],
      default: ['Lunch', 'Dinner']
    },
    
    // ────────── ALLERGENS ──────────
    allergens: {
      type: [String],
      enum: ['dairy', 'nuts', 'eggs', 'soy', 'wheat', 'fish', 'shellfish', 'gluten', 'peanuts', 'none'],
      default: []
    },
    
    // ────────── BUDGET ──────────
    budget: {
      type: String,
      enum: ['economy', 'standard', 'premium', 'deluxe'],
      default: 'standard',
    },
    costPerServing: { type: Number, default: 0 },
    
    // ────────── BASE SERVINGS (SINGLE FIELD - for scaling) ──────────
    baseServings: { type: Number, default: 4 },
    calories: { type: Number, default: 0 },

    // ────────── TARGET AUDIENCE ──────────
    ageGroup: {
      type: [String],
      enum: ['toddlers', 'kids', 'preteens', 'teens', 'adults', 'seniors'],
      default: ['adults'],
    },
    patientFriendly: {
      type: [String],
      enum: ['general', 'diabetes', 'heart', 'bp', 'lowsalt', 'lowfat', 'kidney'],
      default: ['general'],
    },

    // ────────── SEARCH KEYWORDS ──────────
    searchKeywords: { type: [String], default: [] },

    // ────────── ADMIN FIELDS ──────────
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    isActive: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    averageRating: { type: Number, default: 0, min: 0, max: 5 },
    totalRatings: { type: Number, default: 0 },
    
    // ────────── USAGE STATS ──────────
    timesSuggested: { type: Number, default: 0 },
    timesUsedInPlans: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// ────────── INDEXES ──────────
recipeSchema.index({ title: 'text', tagline: 'text', description: 'text' });
recipeSchema.index({ category: 1 });
recipeSchema.index({ subCategory: 1 });
recipeSchema.index({ cuisine: 1 });
recipeSchema.index({ dietType: 1 });
recipeSchema.index({ pantryKeywords: 1 });
recipeSchema.index({ suitableForMeals: 1 });
recipeSchema.index({ difficulty: 1 });
recipeSchema.index({ budget: 1 });
recipeSchema.index({ ageGroup: 1 });
recipeSchema.index({ patientFriendly: 1 });
recipeSchema.index({ allergens: 1 });
recipeSchema.index({ baseServings: 1 });
recipeSchema.index({ isActive: 1 });
recipeSchema.index({ isFeatured: 1 });
recipeSchema.index({ cookingTime: 1 });
recipeSchema.index({ timesSuggested: 1 });

// ────────── VIRTUAL for formatted cooking time ──────────
recipeSchema.virtual('cookingTimeFormatted').get(function() {
  if (!this.cookingTime) return null;
  const hours = Math.floor(this.cookingTime / 60);
  const minutes = this.cookingTime % 60;
  if (hours === 0) return `${minutes} min`;
  if (minutes === 0) return `${hours} hr`;
  return `${hours} hr ${minutes} min`;
});

// ────────── METHOD to convert raw ingredients to structured format ──────────
recipeSchema.methods.convertRawIngredients = function() {
  if (!this.ingredientsRaw || this.ingredientsRaw.length === 0) return;
  
  this.ingredients = this.ingredientsRaw.map(raw => {
    const match = raw.match(/^([\d/]+\s*)?(.*)$/);
    const quantity = match[1]?.trim() || '';
    const name = match[2]?.trim() || raw;
    
    return { name, quantity, unit: '' };
  });
};

// ────────── METHOD to convert raw steps to structured format ──────────
recipeSchema.methods.convertRawSteps = function() {
  if (!this.stepsRaw || this.stepsRaw.length === 0) return;
  
  this.steps = this.stepsRaw.map((instruction, index) => ({
    stepNumber: index + 1,
    instruction: instruction.trim()
  }));
};

// ────────── METHOD: Check if recipe matches user preferences ──────────
recipeSchema.methods.matchesPreferences = function(preferences) {
  // Diet type match
  if (preferences.dietType) {
    const userDiet = preferences.dietType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian';
    if (this.dietType !== userDiet) return false;
  }
  
  // Allergies match
  if (preferences.allergies && preferences.allergies.length > 0) {
    for (const allergy of preferences.allergies) {
      if (this.allergens.includes(allergy.toLowerCase())) return false;
    }
  }
  
  // Budget match
  if (preferences.budget && this.budget !== preferences.budget) return false;
  
  // Meal time match
  if (preferences.mealTime && !this.suitableForMeals.includes(preferences.mealTime)) return false;
  
  // Age group match
  if (preferences.ageGroup && !this.ageGroup.includes(preferences.ageGroup)) return false;
  
  // Patient condition match
  if (preferences.patientCondition && !this.patientFriendly.includes(preferences.patientCondition)) return false;
  
  return true;
};

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;