import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeSnacksPage.css';

const RecipeSnacksPage = () => {
  const navigate = useNavigate();
  const [selectedSnack, setSelectedSnack] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // Snack images array
  const snackImages = [
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187", // Pinwheel Spring Rolls
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", // Stuffed Capsicum with Aloo Chaat
    "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58", // Chicken Pakora
    "https://images.unsplash.com/photo-1563379091339-03246963d9d6", // Cheesy Baked Rolls
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b", // Cheesy Gol Gappa Pakora
    "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47", // Pizza Tots
    "https://images.unsplash.com/photo-1567620832903-9fc6debc209f", // Tandoori Chai
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187", // Special Falooda
    "https://images.unsplash.com/photo-1513104890138-7c749659a591", // Chicken Pizza Pie
    "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5", // Loaded Fries
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d", // Potato Finger
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b", // Thai Chicken Toast
    "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58", // Chicken Fries
    "https://images.unsplash.com/photo-1563379091339-03246963d9d6", // Potato Cheese Bar
    "https://images.unsplash.com/photo-1626074353765-517a681e40be", // Popcorn Chicken
    "https://images.unsplash.com/photo-1563245372-f21724e3856d", // Fried Wonton
    "https://images.unsplash.com/photo-1513104890138-7c749659a591", // Bread Pizza
    "https://images.unsplash.com/photo-1481070414801-51fd732d7184", // Chicken Cheese Sandwich
    "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58", // Dynamite Chicken
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b", // Namak Paray
    "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58", // Chicken Fritters
    "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58", // Butterfly Chicken
    "https://images.unsplash.com/photo-1563245372-f21724e3856d", // Veggie Pancakes
    "https://images.unsplash.com/photo-1603532648955-039310d9ed75", // Apple Banana Muffins
    "https://images.unsplash.com/photo-1563245372-f21724e3856d", // Corn Chaat
    "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc", // Granola Bars
    "https://images.unsplash.com/photo-1601050690597-df0568f70950", // Chicken Samosa
    "https://images.unsplash.com/photo-1601050690597-df0568f70950", // Mat Samosa
    "https://images.unsplash.com/photo-1481070414801-51fd732d7184", // Easy Pinwheel Sandwich
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d", // Potato Fritters with Schezwan Sauce
    "https://images.unsplash.com/photo-1563245372-f21724e3856d", // Corn Croquettes
    "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58", // Tangri Kebab
    "https://images.unsplash.com/photo-1513104890138-7c749659a591", // Pizza Cone
    "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58", // Easy Chicken Drumsticks
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b", // Khaja
    "https://images.unsplash.com/photo-1563245372-f21724e3856d"  // Noodles Pakora
  ];

  // All Snacks Data with Complete Recipes
  const snacks = [
    { 
      id: 1, 
      name: "Pinwheel Spring Rolls",
      tagline: "Crispy rolled spring rolls with vegetable filling",
      image: snackImages[0],
      ingredients: [
        "10 spring roll wrappers",
        "2 cups shredded cabbage",
        "1 cup grated carrots",
        "1 cup bean sprouts",
        "1/2 cup chopped bell peppers",
        "1/2 cup chopped spring onions",
        "2 tablespoons soy sauce",
        "1 tablespoon vinegar",
        "1 teaspoon ginger-garlic paste",
        "1 teaspoon black pepper",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "Heat 1 tablespoon oil in a pan, add ginger-garlic paste and sauté for 30 seconds.",
        "Add all vegetables and stir-fry for 3-4 minutes until slightly cooked but still crunchy.",
        "Add soy sauce, vinegar, black pepper, and salt. Mix well and cook for 2 minutes.",
        "Remove from heat and let the filling cool completely.",
        "Place a spring roll wrapper on a flat surface, add 2 tablespoons of filling in the center.",
        "Fold the sides inward, then roll tightly from one end to form a cylinder.",
        "Seal the edge with a paste made of flour and water.",
        "Heat oil in a deep pan on medium heat.",
        "Fry spring rolls until golden brown and crispy, about 3-4 minutes.",
        "Drain on paper towels and serve hot with sweet chili sauce."
      ]
    },
    { 
      id: 2, 
      name: "Stuffed Capsicum with Aloo Chaat",
      tagline: "Bell peppers stuffed with spiced potato filling",
      image: snackImages[1],
      ingredients: [
        "4 large bell peppers",
        "2 large potatoes, boiled and mashed",
        "1 onion, finely chopped",
        "1 tomato, finely chopped",
        "1 green chili, finely chopped",
        "1 teaspoon chaat masala",
        "1/2 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1/2 teaspoon garam masala",
        "2 tablespoons chopped coriander",
        "1 tablespoon lemon juice",
        "Salt to taste",
        "2 tablespoons oil"
      ],
      steps: [
        "Cut the tops off bell peppers and remove seeds.",
        "Boil bell peppers in salted water for 3 minutes, then drain.",
        "In a bowl, mix mashed potatoes, onion, tomato, green chili, and spices.",
        "Add lemon juice and coriander, mix well.",
        "Stuff this mixture into the bell peppers.",
        "Heat oil in a pan, place stuffed bell peppers carefully.",
        "Cover and cook on low heat for 8-10 minutes, turning occasionally.",
        "In a separate bowl, mix some boiled potato cubes with chaat masala, onion, and coriander for chaat.",
        "Serve stuffed capsicum hot with potato chaat on the side.",
        "Garnish with sev and additional coriander leaves."
      ]
    },
    { 
      id: 3, 
      name: "Chicken Pakora",
      tagline: "Crispy fried chicken fritters with gram flour batter",
      image: snackImages[2],
      ingredients: [
        "500g boneless chicken, cut into small pieces",
        "1 cup gram flour (besan)",
        "1/4 cup rice flour",
        "1 teaspoon ginger-garlic paste",
        "1 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon garam masala",
        "1 teaspoon coriander powder",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "2 tablespoons chopped coriander",
        "1 tablespoon lemon juice",
        "Water as needed",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix chicken pieces with ginger-garlic paste, red chili powder, turmeric, and salt.",
        "Let it marinate for 30 minutes.",
        "In another bowl, mix gram flour, rice flour, and all spices.",
        "Add chopped onion, green chilies, and coriander to the flour mixture.",
        "Gradually add water to make a thick batter.",
        "Add lemon juice and mix well.",
        "Heat oil in a deep pan on medium heat.",
        "Dip marinated chicken pieces in the batter, coating well.",
        "Carefully drop battered chicken into hot oil.",
        "Fry until golden brown and crispy, about 5-7 minutes.",
        "Remove with slotted spoon and drain on paper towels.",
        "Serve hot with mint chutney or ketchup."
      ]
    },
    { 
      id: 4, 
      name: "Cheesy Baked Rolls",
      tagline: "Baked bread rolls stuffed with cheese and corn",
      image: snackImages[3],
      ingredients: [
        "8 bread slices",
        "1 cup grated mozzarella cheese",
        "1/2 cup grated cheddar cheese",
        "1/2 cup sweet corn kernels",
        "1/4 cup finely chopped bell peppers",
        "1/4 cup finely chopped onions",
        "2 tablespoons pizza sauce",
        "1 teaspoon oregano",
        "1 teaspoon chili flakes",
        "2 tablespoons butter, melted",
        "Salt to taste",
        "Black pepper to taste"
      ],
      steps: [
        "Preheat oven to 180°C (350°F).",
        "Trim edges from bread slices and flatten with rolling pin.",
        "In a bowl, mix both cheeses, sweet corn, bell peppers, and onions.",
        "Add pizza sauce, oregano, chili flakes, salt, and pepper. Mix well.",
        "Spread this mixture evenly on bread slices.",
        "Roll each slice tightly and seal edges with water.",
        "Brush rolls with melted butter.",
        "Place on baking tray lined with parchment paper.",
        "Bake for 15-20 minutes until golden and crispy.",
        "Serve hot with tomato ketchup or garlic mayo."
      ]
    },
    { 
      id: 5, 
      name: "Cheesy Gol Gappa Pakora",
      tagline: "Crispy gol gappa filled with spicy cheese mixture",
      image: snackImages[4],
      ingredients: [
        "20 gol gappa puris (readymade)",
        "1 cup grated mozzarella cheese",
        "1/2 cup grated processed cheese",
        "1/4 cup finely chopped onions",
        "1/4 cup finely chopped tomatoes",
        "1 green chili, finely chopped",
        "2 tablespoons chopped coriander",
        "1 teaspoon chaat masala",
        "1/2 teaspoon red chili powder",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "Make a small hole in each gol gappa puri.",
        "In a bowl, mix both cheeses, onions, tomatoes, green chili, and coriander.",
        "Add chaat masala, red chili powder, and salt. Mix well.",
        "Carefully stuff this mixture into each gol gappa puri.",
        "Heat oil in a deep pan on medium heat.",
        "Fry stuffed gol gappas until golden brown and crispy.",
        "Drain on paper towels.",
        "Serve immediately with tamarind chutney and mint chutney.",
        "Garnish with sev and chopped coriander."
      ]
    },
    { 
      id: 6, 
      name: "Pizza Tots",
      tagline: "Crispy potato tots with pizza flavors",
      image: snackImages[5],
      ingredients: [
        "4 large potatoes, boiled and mashed",
        "1/2 cup grated mozzarella cheese",
        "1/4 cup pizza sauce",
        "1/4 cup finely chopped bell peppers",
        "1/4 cup finely chopped onions",
        "2 tablespoons sweet corn kernels",
        "1 teaspoon oregano",
        "1 teaspoon chili flakes",
        "1/2 cup breadcrumbs",
        "1/4 cup all-purpose flour",
        "1 egg, beaten",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix mashed potatoes with salt.",
        "Add pizza sauce, cheese, bell peppers, onions, and sweet corn.",
        "Mix in oregano and chili flakes.",
        "Take small portions and shape into round tater tots.",
        "Set up three bowls: flour, beaten egg, and breadcrumbs.",
        "Roll each tot in flour, then dip in egg, then coat with breadcrumbs.",
        "Heat oil in a deep pan on medium heat.",
        "Fry tots until golden brown and crispy.",
        "Drain on paper towels.",
        "Serve hot with pizza sauce or garlic mayo."
      ]
    },
    { 
      id: 7, 
      name: "Tandoori Chai",
      tagline: "Smoked spiced tea with tandoori flavor",
      image: snackImages[6],
      ingredients: [
        "4 cups water",
        "4 teaspoons black tea leaves",
        "4 cups milk",
        "8-10 cardamom pods, crushed",
        "2-3 cinnamon sticks",
        "4-5 cloves",
        "1/2 teaspoon ginger powder",
        "Sugar to taste",
        "Charcoal piece for smoking",
        "1 teaspoon ghee"
      ],
      steps: [
        "Boil water in a saucepan.",
        "Add tea leaves and all spices (cardamom, cinnamon, cloves, ginger).",
        "Simmer for 5 minutes until strong infusion.",
        "Add milk and sugar, bring to boil.",
        "Reduce heat and simmer for 5 more minutes.",
        "Strain into a metal or heat-proof container.",
        "Heat a charcoal piece until red hot.",
        "Place charcoal in a small metal bowl.",
        "Add 1 teaspoon ghee on the hot charcoal.",
        "Immediately place this bowl in the tea container.",
        "Cover immediately to trap the smoke.",
        "Let it smoke for 2-3 minutes.",
        "Remove charcoal bowl and serve hot."
      ]
    },
    { 
      id: 8, 
      name: "Special Falooda",
      tagline: "Layered dessert drink with ice cream and noodles",
      image: snackImages[7],
      ingredients: [
        "1/2 cup falooda seeds (sabja/tukmaria)",
        "1/2 cup cooked vermicelli",
        "4 cups cold milk",
        "1/2 cup rose syrup",
        "1/2 cup mixed fruits (banana, mango, apple)",
        "4 scoops vanilla ice cream",
        "1/4 cup chopped nuts (pistachios, almonds)",
        "1/4 cup sweet basil seeds",
        "2 tablespoons sugar",
        "1 teaspoon cardamom powder"
      ],
      steps: [
        "Soak falooda seeds in water for 30 minutes, drain.",
        "Soak sweet basil seeds in water for 10 minutes, drain.",
        "Cook vermicelli according to package instructions, drain and cool.",
        "In a bowl, mix cold milk with sugar and cardamom powder.",
        "Chill this milk mixture in refrigerator.",
        "In tall glasses, add soaked falooda seeds as first layer.",
        "Add soaked basil seeds as second layer.",
        "Add cooked vermicelli as third layer.",
        "Add chopped mixed fruits as fourth layer.",
        "Pour rose syrup over the fruits.",
        "Fill glasses with chilled milk mixture.",
        "Top with a scoop of vanilla ice cream.",
        "Garnish with chopped nuts and serve immediately."
      ]
    },
    { 
      id: 9, 
      name: "Chicken Pizza Pie",
      tagline: "Savory pie with pizza toppings and chicken",
      image: snackImages[8],
      ingredients: [
        "For crust: 2 cups all-purpose flour",
        "1 teaspoon instant yeast",
        "1 teaspoon sugar",
        "1/2 teaspoon salt",
        "1 tablespoon oil",
        "3/4 cup warm water",
        "For topping: 1 cup cooked chicken, shredded",
        "1 cup pizza sauce",
        "2 cups grated mozzarella cheese",
        "1/2 cup chopped bell peppers",
        "1/2 cup chopped onions",
        "1/4 cup sliced olives",
        "1 teaspoon oregano",
        "1 teaspoon chili flakes",
        "2 tablespoons butter, melted"
      ],
      steps: [
        "Mix yeast, sugar, and warm water, let sit for 5 minutes until foamy.",
        "In a bowl, mix flour and salt.",
        "Add yeast mixture and oil, knead into smooth dough.",
        "Cover and let rise for 1 hour until doubled.",
        "Preheat oven to 200°C (400°F).",
        "Punch down dough and roll to fit a pie dish.",
        "Place in greased pie dish, pressing up the sides.",
        "Spread pizza sauce evenly on the crust.",
        "Add shredded chicken as next layer.",
        "Sprinkle half the cheese.",
        "Add bell peppers, onions, and olives.",
        "Top with remaining cheese.",
        "Sprinkle oregano and chili flakes.",
        "Brush edges with melted butter.",
        "Bake for 20-25 minutes until golden brown.",
        "Let cool for 5 minutes before slicing."
      ]
    },
    { 
      id: 10, 
      name: "Loaded Fries",
      tagline: "Crispy fries topped with cheese and toppings",
      image: snackImages[9],
      ingredients: [
        "4 large potatoes, cut into fries",
        "1 cup grated mozzarella cheese",
        "1/2 cup grated cheddar cheese",
        "1 cup cooked minced meat or beans",
        "1/2 cup chopped onions",
        "1/2 cup chopped tomatoes",
        "1/4 cup sliced jalapeños",
        "1/4 cup sour cream",
        "1/4 cup chopped spring onions",
        "2 tablespoons olive oil",
        "1 teaspoon paprika",
        "1 teaspoon garlic powder",
        "Salt to taste",
        "Black pepper to taste"
      ],
      steps: [
        "Preheat oven to 220°C (425°F).",
        "Toss potato fries with olive oil, paprika, garlic powder, salt, and pepper.",
        "Spread on baking tray in single layer.",
        "Bake for 25-30 minutes until crispy, turning halfway.",
        "Transfer fries to oven-proof serving dish.",
        "Spread cooked minced meat or beans over fries.",
        "Sprinkle both cheeses evenly.",
        "Add onions, tomatoes, and jalapeños.",
        "Return to oven for 5-7 minutes until cheese melts.",
        "Drizzle with sour cream.",
        "Garnish with spring onions.",
        "Serve immediately."
      ]
    },
    { 
      id: 11, 
      name: "Potato Finger",
      tagline: "Crispy potato sticks with cheese filling",
      image: snackImages[10],
      ingredients: [
        "4 large potatoes, boiled and mashed",
        "1/2 cup grated cheese",
        "2 green chilies, finely chopped",
        "2 tablespoons chopped coriander",
        "1 teaspoon chaat masala",
        "1/2 teaspoon red chili powder",
        "1/2 cup breadcrumbs",
        "1/4 cup all-purpose flour",
        "1 egg, beaten",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix mashed potatoes with salt.",
        "Add grated cheese, green chilies, and coriander.",
        "Mix in chaat masala and red chili powder.",
        "Take portions and shape into finger-like sticks.",
        "Set up three bowls: flour, beaten egg, and breadcrumbs.",
        "Roll each finger in flour, dip in egg, coat with breadcrumbs.",
        "Heat oil in a deep pan on medium heat.",
        "Fry potato fingers until golden brown and crispy.",
        "Drain on paper towels.",
        "Serve hot with ketchup or mint chutney."
      ]
    },
    { 
      id: 12, 
      name: "Thai Chicken Toast",
      tagline: "Crispy toast topped with Thai spiced chicken",
      image: snackImages[11],
      ingredients: [
        "8 bread slices",
        "250g boneless chicken, minced",
        "1 egg",
        "2 tablespoons chopped spring onions",
        "1 tablespoon chopped coriander",
        "1 teaspoon ginger-garlic paste",
        "1 teaspoon soy sauce",
        "1 teaspoon chili sauce",
        "1/2 teaspoon black pepper",
        "1/2 cup breadcrumbs",
        "Oil for shallow frying",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix minced chicken, egg, spring onions, and coriander.",
        "Add ginger-garlic paste, soy sauce, chili sauce, black pepper, and salt.",
        "Mix well to form a smooth paste.",
        "Trim bread slices and spread chicken mixture evenly on each slice.",
        "Sprinkle breadcrumbs on top of chicken layer.",
        "Heat oil in a pan on medium heat.",
        "Place bread chicken-side down in oil.",
        "Fry for 3-4 minutes until golden brown.",
        "Flip and fry bread side for 1-2 minutes.",
        "Cut into triangles or squares.",
        "Serve hot with sweet chili sauce."
      ]
    },
    { 
      id: 13, 
      name: "Chicken Fries",
      tagline: "Crispy chicken strips perfect for dipping",
      image: snackImages[12],
      ingredients: [
        "500g chicken breast, cut into thin strips",
        "1 cup all-purpose flour",
        "1/2 cup corn flour",
        "1 teaspoon garlic powder",
        "1 teaspoon paprika",
        "1 teaspoon onion powder",
        "1/2 teaspoon black pepper",
        "1 egg",
        "1/2 cup milk",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix flour, corn flour, garlic powder, paprika, onion powder, and salt.",
        "In another bowl, whisk egg and milk together.",
        "Dip chicken strips in flour mixture, then egg mixture, then flour mixture again.",
        "Place on tray and let rest for 10 minutes.",
        "Heat oil in deep pan to 180°C (350°F).",
        "Fry chicken strips in batches until golden brown, about 4-5 minutes.",
        "Drain on paper towels.",
        "Season with additional salt and pepper if needed.",
        "Serve hot with dipping sauces."
      ]
    },
    { 
      id: 14, 
      name: "Potato Cheese Bar",
      tagline: "Crispy potato bars with molten cheese center",
      image: snackImages[13],
      ingredients: [
        "4 large potatoes, boiled and mashed",
        "1 cup grated mozzarella cheese",
        "1/2 cup grated cheddar cheese",
        "1/4 cup finely chopped onions",
        "1/4 cup finely chopped bell peppers",
        "2 green chilies, chopped",
        "2 tablespoons chopped coriander",
        "1 teaspoon chaat masala",
        "1/2 cup breadcrumbs",
        "1/4 cup all-purpose flour",
        "1 egg, beaten",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix mashed potatoes with salt.",
        "Add both cheeses, onions, bell peppers, green chilies, and coriander.",
        "Mix in chaat masala.",
        "Shape mixture into rectangular bars.",
        "Set up three bowls: flour, beaten egg, and breadcrumbs.",
        "Roll each bar in flour, dip in egg, coat with breadcrumbs.",
        "Heat oil in a deep pan on medium heat.",
        "Fry bars until golden brown and crispy.",
        "Drain on paper towels.",
        "Serve hot with ketchup or green chutney."
      ]
    },
    { 
      id: 15, 
      name: "Popcorn Chicken",
      tagline: "Bite-sized crispy chicken nuggets",
      image: snackImages[14],
      ingredients: [
        "500g boneless chicken, cut into small bite-sized pieces",
        "1 cup all-purpose flour",
        "1/2 cup corn flour",
        "1 teaspoon garlic powder",
        "1 teaspoon onion powder",
        "1 teaspoon paprika",
        "1/2 teaspoon black pepper",
        "1/2 teaspoon baking powder",
        "1 egg",
        "1/2 cup buttermilk",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix flour, corn flour, garlic powder, onion powder, paprika, baking powder, and salt.",
        "In another bowl, whisk egg and buttermilk.",
        "Dip chicken pieces in flour mixture, then egg mixture, then flour mixture again.",
        "Place on tray and let rest for 15 minutes.",
        "Heat oil in deep pan to 180°C (350°F).",
        "Fry chicken pieces in batches until golden brown and crispy, about 3-4 minutes.",
        "Drain on paper towels.",
        "Toss with additional seasoning if desired.",
        "Serve hot with dipping sauces."
      ]
    },
    { 
      id: 16, 
      name: "Fried Wonton",
      tagline: "Crispy wontons filled with spiced meat",
      image: snackImages[15],
      ingredients: [
        "20 wonton wrappers",
        "250g minced chicken or pork",
        "1/2 cup finely chopped cabbage",
        "1/4 cup finely chopped spring onions",
        "1 tablespoon soy sauce",
        "1 teaspoon ginger-garlic paste",
        "1 teaspoon sesame oil",
        "1/2 teaspoon white pepper",
        "Oil for frying",
        "Salt to taste",
        "Water for sealing"
      ],
      steps: [
        "In a bowl, mix minced meat, cabbage, and spring onions.",
        "Add soy sauce, ginger-garlic paste, sesame oil, white pepper, and salt.",
        "Mix well to combine.",
        "Place a wonton wrapper on palm, add 1 teaspoon filling in center.",
        "Wet edges with water, fold into triangle, press to seal.",
        "Bring two corners together, wet with water, and press to seal.",
        "Heat oil in deep pan to 180°C (350°F).",
        "Fry wontons in batches until golden brown, about 2-3 minutes.",
        "Drain on paper towels.",
        "Serve hot with sweet chili sauce or soy dipping sauce."
      ]
    },
    { 
      id: 17, 
      name: "Bread Pizza",
      tagline: "Quick mini pizzas on bread base",
      image: snackImages[16],
      ingredients: [
        "8 bread slices",
        "1 cup pizza sauce",
        "2 cups grated mozzarella cheese",
        "1/2 cup chopped bell peppers",
        "1/2 cup chopped onions",
        "1/4 cup sweet corn kernels",
        "1/4 cup sliced olives",
        "1 teaspoon oregano",
        "1 teaspoon chili flakes",
        "2 tablespoons butter",
        "Salt to taste",
        "Black pepper to taste"
      ],
      steps: [
        "Preheat oven to 200°C (400°F).",
        "Butter one side of each bread slice.",
        "Place buttered side down on baking tray.",
        "Spread pizza sauce on each slice.",
        "Sprinkle cheese evenly.",
        "Add bell peppers, onions, sweet corn, and olives.",
        "Season with salt, pepper, oregano, and chili flakes.",
        "Bake for 8-10 minutes until cheese melts and edges are crispy.",
        "Serve immediately."
      ]
    },
    { 
      id: 18, 
      name: "Chicken Cheese Sandwich",
      tagline: "Grilled sandwich with chicken and melted cheese",
      image: snackImages[17],
      ingredients: [
        "8 bread slices",
        "2 cups cooked chicken, shredded",
        "1 cup grated mozzarella cheese",
        "1/2 cup mayonnaise",
        "1/4 cup finely chopped onions",
        "1/4 cup finely chopped bell peppers",
        "2 tablespoons butter",
        "1 teaspoon black pepper",
        "1/2 teaspoon garlic powder",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix shredded chicken with mayonnaise.",
        "Add onions, bell peppers, black pepper, garlic powder, and salt.",
        "Mix well to combine.",
        "Butter one side of each bread slice.",
        "Place 4 slices buttered side down.",
        "Spread chicken mixture evenly.",
        "Sprinkle cheese on top.",
        "Cover with remaining bread slices, buttered side up.",
        "Heat a griddle or pan, place sandwiches.",
        "Grill until golden brown on both sides, pressing gently.",
        "Cut diagonally and serve hot."
      ]
    },
    { 
      id: 19, 
      name: "Dynamite Chicken",
      tagline: "Spicy glazed chicken with creamy sauce",
      image: snackImages[18],
      ingredients: [
        "500g boneless chicken, cut into strips",
        "1/2 cup mayonnaise",
        "1/4 cup sweet chili sauce",
        "2 tablespoons Sriracha sauce",
        "1 tablespoon honey",
        "1 teaspoon garlic powder",
        "1 cup all-purpose flour",
        "1/2 cup corn flour",
        "1 teaspoon paprika",
        "Oil for frying",
        "Salt to taste",
        "Spring onions for garnish"
      ],
      steps: [
        "In a bowl, mix mayonnaise, sweet chili sauce, Sriracha, honey, and garlic powder for sauce.",
        "In another bowl, mix flour, corn flour, paprika, and salt.",
        "Coat chicken strips in flour mixture.",
        "Heat oil in deep pan to 180°C (350°F).",
        "Fry chicken strips until golden brown and cooked through, about 5-6 minutes.",
        "Drain on paper towels.",
        "Toss fried chicken in prepared sauce until well coated.",
        "Garnish with chopped spring onions.",
        "Serve immediately."
      ]
    },
    { 
      id: 20, 
      name: "Namak Paray",
      tagline: "Crispy savory fried crackers",
      image: snackImages[19],
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup semolina (suji)",
        "1/2 cup ghee or oil",
        "1 teaspoon carom seeds (ajwain)",
        "1 teaspoon black pepper powder",
        "1/2 teaspoon baking powder",
        "Water as needed",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix flour, semolina, carom seeds, black pepper, baking powder, and salt.",
        "Add ghee or oil and rub into flour until crumbly.",
        "Gradually add water to form stiff dough.",
        "Cover and rest for 30 minutes.",
        "Divide dough into small balls.",
        "Roll each ball into thin round paratha.",
        "Prick all over with fork to prevent puffing.",
        "Heat oil in deep pan on medium heat.",
        "Fry paray until golden brown and crispy, about 2 minutes per side.",
        "Drain on paper towels.",
        "Cool completely before storing in airtight container."
      ]
    },
    { 
      id: 21, 
      name: "Chicken Fritters",
      tagline: "Flattened chicken patties with spices",
      image: snackImages[20],
      ingredients: [
        "500g boneless chicken, minced",
        "1 onion, finely chopped",
        "2 green chilies, finely chopped",
        "2 tablespoons chopped coriander",
        "1 teaspoon ginger-garlic paste",
        "1 teaspoon garam masala",
        "1/2 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1 egg",
        "2 tablespoons gram flour (besan)",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix minced chicken with onion, green chilies, and coriander.",
        "Add ginger-garlic paste and all spices.",
        "Add egg and gram flour, mix well to combine.",
        "Take small portions and shape into flat patties.",
        "Heat oil in a pan on medium heat.",
        "Shallow fry fritters until golden brown on both sides, about 4-5 minutes per side.",
        "Drain on paper towels.",
        "Serve hot with mint chutney or ketchup."
      ]
    },
    { 
      id: 22, 
      name: "Butterfly Chicken",
      tagline: "Butterflied breaded chicken breast",
      image: snackImages[21],
      ingredients: [
        "4 chicken breasts",
        "1 cup all-purpose flour",
        "2 eggs, beaten",
        "1 cup breadcrumbs",
        "1 teaspoon garlic powder",
        "1 teaspoon paprika",
        "1/2 teaspoon black pepper",
        "Oil for frying",
        "Salt to taste",
        "Lemon wedges for serving"
      ],
      steps: [
        "Butterfly chicken breasts: slice horizontally through center, but not all the way through.",
        "Open like a book and pound to even thickness.",
        "Season both sides with salt, pepper, garlic powder, and paprika.",
        "Set up three bowls: flour, beaten eggs, breadcrumbs.",
        "Dredge chicken in flour, dip in egg, coat with breadcrumbs.",
        "Press breadcrumbs firmly to adhere.",
        "Heat oil in deep pan to 180°C (350°F).",
        "Fry chicken until golden brown and cooked through, about 5-6 minutes per side.",
        "Drain on paper towels.",
        "Serve hot with lemon wedges and dipping sauces."
      ]
    },
    { 
      id: 23, 
      name: "Veggie Pancakes",
      tagline: "Savory vegetable pancakes with gram flour",
      image: snackImages[22],
      ingredients: [
        "1 cup gram flour (besan)",
        "1/2 cup rice flour",
        "1 onion, finely chopped",
        "1 tomato, finely chopped",
        "1/2 cup grated carrots",
        "1/2 cup chopped spinach",
        "2 green chilies, chopped",
        "2 tablespoons chopped coriander",
        "1 teaspoon ginger paste",
        "1/2 teaspoon turmeric powder",
        "1/2 teaspoon baking soda",
        "Water as needed",
        "Oil for cooking",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix gram flour and rice flour.",
        "Add all vegetables, green chilies, and coriander.",
        "Add ginger paste, turmeric, baking soda, and salt.",
        "Gradually add water to make medium-thick batter.",
        "Let batter rest for 10 minutes.",
        "Heat a non-stick pan, add few drops of oil.",
        "Pour ladleful of batter, spread into round pancake.",
        "Cook on medium heat until golden brown, about 2-3 minutes.",
        "Flip and cook other side until golden.",
        "Repeat with remaining batter.",
        "Serve hot with chutney or ketchup."
      ]
    },
    { 
      id: 24, 
      name: "Apple Banana Muffins",
      tagline: "Moist muffins with apple and banana",
      image: snackImages[23],
      ingredients: [
        "1 1/2 cups all-purpose flour",
        "1 teaspoon baking powder",
        "1/2 teaspoon baking soda",
        "1/2 teaspoon cinnamon powder",
        "1/4 teaspoon nutmeg powder",
        "2 ripe bananas, mashed",
        "1 apple, peeled and grated",
        "1/2 cup sugar",
        "1/3 cup vegetable oil",
        "1 egg",
        "1 teaspoon vanilla extract",
        "1/4 cup chopped walnuts (optional)"
      ],
      steps: [
        "Preheat oven to 180°C (350°F). Line muffin tin with paper liners.",
        "In a bowl, whisk flour, baking powder, baking soda, cinnamon, and nutmeg.",
        "In another bowl, mix mashed bananas and grated apple.",
        "Add sugar, oil, egg, and vanilla extract. Mix well.",
        "Add dry ingredients to wet ingredients, mix until just combined.",
        "Fold in chopped walnuts if using.",
        "Divide batter among muffin cups, filling 2/3 full.",
        "Bake for 20-25 minutes until toothpick comes out clean.",
        "Cool in pan for 5 minutes, then transfer to wire rack.",
        "Serve warm or at room temperature."
      ]
    },
    { 
      id: 25, 
      name: "Corn Chaat",
      tagline: "Spicy and tangy corn salad",
      image: snackImages[24],
      ingredients: [
        "2 cups corn kernels (fresh or frozen)",
        "1 onion, finely chopped",
        "1 tomato, finely chopped",
        "1 green chili, finely chopped",
        "2 tablespoons chopped coriander",
        "1 teaspoon chaat masala",
        "1/2 teaspoon red chili powder",
        "1/2 teaspoon roasted cumin powder",
        "1 tablespoon lemon juice",
        "1 tablespoon sev for garnish",
        "Salt to taste"
      ],
      steps: [
        "Boil corn kernels in salted water until tender, about 5-7 minutes. Drain.",
        "In a bowl, mix boiled corn with onion, tomato, and green chili.",
        "Add chaat masala, red chili powder, cumin powder, and salt.",
        "Add lemon juice and mix well.",
        "Garnish with chopped coriander and sev.",
        "Serve immediately as a snack.",
        "Optionally, add boiled potatoes or pomegranate seeds for variation."
      ]
    },
    { 
      id: 26, 
      name: "Granola Bars",
      tagline: "Homemade healthy snack bars",
      image: snackImages[25],
      ingredients: [
        "2 cups rolled oats",
        "1 cup mixed nuts (almonds, walnuts, cashews), chopped",
        "1/2 cup dried fruits (raisins, cranberries, apricots)",
        "1/4 cup honey",
        "1/4 cup peanut butter",
        "2 tablespoons coconut oil",
        "1 teaspoon vanilla extract",
        "1/2 teaspoon cinnamon powder",
        "Pinch of salt"
      ],
      steps: [
        "Preheat oven to 160°C (325°F). Line baking pan with parchment paper.",
        "Spread oats and nuts on baking tray, toast for 10 minutes until fragrant.",
        "In saucepan, heat honey, peanut butter, and coconut oil until melted and smooth.",
        "Remove from heat, add vanilla extract, cinnamon, and salt.",
        "In large bowl, mix toasted oats, nuts, and dried fruits.",
        "Pour honey mixture over dry ingredients, mix until well coated.",
        "Press mixture firmly into prepared pan.",
        "Bake for 20-25 minutes until golden brown.",
        "Cool completely in pan before cutting into bars.",
        "Store in airtight container."
      ]
    },
    { 
      id: 27, 
      name: "Chicken Samosa",
      tagline: "Crispy triangular pastry with chicken filling",
      image: snackImages[26],
      ingredients: [
        "For dough: 2 cups all-purpose flour",
        "1/4 cup oil",
        "1/2 teaspoon salt",
        "Water as needed",
        "For filling: 250g minced chicken",
        "1 onion, finely chopped",
        "1 teaspoon ginger-garlic paste",
        "1 green chili, chopped",
        "1/2 teaspoon garam masala",
        "1/2 teaspoon coriander powder",
        "1/4 teaspoon turmeric powder",
        "2 tablespoons chopped coriander",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "Make dough: Mix flour, salt, and oil until crumbly.",
        "Add water gradually to form stiff dough. Rest for 30 minutes.",
        "For filling: Heat oil, sauté onions until golden.",
        "Add ginger-garlic paste and green chili, sauté for 1 minute.",
        "Add minced chicken, cook until browned.",
        "Add all spices and salt, cook for 5-7 minutes.",
        "Add coriander, mix well. Let filling cool.",
        "Divide dough into small balls, roll into thin circles.",
        "Cut each circle in half to form semicircles.",
        "Form cone shape with semicircle, fill with chicken mixture.",
        "Seal edges with water, press firmly.",
        "Heat oil in deep pan, fry samosas until golden brown.",
        "Drain on paper towels, serve hot with chutney."
      ]
    },
    { 
      id: 28, 
      name: "Mat Samosa",
      tagline: "Classic samosa with spiced pea filling",
      image: snackImages[27],
      ingredients: [
        "For dough: 2 cups all-purpose flour",
        "1/4 cup oil",
        "1/2 teaspoon salt",
        "Water as needed",
        "For filling: 1 cup dried yellow peas (matar), soaked overnight",
        "1 onion, finely chopped",
        "1 teaspoon ginger paste",
        "1 green chili, chopped",
        "1/2 teaspoon garam masala",
        "1/2 teaspoon amchur powder",
        "1/4 teaspoon turmeric powder",
        "2 tablespoons chopped coriander",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "Boil soaked peas until tender, drain and coarsely mash.",
        "Make dough: Mix flour, salt, and oil, add water to form stiff dough. Rest 30 minutes.",
        "Heat oil, sauté onions until golden.",
        "Add ginger paste and green chili, sauté for 1 minute.",
        "Add mashed peas, cook for 5 minutes.",
        "Add all spices and salt, mix well.",
        "Add coriander, remove from heat. Let filling cool.",
        "Divide dough into small balls, roll into thin circles.",
        "Cut each circle in half to form semicircles.",
        "Form cone shape, fill with pea mixture.",
        "Seal edges with water, press firmly.",
        "Heat oil in deep pan, fry samosas until golden brown.",
        "Drain on paper towels, serve hot with chutney."
      ]
    },
    { 
      id: 29, 
      name: "Easy Pinwheel Sandwich",
      tagline: "Colorful rolled sandwiches perfect for parties",
      image: snackImages[28],
      ingredients: [
        "8 bread slices",
        "1 cup cream cheese",
        "1/2 cup grated carrots",
        "1/2 cup finely chopped bell peppers",
        "1/4 cup finely chopped spring onions",
        "2 tablespoons chopped coriander",
        "1 teaspoon black pepper",
        "1/2 teaspoon chaat masala",
        "Salt to taste"
      ],
      steps: [
        "Trim crusts from bread slices.",
        "Flatten each slice with rolling pin.",
        "In a bowl, mix cream cheese with all vegetables.",
        "Add black pepper, chaat masala, and salt.",
        "Spread mixture evenly on bread slices.",
        "Roll each slice tightly from one end.",
        "Wrap in plastic wrap and refrigerate for 30 minutes.",
        "Slice into 1-inch thick pinwheels.",
        "Serve chilled or at room temperature.",
        "Optionally, add ham or chicken slices for non-vegetarian version."
      ]
    },
    { 
      id: 30, 
      name: "Potato Fritters with Schezwan Sauce",
      tagline: "Crispy potato patties with spicy Schezwan dip",
      image: snackImages[29],
      ingredients: [
        "4 large potatoes, boiled and mashed",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "2 tablespoons chopped coriander",
        "1 teaspoon ginger paste",
        "1/2 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "1/2 cup breadcrumbs",
        "Oil for frying",
        "Salt to taste",
        "For Schezwan sauce: 4-5 dry red chilies",
        "4-5 garlic cloves",
        "1 tablespoon soy sauce",
        "1 tablespoon vinegar",
        "1 teaspoon sugar"
      ],
      steps: [
        "Make fritters: Mix mashed potatoes with onion, green chilies, coriander, ginger, and spices.",
        "Shape into small patties, coat with breadcrumbs.",
        "Heat oil, fry until golden brown. Drain on paper towels.",
        "Make Schezwan sauce: Soak red chilies in hot water for 30 minutes.",
        "Blend chilies and garlic into smooth paste.",
        "Heat 2 tablespoons oil, add paste, cook for 2 minutes.",
        "Add soy sauce, vinegar, sugar, and salt. Cook for 2 more minutes.",
        "Serve potato fritters hot with Schezwan sauce for dipping."
      ]
    },
    { 
      id: 31, 
      name: "Corn Croquettes",
      tagline: "Crispy corn and potato rolls",
      image: snackImages[30],
      ingredients: [
        "2 cups corn kernels (fresh or frozen)",
        "2 potatoes, boiled and mashed",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "2 tablespoons chopped coriander",
        "1/2 teaspoon garam masala",
        "1/2 teaspoon red chili powder",
        "1/2 cup breadcrumbs",
        "1/4 cup all-purpose flour",
        "1 egg, beaten",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "Boil corn kernels until tender, drain and coarsely crush.",
        "Mix crushed corn with mashed potatoes.",
        "Add onion, green chilies, coriander, and spices. Mix well.",
        "Take portions and shape into cylindrical croquettes.",
        "Set up three bowls: flour, beaten egg, breadcrumbs.",
        "Roll croquettes in flour, dip in egg, coat with breadcrumbs.",
        "Heat oil in deep pan, fry until golden brown.",
        "Drain on paper towels.",
        "Serve hot with ketchup or green chutney."
      ]
    },
    { 
      id: 32, 
      name: "Tangri Kebab",
      tagline: "Spicy grilled chicken drumsticks",
      image: snackImages[31],
      ingredients: [
        "8 chicken drumsticks",
        "1 cup yogurt",
        "2 tablespoons ginger-garlic paste",
        "1 tablespoon lemon juice",
        "1 tablespoon kasuri methi",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "1/2 teaspoon turmeric powder",
        "1/2 teaspoon black pepper",
        "2 tablespoons oil",
        "Salt to taste"
      ],
      steps: [
        "Make deep slits in chicken drumsticks.",
        "In a bowl, mix yogurt with all spices, lemon juice, and oil.",
        "Add chicken to marinade, coat well.",
        "Cover and refrigerate for at least 4 hours or overnight.",
        "Preheat oven to 200°C (400°F).",
        "Place drumsticks on baking tray lined with foil.",
        "Bake for 25-30 minutes, turning halfway.",
        "Brush with oil or butter during baking.",
        "Broil for 2-3 minutes for charred effect.",
        "Serve hot with mint chutney and onion rings."
      ]
    },
    { 
      id: 33, 
      name: "Pizza Cone",
      tagline: "Fun pizza in a cone shape",
      image: snackImages[32],
      ingredients: [
        "1 cup all-purpose flour",
        "1/2 teaspoon instant yeast",
        "1/2 teaspoon sugar",
        "1/4 teaspoon salt",
        "1 tablespoon oil",
        "1/3 cup warm water",
        "1 cup pizza sauce",
        "1 1/2 cups grated mozzarella cheese",
        "1/2 cup chopped bell peppers",
        "1/2 cup chopped onions",
        "1/4 cup sliced olives",
        "1 teaspoon oregano",
        "1 teaspoon chili flakes"
      ],
      steps: [
        "Mix yeast, sugar, and warm water, let sit for 5 minutes.",
        "Mix flour and salt, add yeast mixture and oil, knead into soft dough.",
        "Cover and let rise for 1 hour.",
        "Preheat oven to 200°C (400°F). Grease cone molds.",
        "Divide dough into small balls, roll into circles.",
        "Place dough circles in cone molds, pressing to shape.",
        "Spread pizza sauce inside cones.",
        "Add cheese and toppings.",
        "Sprinkle oregano and chili flakes.",
        "Bake for 12-15 minutes until golden.",
        "Remove from molds, serve hot."
      ]
    },
    { 
      id: 34, 
      name: "Easy Chicken Drumsticks",
      tagline: "Simple oven-baked chicken drumsticks",
      image: snackImages[33],
      ingredients: [
        "8 chicken drumsticks",
        "1/4 cup soy sauce",
        "2 tablespoons honey",
        "2 tablespoons ketchup",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon paprika",
        "1/2 teaspoon black pepper",
        "2 tablespoons oil",
        "Salt to taste"
      ],
      steps: [
        "Make slits in chicken drumsticks for even cooking.",
        "In a bowl, mix soy sauce, honey, ketchup, ginger-garlic paste, paprika, pepper, and salt.",
        "Marinate chicken in this mixture for at least 1 hour.",
        "Preheat oven to 200°C (400°F).",
        "Place drumsticks on baking tray lined with foil.",
        "Brush with oil.",
        "Bake for 25-30 minutes, turning halfway.",
        "Brush with remaining marinade during baking.",
        "Broil for 2-3 minutes for glaze.",
        "Serve hot with dipping sauce."
      ]
    },
    { 
      id: 35, 
      name: "Khaja",
      tagline: "Sweet crispy fried pastry in sugar syrup",
      image: snackImages[34],
      ingredients: [
        "2 cups all-purpose flour",
        "1/4 cup ghee",
        "Water as needed",
        "1 cup sugar",
        "1/2 cup water for syrup",
        "4-5 cardamom pods, crushed",
        "Oil for frying",
        "Pinch of salt"
      ],
      steps: [
        "Make dough: Mix flour, salt, and ghee until crumbly.",
        "Add water gradually to form stiff dough. Rest for 30 minutes.",
        "Make syrup: Boil sugar, water, and cardamom until one-string consistency.",
        "Divide dough into small balls, roll into thin circles.",
        "Fold each circle into half, then half again to form triangle.",
        "Roll triangle slightly to seal edges.",
        "Heat oil in deep pan on medium heat.",
        "Fry khaja until light golden brown.",
        "Drain and immediately dip in warm syrup for 1 minute.",
        "Remove from syrup, place on wire rack to dry.",
        "Store in airtight container when completely cooled."
      ]
    },
    { 
      id: 36, 
      name: "Noodles Pakora",
      tagline: "Crispy fritters made with instant noodles",
      image: snackImages[35],
      ingredients: [
        "2 packets instant noodles",
        "1 cup gram flour (besan)",
        "1/4 cup rice flour",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "2 tablespoons chopped coriander",
        "1 teaspoon ginger paste",
        "1/2 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "Water as needed",
        "Oil for frying",
        "Salt to taste"
      ],
      steps: [
        "Cook noodles according to package instructions, drain and cool.",
        "Chop cooked noodles into smaller pieces.",
        "In a bowl, mix gram flour and rice flour.",
        "Add chopped noodles, onion, green chilies, coriander, and ginger paste.",
        "Add all spices and salt.",
        "Gradually add water to make thick batter.",
        "Heat oil in deep pan on medium heat.",
        "Drop spoonfuls of batter into hot oil.",
        "Fry until golden brown and crispy, about 3-4 minutes.",
        "Drain on paper towels.",
        "Serve hot with ketchup or chutney."
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
    if (selectedSnack && currentStep < selectedSnack.steps.length) {
      stopSpeaking();
      speakInstructions(selectedSnack.steps, currentStep);
    }
  };

  const speakPreviousStep = () => {
    if (selectedSnack && currentStep > 1) {
      stopSpeaking();
      speakInstructions(selectedSnack.steps, currentStep - 2);
    }
  };

  const handleSnackSelect = (snack) => {
    setSelectedSnack(snack);
    setShowDetailPanel(true);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const closeDetailPanel = () => {
    stopSpeaking();
    setShowDetailPanel(false);
    setSelectedSnack(null);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="snacks-page">
      {/* Header */}
      <header className="snacks-header">
        <div className="snacks-header-content">
          <h1 className="snacks-page-title">Quick Bites Collection</h1>
          <p className="snacks-page-description">
            Well-balanced snack options created for everyday enjoyment and special moments.
          </p>
        </div>
      </header>

      {/* Snacks Grid */}
      <main className="snacks-main">
        <div className="snacks-grid-section">
          <div className="snacks-grid">
            {snacks.map(snack => (
              <div 
                key={snack.id} 
                className="snacks-technique-card"
                onClick={() => handleSnackSelect(snack)}
              >
                <div 
                  className="snacks-card-image"
                  style={{ backgroundImage: `url(${snack.image})` }}
                ></div>
                
                <div className="snacks-card-content">
                  <h3 className="snacks-card-title">{snack.name}</h3>
                  <p className="snacks-card-description">{snack.tagline}</p>
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

      {/* DETAIL MODAL with SELECTED SNACK IMAGE as Background */}
      {showDetailPanel && selectedSnack && (
        <div className="snacks-modal-overlay" onClick={closeDetailPanel}>
          <div 
            className="snacks-modal" 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url(${selectedSnack.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <button className="snacks-modal-close" onClick={closeDetailPanel}>×</button>
            
            <div className="snacks-modal-header">
              <div className="snacks-modal-title">
                <h2>{selectedSnack.name}</h2>
              </div>
            </div>

            <div className="snacks-modal-content">
              {/* COLUMN 1 - INGREDIENTS */}
              <div className="snacks-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="snacks-ingredients-list">
                  {selectedSnack.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="snacks-ingredient-item">
                      <span className="snacks-ingredient-bullet">•</span>
                      <span className="snacks-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 2 - STEPS TO MAKE */}
              <div className="snacks-modal-steps">
                <h3>Steps to Make</h3>
                <div className="snacks-steps-list">
                  {selectedSnack.steps.map((step, idx) => (
                    <div key={idx} className="snacks-step-item">
                      <span className="snacks-step-number">{idx + 1}.</span>
                      <span className="snacks-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 3 - VOICE INSTRUCTIONS */}
              <div className="snacks-modal-voice-container">
                <div className="voice-panel">
                  <h3><i className="fas fa-volume-up"></i> Voice Instructions</h3>
                  
                  <div className="voice-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${progress}%`}}></div>
                    </div>
                    <div className="progress-info">
                      <span>Step {currentStep} of {selectedSnack.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <div className="voice-controls">
                    <button 
                      className={`voice-main-btn ${isPlaying ? 'stop' : 'play'}`}
                      onClick={() => isPlaying ? stopSpeaking() : speakInstructions(selectedSnack.steps)}
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
                        disabled={currentStep >= selectedSnack.steps.length}
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

export default  RecipeSnacksPage;