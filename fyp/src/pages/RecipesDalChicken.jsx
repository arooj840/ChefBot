import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipesDalChicken.css';

const RecipesDalChicken = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All Chicken + Dal Recipes (30+ recipes) with detailed instructions
  const chickenDalRecipes = [
    // ==================== CHICKEN + CHANA DAL (5) ====================
    { 
      id: 1, 
      name: "Chicken Chana Dal",
      tagline: "Chicken with split Bengal gram - hearty and nutritious",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - curry cut pieces with bones",
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
        "Add finely chopped onions and sauté for 5-6 minutes until they turn golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until the raw smell disappears.",
        "Add chicken pieces and fry on high heat for 5-7 minutes until the chicken changes color to white and is lightly browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until they become soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes until the spices are fragrant.",
        "Add soaked chana dal and 3 cups of warm water. Stir well to combine everything.",
        "Cover the pot with a lid and cook on medium heat for 30-35 minutes until the chicken and dal are completely tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves and green chilies.",
        "Serve hot with naan, roti, or steamed rice."
      ]
    },
    { 
      id: 2, 
      name: "Chicken Chana Dal Fry",
      tagline: "Tempered chicken with chana dal - restaurant style",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white and is lightly browned.",
        "Add tomato puree and cook for 5-6 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked chana dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 30-35 minutes until the chicken and dal are tender.",
        "Add garam masala and fresh coriander leaves. Mix well.",
        "Serve hot with naan or steamed rice."
      ]
    },
    { 
      id: 3, 
      name: "Chicken Chana Dal Palak",
      tagline: "Chicken with chana dal and spinach - healthy green curry",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - medium pieces",
        "1 cup chana dal - washed and soaked",
        "2 cups fresh spinach (palak) - washed and finely chopped",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until the spinach wilts completely.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked chana dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 30-35 minutes until the chicken and dal are tender.",
        "Sprinkle garam masala and serve hot with roti or naan."
      ]
    },
    { 
      id: 4, 
      name: "Chicken Chana Dal Louki",
      tagline: "Chicken with chana dal and bottle gourd - light and nutritious",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add louki cubes and cook for 5-6 minutes, stirring occasionally.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked chana dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 30-35 minutes until the chicken, dal, and louki are all tender.",
        "Serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 5, 
      name: "Spicy Chicken Chana Dal",
      tagline: "Extra spicy chicken with chana dal - for heat lovers",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and green chilies. Cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked chana dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 30-35 minutes until the chicken and dal are tender.",
        "Sprinkle garam masala and serve hot with naan or steamed rice."
      ]
    },

    // ==================== CHICKEN + MOONG DAL (5) ====================
    { 
      id: 6, 
      name: "Chicken Moong Dal",
      tagline: "Chicken with split yellow moong dal - light and easy to digest",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed moong dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 25-30 minutes until the chicken and dal are tender.",
        "Garnish with fresh coriander leaves and serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 7, 
      name: "Chicken Moong Dal Fry",
      tagline: "Tempered chicken with moong dal",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add tomato puree and cook for 5-6 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed moong dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 25-30 minutes until the chicken and dal are tender.",
        "Add garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 8, 
      name: "Chicken Moong Dal Palak",
      tagline: "Chicken with moong dal and spinach - healthy green curry",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until the spinach wilts completely.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed moong dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 25-30 minutes until the chicken and dal are tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 9, 
      name: "Chicken Moong Dal Louki",
      tagline: "Chicken with moong dal and bottle gourd - light summer curry",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add louki cubes and cook for 5-6 minutes, stirring occasionally.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed moong dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 25-30 minutes until the chicken, dal, and louki are all tender.",
        "Serve hot with steamed rice."
      ]
    },
    { 
      id: 10, 
      name: "Light Chicken Moong Dal",
      tagline: "Light and healthy chicken with moong dal - low oil",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - skinless, cut into pieces",
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
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed moong dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 25-30 minutes until the chicken and dal are tender.",
        "Garnish with fresh coriander leaves and serve hot with steamed rice."
      ]
    },

    // ==================== CHICKEN + MAASH DAL (4) ====================
    { 
      id: 11, 
      name: "Chicken Maash Dal",
      tagline: "Chicken with black lentils - rich and creamy",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white and is lightly browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked maash dal and 3 cups of warm water. Stir well.",
        "Cover and cook for 35-40 minutes until the chicken and dal are completely tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan, roti, or steamed rice."
      ]
    },
    { 
      id: 12, 
      name: "Chicken Maash Dal Fry",
      tagline: "Tempered chicken with black lentils",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add tomato puree and cook for 5-6 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked maash dal and 3 cups of warm water. Stir well.",
        "Cover and cook for 35-40 minutes until the chicken and dal are tender.",
        "Add garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 13, 
      name: "Chicken Maash Dal Palak",
      tagline: "Chicken with black lentils and spinach - nutritious",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until wilted.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked maash dal and 3 cups of warm water. Stir well.",
        "Cover and cook for 35-40 minutes until the chicken and dal are tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 14, 
      name: "Creamy Chicken Maash Dal",
      tagline: "Rich and creamy chicken with black lentils",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add tomato puree and cook for 5-6 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked maash dal and 3 cups of warm water. Stir well.",
        "Cover and cook for 35-40 minutes until the chicken and dal are tender.",
        "Add cream and simmer for 5-7 minutes on low heat. Do not boil after adding cream.",
        "Serve hot with butter naan or steamed rice."
      ]
    },

    // ==================== CHICKEN + MASOOR DAL (4) ====================
    { 
      id: 15, 
      name: "Chicken Masoor Dal",
      tagline: "Chicken with red lentils - quick and easy",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed masoor dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 20-25 minutes until the chicken and dal are tender.",
        "Garnish with fresh coriander leaves and serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 16, 
      name: "Chicken Masoor Dal Fry",
      tagline: "Tempered chicken with red lentils",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add tomato puree and cook for 5-6 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed masoor dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 20-25 minutes until the chicken and dal are tender.",
        "Add garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 17, 
      name: "Chicken Masoor Dal Palak",
      tagline: "Chicken with red lentils and spinach - healthy green curry",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until wilted.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed masoor dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 20-25 minutes until the chicken and dal are tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 18, 
      name: "Quick Chicken Masoor Dal",
      tagline: "Quick and easy chicken with red lentils - ready in 30 minutes",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - boneless, cut into cubes",
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
        "Add finely chopped onions and sauté for 4-5 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken cubes and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed masoor dal and 2 cups of warm water. Stir well.",
        "Cover and cook for 20 minutes until the chicken and dal are tender.",
        "Serve hot with steamed rice or roti."
      ]
    },

    // ==================== CHICKEN + MIX DAL (4) ====================
    { 
      id: 19, 
      name: "Chicken Mix Dal",
      tagline: "Chicken with mixed lentils - best of all dals",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and mushy.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add mixed dals and 3 cups of warm water. Stir well.",
        "Cover and cook for 30-35 minutes until the chicken and all dals are tender.",
        "Add garam masala and fresh coriander leaves. Mix well.",
        "Serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 20, 
      name: "Chicken Panchmel Dal",
      tagline: "Chicken with five lentils - Rajasthani style",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add tomato puree and cook for 5-6 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add mixed dals and 3 cups of warm water. Stir well.",
        "Cover and cook for 35-40 minutes until the chicken and all dals are tender.",
        "Add garam masala and serve hot with naan or steamed rice."
      ]
    },
    { 
      id: 21, 
      name: "Chicken Dal Makhani",
      tagline: "Creamy chicken with black lentils - restaurant style",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "In a pressure cooker, add soaked dal and rajma, 3 cups of water, turmeric powder, and salt. Pressure cook for 5-6 whistles until very soft.",
        "Let the pressure release naturally. Mash the dal well with a masher. Set aside.",
        "Heat butter in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add tomato puree and cook for 5-6 minutes until the butter separates from the masala.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Add 1/2 cup of water if needed.",
        "Simmer on low heat for 20-25 minutes until the chicken is tender.",
        "Add cream and simmer for 5-7 minutes on low heat.",
        "Garnish with fresh coriander leaves and a dollop of butter.",
        "Serve hot with butter naan or steamed rice."
      ]
    },
    { 
      id: 22, 
      name: "Chicken Dal Bukhara",
      tagline: "Peshawari style chicken with black dal - royal dish",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "In a pressure cooker, add soaked dal, 3 cups of water, and salt. Pressure cook for 5-6 whistles until very soft.",
        "Let the pressure release naturally. Mash the dal well. Set aside.",
        "Heat butter in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 7-8 minutes until dark golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add tomato puree and cook for 5-6 minutes until the butter separates from the masala.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Simmer on low heat for 25-30 minutes.",
        "Add cream and garam masala. Simmer for 10 minutes.",
        "Garnish with fresh coriander leaves and serve with butter naan."
      ]
    },

    // ==================== CHICKEN + DAL + SABZI (4) ====================
    { 
      id: 23, 
      name: "Chicken Dal Palak",
      tagline: "Chicken with lentils and spinach - healthy and delicious",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until wilted.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add the mixed dals and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 25-30 minutes until the chicken and dal are tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 24, 
      name: "Chicken Dal Louki",
      tagline: "Chicken with lentils and bottle gourd - light summer curry",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add louki cubes and cook for 5-6 minutes, stirring occasionally.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed moong dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 25-30 minutes until the chicken, dal, and louki are all tender.",
        "Serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 25, 
      name: "Chicken Dal Tori",
      tagline: "Chicken with lentils and ridge gourd - unique and tasty",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add tori cubes and cook for 5-6 minutes, stirring occasionally.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked chana dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 30-35 minutes until the chicken, dal, and tori are all tender.",
        "Serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 26, 
      name: "Chicken Dal Methi",
      tagline: "Chicken with lentils and fenugreek leaves - aromatic",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add chopped methi leaves and cook for 3-4 minutes until wilted.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add washed moong dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 25-30 minutes until the chicken and dal are tender.",
        "Serve hot with roti or naan."
      ]
    },

    // ==================== CHICKEN + DAL SPECIAL (5) ====================
    { 
      id: 27, 
      name: "Chicken Dal Tadka",
      tagline: "Chicken with tempered lentils - restaurant style",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and mushy.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add toor dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 25-30 minutes until the chicken and dal are tender.",
        "For the tadka: In a small pan, heat ghee. Add mustard seeds, dried red chilies, and curry leaves. Let them crackle for 30 seconds.",
        "Pour the hot tadka over the curry. Add garam masala and fresh coriander leaves.",
        "Serve hot with steamed rice or jeera rice."
      ]
    },
    { 
      id: 28, 
      name: "Chicken Dal Fry",
      tagline: "Restaurant style chicken with dal fry",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add finely chopped capsicum and cook for 2-3 minutes.",
        "Add tomato puree and cook for 5-6 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add the mixed dals and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 25-30 minutes until the chicken and dal are tender.",
        "Crush kasuri methi between your palms and add to the curry. Add garam masala and fresh coriander leaves.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 29, 
      name: "Hyderabadi Chicken Dal",
      tagline: "Hyderabadi style chicken with dal - flavorful",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and green chilies. Cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked chana dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 30-35 minutes until the chicken and dal are tender.",
        "Add garam masala and fresh coriander leaves. Mix well.",
        "Serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 30, 
      name: "Punjabi Chicken Dal",
      tagline: "Punjabi style chicken with dal - rich and buttery",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add tomato puree and cook for 5-6 minutes until the butter separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add soaked maash dal and 3 cups of warm water. Stir well.",
        "Cover and cook for 35-40 minutes until the chicken and dal are tender.",
        "Add garam masala and fresh coriander leaves. Mix well.",
        "Serve hot with butter naan or roti."
      ]
    },
    { 
      id: 31, 
      name: "South Indian Chicken Dal",
      tagline: "South Indian style chicken with dal - tangy and spicy",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add toor dal and 2.5 cups of warm water. Stir well.",
        "Cover and cook for 25-30 minutes until the chicken and dal are tender.",
        "Add lemon juice and fresh coriander leaves. Mix well.",
        "Serve hot with steamed rice or dosa."
      ]
    }
  ];

  const allChickenDalRecipes = chickenDalRecipes;

  const recipesList = allChickenDalRecipes;

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
    <div className="chicken-dal-page">
      <header className="chicken-dal-header">
        <div className="chicken-dal-header-content">
          <h1 className="chicken-dal-title">Chicken + Dal</h1>
          <p className="chicken-dal-description">
            Discover 30+ delicious chicken and dal recipes - protein-rich, flavorful, and homestyle taste
          </p>
        </div>
      </header>

      <main className="chicken-dal-main">
        <div className="chicken-dal-grid-section">
          <div className="chicken-dal-grid">
            {recipesList.map((recipe) => (
              <div
                key={recipe.id}
                className="chicken-dal-card"
                onClick={() => handleRecipeClick(recipe)}
              >
                <div
                  className="chicken-dal-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                />
                <div className="chicken-dal-card-content">
                  <h3 className="chicken-dal-card-title">{recipe.name}</h3>
                  <p className="chicken-dal-card-description">{recipe.tagline}</p>
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
        <div className="chicken-dal-modal-overlay" onClick={handleCloseModal}>
          <div
            className="chicken-dal-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button className="chicken-dal-modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="chicken-dal-modal-header">
              <div className="chicken-dal-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="chicken-dal-modal-content">
              <div className="chicken-dal-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="chicken-dal-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="chicken-dal-ingredient-item">
                      <span className="chicken-dal-ingredient-bullet">•</span>
                      <span className="chicken-dal-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="chicken-dal-modal-steps">
                <h3>Steps to Make</h3>
                <div className="chicken-dal-steps-list">
                  {selectedRecipe.steps.map((step, index) => (
                    <div key={index} className="chicken-dal-step-item">
                      <span className="chicken-dal-step-number">{index + 1}.</span>
                      <span className="chicken-dal-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="chicken-dal-modal-voice-container">
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

export default RecipesDalChicken;