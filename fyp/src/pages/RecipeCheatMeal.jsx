import React, { useState, useEffect, useRef } from 'react';
import './RecipeCheatMeal.css';

const RecipeCheatMeal = () => {
  const [pantryItems, setPantryItems] = useState([]);
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const speechSynthesisRef = useRef(null);

  // Placeholder images (you'll need to replace with actual image imports)
  const cheatImages = Array(200).fill('https://via.placeholder.com/300x200/8B4513/ffffff?text=Cheat+Meal');

  // Complete Cheat Meal Recipes - All cards in one array
  const cheatRecipes = [
    // BURGERS (1-15)
    { 
      id: 1, 
      name: "Chicken Burger",
      tagline: "Classic grilled chicken patty burger",
      image: cheatImages[0],
      pantryKeywords: ["chicken", "burger bun", "lettuce", "mayonnaise"],
      ingredients: [
        "1 chicken breast",
        "1 burger bun",
        "1 tablespoon oil",
        "Salt to taste",
        "1 teaspoon black pepper",
        "1 teaspoon garlic powder",
        "Lettuce leaves",
        "Mayonnaise",
        "1 slice cheese (optional)"
      ],
      steps: [
        "Season chicken breast with salt, pepper, and garlic powder.",
        "Heat oil in a pan and cook chicken for 5-6 minutes each side until fully cooked.",
        "Toast the burger bun lightly.",
        "Spread mayonnaise on the bottom bun.",
        "Place lettuce leaves, then cooked chicken patty.",
        "Add cheese slice if desired.",
        "Cover with top bun and serve hot."
      ]
    },
    { 
      id: 2, 
      name: "Zinger Burger",
      tagline: "Crispy spicy chicken burger",
      image: cheatImages[1],
      pantryKeywords: ["chicken", "burger bun", "flour", "spices"],
      ingredients: [
        "1 chicken breast",
        "1 burger bun",
        "½ cup flour",
        "1 egg",
        "1 teaspoon chili powder",
        "1 teaspoon garlic powder",
        "Salt to taste",
        "Oil for frying",
        "Lettuce",
        "Mayonnaise"
      ],
      steps: [
        "Flatten chicken breast slightly.",
        "Mix flour with chili powder, garlic powder, and salt.",
        "Beat egg in a separate bowl.",
        "Dip chicken in egg, then coat with seasoned flour.",
        "Heat oil and deep fry until golden and crispy (6-8 minutes).",
        "Toast the burger bun.",
        "Spread mayonnaise on bun.",
        "Add lettuce and crispy chicken.",
        "Serve hot with sauce."
      ]
    },
    { 
      id: 3, 
      name: "Beef Burger",
      tagline: "Juicy beef patty burger",
      image: cheatImages[2],
      pantryKeywords: ["beef", "burger bun", "onion", "lettuce"],
      ingredients: [
        "250g beef mince",
        "1 burger bun",
        "½ onion, finely chopped",
        "1 teaspoon garlic powder",
        "Salt to taste",
        "1 teaspoon black pepper",
        "1 tablespoon oil",
        "Lettuce",
        "Tomato slices",
        "Ketchup"
      ],
      steps: [
        "Mix beef mince with onion, garlic powder, salt, and pepper.",
        "Form into a patty shape.",
        "Heat oil in a pan and cook patty for 4-5 minutes each side.",
        "Toast the burger bun.",
        "Spread ketchup on bottom bun.",
        "Add lettuce, tomato slices, and beef patty.",
        "Cover with top bun and serve."
      ]
    },
    { 
      id: 4, 
      name: "Double Decker Burger",
      tagline: "Two patties with extra cheese",
      image: cheatImages[3],
      pantryKeywords: ["beef", "burger bun", "cheese", "lettuce"],
      ingredients: [
        "500g beef mince",
        "2 burger buns",
        "2 cheese slices",
        "Lettuce",
        "Tomato slices",
        "Onion rings",
        "Mayonnaise",
        "Ketchup",
        "Salt and pepper to taste"
      ],
      steps: [
        "Divide beef mince into 4 portions and form thin patties.",
        "Season with salt and pepper.",
        "Cook patties in a hot pan for 3-4 minutes each side.",
        "Toast both buns.",
        "Bottom bun: spread mayo, add lettuce, patty, cheese.",
        "Middle bun: spread ketchup, add onion, tomato, patty, cheese.",
        "Top with final bun.",
        "Secure with a long skewer and serve."
      ]
    },
    { 
      id: 5, 
      name: "Cheese Burger",
      tagline: "Simple and cheesy classic",
      image: cheatImages[4],
      pantryKeywords: ["beef", "burger bun", "cheese", "ketchup"],
      ingredients: [
        "200g beef mince",
        "1 burger bun",
        "1 cheese slice",
        "1 tablespoon oil",
        "Salt to taste",
        "1 teaspoon black pepper",
        "Ketchup",
        "Pickles (optional)"
      ],
      steps: [
        "Season beef mince with salt and pepper, form patty.",
        "Heat oil and cook patty for 4-5 minutes each side.",
        "Place cheese slice on patty to melt.",
        "Toast burger bun.",
        "Spread ketchup on bottom bun.",
        "Add pickles if desired.",
        "Place cheesy patty on top.",
        "Cover with top bun and serve hot."
      ]
    },
    { 
      id: 6, 
      name: "BBQ Chicken Burger",
      tagline: "Smoky BBQ flavored chicken burger",
      image: cheatImages[5],
      pantryKeywords: ["chicken", "burger bun", "bbq sauce", "onion"],
      ingredients: [
        "1 chicken breast",
        "1 burger bun",
        "2 tablespoons BBQ sauce",
        "1 tablespoon oil",
        "Salt to taste",
        "1 teaspoon paprika",
        "Onion slices",
        "Lettuce"
      ],
      steps: [
        "Marinate chicken with salt, paprika, and 1 tbsp BBQ sauce for 15 minutes.",
        "Heat oil and cook chicken for 6-7 minutes each side.",
        "Toast burger bun.",
        "Spread remaining BBQ sauce on both buns.",
        "Add lettuce, onion slices, and cooked chicken.",
        "Serve hot with extra sauce."
      ]
    },
    { 
      id: 7, 
      name: "Spicy Chicken Burger",
      tagline: "For those who love it hot",
      image: cheatImages[6],
      pantryKeywords: ["chicken", "burger bun", "chili", "spices"],
      ingredients: [
        "1 chicken breast",
        "1 burger bun",
        "1 teaspoon chili powder",
        "½ teaspoon cayenne pepper",
        "1 teaspoon garlic powder",
        "Salt to taste",
        "Oil for frying",
        "Lettuce",
        "Spicy mayo"
      ],
      steps: [
        "Mix chili powder, cayenne, garlic powder, and salt.",
        "Coat chicken breast with spice mix.",
        "Heat oil and fry chicken until cooked through (6-8 minutes).",
        "Toast bun lightly.",
        "Spread spicy mayo on both buns.",
        "Add lettuce and spicy chicken patty.",
        "Serve with jalapenos if desired."
      ]
    },
    { 
      id: 8, 
      name: "Crispy Chicken Burger",
      tagline: "Extra crunchy fried chicken burger",
      image: cheatImages[7],
      pantryKeywords: ["chicken", "burger bun", "flour", "breadcrumbs"],
      ingredients: [
        "1 chicken breast",
        "1 burger bun",
        "½ cup flour",
        "1 egg",
        "½ cup breadcrumbs",
        "1 teaspoon paprika",
        "Salt to taste",
        "Oil for frying",
        "Lettuce",
        "Mayonnaise"
      ],
      steps: [
        "Flatten chicken breast to even thickness.",
        "Season flour with paprika and salt.",
        "Beat egg in a bowl.",
        "Coat chicken in flour, dip in egg, then coat with breadcrumbs.",
        "Heat oil and deep fry until golden and crispy (6-7 minutes).",
        "Toast burger bun.",
        "Spread mayonnaise on bun.",
        "Add lettuce and crispy chicken.",
        "Serve hot."
      ]
    },
    { 
      id: 9, 
      name: "Fried Fish Burger",
      tagline: "Crispy fish fillet burger",
      image: cheatImages[8],
      pantryKeywords: ["fish", "burger bun", "flour", "lemon"],
      ingredients: [
        "1 fish fillet (cod or tilapia)",
        "1 burger bun",
        "½ cup flour",
        "1 egg",
        "½ cup breadcrumbs",
        "1 teaspoon garlic powder",
        "Salt and pepper to taste",
        "Oil for frying",
        "Tartar sauce",
        "Lettuce"
      ],
      steps: [
        "Season fish fillet with salt, pepper, and garlic powder.",
        "Coat in flour, dip in beaten egg, then coat with breadcrumbs.",
        "Heat oil and fry fish for 3-4 minutes each side until golden.",
        "Toast burger bun.",
        "Spread tartar sauce on bun.",
        "Add lettuce and fried fish fillet.",
        "Squeeze lemon juice on top if desired.",
        "Cover and serve."
      ]
    },
    { 
      id: 10, 
      name: "Veggie Burger",
      tagline: "Healthy vegetable patty burger",
      image: cheatImages[9],
      pantryKeywords: ["potato", "carrot", "peas", "burger bun"],
      ingredients: [
        "2 potatoes, boiled and mashed",
        "½ cup mixed vegetables (carrots, peas)",
        "1 green chili, chopped",
        "1 teaspoon cumin powder",
        "Salt to taste",
        "½ cup breadcrumbs",
        "Oil for frying",
        "1 burger bun",
        "Lettuce",
        "Tomato slices",
        "Mayonnaise"
      ],
      steps: [
        "Mix mashed potatoes with vegetables, green chili, cumin, and salt.",
        "Form into patties.",
        "Coat patties with breadcrumbs.",
        "Heat oil and shallow fry until golden both sides.",
        "Toast burger bun.",
        "Spread mayonnaise on bun.",
        "Add lettuce, tomato, and veggie patty.",
        "Serve hot with ketchup."
      ]
    },
    { 
      id: 11, 
      name: "Aloo Tikki Burger",
      tagline: "Desi style potato patty burger",
      image: cheatImages[10],
      pantryKeywords: ["potato", "burger bun", "spices", "chutney"],
      ingredients: [
        "2 potatoes, boiled and mashed",
        "1 green chili, chopped",
        "1 teaspoon chaat masala",
        "½ teaspoon cumin powder",
        "Salt to taste",
        "2 tablespoons cornflour",
        "Oil for frying",
        "1 burger bun",
        "Green chutney",
        "Onion slices",
        "Tomato ketchup"
      ],
      steps: [
        "Mix mashed potatoes with green chili, chaat masala, cumin, salt, and cornflour.",
        "Form into tikki (patty) shape.",
        "Heat oil and shallow fry until golden brown both sides.",
        "Toast burger bun.",
        "Spread green chutney on one bun, ketchup on the other.",
        "Add onion slices and aloo tikki.",
        "Serve hot."
      ]
    },
    { 
      id: 12, 
      name: "Shawarma Burger",
      tagline: "Fusion of shawarma and burger",
      image: cheatImages[11],
      pantryKeywords: ["chicken", "burger bun", "garlic sauce", "pickles"],
      ingredients: [
        "200g chicken strips",
        "1 burger bun",
        "2 tablespoons shawarma spice mix",
        "1 tablespoon oil",
        "Garlic sauce",
        "Pickles, sliced",
        "Lettuce",
        "French fries (optional)"
      ],
      steps: [
        "Toss chicken strips with shawarma spice mix.",
        "Heat oil and cook chicken until done (5-6 minutes).",
        "Toast burger bun.",
        "Spread garlic sauce on both buns.",
        "Add lettuce, pickles, and cooked chicken.",
        "Top with some french fries if desired.",
        "Close burger and serve."
      ]
    },
    { 
      id: 13, 
      name: "Peri Peri Burger",
      tagline: "Spicy peri peri flavored chicken",
      image: cheatImages[12],
      pantryKeywords: ["chicken", "burger bun", "peri peri sauce", "lettuce"],
      ingredients: [
        "1 chicken breast",
        "1 burger bun",
        "2 tablespoons peri peri sauce",
        "1 teaspoon paprika",
        "1 teaspoon garlic powder",
        "Salt to taste",
        "1 tablespoon oil",
        "Lettuce",
        "Mayonnaise"
      ],
      steps: [
        "Marinate chicken with peri peri sauce, paprika, garlic powder, and salt for 20 minutes.",
        "Heat oil and cook chicken for 6-7 minutes each side.",
        "Toast burger bun.",
        "Spread mayonnaise on bottom bun.",
        "Add lettuce and peri peri chicken.",
        "Drizzle extra peri peri sauce on top.",
        "Cover and serve."
      ]
    },
    { 
      id: 14, 
      name: "Grilled Chicken Burger",
      tagline: "Healthy grilled option",
      image: cheatImages[13],
      pantryKeywords: ["chicken", "burger bun", "lettuce", "tomato"],
      ingredients: [
        "1 chicken breast",
        "1 burger bun",
        "1 tablespoon olive oil",
        "1 teaspoon dried herbs",
        "Salt and pepper to taste",
        "Lettuce",
        "Tomato slices",
        "Onion rings",
        "Mayonnaise"
      ],
      steps: [
        "Brush chicken with olive oil, sprinkle herbs, salt, and pepper.",
        "Grill on a hot pan or grill for 5-6 minutes each side.",
        "Toast burger bun lightly.",
        "Spread mayonnaise on bun.",
        "Add lettuce, tomato, onion, and grilled chicken.",
        "Serve hot."
      ]
    },
    { 
      id: 15, 
      name: "Lamb Burger",
      tagline: "Rich and flavorful lamb patty",
      image: cheatImages[14],
      pantryKeywords: ["lamb", "burger bun", "onion", "mint"],
      ingredients: [
        "250g lamb mince",
        "1 burger bun",
        "½ onion, finely chopped",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "Salt to taste",
        "1 tablespoon oil",
        "Mint chutney",
        "Lettuce",
        "Tomato slices"
      ],
      steps: [
        "Mix lamb mince with onion, cumin, coriander, and salt.",
        "Form into patty.",
        "Heat oil and cook patty for 4-5 minutes each side.",
        "Toast burger bun.",
        "Spread mint chutney on bun.",
        "Add lettuce, tomato, and lamb patty.",
        "Serve hot."
      ]
    },

    // FRIED CHICKEN (16-25)
    { 
      id: 16, 
      name: "Fried Chicken (Crispy)",
      tagline: "Classic crispy fried chicken pieces",
      image: cheatImages[15],
      pantryKeywords: ["chicken", "flour", "buttermilk", "spices"],
      ingredients: [
        "500g chicken pieces (drumsticks, thighs)",
        "1 cup buttermilk",
        "1 cup flour",
        "1 teaspoon paprika",
        "1 teaspoon garlic powder",
        "1 teaspoon onion powder",
        "Salt to taste",
        "1 teaspoon black pepper",
        "Oil for deep frying"
      ],
      steps: [
        "Marinate chicken in buttermilk for at least 2 hours (overnight best).",
        "Mix flour with all spices in a bag or bowl.",
        "Remove chicken from buttermilk, let excess drip off.",
        "Coat chicken thoroughly in seasoned flour.",
        "Heat oil to 350°F (175°C).",
        "Fry chicken in batches for 12-15 minutes until golden and cooked through.",
        "Drain on paper towels.",
        "Serve hot with sauce."
      ]
    },
    { 
      id: 17, 
      name: "Popcorn Chicken",
      tagline: "Bite-sized crispy chicken pieces",
      image: cheatImages[16],
      pantryKeywords: ["chicken", "flour", "spices", "oil"],
      ingredients: [
        "500g chicken breast, cut into bite-sized pieces",
        "1 cup flour",
        "1 teaspoon paprika",
        "1 teaspoon garlic powder",
        "1 teaspoon chili powder",
        "Salt to taste",
        "2 eggs, beaten",
        "Oil for deep frying"
      ],
      steps: [
        "Season chicken pieces with salt and spices.",
        "Mix flour with paprika, garlic powder, and chili powder.",
        "Dip chicken in beaten egg, then coat with seasoned flour.",
        "Heat oil in deep pan.",
        "Fry chicken pieces in batches for 4-5 minutes until golden and crispy.",
        "Drain on paper towels.",
        "Serve hot with ketchup or dip."
      ]
    },
    { 
      id: 18, 
      name: "Chicken Wings (Fried)",
      tagline: "Crispy fried chicken wings",
      image: cheatImages[17],
      pantryKeywords: ["chicken wings", "flour", "spices", "oil"],
      ingredients: [
        "500g chicken wings",
        "1 cup flour",
        "1 teaspoon garlic powder",
        "1 teaspoon paprika",
        "1 teaspoon black pepper",
        "Salt to taste",
        "1 egg, beaten",
        "Oil for deep frying"
      ],
      steps: [
        "Clean and pat dry chicken wings.",
        "Mix flour with all spices.",
        "Dip wings in beaten egg, then coat with seasoned flour.",
        "Heat oil to 350°F.",
        "Fry wings for 10-12 minutes until golden and cooked through.",
        "Drain on paper towels.",
        "Serve hot with ranch or blue cheese dip."
      ]
    },
    { 
      id: 19, 
      name: "Chicken Drumsticks",
      tagline: "Juicy fried drumsticks",
      image: cheatImages[18],
      pantryKeywords: ["chicken drumsticks", "flour", "spices", "oil"],
      ingredients: [
        "6 chicken drumsticks",
        "1 cup flour",
        "1 teaspoon garlic powder",
        "1 teaspoon onion powder",
        "1 teaspoon paprika",
        "Salt to taste",
        "1 teaspoon black pepper",
        "2 eggs, beaten",
        "Oil for deep frying"
      ],
      steps: [
        "Pat dry drumsticks with paper towel.",
        "Mix flour with all spices.",
        "Dip drumsticks in beaten egg, then coat with seasoned flour.",
        "Let coated drumsticks rest for 10 minutes.",
        "Heat oil and fry for 12-15 minutes until golden and cooked through.",
        "Drain on paper towels.",
        "Serve hot."
      ]
    },
    { 
      id: 20, 
      name: "Hot Wings",
      tagline: "Spicy buffalo-style chicken wings",
      image: cheatImages[19],
      pantryKeywords: ["chicken wings", "hot sauce", "butter", "flour"],
      ingredients: [
        "500g chicken wings",
        "½ cup flour",
        "1 teaspoon garlic powder",
        "Salt to taste",
        "Oil for frying",
        "For sauce: ½ cup hot sauce, 4 tbsp butter, 1 tsp vinegar"
      ],
      steps: [
        "Toss wings with flour, garlic powder, and salt.",
        "Heat oil and fry wings for 10-12 minutes until crispy.",
        "In a separate pan, melt butter with hot sauce and vinegar.",
        "Toss fried wings in the hot sauce mixture until coated.",
        "Serve immediately with celery sticks and ranch dip."
      ]
    },
    { 
      id: 21, 
      name: "Buffalo Wings",
      tagline: "Classic buffalo style chicken wings",
      image: cheatImages[20],
      pantryKeywords: ["chicken wings", "buffalo sauce", "butter", "flour"],
      ingredients: [
        "500g chicken wings",
        "½ cup flour",
        "1 teaspoon paprika",
        "Salt to taste",
        "Oil for frying",
        "½ cup buffalo sauce",
        "3 tablespoons butter"
      ],
      steps: [
        "Coat wings in flour mixed with paprika and salt.",
        "Heat oil and fry wings until golden and crispy (10-12 minutes).",
        "Melt butter in a saucepan, add buffalo sauce and heat through.",
        "Toss fried wings in the sauce until well coated.",
        "Serve with ranch dressing and carrot sticks."
      ]
    },
    { 
      id: 22, 
      name: "Chicken Nuggets",
      tagline: "Homemade crispy chicken nuggets",
      image: cheatImages[21],
      pantryKeywords: ["chicken", "breadcrumbs", "flour", "eggs"],
      ingredients: [
        "500g chicken breast",
        "1 cup breadcrumbs",
        "½ cup flour",
        "2 eggs, beaten",
        "1 teaspoon garlic powder",
        "1 teaspoon paprika",
        "Salt to taste",
        "Oil for frying"
      ],
      steps: [
        "Cut chicken breast into nugget-sized pieces.",
        "Season with garlic powder, paprika, and salt.",
        "Set up three bowls: flour, beaten eggs, breadcrumbs.",
        "Coat chicken in flour, dip in egg, then coat with breadcrumbs.",
        "Heat oil and fry nuggets for 4-5 minutes until golden and cooked through.",
        "Drain on paper towels.",
        "Serve with ketchup or honey mustard."
      ]
    },
    { 
      id: 23, 
      name: "Chicken Strips",
      tagline: "Long crispy chicken strips",
      image: cheatImages[22],
      pantryKeywords: ["chicken", "breadcrumbs", "flour", "spices"],
      ingredients: [
        "500g chicken breast, cut into strips",
        "1 cup flour",
        "2 eggs, beaten",
        "1 cup breadcrumbs",
        "1 teaspoon garlic powder",
        "1 teaspoon onion powder",
        "Salt to taste",
        "Oil for frying"
      ],
      steps: [
        "Season chicken strips with salt and spices.",
        "Coat in flour, dip in beaten egg, then coat with breadcrumbs.",
        "Press breadcrumbs to adhere well.",
        "Heat oil in a deep pan.",
        "Fry strips for 4-5 minutes until golden and cooked through.",
        "Drain on paper towels.",
        "Serve with your favorite dip."
      ]
    },
    { 
      id: 24, 
      name: "Chicken Fingers",
      tagline: "Perfect finger food",
      image: cheatImages[23],
      pantryKeywords: ["chicken", "flour", "eggs", "cornflakes"],
      ingredients: [
        "500g chicken tenderloins",
        "1 cup flour",
        "2 eggs, beaten",
        "2 cups cornflakes, crushed",
        "1 teaspoon paprika",
        "Salt to taste",
        "Oil for frying"
      ],
      steps: [
        "Season chicken tenderloins with salt and paprika.",
        "Coat in flour, dip in beaten egg.",
        "Roll in crushed cornflakes for extra crunch.",
        "Heat oil and fry for 3-4 minutes each side until golden.",
        "Drain on paper towels.",
        "Serve with honey mustard or barbecue sauce."
      ]
    },
    { 
      id: 25, 
      name: "Fried Chicken Lollipop",
      tagline: "Fun and tasty chicken lollipops",
      image: cheatImages[24],
      pantryKeywords: ["chicken wings", "flour", "spices", "oil"],
      ingredients: [
        "6 chicken wings (drumettes)",
        "½ cup flour",
        "1 teaspoon ginger-garlic paste",
        "1 teaspoon soy sauce",
        "1 teaspoon chili sauce",
        "Salt to taste",
        "Oil for deep frying"
      ],
      steps: [
        "Prepare lollipops: cut around the thin end of drumette, push meat down to form a ball.",
        "Marinate with ginger-garlic paste, soy sauce, chili sauce, and salt for 30 minutes.",
        "Coat in flour.",
        "Heat oil and fry for 8-10 minutes until golden and cooked.",
        "Drain on paper towels.",
        "Serve hot with schezwan sauce."
      ]
    },

    // PIZZA (26-37)
    { 
      id: 26, 
      name: "Chicken Pizza",
      tagline: "Classic chicken topping pizza",
      image: cheatImages[25],
      pantryKeywords: ["pizza base", "chicken", "cheese", "pizza sauce"],
      ingredients: [
        "1 pizza base",
        "½ cup pizza sauce",
        "1 cup mozzarella cheese, grated",
        "200g chicken, cooked and shredded",
        "½ onion, sliced",
        "½ capsicum, sliced",
        "1 teaspoon oregano",
        "1 teaspoon chili flakes"
      ],
      steps: [
        "Preheat oven to 200°C (400°F).",
        "Spread pizza sauce evenly on pizza base.",
        "Sprinkle half the mozzarella cheese.",
        "Add cooked chicken, onion, and capsicum.",
        "Top with remaining cheese.",
        "Sprinkle oregano and chili flakes.",
        "Bake for 12-15 minutes until cheese melts and crust is golden.",
        "Slice and serve hot."
      ]
    },
    { 
      id: 27, 
      name: "Veg Pizza",
      tagline: "Loaded with fresh vegetables",
      image: cheatImages[26],
      pantryKeywords: ["pizza base", "cheese", "vegetables", "pizza sauce"],
      ingredients: [
        "1 pizza base",
        "½ cup pizza sauce",
        "1 cup mozzarella cheese",
        "½ onion, sliced",
        "½ capsicum, sliced",
        "½ tomato, sliced",
        "¼ cup sweet corn",
        "¼ cup olives (optional)",
        "1 teaspoon oregano"
      ],
      steps: [
        "Preheat oven to 200°C.",
        "Spread pizza sauce on base.",
        "Sprinkle half the cheese.",
        "Arrange all vegetables evenly.",
        "Top with remaining cheese.",
        "Sprinkle oregano and chili flakes.",
        "Bake for 12-15 minutes.",
        "Serve hot."
      ]
    },
    { 
      id: 28, 
      name: "Pepperoni Pizza",
      tagline: "Classic pepperoni pizza",
      image: cheatImages[27],
      pantryKeywords: ["pizza base", "pepperoni", "cheese", "pizza sauce"],
      ingredients: [
        "1 pizza base",
        "½ cup pizza sauce",
        "1½ cups mozzarella cheese",
        "20-25 pepperoni slices",
        "1 teaspoon oregano",
        "1 teaspoon chili flakes"
      ],
      steps: [
        "Preheat oven to 220°C.",
        "Spread pizza sauce on base.",
        "Sprinkle cheese evenly.",
        "Arrange pepperoni slices on top.",
        "Sprinkle oregano and chili flakes.",
        "Bake for 10-12 minutes until cheese bubbles.",
        "Slice and serve."
      ]
    },
    { 
      id: 29, 
      name: "Fajita Pizza",
      tagline: "Mexican-inspired fajita pizza",
      image: cheatImages[28],
      pantryKeywords: ["pizza base", "chicken", "cheese", "fajita seasoning"],
      ingredients: [
        "1 pizza base",
        "½ cup pizza sauce",
        "1 cup mozzarella cheese",
        "200g chicken strips",
        "1 onion, sliced",
        "1 capsicum, sliced",
        "1 tablespoon fajita seasoning",
        "1 tablespoon oil"
      ],
      steps: [
        "Heat oil in pan, add chicken strips with fajita seasoning.",
        "Cook until chicken is done, add onions and capsicum, sauté for 2 minutes.",
        "Preheat oven to 200°C.",
        "Spread sauce on pizza base.",
        "Add half the cheese.",
        "Top with chicken fajita mixture.",
        "Add remaining cheese.",
        "Bake for 12-15 minutes.",
        "Serve hot."
      ]
    },
    { 
      id: 30, 
      name: "BBQ Chicken Pizza",
      tagline: "Tangy BBQ sauce with chicken",
      image: cheatImages[29],
      pantryKeywords: ["pizza base", "chicken", "cheese", "bbq sauce"],
      ingredients: [
        "1 pizza base",
        "½ cup BBQ sauce",
        "1 cup mozzarella cheese",
        "200g chicken, cooked and shredded",
        "½ red onion, sliced",
        "Fresh cilantro"
      ],
      steps: [
        "Preheat oven to 200°C.",
        "Spread BBQ sauce on pizza base instead of pizza sauce.",
        "Sprinkle half the cheese.",
        "Add shredded chicken and onion slices.",
        "Top with remaining cheese.",
        "Bake for 12-15 minutes.",
        "Garnish with fresh cilantro before serving."
      ]
    },
    { 
      id: 31, 
      name: "Cheese Pizza",
      tagline: "Extra cheesy delight",
      image: cheatImages[30],
      pantryKeywords: ["pizza base", "cheese", "pizza sauce"],
      ingredients: [
        "1 pizza base",
        "½ cup pizza sauce",
        "2 cups mozzarella cheese",
        "¼ cup parmesan cheese",
        "1 teaspoon oregano",
        "1 teaspoon garlic powder"
      ],
      steps: [
        "Preheat oven to 200°C.",
        "Spread pizza sauce on base.",
        "Sprinkle garlic powder.",
        "Top generously with both cheeses.",
        "Sprinkle oregano.",
        "Bake for 10-12 minutes until cheese is bubbly and golden.",
        "Slice and serve."
      ]
    },
    { 
      id: 32, 
      name: "Margherita Pizza",
      tagline: "Simple Italian classic",
      image: cheatImages[31],
      pantryKeywords: ["pizza base", "tomato", "cheese", "basil"],
      ingredients: [
        "1 pizza base",
        "2 tomatoes, sliced",
        "1 cup mozzarella cheese",
        "Fresh basil leaves",
        "2 tablespoons olive oil",
        "1 clove garlic",
        "Salt to taste"
      ],
      steps: [
        "Preheat oven to 220°C.",
        "Rub pizza base with garlic clove and brush with olive oil.",
        "Arrange tomato slices on base.",
        "Sprinkle cheese over tomatoes.",
        "Season with salt.",
        "Bake for 10-12 minutes.",
        "Top with fresh basil leaves.",
        "Drizzle with olive oil and serve."
      ]
    },
    { 
      id: 33, 
      name: "Stuffed Crust Pizza",
      tagline: "Pizza with cheese-filled crust",
      image: cheatImages[32],
      pantryKeywords: ["pizza dough", "cheese", "pizza sauce", "toppings"],
      ingredients: [
        "1 pizza dough ball",
        "6-8 mozzarella sticks",
        "½ cup pizza sauce",
        "1½ cups mozzarella cheese",
        "Your favorite toppings",
        "1 egg, beaten (for brushing)"
      ],
      steps: [
        "Roll out pizza dough into a large circle.",
        "Place mozzarella sticks around the edge of the dough.",
        "Fold the edge over the cheese sticks and press to seal.",
        "Spread pizza sauce in the center.",
        "Add toppings and sprinkle with cheese.",
        "Brush crust with beaten egg.",
        "Bake at 220°C for 12-15 minutes until golden.",
        "Serve hot."
      ]
    },
    { 
      id: 34, 
      name: "Thin Crust Pizza",
      tagline: "Crispy thin base pizza",
      image: cheatImages[33],
      pantryKeywords: ["pizza dough", "cheese", "pizza sauce", "toppings"],
      ingredients: [
        "1 pizza dough ball",
        "½ cup pizza sauce",
        "1 cup mozzarella cheese",
        "Your favorite toppings",
        "1 tablespoon olive oil",
        "Cornmeal for dusting"
      ],
      steps: [
        "Roll out dough very thin (about ¼ inch).",
        "Dust pizza peel with cornmeal.",
        "Place rolled dough on peel.",
        "Spread sauce thinly, leaving edge.",
        "Add toppings and cheese sparingly.",
        "Slide onto preheated pizza stone or baking sheet.",
        "Bake at 250°C for 8-10 minutes until crispy.",
        "Slice and serve."
      ]
    },
    { 
      id: 35, 
      name: "Deep Dish Pizza",
      tagline: "Thick, hearty Chicago-style pizza",
      image: cheatImages[34],
      pantryKeywords: ["pizza dough", "cheese", "pizza sauce", "toppings"],
      ingredients: [
        "1 pizza dough ball",
        "2 cups mozzarella cheese",
        "1 cup pizza sauce",
        "Toppings of choice",
        "2 tablespoons olive oil",
        "Cornmeal"
      ],
      steps: [
        "Press dough into a deep dish pan coated with oil and cornmeal.",
        "Push dough up the sides.",
        "Layer cheese first, then toppings, then sauce on top.",
        "Bake at 200°C for 25-30 minutes until crust is golden.",
        "Let rest for 5 minutes before slicing.",
        "Serve hot."
      ]
    },
    { 
      id: 36, 
      name: "Hawaiian Pizza",
      tagline: "Sweet and savory pineapple pizza",
      image: cheatImages[35],
      pantryKeywords: ["pizza base", "ham", "pineapple", "cheese"],
      ingredients: [
        "1 pizza base",
        "½ cup pizza sauce",
        "1 cup mozzarella cheese",
        "100g ham, sliced",
        "½ cup pineapple chunks",
        "1 teaspoon oregano"
      ],
      steps: [
        "Preheat oven to 200°C.",
        "Spread pizza sauce on base.",
        "Sprinkle half the cheese.",
        "Add ham slices and pineapple chunks.",
        "Top with remaining cheese.",
        "Sprinkle oregano.",
        "Bake for 12-15 minutes.",
        "Slice and serve."
      ]
    },
    { 
      id: 37, 
      name: "Spicy Beef Pizza",
      tagline: "For the spice lovers",
      image: cheatImages[36],
      pantryKeywords: ["pizza base", "beef", "cheese", "jalapenos"],
      ingredients: [
        "1 pizza base",
        "½ cup pizza sauce",
        "1 cup mozzarella cheese",
        "200g beef mince",
        "1 onion, chopped",
        "2 green chilies, sliced",
        "Jalapenos",
        "1 teaspoon chili flakes"
      ],
      steps: [
        "Brown beef mince with onions, season with salt and chili.",
        "Preheat oven to 200°C.",
        "Spread sauce on pizza base.",
        "Add half the cheese.",
        "Spread spicy beef mixture.",
        "Add green chilies and jalapenos.",
        "Top with remaining cheese and chili flakes.",
        "Bake for 12-15 minutes.",
        "Serve hot."
      ]
    },

    // SANDWICHES & ROLLS (38-50)
    { 
      id: 38, 
      name: "Chicken Sandwich",
      tagline: "Classic chicken sandwich",
      image: cheatImages[37],
      pantryKeywords: ["bread", "chicken", "lettuce", "mayonnaise"],
      ingredients: [
        "2 slices bread",
        "100g cooked chicken, shredded",
        "Lettuce leaves",
        "Mayonnaise",
        "Salt and pepper to taste"
      ],
      steps: [
        "Mix shredded chicken with mayonnaise, salt, and pepper.",
        "Toast bread lightly if desired.",
        "Place lettuce on one slice of bread.",
        "Top with chicken mixture.",
        "Cover with second slice of bread.",
        "Cut in half and serve."
      ]
    },
    { 
      id: 39, 
      name: "Club Sandwich",
      tagline: "Triple-decker classic sandwich",
      image: cheatImages[38],
      pantryKeywords: ["bread", "chicken", "bacon", "lettuce", "tomato"],
      ingredients: [
        "3 slices bread",
        "100g cooked chicken breast, sliced",
        "4 bacon strips, cooked crispy",
        "Lettuce leaves",
        "Tomato slices",
        "Mayonnaise",
        "Salt and pepper"
      ],
      steps: [
        "Toast all bread slices.",
        "Spread mayonnaise on one side of each slice.",
        "On first slice: place lettuce, chicken, salt, pepper.",
        "Top with second slice (mayo side up).",
        "Add bacon, lettuce, tomato on second slice.",
        "Cover with third slice (mayo side down).",
        "Secure with toothpicks, cut into triangles.",
        "Serve with fries."
      ]
    },
    { 
      id: 40, 
      name: "Grilled Chicken Sandwich",
      tagline: "Healthy grilled chicken sandwich",
      image: cheatImages[39],
      pantryKeywords: ["bread", "chicken", "lettuce", "cheese"],
      ingredients: [
        "2 slices bread",
        "1 grilled chicken breast, sliced",
        "Lettuce",
        "Tomato slices",
        "Onion rings",
        "Mayonnaise",
        "Butter for grilling"
      ],
      steps: [
        "Spread butter on outer sides of bread slices.",
        "On inner side of one slice, spread mayo.",
        "Layer lettuce, grilled chicken, tomato, onion.",
        "Top with second slice (butter side out).",
        "Grill in a pan until golden brown both sides.",
        "Cut and serve hot."
      ]
    },
    { 
      id: 41, 
      name: "Chicken Mayo Sandwich",
      tagline: "Simple and creamy",
      image: cheatImages[40],
      pantryKeywords: ["bread", "chicken", "mayonnaise", "black pepper"],
      ingredients: [
        "2 slices bread",
        "150g cooked chicken, shredded",
        "3 tablespoons mayonnaise",
        "1 teaspoon black pepper",
        "Salt to taste",
        "Lettuce (optional)"
      ],
      steps: [
        "Mix shredded chicken with mayonnaise, pepper, and salt.",
        "Toast bread if desired.",
        "Spread chicken mixture on one slice.",
        "Add lettuce if using.",
        "Cover with second slice.",
        "Cut and serve."
      ]
    },
    { 
      id: 42, 
      name: "BBQ Sandwich",
      tagline: "Tangy BBQ flavored sandwich",
      image: cheatImages[41],
      pantryKeywords: ["bread", "chicken", "bbq sauce", "onion"],
      ingredients: [
        "2 slices bread",
        "150g cooked chicken, shredded",
        "3 tablespoons BBQ sauce",
        "½ onion, sliced",
        "Butter"
      ],
      steps: [
        "Mix shredded chicken with BBQ sauce.",
        "Butter the outer sides of bread.",
        "Place chicken mixture and onion slices between bread.",
        "Grill in a pan until golden both sides and heated through.",
        "Serve hot."
      ]
    },
    { 
      id: 43, 
      name: "Chicken Roll",
      tagline: "Wrap-style chicken roll",
      image: cheatImages[42],
      pantryKeywords: ["tortilla", "chicken", "cabbage", "mayonnaise"],
      ingredients: [
        "1 large tortilla",
        "150g cooked chicken strips",
        "½ cup shredded cabbage",
        "Mayonnaise",
        "Ketchup",
        "Salt and pepper"
      ],
      steps: [
        "Warm tortilla in a pan.",
        "Spread mayonnaise and ketchup on tortilla.",
        "Place shredded cabbage in center.",
        "Add chicken strips.",
        "Season with salt and pepper.",
        "Fold sides and roll tightly.",
        "Cut in half and serve."
      ]
    },
    { 
      id: 44, 
      name: "Egg Roll",
      tagline: "Quick and satisfying egg roll",
      image: cheatImages[43],
      pantryKeywords: ["tortilla", "eggs", "cabbage", "sauce"],
      ingredients: [
        "1 large tortilla",
        "2 eggs, beaten",
        "½ cup shredded cabbage",
        "1 tablespoon oil",
        "Mayonnaise",
        "Ketchup",
        "Salt and pepper"
      ],
      steps: [
        "Heat oil in a pan, scramble eggs with salt and pepper.",
        "Warm tortilla in a separate pan.",
        "Spread sauces on tortilla.",
        "Add shredded cabbage and scrambled eggs.",
        "Roll tightly.",
        "Cut in half and serve."
      ]
    },
    { 
      id: 45, 
      name: "Veg Roll",
      tagline: "Vegetable-filled roll",
      image: cheatImages[44],
      pantryKeywords: ["tortilla", "vegetables", "cabbage", "sauce"],
      ingredients: [
        "1 large tortilla",
        "½ cup mixed vegetables (carrot, capsicum, cabbage)",
        "½ onion, sliced",
        "1 tablespoon oil",
        "Mayonnaise",
        "Ketchup",
        "Salt and pepper",
        "Chaat masala"
      ],
      steps: [
        "Heat oil, sauté vegetables with salt and pepper until slightly soft.",
        "Warm tortilla.",
        "Spread sauces on tortilla.",
        "Place cooked vegetables in center.",
        "Sprinkle chaat masala.",
        "Roll tightly and serve."
      ]
    },
    { 
      id: 46, 
      name: "Seekh Kebab Roll",
      tagline: "Spicy seekh kebab wrap",
      image: cheatImages[45],
      pantryKeywords: ["tortilla", "seekh kebab", "onion", "chutney"],
      ingredients: [
        "1 large tortilla",
        "2 seekh kebabs",
        "½ onion, sliced",
        "Green chutney",
        "Mayonnaise",
        "Lemon juice"
      ],
      steps: [
        "Cook or reheat seekh kebabs in a pan.",
        "Warm tortilla.",
        "Spread green chutney and mayonnaise.",
        "Place kebabs and onion slices.",
        "Squeeze lemon juice.",
        "Roll tightly and serve."
      ]
    },
    { 
      id: 47, 
      name: "Shami Burger (Bun Kebab)",
      tagline: "Desi style shami burger",
      image: cheatImages[46],
      pantryKeywords: ["burger bun", "shami kebab", "onion", "chutney"],
      ingredients: [
        "1 burger bun",
        "2 shami kebabs",
        "Onion slices",
        "Green chutney",
        "Ketchup",
        "Oil for frying"
      ],
      steps: [
        "Fry shami kebabs until hot and slightly crispy.",
        "Toast burger bun.",
        "Spread green chutney on one bun, ketchup on the other.",
        "Place onion slices on bottom bun.",
        "Add shami kebabs.",
        "Cover with top bun.",
        "Serve hot with extra chutney."
      ]
    },
    { 
      id: 48, 
      name: "Frankie Roll",
      tagline: "Mumbai-style frankie roll",
      image: cheatImages[47],
      pantryKeywords: ["tortilla", "chicken", "egg", "spices"],
      ingredients: [
        "1 large tortilla",
        "150g chicken strips",
        "1 egg",
        "1 onion, sliced",
        "1 teaspoon frankie masala",
        "1 tablespoon oil",
        "Green chutney",
        "Mayonnaise"
      ],
      steps: [
        "Cook chicken strips with frankie masala until done.",
        "Scramble egg in a pan.",
        "Warm tortilla.",
        "Spread chutney and mayonnaise.",
        "Place scrambled egg, chicken, and onion.",
        "Roll tightly.",
        "Toast the roll on a pan for 1-2 minutes.",
        "Serve hot."
      ]
    },
    { 
      id: 49, 
      name: "Chicken Shawarma",
      tagline: "Middle Eastern style shawarma",
      image: cheatImages[48],
      pantryKeywords: ["pita bread", "chicken", "garlic sauce", "pickles"],
      ingredients: [
        "1 pita bread",
        "200g chicken strips",
        "2 tablespoons shawarma spice",
        "Garlic sauce",
        "Pickles, sliced",
        "Lettuce",
        "Tomato slices",
        "1 tablespoon oil"
      ],
      steps: [
        "Toss chicken with shawarma spice.",
        "Heat oil and cook chicken until done.",
        "Warm pita bread.",
        "Spread garlic sauce on pita.",
        "Add lettuce, tomato, pickles, and chicken.",
        "Roll tightly, wrapping one end.",
        "Toast on a pan if desired.",
        "Serve with garlic sauce."
      ]
    },
    { 
      id: 50, 
      name: "Beef Shawarma",
      tagline: "Beef version of classic shawarma",
      image: cheatImages[49],
      pantryKeywords: ["pita bread", "beef", "garlic sauce", "pickles"],
      ingredients: [
        "1 pita bread",
        "200g beef strips",
        "2 tablespoons shawarma spice",
        "Garlic sauce",
        "Pickles",
        "Lettuce",
        "Tomato",
        "1 tablespoon oil"
      ],
      steps: [
        "Season beef strips with shawarma spice.",
        "Heat oil and cook beef quickly until done (3-4 minutes).",
        "Warm pita bread.",
        "Spread garlic sauce generously.",
        "Add lettuce, tomato, pickles, and beef.",
        "Roll tightly.",
        "Wrap in foil to hold shape.",
        "Serve with extra sauce."
      ]
    },

    // FRIES & SIDES (51-62)
    { 
      id: 51, 
      name: "French Fries",
      tagline: "Classic crispy potato fries",
      image: cheatImages[50],
      pantryKeywords: ["potato", "oil", "salt"],
      ingredients: [
        "4 large potatoes",
        "Oil for deep frying",
        "Salt to taste",
        "Water for soaking"
      ],
      steps: [
        "Peel and cut potatoes into thin sticks.",
        "Soak in cold water for 30 minutes to remove starch.",
        "Drain and pat completely dry.",
        "Heat oil to 350°F (175°C).",
        "Fry potatoes in batches for 4-5 minutes until golden.",
        "Drain on paper towels.",
        "Sprinkle with salt while hot.",
        "Serve immediately with ketchup."
      ]
    },
    { 
      id: 52, 
      name: "Potato Wedges",
      tagline: "Thick-cut seasoned potato wedges",
      image: cheatImages[51],
      pantryKeywords: ["potato", "oil", "spices", "paprika"],
      ingredients: [
        "4 large potatoes",
        "3 tablespoons oil",
        "1 teaspoon paprika",
        "1 teaspoon garlic powder",
        "1 teaspoon onion powder",
        "Salt to taste",
        "½ teaspoon black pepper"
      ],
      steps: [
        "Preheat oven to 200°C (400°F).",
        "Cut potatoes into wedges (not peeled).",
        "In a bowl, mix oil with all spices.",
        "Toss potato wedges in the mixture until coated.",
        "Arrange on baking sheet in single layer.",
        "Bake for 25-30 minutes, flipping halfway.",
        "Sprinkle with extra salt if needed.",
        "Serve hot with sour cream."
      ]
    },
    { 
      id: 53, 
      name: "Crinkle Cut Fries",
      tagline: "Fun-shaped crispy fries",
      image: cheatImages[52],
      pantryKeywords: ["potato", "oil", "salt"],
      ingredients: [
        "4 large potatoes",
        "Oil for frying",
        "Salt to taste",
        "Water for soaking"
      ],
      steps: [
        "Use a crinkle cutter to cut potatoes into fries.",
        "Soak in cold water for 30 minutes.",
        "Drain and pat dry thoroughly.",
        "Heat oil to 350°F.",
        "Fry in batches for 4-5 minutes until golden.",
        "Drain on paper towels.",
        "Season with salt.",
        "Serve with your favorite dip."
      ]
    },
    { 
      id: 54, 
      name: "Cheese Fries",
      tagline: "Fries loaded with cheese",
      image: cheatImages[53],
      pantryKeywords: ["potato", "cheese", "oil", "salt"],
      ingredients: [
        "4 potatoes, cut into fries",
        "1 cup cheddar cheese, grated",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "Prepare and fry french fries as in recipe #51.",
        "Place hot fries in an oven-safe dish.",
        "Sprinkle grated cheese generously over fries.",
        "Place under broiler for 2-3 minutes until cheese melts.",
        "Serve immediately while hot and cheesy."
      ]
    },
    { 
      id: 55, 
      name: "Loaded Fries",
      tagline: "Fully loaded with toppings",
      image: cheatImages[54],
      pantryKeywords: ["potato", "cheese", "bacon", "sour cream"],
      ingredients: [
        "4 potatoes, cut into fries",
        "1 cup cheddar cheese, grated",
        "4 bacon strips, cooked and crumbled",
        "¼ cup sour cream",
        "2 green onions, chopped",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "Prepare and fry french fries.",
        "Place hot fries on a serving plate.",
        "Sprinkle cheese and bacon over fries.",
        "Add dollops of sour cream.",
        "Garnish with green onions.",
        "Serve immediately."
      ]
    },
    { 
      id: 56, 
      name: "Onion Rings",
      tagline: "Crispy battered onion rings",
      image: cheatImages[55],
      pantryKeywords: ["onion", "flour", "buttermilk", "oil"],
      ingredients: [
        "2 large onions",
        "1 cup flour",
        "1 teaspoon paprika",
        "1 teaspoon garlic powder",
        "Salt to taste",
        "1 cup buttermilk",
        "Oil for deep frying"
      ],
      steps: [
        "Slice onions into ½-inch thick rings, separate rings.",
        "Mix flour with paprika, garlic powder, and salt.",
        "Dip onion rings in buttermilk, then coat in seasoned flour.",
        "For extra crispy, dip again in buttermilk and flour.",
        "Heat oil to 350°F.",
        "Fry rings in batches for 2-3 minutes until golden.",
        "Drain on paper towels.",
        "Serve hot with dipping sauce."
      ]
    },
    { 
      id: 57, 
      name: "Mozzarella Sticks",
      tagline: "Cheesy fried mozzarella",
      image: cheatImages[56],
      pantryKeywords: ["mozzarella cheese", "flour", "eggs", "breadcrumbs"],
      ingredients: [
        "12 mozzarella sticks (string cheese)",
        "½ cup flour",
        "2 eggs, beaten",
        "1 cup breadcrumbs",
        "1 teaspoon Italian seasoning",
        "Oil for deep frying",
        "Marinara sauce for dipping"
      ],
      steps: [
        "Freeze mozzarella sticks for at least 1 hour.",
        "Set up bowls: flour, beaten eggs, breadcrumbs mixed with Italian seasoning.",
        "Coat each stick in flour, then egg, then breadcrumbs.",
        "For extra coating, dip again in egg and breadcrumbs.",
        "Freeze for another 30 minutes.",
        "Heat oil to 350°F.",
        "Fry sticks for 1-2 minutes until golden (don't overfry or cheese will leak).",
        "Drain briefly and serve immediately with marinara."
      ]
    },
    { 
      id: 58, 
      name: "Cheese Balls",
      tagline: "Crispy cheese-filled balls",
      image: cheatImages[57],
      pantryKeywords: ["cheese", "potato", "breadcrumbs", "flour"],
      ingredients: [
        "2 cups mozzarella cheese, grated",
        "2 potatoes, boiled and mashed",
        "2 tablespoons cornflour",
        "1 teaspoon chili flakes",
        "Salt to taste",
        "1 cup breadcrumbs",
        "2 eggs, beaten",
        "Oil for deep frying"
      ],
      steps: [
        "Mix mashed potatoes with cornflour, chili flakes, and salt.",
        "Take a small portion, flatten, place cheese in center, and roll into a ball.",
        "Dip each ball in beaten egg.",
        "Roll in breadcrumbs to coat.",
        "Freeze for 30 minutes.",
        "Heat oil and fry until golden (3-4 minutes).",
        "Serve hot with ketchup."
      ]
    },
    { 
      id: 59, 
      name: "Potato Bites",
      tagline: "Spicy potato snack bites",
      image: cheatImages[58],
      pantryKeywords: ["potato", "flour", "spices", "oil"],
      ingredients: [
        "4 potatoes, boiled and mashed",
        "½ cup flour",
        "1 teaspoon chili powder",
        "1 teaspoon chaat masala",
        "Salt to taste",
        "2 green chilies, chopped",
        "Oil for shallow frying"
      ],
      steps: [
        "Mix mashed potatoes with flour, chili powder, chaat masala, salt, and green chilies.",
        "Form into small bite-sized balls or patties.",
        "Heat oil in a pan.",
        "Shallow fry until golden brown on all sides.",
        "Drain on paper towels.",
        "Serve hot with chutney."
      ]
    },
    { 
      id: 60, 
      name: "Garlic Bread",
      tagline: "Simple garlic butter bread",
      image: cheatImages[59],
      pantryKeywords: ["bread", "butter", "garlic", "parsley"],
      ingredients: [
        "1 baguette or bread loaf",
        "4 tablespoons butter, softened",
        "3 cloves garlic, minced",
        "1 tablespoon parsley, chopped",
        "Salt to taste"
      ],
      steps: [
        "Preheat oven to 180°C (350°F).",
        "Mix softened butter with minced garlic, parsley, and salt.",
        "Slice baguette diagonally, not cutting all the way through.",
        "Spread garlic butter between slices and on top.",
        "Wrap in foil and bake for 10 minutes.",
        "Open foil and bake for 5 more minutes until crispy.",
        "Serve warm."
      ]
    },
    { 
      id: 61, 
      name: "Cheese Garlic Bread",
      tagline: "Garlic bread with melted cheese",
      image: cheatImages[60],
      pantryKeywords: ["bread", "butter", "garlic", "cheese"],
      ingredients: [
        "1 baguette",
        "4 tablespoons butter",
        "3 cloves garlic, minced",
        "1 cup mozzarella cheese, grated",
        "1 teaspoon oregano"
      ],
      steps: [
        "Preheat oven to 180°C.",
        "Mix butter with minced garlic.",
        "Slice baguette, spread garlic butter on each slice.",
        "Sprinkle cheese generously on top.",
        "Sprinkle oregano.",
        "Bake for 10-12 minutes until cheese melts and edges are crispy.",
        "Serve hot."
      ]
    },
    { 
      id: 62, 
      name: "Stuffed Garlic Bread",
      tagline: "Cheese-stuffed garlic bread",
      image: cheatImages[61],
      pantryKeywords: ["pizza dough", "butter", "garlic", "cheese"],
      ingredients: [
        "1 pizza dough ball",
        "4 tablespoons garlic butter",
        "1 cup mozzarella cheese",
        "1 teaspoon oregano",
        "1 egg, beaten (for brushing)"
      ],
      steps: [
        "Roll out pizza dough into a rectangle.",
        "Spread garlic butter on half the dough.",
        "Sprinkle cheese over the butter.",
        "Fold the other half over and seal edges.",
        "Brush with beaten egg, sprinkle oregano.",
        "Bake at 200°C for 15-20 minutes until golden.",
        "Slice and serve warm."
      ]
    },

    // WRAPS & TORTILLAS (63-71)
    { 
      id: 63, 
      name: "Chicken Wrap",
      tagline: "Classic chicken wrap",
      image: cheatImages[62],
      pantryKeywords: ["tortilla", "chicken", "lettuce", "mayonnaise"],
      ingredients: [
        "1 large tortilla",
        "200g cooked chicken strips",
        "Lettuce, shredded",
        "Mayonnaise",
        "Ketchup",
        "Salt and pepper"
      ],
      steps: [
        "Warm tortilla in a pan.",
        "Spread mayonnaise and ketchup on tortilla.",
        "Add shredded lettuce in center.",
        "Place chicken strips on lettuce.",
        "Season with salt and pepper.",
        "Fold sides and roll tightly.",
        "Cut diagonally and serve."
      ]
    },
    { 
      id: 64, 
      name: "Veg Wrap",
      tagline: "Fresh vegetable wrap",
      image: cheatImages[63],
      pantryKeywords: ["tortilla", "vegetables", "lettuce", "mayonnaise"],
      ingredients: [
        "1 large tortilla",
        "½ cup shredded lettuce",
        "½ cup grated carrots",
        "½ cup sliced cucumber",
        "½ cup sliced bell peppers",
        "Mayonnaise",
        "Ketchup",
        "Salt and pepper"
      ],
      steps: [
        "Warm tortilla.",
        "Spread sauces on tortilla.",
        "Layer all vegetables in center.",
        "Season with salt and pepper.",
        "Roll tightly, folding in sides.",
        "Cut in half and serve."
      ]
    },
    { 
      id: 65, 
      name: "Spicy Chicken Wrap",
      tagline: "Wrap with a spicy kick",
      image: cheatImages[64],
      pantryKeywords: ["tortilla", "chicken", "spicy sauce", "lettuce"],
      ingredients: [
        "1 large tortilla",
        "200g spicy chicken strips",
        "Lettuce",
        "Spicy mayo",
        "Jalapenos",
        "Onion slices"
      ],
      steps: [
        "Prepare chicken with chili and spices.",
        "Warm tortilla.",
        "Spread spicy mayo on tortilla.",
        "Add lettuce, onion, jalapenos.",
        "Place spicy chicken on top.",
        "Roll tightly and serve."
      ]
    },
    { 
      id: 66, 
      name: "BBQ Wrap",
      tagline: "BBQ flavored chicken wrap",
      image: cheatImages[65],
      pantryKeywords: ["tortilla", "chicken", "bbq sauce", "onion"],
      ingredients: [
        "1 large tortilla",
        "200g chicken strips",
        "3 tablespoons BBQ sauce",
        "½ onion, sliced",
        "Lettuce",
        "Mayonnaise"
      ],
      steps: [
        "Cook chicken strips, toss with BBQ sauce.",
        "Warm tortilla.",
        "Spread mayonnaise on tortilla.",
        "Add lettuce, onion, and BBQ chicken.",
        "Roll tightly.",
        "Toast on pan for 1-2 minutes if desired.",
        "Serve hot."
      ]
    },
    { 
      id: 67, 
      name: "Shawarma Wrap",
      tagline: "Shawarma in wrap form",
      image: cheatImages[66],
      pantryKeywords: ["tortilla", "chicken", "garlic sauce", "pickles"],
      ingredients: [
        "1 large tortilla",
        "200g shawarma chicken",
        "Garlic sauce",
        "Pickles, sliced",
        "Lettuce",
        "Tomato slices"
      ],
      steps: [
        "Prepare chicken with shawarma spices.",
        "Warm tortilla.",
        "Spread garlic sauce generously.",
        "Add lettuce, tomato, pickles.",
        "Place shawarma chicken on top.",
        "Roll tightly and wrap in foil.",
        "Serve with extra garlic sauce."
      ]
    },
    { 
      id: 68, 
      name: "Fajita Wrap",
      tagline: "Sizzling fajita-style wrap",
      image: cheatImages[67],
      pantryKeywords: ["tortilla", "chicken", "fajita seasoning", "capsicum"],
      ingredients: [
        "1 large tortilla",
        "200g chicken strips",
        "1 onion, sliced",
        "1 capsicum, sliced",
        "1 tablespoon fajita seasoning",
        "Sour cream",
        "Salsa"
      ],
      steps: [
        "Cook chicken with fajita seasoning.",
        "Add onions and capsicum, sauté for 2 minutes.",
        "Warm tortilla.",
        "Spread sour cream on tortilla.",
        "Add chicken fajita mixture.",
        "Top with salsa.",
        "Roll and serve."
      ]
    },
    { 
      id: 69, 
      name: "Kebab Wrap",
      tagline: "Seekh kebab wrap",
      image: cheatImages[68],
      pantryKeywords: ["tortilla", "seekh kebab", "onion", "chutney"],
      ingredients: [
        "1 large tortilla",
        "3 seekh kebabs",
        "½ onion, sliced",
        "Green chutney",
        "Mayonnaise",
        "Lemon juice"
      ],
      steps: [
        "Cook or reheat seekh kebabs.",
        "Warm tortilla.",
        "Spread green chutney and mayonnaise.",
        "Place kebabs and onion slices.",
        "Squeeze lemon juice.",
        "Roll tightly and serve."
      ]
    },
    { 
      id: 70, 
      name: "Mayo Wrap",
      tagline: "Simple creamy mayo wrap",
      image: cheatImages[69],
      pantryKeywords: ["tortilla", "chicken", "mayonnaise", "lettuce"],
      ingredients: [
        "1 large tortilla",
        "200g cooked chicken",
        "3 tablespoons mayonnaise",
        "Lettuce",
        "Salt and pepper"
      ],
      steps: [
        "Mix shredded chicken with mayonnaise, salt, and pepper.",
        "Warm tortilla.",
        "Place lettuce on tortilla.",
        "Add chicken mayo mixture.",
        "Roll tightly.",
        "Cut and serve."
      ]
    },
    { 
      id: 71, 
      name: "Ranch Wrap",
      tagline: "Ranch dressing wrap",
      image: cheatImages[70],
      pantryKeywords: ["tortilla", "chicken", "ranch dressing", "bacon"],
      ingredients: [
        "1 large tortilla",
        "200g chicken strips",
        "3 tablespoons ranch dressing",
        "4 bacon strips, cooked",
        "Lettuce",
        "Tomato"
      ],
      steps: [
        "Cook chicken strips.",
        "Warm tortilla.",
        "Spread ranch dressing on tortilla.",
        "Add lettuce, tomato, chicken, and bacon.",
        "Roll tightly.",
        "Serve immediately."
      ]
    },

    // PASTA (72-79)
    { 
      id: 72, 
      name: "Red Sauce Pasta",
      tagline: "Classic tomato-based pasta",
      image: cheatImages[71],
      pantryKeywords: ["pasta", "tomato", "onion", "garlic"],
      ingredients: [
        "200g pasta",
        "2 tomatoes, pureed",
        "1 onion, chopped",
        "3 cloves garlic, minced",
        "2 tablespoons oil",
        "1 teaspoon chili flakes",
        "1 teaspoon oregano",
        "Salt to taste",
        "Grated cheese for topping"
      ],
      steps: [
        "Boil pasta according to package instructions. Drain and set aside.",
        "Heat oil, sauté garlic and onion until soft.",
        "Add tomato puree, cook for 5-6 minutes.",
        "Add chili flakes, oregano, and salt.",
        "Add boiled pasta and mix well.",
        "Cook for 2-3 minutes.",
        "Serve hot with grated cheese."
      ]
    },
    { 
      id: 73, 
      name: "White Sauce Pasta",
      tagline: "Creamy white sauce pasta",
      image: cheatImages[72],
      pantryKeywords: ["pasta", "milk", "flour", "butter", "cheese"],
      ingredients: [
        "200g pasta",
        "2 tablespoons butter",
        "2 tablespoons flour",
        "2 cups milk",
        "½ cup cheese, grated",
        "1 teaspoon garlic powder",
        "Salt and pepper to taste",
        "Oregano for garnish"
      ],
      steps: [
        "Boil pasta, drain and set aside.",
        "Melt butter in a pan, add flour and whisk for 1 minute.",
        "Slowly add milk while whisking to avoid lumps.",
        "Cook until sauce thickens (3-4 minutes).",
        "Add cheese, garlic powder, salt, and pepper.",
        "Add boiled pasta and mix well.",
        "Cook for 2 minutes.",
        "Garnish with oregano and serve."
      ]
    },
    { 
      id: 74, 
      name: "Pink Sauce Pasta",
      tagline: "Perfect blend of red and white",
      image: cheatImages[73],
      pantryKeywords: ["pasta", "tomato", "cream", "cheese"],
      ingredients: [
        "200g pasta",
        "1 cup tomato puree",
        "½ cup cream",
        "2 tablespoons butter",
        "2 cloves garlic, minced",
        "½ cup cheese, grated",
        "Salt and pepper",
        "1 teaspoon oregano"
      ],
      steps: [
        "Boil pasta, drain and set aside.",
        "Heat butter, sauté garlic.",
        "Add tomato puree and cook for 5 minutes.",
        "Add cream and cheese, stir until cheese melts.",
        "Season with salt, pepper, and oregano.",
        "Add pasta and mix well.",
        "Cook for 2-3 minutes.",
        "Serve hot."
      ]
    },
    { 
      id: 75, 
      name: "Baked Pasta",
      tagline: "Oven-baked cheesy pasta",
      image: cheatImages[74],
      pantryKeywords: ["pasta", "cheese", "pasta sauce", "mozzarella"],
      ingredients: [
        "200g pasta",
        "1 cup pasta sauce",
        "1 cup mozzarella cheese, grated",
        "½ cup cheddar cheese",
        "2 tablespoons butter",
        "1 teaspoon oregano"
      ],
      steps: [
        "Preheat oven to 180°C.",
        "Boil pasta until al dente, drain.",
        "Mix pasta with pasta sauce.",
        "Transfer to a baking dish.",
        "Top with both cheeses and oregano.",
        "Dot with butter.",
        "Bake for 15-20 minutes until cheese melts and bubbles.",
        "Serve hot."
      ]
    },
    { 
      id: 76, 
      name: "Macaroni & Cheese",
      tagline: "Classic comfort food",
      image: cheatImages[75],
      pantryKeywords: ["macaroni", "cheese", "milk", "butter"],
      ingredients: [
        "200g macaroni",
        "2 tablespoons butter",
        "2 tablespoons flour",
        "2 cups milk",
        "2 cups cheddar cheese, grated",
        "½ teaspoon mustard powder",
        "Salt and pepper"
      ],
      steps: [
        "Cook macaroni according to package, drain.",
        "Melt butter, add flour and cook for 1 minute.",
        "Slowly whisk in milk until smooth.",
        "Cook until thickened (3-4 minutes).",
        "Add cheese and mustard, stir until melted.",
        "Season with salt and pepper.",
        "Add macaroni and mix well.",
        "Serve hot."
      ]
    },
    { 
      id: 77, 
      name: "Chicken Pasta",
      tagline: "Pasta with chicken",
      image: cheatImages[76],
      pantryKeywords: ["pasta", "chicken", "cream", "cheese"],
      ingredients: [
        "200g pasta",
        "200g chicken breast, diced",
        "2 tablespoons oil",
        "2 cloves garlic, minced",
        "1 cup cream",
        "½ cup cheese",
        "Salt and pepper",
        "1 teaspoon Italian herbs"
      ],
      steps: [
        "Cook pasta, drain and set aside.",
        "Season chicken with salt and pepper.",
        "Heat oil, cook chicken until done (5-6 minutes).",
        "Add garlic, sauté for 1 minute.",
        "Add cream and cheese, stir until cheese melts.",
        "Add herbs and adjust seasoning.",
        "Add pasta and mix well.",
        "Serve hot."
      ]
    },
    { 
      id: 78, 
      name: "Spaghetti Bolognese",
      tagline: "Classic meat sauce pasta",
      image: cheatImages[77],
      pantryKeywords: ["spaghetti", "beef mince", "tomato", "onion"],
      ingredients: [
        "200g spaghetti",
        "250g beef mince",
        "1 onion, chopped",
        "2 cloves garlic",
        "2 tomatoes, pureed",
        "2 tablespoons oil",
        "1 teaspoon oregano",
        "Salt and pepper"
      ],
      steps: [
        "Cook spaghetti, drain and set aside.",
        "Heat oil, sauté onion and garlic.",
        "Add beef mince and cook until browned.",
        "Add tomato puree and cook for 10 minutes.",
        "Season with oregano, salt, and pepper.",
        "Serve sauce over spaghetti.",
        "Top with parmesan cheese."
      ]
    },
    { 
      id: 79, 
      name: "Spaghetti Carbonara",
      tagline: "Classic egg and cheese pasta",
      image: cheatImages[78],
      pantryKeywords: ["spaghetti", "eggs", "cheese", "bacon"],
      ingredients: [
        "200g spaghetti",
        "2 eggs",
        "½ cup parmesan cheese",
        "100g bacon, diced",
        "2 cloves garlic",
        "2 tablespoons oil",
        "Black pepper"
      ],
      steps: [
        "Cook spaghetti, reserve ½ cup pasta water.",
        "In a bowl, whisk eggs with parmesan and black pepper.",
        "Heat oil, cook bacon until crispy, add garlic.",
        "Remove from heat, add hot spaghetti and toss.",
        "Quickly pour egg mixture and toss (off heat) to create creamy sauce.",
        "Add pasta water if needed.",
        "Serve immediately with extra cheese."
      ]
    },

    // CHINESE FAST FOOD (80-87)
    { 
      id: 80, 
      name: "Chicken Chow Mein",
      tagline: "Stir-fried noodles with chicken",
      image: cheatImages[79],
      pantryKeywords: ["noodles", "chicken", "soy sauce", "vegetables"],
      ingredients: [
        "200g noodles",
        "200g chicken, sliced",
        "1 onion, sliced",
        "1 capsicum, sliced",
        "2 tablespoons soy sauce",
        "1 tablespoon chili sauce",
        "2 tablespoons oil",
        "Salt to taste",
        "2 cloves garlic, minced"
      ],
      steps: [
        "Boil noodles according to package, drain and set aside.",
        "Heat oil in wok, add garlic and chicken.",
        "Stir-fry chicken until cooked.",
        "Add vegetables and stir-fry for 2-3 minutes.",
        "Add soy sauce, chili sauce, and salt.",
        "Add boiled noodles and toss everything together.",
        "Stir-fry for 2-3 minutes.",
        "Serve hot."
      ]
    },
    { 
      id: 81, 
      name: "Chicken Fried Rice",
      tagline: "Classic chicken fried rice",
      image: cheatImages[80],
      pantryKeywords: ["rice", "chicken", "eggs", "soy sauce"],
      ingredients: [
        "2 cups cooked rice (preferably day-old)",
        "200g chicken, diced",
        "2 eggs, beaten",
        "½ cup mixed vegetables",
        "2 tablespoons soy sauce",
        "1 tablespoon oil",
        "2 green onions, chopped",
        "Salt to taste"
      ],
      steps: [
        "Heat oil in wok, scramble eggs and set aside.",
        "In same wok, add chicken and cook until done.",
        "Add vegetables and stir-fry for 2 minutes.",
        "Add cold rice and break up any clumps.",
        "Add soy sauce and salt, mix well.",
        "Add scrambled eggs and green onions.",
        "Stir-fry for 2-3 minutes until heated through.",
        "Serve hot."
      ]
    },
    { 
      id: 82, 
      name: "Chilli Chicken",
      tagline: "Spicy Indo-Chinese chicken",
      image: cheatImages[81],
      pantryKeywords: ["chicken", "soy sauce", "chili sauce", "capsicum"],
      ingredients: [
        "500g chicken, boneless cubes",
        "2 tablespoons cornflour",
        "1 tablespoon soy sauce",
        "1 egg",
        "Oil for frying",
        "For sauce: 1 onion, 1 capsicum, 2 tbsp chili sauce, 1 tbsp soy sauce, 1 tsp vinegar, ginger-garlic"
      ],
      steps: [
        "Marinate chicken with cornflour, soy sauce, and egg for 30 minutes.",
        "Deep fry chicken until golden and crispy.",
        "In a pan, sauté ginger-garlic, add onions and capsicum.",
        "Add chili sauce, soy sauce, vinegar.",
        "Add fried chicken and toss to coat.",
        "Garnish with green onions and serve."
      ]
    },
    { 
      id: 83, 
      name: "Chicken Manchurian",
      tagline: "Popular Indo-Chinese dish",
      image: cheatImages[82],
      pantryKeywords: ["chicken", "cornflour", "soy sauce", "chili sauce"],
      ingredients: [
        "500g chicken mince",
        "2 tablespoons cornflour",
        "1 tablespoon flour",
        "1 egg",
        "Salt and pepper",
        "Oil for frying",
        "For sauce: onion, capsicum, ginger-garlic, soy sauce, chili sauce, ketchup"
      ],
      steps: [
        "Mix chicken mince with cornflour, flour, egg, salt, and pepper.",
        "Form into small balls.",
        "Deep fry until golden and cooked through.",
        "In a pan, sauté ginger-garlic, add onions and capsicum.",
        "Add soy sauce, chili sauce, ketchup, and water.",
        "Thicken with cornflour slurry.",
        "Add fried chicken balls and coat with sauce.",
        "Serve hot with fried rice."
      ]
    },
    { 
      id: 84, 
      name: "Spring Rolls",
      tagline: "Crispy vegetable rolls",
      image: cheatImages[83],
      pantryKeywords: ["spring roll wrappers", "cabbage", "carrot", "soy sauce"],
      ingredients: [
        "10 spring roll wrappers",
        "1 cup shredded cabbage",
        "½ cup grated carrot",
        "½ cup bean sprouts",
        "2 tablespoons soy sauce",
        "1 teaspoon ginger-garlic paste",
        "Salt and pepper",
        "Oil for deep frying"
      ],
      steps: [
        "Heat oil in pan, add ginger-garlic.",
        "Add all vegetables and stir-fry for 2-3 minutes.",
        "Add soy sauce, salt, and pepper. Cool filling.",
        "Place filling on spring roll wrapper, fold sides, and roll tightly.",
        "Seal edge with water or flour paste.",
        "Deep fry until golden brown (3-4 minutes).",
        "Drain and serve hot with sauce."
      ]
    },
    { 
      id: 85, 
      name: "Chicken 65",
      tagline: "Spicy deep-fried chicken",
      image: cheatImages[84],
      pantryKeywords: ["chicken", "curry leaves", "spices", "yogurt"],
      ingredients: [
        "500g chicken, boneless cubes",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon red chili powder",
        "1 teaspoon turmeric",
        "2 tablespoons cornflour",
        "1 egg",
        "Salt to taste",
        "Oil for frying",
        "Curry leaves and green chilies for tempering"
      ],
      steps: [
        "Marinate chicken with ginger-garlic, chili powder, turmeric, cornflour, egg, and salt for 1 hour.",
        "Deep fry chicken until golden and crispy.",
        "Heat little oil, add curry leaves and green chilies.",
        "Add fried chicken and toss well.",
        "Garnish with lemon juice and serve."
      ]
    },
    { 
      id: 86, 
      name: "Honey Garlic Chicken",
      tagline: "Sweet and savory chicken",
      image: cheatImages[85],
      pantryKeywords: ["chicken", "honey", "garlic", "soy sauce"],
      ingredients: [
        "500g chicken, boneless cubes",
        "2 tablespoons cornflour",
        "Salt and pepper",
        "Oil for frying",
        "For sauce: 4 tbsp honey, 2 tbsp soy sauce, 6 cloves garlic, minced, 1 tbsp vinegar"
      ],
      steps: [
        "Coat chicken with cornflour, salt, and pepper.",
        "Deep fry until golden and crispy.",
        "In a pan, sauté garlic until fragrant.",
        "Add honey, soy sauce, vinegar, and little water.",
        "Cook until sauce thickens slightly.",
        "Add fried chicken and toss to coat.",
        "Garnish with sesame seeds and serve."
      ]
    },
    { 
      id: 87, 
      name: "Schezwan Chicken",
      tagline: "Spicy schezwan style chicken",
      image: cheatImages[86],
      pantryKeywords: ["chicken", "schezwansauce", "capsicum", "onion"],
      ingredients: [
        "500g chicken, boneless cubes",
        "2 tablespoons cornflour",
        "1 egg",
        "Salt to taste",
        "Oil for frying",
        "For sauce: 1 onion, 1 capsicum, 3 tbsp schezwan sauce, 1 tbsp soy sauce, ginger-garlic"
      ],
      steps: [
        "Marinate chicken with cornflour, egg, and salt.",
        "Deep fry until crispy.",
        "In a wok, sauté ginger-garlic, add onions and capsicum.",
        "Add schezwan sauce and soy sauce.",
        "Add fried chicken and toss well.",
        "Serve hot with fried rice."
      ]
    },

    // DESI FAST FOOD (88-105)
    { 
      id: 88, 
      name: "Bun Kebab (Shami Burger)",
      tagline: "Karachi-style bun kebab",
      image: cheatImages[87],
      pantryKeywords: ["bun", "shami kebab", "onion", "chutney"],
      ingredients: [
        "2 buns",
        "4 shami kebabs",
        "1 onion, sliced",
        "Green chutney",
        "Ketchup",
        "1 egg, beaten (optional)",
        "Oil for frying"
      ],
      steps: [
        "Fry shami kebabs until hot and slightly crispy.",
        "If desired, dip buns in beaten egg and fry until golden.",
        "Spread green chutney on one bun half, ketchup on the other.",
        "Place onion slices on bottom bun.",
        "Add shami kebabs.",
        "Cover with top bun.",
        "Serve hot with extra chutney."
      ]
    },
    { 
      id: 89, 
      name: "Samosa Chaat",
      tagline: "Crumbled samosa with chutneys",
      image: cheatImages[88],
      pantryKeywords: ["samosa", "yogurt", "chutney", "chickpeas"],
      ingredients: [
        "2 samosas",
        "½ cup yogurt",
        "¼ cup cooked chickpeas",
        "Green chutney",
        "Tamarind chutney",
        "Chaat masala",
        "Red chili powder",
        "Sev (crispy noodles)",
        "Chopped onions, tomatoes"
      ],
      steps: [
        "Crush or break samosas into pieces on a plate.",
        "Add cooked chickpeas on top.",
        "Drizzle beaten yogurt over samosas.",
        "Add green chutney and tamarind chutney.",
        "Sprinkle chaat masala and red chili powder.",
        "Top with chopped onions and tomatoes.",
        "Garnish generously with sev.",
        "Serve immediately."
      ]
    },
    { 
      id: 90, 
      name: "Dahi Baray",
      tagline: "Lentil fritters in yogurt",
      image: cheatImages[89],
      pantryKeywords: ["lentils", "yogurt", "chutney", "spices"],
      ingredients: [
        "1 cup white lentil (washed urad dal)",
        "Salt to taste",
        "Green chilies, chopped",
        "Ginger, grated",
        "Oil for frying",
        "2 cups yogurt, beaten",
        "Green chutney",
        "Tamarind chutney",
        "Chaat masala",
        "Red chili powder"
      ],
      steps: [
        "Soak lentils for 4 hours, then grind to smooth paste.",
        "Add salt, green chilies, and ginger to batter.",
        "Heat oil, drop spoonfuls of batter and fry until golden.",
        "Soak fried baray in warm water for 5 minutes, then squeeze gently.",
        "Arrange baray in serving dish.",
        "Pour beaten yogurt over them.",
        "Drizzle with both chutneys.",
        "Sprinkle chaat masala and chili powder.",
        "Serve chilled."
      ]
    },
    { 
      id: 91, 
      name: "Aloo Tikki Chaat",
      tagline: "Potato patties with chutneys",
      image: cheatImages[90],
      pantryKeywords: ["potato", "yogurt", "chutney", "chickpeas"],
      ingredients: [
        "4 aloo tikkis (potato patties)",
        "½ cup yogurt",
        "¼ cup cooked chickpeas",
        "Green chutney",
        "Tamarind chutney",
        "Chaat masala",
        "Red chili powder",
        "Onion, chopped",
        "Sev"
      ],
      steps: [
        "Heat aloo tikkis in a pan until hot and crispy.",
        "Place tikkis on serving plate.",
        "Add cooked chickpeas on top.",
        "Drizzle beaten yogurt.",
        "Add green and tamarind chutneys.",
        "Sprinkle chaat masala and chili powder.",
        "Top with chopped onions and sev.",
        "Serve immediately."
      ]
    },
    { 
      id: 92, 
      name: "Pakora Chaat",
      tagline: "Crispy pakoras in chaat style",
      image: cheatImages[91],
      pantryKeywords: ["pakoras", "yogurt", "chutney", "chickpeas"],
      ingredients: [
        "10-12 mixed pakoras",
        "½ cup yogurt",
        "¼ cup cooked chickpeas",
        "Green chutney",
        "Tamarind chutney",
        "Chaat masala",
        "Red chili powder",
        "Onion, chopped",
        "Tomato, chopped",
        "Sev"
      ],
      steps: [
        "Arrange pakoras on a serving plate.",
        "Add cooked chickpeas.",
        "Pour beaten yogurt over pakoras.",
        "Drizzle both chutneys.",
        "Sprinkle chaat masala and chili powder.",
        "Top with chopped onions and tomatoes.",
        "Garnish with sev.",
        "Serve immediately."
      ]
    },
    { 
      id: 93, 
      name: "Gol Gappay",
      tagline: "Crispy hollow puris with flavored water",
      image: cheatImages[92],
      pantryKeywords: ["gol gappa", "potato", "chickpeas", "tamarind"],
      ingredients: [
        "20 gol gappa puris",
        "1 potato, boiled and diced",
        "½ cup cooked chickpeas",
        "1 onion, finely chopped",
        "Tamarind chutney",
        "Green chutney",
        "Spiced water (1 liter water, mint, coriander, green chilies, chaat masala)"
      ],
      steps: [
        "Prepare spiced water by blending mint, coriander, green chilies with water. Strain, add chaat masala and salt.",
        "Make a small hole in each puri.",
        "Fill with potato, chickpeas, and onion.",
        "Add a drop of tamarind chutney and green chutney.",
        "Dip in spiced water and eat immediately."
      ]
    },
    { 
      id: 94, 
      name: "Papri Chaat",
      tagline: "Crispy dough wafers chaat",
      image: cheatImages[93],
      pantryKeywords: ["papri", "yogurt", "chutney", "potato"],
      ingredients: [
        "1 cup papri (fried dough wafers)",
        "1 potato, boiled and diced",
        "½ cup cooked chickpeas",
        "1 cup yogurt, beaten",
        "Green chutney",
        "Tamarind chutney",
        "Chaat masala",
        "Red chili powder",
        "Sev"
      ],
      steps: [
        "Arrange papri on a serving plate.",
        "Add diced potato and chickpeas.",
        "Pour beaten yogurt over everything.",
        "Drizzle both chutneys.",
        "Sprinkle chaat masala and chili powder.",
        "Top generously with sev.",
        "Serve immediately."
      ]
    },
    { 
      id: 95, 
      name: "Fruit Chaat",
      tagline: "Fresh fruit mix with chaat masala",
      image: cheatImages[94],
      pantryKeywords: ["banana", "apple", "orange", "chaat masala"],
      ingredients: [
        "1 apple, chopped",
        "1 banana, sliced",
        "1 orange, segmented",
        "½ cup grapes",
        "1 guava, chopped (optional)",
        "1 tablespoon lemon juice",
        "1 teaspoon chaat masala",
        "½ teaspoon black salt",
        "1 tablespoon sugar (optional)"
      ],
      steps: [
        "Chop all fruits into bite-sized pieces.",
        "In a large bowl, combine all fruits.",
        "Sprinkle lemon juice to prevent browning.",
        "Add chaat masala, black salt, and sugar.",
        "Toss gently to combine.",
        "Chill for 15-20 minutes.",
        "Serve cold."
      ]
    },
    { 
      id: 96, 
      name: "Chana Chaat",
      tagline: "Spicy chickpea chaat",
      image: cheatImages[95],
      pantryKeywords: ["chickpeas", "onion", "tomato", "chaat masala"],
      ingredients: [
        "2 cups cooked chickpeas",
        "1 onion, finely chopped",
        "1 tomato, finely chopped",
        "1 green chili, chopped",
        "2 tablespoons lemon juice",
        "1 teaspoon chaat masala",
        "½ teaspoon cumin powder",
        "Salt to taste",
        "Fresh coriander, chopped"
      ],
      steps: [
        "In a bowl, combine chickpeas, onion, tomato, and green chili.",
        "Add lemon juice, chaat masala, cumin powder, and salt.",
        "Mix well.",
        "Garnish with fresh coriander.",
        "Serve immediately or chill for later."
      ]
    },
    { 
      id: 97, 
      name: "Samosa (Aloo)",
      tagline: "Potato-filled crispy samosa",
      image: cheatImages[96],
      pantryKeywords: ["samosa wrappers", "potato", "peas", "spices"],
      ingredients: [
        "10 samosa wrappers",
        "3 potatoes, boiled and mashed",
        "½ cup peas",
        "1 teaspoon cumin seeds",
        "1 teaspoon coriander powder",
        "½ teaspoon red chili powder",
        "1 teaspoon chaat masala",
        "Salt to taste",
        "2 green chilies, chopped",
        "Oil for deep frying"
      ],
      steps: [
        "Heat little oil, add cumin seeds.",
        "Add peas and cook for 2 minutes.",
        "Add mashed potatoes and all spices.",
        "Mix well, cook for 2-3 minutes. Cool filling.",
        "Take samosa wrapper, fold into cone shape.",
        "Fill with potato mixture, seal edges with flour paste.",
        "Heat oil and deep fry until golden brown.",
        "Drain and serve with chutney."
      ]
    },
    { 
      id: 98, 
      name: "Samosa (Keema)",
      tagline: "Minced meat samosa",
      image: cheatImages[97],
      pantryKeywords: ["samosa wrappers", "mince", "onion", "spices"],
      ingredients: [
        "10 samosa wrappers",
        "250g beef or chicken mince",
        "1 onion, finely chopped",
        "1 teaspoon ginger-garlic paste",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "½ teaspoon red chili powder",
        "Salt to taste",
        "2 green chilies, chopped",
        "Oil for deep frying"
      ],
      steps: [
        "Heat oil, add ginger-garlic and onion, sauté until soft.",
        "Add mince and cook until browned.",
        "Add all spices and cook until mince is dry.",
        "Add green chilies, cool filling.",
        "Fill samosa wrappers with keema mixture.",
        "Seal edges with flour paste.",
        "Deep fry until golden brown.",
        "Serve hot."
      ]
    },
    { 
      id: 99, 
      name: "Pakora (Aloo)",
      tagline: "Potato fritters",
      image: cheatImages[98],
      pantryKeywords: ["potato", "besan", "spices", "oil"],
      ingredients: [
        "2 potatoes, thinly sliced",
        "1 cup besan (chickpea flour)",
        "1 teaspoon red chili powder",
        "½ teaspoon turmeric",
        "1 teaspoon cumin seeds",
        "Salt to taste",
        "Water as needed",
        "Oil for deep frying"
      ],
      steps: [
        "Mix besan with all spices and enough water to make thick batter.",
        "Heat oil for deep frying.",
        "Dip potato slices in batter, coat well.",
        "Drop carefully into hot oil.",
        "Fry until golden brown (3-4 minutes).",
        "Drain on paper towels.",
        "Serve hot with chutney."
      ]
    },
    { 
      id: 100, 
      name: "Pakora (Chicken)",
      tagline: "Chicken fritters",
      image: cheatImages[99],
      pantryKeywords: ["chicken", "besan", "spices", "oil"],
      ingredients: [
        "500g chicken, boneless cubes",
        "1 cup besan",
        "1 teaspoon ginger-garlic paste",
        "1 teaspoon red chili powder",
        "½ teaspoon turmeric",
        "1 teaspoon garam masala",
        "Salt to taste",
        "Water as needed",
        "Oil for deep frying"
      ],
      steps: [
        "Mix besan with all spices, ginger-garlic, and water to make batter.",
        "Add chicken pieces to batter, mix well.",
        "Marinate for 30 minutes.",
        "Heat oil, drop coated chicken pieces.",
        "Fry until golden and cooked through (5-6 minutes).",
        "Drain and serve hot with chutney."
      ]
    },
    { 
      id: 101, 
      name: "Pakora (Onion - Pyaaz ke Pakore)",
      tagline: "Onion fritters",
      image: cheatImages[100],
      pantryKeywords: ["onion", "besan", "spices", "oil"],
      ingredients: [
        "2 large onions, thinly sliced",
        "1 cup besan",
        "1 teaspoon red chili powder",
        "½ teaspoon turmeric",
        "1 teaspoon cumin seeds",
        "1 teaspoon ajwain (carom seeds)",
        "Salt to taste",
        "Water as needed",
        "Oil for deep frying"
      ],
      steps: [
        "Mix besan with all spices, add water to make thick batter.",
        "Add sliced onions to batter, mix well.",
        "Let sit for 10 minutes.",
        "Heat oil, drop spoonfuls of onion mixture.",
        "Fry until golden brown and crispy (4-5 minutes).",
        "Drain and serve hot with chutney."
      ]
    },
    { 
      id: 102, 
      name: "Rolls (Seekh Kebab Roll)",
      tagline: "Seekh kebab in paratha roll",
      image: cheatImages[101],
      pantryKeywords: ["paratha", "seekh kebab", "onion", "chutney"],
      ingredients: [
        "1 paratha",
        "2 seekh kebabs",
        "1 onion, sliced",
        "Green chutney",
        "Mayonnaise",
        "Lemon juice"
      ],
      steps: [
        "Heat paratha on tawa.",
        "Cook or reheat seekh kebabs.",
        "Spread green chutney and mayonnaise on paratha.",
        "Place kebabs and onion slices.",
        "Squeeze lemon juice.",
        "Roll tightly and wrap in foil.",
        "Serve hot."
      ]
    },
    { 
      id: 103, 
      name: "Kathi Roll",
      tagline: "Kolkata-style kathi roll",
      image: cheatImages[102],
      pantryKeywords: ["paratha", "chicken", "egg", "onion"],
      ingredients: [
        "1 paratha",
        "200g chicken strips, cooked with spices",
        "1 egg, beaten",
        "1 onion, sliced",
        "Green chutney",
        "Ketchup",
        "Lemon juice"
      ],
      steps: [
        "Cook beaten egg on tawa like a thin omelet.",
        "Place paratha over egg, press lightly, cook together.",
        "Remove egg-coated paratha.",
        "Spread chutney and ketchup.",
        "Add chicken strips and onion.",
        "Sprinkle lemon juice.",
        "Roll tightly and serve."
      ]
    },
    { 
      id: 104, 
      name: "Paratha Roll",
      tagline: "Simple paratha roll with filling",
      image: cheatImages[103],
      pantryKeywords: ["paratha", "chicken", "onion", "sauce"],
      ingredients: [
        "1 paratha",
        "200g chicken or beef filling",
        "1 onion, sliced",
        "Mayonnaise",
        "Ketchup",
        "Green chilies"
      ],
      steps: [
        "Warm paratha on tawa.",
        "Spread mayonnaise and ketchup.",
        "Place cooked meat filling in center.",
        "Add onion slices and green chilies.",
        "Roll tightly.",
        "Wrap in foil to hold shape.",
        "Serve hot."
      ]
    },
    { 
      id: 105, 
      name: "Anda Roll",
      tagline: "Egg paratha roll",
      image: cheatImages[104],
      pantryKeywords: ["paratha", "eggs", "onion", "sauce"],
      ingredients: [
        "1 paratha",
        "2 eggs, beaten",
        "1 onion, sliced",
        "Green chutney",
        "Ketchup",
        "Salt and pepper",
        "Chaat masala"
      ],
      steps: [
        "Cook beaten egg on tawa like an omelet.",
        "Place paratha over egg, press, cook together.",
        "Flip and cook other side.",
        "Spread chutney and ketchup on egg-coated paratha.",
        "Add onion slices.",
        "Sprinkle chaat masala.",
        "Roll tightly and serve."
      ]
    },

    // EXTRA CHEAT MEAL (106-115)
    { 
      id: 106, 
      name: "Loaded Nachos",
      tagline: "Nachos loaded with toppings",
      image: cheatImages[105],
      pantryKeywords: ["nachos", "cheese", "jalapenos", "salsa"],
      ingredients: [
        "200g tortilla chips",
        "1 cup cheddar cheese, grated",
        "½ cup jalapenos, sliced",
        "½ cup black olives",
        "½ cup salsa",
        "¼ cup sour cream",
        "2 green onions, chopped"
      ],
      steps: [
        "Preheat oven to 180°C.",
        "Arrange tortilla chips on a baking sheet.",
        "Sprinkle cheese evenly over chips.",
        "Add jalapenos and olives.",
        "Bake for 5-7 minutes until cheese melts.",
        "Drizzle salsa and sour cream on top.",
        "Garnish with green onions.",
        "Serve immediately."
      ]
    },
    { 
      id: 107, 
      name: "Cheese Nachos",
      tagline: "Simple cheesy nachos",
      image: cheatImages[106],
      pantryKeywords: ["nachos", "cheese", "jalapenos"],
      ingredients: [
        "200g tortilla chips",
        "1½ cups cheddar cheese, grated",
        "2 tablespoons pickled jalapenos",
        "Salsa for dipping"
      ],
      steps: [
        "Preheat oven to 180°C.",
        "Spread tortilla chips on a baking sheet.",
        "Sprinkle cheese generously over chips.",
        "Add jalapenos.",
        "Bake for 5-7 minutes until bubbly.",
        "Serve hot with salsa."
      ]
    },
    { 
      id: 108, 
      name: "Tacos (Chicken)",
      tagline: "Chicken tacos with toppings",
      image: cheatImages[107],
      pantryKeywords: ["taco shells", "chicken", "lettuce", "cheese"],
      ingredients: [
        "6 taco shells",
        "300g chicken mince",
        "1 packet taco seasoning",
        "Lettuce, shredded",
        "Tomato, diced",
        "Cheese, grated",
        "Sour cream",
        "Salsa"
      ],
      steps: [
        "Cook chicken mince in a pan, add taco seasoning and water as per packet.",
        "Simmer until thickened.",
        "Warm taco shells as per package instructions.",
        "Fill shells with chicken mixture.",
        "Top with lettuce, tomato, cheese.",
        "Add sour cream and salsa.",
        "Serve immediately."
      ]
    },
    { 
      id: 109, 
      name: "Tacos (Beef)",
      tagline: "Beef tacos with toppings",
      image: cheatImages[108],
      pantryKeywords: ["taco shells", "beef", "lettuce", "cheese"],
      ingredients: [
        "6 taco shells",
        "300g beef mince",
        "1 packet taco seasoning",
        "Lettuce, shredded",
        "Tomato, diced",
        "Onion, diced",
        "Cheese, grated",
        "Sour cream"
      ],
      steps: [
        "Brown beef mince in a pan, drain fat.",
        "Add taco seasoning and water, simmer.",
        "Warm taco shells.",
        "Fill with beef mixture.",
        "Add lettuce, tomato, onion, and cheese.",
        "Top with sour cream.",
        "Serve."
      ]
    },
    { 
      id: 110, 
      name: "Quesadilla",
      tagline: "Cheese-filled tortilla",
      image: cheatImages[109],
      pantryKeywords: ["tortilla", "cheese", "chicken", "bell pepper"],
      ingredients: [
        "2 large tortillas",
        "1 cup mozzarella cheese, grated",
        "200g cooked chicken, shredded",
        "½ bell pepper, sliced",
        "½ onion, sliced",
        "2 tablespoons oil",
        "Sour cream and salsa for serving"
      ],
      steps: [
        "Heat a pan with little oil.",
        "Place one tortilla in pan.",
        "Sprinkle half the cheese on tortilla.",
        "Add chicken, bell pepper, and onion.",
        "Top with remaining cheese.",
        "Place second tortilla on top.",
        "Cook until bottom is golden, flip carefully.",
        "Cook other side until golden and cheese melts.",
        "Cut into wedges and serve with sour cream and salsa."
      ]
    },
    { 
      id: 111, 
      name: "Burrito",
      tagline: "Large flour tortilla stuffed with fillings",
      image: cheatImages[110],
      pantryKeywords: ["large tortilla", "rice", "beans", "chicken"],
      ingredients: [
        "1 large burrito tortilla",
        "½ cup cooked rice",
        "½ cup cooked beans",
        "200g chicken, cooked and shredded",
        "¼ cup salsa",
        "¼ cup sour cream",
        "Lettuce, shredded",
        "Cheese, grated"
      ],
      steps: [
        "Warm tortilla in a pan.",
        "Spread rice in center of tortilla.",
        "Add beans, then chicken.",
        "Top with salsa, sour cream, lettuce, and cheese.",
        "Fold sides inward, then roll from bottom tightly.",
        "Wrap in foil to hold shape.",
        "Cut in half and serve."
      ]
    },
    { 
      id: 112, 
      name: "Enchiladas",
      tagline: "Rolled tortillas baked in sauce",
      image: cheatImages[111],
      pantryKeywords: ["tortillas", "chicken", "enchilada sauce", "cheese"],
      ingredients: [
        "6 corn tortillas",
        "300g chicken, cooked and shredded",
        "2 cups enchilada sauce",
        "1½ cups cheese, grated",
        "½ onion, chopped",
        "2 tablespoons oil"
      ],
      steps: [
        "Preheat oven to 180°C.",
        "Heat tortillas in a pan with oil to soften.",
        "Fill each tortilla with chicken and some cheese.",
        "Roll tightly and place seam-side down in baking dish.",
        "Pour enchilada sauce over rolled tortillas.",
        "Sprinkle remaining cheese on top.",
        "Bake for 20 minutes until bubbly.",
        "Serve hot."
      ]
    },
    { 
      id: 113, 
      name: "Fajitas (Chicken)",
      tagline: "Sizzling chicken fajitas",
      image: cheatImages[112],
      pantryKeywords: ["chicken", "bell pepper", "onion", "tortilla"],
      ingredients: [
        "500g chicken strips",
        "2 bell peppers, sliced",
        "2 onions, sliced",
        "2 tablespoons fajita seasoning",
        "2 tablespoons oil",
        "Tortillas for serving",
        "Sour cream, salsa, guacamole"
      ],
      steps: [
        "Toss chicken with fajita seasoning.",
        "Heat oil in a large pan or skillet.",
        "Cook chicken until almost done.",
        "Add bell peppers and onions, stir-fry for 3-4 minutes.",
        "Serve sizzling hot with warm tortillas.",
        "Let everyone build their own fajitas with toppings."
      ]
    },
    { 
      id: 114, 
      name: "Fajitas (Beef)",
      tagline: "Sizzling beef fajitas",
      image: cheatImages[113],
      pantryKeywords: ["beef", "bell pepper", "onion", "tortilla"],
      ingredients: [
        "500g beef strips",
        "2 bell peppers, sliced",
        "2 onions, sliced",
        "2 tablespoons fajita seasoning",
        "2 tablespoons oil",
        "Tortillas",
        "Toppings: sour cream, salsa, guacamole"
      ],
      steps: [
        "Season beef strips with fajita seasoning.",
        "Heat oil in a skillet very hot.",
        "Cook beef quickly for 2-3 minutes.",
        "Add vegetables and stir-fry for 2-3 minutes.",
        "Serve immediately with warm tortillas and toppings."
      ]
    },
    { 
      id: 115, 
      name: "Cheese Quesadilla",
      tagline: "Simple cheese quesadilla",
      image: cheatImages[114],
      pantryKeywords: ["tortilla", "cheese", "butter"],
      ingredients: [
        "2 flour tortillas",
        "1 cup mozzarella or cheddar cheese, grated",
        "1 tablespoon butter"
      ],
      steps: [
        "Butter one side of each tortilla.",
        "Place one tortilla butter-side down in a pan.",
        "Sprinkle cheese evenly over tortilla.",
        "Top with second tortilla, butter-side up.",
        "Cook over medium heat until bottom is golden.",
        "Flip carefully and cook other side until cheese melts.",
        "Cut into wedges and serve with salsa."
      ]
    }
  ];

  // Load pantry items from localStorage
  useEffect(() => {
    const savedPantry = localStorage.getItem('pantryItems');
    if (savedPantry) {
      try {
        const parsed = JSON.parse(savedPantry);
        setPantryItems(parsed);
      } catch (e) {
        console.error("Error parsing pantry items", e);
      }
    }
  }, []);

  // Suggest recipes based on pantry items
  useEffect(() => {
    if (pantryItems && pantryItems.length > 0) {
      console.log("Pantry items:", pantryItems);
      
      // Normalize pantry items to lowercase for matching
      const pantryLower = pantryItems.map(item => item.toLowerCase().trim());
      
      // Score each recipe based on matching pantry keywords
      const scoredRecipes = cheatRecipes.map(recipe => {
        let score = 0;
        const matchedItems = [];
        
        // Check each pantry item against recipe keywords
        pantryLower.forEach(pantryItem => {
          // Check in pantryKeywords
          const keywordMatch = recipe.pantryKeywords.some(keyword => 
            keyword.toLowerCase() === pantryItem || 
            pantryItem.includes(keyword.toLowerCase())
          );
          
          // Also check in ingredients as fallback
          const ingredientMatch = recipe.ingredients.some(ing => 
            ing.toLowerCase().includes(pantryItem)
          );
          
          if (keywordMatch || ingredientMatch) {
            score += 1;
            matchedItems.push(pantryItem);
          }
        });
        
        return {
          ...recipe,
          score,
          matchedItems
        };
      });
      
      // Filter recipes with at least 2 matches and sort by score
      const suggestions = scoredRecipes
        .filter(recipe => recipe.score >= 2)
        .sort((a, b) => b.score - a.score)
        .slice(0, 2); // Take top 2 suggestions
      
      console.log("Suggestions found:", suggestions.length);
      
      setSuggestedRecipes(suggestions);
      setShowSuggestions(suggestions.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [pantryItems]);

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
        utterance.text = steps[stepIndex];
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

  const applySuggestion = (recipe) => {
    handleRecipeSelect(recipe);
  };

  return (
    <div className="cheatmeal-page">
      {/* Header */}
      <header className="cheatmeal-header">
        <div className="cheatmeal-header-content">
          <h1 className="cheatmeal-page-title">Cheat Meal</h1>
          <p className="cheatmeal-page-description">
            Indulge in your favorite fast food treats - because you deserve it!
          </p>
        </div>
      </header>

      {/* Pantry Suggestions - 2 Recipes */}
      {showSuggestions && (
        <div className="cheatmeal-pantry-suggestions">
          <div className="cheatmeal-suggestions-header">
            <i className="fas fa-lightbulb"></i>
            <h3>Based on your pantry, you can make:</h3>
          </div>
          <div className="cheatmeal-suggestions-grid two-suggestions">
            {suggestedRecipes.map(recipe => (
              <div 
                key={`suggest-${recipe.id}`} 
                className="cheatmeal-suggestion-card"
                onClick={() => applySuggestion(recipe)}
              >
                <div className="cheatmeal-suggestion-image" style={{backgroundImage: `url(${recipe.image})`}}></div>
                <div className="cheatmeal-suggestion-content">
                  <h4>{recipe.name}</h4>
                  <p>{recipe.tagline}</p>
                  <p className="cheatmeal-match-info">✓ {recipe.score} items match your pantry</p>
                  <button className="cheatmeal-suggestion-btn">Cook This</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Recipes Grid */}
      <main className="cheatmeal-main">
        <div className="cheatmeal-grid-section">
          <div className="cheatmeal-grid">
            {cheatRecipes.map(recipe => (
              <div 
                key={recipe.id} 
                className="cheatmeal-technique-card"
                onClick={() => handleRecipeSelect(recipe)}
              >
                <div 
                  className="cheatmeal-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                ></div>
                
                <div className="cheatmeal-card-content">
                  <h3 className="cheatmeal-card-title">{recipe.name}</h3>
                  <p className="cheatmeal-card-description">{recipe.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      {showDetailPanel && selectedRecipe && (
        <div className="cheatmeal-modal-overlay" onClick={closeDetailPanel}>
          <div 
            className="cheatmeal-modal" 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <button className="cheatmeal-modal-close" onClick={closeDetailPanel}>×</button>
            
            <div className="cheatmeal-modal-header">
              <div className="cheatmeal-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="cheatmeal-modal-content">
              {/* COLUMN 1 - INGREDIENTS */}
              <div className="cheatmeal-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="cheatmeal-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="cheatmeal-ingredient-item">
                      <span className="cheatmeal-ingredient-bullet">•</span>
                      <span className="cheatmeal-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 2 - STEPS TO MAKE */}
              <div className="cheatmeal-modal-steps">
                <h3>Steps to Make</h3>
                <div className="cheatmeal-steps-list">
                  {selectedRecipe.steps.map((step, idx) => (
                    <div key={idx} className="cheatmeal-step-item">
                      <span className="cheatmeal-step-number">{idx + 1}.</span>
                      <span className="cheatmeal-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 3 - VOICE INSTRUCTIONS */}
              <div className="cheatmeal-modal-voice-container">
                <div className="cheatmeal-voice-panel">
                  <h3><i className="fas fa-volume-up"></i> Voice Instructions</h3>
                  
                  <div className="cheatmeal-voice-progress">
                    <div className="cheatmeal-progress-bar">
                      <div className="cheatmeal-progress-fill" style={{width: `${progress}%`}}></div>
                    </div>
                    <div className="cheatmeal-progress-info">
                      <span>Step {currentStep} of {selectedRecipe.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <div className="cheatmeal-voice-controls">
                    <button 
                      className={`cheatmeal-voice-main-btn ${isPlaying ? 'stop' : 'play'}`}
                      onClick={() => isPlaying ? stopSpeaking() : speakInstructions(selectedRecipe.steps, 0)}
                    >
                      <i className={`fas fa-${isPlaying ? 'stop' : 'play'}`}></i>
                      {isPlaying ? ' Stop' : ' Start Voice Guide'}
                    </button>

                    <div className="cheatmeal-step-controls">
                      <button 
                        className="cheatmeal-step-btn prev"
                        onClick={speakPreviousStep}
                        disabled={currentStep <= 1}
                      >
                        <i className="fas fa-backward"></i> Previous
                      </button>
                      <button 
                        className="cheatmeal-step-btn next"
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

export default RecipeCheatMeal;