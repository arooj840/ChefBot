// 16-student.js - COMPLETE (20 recipes)
const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');
require('dotenv').config({ path: '../.env' });

const recipesToMigrate = [
 {
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Maggi with Egg",
  tagline: "Quick instant noodles with egg for protein",
  image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 packet Maggi noodles",
    "1 egg",
    "1 ½ cups water",
    "Maggi tastemaker (comes with packet)",
    "½ teaspoon oil or butter",
    "Salt to taste",
    "Pinch of black pepper (optional)"
  ],
  stepsRaw: [
    "Boil 1 ½ cups water in a small pan.",
    "Add Maggi noodles and tastemaker to boiling water.",
    "Cook for 2 minutes on medium heat, stirring occasionally.",
    "In a separate small bowl, beat the egg lightly with a fork.",
    "After 2 minutes, pour the beaten egg slowly into the Maggi while stirring continuously.",
    "Cook for another 1-2 minutes until egg is cooked and noodles are soft.",
    "Add oil or butter, mix well.",
    "Add salt if needed and black pepper for extra flavor.",
    "Serve hot immediately."
  ],
  difficulty: "Easy",
  cookingTime: 5,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "The ultimate student meal — quick Maggi instant noodles upgraded with a protein-packed egg. Ready in under 5 minutes with minimal ingredients. Perfect for late night cravings or busy mornings.",

  category: "Anytime",
  subCategory: "student",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner", "Snack"],
  beverageCategory: null,

  allergens: ["eggs", "wheat", "gluten"],  // egg + noodles

  budget: "economy",
  costPerServing: 40,
  baseServings: 1,
  calories: 320,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["maggi", "noodles", "egg", "water", "tastemaker", "oil", "butter", "black pepper"],
  searchKeywords: ["maggi with egg", "maggi", "instant noodles", "student meal", "quick meal", "easy recipe", "egg noodles", "budget meal"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Omelette Sandwich",
  tagline: "Protein-packed omelette between bread slices",
  image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "2 eggs",
    "2 slices of bread",
    "1 small onion, finely chopped",
    "1 small tomato, finely chopped",
    "1 green chili, finely chopped (optional)",
    "2 tablespoons chopped coriander",
    "Salt to taste",
    "¼ teaspoon black pepper",
    "1 teaspoon oil or butter"
  ],
  stepsRaw: [
    "Break eggs into a bowl and beat well with a fork.",
    "Add chopped onion, tomato, green chili, and coriander to eggs.",
    "Add salt and black pepper, mix everything well.",
    "Heat oil or butter in a frying pan on medium heat.",
    "Pour egg mixture into pan and spread evenly.",
    "Cook for 1-2 minutes until bottom is set.",
    "Place bread slices on top of the omelette.",
    "Carefully flip the omelette with bread slices attached.",
    "Cook for another 1-2 minutes until bread is lightly toasted.",
    "Fold omelette over bread and serve hot."
  ],
  difficulty: "Easy",
  cookingTime: 10,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A filling and protein-rich omelette sandwich made with spiced eggs, onion, tomato, and green chili served between toasted bread slices. A perfect student breakfast or quick snack ready in 10 minutes.",

  category: "Breakfast",
  subCategory: "student",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner", "Snack"],
  beverageCategory: null,

  allergens: ["eggs", "wheat", "gluten"],  // eggs + bread

  budget: "economy",
  costPerServing: 50,
  baseServings: 1,
  calories: 350,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["eggs", "bread", "onion", "tomato", "green chili", "coriander", "oil", "butter", "black pepper"],
  searchKeywords: ["omelette sandwich", "egg sandwich", "student meal", "quick breakfast", "easy recipe", "budget meal", "protein breakfast", "desi sandwich"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Cup Noodles",
  tagline: "Instant noodles in a cup - ready in minutes",
  image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 cup instant noodles (any brand)",
    "Boiling water as needed",
    "Optional add-ons:",
    "Chopped spring onions",
    "Few drops of soy sauce",
    "¼ teaspoon chili flakes"
  ],
  stepsRaw: [
    "Open the cup noodles and remove the seasoning packet.",
    "Add the seasoning powder to the noodles in the cup.",
    "If using add-ons, add them now.",
    "Pour boiling water into the cup up to the marked line.",
    "Close the lid and let it sit for 3 minutes.",
    "After 3 minutes, stir well with a fork.",
    "Add extra seasoning if desired.",
    "Enjoy directly from the cup."
  ],
  difficulty: "Easy",
  cookingTime: 3,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "The quickest student meal ever — instant cup noodles ready in just 3 minutes. Customize with spring onions, soy sauce, or chili flakes for extra flavor. Perfect for hostel life and late-night hunger.",

  category: "Anytime",
  subCategory: "student",

  dietType: "Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner", "Snack"],
  beverageCategory: null,

  allergens: ["wheat", "gluten"],  // instant noodles

  budget: "economy",
  costPerServing: 30,
  baseServings: 1,
  calories: 280,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["instant noodles", "cup noodles", "seasoning", "spring onions", "soy sauce", "chili flakes", "boiling water"],
  searchKeywords: ["cup noodles", "instant noodles", "student meal", "quick meal", "easy recipe", "budget meal", "hostel food", "3 minute meal"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Butter Toast",
  tagline: "Crispy golden toast with butter",
  image: "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "2 slices of bread",
    "1 tablespoon butter",
    "Optional spreads:",
    "Jam, honey, or cheese spread",
    "Pinch of salt (for savory version)"
  ],
  stepsRaw: [
    "Take bread slices and spread butter evenly on one side.",
    "Heat a frying pan on medium heat.",
    "Place bread butter-side down in the pan.",
    "Cook for 1-2 minutes until golden brown and crispy.",
    "Spread more butter on the top side while cooking.",
    "Flip and cook the other side for 1-2 minutes.",
    "Remove from pan and add your favorite spread.",
    "For savory version, sprinkle a little salt before serving.",
    "Serve hot with tea or coffee."
  ],
  difficulty: "Easy",
  cookingTime: 5,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A simple and satisfying crispy butter toast — golden on both sides and ready in 5 minutes. Enjoy sweet with jam or honey, or savory with a pinch of salt. A timeless student breakfast with chai.",

  category: "Breakfast",
  subCategory: "student",

  dietType: "Vegetarian",
  suitableForMeals: ["Breakfast", "Snack"],
  beverageCategory: null,

  allergens: ["dairy", "wheat", "gluten"],  // butter + bread

  budget: "economy",
  costPerServing: 25,
  baseServings: 1,
  calories: 220,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["bread", "butter", "jam", "honey", "cheese spread", "salt"],
  searchKeywords: ["butter toast", "toast", "student breakfast", "quick breakfast", "easy recipe", "budget meal", "crispy toast", "bread butter"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Fruit Chaat",
  tagline: "Tangy and spicy mixed fruit salad",
  image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 apple, chopped",
    "1 banana, sliced",
    "1 orange, peeled and segmented",
    "½ cup pomegranate seeds",
    "1 teaspoon chaat masala",
    "½ teaspoon black salt",
    "1 tablespoon lemon juice",
    "Fresh mint leaves for garnish"
  ],
  stepsRaw: [
    "Wash and prepare all fruits.",
    "Chop apple into small cubes.",
    "Slice banana into rounds.",
    "Peel orange and separate segments.",
    "In a large bowl, mix all fruits together.",
    "Add pomegranate seeds.",
    "Sprinkle chaat masala and black salt.",
    "Drizzle lemon juice over fruits.",
    "Gently mix everything without mashing fruits.",
    "Garnish with fresh mint leaves.",
    "Serve immediately for best taste."
  ],
  difficulty: "Easy",
  cookingTime: 10,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A fresh and tangy Pakistani-style fruit chaat with mixed seasonal fruits tossed in chaat masala, black salt, and lemon juice. Light, healthy, and refreshing — a perfect student snack or iftar treat.",

  category: "Snacks",
  subCategory: "student",

  dietType: "Vegetarian",
  suitableForMeals: ["Breakfast", "Snack"],
  beverageCategory: null,

  allergens: [],

  budget: "economy",
  costPerServing: 60,
  baseServings: 2,
  calories: 160,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general", "diabetes", "heart", "bp", "lowfat"],

  pantryKeywords: ["apple", "banana", "orange", "pomegranate", "chaat masala", "black salt", "lemon juice", "mint"],
  searchKeywords: ["fruit chaat", "fruit salad", "pakistani chaat", "student snack", "healthy snack", "easy recipe", "budget meal", "tangy fruit"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Yogurt with Fruits",
  tagline: "Creamy yogurt with fresh fruits",
  image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 cup plain yogurt",
    "½ banana, sliced",
    "½ apple, chopped",
    "¼ cup grapes, halved",
    "1 tablespoon honey or sugar",
    "¼ teaspoon cardamom powder",
    "1 tablespoon chopped nuts (optional)"
  ],
  stepsRaw: [
    "Take yogurt in a bowl and whisk until smooth.",
    "Add honey or sugar and mix well.",
    "Add cardamom powder and mix.",
    "Prepare fruits by washing and cutting.",
    "Add banana slices, apple pieces, and grapes to yogurt.",
    "Mix gently to coat fruits with yogurt.",
    "If using nuts, add them now.",
    "Serve chilled or at room temperature.",
    "You can also layer fruits and yogurt in a glass for presentation."
  ],
  difficulty: "Easy",
  cookingTime: 5,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A healthy and creamy yogurt bowl topped with fresh seasonal fruits, honey, and a hint of cardamom. Nutritious, filling, and ready in 5 minutes — a perfect student breakfast or healthy snack.",

  category: "Breakfast",
  subCategory: "student",

  dietType: "Vegetarian",
  suitableForMeals: ["Breakfast", "Snack"],
  beverageCategory: null,

  allergens: ["dairy", "nuts"],   // yogurt + optional nuts

  budget: "economy",
  costPerServing: 80,
  baseServings: 1,
  calories: 240,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general", "diabetes", "heart", "bp", "lowfat"],

  pantryKeywords: ["yogurt", "banana", "apple", "grapes", "honey", "sugar", "cardamom", "nuts"],
  searchKeywords: ["yogurt with fruits", "fruit yogurt", "healthy breakfast", "student meal", "easy recipe", "budget meal", "creamy yogurt", "fruit bowl"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
}
  {
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Cereal with Milk",
  tagline: "Classic breakfast cereal with milk",
  image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 cup breakfast cereal (cornflakes, wheat flakes, etc.)",
    "1 cup milk (cold or warm)",
    "1 teaspoon sugar or honey (optional)",
    "Sliced banana or other fruits (optional)"
  ],
  stepsRaw: [
    "Take a cereal bowl.",
    "Add 1 cup of cereal to the bowl.",
    "If using fruits, add sliced banana now.",
    "Pour milk over cereal until just covered.",
    "Add sugar or honey if desired.",
    "Mix lightly and serve immediately.",
    "For hot cereal: warm the milk first before pouring.",
    "Eat immediately to keep cereal crunchy."
  ],
  difficulty: "Easy",
  cookingTime: 2,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A classic and effortless student breakfast — crunchy cereal with cold or warm milk, sweetened with honey or sugar. Add banana slices for extra nutrition. Ready in 2 minutes, no cooking needed.",

  category: "Breakfast",
  subCategory: "student",

  dietType: "Vegetarian",
  suitableForMeals: ["Breakfast", "Snack"],
  beverageCategory: null,

  allergens: ["dairy", "wheat", "gluten"],  // milk + cereal

  budget: "economy",
  costPerServing: 50,
  baseServings: 1,
  calories: 280,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["cereal", "cornflakes", "wheat flakes", "milk", "sugar", "honey", "banana"],
  searchKeywords: ["cereal with milk", "cornflakes", "breakfast cereal", "student breakfast", "quick breakfast", "easy recipe", "budget meal", "no cook breakfast"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Peanut Butter Toast",
  tagline: "Nutritious toast with creamy peanut butter",
  image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "2 slices of bread",
    "2 tablespoons peanut butter",
    "1 teaspoon honey or jam (optional)",
    "½ banana, sliced (optional)",
    "Pinch of cinnamon (optional)"
  ],
  stepsRaw: [
    "Toast bread slices until golden brown.",
    "Spread peanut butter evenly on warm toast.",
    "If using honey, drizzle over peanut butter.",
    "For banana version: arrange banana slices on peanut butter.",
    "Sprinkle cinnamon if using.",
    "Put two slices together or enjoy separately.",
    "Serve immediately.",
    "Great for breakfast or quick snack."
  ],
  difficulty: "Easy",
  cookingTime: 5,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A nutritious and filling peanut butter toast ready in 5 minutes. High in protein and healthy fats — top with honey, banana, or cinnamon for extra flavor. A perfect student breakfast or post-study snack.",

  category: "Breakfast",
  subCategory: "student",

  dietType: "Vegetarian",
  suitableForMeals: ["Breakfast", "Snack"],
  beverageCategory: null,

  allergens: ["peanuts", "wheat", "gluten"],  // peanut butter + bread

  budget: "economy",
  costPerServing: 60,
  baseServings: 1,
  calories: 350,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["bread", "peanut butter", "honey", "jam", "banana", "cinnamon"],
  searchKeywords: ["peanut butter toast", "peanut butter", "student breakfast", "quick breakfast", "easy recipe", "budget meal", "protein toast", "healthy toast"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Jam Sandwich",
  tagline: "Sweet and simple jam-filled sandwich",
  image: "https://images.unsplash.com/photo-1606913853347-bb6e96f5d7b6?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "2 slices of bread",
    "2 tablespoons fruit jam (any flavor)",
    "1 teaspoon butter (optional)",
    "Optional: sprinkle of powdered sugar"
  ],
  stepsRaw: [
    "Take bread slices.",
    "Spread jam evenly on one slice.",
    "If using butter, spread on the other slice.",
    "Put slices together with jam in middle.",
    "For toasted version: toast bread first, then add jam.",
    "Cut diagonally for better presentation.",
    "Sprinkle powdered sugar on top if desired.",
    "Serve immediately."
  ],
  difficulty: "Easy",
  cookingTime: 3,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "The simplest and sweetest student meal — soft bread filled with fruity jam and optional butter. Ready in under 3 minutes with zero cooking. A childhood classic that never gets old.",

  category: "Breakfast",
  subCategory: "student",

  dietType: "Vegetarian",
  suitableForMeals: ["Breakfast", "Snack"],
  beverageCategory: null,

  allergens: ["dairy", "wheat", "gluten"],  // butter + bread

  budget: "economy",
  costPerServing: 20,
  baseServings: 1,
  calories: 200,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["bread", "jam", "butter", "powdered sugar"],
  searchKeywords: ["jam sandwich", "bread jam", "student breakfast", "quick snack", "easy recipe", "budget meal", "sweet sandwich", "no cook meal"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Boiled Eggs",
  tagline: "Perfect protein-packed boiled eggs",
  image: "https://images.unsplash.com/photo-1483137140003-ae073b395549?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "2 eggs",
    "Water for boiling",
    "Salt and pepper to taste",
    "Optional: chaat masala, soy sauce"
  ],
  stepsRaw: [
    "Take eggs and wash them under running water.",
    "Place eggs in a small pot.",
    "Add enough water to cover eggs completely.",
    "Bring water to boil on high heat.",
    "Once boiling, reduce heat to medium.",
    "Boil for 8-10 minutes for hard-boiled eggs.",
    "For soft-boiled: boil for 5-6 minutes.",
    "Remove eggs and place in cold water for 2 minutes.",
    "Peel eggs carefully.",
    "Sprinkle salt, pepper, or your favorite seasoning.",
    "Serve with bread or as protein snack."
  ],
  difficulty: "Easy",
  cookingTime: 10,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "The ultimate protein-packed student snack — perfectly boiled eggs sprinkled with salt, pepper, or chaat masala. Simple, nutritious, and filling. Great on their own or served with bread.",

  category: "Breakfast",
  subCategory: "student",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner", "Snack"],
  beverageCategory: null,

  allergens: ["eggs"],

  budget: "economy",
  costPerServing: 30,
  baseServings: 1,
  calories: 155,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general", "diabetes", "heart", "bp", "lowfat"],

  pantryKeywords: ["eggs", "salt", "pepper", "chaat masala", "soy sauce", "water"],
  searchKeywords: ["boiled eggs", "hard boiled eggs", "soft boiled eggs", "student meal", "protein snack", "easy recipe", "budget meal", "egg breakfast"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "French Toast",
  tagline: "Egg-dipped toast, golden and sweet",
  image: "https://images.unsplash.com/photo-1593614911681-ee6c8c7b6163?w=500&h=300&fit=crop",
  cuisine: "Continental",
  ingredientsRaw: [
    "2 slices of bread",
    "1 egg",
    "2 tablespoons milk",
    "1 teaspoon sugar",
    "¼ teaspoon vanilla extract (optional)",
    "Pinch of cinnamon powder",
    "1 tablespoon butter or oil",
    "Honey or maple syrup for serving"
  ],
  stepsRaw: [
    "In a shallow bowl, beat egg well.",
    "Add milk, sugar, vanilla, and cinnamon. Mix well.",
    "Heat butter or oil in frying pan on medium heat.",
    "Dip bread slice in egg mixture, coating both sides.",
    "Let excess drip off.",
    "Place in hot pan and cook for 2-3 minutes per side.",
    "Cook until golden brown on both sides.",
    "Repeat with second slice.",
    "Serve hot with honey or maple syrup.",
    "Great for breakfast or brunch."
  ],
  difficulty: "Easy",
  cookingTime: 10,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "Golden, crispy, and sweet French toast made by dipping bread in a spiced egg and milk batter. Ready in 10 minutes and served with honey or maple syrup — a delightful student breakfast or weekend brunch treat.",

  category: "Breakfast",
  subCategory: "student",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Snack"],
  beverageCategory: null,

  allergens: ["eggs", "dairy", "wheat", "gluten"],  // egg + milk + bread

  budget: "economy",
  costPerServing: 50,
  baseServings: 1,
  calories: 300,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["bread", "egg", "milk", "sugar", "vanilla", "cinnamon", "butter", "oil", "honey", "maple syrup"],
  searchKeywords: ["french toast", "egg toast", "sweet toast", "student breakfast", "quick breakfast", "easy recipe", "continental breakfast", "golden toast"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Scrambled Eggs",
  tagline: "Fluffy and creamy scrambled eggs",
  image: "https://images.unsplash.com/photo-1559919436-8d6f6ee0117a?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "2 eggs",
    "1 tablespoon milk or water",
    "Salt to taste",
    "¼ teaspoon black pepper",
    "1 teaspoon butter or oil",
    "Optional: chopped onions, tomatoes, green chili"
  ],
  stepsRaw: [
    "Break eggs into a bowl.",
    "Add milk, salt, and pepper.",
    "Beat well with fork until fluffy.",
    "If using vegetables, add them now.",
    "Heat butter or oil in pan on medium heat.",
    "Pour egg mixture into pan.",
    "Let it set for 30 seconds.",
    "Gently stir with spatula, pushing cooked parts to center.",
    "Cook until eggs are set but still moist.",
    "Remove from heat immediately.",
    "Serve hot with toast or bread."
  ],
  difficulty: "Easy",
  cookingTime: 5,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "Soft, fluffy, and creamy scrambled eggs ready in 5 minutes. Customize with onions, tomatoes, or green chili for a desi twist. A quick, protein-rich student breakfast best served with hot toast.",

  category: "Breakfast",
  subCategory: "student",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Snack"],
  beverageCategory: null,

  allergens: ["eggs", "dairy"],   // eggs + milk/butter

  budget: "economy",
  costPerServing: 35,
  baseServings: 1,
  calories: 200,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general", "diabetes", "heart", "bp", "lowfat"],

  pantryKeywords: ["eggs", "milk", "butter", "oil", "salt", "black pepper", "onion", "tomato", "green chili"],
  searchKeywords: ["scrambled eggs", "fluffy eggs", "student breakfast", "quick breakfast", "easy recipe", "budget meal", "creamy eggs", "egg toast"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Aloo Paratha (Ready-made)",
  tagline: "Quick potato-stuffed flatbread",
  image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "2 ready-made aloo parathas",
    "2 tablespoons oil or ghee",
    "Yogurt for serving",
    "Pickle or chutney (optional)",
    "Butter for topping (optional)"
  ],
  stepsRaw: [
    "Take frozen or ready-made aloo parathas.",
    "Heat a frying pan or tawa on medium heat.",
    "Add 1 teaspoon oil or ghee.",
    "Place paratha on hot pan.",
    "Cook for 1-2 minutes until golden brown.",
    "Flip and cook other side.",
    "Add more oil around edges for crispiness.",
    "Press gently with spatula while cooking.",
    "Cook until both sides are golden and crispy.",
    "Serve hot with yogurt and pickle.",
    "Top with butter if desired."
  ],
  difficulty: "Easy",
  cookingTime: 10,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A quick and satisfying student meal using ready-made aloo parathas — crispy on the outside, soft and potato-filled on the inside. Pan-fried in minutes and served with yogurt and pickle for a complete desi breakfast.",

  category: "Breakfast",
  subCategory: "student",

  dietType: "Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy", "wheat", "gluten"],  // ghee + yogurt + paratha dough

  budget: "economy",
  costPerServing: 60,
  baseServings: 1,
  calories: 320,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["aloo paratha", "ready made paratha", "oil", "ghee", "yogurt", "pickle", "chutney", "butter"],
  searchKeywords: ["aloo paratha", "ready made paratha", "student breakfast", "quick breakfast", "easy recipe", "budget meal", "potato paratha", "desi breakfast"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Chana Chaat",
  tagline: "Spicy and tangy chickpea salad",
  image: "https://images.unsplash.com/photo-1572799011048-50b9c6d2937f?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 cup boiled chickpeas (canned or fresh)",
    "1 small onion, finely chopped",
    "1 small tomato, chopped",
    "½ cucumber, chopped",
    "1 green chili, chopped (optional)",
    "1 tablespoon chopped coriander",
    "1 teaspoon chaat masala",
    "½ teaspoon roasted cumin powder",
    "1 tablespoon lemon juice",
    "Salt to taste"
  ],
  stepsRaw: [
    "If using canned chickpeas, drain and rinse well.",
    "In a large bowl, combine chickpeas, onion, tomato, cucumber.",
    "Add green chili if using.",
    "Add chaat masala, cumin powder, and salt.",
    "Mix everything well.",
    "Add lemon juice and mix again.",
    "Garnish with fresh coriander.",
    "Taste and adjust seasoning.",
    "Serve immediately as snack or light meal.",
    "Can be served with puri or crackers."
  ],
  difficulty: "Easy",
  cookingTime: 10,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A zesty and spicy Pakistani chana chaat with boiled chickpeas tossed in chaat masala, lemon juice, onion, tomato, and cucumber. No cooking needed — a filling, healthy, and budget-friendly student snack.",

  category: "Snacks",
  subCategory: "student",

  dietType: "Vegetarian",
  suitableForMeals: ["Lunch", "Snack"],
  beverageCategory: null,

  allergens: [],

  budget: "economy",
  costPerServing: 50,
  baseServings: 2,
  calories: 210,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general", "diabetes", "heart", "bp", "lowfat"],

  pantryKeywords: ["chickpeas", "chana", "onion", "tomato", "cucumber", "green chili", "coriander", "chaat masala", "cumin", "lemon juice"],
  searchKeywords: ["chana chaat", "chickpea chaat", "chana salad", "student snack", "quick snack", "easy recipe", "budget meal", "pakistani chaat"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Vegetable Sandwich",
  tagline: "Fresh and healthy veg sandwich",
  image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "4 slices of bread",
    "1 boiled potato, sliced",
    "1 cucumber, thinly sliced",
    "1 tomato, thinly sliced",
    "1 small onion, thinly sliced",
    "4 lettuce leaves (optional)",
    "Butter for spreading",
    "Green chutney or mayonnaise",
    "Salt and pepper to taste"
  ],
  stepsRaw: [
    "Spread butter on one side of each bread slice.",
    "Spread green chutney or mayonnaise on buttered side.",
    "Layer lettuce leaf on one slice.",
    "Arrange potato slices, cucumber, tomato, and onion.",
    "Sprinkle salt and pepper.",
    "Cover with another bread slice, buttered side down.",
    "Repeat for second sandwich.",
    "Cut diagonally into triangles.",
    "Serve immediately.",
    "Can be grilled for hot sandwich."
  ],
  difficulty: "Easy",
  cookingTime: 10,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A fresh and healthy vegetable sandwich layered with boiled potato, cucumber, tomato, and onion, spread with green chutney or mayonnaise. Light, filling, and ready in 10 minutes — perfect for campus lunch.",

  category: "Lunch",
  subCategory: "student",

  dietType: "Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Snack"],
  beverageCategory: null,

  allergens: ["dairy", "wheat", "gluten"],  // butter + bread + mayonnaise

  budget: "economy",
  costPerServing: 60,
  baseServings: 2,
  calories: 280,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["bread", "potato", "cucumber", "tomato", "onion", "lettuce", "butter", "green chutney", "mayonnaise", "salt", "pepper"],
  searchKeywords: ["vegetable sandwich", "veg sandwich", "student lunch", "quick lunch", "easy recipe", "budget meal", "healthy sandwich", "desi sandwich"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Pasta with Tomato Sauce",
  tagline: "Simple pasta with ready-made sauce",
  image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=300&fit=crop",
  cuisine: "Italian",
  ingredientsRaw: [
    "1 cup pasta (penne, macaroni, or spaghetti)",
    "2 cups water",
    "Salt for boiling water",
    "½ cup tomato pasta sauce",
    "1 teaspoon olive oil or butter",
    "¼ teaspoon dried oregano",
    "¼ teaspoon chili flakes",
    "Grated cheese (optional)"
  ],
  stepsRaw: [
    "Boil water in a pot with salt.",
    "Add pasta and cook for 8-10 minutes or as per package instructions.",
    "Drain pasta, saving some pasta water.",
    "Heat tomato sauce in same pot.",
    "Add cooked pasta to sauce.",
    "Add oregano, chili flakes, and olive oil.",
    "Mix well, adding pasta water if too dry.",
    "Cook for 1-2 minutes more.",
    "Add grated cheese if using.",
    "Mix and serve hot."
  ],
  difficulty: "Easy",
  cookingTime: 15,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A simple and satisfying pasta with ready-made tomato sauce — a go-to student meal that is ready in 15 minutes. Seasoned with oregano and chili flakes, topped with optional cheese for extra indulgence.",

  category: "Lunch",
  subCategory: "student",

  dietType: "Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["wheat", "gluten", "dairy"],  // pasta + optional cheese + butter

  budget: "economy",
  costPerServing: 100,
  baseServings: 1,
  calories: 380,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["pasta", "penne", "macaroni", "spaghetti", "tomato sauce", "olive oil", "butter", "oregano", "chili flakes", "cheese"],
  searchKeywords: ["pasta with tomato sauce", "simple pasta", "student meal", "quick lunch", "easy recipe", "budget meal", "italian pasta", "tomato pasta"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Fried Rice",
  tagline: "Quick fried rice with leftovers",
  image: "https://images.unsplash.com/photo-1585937421612-70ca003675ed?w=500&h=300&fit=crop",
  cuisine: "Chinese",
  ingredientsRaw: [
    "2 cups leftover cooked rice",
    "1 egg (optional)",
    "½ cup mixed vegetables (peas, carrots, corn)",
    "1 small onion, chopped",
    "2 tablespoons soy sauce",
    "1 tablespoon oil",
    "Salt and pepper to taste",
    "Spring onions for garnish"
  ],
  stepsRaw: [
    "Heat oil in a wok or large pan.",
    "Add chopped onion and cook until soft.",
    "Add mixed vegetables and cook for 2 minutes.",
    "Push vegetables to side, add egg and scramble.",
    "Add leftover rice and break up any lumps.",
    "Add soy sauce, salt, and pepper.",
    "Mix everything well and cook for 3-4 minutes.",
    "Garnish with chopped spring onions.",
    "Serve hot as complete meal.",
    "Add chicken or shrimp for non-veg version."
  ],
  difficulty: "Easy",
  cookingTime: 15,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A quick and clever Chinese-style fried rice using leftover cooked rice, mixed vegetables, soy sauce, and egg. The perfect way to use up leftovers — ready in 15 minutes and a complete student meal.",

  category: "Lunch",
  subCategory: "student",

  dietType: "Mixed",             // base is vegetarian but egg + optional chicken/shrimp

  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["eggs", "soy"],    // egg + soy sauce

  budget: "economy",
  costPerServing: 80,
  baseServings: 2,
  calories: 340,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["rice", "egg", "peas", "carrots", "corn", "onion", "soy sauce", "oil", "spring onions"],
  searchKeywords: ["fried rice", "chinese fried rice", "leftover rice", "student meal", "quick lunch", "easy recipe", "budget meal", "egg fried rice"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Daal Chawal",
  tagline: "Comforting lentils with rice",
  image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "½ cup masoor dal (red lentils)",
    "1 cup rice",
    "3 cups water",
    "1 teaspoon turmeric powder",
    "1 teaspoon salt",
    "1 tablespoon ghee or oil",
    "½ teaspoon cumin seeds",
    "1 dried red chili (optional)",
    "Fresh coriander for garnish"
  ],
  stepsRaw: [
    "Wash dal and rice separately.",
    "In pressure cooker, add dal, rice, water, turmeric, and salt.",
    "Close lid and cook for 2 whistles on medium heat.",
    "Let pressure release naturally.",
    "For tempering: heat ghee in small pan.",
    "Add cumin seeds and red chili.",
    "Pour tempering over cooked daal chawal.",
    "Mix gently and garnish with coriander.",
    "Serve hot with pickle or yogurt.",
    "Simple, nutritious student meal."
  ],
  difficulty: "Easy",
  cookingTime: 20,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "The most comforting Pakistani student meal — red lentils and rice cooked together in a pressure cooker and finished with a simple cumin-ghee tempering. Nutritious, filling, and budget-friendly.",

  category: "Lunch",
  subCategory: "student",

  dietType: "Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy"],           // ghee used for tempering

  budget: "economy",
  costPerServing: 50,
  baseServings: 2,
  calories: 360,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general", "diabetes", "heart", "bp", "lowfat"],

  pantryKeywords: ["masoor dal", "red lentils", "rice", "turmeric", "ghee", "oil", "cumin seeds", "dried red chili", "coriander"],
  searchKeywords: ["daal chawal", "dal chawal", "lentils rice", "student meal", "quick lunch", "easy recipe", "budget meal", "pakistani comfort food"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Chicken Sandwich",
  tagline: "Hearty sandwich with shredded chicken",
  image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6f4?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "2 slices of bread",
    "½ cup shredded cooked chicken",
    "2 tablespoons mayonnaise",
    "1 tablespoon chopped celery or onion",
    "Lettuce leaves",
    "Salt and pepper to taste",
    "Butter for toasting"
  ],
  stepsRaw: [
    "Mix shredded chicken with mayonnaise.",
    "Add chopped celery or onion.",
    "Season with salt and pepper.",
    "Butter bread slices on one side.",
    "Place lettuce leaf on unbuttered side of one slice.",
    "Spread chicken mixture over lettuce.",
    "Cover with second bread slice, buttered side out.",
    "Toast in pan until golden brown on both sides.",
    "Cut diagonally and serve hot.",
    "Great for using leftover chicken."
  ],
  difficulty: "Easy",
  cookingTime: 10,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A hearty and filling chicken sandwich made with shredded chicken mixed in creamy mayonnaise, layered with lettuce and toasted golden in butter. Perfect for using leftover chicken — a quick student lunch.",

  category: "Lunch",
  subCategory: "student",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Snack"],
  beverageCategory: null,

  allergens: ["dairy", "wheat", "gluten", "eggs"],  // butter + bread + mayonnaise

  budget: "economy",
  costPerServing: 100,
  baseServings: 1,
  calories: 380,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["bread", "chicken", "mayonnaise", "celery", "onion", "lettuce", "butter", "salt", "pepper"],
  searchKeywords: ["chicken sandwich", "shredded chicken sandwich", "student lunch", "quick lunch", "easy recipe", "budget meal", "toasted sandwich", "leftover chicken"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Paratha",
  tagline: "Stuffed paratha with minced meat",
  image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&h=300&fit=crop",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "2 ready-made parathas",
    "½ cup cooked minced meat (qeema)",
    "1 small onion, finely chopped",
    "1 green chili, chopped",
    "1 tablespoon oil",
    "¼ teaspoon garam masala",
    "Salt to taste",
    "Fresh coriander for garnish"
  ],
  stepsRaw: [
    "Heat oil in pan, add chopped onion.",
    "Cook until onion is golden brown.",
    "Add cooked qeema and green chili.",
    "Add garam masala and salt, mix well.",
    "Cook for 2-3 minutes, then remove from heat.",
    "Add fresh coriander, mix.",
    "Take paratha, place qeema mixture in center.",
    "Fold paratha over filling or make roll.",
    "Heat in pan until crispy on both sides.",
    "Serve hot with yogurt or raita."
  ],
  difficulty: "Easy",
  cookingTime: 10,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A filling qeema paratha made with ready-made parathas stuffed with spiced minced meat, onion, and green chili. Crispy outside, juicy inside — a protein-packed Pakistani student meal ready in 10 minutes.",

  category: "Breakfast",
  subCategory: "student",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["wheat", "gluten"],  // paratha dough

  budget: "economy",
  costPerServing: 120,
  baseServings: 1,
  calories: 420,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["paratha", "qeema", "minced meat", "onion", "green chili", "oil", "garam masala", "coriander"],
  searchKeywords: ["qeema paratha", "minced meat paratha", "stuffed paratha", "student meal", "quick breakfast", "easy recipe", "budget meal", "desi breakfast"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},
];

async function migrate() {
  try {
    console.log('🔌 Connecting to MongoDB...');
const mongoURI = process.env.MONGO_URI || process.env.MONGODB_URI || process.env.MONGOURI;
if (!mongoURI) throw new Error('MongoDB URI not found');
await mongoose.connect(mongoURI, { serverSelectionTimeoutMS: 10000, family: 4 });   
 console.log('✅ Connected to MongoDB!');
    let added = 0;
    let skipped = 0;

    for (let recipe of recipesToMigrate) {
      const existing = await Recipe.findOne({ title: recipe.title });
      if (!existing) {
        await Recipe.create(recipe);
        console.log(`✅ Added: ${recipe.title}`);
        added++;
      } else {
        console.log(`⚠️ Skipped: ${recipe.title} (already exists)`);
        skipped++;
      }
    }

    console.log('\n🎉 Migration Complete!');
    console.log(`📊 Added: ${added}, Skipped: ${skipped}`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

migrate();