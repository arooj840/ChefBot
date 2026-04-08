import React, { useState, useEffect, useRef } from 'react';
import './RecipeBreakFast.css';

const RecipeBreakFast = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [pantryItems, setPantryItems] = useState([]);
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const speechSynthesisRef = useRef(null);

  // Breakfast images array (75 images - using high quality Unsplash images)
  const breakfastImages = [
    // Desi Style (20)
    "https://images.unsplash.com/photo-1627308595229-7830a5a91a9f?w=500", // Halwa Puri
    "https://images.unsplash.com/photo-1645112411342-4665a10b3f84?w=500", // Nihari
    "https://images.unsplash.com/photo-1630409354456-7e68537e4f4f?w=500", // Paye
    "https://images.unsplash.com/photo-1624374159840-2b2b2b2b2b2b?w=500", // Haleem
    "https://images.unsplash.com/photo-1624374159730-2b2b2b2b2b2b?w=500", // Channa Poori
    "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500", // Aloo Paratha
    "https://images.unsplash.com/photo-1624374155236-2b2b2b2b2b2b?w=500", // Anday wala Paratha
    "https://images.unsplash.com/photo-1624374179210-3c8a9d6c3c3c?w=500", // Keema Paratha
    "https://images.unsplash.com/photo-1624374157760-2b2b2b2b2b2b?w=500", // Lachha Paratha
    "https://images.unsplash.com/photo-1624374157450-2b2b2b2b2b2b?w=500", // Roghni Naan
    "https://images.unsplash.com/photo-1624374158070-2b2b2b2b2b2b?w=500", // Sheermal
    "https://images.unsplash.com/photo-1624374158690-2b2b2b2b2b2b?w=500", // Kulcha Channa
    "https://images.unsplash.com/photo-1624374153946-5e9f5b7b3b3b?w=500", // Khagina
    "https://images.unsplash.com/photo-1624374159000-2b2b2b2b2b2b?w=500", // Saag & Makai ki Roti
    "https://images.unsplash.com/photo-1624374159310-2b2b2b2b2b2b?w=500", // Cholay
    "https://images.unsplash.com/photo-1624374159620-2b2b2b2b2b2b?w=500", // Aloo Bhujia
    "https://images.unsplash.com/photo-1624374159950-2b2b2b2b2b2b?w=500", // Daal Fry
    "https://images.unsplash.com/photo-1624374158380-2b2b2b2b2b2b?w=500", // Tawa Paratha
    "https://images.unsplash.com/photo-1624374155888-2b2b2b2b2b2b?w=500", // Anda Bhurji
    "https://images.unsplash.com/photo-1624374155556-2b2b2b2b2b2b?w=500", // Masala Omelette
    
    // Egg Style (15)
    "https://images.unsplash.com/photo-1624374154266-4b7b2b2b2b2b?w=500", // Bread Omelette
    "https://images.unsplash.com/photo-1624374154596-6b7b2b2b2b2b?w=500", // Half Fry Eggs
    "https://images.unsplash.com/photo-1624374154916-2b2b2b2b2b2b?w=500", // Boiled Eggs
    "https://images.unsplash.com/photo-1624374156216-2b2b2b2b2b2b?w=500", // Egg Curry
    "https://images.unsplash.com/photo-1624374156528-2b2b2b2b2b2b?w=500", // Egg Sandwich
    "https://images.unsplash.com/photo-1624374156830-2b2b2b2b2b2b?w=500", // Egg Fried Rice
    "https://images.unsplash.com/photo-1624374157140-2b2b2b2b2b2b?w=500", // Scrambled Eggs
    "https://images.unsplash.com/photo-1624374157760-2b2b2b2b2b2b?w=500", // Poached Eggs
    "https://images.unsplash.com/photo-1624374158070-2b2b2b2b2b2b?w=500", // Egg Drop Soup
    "https://images.unsplash.com/photo-1624374158380-2b2b2b2b2b2b?w=500", // Egg Roll
    "https://images.unsplash.com/photo-1624374158690-2b2b2b2b2b2b?w=500", // Anda Toast
    "https://images.unsplash.com/photo-1626806819288-5f37c6fad001?w=500", // Cheese Omelette
    "https://images.unsplash.com/photo-1624374159000-2b2b2b2b2b2b?w=500", // French Toast
    "https://images.unsplash.com/photo-1624374159310-2b2b2b2b2b2b?w=500", // Egg Bhurji
    "https://images.unsplash.com/photo-1624374159620-2b2b2b2b2b2b?w=500", // Egg Paratha
    
    // Healthy Style (15)
    "https://images.unsplash.com/photo-1624374159730-2b2b2b2b2b2b?w=500", // Oats Porridge
    "https://images.unsplash.com/photo-1624374160100-2b2b2b2b2b2b?w=500", // Cornflakes
    "https://images.unsplash.com/photo-1624374160200-2b2b2b2b2b2b?w=500", // Sprouts Salad
    "https://images.unsplash.com/photo-1624374160300-2b2b2b2b2b2b?w=500", // Fresh Fruits
    "https://images.unsplash.com/photo-1624374160400-2b2b2b2b2b2b?w=500", // Veg Sandwich
    "https://images.unsplash.com/photo-1624374160500-2b2b2b2b2b2b?w=500", // Grilled Sandwich
    "https://images.unsplash.com/photo-1624374160600-2b2b2b2b2b2b?w=500", // Yogurt & Fruits
    "https://images.unsplash.com/photo-1624374160700-2b2b2b2b2b2b?w=500", // Boiled Eggs
    "https://images.unsplash.com/photo-1624374160800-2b2b2b2b2b2b?w=500", // Fruit Chaat
    "https://images.unsplash.com/photo-1624374159840-2b2b2b2b2b2b?w=500", // Green Salad
    "https://images.unsplash.com/photo-1624374159950-2b2b2b2b2b2b?w=500", // Smoothie Bowl
    "https://images.unsplash.com/photo-1624374160000-2b2b2b2b2b2b?w=500", // Mixed Nuts
    "https://images.unsplash.com/photo-1624374153946-5e9f5b7b3b3b?w=500", // Brown Bread Toast
    "https://images.unsplash.com/photo-1624374154266-4b7b2b2b2b2b?w=500", // Chia Pudding
    "https://images.unsplash.com/photo-1624374154596-6b7b2b2b2b2b?w=500", // Herbal Tea
    
    // International (15)
    "https://images.unsplash.com/photo-1624374154916-2b2b2b2b2b2b?w=500", // Pancakes
    "https://images.unsplash.com/photo-1624374155236-2b2b2b2b2b2b?w=500", // Waffles
    "https://images.unsplash.com/photo-1624374155556-2b2b2b2b2b2b?w=500", // Cereal with Milk
    "https://images.unsplash.com/photo-1624374155888-2b2b2b2b2b2b?w=500", // Continental Omelette
    "https://images.unsplash.com/photo-1624374156216-2b2b2b2b2b2b?w=500", // Boiled Eggs with Toast
    "https://images.unsplash.com/photo-1624374156528-2b2b2b2b2b2b?w=500", // Continental Scrambled
    "https://images.unsplash.com/photo-1624374156830-2b2b2b2b2b2b?w=500", // Poached Eggs
    "https://images.unsplash.com/photo-1624374157140-2b2b2b2b2b2b?w=500", // English Breakfast
    "https://images.unsplash.com/photo-1624374157450-2b2b2b2b2b2b?w=500", // Continental Breakfast
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500", // Croissant with Jam
    "https://images.unsplash.com/photo-1624374157760-2b2b2b2b2b2b?w=500", // Muffins
    "https://images.unsplash.com/photo-1624374158070-2b2b2b2b2b2b?w=500", // Donuts
    "https://images.unsplash.com/photo-1624374158380-2b2b2b2b2b2b?w=500", // Toast with Butter & Jam
    "https://images.unsplash.com/photo-1624374158690-2b2b2b2b2b2b?w=500", // Fresh Fruit Platter
    "https://images.unsplash.com/photo-1624374159000-2b2b2b2b2b2b?w=500", // Waffles with Berries
    
    // Quick & Easy (10)
    "https://images.unsplash.com/photo-1624374159310-2b2b2b2b2b2b?w=500", // Bread Butter Jam
    "https://images.unsplash.com/photo-1624374159620-2b2b2b2b2b2b?w=500", // Anda Toast
    "https://images.unsplash.com/photo-1624374159730-2b2b2b2b2b2b?w=500", // Chai & Biscuit
    "https://images.unsplash.com/photo-1624374159840-2b2b2b2b2b2b?w=500", // Maggie Noodles
    "https://images.unsplash.com/photo-1624374159950-2b2b2b2b2b2b?w=500", // Boiled Eggs & Bread
    "https://images.unsplash.com/photo-1624374160000-2b2b2b2b2b2b?w=500", // Milk & Cornflakes
    "https://images.unsplash.com/photo-1624374160100-2b2b2b2b2b2b?w=500", // Banana Shake
    "https://images.unsplash.com/photo-1624374160200-2b2b2b2b2b2b?w=500", // Paratha with Chai
    "https://images.unsplash.com/photo-1624374160300-2b2b2b2b2b2b?w=500", // Toast with Honey
    "https://images.unsplash.com/photo-1624374160400-2b2b2b2b2b2b?w=500"  // Leftover Rice with Curd
  ];

  // Complete Breakfast Recipes (75 items)
  const breakfastRecipes = [
    // ========== DESI STYLE (20) ==========
    { 
      id: 1, 
      name: "Halwa Puri",
      tagline: "Fluffy deep-fried bread with sweet semolina halwa",
      image: breakfastImages[0],
      pantryKeywords: ["flour", "suji", "sugar", "ghee", "oil"],
      ingredients: [
        "2 cups flour",
        "1 teaspoon salt",
        "Water for dough",
        "1 cup semolina",
        "½ cup ghee",
        "¾ cup sugar",
        "2 cups water",
        "½ teaspoon cardamom",
        "Oil for frying"
      ],
      steps: [
        "Knead flour with salt and water to make stiff dough, rest 30 minutes.",
        "For halwa: heat ghee in pan, add semolina.",
        "Roast semolina until golden brown.",
        "Add water slowly while stirring continuously.",
        "Add sugar and cardamom powder.",
        "Cook until halwa thickens and leaves sides.",
        "Divide dough into small balls, roll into small circles.",
        "Heat oil, fry pooris until puffed and golden.",
        "Serve hot halwa with crispy pooris."
      ]
    },
    { 
      id: 2, 
      name: "Nihari",
      tagline: "Slow-cooked beef stew with aromatic spices",
      image: breakfastImages[1],
      pantryKeywords: ["beef", "onion", "ginger", "garlic", "flour"],
      ingredients: [
        "1 kg beef shank",
        "¼ cup ghee",
        "2 onions, sliced",
        "2 tablespoons ginger garlic paste",
        "3 tablespoons nihari masala",
        "1 teaspoon red chili powder",
        "½ cup flour",
        "6 cups water",
        "Salt to taste",
        "Fresh cilantro, ginger for garnish"
      ],
      steps: [
        "Heat ghee in pot, fry onions until golden brown.",
        "Add ginger garlic paste, sauté for 2 minutes.",
        "Add beef, sear until browned on all sides.",
        "Add nihari masala, chili powder, and salt.",
        "Add water, bring to boil.",
        "Cover and simmer on low heat for 4-5 hours.",
        "Mix flour with water to make smooth slurry.",
        "Add to nihari, cook for 15 minutes until thickened.",
        "Garnish with fresh cilantro and julienned ginger.",
        "Serve hot with naan or sheermal."
      ]
    },
    { 
      id: 3, 
      name: "Paye (Siri Paye)",
      tagline: "Rich and nourishing bone marrow stew",
      image: breakfastImages[2],
      pantryKeywords: ["trotters", "onion", "ginger", "garlic", "yogurt"],
      ingredients: [
        "1 kg trotters (paye)",
        "2 onions, sliced",
        "2 tablespoons ginger garlic paste",
        "1 tablespoon coriander powder",
        "1 teaspoon cumin powder",
        "1 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "½ cup yogurt",
        "¼ cup flour",
        "Salt to taste",
        "1 tablespoon ghee",
        "Fresh ginger for garnish"
      ],
      steps: [
        "Clean trotters thoroughly, wash multiple times.",
        "Heat ghee in large pot, fry onions until golden.",
        "Add ginger garlic paste, sauté for 2 minutes.",
        "Add trotters, fry for 5-7 minutes.",
        "Add all spices and salt, mix well.",
        "Add enough water to cover trotters.",
        "Cover and simmer for 3-4 hours until meat is tender.",
        "Mix flour with water to make slurry.",
        "Add slurry to stew, cook for 15 minutes.",
        "Beat yogurt, add to pot, simmer for 10 minutes.",
        "Garnish with fresh ginger and cilantro.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 4, 
      name: "Haleem",
      tagline: "Healthy wheat and lentil porridge with tender meat",
      image: breakfastImages[3],
      pantryKeywords: ["wheat", "lentils", "meat", "spices", "ginger"],
      ingredients: [
        "½ cup cracked wheat",
        "¼ cup chana dal",
        "¼ cup masoor dal",
        "¼ cup moong dal",
        "250g meat (beef or chicken)",
        "1 onion, sliced",
        "1 tablespoon ginger garlic paste",
        "1 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "Salt to taste",
        "¼ cup ghee",
        "Fried onions for garnish",
        "Fresh cilantro, lemon wedges"
      ],
      steps: [
        "Soak wheat and lentils overnight.",
        "Pressure cook wheat, lentils, and meat with spices.",
        "Cook until meat is tender and grains are soft.",
        "Blend coarsely using a hand blender.",
        "Heat ghee in pan, add ginger garlic paste.",
        "Add the blended mixture, simmer for 20 minutes.",
        "Stir continuously to prevent sticking.",
        "Garnish with fried onions and fresh cilantro.",
        "Serve hot with lemon wedges and ginger slices."
      ]
    },
    { 
      id: 5, 
      name: "Channa Poori",
      tagline: "Spicy chickpea curry with fluffy pooris",
      image: breakfastImages[4],
      pantryKeywords: ["chickpeas", "flour", "onion", "tomato", "spices"],
      ingredients: [
        "2 cups flour",
        "1 teaspoon salt",
        "Oil for frying",
        "2 cups boiled chickpeas",
        "2 onions, finely chopped",
        "2 tomatoes, chopped",
        "1 tablespoon ginger garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon coriander powder",
        "½ teaspoon turmeric",
        "1 teaspoon red chili powder",
        "1 teaspoon chaat masala",
        "Fresh cilantro",
        "Green chilies"
      ],
      steps: [
        "Knead flour with salt and water to make stiff dough.",
        "Rest for 30 minutes, then divide into small balls.",
        "Roll each ball into small poori circles.",
        "Heat oil, fry pooris until puffed and golden.",
        "For channa: heat oil in pan, add cumin seeds.",
        "Add onions, fry until golden brown.",
        "Add ginger garlic paste, sauté for 2 minutes.",
        "Add tomatoes and spices, cook until soft.",
        "Add boiled chickpeas and little water.",
        "Simmer for 10-15 minutes.",
        "Garnish with cilantro and green chilies.",
        "Serve hot channa with crispy pooris."
      ]
    },
    { 
      id: 6, 
      name: "Aloo Paratha",
      tagline: "Whole wheat flatbread stuffed with spiced potatoes",
      image: breakfastImages[5],
      pantryKeywords: ["flour", "potato", "onion", "spices", "ghee"],
      ingredients: [
        "2 cups whole wheat flour",
        "3 medium potatoes, boiled",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1 teaspoon cumin seeds",
        "½ teaspoon red chili powder",
        "½ teaspoon turmeric",
        "½ teaspoon garam masala",
        "Fresh cilantro, chopped",
        "Salt to taste",
        "Ghee for cooking",
        "Water for dough"
      ],
      steps: [
        "Mix flour with salt, add water and knead soft dough.",
        "Cover and rest for 30 minutes.",
        "Mash boiled potatoes in a bowl.",
        "Add onion, chilies, cilantro, and all spices.",
        "Mix well to make filling.",
        "Divide dough into 8 equal balls.",
        "Roll each ball into small circle.",
        "Place filling in center, gather edges and seal.",
        "Gently roll into paratha of desired size.",
        "Heat tawa, cook paratha on both sides.",
        "Apply ghee and cook until golden spots appear.",
        "Serve hot with yogurt or pickle."
      ]
    },
    { 
      id: 7, 
      name: "Anday wala Paratha",
      tagline: "Paratha stuffed with spiced egg mixture",
      image: breakfastImages[6],
      pantryKeywords: ["flour", "eggs", "onion", "chili", "spices"],
      ingredients: [
        "2 cups whole wheat flour",
        "4 eggs",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1 teaspoon cumin seeds",
        "½ teaspoon red chili powder",
        "¼ teaspoon turmeric",
        "Fresh cilantro, chopped",
        "Salt to taste",
        "Ghee for cooking",
        "Water for dough"
      ],
      steps: [
        "Knead soft dough with flour, salt and water.",
        "Rest for 30 minutes.",
        "In a bowl, beat eggs with onion, chilies, spices, cilantro.",
        "Divide dough into 4 balls.",
        "Roll each ball into thin paratha.",
        "Heat tawa, place paratha, cook one side lightly.",
        "Flip, pour egg mixture on half of paratha.",
        "Fold other half over, press edges.",
        "Cook until egg sets and paratha is golden.",
        "Apply ghee, cook both sides until crisp.",
        "Serve hot with ketchup or chutney."
      ]
    },
    { 
      id: 8, 
      name: "Keema Paratha",
      tagline: "Stuffed paratha with spiced minced meat",
      image: breakfastImages[7],
      pantryKeywords: ["flour", "mince", "onion", "spices", "ghee"],
      ingredients: [
        "2 cups whole wheat flour",
        "250g minced meat",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1 teaspoon ginger garlic paste",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "½ teaspoon red chili powder",
        "¼ teaspoon turmeric",
        "Fresh cilantro, chopped",
        "Salt to taste",
        "Ghee for cooking"
      ],
      steps: [
        "Knead soft dough with flour and water, rest 30 minutes.",
        "Heat oil, cook onion until golden.",
        "Add ginger garlic paste, sauté for 1 minute.",
        "Add mince, cook until browned.",
        "Add all spices and little water, cook until dry.",
        "Add cilantro, mix well. Cool completely.",
        "Divide dough into 8 balls.",
        "Roll each ball into small circle.",
        "Place keema filling, seal edges.",
        "Roll gently into paratha.",
        "Cook on hot tawa with ghee until golden.",
        "Serve hot with yogurt or raita."
      ]
    },
    { 
      id: 9, 
      name: "Lachha Paratha",
      tagline: "Layered flaky whole wheat flatbread",
      image: breakfastImages[8],
      pantryKeywords: ["flour", "ghee", "salt"],
      ingredients: [
        "2 cups whole wheat flour",
        "1 teaspoon salt",
        "½ teaspoon sugar",
        "3 tablespoons ghee",
        "Warm water for kneading",
        "Extra ghee for cooking"
      ],
      steps: [
        "Mix flour, salt, sugar, and 1 tablespoon ghee.",
        "Add warm water gradually, knead soft dough.",
        "Knead for 10 minutes until smooth.",
        "Cover and rest for 30 minutes.",
        "Divide dough into 6 equal balls.",
        "Roll each ball into thin circle.",
        "Spread ghee, sprinkle dry flour.",
        "Fold like a fan (pleats), then coil.",
        "Roll again into paratha.",
        "Heat tawa, cook paratha on medium heat.",
        "Apply ghee, cook until golden and crisp.",
        "Gently press while cooking to get layers.",
        "Serve hot with curry or yogurt."
      ]
    },
    { 
      id: 10, 
      name: "Roghni Naan",
      tagline: "Soft leavened bread topped with sesame seeds",
      image: breakfastImages[9],
      pantryKeywords: ["flour", "yeast", "milk", "yogurt", "sesame"],
      ingredients: [
        "3 cups all-purpose flour",
        "1 teaspoon yeast",
        "1 teaspoon sugar",
        "1 teaspoon salt",
        "½ cup warm milk",
        "½ cup yogurt",
        "2 tablespoons oil",
        "Sesame seeds for topping",
        "Nigella seeds (kalonji)",
        "Melted butter for brushing"
      ],
      steps: [
        "Dissolve yeast and sugar in warm water, rest 10 minutes.",
        "Mix flour and salt, add yeast mixture.",
        "Add milk, yogurt, and oil, knead soft dough.",
        "Cover and let rise for 2 hours.",
        "Punch down dough, divide into 8 balls.",
        "Roll each ball into oval or round shape.",
        "Sprinkle sesame and nigella seeds.",
        "Stretch slightly to make naan shape.",
        "Heat tawa, cook naan on one side.",
        "Flip and cook other side until spots appear.",
        "Alternatively, bake in tandoor or oven.",
        "Brush with melted butter, serve hot."
      ]
    },
    { 
      id: 11, 
      name: "Sheermal",
      tagline: "Saffron-flavored sweet milk bread",
      image: breakfastImages[10],
      pantryKeywords: ["flour", "milk", "sugar", "saffron", "cardamom"],
      ingredients: [
        "3 cups all-purpose flour",
        "1 cup warm milk",
        "½ cup sugar",
        "½ cup ghee",
        "1 teaspoon yeast",
        "¼ teaspoon saffron strands",
        "1 teaspoon cardamom powder",
        "Pinch of salt",
        "Sesame seeds for topping"
      ],
      steps: [
        "Soak saffron in warm milk for 15 minutes.",
        "Dissolve yeast in little warm milk with sugar.",
        "Mix flour, sugar, cardamom, and salt.",
        "Add ghee, rub into flour.",
        "Add yeast mixture and saffron milk.",
        "Knead soft dough, adding more milk if needed.",
        "Cover and let rise for 2 hours.",
        "Divide dough into 8 balls.",
        "Roll into thick discs.",
        "Prick with fork, sprinkle sesame seeds.",
        "Bake at 180°C for 15-20 minutes.",
        "Brush with milk, bake until golden.",
        "Serve warm with nihari or paye."
      ]
    },
    { 
      id: 12, 
      name: "Kulcha Channa",
      tagline: "Soft stuffed bread with spicy chickpeas",
      image: breakfastImages[11],
      pantryKeywords: ["flour", "chickpeas", "onion", "spices", "yogurt"],
      ingredients: [
        "For Kulcha:",
        "2 cups flour",
        "½ cup yogurt",
        "1 teaspoon baking powder",
        "½ teaspoon baking soda",
        "1 teaspoon sugar",
        "Salt to taste",
        "2 tablespoons oil",
        "For Channa:",
        "2 cups boiled chickpeas",
        "1 onion, chopped",
        "2 tomatoes, pureed",
        "1 tablespoon ginger garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon coriander powder",
        "½ teaspoon turmeric",
        "1 teaspoon red chili powder",
        "1 teaspoon chaat masala",
        "Fresh cilantro"
      ],
      steps: [
        "Mix all kulcha ingredients, knead soft dough.",
        "Cover and rest for 2 hours.",
        "Divide dough into 6 balls, roll into ovals.",
        "Cook on hot tawa until golden spots appear.",
        "For channa: heat oil, add cumin seeds.",
        "Add onion, cook until golden.",
        "Add ginger garlic paste, cook for 2 minutes.",
        "Add tomato puree and spices, cook well.",
        "Add chickpeas and water, simmer for 15 minutes.",
        "Garnish with cilantro.",
        "Serve hot kulcha with channa."
      ]
    },
    { 
      id: 13, 
      name: "Khagina (Anday ka Salan)",
      tagline: "Spiced scrambled eggs curry",
      image: breakfastImages[12],
      pantryKeywords: ["eggs", "onion", "tomato", "spices", "ginger"],
      ingredients: [
        "6 eggs",
        "2 onions, sliced",
        "2 tomatoes, chopped",
        "2 green chilies, slit",
        "1 tablespoon ginger garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili powder",
        "½ teaspoon turmeric",
        "1 teaspoon garam masala",
        "Fresh cilantro",
        "Salt to taste",
        "¼ cup oil"
      ],
      steps: [
        "Heat oil in pan, add cumin seeds.",
        "Add onions, fry until golden brown.",
        "Add ginger garlic paste, sauté for 2 minutes.",
        "Add tomatoes and spices, cook until soft.",
        "Beat eggs with little salt and chili.",
        "Pour eggs into the pan.",
        "Scramble continuously until eggs are cooked.",
        "Add green chilies and garam masala.",
        "Garnish with fresh cilantro.",
        "Serve hot with naan or paratha."
      ]
    },
    { 
      id: 14, 
      name: "Saag & Makai ki Roti",
      tagline: "Mustard greens curry with cornbread - Punjabi classic",
      image: breakfastImages[13],
      pantryKeywords: ["saag", "corn flour", "spices", "ginger", "butter"],
      ingredients: [
        "For Saag:",
        "1 kg mustard greens (saag)",
        "250g spinach",
        "100g bathua (optional)",
        "2 onions, chopped",
        "2 tomatoes, chopped",
        "1 tablespoon ginger garlic paste",
        "2 green chilies",
        "1 teaspoon red chili powder",
        "1 teaspoon turmeric",
        "2 tablespoons maize flour",
        "Salt to taste",
        "¼ cup ghee",
        "For Makai Roti:",
        "2 cups maize flour",
        "Warm water for kneading",
        "Salt to taste"
      ],
      steps: [
        "Wash greens thoroughly, chop roughly.",
        "Pressure cook greens with water and salt.",
        "Blend to coarse paste using hand blender.",
        "Heat ghee, add onions, fry until golden.",
        "Add ginger garlic paste and chilies.",
        "Add tomatoes and spices, cook well.",
        "Add cooked greens, simmer for 20 minutes.",
        "Mix maize flour with water, add to saag.",
        "Cook for 10 more minutes.",
        "For roti: knead maize flour with warm water.",
        "Make dough, divide into balls.",
        "Press into thick rotis between palms.",
        "Cook on tawa until golden spots appear.",
        "Serve hot saag with makai roti and butter."
      ]
    },
    { 
      id: 15, 
      name: "Cholay",
      tagline: "Spicy chickpea curry - perfect breakfast",
      image: breakfastImages[14],
      pantryKeywords: ["chickpeas", "onion", "tomato", "spices", "ginger"],
      ingredients: [
        "2 cups boiled chickpeas",
        "2 onions, finely chopped",
        "2 tomatoes, chopped",
        "1 tablespoon ginger garlic paste",
        "2 green chilies, chopped",
        "1 teaspoon cumin seeds",
        "1 teaspoon coriander powder",
        "1 teaspoon cumin powder",
        "½ teaspoon turmeric",
        "1 teaspoon red chili powder",
        "1 teaspoon chaat masala",
        "1 tea bag (for color)",
        "Fresh cilantro",
        "Salt to taste",
        "¼ cup oil"
      ],
      steps: [
        "Heat oil in pan, add cumin seeds.",
        "Add onions, fry until golden brown.",
        "Add ginger garlic paste, sauté for 2 minutes.",
        "Add tomatoes and cook until soft.",
        "Add all spices and salt, cook for 2 minutes.",
        "Add boiled chickpeas with some water.",
        "Add tea bag for dark color (optional).",
        "Simmer for 20 minutes on low heat.",
        "Mash some chickpeas to thicken gravy.",
        "Garnish with cilantro and green chilies.",
        "Serve hot with naan or bhatura."
      ]
    },
    { 
      id: 16, 
      name: "Aloo Bhujia",
      tagline: "Spicy potato stir-fry with desi flavors",
      image: breakfastImages[15],
      pantryKeywords: ["potato", "onion", "spices", "cumin", "chili"],
      ingredients: [
        "4 medium potatoes, boiled and cubed",
        "1 onion, sliced",
        "2 green chilies, slit",
        "1 teaspoon cumin seeds",
        "½ teaspoon turmeric",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "½ teaspoon garam masala",
        "Fresh cilantro",
        "Salt to taste",
        "2 tablespoons oil"
      ],
      steps: [
        "Heat oil in pan, add cumin seeds.",
        "Add sliced onions, fry until soft.",
        "Add green chilies and all spices.",
        "Cook for 1 minute until fragrant.",
        "Add boiled potato cubes.",
        "Mix gently to coat with spices.",
        "Cook on medium heat for 5-7 minutes.",
        "Sprinkle garam masala and cilantro.",
        "Serve hot with paratha or bread."
      ]
    },
    { 
      id: 17, 
      name: "Daal Fry",
      tagline: "Tempered lentils - simple and comforting",
      image: breakfastImages[16],
      pantryKeywords: ["toor dal", "onion", "tomato", "spices", "ginger"],
      ingredients: [
        "1 cup toor dal (split pigeon peas)",
        "1 onion, finely chopped",
        "1 tomato, chopped",
        "1 tablespoon ginger garlic paste",
        "2 green chilies, chopped",
        "1 teaspoon cumin seeds",
        "½ teaspoon turmeric",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "Fresh cilantro",
        "Salt to taste",
        "2 tablespoons ghee",
        "Pinch of asafoetida (hing)"
      ],
      steps: [
        "Wash dal thoroughly, soak for 30 minutes.",
        "Pressure cook dal with turmeric and salt.",
        "Mash dal slightly, keep aside.",
        "Heat ghee in pan, add cumin and hing.",
        "Add onions, fry until golden brown.",
        "Add ginger garlic paste and chilies.",
        "Add tomatoes and spices, cook well.",
        "Add cooked dal and little water.",
        "Simmer for 10-15 minutes.",
        "Temper with more ghee if desired.",
        "Garnish with cilantro.",
        "Serve hot with rice or roti."
      ]
    },
    { 
      id: 18, 
      name: "Tawa Paratha",
      tagline: "Simple whole wheat griddle bread",
      image: breakfastImages[17],
      pantryKeywords: ["flour", "ghee", "salt"],
      ingredients: [
        "2 cups whole wheat flour",
        "1 teaspoon salt",
        "1 tablespoon oil",
        "Warm water for kneading",
        "Ghee for cooking"
      ],
      steps: [
        "Mix flour, salt, and oil in bowl.",
        "Add warm water gradually.",
        "Knead soft dough for 8-10 minutes.",
        "Cover and rest for 30 minutes.",
        "Divide dough into 8 equal balls.",
        "Roll each ball into circle.",
        "Heat tawa, place rolled paratha.",
        "Cook until bubbles appear, flip.",
        "Apply ghee on both sides.",
        "Cook until golden spots appear.",
        "Press edges with spatula for even cooking.",
        "Serve hot with any curry or chai."
      ]
    },
    { 
      id: 19, 
      name: "Anda Bhurji",
      tagline: "Indian style spicy scrambled eggs",
      image: breakfastImages[18],
      pantryKeywords: ["eggs", "onion", "tomato", "spices", "chili"],
      ingredients: [
        "4 eggs",
        "1 onion, finely chopped",
        "1 tomato, finely chopped",
        "2 green chilies, chopped",
        "1 teaspoon ginger paste",
        "½ teaspoon turmeric",
        "½ teaspoon red chili powder",
        "¼ teaspoon garam masala",
        "Fresh cilantro, chopped",
        "Salt to taste",
        "2 tablespoons oil"
      ],
      steps: [
        "Heat oil in pan, add onions.",
        "Fry until onions are soft and translucent.",
        "Add ginger and green chilies, sauté for 1 minute.",
        "Add tomatoes and spices, cook until soft.",
        "Beat eggs in separate bowl with salt.",
        "Pour eggs into pan.",
        "Scramble continuously on medium heat.",
        "Cook until eggs are done to your liking.",
        "Sprinkle garam masala and cilantro.",
        "Serve hot with bread or paratha."
      ]
    },
    { 
      id: 20, 
      name: "Masala Omelette",
      tagline: "Fluffy omelette with desi spices",
      image: breakfastImages[19],
      pantryKeywords: ["eggs", "onion", "tomato", "chili", "spices"],
      ingredients: [
        "3 eggs",
        "1 small onion, finely chopped",
        "1 small tomato, deseeded and chopped",
        "1 green chili, finely chopped",
        "2 tablespoons cilantro, chopped",
        "¼ teaspoon turmeric",
        "¼ teaspoon red chili powder",
        "Salt to taste",
        "2 tablespoons milk",
        "1 tablespoon butter"
      ],
      steps: [
        "Crack eggs into bowl, add milk.",
        "Whisk until frothy and well beaten.",
        "Add onion, tomato, chili, cilantro.",
        "Add turmeric, chili powder, and salt.",
        "Mix everything well.",
        "Heat butter in non-stick pan.",
        "Pour egg mixture, spread evenly.",
        "Cook on medium-low heat.",
        "When edges set and bottom is golden.",
        "Flip carefully, cook other side.",
        "Fold and serve hot with toast."
      ]
    },

    // ========== EGG STYLE (15) ==========
    { 
      id: 21, 
      name: "Bread Omelette",
      tagline: "Omelette sandwiched between toasted bread",
      image: breakfastImages[20],
      pantryKeywords: ["eggs", "bread", "onion", "chili", "salt"],
      ingredients: [
        "2 eggs",
        "2 slices bread",
        "1 small onion, chopped",
        "1 green chili, chopped",
        "2 tablespoons milk",
        "¼ teaspoon salt",
        "¼ teaspoon black pepper",
        "1 tablespoon butter"
      ],
      steps: [
        "Whisk eggs with milk, salt, and pepper.",
        "Add chopped onion and chili, mix well.",
        "Heat butter in non-stick pan.",
        "Pour egg mixture, spread evenly.",
        "Place bread slices on top of eggs.",
        "Cook until eggs set and stick to bread.",
        "Flip carefully with spatula.",
        "Cook other side until golden.",
        "Fold bread slices over if desired.",
        "Serve hot with ketchup."
      ]
    },
    { 
      id: 22, 
      name: "Half Fry Eggs",
      tagline: "Sunny side up eggs with crispy edges",
      image: breakfastImages[21],
      pantryKeywords: ["eggs", "oil", "salt", "pepper"],
      ingredients: [
        "2 eggs",
        "1 tablespoon oil or butter",
        "Salt to taste",
        "Black pepper to taste",
        "Fresh cilantro for garnish"
      ],
      steps: [
        "Heat non-stick pan with oil or butter.",
        "Crack eggs carefully into pan.",
        "Cook on low heat until whites are set.",
        "Cover with lid for 1-2 minutes if needed.",
        "Sprinkle salt and pepper.",
        "Cook until edges are crispy.",
        "Garnish with fresh cilantro.",
        "Serve hot with toast."
      ]
    },
    { 
      id: 23, 
      name: "Boiled Eggs",
      tagline: "Perfectly boiled eggs - simple and healthy",
      image: breakfastImages[22],
      pantryKeywords: ["eggs", "salt", "pepper"],
      ingredients: [
        "4 eggs",
        "Water for boiling",
        "Salt to taste",
        "Black pepper to taste"
      ],
      steps: [
        "Place eggs in saucepan, cover with cold water.",
        "Bring water to boil over high heat.",
        "Once boiling, cover and remove from heat.",
        "Let stand for 10-12 minutes for hard boiled.",
        "Drain hot water, run cold water over eggs.",
        "Peel eggs carefully under running water.",
        "Slice or serve whole.",
        "Sprinkle with salt and pepper.",
        "Serve with toast."
      ]
    },
    { 
      id: 24, 
      name: "Egg Curry",
      tagline: "Hard boiled eggs in spiced gravy",
      image: breakfastImages[23],
      pantryKeywords: ["eggs", "onion", "tomato", "spices", "ginger"],
      ingredients: [
        "4 boiled eggs",
        "2 onions, finely chopped",
        "2 tomatoes, pureed",
        "1 tablespoon ginger garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon coriander powder",
        "½ teaspoon turmeric",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "Fresh cilantro",
        "Salt to taste",
        "¼ cup oil"
      ],
      steps: [
        "Make slits on boiled eggs, lightly fry in oil.",
        "Remove eggs, keep aside.",
        "In same oil, add cumin seeds.",
        "Add onions, fry until golden brown.",
        "Add ginger garlic paste, sauté for 2 minutes.",
        "Add tomato puree and spices, cook well.",
        "Add water to make gravy of desired consistency.",
        "Simmer for 10 minutes.",
        "Add fried eggs, cook for 5 more minutes.",
        "Sprinkle garam masala and cilantro.",
        "Serve hot with rice or roti."
      ]
    },
    { 
      id: 25, 
      name: "Egg Sandwich",
      tagline: "Classic sandwich with egg filling",
      image: breakfastImages[24],
      pantryKeywords: ["bread", "eggs", "mayonnaise", "pepper", "butter"],
      ingredients: [
        "8 slices bread",
        "4 eggs",
        "2 tablespoons mayonnaise",
        "1 tablespoon butter",
        "Salt to taste",
        "Black pepper to taste",
        "Lettuce leaves"
      ],
      steps: [
        "Boil eggs, cool and peel.",
        "Chop boiled eggs finely.",
        "Mix with mayonnaise, salt, and pepper.",
        "Butter bread slices lightly.",
        "Spread egg mixture on 4 slices.",
        "Top with lettuce and another bread slice.",
        "Toast in sandwich maker or pan.",
        "Cut diagonally and serve."
      ]
    },
    { 
      id: 26, 
      name: "Egg Fried Rice",
      tagline: "Quick fried rice with scrambled eggs",
      image: breakfastImages[25],
      pantryKeywords: ["rice", "eggs", "onion", "soy sauce", "pepper"],
      ingredients: [
        "2 cups cooked rice (preferably day old)",
        "3 eggs",
        "1 onion, chopped",
        "2 green onions, chopped",
        "2 tablespoons oil",
        "1 tablespoon soy sauce",
        "½ teaspoon black pepper",
        "Salt to taste"
      ],
      steps: [
        "Beat eggs with little salt and pepper.",
        "Heat oil in wok or large pan.",
        "Scramble eggs until just cooked, remove.",
        "Add more oil, sauté onions until soft.",
        "Add cold rice, break up clumps.",
        "Add soy sauce, pepper, and salt.",
        "Stir fry on high heat for 3-4 minutes.",
        "Add scrambled eggs and green onions.",
        "Mix well, cook for 2 more minutes.",
        "Serve hot."
      ]
    },
    { 
      id: 27, 
      name: "Scrambled Eggs",
      tagline: "Soft and creamy scrambled eggs",
      image: breakfastImages[26],
      pantryKeywords: ["eggs", "milk", "butter", "salt", "pepper"],
      ingredients: [
        "4 eggs",
        "2 tablespoons milk",
        "1 tablespoon butter",
        "Salt to taste",
        "Black pepper to taste",
        "Fresh chives for garnish"
      ],
      steps: [
        "Crack eggs into bowl, add milk.",
        "Whisk until well combined and frothy.",
        "Season with salt and pepper.",
        "Melt butter in non-stick pan over medium heat.",
        "Pour egg mixture into pan.",
        "Let set for 30 seconds, then stir gently.",
        "Continue stirring until soft curds form.",
        "Remove from heat while still moist.",
        "Garnish with fresh chives.",
        "Serve immediately with toast."
      ]
    },
    { 
      id: 28, 
      name: "Poached Eggs",
      tagline: "Elegant eggs poached to perfection",
      image: breakfastImages[27],
      pantryKeywords: ["eggs", "vinegar", "salt", "pepper"],
      ingredients: [
        "2 eggs",
        "1 tablespoon white vinegar",
        "Salt to taste",
        "Black pepper to taste",
        "Toast for serving"
      ],
      steps: [
        "Fill a deep pan with water, add vinegar.",
        "Bring water to gentle simmer (not boiling).",
        "Crack each egg into small bowl.",
        "Create gentle whirlpool in water.",
        "Slide egg into center of whirlpool.",
        "Cook for 3-4 minutes for runny yolk.",
        "Remove with slotted spoon.",
        "Drain on paper towel.",
        "Season with salt and pepper.",
        "Serve on toast."
      ]
    },
    { 
      id: 29, 
      name: "Egg Drop Soup",
      tagline: "Light and comforting egg drop soup",
      image: breakfastImages[28],
      pantryKeywords: ["eggs", "broth", "ginger", "soy sauce"],
      ingredients: [
        "4 cups chicken or vegetable broth",
        "2 eggs, beaten",
        "1 teaspoon ginger, grated",
        "1 tablespoon soy sauce",
        "2 green onions, chopped",
        "Salt to taste",
        "White pepper to taste",
        "Cornstarch slurry (optional)"
      ],
      steps: [
        "Bring broth to simmer in pot.",
        "Add ginger and soy sauce.",
        "If thicker soup desired, add cornstarch slurry.",
        "Stir broth in circular motion.",
        "Slowly drizzle beaten eggs into swirling broth.",
        "Eggs will form ribbons immediately.",
        "Remove from heat immediately.",
        "Add green onions, salt, and white pepper.",
        "Serve hot."
      ]
    },
    { 
      id: 30, 
      name: "Egg Roll",
      tagline: "Paratha roll with spicy egg filling",
      image: breakfastImages[29],
      pantryIngredients: [
        "2 parathas",
        "2 eggs",
        "1 onion, sliced",
        "1 tomato, sliced",
        "1 teaspoon chaat masala",
        "Green chutney",
        "Ketchup",
        "Salt to taste"
      ],
      steps: [
        "Beat eggs with salt and chaat masala.",
        "Make omelette in pan, cut into strips.",
        "Warm parathas on tawa.",
        "Spread green chutney on paratha.",
        "Place egg strips, onion, tomato.",
        "Drizzle ketchup.",
        "Roll tightly, wrap in foil.",
        "Serve hot."
      ]
    },
    { 
      id: 31, 
      name: "Anda Toast",
      tagline: "Bread toast with egg coating",
      image: breakfastImages[30],
      pantryKeywords: ["bread", "eggs", "salt", "pepper", "butter"],
      ingredients: [
        "4 slices bread",
        "2 eggs",
        "2 tablespoons milk",
        "Salt to taste",
        "Black pepper to taste",
        "Butter for frying"
      ],
      steps: [
        "Beat eggs with milk, salt, and pepper.",
        "Dip bread slices in egg mixture.",
        "Heat butter in pan.",
        "Place dipped bread in pan.",
        "Cook until golden brown on both sides.",
        "Serve hot with ketchup or chai."
      ]
    },
    { 
      id: 32, 
      name: "Cheese Omelette",
      tagline: "Fluffy omelette filled with melted cheese",
      image: breakfastImages[31],
      pantryKeywords: ["eggs", "cheese", "milk", "butter", "pepper"],
      ingredients: [
        "3 eggs",
        "¼ cup grated cheese (cheddar or mozzarella)",
        "2 tablespoons milk",
        "1 tablespoon butter",
        "Salt to taste",
        "Black pepper to taste"
      ],
      steps: [
        "Whisk eggs with milk, salt, and pepper.",
        "Heat butter in non-stick pan.",
        "Pour egg mixture, spread evenly.",
        "Cook until edges set and bottom is golden.",
        "Sprinkle cheese on half of omelette.",
        "Fold other half over cheese.",
        "Cook for 1 minute until cheese melts.",
        "Slide onto plate, serve hot."
      ]
    },
    { 
      id: 33, 
      name: "French Toast",
      tagline: "Classic French toast with maple syrup",
      image: breakfastImages[32],
      pantryKeywords: ["bread", "eggs", "milk", "cinnamon", "butter"],
      ingredients: [
        "4 slices bread (thick)",
        "2 eggs",
        "½ cup milk",
        "1 tablespoon sugar",
        "½ teaspoon cinnamon powder",
        "1 teaspoon vanilla extract",
        "Butter for frying",
        "Maple syrup for serving"
      ],
      steps: [
        "Whisk eggs, milk, sugar, cinnamon, vanilla.",
        "Dip bread slices in mixture, soak well.",
        "Heat butter in pan over medium heat.",
        "Place bread in pan, cook until golden.",
        "Flip and cook other side.",
        "Serve hot with maple syrup."
      ]
    },
    { 
      id: 34, 
      name: "Egg Bhurji",
      tagline: "Spicy scrambled eggs with masala",
      image: breakfastImages[33],
      pantryKeywords: ["eggs", "onion", "tomato", "spices", "chili"],
      ingredients: [
        "4 eggs",
        "1 onion, chopped",
        "1 tomato, chopped",
        "2 green chilies, chopped",
        "1 teaspoon ginger garlic paste",
        "½ teaspoon turmeric",
        "½ teaspoon red chili powder",
        "¼ teaspoon garam masala",
        "Fresh cilantro",
        "Salt to taste",
        "2 tablespoons oil"
      ],
      steps: [
        "Heat oil, add onions, fry until soft.",
        "Add ginger garlic paste and chilies.",
        "Add tomatoes and spices, cook until soft.",
        "Beat eggs with salt, pour into pan.",
        "Scramble continuously until cooked.",
        "Garnish with cilantro and garam masala.",
        "Serve hot with bread."
      ]
    },
    { 
      id: 35, 
      name: "Egg Paratha",
      tagline: "Paratha cooked with egg layer on top",
      image: breakfastImages[34],
      pantryKeywords: ["paratha", "eggs", "onion", "chili", "spices"],
      ingredients: [
        "2 parathas (frozen or fresh)",
        "2 eggs",
        "1 small onion, chopped",
        "1 green chili, chopped",
        "Salt to taste",
        "Red chili powder to taste"
      ],
      steps: [
        "Cook paratha on tawa until partially done.",
        "Beat eggs with onion, chili, salt, chili powder.",
        "Pour egg mixture over paratha.",
        "Flip carefully, cook until egg sets.",
        "Cook both sides until golden.",
        "Serve hot with chutney."
      ]
    },

    // ========== HEALTHY STYLE (15) ==========
    { 
      id: 36, 
      name: "Oats Porridge",
      tagline: "Healthy and comforting oatmeal",
      image: breakfastImages[35],
      pantryKeywords: ["oats", "milk", "honey", "nuts", "fruits"],
      ingredients: [
        "1 cup rolled oats",
        "2 cups milk",
        "1 cup water",
        "2 tablespoons honey",
        "¼ cup mixed nuts",
        "1 banana, sliced",
        "½ teaspoon cinnamon"
      ],
      steps: [
        "Bring water and milk to boil.",
        "Add oats, reduce heat to simmer.",
        "Cook for 5-7 minutes, stirring occasionally.",
        "Add honey and cinnamon.",
        "Cook until desired consistency.",
        "Pour into bowls, top with nuts and banana.",
        "Serve warm."
      ]
    },
    { 
      id: 37, 
      name: "Cornflakes",
      tagline: "Classic cornflakes with milk",
      image: breakfastImages[36],
      pantryKeywords: ["cornflakes", "milk", "sugar", "fruits"],
      ingredients: [
        "2 cups cornflakes",
        "1 cup cold milk",
        "1 tablespoon sugar",
        "Fresh fruits (optional)"
      ],
      steps: [
        "Pour cornflakes into a bowl.",
        "Add cold milk over cereal.",
        "Sprinkle sugar if desired.",
        "Top with fresh fruits.",
        "Serve immediately."
      ]
    },
    { 
      id: 38, 
      name: "Sprouts Salad",
      tagline: "Healthy sprouted moong salad",
      image: breakfastImages[37],
      pantryKeywords: ["sprouts", "onion", "tomato", "lemon", "chaat masala"],
      ingredients: [
        "2 cups boiled sprouts (moong)",
        "1 onion, finely chopped",
        "1 tomato, finely chopped",
        "1 cucumber, finely chopped",
        "1 green chili, chopped",
        "2 tablespoons lemon juice",
        "1 teaspoon chaat masala",
        "Salt to taste",
        "Fresh cilantro"
      ],
      steps: [
        "Rinse sprouts thoroughly.",
        "Mix all chopped vegetables in bowl.",
        "Add sprouts, lemon juice, chaat masala, salt.",
        "Mix well to combine.",
        "Garnish with fresh cilantro.",
        "Serve immediately."
      ]
    },
    { 
      id: 39, 
      name: "Fresh Fruits",
      tagline: "Seasonal fresh fruit platter",
      image: breakfastImages[38],
      pantryKeywords: ["banana", "apple", "orange", "grapes"],
      ingredients: [
        "1 banana",
        "1 apple",
        "1 orange",
        "1 cup grapes",
        "1 tablespoon lemon juice",
        "Fresh mint for garnish"
      ],
      steps: [
        "Wash all fruits thoroughly.",
        "Slice banana, chop apple into wedges.",
        "Peel and segment orange.",
        "Arrange all fruits on a platter.",
        "Sprinkle lemon juice to prevent browning.",
        "Garnish with fresh mint.",
        "Serve fresh."
      ]
    },
    { 
      id: 40, 
      name: "Veg Sandwich",
      tagline: "Healthy vegetable sandwich",
      image: breakfastImages[39],
      pantryKeywords: ["bread", "cucumber", "tomato", "onion", "butter"],
      ingredients: [
        "8 slices whole wheat bread",
        "1 cucumber, sliced",
        "2 tomatoes, sliced",
        "1 onion, sliced",
        "Lettuce leaves",
        "Butter",
        "Salt to taste",
        "Black pepper to taste"
      ],
      steps: [
        "Butter bread slices lightly.",
        "Layer cucumber, tomato, onion, lettuce.",
        "Sprinkle salt and pepper.",
        "Cover with another bread slice.",
        "Toast in sandwich maker or grill.",
        "Cut diagonally, serve."
      ]
    },
    { 
      id: 41, 
      name: "Grilled Sandwich",
      tagline: "Toasted sandwich with veggies and cheese",
      image: breakfastImages[40],
      pantryKeywords: ["bread", "cheese", "vegetables", "butter"],
      ingredients: [
        "8 slices bread",
        "4 cheese slices",
        "1 tomato, sliced",
        "1 onion, sliced",
        "Cucumber slices",
        "Butter",
        "Salt and pepper",
        "Oregano"
      ],
      steps: [
        "Butter outer sides of bread.",
        "Place cheese, vegetables on unbuttered side.",
        "Sprinkle salt, pepper, oregano.",
        "Top with another bread slice.",
        "Grill in sandwich maker until golden.",
        "Serve hot with ketchup."
      ]
    },
    { 
      id: 42, 
      name: "Yogurt & Fruits",
      tagline: "Fresh yogurt with seasonal fruits",
      image: breakfastImages[41],
      pantryKeywords: ["yogurt", "banana", "apple", "honey", "nuts"],
      ingredients: [
        "1 cup Greek yogurt",
        "1 banana, sliced",
        "1 apple, chopped",
        "2 tablespoons honey",
        "2 tablespoons mixed nuts",
        "Fresh berries"
      ],
      steps: [
        "Take yogurt in serving bowl.",
        "Arrange fresh fruits on top.",
        "Drizzle honey over fruits.",
        "Sprinkle mixed nuts.",
        "Serve immediately."
      ]
    },
    { 
      id: 43, 
      name: "Boiled Eggs",
      tagline: "Healthy protein-packed boiled eggs",
      image: breakfastImages[42],
      pantryKeywords: ["eggs", "salt", "pepper"],
      ingredients: [
        "2 eggs",
        "Salt to taste",
        "Black pepper to taste",
        "Whole grain toast"
      ],
      steps: [
        "Place eggs in saucepan with water.",
        "Bring to boil, cook for 10 minutes.",
        "Cool under running water.",
        "Peel eggs carefully.",
        "Slice and sprinkle with salt, pepper.",
        "Serve with whole grain toast."
      ]
    },
    { 
      id: 44, 
      name: "Fruit Chaat",
      tagline: "Spiced fresh fruit salad",
      image: breakfastImages[43],
      pantryKeywords: ["banana", "apple", "orange", "chaat masala"],
      ingredients: [
        "2 bananas, sliced",
        "2 apples, chopped",
        "1 orange, segmented",
        "1 cup grapes",
        "1 tablespoon lemon juice",
        "1 teaspoon chaat masala",
        "½ teaspoon black pepper",
        "Fresh mint"
      ],
      steps: [
        "Wash and cut all fruits.",
        "Combine in large mixing bowl.",
        "Sprinkle lemon juice over fruits.",
        "Add chaat masala and black pepper.",
        "Gently toss to combine.",
        "Garnish with fresh mint.",
        "Serve immediately."
      ]
    },
    { 
      id: 45, 
      name: "Green Salad",
      tagline: "Fresh and crunchy garden salad",
      image: breakfastImages[44],
      pantryKeywords: ["lettuce", "cucumber", "tomato", "lemon", "olive oil"],
      ingredients: [
        "2 cups lettuce, torn",
        "1 cucumber, sliced",
        "2 tomatoes, chopped",
        "1 carrot, grated",
        "1 onion, sliced",
        "2 tablespoons olive oil",
        "1 tablespoon lemon juice",
        "Salt to taste",
        "Black pepper to taste"
      ],
      steps: [
        "Wash all vegetables thoroughly.",
        "Tear lettuce into bite-sized pieces.",
        "Combine all vegetables in bowl.",
        "Whisk olive oil, lemon juice, salt, pepper.",
        "Pour dressing over salad.",
        "Toss gently to combine.",
        "Serve immediately."
      ]
    },
    { 
      id: 46, 
      name: "Smoothie Bowl",
      tagline: "Thick fruit smoothie served as bowl",
      image: breakfastImages[45],
      pantryKeywords: ["banana", "berries", "yogurt", "honey", "granola"],
      ingredients: [
        "2 frozen bananas",
        "1 cup frozen berries",
        "½ cup Greek yogurt",
        "2 tablespoons honey",
        "Granola for topping",
        "Fresh fruits for garnish"
      ],
      steps: [
        "Blend frozen bananas and berries.",
        "Add yogurt and honey, blend until thick.",
        "Pour into serving bowl.",
        "Top with granola and fresh fruits.",
        "Serve immediately with spoon."
      ]
    },
    { 
      id: 47, 
      name: "Mixed Nuts",
      tagline: "Healthy mix of dry fruits and nuts",
      image: breakfastImages[46],
      pantryKeywords: ["almonds", "walnuts", "cashews", "raisins"],
      ingredients: [
        "¼ cup almonds",
        "¼ cup walnuts",
        "¼ cup cashews",
        "2 tablespoons raisins",
        "2 tablespoons dried cranberries",
        "1 tablespoon pumpkin seeds"
      ],
      steps: [
        "Mix all nuts and dried fruits.",
        "Store in airtight container.",
        "Take a small bowl as serving.",
        "Enjoy with tea or milk."
      ]
    },
    { 
      id: 48, 
      name: "Brown Bread Toast",
      tagline: "Crispy toasted brown bread",
      image: breakfastImages[47],
      pantryKeywords: ["brown bread", "butter", "jam"],
      ingredients: [
        "4 slices brown bread",
        "Butter",
        "Your favorite jam"
      ],
      steps: [
        "Toast bread slices until golden.",
        "Spread butter while hot.",
        "Add jam on top.",
        "Serve immediately."
      ]
    },
    { 
      id: 49, 
      name: "Chia Pudding",
      tagline: "Healthy chia seeds pudding",
      image: breakfastImages[48],
      pantryKeywords: ["chia seeds", "milk", "honey", "vanilla"],
      ingredients: [
        "3 tablespoons chia seeds",
        "1 cup milk (or almond milk)",
        "1 tablespoon honey",
        "½ teaspoon vanilla extract",
        "Fresh fruits for topping"
      ],
      steps: [
        "Mix chia seeds, milk, honey, vanilla.",
        "Stir well to combine.",
        "Refrigerate overnight or for 4 hours.",
        "Stir again before serving.",
        "Top with fresh fruits.",
        "Serve chilled."
      ]
    },
    { 
      id: 50, 
      name: "Herbal Tea",
      tagline: "Soothing and healthy herbal tea",
      image: breakfastImages[49],
      pantryKeywords: ["herbal tea", "honey", "lemon", "ginger"],
      ingredients: [
        "1 cup water",
        "1 herbal tea bag",
        "1 teaspoon honey",
        "1 slice lemon",
        "Fresh mint (optional)"
      ],
      steps: [
        "Boil water in kettle or pan.",
        "Pour over tea bag in cup.",
        "Steep for 3-5 minutes.",
        "Remove tea bag.",
        "Add honey and lemon slice.",
        "Garnish with mint if desired.",
        "Serve hot."
      ]
    },

    // ========== INTERNATIONAL (15) ==========
    { 
      id: 51, 
      name: "Pancakes",
      tagline: "Fluffy American-style pancakes",
      image: breakfastImages[50],
      pantryKeywords: ["flour", "eggs", "milk", "butter", "syrup"],
      ingredients: [
        "1½ cups all-purpose flour",
        "3½ teaspoons baking powder",
        "1 teaspoon salt",
        "1 tablespoon sugar",
        "1¼ cups milk",
        "1 egg",
        "3 tablespoons butter, melted",
        "Maple syrup for serving"
      ],
      steps: [
        "Mix flour, baking powder, salt, sugar in bowl.",
        "Make well in center, add milk, egg, melted butter.",
        "Whisk until smooth (lumps are okay).",
        "Heat griddle or pan over medium heat.",
        "Pour ¼ cup batter for each pancake.",
        "Cook until bubbles form, flip.",
        "Cook until golden on both sides.",
        "Serve with butter and maple syrup."
      ]
    },
    { 
      id: 52, 
      name: "Waffles",
      tagline: "Crispy Belgian-style waffles",
      image: breakfastImages[51],
      pantryKeywords: ["flour", "eggs", "milk", "butter", "syrup"],
      ingredients: [
        "2 cups all-purpose flour",
        "1 tablespoon sugar",
        "1 tablespoon baking powder",
        "½ teaspoon salt",
        "2 eggs",
        "1¾ cups milk",
        "½ cup vegetable oil",
        "1 teaspoon vanilla"
      ],
      steps: [
        "Preheat waffle iron.",
        "Mix flour, sugar, baking powder, salt.",
        "In separate bowl, beat eggs, add milk, oil, vanilla.",
        "Combine wet and dry ingredients, mix until smooth.",
        "Pour batter into waffle iron.",
        "Cook until golden and crisp.",
        "Serve with butter and syrup."
      ]
    },
    { 
      id: 53, 
      name: "Cereal with Milk",
      tagline: "Quick breakfast cereal",
      image: breakfastImages[52],
      pantryKeywords: ["cereal", "milk", "sugar"],
      ingredients: [
        "1 cup breakfast cereal",
        "1 cup cold milk",
        "1 teaspoon sugar (optional)"
      ],
      steps: [
        "Pour cereal into a bowl.",
        "Add cold milk over cereal.",
        "Add sugar if desired.",
        "Serve immediately."
      ]
    },
    { 
      id: 54, 
      name: "Continental Omelette",
      tagline: "Classic French-style omelette",
      image: breakfastImages[53],
      pantryKeywords: ["eggs", "butter", "salt", "pepper", "herbs"],
      ingredients: [
        "3 eggs",
        "1 tablespoon butter",
        "Salt to taste",
        "Black pepper to taste",
        "Fresh chives, chopped"
      ],
      steps: [
        "Whisk eggs vigorously until frothy.",
        "Season with salt and pepper.",
        "Heat butter in non-stick pan.",
        "Pour eggs, stir gently with spatula.",
        "Shake pan to spread evenly.",
        "When edges set, roll omelette.",
        "Slide onto plate, sprinkle chives."
      ]
    },
    { 
      id: 55, 
      name: "Boiled Eggs with Toast",
      tagline: "Classic boiled eggs with soldiers",
      image: breakfastImages[54],
      pantryKeywords: ["eggs", "bread", "butter", "salt"],
      ingredients: [
        "2 eggs",
        "2 slices bread",
        "Butter for toast",
        "Salt to taste",
        "Black pepper to taste"
      ],
      steps: [
        "Boil eggs for 6-7 minutes (soft boiled).",
        "Toast bread until golden.",
        "Butter toast, cut into strips (soldiers).",
        "Place eggs in egg cups.",
        "Cut off tops of eggs.",
        "Serve with toast soldiers."
      ]
    },
    { 
      id: 56, 
      name: "Continental Scrambled",
      tagline: "Creamy European-style scrambled eggs",
      image: breakfastImages[55],
      pantryKeywords: ["eggs", "butter", "cream", "salt", "pepper"],
      ingredients: [
        "4 eggs",
        "2 tablespoons butter",
        "2 tablespoons heavy cream",
        "Salt to taste",
        "White pepper to taste",
        "Chives for garnish"
      ],
      steps: [
        "Whisk eggs with cream, salt, pepper.",
        "Melt butter in pan over low heat.",
        "Pour eggs, cook gently, stirring constantly.",
        "Remove from heat when creamy and soft.",
        "Garnish with fresh chives.",
        "Serve immediately."
      ]
    },
    { 
      id: 57, 
      name: "Poached Eggs",
      tagline: "Perfectly poached eggs",
      image: breakfastImages[56],
      pantryKeywords: ["eggs", "vinegar", "salt", "pepper"],
      ingredients: [
        "2 eggs",
        "1 tablespoon white vinegar",
        "Salt to taste",
        "Black pepper to taste",
        "Toast for serving"
      ],
      steps: [
        "Bring water to simmer, add vinegar.",
        "Create whirlpool, slide in egg.",
        "Cook for 3-4 minutes.",
        "Remove with slotted spoon.",
        "Drain on paper towel.",
        "Season with salt and pepper.",
        "Serve on toast."
      ]
    },
    { 
      id: 58, 
      name: "English Breakfast",
      tagline: "Full English breakfast - hearty meal",
      image: breakfastImages[57],
      pantryKeywords: ["eggs", "bacon", "sausage", "beans", "toast"],
      ingredients: [
        "2 eggs",
        "2 bacon strips",
        "2 sausages",
        "½ cup baked beans",
        "2 mushrooms",
        "1 tomato, halved",
        "2 slices bread",
        "Butter"
      ],
      steps: [
        "Grill sausages and bacon until cooked.",
        "Fry eggs in pan.",
        "Grill tomatoes and mushrooms.",
        "Heat baked beans in small pot.",
        "Toast bread, butter lightly.",
        "Arrange everything on plate.",
        "Serve hot with tea."
      ]
    },
    { 
      id: 59, 
      name: "Continental Breakfast",
      tagline: "Light European-style breakfast",
      image: breakfastImages[58],
      pantryKeywords: ["bread", "croissant", "jam", "butter", "coffee"],
      ingredients: [
        "1 croissant",
        "2 slices bread",
        "Butter",
        "Jam assortment",
        "Fresh orange juice",
        "Coffee or tea"
      ],
      steps: [
        "Warm croissant in oven.",
        "Toast bread slices.",
        "Serve with butter and jam.",
        "Pour fresh orange juice.",
        "Brew coffee or tea.",
        "Arrange beautifully on tray."
      ]
    },
    { 
      id: 60, 
      name: "Croissant with Jam",
      tagline: "Buttery croissant with sweet jam",
      image: breakfastImages[59],
      pantryKeywords: ["croissant", "butter", "jam"],
      ingredients: [
        "2 croissants",
        "Butter",
        "Strawberry jam",
        "Powdered sugar for dusting"
      ],
      steps: [
        "Warm croissants in oven for 5 minutes.",
        "Slice croissants horizontally.",
        "Spread butter on both halves.",
        "Add jam on one side.",
        "Close and dust with powdered sugar.",
        "Serve with coffee."
      ]
    },
    { 
      id: 61, 
      name: "Muffins",
      tagline: "Fresh baked blueberry muffins",
      image: breakfastImages[60],
      pantryKeywords: ["flour", "blueberries", "eggs", "milk", "butter"],
      ingredients: [
        "1½ cups flour",
        "¾ cup sugar",
        "2 teaspoons baking powder",
        "½ teaspoon salt",
        "⅓ cup oil",
        "1 egg",
        "⅓ cup milk",
        "1 cup blueberries"
      ],
      steps: [
        "Preheat oven to 190°C.",
        "Mix dry ingredients in bowl.",
        "In separate bowl, mix wet ingredients.",
        "Combine wet and dry until just mixed.",
        "Fold in blueberries gently.",
        "Fill muffin cups ¾ full.",
        "Bake for 20-25 minutes.",
        "Cool before serving."
      ]
    },
    { 
      id: 62, 
      name: "Donuts",
      tagline: "Glazed ring donuts",
      image: breakfastImages[61],
      pantryKeywords: ["flour", "yeast", "sugar", "milk", "eggs"],
      ingredients: [
        "2 cups flour",
        "2¼ teaspoons yeast",
        "¼ cup sugar",
        "½ cup warm milk",
        "1 egg",
        "2 tablespoons butter",
        "Oil for frying",
        "For glaze:",
        "1 cup powdered sugar",
        "2 tablespoons milk"
      ],
      steps: [
        "Activate yeast in warm milk with sugar.",
        "Mix flour, sugar, yeast mixture, egg, butter.",
        "Knead dough, let rise 1 hour.",
        "Roll out, cut donut shapes.",
        "Let rise again 30 minutes.",
        "Heat oil, fry until golden.",
        "Mix powdered sugar and milk for glaze.",
        "Dip donuts in glaze, set on rack."
      ]
    },
    { 
      id: 63, 
      name: "Toast with Butter & Jam",
      tagline: "Simple and classic toast",
      image: breakfastImages[62],
      pantryKeywords: ["bread", "butter", "jam"],
      ingredients: [
        "2 slices bread",
        "Butter",
        "Strawberry jam"
      ],
      steps: [
        "Toast bread until golden.",
        "Spread butter while hot.",
        "Add jam on top.",
        "Serve immediately."
      ]
    },
    { 
      id: 64, 
      name: "Fresh Fruit Platter",
      tagline: "Assorted fresh fruits arrangement",
      image: breakfastImages[63],
      pantryKeywords: ["strawberries", "blueberries", "kiwi", "mango"],
      ingredients: [
        "Strawberries",
        "Blueberries",
        "Kiwi, sliced",
        "Mango, sliced",
        "Orange segments",
        "Mint for garnish"
      ],
      steps: [
        "Wash all fruits thoroughly.",
        "Slice larger fruits as needed.",
        "Arrange fruits beautifully on platter.",
        "Garnish with fresh mint.",
        "Serve fresh."
      ]
    },
    { 
      id: 65, 
      name: "Waffles with Berries",
      tagline: "Crispy waffles topped with fresh berries",
      image: breakfastImages[64],
      pantryKeywords: ["waffles", "berries", "cream", "syrup"],
      ingredients: [
        "2 waffles",
        "Mixed berries",
        "Whipped cream",
        "Maple syrup",
        "Powdered sugar"
      ],
      steps: [
        "Toast or warm waffles.",
        "Place waffles on plate.",
        "Top with fresh berries.",
        "Add whipped cream.",
        "Drizzle maple syrup.",
        "Dust with powdered sugar."
      ]
    },

    // ========== QUICK & EASY (10) ==========
    { 
      id: 66, 
      name: "Bread Butter Jam",
      tagline: "Quickest breakfast ever",
      image: breakfastImages[65],
      pantryKeywords: ["bread", "butter", "jam"],
      ingredients: [
        "2 slices bread",
        "Butter",
        "Jam of your choice"
      ],
      steps: [
        "Take fresh bread slices.",
        "Spread butter generously.",
        "Add jam on top.",
        "Sandwich or serve open.",
        "Enjoy with tea."
      ]
    },
    { 
      id: 67, 
      name: "Anda Toast",
      tagline: "Egg coated toast - quick and tasty",
      image: breakfastImages[66],
      pantryKeywords: ["bread", "eggs", "salt", "pepper"],
      ingredients: [
        "2 slices bread",
        "1 egg",
        "Salt to taste",
        "Black pepper to taste",
        "Oil for frying"
      ],
      steps: [
        "Beat egg with salt and pepper.",
        "Dip bread slices in egg mixture.",
        "Heat oil in pan.",
        "Fry bread until golden both sides.",
        "Serve hot."
      ]
    },
    { 
      id: 68, 
      name: "Chai & Biscuit",
      tagline: "Classic tea time combo",
      image: breakfastImages[67],
      pantryKeywords: ["tea", "milk", "sugar", "biscuits"],
      ingredients: [
        "1 cup water",
        "½ cup milk",
        "2 teaspoons tea leaves",
        "2 teaspoons sugar",
        "4-5 biscuits"
      ],
      steps: [
        "Boil water with tea leaves.",
        "Add milk and sugar.",
        "Simmer for 3-4 minutes.",
        "Strain into cup.",
        "Serve hot with biscuits."
      ]
    },
    { 
      id: 69, 
      name: "Maggie Noodles",
      tagline: "Instant noodles - quick fix",
      image: breakfastImages[68],
      pantryKeywords: ["noodles", "water", "onion", "peas"],
      ingredients: [
        "1 packet noodles",
        "1½ cups water",
        "1 small onion, chopped (optional)",
        "¼ cup peas (optional)",
        "Taste maker from packet"
      ],
      steps: [
        "Boil water in pan.",
        "Add noodles and taste maker.",
        "Cook for 2-3 minutes.",
        "Add vegetables if using.",
        "Cook until water absorbs.",
        "Serve hot."
      ]
    },
    { 
      id: 70, 
      name: "Boiled Eggs & Bread",
      tagline: "Protein packed quick meal",
      image: breakfastImages[69],
      pantryKeywords: ["eggs", "bread", "salt", "pepper"],
      ingredients: [
        "2 eggs",
        "2 slices bread",
        "Salt to taste",
        "Black pepper to taste"
      ],
      steps: [
        "Boil eggs for 10 minutes.",
        "Cool and peel eggs.",
        "Slice eggs or serve whole.",
        "Toast bread if desired.",
        "Sprinkle salt and pepper.",
        "Serve together."
      ]
    },
    { 
      id: 71, 
      name: "Milk & Cornflakes",
      tagline: "Classic cereal breakfast",
      image: breakfastImages[70],
      pantryKeywords: ["cornflakes", "milk", "sugar"],
      ingredients: [
        "1 cup cornflakes",
        "1 cup cold milk",
        "1 teaspoon sugar"
      ],
      steps: [
        "Pour cornflakes in bowl.",
        "Add cold milk.",
        "Sprinkle sugar.",
        "Serve immediately."
      ]
    },
    { 
      id: 72, 
      name: "Banana Shake",
      tagline: "Quick and healthy milkshake",
      image: breakfastImages[71],
      pantryKeywords: ["banana", "milk", "sugar", "ice cream"],
      ingredients: [
        "2 ripe bananas",
        "2 cups cold milk",
        "2 tablespoons sugar",
        "1 scoop vanilla ice cream (optional)"
      ],
      steps: [
        "Peel and chop bananas.",
        "Add to blender with milk.",
        "Add sugar and ice cream.",
        "Blend until smooth.",
        "Pour into glasses.",
        "Serve immediately."
      ]
    },
    { 
      id: 73, 
      name: "Paratha with Chai",
      tagline: "Leftover paratha with hot tea",
      image: breakfastImages[72],
      pantryKeywords: ["paratha", "tea", "milk", "sugar"],
      ingredients: [
        "1 leftover paratha",
        "For chai: water, milk, tea, sugar"
      ],
      steps: [
        "Reheat paratha on tawa.",
        "Meanwhile prepare chai.",
        "Boil water with tea leaves.",
        "Add milk and sugar, simmer.",
        "Strain chai into cup.",
        "Serve hot paratha with chai."
      ]
    },
    { 
      id: 74, 
      name: "Toast with Honey",
      tagline: "Healthy toast with honey",
      image: breakfastImages[73],
      pantryKeywords: ["bread", "honey", "butter"],
      ingredients: [
        "2 slices bread",
        "Butter",
        "Honey"
      ],
      steps: [
        "Toast bread until golden.",
        "Spread butter while hot.",
        "Drizzle honey generously.",
        "Serve immediately."
      ]
    },
    { 
      id: 75, 
      name: "Leftover Rice with Curd",
      tagline: "Quick comfort food",
      image: breakfastImages[74],
      pantryKeywords: ["rice", "yogurt", "salt"],
      ingredients: [
        "1 cup leftover rice",
        "½ cup fresh yogurt",
        "Salt to taste",
        "Green chili (optional)"
      ],
      steps: [
        "Take rice in a bowl.",
        "Add fresh yogurt.",
        "Add salt to taste.",
        "Mix well.",
        "Add chopped green chili if desired.",
        "Serve immediately."
      ]
    }
  ];

  // Load pantry items from localStorage
  useEffect(() => {
    const savedPantry = localStorage.getItem('pantryItems');
    if (savedPantry) {
      try {
        const parsed = JSON.parse(savedPantry);
        setPantryItems(parsed);
      } catch (e) {
        console.error("Error parsing pantry items", e);
      }
    }
  }, []);

  // Suggest 2 recipes based on pantry items
  useEffect(() => {
    if (pantryItems && pantryItems.length > 0) {
      console.log("Pantry items:", pantryItems);
      
      // Normalize pantry items to lowercase for matching
      const pantryLower = pantryItems.map(item => item.toLowerCase().trim());
      
      // Score each recipe based on matching pantry keywords
      const scoredRecipes = breakfastRecipes.map(recipe => {
        let score = 0;
        const matchedItems = [];
        
        // Check each pantry item against recipe keywords
        pantryLower.forEach(pantryItem => {
          // Check in pantryKeywords
          const keywordMatch = recipe.pantryKeywords.some(keyword => 
            keyword.toLowerCase() === pantryItem || 
            pantryItem.includes(keyword.toLowerCase())
          );
          
          // Also check in ingredients as fallback
          const ingredientMatch = recipe.ingredients.some(ing => 
            ing.toLowerCase().includes(pantryItem)
          );
          
          if (keywordMatch || ingredientMatch) {
            score += 1;
            matchedItems.push(pantryItem);
          }
        });
        
        return {
          ...recipe,
          score,
          matchedItems
        };
      });
      
      // Filter recipes with at least 2 matches and sort by score
      const suggestions = scoredRecipes
        .filter(recipe => recipe.score >= 2)
        .sort((a, b) => b.score - a.score)
        .slice(0, 2); // Take top 2 suggestions
      
      console.log("Suggestions found:", suggestions.length);
      
      setSuggestedRecipes(suggestions);
      setShowSuggestions(suggestions.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [pantryItems]);

  // Voice instructions handler
  const speakInstructions = (steps, stepIndex = 0) => {
    if ('speechSynthesis' in window) {
      if (speechSynthesisRef.current && isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setCurrentStep(0);
        setProgress(0);
        speechSynthesisRef.current = null;
        return;
      }

      if (stepIndex >= 0 && stepIndex < steps.length) {
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = steps[stepIndex];
        utterance.rate = 1.0;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        setCurrentStep(stepIndex + 1);
        const stepProgress = ((stepIndex + 1) / steps.length) * 100;
        setProgress(stepProgress);
        
        utterance.onstart = () => {
          setIsPlaying(true);
        };
        
        utterance.onend = () => {
          setIsPlaying(false);
          speechSynthesisRef.current = null;
        };
        
        utterance.onerror = () => {
          setIsPlaying(false);
          speechSynthesisRef.current = null;
        };
        
        speechSynthesisRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      }
    } else {
      alert('Your browser does not support text-to-speech.');
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window && speechSynthesisRef.current) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentStep(0);
      setProgress(0);
      speechSynthesisRef.current = null;
    }
  };

  const speakNextStep = () => {
    if (selectedRecipe && currentStep < selectedRecipe.steps.length) {
      stopSpeaking();
      speakInstructions(selectedRecipe.steps, currentStep);
    }
  };

  const speakPreviousStep = () => {
    if (selectedRecipe && currentStep > 1) {
      stopSpeaking();
      speakInstructions(selectedRecipe.steps, currentStep - 2);
    }
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
    setShowDetailPanel(true);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const closeDetailPanel = () => {
    stopSpeaking();
    setShowDetailPanel(false);
    setSelectedRecipe(null);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const applySuggestion = (recipe) => {
    handleRecipeSelect(recipe);
  };

  return (
    <div className="breakfast-page">
      {/* Header */}
      <header className="breakfast-header">
        <div className="breakfast-header-content">
          <h1 className="breakfast-page-title">Traditional Breakfast</h1>
          <p className="breakfast-page-description">
           Where every morning begins with flavor.
          </p>
        </div>
      </header>

      {/* Pantry Suggestions - 2 Recipes */}
      {showSuggestions && (
        <div className="pantry-suggestions">
          <div className="suggestions-header">
            <i className="fas fa-lightbulb"></i>
            <h3>Based on your pantry, you can make:</h3>
          </div>
          <div className="suggestions-grid two-suggestions">
            {suggestedRecipes.map(recipe => (
              <div 
                key={`suggest-${recipe.id}`} 
                className="suggestion-card"
                onClick={() => applySuggestion(recipe)}
              >
                <div className="suggestion-image" style={{backgroundImage: `url(${recipe.image})`}}></div>
                <div className="suggestion-content">
                  <h4>{recipe.name}</h4>
                  <p>{recipe.tagline}</p>
                  <p className="match-info">✓ {recipe.score} items match your pantry</p>
                  <button className="suggestion-btn">Cook This</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Breakfast Grid */}
      <main className="breakfast-main">
        <div className="breakfast-grid-section">
          <div className="breakfast-grid">
            {breakfastRecipes.map(recipe => (
              <div 
                key={recipe.id} 
                className="breakfast-technique-card"
                onClick={() => handleRecipeSelect(recipe)}
              >
                <div 
                  className="breakfast-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                ></div>
                
                <div className="breakfast-card-content">
                  <h3 className="breakfast-card-title">{recipe.name}</h3>
                  <p className="breakfast-card-description">{recipe.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      {showDetailPanel && selectedRecipe && (
        <div className="breakfast-modal-overlay" onClick={closeDetailPanel}>
          <div 
            className="breakfast-modal" 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <button className="breakfast-modal-close" onClick={closeDetailPanel}>×</button>
            
            <div className="breakfast-modal-header">
              <div className="breakfast-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="breakfast-modal-content">
              {/* COLUMN 1 - INGREDIENTS */}
              <div className="breakfast-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="breakfast-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="breakfast-ingredient-item">
                      <span className="breakfast-ingredient-bullet">•</span>
                      <span className="breakfast-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 2 - STEPS TO MAKE */}
              <div className="breakfast-modal-steps">
                <h3>Steps to Make</h3>
                <div className="breakfast-steps-list">
                  {selectedRecipe.steps.map((step, idx) => (
                    <div key={idx} className="breakfast-step-item">
                      <span className="breakfast-step-number">{idx + 1}.</span>
                      <span className="breakfast-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 3 - VOICE INSTRUCTIONS */}
              <div className="breakfast-modal-voice-container">
                <div className="voice-panel">
                  <h3><i className="fas fa-volume-up"></i> Voice Instructions</h3>
                  
                  <div className="voice-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${progress}%`}}></div>
                    </div>
                    <div className="progress-info">
                      <span>Step {currentStep} of {selectedRecipe.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <div className="voice-controls">
                    <button 
                      className={`voice-main-btn ${isPlaying ? 'stop' : 'play'}`}
                      onClick={() => isPlaying ? stopSpeaking() : speakInstructions(selectedRecipe.steps, 0)}
                    >
                      <i className={`fas fa-${isPlaying ? 'stop' : 'play'}`}></i>
                      {isPlaying ? ' Stop' : ' Start Voice Guide'}
                    </button>

                    <div className="step-controls">
                      <button 
                        className="step-btn prev"
                        onClick={speakPreviousStep}
                        disabled={currentStep <= 1}
                      >
                        <i className="fas fa-backward"></i> Previous
                      </button>
                      <button 
                        className="step-btn next"
                        onClick={speakNextStep}
                        disabled={currentStep >= selectedRecipe.steps.length}
                      >
                        Next <i className="fas fa-forward"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeBreakFast;