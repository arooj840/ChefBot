import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipesPureMutton.css';

const RecipesPureMutton = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All Pure Mutton Recipes (40+ recipes) with detailed instructions
  const muttonRecipes = [
    // ==================== MUTTON CURRIES (8) ====================
    { 
      id: 1, 
      name: "Mutton Curry",
      tagline: "Classic Pakistani mutton curry - rich and flavorful",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces with bones",
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
        "2 cups warm water"
      ],
      steps: [
        "Heat oil in a large heavy-bottomed pot over medium heat. Add cumin seeds and let them crackle for 30 seconds until fragrant.",
        "Add finely chopped onions and sauté for 6-7 minutes until they turn golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until the raw smell disappears.",
        "Add mutton pieces and fry on high heat for 8-10 minutes until the mutton is well-browned on all sides.",
        "Add chopped tomatoes and cook for 6-7 minutes until they become soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes until the spices are fragrant.",
        "Add 2 cups of warm water and bring to a boil. Stir well to combine.",
        "Cover the pot and cook on medium-low heat for 45-50 minutes until the mutton is completely tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves and green chilies.",
        "Serve hot with naan, roti, or steamed rice."
      ]
    },
    { 
      id: 2, 
      name: "Mutton Karahi",
      tagline: "Traditional karahi style mutton - bold and spicy",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "4 medium tomatoes - finely chopped",
        "2 tablespoons ginger - julienned",
        "2 tablespoons garlic - finely chopped",
        "4 green chilies - slit lengthwise",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili flakes",
        "1 teaspoon black pepper powder",
        "1 teaspoon salt",
        "1/2 cup cooking oil",
        "Fresh coriander leaves for garnish",
        "1 lemon - juiced"
      ],
      steps: [
        "Heat oil in a wok (karahi) over high heat. Add mutton pieces and fry for 8-10 minutes until the mutton changes color and is well-browned.",
        "Add julienned ginger, chopped garlic, and slit green chilies. Cook for 2-3 minutes until fragrant.",
        "Add chopped tomatoes and cook for 8-10 minutes until they become soft and the oil separates.",
        "Add cumin seeds, red chili flakes, black pepper powder, and salt. Mix well.",
        "Cook on high heat for 10-15 minutes, stirring frequently, until the oil comes on top and the mutton is tender.",
        "The gravy should be thick and clinging to the mutton pieces.",
        "Turn off the heat. Sprinkle lemon juice and garnish with fresh coriander leaves.",
        "Serve immediately with hot naan or roti."
      ]
    },
    { 
      id: 3, 
      name: "Mutton Handi",
      tagline: "Slow-cooked creamy mutton - rich and flavorful",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "1 cup plain yogurt - beaten until smooth",
        "2 medium onions - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1/4 cup heavy cream",
        "Fresh coriander leaves for garnish",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil in a handi or heavy-bottomed pot over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until the mutton is well-browned.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Reduce heat to low. Add beaten yogurt slowly, stirring continuously to prevent curdling.",
        "Add 1 cup of warm water. Cover and cook on low heat for 45-50 minutes until the mutton is tender and the gravy has thickened.",
        "Add cream and garam masala. Simmer for 5-7 minutes on low heat.",
        "Garnish with fresh coriander leaves and serve hot with naan or roti."
      ]
    },
    { 
      id: 4, 
      name: "Mutton Qorma",
      tagline: "Rich and creamy mutton qorma - royal dish",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "1 cup plain yogurt - beaten until smooth",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil or ghee",
        "Salt to taste",
        "4 whole cloves",
        "2 green cardamom pods",
        "1 small cinnamon stick",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil or ghee in a pan over medium heat. Add whole spices (cloves, cardamom, cinnamon) and let them crackle for 30 seconds.",
        "Add sliced onions and fry for 7-8 minutes until dark golden brown.",
        "Remove half of the fried onions and set aside for garnish.",
        "Add ginger-garlic paste to the remaining onions and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned on all sides.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Reduce heat to low. Add beaten yogurt slowly, stirring continuously to prevent curdling.",
        "Add 1 cup of warm water. Cover and cook on low heat for 50-60 minutes until the mutton is completely tender.",
        "Sprinkle garam masala and garnish with reserved fried onions.",
        "Serve hot with naan or steamed rice."
      ]
    },
    { 
      id: 5, 
      name: "Mutton Rogan Josh",
      tagline: "Kashmiri style mutton rogan josh - aromatic and rich",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon fennel powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1/2 cup plain yogurt - beaten",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, fennel powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add beaten yogurt and stir well. Cook for 5 minutes.",
        "Add 1 cup of warm water. Cover and cook for 45-50 minutes until the mutton is tender.",
        "Sprinkle garam masala and serve hot with naan or rice."
      ]
    },
    { 
      id: 6, 
      name: "Mutton Do Pyaza",
      tagline: "Mutton with double onions - sweet and savory",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "3 medium onions - thinly sliced (divided use)",
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
        "Add half of the sliced onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water. Cover and cook for 45-50 minutes until the mutton is tender.",
        "Add the remaining raw sliced onions and garam masala.",
        "Cook for 5-7 minutes until the onions are slightly soft but still crunchy.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 7, 
      name: "Mutton Bhuna",
      tagline: "Dry bhuna mutton - thick and spicy",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1/2 cup warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 7-8 minutes until dark golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 10-12 minutes until well-browned on all sides.",
        "Add chopped tomatoes and cook for 6-7 minutes until they become dry and the oil separates.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1/2 cup of warm water. Cover and cook on low heat for 45-50 minutes until the mutton is tender.",
        "Cook uncovered for the last 10 minutes to dry out the gravy.",
        "The final dish should have a thick, dry consistency with the masala clinging to the mutton.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 8, 
      name: "Mutton Jalfrezi",
      tagline: "Spicy mutton with thick gravy - restaurant style",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - boneless, cut into cubes",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 medium capsicum - sliced into strips",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton cubes and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water. Cover and cook for 45-50 minutes until the mutton is tender.",
        "Add capsicum strips and cook for 5-7 minutes on high heat until the capsicum is tender-crisp.",
        "Sprinkle garam masala and serve hot with naan or roti."
      ]
    },

    // ==================== MUTTON KARAHI VARIETIES (4) ====================
    { 
      id: 9, 
      name: "White Mutton Karahi",
      tagline: "Creamy white karahi - mild and rich",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "1 cup plain yogurt - beaten until smooth",
        "2 tablespoons ginger paste",
        "2 tablespoons garlic paste",
        "4 green chilies - slit",
        "1 teaspoon white pepper powder",
        "1 teaspoon black pepper powder",
        "1 teaspoon salt",
        "1/2 cup cooking oil",
        "Fresh coriander leaves for garnish",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil in a wok (karahi) over medium heat. Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add ginger paste, garlic paste, and green chilies. Cook for 2-3 minutes until fragrant.",
        "Add beaten yogurt and cook on high heat for 5-7 minutes until the oil separates.",
        "Add white pepper powder, black pepper powder, and salt. Mix well.",
        "Add 1 cup of warm water. Cover and cook for 35-40 minutes until the mutton is tender.",
        "The gravy should be thick and white in color.",
        "Garnish with fresh coriander leaves and serve hot with naan."
      ]
    },
    { 
      id: 10, 
      name: "Peshawari Mutton Karahi",
      tagline: "Peshawar style karahi - rustic and flavorful",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "4 medium tomatoes - chopped",
        "2 tablespoons ginger - julienned",
        "2 tablespoons garlic - chopped",
        "4 green chilies - whole",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili flakes",
        "1 teaspoon black pepper powder",
        "1 teaspoon salt",
        "1/2 cup cooking oil"
      ],
      steps: [
        "Heat oil in a karahi over high heat. Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add ginger juliennes, chopped garlic, and whole green chilies. Cook for 2-3 minutes.",
        "Add chopped tomatoes and cook for 8-10 minutes until they become soft and the oil separates.",
        "Add cumin seeds, red chili flakes, black pepper powder, and salt. Mix well.",
        "Cook on high heat for 15-20 minutes until the oil separates and the mutton is tender.",
        "Do not add water - the tomatoes provide enough moisture.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 11, 
      name: "Spicy Mutton Karahi",
      tagline: "Extra spicy karahi - for heat lovers",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "4 medium tomatoes - chopped",
        "2 tablespoons ginger-garlic paste",
        "4 green chilies - slit",
        "2 teaspoons red chili powder",
        "1 teaspoon cumin seeds",
        "1 teaspoon black pepper powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1/2 cup warm water"
      ],
      steps: [
        "Heat oil in a karahi over high heat. Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add ginger-garlic paste and green chilies. Cook for 2-3 minutes.",
        "Add chopped tomatoes and cook for 8-10 minutes until soft and oil separates.",
        "Add red chili powder, cumin seeds, black pepper powder, and salt. Mix well.",
        "Add 1/2 cup warm water and cook for 35-40 minutes until the mutton is tender.",
        "The gravy should be thick and very spicy.",
        "Serve hot with naan and raita."
      ]
    },
    { 
      id: 12, 
      name: "Dry Mutton Karahi",
      tagline: "Dry karahi with no gravy - perfect with naan",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "4 green chilies - slit",
        "1 teaspoon cumin seeds",
        "2 teaspoons red chili powder",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a karahi over high heat. Add mutton pieces and fry for 10-12 minutes until golden brown.",
        "Add ginger-garlic paste and green chilies. Cook for 2-3 minutes.",
        "Add chopped tomatoes and cook for 8-10 minutes until completely dry and the oil separates.",
        "Add cumin seeds, red chili powder, and salt. Mix well.",
        "Cook on high heat for 20-25 minutes until the mutton is tender and the dish is completely dry.",
        "The masala should coat the mutton pieces evenly.",
        "Serve hot with naan and onion salad."
      ]
    },

    // ==================== MUTTON MASALA (5) ====================
    { 
      id: 13, 
      name: "Mutton Masala",
      tagline: "Spicy mutton masala - bold and aromatic",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
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
        "1.5 cups warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1.5 cups of warm water. Cover and cook for 45-50 minutes until the mutton is tender.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with naan or steamed rice."
      ]
    },
    { 
      id: 14, 
      name: "Mutton Tikka Masala",
      tagline: "Restaurant style tikka masala - creamy and rich",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton tikka pieces - pre-cooked",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon kasuri methi (dried fenugreek leaves)",
        "1/2 cup heavy cream",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water and bring to a simmer.",
        "Add the mutton tikka pieces and cook for 20-25 minutes until well combined.",
        "Add cream and kasuri methi. Simmer for 5-7 minutes on low heat.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 15, 
      name: "Mutton Butter Masala",
      tagline: "Creamy butter mutton - rich and indulgent",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - boneless, cut into cubes",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "2 teaspoons red chili powder",
        "1/2 cup heavy cream",
        "2 tablespoons butter",
        "1 teaspoon kasuri methi",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1 cup warm water"
      ],
      steps: [
        "Pressure cook the mutton with salt and 1 cup of water until tender. Set aside.",
        "Heat butter and oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 6-7 minutes until the butter separates from the masala.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked mutton along with the stock. Simmer for 15-20 minutes.",
        "Add cream and kasuri methi. Simmer for 5-7 minutes on low heat.",
        "Serve hot with butter naan."
      ]
    },
    { 
      id: 16, 
      name: "Mutton Lababdar",
      tagline: "Rich and creamy lababdar - royal Mughlai dish",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/4 cup heavy cream",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1 cup warm water"
      ],
      steps: [
        "Pressure cook the mutton with salt until tender. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates from the masala.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked mutton and 1 cup of water. Simmer for 15-20 minutes.",
        "Add cream and garam masala. Simmer for 5-7 minutes.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 17, 
      name: "Mutton Kolhapuri",
      tagline: "Spicy Kolhapuri style mutton - very hot and flavorful",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1 tablespoon grated coconut",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add finely chopped onions and sauté for 6-7 minutes until dark brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft.",
        "Add red chili powder, turmeric powder, garam masala, salt, and grated coconut. Mix well.",
        "Add 1 cup of warm water. Cover and cook for 45-50 minutes until the mutton is tender.",
        "Serve hot with steamed rice or roti."
      ]
    },

    // ==================== MUTTON ROGAN JOSH VARIETIES (3) ====================
    { 
      id: 18, 
      name: "Kashmiri Rogan Josh",
      tagline: "Authentic Kashmiri rogan josh - aromatic and red",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon fennel powder",
        "1 teaspoon dry ginger powder",
        "2 teaspoons red chili powder (Kashmiri for red color)",
        "1 teaspoon garam masala",
        "1/2 cup plain yogurt - beaten",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add sliced onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add fennel powder, dry ginger powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add beaten yogurt and stir well. Cook for 5-7 minutes.",
        "Add 1 cup of warm water. Cover and cook for 45-50 minutes until the mutton is tender.",
        "Sprinkle garam masala and serve hot with naan or steamed rice."
      ]
    },
    { 
      id: 19, 
      name: "Easy Rogan Josh",
      tagline: "Simple rogan josh recipe - quick and delicious",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons rogan josh masala powder",
        "1 teaspoon turmeric powder",
        "1/2 cup plain yogurt - beaten",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates.",
        "Add rogan josh masala, turmeric powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add beaten yogurt and stir well. Cook for 5 minutes.",
        "Add 1 cup of warm water. Cover and cook for 45-50 minutes until the mutton is tender.",
        "Serve hot with naan or rice."
      ]
    },
    { 
      id: 20, 
      name: "Pressure Cooker Rogan Josh",
      tagline: "Quick pressure cooker version - saves time",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons rogan josh masala",
        "1/2 cup plain yogurt - beaten",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1/2 cup warm water"
      ],
      steps: [
        "Heat oil in a pressure cooker over medium heat. Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add rogan josh masala and salt. Mix well and cook for 2 minutes.",
        "Add beaten yogurt and 1/2 cup of warm water. Stir well.",
        "Close the pressure cooker lid and cook for 20-25 minutes (4-5 whistles) until the mutton is tender.",
        "Let the pressure release naturally. Serve hot with naan or rice."
      ]
    },

    // ==================== MUTTON KOFTA (4) ====================
    { 
      id: 21, 
      name: "Mutton Kofta Curry",
      tagline: "Meatballs in spicy gravy - delicious and unique",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
        "500g mutton mince (keema)",
        "1 medium onion - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "1 large egg",
        "2 tablespoons breadcrumbs",
        "For gravy: 2 onions, 2 tomatoes",
        "Oil for shallow frying",
        "Salt to taste",
        "1 cup warm water"
      ],
      steps: [
        "In a bowl, mix mutton mince with chopped onion, ginger-garlic paste, cumin powder, coriander powder, red chili powder, garam masala, egg, breadcrumbs, and salt.",
        "Mix everything well until combined. Shape the mixture into small lemon-sized balls (kofta).",
        "Heat oil in a shallow pan over medium heat. Shallow fry the kofta for 5-7 minutes until golden brown on all sides. Remove and set aside.",
        "For gravy: In the same pan, add more oil if needed. Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chopped tomatoes and cook until soft.",
        "Add red chili powder, coriander powder, and salt. Cook for 2-3 minutes.",
        "Add 1 cup of warm water and bring to a boil. Simmer for 5-7 minutes.",
        "Add the fried kofta to the gravy and simmer for 10-12 minutes.",
        "Sprinkle garam masala and serve hot with naan or steamed rice."
      ]
    },
    { 
      id: 22, 
      name: "Mutton Kofta in Yogurt Gravy",
      tagline: "Kofta in creamy yogurt sauce - mild and rich",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
        "500g mutton mince",
        "1 medium onion - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin powder",
        "1 teaspoon garam masala",
        "1 large egg",
        "For gravy: 1 cup plain yogurt - beaten",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into puree",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1/2 cup warm water"
      ],
      steps: [
        "Prepare kofta using the method above and fry until golden. Set aside.",
        "Heat oil in a pan over medium heat. Add finely chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add tomato puree and cook for 5-6 minutes until the oil separates.",
        "Add cumin powder, red chili powder, and salt. Mix well.",
        "Reduce heat to low. Add beaten yogurt slowly, stirring continuously to prevent curdling.",
        "Add 1/2 cup of warm water and bring to a gentle simmer.",
        "Add the fried kofta and simmer for 10-12 minutes.",
        "Sprinkle garam masala and serve hot with naan or rice."
      ]
    },
    { 
      id: 23, 
      name: "Nargisi Kofta",
      tagline: "Stuffed kofta with boiled eggs - royal dish",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
        "500g mutton mince",
        "4 large eggs - hard boiled and peeled",
        "1 medium onion - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin powder",
        "1 teaspoon garam masala",
        "1 large raw egg",
        "For gravy: 2 onions, 2 tomatoes",
        "Oil for shallow frying",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix mutton mince with chopped onion, ginger-garlic paste, cumin powder, garam masala, raw egg, and salt.",
        "Divide the mince mixture into 4 equal portions.",
        "Take one portion and flatten it in your palm. Place a boiled egg in the center and wrap the mince around it completely, sealing all sides.",
        "Repeat with the remaining eggs and mince.",
        "Heat oil in a shallow pan. Shallow fry the stuffed kofta for 8-10 minutes until golden brown on all sides. Remove and set aside.",
        "For gravy: In the same pan, add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chopped tomatoes and cook until soft.",
        "Add red chili powder, coriander powder, and salt. Cook for 2-3 minutes.",
        "Add 1 cup of warm water and bring to a boil. Simmer for 5 minutes.",
        "Add the kofta and simmer for 10-12 minutes.",
        "Serve hot with naan or rice."
      ]
    },
    { 
      id: 24, 
      name: "Malai Kofta",
      tagline: "Creamy kofta curry - rich and indulgent",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
        "500g mutton mince",
        "1 medium onion - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin powder",
        "1 teaspoon garam masala",
        "1/4 cup heavy cream",
        "1 large egg",
        "For gravy: 2 onions, 2 tomatoes",
        "1/4 cup heavy cream",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Prepare kofta by mixing mince with onion, ginger-garlic paste, cumin powder, garam masala, 1/4 cup cream, egg, and salt.",
        "Shape into balls and shallow fry until golden. Set aside.",
        "For gravy: Heat oil in a pan. Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add tomato puree and cook until oil separates.",
        "Add red chili powder and salt. Mix well.",
        "Add 1/2 cup of warm water and bring to a simmer.",
        "Add the remaining 1/4 cup cream and stir well.",
        "Add the fried kofta and simmer for 10 minutes.",
        "Serve hot with naan or roti."
      ]
    },

    // ==================== MUTTON RARA (2) ====================
    { 
      id: 25, 
      name: "Mutton Rara",
      tagline: "Mutton with mince gravy - double meat delight",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton pieces - with bones",
        "250g mutton mince (keema)",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
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
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add mutton mince and fry for 5-7 minutes until it changes color.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft.",
        "Add red chili powder and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water. Cover and cook for 45-50 minutes until the mutton is tender.",
        "Sprinkle garam masala and serve hot with naan or rice."
      ]
    },
    { 
      id: 26, 
      name: "Mutton Rara Masala",
      tagline: "Spicy rara masala - bold and flavorful",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g mutton - boneless cubes",
        "250g mutton mince",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
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
        "Add mutton cubes and fry for 8-10 minutes until well-browned.",
        "Add mutton mince and fry for 5-7 minutes.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates.",
        "Add red chili powder and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water. Cover and cook for 45-50 minutes until the mutton is tender.",
        "Sprinkle garam masala and serve hot with naan."
      ]
    },

    // ==================== MUTTON REGIONAL (5) ====================
    { 
      id: 27, 
      name: "Hyderabadi Mutton",
      tagline: "Hyderabadi style mutton curry - rich and aromatic",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup plain yogurt - beaten",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft.",
        "Add red chili powder, garam masala, and salt. Mix well and cook for 2-3 minutes.",
        "Add beaten yogurt and stir well. Cook for 5 minutes.",
        "Add 1 cup of warm water. Cover and cook for 45-50 minutes until the mutton is tender.",
        "Serve hot with naan or steamed rice."
      ]
    },
    { 
      id: 28, 
      name: "Punjabi Mutton",
      tagline: "Punjabi style mutton curry - rich and buttery",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons butter",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil and butter in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water. Cover and cook for 45-50 minutes until the mutton is tender.",
        "Sprinkle garam masala and serve hot with naan."
      ]
    },
    { 
      id: 29, 
      name: "Kerala Mutton Curry",
      tagline: "Kerala style coconut mutton - creamy and aromatic",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "1 cup thick coconut milk",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon mustard seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "Few curry leaves",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1/2 cup warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add mustard seeds and curry leaves. Let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add coconut milk and 1/2 cup of warm water. Bring to a gentle simmer.",
        "Cover and cook for 35-40 minutes until the mutton is tender.",
        "Serve hot with steamed rice or appam."
      ]
    },
    { 
      id: 30, 
      name: "Chettinad Mutton",
      tagline: "Spicy Chettinad mutton - very aromatic",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon fennel seeds",
        "1 teaspoon cumin seeds",
        "2 teaspoons red chili powder",
        "1 teaspoon black pepper powder",
        "1/2 cup grated coconut",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1 cup warm water"
      ],
      steps: [
        "Dry roast fennel seeds, cumin seeds, and grated coconut in a pan until fragrant. Grind into a fine paste with a little water. Set aside.",
        "Heat oil in a pan over medium heat. Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft.",
        "Add the ground paste, red chili powder, black pepper powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water. Cover and cook for 45-50 minutes until the mutton is tender.",
        "Serve hot with steamed rice or roti."
      ]
    },
    { 
      id: 31, 
      name: "Goan Mutton Curry",
      tagline: "Goan style coconut curry - tangy and spicy",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "1 cup thick coconut milk",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric powder",
        "1 tablespoon vinegar",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1/2 cup warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add coconut milk, vinegar, and 1/2 cup of warm water. Bring to a gentle simmer.",
        "Cover and cook for 40-45 minutes until the mutton is tender.",
        "Serve hot with steamed rice."
      ]
    },

    // ==================== MUTTON CHOPS (3) ====================
    { 
      id: 32, 
      name: "Mutton Chops Curry",
      tagline: "Curry with mutton chops - flavorful and tender",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton chops",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
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
        "Add mutton chops and fry for 8-10 minutes until well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water. Cover and cook for 35-40 minutes until the chops are tender.",
        "Sprinkle garam masala and serve hot with naan or rice."
      ]
    },
    { 
      id: 33, 
      name: "Mutton Chops Karahi",
      tagline: "Karahi style chops - bold and spicy",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton chops",
        "4 medium tomatoes - chopped",
        "2 tablespoons ginger-garlic paste",
        "4 green chilies - slit",
        "1 teaspoon cumin seeds",
        "2 teaspoons red chili powder",
        "1 teaspoon black pepper powder",
        "1/2 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a karahi over high heat. Add mutton chops and fry for 8-10 minutes until well-browned.",
        "Add ginger-garlic paste and green chilies. Cook for 2-3 minutes.",
        "Add chopped tomatoes and cook for 8-10 minutes until soft and the oil separates.",
        "Add cumin seeds, red chili powder, black pepper powder, and salt. Mix well.",
        "Cook on high heat for 20-25 minutes until the chops are tender.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 34, 
      name: "Grilled Mutton Chops",
      tagline: "Oven grilled chops - perfect for parties",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton chops",
        "1 cup plain yogurt - beaten",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon cumin powder",
        "1 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash the mutton chops and pat dry. Make shallow slits on both sides.",
        "In a bowl, mix yogurt, ginger-garlic paste, red chili powder, cumin powder, garam masala, oil, and salt.",
        "Add the mutton chops and coat well with the marinade.",
        "Cover and refrigerate for 4-6 hours or overnight for best results.",
        "Preheat oven to 180°C (350°F).",
        "Place the marinated chops on a baking tray lined with foil.",
        "Bake for 25-30 minutes, turning once halfway through.",
        "For a charred effect, switch to broil/grill mode for the last 5 minutes.",
        "Serve hot with mint chutney and onion rings."
      ]
    },

    // ==================== MUTTON LEG (2) ====================
    { 
      id: 35, 
      name: "Mutton Leg Roast",
      tagline: "Whole leg roasted - showstopper dish",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 whole mutton leg (about 1.5 kg)",
        "1 cup plain yogurt - beaten",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric powder",
        "1 teaspoon cumin powder",
        "1 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash the mutton leg and pat dry. Make deep slits all over the leg with a sharp knife.",
        "In a bowl, mix yogurt, ginger-garlic paste, red chili powder, turmeric, cumin powder, garam masala, oil, and salt.",
        "Rub the marinade all over the leg, pushing it into the slits.",
        "Cover and refrigerate overnight (8-10 hours).",
        "Preheat oven to 160°C (325°F).",
        "Place the marinated leg on a roasting rack in a baking tray.",
        "Roast for 2-2.5 hours, basting with the pan juices every 30 minutes.",
        "The leg is done when the meat is tender and pulls away from the bone easily.",
        "Let it rest for 15 minutes before carving.",
        "Serve hot with mint chutney and roasted vegetables."
      ]
    },
    { 
      id: 36, 
      name: "Mutton Leg Curry",
      tagline: "Leg pieces in curry - rich and flavorful",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 mutton leg - cut into large pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "2 cups warm water"
      ],
      steps: [
        "Heat oil in a large pot over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton leg pieces and fry for 10-12 minutes until well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates.",
        "Add red chili powder and salt. Mix well and cook for 2-3 minutes.",
        "Add 2 cups of warm water. Cover and cook for 50-60 minutes until the mutton is tender.",
        "Sprinkle garam masala and serve hot with naan or rice."
      ]
    },

    // ==================== MUTTON BHUNA (2) ====================
    { 
      id: 37, 
      name: "Mutton Bhuna Ghost",
      tagline: "Dry bhuna mutton - thick and spicy",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
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
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 7-8 minutes until dark brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 10-12 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until dry and the oil separates.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1/2 cup of warm water. Cover and cook on low heat for 45-50 minutes until the mutton is tender.",
        "Cook uncovered for the last 10 minutes to dry out the gravy.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 38, 
      name: "Mutton Bhuna Masala",
      tagline: "Spicy bhuna masala - bold and aromatic",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
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
        "Add finely chopped onions and sauté for 7-8 minutes until dark brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add mutton pieces and fry for 10-12 minutes until well-browned.",
        "Add chopped tomatoes and cook for 6-7 minutes until dry and the oil separates.",
        "Add red chili powder and salt. Mix well and cook for 2-3 minutes.",
        "Add 1/2 cup of warm water. Cover and cook on low heat for 45-50 minutes until the mutton is tender.",
        "Sprinkle garam masala and cook for 5 more minutes.",
        "Serve hot with naan."
      ]
    },

    // ==================== MUTTON NALLI (3) ====================
    { 
      id: 39, 
      name: "Mutton Nalli Curry",
      tagline: "Bone marrow curry - rich and flavorful",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton nalli (shanks with bone marrow)",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
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
        "Add nalli pieces and fry for 10-12 minutes until well-browned.",
        "Add tomato puree and cook for 6-7 minutes until the oil separates.",
        "Add red chili powder and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water. Cover and cook for 50-60 minutes until the nalli is tender and the marrow is soft.",
        "Sprinkle garam masala and serve hot with naan."
      ]
    },
    { 
      id: 40, 
      name: "Nalli Nihari",
      tagline: "Nihari with bone marrow - classic breakfast dish",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg nalli (mutton shanks)",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric powder",
        "1 teaspoon nihari masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "2 cups warm water",
        "Fresh ginger - julienned for garnish",
        "Green chilies - chopped for garnish",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a large pot over medium heat. Add nalli pieces and fry for 8-10 minutes until well-browned.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add red chili powder, turmeric powder, nihari masala, and salt. Mix well and cook for 2-3 minutes.",
        "Add 2 cups of warm water. Bring to a boil, then reduce heat to low.",
        "Cover and cook for 2-3 hours until the nalli is very tender and the marrow has melted into the gravy.",
        "The gravy should be thick and sticky.",
        "Garnish with julienned ginger, chopped green chilies, and fresh coriander.",
        "Serve hot with naan for breakfast or brunch."
      ]
    },
    { 
      id: 41, 
      name: "Nalli Biryani",
      tagline: "Biryani with bone marrow - royal dish",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      ingredients: [
        "500g nalli (mutton shanks)",
        "2 cups basmati rice - washed and soaked",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon biryani masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Saffron strands soaked in milk",
        "Fresh coriander and mint leaves",
        "2 cups warm water"
      ],
      steps: [
        "First, cook the nalli: Heat oil in a pot. Add onions and sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add nalli and fry for 8-10 minutes until browned.",
        "Add biryani masala and salt. Add 2 cups of water and cook until nalli is tender (about 45-50 minutes). Set aside.",
        "Cook rice separately until 70% done. Drain and set aside.",
        "In a large pot, layer half the rice, then all the nalli with gravy, then the remaining rice.",
        "Sprinkle saffron milk, coriander, and mint leaves over the top.",
        "Cover tightly and cook on low heat (dum) for 20-25 minutes.",
        "Gently mix before serving. Serve hot with raita."
      ]
    }
  ];
  const allMuttonRecipes = muttonRecipes;

  const recipesList = allMuttonRecipes;

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
    <div className="pure-mutton-page">
      <header className="pure-mutton-header">
        <div className="pure-mutton-header-content">
          <h1 className="pure-mutton-title">Pure Mutton Dishes</h1>
          <p className="pure-mutton-description">
            Discover 40+ delicious mutton recipes - curries, karahi, rogan josh, kofta, and much more
          </p>
        </div>
      </header>

      <main className="pure-mutton-main">
        <div className="pure-mutton-grid-section">
          <div className="pure-mutton-grid">
            {recipesList.map((recipe) => (
              <div
                key={recipe.id}
                className="pure-mutton-card"
                onClick={() => handleRecipeClick(recipe)}
              >
                <div
                  className="pure-mutton-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                />
                <div className="pure-mutton-card-content">
                  <h3 className="pure-mutton-card-title">{recipe.name}</h3>
                  <p className="pure-mutton-card-description">{recipe.tagline}</p>
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
        <div className="pure-mutton-modal-overlay" onClick={handleCloseModal}>
          <div
            className="pure-mutton-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button className="pure-mutton-modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="pure-mutton-modal-header">
              <div className="pure-mutton-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="pure-mutton-modal-content">
              <div className="pure-mutton-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="pure-mutton-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="pure-mutton-ingredient-item">
                      <span className="pure-mutton-ingredient-bullet">•</span>
                      <span className="pure-mutton-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pure-mutton-modal-steps">
                <h3>Steps to Make</h3>
                <div className="pure-mutton-steps-list">
                  {selectedRecipe.steps.map((step, index) => (
                    <div key={index} className="pure-mutton-step-item">
                      <span className="pure-mutton-step-number">{index + 1}.</span>
                      <span className="pure-mutton-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pure-mutton-modal-voice-container">
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


export default RecipesPureMutton;