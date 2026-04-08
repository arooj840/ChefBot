import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipesDalMutton.css';

const RecipesDalMutton = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All Mutton + Dal Recipes (30+ recipes) with detailed instructions
  const muttonDalRecipes = [
    // ==================== MUTTON + CHANA DAL (5) ====================
    { 
      id: 1, 
      name: "Mutton Chana Dal",
      tagline: "Mutton with split Bengal gram - rich and hearty",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - curry cut pieces with bones",
        "1 cup chana dal (split Bengal gram) - washed and soaked",
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
        "2 green chilies - slit lengthwise"
      ],
      steps: [
        "Wash chana dal thoroughly under running water. Soak in fresh water for 30 minutes. Drain before cooking.",
        "Heat oil in a large heavy-bottomed pot over medium heat. Add cumin seeds and let them crackle for 30 seconds until fragrant.",
        "Add finely chopped onions and sauté for 6-7 minutes until they turn golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until the raw smell disappears.",
        "Add mutton pieces and fry on high heat for 8-10 minutes until the mutton is well-browned on all sides.",
        "Add chopped tomatoes and cook for 6-7 minutes until they become soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes until the spices are fragrant.",
        "Add soaked chana dal and 4 cups of warm water. Stir well to combine everything.",
        "Cover the pot with a lid and cook on medium heat for 45-50 minutes until the mutton and dal are completely tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves and green chilies.",
        "Serve hot with naan, roti, or steamed rice."
      ]
    },
    { 
      id: 2, 
      name: "Mutton Chana Dal Fry",
      tagline: "Tempered mutton with chana dal - restaurant style",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup chana dal - washed and soaked",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon mustard seeds",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash chana dal and soak for 30 minutes. Drain well.",
        "Heat oil in a pan over medium heat. Add mustard seeds and cumin seeds. Let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked chana dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 45-50 minutes until the mutton and dal are tender.",
        "Add garam masala and fresh coriander leaves. Mix well.",
        "Serve hot with naan or steamed rice."
      ]
    },
    { 
      id: 3, 
      name: "Mutton Chana Dal Palak",
      tagline: "Mutton with chana dal and spinach - healthy and delicious",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup chana dal - washed and soaked",
        "2 cups fresh spinach - washed and finely chopped",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash chana dal and soak for 30 minutes. Drain well.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until the spinach wilts completely.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked chana dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 45-50 minutes until the mutton and dal are tender.",
        "Sprinkle garam masala and serve hot with roti or naan."
      ]
    },
    { 
      id: 4, 
      name: "Mutton Chana Dal Louki",
      tagline: "Mutton with chana dal and bottle gourd - light and nutritious",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup chana dal - washed and soaked",
        "2 cups louki (bottle gourd) - peeled and cut into small cubes",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash chana dal and soak for 30 minutes. Drain well.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add louki cubes and cook for 5-6 minutes, stirring occasionally.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked chana dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 45-50 minutes until the mutton, dal, and louki are all tender.",
        "Serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 5, 
      name: "Spicy Mutton Chana Dal",
      tagline: "Extra spicy mutton with chana dal - for heat lovers",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup chana dal - washed and soaked",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "3 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "2 green chilies - finely chopped"
      ],
      steps: [
        "Wash chana dal and soak for 30 minutes. Drain well.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and green chilies. Cook for 6-7 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add soaked chana dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 45-50 minutes until the mutton and dal are tender.",
        "Sprinkle garam masala and serve hot with naan or steamed rice."
      ]
    },

    // ==================== MUTTON + MOONG DAL (5) ====================
    { 
      id: 6, 
      name: "Mutton Moong Dal",
      tagline: "Mutton with split yellow moong dal - light and easy to digest",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup moong dal (split yellow lentils) - washed",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash moong dal thoroughly under running water. Moong dal does not need soaking.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add washed moong dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 40-45 minutes until the mutton and dal are tender.",
        "Garnish with fresh coriander leaves and serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 7, 
      name: "Mutton Moong Dal Fry",
      tagline: "Tempered mutton with moong dal",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup moong dal - washed",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon mustard seeds",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash moong dal thoroughly.",
        "Heat oil in a pan over medium heat. Add mustard seeds and cumin seeds. Let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed moong dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 40-45 minutes until the mutton and dal are tender.",
        "Add garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 8, 
      name: "Mutton Moong Dal Palak",
      tagline: "Mutton with moong dal and spinach - healthy green curry",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup moong dal - washed",
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
        "Wash moong dal thoroughly.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until the spinach wilts completely.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed moong dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 40-45 minutes until the mutton and dal are tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 9, 
      name: "Mutton Moong Dal Louki",
      tagline: "Mutton with moong dal and bottle gourd - light summer curry",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup moong dal - washed",
        "2 cups louki (bottle gourd) - peeled and cut into small cubes",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash moong dal thoroughly.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add louki cubes and cook for 5-6 minutes, stirring occasionally.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed moong dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 40-45 minutes until the mutton, dal, and louki are all tender.",
        "Serve hot with steamed rice."
      ]
    },
    { 
      id: 10, 
      name: "Light Mutton Moong Dal",
      tagline: "Light and healthy mutton with moong dal - low oil",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - lean pieces",
        "1 cup moong dal - washed",
        "1 medium onion - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/4 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash moong dal thoroughly.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 4-5 minutes until soft and translucent.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed moong dal and 3 cups of warm water. Stir well.",
        "Cover and cook for 40-45 minutes until the mutton and dal are tender.",
        "Garnish with fresh coriander leaves and serve hot with steamed rice."
      ]
    },

    // ==================== MUTTON + MAASH DAL (4) ====================
    { 
      id: 11, 
      name: "Mutton Maash Dal",
      tagline: "Mutton with black lentils - rich and creamy",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup maash dal (black lentils / urad dal) - washed and soaked",
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
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash maash dal thoroughly. Soak in fresh water for 2 hours. Drain before cooking.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add soaked maash dal and 4 cups of warm water. Stir well.",
        "Cover and cook for 50-55 minutes until the mutton and dal are completely tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan, roti, or steamed rice."
      ]
    },
    { 
      id: 12, 
      name: "Mutton Maash Dal Fry",
      tagline: "Tempered mutton with black lentils",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup maash dal - washed and soaked",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon mustard seeds",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash maash dal and soak for 2 hours. Drain well.",
        "Heat oil in a pan over medium heat. Add mustard seeds and cumin seeds. Let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked maash dal and 4 cups of warm water. Stir well.",
        "Cover and cook for 50-55 minutes until the mutton and dal are tender.",
        "Add garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 13, 
      name: "Mutton Maash Dal Palak",
      tagline: "Mutton with black lentils and spinach - nutritious",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup maash dal - washed and soaked",
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
        "Wash maash dal and soak for 2 hours. Drain well.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until wilted.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked maash dal and 4 cups of warm water. Stir well.",
        "Cover and cook for 50-55 minutes until the mutton and dal are tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 14, 
      name: "Creamy Mutton Maash Dal",
      tagline: "Rich and creamy mutton with black lentils",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup maash dal - washed and soaked",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1/4 cup heavy cream",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash maash dal and soak for 2 hours. Drain well.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked maash dal and 4 cups of warm water. Stir well.",
        "Cover and cook for 50-55 minutes until the mutton and dal are tender.",
        "Add cream and simmer for 5-7 minutes on low heat. Do not boil after adding cream.",
        "Serve hot with butter naan or steamed rice."
      ]
    },

    // ==================== MUTTON + MASOOR DAL (4) ====================
    { 
      id: 15, 
      name: "Mutton Masoor Dal",
      tagline: "Mutton with red lentils - quick and easy",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup masoor dal (red lentils) - washed",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash masoor dal thoroughly. Masoor dal does not need soaking.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add washed masoor dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 35-40 minutes until the mutton and dal are tender.",
        "Garnish with fresh coriander leaves and serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 16, 
      name: "Mutton Masoor Dal Fry",
      tagline: "Tempered mutton with red lentils",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup masoor dal - washed",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon mustard seeds",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash masoor dal thoroughly.",
        "Heat oil in a pan over medium heat. Add mustard seeds and cumin seeds. Let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed masoor dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 35-40 minutes until the mutton and dal are tender.",
        "Add garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 17, 
      name: "Mutton Masoor Dal Palak",
      tagline: "Mutton with red lentils and spinach - healthy",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup masoor dal - washed",
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
        "Wash masoor dal thoroughly.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until wilted.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed masoor dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 35-40 minutes until the mutton and dal are tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 18, 
      name: "Quick Mutton Masoor Dal",
      tagline: "Quick and easy mutton with red lentils - ready in 45 minutes",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - boneless, cut into cubes",
        "1 cup masoor dal - washed",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/4 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash masoor dal thoroughly.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton cubes and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed masoor dal and 3 cups of warm water. Stir well.",
        "Cover and cook for 35 minutes until the mutton and dal are tender.",
        "Serve hot with steamed rice or roti."
      ]
    },

    // ==================== MUTTON + MIX DAL (4) ====================
    { 
      id: 19, 
      name: "Mutton Mix Dal",
      tagline: "Mutton with mixed lentils - best of all dals",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1/3 cup chana dal - washed and soaked",
        "1/3 cup moong dal - washed",
        "1/3 cup masoor dal - washed",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
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
        "Wash all dals together. Soak chana dal separately for 30 minutes as it takes longer to cook.",
        "Mix all dals together.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and mushy.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add mixed dals and 4 cups of warm water. Stir well.",
        "Cover and cook for 45-50 minutes until the mutton and all dals are tender.",
        "Add garam masala and fresh coriander leaves. Mix well.",
        "Serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 20, 
      name: "Mutton Panchmel Dal",
      tagline: "Mutton with five lentils - Rajasthani style",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1/4 cup each: chana dal, moong dal, masoor dal, urad dal, toor dal",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash all dals together. Soak chana dal and urad dal for 1 hour as they take longer to cook.",
        "Mix all dals together.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add mixed dals and 4 cups of warm water. Stir well.",
        "Cover and cook for 50-55 minutes until the mutton and all dals are tender.",
        "Add garam masala and serve hot with naan or steamed rice."
      ]
    },
    { 
      id: 21, 
      name: "Mutton Dal Makhani",
      tagline: "Creamy mutton with black lentils - restaurant style",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup whole urad dal (sabut urad) - washed and soaked overnight",
        "1/4 cup rajma (kidney beans) - washed and soaked overnight",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1/4 cup heavy cream",
        "3 tablespoons butter",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash urad dal and rajma together. Soak in plenty of water overnight (8-10 hours). Drain before cooking.",
        "In a pressure cooker, add soaked dal and rajma, 4 cups of water, turmeric powder, and salt. Pressure cook for 6-7 whistles until very soft.",
        "Let the pressure release naturally. Mash the dal well with a masher. Set aside.",
        "Heat butter in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the butter separates from the masala.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Add 1/2 cup of water if needed.",
        "Simmer on low heat for 20-25 minutes until the mutton is tender.",
        "Add cream and simmer for 5-7 minutes on low heat.",
        "Garnish with fresh coriander leaves and a dollop of butter.",
        "Serve hot with butter naan or steamed rice."
      ]
    },
    { 
      id: 22, 
      name: "Mutton Dal Bukhara",
      tagline: "Peshawari style mutton with black dal - royal dish",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup whole urad dal (sabut urad) - washed and soaked overnight",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "1/4 cup heavy cream",
        "1/4 cup butter",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash urad dal and soak overnight. Drain before cooking.",
        "In a pressure cooker, add soaked dal, 4 cups of water, and salt. Pressure cook for 6-7 whistles until very soft.",
        "Let the pressure release naturally. Mash the dal well. Set aside.",
        "Heat butter in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 7-8 minutes until dark golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the butter separates from the masala.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer on low heat for 25-30 minutes until the mutton is tender.",
        "Add cream and garam masala. Simmer for 10 minutes on low heat.",
        "Garnish with fresh coriander leaves and serve with butter naan."
      ]
    },

    // ==================== MUTTON + DAL + SABZI (4) ====================
    { 
      id: 23, 
      name: "Mutton Dal Palak",
      tagline: "Mutton with lentils and spinach - healthy and delicious",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup mixed dal (moong dal + masoor dal) - washed",
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
        "Wash the mixed dals thoroughly.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until wilted.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add the mixed dals and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 40-45 minutes until the mutton and dal are tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 24, 
      name: "Mutton Dal Louki",
      tagline: "Mutton with lentils and bottle gourd - light summer curry",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup moong dal - washed",
        "2 cups louki (bottle gourd) - peeled and cut into small cubes",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash moong dal thoroughly.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add louki cubes and cook for 5-6 minutes, stirring occasionally.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed moong dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 40-45 minutes until the mutton, dal, and louki are all tender.",
        "Serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 25, 
      name: "Mutton Dal Tori",
      tagline: "Mutton with lentils and ridge gourd - unique and tasty",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup chana dal - washed and soaked",
        "2 cups tori (ridge gourd) - peeled and cut into small cubes",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash chana dal and soak for 30 minutes. Drain well.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add tori cubes and cook for 5-6 minutes, stirring occasionally.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked chana dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 45-50 minutes until the mutton, dal, and tori are all tender.",
        "Serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 26, 
      name: "Mutton Dal Methi",
      tagline: "Mutton with lentils and fenugreek leaves - aromatic",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup moong dal - washed",
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
        "Wash moong dal thoroughly.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add chopped methi leaves and cook for 3-4 minutes until wilted.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed moong dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 40-45 minutes until the mutton and dal are tender.",
        "Serve hot with roti or naan."
      ]
    },

    // ==================== MUTTON + DAL SPECIAL (5) ====================
    { 
      id: 27, 
      name: "Mutton Dal Tadka",
      tagline: "Mutton with tempered lentils - restaurant style",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup toor dal - washed",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and mushy.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add toor dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 40-45 minutes until the mutton and dal are tender.",
        "For the tadka: In a small pan, heat ghee. Add mustard seeds, dried red chilies, and curry leaves. Let them crackle for 30 seconds.",
        "Pour the hot tadka over the curry. Add garam masala and fresh coriander leaves.",
        "Serve hot with steamed rice or jeera rice."
      ]
    },
    { 
      id: 28, 
      name: "Mutton Dal Fry",
      tagline: "Restaurant style mutton with dal fry",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup mixed dal (toor dal + moong dal) - washed",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "1 small capsicum - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1 teaspoon kasuri methi (dried fenugreek leaves)",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash the mixed dals thoroughly.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add finely chopped capsicum and cook for 2-3 minutes.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add the mixed dals and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 40-45 minutes until the mutton and dal are tender.",
        "Crush kasuri methi between your palms and add to the curry. Add garam masala and fresh coriander leaves.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 29, 
      name: "Hyderabadi Mutton Dal",
      tagline: "Hyderabadi style mutton with dal - flavorful",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup chana dal - washed and soaked",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish",
        "2 green chilies - slit"
      ],
      steps: [
        "Wash chana dal and soak for 30 minutes. Drain well.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and green chilies. Cook for 6-7 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add soaked chana dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 45-50 minutes until the mutton and dal are tender.",
        "Add garam masala and fresh coriander leaves. Mix well.",
        "Serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 30, 
      name: "Punjabi Mutton Dal",
      tagline: "Punjabi style mutton with dal - rich and buttery",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup maash dal - washed and soaked",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons butter",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash maash dal and soak for 2 hours. Drain well.",
        "Heat butter in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the butter separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked maash dal and 4 cups of warm water. Stir well.",
        "Cover and cook for 50-55 minutes until the mutton and dal are tender.",
        "Add garam masala and fresh coriander leaves. Mix well.",
        "Serve hot with butter naan or roti."
      ]
    },
    { 
      id: 31, 
      name: "South Indian Mutton Dal",
      tagline: "South Indian style mutton with dal - tangy and spicy",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup toor dal - washed",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon mustard seeds",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/2 teaspoon asafoetida (hing)",
        "Few curry leaves",
        "1 tablespoon lemon juice",
        "1/4 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash toor dal thoroughly.",
        "Heat oil in a pan over medium heat. Add mustard seeds, cumin seeds, asafoetida, and curry leaves. Let them crackle for 30 seconds.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add toor dal and 3.5 cups of warm water. Stir well.",
        "Cover and cook for 40-45 minutes until the mutton and dal are tender.",
        "Add lemon juice and fresh coriander leaves. Mix well.",
        "Serve hot with steamed rice or dosa."
      ]
    }
  ];

  const allMuttonDalRecipes = muttonDalRecipes;

  const recipesList = allMuttonDalRecipes;

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
    <div className="mutton-dal-page">
      <header className="mutton-dal-header">
        <div className="mutton-dal-header-content">
          <h1 className="mutton-dal-title">Mutton + Dal</h1>
          <p className="mutton-dal-description">
            Discover 30+ delicious mutton and dal recipes - rich, flavorful, and homestyle taste
          </p>
        </div>
      </header>

      <main className="mutton-dal-main">
        <div className="mutton-dal-grid-section">
          <div className="mutton-dal-grid">
            {recipesList.map((recipe) => (
              <div
                key={recipe.id}
                className="mutton-dal-card"
                onClick={() => handleRecipeClick(recipe)}
              >
                <div
                  className="mutton-dal-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                />
                <div className="mutton-dal-card-content">
                  <h3 className="mutton-dal-card-title">{recipe.name}</h3>
                  <p className="mutton-dal-card-description">{recipe.tagline}</p>
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
        <div className="mutton-dal-modal-overlay" onClick={handleCloseModal}>
          <div
            className="mutton-dal-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button className="mutton-dal-modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="mutton-dal-modal-header">
              <div className="mutton-dal-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="mutton-dal-modal-content">
              <div className="mutton-dal-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="mutton-dal-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="mutton-dal-ingredient-item">
                      <span className="mutton-dal-ingredient-bullet">•</span>
                      <span className="mutton-dal-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mutton-dal-modal-steps">
                <h3>Steps to Make</h3>
                <div className="mutton-dal-steps-list">
                  {selectedRecipe.steps.map((step, index) => (
                    <div key={index} className="mutton-dal-step-item">
                      <span className="mutton-dal-step-number">{index + 1}.</span>
                      <span className="mutton-dal-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mutton-dal-modal-voice-container">
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

export default RecipesDalMutton;