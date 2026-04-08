import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeVegetablePage.css';

const RecipeVegetablePage = () => {
  const navigate = useNavigate();
  const [selectedVegetable, setSelectedVegetable] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // Pakistani Vegetable Recipes with Images
  const vegetableRecipes = [
    // Aloo (Potato) Recipes
    { 
      id: 1,
      name: "Aloo Bhujia",
      tagline: "Crispy spiced potato stir-fry",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/aloo-bhujia-recipe.jpg",
      ingredients: [
        "4 medium potatoes, peeled and cut into thin strips",
        "2 onions, thinly sliced",
        "2 green chilies, chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "Salt to taste",
        "3 tablespoons oil",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash and peel potatoes, cut into thin matchstick-like strips.",
        "Heat oil in a large pan, add cumin seeds and let them splutter.",
        "Add sliced onions and sauté until golden brown.",
        "Add green chilies and sauté for 1 minute.",
        "Add potato strips and mix well.",
        "Add turmeric powder, red chili powder, coriander powder, and salt.",
        "Mix all spices evenly with potatoes.",
        "Cover and cook on low-medium heat for 15-20 minutes.",
        "Stir occasionally to prevent sticking.",
        "Cook until potatoes are tender and slightly crispy.",
        "Sprinkle garam masala and mix well.",
        "Garnish with fresh coriander leaves and serve hot."
      ]
    },
    { 
      id: 2,
      name: "Aloo Matar",
      tagline: "Potato and pea curry",
      image: "https://www.whiskaffair.com/wp-content/uploads/2021/01/Aloo-Matar-2-3.jpg",
      ingredients: [
        "4 medium potatoes, cubed",
        "1 cup fresh or frozen peas",
        "2 tomatoes, pureed",
        "1 onion, finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "1/2 teaspoon cumin powder",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Heat oil in a pan, add cumin seeds and let them splutter.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and sauté for 1 minute.",
        "Add tomato puree and cook until oil separates.",
        "Add all dry spices except garam masala.",
        "Add cubed potatoes and mix well with spices.",
        "Add peas and 1 cup water, mix well.",
        "Cover and cook for 15-20 minutes until potatoes are tender.",
        "Stir occasionally and add more water if needed.",
        "When potatoes are cooked, sprinkle garam masala.",
        "Mix well and cook for 2 more minutes.",
        "Garnish with fresh coriander and serve hot."
      ]
    },
    { 
      id: 3,
      name: "Aloo Palak",
      tagline: "Potato and spinach curry",
      image: "https://www.indianveggiedelight.com/wp-content/uploads/2021/10/aloo-palak.jpg",
      ingredients: [
        "4 medium potatoes, cubed",
        "2 bunches spinach, washed and chopped",
        "1 onion, finely chopped",
        "2 tomatoes, chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "1 tablespoon butter (optional)"
      ],
      steps: [
        "Boil potatoes until 80% cooked, drain and set aside.",
        "Blanch spinach in boiling water for 2 minutes, then blend into puree.",
        "Heat oil in pan, add cumin seeds and let them splutter.",
        "Add chopped onions and sauté until translucent.",
        "Add ginger-garlic paste and sauté for 1 minute.",
        "Add chopped tomatoes and cook until soft.",
        "Add all dry spices and cook for 2 minutes.",
        "Add boiled potatoes and mix well with spices.",
        "Add spinach puree and mix well.",
        "Add salt and 1/2 cup water, simmer for 10 minutes.",
        "Add garam masala and butter if using.",
        "Mix well and serve hot with roti or rice."
      ]
    },
    { 
      id: 4,
      name: "Aloo Gobhi",
      tagline: "Potato and cauliflower dry curry",
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/aloo-gobi-recipe-1.jpg",
      ingredients: [
        "1 medium cauliflower, cut into florets",
        "3 medium potatoes, cubed",
        "1 onion, finely chopped",
        "2 tomatoes, chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash cauliflower florets thoroughly and pat dry.",
        "Heat oil in a large pan, add cumin seeds.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and sauté for 1 minute.",
        "Add chopped tomatoes and cook until soft.",
        "Add all dry spices except garam masala.",
        "Add cubed potatoes and mix well.",
        "Add cauliflower florets and mix gently.",
        "Add salt and 1/2 cup water, mix well.",
        "Cover and cook on low heat for 15-20 minutes.",
        "Stir occasionally to prevent sticking.",
        "When vegetables are cooked, add garam masala.",
        "Garnish with fresh coriander and serve hot."
      ]
    },
    { 
      id: 5,
      name: "Aloo Methi",
      tagline: "Potato with fenugreek leaves",
      image: "https://www.whiskaffair.com/wp-content/uploads/2020/11/Aloo-Methi-2-3.jpg",
      ingredients: [
        "4 medium potatoes, cubed",
        "2 cups fresh methi (fenugreek) leaves, chopped",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "1 teaspoon lemon juice"
      ],
      steps: [
        "Wash methi leaves thoroughly and chop finely.",
        "Heat oil in pan, add cumin seeds and let them splutter.",
        "Add chopped onions and green chilies, sauté until golden.",
        "Add cubed potatoes and mix well.",
        "Add turmeric powder, red chili powder, coriander powder, and salt.",
        "Mix all spices evenly with potatoes.",
        "Add chopped methi leaves and mix well.",
        "Cover and cook on low heat for 15-20 minutes.",
        "Stir occasionally and add little water if needed.",
        "Cook until potatoes are tender and methi is cooked.",
        "Add garam masala and lemon juice, mix well.",
        "Cook for 2 more minutes and serve hot."
      ]
    },
    { 
      id: 6,
      name: "Aloo Shimla Mirch",
      tagline: "Potato and bell pepper stir-fry",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/aloo-shimla-mirch.jpg",
      ingredients: [
        "4 medium potatoes, cubed",
        "2 capsicums (bell peppers), cut into cubes",
        "1 onion, sliced",
        "2 tomatoes, chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Heat oil in pan, add cumin seeds and let them splutter.",
        "Add sliced onions and sauté until golden brown.",
        "Add ginger-garlic paste and sauté for 1 minute.",
        "Add chopped tomatoes and cook until soft.",
        "Add all dry spices except garam masala.",
        "Add cubed potatoes and mix well with spices.",
        "Add 1/2 cup water, cover and cook for 10 minutes.",
        "Add capsicum cubes and mix gently.",
        "Cover and cook for another 10 minutes.",
        "Stir occasionally to prevent sticking.",
        "When vegetables are tender, add garam masala.",
        "Mix well and garnish with fresh coriander.",
        "Serve hot with roti or paratha."
      ]
    },
    { 
      id: 7,
      name: "Aloo Baingan",
      tagline: "Potato and eggplant curry",
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/09/aloo-baingan-recipe-1.jpg",
      ingredients: [
        "3 medium potatoes, cubed",
        "2 medium eggplants (baingan), cubed",
        "1 onion, finely chopped",
        "2 tomatoes, chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Heat oil in pan, add cumin seeds and let them splutter.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and sauté for 1 minute.",
        "Add chopped tomatoes and cook until soft.",
        "Add all dry spices except garam masala.",
        "Add cubed potatoes and mix well.",
        "Add eggplant cubes and mix gently.",
        "Add salt and 1/2 cup water, mix well.",
        "Cover and cook on low heat for 15-20 minutes.",
        "Stir occasionally to prevent sticking.",
        "When vegetables are cooked, add garam masala.",
        "Mix well and garnish with fresh coriander.",
        "Serve hot with roti or rice."
      ]
    },
    { 
      id: 8,
      name: "Aloo Tikki",
      tagline: "Crispy potato patties",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/aloo-tikki-recipe.jpg",
      ingredients: [
        "4 large potatoes, boiled and mashed",
        "1/2 cup peas, boiled and mashed",
        "2 green chilies, finely chopped",
        "1 tablespoon ginger, grated",
        "1 teaspoon cumin seeds",
        "1 teaspoon chaat masala",
        "1/2 teaspoon red chili powder",
        "Salt to taste",
        "2 tablespoons cornflour",
        "Oil for shallow frying",
        "For serving: chutneys and yogurt"
      ],
      steps: [
        "Boil potatoes until soft, peel and mash them well.",
        "Boil peas and mash them slightly.",
        "Mix mashed potatoes and peas in a bowl.",
        "Add green chilies, grated ginger, and all spices.",
        "Add cornflour and mix everything well.",
        "Divide mixture into equal portions.",
        "Shape each portion into flat round tikkis.",
        "Heat oil in a non-stick pan for shallow frying.",
        "Place tikkis in pan and cook on medium heat.",
        "Fry until golden brown on both sides.",
        "Drain on paper towels to remove excess oil.",
        "Serve hot with green chutney and tamarind chutney."
      ]
    },
    { 
      id: 9,
      name: "Gobhi Masala",
      tagline: "Spiced cauliflower curry",
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/01/gobi-masala.jpg",
      ingredients: [
        "1 medium cauliflower, cut into florets",
        "2 onions, finely chopped",
        "3 tomatoes, pureed",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1/2 cup yogurt",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash cauliflower florets and parboil for 5 minutes.",
        "Heat oil in pan, add cumin seeds and let them splutter.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and sauté for 1 minute.",
        "Add tomato puree and cook until oil separates.",
        "Add all dry spices except garam masala.",
        "Add yogurt and mix well, cook for 2 minutes.",
        "Add cauliflower florets and mix gently with gravy.",
        "Add 1/2 cup water and salt, mix well.",
        "Cover and cook for 10-15 minutes on low heat.",
        "When cauliflower is cooked, add garam masala.",
        "Garnish with fresh coriander and serve hot."
      ]
    },
    { 
      id: 10,
      name: "Gobhi Aloo",
      tagline: "Cauliflower and potato curry",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gobi-aloo-recipe.jpg",
      ingredients: [
        "1 medium cauliflower, cut into florets",
        "3 medium potatoes, cubed",
        "1 onion, finely chopped",
        "2 tomatoes, chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash cauliflower thoroughly and cut into florets.",
        "Heat oil in pan, add cumin seeds and let them splutter.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and sauté for 1 minute.",
        "Add chopped tomatoes and cook until soft.",
        "Add all dry spices except garam masala.",
        "Add cubed potatoes and mix well with spices.",
        "Add cauliflower florets and mix gently.",
        "Add salt and 1/2 cup water, mix well.",
        "Cover and cook on low heat for 15-20 minutes.",
        "Stir occasionally to prevent sticking.",
        "When vegetables are cooked, add garam masala.",
        "Garnish with fresh coriander and serve hot."
      ]
    },
    { 
      id: 11,
      name: "Gobhi Matar",
      tagline: "Cauliflower and peas curry",
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/02/gobi-matar-recipe-1.jpg",
      ingredients: [
        "1 medium cauliflower, cut into florets",
        "1 cup fresh or frozen peas",
        "1 onion, finely chopped",
        "2 tomatoes, pureed",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash cauliflower florets and parboil for 5 minutes.",
        "Heat oil in pan, add cumin seeds and let them splutter.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and sauté for 1 minute.",
        "Add tomato puree and cook until oil separates.",
        "Add all dry spices except garam masala.",
        "Add peas and mix well with gravy.",
        "Add cauliflower florets and mix gently.",
        "Add 1/2 cup water and salt, mix well.",
        "Cover and cook for 10-15 minutes on low heat.",
        "When vegetables are cooked, add garam masala.",
        "Mix well and garnish with fresh coriander.",
        "Serve hot with roti or rice."
      ]
    },
    { 
      id: 12,
      name: "Gobhi Pakora",
      tagline: "Crispy cauliflower fritters",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/gobi-pakora.jpg",
      ingredients: [
        "1 medium cauliflower, cut into florets",
        "1 cup besan (gram flour)",
        "2 tablespoons rice flour",
        "1 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon coriander powder",
        "1 teaspoon ajwain (carom seeds)",
        "1 teaspoon ginger-garlic paste",
        "Salt to taste",
        "Water as needed",
        "Oil for deep frying",
        "For serving: mint chutney"
      ],
      steps: [
        "Wash cauliflower florets and pat dry thoroughly.",
        "In a mixing bowl, add besan and rice flour.",
        "Add all spices - red chili, turmeric, coriander powder.",
        "Add ajwain, ginger-garlic paste, and salt.",
        "Add water gradually to make thick batter.",
        "Batter should coat the back of spoon thickly.",
        "Heat oil in deep pan on medium heat.",
        "Dip each cauliflower floret in batter, coat well.",
        "Gently drop coated florets in hot oil.",
        "Fry until golden brown and crispy.",
        "Remove with slotted spoon, drain on paper towels.",
        "Serve hot with mint chutney or ketchup."
      ]
    },
    { 
      id: 13,
      name: "Gobhi Paratha",
      tagline: "Stuffed cauliflower flatbread",
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/11/gobi-paratha-recipe-1.jpg",
      ingredients: [
        "For dough: 2 cups whole wheat flour",
        "Water as needed",
        "Salt to taste",
        "For filling: 2 cups cauliflower, grated",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1 teaspoon ginger, grated",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "Salt to taste",
        "2 tablespoons oil",
        "Ghee for cooking parathas"
      ],
      steps: [
        "Mix flour, salt and water to make soft dough, rest for 30 minutes.",
        "Grate cauliflower, squeeze out excess water.",
        "Heat oil in pan, add chopped onions and green chilies.",
        "Sauté until onions are translucent.",
        "Add grated cauliflower and all spices.",
        "Cook for 5-7 minutes until cauliflower is cooked.",
        "Let filling cool completely.",
        "Divide dough into equal balls.",
        "Roll each ball into small circle.",
        "Place filling in center, gather edges and seal.",
        "Roll gently into flat paratha.",
        "Heat tawa, cook paratha with ghee on both sides.",
        "Serve hot with yogurt or pickle."
      ]
    },
    { 
      id: 14,
      name: "Baingan Bharta",
      tagline: "Smoky mashed eggplant",
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/baingan-bharta-1.jpg",
      ingredients: [
        "1 large eggplant (baingan)",
        "2 onions, finely chopped",
        "3 tomatoes, chopped",
        "2 green chilies, chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash eggplant and pat dry.",
        "Roast eggplant directly on gas flame until skin is charred.",
        "Alternatively, roast in oven at 200°C for 30 minutes.",
        "Let eggplant cool, then peel off skin.",
        "Mash the pulp well and set aside.",
        "Heat oil in pan, add cumin seeds and let them splutter.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and green chilies, sauté for 1 minute.",
        "Add chopped tomatoes and cook until soft.",
        "Add all dry spices except garam masala.",
        "Add mashed eggplant and mix well.",
        "Cook for 8-10 minutes on medium heat.",
        "Add garam masala and mix well.",
        "Garnish with fresh coriander and serve hot."
      ]
    },
    { 
      id: 15,
      name: "Baingan Aloo",
      tagline: "Eggplant and potato curry",
      image: "https://www.whiskaffair.com/wp-content/uploads/2020/03/Baingan-Aloo-2-3.jpg",
      ingredients: [
        "2 medium eggplants, cubed",
        "3 medium potatoes, cubed",
        "1 onion, finely chopped",
        "2 tomatoes, chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash and cube eggplants and potatoes.",
        "Heat oil in pan, add cumin seeds and let them splutter.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and sauté for 1 minute.",
        "Add chopped tomatoes and cook until soft.",
        "Add all dry spices except garam masala.",
        "Add cubed potatoes and mix well.",
        "Add eggplant cubes and mix gently.",
        "Add salt and 1/2 cup water, mix well.",
        "Cover and cook on low heat for 15-20 minutes.",
        "Stir occasionally to prevent sticking.",
        "When vegetables are cooked, add garam masala.",
        "Garnish with fresh coriander and serve hot."
      ]
    },
    { 
      id: 16,
      name: "Baingan Pakora",
      tagline: "Crispy eggplant fritters",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/brinjal-pakora.jpg",
      ingredients: [
        "2 medium eggplants, sliced into rounds",
        "1 cup besan (gram flour)",
        "2 tablespoons rice flour",
        "1 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon coriander powder",
        "1 teaspoon ajwain (carom seeds)",
        "1 teaspoon ginger-garlic paste",
        "Salt to taste",
        "Water as needed",
        "Oil for deep frying",
        "For serving: tamarind chutney"
      ],
      steps: [
        "Wash eggplant slices and pat dry thoroughly.",
        "In a mixing bowl, add besan and rice flour.",
        "Add all spices - red chili, turmeric, coriander powder.",
        "Add ajwain, ginger-garlic paste, and salt.",
        "Add water gradually to make thick batter.",
        "Batter should coat the back of spoon thickly.",
        "Heat oil in deep pan on medium heat.",
        "Dip each eggplant slice in batter, coat well.",
        "Gently drop coated slices in hot oil.",
        "Fry until golden brown and crispy.",
        "Remove with slotted spoon, drain on paper towels.",
        "Serve hot with tamarind chutney or ketchup."
      ]
    },
    { 
      id: 17,
      name: "Stuffed Baingan",
      tagline: "Baby eggplants stuffed with spices",
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2019/09/stuffed-baingan-1.jpg",
      ingredients: [
        "8-10 small eggplants (baby baingan)",
        "For stuffing: 1/2 cup besan (gram flour)",
        "1 tablespoon coriander powder",
        "1 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon garam masala",
        "1 tablespoon dry mango powder",
        "Salt to taste",
        "For gravy: 2 onions, pureed",
        "2 tomatoes, pureed",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "2 tablespoons oil",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash eggplants and make criss-cross cuts from bottom.",
        "Mix all stuffing ingredients in a bowl.",
        "Stuff each eggplant generously with mixture.",
        "Heat oil in pan, add cumin seeds and let them splutter.",
        "Add onion puree and sauté until golden brown.",
        "Add ginger-garlic paste and sauté for 1 minute.",
        "Add tomato puree and cook until oil separates.",
        "Add all dry spices and salt, mix well.",
        "Place stuffed eggplants gently in gravy.",
        "Add 1 cup water, cover and cook for 20-25 minutes.",
        "Gently turn eggplants halfway through cooking.",
        "When eggplants are tender, garnish with coriander.",
        "Serve hot with roti or rice."
      ]
    },
    { 
      id: 18,
      name: "Bhindi Masala",
      tagline: "Spiced okra stir-fry",
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/bhindi-masala-1.jpg",
      ingredients: [
        "500g bhindi (okra), washed and dried",
        "2 onions, finely chopped",
        "2 tomatoes, chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "1/2 teaspoon amchur (dry mango powder)",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash bhindi thoroughly and pat dry completely.",
        "Trim ends and cut into 1-inch pieces.",
        "Heat 1 tablespoon oil in pan, add bhindi pieces.",
        "Sauté on medium heat until slightly crispy, remove and set aside.",
        "In same pan, add remaining oil and cumin seeds.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and sauté for 1 minute.",
        "Add chopped tomatoes and cook until soft.",
        "Add all dry spices except garam masala and amchur.",
        "Cook masala for 2-3 minutes until oil separates.",
        "Add sautéed bhindi and mix gently with masala.",
        "Add garam masala and amchur, mix well.",
        "Garnish with fresh coriander and serve hot."
      ]
    },
    { 
      id: 19,
      name: "Bhindi Fry",
      tagline: "Crispy fried okra",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/bhindi-fry-recipe.jpg",
      ingredients: [
        "500g bhindi (okra)",
        "1 onion, thinly sliced",
        "2 green chilies, slit",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "1/2 teaspoon amchur (dry mango powder)",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash bhindi thoroughly and pat dry completely.",
        "Trim ends and cut into 1-inch pieces.",
        "Heat oil in pan, add cumin seeds and let them splutter.",
        "Add sliced onions and green chilies, sauté until golden.",
        "Add bhindi pieces and mix well.",
        "Add turmeric powder, red chili powder, coriander powder, and salt.",
        "Mix all spices evenly with bhindi.",
        "Cover and cook on low-medium heat for 15-20 minutes.",
        "Stir occasionally to prevent sticking.",
        "Cook until bhindi is tender and slightly crispy.",
        "Add garam masala and amchur powder, mix well.",
        "Cook for 2 more minutes uncovered.",
        "Garnish with fresh coriander and serve hot."
      ]
    },
    { 
      id: 20,
      name: "Bhindi Aloo",
      tagline: "Okra and potato stir-fry",
      image: "https://www.whiskaffair.com/wp-content/uploads/2020/04/Bhindi-Aloo-2-3.jpg",
      ingredients: [
        "250g bhindi (okra), washed and dried",
        "3 medium potatoes, cubed",
        "1 onion, finely chopped",
        "2 tomatoes, chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash bhindi and pat dry, trim ends and cut into 1-inch pieces.",
        "Heat oil in pan, add bhindi and sauté until slightly crispy, remove.",
        "In same pan, add more oil if needed, add cumin seeds.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and sauté for 1 minute.",
        "Add chopped tomatoes and cook until soft.",
        "Add all dry spices except garam masala.",
        "Add cubed potatoes and mix well with spices.",
        "Add 1/2 cup water, cover and cook for 10 minutes.",
        "Add sautéed bhindi and mix gently.",
        "Cover and cook for another 10 minutes.",
        "Add garam masala and mix well.",
        "Garnish with fresh coriander and serve hot."
      ]
    },
  ];

  // Voice instructions handler
  const speakInstructions = (steps, stepIndex = 0) => {
    if ('speechSynthesis' in window) {
      if (speechSynthesisRef.current && isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setCurrentStep(0);
        setProgress(0);
        speechSynthesisRef.current = null;
        return;
      }

      if (stepIndex >= 0 && stepIndex < steps.length) {
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = `Step ${stepIndex + 1}: ${steps[stepIndex]}`;
        utterance.rate = 1.0;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        setCurrentStep(stepIndex + 1);
        const stepProgress = ((stepIndex + 1) / steps.length) * 100;
        setProgress(stepProgress);
        
        utterance.onstart = () => {
          setIsPlaying(true);
        };
        
        utterance.onend = () => {
          setIsPlaying(false);
          speechSynthesisRef.current = null;
        };
        
        utterance.onerror = () => {
          setIsPlaying(false);
          speechSynthesisRef.current = null;
        };
        
        speechSynthesisRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      }
    } else {
      alert('Your browser does not support text-to-speech.');
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window && speechSynthesisRef.current) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentStep(0);
      setProgress(0);
      speechSynthesisRef.current = null;
    }
  };

  const speakNextStep = () => {
    if (selectedVegetable && currentStep < selectedVegetable.steps.length) {
      stopSpeaking();
      speakInstructions(selectedVegetable.steps, currentStep);
    }
  };

  const speakPreviousStep = () => {
    if (selectedVegetable && currentStep > 1) {
      stopSpeaking();
      speakInstructions(selectedVegetable.steps, currentStep - 2);
    }
  };

  const handleVegetableSelect = (vegetable) => {
    setSelectedVegetable(vegetable);
    setShowDetailPanel(true);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const closeDetailPanel = () => {
    stopSpeaking();
    setShowDetailPanel(false);
    setSelectedVegetable(null);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="vegetable-page">
      {/* Header */}
      <header className="vegetable-header">
        <div className="vegetable-header-content">
          <h1 className="vegetable-page-title">Traditional Vegetable Dishes</h1>
          <p className="vegetable-page-description">
            Wholesome vegetable recipes inspired by classic regional flavors.
          </p>
        </div>
      </header>

      {/* Vegetable Grid */}
      <main className="vegetable-main">
        <div className="vegetable-grid-section">
          <div className="vegetable-grid">
            {vegetableRecipes.map(vegetable => (
              <div 
                key={vegetable.id} 
                className="vegetable-technique-card"
                onClick={() => handleVegetableSelect(vegetable)}
              >
                <div 
                  className="vegetable-card-image"
                  style={{ backgroundImage: `url(${vegetable.image})` }}
                ></div>
                
                <div className="vegetable-card-content">
                  <h3 className="vegetable-card-title">{vegetable.name}</h3>
                  <p className="vegetable-card-description">{vegetable.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Back to Home Button */}
      <div className="back-button-container">
        <button className="back-home-btn" onClick={handleGoBack}>
          <i className="fas fa-arrow-left"></i> Back to Home
        </button>
      </div>

      {/* DETAIL MODAL with SELECTED VEGETABLE IMAGE as Background */}
      {showDetailPanel && selectedVegetable && (
        <div className="vegetable-modal-overlay" onClick={closeDetailPanel}>
          <div 
            className="vegetable-modal" 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url(${selectedVegetable.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <button className="vegetable-modal-close" onClick={closeDetailPanel}>×</button>
            
            <div className="vegetable-modal-header">
              <div className="vegetable-modal-title">
                <h2>{selectedVegetable.name}</h2>
              </div>
            </div>

            <div className="vegetable-modal-content">
              {/* COLUMN 1 - INGREDIENTS */}
              <div className="vegetable-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="vegetable-ingredients-list">
                  {selectedVegetable.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="vegetable-ingredient-item">
                      <span className="vegetable-ingredient-bullet">•</span>
                      <span className="vegetable-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 2 - STEPS TO MAKE */}
              <div className="vegetable-modal-steps">
                <h3>Steps to Make</h3>
                <div className="vegetable-steps-list">
                  {selectedVegetable.steps.map((step, idx) => (
                    <div key={idx} className="vegetable-step-item">
                      <span className="vegetable-step-number">{idx + 1}.</span>
                      <span className="vegetable-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 3 - VOICE INSTRUCTIONS */}
              <div className="vegetable-modal-voice-container">
                <div className="voice-panel">
                  <h3><i className="fas fa-volume-up"></i> Voice Instructions</h3>
                  
                  <div className="voice-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${progress}%`}}></div>
                    </div>
                    <div className="progress-info">
                      <span>Step {currentStep} of {selectedVegetable.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <div className="voice-controls">
                    <button 
                      className={`voice-main-btn ${isPlaying ? 'stop' : 'play'}`}
                      onClick={() => isPlaying ? stopSpeaking() : speakInstructions(selectedVegetable.steps)}
                    >
                      <i className={`fas fa-${isPlaying ? 'stop' : 'play'}`}></i>
                      {isPlaying ? ' Stop' : ' Start Voice Guide'}
                    </button>

                    <div className="step-controls">
                      <button 
                        className="step-btn prev"
                        onClick={speakPreviousStep}
                        disabled={currentStep <= 1}
                      >
                        <i className="fas fa-backward"></i> Prev
                      </button>
                      <button 
                        className="step-btn next"
                        onClick={speakNextStep}
                        disabled={currentStep >= selectedVegetable.steps.length}
                      >
                        Next <i className="fas fa-forward"></i>
                      </button>
                    </div>
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

export default RecipeVegetablePage;