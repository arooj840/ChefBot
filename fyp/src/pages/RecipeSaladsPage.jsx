import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeSaladsPage.css';

const RecipeSaladsPage = () => {
  const navigate = useNavigate();
  const [selectedSalad, setSelectedSalad] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // Salad images array (40 images)
  const saladImages = [
    "https://images.unsplash.com/photo-1540420773420-3366772f4999", // Kachumber Salad
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", // Onion Raita
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe", // Boondi Raita
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187", // Cucumber Raita
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327", // Mint Raita
    "https://images.unsplash.com/photo-1585238342024-78d387f4a707", // Potato Salad (Pakistani)
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", // Mixed Vegetable Salad
    "https://images.unsplash.com/photo-1519996529931-28324d5a630e", // Fruit Chaat
    "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26", // Chana Chaat
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7", // Aloo Chaat
    "https://images.unsplash.com/photo-1632922266946-6ba7c5d2bfd7", // Papdi Chaat
    "https://images.unsplash.com/photo-1601050690597-df0568f70950", // Dahi Bhalla
    "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58", // Bhel Puri
    "https://images.unsplash.com/photo-1626082895612-9e6d8e7db8d5", // Sev Puri
    "https://images.unsplash.com/photo-1631747558697-4d3c5e1b5c1b", // Pakora Salad
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe", // Greek Salad
    "https://images.unsplash.com/photo-1564927279-ef7a135d2d52", // Caesar Salad
    "https://images.unsplash.com/photo-1574926054530-540288c8e678", // Waldorf Salad
    "https://images.unsplash.com/photo-1563379091339-03246963d9d6", // Caprese Salad
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d", // Cobb Salad
    "https://images.unsplash.com/photo-1579586337278-3f4e7d9f5a1c", // Nicoise Salad
    "https://images.unsplash.com/photo-1574926054530-540288c8e678", // Coleslaw
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", // Garden Salad
    "https://images.unsplash.com/photo-1574926054530-540288c8e678", // Russian Salad
    "https://images.unsplash.com/photo-1563379091339-03246963d9d6", // Pasta Salad
    "https://images.unsplash.com/photo-1585238342024-78d387f4a707", // Potato Salad (Continental)
    "https://images.unsplash.com/photo-1574926054530-540288c8e678", // Macaroni Salad
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d", // Fattoush Salad
    "https://images.unsplash.com/photo-1579586337278-3f9d8f5a1c1c", // Tabbouleh
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", // Quinoa Salad
    "https://images.unsplash.com/photo-1563379091339-03246963d9d6", // Chicken Salad
    "https://images.unsplash.com/photo-1574926054530-540288c8e678", // Tuna Salad
    "https://images.unsplash.com/photo-1563379091339-03246963d9d6", // Shrimp Salad
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d", // Egg Salad
    "https://images.unsplash.com/photo-1574926054530-540288c8e678", // Beetroot Salad
    "https://images.unsplash.com/photo-1563379091339-03246963d9d6", // Avocado Salad
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", // Spinach Salad
    "https://images.unsplash.com/photo-1579586337278-3f9d8f5a1c1c", // Broccoli Salad
    "https://images.unsplash.com/photo-1564927279-ef7a135d2d52", // Feta Cheese Salad
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"  // Mediterranean Salad
  ];

  // All 40 Salads Data with Complete Recipes
  const salads = [
    { 
      id: 1, 
      name: "Kachumber Salad",
      tagline: "Fresh chopped cucumber and tomato salad with Indian spices",
      image: saladImages[0],
      ingredients: [
        "2 cucumbers, finely chopped",
        "2 tomatoes, finely chopped",
        "1 onion, finely chopped",
        "1 green chilli, finely chopped",
        "1/4 cup fresh coriander leaves, chopped",
        "1/2 teaspoon roasted cumin powder",
        "1/2 teaspoon chaat masala",
        "1/4 teaspoon black salt",
        "Salt to taste",
        "1 tablespoon lemon juice",
        "1 tablespoon olive oil"
      ],
      steps: [
        "Wash and finely chop all vegetables.",
        "In a large mixing bowl, combine cucumbers, tomatoes, and onions.",
        "Add finely chopped green chili for extra spice.",
        "Add chopped coriander leaves for freshness.",
        "Sprinkle roasted cumin powder, chaat masala, and black salt.",
        "Add regular salt according to your taste.",
        "Drizzle lemon juice and olive oil over the salad.",
        "Gently mix all ingredients until well combined.",
        "Let the salad rest for 10 minutes to allow flavors to blend.",
        "Serve fresh as a side dish with your meals."
      ]
    },
    { 
      id: 2, 
      name: "Onion Raita",
      tagline: "Cool yogurt dip with crunchy onions and spices",
      image: saladImages[1],
      ingredients: [
        "2 cups plain yogurt",
        "1 large onion, finely chopped",
        "1 green chilli, finely chopped",
        "1/4 cup fresh coriander leaves, chopped",
        "1/2 teaspoon roasted cumin powder",
        "1/4 teaspoon black salt",
        "Salt to taste",
        "1/2 teaspoon sugar",
        "1 tablespoon fresh mint leaves, chopped",
        "1/4 teaspoon black pepper powder"
      ],
      steps: [
        "Take yogurt in a mixing bowl and whisk until smooth.",
        "Add finely chopped onions to the yogurt.",
        "Add chopped green chili and coriander leaves.",
        "Mix in roasted cumin powder, black salt, and regular salt.",
        "Add sugar to balance the acidity of yogurt.",
        "Add mint leaves for extra freshness.",
        "Sprinkle black pepper powder.",
        "Mix all ingredients thoroughly.",
        "Cover and refrigerate for at least 30 minutes.",
        "Garnish with more coriander leaves before serving.",
        "Serve chilled with biryani or rice dishes."
      ]
    },
    { 
      id: 3, 
      name: "Boondi Raita",
      tagline: "Yogurt with crispy chickpea flour pearls",
      image: saladImages[2],
      ingredients: [
        "2 cups plain yogurt",
        "1/2 cup boondi",
        "1/4 teaspoon roasted cumin powder",
        "1/4 teaspoon red chili powder",
        "1/4 teaspoon chaat masala",
        "Salt to taste",
        "1/2 teaspoon sugar",
        "2 tablespoons fresh coriander leaves, chopped",
        "1/4 teaspoon black salt",
        "1 tablespoon water if yogurt is thick"
      ],
      steps: [
        "Whisk yogurt in a bowl until smooth and creamy.",
        "If yogurt is too thick, add 1 tablespoon water.",
        "Add salt, sugar, and black salt to yogurt.",
        "Mix in roasted cumin powder and red chili powder.",
        "Combine all spices well into the yogurt.",
        "Add boondi to the yogurt mixture.",
        "Let it soak for 10 minutes until boondi softens slightly.",
        "Add chaat masala and mix gently.",
        "Garnish with chopped coriander leaves.",
        "Refrigerate for 15-20 minutes before serving.",
        "Serve chilled as a refreshing side dish."
      ]
    },
    { 
      id: 4, 
      name: "Cucumber Raita",
      tagline: "Cool yogurt with fresh grated cucumber",
      image: saladImages[3],
      ingredients: [
        "2 cups plain yogurt",
        "1 large cucumber, grated or finely chopped",
        "1/2 teaspoon roasted cumin powder",
        "1/4 teaspoon black pepper powder",
        "Salt to taste",
        "1 green chili, finely chopped",
        "2 tablespoons fresh mint leaves, chopped",
        "1 tablespoon fresh coriander leaves, chopped",
        "1/4 teaspoon sugar",
        "1 tablespoon roasted peanuts, crushed"
      ],
      steps: [
        "Peel and grate or finely chop cucumber.",
        "Squeeze out excess water from cucumber to prevent watery raita.",
        "Whisk yogurt in a bowl until smooth and creamy.",
        "Add squeezed cucumber to yogurt.",
        "Mix in roasted cumin powder and black pepper.",
        "Add salt and sugar for balanced flavor.",
        "Add chopped green chili for mild spice.",
        "Add chopped mint and coriander leaves.",
        "Mix all ingredients thoroughly.",
        "Garnish with crushed peanuts for crunch.",
        "Refrigerate for at least 30 minutes.",
        "Serve chilled as a cooling side dish."
      ]
    },
    { 
      id: 5, 
      name: "Mint Raita",
      tagline: "Refreshing yogurt dip with fresh mint",
      image: saladImages[4],
      ingredients: [
        "2 cups plain yogurt",
        "1 cup fresh mint leaves",
        "1/4 cup fresh coriander leaves",
        "1 green chili",
        "1/2 teaspoon cumin seeds",
        "1 tablespoon lemon juice",
        "Salt to taste",
        "1/4 teaspoon black salt",
        "1/2 teaspoon sugar",
        "1 tablespoon water"
      ],
      steps: [
        "Wash mint and coriander leaves thoroughly.",
        "In a blender, combine mint, coriander, green chili, and water.",
        "Blend to make a smooth green paste.",
        "Whisk yogurt in a bowl until smooth.",
        "Add the mint-coriander paste to yogurt.",
        "Mix in lemon juice, salt, and black salt.",
        "Add sugar to balance the flavors.",
        "Dry roast cumin seeds until fragrant, then crush them.",
        "Add crushed cumin to the raita.",
        "Mix all ingredients well.",
        "Refrigerate for at least 1 hour for flavors to develop.",
        "Garnish with mint leaves before serving.",
        "Serve chilled with spicy dishes."
      ]
    },
    { 
      id: 6, 
      name: "Potato Salad",
      tagline: "Creamy potato salad with herbs and mustard",
      image: saladImages[5],
      ingredients: [
        "4 medium potatoes, boiled and cubed",
        "1/2 cup mayonnaise",
        "1/4 cup sour cream or thick yogurt",
        "1 tablespoon Dijon mustard",
        "1/2 cup celery, finely chopped",
        "1/4 cup red onion , finely chopped",
        "2 tablespoons fresh dill , chopped",
        "Salt to taste",
        "1/4 teaspoon black pepper ",
        "2 tablespoons pickle juice or lemon juice ",
        "2 hard-boiled eggs, chopped",
        "2 tablespoons fresh chives, chopped"
      ],
      steps: [
        "Boil potatoes until tender but firm, then cube them.",
        "In a large bowl, mix mayonnaise, sour cream, and Dijon mustard.",
        "Add pickle juice or lemon juice to the dressing.",
        "Season with salt and black pepper.",
        "Add chopped celery and red onion.",
        "Mix in chopped dill and chives.",
        "Gently fold in the potato cubes.",
        "Add chopped hard-boiled eggs.",
        "Mix carefully to coat all potatoes with dressing.",
        "Cover and refrigerate for at least 2 hours.",
        "Before serving, check seasoning and adjust if needed.",
        "Garnish with more fresh herbs.",
        "Serve chilled."
      ]
    },
    { 
      id: 7, 
      name: "Mixed Vegetable Salad",
      tagline: "Colorful medley of fresh garden vegetables",
      image: saladImages[6],
      ingredients: [
        "1 cup cucumber , diced",
        "1 cup tomatoes, diced",
        "1 cup bell peppers, mixed colors, diced",
        "1/2 cup carrots, grated or julienned",
        "1/2 cup cabbage, shredded",
        "1/4 cup red onion, thinly sliced",
        "1/4 cup sweet corn, boiled",
        "2 tablespoons olive oil",
        "1 tablespoon lemon juice ",
        "1 teaspoon honey or sugar ",
        "Salt to taste",
        "1/4 teaspoon black pepper",
        "1/4 teaspoon dried oregano",
        "2 tablespoons fresh parsley, chopped"
      ],
      steps: [
        "Wash and prepare all vegetables as directed.",
        "In a large bowl, combine all vegetables.",
        "In a small bowl, prepare dressing: whisk olive oil, lemon juice, and honey.",
        "Add salt, black pepper, and oregano to dressing.",
        "Pour dressing over vegetables.",
        "Toss gently to coat all vegetables evenly.",
        "Add chopped parsley and mix.",
        "Let salad sit for 10-15 minutes for flavors to develop.",
        "Taste and adjust seasoning if needed.",
        "Serve fresh as a healthy side dish.",
        "Can be stored in refrigerator for up to 2 hours."
      ]
    },
    { 
      id: 8, 
      name: "Fruit Chaat",
      tagline: "Spiced mixed fruit salad with chaat masala",
      image: saladImages[7],
      ingredients: [
        "1 apple, diced",
        "1 banana, sliced",
        "1 orange, peeled and segmented",
        "1 cup pineapple chunks",
        "1 cup pomegranate seeds",
        "1 cup grapes, halved",
        "1/2 cup papaya, diced",
        "1/2 cup mango, diced (if in season)",
        "1 teaspoon chaat masala",
        "1/2 teaspoon black salt",
        "1/2 teaspoon roasted cumin powder",
        "1 tablespoon lemon juice",
        "2 tablespoons fresh mint leaves , chopped",
        "2 tablespoons fresh coriander leaves, chopped"
      ],
      steps: [
        "Wash and prepare all fruits as directed.",
        "In a large bowl, combine all fruits gently.",
        "Sprinkle chaat masala over fruits.",
        "Add black salt and roasted cumin powder.",
        "Drizzle lemon juice over the fruits.",
        "Gently toss to coat all fruits with spices.",
        "Add chopped mint and coriander leaves.",
        "Mix gently to avoid crushing delicate fruits.",
        "Let it sit for 5 minutes for flavors to blend.",
        "Serve immediately or chill for 15 minutes.",
        "Garnish with more mint leaves before serving.",
        "Best consumed fresh."
      ]
    },
    { 
      id: 9, 
      name: "Chana Chaat",
      tagline: "Spicy chickpea salad with tangy chutneys",
      image: saladImages[8],
      ingredients: [
        "2 cups boiled chickpeas",
        "1 medium potato, boiled and diced",
        "1 medium onion, finely chopped",
        "1 medium tomato, finely chopped",
        "1 green chili, finely chopped",
        "1/4 cup fresh coriander leaves , chopped",
        "2 tablespoons tamarind chutney",
        "2 tablespoons mint-coriander chutney",
        "1 teaspoon chaat masala",
        "1/2 teaspoon roasted cumin powder",
        "1/2 teaspoon red chili powder",
        "Salt to taste",
        "1 tablespoon lemon juice",
        "Sev for garnish",
        "Pomegranate seeds for garnish"
      ],
      steps: [
        "Boil chickpeas until tender, drain and cool.",
        "Boil potato, peel and dice it.",
        "In a large bowl, mix chickpeas and potatoes.",
        "Add chopped onion, tomato, and green chili.",
        "Add both tamarind and mint-coriander chutneys.",
        "Sprinkle chaat masala, cumin powder, and red chili powder.",
        "Add salt and lemon juice.",
        "Mix all ingredients gently but thoroughly.",
        "Garnish with fresh coriander leaves.",
        "Top with sev just before serving.",
        "Add pomegranate seeds for sweetness.",
        "Serve immediately for best taste."
      ]
    },
    { 
      id: 10, 
      name: "Aloo Chaat",
      tagline: "Crispy spiced potatoes with chutneys",
      image: saladImages[9],
      ingredients: [
        "3 medium potatoes, boiled and cubed",
        "1 medium onion, finely chopped",
        "1 green chili, finely chopped",
        "2 tablespoons tamarind chutney",
        "2 tablespoons mint-coriander chutney",
        "1/4 cup fresh coriander leaves, chopped",
        "1 teaspoon chaat masala",
        "1/2 teaspoon roasted cumin powder",
        "1/2 teaspoon red chili powder",
        "Salt to taste",
        "1 tablespoon lemon juice",
        "Sev for garnish",
        "1 tablespoon pomegranate seeds",
        "1 tablespoon nylon sev"
      ],
      steps: [
        "Boil potatoes until tender but firm, cube them.",
        "Heat 1 tablespoon oil in a pan, shallow fry potatoes until golden.",
        "In a bowl, combine fried potatoes with onions and green chili.",
        "Add tamarind chutney and mint-coriander chutney.",
        "Sprinkle chaat masala, cumin powder, and red chili powder.",
        "Add salt and lemon juice.",
        "Mix gently to coat potatoes with spices.",
        "Garnish with fresh coriander leaves.",
        "Top with sev and pomegranate seeds.",
        "Serve immediately while potatoes are still warm.",
        "Can be served as snack or appetizer."
      ]
    },
    { 
      id: 11, 
      name: "Papdi Chaat",
      tagline: "Crispy crackers topped with spiced chickpeas and yogurt",
      image: saladImages[10],
      ingredients: [
        "20-25 papdis",
        "1 cup boiled chickpeas",
        "1 cup boiled potatoes, diced",
        "1/2 cup plain yogurt, whisked",
        "2 tablespoons tamarind chutney",
        "2 tablespoons mint-coriander chutney",
        "1 teaspoon chaat masala",
        "1/2 teaspoon roasted cumin powder",
        "1/2 teaspoon red chili powder ",
        "Salt to taste",
        "1/4 cup nylon sev",
        "2 tablespoons pomegranate seeds ",
        "2 tablespoons fresh coriander leaves , chopped",
        "1 tablespoon roasted cumin seeds, crushed"
      ],
      steps: [
        "Arrange papdis on a serving plate.",
        "Spread boiled chickpeas over papdis.",
        "Add boiled potato cubes over chickpeas.",
        "Drizzle whisked yogurt over everything.",
        "Add tamarind chutney and mint-coriander chutney.",
        "Sprinkle chaat masala, cumin powder, and red chili powder.",
        "Add salt to taste.",
        "Garnish generously with nylon sev.",
        "Sprinkle pomegranate seeds over sev.",
        "Add chopped coriander leaves.",
        "Sprinkle crushed cumin seeds.",
        "Serve immediately before papdis get soggy.",
        "Best enjoyed fresh."
      ]
    },
    { 
      id: 12, 
      name: "Dahi Bhalla",
      tagline: "Soft lentil dumplings soaked in creamy yogurt",
      image: saladImages[11],
      ingredients: [
        "1 cup urad dal , soaked 4-6 hours",
        "2 cups plain yogurt , whisked",
        "1/4 cup tamarind chutney ",
        "2 tablespoons mint-coriander chutney",
        "1 teaspoon chaat masala",
        "1/2 teaspoon roasted cumin powder",
        "1/2 teaspoon red chili powder",
        "Salt to taste",
        "1/4 teaspoon baking soda",
        "Oil  for frying",
        "Water  for soaking",
        "2 tablespoons pomegranate seeds ",
        "2 tablespoons nylon sev",
        "2 tablespoons fresh coriander leaves, chopped"
      ],
      steps: [
        "Grind soaked urad dal to smooth batter, add salt and baking soda.",
        "Heat oil, drop spoonfuls of batter, fry until golden brown (bhallas).",
        "Soak fried bhallas in warm water for 30 minutes.",
        "Gently squeeze out water from soaked bhallas.",
        "Arrange bhallas on serving plate.",
        "Pour whisked yogurt over bhallas.",
        "Drizzle tamarind and mint-coriander chutneys.",
        "Sprinkle chaat masala, cumin powder, and red chili powder.",
        "Garnish with pomegranate seeds and nylon sev.",
        "Add chopped coriander leaves.",
        "Refrigerate for 30 minutes before serving.",
        "Serve chilled as appetizer or snack."
      ]
    },
    { 
      id: 13,
      name: "Bhel Puri",
      tagline: "Crunchy puffed rice snack with tangy chutneys",
      image: saladImages[12],
      ingredients: [
        "2 cups puffed rice",
        "1/2 cup sev",
        "1/2 cup boiled potatoes, diced",
        "1/2 cup boiled chickpeas",
        "1/4 cup raw onions, finely chopped",
        "1/4 cup tomatoes, finely chopped",
        "2 tablespoons tamarind chutney",
        "2 tablespoons mint-coriander chutney",
        "1 tablespoon lemon juice",
        "1 teaspoon chaat masala",
        "1/2 teaspoon roasted cumin powder",
        "1/4 teaspoon black salt",
        "Salt to taste",
        "2 tablespoons fresh coriander leaves, chopped",
        "1 green chili, finely chopped"
      ],
      steps: [
        "Dry roast puffed rice in a pan for 2-3 minutes, let cool.",
        "In a large bowl, combine puffed rice and sev.",
        "Add boiled potatoes and chickpeas.",
        "Add chopped onions and tomatoes.",
        "Add green chili for extra spice.",
        "Add tamarind and mint-coriander chutneys.",
        "Mix in lemon juice, chaat masala, cumin powder, and black salt.",
        "Add regular salt to taste.",
        "Mix all ingredients gently but quickly.",
        "Add chopped coriander leaves.",
        "Serve immediately in bowls.",
        "Can be garnished with extra sev on top.",
        "Best enjoyed fresh and crispy."
      ]
    },
    { 
      id: 14,
      name: "Sev Puri",
      tagline: "Crispy puris topped with potatoes and crunchy sev",
      image: saladImages[13],
      ingredients: [
        "20-25 puris",
        "2 medium potatoes, boiled and mashed",
        "1/2 cup boiled chickpeas, mashed slightly",
        "1/4 cup onions, finely chopped",
        "1/4 cup tomatoes, finely chopped",
        "2 tablespoons tamarind chutney",
        "2 tablespoons mint-coriander chutney",
        "1/4 cup nylon sev",
        "1 teaspoon chaat masala",
        "1/2 teaspoon roasted cumin powder",
        "1/2 teaspoon red chili powder",
        "Salt to taste",
        "2 tablespoons fresh coriander leaves, chopped",
        "1 tablespoon pomegranate seeds"
      ],
      steps: [
        "Arrange puris on a serving plate.",
        "Spread mashed potatoes on each puri.",
        "Add mashed chickpeas over potatoes.",
        "Sprinkle chopped onions and tomatoes.",
        "Drizzle tamarind and mint-coriander chutneys.",
        "Sprinkle chaat masala, cumin powder, and red chili powder.",
        "Add salt to taste.",
        "Generously top with nylon sev.",
        "Garnish with chopped coriander leaves.",
        "Add pomegranate seeds for sweetness.",
        "Serve immediately before puris get soggy.",
        "Best enjoyed as fresh snack."
      ]
    },
    { 
      id: 15,
      name: "Pakora Salad",
      tagline: "Crispy vegetable fritters in spiced yogurt",
      image: saladImages[14],
      ingredients: [
        "For Pakoras:",
        "1 cup besan",
        "1 cup mixed vegetables",
        "1 green chili, chopped",
        "1/2 teaspoon carom seeds",
        "1/2 teaspoon red chili powder",
        "Salt to taste",
        "Water as needed",
        "Oil for frying",
        "For Salad:",
        "1 cup yogurt, whisked",
        "1/2 teaspoon roasted cumin powder",
        "1/4 teaspoon red chili powder",
        "Salt to taste",
        "2 tablespoons fresh coriander leaves, chopped",
        "1 tablespoon mint leaves, chopped",
        "1 tablespoon tamarind chutney"
      ],
      steps: [
        "For pakoras: Mix besan with spices and water to make thick batter.",
        "Add chopped vegetables to batter, mix well.",
        "Heat oil, drop spoonfuls of batter, fry until golden brown.",
        "Drain pakoras on paper towel, let cool slightly.",
        "For salad base: Whisk yogurt with spices and herbs.",
        "Spread yogurt mixture on serving plate.",
        "Arrange pakoras over yogurt.",
        "Drizzle tamarind chutney over pakoras.",
        "Sprinkle more cumin powder and red chili powder.",
        "Garnish with fresh coriander leaves.",
        "Serve immediately while pakoras are still crisp.",
        "Can be served as appetizer or snack."
      ]
    },
    { 
      id: 16,
      name: "Greek Salad",
      tagline: "Classic Mediterranean salad with feta and olives",
      image: saladImages[15],
      ingredients: [
        "2 large tomatoes, cut into wedges",
        "1 cucumber, sliced",
        "1 green bell pepper, sliced",
        "1 red onion, thinly sliced",
        "1 cup Kalamata olives",
        "200g feta cheese, cubed",
        "3 tablespoons extra virgin olive oil",
        "1 tablespoon red wine vinegar",
        "1 teaspoon dried oregano",
        "Salt to taste",
        "Freshly ground black pepper",
        "Fresh oregano leaves for garnish"
      ],
      steps: [
        "Wash and prepare all vegetables.",
        "In a large bowl, combine tomatoes, cucumber, bell pepper, and onion.",
        "Add Kalamata olives to the vegetables.",
        "Add cubed feta cheese.",
        "In a small bowl, whisk together olive oil and red wine vinegar.",
        "Add dried oregano, salt, and black pepper to dressing.",
        "Pour dressing over salad ingredients.",
        "Gently toss to combine all ingredients.",
        "Let salad sit for 15 minutes for flavors to blend.",
        "Garnish with fresh oregano leaves before serving.",
        "Serve at room temperature for best flavor.",
        "Can be refrigerated for up to 2 hours."
      ]
    },
    { 
      id: 17,
      name: "Caesar Salad",
      tagline: "Classic romaine salad with creamy Caesar dressing",
      image: saladImages[16],
      ingredients: [
        "1 large head romaine lettuce, washed and torn",
        "1/2 cup Parmesan cheese, shaved",
        "1 cup croutons",
        "For Dressing:",
        "1/2 cup mayonnaise",
        "2 tablespoons lemon juice",
        "2 cloves garlic, minced",
        "1 teaspoon Dijon mustard",
        "1 teaspoon Worcestershire sauce",
        "1/4 cup grated Parmesan cheese",
        "Salt to taste",
        "Freshly ground black pepper",
        "2 tablespoons olive oil",
        "Optional: 2 anchovy fillets, minced",
        "Optional: Grilled chicken breast strips"
      ],
      steps: [
        "Prepare dressing: In a bowl, whisk mayonnaise, lemon juice, and garlic.",
        "Add Dijon mustard and Worcestershire sauce.",
        "Mix in grated Parmesan, salt, and pepper.",
        "Slowly whisk in olive oil until emulsified.",
        "Add minced anchovies if using.",
        "In a large bowl, combine romaine lettuce.",
        "Add croutons and Parmesan shavings.",
        "Pour dressing over salad just before serving.",
        "Toss gently to coat lettuce with dressing.",
        "Add grilled chicken strips if using.",
        "Serve immediately on chilled plates.",
        "Garnish with extra Parmesan cheese.",
        "Best consumed fresh."
      ]
    },
    { 
      id: 18,
      name: "Waldorf Salad",
      tagline: "Classic apple, celery and walnut salad",
      image: saladImages[17],
      ingredients: [
        "2 large apples, diced",
        "1 cup celery, thinly sliced",
        "1/2 cup walnuts, toasted and chopped",
        "1/2 cup seedless grapes, halved",
        "1/2 cup mayonnaise",
        "1/4 cup Greek yogurt or sour cream",
        "1 tablespoon lemon juice",
        "1 teaspoon honey or sugar",
        "Salt to taste",
        "Freshly ground black pepper",
        "Lettuce leaves for serving",
        "Optional: 1/2 cup raisins or dried cranberries"
      ],
      steps: [
        "Core and dice apples, toss with lemon juice to prevent browning.",
        "Thinly slice celery stalks.",
        "Toast walnuts in dry pan until fragrant, then chop.",
        "Halve seedless grapes.",
        "In a large bowl, combine apples, celery, walnuts, and grapes.",
        "Add raisins or cranberries if using.",
        "In a small bowl, whisk mayonnaise and Greek yogurt.",
        "Add honey, salt, and pepper to dressing.",
        "Pour dressing over apple mixture.",
        "Gently fold to combine all ingredients.",
        "Chill in refrigerator for at least 30 minutes.",
        "Serve on bed of lettuce leaves.",
        "Garnish with extra walnuts before serving."
      ]
    },
    { 
      id: 19,
      name: "Caprese Salad",
      tagline: "Simple Italian salad with tomato, mozzarella and basil",
      image: saladImages[18],
      ingredients: [
        "3-4 large ripe tomatoes, sliced",
        "250g fresh mozzarella cheese, sliced",
        "1 bunch fresh basil leaves",
        "3 tablespoons extra virgin olive oil",
        "1 tablespoon balsamic vinegar",
        "Salt to taste",
        "Freshly ground black pepper",
        "Optional: balsamic glaze for drizzling",
        "Optional: 1 clove garlic, minced"
      ],
      steps: [
        "Slice tomatoes and mozzarella to similar thickness.",
        "Arrange tomato and mozzarella slices alternately on plate.",
        "Tuck fresh basil leaves between slices.",
        "In a small bowl, whisk olive oil and balsamic vinegar.",
        "Add minced garlic if using, salt, and pepper.",
        "Drizzle dressing over arranged salad.",
        "Season with more salt and pepper to taste.",
        "Let salad sit for 10 minutes for flavors to develop.",
        "Drizzle with balsamic glaze if using.",
        "Garnish with whole basil leaves.",
        "Serve at room temperature for best flavor.",
        "Can be served as appetizer or side dish."
      ]
    },
    { 
      id: 20,
      name: "Cobb Salad",
      tagline: "Hearty chopped salad with eggs, bacon and avocado",
      image: saladImages[19],
      ingredients: [
        "1 head romaine lettuce, chopped",
        "2 hard-boiled eggs, chopped",
        "2 cooked chicken breasts, diced",
        "6 strips bacon, cooked and crumbled",
        "1 avocado, diced",
        "2 tomatoes, diced",
        "1/2 cup blue cheese, crumbled",
        "1/4 cup red onion, thinly sliced",
        "For Dressing:",
        "1/2 cup olive oil",
        "1/4 cup red wine vinegar",
        "1 tablespoon Dijon mustard",
        "1 clove garlic, minced",
        "1 teaspoon honey",
        "Salt and pepper to taste",
        "1 tablespoon fresh chives, chopped"
      ],
      steps: [
        "Prepare all ingredients as directed.",
        "Arrange chopped lettuce on large platter.",
        "Arrange other ingredients in rows over lettuce: eggs, chicken, bacon, avocado, tomatoes, blue cheese, and onion.",
        "For dressing: whisk olive oil, vinegar, and Dijon mustard.",
        "Add garlic, honey, salt, and pepper to dressing.",
        "Stir in chopped chives.",
        "Drizzle dressing over salad just before serving.",
        "Alternatively, serve dressing on side.",
        "Toss salad at table or serve as arranged.",
        "Can be made with turkey instead of chicken.",
        "Serve immediately for best texture.",
        "Makes a complete meal salad."
      ]
    },
    { 
      id: 21,
      name: "Nicoise Salad",
      tagline: "French composed salad with tuna and vegetables",
      image: saladImages[20],
      ingredients: [
        "200g fresh tuna steak or 2 cans tuna in olive oil",
        "4 small potatoes, boiled and quartered",
        "200g green beans, trimmed",
        "4 hard-boiled eggs, quartered",
        "2 tomatoes, cut into wedges",
        "1/2 cup black olives",
        "1/4 cup red onion, thinly sliced",
        "For Dressing:",
        "1/4 cup olive oil",
        "2 tablespoons lemon juice",
        "1 tablespoon Dijon mustard",
        "1 clove garlic, minced",
        "1 teaspoon dried oregano",
        "Salt and pepper to taste",
        "Anchovy fillets",
        "Capers for garnish"
      ],
      steps: [
        "Grill or sear tuna steak until cooked to preference, slice.",
        "Boil potatoes until tender, quarter when cooled.",
        "Blanch green beans in boiling water for 3 minutes, then ice bath.",
        "Arrange all ingredients attractively on platter.",
        "In a small bowl, whisk olive oil, lemon juice, and mustard.",
        "Add garlic, oregano, salt, and pepper to dressing.",
        "Add minced anchovies if using.",
        "Drizzle dressing over salad just before serving.",
        "Garnish with capers.",
        "Can arrange in sections or mix all together.",
        "Serve at room temperature.",
        "Perfect for summer meals."
      ]
    },
    { 
      id: 22,
      name: "Coleslaw",
      tagline: "Creamy cabbage and carrot slaw",
      image: saladImages[21],
      ingredients: [
        "4 cups cabbage, finely shredded",
        "2 carrots, grated",
        "1/2 cup mayonnaise",
        "2 tablespoons sour cream or yogurt",
        "1 tablespoon apple cider vinegar",
        "1 tablespoon sugar",
        "1 teaspoon Dijon mustard",
        "1/2 teaspoon celery seeds",
        "Salt to taste",
        "Freshly ground black pepper",
        "2 tablespoons fresh parsley, chopped",
        "1/4 cup red onion, finely chopped"
      ],
      steps: [
        "Finely shred cabbage using a sharp knife or mandoline.",
        "Grate carrots using large holes of grater.",
        "In a large bowl, combine cabbage and carrots.",
        "In a separate bowl, whisk mayonnaise and sour cream.",
        "Add apple cider vinegar, sugar, and Dijon mustard.",
        "Mix in celery seeds if using, salt, and pepper.",
        "Pour dressing over cabbage mixture.",
        "Add chopped parsley and red onion if using.",
        "Toss thoroughly to coat all vegetables.",
        "Cover and refrigerate for at least 2 hours.",
        "Stir before serving to redistribute dressing.",
        "Taste and adjust seasoning if needed.",
        "Serve chilled."
      ]
    },
    { 
      id: 23,
      name: "Garden Salad",
      tagline: "Fresh mixed greens with simple vinaigrette",
      image: saladImages[22],
      ingredients: [
        "4 cups mixed lettuce greens",
        "1 cucumber, sliced",
        "2 tomatoes, cut into wedges",
        "1 bell pepper, any color, sliced",
        "1/2 cup radishes, sliced",
        "1/4 cup red onion, thinly sliced",
        "1 carrot, shredded",
        "For Dressing:",
        "3 tablespoons olive oil",
        "1 tablespoon red wine vinegar",
        "1 teaspoon Dijon mustard",
        "1/2 teaspoon honey",
        "1 clove garlic, minced",
        "Salt and pepper to taste",
        "1 teaspoon dried oregano",
        "Fresh herbs for garnish"
      ],
      steps: [
        "Wash and dry lettuce greens thoroughly.",
        "Prepare all vegetables as directed.",
        "In a large salad bowl, combine all vegetables.",
        "In a small jar, combine all dressing ingredients.",
        "Shake dressing vigorously until well combined.",
        "Pour dressing over salad just before serving.",
        "Toss gently to coat all ingredients.",
        "Garnish with fresh herbs.",
        "Serve immediately for best texture.",
        "Can customize with other vegetables.",
        "Add protein like grilled chicken for complete meal.",
        "Keep dressing on side for later use."
      ]
    },
    { 
      id: 24,
      name: "Russian Salad",
      tagline: "Creamy vegetable salad with mayonnaise",
      image: saladImages[23],
      ingredients: [
        "2 potatoes, boiled and diced",
        "2 carrots, boiled and diced",
        "1 cup green peas, boiled",
        "1 cup French beans, boiled and chopped",
        "1/2 cup sweet corn, boiled",
        "1 apple, peeled and diced",
        "1/2 cup mayonnaise",
        "1/4 cup sour cream or yogurt",
        "1 tablespoon Dijon mustard",
        "1 tablespoon lemon juice",
        "Salt to taste",
        "Freshly ground black pepper",
        "1/4 cup fresh dill, chopped",
        "Optional: 1/2 cup diced ham or chicken"
      ],
      steps: [
        "Boil all vegetables separately until tender but firm.",
        "Allow all vegetables to cool completely.",
        "Dice potatoes, carrots, and other vegetables uniformly.",
        "In a large bowl, combine all vegetables and apple.",
        "In a separate bowl, whisk mayonnaise and sour cream.",
        "Add Dijon mustard, lemon juice, salt, and pepper.",
        "Pour dressing over vegetable mixture.",
        "Add diced ham or chicken if using.",
        "Gently fold to combine all ingredients.",
        "Add chopped dill and mix.",
        "Cover and refrigerate for at least 4 hours.",
        "Stir before serving.",
        "Garnish with more dill before serving."
      ]
    },
    { 
      id: 25,
      name: "Pasta Salad",
      tagline: "Cold pasta with vegetables and Italian dressing",
      image: saladImages[24],
      ingredients: [
        "2 cups pasta, cooked",
        "1 cup cherry tomatoes, halved",
        "1 cucumber, diced",
        "1 bell pepper, diced",
        "1/2 cup black olives, sliced",
        "1/4 cup red onion, finely chopped",
        "1/2 cup feta cheese, crumbled",
        "For Dressing:",
        "1/3 cup olive oil",
        "2 tablespoons red wine vinegar",
        "1 tablespoon lemon juice",
        "1 clove garlic, minced",
        "1 teaspoon dried oregano",
        "1 teaspoon dried basil",
        "Salt and pepper to taste",
        "Fresh basil leaves for garnish"
      ],
      steps: [
        "Cook pasta according to package directions, drain, rinse with cold water.",
        "Allow pasta to cool completely.",
        "Prepare all vegetables as directed.",
        "In a large bowl, combine cooled pasta and vegetables.",
        "Add sliced olives and crumbled feta cheese.",
        "In a small bowl, whisk all dressing ingredients together.",
        "Pour dressing over pasta mixture.",
        "Toss gently to combine all ingredients.",
        "Cover and refrigerate for at least 2 hours.",
        "Stir before serving to redistribute dressing.",
        "Garnish with fresh basil leaves.",
        "Can be made ahead for parties.",
        "Serve chilled or at room temperature."
      ]
    },
    { 
      id: 26,
      name: "Continental Potato Salad",
      tagline: "Classic American-style potato salad",
      image: saladImages[25],
      ingredients: [
        "6 medium potatoes, boiled and cubed",
        "4 hard-boiled eggs, chopped",
        "1/2 cup celery, finely chopped",
        "1/4 cup red onion, finely chopped",
        "1/4 cup sweet pickle relish",
        "1 cup mayonnaise",
        "2 tablespoons yellow mustard",
        "1 tablespoon apple cider vinegar",
        "1 teaspoon sugar",
        "Salt to taste",
        "Freshly ground black pepper",
        "1/4 cup fresh parsley, chopped",
        "Paprika for garnish"
      ],
      steps: [
        "Boil potatoes until tender but firm, cube when cooled.",
        "Hard boil eggs, cool, peel and chop.",
        "In a large bowl, combine potatoes, eggs, celery, and onion.",
        "In a separate bowl, whisk mayonnaise and mustard.",
        "Add pickle relish, vinegar, sugar, salt, and pepper.",
        "Pour dressing over potato mixture.",
        "Gently fold to combine all ingredients.",
        "Add chopped parsley and mix.",
        "Cover and refrigerate for at least 4 hours.",
        "Before serving, taste and adjust seasoning.",
        "Sprinkle with paprika for garnish.",
        "Serve chilled.",
        "Keeps well for 3-4 days refrigerated."
      ]
    },
    { 
      id: 27,
      name: "Macaroni Salad",
      tagline: "Creamy macaroni salad with vegetables",
      image: saladImages[26],
      ingredients: [
        "2 cups elbow macaroni, cooked",
        "1/2 cup mayonnaise",
        "1/4 cup sour cream or yogurt",
        "1 tablespoon Dijon mustard",
        "1 tablespoon apple cider vinegar",
        "1 teaspoon sugar",
        "1/2 cup celery, finely chopped",
        "1/4 cup red onion, finely chopped",
        "1/2 cup sweet corn, boiled",
        "1/4 cup black olives, sliced",
        "1/4 cup fresh parsley, chopped",
        "Salt to taste",
        "Freshly ground black pepper",
        "Paprika for garnish"
      ],
      steps: [
        "Cook macaroni according to package directions, drain, rinse with cold water.",
        "Allow macaroni to cool completely.",
        "In a large bowl, whisk mayonnaise and sour cream.",
        "Add Dijon mustard, vinegar, sugar, salt, and pepper.",
        "Add cooled macaroni to dressing mixture.",
        "Mix in celery, onion, sweet corn, and olives.",
        "Add chopped parsley and mix well.",
        "Cover and refrigerate for at least 2 hours.",
        "Stir before serving to redistribute dressing.",
        "Taste and adjust seasoning if needed.",
        "Sprinkle with paprika before serving.",
        "Serve chilled.",
        "Great for picnics and potlucks."
      ]
    },
    { 
      id: 28,
      name: "Fattoush Salad",
      tagline: "Lebanese bread salad with sumac dressing",
      image: saladImages[27],
      ingredients: [
        "4 cups romaine lettuce, chopped",
        "2 tomatoes, diced",
        "1 cucumber, diced",
        "1 bell pepper, diced",
        "4 radishes, thinly sliced",
        "4 green onions, chopped",
        "1/2 cup fresh mint leaves, chopped",
        "1/2 cup fresh parsley, chopped",
        "2 pita breads, toasted and broken into pieces",
        "For Dressing:",
        "1/4 cup olive oil",
        "2 tablespoons lemon juice",
        "1 tablespoon pomegranate molasses",
        "1 clove garlic, minced",
        "1 teaspoon sumac",
        "Salt to taste",
        "Freshly ground black pepper"
      ],
      steps: [
        "Toast pita bread until crisp, break into bite-sized pieces.",
        "Wash and prepare all vegetables.",
        "In a large bowl, combine lettuce, tomatoes, cucumber, and bell pepper.",
        "Add radishes, green onions, mint, and parsley.",
        "In a small bowl, whisk all dressing ingredients together.",
        "Pour dressing over salad just before serving.",
        "Add toasted pita pieces and toss gently.",
        "Serve immediately to prevent pita from getting soggy.",
        "Can prepare vegetables ahead, add dressing last.",
        "Sumac adds characteristic tangy flavor.",
        "Garnish with extra sumac if desired.",
        "Traditional Middle Eastern salad."
      ]
    },
    { 
      id: 29,
      name: "Tabbouleh",
      tagline: "Fresh parsley and bulgur salad with lemon",
      image: saladImages[28],
      ingredients: [
        "1 cup fine bulgur wheat",
        "2 cups boiling water",
        "4 cups fresh parsley, finely chopped",
        "1/2 cup fresh mint leaves, finely chopped",
        "4 tomatoes, finely diced",
        "1 cucumber, finely diced",
        "4 green onions, finely chopped",
        "1/4 cup lemon juice",
        "1/4 cup olive oil",
        "Salt to taste",
        "Freshly ground black pepper",
        "1 teaspoon ground cumin",
        "Lettuce leaves for serving"
      ],
      steps: [
        "Place bulgur in a bowl, pour boiling water over it.",
        "Cover and let soak for 30 minutes until tender.",
        "Drain any excess water, fluff with fork.",
        "Finely chop parsley and mint leaves.",
        "Dice tomatoes and cucumber very finely.",
        "Chop green onions finely.",
        "In a large bowl, combine soaked bulgur and chopped herbs.",
        "Add tomatoes, cucumber, and green onions.",
        "In a small bowl, whisk lemon juice and olive oil.",
        "Add salt, pepper, and cumin to dressing.",
        "Pour dressing over salad mixture.",
        "Toss gently to combine all ingredients.",
        "Serve on lettuce leaves or with pita bread."
      ]
    },
    { 
      id: 30,
      name: "Quinoa Salad",
      tagline: "Protein-packed quinoa with fresh vegetables",
      image: saladImages[29],
      ingredients: [
        "1 cup quinoa, rinsed",
        "2 cups water or vegetable broth",
        "1 cucumber, diced",
        "1 bell pepper, diced",
        "1 cup cherry tomatoes, halved",
        "1/2 cup red onion, finely chopped",
        "1/2 cup black olives, sliced",
        "1/2 cup feta cheese, crumbled",
        "1/4 cup fresh parsley, chopped",
        "For Dressing:",
        "1/4 cup olive oil",
        "2 tablespoons lemon juice",
        "1 tablespoon red wine vinegar",
        "1 clove garlic, minced",
        "1 teaspoon dried oregano",
        "Salt and pepper to taste",
        "Optional: 1 cup chickpeas"
      ],
      steps: [
        "Rinse quinoa thoroughly under cold water.",
        "Cook quinoa in water or broth according to package directions.",
        "Fluff cooked quinoa with fork, allow to cool.",
        "Prepare all vegetables as directed.",
        "In a large bowl, combine cooled quinoa and vegetables.",
        "Add olives, feta cheese, and parsley.",
        "Add chickpeas if using for extra protein.",
        "In a small bowl, whisk all dressing ingredients together.",
        "Pour dressing over quinoa mixture.",
        "Toss gently to combine all ingredients.",
        "Cover and refrigerate for at least 1 hour.",
        "Stir before serving.",
        "Can be served cold or at room temperature."
      ]
    },
    { 
      id: 31,
      name: "Chicken Salad",
      tagline: "Creamy chicken salad with grapes and walnuts",
      image: saladImages[30],
      ingredients: [
        "3 cups cooked chicken, shredded or diced",
        "1 cup celery, finely chopped",
        "1/2 cup red onion, finely chopped",
        "1 cup red grapes, halved",
        "1/2 cup walnuts, toasted and chopped",
        "1 cup mayonnaise",
        "1/4 cup sour cream or yogurt",
        "1 tablespoon Dijon mustard",
        "1 tablespoon lemon juice",
        "1 teaspoon honey",
        "Salt to taste",
        "Freshly ground black pepper",
        "1/4 cup fresh dill, chopped",
        "Lettuce leaves for serving"
      ],
      steps: [
        "Cook chicken until done, cool, then shred or dice.",
        "Toast walnuts in dry pan until fragrant, then chop.",
        "Halve seedless grapes.",
        "In a large bowl, combine chicken, celery, onion, grapes, and walnuts.",
        "In a separate bowl, whisk mayonnaise and sour cream.",
        "Add Dijon mustard, lemon juice, honey, salt, and pepper.",
        "Pour dressing over chicken mixture.",
        "Add chopped dill and mix well.",
        "Cover and refrigerate for at least 2 hours.",
        "Serve on bed of lettuce leaves.",
        "Can be served in sandwiches or with crackers.",
        "Adjust mayonnaise amount for desired consistency.",
        "Keeps well for 3-4 days refrigerated."
      ]
    },
    { 
      id: 32,
      name: "Tuna Salad",
      tagline: "Classic tuna salad with eggs and pickles",
      image: saladImages[31],
      ingredients: [
        "2 cans tuna in water, drained",
        "1/2 cup celery, finely chopped",
        "1/4 cup red onion, finely chopped",
        "1/4 cup sweet pickle relish",
        "2 hard-boiled eggs, chopped",
        "1/2 cup mayonnaise",
        "1 tablespoon Dijon mustard",
        "1 tablespoon lemon juice",
        "Salt to taste",
        "Freshly ground black pepper",
        "1/4 cup fresh parsley, chopped",
        "Optional: 1/4 cup chopped nuts or apples",
        "Lettuce leaves or bread for serving"
      ],
      steps: [
        "Drain tuna thoroughly, flake with fork.",
        "Hard boil eggs, cool, peel and chop.",
        "In a large bowl, combine tuna, celery, onion, and relish.",
        "Add chopped hard-boiled eggs.",
        "In a small bowl, whisk mayonnaise and Dijon mustard.",
        "Add lemon juice, salt, and pepper to dressing.",
        "Pour dressing over tuna mixture.",
        "Add chopped parsley and mix well.",
        "Add nuts or apples if using for extra crunch.",
        "Cover and refrigerate for at least 1 hour.",
        "Serve on lettuce leaves or in sandwiches.",
        "Can be used as dip with crackers.",
        "Adjust mayonnaise for desired consistency."
      ]
    },
    { 
      id: 33,
      name: "Shrimp Salad",
      tagline: "Light and creamy shrimp salad with dill",
      image: saladImages[32],
      ingredients: [
        "1 pound cooked shrimp, peeled and deveined",
        "1 cup celery, finely chopped",
        "1/2 cup red onion, finely chopped",
        "1/2 cup red bell pepper, diced",
        "1/4 cup fresh dill, chopped",
        "1/2 cup mayonnaise",
        "1/4 cup sour cream or yogurt",
        "2 tablespoons lemon juice",
        "1 tablespoon Dijon mustard",
        "1 teaspoon Old Bay seasoning",
        "Salt to taste",
        "Freshly ground black pepper",
        "Lettuce leaves for serving",
        "Lemon wedges for garnish"
      ],
      steps: [
        "If using raw shrimp, cook until pink and opaque, then cool.",
        "Chop shrimp into bite-sized pieces if large.",
        "In a large bowl, combine shrimp, celery, onion, and bell pepper.",
        "In a separate bowl, whisk mayonnaise and sour cream.",
        "Add lemon juice, Dijon mustard, and Old Bay seasoning.",
        "Season with salt and pepper to taste.",
        "Pour dressing over shrimp mixture.",
        "Add chopped dill and mix gently.",
        "Cover and refrigerate for at least 1 hour.",
        "Serve on bed of lettuce leaves.",
        "Garnish with lemon wedges.",
        "Can be served in avocado halves.",
        "Best consumed within 2 days."
      ]
    },
    { 
      id: 34,
      name: "Egg Salad",
      tagline: "Classic creamy egg salad with fresh herbs",
      image: saladImages[33],
      ingredients: [
        "8 hard-boiled eggs",
        "1/2 cup mayonnaise",
        "1 tablespoon Dijon mustard",
        "1 tablespoon lemon juice",
        "1/4 cup celery, finely chopped",
        "2 tablespoons red onion, finely chopped",
        "2 tablespoons sweet pickle relish",
        "1 tablespoon fresh dill, chopped",
        "1 tablespoon fresh chives, chopped",
        "Salt to taste",
        "Freshly ground black pepper",
        "Paprika for garnish",
        "Bread or lettuce leaves for serving"
      ],
      steps: [
        "Hard boil eggs, cool completely in ice water.",
        "Peel eggs and chop coarsely.",
        "In a large bowl, combine chopped eggs.",
        "Add celery, onion, and pickle relish.",
        "In a small bowl, whisk mayonnaise and Dijon mustard.",
        "Add lemon juice, salt, and pepper to dressing.",
        "Pour dressing over egg mixture.",
        "Add chopped dill and chives.",
        "Mix gently to combine all ingredients.",
        "Cover and refrigerate for at least 30 minutes.",
        "Serve on bread for sandwiches or with crackers.",
        "Sprinkle with paprika before serving.",
        "Adjust mayonnaise for desired consistency."
      ]
    },
    { 
      id: 35,
      name: "Beetroot Salad",
      tagline: "Roasted beetroot with orange and goat cheese",
      image: saladImages[34],
      ingredients: [
        "4 medium beetroots, boiled or roasted",
        "2 oranges, peeled and segmented",
        "1/2 cup walnuts, toasted and chopped",
        "4 cups mixed salad greens",
        "1/4 cup red onion, thinly sliced",
        "1/2 cup goat cheese or feta cheese, crumbled",
        "For Dressing:",
        "1/4 cup olive oil",
        "2 tablespoons orange juice",
        "1 tablespoon balsamic vinegar",
        "1 teaspoon Dijon mustard",
        "1 teaspoon honey",
        "Salt to taste",
        "Freshly ground black pepper",
        "Fresh mint leaves for garnish"
      ],
      steps: [
        "Boil or roast beetroots until tender, peel and slice.",
        "Toast walnuts in dry pan until fragrant, then chop.",
        "Peel oranges and segment, removing membranes.",
        "Arrange salad greens on serving platter.",
        "Arrange beetroot slices and orange segments over greens.",
        "Sprinkle with toasted walnuts and sliced red onion.",
        "Crumble cheese over salad.",
        "In a small bowl, whisk all dressing ingredients together.",
        "Drizzle dressing over salad just before serving.",
        "Garnish with fresh mint leaves.",
        "Serve immediately.",
        "Beetroots can stain, handle carefully.",
        "Can add roasted beetroot for deeper flavor."
      ]
    },
    { 
      id: 36,
      name: "Avocado Salad",
      tagline: "Fresh avocado with tomato and lime dressing",
      image: saladImages[35],
      ingredients: [
        "2 ripe avocados, diced",
        "2 tomatoes, diced",
        "1 cucumber, diced",
        "1/2 red onion, thinly sliced",
        "1 jalapeño pepper, seeded and finely chopped",
        "1/4 cup fresh coriander leaves, chopped",
        "2 tablespoons lime juice",
        "2 tablespoons olive oil",
        "Salt to taste",
        "Freshly ground black pepper",
        "1 teaspoon cumin powder",
        "Optional: 1 cup corn kernels, cooked",
        "Tortilla chips for serving"
      ],
      steps: [
        "Cut avocados in half, remove pit, dice flesh.",
        "Immediately toss avocado with lime juice to prevent browning.",
        "Dice tomatoes and cucumber.",
        "Thinly slice red onion.",
        "Seed and finely chop jalapeño pepper.",
        "In a large bowl, combine all prepared vegetables.",
        "Add chopped coriander leaves.",
        "In a small bowl, whisk olive oil, remaining lime juice, cumin, salt, and pepper.",
        "Pour dressing over salad mixture.",
        "Gently toss to combine all ingredients.",
        "Add corn kernels if using.",
        "Serve immediately with tortilla chips.",
        "Best consumed fresh as avocados brown quickly."
      ]
    },
    { 
      id: 37,
      name: "Spinach Salad",
      tagline: "Fresh spinach with strawberries and walnuts",
      image: saladImages[36],
      ingredients: [
        "6 cups fresh spinach leaves, washed and dried",
        "1 cup strawberries, sliced",
        "1/2 cup walnuts, toasted and chopped",
        "1/4 cup red onion, thinly sliced",
        "1/2 cup feta cheese or goat cheese, crumbled",
        "For Dressing:",
        "1/4 cup olive oil",
        "2 tablespoons balsamic vinegar",
        "1 tablespoon honey",
        "1 teaspoon Dijon mustard",
        "1 small shallot, minced",
        "Salt to taste",
        "Freshly ground black pepper",
        "Optional: 1 avocado, sliced"
      ],
      steps: [
        "Wash spinach thoroughly, dry completely.",
        "Remove stems if desired, tear into bite-sized pieces.",
        "Slice strawberries.",
        "Toast walnuts in dry pan until fragrant, then chop.",
        "Thinly slice red onion.",
        "In a large bowl, combine spinach, strawberries, walnuts, and onion.",
        "Crumble cheese over salad.",
        "Add avocado slices if using.",
        "In a small bowl, whisk all dressing ingredients together.",
        "Pour dressing over salad just before serving.",
        "Toss gently to coat all ingredients.",
        "Serve immediately.",
        "Dressing can be made ahead and stored.",
        "Add protein like grilled chicken for complete meal."
      ]
    },
    { 
      id: 38,
      name: "Broccoli Salad",
      tagline: "Crunchy broccoli with bacon and cranberries",
      image: saladImages[37],
      ingredients: [
        "4 cups broccoli florets, chopped into bite-sized pieces",
        "1/2 cup red onion, finely chopped",
        "1/2 cup dried cranberries or raisins",
        "1/2 cup sunflower seeds or pumpkin seeds",
        "1/2 cup bacon, cooked and crumbled",
        "1/2 cup cheddar cheese, shredded",
        "For Dressing:",
        "1 cup mayonnaise",
        "2 tablespoons apple cider vinegar",
        "2 tablespoons sugar",
        "Salt to taste",
        "Freshly ground black pepper",
        "Optional: 1/4 cup plain yogurt"
      ],
      steps: [
        "Chop broccoli florets into small, bite-sized pieces.",
        "Finely chop red onion.",
        "Cook bacon until crisp, drain and crumble.",
        "In a large bowl, combine broccoli, onion, cranberries, and seeds.",
        "Add crumbled bacon and shredded cheese.",
        "In a separate bowl, whisk mayonnaise and vinegar.",
        "Add sugar, salt, and pepper to dressing.",
        "Add yogurt if using for lighter dressing.",
        "Pour dressing over broccoli mixture.",
        "Mix thoroughly to coat all ingredients.",
        "Cover and refrigerate for at least 2 hours.",
        "Stir before serving.",
        "Flavors improve with longer refrigeration.",
        "Keeps well for 3-4 days refrigerated."
      ]
    },
    { 
      id: 39,
      name: "Feta Cheese Salad",
      tagline: "Greek-style salad with feta and olives",
      image: saladImages[38],
      ingredients: [
        "4 cups mixed salad greens",
        "1 cup cherry tomatoes, halved",
        "1 cucumber, sliced",
        "1/2 red onion, thinly sliced",
        "1 bell pepper, sliced",
        "1 cup Kalamata olives",
        "200g feta cheese, cubed",
        "For Dressing:",
        "1/4 cup olive oil",
        "2 tablespoons red wine vinegar",
        "1 teaspoon dried oregano",
        "1 clove garlic, minced",
        "1 teaspoon Dijon mustard",
        "Salt to taste",
        "Freshly ground black pepper",
        "Fresh oregano leaves for garnish"
      ],
      steps: [
        "Wash and dry salad greens thoroughly.",
        "Prepare all vegetables as directed.",
        "Cube feta cheese.",
        "In a large salad bowl, combine greens and all vegetables.",
        "Add Kalamata olives and feta cheese cubes.",
        "In a small bowl, whisk olive oil and red wine vinegar.",
        "Add oregano, garlic, Dijon mustard, salt, and pepper.",
        "Whisk dressing until well combined.",
        "Pour dressing over salad just before serving.",
        "Toss gently to coat all ingredients.",
        "Garnish with fresh oregano leaves.",
        "Serve immediately.",
        "Can be served with grilled meat or fish.",
        "Traditional Greek flavors."
      ]
    },
    { 
      id: 40,
      name: "Mediterranean Salad",
      tagline: "Healthy grain salad with Mediterranean flavors",
      image: saladImages[39],
      ingredients: [
        "2 cups cooked quinoa or couscous",
        "1 cup cherry tomatoes, halved",
        "1 cucumber, diced",
        "1 bell pepper, diced",
        "1/2 cup Kalamata olives, sliced",
        "1/2 cup feta cheese, crumbled",
        "1/4 cup red onion, finely chopped",
        "1/4 cup fresh parsley, chopped",
        "1/4 cup fresh mint leaves, chopped",
        "For Dressing:",
        "1/4 cup olive oil",
        "2 tablespoons lemon juice",
        "1 clove garlic, minced",
        "1 teaspoon dried oregano",
        "Salt to taste",
        "Freshly ground black pepper",
        "Optional: 1 cup chickpeas, cooked"
      ],
      steps: [
        "Cook quinoa or couscous according to package directions, cool.",
        "Prepare all vegetables as directed.",
        "Chop fresh herbs finely.",
        "In a large bowl, combine cooled grain and vegetables.",
        "Add olives, feta cheese, and herbs.",
        "Add chickpeas if using for extra protein.",
        "In a small bowl, whisk all dressing ingredients together.",
        "Pour dressing over salad mixture.",
        "Toss gently to combine all ingredients.",
        "Cover and refrigerate for at least 1 hour.",
        "Stir before serving.",
        "Can be served cold or at room temperature.",
        "Makes a complete vegetarian meal.",
        "Flavors improve with time."
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
    if (selectedSalad && currentStep < selectedSalad.steps.length) {
      stopSpeaking();
      speakInstructions(selectedSalad.steps, currentStep);
    }
  };

  const speakPreviousStep = () => {
    if (selectedSalad && currentStep > 1) {
      stopSpeaking();
      speakInstructions(selectedSalad.steps, currentStep - 2);
    }
  };

  const handleSaladSelect = (salad) => {
    setSelectedSalad(salad);
    setShowDetailPanel(true);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const closeDetailPanel = () => {
    stopSpeaking();
    setShowDetailPanel(false);
    setSelectedSalad(null);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="salads-page">
      {/* Header */}
      <header className="salads-header">
        <div className="salads-header-content">
          <h1 className="salads-page-title">Pure & Balanced Bowls</h1>
          <p className="salads-page-description">
            Wholesome, vibrant salads crafted for every palate.
          </p>
        </div>
      </header>

      {/* Salads Grid */}
      <main className="salads-main">
        <div className="salads-grid-section">
          <div className="salads-grid">
            {salads.map(salad => (
              <div 
                key={salad.id} 
                className="salads-technique-card"
                onClick={() => handleSaladSelect(salad)}
              >
                <div 
                  className="salads-card-image"
                  style={{ backgroundImage: `url(${salad.image})` }}
                ></div>
                
                <div className="salads-card-content">
                  <h3 className="salads-card-title">{salad.name}</h3>
                  <p className="salads-card-description">{salad.tagline}</p>
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

      {/* DETAIL MODAL with SELECTED SALAD IMAGE as Background */}
      {showDetailPanel && selectedSalad && (
        <div className="salads-modal-overlay" onClick={closeDetailPanel}>
          <div 
            className="salads-modal" 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url(${selectedSalad.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <button className="salads-modal-close" onClick={closeDetailPanel}>×</button>
            
            <div className="salads-modal-header">
              <div className="salads-modal-title">
                <h2>{selectedSalad.name}</h2>
              </div>
            </div>

            <div className="salads-modal-content">
              {/* COLUMN 1 - INGREDIENTS */}
              <div className="salads-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="salads-ingredients-list">
                  {selectedSalad.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="salads-ingredient-item">
                      <span className="salads-ingredient-bullet">•</span>
                      <span className="salads-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 2 - STEPS TO MAKE */}
              <div className="salads-modal-steps">
                <h3>Steps to Make</h3>
                <div className="salads-steps-list">
                  {selectedSalad.steps.map((step, idx) => (
                    <div key={idx} className="salads-step-item">
                      <span className="salads-step-number">{idx + 1}.</span>
                      <span className="salads-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 3 - VOICE INSTRUCTIONS */}
              <div className="salads-modal-voice-container">
                <div className="voice-panel">
                  <h3><i className="fas fa-volume-up"></i> Voice Instructions</h3>
                  
                  <div className="voice-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${progress}%`}}></div>
                    </div>
                    <div className="progress-info">
                      <span>Step {currentStep} of {selectedSalad.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <div className="voice-controls">
                    <button 
                      className={`voice-main-btn ${isPlaying ? 'stop' : 'play'}`}
                      onClick={() => isPlaying ? stopSpeaking() : speakInstructions(selectedSalad.steps)}
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
                        disabled={currentStep >= selectedSalad.steps.length}
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

export default RecipeSaladsPage;