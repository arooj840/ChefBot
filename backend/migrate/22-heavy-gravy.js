// 15-heavy-gravy.js - COMPLETE (45 recipes)
const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');
require('dotenv').config({ path: '../.env' });

const recipesToMigrate = [
  // ==================== NIHARI (5) ====================
 {
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Beef Nihari",
  tagline: "Slow-cooked spicy beef stew - classic breakfast dish",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg beef shank - with bone, cut into large pieces",
    "1/2 cup cooking oil or ghee",
    "2 medium onions - thinly sliced",
    "2 tablespoons ginger-garlic paste",
    "2 tablespoons nihari masala powder",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1 teaspoon salt (or to taste)",
    "4 cups warm water",
    "1/4 cup wheat flour (for thickening)",
    "1/2 cup water (for flour slurry)",
    "For garnish: ginger julienne, green chilies, fresh coriander, lemon wedges"
  ],
  stepsRaw: [
    "Heat oil or ghee in a large heavy-bottomed pot over medium heat. Add sliced onions and fry for 7-8 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2-3 minutes until the raw smell disappears.",
    "Add beef pieces and fry on high heat for 10-12 minutes until the meat is well-browned on all sides.",
    "Add nihari masala, turmeric powder, red chili powder, and salt. Mix well and cook for 3-4 minutes until the spices are fragrant.",
    "Add 4 cups of warm water and bring to a boil. Stir well to combine.",
    "Reduce heat to low, cover the pot, and cook for 2-3 hours until the meat is very tender and falling off the bone. Stir occasionally.",
    "In a small bowl, mix wheat flour with 1/2 cup of water to make a smooth slurry without lumps.",
    "Slowly add the flour slurry to the nihari while stirring continuously to prevent lumps from forming.",
    "Simmer for 15-20 minutes, stirring occasionally, until the gravy thickens to the desired consistency.",
    "The nihari should have a thick, velvety gravy that coats the meat.",
    "Serve hot in bowls, garnished with julienned ginger, sliced green chilies, fresh coriander, and a squeeze of lemon juice.",
    "Enjoy with naan bread."
  ],
  difficulty: "Hard",
  cookingTime: 210,
  isActive: true,
  isHalal: true,
  description: "A rich and deeply spiced slow-cooked beef shank stew. Nihari is a beloved Pakistani classic — tender fall-off-the-bone beef in a thick, velvety gravy, traditionally enjoyed as a hearty breakfast or special meal.",
  category: "Breakfast",          // Nihari is traditionally a breakfast dish
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["wheat", "gluten"],  // wheat flour used for thickening

  budget: "standard",
  costPerServing: 280,
  baseServings: 4,
  calories: 420,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["beef", "onion", "ginger", "garlic", "nihari masala", "turmeric", "red chili", "wheat flour", "oil", "ghee"],
  searchKeywords: ["beef nihari", "nihari", "slow cooked beef", "pakistani stew", "heavy gravy", "breakfast dish", "spicy beef", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Mutton Nihari",
  tagline: "Nihari with mutton - rich and flavorful",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg mutton shanks - with bones",
    "1/2 cup cooking oil",
    "2 medium onions - thinly sliced",
    "2 tablespoons ginger-garlic paste",
    "2 tablespoons nihari masala",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1 teaspoon salt",
    "4 cups warm water",
    "1/4 cup wheat flour",
    "1/2 cup water for slurry"
  ],
  stepsRaw: [
    "Heat oil in a large pot over medium heat. Fry sliced onions for 7-8 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
    "Add mutton shanks and fry for 10-12 minutes until well-browned on all sides.",
    "Add nihari masala, turmeric, red chili powder, and salt. Mix well and cook for 3-4 minutes.",
    "Add 4 cups of warm water and bring to a boil. Reduce heat to low.",
    "Cover and cook for 2-3 hours until the mutton is very tender and falling off the bone.",
    "Mix wheat flour with 1/2 cup water to make a smooth slurry.",
    "Add the slurry to the nihari while stirring continuously.",
    "Simmer for 15-20 minutes until the gravy thickens.",
    "Serve hot with naan, garnished with ginger, green chilies, coriander, and lemon."
  ],
  difficulty: "Hard",
  cookingTime: 210,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A deeply rich and flavorful mutton nihari slow-cooked for hours until the meat is fall-off-the-bone tender. A traditional Pakistani dish with a thick, spiced gravy perfect with naan.",

  category: "Breakfast",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["wheat", "gluten"],

  budget: "standard",
  costPerServing: 320,
  baseServings: 4,
  calories: 440,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "onion", "ginger", "garlic", "nihari masala", "turmeric", "red chili", "wheat flour", "oil"],
  searchKeywords: ["mutton nihari", "nihari", "slow cooked mutton", "pakistani stew", "heavy gravy", "breakfast dish", "spicy mutton", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Chicken Nihari",
  tagline: "Quick chicken nihari - ready in 1 hour",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg chicken - curry cut pieces",
    "1/2 cup cooking oil",
    "2 medium onions - thinly sliced",
    "2 tablespoons ginger-garlic paste",
    "2 tablespoons nihari masala",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1 teaspoon salt",
    "3 cups warm water",
    "2 tablespoons wheat flour",
    "1/4 cup water for slurry"
  ],
  stepsRaw: [
    "Heat oil in a large pot over medium heat. Fry sliced onions for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
    "Add nihari masala, turmeric, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
    "Add 3 cups of warm water and bring to a boil. Reduce heat to low.",
    "Cover and cook for 25-30 minutes until the chicken is tender.",
    "Mix wheat flour with 1/4 cup water to make a smooth slurry.",
    "Add the slurry to the nihari while stirring continuously.",
    "Simmer for 10-15 minutes until the gravy thickens.",
    "Serve hot with naan, garnished with ginger, green chilies, and coriander."
  ],
  difficulty: "Medium",
  cookingTime: 60,
  isActive: true,
  isHalal: true,
  description: "A quicker version of the classic nihari made with tender chicken pieces. Same rich spiced gravy and bold flavors — ready in just one hour. Perfect for weekday cravings.",

  category: "Breakfast",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["wheat", "gluten"],

  budget: "standard",
  costPerServing: 200,
  baseServings: 4,
  calories: 340,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "onion", "ginger", "garlic", "nihari masala", "turmeric", "red chili", "wheat flour", "oil"],
  searchKeywords: ["chicken nihari", "nihari", "quick nihari", "pakistani stew", "heavy gravy", "spicy chicken", "naan", "easy nihari"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  title: "Bong Nihari",
  tagline: "Nihari with bone marrow - extra rich",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg beef with marrow bones (nalli)",
    "1/2 cup cooking oil",
    "2 medium onions - thinly sliced",
    "2 tablespoons ginger-garlic paste",
    "2 tablespoons nihari masala",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1 teaspoon salt",
    "4 cups warm water",
    "1/4 cup wheat flour",
    "1/2 cup water for slurry"
  ],
  stepsRaw: [
    "Follow the same steps as beef nihari.",
    "Ensure you use beef shanks with visible marrow bones.",
    "The marrow will melt into the gravy, making it extra rich and flavorful.",
    "Cook for 3-4 hours until the marrow is completely dissolved.",
    "Serve with extra marrow pieces on top as garnish.",
    "Enjoy with naan bread."
  ],
  difficulty: "Hard",
  cookingTime: 240,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "The richest version of nihari — made with beef nalli (marrow bones) that slowly melt into the gravy, creating an intensely flavorful and silky thick stew. A true indulgence for nihari lovers.",

  category: "Breakfast",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["wheat", "gluten"],

  budget: "standard",
  costPerServing: 300,
  baseServings: 4,
  calories: 480,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["beef", "marrow bones", "nalli", "onion", "ginger", "garlic", "nihari masala", "turmeric", "red chili", "wheat flour", "oil"],
  searchKeywords: ["bong nihari", "nalli nihari", "bone marrow nihari", "nihari", "pakistani stew", "heavy gravy", "rich nihari", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},{
  title: "Special Nihari",
  tagline: "Restaurant style nihari - extra rich",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg beef - shank with bone",
    "1/2 cup oil",
    "3 medium onions - thinly sliced",
    "3 tablespoons ginger-garlic paste",
    "3 tablespoons nihari masala",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1 teaspoon salt",
    "1 teaspoon garam masala",
    "4 cups water",
    "1/4 cup wheat flour",
    "1/2 cup water for slurry",
    "For garnish: ginger julienne, green chilies, fresh coriander, lemon"
  ],
  stepsRaw: [
    "Follow the beef nihari recipe with extra onions and spices.",
    "Add garam masala at the end for extra aroma.",
    "Cook for 3-4 hours for the richest flavor.",
    "Garnish generously with all toppings.",
    "Serve with naan and enjoy."
  ],
  difficulty: "Hard",
  cookingTime: 240,
  isActive: true,
  isHalal: true,
  description: "A restaurant-style special nihari made with extra onions, spices, and slow-cooked beef shank for maximum richness. Finished with garam masala and generous garnishes — the ultimate nihari experience.",
  category: "Breakfast",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["wheat", "gluten"],

  budget: "standard",
  costPerServing: 320,
  baseServings: 4,
  calories: 460,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["beef", "onion", "ginger", "garlic", "nihari masala", "turmeric", "red chili", "garam masala", "wheat flour", "oil"],
  searchKeywords: ["special nihari", "restaurant nihari", "nihari", "beef nihari", "heavy gravy", "pakistani stew", "rich nihari", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  title: "Beef Haleem",
  tagline: "Slow-cooked meat and lentil porridge - complete meal",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g beef - boneless, cut into cubes",
    "1 cup whole wheat (dalia) - washed and soaked",
    "1/2 cup chana dal - washed and soaked",
    "1/2 cup moong dal - washed",
    "1/2 cup masoor dal - washed",
    "2 medium onions - thinly sliced",
    "2 tablespoons ginger-garlic paste",
    "2 teaspoons red chili powder",
    "1 teaspoon turmeric powder",
    "1 teaspoon cumin powder",
    "1 teaspoon coriander powder",
    "1 teaspoon garam masala",
    "1 cup cooking oil",
    "Salt to taste",
    "For garnish: fried onions, ginger julienne, green chilies, coriander, lemon wedges"
  ],
  stepsRaw: [
    "Soak wheat, chana dal, moong dal, and masoor dal in water for 2 hours. Drain before cooking.",
    "In a pressure cooker, add beef with turmeric powder, salt, and 2 cups of water. Pressure cook for 4-5 whistles until very tender.",
    "In a separate large pot, add soaked wheat and dals with 4 cups of water. Cook until very soft and mushy (about 45-60 minutes).",
    "Heat oil in a large pan over medium heat. Add sliced onions and fry for 7-8 minutes until golden brown. Remove half for garnish.",
    "Add ginger-garlic paste to the remaining onions and cook for 2-3 minutes until fragrant.",
    "Add red chili powder, cumin powder, coriander powder, and salt. Cook for 2 minutes.",
    "Add the cooked beef along with its stock. Shred the meat using two forks or a masher.",
    "Add the cooked wheat and dal mixture. Mix everything well.",
    "Reduce heat to low and cook for 30-40 minutes, stirring continuously with a wooden spoon or whisk to blend everything together.",
    "The mixture should become thick and homogenous. Add water if needed to adjust consistency.",
    "Add garam masala and mix well. Cook for another 5-10 minutes.",
    "Serve hot in bowls, topped with fried onions, ginger julienne, sliced green chilies, fresh coriander, and a squeeze of lemon.",
    "Enjoy with naan bread."
  ],
  difficulty: "Hard",
  cookingTime: 180,
  isActive: true,
  isHalal: true,
  description: "A hearty and nutritious Pakistani haleem made with slow-cooked beef, whole wheat, and mixed lentils. Blended to a thick, rich porridge and topped with fried onions, ginger, and lemon — a complete meal in a bowl.",
  category: "Lunch",
  subCategory: "heavy-gravy",
  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,
  allergens: ["wheat", "gluten"],
  budget: "standard",
  costPerServing: 260,
  baseServings: 4,
  calories: 450,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["beef", "whole wheat", "dalia", "chana dal", "moong dal", "masoor dal", "onion", "ginger", "garlic", "red chili", "turmeric", "cumin", "coriander", "garam masala", "oil"],
  searchKeywords: ["beef haleem", "haleem", "pakistani haleem", "meat lentil porridge", "heavy gravy", "slow cooked", "dalia", "complete meal"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Mutton Haleem",
  tagline: "Haleem with mutton - rich and flavorful",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mutton - boneless cubes",
    "1 cup whole wheat (dalia)",
    "1/2 cup chana dal",
    "1/2 cup moong dal",
    "1/2 cup masoor dal",
    "2 medium onions - sliced",
    "2 tablespoons ginger-garlic paste",
    "2 teaspoons red chili powder",
    "1 teaspoon turmeric",
    "1 teaspoon cumin powder",
    "1 teaspoon coriander powder",
    "1 teaspoon garam masala",
    "1 cup oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Soak wheat and dals for 2 hours.",
    "Pressure cook mutton with turmeric and salt until very tender.",
    "Cook wheat and dals separately until soft.",
    "Heat oil, fry onions until golden. Remove half for garnish.",
    "Add ginger-garlic to remaining onions, cook for 2 minutes.",
    "Add spices and cook for 2 minutes.",
    "Add mutton with stock, shred the meat.",
    "Add cooked wheat and dals, mix well.",
    "Cook on low heat for 30-40 minutes, stirring continuously.",
    "Add garam masala and mix.",
    "Serve hot with garnishes."
  ],
  difficulty: "Hard",
  cookingTime: 180,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A rich and deeply flavorful mutton haleem slow-cooked with whole wheat and mixed lentils. The tender mutton blends into a thick, hearty porridge — a beloved Pakistani comfort food.",

  category: "Lunch",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["wheat", "gluten"],

  budget: "standard",
  costPerServing: 300,
  baseServings: 4,
  calories: 470,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "whole wheat", "dalia", "chana dal", "moong dal", "masoor dal", "onion", "ginger", "garlic", "red chili", "turmeric", "cumin", "coriander", "garam masala", "oil"],
  searchKeywords: ["mutton haleem", "haleem", "pakistani haleem", "meat lentil porridge", "heavy gravy", "slow cooked", "dalia", "rich haleem"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},{

  title: "Chicken Haleem",
  tagline: "Lighter chicken haleem - quicker to make",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g chicken - boneless cubes",
    "1 cup whole wheat (dalia)",
    "1/2 cup chana dal",
    "1/2 cup moong dal",
    "2 medium onions - sliced",
    "2 tablespoons ginger-garlic paste",
    "2 teaspoons red chili powder",
    "1 teaspoon turmeric",
    "1 teaspoon cumin powder",
    "1 cup oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Soak wheat and dals for 2 hours.",
    "Pressure cook chicken with turmeric and salt until tender. Shred the chicken.",
    "Cook wheat and dals until soft.",
    "Heat oil, fry onions until golden.",
    "Add ginger-garlic and spices, cook for 2 minutes.",
    "Add shredded chicken with stock.",
    "Add cooked wheat and dals, mix well.",
    "Cook on low heat for 20-25 minutes, stirring continuously.",
    "Serve hot with fried onions and garnishes."
  ],
  difficulty: "Hard",
  cookingTime: 120,
  isActive: true,
  isHalal: true,
  description: "A lighter and quicker version of the classic haleem made with tender shredded chicken, whole wheat, and lentils. Same thick and comforting texture — ready in less time than beef or mutton haleem.",
  category: "Lunch",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["wheat", "gluten"],

  budget: "standard",
  costPerServing: 200,
  baseServings: 4,
  calories: 390,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "whole wheat", "dalia", "chana dal", "moong dal", "onion", "ginger", "garlic", "red chili", "turmeric", "cumin", "oil"],
  searchKeywords: ["chicken haleem", "haleem", "pakistani haleem", "lighter haleem", "quick haleem", "heavy gravy", "dalia", "shredded chicken"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  title: "Hyderabadi Haleem",
  tagline: "Famous Hyderabadi haleem - rich and aromatic",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g beef or mutton",
    "1 cup whole wheat (dalia)",
    "1/2 cup chana dal",
    "1/2 cup moong dal",
    "1/2 cup rice - washed",
    "2 medium onions - sliced",
    "2 tablespoons ginger-garlic paste",
    "2 teaspoons red chili powder",
    "1 teaspoon turmeric",
    "1 teaspoon garam masala",
    "1 cup oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Soak wheat, dals, and rice for 2 hours.",
    "Pressure cook meat with turmeric and salt until tender.",
    "Cook grains and dals together until very soft.",
    "Heat oil, fry onions until golden brown.",
    "Add ginger-garlic and spices, cook for 2 minutes.",
    "Add meat with stock, shred well.",
    "Add cooked grains and dal mixture.",
    "Blend well with a whisk for 30-40 minutes.",
    "Add garam masala and serve with fried onions and nuts."
  ],
  difficulty: "Hard",
  cookingTime: 180,
  isActive: true,
  isHalal: true,

  description: "The iconic Hyderabadi haleem made with beef or mutton, whole wheat, lentils, and rice — slow-cooked and whisked to a rich, aromatic, velvety porridge. A celebrated dish of Hyderabadi cuisine loved across Pakistan.",

  category: "Lunch",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["wheat", "gluten"],

  budget: "standard",
  costPerServing: 290,
  baseServings: 4,
  calories: 460,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["beef", "mutton", "whole wheat", "dalia", "chana dal", "moong dal", "rice", "onion", "ginger", "garlic", "red chili", "turmeric", "garam masala", "oil"],
  searchKeywords: ["hyderabadi haleem", "haleem", "pakistani haleem", "rich haleem", "aromatic haleem", "heavy gravy", "beef haleem", "mutton haleem"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},{
  title: "Special Haleem",
  tagline: "Restaurant style haleem - extra rich",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mixed meat (beef and mutton)",
    "1 cup wheat",
    "1/2 cup chana dal",
    "1/2 cup moong dal",
    "1/2 cup masoor dal",
    "3 medium onions - sliced",
    "3 tablespoons ginger-garlic paste",
    "2 teaspoons red chili powder",
    "1 teaspoon turmeric",
    "1 teaspoon cumin",
    "1 teaspoon coriander",
    "1 teaspoon garam masala",
    "1 cup oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Follow the main haleem recipe with extra meat and spices.",
    "Use both beef and mutton for richer flavor.",
    "Cook for longer to achieve the perfect consistency.",
    "Garnish with fried onions, nuts, and fresh herbs.",
    "Serve hot."
  ],
  difficulty: "Hard",
  cookingTime: 210,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A restaurant-style special haleem made with a rich combination of beef and mutton, mixed lentils, and whole wheat. Extra meat, extra spices, and extra slow-cooking make this the most indulgent haleem of all.",

  category: "Lunch",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["wheat", "gluten"],

  budget: "standard",
  costPerServing: 340,
  baseServings: 4,
  calories: 490,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["beef", "mutton", "whole wheat", "chana dal", "moong dal", "masoor dal", "onion", "ginger", "garlic", "red chili", "turmeric", "cumin", "coriander", "garam masala", "oil"],
  searchKeywords: ["special haleem", "restaurant haleem", "mixed meat haleem", "beef mutton haleem", "heavy gravy", "rich haleem", "pakistani haleem", "extra rich"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  title: "Mutton Paye",
  tagline: "Trotters curry - rich and gelatinous",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "4 mutton trotters (paye) - cleaned thoroughly",
    "2 medium onions - sliced",
    "2 tablespoons ginger-garlic paste",
    "2 teaspoons red chili powder",
    "1 teaspoon turmeric powder",
    "1 teaspoon salt",
    "1 teaspoon cumin powder",
    "1 teaspoon coriander powder",
    "1 teaspoon garam masala",
    "1/2 cup cooking oil",
    "6 cups warm water",
    "1/4 cup wheat flour",
    "1/2 cup water for slurry",
    "For garnish: ginger julienne, green chilies, coriander, lemon"
  ],
  stepsRaw: [
    "Clean the trotters thoroughly. Scrub them well and remove any hair. Wash multiple times.",
    "Heat oil in a large heavy-bottomed pot over medium heat. Add sliced onions and fry for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
    "Add the cleaned trotters and fry for 10-12 minutes until they change color.",
    "Add red chili powder, turmeric powder, cumin powder, coriander powder, and salt. Mix well and cook for 3-4 minutes.",
    "Add 6 cups of warm water and bring to a boil. Reduce heat to low.",
    "Cover and cook for 3-4 hours until the meat is falling off the bones and the cartilage has softened.",
    "Mix wheat flour with 1/2 cup water to make a smooth slurry.",
    "Add the slurry to the paye while stirring continuously to prevent lumps.",
    "Simmer for 20-30 minutes until the gravy thickens to a rich, sticky consistency.",
    "Add garam masala and mix well.",
    "Serve hot with naan, garnished with ginger, green chilies, coriander, and lemon."
  ],
  difficulty: "Hard",
  cookingTime: 270,
  isActive: true,
  isHalal: true,
  description: "A classic Pakistani slow-cooked mutton trotters curry. The collagen-rich paye cook down to a thick, sticky, gelatinous gravy packed with flavor — traditionally enjoyed as a hearty breakfast with naan.",

  category: "Breakfast",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["wheat", "gluten"],

  budget: "standard",
  costPerServing: 260,
  baseServings: 4,
  calories: 410,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "trotters", "paye", "onion", "ginger", "garlic", "red chili", "turmeric", "cumin", "coriander", "garam masala", "wheat flour", "oil"],
  searchKeywords: ["mutton paye", "paye", "trotters curry", "pakistani paye", "heavy gravy", "slow cooked", "breakfast dish", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  title: "Beef Paye",
  tagline: "Beef trotters curry - hearty and rich",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "4 beef trotters - cleaned",
    "2 medium onions - sliced",
    "2 tablespoons ginger-garlic paste",
    "2 teaspoons red chili powder",
    "1 teaspoon turmeric",
    "1 teaspoon salt",
    "1 teaspoon cumin powder",
    "1/2 cup oil",
    "6 cups water",
    "1/4 cup flour",
    "1/2 cup water for slurry"
  ],
  stepsRaw: [
    "Clean beef trotters thoroughly.",
    "Heat oil, fry onions until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes.",
    "Add trotters and fry for 10-12 minutes.",
    "Add spices and salt. Mix well.",
    "Add 6 cups of water and bring to a boil.",
    "Cover and cook for 3-4 hours until very tender.",
    "Make flour slurry and add to the curry.",
    "Simmer for 20 minutes until thickened.",
    "Serve hot with naan."
  ],
  difficulty: "Hard",
  cookingTime: 270,
  isActive: true,
  isHalal: true,

  description: "A hearty and rich beef trotters curry slow-cooked for hours until the meat is melt-in-your-mouth tender. The thick, sticky gravy is deeply flavorful — a true Pakistani comfort dish best enjoyed with hot naan.",

  category: "Breakfast",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["wheat", "gluten"],

  budget: "standard",
  costPerServing: 280,
  baseServings: 4,
  calories: 430,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["beef", "trotters", "paye", "onion", "ginger", "garlic", "red chili", "turmeric", "cumin", "wheat flour", "oil"],
  searchKeywords: ["beef paye", "paye", "beef trotters curry", "pakistani paye", "heavy gravy", "slow cooked", "breakfast dish", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},{
  title: "Kashmiri Paye",
  tagline: "Kashmiri style trotters - aromatic",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "4 mutton trotters - cleaned",
    "2 medium onions - sliced",
    "2 tablespoons ginger-garlic paste",
    "2 teaspoons red chili powder",
    "1 teaspoon fennel powder",
    "1 teaspoon dry ginger powder",
    "1 teaspoon salt",
    "1/2 cup oil",
    "1 cup yogurt - beaten",
    "6 cups water"
  ],
  stepsRaw: [
    "Clean trotters thoroughly.",
    "Heat oil, fry onions until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes.",
    "Add trotters and fry for 10 minutes.",
    "Add fennel powder, dry ginger, red chili, and salt.",
    "Add beaten yogurt and mix well. Cook for 5 minutes.",
    "Add 6 cups of water and bring to a boil.",
    "Cover and cook for 3-4 hours until tender.",
    "Serve hot with naan."
  ],
  difficulty: "Hard",
  cookingTime: 270,
  isActive: true,
  isHalal: true,

  
  description: "A fragrant Kashmiri-style mutton trotters curry cooked with fennel, dry ginger, and beaten yogurt. The aromatic spices give it a distinct Kashmiri character — slow-cooked until melt-in-your-mouth tender.",

  category: "Breakfast",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy"],           // yogurt used in gravy

  budget: "standard",
  costPerServing: 270,
  baseServings: 4,
  calories: 420,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "trotters", "paye", "onion", "ginger", "garlic", "red chili", "fennel powder", "dry ginger powder", "yogurt", "oil"],
  searchKeywords: ["kashmiri paye", "paye", "kashmiri trotters", "aromatic paye", "heavy gravy", "pakistani paye", "slow cooked", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  title: "Special Paye",
  tagline: "Rich and creamy paye - restaurant style",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "4 trotters - cleaned",
    "3 medium onions - sliced",
    "3 tablespoons ginger-garlic paste",
    "2 teaspoons red chili powder",
    "1 teaspoon turmeric",
    "1 teaspoon cumin",
    "1 teaspoon garam masala",
    "1/2 cup oil",
    "6 cups water",
    "1/4 cup flour",
    "1/2 cup yogurt"
  ],
  stepsRaw: [
    "Follow basic paye recipe.",
    "Add yogurt for extra richness and tanginess.",
    "Cook until very tender and gravy is thick.",
    "Garnish generously and serve with naan."
  ],
  difficulty: "Hard",
  cookingTime: 270,
  isActive: true,
  isHalal: true,

  description: "A restaurant-style special paye made with extra onions, yogurt, and spices for a rich, creamy, and deeply flavored trotters curry. Slow-cooked to perfection with a thick, indulgent gravy.",

  category: "Breakfast",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy", "wheat", "gluten"],  // yogurt + flour both used

  budget: "standard",
  costPerServing: 290,
  baseServings: 4,
  calories: 445,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["trotters", "paye", "onion", "ginger", "garlic", "red chili", "turmeric", "cumin", "garam masala", "yogurt", "flour", "oil"],
  searchKeywords: ["special paye", "restaurant paye", "creamy paye", "rich paye", "heavy gravy", "pakistani paye", "slow cooked", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  title: "Beef Khichda",
  tagline: "Rich meat and lentil porridge - similar to haleem",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g beef - boneless cubes",
    "1 cup rice - washed and soaked",
    "1/2 cup chana dal - soaked",
    "1/2 cup moong dal - soaked",
    "1/2 cup masoor dal - soaked",
    "2 medium onions - sliced",
    "2 tablespoons ginger-garlic paste",
    "2 teaspoons red chili powder",
    "1 teaspoon turmeric",
    "1 teaspoon cumin powder",
    "1 teaspoon garam masala",
    "1 cup oil",
    "Salt to taste",
    "For garnish: fried onions, ginger, green chilies, coriander, lemon"
  ],
  stepsRaw: [
    "Soak rice and dals for 30 minutes.",
    "Pressure cook beef with turmeric and salt until very tender. Shred the meat.",
    "In a separate pot, cook rice and dals with 4 cups of water until very soft and mushy.",
    "Heat oil in a large pan, fry onions until golden brown. Remove half for garnish.",
    "Add ginger-garlic paste to remaining onions, cook for 2 minutes.",
    "Add red chili powder, cumin, and salt. Cook for 2 minutes.",
    "Add shredded beef with its stock.",
    "Add cooked rice and dal mixture. Mix well.",
    "Cook on low heat for 20-30 minutes, stirring continuously with a wooden spoon.",
    "Mash the mixture with the back of the spoon until well blended.",
    "Add garam masala and mix well.",
    "Serve hot with fried onions, ginger, green chilies, coriander, and lemon."
  ],
  difficulty: "Hard",
  cookingTime: 120,
  isActive: true,
  isHalal: true,

  description: "A hearty Pakistani khichda made with shredded beef, rice, and mixed lentils slow-cooked and mashed into a thick, rich porridge. Similar to haleem but made with rice instead of wheat — deeply comforting and filling.",

  category: "Lunch",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],                  // no common allergens

  budget: "standard",
  costPerServing: 260,
  baseServings: 4,
  calories: 440,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["beef", "rice", "chana dal", "moong dal", "masoor dal", "onion", "ginger", "garlic", "red chili", "turmeric", "cumin", "garam masala", "oil"],
  searchKeywords: ["beef khichda", "khichda", "meat lentil porridge", "heavy gravy", "pakistani khichda", "haleem style", "shredded beef", "rice dal"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},{

  title: "Mutton Khichda",
  tagline: "Khichda with mutton - rich and flavorful",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mutton - boneless cubes",
    "1 cup rice",
    "1/2 cup chana dal",
    "1/2 cup moong dal",
    "1/2 cup masoor dal",
    "2 onions - sliced",
    "2 tablespoons ginger-garlic paste",
    "2 teaspoons red chili",
    "1 teaspoon turmeric",
    "1 teaspoon cumin",
    "1 teaspoon garam masala",
    "1 cup oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Follow same steps as beef khichda.",
    "Use mutton instead of beef.",
    "Cook until mutton is very tender.",
    "Serve hot with garnishes."
  ],
  difficulty: "Hard",
  cookingTime: 120,
  isActive: true,
  isHalal: true,
  description: "A rich and deeply flavorful mutton khichda made with tender shredded mutton, rice, and mixed lentils. Slow-cooked and mashed into a thick hearty porridge — a comforting Pakistani classic.",

  category: "Lunch",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 300,
  baseServings: 4,
  calories: 460,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "rice", "chana dal", "moong dal", "masoor dal", "onion", "ginger", "garlic", "red chili", "turmeric", "cumin", "garam masala", "oil"],
  searchKeywords: ["mutton khichda", "khichda", "meat lentil porridge", "heavy gravy", "pakistani khichda", "rich khichda", "shredded mutton", "rice dal"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  title: "Chicken Khichda",
  tagline: "Lighter chicken version - quicker to make",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g chicken - boneless cubes",
    "1 cup rice",
    "1/2 cup chana dal",
    "1/2 cup moong dal",
    "2 onions - sliced",
    "2 tablespoons ginger-garlic paste",
    "2 teaspoons red chili",
    "1 teaspoon turmeric",
    "1 teaspoon cumin",
    "1/2 cup oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Cook chicken until tender and shred.",
    "Cook rice and dals until soft.",
    "Follow same mixing process.",
    "Serve hot with garnishes."
  ],
  difficulty: "Hard",
  cookingTime: 90,
  isActive: true,
  isHalal: true,
  description: "A lighter and quicker chicken khichda made with shredded chicken, rice, and lentils. Same thick and comforting porridge texture as the beef version but ready in less time — perfect for a wholesome weekday meal.",

  category: "Lunch",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 200,
  baseServings: 4,
  calories: 390,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "rice", "chana dal", "moong dal", "onion", "ginger", "garlic", "red chili", "turmeric", "cumin", "oil"],
  searchKeywords: ["chicken khichda", "khichda", "lighter khichda", "quick khichda", "heavy gravy", "pakistani khichda", "shredded chicken", "rice dal"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

  // ==================== KORMA (4) ====================
{
  title: "Chicken Korma",
  tagline: "Rich creamy chicken curry - Mughlai dish",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg chicken - curry cut pieces",
    "1 cup plain yogurt - beaten until smooth",
    "2 medium onions - thinly sliced",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "4 whole cloves",
    "2 green cardamom pods",
    "1 small cinnamon stick",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1 teaspoon garam masala",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1/4 cup heavy cream",
    "2 tablespoons almond paste",
    "2 tablespoons fried onions for garnish"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add whole spices (cloves, cardamom, cinnamon) and cumin seeds. Sauté for 30 seconds until fragrant.",
    "Add sliced onions and fry for 7-8 minutes until dark golden brown.",
    "Remove half of the fried onions and set aside for garnish.",
    "Add ginger-garlic paste to the remaining onions and cook for 2-3 minutes until fragrant.",
    "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
    "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
    "Reduce heat to low. Add beaten yogurt slowly, stirring continuously to prevent curdling.",
    "Add 1/2 cup of warm water and stir well.",
    "Cover and cook on low heat for 20-25 minutes until the chicken is tender.",
    "Add cream and almond paste. Simmer for 5-7 minutes on low heat.",
    "Add garam masala and mix well.",
    "Garnish with reserved fried onions and serve hot with naan or rice."
  ],
  difficulty: "Medium",
  cookingTime: 60,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A rich and creamy Mughlai-style chicken korma made with yogurt, heavy cream, and almond paste. Fragrant whole spices and golden fried onions give it a royal depth of flavor — perfect with naan or rice.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy", "nuts"],   // cream, yogurt, almond paste

  budget: "standard",
  costPerServing: 240,
  baseServings: 4,
  calories: 420,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "yogurt", "onion", "ginger", "garlic", "cloves", "cardamom", "cinnamon", "turmeric", "red chili", "garam masala", "cream", "almond paste", "oil"],
  searchKeywords: ["chicken korma", "korma", "mughlai korma", "creamy chicken curry", "heavy gravy", "pakistani korma", "rich curry", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{

  title: "Mutton Korma",
  tagline: "Royal mutton korma - rich and aromatic",
  image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg mutton - curry cut pieces",
    "1 cup yogurt - beaten",
    "2 medium onions - sliced",
    "2 tablespoons ginger-garlic paste",
    "4 cloves",
    "2 cardamom",
    "1 cinnamon stick",
    "1 teaspoon turmeric",
    "2 teaspoons red chili",
    "1 teaspoon garam masala",
    "1/2 cup oil",
    "Salt to taste",
    "1/4 cup cream",
    "2 tablespoons almond paste"
  ],
  stepsRaw: [
    "Follow the same steps as chicken korma.",
    "For mutton, cook for 45-50 minutes until tender.",
    "Add more water if needed during cooking.",
    "Serve hot with naan."
  ],
  difficulty: "Hard",
  cookingTime: 90,
  isActive: true,
  isHalal: true,

  description: "A royal and aromatic mutton korma slow-cooked with yogurt, cream, and almond paste. Whole spices infuse the tender mutton with deep Mughlai flavors — a truly indulgent Pakistani classic.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy", "nuts"],   // yogurt, cream, almond paste

  budget: "standard",
  costPerServing: 320,
  baseServings: 4,
  calories: 480,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "yogurt", "onion", "ginger", "garlic", "cloves", "cardamom", "cinnamon", "turmeric", "red chili", "garam masala", "cream", "almond paste", "oil"],
  searchKeywords: ["mutton korma", "korma", "royal korma", "mughlai korma", "heavy gravy", "pakistani korma", "rich mutton curry", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  title: "Shahi Korma",
  tagline: "Royal rich korma - extra luxurious",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg chicken or mutton",
    "1 cup yogurt",
    "2 onions - sliced",
    "2 tablespoons ginger-garlic paste",
    "4 cloves",
    "2 cardamom",
    "1 cinnamon",
    "1 teaspoon turmeric",
    "1 teaspoon red chili",
    "1 teaspoon garam masala",
    "1/2 cup oil",
    "Salt to taste",
    "1/2 cup cream",
    "2 tablespoons almond paste",
    "1 tablespoon kewra water",
    "Silver leaf for garnish"
  ],
  stepsRaw: [
    "Prepare korma using the main recipe.",
    "Add extra cream for richness.",
    "Add kewra water for floral aroma.",
    "Garnish with silver leaf (varak) for royal presentation.",
    "Serve with naan."
  ],
  difficulty: "Hard",
  cookingTime: 90,
  isActive: true,
  isHalal: true,

  description: "An ultra-luxurious shahi korma with extra cream, almond paste, and fragrant kewra water. Garnished with silver leaf for a truly royal Mughlai presentation — the most indulgent korma of all.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy", "nuts"],   // yogurt, cream, almond paste

  budget: "premium",              // silver leaf + extra cream = premium
  costPerServing: 380,
  baseServings: 4,
  calories: 510,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "mutton", "yogurt", "onion", "ginger", "garlic", "cloves", "cardamom", "cinnamon", "turmeric", "red chili", "garam masala", "cream", "almond paste", "kewra water", "oil"],
  searchKeywords: ["shahi korma", "royal korma", "mughlai korma", "luxurious korma", "heavy gravy", "pakistani korma", "kewra korma", "silver leaf"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Nawabi Korma",
  tagline: "Nawabi style korma - rich with nuts",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg meat (chicken or mutton)",
    "1 cup yogurt",
    "2 onions - sliced",
    "2 tablespoons ginger-garlic paste",
    "Whole spices (cloves, cardamom, cinnamon)",
    "1 teaspoon turmeric",
    "1 teaspoon red chili",
    "1 teaspoon garam masala",
    "1/2 cup oil",
    "1/2 cup cream",
    "2 tablespoons almond paste",
    "2 tablespoons cashew paste"
  ],
  stepsRaw: [
    "Cook meat with spices until tender.",
    "Add both almond and cashew pastes for richness.",
    "Add cream at the end.",
    "Garnish with fried onions and nuts.",
    "Serve hot."
  ],
  difficulty: "Hard",
  cookingTime: 90,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A Nawabi-style korma loaded with double nut paste — almond and cashew — along with yogurt and cream. Rich, velvety, and deeply aromatic, this is a dish fit for royalty.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy", "nuts"],   // yogurt, cream, almond paste, cashew paste

  budget: "premium",              // double nut paste + cream = premium
  costPerServing: 400,
  baseServings: 4,
  calories: 530,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "mutton", "yogurt", "onion", "ginger", "garlic", "cloves", "cardamom", "cinnamon", "turmeric", "red chili", "garam masala", "cream", "almond paste", "cashew paste", "oil"],
  searchKeywords: ["nawabi korma", "nut korma", "mughlai korma", "cashew korma", "almond korma", "heavy gravy", "pakistani korma", "rich curry"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Chicken Karahi",
  tagline: "Traditional karahi with thick gravy",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg chicken - curry cut pieces",
    "4 medium tomatoes - chopped",
    "2 tablespoons ginger - julienned",
    "2 tablespoons garlic - chopped",
    "4 green chilies - slit",
    "1 teaspoon cumin seeds",
    "1 teaspoon red chili flakes",
    "1 teaspoon black pepper powder",
    "1 teaspoon salt",
    "1/2 cup cooking oil",
    "1 cup warm water",
    "Fresh coriander for garnish"
  ],
  stepsRaw: [
    "Heat oil in a karahi (wok) over high heat. Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
    "Add julienned ginger, chopped garlic, and slit green chilies. Cook for 2-3 minutes until fragrant.",
    "Add chopped tomatoes and cook for 6-7 minutes until they become soft and mushy.",
    "Add cumin seeds, red chili flakes, black pepper, and salt. Mix well.",
    "Add 1 cup of warm water and bring to a boil.",
    "Cook on high heat for 10-12 minutes until the gravy thickens and the oil separates.",
    "The gravy should be thick and cling to the chicken pieces.",
    "Garnish with fresh coriander and serve hot with naan."
  ],
  difficulty: "Medium",
  cookingTime: 45,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A traditional Pakistani chicken karahi cooked in a wok with tomatoes, fresh ginger, garlic, and green chilies. Bold, spicy, and full of flavor with a thick oil-separated gravy — a true desi classic.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],                  // no common allergens

  budget: "standard",
  costPerServing: 220,
  baseServings: 4,
  calories: 350,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "tomato", "ginger", "garlic", "green chili", "cumin", "red chili flakes", "black pepper", "oil", "coriander"],
  searchKeywords: ["chicken karahi", "karahi", "pakistani karahi", "thick gravy", "heavy gravy", "wok chicken", "spicy chicken", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Mutton Karahi",
  tagline: "Mutton karahi with thick gravy - rich and spicy",
  image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg mutton - curry cut pieces",
    "4 medium tomatoes - chopped",
    "2 tablespoons ginger - julienned",
    "2 tablespoons garlic - chopped",
    "4 green chilies - slit",
    "1 teaspoon cumin seeds",
    "1 teaspoon red chili flakes",
    "1 teaspoon black pepper",
    "1 teaspoon salt",
    "1/2 cup oil",
    "1 cup water"
  ],
  stepsRaw: [
    "Heat oil in a karahi. Add mutton and fry for 8-10 minutes until browned.",
    "Add ginger, garlic, and green chilies. Cook for 2-3 minutes.",
    "Add tomatoes and cook until soft and oil separates.",
    "Add cumin, red chili flakes, pepper, and salt.",
    "Add 1 cup of water and cook on high heat until mutton is tender and gravy thickens (about 45-50 minutes).",
    "Serve hot with naan."
  ],
  difficulty: "Hard",
  cookingTime: 90,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A rich and spicy mutton karahi cooked in a wok with tomatoes, fresh ginger, garlic, and green chilies. Bold flavors, thick oil-separated gravy — a hearty Pakistani classic best served with hot naan.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 300,
  baseServings: 4,
  calories: 400,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "tomato", "ginger", "garlic", "green chili", "cumin", "red chili flakes", "black pepper", "oil"],
  searchKeywords: ["mutton karahi", "karahi", "pakistani karahi", "thick gravy", "heavy gravy", "spicy mutton", "wok mutton", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "White Karahi",
  tagline: "Creamy white gravy karahi - mild and rich",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg chicken - curry cut pieces",
    "1 cup plain yogurt - beaten",
    "2 tablespoons ginger paste",
    "2 tablespoons garlic paste",
    "4 green chilies - slit",
    "1 teaspoon white pepper powder",
    "1 teaspoon black pepper powder",
    "1 teaspoon salt",
    "1/2 cup oil",
    "1/2 cup heavy cream"
  ],
  stepsRaw: [
    "Heat oil in a karahi. Add chicken and fry for 5-7 minutes until white.",
    "Add ginger paste, garlic paste, and green chilies. Cook for 2-3 minutes.",
    "Add beaten yogurt and cook on high heat for 5-7 minutes until the oil separates.",
    "Add white pepper, black pepper, and salt. Mix well.",
    "Reduce heat to low and add cream. Simmer for 5-7 minutes.",
    "Do not boil after adding cream.",
    "Serve hot with naan."
  ],
  difficulty: "Medium",
  cookingTime: 40,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A creamy and mild white karahi made with chicken, yogurt, and heavy cream. No tomatoes, no red color — just a rich, silky white gravy with subtle pepper heat. Perfect for those who prefer less spice.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy"],           // yogurt + cream

  budget: "standard",
  costPerServing: 250,
  baseServings: 4,
  calories: 380,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "yogurt", "ginger", "garlic", "green chili", "white pepper", "black pepper", "cream", "oil"],
  searchKeywords: ["white karahi", "creamy karahi", "white gravy karahi", "heavy gravy", "mild karahi", "pakistani karahi", "chicken karahi", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Chicken Handi",
  tagline: "Slow-cooked creamy chicken - handi style",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg chicken - curry cut pieces",
    "1 cup plain yogurt - beaten",
    "2 medium onions - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1 teaspoon garam masala",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1/4 cup heavy cream",
    "Fresh coriander for garnish"
  ],
  stepsRaw: [
    "Heat oil in a handi or heavy-bottomed pot over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
    "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
    "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
    "Reduce heat to low. Add beaten yogurt slowly, stirring continuously to prevent curdling.",
    "Add 1/2 cup of warm water and stir well.",
    "Cover and cook on low heat for 25-30 minutes until the chicken is tender.",
    "Add cream and garam masala. Simmer for 5-7 minutes on low heat.",
    "Garnish with fresh coriander and serve hot with naan."
  ],
  difficulty: "Medium",
  cookingTime: 60,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A slow-cooked creamy chicken handi made with yogurt, cream, and aromatic spices in a traditional handi pot. Tender chicken in a rich, velvety gravy — a beloved Pakistani restaurant-style dish.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy"],           // yogurt + cream

  budget: "standard",
  costPerServing: 230,
  baseServings: 4,
  calories: 390,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "yogurt", "onion", "ginger", "garlic", "cumin", "turmeric", "red chili", "garam masala", "cream", "oil", "coriander"],
  searchKeywords: ["chicken handi", "handi", "creamy chicken", "heavy gravy", "pakistani handi", "slow cooked chicken", "restaurant style", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Mutton Handi",
  tagline: "Creamy mutton handi - rich and flavorful",
  image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg mutton - curry cut pieces",
    "1 cup yogurt - beaten",
    "2 onions - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric",
    "2 teaspoons red chili",
    "1 teaspoon garam masala",
    "1/2 cup oil",
    "Salt to taste",
    "1/4 cup cream"
  ],
  stepsRaw: [
    "Follow the same steps as chicken handi.",
    "For mutton, cook for 45-50 minutes until tender.",
    "Add more water if needed during cooking.",
    "Serve hot with naan."
  ],
  difficulty: "Hard",
  cookingTime: 90,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A rich and flavorful mutton handi slow-cooked in a traditional pot with yogurt, cream, and aromatic spices. Tender mutton in a deeply satisfying creamy gravy — perfect with naan.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy"],           // yogurt + cream

  budget: "standard",
  costPerServing: 330,
  baseServings: 4,
  calories: 460,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "yogurt", "onion", "ginger", "garlic", "cumin", "turmeric", "red chili", "garam masala", "cream", "oil"],
  searchKeywords: ["mutton handi", "handi", "creamy mutton", "heavy gravy", "pakistani handi", "slow cooked mutton", "restaurant style", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Vegetable Handi",
  tagline: "Mixed veg in creamy gravy - vegetarian delight",
  image: "https://images.unsplash.com/photo-1547592180-85f173990554",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "2 cups mixed vegetables (cauliflower, carrots, peas, beans, potatoes)",
    "1 cup yogurt - beaten",
    "2 onions - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon turmeric",
    "2 teaspoons red chili",
    "1/2 cup oil",
    "Salt to taste",
    "1/4 cup cream"
  ],
  stepsRaw: [
    "Heat oil in a handi. Add cumin seeds and onions. Sauté until golden.",
    "Add ginger-garlic paste and cook for 2 minutes.",
    "Add mixed vegetables and sauté for 3-4 minutes.",
    "Add turmeric, red chili, and salt. Mix well.",
    "Add beaten yogurt slowly, stirring continuously.",
    "Add 1/2 cup water and cook until vegetables are tender (about 15-20 minutes).",
    "Add cream and simmer for 5 minutes.",
    "Serve hot with naan or rice."
  ],
  difficulty: "Medium",
  cookingTime: 40,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A comforting vegetarian handi with mixed vegetables slow-cooked in a creamy yogurt and spice gravy. Light yet satisfying — a perfect meat-free option for the whole family.",

  category: "Lunch",
  subCategory: "heavy-gravy",

  dietType: "Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy"],           // yogurt + cream

  budget: "economy",
  costPerServing: 120,
  baseServings: 4,
  calories: 260,

  ageGroup: ["adults", "teens", "kids", "seniors"],
  patientFriendly: ["general", "heart", "bp", "lowfat"],

  pantryKeywords: ["cauliflower", "carrots", "peas", "beans", "potatoes", "yogurt", "onion", "ginger", "garlic", "cumin", "turmeric", "red chili", "cream", "oil"],
  searchKeywords: ["vegetable handi", "veg handi", "vegetarian handi", "mixed veg curry", "heavy gravy", "pakistani vegetarian", "creamy veg", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

  // ==================== DAL GRAVY (3) ====================
 
{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Dal Makhani",
  tagline: "Creamy black lentils - restaurant style",
  image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 cup whole urad dal (black lentils) - washed and soaked overnight",
    "1/4 cup rajma (kidney beans) - washed and soaked overnight",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - blended into smooth puree",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon red chili powder",
    "1/2 teaspoon turmeric powder",
    "1/2 cup heavy cream",
    "3 tablespoons butter",
    "Salt to taste",
    "Fresh coriander for garnish"
  ],
  stepsRaw: [
    "Wash urad dal and rajma together. Soak in plenty of water overnight (8-10 hours). Drain before cooking.",
    "In a pressure cooker, add soaked dal and rajma, 3 cups of water, turmeric powder, and salt. Pressure cook for 5-6 whistles until very soft.",
    "Let the pressure release naturally. Open the lid and mash the dal well with a masher. Set aside.",
    "Heat butter in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
    "Add tomato puree and cook for 5-6 minutes until the butter separates from the masala.",
    "Add red chili powder and salt. Mix well and cook for 2 minutes.",
    "Add the cooked dal and stir well. Add 1/2 cup of water if needed.",
    "Simmer on low heat for 30-40 minutes, stirring occasionally.",
    "Add cream and simmer for another 10-15 minutes.",
    "Garnish with fresh coriander and serve hot with butter naan."
  ],
  difficulty: "Hard",
  cookingTime: 120,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A rich and creamy restaurant-style dal makhani made with slow-cooked black lentils and kidney beans in a buttery tomato gravy. Finished with heavy cream for an indulgent, velvety texture.",

  category: "Lunch",
  subCategory: "heavy-gravy",

  dietType: "Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy"],           // butter + cream

  budget: "standard",
  costPerServing: 150,
  baseServings: 4,
  calories: 380,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["urad dal", "black lentils", "rajma", "kidney beans", "onion", "tomato", "ginger", "garlic", "cumin", "red chili", "turmeric", "cream", "butter"],
  searchKeywords: ["dal makhani", "black dal", "creamy dal", "restaurant dal", "heavy gravy", "vegetarian", "Pakistani dal", "butter naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Dal Bukhara",
  tagline: "Creamy black dal from Peshawar - royal dish",
  image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 cup whole urad dal - washed and soaked overnight",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - blended into puree",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon red chili powder",
    "1/2 cup heavy cream",
    "3 tablespoons butter",
    "Salt to taste",
    "Fresh coriander for garnish"
  ],
  stepsRaw: [
    "Cook urad dal until very soft (pressure cook for 5-6 whistles).",
    "Mash the dal well.",
    "Heat butter, add onions and sauté until golden.",
    "Add ginger-garlic paste and cook for 2 minutes.",
    "Add tomato puree and cook until butter separates.",
    "Add red chili powder and salt.",
    "Add dal and simmer on low heat for 1 hour.",
    "Add cream and simmer for 10 minutes.",
    "Serve with butter naan."
  ],
  difficulty: "Hard",
  cookingTime: 120,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A royal Peshawari-style dal bukhara made with whole urad dal slow-simmered for hours in a buttery tomato gravy and finished with heavy cream. Rich, smooth, and deeply satisfying.",

  category: "Lunch",
  subCategory: "heavy-gravy",

  dietType: "Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy"],           // butter + cream

  budget: "standard",
  costPerServing: 160,
  baseServings: 4,
  calories: 370,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["urad dal", "black lentils", "onion", "tomato", "ginger", "garlic", "red chili", "cream", "butter"],
  searchKeywords: ["dal bukhara", "black dal", "peshawari dal", "creamy dal", "heavy gravy", "vegetarian", "Pakistani dal", "butter naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Dal Fry",
  tagline: "Tempered lentils - simple and delicious",
  image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 cup toor dal (pigeon pea lentils) - washed",
    "1 medium onion - finely chopped",
    "1 medium tomato - finely chopped",
    "1 teaspoon cumin seeds",
    "1 teaspoon mustard seeds",
    "2 dried red chilies",
    "2 tablespoons ghee",
    "1/2 teaspoon turmeric",
    "1 teaspoon red chili powder",
    "Salt to taste",
    "Fresh coriander for garnish"
  ],
  stepsRaw: [
    "Wash toor dal and pressure cook with 2 cups of water, turmeric, and salt for 3-4 whistles until soft.",
    "Whisk the dal until smooth. Set aside.",
    "Heat ghee in a small pan over medium heat. Add mustard seeds, cumin seeds, and dried red chilies. Let them crackle for 30 seconds.",
    "Add chopped onions and sauté for 3-4 minutes until golden.",
    "Add chopped tomatoes and cook for 2-3 minutes until soft.",
    "Add red chili powder and mix well.",
    "Pour this tempering over the cooked dal.",
    "Simmer for 5-7 minutes, stirring occasionally.",
    "Garnish with fresh coriander and serve hot with rice."
  ],
  difficulty: "Easy",
  cookingTime: 35,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A simple and delicious dal fry made with toor dal tempered in ghee with cumin, mustard seeds, onions, and tomatoes. A quick everyday dal that pairs perfectly with steamed rice.",

  category: "Lunch",
  subCategory: "heavy-gravy",

  dietType: "Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy"],           // ghee used for tempering

  budget: "economy",
  costPerServing: 80,
  baseServings: 4,
  calories: 260,

  ageGroup: ["adults", "teens", "kids", "seniors"],
  patientFriendly: ["general", "heart", "bp", "lowfat"],

  pantryKeywords: ["toor dal", "pigeon pea", "onion", "tomato", "cumin seeds", "mustard seeds", "dried red chili", "ghee", "turmeric", "red chili"],
  searchKeywords: ["dal fry", "toor dal", "tempered dal", "simple dal", "vegetarian", "Pakistani dal", "rice dal", "easy dal"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Achaar Gosht",
  tagline: "Pickle flavored meat curry - tangy and spicy",
  image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg mutton or beef - curry cut pieces",
    "2 tablespoons ginger-garlic paste",
    "2 tablespoons pickle masala (achari masala)",
    "1 teaspoon fennel seeds",
    "1 teaspoon mustard seeds",
    "1 teaspoon fenugreek seeds",
    "2 teaspoons red chili powder",
    "1 teaspoon turmeric powder",
    "1/2 cup cooking oil",
    "1 cup plain yogurt - beaten",
    "Salt to taste",
    "1 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add fennel seeds, mustard seeds, and fenugreek seeds. Let them crackle for 30 seconds.",
    "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
    "Add meat pieces and fry for 8-10 minutes until well-browned.",
    "Add pickle masala, red chili powder, turmeric, and salt. Mix well and cook for 3-4 minutes.",
    "Reduce heat to low. Add beaten yogurt slowly, stirring continuously.",
    "Add 1 cup of warm water and bring to a boil.",
    "Cover and cook for 45-50 minutes until the meat is tender.",
    "The gravy should be thick and have a distinct pickle-like tangy flavor.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Hard",
  cookingTime: 90,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A bold and tangy achaar gosht where mutton or beef is slow-cooked with pickle masala, fennel, mustard, and fenugreek seeds in a spiced yogurt gravy. A uniquely flavored Pakistani curry with a distinct pickle punch.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy"],           // yogurt in gravy

  budget: "standard",
  costPerServing: 300,
  baseServings: 4,
  calories: 420,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "beef", "ginger", "garlic", "pickle masala", "fennel seeds", "mustard seeds", "fenugreek seeds", "red chili", "turmeric", "yogurt", "oil"],
  searchKeywords: ["achaar gosht", "pickle meat curry", "achari gosht", "tangy curry", "heavy gravy", "pakistani curry", "spicy mutton", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Chicken Achaar",
  tagline: "Chicken pickle curry - quick and tangy",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg chicken - curry cut pieces",
    "2 tablespoons ginger-garlic paste",
    "2 tablespoons pickle masala",
    "1 teaspoon fennel seeds",
    "1 teaspoon mustard seeds",
    "2 teaspoons red chili powder",
    "1/2 cup oil",
    "1/2 cup yogurt",
    "Salt to taste",
    "1/2 cup water"
  ],
  stepsRaw: [
    "Marinate chicken with pickle masala for 30 minutes.",
    "Heat oil, add fennel and mustard seeds. Let them crackle.",
    "Add ginger-garlic paste and cook for 2 minutes.",
    "Add marinated chicken and fry for 5-7 minutes until white.",
    "Add red chili powder and salt.",
    "Add beaten yogurt and 1/2 cup water. Mix well.",
    "Cover and cook for 20-25 minutes until chicken is tender.",
    "Serve hot with naan."
  ],
  difficulty: "Medium",
  cookingTime: 60,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A quick and tangy chicken achaar marinated in pickle masala and cooked with fennel, mustard seeds, and yogurt. Bold achari flavors in a fraction of the time — perfect with hot naan.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy"],           // yogurt in gravy

  budget: "standard",
  costPerServing: 220,
  baseServings: 4,
  calories: 350,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "ginger", "garlic", "pickle masala", "fennel seeds", "mustard seeds", "red chili", "yogurt", "oil"],
  searchKeywords: ["chicken achaar", "achari chicken", "pickle chicken curry", "tangy chicken", "heavy gravy", "pakistani curry", "quick curry", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Kashmiri Rogan Josh",
  tagline: "Red Kashmiri curry - aromatic and rich",
  image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg mutton - curry cut pieces",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "1 teaspoon fennel powder",
    "2 teaspoons red chili powder (Kashmiri for red color)",
    "1 teaspoon dry ginger powder",
    "1 cup plain yogurt - beaten",
    "1/2 cup cooking oil",
    "1 teaspoon garam masala",
    "Salt to taste",
    "1 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
    "Add mutton pieces and fry for 8-10 minutes until well-browned.",
    "Add fennel powder, red chili powder, dry ginger powder, and salt. Mix well and cook for 2-3 minutes.",
    "Reduce heat to low. Add beaten yogurt slowly, stirring continuously.",
    "Add 1 cup of warm water and bring to a boil.",
    "Cover and cook for 45-50 minutes until the mutton is tender.",
    "Sprinkle garam masala and serve hot with naan or rice."
  ],
  difficulty: "Hard",
  cookingTime: 90,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A deeply aromatic Kashmiri rogan josh made with tender mutton slow-cooked in a vibrant red Kashmiri chili and fennel-spiced yogurt gravy. Rich, flavorful, and beautifully colored — a true classic.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy"],           // yogurt in gravy

  budget: "standard",
  costPerServing: 320,
  baseServings: 4,
  calories: 430,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "ginger", "garlic", "cumin", "fennel powder", "kashmiri red chili", "dry ginger powder", "yogurt", "garam masala", "oil"],
  searchKeywords: ["kashmiri rogan josh", "rogan josh", "kashmiri mutton", "red curry", "heavy gravy", "aromatic curry", "pakistani curry", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Rogan Josh Gravy",
  tagline: "Thick rogan josh - extra rich",
  image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg mutton",
    "2 onions - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin",
    "1 teaspoon fennel powder",
    "2 teaspoons red chili",
    "1 cup yogurt",
    "1/2 cup oil",
    "1 teaspoon garam masala",
    "Salt to taste"
  ],
  stepsRaw: [
    "Fry onions until golden brown.",
    "Add ginger-garlic paste and mutton. Fry until browned.",
    "Add spices and cook for 2 minutes.",
    "Add yogurt and cook until oil separates.",
    "Add 1 cup water and cook until mutton is tender and gravy is thick.",
    "Serve hot."
  ],
  difficulty: "Hard",
  cookingTime: 90,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A thick and extra rich rogan josh with fried onions, yogurt, and aromatic spices slow-cooked until the mutton is perfectly tender and the gravy is deep and velvety.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy"],           // yogurt in gravy

  budget: "standard",
  costPerServing: 320,
  baseServings: 4,
  calories: 440,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "onion", "ginger", "garlic", "cumin", "fennel powder", "red chili", "yogurt", "garam masala", "oil"],
  searchKeywords: ["rogan josh gravy", "rogan josh", "thick rogan josh", "mutton curry", "heavy gravy", "rich mutton", "pakistani curry", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},
  // ==================== LAHORI CHICKEN (2) ====================
  {
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Lahori Chicken",
  tagline: "Spicy Lahori style curry - bold flavors",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg chicken - curry cut pieces",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "2 teaspoons red chili powder",
    "1 teaspoon turmeric powder",
    "1 teaspoon cumin powder",
    "1 teaspoon coriander powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add chopped onions and sauté for 6-7 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
    "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add red chili powder, turmeric, cumin, coriander, and salt. Mix well and cook for 2-3 minutes.",
    "Add 1 cup of warm water and bring to a boil.",
    "Cover and cook for 20-25 minutes until the chicken is tender and the gravy has thickened.",
    "Serve hot with naan."
  ],
  difficulty: "Medium",
  cookingTime: 50,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A bold and spicy Lahori-style chicken curry packed with classic Pakistani masala flavors. Simple ingredients, rich onion-tomato base, and perfectly tender chicken — a Lahori household staple.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 200,
  baseServings: 4,
  calories: 340,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "onion", "tomato", "ginger", "garlic", "red chili", "turmeric", "cumin", "coriander", "oil"],
  searchKeywords: ["lahori chicken", "lahori curry", "spicy chicken curry", "heavy gravy", "pakistani curry", "bold curry", "desi chicken", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Lahori Karahi",
  tagline: "Lahori style karahi - spicy and thick",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg chicken",
    "4 medium tomatoes - chopped",
    "2 tablespoons ginger-garlic paste",
    "4 green chilies - slit",
    "1 teaspoon cumin seeds",
    "2 teaspoons red chili powder",
    "1 teaspoon salt",
    "1/2 cup oil",
    "Fresh coriander for garnish"
  ],
  stepsRaw: [
    "Heat oil in a karahi. Add chicken and fry for 5-7 minutes until white.",
    "Add ginger-garlic paste and green chilies. Cook for 2 minutes.",
    "Add chopped tomatoes and cook until soft and oil separates.",
    "Add cumin, red chili powder, and salt. Mix well.",
    "Cook on high heat until the gravy thickens and the chicken is tender.",
    "Garnish with coriander and serve with naan."
  ],
  difficulty: "Medium",
  cookingTime: 45,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A classic Lahori-style karahi with chicken cooked on high heat in a wok with tomatoes, green chilies, and bold spices. Thick, spicy, and full of street-food energy.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 210,
  baseServings: 4,
  calories: 340,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "tomato", "ginger", "garlic", "green chili", "cumin seeds", "red chili", "oil", "coriander"],
  searchKeywords: ["lahori karahi", "karahi", "lahori style karahi", "spicy karahi", "heavy gravy", "pakistani karahi", "street food", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Peshawari Chicken",
  tagline: "Peshawar style chicken curry - rustic and flavorful",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg chicken - curry cut pieces",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "2 teaspoons red chili powder",
    "1 teaspoon black pepper powder",
    "1 teaspoon cumin powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add chopped onions and sauté for 6-7 minutes until dark golden brown.",
    "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
    "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add red chili powder, black pepper, cumin, and salt. Mix well and cook for 2-3 minutes.",
    "Add 1 cup of warm water and bring to a boil.",
    "Cover and cook for 20-25 minutes until the chicken is tender.",
    "Serve hot with naan."
  ],
  difficulty: "Medium",
  cookingTime: 50,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A rustic and bold Peshawari-style chicken curry with dark fried onions, tomatoes, and a generous hit of black pepper. Simple, hearty, and deeply satisfying — the taste of Peshawar in every bite.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 200,
  baseServings: 4,
  calories: 340,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "onion", "tomato", "ginger", "garlic", "red chili", "black pepper", "cumin", "oil"],
  searchKeywords: ["peshawari chicken", "peshawar curry", "rustic chicken curry", "heavy gravy", "pakistani curry", "spicy chicken", "desi chicken", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Peshawari Karahi",
  tagline: "Peshawari style karahi - simple and bold",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg chicken",
    "4 tomatoes - chopped",
    "2 tablespoons ginger - julienned",
    "2 tablespoons garlic - chopped",
    "4 green chilies",
    "1 teaspoon cumin seeds",
    "1 teaspoon red chili flakes",
    "1 teaspoon black pepper",
    "1/2 cup oil"
  ],
  stepsRaw: [
    "Heat oil in a karahi. Add chicken and fry for 5-7 minutes.",
    "Add ginger, garlic, and green chilies. Cook for 2 minutes.",
    "Add tomatoes and cook until soft and oil separates.",
    "Add cumin, red chili flakes, black pepper, and salt.",
    "Cook on high heat until chicken is tender and gravy is thick.",
    "Serve hot with naan."
  ],
  difficulty: "Medium",
  cookingTime: 45,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A bold and simple Peshawari-style karahi with chicken, tomatoes, julienned ginger, and green chilies. Cooked on high heat in a wok — minimal spices, maximum flavor, pure Peshawari tradition.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 210,
  baseServings: 4,
  calories: 340,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "tomato", "ginger", "garlic", "green chili", "cumin seeds", "red chili flakes", "black pepper", "oil"],
  searchKeywords: ["peshawari karahi", "karahi", "peshawar karahi", "simple karahi", "heavy gravy", "pakistani karahi", "bold karahi", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Bhuna Gosht",
  tagline: "Dry meat curry - thick and spicy",
  image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg mutton - curry cut pieces",
    "2 medium onions - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "2 teaspoons red chili powder",
    "1 teaspoon coriander powder",
    "1/2 cup cooking oil",
    "Salt to taste",
    "1/2 cup warm water"
  ],
  stepsRaw: [
    "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
    "Add finely chopped onions and sauté for 7-8 minutes until dark golden brown.",
    "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
    "Add mutton pieces and fry for 10-12 minutes until well-browned on all sides.",
    "Add chopped tomatoes and cook for 6-7 minutes until they become dry and the oil separates.",
    "Add red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
    "Add 1/2 cup of warm water. Cover and cook on low heat for 45-50 minutes until the mutton is tender.",
    "Cook uncovered for the last 10-15 minutes to dry out the gravy.",
    "The final dish should have a thick, dry consistency with the masala clinging to the meat.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Hard",
  cookingTime: 90,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A thick and intensely spiced bhuna gosht where mutton is slow-cooked until all the moisture evaporates and the masala clings to every piece of meat. A bold, dry-style Pakistani curry with deep roasted flavors.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 300,
  baseServings: 4,
  calories: 410,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "onion", "tomato", "ginger", "garlic", "cumin seeds", "red chili", "coriander", "oil"],
  searchKeywords: ["bhuna gosht", "bhuna mutton", "dry mutton curry", "heavy gravy", "pakistani curry", "thick curry", "spicy mutton", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Chicken Bhuna",
  tagline: "Dry chicken curry - quick and flavorful",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg chicken - curry cut pieces",
    "2 onions - finely chopped",
    "2 tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin seeds",
    "2 teaspoons red chili powder",
    "1 teaspoon coriander powder",
    "1/2 cup oil",
    "Salt to taste",
    "1/4 cup water"
  ],
  stepsRaw: [
    "Follow the same steps as mutton bhuna.",
    "For chicken, cook for 20-25 minutes instead of 45 minutes.",
    "The dish should be dry with thick masala coating the chicken.",
    "Serve hot with naan."
  ],
  difficulty: "Medium",
  cookingTime: 50,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A quick and flavorful dry chicken bhuna where chicken is cooked down until the masala coats every piece. Bold roasted spices, thick dry gravy — a delicious everyday Pakistani curry ready in under an hour.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 200,
  baseServings: 4,
  calories: 330,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["chicken", "onion", "tomato", "ginger", "garlic", "cumin seeds", "red chili", "coriander", "oil"],
  searchKeywords: ["chicken bhuna", "bhuna chicken", "dry chicken curry", "heavy gravy", "pakistani curry", "thick curry", "spicy chicken", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

  // ==================== KOFTA (3) ====================
 {
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Meatball Curry",
  tagline: "Kofta in thick gravy - meatball curry",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mutton or chicken mince",
    "1 medium onion - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin powder",
    "1 teaspoon coriander powder",
    "1 teaspoon red chili powder",
    "1 large egg",
    "2 tablespoons breadcrumbs",
    "For gravy: 2 onions, 2 tomatoes",
    "1/2 cup oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "In a bowl, mix mince with chopped onion, ginger-garlic paste, cumin, coriander, red chili, egg, breadcrumbs, and salt.",
    "Shape the mixture into small lemon-sized balls (kofta).",
    "Heat oil in a shallow pan. Shallow fry the kofta for 5-7 minutes until golden brown. Remove and set aside.",
    "For gravy: In the same pan, add more oil if needed. Add chopped onions and sauté until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes.",
    "Add chopped tomatoes and cook until soft.",
    "Add red chili powder, coriander powder, and salt. Cook for 2-3 minutes.",
    "Add 1 cup of warm water and bring to a boil. Simmer for 5 minutes.",
    "Add the fried kofta and simmer for 10-12 minutes.",
    "Serve hot with naan or rice."
  ],
  difficulty: "Hard",
  cookingTime: 60,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "Classic Pakistani kofta curry with juicy spiced meatballs simmered in a rich onion-tomato gravy. Comforting, hearty, and deeply flavorful — a beloved home-style dish best served with naan or rice.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["eggs", "wheat", "gluten"], // egg + breadcrumbs

  budget: "standard",
  costPerServing: 220,
  baseServings: 4,
  calories: 380,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "chicken", "mince", "onion", "tomato", "ginger", "garlic", "cumin", "coriander", "red chili", "egg", "breadcrumbs", "oil"],
  searchKeywords: ["meatball curry", "kofta curry", "kofta", "meatball gravy", "heavy gravy", "pakistani kofta", "mince curry", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Nargisi Kofta",
  tagline: "Kofta stuffed with egg - royal dish",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mutton mince",
    "4 large eggs - hard boiled and peeled",
    "1 medium onion - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin powder",
    "1 teaspoon garam masala",
    "1 large raw egg",
    "For gravy: 2 onions, 2 tomatoes",
    "1/2 cup oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Mix mince with chopped onion, ginger-garlic paste, cumin, garam masala, raw egg, and salt.",
    "Divide the mince mixture into 4 equal portions.",
    "Take one portion and flatten it in your palm. Place a boiled egg in the center and wrap the mince around it completely.",
    "Repeat with the remaining eggs and mince.",
    "Heat oil and shallow fry the stuffed kofta until golden brown. Set aside.",
    "Prepare gravy using onions and tomatoes (same as meatball curry).",
    "Add the kofta to the gravy and simmer for 10-12 minutes.",
    "Serve hot with naan."
  ],
  difficulty: "Hard",
  cookingTime: 75,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A royal Pakistani dish where spiced mutton mince is wrapped around whole hard-boiled eggs and simmered in a rich gravy. Nargisi kofta is as impressive to look at as it is delicious to eat.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["eggs"],

  budget: "standard",
  costPerServing: 260,
  baseServings: 4,
  calories: 420,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "mince", "eggs", "onion", "tomato", "ginger", "garlic", "cumin", "garam masala", "oil"],
  searchKeywords: ["nargisi kofta", "scotch egg curry", "stuffed kofta", "egg kofta", "heavy gravy", "pakistani kofta", "royal dish", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Malai Kofta",
  tagline: "Creamy kofta curry - rich and indulgent",
  image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g mutton mince",
    "1 medium onion - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon cumin powder",
    "1 teaspoon garam masala",
    "1/4 cup heavy cream",
    "1 large egg",
    "For gravy: 2 onions, 2 tomatoes",
    "1/4 cup heavy cream",
    "1/2 cup oil",
    "Salt to taste"
  ],
  stepsRaw: [
    "Make kofta using mince, onion, ginger-garlic, cumin, garam masala, 1/4 cup cream, egg, and salt.",
    "Shape into balls and shallow fry until golden. Set aside.",
    "For gravy: Heat oil, add chopped onions and sauté until golden.",
    "Add ginger-garlic paste and cook for 2 minutes.",
    "Add tomato puree and cook until oil separates.",
    "Add red chili powder and salt. Mix well.",
    "Add 1/2 cup of warm water and bring to a simmer.",
    "Add the remaining 1/4 cup cream and stir well.",
    "Add the fried kofta and simmer for 10 minutes.",
    "Serve hot with naan."
  ],
  difficulty: "Hard",
  cookingTime: 60,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "Rich and indulgent malai kofta with cream-infused spiced mutton meatballs simmered in a velvety tomato-cream gravy. A luxurious Pakistani kofta dish perfect for special occasions.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",  // contains mutton mince — not vegetarian despite name
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["dairy", "eggs"],  // cream + egg in kofta and gravy

  budget: "standard",
  costPerServing: 280,
  baseServings: 4,
  calories: 450,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["mutton", "mince", "onion", "tomato", "ginger", "garlic", "cumin", "garam masala", "cream", "egg", "oil"],
  searchKeywords: ["malai kofta", "creamy kofta", "cream kofta curry", "heavy gravy", "pakistani kofta", "rich kofta", "indulgent curry", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Nalli Nihari",
  tagline: "Bone marrow nihari - extra rich",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "1 kg nalli (beef shanks with marrow)",
    "2 tablespoons ginger-garlic paste",
    "2 tablespoons nihari masala",
    "1 teaspoon turmeric",
    "2 teaspoons red chili powder",
    "1/2 cup oil",
    "1/4 cup wheat flour",
    "Salt to taste",
    "4 cups water"
  ],
  stepsRaw: [
    "Follow the beef nihari recipe.",
    "Use shanks with visible marrow bones.",
    "Cook for 3-4 hours until the marrow melts into the gravy.",
    "Serve hot with naan and bone marrow pieces on top."
  ],
  difficulty: "Hard",
  cookingTime: 240,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "An intensely rich nalli nihari made with beef shanks packed with bone marrow. Slow-cooked for 3-4 hours until the marrow fully melts into the thick spiced gravy — the ultimate indulgent nihari experience.",

  category: "Breakfast",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Breakfast", "Lunch", "Dinner"],
  beverageCategory: null,

  allergens: ["wheat", "gluten"],  // wheat flour for thickening

  budget: "standard",
  costPerServing: 320,
  baseServings: 4,
  calories: 500,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["beef", "nalli", "marrow bones", "ginger", "garlic", "nihari masala", "turmeric", "red chili", "wheat flour", "oil"],
  searchKeywords: ["nalli nihari", "bone marrow nihari", "nihari", "beef nihari", "heavy gravy", "slow cooked", "rich nihari", "naan"],

  isFeatured: false,
  averageRating: 0,
  totalRatings: 0,
  timesSuggested: 0,
  timesUsedInPlans: 0,
},

// ─────────────────────────────────────────────────────────

{
  // ==================== ORIGINAL DATA (unchanged) ====================
  title: "Bheja Masala",
  tagline: "Brain curry - delicacy",
  image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
  cuisine: "Pakistani",
  ingredientsRaw: [
    "500g lamb brain",
    "1 medium onion - finely chopped",
    "2 medium tomatoes - finely chopped",
    "2 tablespoons ginger-garlic paste",
    "1 teaspoon turmeric powder",
    "2 teaspoons red chili powder",
    "1 teaspoon garam masala",
    "1/2 cup cooking oil",
    "Salt to taste",
    "Fresh coriander for garnish"
  ],
  stepsRaw: [
    "Clean the brain carefully. Remove any membranes. Soak in salted water for 30 minutes.",
    "Boil the brain in water with turmeric and salt for 10 minutes until firm. Drain and cut into cubes.",
    "Heat oil in a pan over medium heat. Add chopped onions and sauté for 5-6 minutes until golden brown.",
    "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
    "Add chopped tomatoes and cook for 5-6 minutes until soft.",
    "Add red chili powder and salt. Mix well and cook for 2 minutes.",
    "Add the brain pieces and cook gently for 5-7 minutes. Be careful not to break them.",
    "Add 1/2 cup of water and simmer for 10 minutes.",
    "Sprinkle garam masala and garnish with fresh coriander.",
    "Serve hot with naan or roti."
  ],
  difficulty: "Hard",
  cookingTime: 60,
  isActive: true,
  isHalal: true,

  // ==================== UPDATED/FIXED FIELDS ====================
  description: "A Pakistani delicacy — tender lamb brain cooked in a spiced onion-tomato masala. Soft, rich, and deeply flavorful, bheja masala is a prized dish for those who appreciate offal cooking at its finest.",

  category: "Dinner",
  subCategory: "heavy-gravy",

  dietType: "Non-Vegetarian",
  suitableForMeals: ["Lunch", "Dinner"],
  beverageCategory: null,

  allergens: [],

  budget: "standard",
  costPerServing: 200,
  baseServings: 4,
  calories: 320,

  ageGroup: ["adults", "teens"],
  patientFriendly: ["general"],

  pantryKeywords: ["lamb brain", "bheja", "onion", "tomato", "ginger", "garlic", "turmeric", "red chili", "garam masala", "oil", "coriander"],
  searchKeywords: ["bheja masala", "brain curry", "lamb brain curry", "heavy gravy", "pakistani delicacy", "offal curry", "spicy brain", "naan"],

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