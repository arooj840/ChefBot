import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeBakingPage.css';

const RecipeBakingPage = () => {
  const navigate = useNavigate();
  const [selectedCake, setSelectedCake] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // Cake images array
  const cakeImages = [
    "https://taylorandcolledge.ie/wp-content/uploads/2022/12/Vanilla-Sponge-Cake-Website-Image-scaled.jpeg", // Vanilla Sponge Cake
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAVsSBNsyUzNya7rQU6Cb3s88EhcNT97hhw&s", // Chocolate Mug Cake
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBa3I-TLJmKEAfIxyvpjKoCvXBmulsE9C6Ew&s", // Banana Bread
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedyHGj1yIBACcB9f12oQOuOFZfn8FxfdfJw&s", // Butter Pound Cake
    "https://images.immediate.co.uk/production/volatile/sites/30/2023/02/Irish-coffee-cake-e23e0f0.jpg", // Coffee Cake
    "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // Vegan Sugar Cookies
    "https://www.twopeasandtheirpod.com/wp-content/uploads/2022/10/Soft-Peanut-Butter-Cookies-16-500x500.jpg", // Peanut Butter Cookies
    "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/vegan_peanut_choc_cake_64828_16x9.jpg", // Vegan Chocolate Cake
    "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7", // American Red Velvet
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanuHBasCHpLk0_eoWortqRkdOV3_TbWUYlQ&s", // Yogurt Pound Cake
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGeCOIMxR-Q-vqsPGWBcMwHzgph6C36UumEg&s", // Japanese Cheesecake
    "https://static01.nyt.com/images/2014/04/07/dining/orangeflan-still/orangeflan-still-superJumbo.jpg", // Spanish Orange Cake
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Qu0vAF4GgA-nFxLQca7gHmrnGNklAhewBA&s", // Cinnamon Rolls
    "https://bakerbynature.com/wp-content/uploads/2011/05/Blueberry-Muffins-1-of-1.jpg", // Blueberry Muffins
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7KGXGkHz01bB8pH8fHHNGXpxK4_ZF1BqiJg&s", // Cherry Almond Coffee Cake
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKGu9ONn5KlCyny1dV8HDGrtsMKybPtkMig&s", // Swedish Princess Cake
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcSK0q_8hsHxqGKyhHkENFFlo5Gywjk9Pz8Q&s", // Russian Honey Cake
    "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2019-10/almond-roll.jpg?itok=7IzXxgDh", // Almond Sponge Roll
    "https://theunlikelybaker.com/wp-content/uploads/2024/08/Chocolate-Butter-Mochi-Feature.jpg", // Chocolate Butter Cake
    "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/39/01/3/aeAtoOWHSeWQh9UD7W3K_0S9A6192.jpg", // Whipped Cream Frosting
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587", // Chocolate Fudge Cake
    "https://www.amummytoo.co.uk/wp-content/uploads/2024/03/lemon-drizzle-cake-recipe-serving.jpg", // Lemon Drizzle Cake
    "https://vikalinka.com/wp-content/uploads/2022/03/Carrot-Cake-14-Edit.jpg", // Carrot Cake
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJqwjQTeFo1FQEB9xLqYMFcWHpt0gXOJ5UQ&s", // Marble Cake
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRIq-0EjSkxVDSfqmfljHVNKk0_UV87Ob9A&s", // Coconut Cake
    "https://britneybreaksbread.com/wp-content/uploads/2025/05/strawberry-shortcake-with-pound-cake-2.jpg", // Strawberry Shortcake
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV64SvGoK8tvOktVcC__8q99fEXRmHztmiaA&s", // Pineapple Upside Down Cake
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4PHChVfFJRLTOkLFLASOeVFVECM1VLi09A&s", // Fluffy Vanilla Cake
    "https://i.ytimg.com/vi/D7ZTYrTLv8A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLABv0l7wmdZvMsfrPlLjazrS9U2fQ", // French Heart Puff
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Z1IBAdxCGUZ-0tQv7ZVmvXTC8aAPLPDMfA&s", // Cake Rusk
  ];

  // Complete Cakes Data with Pakistani-style Recipes (Simple English)
  const cakes = [
    { 
      id: 1, 
      name: "Vanilla Sponge Cake",
      tagline: "Light and fluffy classic vanilla cake",
      image: cakeImages[0],
      ingredients: [
        "2 cups maida (all-purpose flour)",
        "2 cups sugar",
        "1 cup butter, room temperature",
        "4 eggs",
        "1 cup milk",
        "2 tsp vanilla essence",
        "1 tbsp baking powder",
        "1/2 tsp salt"
      ],
      steps: [
        "Preheat oven to 350°F (180°C).",
        "Grease and flour two 9-inch round cake pans.",
        "Cream butter and sugar until light and fluffy.",
        "Add eggs one at a time, beating well after each.",
        "Mix in vanilla essence.",
        "In separate bowl, whisk flour, baking powder, and salt.",
        "Add dry ingredients to butter mixture alternately with milk.",
        "Divide batter evenly between pans.",
        "Bake for 25-30 minutes or until toothpick comes out clean.",
        "Cool in pans for 10 minutes before transferring to wire racks."
      ]
    },
    { 
      id: 2, 
      name: "Chocolate Mug Cake",
      tagline: "Quick single-serving chocolate cake in minutes",
      image: cakeImages[1],
      ingredients: [
        "4 tbsp all-purpose flour",
        "4 tbsp sugar",
        "2 tbsp cocoa powder",
        "1/4 tsp baking powder",
        "3 tbsp milk",
        "2 tbsp vegetable oil",
        "1/4 tsp vanilla essence",
        "1 tbsp chocolate chips (optional)"
      ],
      steps: [
        "In microwave-safe mug, mix flour, sugar, cocoa powder, and baking powder.",
        "Add milk, oil, and vanilla essence. Mix until smooth.",
        "Stir in chocolate chips if using.",
        "Microwave on high for 1 minute 30 seconds to 2 minutes.",
        "Let cool for 1 minute before enjoying.",
        "Top with ice cream if desired."
      ]
    },
    { 
      id: 3, 
      name: "Banana Bread",
      tagline: "Moist and delicious quick bread with ripe bananas",
      image: cakeImages[2],
      ingredients: [
        "3 ripe bananas, mashed",
        "1/3 cup melted butter",
        "1 cup sugar",
        "1 egg, beaten",
        "1 tsp vanilla essence",
        "1 tsp baking soda",
        "Pinch of salt",
        "1 1/2 cups all-purpose flour",
        "1/2 cup chopped walnuts (optional)"
      ],
      steps: [
        "Preheat oven to 350°F (180°C). Grease a 9x5 inch loaf pan.",
        "Mash bananas with fork until smooth.",
        "Stir melted butter into bananas.",
        "Mix in sugar, egg, and vanilla essence.",
        "Add baking soda and salt, mix thoroughly.",
        "Gradually add flour, mixing until just incorporated.",
        "Fold in chopped walnuts if using.",
        "Pour batter into prepared pan.",
        "Bake for 60-65 minutes or until toothpick comes out clean.",
        "Cool completely before slicing."
      ]
    },
    { 
      id: 4, 
      name: "Butter Pound Cake",
      tagline: "Rich, dense buttery classic pound cake",
      image: cakeImages[3],
      ingredients: [
        "2 cups all-purpose flour",
        "2 cups sugar",
        "1 cup butter, softened",
        "5 eggs",
        "1/2 cup yogurt",
        "1 tsp vanilla essence",
        "1/2 tsp baking powder",
        "1/4 tsp salt"
      ],
      steps: [
        "Preheat oven to 325°F (165°C). Grease a tube pan.",
        "Cream butter and sugar until fluffy.",
        "Add eggs one at a time, beating well after each.",
        "Mix in vanilla essence and yogurt.",
        "In separate bowl, whisk flour, baking powder, and salt.",
        "Gradually add dry ingredients to butter mixture.",
        "Pour batter into prepared pan.",
        "Bake for 60-75 minutes or until golden brown.",
        "Cool in pan for 20 minutes before removing."
      ]
    },
    { 
      id: 5, 
      name: "Coffee Cake",
      tagline: "Cinnamon streusel topped coffee cake",
      image: cakeImages[4],
      ingredients: [
        "2 cups all-purpose flour",
        "1 cup sugar",
        "1/2 cup butter, softened",
        "2 eggs",
        "1 cup yogurt",
        "1 tsp vanilla essence",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1/4 tsp salt",
        "For topping: 1/2 cup brown sugar, 1/2 cup chopped walnuts, 2 tsp cinnamon"
      ],
      steps: [
        "Preheat oven to 350°F (180°C). Grease a 9-inch square pan.",
        "Make topping: Mix brown sugar, walnuts, and cinnamon.",
        "Cream butter and sugar until fluffy.",
        "Add eggs one at a time.",
        "Mix in vanilla essence and yogurt.",
        "In separate bowl, whisk flour, baking powder, baking soda, and salt.",
        "Gradually add dry ingredients to butter mixture.",
        "Spread half of batter in pan.",
        "Sprinkle with half of topping.",
        "Top with remaining batter and sprinkle with remaining topping.",
        "Bake for 35-40 minutes until golden brown."
      ]
    },
    { 
      id: 6, 
      name: "Vegan Sugar Cookies",
      tagline: "Plant-based buttery sugar cookies",
      image: cakeImages[5],
      ingredients: [
        "2 1/2 cups all-purpose flour",
        "1 cup vegan butter, softened",
        "1 cup sugar",
        "1/4 cup almond milk",
        "2 tsp vanilla essence",
        "1 tbsp cornstarch",
        "1 tsp baking powder",
        "1/2 tsp salt"
      ],
      steps: [
        "Cream vegan butter and sugar until fluffy.",
        "Add almond milk and vanilla essence, mix well.",
        "In separate bowl, whisk flour, cornstarch, baking powder, and salt.",
        "Gradually add dry ingredients to wet mixture.",
        "Divide dough in half, shape into disks, wrap, chill for 1 hour.",
        "Preheat oven to 350°F (180°C).",
        "Roll dough to 1/4-inch thickness on floured surface.",
        "Cut with cookie cutters.",
        "Bake for 8-10 minutes until edges are lightly golden.",
        "Cool on baking sheets for 5 minutes."
      ]
    },
    { 
      id: 7, 
      name: "Peanut Butter Cookies",
      tagline: "Soft and chewy peanut butter cookies",
      image: cakeImages[6],
      ingredients: [
        "1 cup creamy peanut butter",
        "1 cup sugar",
        "1 egg",
        "1 tsp vanilla essence",
        "1 tsp baking soda",
        "Pinch of salt",
        "Sugar for rolling"
      ],
      steps: [
        "Preheat oven to 350°F (180°C).",
        "Mix peanut butter, sugar, egg, vanilla, baking soda, and salt.",
        "Form dough into 1-inch balls and roll in sugar.",
        "Place on baking sheets and flatten with fork.",
        "Bake for 8-10 minutes until edges are set.",
        "Let cool on baking sheets for 5 minutes.",
        "Store in airtight container."
      ]
    },
    { 
      id: 8, 
      name: "Vegan Chocolate Cake",
      tagline: "Rich and moist eggless chocolate cake",
      image: cakeImages[7],
      ingredients: [
        "1 1/2 cups all-purpose flour",
        "1 cup sugar",
        "1/4 cup cocoa powder",
        "1 tsp baking soda",
        "1/2 tsp salt",
        "1 cup water",
        "1/3 cup vegetable oil",
        "1 tsp vanilla essence",
        "1 tsp vinegar"
      ],
      steps: [
        "Preheat oven to 350°F (180°C). Grease an 8-inch pan.",
        "Whisk together flour, sugar, cocoa powder, baking soda, and salt.",
        "Make a well and add water, oil, vanilla, and vinegar.",
        "Mix until just combined (batter will be thin).",
        "Pour into prepared pan.",
        "Bake for 30-35 minutes or until toothpick comes out clean.",
        "Cool in pan for 10 minutes.",
        "Frost with vegan chocolate frosting if desired."
      ]
    },
    { 
      id: 9, 
      name: "American Red Velvet",
      tagline: "Classic red velvet cake with cream cheese frosting",
      image: cakeImages[8],
      ingredients: [
        "2 1/2 cups all-purpose flour",
        "1 1/2 cups sugar",
        "1 cup buttermilk",
        "1/2 cup butter, softened",
        "2 eggs",
        "2 tbsp red food coloring",
        "1 tsp vanilla essence",
        "1 tsp baking soda",
        "1 tsp vinegar",
        "1 tsp cocoa powder",
        "1/2 tsp salt"
      ],
      steps: [
        "Preheat oven to 350°F (180°C). Grease two 9-inch pans.",
        "Whisk flour, cocoa powder, and salt.",
        "Cream butter and sugar until fluffy.",
        "Add eggs one at a time.",
        "Mix in food coloring and vanilla.",
        "Add flour mixture alternately with buttermilk.",
        "Mix baking soda and vinegar, fold into batter.",
        "Divide batter between pans.",
        "Bake for 25-30 minutes.",
        "Cool completely before frosting with cream cheese frosting."
      ]
    },
    { 
      id: 10, 
      name: "Yogurt Pound Cake",
      tagline: "Moist pound cake made with yogurt",
      image: cakeImages[9],
      ingredients: [
        "1 1/2 cups all-purpose flour",
        "1 cup plain yogurt",
        "1 cup sugar",
        "3 eggs",
        "1/2 cup vegetable oil",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1 tsp vanilla essence",
        "Pinch of salt"
      ],
      steps: [
        "Preheat oven to 350°F (180°C). Grease a loaf pan.",
        "Whisk flour, baking powder, baking soda, and salt.",
        "Beat eggs and sugar until pale and fluffy.",
        "Add yogurt, oil, and vanilla essence, mix well.",
        "Gradually fold in dry ingredients.",
        "Pour batter into pan.",
        "Bake for 45-50 minutes until golden brown.",
        "Cool in pan for 10 minutes.",
        "Dust with powdered sugar before serving."
      ]
    },
    { 
      id: 11, 
      name: "Japanese Cheesecake",
      tagline: "Light and fluffy Japanese-style cheesecake",
      image: cakeImages[10],
      ingredients: [
        "250g cream cheese",
        "50g butter",
        "100ml milk",
        "60g cake flour",
        "20g cornstarch",
        "6 eggs, separated",
        "120g sugar",
        "1 tsp lemon juice",
        "1/4 tsp cream of tartar"
      ],
      steps: [
        "Preheat oven to 320°F (160°C). Prepare water bath.",
        "Melt cream cheese, butter, and milk over double boiler.",
        "Remove from heat, sift in flour and cornstarch, mix well.",
        "Add egg yolks one at a time, mixing after each.",
        "Beat egg whites with cream of tartar until foamy.",
        "Gradually add sugar, beating until stiff peaks form.",
        "Fold egg whites into cheese mixture in three batches.",
        "Pour into springform pan lined with parchment.",
        "Place in water bath and bake for 70-80 minutes.",
        "Turn off oven and let cake cool inside for 1 hour.",
        "Chill for at least 4 hours before serving."
      ]
    },
    { 
      id: 12, 
      name: "Spanish Orange Cake",
      tagline: "Bright and citrusy orange-flavored cake",
      image: cakeImages[11],
      ingredients: [
        "2 cups all-purpose flour",
        "1 1/2 cups sugar",
        "3 eggs",
        "1 cup fresh orange juice",
        "1/2 cup vegetable oil",
        "Zest of 2 oranges",
        "1 tbsp baking powder",
        "1/2 tsp salt",
        "Powdered sugar for dusting"
      ],
      steps: [
        "Preheat oven to 350°F (180°C). Grease a bundt pan.",
        "Whisk flour, baking powder, and salt.",
        "Beat eggs and sugar until pale and fluffy.",
        "Add orange juice, oil, and orange zest, mix well.",
        "Gradually add dry ingredients, mixing until combined.",
        "Pour batter into pan.",
        "Bake for 45-50 minutes until golden brown.",
        "Cool in pan for 15 minutes.",
        "Dust with powdered sugar before serving."
      ]
    },
    { 
      id: 13, 
      name: "Cinnamon Rolls",
      tagline: "Soft and gooey cinnamon rolls with cream cheese icing",
      image: cakeImages[12],
      ingredients: [
        "For dough: 3 cups all-purpose flour",
        "1/4 cup sugar",
        "1 tsp salt",
        "2 1/4 tsp instant yeast",
        "3/4 cup warm milk",
        "1/4 cup melted butter",
        "1 egg",
        "For filling: 1/2 cup brown sugar",
        "2 tbsp cinnamon powder",
        "1/4 cup softened butter",
        "For icing: 1 cup powdered sugar",
        "2 tbsp milk",
        "1/2 tsp vanilla essence"
      ],
      steps: [
        "Mix warm milk, sugar, and yeast, let sit for 5 minutes.",
        "Combine flour and salt.",
        "Add yeast mixture, melted butter, and egg to flour.",
        "Knead until smooth dough forms (8-10 minutes).",
        "Place in greased bowl, cover, let rise for 1 hour.",
        "Roll dough into 12x18 inch rectangle.",
        "Spread softened butter evenly.",
        "Mix brown sugar and cinnamon, sprinkle over butter.",
        "Roll dough tightly from long edge into log.",
        "Cut into 12 equal pieces.",
        "Place in greased baking pan, cover, let rise 30 minutes.",
        "Preheat oven to 350°F (175°C).",
        "Bake for 20-25 minutes until golden brown.",
        "Mix icing ingredients, drizzle over warm rolls.",
        "Serve warm."
      ]
    },
    { 
      id: 14, 
      name: "Blueberry Muffins",
      tagline: "Soft and fluffy muffins bursting with blueberries",
      image: cakeImages[13],
      ingredients: [
        "2 cups all-purpose flour",
        "1 cup sugar",
        "1/2 cup melted butter",
        "2 eggs",
        "1 cup buttermilk",
        "2 tsp baking powder",
        "1/2 tsp baking soda",
        "1 tsp vanilla essence",
        "1/2 tsp salt",
        "1 1/2 cups fresh blueberries",
        "2 tbsp flour for coating blueberries"
      ],
      steps: [
        "Preheat oven to 400°F (200°C). Line muffin tin.",
        "Whisk flour, baking powder, baking soda, and salt.",
        "Whisk melted butter and sugar until combined.",
        "Add eggs one at a time, beating well after each.",
        "Mix in buttermilk and vanilla essence.",
        "Gradually fold in dry ingredients (do not overmix).",
        "Toss blueberries with 2 tbsp flour to coat.",
        "Gently fold blueberries into batter.",
        "Divide batter among muffin cups, filling each 2/3 full.",
        "Bake for 18-20 minutes until golden brown.",
        "Cool in pan for 5 minutes.",
        "Serve warm or at room temperature."
      ]
    },
    { 
      id: 15, 
      name: "Cherry Almond Coffee Cake",
      tagline: "Cherry and almond streusel coffee cake",
      image: cakeImages[14],
      ingredients: [
        "2 cups all-purpose flour",
        "3/4 cup sugar",
        "1/2 cup butter, softened",
        "2 eggs",
        "1 cup yogurt",
        "1 tsp almond essence",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1/4 tsp salt",
        "1 cup fresh or frozen cherries, pitted",
        "For topping: 1/4 cup sliced almonds, 2 tbsp sugar"
      ],
      steps: [
        "Preheat oven to 350°F (180°C). Grease a 9-inch square pan.",
        "Cream butter and sugar until fluffy.",
        "Add eggs one at a time.",
        "Mix in yogurt and almond essence.",
        "Whisk flour, baking powder, baking soda, and salt.",
        "Gradually add dry ingredients to butter mixture.",
        "Fold in cherries.",
        "Spread batter in pan.",
        "Sprinkle with almonds and sugar.",
        "Bake for 35-40 minutes until golden brown.",
        "Cool in pan for 15 minutes before serving.",
        "Serve with coffee or tea."
      ]
    },
    { 
      id: 16, 
      name: "Swedish Princess Cake",
      tagline: "Classic Swedish layer cake with marzipan dome",
      image: cakeImages[15],
      ingredients: [
        "For cake: 3 eggs",
        "3/4 cup sugar",
        "3/4 cup all-purpose flour",
        "1 tsp baking powder",
        "For filling: 2 cups whipped cream",
        "1 cup vanilla custard",
        "1 cup strawberry jam",
        "For covering: Marzipan (almond paste)",
        "Green food coloring"
      ],
      steps: [
        "Preheat oven to 350°F (180°C).",
        "Beat eggs and sugar until fluffy.",
        "Sift flour and baking powder, fold into egg mixture.",
        "Pour into cake pan.",
        "Bake for 25 minutes.",
        "Cool cake and cut into layers.",
        "Spread jam on cake layer.",
        "Add whipped cream and custard layer.",
        "Place top layer.",
        "Cover whole cake with whipped cream.",
        "Color marzipan green and roll out.",
        "Cover cake with marzipan.",
        "Decorate with marzipan rose."
      ]
    },
    { 
      id: 17, 
      name: "Russian Honey Cake",
      tagline: "Layered honey cake with sour cream frosting",
      image: cakeImages[16],
      ingredients: [
        "3 eggs",
        "1 cup honey",
        "1 cup sugar",
        "2 cups all-purpose flour",
        "1 tsp baking soda",
        "1/2 cup butter",
        "For cream: 2 cups sour cream",
        "1 cup whipped cream",
        "1/2 cup powdered sugar"
      ],
      steps: [
        "Melt butter, honey, sugar together.",
        "Let cool slightly.",
        "Add eggs, mix well.",
        "Mix flour and baking soda.",
        "Divide dough into 8-10 thin layers.",
        "Bake each layer for 5-7 minutes.",
        "Mix sour cream, whipped cream, powdered sugar for cream.",
        "Spread cream between cake layers.",
        "Cover top and sides with cream.",
        "Decorate with cake crumbs.",
        "Refrigerate for 12 hours before serving."
      ]
    },
    { 
      id: 18, 
      name: "Almond Sponge Roll",
      tagline: "Light almond sponge cake rolled with cream",
      image: cakeImages[17],
      ingredients: [
        "4 eggs, separated",
        "3/4 cup sugar",
        "3/4 cup ground almonds",
        "1/4 cup all-purpose flour",
        "1 tsp vanilla essence",
        "For filling: 1 1/2 cups whipped cream",
        "1/2 cup powdered sugar",
        "Sliced almonds for decoration"
      ],
      steps: [
        "Preheat oven to 350°F (180°C).",
        "Line baking sheet with parchment paper.",
        "Beat egg whites until stiff peaks form.",
        "Gradually add sugar while beating.",
        "Add egg yolks and vanilla essence.",
        "Mix ground almonds and flour, fold into egg mixture.",
        "Spread batter on baking sheet.",
        "Bake for 10-12 minutes.",
        "Roll cake in warm towel.",
        "Let cool completely.",
        "Mix whipped cream and powdered sugar.",
        "Unroll cake, spread cream, roll again.",
        "Decorate with sliced almonds."
      ]
    },
    { 
      id: 19, 
      name: "Chocolate Butter Cake",
      tagline: "Rich and moist chocolate butter cake",
      image: cakeImages[18],
      ingredients: [
        "1 3/4 cups all-purpose flour",
        "2 cups sugar",
        "3/4 cup cocoa powder",
        "1 1/2 tsp baking powder",
        "1 1/2 tsp baking soda",
        "1 tsp salt",
        "2 eggs",
        "1 cup milk",
        "1/2 cup vegetable oil",
        "2 tsp vanilla essence",
        "1 cup boiling water"
      ],
      steps: [
        "Preheat oven to 350°F (180°C). Grease cake pans.",
        "Mix flour, sugar, cocoa, baking powder, baking soda, salt.",
        "Beat eggs, milk, oil, vanilla essence together.",
        "Add wet ingredients to dry, mix well.",
        "Add boiling water, mix (batter will be thin).",
        "Divide batter between pans.",
        "Bake for 30-35 minutes.",
        "Cool completely before frosting with chocolate buttercream."
      ]
    },
    { 
      id: 20, 
      name: "Whipped Cream Frosting",
      tagline: "Light and fluffy homemade whipped cream",
      image: cakeImages[19],
      ingredients: [
        "2 cups heavy cream",
        "1/2 cup powdered sugar",
        "1 tsp vanilla essence"
      ],
      steps: [
        "Chill bowl and beaters in refrigerator.",
        "Pour heavy cream into cold bowl.",
        "Beat on medium speed until soft peaks form.",
        "Gradually add powdered sugar while beating.",
        "Add vanilla essence.",
        "Beat until stiff peaks form.",
        "Use immediately to frost cakes.",
        "Refrigerate if not using right away."
      ]
    },
    { 
      id: 21, 
      name: "Chocolate Fudge Cake",
      tagline: "Decadent chocolate cake with fudge frosting",
      image: cakeImages[20],
      ingredients: [
        "1 3/4 cups all-purpose flour",
        "2 cups sugar",
        "3/4 cup cocoa powder",
        "1 1/2 tsp baking powder",
        "1 1/2 tsp baking soda",
        "1 tsp salt",
        "2 eggs",
        "1 cup milk",
        "1/2 cup vegetable oil",
        "2 tsp vanilla essence",
        "1 cup boiling water",
        "For fudge frosting: 1 cup chocolate chips, 1/2 cup cream"
      ],
      steps: [
        "Preheat oven to 350°F (180°C). Prepare cake pans.",
        "Mix dry ingredients in large bowl.",
        "Beat eggs, milk, oil, vanilla together.",
        "Add wet ingredients to dry, mix well.",
        "Add boiling water, mix until smooth.",
        "Divide batter between pans.",
        "Bake for 30-35 minutes.",
        "For frosting: Heat cream until steaming.",
        "Pour over chocolate chips, let sit 2 minutes.",
        "Whisk until smooth and glossy.",
        "Frost cooled cake with chocolate fudge."
      ]
    },
    { 
      id: 22, 
      name: "Lemon Drizzle Cake",
      tagline: "Tangy lemon cake with sweet drizzle",
      image: cakeImages[21],
      ingredients: [
        "1 3/4 cups all-purpose flour",
        "1 cup sugar",
        "1/2 cup butter, room temperature",
        "3 eggs",
        "1/2 cup milk",
        "Zest of 2 lemons",
        "Juice of 1 lemon",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1/4 tsp salt",
        "For drizzle: 1/2 cup powdered sugar, 2 tbsp lemon juice"
      ],
      steps: [
        "Preheat oven to 350°F (180°C). Grease loaf pan.",
        "Cream butter and sugar until fluffy.",
        "Add eggs one at a time.",
        "Mix in lemon zest and juice.",
        "Whisk flour, baking powder, baking soda, salt.",
        "Add milk and flour mixture alternately to batter.",
        "Pour batter into pan.",
        "Bake for 45-50 minutes.",
        "Mix powdered sugar and lemon juice for drizzle.",
        "Poke holes in warm cake with skewer.",
        "Pour drizzle over warm cake.",
        "Let cool completely before slicing."
      ]
    },
    { 
      id: 23, 
      name: "Carrot Cake",
      tagline: "Spiced carrot cake with cream cheese frosting",
      image: cakeImages[22],
      ingredients: [
        "2 cups grated carrots",
        "2 cups all-purpose flour",
        "1 1/2 cups sugar",
        "1 cup vegetable oil",
        "4 eggs",
        "1 cup chopped walnuts",
        "1 tsp baking powder",
        "1 tsp baking soda",
        "1 tsp cinnamon powder",
        "1/2 tsp nutmeg powder",
        "1/2 tsp salt",
        "For cream cheese frosting: 200g cream cheese, 1/2 cup butter, 2 cups powdered sugar"
      ],
      steps: [
        "Preheat oven to 350°F (180°C). Grease cake pans.",
        "Beat eggs and sugar until fluffy.",
        "Add oil, mix well.",
        "Mix flour, baking powder, baking soda, cinnamon, nutmeg, salt.",
        "Add dry ingredients to egg mixture.",
        "Fold in carrots and walnuts.",
        "Divide batter between pans.",
        "Bake for 30-35 minutes.",
        "For frosting: Beat cream cheese and butter until smooth.",
        "Gradually add powdered sugar.",
        "Frost cooled cake layers.",
        "Decorate with extra walnuts."
      ]
    },
    { 
      id: 24, 
      name: "Marble Cake",
      tagline: "Beautiful swirls of vanilla and chocolate",
      image: cakeImages[23],
      ingredients: [
        "2 cups all-purpose flour",
        "1 1/2 cups sugar",
        "1 cup butter, room temperature",
        "4 eggs",
        "1 cup milk",
        "1 tsp vanilla essence",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1/4 tsp salt",
        "1/4 cup cocoa powder",
        "2 tbsp hot water"
      ],
      steps: [
        "Preheat oven to 350°F (180°C). Grease bundt pan.",
        "Cream butter and sugar until fluffy.",
        "Add eggs one at a time.",
        "Mix in vanilla essence.",
        "Whisk flour, baking powder, baking soda, salt.",
        "Add milk and flour mixture alternately to batter.",
        "Divide batter in half.",
        "Mix cocoa powder and hot water, add to one half.",
        "Alternate spoonfuls of vanilla and chocolate batter in pan.",
        "Swirl with knife for marble effect.",
        "Bake for 45-50 minutes.",
        "Cool in pan for 15 minutes."
      ]
    },
    { 
      id: 25, 
      name: "Coconut Cake",
      tagline: "Moist coconut cake with coconut frosting",
      image: cakeImages[24],
      ingredients: [
        "2 cups all-purpose flour",
        "1 1/2 cups sugar",
        "1 cup butter, room temperature",
        "4 eggs",
        "1 cup coconut milk",
        "1 cup grated coconut",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1/4 tsp salt",
        "1 tsp vanilla essence",
        "For frosting: 2 cups whipped cream, 1 cup grated coconut"
      ],
      steps: [
        "Preheat oven to 350°F (180°C). Grease cake pans.",
        "Cream butter and sugar until fluffy.",
        "Add eggs one at a time.",
        "Mix in vanilla essence.",
        "Whisk flour, baking powder, baking soda, salt.",
        "Add coconut milk and flour mixture alternately.",
        "Fold in grated coconut.",
        "Divide batter between pans.",
        "Bake for 25-30 minutes.",
        "Cool completely.",
        "Frost with whipped cream.",
        "Coat with grated coconut."
      ]
    },
    { 
      id: 26, 
      name: "Strawberry Shortcake",
      tagline: "Biscuit-style cake with fresh strawberries",
      image: cakeImages[25],
      ingredients: [
        "2 cups all-purpose flour",
        "1/3 cup sugar",
        "1 tbsp baking powder",
        "1/2 tsp salt",
        "1/2 cup cold butter",
        "2/3 cup milk",
        "1 egg",
        "For filling: 2 cups sliced strawberries, 2 tbsp sugar",
        "For cream: 2 cups whipped cream"
      ],
      steps: [
        "Preheat oven to 425°F (220°C).",
        "Mix flour, sugar, baking powder, salt.",
        "Cut cold butter into flour mixture.",
        "Beat milk and egg together, add to flour mixture.",
        "Knead gently, roll out, cut into circles.",
        "Bake for 15 minutes until golden.",
        "Mix strawberries with sugar.",
        "Split shortcakes in half.",
        "Fill with whipped cream and strawberries.",
        "Top with other half.",
        "Serve immediately."
      ]
    },
    { 
      id: 27, 
      name: "Pineapple Upside Down Cake",
      tagline: "Caramelized pineapple ring cake",
      image: cakeImages[26],
      ingredients: [
        "For topping: 1/4 cup butter",
        "1/2 cup brown sugar",
        "6-7 pineapple rings",
        "Maraschino cherries",
        "For cake: 1 1/2 cups all-purpose flour",
        "1 cup sugar",
        "1/2 cup butter, room temperature",
        "2 eggs",
        "1/2 cup pineapple juice",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1/4 tsp salt"
      ],
      steps: [
        "Preheat oven to 350°F (180°C).",
        "Melt butter in cake pan.",
        "Sprinkle brown sugar over butter.",
        "Arrange pineapple rings and cherries.",
        "Cream butter and sugar until fluffy.",
        "Add eggs one at a time.",
        "Whisk flour, baking powder, baking soda, salt.",
        "Add pineapple juice and flour mixture alternately.",
        "Pour batter over pineapple arrangement.",
        "Bake for 35-40 minutes.",
        "Immediately invert onto serving plate.",
        "Serve warm."
      ]
    },
    { 
      id: 28, 
      name: "Fluffy Vanilla Cake",
      tagline: "Extra fluffy and light vanilla layer cake",
      image: cakeImages[27],
      ingredients: [
        "2 1/4 cups all-purpose flour",
        "1 1/2 cups sugar",
        "3/4 cup butter, room temperature",
        "3 eggs",
        "1 cup milk",
        "2 1/2 tsp baking powder",
        "1/2 tsp salt",
        "2 tsp vanilla essence"
      ],
      steps: [
        "Preheat oven to 350°F (180°C). Grease cake pans.",
        "Cream butter and sugar until fluffy.",
        "Add eggs one at a time.",
        "Mix in vanilla essence.",
        "Whisk flour, baking powder, salt.",
        "Add milk and flour mixture alternately.",
        "Divide batter between pans.",
        "Bake for 25-30 minutes.",
        "Cool completely before frosting."
      ]
    },
    { 
      id: 29, 
      name: "French Heart Puff",
      tagline: "Flaky puff pastry hearts with chocolate",
      image: cakeImages[28],
      ingredients: [
        "1 sheet puff pastry",
        "1 cup chocolate hazelnut spread",
        "1 egg, beaten",
        "1 tbsp milk",
        "Powdered sugar for dusting"
      ],
      steps: [
        "Preheat oven to 400°F (200°C).",
        "Roll out puff pastry.",
        "Cut heart shapes with cookie cutter.",
        "Spread chocolate on half the hearts.",
        "Top with remaining hearts.",
        "Seal edges with fork.",
        "Mix egg and milk, brush on pastries.",
        "Bake for 15-20 minutes until puffed and golden.",
        "Dust with powdered sugar.",
        "Serve warm."
      ]
    },
    { 
      id: 30, 
      name: "Cake Rusk",
      tagline: "Crispy twice-baked cake perfect with tea",
      image: cakeImages[29],
      ingredients: [
        "Leftover cake or plain cake",
        "1/2 cup sugar",
        "1/2 cup milk",
        "1/2 tsp cardamom powder",
        "Ghee for frying"
      ],
      steps: [
        "Cut cake into 1-inch thick slices.",
        "Boil sugar and milk to make syrup.",
        "Add cardamom powder to syrup.",
        "Dip cake slices in syrup briefly.",
        "Heat ghee in pan.",
        "Fry cake slices until golden brown.",
        "Drain on paper towels.",
        "Let cool completely.",
        "Store in airtight container.",
        "Serve with tea."
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
    if (selectedCake && currentStep < selectedCake.steps.length) {
      stopSpeaking();
      speakInstructions(selectedCake.steps, currentStep);
    }
  };

  const speakPreviousStep = () => {
    if (selectedCake && currentStep > 1) {
      stopSpeaking();
      speakInstructions(selectedCake.steps, currentStep - 2);
    }
  };

  const handleCakeSelect = (cake) => {
    setSelectedCake(cake);
    setShowDetailPanel(true);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const closeDetailPanel = () => {
    stopSpeaking();
    setShowDetailPanel(false);
    setSelectedCake(null);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="baking-page">
      {/* Header */}
      <header className="baking-header">
        <div className="baking-header-content">
          <h1 className="baking-page-title">Cakes & Bakes Collection</h1>
          <p className="baking-page-description">
            Discover delicious cakes and baked goods from around the world.
          </p>
        </div>
      </header>

      {/* Cakes Grid */}
      <main className="baking-main">
        <div className="baking-grid-section">
          <div className="baking-grid">
            {cakes.map(cake => (
              <div 
                key={cake.id} 
                className="baking-technique-card"
                onClick={() => handleCakeSelect(cake)}
              >
                <div 
                  className="baking-card-image"
                  style={{ backgroundImage: `url(${cake.image})` }}
                ></div>
                
                <div className="baking-card-content">
                  <h3 className="baking-card-title">{cake.name}</h3>
                  <p className="baking-card-description">{cake.tagline}</p>
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

      {/* DETAIL MODAL with SELECTED CAKE IMAGE as Background */}
      {showDetailPanel && selectedCake && (
        <div className="baking-modal-overlay" onClick={closeDetailPanel}>
          <div 
            className="baking-modal" 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url(${selectedCake.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <button className="baking-modal-close" onClick={closeDetailPanel}>×</button>
            
            <div className="baking-modal-header">
              <div className="baking-modal-title">
                <h2>{selectedCake.name}</h2>
              </div>
            </div>

            <div className="baking-modal-content">
              {/* COLUMN 1 - INGREDIENTS */}
              <div className="baking-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="baking-ingredients-list">
                  {selectedCake.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="baking-ingredient-item">
                      <span className="baking-ingredient-bullet">•</span>
                      <span className="baking-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 2 - STEPS TO MAKE */}
              <div className="baking-modal-steps">
                <h3>Steps to Make</h3>
                <div className="baking-steps-list">
                  {selectedCake.steps.map((step, idx) => (
                    <div key={idx} className="baking-step-item">
                      <span className="baking-step-number">{idx + 1}.</span>
                      <span className="baking-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 3 - VOICE INSTRUCTIONS */}
              <div className="baking-modal-voice-container">
                <div className="voice-panel">
                  <h3><i className="fas fa-volume-up"></i> Voice Instructions</h3>
                  
                  <div className="voice-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${progress}%`}}></div>
                    </div>
                    <div className="progress-info">
                      <span>Step {currentStep} of {selectedCake.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <div className="voice-controls">
                    <button 
                      className={`voice-main-btn ${isPlaying ? 'stop' : 'play'}`}
                      onClick={() => isPlaying ? stopSpeaking() : speakInstructions(selectedCake.steps)}
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
                        disabled={currentStep >= selectedCake.steps.length}
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

export default RecipeBakingPage;