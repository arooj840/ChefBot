import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipesPureChicken.css';

const RecipesPureChicken = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All Pure Chicken Recipes (40+ recipes)
  const chickenRecipes = [
    // ==================== CHICKEN CURRIES (8) ====================
    { 
      id: 1, 
      name: "Chicken Curry",
      tagline: "Classic Pakistani chicken curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken, curry cut",
        "2 onions, finely chopped",
        "2 tomatoes, chopped",
        "2 tbsp ginger-garlic paste",
        "1 tsp cumin seeds",
        "1 tsp turmeric powder",
        "2 tsp red chili powder",
        "1 tsp coriander powder",
        "1 tsp garam masala",
        "1/2 cup oil",
        "Salt to taste",
        "Fresh coriander for garnish",
        "2 green chilies, slit"
      ],
      steps: [
        "Heat oil in a large pot, add cumin seeds and let them splutter.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken pieces and fry on high heat for 5-7 minutes until color changes.",
        "Add chopped tomatoes and cook until soft and mushy.",
        "Add turmeric, red chili, coriander powder and salt. Mix well.",
        "Add 1 cup water and bring to boil. Cover and cook on medium heat for 20-25 minutes.",
        "Sprinkle garam masala and garnish with fresh coriander and green chilies.",
        "Serve hot with naan or rice."
      ]
    },
    { 
      id: 2, 
      name: "Chicken Karahi",
      tagline: "Traditional karahi style chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "4 tomatoes, chopped",
        "2 tbsp ginger, julienned",
        "2 tbsp garlic, chopped",
        "4 green chilies, slit",
        "1 tsp cumin seeds",
        "1 tsp red chili flakes",
        "1 tsp black pepper",
        "1 tsp salt",
        "1/2 cup oil",
        "Fresh coriander",
        "1 lemon, juiced"
      ],
      steps: [
        "Heat oil in a wok (karahi). Add chicken and fry on high heat for 5 minutes.",
        "Add ginger, garlic and green chilies. Cook for 2 minutes.",
        "Add tomatoes and cook until soft and oil separates.",
        "Add cumin seeds, red chili flakes, black pepper and salt.",
        "Cook on high heat until oil comes on top.",
        "Sprinkle lemon juice and coriander.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 3, 
      name: "Chicken Handi",
      tagline: "Slow-cooked creamy chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "1 cup yogurt",
        "2 onions, chopped",
        "2 tbsp ginger-garlic paste",
        "1 tsp cumin seeds",
        "1 tsp turmeric",
        "2 tsp red chili powder",
        "1 tsp garam masala",
        "1/2 cup oil",
        "Salt to taste",
        "1/4 cup cream",
        "Fresh coriander"
      ],
      steps: [
        "Heat oil, add cumin seeds and onions. Sauté until golden.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add turmeric, red chili powder and salt.",
        "Add beaten yogurt and mix well.",
        "Cover and cook on low heat for 25 minutes.",
        "Add cream and garam masala. Simmer for 5 minutes.",
        "Garnish with coriander and serve."
      ]
    },
    { 
      id: 4, 
      name: "Chicken Qorma",
      tagline: "Rich and creamy chicken qorma",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "1 cup yogurt",
        "2 onions, sliced",
        "2 tbsp ginger-garlic paste",
        "1 tsp cumin seeds",
        "1 tsp turmeric",
        "2 tsp red chili powder",
        "1 tsp garam masala",
        "1/2 cup oil",
        "Salt to taste",
        "4 cloves",
        "2 cardamom",
        "1 cinnamon stick"
      ],
      steps: [
        "Heat oil, add whole spices and onions. Fry until golden brown.",
        "Remove half onions for garnish.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add turmeric, red chili powder and salt.",
        "Add beaten yogurt slowly, stirring continuously.",
        "Add 1/2 cup water and cook for 25 minutes.",
        "Add garam masala and garnish with fried onions."
      ]
    },
    { 
      id: 5, 
      name: "Chicken Jalfrezi",
      tagline: "Spicy chicken with thick gravy",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken, boneless cubes",
        "2 onions, chopped",
        "2 tomatoes, chopped",
        "2 capsicum, sliced",
        "2 tbsp ginger-garlic paste",
        "1 tsp cumin seeds",
        "1 tsp turmeric",
        "2 tsp red chili powder",
        "1 tsp coriander powder",
        "1 tsp garam masala",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add cumin seeds and onions. Sauté until golden.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry until white.",
        "Add tomatoes and cook until soft.",
        "Add turmeric, red chili, coriander powder and salt.",
        "Cook on high heat until oil separates.",
        "Add capsicum and cook for 2 minutes.",
        "Sprinkle garam masala and serve."
      ]
    },
    { 
      id: 6, 
      name: "Chicken Lahori",
      tagline: "Lahori style spicy chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "2 onions, chopped",
        "2 tomatoes, chopped",
        "2 tbsp ginger-garlic paste",
        "1 tsp cumin seeds",
        "1 tsp turmeric",
        "2 tsp red chili powder",
        "1 tsp coriander powder",
        "1 tsp garam masala",
        "1/2 cup oil",
        "Salt to taste",
        "2 tbsp vinegar",
        "Fresh coriander"
      ],
      steps: [
        "Heat oil, add cumin seeds and onions. Sauté until golden.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add tomatoes and cook until soft.",
        "Add turmeric, red chili, coriander powder and salt.",
        "Add vinegar and 1/2 cup water. Cook for 20 minutes.",
        "Add garam masala and coriander. Serve."
      ]
    },
    { 
      id: 7, 
      name: "Chicken Mughlai",
      tagline: "Royal Mughlai chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "1 cup yogurt",
        "1/2 cup cream",
        "2 onions, sliced",
        "2 tbsp ginger-garlic paste",
        "1 tsp cumin seeds",
        "1 tsp turmeric",
        "1 tsp red chili powder",
        "1 tsp garam masala",
        "1/2 cup oil",
        "Salt to taste",
        "4 cloves",
        "2 cardamom",
        "1 cinnamon"
      ],
      steps: [
        "Heat oil, add whole spices and onions. Fry until brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add turmeric, red chili powder and salt.",
        "Add beaten yogurt and cook for 20 minutes.",
        "Add cream and simmer for 5 minutes.",
        "Sprinkle garam masala and serve."
      ]
    },
    { 
      id: 8, 
      name: "Chicken Do Pyaza",
      tagline: "Chicken with double onions",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "3 onions, sliced",
        "2 tomatoes, chopped",
        "2 tbsp ginger-garlic paste",
        "1 tsp cumin seeds",
        "1 tsp turmeric",
        "2 tsp red chili powder",
        "1 tsp garam masala",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add cumin seeds and half onions. Sauté until golden.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add tomatoes and cook until soft.",
        "Add turmeric, red chili powder and salt.",
        "Cook for 15 minutes.",
        "Add remaining onions and garam masala.",
        "Cook for 5 minutes and serve."
      ]
    },

    // ==================== CHICKEN KARAHI VARIETIES (5) ====================
    { 
      id: 9, 
      name: "White Chicken Karahi",
      tagline: "Creamy white karahi",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "1 cup yogurt",
        "2 tbsp ginger paste",
        "2 tbsp garlic paste",
        "4 green chilies",
        "1 tsp white pepper",
        "1 tsp black pepper",
        "1 tsp salt",
        "1/2 cup oil",
        "Fresh coriander"
      ],
      steps: [
        "Heat oil, add chicken and fry for 5 minutes.",
        "Add ginger, garlic and green chilies. Cook for 2 minutes.",
        "Add yogurt and cook on high heat until oil separates.",
        "Add white pepper, black pepper and salt.",
        "Cook for 10-15 minutes.",
        "Garnish with coriander and serve."
      ]
    },
    { 
      id: 10, 
      name: "Peshawari Chicken Karahi",
      tagline: "Peshawar style karahi",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "4 tomatoes, chopped",
        "2 tbsp ginger, julienned",
        "2 tbsp garlic, chopped",
        "4 green chilies",
        "1 tsp cumin seeds",
        "1 tsp red chili flakes",
        "1 tsp black pepper",
        "1 tsp salt",
        "1/2 cup oil"
      ],
      steps: [
        "Heat oil in karahi, add chicken and fry for 5 minutes.",
        "Add ginger, garlic and green chilies.",
        "Add tomatoes and cook until soft.",
        "Add cumin, red chili flakes, black pepper and salt.",
        "Cook on high heat until oil separates.",
        "Serve with naan."
      ]
    },
    { 
      id: 11, 
      name: "Spicy Chicken Karahi",
      tagline: "Extra spicy karahi",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "4 tomatoes",
        "2 tbsp ginger-garlic",
        "4 green chilies",
        "2 tsp red chili powder",
        "1 tsp cumin",
        "1 tsp pepper",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add chicken and fry.",
        "Add ginger-garlic and chilies.",
        "Add tomatoes and cook until soft.",
        "Add red chili, cumin, pepper and salt.",
        "Cook until oil separates.",
        "Serve hot."
      ]
    },
    { 
      id: 12, 
      name: "Chicken Karahi with Gravy",
      tagline: "Karahi with extra gravy",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "4 tomatoes, pureed",
        "2 tbsp ginger-garlic",
        "4 green chilies",
        "1 tsp cumin",
        "2 tsp red chili",
        "1/2 cup oil",
        "Salt to taste",
        "Fresh coriander"
      ],
      steps: [
        "Heat oil, add chicken and fry.",
        "Add ginger-garlic and chilies.",
        "Add tomato puree and cook.",
        "Add spices and 1 cup water.",
        "Simmer for 20 minutes.",
        "Garnish and serve."
      ]
    },
    { 
      id: 13, 
      name: "Dry Chicken Karahi",
      tagline: "Dry karahi with no gravy",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "2 tomatoes, chopped",
        "2 tbsp ginger-garlic",
        "4 green chilies",
        "1 tsp cumin",
        "2 tsp red chili",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add chicken and fry until golden.",
        "Add ginger-garlic and chilies.",
        "Add tomatoes and cook until dry.",
        "Add spices and cook on high heat.",
        "Serve hot with raita."
      ]
    }
  ];
    // More recipes continue...
  const moreChickenRecipes = [
    // ==================== CHICKEN MASALA (5) ====================
    { 
      id: 14, 
      name: "Chicken Masala",
      tagline: "Spicy chicken masala",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "2 onions, chopped",
        "2 tomatoes, pureed",
        "2 tbsp ginger-garlic paste",
        "1 tsp cumin seeds",
        "1 tsp turmeric",
        "2 tsp red chili powder",
        "1 tsp coriander powder",
        "1 tsp garam masala",
        "1/2 cup oil",
        "Salt to taste",
        "Fresh coriander"
      ],
      steps: [
        "Heat oil, add cumin seeds and onions. Sauté until golden.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add tomato puree and cook until oil separates.",
        "Add turmeric, red chili, coriander powder and salt.",
        "Add 1/2 cup water and cook for 20 minutes.",
        "Add garam masala and coriander. Serve."
      ]
    },
    { 
      id: 15, 
      name: "Chicken Tikka Masala",
      tagline: "Restaurant style tikka masala",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken tikka pieces",
        "2 onions, chopped",
        "2 tomatoes, pureed",
        "2 tbsp ginger-garlic paste",
        "1 tsp cumin seeds",
        "1 tsp turmeric",
        "2 tsp red chili powder",
        "1 tsp kasuri methi",
        "1/2 cup cream",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add cumin seeds and onions. Sauté until golden.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add tomato puree and cook until oil separates.",
        "Add turmeric, red chili powder and salt.",
        "Add chicken tikka and simmer for 10 minutes.",
        "Add cream and kasuri methi.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 16, 
      name: "Chicken Butter Masala",
      tagline: "Creamy butter chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken, boneless",
        "2 onions, chopped",
        "2 tomatoes, pureed",
        "2 tbsp ginger-garlic paste",
        "1 tsp cumin",
        "1 tsp red chili",
        "1/2 cup cream",
        "2 tbsp butter",
        "1 tsp kasuri methi",
        "Salt to taste"
      ],
      steps: [
        "Heat butter, add cumin and onions. Sauté until golden.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add tomato puree and cook until butter separates.",
        "Add red chili and salt.",
        "Add chicken and cook for 15 minutes.",
        "Add cream and kasuri methi.",
        "Serve with naan."
      ]
    },
    { 
      id: 17, 
      name: "Chicken Lababdar",
      tagline: "Rich and creamy lababdar",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "2 onions, chopped",
        "2 tomatoes, pureed",
        "2 tbsp ginger-garlic",
        "1 tsp cumin",
        "2 tsp red chili",
        "1 tsp garam masala",
        "1/4 cup cream",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add cumin and onions. Sauté until golden.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add tomato puree and cook until oil separates.",
        "Add red chili and salt. Cook for 15 minutes.",
        "Add cream and garam masala.",
        "Serve hot."
      ]
    },
    { 
      id: 18, 
      name: "Chicken Kolhapuri",
      tagline: "Spicy Kolhapuri style chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "2 onions, chopped",
        "2 tomatoes, chopped",
        "2 tbsp ginger-garlic",
        "2 tsp red chili powder",
        "1 tsp turmeric",
        "1 tsp garam masala",
        "1/2 cup oil",
        "Salt to taste",
        "1 tbsp coconut, grated"
      ],
      steps: [
        "Heat oil, add onions and sauté until brown.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add tomatoes and cook until soft.",
        "Add red chili, turmeric, garam masala and salt.",
        "Add coconut and 1/2 cup water.",
        "Cook for 20 minutes and serve."
      ]
    },

    // ==================== CHICKEN ROAST (3) ====================
    { 
      id: 19, 
      name: "Oven Roasted Chicken",
      tagline: "Whole roasted chicken",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "1 whole chicken",
        "1 cup yogurt",
        "2 tbsp ginger-garlic paste",
        "2 tsp red chili powder",
        "1 tsp turmeric",
        "1 tsp garam masala",
        "1 tsp cumin powder",
        "1 tsp coriander powder",
        "2 tbsp lemon juice",
        "2 tbsp oil",
        "Salt to taste"
      ],
      steps: [
        "Make slits on chicken.",
        "Mix all ingredients to make marinade.",
        "Marinate chicken for 4 hours.",
        "Preheat oven to 180°C.",
        "Place chicken in baking tray.",
        "Roast for 45-50 minutes, basting occasionally.",
        "Let rest for 10 minutes before carving.",
        "Serve with salad."
      ]
    },
    { 
      id: 20, 
      name: "Tandoori Chicken",
      tagline: "Classic tandoori chicken",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "1 whole chicken",
        "1 cup yogurt",
        "2 tbsp ginger-garlic paste",
        "2 tbsp tandoori masala",
        "2 tsp red chili powder",
        "1 tsp turmeric",
        "2 tbsp lemon juice",
        "2 tbsp oil",
        "Salt to taste",
        "Orange food color (optional)"
      ],
      steps: [
        "Make deep slits on chicken.",
        "Mix all ingredients for marinade.",
        "Marinate for 6 hours.",
        "Preheat oven to 200°C.",
        "Place chicken on rack with tray below.",
        "Bake for 30-35 minutes, turning once.",
        "Brush with oil and grill for 5 minutes.",
        "Serve with mint chutney."
      ]
    },
    { 
      id: 21, 
      name: "Chicken Roast with Gravy",
      tagline: "Roasted chicken in gravy",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "1 whole chicken",
        "2 onions, sliced",
        "2 tomatoes, chopped",
        "2 tbsp ginger-garlic",
        "1 tsp cumin",
        "1 tsp red chili",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Roast chicken in oven until golden.",
        "Heat oil, add cumin and onions. Sauté until golden.",
        "Add ginger-garlic and tomatoes. Cook until soft.",
        "Add red chili and salt.",
        "Add roasted chicken and 1 cup water.",
        "Simmer for 15 minutes.",
        "Serve hot."
      ]
    },

    // ==================== CHICKEN BONELESS (4) ====================
    { 
      id: 22, 
      name: "Chicken Boneless Curry",
      tagline: "Boneless chicken curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g boneless chicken cubes",
        "2 onions, chopped",
        "2 tomatoes, pureed",
        "2 tbsp ginger-garlic",
        "1 tsp cumin",
        "1 tsp turmeric",
        "2 tsp red chili",
        "1 tsp garam masala",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add cumin and onions. Sauté until golden.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add chicken and fry until white.",
        "Add tomato puree and cook until oil separates.",
        "Add turmeric, red chili and salt.",
        "Cook for 15 minutes.",
        "Add garam masala and serve."
      ]
    },
    { 
      id: 23, 
      name: "Chicken Malai Boti",
      tagline: "Creamy chicken cubes",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g boneless chicken cubes",
        "1/2 cup cream",
        "2 tbsp ginger-garlic paste",
        "2 tbsp green chili paste",
        "1 tsp white pepper",
        "1 tsp garam masala",
        "1 tbsp lemon juice",
        "2 tbsp oil",
        "Salt to taste"
      ],
      steps: [
        "Mix all ingredients except chicken.",
        "Add chicken and marinate for 2 hours.",
        "Heat oil in pan, add chicken.",
        "Cook on medium heat until done.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 24, 
      name: "Chicken Kali Mirch",
      tagline: "Black pepper chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g boneless chicken",
        "2 onions, chopped",
        "2 tbsp ginger-garlic",
        "2 tbsp black pepper, crushed",
        "1 tsp cumin",
        "1/2 cup yogurt",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add cumin and onions. Sauté until golden.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add yogurt and black pepper.",
        "Cook for 15 minutes.",
        "Serve hot."
      ]
    },
    { 
      id: 25, 
      name: "Chicken Hariyali",
      tagline: "Green masala chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g boneless chicken",
        "1 cup mint-coriander chutney",
        "2 tbsp ginger-garlic",
        "2 green chilies",
        "1 tsp cumin",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Grind mint, coriander and chilies to paste.",
        "Heat oil, add cumin and chicken. Fry for 5 minutes.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add green paste and salt.",
        "Cook for 15 minutes.",
        "Serve with naan."
      ]
    },

    // ==================== CHICKEN YAKHNI (3) ====================
    { 
      id: 26, 
      name: "Chicken Yakhni",
      tagline: "Light chicken broth",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken",
        "2 onions, chopped",
        "2 tbsp ginger-garlic",
        "1 tsp black pepper",
        "1 tsp cumin seeds",
        "4 cloves",
        "2 cardamom",
        "1 cinnamon",
        "Salt to taste",
        "Fresh coriander"
      ],
      steps: [
        "Boil chicken with whole spices and onions in 4 cups water.",
        "Simmer for 30 minutes.",
        "Strain and serve hot with bread."
      ]
    },
    { 
      id: 27, 
      name: "Chicken Soup",
      tagline: "Healthy chicken soup",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "250g chicken, shredded",
        "1 carrot, chopped",
        "1 onion, chopped",
        "2 tbsp ginger-garlic",
        "1 tsp pepper",
        "Salt to taste",
        "Fresh coriander"
      ],
      steps: [
        "Boil chicken with vegetables in 4 cups water.",
        "Simmer for 30 minutes.",
        "Add pepper and salt.",
        "Garnish and serve."
      ]
    },
    { 
      id: 28, 
      name: "Chicken Corn Soup",
      tagline: "Creamy corn and chicken soup",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "250g chicken, shredded",
        "1 cup corn kernels",
        "1 egg, beaten",
        "2 tbsp cornflour",
        "1 tsp pepper",
        "Salt to taste"
      ],
      steps: [
        "Boil chicken stock with corn.",
        "Add cornflour slurry to thicken.",
        "Slowly add beaten egg while stirring.",
        "Add pepper and salt.",
        "Serve hot."
      ]
    }
  ];
    // Final recipes...
  const finalChickenRecipes = [
    // ==================== CHICKEN REGIONAL (5) ====================
    { 
      id: 29, 
      name: "Hyderabadi Chicken",
      tagline: "Hyderabadi style chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "2 onions, chopped",
        "2 tomatoes, chopped",
        "2 tbsp ginger-garlic",
        "1 tsp cumin",
        "2 tsp red chili",
        "1 tsp garam masala",
        "1/2 cup yogurt",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add cumin and onions. Sauté until golden.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add tomatoes and cook until soft.",
        "Add red chili, garam masala and salt.",
        "Add yogurt and cook for 20 minutes.",
        "Serve hot."
      ]
    },
    { 
      id: 30, 
      name: "Punjabi Chicken",
      tagline: "Punjabi style chicken curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "2 onions, chopped",
        "2 tomatoes, pureed",
        "2 tbsp ginger-garlic",
        "1 tsp cumin",
        "1 tsp turmeric",
        "2 tsp red chili",
        "1 tsp garam masala",
        "2 tbsp butter",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil and butter, add cumin and onions.",
        "Sauté until golden, add ginger-garlic.",
        "Add chicken and fry for 5 minutes.",
        "Add tomato puree and cook until oil separates.",
        "Add turmeric, red chili and salt.",
        "Cook for 20 minutes.",
        "Add garam masala and serve."
      ]
    },
    { 
      id: 31, 
      name: "Kerala Chicken Curry",
      tagline: "Kerala style coconut chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "1 cup coconut milk",
        "2 onions, chopped",
        "2 tomatoes, chopped",
        "2 tbsp ginger-garlic",
        "1 tsp mustard seeds",
        "1 tsp turmeric",
        "2 tsp red chili",
        "Curry leaves",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add mustard seeds and curry leaves.",
        "Add onions and sauté until golden.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add tomatoes and cook until soft.",
        "Add turmeric, red chili and salt.",
        "Add coconut milk and simmer for 15 minutes.",
        "Serve with rice."
      ]
    },
    { 
      id: 32, 
      name: "Chettinad Chicken",
      tagline: "Spicy Chettinad chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "2 onions, chopped",
        "2 tomatoes, chopped",
        "2 tbsp ginger-garlic",
        "1 tsp fennel seeds",
        "1 tsp cumin",
        "2 tsp red chili",
        "1 tsp pepper",
        "1/2 cup coconut, grated",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Dry roast fennel, cumin and coconut. Grind to paste.",
        "Heat oil, add onions and sauté until golden.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add tomatoes and cook until soft.",
        "Add ground paste, red chili, pepper and salt.",
        "Cook for 20 minutes and serve."
      ]
    },
    { 
      id: 33, 
      name: "Goan Chicken Curry",
      tagline: "Goan style coconut curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "1 cup coconut milk",
        "2 onions, chopped",
        "2 tomatoes, chopped",
        "2 tbsp ginger-garlic",
        "1 tsp cumin",
        "2 tsp red chili",
        "1 tsp turmeric",
        "1 tbsp vinegar",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add cumin and onions. Sauté until golden.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add tomatoes and cook until soft.",
        "Add turmeric, red chili and salt.",
        "Add coconut milk and vinegar.",
        "Simmer for 15 minutes and serve."
      ]
    },

    // ==================== CHICKEN FRY (4) ====================
    { 
      id: 34, 
      name: "Chicken Fry",
      tagline: "Crispy fried chicken",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken pieces",
        "1 cup flour",
        "2 eggs, beaten",
        "1 cup breadcrumbs",
        "1 tsp red chili",
        "1 tsp pepper",
        "Salt to taste",
        "Oil for frying"
      ],
      steps: [
        "Season chicken with salt and pepper.",
        "Coat in flour, dip in egg, coat in breadcrumbs.",
        "Deep fry until golden and cooked.",
        "Serve hot with sauce."
      ]
    },
    { 
      id: 35, 
      name: "Chicken 65",
      tagline: "Spicy South Indian chicken starter",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g boneless chicken",
        "2 tbsp ginger-garlic",
        "2 tsp red chili",
        "1 tsp turmeric",
        "1 tbsp cornflour",
        "1 tbsp rice flour",
        "1 egg",
        "Oil for frying",
        "Curry leaves",
        "1 tsp mustard seeds"
      ],
      steps: [
        "Marinate chicken with ginger-garlic, spices, flours and egg.",
        "Deep fry until crispy.",
        "Temper mustard seeds and curry leaves.",
        "Toss fried chicken in tempering.",
        "Serve hot."
      ]
    },
    { 
      id: 36, 
      name: "Chicken Lollipop",
      tagline: "Chicken wing lollipop",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "6 chicken wings",
        "2 tbsp ginger-garlic",
        "1 tsp red chili",
        "1/2 tsp pepper",
        "1 tbsp soy sauce",
        "1 tbsp cornflour",
        "1 tbsp flour",
        "Oil for frying"
      ],
      steps: [
        "Trim wings into lollipop shape.",
        "Marinate with ginger-garlic, spices, soy sauce and flours.",
        "Deep fry until golden.",
        "Serve with sauce."
      ]
    },
    { 
      id: 37, 
      name: "Chicken Popcorn",
      tagline: "Bite-sized crispy chicken",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g boneless chicken, small cubes",
        "1 cup flour",
        "2 eggs",
        "1 cup breadcrumbs",
        "1 tsp red chili",
        "1 tsp garlic powder",
        "1 tsp pepper",
        "Salt to taste",
        "Oil for frying"
      ],
      steps: [
        "Season chicken with spices.",
        "Coat in flour, dip in egg, coat in breadcrumbs.",
        "Deep fry until golden.",
        "Serve with ketchup."
      ]
    },

    // ==================== CHICKEN HANDI (3) ====================
    { 
      id: 38, 
      name: "Chicken Handi",
      tagline: "Traditional handi chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "1 cup yogurt",
        "2 onions, chopped",
        "2 tbsp ginger-garlic",
        "1 tsp cumin",
        "1 tsp turmeric",
        "2 tsp red chili",
        "1 tsp garam masala",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add cumin and onions. Sauté until golden.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add turmeric, red chili and salt.",
        "Add yogurt and cook on low heat for 25 minutes.",
        "Add garam masala and serve."
      ]
    },
    { 
      id: 39, 
      name: "Chicken Handi with Cream",
      tagline: "Creamy handi chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "1 cup yogurt",
        "1/4 cup cream",
        "2 onions, chopped",
        "2 tbsp ginger-garlic",
        "1 tsp cumin",
        "1 tsp turmeric",
        "2 tsp red chili",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add cumin and onions. Sauté until golden.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add turmeric, red chili and salt.",
        "Add yogurt and cook for 20 minutes.",
        "Add cream and simmer for 5 minutes.",
        "Serve hot."
      ]
    },
    { 
      id: 40, 
      name: "Spicy Chicken Handi",
      tagline: "Extra spicy handi",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "1 cup yogurt",
        "2 onions, chopped",
        "2 tbsp ginger-garlic",
        "1 tsp cumin",
        "1 tsp turmeric",
        "3 tsp red chili",
        "1 tsp garam masala",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add cumin and onions. Sauté until golden.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes.",
        "Add turmeric, red chili and salt.",
        "Add yogurt and cook for 25 minutes.",
        "Add garam masala and serve."
      ]
    },

    // ==================== CHICKEN BHUNA (2) ====================
    { 
      id: 41, 
      name: "Chicken Bhuna",
      tagline: "Dry bhuna chicken",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "2 onions, chopped",
        "2 tomatoes, chopped",
        "2 tbsp ginger-garlic",
        "1 tsp cumin",
        "1 tsp turmeric",
        "2 tsp red chili",
        "1 tsp coriander powder",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add cumin and onions. Sauté until brown.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add chicken and fry until browned.",
        "Add tomatoes and cook until dry.",
        "Add turmeric, red chili, coriander and salt.",
        "Cook on low heat until oil separates and chicken is dry.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 42, 
      name: "Chicken Bhuna Masala",
      tagline: "Spicy bhuna masala",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "2 onions, chopped",
        "2 tomatoes, chopped",
        "2 tbsp ginger-garlic",
        "1 tsp cumin",
        "1 tsp turmeric",
        "2 tsp red chili",
        "1 tsp garam masala",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil, add cumin and onions. Sauté until brown.",
        "Add ginger-garlic and cook for 2 minutes.",
        "Add chicken and fry until browned.",
        "Add tomatoes and cook until dry.",
        "Add turmeric, red chili and salt.",
        "Cook on low heat for 20 minutes.",
        "Add garam masala and serve."
      ]
    }
  ];

  // Combine all arrays
  const allChickenRecipes = [...chickenRecipes, ...moreChickenRecipes, ...finalChickenRecipes];
    // ==================== FUNCTIONS & LOGIC ====================

  // Filter to show all recipes
  const recipesList = allChickenRecipes;

  // Handle card click
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowDetailPanel(true);
    setCurrentStep(0);
    setProgress(0);
    setIsPlaying(false);
    
    // Cancel any ongoing speech
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  };

  // Close modal
  const handleCloseModal = () => {
    setShowDetailPanel(false);
    setSelectedRecipe(null);
    setCurrentStep(0);
    setProgress(0);
    setIsPlaying(false);
    
    // Cancel any ongoing speech
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  };

  // Voice synthesis functions
  const speakStep = (stepText) => {
    // Cancel any ongoing speech
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(stepText);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    utterance.onend = () => {
      // Move to next step automatically if playing
      if (isPlaying && currentStep < selectedRecipe.steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else if (isPlaying && currentStep === selectedRecipe.steps.length - 1) {
        setIsPlaying(false);
        setCurrentStep(0);
      }
    };

    utterance.onerror = () => {
      console.error('Speech synthesis error');
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
    speechSynthesisRef.current = utterance;
  };

  const handlePlayPause = () => {
    if (!selectedRecipe) return;

    if (isPlaying) {
      // Pause
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      // Start playing from current step
      setIsPlaying(true);
      speakStep(selectedRecipe.steps[currentStep]);
    }
  };

  const handleNextStep = () => {
    if (!selectedRecipe) return;
    
    if (currentStep < selectedRecipe.steps.length - 1) {
      // Cancel current speech
      window.speechSynthesis.cancel();
      
      // Move to next step
      setCurrentStep(prev => prev + 1);
      
      // If was playing, start speaking new step
      if (isPlaying) {
        speakStep(selectedRecipe.steps[currentStep + 1]);
      }
    }
  };

  const handlePrevStep = () => {
    if (!selectedRecipe) return;
    
    if (currentStep > 0) {
      // Cancel current speech
      window.speechSynthesis.cancel();
      
      // Move to previous step
      setCurrentStep(prev => prev - 1);
      
      // If was playing, start speaking new step
      if (isPlaying) {
        speakStep(selectedRecipe.steps[currentStep - 1]);
      }
    }
  };

  const handleRestart = () => {
    if (!selectedRecipe) return;
    
    // Cancel current speech
    window.speechSynthesis.cancel();
    
    // Reset to first step
    setCurrentStep(0);
    
    // If was playing, start from beginning
    if (isPlaying) {
      speakStep(selectedRecipe.steps[0]);
    }
  };

  // Update progress when current step changes
  useEffect(() => {
    if (selectedRecipe) {
      setProgress(((currentStep + 1) / selectedRecipe.steps.length) * 100);
    }
  }, [currentStep, selectedRecipe]);

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // ==================== RENDER UI ====================

  return (
    <div className="pure-chicken-page">
      {/* Header */}
      <header className="pure-chicken-header">
        <div className="pure-chicken-header-content">
          <h1 className="pure-chicken-title">🍗 Pure Chicken Dishes</h1>
          <p className="pure-chicken-description">
            Discover 40+ delicious chicken recipes - curries, karahi, roast, masala aur bhi bahut kuch
          </p>
        </div>
      </header>

      {/* Main Content - Grid */}
      <main className="pure-chicken-main">
        <div className="pure-chicken-grid-section">
          <div className="pure-chicken-grid">
            {recipesList.map((recipe) => (
              <div
                key={recipe.id}
                className="pure-chicken-card"
                onClick={() => handleRecipeClick(recipe)}
              >
                <div
                  className="pure-chicken-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                />
                <div className="pure-chicken-card-content">
                  <h3 className="pure-chicken-card-title">{recipe.name}</h3>
                  <p className="pure-chicken-card-description">{recipe.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-home-btn" onClick={() => navigate(-1)}>
          <span>←</span> Back to Lunch Categories
        </button>
      </div>

      {/* Modal for Recipe Details */}
      {showDetailPanel && selectedRecipe && (
        <div className="pure-chicken-modal-overlay" onClick={handleCloseModal}>
          <div
            className="pure-chicken-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button className="pure-chicken-modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="pure-chicken-modal-header">
              <div className="pure-chicken-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="pure-chicken-modal-content">
              {/* Column 1: Ingredients */}
              <div className="pure-chicken-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="pure-chicken-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="pure-chicken-ingredient-item">
                      <span className="pure-chicken-ingredient-bullet">•</span>
                      <span className="pure-chicken-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Steps */}
              <div className="pure-chicken-modal-steps">
                <h3>Steps to Make</h3>
                <div className="pure-chicken-steps-list">
                  {selectedRecipe.steps.map((step, index) => (
                    <div key={index} className="pure-chicken-step-item">
                      <span className="pure-chicken-step-number">{index + 1}.</span>
                      <span className="pure-chicken-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Voice Instructions */}
              <div className="pure-chicken-modal-voice-container">
                <div className="voice-panel">
                  <h3>
                    <i>🔊</i> Voice Instructions
                  </h3>
                  
                  {/* Progress Bar */}
                  <div className="voice-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="progress-info">
                      <span>Step {currentStep + 1} of {selectedRecipe.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  {/* Current Step Display */}
                  <div className="current-step-display">
                    <p>
                      <strong>Step {currentStep + 1}:</strong> {selectedRecipe.steps[currentStep]}
                    </p>
                  </div>

                  {/* Voice Controls */}
                  <button
                    className={`voice-main-btn ${isPlaying ? 'stop' : 'play'}`}
                    onClick={handlePlayPause}
                  >
                    {isPlaying ? (
                      <>⏸️ Pause Reading</>
                    ) : (
                      <>▶️ Play Reading</>
                    )}
                  </button>

                  <div className="step-controls">
                    <button
                      className="step-btn"
                      onClick={handlePrevStep}
                      disabled={currentStep === 0}
                    >
                      ⏮️ Previous
                    </button>
                    <button
                      className="step-btn"
                      onClick={handleRestart}
                      title="Restart from beginning"
                    >
                      🔄 Restart
                    </button>
                    <button
                      className="step-btn"
                      onClick={handleNextStep}
                      disabled={currentStep === selectedRecipe.steps.length - 1}
                    >
                      Next ⏭️
                    </button>
                  </div>

                  {/* Keyboard Instructions */}
                  <div className="voice-hint">
                    <small>Use ⏮️ ⏭️ buttons or restart to navigate</small>
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

export default RecipesPureChicken;