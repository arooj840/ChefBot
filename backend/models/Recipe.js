const mongoose = require('mongoose');

// ============================================================
// RECIPE MODEL - ChefBot FYP
// According to: DataBaseModels.docx + All Frontend Pages
// Team: Ayesha Sohail (078241), Hira Saeed (078203), Arooj Fatima (057591)
// ============================================================

// ─────────────────────────────────────────────────────────
// INGREDIENT SUB-DOCUMENT
// Document mein: name, quantity, unit
// Frontend mein: ingredients array of strings
// Solution: dono support karte hain
// ─────────────────────────────────────────────────────────
const ingredientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: String, // "2", "1/2", "handful" etc
      default: '',
    },
    unit: {
      type: String, // "cup", "tbsp", "kg", "g" etc
      default: '',
    },
  },
  { _id: false }
);

// ─────────────────────────────────────────────────────────
// STEP SUB-DOCUMENT
// Document mein: instructions (String)
// Frontend mein: steps (Array) - voice guide ke liye
// Solution: steps array rakha (frontend ke liye better)
// ─────────────────────────────────────────────────────────
const stepSchema = new mongoose.Schema(
  {
    stepNumber: {
      type: Number,
      required: true,
    },
    instruction: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

// ─────────────────────────────────────────────────────────
// MAIN RECIPE SCHEMA
// ─────────────────────────────────────────────────────────
const recipeSchema = new mongoose.Schema(
  {
    // ─────────────────────────────────────────────────
    // BASIC INFO
    // Document: title | Frontend: name
    // ─────────────────────────────────────────────────
    title: {
      type: String,
      required: [true, 'Recipe title is required'],
      trim: true,
    },

    tagline: {
      // Frontend mein har recipe ki tagline hai
      type: String,
      trim: true,
      default: '',
    },

    image: {
      // Document + Frontend dono mein hai
      type: String,
      default: '',
    },

    // ─────────────────────────────────────────────────
    // INGREDIENTS
    // Document: Array of {name, quantity, unit}
    // Frontend: Array of strings
    // Solution: structured sub-document use karo
    // ─────────────────────────────────────────────────
    ingredients: {
      type: [ingredientSchema],
      default: [],
    },

    // ─────────────────────────────────────────────────
    // INSTRUCTIONS / STEPS
    // Document: instructions (String)
    // Frontend: steps (Array) - voice guide step by step
    // Solution: steps array (voice feature ke liye zaroori)
    // ─────────────────────────────────────────────────
    instructions: {
      // Document ke liye - full text
      type: String,
      default: '',
    },

    steps: {
      // Frontend ke liye - voice guide step by step
      type: [stepSchema],
      default: [],
    },

    // ─────────────────────────────────────────────────
    // VOICE URL
    // Document mein hai - voice instructions URL
    // ─────────────────────────────────────────────────
    voiceUrl: {
      type: String,
      default: '',
    },

    // ─────────────────────────────────────────────────
    // MAIN CATEGORY
    // Document: breakfast/lunch/dinner
    // Frontend: bahut saari categories
    // ─────────────────────────────────────────────────
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: [
        'Breakfast',
        'Lunch',
        'Dinner',
        'Appetizers',
        'Snacks',
        'Soups',
        'Salads',
        'BBQ',
        'Rice',
        'Breads',
        'Desserts',
        'Beverages',
        'Baking',
        'Regional',
        'Student',
        'Quick',
        'Budget',
        'HeavyGravy',
        'LightDinner',
      ],
    },

    // ─────────────────────────────────────────────────
    // SUB-CATEGORY
    // Frontend ke sub-pages se liya
    // ─────────────────────────────────────────────────
    subCategory: {
      type: String,
      enum: [
        // Pure Meat
        'Chicken', 'Mutton', 'Beef', 'Keema', 'Fish', 'Egg',
        // Meat + Veg
        'ChickenVegetable', 'MuttonVegetable',
        // Meat + Dal
        'ChickenDal', 'MuttonDal',
        // Plain Dal
        'Dal',
        // Veg
        'Vegetables',
        // Rice types
        'Biryani', 'Pulao', 'FriedRice', 'Khichdi', 'Tahari', 'Zarda', 'RiceDessert',
        // BBQ types
        'Tikka', 'Boti', 'Seekh', 'Chapli', 'Bihari', 'Reshmi', 'Galouti',
        'GrilledFish', 'GrilledVeg',
        // Heavy Gravy
        'Nihari', 'Haleem', 'Paye', 'Khichda', 'Korma', 'Karahi', 'Handi', 'Kofta',
        // Beverages
        'HotDrinks', 'ColdDrinks', 'Smoothies', 'Mocktails', 'Cocktails', 'TraditionalDrinks',
        // Light Dinner
        'Soup', 'Salad', 'Sandwich', 'Wrap',
        // Misc
        'Appetizer', 'Other',
      ],
      default: 'Other',
    },

    // ─────────────────────────────────────────────────
    // CUISINE
    // Document + Frontend (RegionalPage) dono mein hai
    // ─────────────────────────────────────────────────
    cuisine: {
      type: String,
      enum: [
        'Pakistani', 'Continental', 'Chinese',
        'Italian', 'Turkish', 'Indian', 'Arabic', 'Afghan', 'Other',
      ],
      default: 'Pakistani',
    },

    // ─────────────────────────────────────────────────
    // BEVERAGE CATEGORY
    // Frontend RecipeBeveragesPage se
    // ─────────────────────────────────────────────────
    beverageCategory: {
      type: String,
      enum: ['Hot Drinks', 'Cold Drinks', 'Smoothies', 'Mocktails', 'Cocktails', 'Traditional', null],
      default: null,
    },

    // ─────────────────────────────────────────────────
    // PANTRY KEYWORDS
    // Frontend RecipeBreakFast se - pantry suggestions
    // ─────────────────────────────────────────────────
    pantryKeywords: {
      type: [String],
      default: [],
    },

    // ─────────────────────────────────────────────────
    // DIETARY FLAGS
    // ─────────────────────────────────────────────────
    isVegetarian: {
      type: Boolean,
      default: false,
    },

    isHalal: {
      type: Boolean,
      default: true,
    },

    // ─────────────────────────────────────────────────
    // COOKING INFO
    // ─────────────────────────────────────────────────
    cookingTime: {
      type: Number, // minutes
      default: null,
    },

    servings: {
      type: Number,
      default: null,
    },

    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
      default: 'Medium',
    },

    mealTime: {
      type: [String],
      enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 'Anytime'],
      default: ['Anytime'],
    },

    // ─────────────────────────────────────────────────
    // ADMIN INFO
    // Document mein: createdBy (Admin ref)
    // ─────────────────────────────────────────────────
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    // ─────────────────────────────────────────────────
    // RATINGS (future use)
    // ─────────────────────────────────────────────────
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    totalRatings: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// ─────────────────────────────────────────────────────────
// INDEXES
// ─────────────────────────────────────────────────────────
recipeSchema.index({ title: 'text', tagline: 'text' });
recipeSchema.index({ category: 1 });
recipeSchema.index({ subCategory: 1 });
recipeSchema.index({ cuisine: 1 });
recipeSchema.index({ isVegetarian: 1 });
recipeSchema.index({ pantryKeywords: 1 });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;