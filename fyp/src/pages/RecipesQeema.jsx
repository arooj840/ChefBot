import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipesQeema.css';

const RecipesQeema = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All Qeema Recipes (35+ recipes) with detailed instructions
  const qeemaRecipes = [
    // ==================== BASIC QEEMA (5) ====================
    { 
      id: 1, 
      name: "Simple Qeema",
      tagline: "Basic minced meat curry - everyday comfort food",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds until fragrant.",
        "Add finely chopped onions and sauté for 6-7 minutes until they turn golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until the raw smell disappears.",
        "Add mince and fry on high heat for 8-10 minutes until the mince changes color and is well-browned. Break up any lumps with a spatula.",
        "Add chopped tomatoes and cook for 5-6 minutes until they become soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes until the spices are fragrant.",
        "Add 1/2 cup of warm water and stir well. Cover and cook on medium heat for 15-20 minutes until the mince is fully cooked and the gravy has thickened.",
        "Sprinkle garam masala and garnish with fresh coriander leaves and green chilies.",
        "Serve hot with naan, roti, or steamed rice."
      ]
    },
    { 
      id: 2, 
      name: "Qeema Masala",
      tagline: "Spicy minced meat masala - bold and flavorful",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry on high heat for 8-10 minutes until well-browned and any liquid has evaporated.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Cook for another 10-12 minutes until the mince is fully cooked and the masala is thick.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 3, 
      name: "Qeema Karahi",
      tagline: "Karahi style minced meat - restaurant style",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a wok (karahi) over high heat. Add mince and fry for 8-10 minutes until well-browned. Break up any lumps.",
        "Add julienned ginger, chopped garlic, and slit green chilies. Cook for 2-3 minutes until fragrant.",
        "Add chopped tomatoes and cook for 6-7 minutes until they become soft and the oil separates.",
        "Add cumin seeds, red chili flakes, black pepper powder, and salt. Mix well.",
        "Cook on high heat for 5-7 minutes, stirring frequently, until the oil comes on top and the mince is dry.",
        "Garnish with fresh coriander leaves and serve hot with naan."
      ]
    },
    { 
      id: 4, 
      name: "Qeema Bhuna",
      tagline: "Dry bhuna mince - thick and spicy",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 7-8 minutes until dark golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry on high heat for 10-12 minutes until well-browned and all liquid has evaporated.",
        "Add chopped tomatoes and cook for 6-7 minutes until they become dry and the oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Cook on low heat for another 8-10 minutes until the mince is completely dry and the masala coats it well.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 5, 
      name: "Qeema Handi",
      tagline: "Creamy handi qeema - rich and smooth",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a handi or heavy-bottomed pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Reduce heat to low. Add beaten yogurt slowly, stirring continuously to prevent curdling.",
        "Cover and cook for 15-20 minutes until the mince is fully cooked.",
        "Add cream and simmer for 5-7 minutes on low heat.",
        "Garnish with fresh coriander leaves and serve hot with naan."
      ]
    },

    // ==================== QEEMA + MATAR (4) ====================
    { 
      id: 6, 
      name: "Qeema Matar",
      tagline: "Mince with peas - sweet and savory",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1/2 cup of warm water and cook for 10-12 minutes until the mince is almost done.",
        "Add green peas and cook for 5-7 minutes until peas are tender.",
        "Sprinkle garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 7, 
      name: "Qeema Matar Pulao",
      tagline: "Rice with mince and peas - one pot meal",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      ingredients: [
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
      steps: [
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
      ]
    },
    { 
      id: 8, 
      name: "Qeema Matar Curry",
      tagline: "Mince and peas curry - with extra gravy",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water and bring to a boil. Simmer for 10-12 minutes.",
        "Add green peas and cook for 5-7 minutes until peas are tender.",
        "Serve hot with naan or steamed rice."
      ]
    },
    { 
      id: 9, 
      name: "Qeema Matar Masala",
      tagline: "Spicy mince with peas - extra flavorful",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add red chili powder and salt. Mix well and cook for 2-3 minutes.",
        "Add 1/2 cup of warm water and cook for 10-12 minutes.",
        "Add green peas and cook for 5-7 minutes until peas are tender.",
        "Sprinkle garam masala and serve hot with naan or roti."
      ]
    },

    // ==================== QEEMA + ALOO (4) ====================
    { 
      id: 10, 
      name: "Qeema Aloo",
      tagline: "Mince with potatoes - hearty and filling",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1 cup of warm water. Stir well.",
        "Cover and cook for 15-20 minutes until the potatoes are tender and the mince is cooked.",
        "Sprinkle garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 11, 
      name: "Qeema Aloo Matar",
      tagline: "Mince with potato and peas - complete meal",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1 cup of warm water. Cook for 10-12 minutes.",
        "Add green peas and cook for 5-7 minutes until peas and potatoes are tender.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 12, 
      name: "Qeema Aloo Bhaji",
      tagline: "Dry mince with potatoes - perfect with roti",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add sliced onions and sauté for 5-6 minutes until soft and translucent.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned and dry.",
        "Add potato slices, turmeric powder, red chili powder, and salt. Mix well.",
        "Cover and cook on low heat for 15-20 minutes until the potatoes are tender. Stir occasionally to prevent sticking.",
        "Cook uncovered for the last 5 minutes to dry out any remaining moisture.",
        "Serve hot with roti or paratha."
      ]
    },
    { 
      id: 13, 
      name: "Qeema Aloo Karahi",
      tagline: "Karahi style mince with potatoes",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a wok (karahi) over high heat. Add mince and fry for 8-10 minutes until well-browned.",
        "Add ginger-garlic paste and green chilies. Cook for 2-3 minutes until fragrant.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and the oil separates.",
        "Add cumin seeds, red chili powder, and salt. Mix well.",
        "Add potato cubes and 1/2 cup of warm water. Cover and cook for 15-20 minutes until potatoes are tender.",
        "Cook on high heat for the last 5 minutes to dry out any excess liquid.",
        "Serve hot with naan."
      ]
    },

    // ==================== QEEMA + PALAK (3) ====================
    { 
      id: 14, 
      name: "Qeema Palak",
      tagline: "Mince with spinach - healthy and delicious",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until wilted.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Cover and cook for 8-10 minutes until the mince is fully cooked.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 15, 
      name: "Qeema Palak Matar",
      tagline: "Mince with spinach and peas - super healthy",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add chopped spinach and green peas. Cook for 3-4 minutes until spinach wilts.",
        "Add turmeric powder, red chili powder, and salt. Mix well.",
        "Cover and cook for 10-12 minutes until everything is cooked through.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 16, 
      name: "Qeema Palak Curry",
      tagline: "Spinach mince curry - with extra gravy",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates.",
        "Add spinach puree, turmeric powder, red chili powder, and salt. Mix well.",
        "Add 1/2 cup of warm water and bring to a simmer.",
        "Cover and cook for 10-12 minutes until the mince is fully cooked.",
        "Serve hot with naan or steamed rice."
      ]
    },

    // ==================== QEEMA + SHIMLA MIRCH (3) ====================
    { 
      id: 17, 
      name: "Qeema Shimla Mirch",
      tagline: "Mince with capsicum - colorful and tasty",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add chopped capsicum, turmeric powder, red chili powder, and salt. Mix well.",
        "Cover and cook for 8-10 minutes until the capsicum is tender-crisp.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 18, 
      name: "Qeema Shimla Mirch Aloo",
      tagline: "Mince with capsicum and potato - complete meal",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add potato cubes, turmeric powder, red chili powder, and salt. Mix well.",
        "Add 1 cup of warm water. Cover and cook for 15-20 minutes until potatoes are tender.",
        "Add chopped capsicum and cook for 5-7 minutes until tender-crisp.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 19, 
      name: "Qeema Shimla Mirch Matar",
      tagline: "Mince with capsicum and peas - colorful and nutritious",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add green peas, turmeric powder, red chili powder, and salt. Mix well.",
        "Add 1/2 cup of warm water and cook for 10-12 minutes.",
        "Add chopped capsicum and cook for 5-7 minutes until tender-crisp.",
        "Serve hot with naan or roti."
      ]
    },

    // ==================== QEEMA + BAINGAN (2) ====================
    { 
      id: 20, 
      name: "Qeema Baingan",
      tagline: "Mince with eggplant - unique combination",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add eggplant cubes, turmeric powder, red chili powder, and salt. Mix gently.",
        "Add 1/2 cup of warm water. Cover and cook for 10-12 minutes until the eggplants are tender.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 21, 
      name: "Qeema Baingan Bharta",
      tagline: "Mince with mashed eggplant - smoky and delicious",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
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
      steps: [
        "Roast eggplants directly on gas flame until the skin is charred and flesh is soft (about 10-15 minutes). Cool, peel, and mash. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and green chilies. Cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well.",
        "Add mashed eggplant and mix thoroughly. Cook for 8-10 minutes, stirring occasionally.",
        "Serve hot with naan or roti."
      ]
    },

    // ==================== QEEMA + KARELA (2) ====================
    { 
      id: 22, 
      name: "Qeema Karela",
      tagline: "Mince with bitter gourd - healthy and unique",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
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
      steps: [
        "Rub karela slices with 1 teaspoon salt and set aside for 30 minutes to reduce bitterness. Rinse well with water and squeeze out the bitter juice completely.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add karela slices, turmeric powder, red chili powder, and salt. Mix well.",
        "Cover and cook for 10-12 minutes until the karela is tender.",
        "Sprinkle amchur powder and serve hot with roti."
      ]
    },
    { 
      id: 23, 
      name: "Qeema Karela Aloo",
      tagline: "Mince with bitter gourd and potato",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
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
      steps: [
        "Rub karela slices with salt, set aside for 30 minutes. Rinse and squeeze out bitter juice.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add potato cubes, karela slices, turmeric powder, red chili powder, and salt. Mix well.",
        "Add 1 cup of warm water. Cover and cook for 15-20 minutes until the potatoes and karela are tender.",
        "Serve hot with roti."
      ]
    },

    // ==================== QEEMA + GOBHI (2) ====================
    { 
      id: 24, 
      name: "Qeema Gobhi",
      tagline: "Mince with cauliflower - nutritious and tasty",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add cauliflower florets, turmeric powder, red chili powder, and salt. Mix well.",
        "Add 1/2 cup of warm water. Cover and cook for 12-15 minutes until the cauliflower is tender.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 25, 
      name: "Qeema Gobhi Aloo",
      tagline: "Mince with cauliflower and potato",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add potato cubes, turmeric powder, red chili powder, and salt. Mix well.",
        "Add 1 cup of warm water. Cover and cook for 10-12 minutes.",
        "Add cauliflower florets and cook for 10-12 minutes until both vegetables are tender.",
        "Serve hot with roti."
      ]
    },

    // ==================== QEEMA + METHI (2) ====================
    { 
      id: 26, 
      name: "Qeema Methi",
      tagline: "Mince with fenugreek leaves - aromatic and healthy",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add chopped methi leaves and cook for 3-4 minutes until wilted.",
        "Add turmeric powder, red chili powder, and salt. Mix well.",
        "Cover and cook for 8-10 minutes until the mince is fully cooked.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 27, 
      name: "Qeema Methi Aloo",
      tagline: "Mince with fenugreek and potato",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add potato cubes, turmeric powder, red chili powder, and salt. Mix well.",
        "Add 1 cup of warm water. Cover and cook for 12-15 minutes until potatoes are almost tender.",
        "Add chopped methi leaves and cook for 5-7 minutes until wilted and potatoes are tender.",
        "Serve hot with roti."
      ]
    },

    // ==================== QEEMA + BEANS (2) ====================
    { 
      id: 28, 
      name: "Qeema Beans",
      tagline: "Mince with green beans - simple and tasty",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add green beans, turmeric powder, red chili powder, and salt. Mix well.",
        "Add 1/2 cup of warm water. Cover and cook for 10-12 minutes until the beans are tender.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 29, 
      name: "Qeema Beans Aloo",
      tagline: "Mince with beans and potato",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add potato cubes, green beans, turmeric powder, red chili powder, and salt. Mix well.",
        "Add 1 cup of warm water. Cover and cook for 15-20 minutes until the potatoes and beans are tender.",
        "Serve hot with roti."
      ]
    },

    // ==================== QEEMA + TINDA/KADDU (2) ====================
    { 
      id: 30, 
      name: "Qeema Tinday",
      tagline: "Mince with apple gourd - light and healthy",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add tinday cubes, turmeric powder, red chili powder, and salt. Mix gently.",
        "Add 1/2 cup of warm water. Cover and cook for 10-12 minutes until the tinday is tender.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 31, 
      name: "Qeema Kaddu",
      tagline: "Mince with pumpkin - sweet and savory",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add pumpkin cubes, turmeric powder, red chili powder, jaggery, and salt. Mix well.",
        "Add 1/2 cup of warm water. Cover and cook for 12-15 minutes until the pumpkin is tender.",
        "Serve hot with roti."
      ]
    },

    // ==================== QEEMA SPECIALITIES (5) ====================
    { 
      id: 32, 
      name: "Qeema Naan",
      tagline: "Mince stuffed naan - perfect breakfast",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
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
      steps: [
        "In a bowl, mix flour, yeast, sugar, and salt. Add yogurt and oil. Gradually add warm water and knead into a soft, smooth dough.",
        "Cover and let the dough rise in a warm place for 2 hours until doubled in size.",
        "Punch down the dough and divide into 6-8 equal balls.",
        "Roll each ball into a small circle. Place 2-3 tablespoons of cooked mince in the center.",
        "Gather the edges and seal tightly. Gently roll out into a naan shape.",
        "Heat a tawa (griddle) over medium heat. Place the naan on the hot tawa.",
        "Cook for 1-2 minutes, then flip. The underside should have brown spots.",
        "You can also cook directly on gas flame for a tandoori effect.",
        "Brush with butter and serve hot with yogurt or chutney."
      ]
    },
    { 
      id: 33, 
      name: "Qeema Paratha",
      tagline: "Mince stuffed paratha - hearty breakfast",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "250g mince - cooked and cooled",
        "2 cups whole wheat flour",
        "1 teaspoon salt",
        "Water for kneading",
        "Oil or ghee for cooking"
      ],
      steps: [
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
      ]
    },
    { 
      id: 34, 
      name: "Qeema Samosa",
      tagline: "Mince stuffed samosas - crispy snack",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "250g mince - cooked and cooled",
        "2 cups all-purpose flour",
        "1/4 cup oil",
        "1 teaspoon salt",
        "Water for dough",
        "Oil for deep frying"
      ],
      steps: [
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
      ]
    },
    { 
      id: 35, 
      name: "Qeema Biryani",
      tagline: "Biryani with minced meat - aromatic and flavorful",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      ingredients: [
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
      steps: [
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
      ]
    },
    { 
      id: 36, 
      name: "Qeema Cutlet",
      tagline: "Crispy mince cutlets - perfect tea time snack",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
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
      steps: [
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
      ]
    }
  ];

  const allQeemaRecipes = qeemaRecipes;

  const recipesList = allQeemaRecipes;

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowDetailPanel(true);
    setCurrentStep(0);
    setProgress(0);
    setIsPlaying(false);
    
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  };

  const handleCloseModal = () => {
    setShowDetailPanel(false);
    setSelectedRecipe(null);
    setCurrentStep(0);
    setProgress(0);
    setIsPlaying(false);
    
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  };

  const speakStep = (stepText) => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(stepText);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    utterance.onend = () => {
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
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      speakStep(selectedRecipe.steps[currentStep]);
    }
  };

  const handleNextStep = () => {
    if (!selectedRecipe) return;
    
    if (currentStep < selectedRecipe.steps.length - 1) {
      window.speechSynthesis.cancel();
      setCurrentStep(prev => prev + 1);
      if (isPlaying) {
        speakStep(selectedRecipe.steps[currentStep + 1]);
      }
    }
  };

  const handlePrevStep = () => {
    if (!selectedRecipe) return;
    
    if (currentStep > 0) {
      window.speechSynthesis.cancel();
      setCurrentStep(prev => prev - 1);
      if (isPlaying) {
        speakStep(selectedRecipe.steps[currentStep - 1]);
      }
    }
  };

  const handleRestart = () => {
    if (!selectedRecipe) return;
    
    window.speechSynthesis.cancel();
    setCurrentStep(0);
    if (isPlaying) {
      speakStep(selectedRecipe.steps[0]);
    }
  };

  useEffect(() => {
    if (selectedRecipe) {
      setProgress(((currentStep + 1) / selectedRecipe.steps.length) * 100);
    }
  }, [currentStep, selectedRecipe]);

  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="qeema-page">
      <header className="qeema-header">
        <div className="qeema-header-content">
          <h1 className="qeema-title">Qeema Dishes</h1>
          <p className="qeema-description">
            Discover 36+ delicious minced meat recipes - qeema matar, qeema aloo, qeema paratha, and much more
          </p>
        </div>
      </header>

      <main className="qeema-main">
        <div className="qeema-grid-section">
          <div className="qeema-grid">
            {recipesList.map((recipe) => (
              <div
                key={recipe.id}
                className="qeema-card"
                onClick={() => handleRecipeClick(recipe)}
              >
                <div
                  className="qeema-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                />
                <div className="qeema-card-content">
                  <h3 className="qeema-card-title">{recipe.name}</h3>
                  <p className="qeema-card-description">{recipe.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="back-button-container">
        <button className="back-home-btn" onClick={() => navigate(-1)}>
          <span>←</span> Back to Lunch Categories
        </button>
      </div>

      {showDetailPanel && selectedRecipe && (
        <div className="qeema-modal-overlay" onClick={handleCloseModal}>
          <div
            className="qeema-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button className="qeema-modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="qeema-modal-header">
              <div className="qeema-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="qeema-modal-content">
              <div className="qeema-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="qeema-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="qeema-ingredient-item">
                      <span className="qeema-ingredient-bullet">•</span>
                      <span className="qeema-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="qeema-modal-steps">
                <h3>Steps to Make</h3>
                <div className="qeema-steps-list">
                  {selectedRecipe.steps.map((step, index) => (
                    <div key={index} className="qeema-step-item">
                      <span className="qeema-step-number">{index + 1}.</span>
                      <span className="qeema-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="qeema-modal-voice-container">
                <div className="voice-panel">
                  <h3>
                    <span>🔊</span> Voice Instructions
                  </h3>
                  
                  <div className="voice-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="progress-info">
                      <span>Step {currentStep + 1} of {selectedRecipe.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <div className="current-step-display">
                    <p>
                      <strong>Step {currentStep + 1}:</strong> {selectedRecipe.steps[currentStep]}
                    </p>
                  </div>

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

                  <div className="voice-hint">
                    <small>Use buttons to navigate through steps</small>
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

export default RecipesQeema;