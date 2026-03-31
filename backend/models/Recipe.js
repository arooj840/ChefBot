const mongoose = require('mongoose');

// ─────────────────────────────────────────────────────────
// INGREDIENT SUB-DOCUMENT
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
    // ── Basic Info

    title: {
      type: String,
      required: [true, 'Recipe title is required'],
      trim: true,
    },

    tagline: {
      // Short description on recipe cards
    
      type: String,
      trim: true,
      default: '',
    },

    image: {
      // Unsplash URL or uploaded image path
      type: String,
      default: '',
    },

    // ── Ingredients ──

    // Structured version (for admin panel / future use)
    ingredients: {
      type: [ingredientSchema],
      default: [],
    },

    // Plain string array —
    ingredientsRaw: {
      type: [String],
      default: [],
    },

    // ── Instructions / Steps ─

    // Plain text instructions (legacy / simple use)
    instructions: {
      type: String,
      default: '',
    },

    // Structured steps (for admin panel / future use)
    steps: {
      type: [stepSchema],
      default: [],
    },

    // Plain string array
    // Used by voice guide (speakStep) in EVERY page
    // e.g. ["Heat oil in a pan...", "Add cumin seeds..."]
    stepsRaw: {
      type: [String],
      default: [],
    },

    // Voice guide audio URL
   
    voiceUrl: {
      type: String,
      default: '',
    },

    // ── Main Category ──
 

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
        'Desserts',
        'Beverages',
        'Baking',
        'Regional',
        'CheatMeal',
        'Student',
        'Quick',
        'Budget',
        'Vegetarian',  
        'BBQ',         
        'Rice',
        'Breads',      
        'HeavyGravy',  
        'LightDinner', 
      ],
    },

    // ── Sub-Category ────────────────────────────────────────────────────────
    subCategory: {
      type: String,
      enum: [

        // ── Pure Meat types ────────────────────────────────────────────
        'Chicken',
        'Mutton',
        'Beef',
        'Keema',   
        'Fish',
        'Egg',

        // ── Meat + Veg combos ───
        'ChickenVegetable',
        
        'MuttonVegetable',

        // ── Meat + Dal combos ──────────────────────────────────────────
        'ChickenDal',
        'MuttonDal',
        // ── Plain Dal ──────────────────────────────────────────────────
        'Dal',
        // ── Plain Vegetables ───────────────────────────────────────────
        'Vegetables',
        // ── Rice types ─────────────────────────────────────────────────
        'Biryani',
        'Pulao',
        'FriedRice',
        'Khichdi',
        'Tahari',
        'Zarda',
        'RiceDessert',

        // ── BBQ types — 
        'Tikka',
        // Boti section (id 7-10): Chicken Boti, Malai, Achari, Beef Boti
        'Boti',
        // Seekh section (id 11-15): Chicken, Mutton, Beef, Hariyali, Cheese Seekh
        'Seekh',
        // Chapli section (id 16-18): Chapli, Chicken Chapli, Peshawari Chapli
        'Chapli',
        // Bihari section (id 19-21): Bihari Kebab, Chicken Bihari, Bihari Boti
        'Bihari',
        // Reshmi section (id 25-27): Reshmi Kebab, Reshmi Tikka, Malai Reshmi
        'Reshmi',
        // Galouti section (id 28-29): Galouti Kebab, Chicken Galouti
        'Galouti',
        // Grilled Fish (id 30-32): Fish Tikka, Grilled Fish, Tandoori Fish
        'GrilledFish',
        // Grilled Veg (id 33-35): Grilled Veg Platter, Tandoori Mushroom, Tandoori Paneer
        'GrilledVeg',
        // Tandoori Special (id 38-40): Tandoori Raan, Mutton Chops, Tandoori Quail
        'TandooriSpecial',
        // BBQ Sauces (id 41-43): Mint Chutney, Tamarind Chutney, Garlic Yogurt Sauce
        'BBQSauce',
        // Kebab in Masala Gravy (id 36-37): Seekh Kebab Masala, Chapli Kebab Karahi
        'KebabMasala',

        // ── Heavy Gravy — 
        // Nihari (id 1-5): Beef, Mutton, Chicken, Bong, Special
        'Nihari',
        // Haleem (id 6-10): Beef, Mutton, Chicken, Hyderabadi, Special
        'Haleem',
        // Paye (id 11-14): Mutton, Beef, Kashmiri, Special
        'Paye',
        // Khichda (id 15-17): Beef, Mutton, Chicken
        'Khichda',
        // Korma (id 18-21): Chicken, Mutton, Shahi, Nawabi
        'Korma',
        // Karahi (id 22-24, 35-38): Chicken, Mutton, White, Lahori, Peshawari
        'Karahi',
        // Handi (id 25-27): Chicken, Mutton, Vegetable
        'Handi',
        // Dal Gravy (id 28-30): Dal Makhani, Dal Bukhara, Dal Fry
        'DalGravy',
        // Achaar Gosht (id 31-32): Achaar Gosht, Chicken Achaar
        'AchaariGosht',
        // Rogan Josh (id 33-34): Kashmiri Rogan Josh, Rogan Josh Gravy
        'RoganJosh',
        // Bhuna Gosht (id 39-40): Bhuna Gosht, Chicken Bhuna
        'BhunaGosht',
        // Kofta (id 41-43, 45): Meatball Curry, Nargisi, Malai, Bheja Masala
        'Kofta',

        // ── Beverages ──────────────────────────────────────────────────
        'HotDrinks',
        'ColdDrinks',
        'Smoothies',
        'Mocktails',
        'Cocktails',
        'TraditionalDrinks',

        // ── Light Dinner —
        // Soups (id 1-6): Chicken Corn, Hot & Sour, Tomato, Veg, Lentil, Noodle
        'Soup',
        // Salads (id 7-11): Caesar, Greek, Fruit Chaat, Chicken Avocado, Pasta Salad
        'Salad',
        // Sandwiches (id 12-16): Grilled Chicken, Club, Veg, Egg, Tuna
        'Sandwich',
        // Wraps & Rolls (id 17-21): Chicken Wrap, Shawarma, Seekh Roll, Veg Wrap, Egg Roll
        'Wrap',

        // ── Breads —
        // Roti (id 1-4): Tawa Roti, Phulka, Jowar, Bajra
        // Paratha (id 5-10): Simple, Lachha, Aloo, Gobhi, Mooli, Paneer
        // Naan (id 11-15): Tandoori, Garlic, Butter, Cheese, Peshawari
        // Roghni Naan (id 16-18): Roghni, Kabuli, Ammi's
        // Sheermal (id 19-20): Sheermal, Kashmiri Sheermal
        // Kulcha (id 21-23): Plain, Aloo, Paneer Kulcha
        // Bread Pakora (id 24-25)
        // Sandwich (id 26-28): Grilled, Bombay, Cheese
        // Bread Roll (id 29-30): Bread Roll, Veg Roll
        // Sweet Bread (id 31-35): Meetha Paratha, Banana Bread, Puri, Bhatura, Roomali
        // Flatbreads (id 36-38): Missi Roti, Thepla, Makki di Roti
        'Bread',

        // ── Cheat Meal — RecipeCheatMeal.jsx (115 recipes) ────────────
        // Burger (15 types): Classic, BBQ, Double, Zinger, Mushroom, etc.
        'Burger',
        // Fried Chicken (types): Crispy, Popcorn, Wings, Drumsticks, Nuggets
        'FriedChicken',
        // Pizza (12 types): Margherita, BBQ Chicken, Desi, White Sauce, etc.
        'Pizza',
        // Pasta (types): Red, White, Pink, Baked, Mac & Cheese, etc.
        'Pasta',
        // Fries: French Fries, Wedges, Cheese Fries, Loaded, etc.
        'Fries',
        // Rolls: Chicken Roll, Egg Roll, Veg Roll, Seekh Roll, etc.
        'Rolls',
        // Wraps: Chicken Wrap, Shawarma, Fajita, etc.
        'Wraps',
        // Chinese Fast Food: Chow Mein, Chilli Chicken, Manchurian, etc.
        'ChineseFastFood',
        // Desi Street Food: Samosa, Pakora, Chaat, Gol Gappay, Bun Kebab, etc.
        'DesiStreetFood',
        'Tacos',
        'Nachos',
        'Quesadilla',
        // Sides: Garlic Bread, Mozzarella Sticks, Onion Rings, Coleslaw, etc.
        'Sides',

        // ── Egg Dishes — RecipesEggDishes.jsx (35 recipes) ────────────
        // Egg Curries (id 1-8): Anda Curry, Masala, Dhaba, Aloo, Matar, Palak, Kerala, Do Pyaza
        'EggCurry',
        // Egg Masala / Bhurji (id 9-13): Anda Bhurji, Masala, with Paneer, Pav, Ghotala
        'EggBhurji',
        // Egg + Vegetables (id 14-18): Aloo Matar, Shimla Mirch, Gobhi, Baingan, Palak
        'EggWithVeg',
        // Egg Keema (id 19-21): Anda Keema, Keema Matar, Keema Aloo
        'EggKeema',
        // Egg + Dal (id 22-24): Anda Dal, Chana Dal, Dal Palak
        'EggDal',
        // Egg Rice (id 25-27): Egg Fried Rice, Egg Biryani, Egg Pulao
        'EggRice',
        // Egg Paratha (id 28-30): Anda Paratha, Cheese Paratha, Keema Paratha
        'EggParatha',
        // Egg Sandwiches (id 31-32): Egg Sandwich, Egg Mayo Sandwich
        'EggSandwich',
        // Egg Appetizers / Snacks (id 33-35): Egg Pakora, Egg Devil, Egg Cutlet
        'EggSnack',

        // ── Fish Dishes — 
        // Fish Curries (id 1-8): Classic, Masala, Coconut, Kadhai, Do Pyaza, Jalfrezi, Malai, Kofta
        'FishCurry',
        // Fish Fry (id 9-13): Fish Fry, Karachi, Tawa, Andhra, Fish Finger
        'FishFry',
        // Fish Tikka (id 14-17): Fish Tikka, Malai, Hariyali, Boti
        'FishTikka',
        // Fish Rice (id 18-20): Fish Pulao, Biryani, Fried Rice
        'FishRice',
        // Fish Snacks (id 21-24): Fish Pakora, Manchurian, Cutlet, Kebab
        'FishSnack',
        // Fish Masala (id 25-27): Masala Fry, Fish 65, Chilli Fish
        'FishMasala',
        // Fish + Veg (id 28-30): Fish Aloo, Palak, Matar
        'FishWithVeg',
        // Fish Rolls/Sandwiches (id 31-32): Fish Roll, Fish Sandwich
        'FishRoll',
        // Fish Soups (id 33-34): Fish Soup, Manchow Soup
        'FishSoup',
        // Fish Pickle (id 35)
        'FishPickle',

        // ── Misc ──
        'Appetizer',
        'Other',
      ],
      default: 'Other',
    },

    // ── Cuisine ─────────────────────────────────────────────────────────────
    // Pakistani(30), Continental(20), Chinese(20), Italian(20), Turkish(20)
    cuisine: {
      type: String,
      enum: [
        'Pakistani', 'Continental', 'Chinese',
        'Italian', 'Turkish', 'Indian', 'Arabic', 'Afghan', 'Other',
      ],
      default: 'Pakistani',
    },

    // ── Beverage Category ────────────────────────────────────────────────────
    beverageCategory: {
      type: String,
      enum: ['Hot Drinks', 'Cold Drinks', 'Smoothies', 'Mocktails', 'Cocktails', 'Traditional', null],
      default: null,
    },

    // ── Pantry Keywords ──────────────────────────────────────────────────────
    // e.g. ["chicken", "bun", "lettuce", "mayo"]
    pantryKeywords: {
      type: [String],
      default: [],
    },

    // ── Dietary Flags ────────────────────────────────────────────────────────
    isVegetarian: {
      type: Boolean,
      default: false,
    },

    isHalal: {
      type: Boolean,
      default: true,
    },

    // ── Cooking Info ─────────────────────────────────────────────────────────
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

    // ── Admin Info ───────────────────────────────────────────────────────────
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

    // ── Ratings (future use) ─────────────────────────────────────────────────
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
// INDEXES — faster search & filter queries
// ─────────────────────────────────────────────────────────
recipeSchema.index({ title: 'text', tagline: 'text' }); // full-text search
recipeSchema.index({ category: 1 });
recipeSchema.index({ subCategory: 1 });
recipeSchema.index({ cuisine: 1 });
recipeSchema.index({ isVegetarian: 1 });
recipeSchema.index({ pantryKeywords: 1 });
recipeSchema.index({ mealTime: 1 });
recipeSchema.index({ difficulty: 1 });
recipeSchema.index({ isFeatured: 1 });
recipeSchema.index({ isActive: 1 });

// ─────────────────────────────────────────────────────────
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;