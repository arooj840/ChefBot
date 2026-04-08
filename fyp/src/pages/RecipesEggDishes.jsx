import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipesEggDishes.css';

const RecipesEggDishes = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All Egg Dishes Recipes (35+ recipes) with detailed instructions
  const eggRecipes = [
    // ==================== EGG CURRIES (8) ====================
    { 
      id: 1, 
      name: "Anda Curry",
      tagline: "Classic egg curry in spicy gravy - perfect with rice",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "6 large eggs - boiled and peeled",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
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
        "Place the boiled eggs in a bowl. Make 2-3 shallow slits on each egg with a knife (this helps the eggs absorb the curry flavors).",
        "Heat 1 tablespoon of oil in a pan over medium heat. Add the boiled eggs and fry for 2-3 minutes until they are light golden on all sides. Remove and set aside.",
        "Heat the remaining oil in the same pan over medium heat. Add cumin seeds and let them crackle for 30 seconds until fragrant.",
        "Add finely chopped onions and sauté for 6-7 minutes until they turn golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until the raw smell disappears.",
        "Add tomato puree and cook for 5-6 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes until the spices are fragrant.",
        "Add 1 cup of warm water and bring to a boil. Reduce heat and simmer for 5 minutes.",
        "Add the fried eggs and cook for 5-7 minutes on low heat, gently spooning the gravy over the eggs.",
        "Sprinkle garam masala and garnish with fresh coriander leaves and green chilies.",
        "Serve hot with steamed rice, roti, or naan."
      ]
    },
    { 
      id: 2, 
      name: "Anda Masala",
      tagline: "Spicy egg masala gravy - rich and flavorful",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "6 large eggs - boiled and peeled",
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
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and mushy.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes until the oil separates.",
        "Add 1 cup of warm water and bring to a boil. Simmer for 5 minutes.",
        "Add the boiled eggs and cook for 5-7 minutes on low heat.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with rice or roti."
      ]
    },
    { 
      id: 3, 
      name: "Dhaba Style Egg Curry",
      tagline: "Punjabi dhaba style egg curry - rustic and delicious",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "6 large eggs - boiled and peeled",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "2 tablespoons butter",
        "Salt to taste"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 7-8 minutes until dark golden brown (dhaba style).",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 5-6 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water and simmer for 10 minutes on low heat.",
        "Add the boiled eggs and cook for 5 minutes.",
        "Add garam masala and butter. Stir until butter melts.",
        "Serve hot with tandoori roti or naan."
      ]
    },
    { 
      id: 4, 
      name: "Anda Aloo Curry",
      tagline: "Egg and potato curry - hearty and filling",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "2 medium potatoes - boiled and cut into cubes",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 5-6 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add boiled potato cubes and 1 cup of warm water. Simmer for 5-7 minutes.",
        "Add the boiled eggs and cook for 5 minutes on low heat.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with roti or paratha."
      ]
    },
    { 
      id: 5, 
      name: "Anda Matar Curry",
      tagline: "Egg and peas curry - sweet and savory",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "1 cup fresh or frozen green peas",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 5-6 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add green peas and 1 cup of warm water. Cook for 5-7 minutes until peas are tender.",
        "Add the boiled eggs and cook for 5 minutes on low heat.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 6, 
      name: "Anda Palak Curry",
      tagline: "Egg and spinach curry - healthy and delicious",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "2 cups fresh spinach (palak) - blanched and blended into smooth puree",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add spinach puree, turmeric powder, red chili powder, and salt. Mix well and cook for 3-4 minutes.",
        "Add 1/2 cup of warm water and simmer for 5 minutes.",
        "Add the boiled eggs and cook for 5 minutes on low heat.",
        "Garnish with fresh coriander leaves and serve hot with roti or naan."
      ]
    },
    { 
      id: 7, 
      name: "Kerala Egg Curry",
      tagline: "Coconut based egg curry - South Indian style",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "6 large eggs - boiled and peeled",
        "1 cup coconut milk (thick)",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon mustard seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "Few curry leaves",
        "1/4 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add mustard seeds and curry leaves. Let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add coconut milk and bring to a gentle simmer. Do not boil vigorously as coconut milk may curdle.",
        "Simmer for 5 minutes on low heat.",
        "Add the boiled eggs and cook for 5 minutes on low heat.",
        "Serve hot with steamed rice, appam, or idiyappam."
      ]
    },
    { 
      id: 8, 
      name: "Anda Do Pyaza",
      tagline: "Egg curry with double onions - Punjabi style",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "6 large eggs - boiled and peeled",
        "2 large onions - thinly sliced (divided use)",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add half of the sliced onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water and simmer for 5 minutes.",
        "Add the boiled eggs and the remaining raw sliced onions.",
        "Cook for 5-7 minutes on low heat.",
        "Add garam masala, garnish with fresh coriander leaves, and serve hot."
      ]
    },

    // ==================== EGG MASALA (5) ====================
    { 
      id: 9, 
      name: "Anda Bhurji",
      tagline: "Indian style scrambled eggs - quick and delicious",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "6 large eggs",
        "1 medium onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 medium tomato - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves - chopped",
        "2 tablespoons fresh coriander for garnish"
      ],
      steps: [
        "Crack the eggs into a bowl. Add salt and turmeric powder. Beat well with a fork or whisk until the yolks and whites are fully combined. Set aside.",
        "Heat oil in a pan over medium heat. Add finely chopped onions and sauté for 3-4 minutes until soft and translucent.",
        "Add ginger-garlic paste and green chilies. Cook for 1-2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 3-4 minutes until soft and mushy.",
        "Add red chili powder and salt. Mix well and cook for 1 minute.",
        "Pour the beaten eggs into the pan. Reduce heat to low.",
        "Stir continuously with a spatula, scrambling the eggs as they cook.",
        "Cook for 3-4 minutes until the eggs are fully cooked but still moist (not dry).",
        "Garnish with fresh coriander leaves and serve hot with bread, pav, or paratha."
      ]
    },
    { 
      id: 10, 
      name: "Anda Bhurji Masala",
      tagline: "Spicy scrambled eggs - extra flavorful",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "6 large eggs",
        "1 medium onion - finely chopped",
        "1 small capsicum - finely chopped",
        "2 green chilies - finely chopped",
        "1 medium tomato - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Crack the eggs into a bowl. Add salt and turmeric powder. Beat well and set aside.",
        "Heat oil in a pan over medium heat. Add finely chopped onions and sauté for 3-4 minutes until golden.",
        "Add ginger-garlic paste, green chilies, and chopped capsicum. Cook for 2-3 minutes.",
        "Add chopped tomatoes and cook for 3-4 minutes until soft.",
        "Add red chili powder and salt. Mix well and cook for 1 minute.",
        "Pour the beaten eggs into the pan. Reduce heat to low.",
        "Stir continuously until the eggs are scrambled and cooked through.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with roti or bread."
      ]
    },
    { 
      id: 11, 
      name: "Anda Bhurji with Paneer",
      tagline: "Scrambled eggs with cottage cheese - protein rich",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "6 large eggs",
        "100g paneer (cottage cheese) - crumbled",
        "1 medium onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 medium tomato - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Crack the eggs into a bowl. Add salt and turmeric powder. Beat well and set aside.",
        "Heat oil in a pan over medium heat. Add finely chopped onions and sauté for 3-4 minutes until golden.",
        "Add ginger-garlic paste and green chilies. Cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 3-4 minutes until soft.",
        "Add crumbled paneer and red chili powder. Mix well and cook for 2 minutes.",
        "Pour the beaten eggs into the pan. Reduce heat to low.",
        "Stir continuously until the eggs are scrambled and mixed well with paneer.",
        "Garnish with fresh coriander leaves and serve hot with roti or paratha."
      ]
    },
    { 
      id: 12, 
      name: "Anda Bhurji Pav",
      tagline: "Scrambled eggs with bread - Mumbai street food",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "6 large eggs",
        "1 medium onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 medium tomato - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish",
        "4 pav buns (bread rolls)",
        "2 tablespoons butter for toasting"
      ],
      steps: [
        "Prepare anda bhurji as per the basic recipe (steps 1-9 from recipe #9).",
        "While the bhurji is cooking, heat a separate pan or tawa.",
        "Slice the pav buns in half horizontally. Spread butter on the cut sides.",
        "Toast the pav buns on the hot tawa until golden brown and crisp.",
        "Serve hot anda bhurji with the toasted pav buns.",
        "Sprinkle extra coriander on top and serve immediately."
      ]
    },
    { 
      id: 13, 
      name: "Anda Ghotala",
      tagline: "Maharashtrian style egg scramble - rich and spicy",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "6 large eggs",
        "1 medium onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 medium tomato - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon goda masala (or garam masala)",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Crack the eggs into a bowl. Add salt and turmeric powder. Beat well and set aside.",
        "Heat oil in a pan over medium heat. Add finely chopped onions and sauté for 4-5 minutes until dark brown.",
        "Add ginger-garlic paste and green chilies. Cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 3-4 minutes until soft.",
        "Add red chili powder, goda masala, and salt. Mix well and cook for 2 minutes.",
        "Pour the beaten eggs into the pan. Reduce heat to low.",
        "Stir continuously until the eggs are scrambled and cooked through.",
        "Garnish with fresh coriander leaves and serve hot with pav or roti."
      ]
    },

    // ==================== EGG CURRIES WITH VEGETABLES (5) ====================
    { 
      id: 14, 
      name: "Anda Aloo Matar",
      tagline: "Egg with potato and peas - complete meal",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "2 medium potatoes - peeled and cut into cubes",
        "1/2 cup fresh or frozen green peas",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 5-6 minutes until the oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1 cup of warm water. Cover and cook for 10 minutes until potatoes are almost tender.",
        "Add green peas and cook for 5 minutes until peas are tender.",
        "Add the boiled eggs and cook for 5 minutes on low heat.",
        "Sprinkle garam masala, garnish with coriander, and serve hot."
      ]
    },
    { 
      id: 15, 
      name: "Anda Shimla Mirch",
      tagline: "Egg with capsicum - colorful and tasty",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "2 medium capsicum (bell peppers) - cut into cubes",
        "1 medium onion - sliced",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add sliced onions and sauté for 3-4 minutes until soft.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add capsicum cubes and cook for 3-4 minutes until tender-crisp.",
        "Add the boiled eggs and mix gently. Cook for 2-3 minutes.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 16, 
      name: "Anda Gobhi",
      tagline: "Egg with cauliflower - nutritious and tasty",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "1 medium cauliflower - cut into small florets",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add cauliflower florets and 1/2 cup of warm water. Cover and cook for 8-10 minutes until cauliflower is tender.",
        "Add the boiled eggs and cook for 2-3 minutes.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 17, 
      name: "Anda Baingan",
      tagline: "Egg with eggplant - unique combination",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "2 medium eggplants (baingan) - cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add eggplant cubes and cook for 8-10 minutes until tender, stirring gently.",
        "Add the boiled eggs and mix gently. Cook for 2-3 minutes.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 18, 
      name: "Anda Palak",
      tagline: "Egg with spinach - healthy green curry",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "2 cups fresh spinach - washed and finely chopped",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until wilted.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add the boiled eggs and simmer for 5 minutes on low heat.",
        "Garnish with fresh coriander leaves and serve hot with roti or naan."
      ]
    },

    // ==================== EGG KEEMA (3) ====================
    { 
      id: 19, 
      name: "Anda Keema",
      tagline: "Egg with minced meat - protein powerhouse",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "250g chicken or mutton mince",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "1/4 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until browned and cooked through.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1/2 cup of warm water and simmer for 10-15 minutes.",
        "Add the boiled eggs and cook for 5 minutes on low heat.",
        "Sprinkle garam masala, garnish with coriander, and serve hot with roti or naan."
      ]
    },
    { 
      id: 20, 
      name: "Anda Keema Matar",
      tagline: "Egg with mince and peas - colorful and nutritious",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "250g chicken mince",
        "1/2 cup fresh or frozen green peas",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "1/4 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add green peas and 1/2 cup of warm water. Simmer for 10-15 minutes.",
        "Add the boiled eggs and cook for 5 minutes.",
        "Sprinkle garam masala, garnish with coriander, and serve hot."
      ]
    },
    { 
      id: 21, 
      name: "Anda Keema Aloo",
      tagline: "Egg with mince and potato - hearty meal",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "250g chicken mince",
        "2 medium potatoes - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "1/4 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mince and fry for 8-10 minutes until browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1 cup of warm water. Simmer for 15 minutes until potatoes are tender.",
        "Add the boiled eggs and cook for 5 minutes.",
        "Sprinkle garam masala, garnish with coriander, and serve hot."
      ]
    },

    // ==================== EGG DALS (3) ====================
    { 
      id: 22, 
      name: "Anda Dal",
      tagline: "Egg with lentils - protein rich combination",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "1 cup masoor dal (red lentils) - washed",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash masoor dal thoroughly. In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 2-3 whistles until soft. Set aside.",
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and bring to a simmer. Cook for 5 minutes.",
        "Add the boiled eggs and cook for 5 minutes on low heat.",
        "Garnish with fresh coriander leaves and serve hot with rice or roti."
      ]
    },
    { 
      id: 23, 
      name: "Anda Chana Dal",
      tagline: "Egg with chana dal - hearty and filling",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "1 cup chana dal (split Bengal gram) - washed and soaked",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash chana dal and soak for 30 minutes. Drain well.",
        "In a pressure cooker, add soaked dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 3-4 whistles until soft. Set aside.",
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and simmer for 5 minutes.",
        "Add the boiled eggs and cook for 5 minutes.",
        "Garnish with fresh coriander leaves and serve hot with rice or roti."
      ]
    },
    { 
      id: 24, 
      name: "Anda Dal Palak",
      tagline: "Egg with lentils and spinach - super healthy",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "1 cup moong dal - washed",
        "2 cups fresh spinach - washed and finely chopped",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash moong dal thoroughly. In a pressure cooker, add dal, 2 cups of water, turmeric powder, and salt. Pressure cook for 2-3 whistles until soft. Set aside.",
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add chopped spinach and cook for 3-4 minutes until wilted.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and simmer for 5 minutes.",
        "Add the boiled eggs and cook for 5 minutes.",
        "Garnish with fresh coriander leaves and serve hot."
      ]
    },

    // ==================== EGG RICE (3) ====================
    { 
      id: 25, 
      name: "Egg Fried Rice",
      tagline: "Chinese style egg fried rice - quick and delicious",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      ingredients: [
        "4 large eggs - scrambled",
        "2 cups cooked rice (preferably day-old)",
        "1 medium onion - finely chopped",
        "1/2 cup carrots - finely diced",
        "1/2 cup green peas",
        "2 tablespoons soy sauce",
        "1 tablespoon oil",
        "Salt to taste",
        "Spring onions - chopped for garnish"
      ],
      steps: [
        "Heat oil in a wok or large pan over high heat. Add finely chopped onions and sauté for 1-2 minutes.",
        "Add diced carrots and green peas. Stir-fry for 2-3 minutes until vegetables are tender-crisp.",
        "Push the vegetables to one side of the pan. Crack the eggs into the empty side and scramble until cooked.",
        "Add the cooked rice and break up any clumps. Mix everything together well.",
        "Add soy sauce and salt. Mix thoroughly and cook for 2-3 minutes.",
        "Garnish with chopped spring onions and serve hot."
      ]
    },
    { 
      id: 26, 
      name: "Egg Biryani",
      tagline: "Fragrant rice with eggs - royal dish",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      ingredients: [
        "6 large eggs - boiled and peeled",
        "2 cups basmati rice - washed and soaked for 30 minutes",
        "2 medium onions - thinly sliced",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
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
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a large pot over medium heat. Add whole spices (cloves, cardamom, cinnamon) and cumin seeds. Sauté for 30 seconds until fragrant.",
        "Add sliced onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add biryani masala and salt. Mix well and cook for 2 minutes.",
        "Add 3 cups of warm water and bring to a boil.",
        "Add soaked and drained rice. Cook on high heat for 5-7 minutes until rice is 70% done.",
        "Reduce heat to low. Layer the boiled eggs on top of the rice.",
        "Pour saffron milk over the rice. Sprinkle fresh coriander and mint leaves.",
        "Cover with a tight lid and cook on low heat (dum) for 15-20 minutes.",
        "Gently mix before serving. Serve hot with raita."
      ]
    },
    { 
      id: 27, 
      name: "Egg Pulao",
      tagline: "Simple rice with eggs - easy one-pot meal",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "2 cups basmati rice - washed and soaked for 30 minutes",
        "1 medium onion - thinly sliced",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "2 whole cloves",
        "1 green cardamom pod",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Make shallow slits on the boiled eggs. Set aside.",
        "Heat oil in a pot over medium heat. Add whole spices (cloves, cardamom) and cumin seeds. Sauté for 30 seconds.",
        "Add sliced onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add 3 cups of warm water and salt. Bring to a boil.",
        "Add soaked and drained rice. Cook on high heat for 5-7 minutes.",
        "When water is almost absorbed, reduce heat to low.",
        "Gently place the boiled eggs on top of the rice.",
        "Cover and cook on low heat for 10-15 minutes until rice is fully cooked.",
        "Garnish with fresh coriander leaves and serve hot with raita."
      ]
    },

    // ==================== EGG PARATHAS (3) ====================
    { 
      id: 28, 
      name: "Anda Paratha",
      tagline: "Stuffed egg paratha - perfect breakfast",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 large eggs",
        "2 cups whole wheat flour",
        "1 medium onion - finely chopped",
        "2 green chilies - finely chopped",
        "1/2 teaspoon red chili powder",
        "Salt to taste",
        "Oil or ghee for cooking",
        "Water for kneading"
      ],
      steps: [
        "In a large bowl, mix whole wheat flour with a pinch of salt. Add water gradually and knead into a soft, smooth dough. Cover and rest for 30 minutes.",
        "In a separate bowl, crack the eggs. Add finely chopped onions, green chilies, red chili powder, and salt. Beat well and set aside.",
        "Divide the dough into 4 equal portions. Roll each portion into a small circle (about 4-5 inches).",
        "Pour 1/4 of the egg mixture onto the center of the rolled dough.",
        "Fold the edges over the filling to seal it completely. Gently roll again into a circle.",
        "Heat a tawa (griddle) over medium heat. Place the paratha on the hot tawa.",
        "Cook for 1-2 minutes, then flip. Apply oil or ghee on both sides.",
        "Cook until golden brown and crisp on both sides.",
        "Repeat with remaining dough and egg mixture.",
        "Serve hot with yogurt, pickle, or chutney."
      ]
    },
    { 
      id: 29, 
      name: "Egg Cheese Paratha",
      tagline: "Stuffed egg and cheese paratha - extra delicious",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 large eggs",
        "2 cups whole wheat flour",
        "1/4 cup grated cheese (mozzarella or cheddar)",
        "1 medium onion - finely chopped",
        "2 green chilies - finely chopped",
        "Salt to taste",
        "Oil or ghee for cooking",
        "Water for kneading"
      ],
      steps: [
        "Knead dough with whole wheat flour, salt, and water. Rest for 30 minutes.",
        "In a bowl, beat eggs with chopped onions, green chilies, salt, and grated cheese.",
        "Divide dough into 4 portions. Roll each into a small circle.",
        "Pour 1/4 of the egg-cheese mixture onto the center. Fold and seal edges.",
        "Gently roll again into a circle.",
        "Cook on hot tawa with oil or ghee until golden brown on both sides.",
        "Serve hot with tomato ketchup or chutney."
      ]
    },
    { 
      id: 30, 
      name: "Egg Keema Paratha",
      tagline: "Egg and mince stuffed paratha - protein rich",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 large eggs",
        "2 cups whole wheat flour",
        "100g chicken mince - cooked",
        "1 medium onion - finely chopped",
        "2 green chilies - finely chopped",
        "1/2 teaspoon red chili powder",
        "Salt to taste",
        "Oil or ghee for cooking",
        "Water for kneading"
      ],
      steps: [
        "Knead dough with whole wheat flour, salt, and water. Rest for 30 minutes.",
        "In a bowl, beat eggs. Add cooked chicken mince, chopped onions, green chilies, red chili powder, and salt. Mix well.",
        "Divide dough into 4 portions. Roll each into a small circle.",
        "Pour 1/4 of the egg-mince mixture onto the center. Fold and seal edges.",
        "Gently roll again into a circle.",
        "Cook on hot tawa with oil or ghee until golden brown on both sides.",
        "Serve hot with yogurt or raita."
      ]
    },

    // ==================== EGG SANDWICHES (2) ====================
    { 
      id: 31, 
      name: "Egg Sandwich",
      tagline: "Classic egg sandwich - quick breakfast",
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122",
      ingredients: [
        "4 large eggs - scrambled",
        "8 slices of bread",
        "2 tablespoons butter",
        "Salt and black pepper to taste",
        "Lettuce leaves",
        "2 tablespoons mayonnaise (optional)"
      ],
      steps: [
        "Prepare scrambled eggs: Heat a pan, add butter. Crack eggs, add salt and pepper. Scramble until just cooked. Set aside.",
        "Butter one side of each bread slice.",
        "Spread mayonnaise on the buttered side if using.",
        "Place lettuce leaves on 4 bread slices.",
        "Divide the scrambled eggs evenly among the 4 slices.",
        "Top with the remaining bread slices, buttered side down.",
        "Press gently. Toast in a sandwich press or pan until golden brown.",
        "Cut diagonally and serve hot with ketchup."
      ]
    },
    { 
      id: 32, 
      name: "Egg Mayo Sandwich",
      tagline: "Egg mayonnaise sandwich - creamy and delicious",
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122",
      ingredients: [
        "4 large eggs - boiled and mashed",
        "4 tablespoons mayonnaise",
        "8 slices of bread",
        "2 tablespoons butter",
        "Salt and black pepper to taste",
        "Lettuce leaves"
      ],
      steps: [
        "Boil the eggs for 8-10 minutes until hard-boiled. Cool, peel, and mash with a fork.",
        "In a bowl, mix mashed eggs with mayonnaise, salt, and pepper until well combined.",
        "Butter one side of each bread slice.",
        "Place lettuce leaves on 4 bread slices.",
        "Spread the egg mayo mixture evenly on top of the lettuce.",
        "Cover with the remaining bread slices, buttered side down.",
        "Press gently. Cut into halves or triangles.",
        "Serve immediately or chill for later."
      ]
    },

    // ==================== EGG APPETIZERS (3) ====================
    { 
      id: 33, 
      name: "Egg Pakora",
      tagline: "Deep fried egg fritters - perfect tea time snack",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "4 large eggs - boiled and peeled",
        "1 cup besan (gram flour)",
        "1 medium onion - thinly sliced",
        "2 green chilies - finely chopped",
        "1/2 teaspoon red chili powder",
        "1/2 teaspoon carom seeds (ajwain)",
        "Salt to taste",
        "Oil for deep frying",
        "Water as needed"
      ],
      steps: [
        "Boil the eggs for 8-10 minutes until hard-boiled. Cool, peel, and set aside.",
        "In a bowl, mix besan with red chili powder, carom seeds, and salt.",
        "Add water gradually to make a thick, smooth batter (like pakora batter).",
        "Add sliced onions and chopped green chilies to the batter. Mix well.",
        "Heat oil in a deep pan over medium heat.",
        "Dip each boiled egg into the batter, coating it completely.",
        "Gently drop the coated egg into the hot oil.",
        "Deep fry until golden brown and crisp, turning occasionally (about 3-4 minutes).",
        "Remove with a slotted spoon and drain on paper towels.",
        "Cut into halves and serve hot with mint chutney or ketchup."
      ]
    },
    { 
      id: 34, 
      name: "Egg Devil",
      tagline: "Spicy fried eggs - popular street food",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "6 large eggs - boiled and peeled",
        "1 cup breadcrumbs",
        "2 large eggs - beaten (for coating)",
        "1 teaspoon red chili powder",
        "1/2 teaspoon black pepper powder",
        "Salt to taste",
        "Oil for deep frying"
      ],
      steps: [
        "Boil the eggs for 8-10 minutes until hard-boiled. Cool, peel, and set aside.",
        "In a shallow dish, mix breadcrumbs with red chili powder, black pepper, and salt.",
        "In another bowl, beat 2 eggs for coating.",
        "Heat oil in a deep pan over medium heat.",
        "Dip each boiled egg into the beaten egg, then roll in the breadcrumb mixture to coat evenly.",
        "Repeat the dipping and coating process for a thicker crust (optional).",
        "Gently drop the coated eggs into the hot oil.",
        "Deep fry until golden brown and crisp (about 2-3 minutes).",
        "Remove with a slotted spoon and drain on paper towels.",
        "Cut into halves and serve hot with tomato sauce or mustard sauce."
      ]
    },
    { 
      id: 35, 
      name: "Egg Cutlet",
      tagline: "Egg and potato cutlets - crispy and tasty",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0",
      ingredients: [
        "4 large eggs - boiled and mashed",
        "2 medium potatoes - boiled and mashed",
        "1 medium onion - finely chopped",
        "2 green chilies - finely chopped",
        "1/2 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "Salt to taste",
        "1 cup breadcrumbs for coating",
        "Oil for shallow frying"
      ],
      steps: [
        "Boil eggs and potatoes separately until fully cooked. Cool, then peel.",
        "Mash the boiled eggs and potatoes together in a large bowl.",
        "Add finely chopped onions, green chilies, red chili powder, garam masala, and salt. Mix well.",
        "Divide the mixture into equal portions and shape into round or oval cutlets.",
        "Roll each cutlet in breadcrumbs to coat evenly.",
        "Heat oil in a pan over medium heat for shallow frying.",
        "Place the cutlets in the pan and cook for 3-4 minutes per side until golden brown and crisp.",
        "Remove and drain on paper towels.",
        "Serve hot with ketchup or mint chutney."
      ]
    }
  ];

  const allEggRecipes = eggRecipes;

  const recipesList = allEggRecipes;

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
    <div className="egg-page">
      <header className="egg-header">
        <div className="egg-header-content">
          <h1 className="egg-title">Egg Dishes</h1>
          <p className="egg-description">
            Discover 35+ delicious egg recipes - curries, masala, bhurji, and much more
          </p>
        </div>
      </header>

      <main className="egg-main">
        <div className="egg-grid-section">
          <div className="egg-grid">
            {recipesList.map((recipe) => (
              <div
                key={recipe.id}
                className="egg-card"
                onClick={() => handleRecipeClick(recipe)}
              >
                <div
                  className="egg-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                />
                <div className="egg-card-content">
                  <h3 className="egg-card-title">{recipe.name}</h3>
                  <p className="egg-card-description">{recipe.tagline}</p>
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
        <div className="egg-modal-overlay" onClick={handleCloseModal}>
          <div
            className="egg-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button className="egg-modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="egg-modal-header">
              <div className="egg-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="egg-modal-content">
              <div className="egg-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="egg-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="egg-ingredient-item">
                      <span className="egg-ingredient-bullet">•</span>
                      <span className="egg-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="egg-modal-steps">
                <h3>Steps to Make</h3>
                <div className="egg-steps-list">
                  {selectedRecipe.steps.map((step, index) => (
                    <div key={index} className="egg-step-item">
                      <span className="egg-step-number">{index + 1}.</span>
                      <span className="egg-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="egg-modal-voice-container">
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

export default RecipesEggDishes;