// 18-qeema.js - COMPLETE (36 recipes)
const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');
require('dotenv').config({ path: '../.env' });

const recipesToMigrate = [
  // ==================== BASIC QEEMA (5) ====================
  {
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Simple Qeema",
  tagline: "Basic minced meat curry - everyday comfort food",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mutton or chicken mince - fresh",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1 teaspoon coriander powder",
    "1 teaspoon garam masala",
    "1/2 cup cooking oil",
    "Salt to taste",
    "Fresh coriander leaves for garnish",
    "2 green chilies - slit lengthwise",
    "1/2 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds until fragrant.",
    "Add finely chopped onions and sauté for 6-7 minutes until they turn golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until the raw smell disappears.",
    "Add mince and fry on high heat for 8-10 minutes until the mince changes color and is well-browned. Break up any lumps with a spatula.",
    "Add chopped tomatoes and cook for 5-6 minutes until they become soft and mushy.",
    "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes until the spices are fragrant.",
    "Add 1/2 cup of warm water and stir well. Cover and cook on medium heat for 15-20 minutes until the mince is fully cooked and the gravy has thickened.",
    "Sprinkle garam masala and garnish with fresh coriander leaves and green chilies.",
    "Serve hot with naan, roti, or steamed rice."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,

  description: "A simple and hearty everyday Pakistani qeema made with mutton or chicken mince cooked in a spiced onion-tomato masala. Quick to make, deeply flavorful, and perfect with naan, roti, or rice.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 160,
  baseServings: 4,
  calories: 310,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "mutton", "chicken", "onion", "tomato", "ginger", "garlic", "cumin", "turmeric", "red chili", "coriander", "garam masala", "oil"],
  searchKeywords: ["simple qeema", "qeema", "minced meat curry", "pakistani qeema", "basic qeema", "mince curry", "everyday qeema", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},{
  title: "Qeema Masala",
  tagline: "Spicy minced meat masala - bold and flavorful",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - blended into smooth puree",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1 teaspoon garam masala",
    "1/2 cup cooking oil",
    "Salt to taste",
    "Fresh coriander leaves for garnish"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry on high heat for 8-10 minutes until well-browned and any liquid has evaporated.",
    "Add tomato puree and cook for 6-7 minutes until the oil separates from the masala.",
    "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
    "Cook for another 10-12 minutes until the mince is fully cooked and the masala is thick.",
    "Sprinkle garam masala and garnish with fresh coriander leaves.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,
  description: "A bold and spicy Pakistani qeema masala made with fresh mince cooked in a thick tomato puree and deep-fried spices. The oil-separated masala gives it an intense, restaurant-style flavor perfect with naan or roti.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 160,
  baseServings: 4,
  calories: 320,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "onion", "tomato", "ginger", "garlic", "cumin", "turmeric", "red chili", "garam masala", "oil"],
  searchKeywords: ["qeema masala", "spicy qeema", "minced meat masala", "pakistani qeema", "bold qeema", "thick masala qeema", "mince curry", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  title: "Qeema Karahi",
  tagline: "Karahi style minced meat - restaurant style",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "3 medium tomatoes - finely chopped",
    "2 tablespoons ginger - julienned",
    "2 tablespoons garlic - finely chopped",
    "4 green chilies - slit",
    "1 teaspoon cumin seeds",
    "1 teaspoon red chili flakes",
    "1 teaspoon black pepper powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "Fresh coriander leaves for garnish"
  ],
  stepsRaw: [
    "Heat oil in a wok (karahi) over high heat. Add mince and fry for 8-10 minutes until well-browned. Break up any lumps.",
    "Add julienned ginger, chopped garlic, and slit green chilies. Cook for 2-3 minutes until fragrant.",
    "Add chopped tomatoes and cook for 6-7 minutes until they become soft and the oil separates.",
    "Add cumin seeds, red chili flakes, black pepper powder, and salt. Mix well.",
    "Cook on high heat for 5-7 minutes, stirring frequently, until the oil comes on top and the mince is dry.",
    "Garnish with fresh coriander leaves and serve hot with naan."
  ],
  difficulty: "Medium",
  cookingTime: 30,
  isActive: true,
  isHalal: true,
  description: "A restaurant-style qeema karahi cooked in a wok on high heat with fresh tomatoes, julienned ginger, garlic, and green chilies. Dry, bold, and packed with karahi flavor — no yogurt, no cream, just pure desi taste.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 160,
  baseServings: 4,
  calories: 300,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "tomato", "ginger", "garlic", "green chili", "cumin seeds", "red chili flakes", "black pepper", "oil", "coriander"],
  searchKeywords: ["qeema karahi", "karahi qeema", "minced meat karahi", "pakistani karahi", "restaurant qeema", "dry qeema", "wok qeema", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},{
  title: "Qeema Bhuna",
  tagline: "Dry bhuna mince - thick and spicy",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 7-8 minutes until dark golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry on high heat for 10-12 minutes until well-browned and all liquid has evaporated.",
    "Add chopped tomatoes and cook for 6-7 minutes until they become dry and the oil separates.",
    "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
    "Cook on low heat for another 8-10 minutes until the mince is completely dry and the masala coats it well.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,
  description: "A bold and intensely spiced dry bhuna qeema where all moisture is cooked out until the masala clings tightly to every piece of mince. Dark fried onions and high heat give it a deep, roasted flavor.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 155,
  baseServings: 4,
  calories: 295,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "onion", "tomato", "ginger", "garlic", "cumin seeds", "turmeric", "red chili", "oil"],
  searchKeywords: ["qeema bhuna", "bhuna qeema", "dry qeema", "pakistani qeema", "thick qeema", "spicy mince", "dry mince curry", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  title: "Qeema Handi",
  tagline: "Creamy handi qeema - rich and smooth",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "1/2 cup plain yogurt - beaten until smooth",
    "2 medium onions - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/4 cup heavy cream",
    "1/2 cup cooking oil",
    "Salt to taste",
    "Fresh coriander leaves for garnish"
  ],
  stepsRaw: [
    "Heat oil in a handi or heavy-bottomed pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
    "Reduce heat to low. Add beaten yogurt slowly, stirring continuously to prevent curdling.",
    "Cover and cook for 15-20 minutes until the mince is fully cooked.",
    "Add cream and simmer for 5-7 minutes on low heat.",
    "Garnish with fresh coriander leaves and serve hot with naan."
  ],
  difficulty: "Hard",
  cookingTime: 40,
  isActive: true,
  isHalal: true,

  description: "A rich and creamy qeema handi made with spiced mince slow-cooked in yogurt and finished with heavy cream. Smooth, velvety, and deeply flavorful — a restaurant-style handi qeema perfect with hot naan.",

  category: "Dinner",
  subCategory: "qeema",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy"],           // yogurt + cream

  budget: "standard",
  costPerServing: 200,
  baseServings: 4,
  calories: 380,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "yogurt", "onion", "ginger", "garlic", "cumin seeds", "turmeric", "red chili", "cream", "oil", "coriander"],
  searchKeywords: ["qeema handi", "handi qeema", "creamy qeema", "rich qeema", "pakistani handi", "smooth mince curry", "restaurant qeema", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Matar",
  tagline: "Mince with peas - sweet and savory",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "1 cup fresh or frozen green peas",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1 teaspoon garam masala",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1/2 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
    "Add 1/2 cup of warm water and cook for 10-12 minutes until the mince is almost done.",
    "Add green peas and cook for 5-7 minutes until peas are tender.",
    "Sprinkle garam masala and serve hot with naan or roti."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A classic Pakistani qeema matar with spiced minced meat and tender green peas in a thick onion-tomato gravy. The sweetness of peas perfectly balances the bold spices — a wholesome everyday meal.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Mixed",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 170,
  baseServings: 4,
  calories: 330,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "green peas", "matar", "onion", "tomato", "ginger", "garlic", "cumin", "turmeric", "red chili", "garam masala", "oil"],
  searchKeywords: ["qeema matar", "mince with peas", "qeema matar curry", "pakistani qeema", "peas mince", "everyday qeema", "matar qeema", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Matar Pulao",
  tagline: "Rice with mince and peas - one pot meal",
  image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "300g mince - fresh",
    "1 cup fresh or frozen green peas",
    "2 cups basmati rice - washed and soaked for 30 minutes",
    "2 medium onions - thinly sliced",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "4 whole cloves",
    "2 green cardamom pods",
    "1 small cinnamon stick",
    "1/2 cup cooking oil",
    "Salt to taste",
    "3 cups warm water"
  ],
  stepsRaw: [
    "Wash basmati rice thoroughly and soak in water for 30 minutes. Drain before using.",
    "Heat oil in a large pot over medium heat. Add whole spices (cloves, cardamom, cinnamon) and cumin seeds. Sauté for 30 seconds until fragrant.",
    "Add sliced onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add green peas and salt. Cook for 3-4 minutes.",
    "Add 3 cups of warm water and bring to a boil.",
    "Add soaked and drained rice. Stir gently.",
    "Cover and cook on low heat for 15-20 minutes until the rice is fully cooked and water is absorbed.",
    "Serve hot with raita (yogurt sauce)."
  ],
  difficulty: "Medium",
  cookingTime: 45,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A fragrant one-pot qeema matar pulao with basmati rice, spiced minced meat, and green peas cooked together with whole aromatic spices. Simple, satisfying, and full of flavor — best served with raita.",

  category: "Lunch",
  subCategory: "qeema",             // qeema-based rice dish — qeema subCategory fits best

  dietType: "Mixed",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 180,
  baseServings: 4,
  calories: 420,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "basmati rice", "green peas", "matar", "onion", "ginger", "garlic", "cumin seeds", "cloves", "cardamom", "cinnamon", "oil"],
  searchKeywords: ["qeema matar pulao", "mince peas pulao", "qeema pulao", "one pot meal", "pakistani pulao", "rice with mince", "matar pulao", "raita"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Matar Curry",
  tagline: "Mince and peas curry - with extra gravy",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "1 cup fresh or frozen green peas",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - blended into smooth puree",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add tomato puree and cook for 6-7 minutes until the oil separates.",
    "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
    "Add 1 cup of warm water and bring to a boil. Simmer for 10-12 minutes.",
    "Add green peas and cook for 5-7 minutes until peas are tender.",
    "Serve hot with naan or steamed rice."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A saucier version of qeema matar with extra tomato-based gravy — perfect for pouring over rice or scooping with naan. Spiced mince and tender green peas swim in a rich, oil-separated curry sauce.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 170,
  baseServings: 4,
  calories: 340,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "green peas", "matar", "onion", "tomato", "ginger", "garlic", "cumin seeds", "turmeric", "red chili", "oil"],
  searchKeywords: ["qeema matar curry", "mince peas curry", "qeema matar gravy", "pakistani qeema", "saucy qeema", "peas mince curry", "extra gravy qeema", "rice"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Matar Masala",
  tagline: "Spicy mince with peas - extra flavorful",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "1 cup fresh or frozen green peas",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "2 teaspoons red chili powder",
    "1 teaspoon garam masala",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1/2 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add red chili powder and salt. Mix well and cook for 2-3 minutes.",
    "Add 1/2 cup of warm water and cook for 10-12 minutes.",
    "Add green peas and cook for 5-7 minutes until peas are tender.",
    "Sprinkle garam masala and serve hot with naan or roti."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "An extra spicy and flavorful qeema matar masala with bold red chili and aromatic garam masala. Thicker and drier than the curry version — the masala clings to every piece of mince and pea.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 170,
  baseServings: 4,
  calories: 325,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "green peas", "matar", "onion", "tomato", "ginger", "garlic", "cumin seeds", "red chili", "garam masala", "oil"],
  searchKeywords: ["qeema matar masala", "spicy qeema matar", "mince peas masala", "pakistani qeema", "extra spicy qeema", "bold qeema matar", "dry qeema matar", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Aloo",
  tagline: "Mince with potatoes - hearty and filling",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "2 medium potatoes - peeled and cut into cubes",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1 teaspoon garam masala",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
    "Add potato cubes and 1 cup of warm water. Stir well.",
    "Cover and cook for 15-20 minutes until the potatoes are tender and the mince is cooked.",
    "Sprinkle garam masala and serve hot with naan or roti."
  ],
  difficulty: "Medium",
  cookingTime: 40,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A hearty and filling qeema aloo with spiced minced meat and soft potato cubes cooked together in a thick onion-tomato masala. A complete, budget-friendly Pakistani meal loved by the whole family.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Mixed",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 175,
  baseServings: 4,
  calories: 380,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "potato", "aloo", "onion", "tomato", "ginger", "garlic", "cumin seeds", "turmeric", "red chili", "garam masala", "oil"],
  searchKeywords: ["qeema aloo", "mince with potato", "aloo qeema", "pakistani qeema", "hearty qeema", "filling qeema", "potato mince curry", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Aloo Matar",
  tagline: "Mince with potato and peas - complete meal",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "2 medium potatoes - peeled and cut into cubes",
    "1/2 cup fresh or frozen green peas",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
    "Add potato cubes and 1 cup of warm water. Cook for 10-12 minutes.",
    "Add green peas and cook for 5-7 minutes until peas and potatoes are tender.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Medium",
  cookingTime: 40,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A wholesome and complete qeema aloo matar combining spiced minced meat, soft potato cubes, and tender green peas in one pot. Three ingredients, one delicious Pakistani comfort dish — perfect with naan or roti.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Mixed",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 185,
  baseServings: 4,
  calories: 395,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "potato", "aloo", "green peas", "matar", "onion", "tomato", "ginger", "garlic", "cumin seeds", "turmeric", "red chili", "oil"],
  searchKeywords: ["qeema aloo matar", "mince potato peas", "aloo matar qeema", "pakistani qeema", "complete qeema", "three vegetable qeema", "filling curry", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Aloo Bhaji",
  tagline: "Dry mince with potatoes - perfect with roti",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "3 medium potatoes - peeled and thinly sliced",
    "2 medium onions - thinly sliced",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add sliced onions and sauté for 5-6 minutes until soft and translucent.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned and dry.",
    "Add potato slices, turmeric powder, red chili powder, and salt. Mix well.",
    "Cover and cook on low heat for 15-20 minutes until the potatoes are tender. Stir occasionally to prevent sticking.",
    "Cook uncovered for the last 5 minutes to dry out any remaining moisture.",
    "Serve hot with roti or paratha."
  ],
  difficulty: "Medium",
  cookingTime: 40,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A dry and rustic qeema aloo bhaji with thinly sliced potatoes and minced meat cooked together without any gravy. The potatoes soak up all the spices beautifully — a simple, homestyle dish perfect with roti or paratha.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Mixed",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "economy",             // no tomatoes, minimal ingredients = economy
  costPerServing: 155,
  baseServings: 4,
  calories: 370,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "potato", "aloo", "onion", "ginger", "garlic", "cumin seeds", "turmeric", "red chili", "oil"],
  searchKeywords: ["qeema aloo bhaji", "dry qeema aloo", "mince potato bhaji", "pakistani qeema", "dry mince potato", "homestyle qeema", "roti qeema", "paratha"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Aloo Karahi",
  tagline: "Karahi style mince with potatoes",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "2 medium potatoes - peeled and cut into cubes",
    "3 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "4 green chilies - slit",
    "1 teaspoon cumin seeds",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1/2 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a wok (karahi) over high heat. Add mince and fry for 8-10 minutes until well-browned.",
    "Add ginger-garlic paste and green chilies. Cook for 2-3 minutes until fragrant.",
    "Add chopped tomatoes and cook for 6-7 minutes until soft and the oil separates.",
    "Add cumin seeds, red chili powder, and salt. Mix well.",
    "Add potato cubes and 1/2 cup of warm water. Cover and cook for 15-20 minutes until potatoes are tender.",
    "Cook on high heat for the last 5 minutes to dry out any excess liquid.",
    "Serve hot with naan."
  ],
  difficulty: "Medium",
  cookingTime: 40,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A karahi-style qeema aloo cooked on high heat in a wok with tomatoes, green chilies, and potato cubes. Bold flavors, thick oil-separated gravy, and tender potatoes — a hearty Pakistani wok dish.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Mixed",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 175,
  baseServings: 4,
  calories: 375,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "potato", "aloo", "tomato", "ginger", "garlic", "green chili", "cumin seeds", "red chili", "oil"],
  searchKeywords: ["qeema aloo karahi", "karahi qeema aloo", "mince potato karahi", "pakistani karahi", "wok qeema", "spicy qeema aloo", "high heat qeema", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Palak",
  tagline: "Mince with spinach - healthy and delicious",
  image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "2 cups fresh spinach - washed and finely chopped",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add chopped spinach and cook for 3-4 minutes until wilted.",
    "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
    "Cover and cook for 8-10 minutes until the mince is fully cooked.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A healthy and delicious qeema palak combining spiced minced meat with fresh wilted spinach in a thick onion-tomato masala. Nutritious, flavorful, and a great way to add greens to your meal.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Mixed",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 170,
  baseServings: 4,
  calories: 300,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general", "heart", "bp", "lowfat"],

  pantryKeywords: ["mince", "qeema", "spinach", "palak", "onion", "tomato", "ginger", "garlic", "cumin seeds", "turmeric", "red chili", "oil"],
  searchKeywords: ["qeema palak", "mince spinach", "palak qeema", "pakistani qeema", "healthy qeema", "spinach mince curry", "iron rich qeema", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Palak Matar",
  tagline: "Mince with spinach and peas - super healthy",
  image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "2 cups fresh spinach - washed and chopped",
    "1/2 cup fresh or frozen green peas",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add chopped spinach and green peas. Cook for 3-4 minutes until spinach wilts.",
    "Add turmeric powder, red chili powder, and salt. Mix well.",
    "Cover and cook for 10-12 minutes until everything is cooked through.",
    "Serve hot with roti or naan."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A super healthy triple-combination qeema with fresh spinach and green peas. Packed with iron, protein, and fiber — a nutritious Pakistani dish that is as wholesome as it is delicious.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Mixed",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 175,
  baseServings: 4,
  calories: 315,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general", "heart", "bp", "lowfat"],

  pantryKeywords: ["mince", "qeema", "spinach", "palak", "green peas", "matar", "onion", "tomato", "ginger", "garlic", "cumin seeds", "turmeric", "red chili", "oil"],
  searchKeywords: ["qeema palak matar", "mince spinach peas", "palak matar qeema", "healthy qeema", "pakistani qeema", "nutritious mince", "iron rich", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Palak Curry",
  tagline: "Spinach mince curry - with extra gravy",
  image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "2 cups fresh spinach - blanched and pureed",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - blended into smooth puree",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1/2 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add tomato puree and cook for 6-7 minutes until the oil separates.",
    "Add spinach puree, turmeric powder, red chili powder, and salt. Mix well.",
    "Add 1/2 cup of warm water and bring to a simmer.",
    "Cover and cook for 10-12 minutes until the mince is fully cooked.",
    "Serve hot with naan or steamed rice."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A vibrant green qeema palak curry where blanched spinach is pureed into a smooth sauce with mince and tomato base. Rich, silky, and deeply nourishing — perfect poured over steamed rice or with naan.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 170,
  baseServings: 4,
  calories: 310,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general", "heart", "bp", "lowfat"],

  pantryKeywords: ["mince", "qeema", "spinach", "palak", "onion", "tomato", "ginger", "garlic", "cumin seeds", "turmeric", "red chili", "oil"],
  searchKeywords: ["qeema palak curry", "spinach mince curry", "palak qeema gravy", "green qeema curry", "pakistani qeema", "saucy palak qeema", "rice", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  title: "Qeema Shimla Mirch",
  tagline: "Mince with capsicum - colorful and tasty",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "2 medium capsicum - finely chopped",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add chopped capsicum, turmeric powder, red chili powder, and salt. Mix well.",
    "Cover and cook for 8-10 minutes until the capsicum is tender-crisp.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A colorful and tasty qeema shimla mirch with spiced minced meat and tender-crisp capsicum in a thick onion-tomato masala. The sweetness of capsicum perfectly complements the bold spiced mince.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 175,
  baseServings: 4,
  calories: 305,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "capsicum", "shimla mirch", "onion", "tomato", "ginger", "garlic", "cumin seeds", "turmeric", "red chili", "oil"],
  searchKeywords: ["qeema shimla mirch", "mince capsicum", "shimla mirch qeema", "pakistani qeema", "colorful qeema", "bell pepper mince", "capsicum curry", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Shimla Mirch Aloo",
  tagline: "Mince with capsicum and potato - complete meal",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "1 medium capsicum - finely chopped",
    "2 medium potatoes - peeled and cut into cubes",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add potato cubes, turmeric powder, red chili powder, and salt. Mix well.",
    "Add 1 cup of warm water. Cover and cook for 15-20 minutes until potatoes are tender.",
    "Add chopped capsicum and cook for 5-7 minutes until tender-crisp.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Medium",
  cookingTime: 40,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A complete and filling qeema with soft potato cubes and crunchy capsicum cooked in spiced mince masala. Three textures, one delicious dish — hearty enough to be a full meal with naan or roti.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 185,
  baseServings: 4,
  calories: 385,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "capsicum", "shimla mirch", "potato", "aloo", "onion", "tomato", "ginger", "garlic", "cumin seeds", "turmeric", "red chili", "oil"],
  searchKeywords: ["qeema shimla mirch aloo", "mince capsicum potato", "shimla mirch aloo qeema", "pakistani qeema", "complete qeema", "three ingredient qeema", "filling curry", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Shimla Mirch Matar",
  tagline: "Mince with capsicum and peas - colorful and nutritious",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "1 medium capsicum - finely chopped",
    "1/2 cup fresh or frozen green peas",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1/2 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add green peas, turmeric powder, red chili powder, and salt. Mix well.",
    "Add 1/2 cup of warm water and cook for 10-12 minutes.",
    "Add chopped capsicum and cook for 5-7 minutes until tender-crisp.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A colorful and nutritious qeema with sweet green peas and crunchy capsicum. The bright colors and contrasting textures make this a visually appealing and wholesome Pakistani mince dish.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 175,
  baseServings: 4,
  calories: 320,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "capsicum", "shimla mirch", "green peas", "matar", "onion", "tomato", "ginger", "garlic", "cumin seeds", "turmeric", "red chili", "oil"],
  searchKeywords: ["qeema shimla mirch matar", "mince capsicum peas", "shimla mirch matar qeema", "pakistani qeema", "colorful qeema", "nutritious mince", "capsicum peas curry", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Baingan",
  tagline: "Mince with eggplant - unique combination",
  image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "2 medium eggplants - cut into cubes",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1/2 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add eggplant cubes, turmeric powder, red chili powder, and salt. Mix gently.",
    "Add 1/2 cup of warm water. Cover and cook for 10-12 minutes until the eggplants are tender.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A unique and delicious qeema baingan combining spiced minced meat with soft, silky eggplant cubes in a thick masala. The eggplant soaks up all the flavors beautifully — an underrated Pakistani classic.",

  category: "Lunch",
  subCategory: "qeema",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 165,
  baseServings: 4,
  calories: 295,

  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "eggplant", "baingan", "onion", "tomato", "ginger", "garlic", "cumin seeds", "turmeric", "red chili", "oil"],
  searchKeywords: ["qeema baingan", "mince eggplant", "baingan qeema", "pakistani qeema", "unique qeema", "brinjal mince curry", "eggplant mince", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Qeema Baingan Bharta",
  tagline: "Mince with mashed eggplant - smoky and delicious",
  image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "2 large eggplants - roasted, peeled, and mashed",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 green chilies - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Roast eggplants directly on gas flame until the skin is charred and flesh is soft (about 10-15 minutes). Cool, peel, and mash. Set aside.",
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and green chilies. Cook for 5-6 minutes until soft.",
    "Add turmeric powder, red chili powder, and salt. Mix well.",
    "Add mashed eggplant and mix thoroughly. Cook for 8-10 minutes, stirring occasionally.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Hard",
  cookingTime: 40,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A smoky and indulgent qeema baingan bharta where flame-roasted mashed eggplant is folded into spiced mince with tomatoes and green chilies. The charred eggplant adds a deep, smoky complexity unlike any other qeema dish.",

  category: "Dinner",
  subCategory: "qeema",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 170,
  baseServings: 4,
  calories: 305,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mince", "qeema", "eggplant", "baingan", "roasted eggplant", "onion", "tomato", "green chili", "ginger", "garlic", "cumin seeds", "turmeric", "red chili", "oil"],
  searchKeywords: ["qeema baingan bharta", "smoky qeema", "mashed eggplant mince", "bharta qeema", "pakistani qeema", "roasted eggplant curry", "charred baingan qeema", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},
  // ==================== QEEMA + KARELA (2) ====================
  {
  title: "Qeema Karela",
  tagline: "Mince with bitter gourd - healthy and unique",
  image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "3 medium karela (bitter gourd) - thinly sliced",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1 teaspoon dry mango powder (amchur)",
    "1/2 cup cooking oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Rub karela slices with 1 teaspoon salt and set aside for 30 minutes to reduce bitterness. Rinse well with water and squeeze out the bitter juice completely.",
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add karela slices, turmeric powder, red chili powder, and salt. Mix well.",
    "Cover and cook for 10-12 minutes until the karela is tender.",
    "Sprinkle amchur powder and serve hot with roti."
  ],
  difficulty: "Hard",
  cookingTime: 45,
  isActive: true,
  isHalal: true,
  description: "Healthy and unique minced meat curry with bitter gourd (karela) – a flavorful, slightly bitter-sweet dish.",
  category: "Dinner",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,
  allergens: [],
  budget: "standard",
  costPerServing: 45,
  baseServings: 4,
  calories: 380,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "karela", "bitter gourd", "onion", "tomato", "ginger-garlic paste", "amchur", "cumin"],
  searchKeywords: ["qeema karela", "mince with bitter gourd", "karela qeema", "healthy mince curry"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
},{
  title: "Qeema Karela Aloo",
  tagline: "Mince with bitter gourd and potato",
  image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "2 medium karela - thinly sliced",
    "2 medium potatoes - peeled and cut into cubes",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1 cup warm water"
  ],
  stepsRaw: [
    "Rub karela slices with salt, set aside for 30 minutes. Rinse and squeeze out bitter juice.",
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add potato cubes, karela slices, turmeric powder, red chili powder, and salt. Mix well.",
    "Add 1 cup of warm water. Cover and cook for 15-20 minutes until the potatoes and karela are tender.",
    "Serve hot with roti."
  ],
  difficulty: "Hard",
  cookingTime: 45,
  isActive: true,
  isHalal: true,
  description: "Hearty minced meat curry with bitter gourd and potatoes – a unique, slightly bitter-sweet dish that's both filling and nutritious.",
  category: "Dinner",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,
  allergens: [],
  budget: "standard",
  costPerServing: 48,
  baseServings: 4,
  calories: 420,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "karela", "bitter gourd", "potatoes", "onion", "tomato", "ginger-garlic paste", "cumin"],
  searchKeywords: ["qeema karela aloo", "mince with bitter gourd and potato", "karela aloo qeema", "healthy mince curry"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
},{
  title: "Qeema Gobhi",
  tagline: "Mince with cauliflower - nutritious and tasty",
  image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "1 medium cauliflower - cut into small florets",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1/2 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add cauliflower florets, turmeric powder, red chili powder, and salt. Mix well.",
    "Add 1/2 cup of warm water. Cover and cook for 12-15 minutes until the cauliflower is tender.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,
  description: "Nutritious and tasty minced meat curry with cauliflower – a simple, wholesome meal perfect with naan or roti.",
  category: "Dinner",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,
  allergens: [],
  budget: "standard",
  costPerServing: 40,
  baseServings: 4,
  calories: 360,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "cauliflower", "gobhi", "onion", "tomato", "ginger-garlic paste", "cumin", "turmeric"],
  searchKeywords: ["qeema gobhi", "mince with cauliflower", "cauliflower mince curry", "nutritious qeema"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
},{
  title: "Qeema Gobhi Aloo",
  tagline: "Mince with cauliflower and potato",
  image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "1/2 medium cauliflower - cut into florets",
    "2 medium potatoes - peeled and cut into cubes",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add potato cubes, turmeric powder, red chili powder, and salt. Mix well.",
    "Add 1 cup of warm water. Cover and cook for 10-12 minutes.",
    "Add cauliflower florets and cook for 10-12 minutes until both vegetables are tender.",
    "Serve hot with roti."
  ],
  difficulty: "Medium",
  cookingTime: 40,
  isActive: true,
  isHalal: true,
  description: "Hearty minced meat curry with cauliflower and potatoes – a wholesome, satisfying meal perfect with roti.",
  category: "Dinner",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,
  allergens: [],
  budget: "standard",
  costPerServing: 42,
  baseServings: 4,
  calories: 390,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "cauliflower", "gobhi", "potatoes", "aloo", "onion", "tomato", "ginger-garlic paste", "cumin"],
  searchKeywords: ["qeema gobhi aloo", "mince with cauliflower and potato", "aloo gobhi qeema", "hearty mince curry"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
},{
  title: "Qeema Methi",
  tagline: "Mince with fenugreek leaves - aromatic and healthy",
  image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "1 large bunch fresh methi (fenugreek leaves) - washed and finely chopped",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add chopped methi leaves and cook for 3-4 minutes until wilted.",
    "Add turmeric powder, red chili powder, and salt. Mix well.",
    "Cover and cook for 8-10 minutes until the mince is fully cooked.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,
  description: "Aromatic and healthy minced meat curry with fresh fenugreek leaves (methi) – slightly bitter, deeply flavorful.",
  category: "Dinner",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,
  allergens: [],
  budget: "standard",
  costPerServing: 38,
  baseServings: 4,
  calories: 350,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "methi", "fenugreek leaves", "onion", "tomato", "ginger-garlic paste", "cumin", "turmeric"],
  searchKeywords: ["qeema methi", "mince with fenugreek", "methi qeema", "healthy mince curry"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
},{
  title: "Qeema Methi Aloo",
  tagline: "Mince with fenugreek and potato",
  image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "1 large bunch fresh methi - finely chopped",
    "2 medium potatoes - peeled and cut into cubes",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add potato cubes, turmeric powder, red chili powder, and salt. Mix well.",
    "Add 1 cup of warm water. Cover and cook for 12-15 minutes until potatoes are almost tender.",
    "Add chopped methi leaves and cook for 5-7 minutes until wilted and potatoes are tender.",
    "Serve hot with roti."
  ],
  difficulty: "Medium",
  cookingTime: 40,
  isActive: true,
  isHalal: true,
  description: "Hearty minced meat curry with fenugreek leaves and potatoes – a comforting, aromatic dish with a slight bitter note.",
  category: "Dinner",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,
  allergens: [],
  budget: "standard",
  costPerServing: 42,
  baseServings: 4,
  calories: 400,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "methi", "fenugreek leaves", "potatoes", "aloo", "onion", "tomato", "ginger-garlic paste", "cumin"],
  searchKeywords: ["qeema methi aloo", "mince with fenugreek and potato", "aloo methi qeema", "hearty mince curry"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
},
  // ==================== QEEMA + BEANS (2) ====================

{
  title: "Qeema Beans",
  tagline: "Mince with green beans - simple and tasty",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "200g fresh green beans - washed and chopped into 1-inch pieces",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1/2 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add green beans, turmeric powder, red chili powder, and salt. Mix well.",
    "Add 1/2 cup of warm water. Cover and cook for 10-12 minutes until the beans are tender.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,
  description: "Simple and tasty minced meat curry with fresh green beans – a quick, everyday Pakistani favorite.",
  category: "Dinner",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,
  allergens: [],
  budget: "standard",
  costPerServing: 38,
  baseServings: 4,
  calories: 360,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "green beans", "onion", "tomato", "ginger-garlic paste", "cumin", "turmeric"],
  searchKeywords: ["qeema beans", "mince with green beans", "beans qeema", "simple mince curry"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
},{
  title: "Qeema Beans Aloo",
  tagline: "Mince with beans and potato",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "200g fresh green beans - chopped",
    "2 medium potatoes - peeled and cut into cubes",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add potato cubes, green beans, turmeric powder, red chili powder, and salt. Mix well.",
    "Add 1 cup of warm water. Cover and cook for 15-20 minutes until the potatoes and beans are tender.",
    "Serve hot with roti."
  ],
  difficulty: "Medium",
  cookingTime: 40,
  isActive: true,
  isHalal: true,
  description: "Hearty minced meat curry with green beans and potatoes – a filling, wholesome one-pot meal.",
  category: "Dinner",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,
  allergens: [],
  budget: "standard",
  costPerServing: 42,
  baseServings: 4,
  calories: 410,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "green beans", "potatoes", "aloo", "onion", "tomato", "ginger-garlic paste", "cumin"],
  searchKeywords: ["qeema beans aloo", "mince with beans and potato", "aloo beans qeema", "hearty mince curry"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
},{
  title: "Qeema Tinday",
  tagline: "Mince with apple gourd - light and healthy",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "500g tinday (apple gourd) - peeled and cut into cubes",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1/2 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add tinday cubes, turmeric powder, red chili powder, and salt. Mix gently.",
    "Add 1/2 cup of warm water. Cover and cook for 10-12 minutes until the tinday is tender.",
    "Serve hot with roti."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,
  description: "Light and healthy minced meat curry with apple gourd (tinda) – a refreshing, low-calorie dish.",
  category: "Dinner",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,
  allergens: [],
  budget: "standard",
  costPerServing: 36,
  baseServings: 4,
  calories: 340,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "tinday", "apple gourd", "onion", "tomato", "ginger-garlic paste", "cumin", "turmeric"],
  searchKeywords: ["qeema tinday", "mince with apple gourd", "tinda qeema", "light mince curry"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
},{
  title: "Qeema Kaddu",
  tagline: "Mince with pumpkin - sweet and savory",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "500g kaddu (pumpkin) - peeled and cut into cubes",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1 tablespoon jaggery or brown sugar",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1/2 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add pumpkin cubes, turmeric powder, red chili powder, jaggery, and salt. Mix well.",
    "Add 1/2 cup of warm water. Cover and cook for 12-15 minutes until the pumpkin is tender.",
    "Serve hot with roti."
  ],
  difficulty: "Medium",
  cookingTime: 35,
  isActive: true,
  isHalal: true,
  description: "Sweet and savory minced meat curry with pumpkin and a hint of jaggery – a unique, comforting dish.",
  category: "Dinner",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,
  allergens: [],
  budget: "standard",
  costPerServing: 40,
  baseServings: 4,
  calories: 380,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "kaddu", "pumpkin", "jaggery", "onion", "tomato", "ginger-garlic paste", "cumin"],
  searchKeywords: ["qeema kaddu", "mince with pumpkin", "pumpkin mince curry", "sweet savory qeema"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
},
  // ==================== QEEMA SPECIALITIES (5) ====================
  {
  title: "Qeema Naan",
  tagline: "Mince stuffed naan - perfect breakfast",
  image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "250g mince - cooked and cooled",
    "2 cups all-purpose flour (maida)",
    "1 teaspoon instant yeast",
    "1 teaspoon sugar",
    "1/2 cup plain yogurt",
    "1 tablespoon oil",
    "Salt to taste",
    "Butter for brushing",
    "Warm water as needed"
  ],
  stepsRaw: [
    "In a bowl, mix flour, yeast, sugar, and salt. Add yogurt and oil. Gradually add warm water and knead into a soft, smooth dough.",
    "Cover and let the dough rise in a warm place for 2 hours until doubled in size.",
    "Punch down the dough and divide into 6-8 equal balls.",
    "Roll each ball into a small circle. Place 2-3 tablespoons of cooked mince in the center.",
    "Gather the edges and seal tightly. Gently roll out into a naan shape.",
    "Heat a tawa (griddle) over medium heat. Place the naan on the hot tawa.",
    "Cook for 1-2 minutes, then flip. The underside should have brown spots.",
    "You can also cook directly on gas flame for a tandoori effect.",
    "Brush with butter and serve hot with yogurt or chutney."
  ],
  difficulty: "Hard",
  cookingTime: 150,
  isActive: true,
  isHalal: true,
  description: "Fluffy, soft naan stuffed with spiced minced meat – a satisfying breakfast or dinner treat.",
  category: "Breakfast",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Dinner"],
  beverageCategory: null,
  allergens: ["dairy", "gluten"],
  budget: "standard",
  costPerServing: 35,
  baseServings: 4,
  calories: 420,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "all-purpose flour", "yeast", "yogurt", "butter"],
  searchKeywords: ["qeema naan", "mince stuffed naan", "stuffed naan", "breakfast naan"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
},{
  title: "Qeema Paratha",
  tagline: "Mince stuffed paratha - hearty breakfast",
  image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "250g mince - cooked and cooled",
    "2 cups whole wheat flour",
    "1 teaspoon salt",
    "Water for kneading",
    "Oil or ghee for cooking"
  ],
  stepsRaw: [
    "In a bowl, mix whole wheat flour and salt. Gradually add water and knead into a soft, smooth dough.",
    "Cover and let the dough rest for 30 minutes.",
    "Divide the dough into 8 equal balls.",
    "Roll each ball into a small circle (about 4 inches).",
    "Place 2 tablespoons of cooked mince in the center of the circle.",
    "Gather the edges and seal tightly to form a stuffed ball.",
    "Gently roll out the stuffed ball into a paratha (circle about 6-7 inches).",
    "Heat a tawa over medium heat. Place the paratha on the hot tawa.",
    "Cook for 1-2 minutes, then flip. Apply oil or ghee on both sides.",
    "Cook until golden brown and crisp on both sides.",
    "Serve hot with yogurt, pickle, or chutney."
  ],
  difficulty: "Medium",
  cookingTime: 45,
  isActive: true,
  isHalal: true,
  description: "Hearty, flaky whole wheat paratha stuffed with spiced minced meat – a filling breakfast or dinner.",
  category: "Breakfast",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Dinner"],
  beverageCategory: null,
  allergens: ["gluten"],
  budget: "standard",
  costPerServing: 30,
  baseServings: 4,
  calories: 380,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "whole wheat flour", "ghee", "oil"],
  searchKeywords: ["qeema paratha", "mince stuffed paratha", "stuffed paratha", "hearty breakfast"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
},{
  title: "Qeema Samosa",
  tagline: "Mince stuffed samosas - crispy snack",
  image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "250g mince - cooked and cooled",
    "2 cups all-purpose flour",
    "1/4 cup oil",
    "1 teaspoon salt",
    "Water for dough",
    "Oil for deep frying"
  ],
  stepsRaw: [
    "In a bowl, mix flour, salt, and 1/4 cup oil. Rub the oil into the flour until it resembles breadcrumbs.",
    "Gradually add water and knead into a stiff dough. Cover and rest for 30 minutes.",
    "Divide the dough into small balls. Roll each ball into a thin circle.",
    "Cut each circle in half to make two semi-circles.",
    "Take one semi-circle and form a cone by overlapping the straight edges. Seal with water.",
    "Fill the cone with 1-2 tablespoons of cooked mince.",
    "Seal the top edge with water, pressing firmly.",
    "Repeat with the remaining dough and filling.",
    "Heat oil in a deep pan over medium heat for deep frying.",
    "Gently drop the samosas into the hot oil. Fry until golden brown and crispy, about 5-7 minutes.",
    "Drain on paper towels and serve hot with mint chutney or ketchup."
  ],
  difficulty: "Hard",
  cookingTime: 60,
  isActive: true,
  isHalal: true,
  description: "Crispy, golden samosas filled with spiced minced meat – a classic Pakistani tea-time snack.",
  category: "Snacks",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Snack"],
  beverageCategory: null,
  allergens: ["gluten"],
  budget: "standard",
  costPerServing: 28,
  baseServings: 4,
  calories: 310,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "all-purpose flour", "oil"],
  searchKeywords: ["qeema samosa", "mince samosa", "crispy samosa", "keema samosa"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
},{
  title: "Qeema Biryani",
  tagline: "Biryani with minced meat - aromatic and flavorful",
  image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - fresh",
    "2 cups basmati rice - washed and soaked for 30 minutes",
    "2 medium onions - thinly sliced",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "4 whole cloves",
    "2 green cardamom pods",
    "1 small cinnamon stick",
    "1 teaspoon biryani masala",
    "1/2 cup cooking oil",
    "Salt to taste",
    "Saffron strands soaked in 2 tbsp warm milk",
    "Fresh coriander and mint leaves for garnish"
  ],
  stepsRaw: [
    "Heat oil in a large pot over medium heat. Add whole spices (cloves, cardamom, cinnamon) and cumin seeds. Sauté for 30 seconds until fragrant.",
    "Add sliced onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add mince and fry for 8-10 minutes until well-browned.",
    "Add chopped tomatoes, biryani masala, and salt. Cook for 5-6 minutes until the mince is fully cooked. Set aside.",
    "In a separate pot, bring 4 cups of water to a boil. Add salt and the soaked rice.",
    "Cook the rice for 5-7 minutes until 70% done. Drain the rice.",
    "In a heavy-bottomed pot, layer half the rice, then all the mince mixture, then the remaining rice.",
    "Sprinkle saffron milk, fresh coriander, and mint leaves over the top.",
    "Cover tightly with a lid and cook on low heat (dum) for 20-25 minutes.",
    "Gently mix before serving. Serve hot with raita."
  ],
  difficulty: "Hard",
  cookingTime: 60,
  isActive: true,
  isHalal: true,
  description: "Aromatic biryani made with minced meat, whole spices, and saffron – a flavorful, royal dish.",
  category: "Dinner",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,
  allergens: [],
  budget: "standard",
  costPerServing: 55,
  baseServings: 4,
  calories: 520,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "basmati rice", "onion", "tomato", "biryani masala", "saffron", "cloves", "cardamom"],
  searchKeywords: ["qeema biryani", "mince biryani", "keema biryani", "aromatic rice dish"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
},{
  title: "Qeema Cutlet",
  tagline: "Crispy mince cutlets - perfect tea time snack",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mince - cooked",
    "2 medium potatoes - boiled and mashed",
    "1 medium onion - finely chopped",
    "2 green chilies - finely chopped",
    "1 teaspoon ginger paste",
    "1 teaspoon red chili powder",
    "1/2 teaspoon black pepper powder",
    "Salt to taste",
    "1 cup breadcrumbs for coating",
    "2 large eggs - beaten",
    "Oil for shallow frying"
  ],
  stepsRaw: [
    "In a large bowl, combine cooked mince, mashed potatoes, chopped onions, green chilies, ginger paste, red chili powder, black pepper powder, and salt.",
    "Mix everything well until combined. The mixture should be firm enough to shape.",
    "Divide the mixture into equal portions and shape into round or oval cutlets.",
    "Set up a coating station: beaten eggs in one bowl, breadcrumbs in another.",
    "Dip each cutlet into the beaten egg, then roll in breadcrumbs to coat evenly.",
    "For extra crispiness, repeat the egg and breadcrumb coating once more.",
    "Heat oil in a shallow pan over medium heat.",
    "Place the cutlets in the pan and cook for 3-4 minutes per side until golden brown and crispy.",
    "Remove and drain on paper towels.",
    "Serve hot with mint chutney or tomato ketchup."
  ],
  difficulty: "Medium",
  cookingTime: 30,
  isActive: true,
  isHalal: true,
  description: "Crispy, golden minced meat and potato cutlets – a perfect tea-time snack or appetizer.",
  category: "Snacks",
  subCategory: "qeema",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Snack"],
  beverageCategory: null,
  allergens: ["eggs", "gluten"],
  budget: "standard",
  costPerServing: 32,
  baseServings: 4,
  calories: 340,
  ageGroup: ["adults", "teens", "kids"],
  patientFriendly: ["general"],
  pantryKeywords: ["mince", "potatoes", "onion", "green chilies", "breadcrumbs", "eggs"],
  searchKeywords: ["qeema cutlet", "mince cutlet", "keema cutlet", "crispy snack"],
  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0
}
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