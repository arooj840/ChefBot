import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipesVegChicken.css';

const RecipesVegChicken = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All Chicken + Vegetables Recipes (60+ recipes) with detailed instructions
  const chickenVegRecipes = [
    // ==================== CHICKEN + ALOO BASED (8) ====================
    { 
      id: 1, 
      name: "Chicken Aloo",
      tagline: "Classic chicken and potato curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - cut into medium pieces",
        "3 medium potatoes - peeled and cut into cubes",
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
        "Heat oil in a large pot over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add chopped onions and sauté for 5-7 minutes until they turn golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until the raw smell disappears.",
        "Add chicken pieces and fry on high heat for 5-7 minutes until the chicken changes color to white.",
        "Add chopped tomatoes and cook for 5-6 minutes until they become soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and 1 cup of warm water. Stir well to combine.",
        "Cover the pot and cook on medium heat for 25-30 minutes until chicken and potatoes are completely tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves and green chilies.",
        "Serve hot with naan, roti, or steamed rice."
      ]
    },
    { 
      id: 2, 
      name: "Chicken Aloo Matar",
      tagline: "Chicken with potatoes and peas",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - curry cut pieces",
        "2 medium potatoes - peeled and cut into cubes",
        "1 cup fresh or frozen green peas",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into puree",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add tomato puree and cook for 5-7 minutes until oil separates from the masala.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and 1 cup of warm water. Cover and cook for 15 minutes.",
        "Add green peas and cook for another 10 minutes until chicken and potatoes are tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan, roti, or paratha."
      ]
    },
    { 
      id: 3, 
      name: "Chicken Aloo Baingan",
      tagline: "Chicken with potato and eggplant",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g chicken - medium pieces",
        "2 medium potatoes - peeled and cut into cubes",
        "2 medium eggplants (baingan) - cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until the raw smell goes away.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5-6 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and 1/2 cup of warm water. Cover and cook for 10 minutes.",
        "Add eggplant cubes and mix gently to avoid breaking them. Cover and cook for 15 minutes until all vegetables are tender.",
        "Garnish with fresh coriander leaves and serve hot with roti or naan."
      ]
    },
    { 
      id: 4, 
      name: "Chicken Aloo Shimla Mirch",
      tagline: "Chicken with potato and capsicum",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - boneless, cut into cubes",
        "2 medium potatoes - peeled and cut into cubes",
        "2 medium capsicum (bell peppers) - cut into cubes",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken cubes and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and 1/2 cup of warm water. Cover and cook for 15 minutes until potatoes are almost done.",
        "Add capsicum cubes and cook for 5-7 minutes until the capsicum is tender but still slightly crunchy.",
        "Sprinkle garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 5, 
      name: "Chicken Aloo Gobhi",
      tagline: "Chicken with potato and cauliflower",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "500g chicken - medium pieces",
        "2 medium potatoes - peeled and cut into cubes",
        "1 medium cauliflower - cut into small florets",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5-6 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and 1 cup of warm water. Cover and cook for 15 minutes.",
        "Add cauliflower florets and cook for 10-12 minutes until the cauliflower is tender but not mushy.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 6, 
      name: "Chicken Aloo Palak",
      tagline: "Chicken with potato and spinach",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - medium pieces",
        "2 medium potatoes - peeled and cut into cubes",
        "500g fresh spinach (palak) - blanched and blended into puree",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and 1/2 cup of warm water. Cover and cook for 15 minutes until potatoes are almost done.",
        "Add spinach puree and mix well. Simmer for 10 minutes on low heat.",
        "Sprinkle garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 7, 
      name: "Chicken Aloo Tamatar",
      tagline: "Chicken with potato and tomato gravy",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "2 medium potatoes - peeled and cut into cubes",
        "4 medium tomatoes - finely chopped",
        "2 medium onions - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 8-10 minutes until they become mushy and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and 1 cup of warm water. Cover and cook for 20-25 minutes until chicken and potatoes are tender.",
        "Serve hot with roti, naan, or paratha."
      ]
    },
    { 
      id: 8, 
      name: "Chicken Aloo Beans",
      tagline: "Chicken with potato and green beans",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - boneless, cut into cubes",
        "2 medium potatoes - peeled and sliced",
        "200g fresh green beans - washed and chopped into 1-inch pieces",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken cubes and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato slices and 1/2 cup of warm water. Cover and cook for 10 minutes.",
        "Add green beans and cook for 10 more minutes until all vegetables are tender.",
        "Serve hot with roti or paratha."
      ]
    },

    // ==================== CHICKEN + MATAR BASED (5) ====================
    { 
      id: 9, 
      name: "Chicken Matar",
      tagline: "Classic chicken and peas curry",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - medium pieces",
        "1 cup fresh or frozen green peas",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into puree",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white and slightly browned.",
        "Add tomato puree and cook for 5-7 minutes until oil separates from the masala.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1 cup of warm water. Cover and cook for 20 minutes until chicken is almost done.",
        "Add green peas and cook for another 10 minutes until peas are tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan, roti, or steamed rice."
      ]
    },
    { 
      id: 10, 
      name: "Chicken Matar Malai",
      tagline: "Creamy chicken with peas",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - boneless, cut into cubes",
        "1 cup fresh or frozen green peas",
        "1 cup heavy cream or cooking cream",
        "2 medium onions - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon white pepper powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken cubes and fry for 5-7 minutes until the chicken turns white.",
        "Add white pepper powder and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes until chicken is tender.",
        "Add green peas and cook for 5 minutes.",
        "Add cream and simmer for 5 minutes on low heat. Do not boil after adding cream.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 11, 
      name: "Chicken Matar Pulao",
      tagline: "Chicken and peas rice pilaf",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      ingredients: [
        "500g chicken - medium pieces",
        "1 cup fresh or frozen green peas",
        "2 cups basmati rice - washed and soaked for 30 minutes",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "4 whole cloves",
        "2 green cardamom pods",
        "1 small cinnamon stick",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash basmati rice thoroughly and soak in water for 30 minutes. Drain before using.",
        "Heat oil in a large pot over medium heat. Add whole spices (cloves, cardamom, cinnamon) and cumin seeds. Let them crackle for 30 seconds.",
        "Add sliced onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add salt and 3 cups of warm water. Bring to a boil and cook for 10 minutes until chicken is half done.",
        "Add soaked and drained rice and green peas. Stir gently.",
        "Cover and cook on low heat for 15-20 minutes until the rice is fully cooked and water is absorbed.",
        "Sprinkle garam masala and serve hot with raita (yogurt sauce)."
      ]
    },
    { 
      id: 12, 
      name: "Chicken Matar Korma",
      tagline: "Rich chicken and peas korma",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "1 cup fresh or frozen green peas",
        "1 cup plain yogurt - beaten until smooth",
        "2 medium onions - thinly sliced",
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
        "Heat oil in a pan over medium heat. Add sliced onions and fry until golden brown, about 6-7 minutes.",
        "Remove half of the fried onions and set aside for garnish.",
        "Add ginger-garlic paste to the remaining onions and cook for 2 minutes.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add turmeric powder, red chili powder, and salt. Mix well.",
        "Reduce heat to low. Add beaten yogurt slowly, stirring continuously to prevent curdling.",
        "Add 1/2 cup of warm water and cook for 20 minutes until chicken is tender.",
        "Add green peas and cook for 10 minutes.",
        "Sprinkle garam masala and garnish with reserved fried onions and fresh coriander.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 13, 
      name: "Chicken Matar Keema",
      tagline: "Chicken mince with peas",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
        "500g chicken mince (ground chicken)",
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
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken mince and fry for 5-7 minutes until the color changes and it's no longer pink.",
        "Add chopped tomatoes and cook for 5-6 minutes until they become soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 5 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes until the mince is fully cooked.",
        "Add green peas and cook for 10 minutes until peas are tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan, paratha, or roti."
      ]
    },

    // ==================== CHICKEN + PALAK BASED (4) ====================
    { 
      id: 14, 
      name: "Chicken Palak",
      tagline: "Chicken in spinach gravy",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - medium pieces",
        "500g fresh spinach (palak) - blanched and blended into puree",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes until chicken is almost done.",
        "Add spinach puree and mix well. Simmer for 10 minutes on low heat.",
        "Sprinkle garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 15, 
      name: "Chicken Palak Malai",
      tagline: "Creamy chicken spinach curry",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - boneless, cut into cubes",
        "500g fresh spinach - blanched and blended into puree",
        "1 cup heavy cream or cooking cream",
        "2 medium onions - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken cubes and fry for 5 minutes until the chicken turns white.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add spinach puree and cook for 10 minutes, stirring occasionally.",
        "Add cream and simmer for 5 minutes on low heat. Do not boil after adding cream.",
        "Sprinkle garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 16, 
      name: "Chicken Palak Aloo",
      tagline: "Chicken with spinach and potato",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - medium pieces",
        "2 medium potatoes - peeled and cut into cubes",
        "500g fresh spinach - blanched and blended into puree",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and 1 cup of warm water. Cover and cook for 15 minutes.",
        "Add spinach puree and mix well. Simmer for 10 minutes.",
        "Sprinkle garam masala and serve hot with roti or naan."
      ]
    },
    { 
      id: 17, 
      name: "Chicken Palak Matar",
      tagline: "Chicken with spinach and peas",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - medium pieces",
        "1 cup fresh or frozen green peas",
        "500g fresh spinach - blanched and blended into puree",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes until chicken is almost done.",
        "Add green peas and spinach puree. Mix well and cook for 10 minutes.",
        "Sprinkle garam masala and serve hot with roti."
      ]
    },

    // ==================== CHICKEN + SHIMLA MIRCH BASED (4) ====================
    { 
      id: 18, 
      name: "Chicken Shimla Mirch",
      tagline: "Chicken with capsicum",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - boneless, cut into cubes",
        "3 medium capsicum (bell peppers) - cut into cubes",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken cubes and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes until chicken is tender.",
        "Add capsicum cubes and cook for 5-7 minutes until capsicum is tender but still slightly crunchy.",
        "Sprinkle garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 19, 
      name: "Chicken Shimla Mirch Aloo",
      tagline: "Chicken with capsicum and potato",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "2 medium potatoes - peeled and cut into cubes",
        "2 medium capsicum - cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and 1/2 cup of warm water. Cover and cook for 15 minutes.",
        "Add capsicum cubes and cook for 5 minutes until capsicum is tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 20, 
      name: "Chicken Shimla Mirch Matar",
      tagline: "Chicken with capsicum and peas",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "2 medium capsicum - cut into cubes",
        "1 cup fresh or frozen green peas",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes until chicken is almost done.",
        "Add green peas and cook for 5 minutes.",
        "Add capsicum cubes and cook for 5 more minutes until capsicum is tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 21, 
      name: "Chicken Shimla Mirch Pyaz",
      tagline: "Chicken with capsicum and onion",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - boneless, cut into strips",
        "2 medium capsicum - sliced into strips",
        "2 medium onions - sliced (divided use)",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 tablespoon soy sauce",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan or wok over high heat. Add cumin seeds and half of the sliced onions. Sauté for 3-4 minutes until golden.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken strips and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Cook for 15 minutes until chicken is tender.",
        "Add capsicum strips and remaining sliced onions. Cook on high heat for 5 minutes until vegetables are tender-crisp.",
        "Add soy sauce, mix well, and serve hot with fried rice or noodles."
      ]
    },

    // ==================== CHICKEN + GOBHI BASED (3) ====================
    { 
      id: 22, 
      name: "Chicken Gobhi",
      tagline: "Chicken with cauliflower",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "500g chicken - medium pieces",
        "1 medium cauliflower - cut into small florets",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes until chicken is almost done.",
        "Add cauliflower florets and cook for 10-12 minutes until cauliflower is tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 23, 
      name: "Chicken Gobhi Aloo",
      tagline: "Chicken with cauliflower and potato",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "500g chicken - medium pieces",
        "1 medium cauliflower - cut into florets",
        "2 medium potatoes - peeled and cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and 1 cup of warm water. Cover and cook for 15 minutes.",
        "Add cauliflower florets and cook for 10 minutes until all vegetables are tender.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 24, 
      name: "Chicken Gobhi Matar",
      tagline: "Chicken with cauliflower and peas",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "500g chicken - medium pieces",
        "1 medium cauliflower - cut into florets",
        "1 cup fresh or frozen green peas",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1 cup of warm water and cook for 15 minutes until chicken is almost done.",
        "Add cauliflower florets and green peas. Cook for 10 minutes until vegetables are tender.",
        "Serve hot with roti or naan."
      ]
    },

    // ==================== CHICKEN + BAINGAN BASED (3) ====================
    { 
      id: 25, 
      name: "Chicken Baingan",
      tagline: "Chicken with eggplant",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g chicken - medium pieces",
        "2 medium eggplants (baingan) - cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes until chicken is almost done.",
        "Add eggplant cubes and mix gently to avoid breaking them. Cook for 10 minutes until eggplants are tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 26, 
      name: "Chicken Baingan Aloo",
      tagline: "Chicken with eggplant and potato",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g chicken - medium pieces",
        "2 medium eggplants - cut into cubes",
        "2 medium potatoes - peeled and cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and 1/2 cup of warm water. Cover and cook for 15 minutes.",
        "Add eggplant cubes and cook for 10 minutes until all vegetables are tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 27, 
      name: "Chicken Baingan Bharta",
      tagline: "Chicken with mashed eggplant",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g chicken mince (ground chicken)",
        "2 large eggplants - roasted, peeled, and mashed",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 green chilies - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Roast eggplants directly on gas flame until the skin is charred and flesh is soft (about 10-15 minutes). Let cool, then peel and mash the flesh. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken mince and fry for 5-7 minutes until the color changes.",
        "Add chopped tomatoes and green chilies. Cook for 5 minutes until tomatoes are soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add mashed eggplant and mix thoroughly. Cook for 10 minutes, stirring occasionally.",
        "Sprinkle garam masala and serve hot with roti or naan."
      ]
    },

    // ==================== CHICKEN + TORI/LOUKI BASED (3) ====================
    { 
      id: 28, 
      name: "Chicken Tori",
      tagline: "Chicken with ridge gourd",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "500g tori (ridge gourd) - peeled and cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes until chicken is almost done.",
        "Add tori cubes and cook for 10-12 minutes until tori is tender.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 29, 
      name: "Chicken Louki",
      tagline: "Chicken with bottle gourd",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "500g louki (bottle gourd) - peeled and cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes until chicken is almost done.",
        "Add louki cubes and cook for 15 minutes until louki is tender and translucent.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 30, 
      name: "Chicken Tori Aloo",
      tagline: "Chicken with ridge gourd and potato",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "400g tori (ridge gourd) - peeled and cut into cubes",
        "2 medium potatoes - peeled and cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and 1/2 cup of warm water. Cover and cook for 10 minutes.",
        "Add tori cubes and cook for 10-12 minutes until all vegetables are tender.",
        "Serve hot with roti."
      ]
    }
  ];

  // More recipes - KARELA, METHI, BEANS, TINDA, KADDU, ARVI, MIX VEGETABLES, SEASONAL
  const moreChickenVegRecipes = [
    // ==================== CHICKEN + KARELA BASED (3) ====================
    { 
      id: 31, 
      name: "Chicken Karela",
      tagline: "Chicken with bitter gourd",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g chicken - medium pieces",
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
        "Rub karela slices with 1 teaspoon salt and set aside for 30 minutes to reduce bitterness. Rinse well and squeeze out the bitter juice completely.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes until chicken is almost done.",
        "Add karela slices and cook for 10-12 minutes until karela is tender.",
        "Sprinkle amchur powder, mix well, and serve hot with roti."
      ]
    },
    { 
      id: 32, 
      name: "Chicken Karela Aloo",
      tagline: "Chicken with bitter gourd and potato",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g chicken - medium pieces",
        "2 medium karela - thinly sliced",
        "2 medium potatoes - peeled and cut into cubes",
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
        "Rub karela slices with salt, set aside for 30 minutes. Rinse and squeeze out bitter juice.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté until golden brown, about 5-6 minutes.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes until white.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add potatoes and 1/2 cup water. Cover and cook for 15 minutes.",
        "Add karela and cook for 10 minutes until all are tender.",
        "Sprinkle amchur and serve hot with roti."
      ]
    },
    { 
      id: 33, 
      name: "Chicken Karela Masala",
      tagline: "Spicy chicken with bitter gourd",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g chicken - medium pieces",
        "3 medium karela - thinly sliced",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Rub karela slices with salt, set aside for 30 minutes. Rinse and squeeze out bitter juice.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes until white.",
        "Add tomato puree and cook for 5-7 minutes until oil separates.",
        "Add turmeric, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1 cup of warm water and cook for 20 minutes until chicken is tender.",
        "Add karela and cook for 10 minutes.",
        "Sprinkle garam masala and serve hot with naan."
      ]
    },

    // ==================== CHICKEN + METHI BASED (3) ====================
    { 
      id: 34, 
      name: "Chicken Methi",
      tagline: "Chicken with fenugreek leaves",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - medium pieces",
        "1 large bunch fresh methi (fenugreek leaves) - washed and finely chopped",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5 minutes until they become soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes until chicken is almost done.",
        "Add chopped methi leaves and cook for 5-7 minutes until the leaves wilt and are well incorporated.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 35, 
      name: "Chicken Methi Malai",
      tagline: "Creamy chicken with fenugreek",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - boneless, cut into cubes",
        "1 large bunch fresh methi - finely chopped",
        "1 cup heavy cream",
        "2 medium onions - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon white pepper powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken cubes and fry for 5 minutes until the chicken turns white.",
        "Add white pepper powder and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes until chicken is tender.",
        "Add chopped methi and cook for 5 minutes until wilted.",
        "Add cream and simmer for 5 minutes on low heat. Do not boil.",
        "Sprinkle garam masala and serve hot with naan."
      ]
    },
    { 
      id: 36, 
      name: "Chicken Methi Aloo",
      tagline: "Chicken with fenugreek and potato",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - medium pieces",
        "1 large bunch fresh methi - finely chopped",
        "2 medium potatoes - peeled and cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes until white.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add potatoes and 1 cup of warm water. Cover and cook for 15 minutes.",
        "Add chopped methi and cook for 5 minutes until wilted.",
        "Serve hot with roti."
      ]
    },

    // ==================== CHICKEN + BEANS BASED (3) ====================
    { 
      id: 37, 
      name: "Chicken Beans",
      tagline: "Chicken with green beans",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - boneless, cut into cubes",
        "200g fresh green beans - chopped into 1-inch pieces",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken cubes and fry for 5 minutes until white.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes until chicken is almost done.",
        "Add green beans and cook for 10 minutes until beans are tender.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 38, 
      name: "Chicken Beans Aloo",
      tagline: "Chicken with beans and potato",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "200g fresh green beans - chopped",
        "2 medium potatoes - peeled and cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes until white.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add spices and salt. Mix well and cook for 2 minutes.",
        "Add potatoes and 1 cup of warm water. Cover and cook for 15 minutes.",
        "Add green beans and cook for 10 minutes until all are tender.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 39, 
      name: "Chicken Beans Matar",
      tagline: "Chicken with beans and peas",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "200g fresh green beans - chopped",
        "1 cup fresh or frozen green peas",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes until white.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add spices and salt. Mix well and cook for 2 minutes.",
        "Add 1 cup of warm water and cook for 15 minutes.",
        "Add green beans and peas. Cook for 10 minutes until vegetables are tender.",
        "Serve hot with roti."
      ]
    },

    // ==================== CHICKEN + TINDA/KADDU BASED (3) ====================
    { 
      id: 40, 
      name: "Chicken Tinday",
      tagline: "Chicken with apple gourd",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "500g tinday (apple gourd) - peeled and cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes until white.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add spices and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes.",
        "Add tinday cubes and cook for 15 minutes until tender.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 41, 
      name: "Chicken Kaddu",
      tagline: "Chicken with pumpkin",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "500g kaddu (pumpkin) - peeled and cut into cubes",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 tablespoon jaggery or brown sugar",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes until white.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and cook for 15 minutes.",
        "Add pumpkin cubes and jaggery. Cook for 15 minutes until pumpkin is tender.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 42, 
      name: "Chicken Kaddu Aloo",
      tagline: "Chicken with pumpkin and potato",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "300g kaddu (pumpkin) - peeled and cubed",
        "2 medium potatoes - peeled and cubed",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes until white.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add spices and salt. Mix well and cook for 2 minutes.",
        "Add potatoes and 1 cup of warm water. Cook for 10 minutes.",
        "Add pumpkin and cook for 15 minutes until all are tender.",
        "Serve hot with roti."
      ]
    },

    // ==================== CHICKEN + MIX VEGETABLES (5) ====================
    { 
      id: 43, 
      name: "Chicken Mix Vegetable",
      tagline: "Chicken with mixed vegetables",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "1 cup cauliflower florets",
        "1 cup green peas",
        "1 cup carrots - peeled and cubed",
        "1 cup green beans - chopped",
        "2 medium potatoes - peeled and cubed",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes until white.",
        "Add tomato puree and cook for 5-7 minutes until oil separates.",
        "Add turmeric, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add potatoes and 1 cup of warm water. Cook for 10 minutes.",
        "Add all other vegetables and cook for 15 minutes until everything is tender.",
        "Sprinkle garam masala and serve hot with roti or rice."
      ]
    },
    { 
      id: 44, 
      name: "Chicken Jalfrezi",
      tagline: "Chicken with mixed veggies in thick gravy",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - boneless, cut into strips",
        "1 capsicum - cut into strips",
        "1 carrot - thinly sliced",
        "1 onion - thinly sliced",
        "1 tomato - cut into wedges",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1 tablespoon soy sauce",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a wok over high heat. Add cumin seeds and onions. Sauté for 2-3 minutes.",
        "Add ginger-garlic paste and cook for 1 minute.",
        "Add chicken strips and fry for 5-7 minutes until white and slightly browned.",
        "Add turmeric, red chili powder, coriander powder, and salt. Mix well.",
        "Add all vegetables and stir-fry on high heat for 5 minutes.",
        "Add soy sauce and 1/4 cup of warm water.",
        "Cook for 5-7 minutes until vegetables are tender-crisp.",
        "Sprinkle garam masala and serve hot with fried rice or noodles."
      ]
    },
    { 
      id: 45, 
      name: "Chicken Karahi with Veggies",
      tagline: "Traditional karahi with vegetables",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - with bones, curry cut",
        "2 medium tomatoes - chopped",
        "2 green chilies - slit",
        "1 capsicum - sliced",
        "1 onion - sliced",
        "1 tablespoon ginger - julienned",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili flakes",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a wok (karahi) over high heat. Add chicken and fry until white, about 5-7 minutes.",
        "Add ginger and green chilies. Fry for 2 minutes.",
        "Add chopped tomatoes and cook until soft and mushy, about 5-6 minutes.",
        "Add red chili flakes, cumin seeds, and salt.",
        "Cook on high heat for 5-7 minutes until oil separates.",
        "Add capsicum and onion. Cook for 3-4 minutes until vegetables are tender-crisp.",
        "Sprinkle garam masala and garnish with fresh coriander.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 46, 
      name: "Chicken Vegetable Curry",
      tagline: "Simple chicken and vegetable curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "2 cups mixed vegetables (carrots, peas, beans, cauliflower)",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes until white.",
        "Add tomato puree and cook for 5-7 minutes until oil separates.",
        "Add turmeric, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1 cup of warm water and cook for 15 minutes.",
        "Add mixed vegetables and cook for 15 minutes until tender.",
        "Serve hot with rice or roti."
      ]
    },
    { 
      id: 47, 
      name: "Chicken Vegetable Korma",
      tagline: "Rich korma with vegetables",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken - medium pieces",
        "1 cup mixed vegetables",
        "1 cup plain yogurt - beaten until smooth",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add sliced onions and fry until golden brown, about 6-7 minutes.",
        "Remove half of the fried onions and set aside for garnish.",
        "Add ginger-garlic paste to the remaining onions and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes until white.",
        "Add turmeric, red chili powder, and salt. Mix well.",
        "Reduce heat to low. Add beaten yogurt slowly, stirring continuously to prevent curdling.",
        "Add 1/2 cup of warm water and cook for 20 minutes.",
        "Add mixed vegetables and cook for 15 minutes until tender.",
        "Sprinkle garam masala and garnish with fried onions and coriander.",
        "Serve hot with naan or roti."
      ]
    },

    // ==================== CHICKEN + SEASONAL VEGETABLES (3) ====================
    { 
      id: 48, 
      name: "Chicken Saag",
      tagline: "Chicken with mustard greens",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g chicken - medium pieces",
        "500g mustard greens (sarson) - washed and chopped",
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
        "Boil mustard greens in water until soft, about 10-15 minutes. Drain and blend to a coarse paste. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chicken and fry for 5 minutes until white.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add the saag (mustard greens paste) and 1/2 cup of warm water.",
        "Cover and cook for 20 minutes until chicken is tender.",
        "Sprinkle garam masala and serve hot with makai ki roti (cornbread) or naan."
      ]
    },
    { 
      id: 49, 
      name: "Chicken Vegetable Pulao",
      tagline: "Fragrant rice with chicken and veggies",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      ingredients: [
        "500g chicken - medium pieces",
        "2 cups basmati rice - washed and soaked for 30 minutes",
        "1 cup mixed vegetables (carrots, peas, beans)",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "4 whole cloves",
        "2 green cardamom pods",
        "1 small cinnamon stick",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash basmati rice thoroughly and soak in water for 30 minutes. Drain before using.",
        "Heat oil in a large pot over medium heat. Add whole spices (cloves, cardamom, cinnamon) and cumin seeds. Let them crackle for 30 seconds.",
        "Add sliced onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5 minutes until the chicken turns white.",
        "Add mixed vegetables and salt. Cook for 5 minutes, stirring occasionally.",
        "Add 3 cups of warm water and bring to a boil.",
        "Add soaked and drained rice. Stir gently.",
        "Cover and cook on low heat for 15-20 minutes until the rice is fully cooked and water is absorbed.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with raita (yogurt sauce)."
      ]
    },
    { 
      id: 50, 
      name: "Chicken Lauki Kofta",
      tagline: "Chicken with bottle gourd dumplings",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g chicken mince (ground chicken)",
        "500g lauki (bottle gourd) - peeled and grated",
        "1 cup besan (gram flour)",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "Oil for deep frying",
        "2 tablespoons cooking oil for gravy",
        "Salt to taste"
      ],
      steps: [
        "Squeeze out excess water from grated lauki. Mix with chicken mince, besan, and salt to form a soft dough.",
        "Shape the mixture into small lemon-sized balls (kofta).",
        "Heat oil for deep frying in a pan. Fry the kofta balls until golden brown. Drain on paper towels and set aside.",
        "For gravy: Heat 2 tablespoons oil in a separate pan. Add cumin seeds and onions. Sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 5-7 minutes until oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add 2 cups of warm water and bring to a boil. Simmer for 5 minutes.",
        "Add the fried kofta and simmer for 10 minutes on low heat.",
        "Sprinkle garam masala and serve hot with naan or rice."
      ]
    }
  ];

  // Combine both arrays
  const allChickenVegRecipes = [...chickenVegRecipes, ...moreChickenVegRecipes];

  // ==================== FUNCTIONS & LOGIC ====================

  const recipesList = allChickenVegRecipes;

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

  // ==================== RENDER UI ====================

  return (
    <div className="chicken-veg-page">
      <header className="chicken-veg-header">
        <div className="chicken-veg-header-content">
          <h1 className="chicken-veg-title">Chicken + Vegetables</h1>
          <p className="chicken-veg-description">
            Discover 50+ delicious chicken and vegetable recipes - perfect for a hearty meal
          </p>
        </div>
      </header>

      <main className="chicken-veg-main">
        <div className="chicken-veg-grid-section">
          <div className="chicken-veg-grid">
            {recipesList.map((recipe) => (
              <div
                key={recipe.id}
                className="chicken-veg-card"
                onClick={() => handleRecipeClick(recipe)}
              >
                <div
                  className="chicken-veg-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                />
                <div className="chicken-veg-card-content">
                  <h3 className="chicken-veg-card-title">{recipe.name}</h3>
                  <p className="chicken-veg-card-description">{recipe.tagline}</p>
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
        <div className="chicken-veg-modal-overlay" onClick={handleCloseModal}>
          <div
            className="chicken-veg-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button className="chicken-veg-modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="chicken-veg-modal-header">
              <div className="chicken-veg-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="chicken-veg-modal-content">
              <div className="chicken-veg-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="chicken-veg-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="chicken-veg-ingredient-item">
                      <span className="chicken-veg-ingredient-bullet">•</span>
                      <span className="chicken-veg-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="chicken-veg-modal-steps">
                <h3>Steps to Make</h3>
                <div className="chicken-veg-steps-list">
                  {selectedRecipe.steps.map((step, index) => (
                    <div key={index} className="chicken-veg-step-item">
                      <span className="chicken-veg-step-number">{index + 1}.</span>
                      <span className="chicken-veg-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="chicken-veg-modal-voice-container">
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

export default RecipesVegChicken;