import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipesVegMutton.css';

const RecipesVegMutton = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All Mutton + Vegetables Recipes (55+ recipes) with detailed instructions
  const muttonVegRecipes = [
    // ==================== MUTTON + ALOO BASED (8) ====================
    { 
      id: 1, 
      name: "Mutton Aloo",
      tagline: "Classic mutton and potato curry - rich and flavorful",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - cut into medium pieces (with bones)",
        "3 medium potatoes - peeled and cut into cubes",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil or ghee",
        "Salt to taste",
        "Fresh coriander leaves for garnish",
        "2 green chilies - slit lengthwise"
      ],
      steps: [
        "Heat oil or ghee in a large heavy-bottomed pot over medium heat. Add cumin seeds and let them crackle for 30 seconds until fragrant.",
        "Add finely chopped onions and sauté for 7-8 minutes until they turn golden brown.",
        "Add ginger-garlic paste and cook for 2-3 minutes until the raw smell completely disappears.",
        "Add mutton pieces and fry on high heat for 8-10 minutes until the mutton changes color to brown and is well-sealed.",
        "Add chopped tomatoes and cook for 6-8 minutes until they become soft, mushy, and oil starts separating.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes until spices are fragrant.",
        "Add potato cubes and 2 cups of warm water. Stir well to combine everything.",
        "Cover the pot with a lid and cook on medium-low heat for 45-50 minutes until mutton and potatoes are completely tender. Stir occasionally.",
        "Check if mutton is done by pressing with a spoon - it should be fork-tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves and green chilies.",
        "Serve hot with naan, roti, or steamed rice."
      ]
    },
    { 
      id: 2, 
      name: "Mutton Aloo Matar",
      tagline: "Mutton with potatoes and peas - perfect for special occasions",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g mutton - curry cut pieces with bones",
        "2 medium potatoes - peeled and cut into cubes",
        "1 cup fresh or frozen green peas",
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
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a heavy-bottomed pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until they turn golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant and raw smell disappears.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned on all sides.",
        "Add tomato puree and cook for 7-8 minutes until the oil separates from the masala and the puree is well-cooked.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 2 cups of warm water. Stir well to combine.",
        "Cover the pan and cook on medium-low heat for 40-45 minutes until mutton is almost tender.",
        "Add green peas and cook for another 10-12 minutes until everything is tender and the gravy has thickened.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan, roti, or paratha."
      ]
    },
    { 
      id: 3, 
      name: "Mutton Aloo Baingan",
      tagline: "Mutton with potato and eggplant - a unique combination",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces with bones",
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
        "Heat oil in a large pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until they become soft and oil starts separating.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1.5 cups of warm water. Stir to combine.",
        "Cover and cook on medium-low heat for 40-45 minutes until mutton is almost tender.",
        "Add eggplant cubes and mix gently to avoid breaking them. Cover and cook for 12-15 minutes until eggplants are tender.",
        "Garnish with fresh coriander leaves and serve hot with roti or naan."
      ]
    },
    { 
      id: 4, 
      name: "Mutton Aloo Shimla Mirch",
      tagline: "Mutton with potato and capsicum - colorful and tasty",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until they become soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1.5 cups of warm water. Stir to combine.",
        "Cover and cook on medium-low heat for 40-45 minutes until mutton is tender.",
        "Add capsicum cubes and cook for 5-7 minutes until capsicum is tender but still slightly crunchy.",
        "Sprinkle garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 5, 
      name: "Mutton Aloo Gobhi",
      tagline: "Mutton with potato and cauliflower - hearty winter meal",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Heat oil in a large pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 2 cups of warm water. Stir to combine.",
        "Cover and cook on medium-low heat for 40-45 minutes until mutton is almost tender.",
        "Add cauliflower florets and cook for 10-12 minutes until cauliflower is tender but not mushy.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 6, 
      name: "Mutton Aloo Palak",
      tagline: "Mutton with potato and spinach - healthy and delicious",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - medium pieces",
        "2 medium potatoes - peeled and cut into cubes",
        "500g fresh spinach (palak) - blanched and blended into smooth puree",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1.5 cups of warm water. Stir to combine.",
        "Cover and cook on medium-low heat for 40-45 minutes until mutton is almost tender.",
        "Add spinach puree and mix well. Simmer for 12-15 minutes on low heat.",
        "Sprinkle garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 7, 
      name: "Mutton Aloo Tamatar",
      tagline: "Mutton with potato and tomato gravy - tangy and delicious",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
        "2 medium potatoes - peeled and cut into cubes",
        "4 medium ripe tomatoes - finely chopped",
        "2 medium onions - finely chopped",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 8-10 minutes until they become completely mushy and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 2 cups of warm water. Stir to combine.",
        "Cover and cook on medium-low heat for 45-50 minutes until mutton and potatoes are completely tender.",
        "Garnish with fresh coriander leaves and serve hot with roti or naan."
      ]
    },
    { 
      id: 8, 
      name: "Mutton Aloo Beans",
      tagline: "Mutton with potato and green beans - wholesome meal",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato slices and 1.5 cups of warm water. Stir to combine.",
        "Cover and cook on medium-low heat for 40-45 minutes until mutton is almost tender.",
        "Add green beans and cook for 12-15 minutes until beans are tender.",
        "Serve hot with roti or paratha."
      ]
    },

    // ==================== MUTTON + MATAR BASED (5) ====================
    { 
      id: 9, 
      name: "Mutton Matar",
      tagline: "Classic mutton and peas curry - sweet and savory",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g mutton - medium pieces with bones",
        "1 cup fresh or frozen green peas",
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
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a heavy-bottomed pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant and raw smell disappears.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned on all sides.",
        "Add tomato puree and cook for 7-8 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 2 cups of warm water. Stir well to combine.",
        "Cover and cook on medium-low heat for 45-50 minutes until mutton is almost tender.",
        "Add green peas and cook for another 10-12 minutes until peas are tender and gravy has thickened.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan, roti, or steamed rice."
      ]
    },
    { 
      id: 10, 
      name: "Mutton Matar Malai",
      tagline: "Creamy mutton with peas - rich and luxurious",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g mutton - boneless, cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton cubes and fry for 8-10 minutes until well-browned on all sides.",
        "Add white pepper powder and salt. Mix well and cook for 2 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is completely tender.",
        "Add green peas and cook for 5-7 minutes until peas are tender.",
        "Reduce heat to low. Add cream and simmer for 5-7 minutes. Do not boil after adding cream.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 11, 
      name: "Mutton Matar Pulao",
      tagline: "Mutton and peas rice pilaf - one-pot wonder",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup fresh or frozen green peas",
        "2 cups basmati rice - washed and soaked for 30 minutes",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "4 whole cloves",
        "2 green cardamom pods",
        "1 small cinnamon stick",
        "1 bay leaf",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil or ghee",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash basmati rice thoroughly under running water until water runs clear. Soak in water for 30 minutes, then drain completely.",
        "Heat oil or ghee in a large heavy-bottomed pot over medium heat. Add whole spices (cloves, cardamom, cinnamon, bay leaf) and cumin seeds. Let them crackle for 30 seconds.",
        "Add thinly sliced onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add salt and 3 cups of warm water. Bring to a boil.",
        "Cover and cook for 30-35 minutes until mutton is half done.",
        "Add soaked and drained rice and green peas. Stir gently to combine.",
        "Cover the pot with a tight-fitting lid. Reduce heat to low and cook for 15-20 minutes until the rice is fully cooked and water is absorbed.",
        "Do not stir while cooking. Let it rest for 5 minutes after turning off the heat.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with raita (yogurt sauce) and salad."
      ]
    },
    { 
      id: 12, 
      name: "Mutton Matar Korma",
      tagline: "Rich mutton and peas korma - royal Mughlai dish",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup fresh or frozen green peas",
        "1 cup plain yogurt - beaten until smooth",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil or ghee",
        "Salt to taste",
        "Fresh coriander leaves for garnish",
        "2 tablespoons fried onions for garnish"
      ],
      steps: [
        "Heat oil or ghee in a pan over medium heat. Add thinly sliced onions and fry until golden brown, about 7-8 minutes.",
        "Remove half of the fried onions and set aside for garnish.",
        "Add ginger-garlic paste to the remaining onions in the pan and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned on all sides.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Reduce heat to low. Add beaten yogurt slowly, stirring continuously to prevent curdling.",
        "Add 1 cup of warm water. Stir to combine.",
        "Cover and cook on medium-low heat for 45-50 minutes until mutton is completely tender.",
        "Add green peas and cook for 10-12 minutes until peas are tender.",
        "Sprinkle garam masala and garnish with reserved fried onions and fresh coriander leaves.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 13, 
      name: "Mutton Matar Keema",
      tagline: "Mutton mince with peas - quick and flavorful",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
        "500g mutton mince (ground mutton)",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton mince and fry for 10-12 minutes until the color changes and it's no longer pink. Break up any lumps with a spoon.",
        "Add chopped tomatoes and cook for 6-7 minutes until they become soft and mushy.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 5-7 minutes.",
        "Add 1/2 cup of warm water. Cover and cook for 20-25 minutes until the mince is fully cooked.",
        "Add green peas and cook for 10-12 minutes until peas are tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan, paratha, or roti."
      ]
    },

    // ==================== MUTTON + PALAK BASED (4) ====================
    { 
      id: 14, 
      name: "Mutton Palak",
      tagline: "Mutton in spinach gravy - healthy and delicious",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - medium pieces",
        "500g fresh spinach (palak) - blanched and blended into smooth puree",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is tender.",
        "Add spinach puree and mix well. Simmer for 12-15 minutes on low heat.",
        "Sprinkle garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 15, 
      name: "Mutton Palak Malai",
      tagline: "Creamy mutton spinach curry - rich and smooth",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - boneless, cut into cubes",
        "500g fresh spinach - blanched and blended into smooth puree",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton cubes and fry for 8-10 minutes until well-browned.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is completely tender.",
        "Add spinach puree and cook for 10-12 minutes, stirring occasionally.",
        "Reduce heat to low. Add cream and simmer for 5-7 minutes. Do not boil after adding cream.",
        "Sprinkle garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 16, 
      name: "Mutton Palak Aloo",
      tagline: "Mutton with spinach and potato - complete meal",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - medium pieces",
        "2 medium potatoes - peeled and cut into cubes",
        "500g fresh spinach - blanched and blended into smooth puree",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add spinach puree and mix well. Simmer for 12-15 minutes.",
        "Sprinkle garam masala and serve hot with roti."
      ]
    },
    { 
      id: 17, 
      name: "Mutton Palak Matar",
      tagline: "Mutton with spinach and peas - nutritious and tasty",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup fresh or frozen green peas",
        "500g fresh spinach - blanched and blended into smooth puree",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add green peas and spinach puree. Mix well and cook for 12-15 minutes.",
        "Sprinkle garam masala and serve hot with roti."
      ]
    },

    // ==================== MUTTON + SHIMLA MIRCH BASED (4) ====================
    { 
      id: 18, 
      name: "Mutton Shimla Mirch",
      tagline: "Mutton with capsicum - colorful and flavorful",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - boneless, cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton cubes and fry for 8-10 minutes until well-browned on all sides.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is completely tender.",
        "Add capsicum cubes and cook for 5-7 minutes until capsicum is tender but still slightly crunchy.",
        "Sprinkle garam masala and serve hot with naan or roti."
      ]
    },
    { 
      id: 19, 
      name: "Mutton Shimla Mirch Aloo",
      tagline: "Mutton with capsicum and potato - hearty meal",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is tender.",
        "Add capsicum cubes and cook for 5-7 minutes until capsicum is tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 20, 
      name: "Mutton Shimla Mirch Matar",
      tagline: "Mutton with capsicum and peas - colorful and nutritious",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add green peas and cook for 5-7 minutes.",
        "Add capsicum cubes and cook for 5-7 minutes until capsicum is tender.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 21, 
      name: "Mutton Shimla Mirch Pyaz",
      tagline: "Mutton with capsicum and onion - simple and delicious",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - boneless, cut into strips",
        "2 medium capsicum - sliced into strips",
        "2 medium onions - sliced (divided use)",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and half of the sliced onions. Sauté for 4-5 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton strips and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is completely tender.",
        "Add capsicum strips and remaining sliced onions. Cook on high heat for 5-7 minutes until vegetables are tender-crisp.",
        "Serve hot with roti or naan."
      ]
    },

    // ==================== MUTTON + GOBHI BASED (3) ====================
    { 
      id: 22, 
      name: "Mutton Gobhi",
      tagline: "Mutton with cauliflower - healthy and delicious",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add cauliflower florets and cook for 10-12 minutes until cauliflower is tender but not mushy.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 23, 
      name: "Mutton Gobhi Aloo",
      tagline: "Mutton with cauliflower and potato - complete meal",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add cauliflower florets and cook for 10-12 minutes until all vegetables are tender.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 24, 
      name: "Mutton Gobhi Matar",
      tagline: "Mutton with cauliflower and peas - nutritious meal",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add cauliflower florets and green peas. Cook for 10-12 minutes until vegetables are tender.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },

    // ==================== MUTTON + BAINGAN BASED (3) ====================
    { 
      id: 25, 
      name: "Mutton Baingan",
      tagline: "Mutton with eggplant - unique and flavorful",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add eggplant cubes and mix gently to avoid breaking them. Cook for 10-12 minutes until eggplants are tender.",
        "Garnish with fresh coriander leaves and serve hot with roti or naan."
      ]
    },
    { 
      id: 26, 
      name: "Mutton Baingan Aloo",
      tagline: "Mutton with eggplant and potato - hearty meal",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add eggplant cubes and cook for 10-12 minutes until all vegetables are tender.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 27, 
      name: "Mutton Baingan Bharta",
      tagline: "Mutton with mashed eggplant - smoky and delicious",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton mince (ground mutton)",
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
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Roast eggplants directly on gas flame until the skin is charred and flesh is soft (about 10-15 minutes). Turn occasionally for even roasting.",
        "Let the eggplants cool completely, then peel off the charred skin carefully. Mash the soft pulp with a fork. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton mince and fry for 10-12 minutes until well-browned. Break up any lumps with a spoon.",
        "Add chopped tomatoes and green chilies. Cook for 6-7 minutes until tomatoes are soft and oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add mashed eggplant and mix thoroughly. Cook for 8-10 minutes, stirring occasionally.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with roti or naan."
      ]
    },

    // ==================== MUTTON + TORI/LOUKI BASED (3) ====================
    { 
      id: 28, 
      name: "Mutton Tori",
      tagline: "Mutton with ridge gourd - light and healthy",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
        "500g tori (ridge gourd) - peeled and cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add tori cubes and cook for 10-12 minutes until tori is tender. Tori releases water, so the gravy will become thinner.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 29, 
      name: "Mutton Louki",
      tagline: "Mutton with bottle gourd - light and nutritious",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
        "500g louki (bottle gourd) - peeled and cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add louki cubes and cook for 12-15 minutes until louki is tender and translucent.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 30, 
      name: "Mutton Tori Aloo",
      tagline: "Mutton with ridge gourd and potato - wholesome meal",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add tori cubes and cook for 10-12 minutes until all vegetables are tender.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    }
  ];

  // More recipes - KARELA, METHI, BEANS, TINDA, KADDU, ARVI, MIX VEGETABLES, SEASONAL
  const moreMuttonVegRecipes = [
    // ==================== MUTTON + KARELA BASED (3) ====================
    { 
      id: 31, 
      name: "Mutton Karela",
      tagline: "Mutton with bitter gourd - unique and healthy",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "3 medium karela (bitter gourd) - thinly sliced",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon dry mango powder (amchur)",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Rub karela slices with 1 teaspoon salt and set aside for 30 minutes to reduce bitterness. Rinse well with water and squeeze out the bitter juice completely.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add karela slices and cook for 10-12 minutes until karela is tender.",
        "Sprinkle amchur powder, mix well, and garnish with fresh coriander leaves.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 32, 
      name: "Mutton Karela Aloo",
      tagline: "Mutton with bitter gourd and potato - balanced flavors",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Rub karela slices with salt, set aside for 30 minutes. Rinse well and squeeze out bitter juice.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add karela slices and cook for 10-12 minutes until all are tender.",
        "Sprinkle amchur powder and garnish with fresh coriander leaves.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 33, 
      name: "Mutton Karela Masala",
      tagline: "Spicy mutton with bitter gourd - bold flavors",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - medium pieces",
        "3 medium karela - thinly sliced",
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
        "Rub karela slices with salt, set aside for 30 minutes. Rinse well and squeeze out bitter juice.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add tomato puree and cook for 7-8 minutes until oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is tender.",
        "Add karela slices and cook for 10-12 minutes until karela is tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan or roti."
      ]
    },

    // ==================== MUTTON + METHI BASED (3) ====================
    { 
      id: 34, 
      name: "Mutton Methi",
      tagline: "Mutton with fenugreek leaves - aromatic and healthy",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - medium pieces",
        "1 large bunch fresh methi (fenugreek leaves) - washed and finely chopped",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add chopped methi leaves and cook for 5-7 minutes until the leaves wilt and are well incorporated.",
        "Garnish with fresh coriander leaves and serve hot with roti or naan."
      ]
    },
    { 
      id: 35, 
      name: "Mutton Methi Malai",
      tagline: "Creamy mutton with fenugreek - rich and flavorful",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - boneless, cut into cubes",
        "1 large bunch fresh methi - finely chopped",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton cubes and fry for 8-10 minutes until well-browned.",
        "Add white pepper powder and salt. Mix well and cook for 2 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is completely tender.",
        "Add chopped methi and cook for 5-7 minutes until wilted.",
        "Reduce heat to low. Add cream and simmer for 5-7 minutes. Do not boil after adding cream.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 36, 
      name: "Mutton Methi Aloo",
      tagline: "Mutton with fenugreek and potato - hearty winter meal",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add chopped methi and cook for 5-7 minutes until wilted.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },

    // ==================== MUTTON + BEANS BASED (3) ====================
    { 
      id: 37, 
      name: "Mutton Beans",
      tagline: "Mutton with green beans - simple and delicious",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - boneless, cut into cubes",
        "200g fresh green beans - washed and chopped into 1-inch pieces",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton cubes and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add green beans and cook for 12-15 minutes until beans are tender.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 38, 
      name: "Mutton Beans Aloo",
      tagline: "Mutton with beans and potato - wholesome meal",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add green beans and cook for 12-15 minutes until all vegetables are tender.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 39, 
      name: "Mutton Beans Matar",
      tagline: "Mutton with beans and peas - colorful and nutritious",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add green beans and green peas. Cook for 12-15 minutes until vegetables are tender.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },

    // ==================== MUTTON + TINDA/KADDU BASED (4) ====================
    { 
      id: 40, 
      name: "Mutton Tinday",
      tagline: "Mutton with apple gourd - light and refreshing",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
        "500g tinday (apple gourd) - peeled and cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add tinday cubes and cook for 12-15 minutes until tinday is tender.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 41, 
      name: "Mutton Kaddu",
      tagline: "Mutton with pumpkin - sweet and savory",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
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
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add pumpkin cubes and jaggery. Cook for 12-15 minutes until pumpkin is tender.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 42, 
      name: "Mutton Kaddu Aloo",
      tagline: "Mutton with pumpkin and potato - hearty winter dish",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
        "300g kaddu (pumpkin) - peeled and cut into cubes",
        "2 medium potatoes - peeled and cut into cubes",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add pumpkin cubes and cook for 12-15 minutes until all vegetables are tender.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 43, 
      name: "Mutton Kaddu Ka Bharta",
      tagline: "Mashed pumpkin with mutton - unique and flavorful",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton mince (ground mutton)",
        "500g kaddu (pumpkin) - roasted and mashed",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 green chilies - finely chopped",
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
        "Roast pumpkin pieces in an oven or on a tawa until soft. Peel and mash the flesh. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton mince and fry for 10-12 minutes until well-browned.",
        "Add chopped tomatoes and green chilies. Cook for 6-7 minutes until tomatoes are soft and oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add mashed pumpkin and mix thoroughly. Cook for 8-10 minutes, stirring occasionally.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with roti or naan."
      ]
    },

    // ==================== MUTTON + ARVI BASED (2) ====================
    { 
      id: 44, 
      name: "Mutton Arvi",
      tagline: "Mutton with colocasia - unique and tasty",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
        "500g arvi (colocasia) - boiled and peeled",
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
        "Boil arvi in water for about 20 minutes until tender. Let cool, then peel and slice into rounds. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add arvi slices and mix gently to avoid breaking them. Cook for 8-10 minutes.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },
    { 
      id: 45, 
      name: "Mutton Arvi Aloo",
      tagline: "Mutton with colocasia and potato - hearty meal",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
        "300g arvi (colocasia) - boiled and peeled",
        "2 medium potatoes - peeled and cut into cubes",
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
        "Boil arvi until tender, peel and slice. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add arvi slices and mix gently. Cook for 8-10 minutes until all vegetables are tender.",
        "Garnish with fresh coriander leaves and serve hot with roti."
      ]
    },

    // ==================== MUTTON + MIX VEGETABLES (5) ====================
    { 
      id: 46, 
      name: "Mutton Mix Vegetable",
      tagline: "Mutton with mixed vegetables - complete nutritious meal",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup cauliflower florets",
        "1 cup fresh or frozen green peas",
        "1 cup carrots - peeled and cut into cubes",
        "1 cup green beans - chopped into 1-inch pieces",
        "2 medium potatoes - peeled and cut into cubes",
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
        "Heat oil in a large pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add tomato puree and cook for 7-8 minutes until oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add all other vegetables (cauliflower, peas, carrots, beans) and cook for 12-15 minutes until all vegetables are tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 47, 
      name: "Mutton Jalfrezi",
      tagline: "Mutton with mixed veggies in thick gravy - restaurant style",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - boneless, cut into strips",
        "1 medium capsicum - cut into strips",
        "1 medium carrot - thinly sliced",
        "1 medium onion - thinly sliced",
        "1 medium tomato - cut into wedges",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1 tablespoon soy sauce",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a wok or pan over high heat. Add cumin seeds and onions. Sauté for 3-4 minutes until soft.",
        "Add ginger-garlic paste and cook for 1-2 minutes until fragrant.",
        "Add mutton strips and fry for 8-10 minutes until well-browned.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water. Cover and cook for 45-50 minutes until mutton is completely tender.",
        "Add all vegetables and stir-fry on high heat for 5-7 minutes until vegetables are tender-crisp.",
        "Add soy sauce and mix well. Cook for 2-3 minutes.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with fried rice or noodles."
      ]
    },
    { 
      id: 48, 
      name: "Mutton Karahi with Veggies",
      tagline: "Traditional karahi with mutton and vegetables",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - with bones, curry cut",
        "2 medium tomatoes - chopped",
        "2 green chilies - slit lengthwise",
        "1 medium capsicum - sliced",
        "1 medium onion - sliced",
        "1 tablespoon ginger - julienned",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili flakes",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a wok (karahi) over high heat. Add mutton pieces and fry until well-browned, about 8-10 minutes.",
        "Add ginger juliennes and green chilies. Fry for 2-3 minutes until fragrant.",
        "Add chopped tomatoes and cook for 6-7 minutes until they become soft and mushy.",
        "Add red chili flakes, cumin seeds, and salt. Mix well.",
        "Add 1 cup of warm water. Cover and cook for 45-50 minutes until mutton is completely tender.",
        "Add capsicum and onion slices. Cook on high heat for 3-4 minutes until vegetables are tender-crisp.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 49, 
      name: "Mutton Handi with Veg",
      tagline: "Slow-cooked mutton with vegetables - rich and aromatic",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
        "1 cup mixed vegetables (carrots, peas, beans)",
        "1 cup plain yogurt - beaten until smooth",
        "2 medium onions - finely chopped",
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
        "Heat oil in a handi or heavy-bottomed pot over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Reduce heat to low. Add beaten yogurt slowly, stirring continuously to prevent curdling.",
        "Add 1 cup of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add mixed vegetables and cook for 12-15 minutes until vegetables are tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 50, 
      name: "Mutton Vegetable Curry",
      tagline: "Simple mutton and vegetable curry - everyday comfort food",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton - medium pieces",
        "2 cups mixed vegetables (carrots, peas, beans, cauliflower)",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
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
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add tomato puree and cook for 7-8 minutes until oil separates from the masala.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until mutton is almost tender.",
        "Add mixed vegetables and cook for 12-15 minutes until vegetables are tender.",
        "Garnish with fresh coriander leaves and serve hot with rice or roti."
      ]
    },

    // ==================== MUTTON + SEASONAL VEGETABLES (5) ====================
    { 
      id: 51, 
      name: "Mutton Saag",
      tagline: "Mutton with mustard greens - Punjabi winter specialty",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - medium pieces",
        "500g mustard greens (sarson) - washed and chopped",
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
        "Boil mustard greens in water until soft, about 10-15 minutes. Drain and blend to a coarse paste. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add the saag (mustard greens paste) and 1 cup of warm water.",
        "Cover and cook for 45-50 minutes until mutton is completely tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with makai ki roti (cornbread) or naan."
      ]
    },
    { 
      id: 52, 
      name: "Mutton Sarson Ka Saag",
      tagline: "Authentic Punjabi mutton with mustard greens",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g mutton - medium pieces",
        "500g sarson (mustard greens) - chopped",
        "100g bathua (pigweed) - optional",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 tablespoon cornmeal (makki ka atta)",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Boil mustard greens (and bathua if using) in water until soft, about 10-15 minutes. Drain and blend to a coarse paste.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 6-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft and oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add the saag and cornmeal mixed with a little water.",
        "Cover and simmer for 45-50 minutes, stirring occasionally, until mutton is tender.",
        "Garnish with fresh coriander leaves and serve hot with makai ki roti."
      ]
    },
    { 
      id: 53, 
      name: "Mutton Lauki Kofta",
      tagline: "Mutton with bottle gourd dumplings - unique and delicious",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton mince (ground mutton)",
        "500g lauki (bottle gourd) - peeled and grated",
        "1 cup besan (gram flour)",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "Oil for deep frying",
        "2 tablespoons cooking oil for gravy",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Squeeze out excess water from grated lauki. Mix with mutton mince, besan, and salt to form a soft dough.",
        "Shape the mixture into small lemon-sized balls (kofta).",
        "Heat oil for deep frying in a pan over medium heat. Fry the kofta balls until golden brown, about 5-7 minutes. Drain on paper towels and set aside.",
        "For gravy: Heat 2 tablespoons oil in a separate pan over medium heat. Add cumin seeds and onions. Sauté until golden brown, about 6-7 minutes.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 7-8 minutes until oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 2 cups of warm water and bring to a boil. Simmer for 5-7 minutes.",
        "Add the fried kofta and simmer for 8-10 minutes on low heat.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan or rice."
      ]
    },
    { 
      id: 54, 
      name: "Mutton Vegetable Pulao",
      tagline: "Fragrant rice with mutton and vegetables - one-pot wonder",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      ingredients: [
        "500g mutton - medium pieces",
        "2 cups basmati rice - washed and soaked for 30 minutes",
        "1 cup mixed vegetables (carrots, peas, beans)",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "4 whole cloves",
        "2 green cardamom pods",
        "1 small cinnamon stick",
        "1 bay leaf",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil or ghee",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash basmati rice thoroughly under running water until water runs clear. Soak in water for 30 minutes, then drain completely.",
        "Heat oil or ghee in a large heavy-bottomed pot over medium heat. Add whole spices (cloves, cardamom, cinnamon, bay leaf) and cumin seeds. Let them crackle for 30 seconds.",
        "Add thinly sliced onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add mixed vegetables and salt. Cook for 5-7 minutes, stirring occasionally.",
        "Add 3 cups of warm water and bring to a boil. Cook for 30-35 minutes until mutton is half done.",
        "Add soaked and drained rice. Stir gently to combine.",
        "Cover the pot with a tight-fitting lid. Reduce heat to low and cook for 15-20 minutes until the rice is fully cooked and water is absorbed.",
        "Do not stir while cooking. Let it rest for 5 minutes after turning off the heat.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with raita (yogurt sauce) and salad."
      ]
    },
    { 
      id: 55, 
      name: "Mutton Pumpkin Kofta",
      tagline: "Mutton and pumpkin dumplings in rich gravy",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g mutton mince (ground mutton)",
        "500g kaddu (pumpkin) - grated",
        "1 cup besan (gram flour)",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "Oil for deep frying",
        "2 tablespoons cooking oil for gravy",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Squeeze out excess water from grated pumpkin. Mix with mutton mince, besan, and salt to form a soft dough.",
        "Shape the mixture into small lemon-sized balls (kofta).",
        "Heat oil for deep frying in a pan over medium heat. Fry the kofta balls until golden brown, about 5-7 minutes. Drain on paper towels and set aside.",
        "For gravy: Heat 2 tablespoons oil in a separate pan over medium heat. Add cumin seeds and onions. Sauté until golden brown, about 6-7 minutes.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 7-8 minutes until oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 2 cups of warm water and bring to a boil. Simmer for 5-7 minutes.",
        "Add the fried kofta and simmer for 8-10 minutes on low heat.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan or rice."
      ]
    }
  ];

  // Combine both arrays
  const allMuttonVegRecipes = [...muttonVegRecipes, ...moreMuttonVegRecipes];

  // ==================== FUNCTIONS & LOGIC ====================

  const recipesList = allMuttonVegRecipes;

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
    <div className="mutton-veg-page">
      <header className="mutton-veg-header">
        <div className="mutton-veg-header-content">
          <h1 className="mutton-veg-title">Mutton + Vegetables</h1>
          <p className="mutton-veg-description">
            Discover 55+ delicious mutton and vegetable recipes - rich, flavorful, and homestyle taste
          </p>
        </div>
      </header>

      <main className="mutton-veg-main">
        <div className="mutton-veg-grid-section">
          <div className="mutton-veg-grid">
            {recipesList.map((recipe) => (
              <div
                key={recipe.id}
                className="mutton-veg-card"
                onClick={() => handleRecipeClick(recipe)}
              >
                <div
                  className="mutton-veg-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                />
                <div className="mutton-veg-card-content">
                  <h3 className="mutton-veg-card-title">{recipe.name}</h3>
                  <p className="mutton-veg-card-description">{recipe.tagline}</p>
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
        <div className="mutton-veg-modal-overlay" onClick={handleCloseModal}>
          <div
            className="mutton-veg-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button className="mutton-veg-modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="mutton-veg-modal-header">
              <div className="mutton-veg-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="mutton-veg-modal-content">
              <div className="mutton-veg-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="mutton-veg-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="mutton-veg-ingredient-item">
                      <span className="mutton-veg-ingredient-bullet">•</span>
                      <span className="mutton-veg-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mutton-veg-modal-steps">
                <h3>Steps to Make</h3>
                <div className="mutton-veg-steps-list">
                  {selectedRecipe.steps.map((step, index) => (
                    <div key={index} className="mutton-veg-step-item">
                      <span className="mutton-veg-step-number">{index + 1}.</span>
                      <span className="mutton-veg-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mutton-veg-modal-voice-container">
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

export default RecipesVegMutton;