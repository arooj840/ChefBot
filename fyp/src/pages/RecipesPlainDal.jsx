import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipesPlainDal.css';

const RecipesPlainDal = () => {
  const navigate = useNavigate();
  const [selectedDal, setSelectedDal] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All Plain Dal Recipes (30+ recipes) with detailed instructions
  const dalRecipes = [
    // ==================== CHANA DAL BASED (5) ====================
    { 
      id: 1, 
      name: "Chana Dal",
      tagline: "Simple split Bengal gram lentils - protein packed",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup chana dal (split Bengal gram) - washed and soaked",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "2 tablespoons oil or ghee",
        "Salt to taste",
        "Fresh coriander leaves for garnish",
        "2 green chilies - slit lengthwise"
      ],
      steps: [
        "Wash chana dal thoroughly under running water until water runs clear. Soak in fresh water for 30 minutes. Drain before cooking.",
        "In a pressure cooker, add soaked dal, 2 cups of water, turmeric powder, and salt. Close the lid and pressure cook on medium heat for 3-4 whistles or until the dal is soft and mushy.",
        "Let the pressure release naturally. Open the lid and mash the dal slightly with the back of a spoon. Set aside.",
        "Heat oil or ghee in a separate pan over medium heat. Add cumin seeds and let them crackle for 30 seconds until fragrant.",
        "Add finely chopped onions and sauté for 5-6 minutes until they turn golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until the raw smell disappears.",
        "Add chopped tomatoes and cook for 5-6 minutes until they become soft and mushy.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes until the spices are fragrant.",
        "Add the cooked dal and stir well. Add 1/2 cup of water if the dal is too thick. Let it simmer for 10-12 minutes on low heat.",
        "Sprinkle garam masala and garnish with fresh coriander leaves and green chilies.",
        "Serve hot with steamed rice, jeera rice, or roti."
      ]
    },
    { 
      id: 2, 
      name: "Chana Dal Fry",
      tagline: "Tempered chana dal with onions and tomatoes",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup chana dal - washed and soaked",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon mustard seeds",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "2 tablespoons ghee",
        "Salt to taste",
        "Fresh coriander leaves for garnish",
        "1 lemon - juiced"
      ],
      steps: [
        "Wash chana dal thoroughly and soak in water for 30 minutes. Drain well.",
        "In a pressure cooker, add soaked dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 3-4 whistles until the dal is soft but not completely mushy.",
        "Release pressure naturally. Open the lid and set the cooked dal aside.",
        "Heat ghee in a pan over medium heat. Add mustard seeds and cumin seeds. Let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and oil starts separating.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 8-10 minutes on low heat, stirring occasionally.",
        "Add garam masala, lemon juice, and fresh coriander leaves. Mix well.",
        "Serve hot with naan, roti, or steamed rice."
      ]
    },
    { 
      id: 3, 
      name: "Chana Dal Palak",
      tagline: "Chana dal with spinach - healthy and delicious",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup chana dal - washed and soaked",
        "2 cups fresh spinach (palak) - washed and finely chopped",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash chana dal and soak for 30 minutes. Drain well.",
        "In a pressure cooker, add soaked dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 3-4 whistles until soft.",
        "Release pressure naturally. Set the cooked dal aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until the spinach wilts completely.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 8-10 minutes on low heat.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with roti or steamed rice."
      ]
    },
    { 
      id: 4, 
      name: "Chana Dal Louki",
      tagline: "Chana dal with bottle gourd - light and nutritious",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup chana dal - washed and soaked",
        "2 cups louki (bottle gourd) - peeled and cut into small cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash chana dal and soak for 30 minutes. Drain well.",
        "In a pressure cooker, add soaked dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 3-4 whistles until soft.",
        "Release pressure naturally. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add louki cubes and cook for 5-6 minutes, stirring occasionally.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 10-12 minutes until the louki is completely tender.",
        "Garnish with fresh coriander leaves and serve hot with steamed rice."
      ]
    },
    { 
      id: 5, 
      name: "Chana Dal with Spinach",
      tagline: "Healthy chana dal and spinach combination",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup chana dal - washed and soaked",
        "2 cups fresh spinach - blanched and pureed",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons ghee",
        "Salt to taste",
        "2 tablespoons fresh cream (optional)"
      ],
      steps: [
        "Wash chana dal and soak for 30 minutes. Drain well.",
        "In a pressure cooker, add soaked dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 3-4 whistles until soft.",
        "Release pressure naturally. Mash the dal slightly with a spoon. Set aside.",
        "Blanch spinach in hot water for 2 minutes, then blend into a smooth puree. Set aside.",
        "Heat ghee in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 5-6 minutes until the ghee separates from the masala.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add spinach puree and cook for 3-4 minutes.",
        "Add the cooked dal and stir well. Simmer for 8-10 minutes on low heat.",
        "Sprinkle garam masala and add fresh cream if using. Mix well.",
        "Serve hot with naan or roti."
      ]
    },

    // ==================== MOONG DAL BASED (6) ====================
    { 
      id: 6, 
      name: "Moong Dal",
      tagline: "Simple split yellow moong dal - light and easy to digest",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup moong dal (split yellow lentils) - washed",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons oil or ghee",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash moong dal thoroughly under running water until water runs clear. Moong dal does not need soaking.",
        "In a pressure cooker, add washed dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 2-3 whistles until soft.",
        "Release pressure naturally. The dal should be soft and slightly mushy. Set aside.",
        "Heat oil or ghee in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until the raw smell disappears.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and mushy.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes until the spices are fragrant.",
        "Add the cooked dal and stir well. Simmer for 5-7 minutes on low heat.",
        "Garnish with fresh coriander leaves and serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 7, 
      name: "Moong Dal Fry",
      tagline: "Tempered moong dal with onions",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup moong dal - washed",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon mustard seeds",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons ghee",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash moong dal thoroughly. No need to soak.",
        "In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 2-3 whistles until soft.",
        "Release pressure naturally. Set aside.",
        "Heat ghee in a pan over medium heat. Add mustard seeds and cumin seeds. Let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and oil starts separating.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 5-7 minutes on low heat.",
        "Add garam masala and fresh coriander leaves. Mix well.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 8, 
      name: "Moong Dal Palak",
      tagline: "Moong dal with spinach - healthy green dal",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup moong dal - washed",
        "2 cups fresh spinach - washed and finely chopped",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash moong dal thoroughly.",
        "In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 2-3 whistles until soft.",
        "Release pressure naturally. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until wilted completely.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 5-7 minutes on low heat.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with roti or steamed rice."
      ]
    },
    { 
      id: 9, 
      name: "Moong Dal Louki",
      tagline: "Moong dal with bottle gourd - light summer dal",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup moong dal - washed",
        "2 cups louki (bottle gourd) - peeled and cut into small cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash moong dal thoroughly.",
        "In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 2-3 whistles until soft.",
        "Release pressure naturally. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add louki cubes and cook for 5-6 minutes, stirring occasionally.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 8-10 minutes until louki is tender.",
        "Garnish with fresh coriander leaves and serve hot with steamed rice."
      ]
    },
    { 
      id: 10, 
      name: "Moong Dal with Spinach",
      tagline: "Healthy moong dal and spinach puree",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup moong dal - washed",
        "2 cups fresh spinach - blanched and pureed",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons ghee",
        "Salt to taste"
      ],
      steps: [
        "Wash moong dal thoroughly.",
        "In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 2-3 whistles until soft.",
        "Release pressure naturally. Mash the dal slightly. Set aside.",
        "Blanch spinach in hot water for 2 minutes, then blend into a smooth puree.",
        "Heat ghee in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 5-6 minutes until the ghee separates.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add spinach puree and cook for 3-4 minutes.",
        "Add the cooked dal and stir well. Simmer for 5-7 minutes on low heat.",
        "Sprinkle garam masala and serve hot with roti."
      ]
    },
    { 
      id: 11, 
      name: "Moong Dal Khichdi",
      tagline: "Comforting rice and lentil porridge - perfect for sick days",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      ingredients: [
        "1/2 cup moong dal - washed",
        "1/2 cup basmati rice - washed",
        "1 medium onion - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "2 tablespoons ghee",
        "Salt to taste",
        "Fresh coriander leaves for garnish",
        "3 cups water"
      ],
      steps: [
        "Wash rice and moong dal together thoroughly under running water. Drain well.",
        "Heat ghee in a pressure cooker over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 3-4 minutes until light golden.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add the washed rice and dal. Stir well to coat with ghee for 2 minutes.",
        "Add turmeric powder and salt. Mix well.",
        "Add 3 cups of water and stir everything together.",
        "Close the pressure cooker lid and cook on medium heat for 3-4 whistles.",
        "Let the pressure release naturally. Open the lid and check the consistency. It should be soft and porridge-like.",
        "If too thick, add some hot water and mix well.",
        "Garnish with fresh coriander leaves and serve hot with yogurt, pickle, or papad."
      ]
    },

    // ==================== MAASH DAL BASED (4) ====================
    { 
      id: 12, 
      name: "Maash Ki Dal",
      tagline: "Black lentils with rich creamy texture",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup maash dal (black lentils / urad dal) - washed and soaked",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "2 tablespoons oil or ghee",
        "Salt to taste",
        "Fresh coriander leaves for garnish",
        "2 green chilies - slit lengthwise"
      ],
      steps: [
        "Wash maash dal thoroughly under running water. Soak in fresh water for 2 hours. Drain before cooking.",
        "In a pressure cooker, add soaked dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 4-5 whistles until the dal is very soft and mushy.",
        "Let the pressure release naturally. Open the lid and mash the dal well with a spoon. Set aside.",
        "Heat oil or ghee in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until the raw smell disappears.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and mushy.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes until the spices are fragrant.",
        "Add the cooked dal and stir well. Add 1/2 cup of water if the dal is too thick. Let it simmer for 15-20 minutes on low heat.",
        "Sprinkle garam masala and garnish with fresh coriander leaves and green chilies.",
        "Serve hot with steamed rice, naan, or roti."
      ]
    },
    { 
      id: 13, 
      name: "Maash Dal Fry",
      tagline: "Tempered black lentils - restaurant style",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup maash dal - washed and soaked",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon mustard seeds",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons ghee",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash maash dal and soak for 2 hours. Drain well.",
        "In a pressure cooker, add soaked dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 4-5 whistles until very soft.",
        "Release pressure naturally. Mash the dal well and set aside.",
        "Heat ghee in a pan over medium heat. Add mustard seeds and cumin seeds. Let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and ghee separates.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 10-12 minutes on low heat.",
        "Add garam masala and fresh coriander leaves. Mix well.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 14, 
      name: "Maash Dal Palak",
      tagline: "Black lentils with spinach - nutritious and delicious",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup maash dal - washed and soaked",
        "2 cups fresh spinach - washed and finely chopped",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste"
      ],
      steps: [
        "Wash maash dal and soak for 2 hours. Drain well.",
        "In a pressure cooker, add soaked dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 4-5 whistles until soft.",
        "Release pressure naturally. Mash the dal slightly and set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until wilted.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 10-12 minutes on low heat.",
        "Sprinkle garam masala and serve hot with roti or naan."
      ]
    },
    { 
      id: 15, 
      name: "Maash Dal Louki",
      tagline: "Black lentils with bottle gourd - creamy and light",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup maash dal - washed and soaked",
        "2 cups louki (bottle gourd) - peeled and cut into small cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons oil",
        "Salt to taste"
      ],
      steps: [
        "Wash maash dal and soak for 2 hours. Drain well.",
        "In a pressure cooker, add soaked dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 4-5 whistles until soft.",
        "Release pressure naturally. Mash the dal slightly and set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add louki cubes and cook for 5-6 minutes, stirring occasionally.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 10-12 minutes until louki is tender.",
        "Serve hot with steamed rice."
      ]
    },

    // ==================== MASOOR DAL BASED (4) ====================
    { 
      id: 16, 
      name: "Masoor Dal",
      tagline: "Simple red lentils - quick and easy",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup masoor dal (red lentils) - washed",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash masoor dal thoroughly under running water until water runs clear. Masoor dal does not need soaking.",
        "In a pressure cooker, add washed dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 2-3 whistles until soft.",
        "Release pressure naturally. The dal should be soft and mushy. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and mushy.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 5-7 minutes on low heat.",
        "Garnish with fresh coriander leaves and serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 17, 
      name: "Masoor Dal Fry",
      tagline: "Tempered red lentils",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup masoor dal - washed",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon mustard seeds",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons ghee",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash masoor dal thoroughly.",
        "In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 2-3 whistles until soft.",
        "Release pressure naturally. Set aside.",
        "Heat ghee in a pan over medium heat. Add mustard seeds and cumin seeds. Let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and ghee separates.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 5-7 minutes on low heat.",
        "Add garam masala and fresh coriander leaves. Mix well.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 18, 
      name: "Masoor Dal Palak",
      tagline: "Red lentils with spinach - quick healthy dal",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup masoor dal - washed",
        "2 cups fresh spinach - washed and finely chopped",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste"
      ],
      steps: [
        "Wash masoor dal thoroughly.",
        "In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 2-3 whistles until soft.",
        "Release pressure naturally. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until wilted.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 5-7 minutes on low heat.",
        "Sprinkle garam masala and serve hot with roti or rice."
      ]
    },
    { 
      id: 19, 
      name: "Masoor Dal Louki",
      tagline: "Red lentils with bottle gourd",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup masoor dal - washed",
        "2 cups louki (bottle gourd) - peeled and cut into small cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons oil",
        "Salt to taste"
      ],
      steps: [
        "Wash masoor dal thoroughly.",
        "In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 2-3 whistles until soft.",
        "Release pressure naturally. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add louki cubes and cook for 5-6 minutes, stirring occasionally.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 8-10 minutes until louki is tender.",
        "Serve hot with steamed rice."
      ]
    },

    // ==================== MIX DAL (3) ====================
    { 
      id: 20, 
      name: "Mix Dal",
      tagline: "Mixed lentils - best of all dals together",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1/3 cup chana dal - washed and soaked",
        "1/3 cup moong dal - washed",
        "1/3 cup masoor dal - washed",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash all dals together. Soak chana dal separately for 30 minutes as it takes longer to cook.",
        "Mix all dals together in a pressure cooker. Add 2.5 cups of water, turmeric powder, and salt.",
        "Pressure cook for 3-4 whistles until all dals are soft and well-cooked.",
        "Release pressure naturally. Mash the dals slightly with a spoon. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and mushy.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 8-10 minutes on low heat.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 21, 
      name: "Panchmel Dal",
      tagline: "Five lentils Rajasthani style - authentic and flavorful",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1/4 cup chana dal - washed and soaked",
        "1/4 cup moong dal - washed",
        "1/4 cup masoor dal - washed",
        "1/4 cup urad dal - washed and soaked",
        "1/4 cup toor dal - washed",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic-green chili paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons ghee",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash all dals together. Soak chana dal and urad dal for 1 hour as they take longer to cook.",
        "Mix all dals in a pressure cooker. Add 3 cups of water, turmeric powder, and salt.",
        "Pressure cook for 4-5 whistles until all dals are very soft and well-cooked.",
        "Release pressure naturally. Mash the dals well with a spoon. Set aside.",
        "Heat ghee in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic-green chili paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and ghee separates.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 10-12 minutes on low heat.",
        "Add garam masala and fresh coriander leaves. Mix well.",
        "Serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 22, 
      name: "Dal Makhani",
      tagline: "Creamy black lentils - restaurant style",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup whole urad dal (sabut urad) - washed and soaked overnight",
        "1/4 cup rajma (kidney beans) - washed and soaked overnight",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "1/4 cup heavy cream",
        "3 tablespoons butter",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash urad dal and rajma together. Soak in plenty of water overnight (8-10 hours). Drain before cooking.",
        "In a pressure cooker, add soaked dal and rajma, 3 cups of water, turmeric powder, and salt.",
        "Pressure cook for 5-6 whistles until the dal and rajma are very soft and mushy.",
        "Let the pressure release naturally. Open the lid and mash the dal well with a masher or the back of a spoon. Set aside.",
        "Heat butter in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until dark golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 7-8 minutes until the butter separates from the masala.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Add 1/2 cup of water if needed.",
        "Simmer on very low heat for 30-40 minutes, stirring occasionally. The longer it simmers, the better the flavor.",
        "Add cream and garam masala. Mix well and simmer for another 5-7 minutes.",
        "Garnish with fresh coriander leaves and a dollop of butter.",
        "Serve hot with butter naan or steamed rice."
      ]
    },

    // ==================== DAL + SABZI (5) ====================
    { 
      id: 23, 
      name: "Dal Palak",
      tagline: "Lentils with spinach - iron rich dal",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup mixed dal (moong dal + masoor dal) - washed",
        "2 cups fresh spinach - washed and finely chopped",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste"
      ],
      steps: [
        "Wash the mixed dals thoroughly.",
        "In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 2-3 whistles until soft.",
        "Release pressure naturally. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until wilted.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 5-7 minutes on low heat.",
        "Sprinkle garam masala and serve hot with roti or steamed rice."
      ]
    },
    { 
      id: 24, 
      name: "Dal Louki",
      tagline: "Lentils with bottle gourd - light summer dal",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup moong dal - washed",
        "2 cups louki (bottle gourd) - peeled and cut into small cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons oil",
        "Salt to taste"
      ],
      steps: [
        "Wash moong dal thoroughly.",
        "In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 2-3 whistles until soft.",
        "Release pressure naturally. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add louki cubes and cook for 5-6 minutes, stirring occasionally.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 8-10 minutes until louki is tender.",
        "Serve hot with steamed rice."
      ]
    },
    { 
      id: 25, 
      name: "Dal Tori",
      tagline: "Lentils with ridge gourd - unique and tasty",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup chana dal - washed and soaked",
        "2 cups tori (ridge gourd) - peeled and cut into small cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons oil",
        "Salt to taste"
      ],
      steps: [
        "Wash chana dal and soak for 30 minutes. Drain well.",
        "In a pressure cooker, add soaked dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 3-4 whistles until soft.",
        "Release pressure naturally. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add tori cubes and cook for 5-6 minutes, stirring occasionally.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 8-10 minutes until tori is tender.",
        "Serve hot with steamed rice."
      ]
    },
    { 
      id: 26, 
      name: "Dal Karela",
      tagline: "Lentils with bitter gourd - healthy bitter-sweet dal",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup toor dal - washed",
        "2 medium karela (bitter gourd) - thinly sliced",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon dry mango powder (amchur)",
        "2 tablespoons oil",
        "Salt to taste"
      ],
      steps: [
        "Rub karela slices with 1 teaspoon salt and set aside for 30 minutes to reduce bitterness. Rinse well with water and squeeze out the bitter juice completely.",
        "Wash toor dal thoroughly.",
        "In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 3-4 whistles until soft.",
        "Release pressure naturally. Mash the dal slightly. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add the prepared karela slices and fry for 5-6 minutes until lightly browned.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 8-10 minutes on low heat.",
        "Sprinkle amchur powder and serve hot with steamed rice."
      ]
    },
    { 
      id: 27, 
      name: "Dal Methi",
      tagline: "Lentils with fenugreek leaves - aromatic and healthy",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup moong dal - washed",
        "1 large bunch fresh methi (fenugreek leaves) - washed and finely chopped",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash moong dal thoroughly.",
        "In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 2-3 whistles until soft.",
        "Release pressure naturally. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add chopped methi leaves and cook for 3-4 minutes until wilted.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 5-7 minutes on low heat.",
        "Garnish with fresh coriander leaves and serve hot with roti or steamed rice."
      ]
    },

    // ==================== SPECIAL DAL (5) ====================
    { 
      id: 28, 
      name: "Dal Tadka",
      tagline: "Tempered lentils with ghee - restaurant style",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup toor dal - washed",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons ghee",
        "1 teaspoon mustard seeds",
        "2 dried red chilies",
        "Few curry leaves",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash toor dal thoroughly.",
        "In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 3-4 whistles until soft and mushy.",
        "Release pressure naturally. Whisk the dal well until smooth. Set aside.",
        "Heat 1 tablespoon of ghee in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and mushy.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 8-10 minutes on low heat.",
        "For the tadka: In a small pan, heat the remaining 1 tablespoon of ghee. Add mustard seeds, dried red chilies, and curry leaves. Let them crackle for 30 seconds.",
        "Pour the hot tadka over the dal. Add garam masala and fresh coriander leaves.",
        "Serve hot with steamed rice or jeera rice."
      ]
    },
    { 
      id: 29, 
      name: "Dal Fry",
      tagline: "Restaurant style dal fry",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup mixed dal (toor dal + moong dal) - washed",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "1 small capsicum - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons butter",
        "1 teaspoon kasuri methi (dried fenugreek leaves)",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash the mixed dals thoroughly.",
        "In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 3-4 whistles until soft.",
        "Release pressure naturally. Whisk the dal well until smooth. Set aside.",
        "Heat butter in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add finely chopped capsicum and cook for 2-3 minutes.",
        "Add tomato puree and cook for 5-6 minutes until the butter separates from the masala.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 8-10 minutes on low heat.",
        "Crush kasuri methi between your palms and add to the dal. Add garam masala and fresh coriander leaves.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 30, 
      name: "Dal Bukhara",
      tagline: "Creamy black dal from Peshawar - royal dish",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup whole urad dal (sabut urad) - washed and soaked overnight",
        "1/4 cup rajma (kidney beans) - washed and soaked overnight",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup heavy cream",
        "1/4 cup butter",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash urad dal and rajma together. Soak in plenty of water overnight (8-10 hours). Drain before cooking.",
        "In a pressure cooker, add soaked dal and rajma, 3 cups of water, and salt. Pressure cook for 5-6 whistles until very soft and mushy.",
        "Let the pressure release naturally. Open the lid and mash the dal well with a masher. Set aside.",
        "Heat butter in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 7-8 minutes until dark golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 7-8 minutes until the butter separates from the masala.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Add 1/2 cup of water if needed.",
        "Simmer on very low heat for 45-60 minutes, stirring occasionally. The longer it simmers, the better the flavor.",
        "Add cream and garam masala. Mix well and simmer for another 10-15 minutes.",
        "Garnish with fresh coriander leaves and a dollop of butter.",
        "Serve hot with butter naan or steamed rice."
      ]
    },
    { 
      id: 31, 
      name: "Gujarati Dal",
      tagline: "Sweet and sour Gujarati style dal",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup toor dal - washed",
        "1 tablespoon ginger-green chili paste",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon mustard seeds",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon asafoetida (hing)",
        "Few curry leaves",
        "1 tablespoon jaggery (gur) - grated",
        "1 tablespoon lemon juice",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash toor dal thoroughly.",
        "In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 3-4 whistles until soft.",
        "Release pressure naturally. Whisk the dal well until smooth. Set aside.",
        "Heat oil in a pan over medium heat. Add mustard seeds, cumin seeds, asafoetida, and curry leaves. Let them crackle for 30 seconds.",
        "Add ginger-green chili paste and cook for 1 minute until fragrant.",
        "Add red chili powder and salt. Mix well and cook for 1 minute.",
        "Add the cooked dal and bring to a boil.",
        "Add grated jaggery and mix well until dissolved.",
        "Simmer for 5-7 minutes on low heat.",
        "Add lemon juice and mix well.",
        "Garnish with fresh coriander leaves and serve hot with steamed rice or khichdi."
      ]
    },
    { 
      id: 32, 
      name: "Rajasthani Dal",
      tagline: "Spicy Rajasthani style dal",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup chana dal - washed and soaked",
        "2 tablespoons ghee",
        "1 teaspoon cumin seeds",
        "1 teaspoon mustard seeds",
        "2 dried red chilies",
        "1 medium onion - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash chana dal and soak for 1 hour. Drain well.",
        "In a pressure cooker, add soaked dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 3-4 whistles until soft.",
        "Release pressure naturally. Mash the dal slightly. Set aside.",
        "Heat ghee in a pan over medium heat. Add cumin seeds, mustard seeds, and dried red chilies. Let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until dark golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and ghee separates.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer for 10-12 minutes on low heat.",
        "Add garam masala and fresh coriander leaves. Mix well.",
        "Serve hot with steamed rice or roti."
      ]
    }
  ];

  const allDalRecipes = dalRecipes;

  const recipesList = allDalRecipes;

  const handleDalClick = (dal) => {
    setSelectedDal(dal);
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
    setSelectedDal(null);
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
      if (isPlaying && currentStep < selectedDal.steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else if (isPlaying && currentStep === selectedDal.steps.length - 1) {
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
    if (!selectedDal) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      speakStep(selectedDal.steps[currentStep]);
    }
  };

  const handleNextStep = () => {
    if (!selectedDal) return;
    
    if (currentStep < selectedDal.steps.length - 1) {
      window.speechSynthesis.cancel();
      setCurrentStep(prev => prev + 1);
      if (isPlaying) {
        speakStep(selectedDal.steps[currentStep + 1]);
      }
    }
  };

  const handlePrevStep = () => {
    if (!selectedDal) return;
    
    if (currentStep > 0) {
      window.speechSynthesis.cancel();
      setCurrentStep(prev => prev - 1);
      if (isPlaying) {
        speakStep(selectedDal.steps[currentStep - 1]);
      }
    }
  };

  const handleRestart = () => {
    if (!selectedDal) return;
    
    window.speechSynthesis.cancel();
    setCurrentStep(0);
    if (isPlaying) {
      speakStep(selectedDal.steps[0]);
    }
  };

  useEffect(() => {
    if (selectedDal) {
      setProgress(((currentStep + 1) / selectedDal.steps.length) * 100);
    }
  }, [currentStep, selectedDal]);

  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="dal-page">
      <header className="dal-header">
        <div className="dal-header-content">
          <h1 className="dal-title">Plain Dal</h1>
          <p className="dal-description">
            Discover 30+ traditional dal recipes - healthy, protein-rich, and homestyle taste
          </p>
        </div>
      </header>

      <main className="dal-main">
        <div className="dal-grid-section">
          <div className="dal-grid">
            {recipesList.map((dal) => (
              <div
                key={dal.id}
                className="dal-card"
                onClick={() => handleDalClick(dal)}
              >
                <div
                  className="dal-card-image"
                  style={{ backgroundImage: `url(${dal.image})` }}
                />
                <div className="dal-card-content">
                  <h3 className="dal-card-title">{dal.name}</h3>
                  <p className="dal-card-description">{dal.tagline}</p>
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

      {showDetailPanel && selectedDal && (
        <div className="dal-modal-overlay" onClick={handleCloseModal}>
          <div
            className="dal-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${selectedDal.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button className="dal-modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="dal-modal-header">
              <div className="dal-modal-title">
                <h2>{selectedDal.name}</h2>
              </div>
            </div>

            <div className="dal-modal-content">
              <div className="dal-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="dal-ingredients-list">
                  {selectedDal.ingredients.map((ingredient, index) => (
                    <div key={index} className="dal-ingredient-item">
                      <span className="dal-ingredient-bullet">•</span>
                      <span className="dal-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="dal-modal-steps">
                <h3>Steps to Make</h3>
                <div className="dal-steps-list">
                  {selectedDal.steps.map((step, index) => (
                    <div key={index} className="dal-step-item">
                      <span className="dal-step-number">{index + 1}.</span>
                      <span className="dal-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="dal-modal-voice-container">
                <div className="voice-panel">
                  <h3>
                    <span>🔊</span> Voice Instructions
                  </h3>
                  
                  <div className="voice-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="progress-info">
                      <span>Step {currentStep + 1} of {selectedDal.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <div className="current-step-display">
                    <p>
                      <strong>Step {currentStep + 1}:</strong> {selectedDal.steps[currentStep]}
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
                      disabled={currentStep === selectedDal.steps.length - 1}
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

export default RecipesPlainDal;