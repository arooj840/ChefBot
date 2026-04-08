import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipePlainVegetables.css';

const RecipePlainVegetables = () => {
  const navigate = useNavigate();
  const [selectedVegetable, setSelectedVegetable] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All Plain Vegetables Data (55+ recipes) with detailed instructions
  const vegetablesData = [
    // ==================== ALOO BASED (11) ====================
    { 
      id: 1, 
      name: "Aloo Ki Sabzi",
      tagline: "Simple and classic potato curry",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554",
      ingredients: [
        "4 medium potatoes - boiled, peeled, and cut into cubes",
        "2 medium tomatoes - finely chopped",
        "1 medium onion - finely chopped",
        "2 green chilies - slit lengthwise",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for about 30 seconds until fragrant.",
        "Add chopped onions and sauté for 5-7 minutes until they turn golden brown.",
        "Add green chilies and chopped tomatoes. Cook for 5-6 minutes until tomatoes become soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes until spices are fragrant.",
        "Add boiled potato cubes and mix gently with the masala. Be careful not to break the potatoes.",
        "Cover the pan and cook on low heat for 5-7 minutes, stirring occasionally to prevent sticking.",
        "Garnish with fresh coriander leaves. Serve hot with roti, paratha, or puri."
      ]
    },
    { 
      id: 2, 
      name: "Aloo Matar",
      tagline: "Potato and peas curry",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "3 medium potatoes - peeled and cut into cubes",
        "1 cup green peas (fresh or frozen)",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - made into puree",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle.",
        "Add chopped onions and sauté for 5-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until the raw smell goes away.",
        "Add tomato puree and cook for 5-7 minutes until oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add potatoes and green peas. Stir well to coat with the masala.",
        "Add 1 cup of warm water. Cover and cook for 15-20 minutes until potatoes are tender.",
        "Sprinkle garam masala and garnish with fresh coriander. Serve hot with naan or roti."
      ]
    },
    { 
      id: 3, 
      name: "Aloo Baingan",
      tagline: "Potato and eggplant curry",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "2 medium potatoes - peeled and cut into cubes",
        "2 medium eggplants (baingan) - cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add chopped tomatoes and cook for 5-7 minutes until they become soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cook for 5 minutes, stirring occasionally.",
        "Add eggplant cubes and mix gently to avoid breaking them. Cover and cook on low heat for 15-20 minutes until both vegetables are tender.",
        "Garnish with fresh coriander. Serve hot with roti or paratha."
      ]
    },
    { 
      id: 4, 
      name: "Aloo Shimla Mirch",
      tagline: "Potato and bell pepper stir-fry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "3 medium potatoes - thinly sliced",
        "2 bell peppers (capsicum) - sliced into strips",
        "1 medium onion - sliced",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon dry mango powder (amchur)",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle.",
        "Add sliced onions and sauté for 3-4 minutes until translucent.",
        "Add sliced potatoes and cook for 8-10 minutes until they are half cooked.",
        "Add sliced bell peppers, turmeric powder, red chili powder, and salt. Mix well.",
        "Continue cooking for 8-10 minutes until potatoes and peppers are fully tender.",
        "Sprinkle amchur powder and mix well. Serve hot as a side dish with dal and rice."
      ]
    },
    { 
      id: 5, 
      name: "Aloo Gobhi",
      tagline: "Potato and cauliflower dry curry",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "2 medium potatoes - peeled and cut into cubes",
        "1 medium cauliflower - cut into small florets",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-7 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 1 minute until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cauliflower florets. Mix gently to coat with masala.",
        "Cover and cook on low heat for 15-20 minutes, stirring occasionally. Do not overcook the cauliflower.",
        "Garnish with fresh coriander. Serve hot with roti."
      ]
    },
    { 
      id: 6, 
      name: "Aloo Palak",
      tagline: "Potato and spinach curry",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "3 medium potatoes - peeled and cut into cubes",
        "500g fresh spinach (palak) - blanched and blended into puree",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "2 tablespoons fresh cream (optional)"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cook for 10 minutes, stirring occasionally.",
        "Add spinach puree and mix well. Add 1/2 cup water if needed for desired consistency.",
        "Cover and simmer for 10-15 minutes until potatoes are completely tender.",
        "Sprinkle garam masala and add a drizzle of fresh cream if desired. Serve hot with roti or naan."
      ]
    },
    { 
      id: 7, 
      name: "Aloo Tamatar",
      tagline: "Potato tomato curry",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554",
      ingredients: [
        "3 medium potatoes - peeled and cut into cubes",
        "4 medium tomatoes - finely chopped",
        "1 medium onion - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté until onions are golden brown, about 5-6 minutes.",
        "Add chopped tomatoes and cook for 8-10 minutes until they turn mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add potato cubes and 1 cup of warm water. Stir well to combine.",
        "Cover and cook for 15-20 minutes until potatoes are tender.",
        "Mash some potatoes with the back of a spoon to thicken the gravy.",
        "Garnish with fresh coriander. Serve hot with roti or paratha."
      ]
    },
    { 
      id: 8, 
      name: "Aloo Beans",
      tagline: "Potato and green beans stir-fry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "2 medium potatoes - thinly sliced",
        "200g fresh green beans - washed and chopped into 1-inch pieces",
        "1 medium onion - sliced",
        "1 teaspoon mustard seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 tablespoon cooking oil",
        "Salt to taste",
        "2 tablespoons fresh grated coconut (optional)"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add mustard seeds and let them crackle for 30 seconds.",
        "Add sliced onions and sauté for 3-4 minutes until translucent.",
        "Add potatoes and beans. Stir well to combine.",
        "Add turmeric powder, red chili powder, and salt. Mix well.",
        "Cover and cook on low heat for 15 minutes, stirring occasionally to prevent sticking.",
        "Check if vegetables are tender. Cook for 2-3 more minutes if needed.",
        "Garnish with fresh grated coconut if desired. Serve as a side dish with dal and rice."
      ]
    },
    { 
      id: 9, 
      name: "Aloo Karela",
      tagline: "Potato and bitter gourd curry",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "2 medium potatoes - peeled and cut into cubes",
        "2 medium karela (bitter gourd) - thinly sliced",
        "1 medium onion - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon dry mango powder (amchur)",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Rub karela slices with 1 teaspoon salt and keep aside for 30 minutes to reduce bitterness. Rinse well with water and squeeze out the bitter juice completely.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add karela slices and fry for 5-7 minutes until lightly browned.",
        "Add potato cubes, turmeric powder, red chili powder, and salt. Mix well.",
        "Cover and cook on low heat for 15-20 minutes until both vegetables are tender.",
        "Sprinkle amchur powder and mix well. Serve hot with roti."
      ]
    },
    { 
      id: 10, 
      name: "Aloo Methi",
      tagline: "Potato with fenugreek leaves",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "3 medium potatoes - peeled and cut into cubes",
        "1 large bunch fresh fenugreek leaves (methi) - washed and finely chopped",
        "1 medium onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add green chilies and chopped methi leaves. Cook for 3-4 minutes until leaves wilt and reduce in volume.",
        "Add potato cubes, turmeric powder, red chili powder, and salt. Mix well.",
        "Cover and cook on low heat for 15-20 minutes until potatoes are tender.",
        "Stir occasionally to prevent sticking. Serve hot with roti or paratha."
      ]
    },
    { 
      id: 11, 
      name: "Aloo Pyaz",
      tagline: "Potato and onion stir-fry",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554",
      ingredients: [
        "3 medium potatoes - thinly sliced",
        "2 large onions - thinly sliced",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle.",
        "Add sliced onions and sauté for 4-5 minutes until light golden.",
        "Add sliced potatoes, turmeric powder, red chili powder, coriander powder, and salt.",
        "Mix well and cover with a lid.",
        "Cook on low heat for 15 minutes, stirring occasionally to ensure even cooking.",
        "Cook until potatoes are tender and slightly crispy on the edges.",
        "Serve as a side dish with dal and rice."
      ]
    },

    // ==================== BHINDI BASED (3) ====================
    { 
      id: 12, 
      name: "Bhindi Masala",
      tagline: "Spicy okra stir-fry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g fresh bhindi (okra) - washed, dried, and sliced into rounds",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon dry mango powder (amchur)",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash bhindi and dry completely with a kitchen towel before slicing. This prevents stickiness while cooking.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and mushy.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add sliced bhindi and mix gently to coat with masala.",
        "Cover and cook on low heat for 10-12 minutes, stirring occasionally to prevent sticking.",
        "Sprinkle amchur powder and cook uncovered for 2 more minutes. Serve hot with roti."
      ]
    },
    { 
      id: 13, 
      name: "Bhindi Do Pyaza",
      tagline: "Okra with double onions",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g fresh bhindi (okra) - washed, dried, and sliced",
        "2 large onions - thinly sliced (divided)",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash and dry bhindi completely before slicing to prevent stickiness.",
        "Heat oil in a pan over medium heat. Add cumin seeds and half of the sliced onions.",
        "Sauté for 5-6 minutes until onions are golden brown.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add sliced bhindi and mix gently.",
        "Cover and cook for 10 minutes on low heat, stirring occasionally.",
        "Add remaining raw onions and garam masala. Cook for 2 more minutes and serve hot."
      ]
    },
    { 
      id: 14, 
      name: "Bhindi Salan",
      tagline: "Okra in yogurt gravy",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g fresh bhindi (okra) - whole, stems removed",
        "1 cup plain yogurt - beaten well until smooth",
        "1 medium onion - finely chopped",
        "2 tablespoons cooking oil",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash and dry bhindi completely. Remove stems but keep the bhindi whole.",
        "Heat 1 tablespoon oil in a pan over medium heat. Fry bhindi for 5-7 minutes until tender. Remove and set aside.",
        "In the same pan, add remaining oil and cumin seeds. Add onions and sauté for 5 minutes until golden.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Cook for 1 minute.",
        "Reduce heat to low and add beaten yogurt slowly, stirring continuously to prevent curdling.",
        "Cook for 5 minutes until oil separates from the gravy.",
        "Add fried bhindi and mix gently. Simmer for 5 more minutes.",
        "Garnish with fresh coriander and serve hot with roti or rice."
      ]
    },

    // ==================== BAINGAN BASED (5) ====================
    { 
      id: 15, 
      name: "Baingan Bharta",
      tagline: "Smoky mashed eggplant",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "2 large eggplants (baingan) - preferably long and shiny",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves - chopped"
      ],
      steps: [
        "Wash eggplants and pat dry. Apply a little oil and roast directly on gas flame. Turn occasionally for even roasting, about 10-15 minutes until the skin is charred and flesh is soft.",
        "Let them cool completely, then peel off the charred skin carefully.",
        "Mash the soft pulp with a fork or hands. Set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle.",
        "Add chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add chopped tomatoes and green chilies. Cook for 5 minutes until tomatoes are soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add mashed eggplant and mix thoroughly.",
        "Cook for 8-10 minutes, stirring occasionally to blend the flavors.",
        "Sprinkle garam masala and fresh coriander. Serve hot with roti."
      ]
    },
    { 
      id: 16, 
      name: "Baingan Masala",
      tagline: "Spicy eggplant curry",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "2 medium eggplants (baingan) - cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - blended into puree",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until the raw smell disappears.",
        "Add tomato puree and cook for 5-7 minutes until oil separates from the masala.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add cubed eggplants and mix gently to coat with masala.",
        "Add 1/2 cup warm water. Cover and cook on medium heat for 15-20 minutes until eggplants are tender.",
        "Garnish with fresh coriander. Serve hot with roti or rice."
      ]
    },
    { 
      id: 17, 
      name: "Baingan Ka Salan",
      tagline: "Hyderabadi eggplant curry",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "2 medium eggplants (baingan) - slit lengthwise but not cut through",
        "1 medium onion - finely chopped",
        "2 tablespoons roasted peanuts",
        "1 tablespoon white sesame seeds",
        "1 tablespoon desiccated coconut",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "1 tablespoon tamarind pulp (optional)"
      ],
      steps: [
        "Make a fine paste of roasted peanuts, sesame seeds, and coconut with a little water. Set aside.",
        "Heat oil in a pan over medium heat. Fry slit eggplants for 5-7 minutes until soft. Remove and set aside.",
        "In the same oil, add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Cook for 1 minute.",
        "Add the peanut-sesame paste and cook for 5 minutes until oil separates.",
        "Add 1 cup warm water and bring to a boil.",
        "Add fried eggplants and tamarind pulp if using.",
        "Simmer for 10 minutes until the gravy thickens. Serve hot with rice or roti."
      ]
    },
    { 
      id: 18, 
      name: "Bharwa Baingan",
      tagline: "Stuffed eggplants",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "8 small eggplants (baingan) - slit crosswise, keeping stem intact",
        "1 medium onion - finely chopped",
        "2 tablespoons roasted peanuts - crushed",
        "1 tablespoon white sesame seeds",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon dry mango powder (amchur)",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Mix crushed peanuts, sesame seeds, turmeric powder, red chili powder, coriander powder, amchur powder, and salt to make the stuffing.",
        "Carefully stuff this mixture into the slit eggplants, keeping them intact.",
        "Heat oil in a wide pan over medium heat. Add cumin seeds and chopped onions. Sauté for 4-5 minutes until onions are golden.",
        "Gently place the stuffed eggplants in the pan in a single layer.",
        "Cover and cook on very low heat for 20-25 minutes, turning occasionally to cook evenly on all sides.",
        "Cook until eggplants are tender and the masala is dry.",
        "Garnish with fresh coriander. Serve hot with roti."
      ]
    },
    { 
      id: 19, 
      name: "Baingan Aloo",
      tagline: "Eggplant and potato curry",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "2 medium potatoes - peeled and cut into cubes",
        "2 medium eggplants - cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cook for 5 minutes, stirring occasionally.",
        "Add eggplant cubes and mix gently to avoid breaking them.",
        "Cover and cook on low heat for 15-20 minutes until both vegetables are tender.",
        "Garnish with fresh coriander. Serve hot with roti."
      ]
    },

    // ==================== GOBHI BASED (3) ====================
    { 
      id: 20, 
      name: "Gobhi Matar",
      tagline: "Cauliflower and peas curry",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 medium cauliflower (gobhi) - cut into small florets",
        "1 cup fresh or frozen green peas (matar)",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add cauliflower florets and green peas. Mix gently to coat with masala.",
        "Cover and cook on low heat for 15 minutes, stirring occasionally to prevent burning.",
        "Cook until cauliflower is tender but not mushy.",
        "Garnish with fresh coriander. Serve hot with roti."
      ]
    },
    { 
      id: 21, 
      name: "Gobhi Aloo",
      tagline: "Cauliflower and potato curry",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 medium cauliflower (gobhi) - cut into florets",
        "2 medium potatoes - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cauliflower florets. Mix gently to coat with masala.",
        "Cover and cook on low heat for 20 minutes, stirring occasionally to ensure even cooking.",
        "Check if vegetables are tender. Cook for 2-3 more minutes if needed.",
        "Garnish with fresh coriander. Serve hot with roti."
      ]
    },
    { 
      id: 22, 
      name: "Gobhi Ka Salan",
      tagline: "Cauliflower in gravy",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 medium cauliflower (gobhi) - cut into florets",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - blended into puree",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 5-7 minutes until oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add cauliflower florets and 1 cup warm water. Stir well to combine.",
        "Cover and cook on medium heat for 15 minutes until cauliflower is tender.",
        "Sprinkle garam masala and mix gently.",
        "Garnish with fresh coriander. Serve hot with roti or rice."
      ]
    },

    // ==================== TORI / LOUKI BASED (2) ====================
    { 
      id: 23, 
      name: "Tori Ki Sabzi",
      tagline: "Ridge gourd curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g fresh tori (ridge gourd) - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add tori cubes and mix gently to coat with masala.",
        "Cover and cook on low heat for 10-12 minutes. Tori releases water, so no need to add extra.",
        "Cook until tori is tender but not mushy.",
        "Garnish with fresh coriander. Serve hot with roti."
      ]
    },
    { 
      id: 24, 
      name: "Louki Ki Sabzi",
      tagline: "Bottle gourd curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g fresh louki (bottle gourd) - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add chopped tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add louki cubes and mix gently to coat with masala.",
        "Cover and cook on low heat for 15 minutes. Louki releases water, so no need to add extra.",
        "Cook until louki is tender and translucent.",
        "Garnish with fresh coriander. Serve hot with roti."
      ]
    },

    // ==================== KARELA BASED (2) ====================
    { 
      id: 25, 
      name: "Karela Ki Sabzi",
      tagline: "Bitter gourd stir-fry",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "4 medium karela (bitter gourd) - thinly sliced",
        "1 medium onion - thinly sliced",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon dry mango powder (amchur)",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Rub karela slices with 1 teaspoon salt and keep aside for 30 minutes to reduce bitterness. Rinse well with water and squeeze out the bitter juice completely.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle.",
        "Add sliced onions and sauté for 5-6 minutes until golden brown.",
        "Add karela slices and fry for 10-12 minutes until lightly browned and crispy.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 5 more minutes.",
        "Sprinkle amchur powder and mix well. Serve hot with roti."
      ]
    },
    { 
      id: 26, 
      name: "Karela Aloo",
      tagline: "Bitter gourd and potato stir-fry",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "2 medium karela (bitter gourd) - thinly sliced",
        "2 medium potatoes - thinly sliced",
        "1 medium onion - thinly sliced",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon dry mango powder (amchur)",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Rub karela slices with 1 teaspoon salt and keep aside for 30 minutes. Rinse well and squeeze out the bitter juice.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add potato slices and cook for 5 minutes, stirring occasionally.",
        "Add karela slices and fry until lightly browned.",
        "Add turmeric powder, red chili powder, and salt. Mix well.",
        "Cover and cook on low heat for 15 minutes until both vegetables are tender.",
        "Sprinkle amchur powder and mix well. Serve hot with roti."
      ]
    },

    // ==================== METHI / PALAK BASED (3) ====================
    { 
      id: 27, 
      name: "Methi Aloo",
      tagline: "Fenugreek leaves with potatoes",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "2 medium potatoes - peeled and cut into cubes",
        "1 large bunch fresh fenugreek leaves (methi) - washed and finely chopped",
        "1 medium onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add green chilies and chopped methi leaves. Cook for 3-4 minutes until leaves wilt.",
        "Add potato cubes, turmeric powder, red chili powder, and salt. Mix well.",
        "Cover and cook on low heat for 15-20 minutes until potatoes are tender.",
        "Stir occasionally to prevent sticking. Serve hot with roti."
      ]
    },
    { 
      id: 28, 
      name: "Methi Ki Sabzi",
      tagline: "Fenugreek leaves curry",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "2 large bunches fresh fenugreek leaves (methi) - washed and finely chopped",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add green chilies and chopped tomatoes. Cook for 5 minutes until tomatoes are soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add chopped methi leaves and mix well.",
        "Cover and cook on low heat for 10-12 minutes until leaves are completely cooked and tender.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 29, 
      name: "Palak Ki Sabzi",
      tagline: "Simple spinach stir-fry",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g fresh spinach (palak) - washed and roughly chopped",
        "1 medium onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add green chilies and chopped spinach. Cook for 3-4 minutes until spinach wilts.",
        "Add turmeric powder, red chili powder, and salt. Mix well.",
        "Cover and cook on low heat for 5-7 minutes to blend the flavors.",
        "Serve hot with roti."
      ]
    },

    // ==================== MATAR BASED (2) ====================
    { 
      id: 30, 
      name: "Matar Ki Sabzi",
      tagline: "Green peas curry",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "2 cups fresh or frozen green peas",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - blended into puree",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until the raw smell disappears.",
        "Add tomato puree and cook for 5-7 minutes until oil separates from the masala.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add green peas and 1/2 cup warm water. Mix well.",
        "Cover and cook for 10-12 minutes until peas are tender.",
        "Sprinkle garam masala and garnish with fresh coriander. Serve hot with roti or puri."
      ]
    },
    { 
      id: 31, 
      name: "Matar Aloo",
      tagline: "Peas and potato curry",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "2 medium potatoes - peeled and cut into cubes",
        "1 cup fresh or frozen green peas",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cook for 5 minutes, stirring occasionally.",
        "Add peas and 1/2 cup warm water. Mix well.",
        "Cover and cook for 15 minutes until potatoes are tender.",
        "Sprinkle garam masala and serve hot with roti."
      ]
    },

    // ==================== SHIMLA MIRCH BASED (2) ====================
    { 
      id: 32, 
      name: "Shimla Mirch Aloo",
      tagline: "Capsicum and potato stir-fry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "2 medium potatoes - thinly sliced",
        "2 medium capsicum (bell peppers) - sliced into strips",
        "1 medium onion - sliced",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon dry mango powder (amchur)",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle.",
        "Add sliced onions and sauté for 3-4 minutes until translucent.",
        "Add potato slices and cook for 8 minutes, stirring occasionally.",
        "Add capsicum strips, turmeric powder, red chili powder, and salt. Mix well.",
        "Cook for 8-10 minutes until vegetables are tender.",
        "Sprinkle amchur powder and mix well. Serve hot."
      ]
    },
    { 
      id: 33, 
      name: "Shimla Mirch Matar",
      tagline: "Capsicum and peas curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "2 medium capsicum (bell peppers) - cut into cubes",
        "1 cup fresh or frozen green peas",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add capsicum cubes and peas. Mix well to coat with masala.",
        "Cover and cook for 10 minutes until vegetables are tender.",
        "Serve hot with roti."
      ]
    },

    // ==================== BEANS BASED (2) ====================
    { 
      id: 34, 
      name: "Beans Aloo",
      tagline: "Green beans with potatoes",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "200g fresh green beans - washed and chopped into 1-inch pieces",
        "2 medium potatoes - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "1 teaspoon mustard seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add mustard seeds and let them crackle.",
        "Add chopped onions and sauté for 4-5 minutes until golden brown.",
        "Add potato cubes and cook for 5 minutes, stirring occasionally.",
        "Add beans, turmeric powder, red chili powder, and salt. Mix well.",
        "Cover and cook for 15 minutes until vegetables are tender.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 35, 
      name: "Beans Matar",
      tagline: "Beans and peas stir-fry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "200g fresh green beans - washed and chopped into 1-inch pieces",
        "1 cup fresh or frozen green peas",
        "1 medium onion - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add beans and cook for 5 minutes.",
        "Add peas, turmeric powder, red chili powder, coriander powder, and salt. Mix well.",
        "Cover and cook for 10 minutes until vegetables are tender.",
        "Serve hot with roti."
      ]
    },

    // ==================== TINDA / KERA / KADDU BASED (4) ====================
    { 
      id: 36, 
      name: "Tinday Ki Sabzi",
      tagline: "Apple gourd curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g fresh tinday (apple gourd) - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add tinday cubes and mix gently to coat with masala.",
        "Cover and cook for 15 minutes until tender. Tinda releases water, so no need to add extra.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 37, 
      name: "Keray Ki Sabzi",
      tagline: "Ivory gourd curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g fresh keray (ivory gourd) - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add keray cubes and mix gently to coat with masala.",
        "Cover and cook for 15 minutes until tender. Kera releases water, so no need to add extra.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 38, 
      name: "Kaddu Ki Sabzi",
      tagline: "Pumpkin curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g fresh kaddu (pumpkin) - peeled and cut into cubes",
        "1 teaspoon mustard seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 tablespoon jaggery or brown sugar",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add mustard seeds and let them crackle.",
        "Add pumpkin cubes, turmeric powder, red chili powder, and salt. Mix well.",
        "Cover and cook for 15 minutes until pumpkin is tender, stirring occasionally.",
        "Add jaggery and cook for 5 more minutes, stirring to dissolve.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 39, 
      name: "Kaddu Aloo",
      tagline: "Pumpkin and potato curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "300g fresh kaddu (pumpkin) - peeled and cut into cubes",
        "2 medium potatoes - peeled and cut into cubes",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle.",
        "Add potato cubes and cook for 5 minutes, stirring occasionally.",
        "Add pumpkin cubes, turmeric powder, red chili powder, coriander powder, and salt. Mix well.",
        "Cover and cook for 15 minutes until vegetables are tender.",
        "Serve hot with roti."
      ]
    },

    // ==================== ARVI BASED (2) ====================
    { 
      id: 40, 
      name: "Arvi Ki Sabzi",
      tagline: "Colocasia root curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g fresh arvi (colocasia) - boiled, peeled, and sliced into rounds",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Boil arvi in water for about 20 minutes until tender. Let cool, then peel and slice into rounds.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add arvi slices and mix gently to coat with masala. Be careful not to break them.",
        "Cook for 8-10 minutes, stirring gently. Serve hot with roti."
      ]
    },
    { 
      id: 41, 
      name: "Arvi Aloo",
      tagline: "Colocasia with potatoes",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "300g fresh arvi (colocasia) - boiled, peeled, and sliced",
        "2 medium potatoes - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Boil arvi until tender, peel and slice. Keep aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cook for 5 minutes, stirring occasionally.",
        "Add arvi slices and mix gently. Cover and cook for 10 minutes until potatoes are tender.",
        "Serve hot with roti."
      ]
    },

    // ==================== MIX VEGETABLES (8) ====================
    { 
      id: 42, 
      name: "Mix Vegetable Sabzi",
      tagline: "Mixed vegetables curry",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554",
      ingredients: [
        "1 cup cauliflower florets",
        "1 cup fresh or frozen green peas",
        "1 cup carrots - peeled and cut into cubes",
        "1 cup fresh green beans - chopped into 1-inch pieces",
        "2 medium potatoes - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - blended into puree",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 5-7 minutes until oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add all vegetables and mix well to coat with masala.",
        "Add 1/2 cup warm water. Cover and cook for 20 minutes until vegetables are tender.",
        "Sprinkle garam masala and serve hot with roti or rice."
      ]
    },
    { 
      id: 43, 
      name: "Bhindi Aloo",
      tagline: "Okra and potato stir-fry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "250g fresh bhindi (okra) - washed, dried, and sliced",
        "2 medium potatoes - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon dry mango powder (amchur)",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Wash and dry bhindi completely before slicing.",
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add potato cubes and cook for 8 minutes, stirring occasionally.",
        "Add bhindi, turmeric powder, red chili powder, and salt. Mix gently.",
        "Cover and cook for 10 minutes on low heat.",
        "Sprinkle amchur powder and mix well. Serve hot."
      ]
    },
    { 
      id: 44, 
      name: "Gobhi Matar Aloo",
      tagline: "Cauliflower, peas, and potato curry",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup cauliflower florets",
        "1/2 cup fresh or frozen green peas",
        "2 medium potatoes - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cook for 5 minutes.",
        "Add cauliflower and peas. Mix well to coat with masala.",
        "Cover and cook for 15 minutes until all vegetables are tender.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 45, 
      name: "Shimla Mirch Matar Aloo",
      tagline: "Capsicum, peas, and potato curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "2 medium capsicum (bell peppers) - cut into cubes",
        "1/2 cup fresh or frozen green peas",
        "2 medium potatoes - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cook for 5 minutes.",
        "Add capsicum cubes and peas. Cook for 10 minutes until vegetables are tender.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 46, 
      name: "Tori Aloo",
      tagline: "Ridge gourd with potato",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "400g fresh tori (ridge gourd) - peeled and cut into cubes",
        "2 medium potatoes - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cook for 5 minutes.",
        "Add tori cubes and mix gently to coat with masala.",
        "Cover and cook for 12 minutes until vegetables are tender.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 47, 
      name: "Aloo Matar Shimla Mirch",
      tagline: "Potato, peas, and capsicum curry",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "2 medium potatoes - peeled and cut into cubes",
        "1/2 cup fresh or frozen green peas",
        "2 medium capsicum (bell peppers) - cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cook for 5 minutes.",
        "Add peas and capsicum cubes. Cook for 10 minutes until vegetables are tender.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 48, 
      name: "Gobhi Shimla Mirch Aloo",
      tagline: "Cauliflower, capsicum, and potato curry",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup cauliflower florets",
        "2 medium capsicum (bell peppers) - cut into cubes",
        "2 medium potatoes - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cook for 5 minutes.",
        "Add cauliflower and capsicum cubes. Cover and cook for 15 minutes until vegetables are tender.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 49, 
      name: "Beans Matar Aloo",
      tagline: "Beans, peas, and potato curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "200g fresh green beans - chopped into 1-inch pieces",
        "1/2 cup fresh or frozen green peas",
        "2 medium potatoes - peeled and cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cook for 5 minutes.",
        "Add beans and peas. Cover and cook for 15 minutes until vegetables are tender.",
        "Serve hot with roti."
      ]
    },

    // ==================== SEASONAL / SPECIAL (6) ====================
    { 
      id: 50, 
      name: "Seasonal Mix Sabzi",
      tagline: "Fresh seasonal vegetables",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554",
      ingredients: [
        "2 cups mixed seasonal vegetables (carrots, beans, peas, cauliflower) - cut into bite-sized pieces",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add mixed seasonal vegetables and mix well to coat with masala.",
        "Add 1/2 cup warm water. Cover and cook for 15-20 minutes until vegetables are tender.",
        "Sprinkle garam masala and serve hot with roti."
      ]
    },
    { 
      id: 51, 
      name: "Lauki Kofta",
      tagline: "Bottle gourd dumplings in gravy",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g fresh lauki (bottle gourd) - peeled and grated",
        "1 cup besan (gram flour)",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - blended into puree",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 cups cooking oil for deep frying",
        "2 tablespoons cooking oil for gravy",
        "Salt to taste"
      ],
      steps: [
        "Squeeze out excess water from grated lauki. Mix with besan and salt to form a soft dough.",
        "Shape the dough into small lemon-sized balls.",
        "Heat oil for deep frying in a pan. Fry the kofta balls until golden brown. Drain on paper towels and set aside.",
        "For gravy: Heat 2 tablespoons oil in a separate pan. Add cumin seeds and onions. Sauté until golden brown.",
        "Add tomato puree and cook for 5-7 minutes until oil separates.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1 cup warm water and bring to a boil. Simmer for 5 minutes.",
        "Add the fried kofta and simmer for 5 more minutes.",
        "Sprinkle garam masala and serve hot with roti or rice."
      ]
    },
    { 
      id: 52, 
      name: "Karela Bharwa",
      tagline: "Stuffed bitter gourd",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "4 medium karela (bitter gourd) - slit lengthwise, seeds removed",
        "1 medium onion - finely chopped",
        "2 tablespoons roasted peanuts - coarsely crushed",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon dry mango powder (amchur)",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Rub karela with 1 teaspoon salt and keep aside for 30 minutes. Rinse well with water and squeeze out the bitter juice.",
        "Mix chopped onion, crushed peanuts, turmeric powder, red chili powder, amchur powder, and salt to make the stuffing.",
        "Stuff this mixture into the slit karela, pressing firmly.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle.",
        "Gently place stuffed karela in the pan. Cover and cook on low heat for 20-25 minutes, turning occasionally to cook evenly.",
        "Cook until karela are tender and the stuffing is well cooked.",
        "Serve hot with roti."
      ]
    },
    { 
      id: 53, 
      name: "Aloo Chana",
      tagline: "Potato and chickpeas curry",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "2 medium potatoes - peeled and cut into cubes",
        "1 cup chickpeas (chana) - boiled until soft",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cook for 10 minutes, stirring occasionally.",
        "Add boiled chickpeas and 1/2 cup warm water. Mix well.",
        "Simmer for 10 minutes until potatoes are tender and gravy thickens.",
        "Sprinkle garam masala and serve hot with roti or puri."
      ]
    },
    { 
      id: 54, 
      name: "Aloo Matar Paneer",
      tagline: "Potato, peas, and cottage cheese curry",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "2 medium potatoes - peeled and cut into cubes",
        "1/2 cup fresh or frozen green peas",
        "200g fresh paneer (cottage cheese) - cut into cubes",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - blended into puree",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree and cook for 5-7 minutes until oil separates from the masala.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.",
        "Add potato cubes and cook for 10 minutes, stirring occasionally.",
        "Add peas and 1/2 cup warm water. Cook for 5 minutes.",
        "Add paneer cubes and garam masala. Gently mix and simmer for 2 minutes.",
        "Serve hot with roti or naan."
      ]
    },
    { 
      id: 55, 
      name: "Sem Ki Sabzi",
      tagline: "Flat beans curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "500g fresh sem (flat beans) - washed and chopped into 1-inch pieces",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "2 tablespoons cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and onions. Sauté for 5-6 minutes until onions are golden brown.",
        "Add tomatoes and cook for 5 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2 minutes.",
        "Add flat beans and mix well to coat with masala.",
        "Cover and cook for 15-20 minutes until beans are tender, stirring occasionally.",
        "Sprinkle garam masala and serve hot with roti."
      ]
    }
  ];

  const vegetablesList = vegetablesData;

  const handleVegetableClick = (vegetable) => {
    setSelectedVegetable(vegetable);
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
    setSelectedVegetable(null);
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
      if (isPlaying && currentStep < selectedVegetable.steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else if (isPlaying && currentStep === selectedVegetable.steps.length - 1) {
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
    if (!selectedVegetable) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      speakStep(selectedVegetable.steps[currentStep]);
    }
  };

  const handleNextStep = () => {
    if (!selectedVegetable) return;
    
    if (currentStep < selectedVegetable.steps.length - 1) {
      window.speechSynthesis.cancel();
      setCurrentStep(prev => prev + 1);
      if (isPlaying) {
        speakStep(selectedVegetable.steps[currentStep + 1]);
      }
    }
  };

  const handlePrevStep = () => {
    if (!selectedVegetable) return;
    
    if (currentStep > 0) {
      window.speechSynthesis.cancel();
      setCurrentStep(prev => prev - 1);
      if (isPlaying) {
        speakStep(selectedVegetable.steps[currentStep - 1]);
      }
    }
  };

  const handleRestart = () => {
    if (!selectedVegetable) return;
    
    window.speechSynthesis.cancel();
    setCurrentStep(0);
    if (isPlaying) {
      speakStep(selectedVegetable.steps[0]);
    }
  };

  useEffect(() => {
    if (selectedVegetable) {
      setProgress(((currentStep + 1) / selectedVegetable.steps.length) * 100);
    }
  }, [currentStep, selectedVegetable]);

  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="vegetables-page">
      <header className="vegetables-header">
        <div className="vegetables-header-content">
          <h1 className="vegetables-page-title">Plain Vegetables</h1>
          <p className="vegetables-page-description">
            Discover 55+ traditional Pakistani vegetable recipes - simple, healthy, and homestyle taste
          </p>
        </div>
      </header>

      <main className="vegetables-main">
        <div className="vegetables-grid-section">
          <div className="vegetables-grid">
            {vegetablesList.map((vegetable) => (
              <div
                key={vegetable.id}
                className="vegetables-technique-card"
                onClick={() => handleVegetableClick(vegetable)}
              >
                <div
                  className="vegetables-card-image"
                  style={{ backgroundImage: `url(${vegetable.image})` }}
                />
                <div className="vegetables-card-content">
                  <h3 className="vegetables-card-title">{vegetable.name}</h3>
                  <p className="vegetables-card-description">{vegetable.tagline}</p>
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

      {showDetailPanel && selectedVegetable && (
        <div className="vegetables-modal-overlay" onClick={handleCloseModal}>
          <div
            className="vegetables-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${selectedVegetable.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button className="vegetables-modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="vegetables-modal-header">
              <div className="vegetables-modal-title">
                <h2>{selectedVegetable.name}</h2>
              </div>
            </div>

            <div className="vegetables-modal-content">
              <div className="vegetables-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="vegetables-ingredients-list">
                  {selectedVegetable.ingredients.map((ingredient, index) => (
                    <div key={index} className="vegetables-ingredient-item">
                      <span className="vegetables-ingredient-bullet">•</span>
                      <span className="vegetables-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="vegetables-modal-steps">
                <h3>Steps to Make</h3>
                <div className="vegetables-steps-list">
                  {selectedVegetable.steps.map((step, index) => (
                    <div key={index} className="vegetables-step-item">
                      <span className="vegetables-step-number">{index + 1}.</span>
                      <span className="vegetables-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="vegetables-modal-voice-container">
                <div className="voice-panel">
                  <h3>
                    <span>🔊</span> Voice Instructions
                  </h3>
                  
                  <div className="voice-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="progress-info">
                      <span>Step {currentStep + 1} of {selectedVegetable.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <div className="current-step-display">
                    <p>
                      <strong>Step {currentStep + 1}:</strong> {selectedVegetable.steps[currentStep]}
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
                      disabled={currentStep === selectedVegetable.steps.length - 1}
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

export default RecipePlainVegetables;