import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeQuickPage.css';

const RecipeQuickPage = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // Quick Recipe images array - Har recipe ki apni image
  const quickImages = Array(80).fill().map((_, index) => {
    const imageUrls = [
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1606913853347-bb6e96f5d7b6?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1483137140003-ae073b395549?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593614911681-ee6c8c7b6163?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559919436-8d6f6ee0117a?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1572799011048-50b9c6d2937f?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1585937421612-70ca003675ed?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1516714435131-44d6b64dc6f4?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1563379091339-03246963d9d6?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
    ];
    return imageUrls[index % imageUrls.length];
  });

  // All Quick Recipes with Complete Instructions - 80 RECIPES
  const quickRecipes = [
    // 5-Minute Recipes (1-10)
    { 
      id: 1, 
      name: "Chicken Maggi",
      tagline: "Quick noodles with shredded chicken",
      image: quickImages[0],
      ingredients: [
        "1 packet Maggi noodles",
        "½ cup boiled chicken, shredded",
        "1½ cups water",
        "Maggi tastemaker",
        "1 tablespoon oil or butter",
        "¼ cup chopped vegetables (carrot, peas, corn)",
        "½ teaspoon black pepper",
        "1 tablespoon chopped coriander"
      ],
      steps: [
        "Boil 1½ cups water in a small pan.",
        "Add Maggi noodles and tastemaker to boiling water.",
        "Add chopped vegetables and cook for 2 minutes.",
        "Add shredded chicken and mix well.",
        "Cook for another 2-3 minutes until noodles are soft.",
        "Add oil or butter and black pepper.",
        "Mix everything well and cook for 1 minute.",
        "Garnish with chopped coriander.",
        "Serve hot immediately."
      ]
    },
    { 
      id: 2, 
      name: "Anda Paratha",
      tagline: "Egg-stuffed paratha for quick breakfast",
      image: quickImages[1],
      ingredients: [
        "2 ready-made parathas",
        "2 eggs",
        "1 small onion, finely chopped",
        "1 green chili, chopped",
        "2 tablespoons chopped coriander",
        "Salt to taste",
        "¼ teaspoon black pepper",
        "2 tablespoons oil or ghee"
      ],
      steps: [
        "Heat a frying pan on medium heat.",
        "Add 1 tablespoon oil and place one paratha.",
        "Cook for 1 minute until slightly crispy.",
        "In a bowl, beat one egg with salt and pepper.",
        "Add half of chopped onion, chili, and coriander to egg.",
        "Pour egg mixture over the paratha in pan.",
        "Carefully flip the paratha to cook egg side.",
        "Cook for 1-2 minutes until egg is set.",
        "Repeat with second paratha.",
        "Serve hot with ketchup or chutney."
      ]
    },
    { 
      id: 3, 
      name: "Omlette Sandwich",
      tagline: "Protein-packed omlette between bread",
      image: quickImages[2],
      ingredients: [
        "4 slices of bread",
        "3 eggs",
        "1 small onion, finely chopped",
        "1 small tomato, chopped",
        "1 green chili, chopped (optional)",
        "2 tablespoons chopped coriander",
        "Salt to taste",
        "¼ teaspoon black pepper",
        "2 tablespoons butter or oil"
      ],
      steps: [
        "Break eggs into a bowl and beat well.",
        "Add onion, tomato, green chili, and coriander.",
        "Add salt and pepper, mix everything well.",
        "Heat butter or oil in frying pan on medium heat.",
        "Pour egg mixture into pan and spread evenly.",
        "Cook for 1-2 minutes until bottom is set.",
        "Place two bread slices on top of omlette.",
        "Carefully flip the omlette with bread slices attached.",
        "Cook for another 1-2 minutes until bread is toasted.",
        "Repeat with remaining bread and egg mixture.",
        "Cut sandwiches diagonally and serve hot."
      ]
    },
    { 
      id: 4, 
      name: "Cup Noodles",
      tagline: "Instant noodles in a cup",
      image: quickImages[3],
      ingredients: [
        "1 cup instant noodles (any brand)",
        "Boiling water as needed",
        "Optional add-ons:",
        "2 tablespoons chopped spring onions",
        "½ teaspoon soy sauce",
        "¼ teaspoon chili flakes",
        "1 tablespoon sweet corn"
      ],
      steps: [
        "Open the cup noodles and remove seasoning packet.",
        "Add seasoning powder to noodles in cup.",
        "Add spring onions and sweet corn if using.",
        "Pour boiling water into cup up to marked line.",
        "Add soy sauce and chili flakes if desired.",
        "Close the lid and let it sit for 3 minutes.",
        "After 3 minutes, stir well with fork.",
        "Add extra seasoning if needed.",
        "Enjoy directly from the cup."
      ]
    },
    { 
      id: 5, 
      name: "Butter Toast with Jam",
      tagline: "Crispy toast with jam",
      image: quickImages[4],
      ingredients: [
        "2 slices of bread",
        "2 tablespoons butter",
        "2 tablespoons fruit jam (any flavor)",
        "Pinch of cinnamon powder (optional)"
      ],
      steps: [
        "Take bread slices and spread butter evenly on one side.",
        "Heat a frying pan on medium heat.",
        "Place bread butter-side down in pan.",
        "Cook for 1-2 minutes until golden brown.",
        "Spread more butter on top side while cooking.",
        "Flip and cook other side for 1-2 minutes.",
        "Remove from pan and spread jam on one slice.",
        "Sprinkle cinnamon powder if using.",
        "Put slices together or enjoy separately.",
        "Serve hot with tea or coffee."
      ]
    },
    { 
      id: 6, 
      name: "Fruit Raita",
      tagline: "Yogurt with mixed fruits",
      image: quickImages[5],
      ingredients: [
        "1 cup plain yogurt",
        "½ cup mixed fruits (apple, banana, grapes)",
        "1 tablespoon sugar or honey",
        "¼ teaspoon roasted cumin powder",
        "Pinch of salt",
        "1 tablespoon chopped nuts (optional)"
      ],
      steps: [
        "Take yogurt in bowl and whisk until smooth.",
        "Add sugar or honey and mix well.",
        "Add roasted cumin powder and salt.",
        "Wash and chop fruits into small pieces.",
        "Add chopped fruits to yogurt mixture.",
        "Mix gently to coat fruits with yogurt.",
        "If using nuts, add them now.",
        "Chill in refrigerator for 15 minutes.",
        "Serve cold as side dish or dessert."
      ]
    },
    { 
      id: 7, 
      name: "Cornflakes with Milk",
      tagline: "Classic breakfast cereal",
      image: quickImages[6],
      ingredients: [
        "1 cup cornflakes",
        "1 cup milk (cold or warm)",
        "1 tablespoon sugar or honey (optional)",
        "½ banana, sliced (optional)",
        "¼ cup mixed berries (optional)"
      ],
      steps: [
        "Take a cereal bowl.",
        "Add 1 cup of cornflakes to bowl.",
        "If using fruits, add sliced banana and berries.",
        "Pour milk over cornflakes until just covered.",
        "Add sugar or honey if desired.",
        "Mix lightly and serve immediately.",
        "For warm version: warm milk first.",
        "Eat immediately to keep cornflakes crunchy."
      ]
    },
    { 
      id: 8, 
      name: "Peanut Butter Sandwich",
      tagline: "Nutritious peanut butter toast",
      image: quickImages[7],
      ingredients: [
        "2 slices of bread",
        "2 tablespoons peanut butter",
        "1 teaspoon honey",
        "½ banana, sliced",
        "Pinch of cinnamon powder"
      ],
      steps: [
        "Toast bread slices until golden brown.",
        "Spread peanut butter evenly on warm toast.",
        "Drizzle honey over peanut butter.",
        "Arrange banana slices on peanut butter.",
        "Sprinkle cinnamon powder on top.",
        "Put two slices together or enjoy separately.",
        "Cut diagonally for better presentation.",
        "Serve immediately.",
        "Great for breakfast or quick snack."
      ]
    },
    { 
      id: 9, 
      name: "Boiled Eggs",
      tagline: "Perfect protein-packed eggs",
      image: quickImages[8],
      ingredients: [
        "2 eggs",
        "Water for boiling",
        "Salt to taste",
        "¼ teaspoon black pepper",
        "Optional: chaat masala, soy sauce"
      ],
      steps: [
        "Take eggs and wash under running water.",
        "Place eggs in small pot.",
        "Add enough water to cover eggs completely.",
        "Bring water to boil on high heat.",
        "Once boiling, reduce heat to medium.",
        "Boil for 8-10 minutes for hard-boiled eggs.",
        "For soft-boiled: boil for 5-6 minutes.",
        "Remove eggs and place in cold water for 2 minutes.",
        "Peel eggs carefully.",
        "Sprinkle salt, pepper, or favorite seasoning.",
        "Serve with bread or as protein snack."
      ]
    },
    { 
      id: 10, 
      name: "Yogurt with Sugar",
      tagline: "Simple sweet yogurt",
      image: quickImages[9],
      ingredients: [
        "1 cup plain yogurt",
        "2 tablespoons sugar",
        "¼ teaspoon cardamom powder",
        "1 tablespoon chopped nuts (almonds, pistachios)",
        "Few saffron strands (optional)"
      ],
      steps: [
        "Take yogurt in bowl and whisk until smooth.",
        "Add sugar and mix well until dissolved.",
        "Add cardamom powder and mix.",
        "If using saffron, soak in 1 tablespoon warm milk.",
        "Add saffron milk to yogurt if using.",
        "Mix everything gently.",
        "Garnish with chopped nuts.",
        "Serve chilled or at room temperature.",
        "Simple and refreshing dessert."
      ]
    },

    // 10-Minute Recipes (11-20)
    { 
      id: 11, 
      name: "French Toast",
      tagline: "Egg-dipped golden toast",
      image: quickImages[10],
      ingredients: [
        "2 slices of bread",
        "1 egg",
        "2 tablespoons milk",
        "1 teaspoon sugar",
        "¼ teaspoon vanilla extract (optional)",
        "Pinch of cinnamon powder",
        "1 tablespoon butter or oil",
        "Honey or maple syrup for serving"
      ],
      steps: [
        "In shallow bowl, beat egg well.",
        "Add milk, sugar, vanilla, and cinnamon.",
        "Mix everything well.",
        "Heat butter or oil in frying pan on medium heat.",
        "Dip bread slice in egg mixture, coating both sides.",
        "Let excess drip off.",
        "Place in hot pan and cook for 2-3 minutes per side.",
        "Cook until golden brown on both sides.",
        "Repeat with second slice.",
        "Serve hot with honey or maple syrup."
      ]
    },
    { 
      id: 12, 
      name: "Scrambled Eggs",
      tagline: "Fluffy scrambled eggs",
      image: quickImages[11],
      ingredients: [
        "2 eggs",
        "1 tablespoon milk or water",
        "Salt to taste",
        "¼ teaspoon black pepper",
        "1 teaspoon butter or oil",
        "1 tablespoon chopped onion (optional)",
        "1 tablespoon chopped tomato (optional)"
      ],
      steps: [
        "Break eggs into bowl.",
        "Add milk, salt, and pepper.",
        "Beat well with fork until fluffy.",
        "If using vegetables, add them now.",
        "Heat butter or oil in pan on medium heat.",
        "Pour egg mixture into pan.",
        "Let it set for 30 seconds.",
        "Gently stir with spatula, pushing cooked parts to center.",
        "Cook until eggs are set but still moist.",
        "Remove from heat immediately.",
        "Serve hot with toast or bread."
      ]
    },
    { 
      id: 13, 
      name: "Ready-made Paratha with Anda",
      tagline: "Paratha with scrambled eggs",
      image: quickImages[12],
      ingredients: [
        "2 ready-made parathas",
        "2 eggs",
        "1 small onion, chopped",
        "1 green chili, chopped",
        "Salt to taste",
        "¼ teaspoon black pepper",
        "2 tablespoons oil or ghee",
        "2 tablespoons chopped coriander"
      ],
      steps: [
        "Heat oil in pan, add chopped onion.",
        "Cook until onion is translucent.",
        "Add green chili and cook for 30 seconds.",
        "Break eggs directly into pan.",
        "Add salt and pepper.",
        "Scramble eggs with vegetables.",
        "Cook until eggs are done but still soft.",
        "Heat parathas separately in another pan.",
        "Place scrambled eggs on one paratha.",
        "Cover with second paratha or fold.",
        "Garnish with chopped coriander.",
        "Serve hot with ketchup or raita."
      ]
    },
    { 
      id: 14, 
      name: "Chana Chaat",
      tagline: "Spicy chickpea salad",
      image: quickImages[13],
      ingredients: [
        "1 cup boiled chickpeas (canned or fresh)",
        "1 small onion, finely chopped",
        "1 small tomato, chopped",
        "½ cucumber, chopped",
        "1 green chili, chopped (optional)",
        "1 tablespoon chopped coriander",
        "1 teaspoon chaat masala",
        "½ teaspoon roasted cumin powder",
        "1 tablespoon lemon juice",
        "Salt to taste"
      ],
      steps: [
        "If using canned chickpeas, drain and rinse well.",
        "In large bowl, combine chickpeas, onion, tomato, cucumber.",
        "Add green chili if using.",
        "Add chaat masala, cumin powder, and salt.",
        "Mix everything well.",
        "Add lemon juice and mix again.",
        "Garnish with fresh coriander.",
        "Taste and adjust seasoning.",
        "Serve immediately as snack or light meal."
      ]
    },
    { 
      id: 15, 
      name: "Vegetable Sandwich",
      tagline: "Fresh veggie sandwich",
      image: quickImages[14],
      ingredients: [
        "4 slices of bread",
        "1 boiled potato, sliced",
        "1 cucumber, thinly sliced",
        "1 tomato, thinly sliced",
        "1 small onion, thinly sliced",
        "4 lettuce leaves",
        "Butter for spreading",
        "Green chutney or mayonnaise",
        "Salt and pepper to taste"
      ],
      steps: [
        "Spread butter on one side of each bread slice.",
        "Spread green chutney or mayonnaise on buttered side.",
        "Layer lettuce leaf on one slice.",
        "Arrange potato slices, cucumber, tomato, and onion.",
        "Sprinkle salt and pepper.",
        "Cover with another bread slice, buttered side down.",
        "Repeat for second sandwich.",
        "Cut diagonally into triangles.",
        "Serve immediately."
      ]
    },
    { 
      id: 16, 
      name: "Pasta with Ready Sauce",
      tagline: "Quick pasta with jar sauce",
      image: quickImages[15],
      ingredients: [
        "1 cup pasta (penne, macaroni, or spaghetti)",
        "2 cups water",
        "Salt for boiling water",
        "½ cup ready tomato pasta sauce",
        "1 teaspoon olive oil or butter",
        "¼ teaspoon dried oregano",
        "¼ teaspoon chili flakes",
        "2 tablespoons grated cheese"
      ],
      steps: [
        "Boil water in pot with salt.",
        "Add pasta and cook for 8-10 minutes or as per instructions.",
        "Drain pasta, saving some pasta water.",
        "Heat pasta sauce in same pot.",
        "Add cooked pasta to sauce.",
        "Add oregano, chili flakes, and olive oil.",
        "Mix well, adding pasta water if too dry.",
        "Cook for 1-2 minutes more.",
        "Add grated cheese and mix.",
        "Serve hot immediately."
      ]
    },
    { 
      id: 17, 
      name: "Leftover Rice Fry",
      tagline: "Quick fried rice",
      image: quickImages[16],
      ingredients: [
        "2 cups leftover cooked rice",
        "1 egg (optional)",
        "½ cup mixed vegetables (peas, carrots, corn)",
        "1 small onion, chopped",
        "2 tablespoons soy sauce",
        "1 tablespoon oil",
        "Salt and pepper to taste",
        "Spring onions for garnish"
      ],
      steps: [
        "Heat oil in wok or large pan.",
        "Add chopped onion and cook until soft.",
        "Add mixed vegetables and cook for 2 minutes.",
        "Push vegetables to side, add egg and scramble if using.",
        "Add leftover rice and break up any lumps.",
        "Add soy sauce, salt, and pepper.",
        "Mix everything well and cook for 3-4 minutes.",
        "Garnish with chopped spring onions.",
        "Serve hot as complete meal."
      ]
    },
    { 
      id: 18, 
      name: "Daal Chawal",
      tagline: "Comforting lentils with rice",
      image: quickImages[17],
      ingredients: [
        "½ cup masoor dal (red lentils)",
        "1 cup rice",
        "3 cups water",
        "1 teaspoon turmeric powder",
        "1 teaspoon salt",
        "1 tablespoon ghee or oil",
        "½ teaspoon cumin seeds",
        "1 dried red chili (optional)",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash dal and rice separately.",
        "In pressure cooker, add dal, rice, water, turmeric, and salt.",
        "Close lid and cook for 2 whistles on medium heat.",
        "Let pressure release naturally.",
        "For tempering: heat ghee in small pan.",
        "Add cumin seeds and red chili.",
        "Pour tempering over cooked daal chawal.",
        "Mix gently and garnish with coriander.",
        "Serve hot with pickle or yogurt."
      ]
    },
    { 
      id: 19, 
      name: "Chicken Mayo Sandwich",
      tagline: "Creamy chicken sandwich",
      image: quickImages[18],
      ingredients: [
        "4 slices of bread",
        "1 cup shredded cooked chicken",
        "¼ cup mayonnaise",
        "2 tablespoons chopped celery or onion",
        "4 lettuce leaves",
        "Salt and pepper to taste",
        "Butter for toasting"
      ],
      steps: [
        "Mix shredded chicken with mayonnaise.",
        "Add chopped celery or onion.",
        "Season with salt and pepper.",
        "Butter bread slices on one side.",
        "Place lettuce leaf on unbuttered side of one slice.",
        "Spread chicken mixture over lettuce.",
        "Cover with second bread slice, buttered side out.",
        "Toast in pan until golden brown on both sides.",
        "Repeat for second sandwich.",
        "Cut diagonally and serve hot."
      ]
    },
    { 
      id: 20, 
      name: "Qeema Paratha",
      tagline: "Minced meat stuffed paratha",
      image: quickImages[19],
      ingredients: [
        "2 ready-made parathas",
        "1 cup cooked minced meat (qeema)",
        "1 small onion, finely chopped",
        "1 green chili, chopped",
        "1 tablespoon oil",
        "¼ teaspoon garam masala",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Heat oil in pan, add chopped onion.",
        "Cook until onion is golden brown.",
        "Add cooked qeema and green chili.",
        "Add garam masala and salt, mix well.",
        "Cook for 2-3 minutes, then remove from heat.",
        "Add fresh coriander, mix.",
        "Take paratha, place qeema mixture in center.",
        "Fold paratha over filling or make roll.",
        "Heat in pan until crispy on both sides.",
        "Serve hot with yogurt or raita."
      ]
    },

    // 15-Minute Recipes (21-30)
    { 
      id: 21, 
      name: "Chicken Chowmein",
      tagline: "Quick chicken noodles",
      image: quickImages[20],
      ingredients: [
        "200g chowmein noodles",
        "1 cup cooked chicken, shredded",
        "2 cups mixed vegetables (cabbage, carrots, bell peppers)",
        "2 tablespoons soy sauce",
        "1 tablespoon chili sauce",
        "2 tablespoons oil",
        "2 cloves garlic, minced",
        "Salt and pepper to taste"
      ],
      steps: [
        "Boil noodles as per package instructions, drain.",
        "Heat oil in large wok or pan.",
        "Add minced garlic and stir-fry for 30 seconds.",
        "Add vegetables and stir-fry for 3-4 minutes.",
        "Add shredded chicken and cook for 2 minutes.",
        "Add boiled noodles to the wok.",
        "Add soy sauce, chili sauce, salt, and pepper.",
        "Mix everything well and cook for 2-3 minutes.",
        "Toss well to combine all ingredients.",
        "Serve hot with extra sauces if desired."
      ]
    },
    { 
      id: 22, 
      name: "Vegetable Pulao",
      tagline: "Fragrant rice with vegetables",
      image: quickImages[21],
      ingredients: [
        "1 cup basmati rice",
        "1 packet vegetable pulao mix",
        "2 cups water",
        "2 tablespoons oil or ghee",
        "½ cup mixed vegetables (peas, carrots, beans)",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash rice and soak for 15 minutes, then drain.",
        "Heat oil or ghee in pressure cooker.",
        "Add vegetables and sauté for 2 minutes.",
        "Add rice and fry for 1 minute.",
        "Add pulao mix and mix well.",
        "Add water and salt, stir gently.",
        "Close lid and cook for 1 whistle on medium heat.",
        "Let pressure release naturally.",
        "Fluff rice with fork and garnish with coriander.",
        "Serve hot with raita or salad."
      ]
    },
    { 
      id: 23, 
      name: "Chicken Roll",
      tagline: "Chicken wrap with sauce",
      image: quickImages[22],
      ingredients: [
        "2 ready-made parathas or rotis",
        "1 cup cooked chicken tikka pieces",
        "2 tablespoons mayonnaise",
        "1 tablespoon chili sauce",
        "½ cup shredded lettuce",
        "½ cup sliced onions",
        "½ cup sliced tomatoes",
        "Salt and pepper to taste"
      ],
      steps: [
        "Warm parathas or rotis on tawa.",
        "Mix mayonnaise and chili sauce in bowl.",
        "Spread sauce mixture on each paratha.",
        "Layer lettuce, onions, and tomatoes.",
        "Add chicken tikka pieces in center.",
        "Season with salt and pepper.",
        "Roll tightly, securing with foil or paper.",
        "Cut diagonally if desired.",
        "Serve immediately with extra sauce.",
        "Can be made with beef or vegetable filling."
      ]
    },
    { 
      id: 24, 
      name: "Aloo Keema",
      tagline: "Potato and minced meat curry",
      image: quickImages[23],
      ingredients: [
        "200g minced meat (beef or chicken)",
        "2 medium potatoes, diced",
        "1 onion, chopped",
        "2 tomatoes, chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon red chili powder",
        "½ teaspoon turmeric powder",
        "1 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Heat oil in pan, add chopped onion.",
        "Fry until golden brown.",
        "Add ginger-garlic paste and cook for 1 minute.",
        "Add minced meat and cook until browned.",
        "Add tomatoes and cook until soft.",
        "Add potatoes and all spices.",
        "Add 1 cup water, cover and cook for 10 minutes.",
        "Stir occasionally until potatoes are tender.",
        "Cook until gravy thickens.",
        "Garnish with fresh coriander and serve hot."
      ]
    },
    { 
      id: 25, 
      name: "Bhindi Masala",
      tagline: "Spiced okra stir-fry",
      image: quickImages[24],
      ingredients: [
        "250g okra (bhindi), washed and chopped",
        "1 onion, sliced",
        "2 tomatoes, chopped",
        "1 teaspoon cumin seeds",
        "1 teaspoon coriander powder",
        "½ teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash and dry okra thoroughly, then chop.",
        "Heat oil in pan, add cumin seeds.",
        "Add sliced onion and fry until golden.",
        "Add chopped okra and sauté for 5 minutes.",
        "Add tomatoes and cook until soft.",
        "Add all spices and salt.",
        "Cover and cook on low heat for 8-10 minutes.",
        "Stir occasionally to prevent sticking.",
        "Cook until okra is tender.",
        "Garnish with fresh coriander, serve hot."
      ]
    },
    { 
      id: 26, 
      name: "Chicken Fried Rice",
      tagline: "Quick chicken fried rice",
      image: quickImages[25],
      ingredients: [
        "2 cups leftover rice",
        "1 cup cooked chicken, shredded",
        "1 cup mixed vegetables (peas, carrots, corn)",
        "2 eggs (optional)",
        "3 tablespoons soy sauce",
        "1 tablespoon chili sauce",
        "2 tablespoons oil",
        "3 cloves garlic, minced",
        "Salt and pepper to taste",
        "Spring onions for garnish"
      ],
      steps: [
        "Heat oil in large wok or pan.",
        "Add minced garlic and stir-fry for 30 seconds.",
        "If using eggs, scramble them and set aside.",
        "Add vegetables and stir-fry for 3-4 minutes.",
        "Add shredded chicken and cook for 2 minutes.",
        "Add rice and break up any lumps.",
        "Add soy sauce, chili sauce, salt, and pepper.",
        "Mix everything well and cook for 3-4 minutes.",
        "Add scrambled eggs back if using.",
        "Garnish with spring onions, serve hot."
      ]
    },
    { 
      id: 27, 
      name: "Aloo Gosht",
      tagline: "Meat and potato curry",
      image: quickImages[26],
      ingredients: [
        "250g meat (beef or mutton), cubed",
        "3 potatoes, quartered",
        "1 onion, chopped",
        "2 tomatoes, chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon red chili powder",
        "½ teaspoon turmeric powder",
        "1 teaspoon garam masala",
        "2 tablespoons oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Heat oil in pressure cooker.",
        "Add chopped onion and fry until golden.",
        "Add ginger-garlic paste and cook for 1 minute.",
        "Add meat and brown on all sides.",
        "Add tomatoes and cook until soft.",
        "Add all spices and salt, mix well.",
        "Add potatoes and 2 cups water.",
        "Close lid and cook for 3-4 whistles.",
        "Let pressure release naturally.",
        "Garnish with coriander, serve hot with naan."
      ]
    },
    { 
      id: 28, 
      name: "Chicken Karahi",
      tagline: "Spicy karahi chicken",
      image: quickImages[27],
      ingredients: [
        "500g chicken, cut into pieces",
        "1 packet chicken karahi masala",
        "2 tomatoes, chopped",
        "1 onion, sliced",
        "2 green chilies, sliced",
        "1 tablespoon ginger-garlic paste",
        "¼ cup oil",
        "Salt to taste",
        "Fresh coriander for garnish",
        "Ginger juliennes for garnish"
      ],
      steps: [
        "Heat oil in karahi or deep pan.",
        "Add sliced onion and fry until translucent.",
        "Add ginger-garlic paste and cook for 1 minute.",
        "Add chicken pieces and brown on all sides.",
        "Add karahi masala and mix well.",
        "Add tomatoes and cook until soft.",
        "Add ½ cup water, cover and cook for 10 minutes.",
        "Add green chilies and cook for 5 more minutes.",
        "Cook until oil separates and chicken is tender.",
        "Garnish with coriander and ginger, serve hot."
      ]
    },
    { 
      id: 29, 
      name: "Beef Burger",
      tagline: "Classic beef burger",
      image: quickImages[28],
      ingredients: [
        "2 ready-made burger buns",
        "2 beef burger patties",
        "2 cheese slices",
        "4 lettuce leaves",
        "4 tomato slices",
        "4 onion rings",
        "2 tablespoons mayonnaise",
        "1 tablespoon ketchup",
        "1 tablespoon mustard sauce",
        "Butter for toasting"
      ],
      steps: [
        "Toast burger buns with butter until golden.",
        "Cook burger patties as per package instructions.",
        "Mix mayonnaise, ketchup, and mustard for sauce.",
        "Spread sauce on bottom bun.",
        "Layer lettuce, tomato, and onion.",
        "Place cooked patty on vegetables.",
        "Add cheese slice on patty.",
        "Cover with top bun.",
        "Serve immediately with fries.",
        "Can add bacon or extra toppings as desired."
      ]
    },
    { 
      id: 30, 
      name: "Chicken Burger",
      tagline: "Juicy chicken burger",
      image: quickImages[29],
      ingredients: [
        "2 ready-made burger buns",
        "2 chicken burger patties",
        "2 cheese slices",
        "4 lettuce leaves",
        "4 tomato slices",
        "4 onion rings",
        "2 tablespoons mayonnaise",
        "1 tablespoon barbecue sauce",
        "Butter for toasting",
        "Pickles (optional)"
      ],
      steps: [
        "Toast burger buns with butter until golden.",
        "Cook chicken patties as per instructions.",
        "Mix mayonnaise and barbecue sauce for dressing.",
        "Spread dressing on bottom bun.",
        "Layer lettuce, tomato, and onion.",
        "Place cooked chicken patty on vegetables.",
        "Add cheese slice on patty.",
        "Add pickles if using.",
        "Cover with top bun.",
        "Serve hot with coleslaw or fries."
      ]
    },

    // Microwave Specials (31-40)
    { 
      id: 31, 
      name: "Microwave Mug Cake",
      tagline: "Quick cake in a mug",
      image: quickImages[30],
      ingredients: [
        "4 tablespoons all-purpose flour",
        "3 tablespoons sugar",
        "2 tablespoons cocoa powder",
        "3 tablespoons milk",
        "2 tablespoons oil",
        "¼ teaspoon baking powder",
        "Pinch of salt",
        "¼ teaspoon vanilla extract",
        "2 tablespoons chocolate chips (optional)"
      ],
      steps: [
        "In microwave-safe mug, mix flour, sugar, cocoa powder.",
        "Add baking powder and salt, mix well.",
        "Add milk, oil, and vanilla extract.",
        "Mix until smooth batter forms.",
        "Add chocolate chips if using.",
        "Microwave on high for 1 minute 30 seconds.",
        "Check if cake is done, microwave 15 more seconds if needed.",
        "Let cool for 1 minute.",
        "Top with ice cream or whipped cream.",
        "Enjoy warm directly from mug."
      ]
    },
    { 
      id: 32, 
      name: "Ramen with Veggies",
      tagline: "Quick ramen noodles",
      image: quickImages[31],
      ingredients: [
        "1 packet instant ramen",
        "½ cup mixed vegetables (carrots, peas, corn)",
        "2 cups water",
        "1 egg (optional)",
        "1 tablespoon soy sauce",
        "½ teaspoon chili oil (optional)",
        "Spring onions for garnish",
        "Nori seaweed (optional)"
      ],
      steps: [
        "In microwave-safe bowl, add vegetables.",
        "Add ramen noodles and seasoning packet.",
        "Add water and microwave for 3 minutes.",
        "If using egg, crack into bowl after 2 minutes.",
        "Stir gently and microwave for 1 more minute.",
        "Add soy sauce and chili oil if using.",
        "Garnish with spring onions.",
        "Add nori seaweed if available.",
        "Stir well before serving.",
        "Enjoy hot directly from bowl."
      ]
    },
    { 
      id: 33, 
      name: "Microwave Omlette",
      tagline: "Quick egg omlette",
      image: quickImages[32],
      ingredients: [
        "2 eggs",
        "2 tablespoons milk",
        "2 tablespoons chopped vegetables (onion, tomato, bell pepper)",
        "2 tablespoons shredded cheese",
        "Salt and pepper to taste",
        "¼ teaspoon mixed herbs (optional)",
        "1 teaspoon butter or oil"
      ],
      steps: [
        "Grease microwave-safe plate with butter.",
        "In bowl, beat eggs with milk.",
        "Add chopped vegetables and seasonings.",
        "Pour mixture onto greased plate.",
        "Microwave on high for 1 minute.",
        "Sprinkle cheese on top.",
        "Microwave for another 30-45 seconds.",
        "Check if omelette is set.",
        "Let stand for 1 minute before serving.",
        "Fold or serve flat with toast."
      ]
    },
    { 
      id: 34, 
      name: "Bread Pizza",
      tagline: "Quick pizza on bread",
      image: quickImages[33],
      ingredients: [
        "2 slices of bread",
        "4 tablespoons pizza sauce",
        "½ cup shredded mozzarella cheese",
        "¼ cup chopped vegetables (bell peppers, onions, olives)",
        "¼ cup sliced mushrooms (optional)",
        "Pepperoni or cooked chicken (optional)",
        "¼ teaspoon oregano",
        "¼ teaspoon chili flakes"
      ],
      steps: [
        "Preheat oven or toaster oven to 200°C.",
        "Spread pizza sauce on bread slices.",
        "Add cheese as base layer.",
        "Add vegetables and toppings of choice.",
        "Top with more cheese.",
        "Sprinkle oregano and chili flakes.",
        "Bake for 5-7 minutes until cheese melts.",
        "For microwave: microwave for 1-2 minutes.",
        "Let cool for 1 minute before serving.",
        "Cut into triangles and serve hot."
      ]
    },
    { 
      id: 35, 
      name: "Microwave Potato Chips",
      tagline: "Homemade potato chips",
      image: quickImages[34],
      ingredients: [
        "1 large potato",
        "1 tablespoon oil",
        "Salt to taste",
        "¼ teaspoon black pepper",
        "¼ teaspoon paprika (optional)",
        "¼ teaspoon garlic powder (optional)"
      ],
      steps: [
        "Wash and thinly slice potato (use mandoline if available).",
        "Soak slices in cold water for 10 minutes, then pat dry.",
        "In bowl, mix potato slices with oil and seasonings.",
        "Arrange slices in single layer on microwave-safe plate.",
        "Microwave on high for 3-4 minutes.",
        "Flip slices and microwave for 2-3 more minutes.",
        "Check frequently to prevent burning.",
        "Let cool for 5 minutes to crisp up.",
        "Store in airtight container if not eating immediately.",
        "Serve with ketchup or dip of choice."
      ]
    },
    { 
      id: 36, 
      name: "Microwave Popcorn",
      tagline: "Fresh popcorn in minutes",
      image: quickImages[35],
      ingredients: [
        "½ cup popcorn kernels",
        "2 tablespoons oil",
        "Salt to taste",
        "2 tablespoons butter (optional)",
        "Cheese powder or caramel (optional)"
      ],
      steps: [
        "In microwave-safe bowl, mix popcorn kernels with oil.",
        "Cover bowl with microwave-safe plate.",
        "Microwave on high for 3-4 minutes.",
        "Listen for popping to slow down.",
        "Remove carefully (bowl will be hot).",
        "Season with salt immediately.",
        "Add melted butter if desired.",
        "For flavored popcorn: add cheese powder or caramel.",
        "Mix well to coat evenly.",
        "Serve immediately for best texture."
      ]
    },
    { 
      id: 37, 
      name: "Instant Coffee",
      tagline: "Perfect coffee in minutes",
      image: quickImages[36],
      ingredients: [
        "1 teaspoon instant coffee",
        "2 teaspoons sugar (adjust to taste)",
        "2 tablespoons hot water",
        "1 cup hot milk",
        "Cocoa powder for dusting (optional)"
      ],
      steps: [
        "In mug, add instant coffee and sugar.",
        "Add 2 tablespoons hot water.",
        "Beat vigorously with spoon until frothy (1-2 minutes).",
        "Heat milk until hot but not boiling.",
        "Pour hot milk into coffee mixture.",
        "Stir gently to combine.",
        "Dust with cocoa powder if desired.",
        "For iced coffee: use cold milk and add ice.",
        "Adjust sugar according to preference.",
        "Serve immediately."
      ]
    },
    { 
      id: 38, 
      name: "Tea with Rusk",
      tagline: "Classic tea time snack",
      image: quickImages[37],
      ingredients: [
        "2 teaspoons tea leaves",
        "1 cup water",
        "½ cup milk",
        "2 teaspoons sugar (adjust to taste)",
        "4-5 rusks (toasted bread slices)",
        "Cardamom (optional)"
      ],
      steps: [
        "Boil water in saucepan.",
        "Add tea leaves and boil for 2 minutes.",
        "Add milk and sugar, bring to boil.",
        "Add cardamom if using.",
        "Simmer for 2-3 minutes until desired color.",
        "Strain into cups.",
        "Serve hot with rusks on side.",
        "Dip rusk in tea before eating.",
        "For masala tea: add ginger and other spices.",
        "Enjoy as breakfast or evening snack."
      ]
    },
    { 
      id: 39, 
      name: "Microwave Pasta",
      tagline: "Quick pasta in microwave",
      image: quickImages[38],
      ingredients: [
        "½ cup pasta (penne or macaroni)",
        "1 cup water",
        "½ cup pasta sauce",
        "2 tablespoons grated cheese",
        "Salt to taste",
        "¼ teaspoon mixed herbs",
        "2 tablespoons chopped vegetables (optional)"
      ],
      steps: [
        "In microwave-safe bowl, add pasta and water.",
        "Add salt and microwave for 5 minutes.",
        "Stir and microwave for another 5 minutes.",
        "Check if pasta is cooked, drain excess water.",
        "Add pasta sauce and vegetables if using.",
        "Microwave for 2 more minutes.",
        "Add cheese and herbs, mix well.",
        "Microwave for 1 minute until cheese melts.",
        "Let stand for 2 minutes before serving.",
        "Serve hot with garlic bread."
      ]
    },
    { 
      id: 40, 
      name: "Bread Pakora",
      tagline: "Crispy bread fritters",
      image: quickImages[39],
      ingredients: [
        "4 slices of bread",
        "1 cup besan (gram flour)",
        "½ cup water",
        "1 teaspoon red chili powder",
        "½ teaspoon turmeric powder",
        "1 teaspoon chaat masala",
        "Salt to taste",
        "Oil for spraying",
        "Chutney for serving"
      ],
      steps: [
        "Cut bread slices into triangles or desired shape.",
        "Mix besan with water to make batter.",
        "Add all spices and salt to batter.",
        "Preheat air fryer to 200°C.",
        "Dip bread pieces in batter, coat evenly.",
        "Place in air fryer basket in single layer.",
        "Spray lightly with oil.",
        "Air fry at 200°C for 8-10 minutes.",
        "Flip halfway through cooking.",
        "Serve hot with chutney or ketchup."
      ]
    },

    // One-Pot Meals (41-50)
    { 
      id: 41, 
      name: "Chicken Biryani",
      tagline: "One-pot biryani with ready mix",
      image: quickImages[40],
      ingredients: [
        "2 cups basmati rice",
        "500g chicken, cut into pieces",
        "1 packet biryani masala",
        "2 onions, sliced",
        "2 tomatoes, chopped",
        "½ cup yogurt",
        "¼ cup oil",
        "2 cups water",
        "Salt to taste",
        "Fresh coriander and mint for garnish"
      ],
      steps: [
        "Wash and soak rice for 30 minutes.",
        "Heat oil in large pot, fry onions until golden.",
        "Add chicken and brown on all sides.",
        "Add tomatoes and cook until soft.",
        "Add biryani masala and yogurt, mix well.",
        "Add drained rice and water.",
        "Add salt and bring to boil.",
        "Cover and cook on low heat for 15-20 minutes.",
        "Garnish with coriander and mint.",
        "Let rest for 10 minutes before serving."
      ]
    },
    { 
      id: 42, 
      name: "Beef Pulao",
      tagline: "Fragrant beef rice",
      image: quickImages[41],
      ingredients: [
        "2 cups basmati rice",
        "300g beef, cubed",
        "2 onions, sliced",
        "2 tomatoes, chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "2 bay leaves",
        "4 cloves",
        "4 cardamoms",
        "½ cup oil",
        "Salt to taste",
        "4 cups water"
      ],
      steps: [
        "Wash and soak rice for 30 minutes.",
        "Heat oil in pressure cooker, add whole spices.",
        "Add onions and fry until golden.",
        "Add ginger-garlic paste and cook for 1 minute.",
        "Add beef and brown on all sides.",
        "Add tomatoes and cook until soft.",
        "Add drained rice and water.",
        "Add salt and mix gently.",
        "Close lid and cook for 2 whistles.",
        "Let pressure release, fluff rice before serving."
      ]
    },
    { 
      id: 43, 
      name: "Mutton Haleem",
      tagline: "Rich meat and lentil porridge",
      image: quickImages[42],
      ingredients: [
        "250g mutton, boneless",
        "1 cup mixed lentils (masoor, moong, chana dal)",
        "1 packet haleem mix",
        "1 onion, chopped",
        "2 tablespoons ginger-garlic paste",
        "½ cup oil or ghee",
        "6 cups water",
        "Salt to taste",
        "Fried onions for garnish",
        "Lemon wedges for serving"
      ],
      steps: [
        "Soak lentils for 30 minutes, then drain.",
        "In pressure cooker, add mutton, lentils, and haleem mix.",
        "Add onion, ginger-garlic paste, and water.",
        "Add salt and mix well.",
        "Close lid and cook for 4-5 whistles.",
        "Let pressure release naturally.",
        "Mash mixture until smooth consistency.",
        "Heat oil or ghee in separate pan.",
        "Pour hot oil over haleem.",
        "Garnish with fried onions, serve with lemon."
      ]
    },
    { 
      id: 44, 
      name: "Chicken Tikka",
      tagline: "Grilled marinated chicken",
      image: quickImages[43],
      ingredients: [
        "500g chicken breast, cubed",
        "1 cup ready-made tikka marinade",
        "2 tablespoons yogurt",
        "1 tablespoon lemon juice",
        "2 tablespoons oil",
        "Bell peppers and onions for skewers",
        "Chat masala for sprinkling",
        "Lemon wedges for serving"
      ],
      steps: [
        "In bowl, mix chicken with tikka marinade.",
        "Add yogurt and lemon juice, mix well.",
        "Marinate for at least 30 minutes (or as per package).",
        "Thread chicken on skewers with vegetables.",
        "Brush with oil.",
        "Grill in oven or on stovetop for 10-12 minutes.",
        "Turn occasionally until cooked through.",
        "For pan: cook in non-stick pan with little oil.",
        "Sprinkle chaat masala before serving.",
        "Serve hot with naan and raita."
      ]
    },
    { 
      id: 45, 
      name: "Seekh Kebab",
      tagline: "Ready-made seekh kebabs",
      image: quickImages[44],
      ingredients: [
        "8 ready-made seekh kebabs",
        "2 tablespoons oil",
        "Onion rings for serving",
        "Lemon wedges",
        "Green chutney",
        "Tandoori naan or paratha",
        "Chat masala"
      ],
      steps: [
        "Preheat oven to 200°C or heat grill pan.",
        "Brush kebabs lightly with oil.",
        "Grill for 8-10 minutes, turning occasionally.",
        "For pan: cook in non-stick pan with oil.",
        "Cook until golden brown on all sides.",
        "For microwave: microwave for 2-3 minutes.",
        "Sprinkle chaat masala while hot.",
        "Serve with onion rings and lemon.",
        "Accompany with green chutney.",
        "Enjoy with naan or in sandwiches."
      ]
    },
    { 
      id: 46, 
      name: "Butter Chicken",
      tagline: "Creamy butter chicken",
      image: quickImages[45],
      ingredients: [
        "500g chicken, boneless",
        "1 packet butter chicken gravy",
        "2 tablespoons butter",
        "2 tablespoons cream",
        "1 onion, chopped",
        "1 teaspoon ginger-garlic paste",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Heat butter in pan, add chopped onion.",
        "Fry until golden brown.",
        "Add ginger-garlic paste and cook for 1 minute.",
        "Add chicken pieces and cook until white.",
        "Add butter chicken gravy and mix well.",
        "Add ½ cup water and simmer for 10 minutes.",
        "Add cream and mix gently.",
        "Cook until chicken is tender and gravy thickens.",
        "Garnish with fresh coriander.",
        "Serve hot with naan or rice."
      ]
    },
    { 
      id: 47, 
      name: "Chicken Shawarma",
      tagline: "Chicken wrap with garlic sauce",
      image: quickImages[46],
      ingredients: [
        "4 pita bread or tortillas",
        "2 cups ready-made shawarma chicken",
        "1 cup shredded lettuce",
        "1 cup sliced tomatoes",
        "1 cup sliced onions",
        "½ cup garlic sauce",
        "½ cup tahini sauce",
        "Pickles (optional)",
        "French fries (optional)"
      ],
      steps: [
        "Warm pita bread or tortillas.",
        "Heat shawarma chicken as per package.",
        "Spread garlic sauce on bread.",
        "Layer lettuce, tomatoes, and onions.",
        "Add warm chicken shawarma.",
        "Add pickles if using.",
        "Drizzle tahini sauce over chicken.",
        "Add fries if making Arabic style.",
        "Roll tightly into wrap.",
        "Grill lightly if desired, serve hot."
      ]
    },
    { 
      id: 48, 
      name: "Beef Steak",
      tagline: "Pan-seared beef steak",
      image: quickImages[47],
      ingredients: [
        "2 beef steaks",
        "2 tablespoons butter",
        "2 cloves garlic, crushed",
        "1 teaspoon black pepper",
        "1 teaspoon salt",
        "1 tablespoon olive oil",
        "Thyme or rosemary (optional)",
        "Mushroom sauce (optional)"
      ],
      steps: [
        "Bring steaks to room temperature.",
        "Season both sides with salt and pepper.",
        "Heat oil in pan until smoking hot.",
        "Add steaks and sear for 2-3 minutes per side.",
        "Add butter, garlic, and herbs to pan.",
        "Baste steaks with butter for 1 minute.",
        "Remove and let rest for 5 minutes.",
        "For sauce: add cream to pan drippings.",
        "Slice against the grain before serving.",
        "Serve with vegetables or mashed potatoes."
      ]
    },
    { 
      id: 49, 
      name: "Pizza",
      tagline: "Homemade pizza with ready base",
      image: quickImages[48],
      ingredients: [
        "2 ready-made pizza bases",
        "1 cup pizza sauce",
        "2 cups shredded mozzarella",
        "1 cup toppings (pepperoni, mushrooms, olives)",
        "½ cup bell peppers, sliced",
        "½ cup onions, sliced",
        "1 teaspoon oregano",
        "1 teaspoon chili flakes",
        "Olive oil for brushing"
      ],
      steps: [
        "Preheat oven to 220°C.",
        "Brush pizza bases with olive oil.",
        "Spread pizza sauce evenly.",
        "Add cheese as base layer.",
        "Add toppings of choice.",
        "Top with more cheese.",
        "Sprinkle oregano and chili flakes.",
        "Bake for 10-12 minutes until crust golden.",
        "For crispier crust: pre-bake base for 5 minutes.",
        "Slice and serve hot."
      ]
    },
    { 
      id: 50, 
      name: "Ice Cream with Toppings",
      tagline: "Custom ice cream sundae",
      image: quickImages[49],
      ingredients: [
        "2 scoops vanilla ice cream",
        "2 tablespoons chocolate syrup",
        "2 tablespoons caramel sauce",
        "2 tablespoons chopped nuts",
        "2 tablespoons sprinkles",
        "Whipped cream",
        "Cherry for topping",
        "Crushed cookies (optional)",
        "Fresh fruits (optional)"
      ],
      steps: [
        "Place ice cream scoops in serving bowl.",
        "Drizzle chocolate syrup over ice cream.",
        "Add caramel sauce.",
        "Sprinkle chopped nuts.",
        "Add sprinkles for color.",
        "Top with whipped cream.",
        "Add cherry on top.",
        "For sundae: add crushed cookies between layers.",
        "Add fresh fruits like strawberries or bananas.",
        "Serve immediately before ice cream melts."
      ]
    },

    // No-Cook Recipes (51-60)
    { 
      id: 51, 
      name: "Fruit Chaat",
      tagline: "Tangy mixed fruit salad",
      image: quickImages[50],
      ingredients: [
        "1 apple, chopped",
        "1 banana, sliced",
        "1 orange, segmented",
        "½ cup pomegranate seeds",
        "½ cup grapes, halved",
        "1 teaspoon chaat masala",
        "½ teaspoon black salt",
        "1 tablespoon lemon juice",
        "Fresh mint leaves for garnish"
      ],
      steps: [
        "Wash and prepare all fruits.",
        "Chop apple into bite-sized pieces.",
        "Slice banana into rounds.",
        "Peel and segment orange.",
        "In large bowl, mix all fruits together.",
        "Add pomegranate seeds.",
        "Sprinkle chaat masala and black salt.",
        "Drizzle lemon juice over fruits.",
        "Gently mix without mashing fruits.",
        "Garnish with mint leaves, serve immediately."
      ]
    },
    { 
      id: 52, 
      name: "Vegetable Salad",
      tagline: "Fresh garden salad",
      image: quickImages[51],
      ingredients: [
        "1 cucumber, chopped",
        "2 tomatoes, chopped",
        "1 onion, sliced",
        "1 bell pepper, chopped",
        "1 carrot, grated",
        "2 tablespoons olive oil",
        "1 tablespoon lemon juice",
        "Salt and pepper to taste",
        "Fresh herbs (parsley, mint)",
        "Feta cheese (optional)"
      ],
      steps: [
        "Wash all vegetables thoroughly.",
        "Chop cucumber, tomatoes, and bell pepper.",
        "Slice onion thinly.",
        "Grate carrot.",
        "In large bowl, combine all vegetables.",
        "In small bowl, whisk olive oil and lemon juice.",
        "Add salt and pepper to dressing.",
        "Pour dressing over vegetables.",
        "Toss gently to combine.",
        "Garnish with herbs and feta if using."
      ]
    },
    { 
      id: 53, 
      name: "Chicken Salad",
      tagline: "Creamy chicken salad",
      image: quickImages[52],
      ingredients: [
        "2 cups boiled chicken, shredded",
        "1 cup mayonnaise",
        "½ cup celery, chopped",
        "¼ cup onion, finely chopped",
        "1 tablespoon lemon juice",
        "Salt and pepper to taste",
        "Lettuce leaves for serving",
        "Bread for sandwiches",
        "Fresh dill (optional)"
      ],
      steps: [
        "Shred boiled chicken into small pieces.",
        "In bowl, mix chicken with mayonnaise.",
        "Add chopped celery and onion.",
        "Add lemon juice and seasonings.",
        "Mix well until combined.",
        "Chill in refrigerator for 30 minutes.",
        "Serve on bed of lettuce leaves.",
        "For sandwiches: spread on bread with lettuce.",
        "Garnish with fresh dill if using.",
        "Store in airtight container in fridge."
      ]
    },
    { 
      id: 54, 
      name: "Grilled Sandwich",
      tagline: "Toasted cheese sandwich",
      image: quickImages[53],
      ingredients: [
        "4 slices of bread",
        "2 tablespoons butter",
        "4 slices cheese",
        "4 slices ham or turkey (optional)",
        "2 tablespoons mayonnaise",
        "1 tablespoon mustard",
        "Lettuce leaves",
        "Tomato slices"
      ],
      steps: [
        "Butter one side of each bread slice.",
        "On unbuttered side, spread mayonnaise.",
        "Add mustard if desired.",
        "Layer cheese, ham, lettuce, and tomato.",
        "Top with another bread slice, buttered side out.",
        "Heat grill pan or sandwich maker.",
        "Grill until golden brown and cheese melts.",
        "Cut diagonally into triangles.",
        "Serve hot with ketchup or chips.",
        "Can use panini press for professional results."
      ]
    },
    { 
      id: 55, 
      name: "Banana Smoothie",
      tagline: "Creamy banana drink",
      image: quickImages[54],
      ingredients: [
        "2 ripe bananas",
        "1 cup milk or yogurt",
        "1 tablespoon honey or sugar",
        "½ teaspoon vanilla extract",
        "Ice cubes (optional)",
        "Pinch of cinnamon (optional)",
        "1 tablespoon peanut butter (optional)",
        "Chocolate chips for garnish"
      ],
      steps: [
        "Peel bananas and break into chunks.",
        "Add bananas to blender.",
        "Add milk or yogurt.",
        "Add honey or sugar.",
        "Add vanilla extract.",
        "Add ice cubes if using.",
        "Blend until smooth and creamy.",
        "For thicker smoothie: use frozen bananas.",
        "Pour into glasses.",
        "Garnish with cinnamon or chocolate chips."
      ]
    },
    { 
      id: 56, 
      name: "Boiled Corn",
      tagline: "Simple boiled corn on cob",
      image: quickImages[55],
      ingredients: [
        "2 corn cobs",
        "Water for boiling",
        "Salt to taste",
        "Butter for serving",
        "Lemon wedges",
        "Chaat masala (optional)",
        "Red chili powder (optional)"
      ],
      steps: [
        "Remove husks and silk from corn.",
        "Rinse corn cobs under running water.",
        "In large pot, bring water to boil.",
        "Add salt to water.",
        "Add corn cobs to boiling water.",
        "Boil for 10-15 minutes until tender.",
        "Remove corn and drain.",
        "Brush with butter while hot.",
        "Sprinkle chaat masala or chili powder.",
        "Serve with lemon wedges."
      ]
    },
    { 
      id: 57, 
      name: "Yogurt Dip",
      tagline: "Creamy yogurt dip",
      image: quickImages[56],
      ingredients: [
        "1 cup Greek yogurt",
        "2 tablespoons mayonnaise",
        "1 clove garlic, minced",
        "1 tablespoon fresh dill, chopped",
        "1 tablespoon lemon juice",
        "Salt and pepper to taste",
        "Cucumber, grated and drained (optional)",
        "Chips or vegetables for dipping"
      ],
      steps: [
        "In bowl, combine yogurt and mayonnaise.",
        "Add minced garlic.",
        "Add chopped dill.",
        "Add lemon juice.",
        "Season with salt and pepper.",
        "If using cucumber: grate and squeeze out water.",
        "Mix cucumber into yogurt mixture.",
        "Chill for at least 30 minutes.",
        "Serve with chips, crackers, or vegetable sticks.",
        "Store in airtight container in fridge."
      ]
    },
    { 
      id: 58, 
      name: "Sprouts Salad",
      tagline: "Healthy sprouted salad",
      image: quickImages[57],
      ingredients: [
        "2 cups mixed sprouts (moong, chana)",
        "1 cucumber, chopped",
        "1 tomato, chopped",
        "1 onion, chopped",
        "1 green chili, chopped (optional)",
        "2 tablespoons lemon juice",
        "1 teaspoon chaat masala",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash sprouts thoroughly.",
        "If using raw sprouts, steam for 5 minutes.",
        "In large bowl, combine sprouts.",
        "Add chopped cucumber, tomato, and onion.",
        "Add green chili if using.",
        "Add lemon juice and chaat masala.",
        "Add salt and mix well.",
        "Garnish with fresh coriander.",
        "Chill in refrigerator for 15 minutes.",
        "Serve as healthy snack or side dish."
      ]
    },
    { 
      id: 59, 
      name: "Sandwich Spreads",
      tagline: "Mix and match spreads",
      image: quickImages[58],
      ingredients: [
        "For egg spread: 2 boiled eggs, 2 tbsp mayo",
        "For tuna spread: 1 can tuna, 2 tbsp mayo",
        "For vegetable spread: ½ cup mixed vegetables",
        "For cheese spread: 4 tbsp cream cheese",
        "Bread slices",
        "Salt and pepper",
        "Herbs as desired"
      ],
      steps: [
        "For egg spread: mash eggs, mix with mayo.",
        "Season with salt, pepper, and herbs.",
        "For tuna spread: drain tuna, mix with mayo.",
        "Add chopped celery or onion if desired.",
        "For vegetable spread: grate carrots, cucumber.",
        "Mix with cream cheese or mayo.",
        "For cheese spread: mix cream cheese with herbs.",
        "Add garlic powder for extra flavor.",
        "Spread on bread for sandwiches.",
        "Store spreads in airtight containers."
      ]
    },
    { 
      id: 60, 
      name: "Cold Coffee",
      tagline: "Iced coffee with ice cream",
      image: quickImages[59],
      ingredients: [
        "1 cup cold milk",
        "2 teaspoons instant coffee",
        "2 tablespoons sugar",
        "2 scoops vanilla ice cream",
        "Ice cubes",
        "Chocolate syrup (optional)",
        "Whipped cream for topping",
        "Chocolate shavings for garnish"
      ],
      steps: [
        "In blender, add milk, coffee, and sugar.",
        "Add 2-3 ice cubes.",
        "Add one scoop of ice cream.",
        "Blend until frothy and smooth.",
        "Pour into tall glasses.",
        "Add remaining ice cream scoop.",
        "Top with whipped cream.",
        "Drizzle chocolate syrup if using.",
        "Garnish with chocolate shavings.",
        "Serve immediately with straw."
      ]
    },

    // Ready-to-Eat Upgrades (61-70)
    { 
      id: 61, 
      name: "Samosa with Chutney",
      tagline: "Crispy samosas with mint chutney",
      image: quickImages[60],
      ingredients: [
        "4 ready-made samosas",
        "Oil for frying (if needed)",
        "For mint chutney: 1 cup mint leaves",
        "½ cup coriander leaves",
        "1 green chili",
        "1 tablespoon lemon juice",
        "Salt to taste",
        "For tamarind chutney: 2 tbsp tamarind paste",
        "2 tbsp jaggery or sugar",
        "Water as needed"
      ],
      steps: [
        "If samosas are frozen, fry or bake as per package.",
        "For mint chutney: blend all ingredients.",
        "Add water to achieve desired consistency.",
        "For tamarind chutney: mix tamarind and jaggery.",
        "Add water and cook until slightly thick.",
        "Let chutneys cool before serving.",
        "Arrange samosas on serving plate.",
        "Serve with both chutneys in separate bowls.",
        "Garnish with chopped coriander.",
        "Enjoy hot samosas with chutneys."
      ]
    },
    { 
      id: 62, 
      name: "Pakora with Tea",
      tagline: "Crispy pakoras with masala tea",
      image: quickImages[61],
      ingredients: [
        "1 packet ready-made pakora mix",
        "Water as needed",
        "Oil for frying",
        "2 potatoes, sliced (optional)",
        "1 onion, sliced (optional)",
        "For tea: 2 tsp tea leaves",
        "1 cup water",
        "½ cup milk",
        "Sugar to taste",
        "Ginger (optional)"
      ],
      steps: [
        "Prepare pakora mix as per package instructions.",
        "Add sliced vegetables if using.",
        "Heat oil for deep frying.",
        "Drop spoonfuls of batter into hot oil.",
        "Fry until golden brown and crispy.",
        "Drain on paper towels.",
        "For tea: boil water with tea leaves.",
        "Add milk and sugar, bring to boil.",
        "Add ginger if using for masala tea.",
        "Serve hot pakoras with steaming tea."
      ]
    },
    { 
      id: 63, 
      name: "French Fries with Ketchup",
      tagline: "Crispy fries with sauce",
      image: quickImages[62],
      ingredients: [
        "2 large potatoes or frozen fries",
        "Oil for frying",
        "Salt to taste",
        "½ cup ketchup",
        "1 tablespoon mayonnaise (optional)",
        "1 teaspoon chili sauce (optional)",
        "Cheese sauce (optional)",
        "Oregano or herbs (optional)"
      ],
      steps: [
        "If using fresh potatoes: cut into fries.",
        "Soak in cold water for 30 minutes, then pat dry.",
        "Heat oil to 180°C.",
        "Fry potatoes until golden and crispy.",
        "Drain on paper towels.",
        "Season with salt immediately.",
        "For sauce: mix ketchup with mayo and chili sauce.",
        "For cheese sauce: melt cheese with milk.",
        "Serve fries hot with sauces.",
        "Sprinkle herbs if desired."
      ]
    },
    { 
      id: 64, 
      name: "Chicken Wings",
      tagline: "Crispy baked chicken wings",
      image: quickImages[63],
      ingredients: [
        "500g frozen chicken wings",
        "2 tablespoons oil",
        "Salt and pepper to taste",
        "BBQ sauce or hot sauce",
        "2 tablespoons honey (optional)",
        "1 tablespoon soy sauce",
        "Sesame seeds for garnish",
        "Spring onions for garnish"
      ],
      steps: [
        "Preheat oven to 200°C.",
        "Toss wings with oil, salt, and pepper.",
        "Arrange on baking tray in single layer.",
        "Bake for 25-30 minutes, flipping halfway.",
        "For sauce: mix BBQ sauce, honey, and soy sauce.",
        "Toss baked wings in sauce.",
        "Return to oven for 5 minutes.",
        "For crispy wings: broil for 2-3 minutes.",
        "Garnish with sesame seeds and spring onions.",
        "Serve hot with celery sticks and dip."
      ]
    },
    { 
      id: 65, 
      name: "Spring Rolls",
      tagline: "Crispy spring rolls with dip",
      image: quickImages[64],
      ingredients: [
        "10-12 frozen spring rolls",
        "Oil for frying",
        "For dipping sauce:",
        "2 tablespoons soy sauce",
        "1 tablespoon vinegar",
        "1 teaspoon sugar",
        "1 teaspoon chili garlic sauce",
        "1 teaspoon sesame oil",
        "Spring onions for garnish"
      ],
      steps: [
        "Heat oil to 180°C.",
        "Fry frozen spring rolls until golden brown.",
        "Do not overcrowd the pan.",
        "Drain on paper towels.",
        "For air fryer: cook at 200°C for 10-12 minutes.",
        "For dipping sauce: mix all ingredients.",
        "Adjust sweetness and spiciness to taste.",
        "Garnish sauce with spring onions.",
        "Arrange spring rolls on serving plate.",
        "Serve hot with dipping sauce."
      ]
    },
    { 
      id: 66, 
      name: "Chicken Nuggets",
      tagline: "Crispy chicken nuggets",
      image: quickImages[65],
      ingredients: [
        "20-25 frozen chicken nuggets",
        "Oil for frying (if needed)",
        "½ cup ketchup",
        "½ cup barbecue sauce",
        "1 tablespoon honey mustard",
        "French fries (optional)",
        "Coleslaw (optional)",
        "Lemon wedges for serving"
      ],
      steps: [
        "Preheat oven to 200°C.",
        "Arrange nuggets on baking tray.",
        "Bake for 15-20 minutes, flipping halfway.",
        "For frying: heat oil and fry until golden.",
        "For air fryer: cook at 200°C for 10 minutes.",
        "Mix sauces for dipping.",
        "Serve nuggets with sauces.",
        "Accompany with fries and coleslaw if desired.",
        "Garnish with lemon wedges.",
        "Serve immediately while crispy."
      ]
    },
    { 
      id: 67, 
      name: "Onion Rings",
      tagline: "Crispy fried onion rings",
      image: quickImages[66],
      ingredients: [
        "1 large onion or frozen onion rings",
        "1 cup flour",
        "1 cup breadcrumbs",
        "1 egg, beaten",
        "Salt and pepper to taste",
        "Oil for frying",
        "Dipping sauces of choice",
        "Paprika or cayenne (optional)"
      ],
      steps: [
        "If using fresh onion: slice into rings.",
        "Separate rings and pat dry.",
        "Season flour with salt, pepper, and paprika.",
        "Dip rings in flour, then egg, then breadcrumbs.",
        "Heat oil to 180°C.",
        "Fry until golden brown and crispy.",
        "Drain on paper towels.",
        "For frozen: cook as per package instructions.",
        "Season with salt immediately after frying.",
        "Serve hot with dipping sauces."
      ]
    },
    { 
      id: 68, 
      name: "Cheese Sticks",
      tagline: "Crispy mozzarella sticks",
      image: quickImages[67],
      ingredients: [
        "10-12 mozzarella cheese sticks",
        "1 cup breadcrumbs",
        "½ cup flour",
        "2 eggs, beaten",
        "Oil for frying",
        "Marinara sauce for dipping",
        "Garlic powder (optional)",
        "Italian herbs (optional)"
      ],
      steps: [
        "Keep cheese sticks frozen until ready to use.",
        "Place flour, beaten eggs, and breadcrumbs in separate bowls.",
        "Season breadcrumbs with herbs if desired.",
        "Dip each cheese stick in flour, then egg, then breadcrumbs.",
        "Repeat dipping for extra coating.",
        "Heat oil to 180°C.",
        "Fry until golden brown (1-2 minutes).",
        "Do not overcrowd the pan.",
        "Drain on paper towels.",
        "Serve immediately with marinara sauce."
      ]
    },
    { 
      id: 69, 
      name: "Nachos with Salsa",
      tagline: "Loaded cheese nachos",
      image: quickImages[68],
      ingredients: [
        "200g tortilla chips",
        "1 cup grated cheese",
        "½ cup salsa",
        "½ cup guacamole",
        "½ cup sour cream",
        "Jalapeños (optional)",
        "Black olives, sliced",
        "Spring onions, chopped",
        "Refried beans (optional)"
      ],
      steps: [
        "Preheat oven to 180°C.",
        "Arrange tortilla chips on oven-safe plate.",
        "Sprinkle grated cheese evenly.",
        "Add jalapeños and olives if using.",
        "Bake for 5-7 minutes until cheese melts.",
        "Remove from oven carefully.",
        "Top with dollops of salsa and guacamole.",
        "Add sour cream in center.",
        "Garnish with spring onions.",
        "Serve immediately while chips are crisp."
      ]
    },
    { 
      id: 70, 
      name: "Chocolate Brownie",
      tagline: "Fudgy chocolate brownie",
      image: quickImages[69],
      ingredients: [
        "1 ready-made brownie mix",
        "Ingredients as per package (usually eggs, oil, water)",
        "Vanilla ice cream",
        "Chocolate sauce",
        "Whipped cream",
        "Chopped nuts",
        "Fresh berries (optional)",
        "Powdered sugar for dusting"
      ],
      steps: [
        "Preheat oven as per package instructions.",
        "Prepare brownie mix as directed.",
        "Pour into greased baking pan.",
        "Bake for time specified on package.",
        "Let cool completely before cutting.",
        "Cut into squares or rectangles.",
        "Serve warm or at room temperature.",
        "Top with vanilla ice cream.",
        "Drizzle with chocolate sauce.",
        "Garnish with nuts and powdered sugar."
      ]
    },

    // Quick Desserts (71-80)
    { 
      id: 71, 
      name: "Kheer",
      tagline: "Creamy rice pudding",
      image: quickImages[70],
      ingredients: [
        "1 packet kheer mix",
        "4 cups milk",
        "½ cup sugar (adjust to taste)",
        "2 tablespoons chopped nuts",
        "¼ teaspoon cardamom powder",
        "Saffron strands (optional)",
        "Raisins (optional)"
      ],
      steps: [
        "In saucepan, bring milk to boil.",
        "Reduce heat and simmer for 5 minutes.",
        "Add kheer mix slowly while stirring.",
        "Add sugar and mix well.",
        "Cook for 8-10 minutes until thickened.",
        "Add cardamom powder and saffron if using.",
        "Remove from heat and let cool slightly.",
        "Garnish with chopped nuts and raisins.",
        "Serve warm or chilled.",
        "Can be served as dessert or snack."
      ]
    },
    { 
      id: 72, 
      name: "Gulab Jamun",
      tagline: "Soft milk dumplings in syrup",
      image: quickImages[71],
      ingredients: [
        "1 packet ready-made gulab jamun mix",
        "Oil or ghee for frying",
        "For syrup: 2 cups sugar",
        "2 cups water",
        "4-5 cardamom pods",
        "1 teaspoon rose water",
        "Chopped pistachios for garnish"
      ],
      steps: [
        "Prepare syrup: boil sugar and water.",
        "Add cardamom and simmer for 10 minutes.",
        "Add rose water, remove from heat.",
        "Prepare gulab jamun mix as per package.",
        "Shape into smooth balls.",
        "Heat oil on medium heat.",
        "Fry balls until golden brown.",
        "Immediately transfer to warm syrup.",
        "Soak for at least 1 hour.",
        "Garnish with pistachios, serve warm or cold."
      ]
    },
    { 
      id: 73, 
      name: "Jalebi",
      tagline: "Crispy spiral sweets",
      image: quickImages[72],
      ingredients: [
        "1 packet jalebi mix",
        "Oil for frying",
        "For syrup: 1½ cups sugar",
        "1 cup water",
        "½ teaspoon cardamom powder",
        "Saffron strands (optional)",
        "Food color (optional)"
      ],
      steps: [
        "Prepare batter as per package instructions.",
        "Let batter rest for recommended time.",
        "Prepare syrup: boil sugar and water.",
        "Add cardamom and saffron if using.",
        "Simmer until one-string consistency.",
        "Heat oil in kadai or deep pan.",
        "Pour batter in circular motions to form jalebis.",
        "Fry until crisp and golden.",
        "Immediately dip in warm syrup.",
        "Serve hot with rabri or milk."
      ]
    },
    { 
      id: 74, 
      name: "Ras Malai",
      tagline: "Soft cheese dumplings in milk",
      image: quickImages[73],
      ingredients: [
        "1 packet ready-made rasmalai",
        "4 cups milk",
        "½ cup sugar",
        "¼ teaspoon cardamom powder",
        "Saffron strands",
        "Chopped nuts for garnish",
        "Rose water (optional)"
      ],
      steps: [
        "In pan, heat milk and bring to boil.",
        "Reduce heat and add sugar.",
        "Add cardamom powder and saffron.",
        "Simmer until milk reduces slightly.",
        "Add rose water if using.",
        "Add rasmalai balls to milk.",
        "Simmer for 5 minutes on low heat.",
        "Remove from heat and let cool.",
        "Chill in refrigerator for at least 2 hours.",
        "Garnish with chopped nuts before serving."
      ]
    },
    { 
      id: 75, 
      name: "Fruit Custard",
      tagline: "Creamy fruit dessert",
      image: quickImages[74],
      ingredients: [
        "1 packet custard powder",
        "4 cups milk",
        "½ cup sugar",
        "2 cups mixed fruits (banana, apple, mango, grapes)",
        "¼ teaspoon cardamom powder",
        "Chopped nuts for garnish",
        "Cherries for decoration"
      ],
      steps: [
        "Mix custard powder with ½ cup cold milk.",
        "Heat remaining milk in saucepan.",
        "Add sugar and bring to simmer.",
        "Add custard mixture slowly while stirring.",
        "Cook until thickened, stirring continuously.",
        "Remove from heat and add cardamom.",
        "Let cool to room temperature.",
        "Chop fruits and add to cooled custard.",
        "Chill in refrigerator for 1 hour.",
        "Garnish with nuts and cherries before serving."
      ]
    },
    { 
      id: 76, 
      name: "Chocolate Mousse",
      tagline: "Light and airy chocolate dessert",
      image: quickImages[75],
      ingredients: [
        "200g dark chocolate",
        "2 cups heavy cream",
        "¼ cup powdered sugar",
        "1 teaspoon vanilla extract",
        "2 tablespoons cocoa powder",
        "Chocolate shavings for garnish",
        "Fresh berries for serving",
        "Whipped cream for topping"
      ],
      steps: [
        "Melt chocolate in double boiler or microwave.",
        "Let cool slightly.",
        "Whip cream with powdered sugar until stiff peaks.",
        "Fold melted chocolate into whipped cream.",
        "Add vanilla extract and mix gently.",
        "Divide into serving glasses.",
        "Chill in refrigerator for at least 4 hours.",
        "Before serving, dust with cocoa powder.",
        "Top with whipped cream.",
        "Garnish with chocolate shavings and berries."
      ]
    },
    { 
      id: 77, 
      name: "Ice Cream Sandwich",
      tagline: "Cookie ice cream sandwich",
      image: quickImages[76],
      ingredients: [
        "8 cookies (chocolate chip or vanilla)",
        "4 scoops ice cream (any flavor)",
        "Sprinkles or chocolate chips",
        "Chocolate sauce (optional)",
        "Crushed nuts (optional)",
        "Whipped cream (optional)"
      ],
      steps: [
        "Take one cookie and place scoop of ice cream.",
        "Top with another cookie.",
        "Press gently to form sandwich.",
        "Roll edges in sprinkles or chocolate chips.",
        "For extra crunch: roll in crushed nuts.",
        "Place on tray and freeze for 30 minutes.",
        "For serving: drizzle with chocolate sauce.",
        "Add whipped cream on top if desired.",
        "Can use waffle cones instead of cookies.",
        "Serve immediately or keep frozen."
      ]
    },
    { 
      id: 78, 
      name: "Dates with Cream",
      tagline: "Stuffed dates with cream",
      image: quickImages[77],
      ingredients: [
        "12-15 dates, pitted",
        "1 cup whipped cream",
        "2 tablespoons cream cheese",
        "1 tablespoon honey",
        "Chopped nuts for filling",
        "Chocolate sauce for drizzling",
        "Powdered sugar for dusting",
        "Rose petals for garnish (optional)"
      ],
      steps: [
        "Make slit in dates without cutting completely.",
        "In bowl, mix whipped cream and cream cheese.",
        "Add honey and mix until smooth.",
        "Fill piping bag with cream mixture.",
        "Pipe cream into each date.",
        "Sprinkle chopped nuts over cream.",
        "Arrange on serving plate.",
        "Drizzle with chocolate sauce.",
        "Dust with powdered sugar.",
        "Garnish with rose petals if using."
      ]
    },
    { 
      id: 79, 
      name: "Dry Fruits Mix",
      tagline: "Roasted nut and fruit mix",
      image: quickImages[78],
      ingredients: [
        "½ cup almonds",
        "½ cup walnuts",
        "½ cup cashews",
        "½ cup pistachios",
        "¼ cup raisins",
        "¼ cup dried apricots, chopped",
        "¼ cup dried cranberries",
        "1 tablespoon honey (optional)",
        "Pinch of salt",
        "¼ teaspoon cinnamon powder"
      ],
      steps: [
        "Preheat oven to 150°C.",
        "Spread nuts on baking tray.",
        "Roast for 10-15 minutes until fragrant.",
        "Let cool completely.",
        "In large bowl, combine all nuts.",
        "Add dried fruits.",
        "If using honey: warm slightly and drizzle.",
        "Add salt and cinnamon powder.",
        "Toss to coat evenly.",
        "Store in airtight container."
      ]
    },
    { 
      id: 80, 
      name: "Chocolate Bar",
      tagline: "Homemade chocolate bar",
      image: quickImages[79],
      ingredients: [
        "200g chocolate (dark, milk, or white)",
        "¼ cup chopped nuts",
        "2 tablespoons dried fruits",
        "¼ cup coconut flakes",
        "Sea salt flakes (optional)",
        "Edible gold dust (optional)",
        "Silicone molds or baking tray",
        "Parchment paper"
      ],
      steps: [
        "Line tray or molds with parchment paper.",
        "Melt chocolate in double boiler.",
        "Pour half of melted chocolate into mold.",
        "Sprinkle nuts, fruits, and coconut.",
        "Pour remaining chocolate over toppings.",
        "Tap to remove air bubbles.",
        "Sprinkle sea salt if using.",
        "Chill in refrigerator for 2 hours.",
        "Remove from mold and break into pieces.",
        "Store in cool, dry place."
      ]
    }
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
    if (selectedRecipe && currentStep < selectedRecipe.steps.length) {
      stopSpeaking();
      speakInstructions(selectedRecipe.steps, currentStep);
    }
  };

  const speakPreviousStep = () => {
    if (selectedRecipe && currentStep > 1) {
      stopSpeaking();
      speakInstructions(selectedRecipe.steps, currentStep - 2);
    }
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
    setShowDetailPanel(true);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const closeDetailPanel = () => {
    stopSpeaking();
    setShowDetailPanel(false);
    setSelectedRecipe(null);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="quick-page">
      {/* Header */}
      <header className="quick-header">
        <div className="quick-header-content">
          <h1 className="quick-page-title">Time Saving Recipes</h1>
          <p className="quick-page-description">
            Perfect for low effort days, quick to prepare and ready in minutes.
          </p>
        </div>
      </header>

      {/* Quick Recipes Grid */}
      <main className="quick-main">
        <div className="quick-grid-section">
          <div className="quick-grid">
            {quickRecipes.map(recipe => (
              <div 
                key={recipe.id} 
                className="quick-technique-card"
                onClick={() => handleRecipeSelect(recipe)}
              >
                <div 
                  className="quick-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                ></div>
                
                <div className="quick-card-content">
                  <h3 className="quick-card-title">{recipe.name}</h3>
                  <p className="quick-card-description">{recipe.tagline}</p>
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

      {/* DETAIL MODAL with SELECTED RECIPE IMAGE as Background */}
      {showDetailPanel && selectedRecipe && (
        <div className="quick-modal-overlay" onClick={closeDetailPanel}>
          <div 
            className="quick-modal" 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <button className="quick-modal-close" onClick={closeDetailPanel}>×</button>
            
            <div className="quick-modal-header">
              <div className="quick-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="quick-modal-content">
              {/* COLUMN 1 - INGREDIENTS */}
              <div className="quick-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="quick-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="quick-ingredient-item">
                      <span className="quick-ingredient-bullet">•</span>
                      <span className="quick-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 2 - STEPS TO MAKE */}
              <div className="quick-modal-steps">
                <h3>Steps to Make</h3>
                <div className="quick-steps-list">
                  {selectedRecipe.steps.map((step, idx) => (
                    <div key={idx} className="quick-step-item">
                      <span className="quick-step-number">{idx + 1}.</span>
                      <span className="quick-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 3 - VOICE INSTRUCTIONS */}
              <div className="quick-modal-voice-container">
                <div className="voice-panel">
                  <h3><i className="fas fa-volume-up"></i> Voice Instructions</h3>
                  
                  <div className="voice-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${progress}%`}}></div>
                    </div>
                    <div className="progress-info">
                      <span>Step {currentStep} of {selectedRecipe.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <div className="voice-controls">
                    <button 
                      className={`voice-main-btn ${isPlaying ? 'stop' : 'play'}`}
                      onClick={() => isPlaying ? stopSpeaking() : speakInstructions(selectedRecipe.steps)}
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
                        disabled={currentStep >= selectedRecipe.steps.length}
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

export default RecipeQuickPage;