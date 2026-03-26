const mongoose = require('mongoose');

// ============================================================
// RECIPE MODEL - ChefBot FYP
// Based on complete frontend analysis of 25+ recipe pages
// Team: Ayesha Sohail (078241), Hira Saeed (078203), Arooj Fatima (057591)
// ============================================================

const recipeSchema = new mongoose.Schema(
  {
    // ─────────────────────────────────────────────────────────
    // BASIC INFO (present in every page)
    // ─────────────────────────────────────────────────────────
    name: {
      type: String,
      required: [true, 'Recipe name is required'],
      trim: true,
    },

    tagline: {
      type: String,
      trim: true,
      default: '',
    },

    image: {
      type: String,
      default: '',
    },

    // ─────────────────────────────────────────────────────────
    // INGREDIENTS & STEPS (present in every page)
    // ─────────────────────────────────────────────────────────
    ingredients: {
      type: [String],
      default: [],
    },

    steps: {
      type: [String],
      default: [],
    },

    // ─────────────────────────────────────────────────────────
    // MAIN CATEGORY
    // Based on RecipeFeature, RecipesLunch, RecipesDinner routes
    // ─────────────────────────────────────────────────────────
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

    // ─────────────────────────────────────────────────────────
    // SUB-CATEGORY
    // Based on /chicken, /mutton, /qeema, /rice, /BBQ etc. routes
    // Also covers dal types from PlainDal, DalChicken, DalMutton pages
    // ─────────────────────────────────────────────────────────
    subCategory: {
      type: String,
      enum: [
        // Pure Meat (RecipesPureChicken, RecipesPureMutton, RecipesQeema)
        'Chicken',
        'Mutton',
        'Beef',
        'Keema',
        'Fish',
        'Egg',

        // Meat + Veg combos (RecipesVegChicken, RecipesVegMutton)
        'ChickenVegetable',
        'MuttonVegetable',

        // Meat + Dal combos (RecipesDalChicken, RecipesDalMutton)
        'ChickenDal',
        'MuttonDal',

        // Plain Dal (RecipesPlainDal)
        'Dal',

        // Veg only (lunch/dinner veg tab, RecipePlainVegetables)
        'Vegetables',

        // Rice sub-types (RecipesRice)
        'Biryani',
        'Pulao',
        'FriedRice',
        'Khichdi',
        'Tahari',
        'Zarda',
        'RiceDessert',

        // BBQ sub-types (RecipesBBQ)
        'Tikka',
        'Boti',
        'Seekh',
        'Chapli',
        'Bihari',
        'Reshmi',
        'Galouti',
        'GrilledFish',
        'GrilledVeg',

        // Heavy Gravy sub-types (RecipesHeavyGravy)
        'Nihari',
        'Haleem',
        'Paye',
        'Khichda',
        'Korma',
        'Karahi',
        'Handi',
        'Kofta',

        // Beverages sub-types (RecipeBeveragesPage)
        'HotDrinks',
        'ColdDrinks',
        'Smoothies',
        'Mocktails',
        'Cocktails',
        'TraditionalDrinks',

        // Light Dinner (RecipesLightDinner)
        'Soup',
        'Salad',
        'Sandwich',
        'Wrap',

        // Misc
        'Appetizer',
        'Other',
      ],
      default: 'Other',
    },

    // ─────────────────────────────────────────────────────────
    // CUISINE
    // Seen in RecipeRegionalPage
    // ─────────────────────────────────────────────────────────
    cuisine: {
      type: String,
      enum: [
        'Pakistani',
        'Continental',
        'Chinese',
        'Italian',
        'Turkish',
        'Indian',
        'Arabic',
        'Afghan',
        'Other',
      ],
      default: 'Pakistani',
    },

    // ─────────────────────────────────────────────────────────
    // BEVERAGE CATEGORY
    // Seen only in RecipeBeveragesPage
    // ─────────────────────────────────────────────────────────
    beverageCategory: {
      type: String,
      enum: [
        'Hot Drinks',
        'Cold Drinks',
        'Smoothies',
        'Mocktails',
        'Cocktails',
        'Traditional',
        null,
      ],
      default: null,
    },

    // ─────────────────────────────────────────────────────────
    // PANTRY KEYWORDS
    // Seen in RecipeBreakFast for pantry-based suggestions feature
    // ─────────────────────────────────────────────────────────
    pantryKeywords: {
      type: [String],
      default: [],
    },

    // ─────────────────────────────────────────────────────────
    // DIETARY FLAGS
    // ─────────────────────────────────────────────────────────
    isVegetarian: {
      type: Boolean,
      default: false,
    },

    isHalal: {
      type: Boolean,
      default: true, // All recipes halal (frontend notes: "Halal - No Bacon")
    },

    // ─────────────────────────────────────────────────────────
    // COOKING INFO
    // ─────────────────────────────────────────────────────────
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

    // ─────────────────────────────────────────────────────────
    // MEAL TIME
    // ─────────────────────────────────────────────────────────
    mealTime: {
      type: [String],
      enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 'Anytime'],
      default: ['Anytime'],
    },

    // ─────────────────────────────────────────────────────────
    // ADMIN / SOURCE INFO
    // ─────────────────────────────────────────────────────────
    isActive: {
      type: Boolean,
      default: true,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },

    // ─────────────────────────────────────────────────────────
    // RATINGS (for future use)
    // ─────────────────────────────────────────────────────────
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
    timestamps: true,
  }
);

// ─────────────────────────────────────────────────────────
// INDEXES for fast search
// ─────────────────────────────────────────────────────────
recipeSchema.index({ name: 'text', tagline: 'text' });
recipeSchema.index({ category: 1 });
recipeSchema.index({ subCategory: 1 });
recipeSchema.index({ cuisine: 1 });
recipeSchema.index({ isVegetarian: 1 });
recipeSchema.index({ pantryKeywords: 1 });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;