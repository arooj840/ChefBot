import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeBeveragesPage.css';

const RecipeBeveragesPage = () => {
  const navigate = useNavigate();
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // Beverage images array
  const drinkImages = [
    "https://images.immediate.co.uk/production/volatile/sites/2/2022/11/Karak-Chai-4c79786.jpg?quality=90&resize=708,643", // Chai
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA67YTc0l06oRaiiq3r2rj_EkX24BQ6wnawA&s", // Coffee
    "https://hips.hearstapps.com/hmg-prod/images/hot-chocolate-index-675c61bc88ba1.jpg?crop=0.888550436462608xw:1xh;center,top&resize=1200:*", // Hot Chocolate
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpg8_q-EFr_bVHQl6xF_z81gesPo2FTICcKA&s", // Kashmiri Chai
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5jP4Dd4hpBtcN6k02caLWC5Y67-i5Ps6n2w&s", // Masala Chai
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDvZ6S1Z3mAJLS4FyTYifubK2X_Drus7pPA&s", // Green Tea
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-0E6E74c4SmrE5NEaf-qfDC76-0nJdocOA&s", // Ginger Tea
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6qdXCrxVkRR4riw0gECElqebu14Dc4C-Fw&s", // Cardamom Tea
    "https://www.happyfoodstube.com/wp-content/uploads/2018/07/mint-lemonade-picture.jpg", // Lemonade
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7oMdf9lwoTpPonAf9fTwQLAvgoA2tABDpw&s", // Mango Lassi
    "https://www.cookwithmanali.com/wp-content/uploads/2021/06/Lassi-Recipe.jpg", // Sweet Lassi
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6aY15z_BpfmjNFPCC4m9IqFcs26LZr1ofQ&s", // Salted Lassi
    "https://simply-delicious-food.com/wp-content/uploads/2019/05/home-made-iced-tea-6-2.jpg", // Iced Tea
    "https://deliciousmadeeasy.com/wp-content/uploads/2018/04/chocoholic-cold-brew-coffee-1-of-1-7-scaled.jpg", // Cold Coffee
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ080A9xuw9fjLw89hys9KejF8vN9NexnrO0Q&s", // Falooda
    "https://cdn-abndc.nitrocdn.com/KidXqHvkFKIabnNEJOITpLSJJqajraJA/assets/images/optimized/rev-985b6af/zestysouthindiankitchen.com/wp-content/uploads/2014/01/Sugar-Cane-juice-1.jpg", // Sugarcane Juice
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxQVLxSMgn3Z12Wb7EsEz7KaJeg71TGI_uw&s", // Strawberry Banana Smoothie
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZwXUk0_Oih40zU-mCuUmMJXcLrFRTplS6g&s", // Mango Smoothie
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbdxKtfCuahXnIGHbOUGX9FNpC95H326sTw&s", // Berry Blast Smoothie
    "https://www.lifeisbutadish.com/wp-content/uploads/2016/01/Spinach-Apple-Detox-Smoothie-9-scaled.jpg", // Green Detox Smoothie
    "https://lmld.org/wp-content/uploads/2016/01/Peanut-Butter-Banana-Smoothie-4.jpg", // Peanut Butter Smoothie
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS0d7fz9H2msy0O7RGo70jhcHSde-QlZzAeQ&s", // Chocolate Smoothie
    "https://californiaavocado.com/wp-content/uploads/2020/08/Avocado-Milkshake-1-1.jpg", // Avocado Smoothie
    "https://blogscdn.thehut.net/wp-content/uploads/sites/478/2018/04/18160827/choco-malt-shake_1200x672_acf_cropped_1200x672_acf_cropped_1200x672_acf_cropped_1200x672_acf_cropped.jpg", // Protein Smoothie
    "https://www.sustainablecooks.com/wp-content/uploads/2018/06/Classic-Virgin-Mojito-Recipe-2.jpg", // Virgin Mojito
    "https://houseofnasheats.com/wp-content/uploads/2018/08/Virgin-Pi%C3%B1a-Coladas-Non-Alcoholic-11.jpg", // Pina Colada
    "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/shirleytemple_85097_16x9.jpg", // Shirley Temple
    "https://onesweetappetite.com/wp-content/uploads/2020/06/Fruit-Punch-Recipe-1-1-682x1024.jpg", // Fruit Punch
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9qL9LUWtGsTnEFAuitOnEGe_1DjSviSxUw&s", // Blue Lagoon
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZD1k0LLYQ2l8v1vVUMLjbiTZruDi4hfFvQ&s", // Mango Tango
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87", // Sunrise Mocktail
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8uSFyjO82shcvRr_jacj42YXgpJLAZ2h6Q&s", // Berry Bliss
    "https://www.deliciousmagazine.co.uk/wp-content/uploads/2014/01/Mojito-768x960.jpg", // Mojito
    "https://bakerbynature.com/wp-content/uploads/2021/03/Best-5-Minute-Margarita-Recipe-1-of-1.jpg", // Margarita
    "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-07-pina-colada%2Fpina-colada-177", // Pina Colada Cocktail
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0OmeFh8agV5HV9S1ccykquqOq8f5R9c6Gwg&s", // Mai Tai
    "https://cdn.loveandlemons.com/wp-content/uploads/2022/11/old-fashioned-recipe.jpg", // Old Fashioned
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYbn8HsZHPQ84-p4Y8FENmQ2eQZwY_BGq4Q&s", // Martini
    "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/cosmo-1.jpg", // Cosmopolitan
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdM4VUEI_EFOAPh11RHdhX6Y3g05qxgHdqg&s", // Whiskey Sour
    "https://kitchenflavours.net/wp-content/uploads/2019/05/Rooh-Afza-Lemonade-Fizz.jpg", // Rooh Afza
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFwDT_yBnYlJ0cd3w478u8eWOtCP1fn_HIg&s", // Sharbat-e-Sandal
    "https://static.toiimg.com/thumb/83391949.cms?imgsize=286743&width=800&height=800", // Sattu Sharbat
    "https://sinfullyspicy.com/wp-content/uploads/2012/06/1.jpg", // Jal Jeera
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fjp6VrJ5Y9VSOsOXu78gtj0Gu8f1-jSqAg&s", // Aam Panna
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIsiJ7bnROGPj_MbrbOe2BfYIVxArvP0wPA&s", // Badam Milk
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0l8a9e7AGtMN8_RG4un2b2kggzRuUqDnmrw&s", // Masala Milk
    "https://www.cookwithmanali.com/wp-content/uploads/2015/03/Thandai-Indian-Drink-500x500.jpg" // Thandai
  ];

  // All Beverages Data with Complete Recipes (48 drinks)
  const allDrinks = [
    { 
      id: 1, 
      name: "Chai (Tea)",
      tagline: "Traditional spiced milk tea",
      category: "Hot Drinks",
      image: drinkImages[0],
      ingredients: [
        "2 cups water",
        "2 cups milk",
        "4 teaspoons black tea leaves",
        "4 teaspoons sugar (adjust to taste)",
        "4 green cardamom pods, slightly crushed",
        "1 inch ginger, grated",
        "2-3 cloves (optional)"
      ],
      steps: [
        "In a saucepan, add water and bring it to boil.",
        "Add tea leaves, crushed cardamom, ginger, and cloves.",
        "Let it boil for 2 minutes until tea leaves release their color.",
        "Add milk and bring to boil again.",
        "Lower heat and simmer for 3-4 minutes.",
        "Add sugar and stir until dissolved.",
        "Strain the tea into cups using a strainer.",
        "Serve hot with biscuits or snacks."
      ]
    },
    { 
      id: 2, 
      name: "Coffee",
      tagline: "Rich and aromatic brewed coffee",
      category: "Hot Drinks",
      image: drinkImages[1],
      ingredients: [
        "2 tablespoons coffee powder",
        "2 tablespoons sugar",
        "2 cups water",
        "1 cup milk",
        "1 teaspoon cocoa powder (optional)"
      ],
      steps: [
        "Boil water in a saucepan.",
        "Add coffee powder and sugar to boiling water.",
        "Let it simmer for 5 minutes until strong aroma develops.",
        "Heat milk separately until hot but not boiling.",
        "Mix coffee decoction with hot milk.",
        "Add cocoa powder if using for extra flavor.",
        "Pour into cups and serve immediately.",
        "Enjoy with breakfast or as evening drink."
      ]
    },
    { 
      id: 3, 
      name: "Hot Chocolate",
      tagline: "Creamy and indulgent hot chocolate",
      category: "Hot Drinks",
      image: drinkImages[2],
      ingredients: [
        "2 cups milk",
        "4 tablespoons cocoa powder",
        "4 tablespoons sugar",
        "1/4 cup chocolate chips",
        "1 teaspoon vanilla extract",
        "Whipped cream for topping",
        "Chocolate shavings for garnish"
      ],
      steps: [
        "In a saucepan, heat milk on medium flame.",
        "Add cocoa powder and sugar, whisk until dissolved.",
        "Add chocolate chips and stir continuously.",
        "Cook until chocolate melts completely.",
        "Add vanilla extract and mix well.",
        "Do not let it boil, keep on low heat.",
        "Pour into mugs and top with whipped cream.",
        "Garnish with chocolate shavings and serve hot."
      ]
    },
    { 
      id: 4, 
      name: "Kashmiri Chai",
      tagline: "Pink-hued traditional Kashmiri tea",
      category: "Hot Drinks",
      image: drinkImages[3],
      ingredients: [
        "4 tablespoons Kashmiri tea leaves",
        "8 cups water",
        "1/2 teaspoon baking soda",
        "2 cups milk",
        "1/2 cup sugar",
        "4-5 green cardamom pods",
        "1/4 cup crushed almonds",
        "Pink food color (optional)"
      ],
      steps: [
        "Boil tea leaves in 4 cups water for 15 minutes.",
        "Add baking soda and boil until color changes to red.",
        "Strain the tea concentrate and set aside.",
        "In another pot, boil remaining water with cardamom.",
        "Add tea concentrate and simmer for 10 minutes.",
        "Add milk and sugar, mix well.",
        "Add pink color if using for traditional look.",
        "Serve hot garnished with crushed almonds."
      ]
    },
    { 
      id: 5, 
      name: "Masala Chai",
      tagline: "Spiced Indian tea with aromatic spices",
      category: "Hot Drinks",
      image: drinkImages[4],
      ingredients: [
        "4 cups water",
        "4 cups milk",
        "8 teaspoons black tea leaves",
        "8 teaspoons sugar",
        "1 inch ginger, crushed",
        "4 green cardamom pods",
        "4 cloves",
        "1 cinnamon stick",
        "2 black peppercorns",
        "1 star anise (optional)"
      ],
      steps: [
        "Crush all spices lightly in mortar and pestle.",
        "In saucepan, add water and bring to boil.",
        "Add crushed spices and boil for 5 minutes.",
        "Add tea leaves and boil for 2 more minutes.",
        "Add milk and bring to rolling boil.",
        "Lower heat and simmer for 5 minutes.",
        "Add sugar and stir until dissolved.",
        "Strain and serve hot with snacks."
      ]
    },
    { 
      id: 6, 
      name: "Green Tea",
      tagline: "Light and refreshing antioxidant tea",
      category: "Hot Drinks",
      image: drinkImages[5],
      ingredients: [
        "2 cups water",
        "2 green tea bags or 2 teaspoons loose green tea",
        "1 teaspoon honey (optional)",
        "1 slice lemon",
        "Fresh mint leaves (optional)"
      ],
      steps: [
        "Boil water and let it cool for 2 minutes (80°C).",
        "Place tea bags or leaves in teapot.",
        "Pour hot water over tea and steep for 3 minutes.",
        "Remove tea bags or strain leaves.",
        "Add honey if using and stir well.",
        "Serve in cups with lemon slice.",
        "Garnish with mint leaves for freshness.",
        "Drink without milk for best benefits."
      ]
    },
    { 
      id: 7, 
      name: "Ginger Tea",
      tagline: "Zesty and soothing ginger-infused tea",
      category: "Hot Drinks",
      image: drinkImages[6],
      ingredients: [
        "2 cups water",
        "2 cups milk",
        "4 teaspoons black tea leaves",
        "2 inch ginger, grated",
        "4 teaspoons sugar",
        "4-5 mint leaves (optional)",
        "1 teaspoon lemon juice (optional)"
      ],
      steps: [
        "In saucepan, boil water with grated ginger.",
        "Add tea leaves and boil for 3 minutes.",
        "Add milk and bring to boil.",
        "Simmer for 5 minutes on low heat.",
        "Add sugar and stir until dissolved.",
        "Add mint leaves for extra flavor.",
        "Strain into cups and add lemon juice.",
        "Serve hot for cold relief."
      ]
    },
    { 
      id: 8, 
      name: "Cardamom Tea",
      tagline: "Fragrant tea with green cardamom",
      category: "Hot Drinks",
      image: drinkImages[7],
      ingredients: [
        "2 cups water",
        "2 cups milk",
        "4 teaspoons black tea leaves",
        "6-8 green cardamom pods, crushed",
        "4 teaspoons sugar",
        "Saffron strands (optional)"
      ],
      steps: [
        "Crush cardamom pods to release flavor.",
        "Boil water with crushed cardamom for 5 minutes.",
        "Add tea leaves and boil for 2 minutes.",
        "Add milk and bring to rolling boil.",
        "Lower heat and simmer for 4 minutes.",
        "Add sugar and saffron if using.",
        "Strain into cups using fine strainer.",
        "Serve hot with biscuits or cake."
      ]
    },
    { 
      id: 9, 
      name: "Lemonade",
      tagline: "Classic refreshing lemon drink",
      category: "Cold Drinks",
      image: drinkImages[8],
      ingredients: [
        "4 lemons, juiced (about 1 cup)",
        "1 cup sugar",
        "6 cups cold water",
        "Ice cubes",
        "Fresh mint leaves",
        "Lemon slices for garnish"
      ],
      steps: [
        "Make simple syrup: mix sugar with 1 cup hot water.",
        "Stir until sugar completely dissolves.",
        "Let syrup cool to room temperature.",
        "In pitcher, combine lemon juice and cold water.",
        "Add cooled sugar syrup and mix well.",
        "Add ice cubes and stir.",
        "Garnish with lemon slices and mint.",
        "Serve chilled in tall glasses."
      ]
    },
    { 
      id: 10, 
      name: "Mango Lassi",
      tagline: "Creamy yogurt drink with sweet mango",
      category: "Cold Drinks",
      image: drinkImages[9],
      ingredients: [
        "2 ripe mangoes, peeled and chopped",
        "2 cups plain yogurt",
        "1 cup cold milk",
        "4 tablespoons sugar or honey",
        "1/2 teaspoon cardamom powder",
        "Ice cubes",
        "Chopped pistachios for garnish"
      ],
      steps: [
        "Peel and chop ripe mangoes into pieces.",
        "In blender, add mango pieces and yogurt.",
        "Add milk, sugar, and cardamom powder.",
        "Blend until smooth and creamy.",
        "Add ice cubes and blend briefly.",
        "Taste and adjust sweetness if needed.",
        "Pour into tall glasses.",
        "Garnish with chopped pistachios and serve."
      ]
    },
    { 
      id: 11, 
      name: "Sweet Lassi",
      tagline: "Traditional sweet yogurt drink",
      category: "Cold Drinks",
      image: drinkImages[10],
      ingredients: [
        "3 cups plain yogurt",
        "1 cup cold water",
        "6 tablespoons sugar",
        "1/2 teaspoon cardamom powder",
        "Ice cubes",
        "Rose water (optional)",
        "Saffron strands for garnish"
      ],
      steps: [
        "In blender, combine yogurt and cold water.",
        "Add sugar and cardamom powder.",
        "Blend until smooth and frothy.",
        "Add ice cubes and blend for 30 seconds.",
        "Add rose water if using for fragrance.",
        "Pour into serving glasses.",
        "Soak saffron in little milk for garnish.",
        "Drizzle saffron milk on top and serve cold."
      ]
    },
    { 
      id: 12, 
      name: "Salted Lassi",
      tagline: "Savory yogurt drink with roasted cumin",
      category: "Cold Drinks",
      image: drinkImages[11],
      ingredients: [
        "3 cups plain yogurt",
        "1 cup cold water",
        "1 teaspoon salt",
        "1/2 teaspoon roasted cumin powder",
        "Ice cubes",
        "Fresh mint leaves",
        "Black salt (optional)"
      ],
      steps: [
        "Combine yogurt and water in blender.",
        "Add salt and blend until smooth.",
        "Add ice cubes and blend briefly.",
        "Pour into tall glasses.",
        "Sprinkle roasted cumin powder on top.",
        "Garnish with fresh mint leaves.",
        "Add pinch of black salt if using.",
        "Serve chilled as refreshing drink."
      ]
    },
    { 
      id: 13, 
      name: "Iced Tea",
      tagline: "Chilled black tea with lemon",
      category: "Cold Drinks",
      image: drinkImages[12],
      ingredients: [
        "4 black tea bags",
        "4 cups boiling water",
        "1/2 cup sugar",
        "4 cups cold water",
        "Ice cubes",
        "Lemon slices",
        "Fresh mint leaves"
      ],
      steps: [
        "Steep tea bags in boiling water for 5 minutes.",
        "Remove tea bags and let tea cool.",
        "Make simple syrup: dissolve sugar in 1/2 cup hot water.",
        "Mix cooled tea with cold water.",
        "Add sugar syrup and stir well.",
        "Chill in refrigerator for 1 hour.",
        "Serve over ice cubes in tall glasses.",
        "Garnish with lemon slices and mint."
      ]
    },
    { 
      id: 14, 
      name: "Cold Coffee",
      tagline: "Frothy chilled coffee with ice cream",
      category: "Cold Drinks",
      image: drinkImages[13],
      ingredients: [
        "4 tablespoons instant coffee",
        "4 tablespoons sugar",
        "4 cups cold milk",
        "Ice cubes",
        "2 scoops vanilla ice cream",
        "Chocolate syrup",
        "Whipped cream for topping"
      ],
      steps: [
        "Mix coffee powder with 2 tablespoons hot water.",
        "Add sugar and stir until dissolved.",
        "In blender, combine coffee mixture and milk.",
        "Add ice cubes and blend until frothy.",
        "Pour into tall glasses.",
        "Add scoop of vanilla ice cream.",
        "Drizzle chocolate syrup on top.",
        "Top with whipped cream and serve."
      ]
    },
    { 
      id: 15, 
      name: "Falooda",
      tagline: "Layered dessert drink with ice cream",
      category: "Cold Drinks",
      image: drinkImages[14],
      ingredients: [
        "1/2 cup falooda seeds (sabja)",
        "1/2 cup cooked vermicelli",
        "4 cups milk, chilled",
        "1/2 cup rose syrup",
        "4 scoops vanilla ice cream",
        "1/4 cup chopped mixed nuts",
        "1/4 cup basil seeds soaked",
        "Jelly cubes (optional)"
      ],
      steps: [
        "Soak falooda seeds in water for 30 minutes.",
        "Cook vermicelli according to package instructions.",
        "In tall glasses, add soaked falooda seeds.",
        "Add layer of cooked vermicelli.",
        "Pour chilled milk to fill half the glass.",
        "Add 2 tablespoons rose syrup in each.",
        "Add scoop of vanilla ice cream.",
        "Garnish with nuts and serve immediately."
      ]
    },
    { 
      id: 16, 
      name: "Sugarcane Juice",
      tagline: "Fresh and sweet sugarcane extract",
      category: "Cold Drinks",
      image: drinkImages[15],
      ingredients: [
        "4-5 sugarcane sticks",
        "1 inch ginger",
        "4-5 mint leaves",
        "1 lemon, juiced",
        "Black salt to taste",
        "Ice cubes",
        "Lemon slices for garnish"
      ],
      steps: [
        "Peel sugarcane and cut into small pieces.",
        "Run sugarcane through juicer extractor.",
        "Add ginger and mint while juicing.",
        "Collect juice in large pitcher.",
        "Add lemon juice and black salt.",
        "Stir well and chill in refrigerator.",
        "Serve over ice cubes in glasses.",
        "Garnish with lemon slices."
      ]
    },
    { 
      id: 17, 
      name: "Strawberry Banana Smoothie",
      tagline: "Creamy blend of berries and banana",
      category: "Smoothies",
      image: drinkImages[16],
      ingredients: [
        "1 cup strawberries, hulled",
        "1 ripe banana",
        "1 cup yogurt",
        "1/2 cup milk",
        "2 tablespoons honey",
        "1/2 cup ice cubes",
        "Fresh strawberries for garnish"
      ],
      steps: [
        "Wash and hull fresh strawberries.",
        "Peel and slice ripe banana.",
        "In blender, combine strawberries and banana.",
        "Add yogurt, milk, and honey.",
        "Add ice cubes and blend until smooth.",
        "Taste and adjust sweetness if needed.",
        "Pour into serving glasses.",
        "Garnish with fresh strawberry slices."
      ]
    },
    { 
      id: 18, 
      name: "Mango Smoothie",
      tagline: "Tropical mango and yogurt blend",
      category: "Smoothies",
      image: drinkImages[17],
      ingredients: [
        "2 ripe mangoes, peeled and chopped",
        "1 cup plain yogurt",
        "1/2 cup orange juice",
        "2 tablespoons honey",
        "1/2 teaspoon cardamom powder",
        "Ice cubes",
        "Mint leaves for garnish"
      ],
      steps: [
        "Peel and chop ripe mangoes into chunks.",
        "In blender, add mango chunks and yogurt.",
        "Add orange juice and honey.",
        "Add cardamom powder and ice cubes.",
        "Blend until smooth and creamy.",
        "Pour into tall glasses.",
        "Garnish with fresh mint leaves.",
        "Serve immediately for best flavor."
      ]
    },
    { 
      id: 19, 
      name: "Berry Blast Smoothie",
      tagline: "Mixed berry antioxidant smoothie",
      category: "Smoothies",
      image: drinkImages[18],
      ingredients: [
        "1 cup mixed berries (strawberries, blueberries, raspberries)",
        "1 banana",
        "1 cup Greek yogurt",
        "1/2 cup almond milk",
        "1 tablespoon chia seeds",
        "2 tablespoons honey",
        "Ice cubes",
        "Fresh berries for garnish"
      ],
      steps: [
        "Wash and prepare all berries.",
        "Peel and slice banana.",
        "In blender, combine berries and banana.",
        "Add Greek yogurt and almond milk.",
        "Add chia seeds and honey.",
        "Add ice cubes and blend until smooth.",
        "Pour into glasses and let sit for 5 minutes.",
        "Garnish with fresh berries and serve."
      ]
    },
    { 
      id: 20, 
      name: "Green Detox Smoothie",
      tagline: "Healthy green vegetable smoothie",
      category: "Smoothies",
      image: drinkImages[19],
      ingredients: [
        "1 cup spinach leaves",
        "1 green apple, chopped",
        "1/2 cucumber, peeled",
        "1 banana",
        "1 tablespoon lemon juice",
        "1 cup coconut water",
        "1 tablespoon honey",
        "Ice cubes"
      ],
      steps: [
        "Wash spinach leaves thoroughly.",
        "Chop green apple and peel cucumber.",
        "Peel and slice banana.",
        "In blender, add spinach as base.",
        "Add apple, cucumber, and banana.",
        "Add lemon juice and coconut water.",
        "Add honey and ice cubes.",
        "Blend until smooth and serve immediately."
      ]
    },
    { 
      id: 21, 
      name: "Peanut Butter Smoothie",
      tagline: "Protein-packed peanut butter blend",
      category: "Smoothies",
      image: drinkImages[20],
      ingredients: [
        "2 bananas",
        "3 tablespoons peanut butter",
        "2 cups milk",
        "2 tablespoons honey",
        "1/2 teaspoon cinnamon powder",
        "Ice cubes",
        "Chopped peanuts for garnish"
      ],
      steps: [
        "Peel and slice ripe bananas.",
        "In blender, combine bananas and peanut butter.",
        "Add milk and honey.",
        "Add cinnamon powder and ice cubes.",
        "Blend until smooth and creamy.",
        "Taste and adjust sweetness if needed.",
        "Pour into serving glasses.",
        "Garnish with chopped peanuts."
      ]
    },
    { 
      id: 22, 
      name: "Chocolate Smoothie",
      tagline: "Rich chocolate milkshake",
      category: "Smoothies",
      image: drinkImages[21],
      ingredients: [
        "2 bananas",
        "3 tablespoons cocoa powder",
        "2 cups milk",
        "2 tablespoons honey",
        "1/2 teaspoon vanilla extract",
        "Ice cubes",
        "Chocolate shavings for topping",
        "Whipped cream (optional)"
      ],
      steps: [
        "Peel and slice ripe bananas.",
        "In blender, combine bananas and cocoa powder.",
        "Add milk, honey, and vanilla extract.",
        "Add ice cubes and blend until smooth.",
        "Pour into tall glasses.",
        "Top with whipped cream if using.",
        "Sprinkle chocolate shavings on top.",
        "Serve immediately for best taste."
      ]
    },
    { 
      id: 23, 
      name: "Avocado Smoothie",
      tagline: "Creamy and nutritious avocado drink",
      category: "Smoothies",
      image: drinkImages[22],
      ingredients: [
        "1 ripe avocado",
        "1 banana",
        "1 cup milk",
        "2 tablespoons honey",
        "1 tablespoon lime juice",
        "Ice cubes",
        "Mint leaves for garnish"
      ],
      steps: [
        "Cut avocado, remove pit and scoop flesh.",
        "Peel and slice banana.",
        "In blender, combine avocado and banana.",
        "Add milk, honey, and lime juice.",
        "Add ice cubes and blend until creamy.",
        "Pour into serving glasses.",
        "Garnish with fresh mint leaves.",
        "Serve immediately as healthy breakfast."
      ]
    },
    { 
      id: 24, 
      name: "Protein Power Smoothie",
      tagline: "Post-workout protein shake",
      category: "Smoothies",
      image: drinkImages[23],
      ingredients: [
        "1 banana",
        "1 cup Greek yogurt",
        "1 cup milk",
        "2 tablespoons protein powder",
        "1 tablespoon almond butter",
        "1 tablespoon flax seeds",
        "Ice cubes",
        "Sliced almonds for garnish"
      ],
      steps: [
        "Peel and slice banana.",
        "In blender, combine banana and Greek yogurt.",
        "Add milk and protein powder.",
        "Add almond butter and flax seeds.",
        "Add ice cubes and blend until smooth.",
        "Pour into tall glasses.",
        "Garnish with sliced almonds.",
        "Enjoy as post-workout recovery drink."
      ]
    },
    { 
      id: 25, 
      name: "Virgin Mojito",
      tagline: "Non-alcoholic mint and lime refresher",
      category: "Mocktails",
      image: drinkImages[24],
      ingredients: [
        "10-12 fresh mint leaves",
        "2 limes, cut into wedges",
        "4 tablespoons sugar",
        "Ice cubes",
        "Soda water",
        "Fresh mint sprigs for garnish",
        "Lime slices for garnish"
      ],
      steps: [
        "In tall glass, muddle mint leaves with lime wedges.",
        "Add sugar and muddle until sugar dissolves.",
        "Fill glass with ice cubes.",
        "Top up with chilled soda water.",
        "Stir gently to mix all ingredients.",
        "Garnish with fresh mint sprig.",
        "Add lime slice on rim of glass.",
        "Serve immediately with straw."
      ]
    },
    { 
      id: 26, 
      name: "Pina Colada (Non-Alcoholic)",
      tagline: "Tropical pineapple and coconut drink",
      category: "Mocktails",
      image: drinkImages[25],
      ingredients: [
        "2 cups pineapple juice",
        "1 cup coconut cream",
        "1 cup crushed ice",
        "2 tablespoons sugar syrup",
        "Pineapple slices for garnish",
        "Maraschino cherries",
        "Umbrella for decoration"
      ],
      steps: [
        "In blender, combine pineapple juice and coconut cream.",
        "Add crushed ice and sugar syrup.",
        "Blend until smooth and creamy.",
        "Pour into hurricane glasses.",
        "Garnish with pineapple slice on rim.",
        "Add maraschino cherry on top.",
        "Insert cocktail umbrella for fun.",
        "Serve immediately while frothy."
      ]
    },
    { 
      id: 27, 
      name: "Shirley Temple",
      tagline: "Sweet non-alcoholic mocktail",
      category: "Mocktails",
      image: drinkImages[26],
      ingredients: [
        "1 cup ginger ale",
        "1/2 cup lemon-lime soda",
        "1 tablespoon grenadine syrup",
        "Ice cubes",
        "Maraschino cherries",
        "Orange slice for garnish",
        "Lemon slice for garnish"
      ],
      steps: [
        "Fill tall glass with ice cubes.",
        "Pour ginger ale over ice.",
        "Add lemon-lime soda gently.",
        "Slowly pour grenadine syrup.",
        "Do not stir to create layers.",
        "Garnish with maraschino cherries.",
        "Add orange and lemon slices.",
        "Serve with straw and stirrer."
      ]
    },
    { 
      id: 28, 
      name: "Fruit Punch",
      tagline: "Colorful mixed fruit beverage",
      category: "Mocktails",
      image: drinkImages[27],
      ingredients: [
        "2 cups orange juice",
        "1 cup pineapple juice",
        "1 cup cranberry juice",
        "1 lemon, juiced",
        "1/4 cup sugar syrup",
        "Ice cubes",
        "Mixed fruit slices",
        "Fresh mint leaves"
      ],
      steps: [
        "In large pitcher, combine all juices.",
        "Add lemon juice and sugar syrup.",
        "Stir well until completely mixed.",
        "Chill in refrigerator for 1 hour.",
        "Add ice cubes to serving glasses.",
        "Pour fruit punch over ice.",
        "Garnish with mixed fruit slices.",
        "Add mint leaves and serve cold."
      ]
    },
    { 
      id: 29, 
      name: "Blue Lagoon",
      tagline: "Vibrant blue citrus mocktail",
      category: "Mocktails",
      image: drinkImages[28],
      ingredients: [
        "1 cup lemonade",
        "1/2 cup blue curacao syrup",
        "1/2 cup soda water",
        "Ice cubes",
        "Lemon slices",
        "Maraschino cherries",
        "Sugar rim (optional)"
      ],
      steps: [
        "If desired, rim glass with sugar.",
        "Fill glass with ice cubes.",
        "Pour lemonade over ice.",
        "Add blue curacao syrup slowly.",
        "Top with soda water gently.",
        "Garnish with lemon slice.",
        "Add maraschino cherry on top.",
        "Serve with blue straw for effect."
      ]
    },
    { 
      id: 30, 
      name: "Mango Tango",
      tagline: "Tropical mango mocktail",
      category: "Mocktails",
      image: drinkImages[29],
      ingredients: [
        "1 cup mango juice",
        "1/2 cup orange juice",
        "1/4 cup pineapple juice",
        "1 tablespoon lime juice",
        "Ice cubes",
        "Mango slices for garnish",
        "Fresh mint sprig"
      ],
      steps: [
        "In shaker, combine all fruit juices.",
        "Add lime juice and ice cubes.",
        "Shake well for 30 seconds.",
        "Strain into chilled cocktail glass.",
        "Garnish with fresh mango slice.",
        "Add mint sprig for freshness.",
        "Serve immediately while cold.",
        "Perfect for summer parties."
      ]
    },
    { 
      id: 31, 
      name: "Sunrise Mocktail",
      tagline: "Beautiful layered orange drink",
      category: "Mocktails",
      image: drinkImages[30],
      ingredients: [
        "1 cup orange juice",
        "2 tablespoons grenadine syrup",
        "Ice cubes",
        "Orange slice for garnish",
        "Maraschino cherry",
        "Umbrella for decoration"
      ],
      steps: [
        "Fill tall glass with ice cubes.",
        "Pour orange juice over ice.",
        "Slowly pour grenadine down side.",
        "Let it settle at bottom for sunrise effect.",
        "Do not stir to maintain layers.",
        "Garnish with orange slice on rim.",
        "Add cherry and umbrella.",
        "Serve with long spoon for mixing."
      ]
    },
    { 
      id: 32, 
      name: "Berry Bliss",
      tagline: "Mixed berry refreshing cooler",
      category: "Mocktails",
      image: drinkImages[31],
      ingredients: [
        "1/2 cup mixed berry puree",
        "1/2 cup cranberry juice",
        "1/2 cup soda water",
        "1 tablespoon lime juice",
        "Ice cubes",
        "Fresh berries for garnish",
        "Mint leaves"
      ],
      steps: [
        "Make berry puree by blending fresh berries.",
        "Strain puree to remove seeds.",
        "In glass, add berry puree first.",
        "Add ice cubes to fill glass.",
        "Pour cranberry juice over ice.",
        "Top with soda water gently.",
        "Add lime juice and stir lightly.",
        "Garnish with fresh berries and mint."
      ]
    },
    { 
      id: 33, 
      name: "Mojito",
      tagline: "Classic Cuban mint cocktail",
      category: "Cocktails",
      image: drinkImages[32],
      ingredients: [
        "10-12 fresh mint leaves",
        "2 limes, cut into wedges",
        "2 tablespoons sugar",
        "2 ounces white rum",
        "Ice cubes",
        "Soda water",
        "Mint sprig for garnish",
        "Lime wheel for garnish"
      ],
      steps: [
        "In glass, muddle mint leaves with lime wedges.",
        "Add sugar and muddle until dissolved.",
        "Add white rum and stir well.",
        "Fill glass with crushed ice.",
        "Top with soda water and stir gently.",
        "Garnish with mint sprig and lime wheel.",
        "Serve with straw and enjoy responsibly.",
        "Perfect summer cocktail."
      ]
    },
    { 
      id: 34, 
      name: "Margarita",
      tagline: "Classic tequila lime cocktail",
      category: "Cocktails",
      image: drinkImages[33],
      ingredients: [
        "2 ounces tequila",
        "1 ounce lime juice",
        "1 ounce triple sec",
        "1 tablespoon simple syrup",
        "Ice cubes",
        "Salt for rim",
        "Lime wedge for garnish"
      ],
      steps: [
        "Rim glass with salt by rubbing lime.",
        "In shaker, combine tequila and lime juice.",
        "Add triple sec and simple syrup.",
        "Add ice and shake vigorously.",
        "Strain into prepared glass.",
        "Add fresh ice cubes if desired.",
        "Garnish with lime wedge on rim.",
        "Serve immediately while cold."
      ]
    },
    { 
      id: 35, 
      name: "Pina Colada",
      tagline: "Creamy tropical coconut cocktail",
      category: "Cocktails",
      image: drinkImages[34],
      ingredients: [
        "2 ounces white rum",
        "3 ounces pineapple juice",
        "1 ounce coconut cream",
        "1 cup crushed ice",
        "Pineapple slice for garnish",
        "Maraschino cherry",
        "Umbrella for decoration"
      ],
      steps: [
        "In blender, combine rum and pineapple juice.",
        "Add coconut cream and crushed ice.",
        "Blend until smooth and creamy.",
        "Pour into hurricane glass.",
        "Garnish with pineapple slice.",
        "Add cherry on top.",
        "Insert cocktail umbrella.",
        "Serve with straw and enjoy."
      ]
    },
    { 
      id: 36, 
      name: "Mai Tai",
      tagline: "Tropical rum cocktail",
      category: "Cocktails",
      image: drinkImages[35],
      ingredients: [
        "2 ounces dark rum",
        "1 ounce lime juice",
        "1/2 ounce orange curaçao",
        "1/2 ounce orgeat syrup",
        "Ice cubes",
        "Mint sprig for garnish",
        "Lime wheel for garnish"
      ],
      steps: [
        "In shaker, combine dark rum and lime juice.",
        "Add orange curaçao and orgeat syrup.",
        "Add ice and shake for 15 seconds.",
        "Strain into rocks glass with ice.",
        "Garnish with mint sprig.",
        "Add lime wheel for decoration.",
        "Serve with cocktail stirrer.",
        "Enjoy tropical flavors."
      ]
    },
    { 
      id: 37, 
      name: "Old Fashioned",
      tagline: "Classic whiskey cocktail",
      category: "Cocktails",
      image: drinkImages[36],
      ingredients: [
        "2 ounces bourbon whiskey",
        "1 sugar cube",
        "2 dashes Angostura bitters",
        "Orange peel",
        "Ice cubes",
        "Maraschino cherry (optional)"
      ],
      steps: [
        "Place sugar cube in old fashioned glass.",
        "Add bitters directly onto sugar cube.",
        "Muddle until sugar dissolves.",
        "Add bourbon whiskey and stir.",
        "Add large ice cube or sphere.",
        "Express orange peel over drink.",
        "Rub rim with orange peel and drop in.",
        "Add cherry if desired and serve."
      ]
    },
    { 
      id: 38, 
      name: "Martini",
      tagline: "Elegant gin and vermouth cocktail",
      category: "Cocktails",
      image: drinkImages[37],
      ingredients: [
        "2 1/2 ounces gin",
        "1/2 ounce dry vermouth",
        "Ice cubes",
        "Lemon twist or olive for garnish",
        "Cocktail pick"
      ],
      steps: [
        "Chill martini glass in freezer.",
        "In mixing glass, combine gin and vermouth.",
        "Add ice cubes and stir for 30 seconds.",
        "Strain into chilled martini glass.",
        "For lemon twist: express oil over drink.",
        "For olive: skewer on cocktail pick.",
        "Place garnish in glass.",
        "Serve immediately while very cold."
      ]
    },
    { 
      id: 39, 
      name: "Cosmopolitan",
      tagline: "Fashionable cranberry vodka cocktail",
      category: "Cocktails",
      image: drinkImages[38],
      ingredients: [
        "1 1/2 ounces vodka",
        "1 ounce cranberry juice",
        "1/2 ounce lime juice",
        "1/2 ounce triple sec",
        "Ice cubes",
        "Lime wheel for garnish",
        "Cocktail shaker"
      ],
      steps: [
        "Chill cocktail glass with ice.",
        "In shaker, combine vodka and cranberry juice.",
        "Add lime juice and triple sec.",
        "Add ice and shake vigorously.",
        "Discard ice from chilled glass.",
        "Strain cocktail into glass.",
        "Garnish with lime wheel on rim.",
        "Serve sophisticated and elegant."
      ]
    },
    { 
      id: 40, 
      name: "Whiskey Sour",
      tagline: "Tangy whiskey with lemon",
      category: "Cocktails",
      image: drinkImages[39],
      ingredients: [
        "2 ounces whiskey",
        "3/4 ounce lemon juice",
        "3/4 ounce simple syrup",
        "Ice cubes",
        "Lemon slice for garnish",
        "Maraschino cherry",
        "Egg white (optional)"
      ],
      steps: [
        "In shaker, combine whiskey and lemon juice.",
        "Add simple syrup and ice cubes.",
        "For frothy version: add egg white.",
        "Shake vigorously for 15-20 seconds.",
        "Strain into rocks glass with ice.",
        "Garnish with lemon slice and cherry.",
        "Serve with cocktail straw.",
        "Classic whiskey cocktail done right."
      ]
    },
    { 
      id: 41, 
      name: "Rooh Afza",
      tagline: "Traditional rose-flavored drink",
      category: "Traditional Beverages",
      image: drinkImages[40],
      ingredients: [
        "4 tablespoons Rooh Afza syrup",
        "4 cups chilled milk or water",
        "Ice cubes",
        "2 tablespoons chopped mixed nuts",
        "1 tablespoon basil seeds (optional)",
        "Rose petals for garnish"
      ],
      steps: [
        "In glass, add Rooh Afza syrup.",
        "Add chilled milk or water as preferred.",
        "Stir well until syrup dissolves completely.",
        "Add ice cubes to chill further.",
        "Soak basil seeds in water if using.",
        "Add soaked basil seeds to drink.",
        "Garnish with chopped nuts and rose petals.",
        "Serve immediately for traditional taste."
      ]
    },
    { 
      id: 42, 
      name: "Sharbat-e-Sandal",
      tagline: "Cooling sandalwood summer drink",
      category: "Traditional Beverages",
      image: drinkImages[41],
      ingredients: [
        "2 teaspoons sandalwood powder",
        "4 cups water",
        "1 cup sugar",
        "1 tablespoon lemon juice",
        "Ice cubes",
        "Rose water for flavor",
        "Pistachios for garnish"
      ],
      steps: [
        "Make sugar syrup by dissolving sugar in water.",
        "Add sandalwood powder to syrup.",
        "Cook on low heat for 10 minutes.",
        "Strain through muslin cloth.",
        "Add lemon juice and rose water.",
        "Chill in refrigerator for 2 hours.",
        "Serve over ice cubes in glasses.",
        "Garnish with crushed pistachios."
      ]
    },
    { 
      id: 43, 
      name: "Sattu Sharbat",
      tagline: "Nutritious roasted gram flour drink",
      category: "Traditional Beverages",
      image: drinkImages[42],
      ingredients: [
        "1/2 cup sattu flour",
        "4 cups cold water",
        "2 tablespoons lemon juice",
        "1 teaspoon roasted cumin powder",
        "Black salt to taste",
        "Ice cubes",
        "Fresh mint leaves"
      ],
      steps: [
        "In pitcher, mix sattu flour with little water.",
        "Make smooth paste without lumps.",
        "Add remaining water and mix well.",
        "Add lemon juice and black salt.",
        "Add roasted cumin powder and stir.",
        "Chill in refrigerator for 30 minutes.",
        "Serve over ice cubes in glasses.",
        "Garnish with fresh mint leaves."
      ]
    },
    { 
      id: 44, 
      name: "Jal Jeera",
      tagline: "Spicy Indian cumin cooler",
      category: "Traditional Beverages",
      image: drinkImages[43],
      ingredients: [
        "1/4 cup mint leaves",
        "1/4 cup coriander leaves",
        "1 tablespoon cumin seeds",
        "1 tablespoon black salt",
        "1 tablespoon lemon juice",
        "4 cups water",
        "Ice cubes",
        "Cumin powder for garnish"
      ],
      steps: [
        "Dry roast cumin seeds until fragrant.",
        "Grind roasted cumin with mint and coriander.",
        "Mix paste with water in pitcher.",
        "Add black salt and lemon juice.",
        "Stir well and refrigerate for 1 hour.",
        "Strain before serving if desired.",
        "Serve over ice cubes in glasses.",
        "Sprinkle cumin powder on top."
      ]
    },
    { 
      id: 45, 
      name: "Aam Panna",
      tagline: "Raw mango summer cooler",
      category: "Traditional Beverages",
      image: drinkImages[44],
      ingredients: [
        "2 raw mangoes",
        "1/2 cup sugar",
        "1 teaspoon roasted cumin powder",
        "1/2 teaspoon black salt",
        "4 cups water",
        "Ice cubes",
        "Fresh mint leaves"
      ],
      steps: [
        "Pressure cook raw mangoes until soft.",
        "Peel and scoop pulp from mangoes.",
        "Blend pulp with sugar and water.",
        "Strain to remove any fibers.",
        "Add roasted cumin and black salt.",
        "Chill in refrigerator for 2 hours.",
        "Serve over ice cubes in glasses.",
        "Garnish with fresh mint leaves."
      ]
    },
    { 
      id: 46, 
      name: "Badam Milk",
      tagline: "Rich almond-flavored milk",
      category: "Traditional Beverages",
      image: drinkImages[45],
      ingredients: [
        "1/2 cup almonds, soaked overnight",
        "4 cups milk",
        "4-5 saffron strands",
        "4 cardamom pods, crushed",
        "4 tablespoons sugar",
        "Chopped pistachios for garnish"
      ],
      steps: [
        "Peel soaked almonds after overnight soaking.",
        "Blend almonds with little milk to paste.",
        "Heat remaining milk in saucepan.",
        "Add almond paste and stir continuously.",
        "Add crushed cardamom and saffron.",
        "Add sugar and cook for 10 minutes.",
        "Serve hot or chilled as preferred.",
        "Garnish with chopped pistachios."
      ]
    },
    { 
      id: 47, 
      name: "Masala Milk",
      tagline: "Spiced warm milk",
      category: "Traditional Beverages",
      image: drinkImages[46],
      ingredients: [
        "4 cups milk",
        "2 tablespoons sugar",
        "1/2 teaspoon cardamom powder",
        "1/4 teaspoon nutmeg powder",
        "1/4 teaspoon dry ginger powder",
        "Saffron strands (optional)",
        "Chopped nuts for garnish"
      ],
      steps: [
        "Heat milk in heavy-bottomed pan.",
        "Bring to boil and then lower heat.",
        "Simmer for 10 minutes to reduce slightly.",
        "Add sugar and stir until dissolved.",
        "Add all spice powders and mix well.",
        "Add saffron if using for color.",
        "Serve hot in mugs or glasses.",
        "Garnish with chopped nuts on top."
      ]
    },
    { 
      id: 48, 
      name: "Thandai",
      tagline: "Festive spiced milk drink",
      category: "Traditional Beverages",
      image: drinkImages[47],
      ingredients: [
        "1/2 cup almonds",
        "2 tablespoons poppy seeds",
        "2 tablespoons watermelon seeds",
        "1 tablespoon fennel seeds",
        "10-12 black peppercorns",
        "4 cups milk",
        "1/2 cup sugar",
        "Rose water for flavor"
      ],
      steps: [
        "Soak all nuts and seeds overnight.",
        "Drain water and grind to fine paste.",
        "Add little milk while grinding.",
        "Strain paste through muslin cloth.",
        "Mix strained paste with remaining milk.",
        "Add sugar and rose water.",
        "Chill in refrigerator for 4 hours.",
        "Serve cold garnished with rose petals."
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
    if (selectedDrink && currentStep < selectedDrink.steps.length) {
      stopSpeaking();
      speakInstructions(selectedDrink.steps, currentStep);
    }
  };

  const speakPreviousStep = () => {
    if (selectedDrink && currentStep > 1) {
      stopSpeaking();
      speakInstructions(selectedDrink.steps, currentStep - 2);
    }
  };

  const handleDrinkSelect = (drink) => {
    setSelectedDrink(drink);
    setShowDetailPanel(true);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const closeDetailPanel = () => {
    stopSpeaking();
    setShowDetailPanel(false);
    setSelectedDrink(null);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="beverages-page">
      {/* Header */}
      <header className="beverages-header">
        <div className="beverages-header-content">
          <h1 className="beverages-page-title">Beverage Collection</h1>
          <p className="beverages-page-description">
            A curated selection of refreshing drinks from around the world.
          </p>
        </div>
      </header>

      {/* Beverages Grid */}
      <main className="beverages-main">
        <div className="beverages-grid-section">
          <div className="beverages-grid">
            {allDrinks.map(drink => (
              <div 
                key={drink.id} 
                className="beverages-technique-card"
                onClick={() => handleDrinkSelect(drink)}
              >
                <div 
                  className="beverages-card-image"
                  style={{ backgroundImage: `url(${drink.image})` }}
                ></div>
                
                <div className="beverages-card-content">
                  <h3 className="beverages-card-title">{drink.name}</h3>
                  <p className="beverages-card-description">{drink.tagline}</p>
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

      {/* DETAIL MODAL with SELECTED DRINK IMAGE as Background */}
      {showDetailPanel && selectedDrink && (
        <div className="beverages-modal-overlay" onClick={closeDetailPanel}>
          <div 
            className="beverages-modal" 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url(${selectedDrink.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <button className="beverages-modal-close" onClick={closeDetailPanel}>×</button>
            
            <div className="beverages-modal-header">
              <div className="beverages-modal-title">
                <h2>{selectedDrink.name}</h2>
              </div>
            </div>

            <div className="beverages-modal-content">
              {/* COLUMN 1 - INGREDIENTS */}
              <div className="beverages-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="beverages-ingredients-list">
                  {selectedDrink.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="beverages-ingredient-item">
                      <span className="beverages-ingredient-bullet">•</span>
                      <span className="beverages-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 2 - STEPS TO MAKE */}
              <div className="beverages-modal-steps">
                <h3>Steps to Make</h3>
                <div className="beverages-steps-list">
                  {selectedDrink.steps.map((step, idx) => (
                    <div key={idx} className="beverages-step-item">
                      <span className="beverages-step-number">{idx + 1}.</span>
                      <span className="beverages-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 3 - VOICE INSTRUCTIONS */}
              <div className="beverages-modal-voice-container">
                <div className="voice-panel">
                  <h3><i className="fas fa-volume-up"></i> Voice Instructions</h3>
                  
                  <div className="voice-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${progress}%`}}></div>
                    </div>
                    <div className="progress-info">
                      <span>Step {currentStep} of {selectedDrink.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <div className="voice-controls">
                    <button 
                      className={`voice-main-btn ${isPlaying ? 'stop' : 'play'}`}
                      onClick={() => isPlaying ? stopSpeaking() : speakInstructions(selectedDrink.steps)}
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
                        disabled={currentStep >= selectedDrink.steps.length}
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

export default RecipeBeveragesPage;