import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeSoupPage.css';

const RecipeSoupPage = () => {
  const navigate = useNavigate();
  const [selectedSoup, setSelectedSoup] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All Soups Data (38 soups) - HAR SOUP KI APNI IMAGE
  const soups = [
    { 
      id: 1, 
      name: "Cream of Mushroom Soup",
      tagline: "Rich, creamy, and earthy mushroom soup",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqiqU3xgsUs4bYX9IvYvXIEKw_-XIoyvFbQ&s",
      ingredients: [
        "500g fresh mushrooms, sliced",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "2 cups vegetable broth",
        "1 cup heavy cream",
        "2 tbsp butter",
        "2 tbsp all-purpose flour",
        "1 tsp thyme",
        "Salt and pepper to taste"
      ],
      steps: [
        "Melt butter in a large pot over medium heat.",
        "Add onions and garlic, sauté until translucent.",
        "Add mushrooms and cook until they release their moisture and brown slightly.",
        "Sprinkle flour and stir for 2 minutes to cook out raw flour taste.",
        "Gradually add vegetable broth while stirring to prevent lumps.",
        "Bring to a simmer and cook for 15 minutes until slightly thickened.",
        "Stir in cream and thyme, season with salt and pepper.",
        "Simmer for 5 more minutes, adjust seasoning, and serve hot."
      ]
    },
    { 
      id: 2, 
      name: "Creamy Noodles Soup",
      tagline: "Comforting noodle soup with creamy broth",
      image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2019/10/Creamy-Chicken-Noodle-Soup-3.jpg",
      ingredients: [
        "200g noodles",
        "4 cups chicken broth",
        "1 cup mixed vegetables (carrots, peas, corn)",
        "1 cup milk",
        "2 tbsp butter",
        "2 tbsp flour",
        "1 tsp black pepper",
        "Salt to taste"
      ],
      steps: [
        "Cook noodles according to package instructions, drain and set aside.",
        "In a pot, melt butter and stir in flour to make a roux, cook for 2 minutes.",
        "Slowly add chicken broth while whisking to prevent lumps.",
        "Add mixed vegetables and cook for 10 minutes until tender.",
        "Stir in milk and cooked noodles.",
        "Season with salt and pepper, simmer for 5 minutes.",
        "Serve hot garnished with fresh herbs."
      ]
    },
    { 
      id: 3, 
      name: "Egg Drop Soup",
      tagline: "Silky Chinese-style egg soup",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91WUf88VTnCSrt3kQ9ChnM7D053vayxpBEg&s",
      ingredients: [
        "4 cups chicken broth",
        "2 eggs, lightly beaten",
        "2 tbsp cornstarch",
        "2 tbsp water",
        "1 tsp soy sauce",
        "1/2 tsp ginger, grated",
        "2 green onions, chopped",
        "1/4 tsp white pepper"
      ],
      steps: [
        "Bring chicken broth to a boil in a pot.",
        "Mix cornstarch with water to make a slurry.",
        "Add soy sauce, ginger, and white pepper to the broth.",
        "Slowly pour in cornstarch slurry while stirring continuously.",
        "Reduce heat to a simmer.",
        "Slowly drizzle beaten eggs into the soup while stirring gently in one direction.",
        "Cook for 1 minute until eggs set into ribbons.",
        "Garnish with green onions and serve immediately."
      ]
    },
    { 
      id: 4, 
      name: "Chicken Macroni Corn Soup",
      tagline: "Hearty soup with chicken, macaroni and corn",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQ9CCB50MahAFRH-KMbVuObrgRPLUbwzHlw&s",
      ingredients: [
        "200g chicken breast, diced",
        "1 cup macaroni",
        "1 cup sweet corn kernels",
        "1 carrot, diced",
        "4 cups chicken broth",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "2 tbsp soy sauce",
        "1 tsp black pepper",
        "2 tbsp oil"
      ],
      steps: [
        "Heat oil in a pot and sauté onions and garlic until fragrant.",
        "Add chicken and cook until no longer pink and lightly browned.",
        "Add carrots and corn, cook for 5 minutes stirring occasionally.",
        "Pour in chicken broth and bring to a boil.",
        "Add macaroni and cook until al dente (about 10-12 minutes).",
        "Season with soy sauce and black pepper.",
        "Simmer for 10 minutes until flavors combine.",
        "Serve hot with crusty bread."
      ]
    },
    { 
      id: 5, 
      name: "Chicken Soup",
      tagline: "Classic comforting chicken soup",
      image: "https://afoodcentriclife.com/wp-content/uploads/2014/01/chicken-vegetable-soup-pot-square-crop-0526.jpg",
      ingredients: [
        "1 whole chicken (or 500g chicken pieces)",
        "8 cups water",
        "2 carrots, sliced",
        "2 celery stalks, chopped",
        "1 onion, chopped",
        "3 cloves garlic",
        "1 bay leaf",
        "1 tsp thyme",
        "Salt and pepper to taste",
        "Fresh parsley for garnish"
      ],
      steps: [
        "Place chicken in a large pot with water.",
        "Bring to a boil, then reduce heat to simmer.",
        "Skim off any foam that rises to the surface.",
        "Add vegetables and herbs (carrots, celery, onion, garlic, bay leaf, thyme).",
        "Simmer for 45-60 minutes until chicken is tender.",
        "Remove chicken, shred the meat, and return to pot.",
        "Season with salt and pepper to taste.",
        "Simmer for another 10 minutes, garnish with parsley and serve hot."
      ]
    },
    { 
      id: 6, 
      name: "Vegetable Hot and Sour Soup",
      tagline: "Tangy and spicy Indo-Chinese soup",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAVyVHIovVcsPXzZ8_kDA1VFX6ovci-VF5w&s",
      ingredients: [
        "4 cups vegetable broth",
        "1 cup mixed vegetables (carrots, cabbage, bell peppers)",
        "100g tofu, cubed",
        "2 tbsp soy sauce",
        "1 tbsp vinegar",
        "1 tbsp chili sauce",
        "2 tbsp cornstarch",
        "1/4 cup water",
        "1 tsp ginger, grated",
        "1 tsp garlic, minced"
      ],
      steps: [
        "Bring vegetable broth to a boil in a pot.",
        "Add mixed vegetables and cook for 8-10 minutes until tender-crisp.",
        "Add tofu, ginger, and garlic.",
        "In a bowl, mix cornstarch with water to make slurry.",
        "Add soy sauce, vinegar, and chili sauce to the soup.",
        "Slowly add cornstarch slurry while stirring continuously.",
        "Simmer for 5 minutes until soup thickens.",
        "Adjust seasoning and serve hot."
      ]
    },
    { 
      id: 7, 
      name: "Chicken Broth",
      tagline: "Rich and nourishing chicken stock",
      image: "https://abraskitchen.com/wp-content/uploads/2021/11/Homemade-Nourishing-Chicken-Soup-from-Scratch.jpg",
      ingredients: [
        "2kg chicken bones/carcass",
        "12 cups water",
        "2 onions, quartered",
        "3 carrots, chopped",
        "4 celery stalks",
        "4 cloves garlic, smashed",
        "2 bay leaves",
        "1 tsp peppercorns",
        "Salt to taste"
      ],
      steps: [
        "Place chicken bones in a large pot with water.",
        "Bring to a boil, skim off impurities that rise to surface.",
        "Add all vegetables and aromatics.",
        "Reduce heat to low, partially cover, and simmer for 3 hours.",
        "Strain through fine mesh sieve or cheesecloth.",
        "Let cool, then refrigerate to remove fat layer from top.",
        "Use as base for soups or store frozen for up to 6 months."
      ]
    },
    { 
      id: 8, 
      name: "Chicken Vegetable Soup",
      tagline: "Hearty soup with chicken and garden vegetables",
      image: "https://diethood.com/wp-content/uploads/2023/12/chicken-vegetable-soup-recipe-3.jpg",
      ingredients: [
        "300g chicken breast, cubed",
        "1 onion, chopped",
        "2 carrots, diced",
        "2 potatoes, diced",
        "1 cup green beans, chopped",
        "4 cups chicken broth",
        "2 tomatoes, chopped",
        "1 tsp mixed herbs",
        "2 tbsp oil",
        "Salt and pepper to taste"
      ],
      steps: [
        "Heat oil in a pot and sauté onions until golden.",
        "Add chicken and cook until browned on all sides.",
        "Add carrots, potatoes, and green beans, cook for 5 minutes.",
        "Pour in chicken broth and bring to a boil.",
        "Add tomatoes and mixed herbs.",
        "Simmer for 30 minutes until vegetables are tender.",
        "Season with salt and pepper to taste.",
        "Serve hot with bread rolls or crackers."
      ]
    },
    { 
      id: 9, 
      name: "Mulligatawny Soup",
      tagline: "Anglo-Indian curried lentil soup",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLLBgBh_x71ksVntrxbfzJhqM1M9cn1DOrQ&s",
      ingredients: [
        "1 cup red lentils",
        "1 onion, chopped",
        "2 carrots, diced",
        "2 apples, peeled and diced",
        "4 cups vegetable broth",
        "2 tbsp curry powder",
        "1 tsp turmeric",
        "1 tsp cumin",
        "2 tbsp coconut milk",
        "2 tbsp oil"
      ],
      steps: [
        "Rinse lentils and soak for 30 minutes, then drain.",
        "Heat oil and sauté onions until soft.",
        "Add carrots and apples, cook for 5 minutes.",
        "Add spices (curry powder, turmeric, cumin) and cook until fragrant.",
        "Add lentils and vegetable broth, bring to boil.",
        "Simmer for 30 minutes until lentils are soft.",
        "Blend half the soup for creaminess (optional).",
        "Stir in coconut milk and serve hot."
      ]
    },
    { 
      id: 10, 
      name: "Chicken Tikka Corn Soup",
      tagline: "Spicy fusion soup with tikka flavors",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWXNwiW5kMyPwJ0ipRVRDZdGAVw3FRr61BQ&s",
      ingredients: [
        "200g chicken tikka pieces",
        "1 cup sweet corn",
        "1 bell pepper, chopped",
        "4 cups chicken broth",
        "1 cup cream",
        "2 tbsp tikka masala",
        "1 onion, chopped",
        "2 tbsp butter",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Sauté onions in butter until golden brown.",
        "Add chicken tikka pieces and cook for 5 minutes until heated through.",
        "Add bell pepper and sweet corn, cook for 3 minutes.",
        "Add tikka masala and cook for 2 minutes until fragrant.",
        "Pour in chicken broth and bring to simmer.",
        "Cook for 15 minutes until flavors blend.",
        "Stir in cream and heat through (don't boil).",
        "Garnish with fresh coriander and serve."
      ]
    },
    { 
      id: 11, 
      name: "Lentil Soup",
      tagline: "Protein-packed Mediterranean lentil soup",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdbZe-gy4koKqvF4b9ng5gLdTBLtT9cxPqXg&s",
      ingredients: [
        "1 cup brown lentils",
        "1 onion, chopped",
        "2 carrots, diced",
        "2 celery stalks, chopped",
        "4 cups vegetable broth",
        "2 cloves garlic, minced",
        "1 tsp cumin",
        "1 bay leaf",
        "2 tbsp lemon juice"
      ],
      steps: [
        "Rinse lentils and drain.",
        "Sauté onions, carrots, and celery in oil until soft (about 8 minutes).",
        "Add garlic and cumin, cook for 1 minute.",
        "Add lentils, vegetable broth, and bay leaf.",
        "Bring to boil, then reduce heat to simmer.",
        "Cook for 35-40 minutes until lentils are tender.",
        "Remove bay leaf and blend partially if desired.",
        "Stir in lemon juice and serve."
      ]
    },
    { 
      id: 12, 
      name: "Tomato Chicken Macaroni Soup",
      tagline: "Italian-inspired tomato soup with pasta",
      image: "https://eatthegains.com/wp-content/uploads/2022/11/Chicken-Tomato-Soup-10-1120x1120.jpg",
      ingredients: [
        "200g chicken breast, shredded",
        "1 cup macaroni",
        "4 cups tomato puree",
        "2 cups chicken broth",
        "1 onion, chopped",
        "2 cloves garlic",
        "1 tsp oregano",
        "1 tsp basil",
        "2 tbsp olive oil"
      ],
      steps: [
        "Cook macaroni according to package directions, drain and set aside.",
        "Heat olive oil and sauté onion and garlic until soft.",
        "Add shredded chicken and cook for 5 minutes.",
        "Add tomato puree and chicken broth.",
        "Season with oregano and basil.",
        "Simmer for 15 minutes until flavors meld.",
        "Add cooked macaroni and heat through.",
        "Serve hot with grated Parmesan cheese."
      ]
    },
    { 
      id: 13, 
      name: "Barley Soup",
      tagline: "Hearty grain and vegetable soup",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjCye450K5PpaObGWKQmMunXo0_cTTBoLPg&s",
      ingredients: [
        "1 cup pearl barley",
        "2 carrots, diced",
        "2 potatoes, diced",
        "1 onion, chopped",
        "4 cups vegetable broth",
        "2 tbsp tomato paste",
        "1 tsp thyme",
        "2 tbsp olive oil"
      ],
      steps: [
        "Rinse barley and soak for 30 minutes (optional).",
        "Heat oil and sauté onions until translucent.",
        "Add carrots and potatoes, cook for 5 minutes.",
        "Add barley and vegetable broth.",
        "Stir in tomato paste and thyme.",
        "Bring to boil, then reduce to simmer.",
        "Cook for 50-60 minutes until barley is tender.",
        "Season with salt and pepper and serve."
      ]
    },
    { 
      id: 14, 
      name: "Chicken Potato Soup",
      tagline: "Creamy soup with chicken and potatoes",
      image: "https://valentinascorner.com/wp-content/uploads/2024/03/Creamy-Chicken-Potato-Soup-Recipe-1.jpg",
      ingredients: [
        "300g chicken, cubed",
        "3 potatoes, diced",
        "1 onion, chopped",
        "2 carrots, diced",
        "4 cups chicken broth",
        "1 cup milk",
        "2 tbsp flour",
        "2 tbsp butter",
        "Fresh dill for garnish"
      ],
      steps: [
        "Melt butter and sauté onions until soft.",
        "Add chicken and cook until no longer pink.",
        "Add potatoes and carrots, cook for 5 minutes.",
        "Sprinkle flour and stir for 2 minutes to coat.",
        "Gradually add chicken broth while stirring.",
        "Simmer for 20 minutes until vegetables are tender.",
        "Stir in milk and heat through (don't boil).",
        "Garnish with fresh dill and serve."
      ]
    },
    { 
      id: 15, 
      name: "Hareesa Soup",
      tagline: "Traditional meat and wheat porridge",
      image: "https://onestophalal.com/cdn/shop/articles/hareesa-1697927464282_727ae026-7107-443f-87ca-f2ad241d870a_1200x.jpg?v=1697927657",
      ingredients: [
        "500g boneless chicken or mutton",
        "1 cup wheat, soaked overnight",
        "2 onions, finely chopped",
        "4 cloves garlic, minced",
        "2-inch ginger, grated",
        "1 tbsp red chili powder",
        "1 tsp garam masala",
        "1/2 cup ghee",
        "Salt to taste"
      ],
      steps: [
        "Pressure cook meat with wheat until very tender (about 45 minutes).",
        "Shred the meat finely using forks or hands.",
        "Heat ghee and sauté onions until golden brown.",
        "Add garlic and ginger, cook for 2 minutes.",
        "Add chili powder and garam masala, cook for 1 minute.",
        "Add shredded meat and wheat mixture with some cooking liquid.",
        "Cook on low heat for 2-3 hours, stirring occasionally.",
        "Serve hot with lemon wedges and fried onions."
      ]
    },
    { 
      id: 16, 
      name: "Cream of Chicken Soup",
      tagline: "Velvety smooth chicken cream soup",
      image: "https://www.recipetineats.com/tachyon/2023/07/Creamy-Tuscan-Chicken-Soup_3.jpg",
      ingredients: [
        "300g chicken breast",
        "4 cups chicken broth",
        "1 cup heavy cream",
        "1 onion, chopped",
        "2 tbsp butter",
        "2 tbsp flour",
        "1 tsp thyme",
        "Salt and pepper to taste"
      ],
      steps: [
        "Poach chicken in broth until cooked through (about 15-20 minutes).",
        "Remove chicken, shred or dice finely.",
        "Melt butter and sauté onions until soft.",
        "Add flour and cook for 2 minutes.",
        "Gradually add chicken broth while whisking.",
        "Simmer for 10 minutes until slightly thickened.",
        "Add shredded chicken and thyme.",
        "Stir in cream, heat through (don't boil), season and serve."
      ]
    },
    { 
      id: 17, 
      name: "Spinach Soup",
      tagline: "Healthy and vibrant green spinach soup",
      image: "https://static01.nyt.com/images/2013/06/03/health/03recipehealth/03recipehealth-superJumbo.jpg",
      ingredients: [
        "500g fresh spinach",
        "1 onion, chopped",
        "2 cloves garlic",
        "3 cups vegetable broth",
        "1 cup milk",
        "2 tbsp butter",
        "Pinch of nutmeg",
        "Salt and pepper to taste"
      ],
      steps: [
        "Wash spinach thoroughly.",
        "Melt butter and sauté onion and garlic until soft.",
        "Add spinach and cook until wilted (about 3-4 minutes).",
        "Add vegetable broth and bring to boil.",
        "Simmer for 10 minutes.",
        "Blend until smooth using immersion blender.",
        "Return to pot, add milk and nutmeg.",
        "Heat through and serve."
      ]
    },
    { 
      id: 18, 
      name: "Restaurant Style Hot and Sour Soup",
      tagline: "Authentic Chinese hot and sour soup",
      image: "https://redhousespice.com/wp-content/uploads/2021/08/Chinese-hot-and-sour-soup-1-scaled.jpg",
      ingredients: [
        "4 cups chicken broth",
        "100g chicken, shredded",
        "50g mushrooms, sliced",
        "50g bamboo shoots",
        "2 tbsp soy sauce",
        "2 tbsp vinegar",
        "1 tbsp chili sauce",
        "2 tbsp cornstarch",
        "1 egg, beaten"
      ],
      steps: [
        "Bring broth to boil in a pot.",
        "Add chicken, mushrooms, and bamboo shoots.",
        "Cook for 8 minutes until chicken is cooked.",
        "Mix cornstarch with water to make slurry.",
        "Add soy sauce, vinegar, and chili sauce.",
        "Add cornstarch slurry while stirring until thickened.",
        "Slowly drizzle beaten egg while stirring in one direction.",
        "Serve immediately with chili oil on side."
      ]
    },
    { 
      id: 19, 
      name: "Chicken Corn Soup",
      tagline: "Sweet corn and chicken classic",
      image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Amish-Chicken-Corn-Soup_EXPS_FT24_31049_EC_060524_1.jpg",
      ingredients: [
        "200g chicken breast, shredded",
        "1 can cream style corn",
        "4 cups chicken broth",
        "2 tbsp cornstarch",
        "1 egg white",
        "1 tsp ginger, grated",
        "2 spring onions, chopped",
        "Salt and white pepper"
      ],
      steps: [
        "Bring broth to boil in a pot.",
        "Add chicken and ginger, cook for 10 minutes.",
        "Add cream style corn and stir well.",
        "Mix cornstarch with water to make slurry.",
        "Add slurry while stirring until soup thickens slightly.",
        "Slowly pour in beaten egg white while stirring.",
        "Season with salt and white pepper.",
        "Garnish with spring onions and serve."
      ]
    },
    { 
      id: 20, 
      name: "Mixed Grain Soup",
      tagline: "Nutritious multi-grain vegetable soup",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGsoN2CzjBtlKPnz2ATrFnz2i1eR20avHuA&s",
      ingredients: [
        "1/2 cup barley",
        "1/2 cup quinoa",
        "1/4 cup lentils",
        "4 cups vegetable broth",
        "2 carrots, diced",
        "2 celery stalks, chopped",
        "1 onion, chopped",
        "2 tbsp olive oil"
      ],
      steps: [
        "Rinse all grains under cold water.",
        "Heat oil and sauté vegetables until soft (about 8 minutes).",
        "Add grains and cook for 2 minutes, stirring.",
        "Add vegetable broth and bring to boil.",
        "Reduce heat to simmer and cover.",
        "Cook for 45 minutes until grains are tender.",
        "Season with herbs and spices to taste.",
        "Serve hot with crusty bread."
      ]
    },
    { 
      id: 21, 
      name: "Hot and Sour Chicken Macaroni Soup",
      tagline: "Spicy tangy soup with pasta",
      image: "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1-500x500.jpg",
      ingredients: [
        "200g chicken, shredded",
        "1 cup macaroni",
        "4 cups chicken broth",
        "2 tbsp soy sauce",
        "1 tbsp vinegar",
        "1 tbsp chili garlic sauce",
        "2 tbsp cornstarch",
        "1 cup mixed vegetables"
      ],
      steps: [
        "Cook macaroni according to package, drain and set aside.",
        "Bring broth to boil in a pot.",
        "Add chicken and vegetables, cook for 10 minutes.",
        "Add soy sauce, vinegar, and chili garlic sauce.",
        "Mix cornstarch with water to make slurry.",
        "Add slurry while stirring until soup thickens.",
        "Add cooked macaroni and heat through.",
        "Serve hot with extra chili sauce on side."
      ]
    },
    { 
      id: 22, 
      name: "Herbal Soup",
      tagline: "Traditional Chinese medicinal soup",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWhSr-Av1kFPXW6tpS1_vI0qGUYhbZMCl42w&s",
      ingredients: [
        "300g chicken or pork ribs",
        "10 red dates",
        "20g goji berries",
        "15g dried longan",
        "10g dried polygonatum",
        "10g dried Chinese yam",
        "2 liters water",
        "Salt to taste"
      ],
      steps: [
        "Blanch meat in boiling water for 5 minutes, then rinse.",
        "Combine all ingredients in large pot with water.",
        "Bring to boil, then reduce heat to low simmer.",
        "Simmer for 1.5-2 hours until meat is very tender.",
        "Skim off any impurities that rise to surface.",
        "Season with salt if needed (traditionally unsalted).",
        "Strain and serve hot as nourishing broth.",
        "Discard herbs before serving."
      ]
    },
    { 
      id: 23, 
      name: "Mutton Broth",
      tagline: "Rich and nourishing mutton soup",
      image: "https://www.foodireland.com/recipes/wp-content/uploads/2013/07/mutton-broth.jpg",
      ingredients: [
        "500g mutton with bones",
        "8 cups water",
        "1 onion, chopped",
        "4 cloves garlic",
        "1-inch ginger, sliced",
        "1 tsp whole black pepper",
        "4 cloves",
        "2 green cardamom",
        "1 cinnamon stick",
        "1 bay leaf",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash mutton thoroughly and place in cooking pot.",
        "Add water, onion, garlic, ginger, and all whole spices.",
        "Bring to a boil, then reduce heat to low simmer.",
        "Simmer for 2-3 hours until mutton becomes very tender.",
        "Remove any foam that forms on surface during cooking.",
        "Add salt toward the end of cooking.",
        "Strain broth for clear soup, or serve with meat pieces.",
        "Garnish with fresh coriander and serve hot."
      ]
    },
    { 
      id: 24, 
      name: "Pumpkin Soup",
      tagline: "Creamy roasted pumpkin soup",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/07/Spicy-pumpkin-soup-fcf2fe5.jpg",
      ingredients: [
        "1 kg pumpkin, peeled and cubed",
        "1 onion, chopped",
        "2 cloves garlic",
        "4 cups vegetable broth",
        "1 cup coconut milk",
        "1 tsp cinnamon",
        "1/2 tsp nutmeg",
        "2 tbsp olive oil"
      ],
      steps: [
        "Toss pumpkin cubes with oil and roast at 200°C for 25 minutes.",
        "Sauté onion and garlic in pot until soft.",
        "Add roasted pumpkin and vegetable broth.",
        "Simmer for 15 minutes.",
        "Blend until very smooth using immersion blender.",
        "Return to pot, add coconut milk and spices.",
        "Heat through without boiling.",
        "Serve with roasted pumpkin seeds and cream swirl."
      ]
    },
    { 
      id: 25, 
      name: "Pot Pie Soup with Tender Pops",
      tagline: "All the flavors of pot pie in soup form",
      image: "https://i.ytimg.com/vi/JypPJvP2Kp4/maxresdefault.jpg",
      ingredients: [
        "300g chicken, cubed",
        "2 carrots, diced",
        "1 cup peas",
        "2 potatoes, diced",
        "4 cups chicken broth",
        "1 cup milk",
        "2 tbsp flour",
        "Puff pastry for topping"
      ],
      steps: [
        "Sauté chicken until cooked through, remove from pot.",
        "Sauté vegetables in same pot until tender (about 8 minutes).",
        "Add flour and cook for 2 minutes.",
        "Gradually add broth and milk while whisking.",
        "Add chicken back to pot.",
        "Simmer for 20 minutes until thickened.",
        "While soup simmers, bake puff pastry cut into small shapes.",
        "Serve soup with crispy pastry pops on top."
      ]
    },
    { 
      id: 26, 
      name: "Garlic Soup",
      tagline: "Intensely flavorful roasted garlic soup",
      image: "https://c.ndtvimg.com/2020-12/q9bvneb_sweet-corn-soup-recipe_625x300_16_December_20.jpg",
      ingredients: [
        "2 whole garlic bulbs",
        "1 onion, chopped",
        "4 cups vegetable broth",
        "1 cup cream",
        "2 tbsp olive oil",
        "Fresh thyme",
        "Salt and pepper"
      ],
      steps: [
        "Cut tops off garlic bulbs, drizzle with oil, wrap in foil.",
        "Roast at 190°C for 45-60 minutes until soft.",
        "Let cool, then squeeze out roasted garlic cloves.",
        "Sauté onion in pot until translucent.",
        "Add roasted garlic and broth.",
        "Simmer for 20 minutes.",
        "Blend until very smooth.",
        "Stir in cream and thyme, heat through and serve."
      ]
    },
    { 
      id: 27, 
      name: "Manchow Soup With Crispy Noodles",
      tagline: "Indo-Chinese soup with crunchy topping",
      image: "https://www.secondrecipe.com/wp-content/uploads/2020/06/veg-manchow-soup.jpg",
      ingredients: [
        "4 cups vegetable broth",
        "1 cup mixed vegetables (carrots, cabbage, bell peppers)",
        "100g chicken or tofu",
        "2 tbsp soy sauce",
        "1 tbsp vinegar",
        "1 tbsp chili sauce",
        "2 tbsp cornstarch",
        "Crispy noodles for topping"
      ],
      steps: [
        "Sauté vegetables and protein until cooked.",
        "Add broth and bring to boil.",
        "Add soy sauce, vinegar, and chili sauce.",
        "Mix cornstarch with water to make slurry.",
        "Add slurry while stirring until soup thickens.",
        "Simmer for 10 minutes.",
        "Deep fry noodles until golden and crispy.",
        "Serve soup with generous amount of crispy noodles on top."
      ]
    },
    { 
      id: 28, 
      name: "Oats Soup",
      tagline: "Healthy and hearty oat vegetable soup",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZ_ZD63lz1QYsdz_Dw_tSKJwEss3DFqaFCg&s",
      ingredients: [
        "1 cup rolled oats",
        "4 cups vegetable broth",
        "1 carrot, grated",
        "1 onion, chopped",
        "2 cloves garlic",
        "1 tsp cumin",
        "2 tbsp lemon juice",
        "Fresh coriander"
      ],
      steps: [
        "Dry roast oats in pan for 2-3 minutes until fragrant.",
        "Sauté vegetables in pot until soft.",
        "Add oats and broth.",
        "Bring to boil, then reduce to simmer.",
        "Cook for 15 minutes until oats are soft.",
        "Add cumin and lemon juice.",
        "Garnish with fresh coriander.",
        "Serve hot with crusty bread."
      ]
    },
    { 
      id: 29, 
      name: "Creamy Chicken Macaroni Soup",
      tagline: "Rich and creamy pasta soup",
      image: "https://theunlikelybaker.com/wp-content/uploads/2025/11/4-Macaroni-Sopas.jpg",
      ingredients: [
        "200g chicken, cubed",
        "1 cup macaroni",
        "4 cups chicken broth",
        "1 cup cream",
        "1 onion, chopped",
        "2 tbsp butter",
        "2 tbsp flour",
        "1 tsp mixed herbs"
      ],
      steps: [
        "Cook macaroni according to package, drain and set aside.",
        "Sauté chicken until cooked through, remove from pot.",
        "Melt butter and sauté onions until soft.",
        "Add flour and cook for 2 minutes.",
        "Gradually add broth while whisking.",
        "Add chicken and herbs.",
        "Simmer for 15 minutes.",
        "Stir in cream and macaroni, heat through and serve."
      ]
    },
    { 
      id: 30, 
      name: "Paye Soup",
      tagline: "Rich gelatinous trotter soup",
      image: "https://flavoredbyfatima.com/wp-content/uploads/2020/10/mutton-paya-mutton-trotters.jpeg",
      ingredients: [
        "4 lamb or goat trotters",
        "2 onions, chopped",
        "2-inch ginger, grated",
        "6 cloves garlic",
        "2 tbsp coriander powder",
        "1 tbsp red chili powder",
        "1 tsp turmeric",
        "Fresh ginger for garnish"
      ],
      steps: [
        "Clean trotters thoroughly, wash multiple times.",
        "Pressure cook trotters with water for 2 hours until very tender.",
        "Sauté onions in separate pan until golden brown.",
        "Add ginger, garlic, and spices, cook for 3 minutes.",
        "Add cooked trotters and broth.",
        "Simmer for 3-4 hours until soup becomes thick and gelatinous.",
        "Skim off excess fat if desired.",
        "Serve with fresh ginger, lemon, and chopped coriander."
      ]
    },
    { 
      id: 31, 
      name: "Tomato Soup",
      tagline: "Classic creamy tomato soup",
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg",
      ingredients: [
        "1 kg ripe tomatoes",
        "1 onion, chopped",
        "2 cloves garlic",
        "4 cups vegetable broth",
        "2 tbsp tomato paste",
        "1 tsp sugar",
        "Fresh basil",
        "2 tbsp cream"
      ],
      steps: [
        "Blanch tomatoes in boiling water, peel and chop.",
        "Sauté onion and garlic in pot until soft.",
        "Add tomatoes and tomato paste.",
        "Cook for 10 minutes until tomatoes break down.",
        "Add broth and simmer for 15 minutes.",
        "Blend until very smooth.",
        "Add sugar and fresh basil.",
        "Serve with cream drizzle and croutons."
      ]
    },
    { 
      id: 32, 
      name: "Thai Soup",
      tagline: "Aromatic Thai coconut soup",
      image: "https://kaynutrition.com/wp-content/uploads/2023/10/thai-chicken-noodle-soup-1.jpg",
      ingredients: [
        "4 cups chicken or vegetable broth",
        "2 stalks lemongrass",
        "4 kaffir lime leaves",
        "2-inch galangal, sliced",
        "200g shrimp or chicken",
        "4 mushrooms, sliced",
        "2 tbsp fish sauce",
        "2 tbsp lime juice"
      ],
      steps: [
        "Bruise lemongrass stalks and add to broth.",
        "Add galangal slices and kaffir lime leaves.",
        "Bring to boil and simmer for 10 minutes.",
        "Add protein and mushrooms.",
        "Cook until protein is done (shrimp turn pink).",
        "Remove lemongrass and galangal before serving.",
        "Add fish sauce and lime juice.",
        "Serve with fresh cilantro leaves."
      ]
    },
    { 
      id: 33, 
      name: "Chicken Corn Soup",
      tagline: "Sweet corn and chicken classic",
      image: "https://www.maggi.lk/sites/default/files/srh_recipes/21f2b7c2ebc7628c987903ea4a638ee9.jpg",
      ingredients: [
        "200g chicken breast, shredded",
        "1 can corn kernels",
        "4 cups chicken broth",
        "2 tbsp cornstarch",
        "1 egg white",
        "1 tsp ginger, grated",
        "Spring onions",
        "White pepper"
      ],
      steps: [
        "Bring broth to boil in a pot.",
        "Add chicken and ginger.",
        "Cook for 10 minutes until chicken is done.",
        "Add corn kernels.",
        "Mix cornstarch with water for slurry.",
        "Add slurry while stirring until soup thickens.",
        "Drizzle egg white while stirring.",
        "Garnish with spring onions and white pepper."
      ]
    },
    { 
      id: 34, 
      name: "Mixed Vegetable Soup",
      tagline: "Healthy garden vegetable soup",
      image: "https://www.forkinthekitchen.com/wp-content/uploads/2022/04/220323.vegetable.barley.soup-3802.jpg",
      ingredients: [
        "2 cups mixed vegetables (carrots, peas, beans, corn)",
        "1 onion, chopped",
        "2 cloves garlic",
        "4 cups vegetable broth",
        "2 tomatoes, chopped",
        "1 tsp mixed herbs",
        "2 tbsp olive oil",
        "Salt and pepper"
      ],
      steps: [
        "Sauté onion and garlic in olive oil until soft.",
        "Add mixed vegetables, cook for 5 minutes.",
        "Add tomatoes and cook until soft.",
        "Add vegetable broth and herbs.",
        "Bring to boil, then simmer for 20 minutes.",
        "Season with salt and pepper.",
        "Blend partially if desired for texture.",
        "Serve hot with whole grain bread."
      ]
    },
    { 
      id: 35, 
      name: "Chicken Clear Soup",
      tagline: "Light and delicate clear chicken soup",
      image: "https://sugarfreelondoner.com/wp-content/uploads/2023/11/clear-chicken-soup-1200.jpg",
      ingredients: [
        "300g chicken pieces",
        "6 cups water",
        "1 carrot, sliced",
        "2 celery stalks",
        "1 onion, quartered",
        "4 cloves garlic",
        "1-inch ginger",
        "Salt to taste"
      ],
      steps: [
        "Place chicken in pot with cold water.",
        "Bring to boil, immediately skim impurities.",
        "Add vegetables and aromatics.",
        "Reduce heat and simmer for 40 minutes.",
        "Remove chicken and shred meat.",
        "Strain broth through cheesecloth for clarity.",
        "Return shredded chicken to clear broth.",
        "Season lightly with salt and serve."
      ]
    },
    { 
      id: 36, 
      name: "Noodles Soup",
      tagline: "Asian-style noodle soup",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT2yh9YBNNuh7RzN5J4gv5deNnVpsWUw4jA&s",
      ingredients: [
        "200g noodles",
        "4 cups broth (chicken or vegetable)",
        "1 cup mixed vegetables",
        "100g chicken or tofu",
        "2 tbsp soy sauce",
        "1 tsp sesame oil",
        "Spring onions",
        "Chili flakes (optional)"
      ],
      steps: [
        "Cook noodles according to package, drain and set aside.",
        "Bring broth to boil in a pot.",
        "Add vegetables and protein, cook for 10 minutes.",
        "Season with soy sauce and sesame oil.",
        "Place cooked noodles in serving bowls.",
        "Ladle hot broth with vegetables over noodles.",
        "Garnish with spring onions.",
        "Add chili flakes if desired and serve."
      ]
    },
    { 
      id: 37, 
      name: "19B Soup",
      tagline: "Special signature soup",
      image: "https://i.ytimg.com/vi/yqPFPNhqG1w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDYXmye0zIrwk7FMmzR8AruWEYTJA",
      ingredients: [
        "4 cups chicken broth",
        "200g chicken, shredded",
        "1 cup mixed vegetables",
        "2 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "1 tsp white pepper",
        "2 tbsp cornstarch",
        "1 egg, beaten"
      ],
      steps: [
        "Bring broth to boil in a pot.",
        "Add chicken and vegetables.",
        "Cook for 15 minutes until vegetables are tender.",
        "Add soy sauce, oyster sauce, and white pepper.",
        "Mix cornstarch with water to make slurry.",
        "Add slurry while stirring until soup thickens.",
        "Slowly drizzle beaten egg while stirring.",
        "Garnish and serve hot."
      ]
    },
    { 
      id: 38, 
      name: "Fish Vegetable and Noodle Soup",
      tagline: "Light fish soup with noodles",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9QYX7gZb0ZvPyexK40_Nspt-9MnPOwaagQ&s",
      ingredients: [
        "300g white fish fillets (cod, tilapia, or snapper)",
        "1 cup noodles",
        "4 cups fish or vegetable broth",
        "1 cup mixed vegetables",
        "2 tbsp fish sauce",
        "1 tbsp lime juice",
        "1 tsp ginger, grated",
        "Fresh cilantro"
      ],
      steps: [
        "Cook noodles according to package, drain and set aside.",
        "Bring broth to gentle simmer in pot.",
        "Add ginger and vegetables.",
        "Cook for 8 minutes until vegetables are tender.",
        "Add fish pieces gently to pot.",
        "Cook for 5 minutes until fish flakes easily.",
        "Add noodles, fish sauce, and lime juice.",
        "Garnish with fresh cilantro and serve."
      ]
    }
  ];

  // Voice instructions handler
  const speakInstructions = (instructions, stepIndex = 0) => {
    if ('speechSynthesis' in window) {
      if (speechSynthesisRef.current && isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setCurrentStep(0);
        setProgress(0);
        speechSynthesisRef.current = null;
        return;
      }

      if (stepIndex >= 0 && stepIndex < instructions.length) {
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = `Step ${stepIndex + 1}: ${instructions[stepIndex]}`;
        utterance.rate = 1.0;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        setCurrentStep(stepIndex + 1);
        const stepProgress = ((stepIndex + 1) / instructions.length) * 100;
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
    if (selectedSoup && currentStep < selectedSoup.steps.length) {
      stopSpeaking();
      speakInstructions(selectedSoup.steps, currentStep);
    }
  };

  const speakPreviousStep = () => {
    if (selectedSoup && currentStep > 1) {
      stopSpeaking();
      speakInstructions(selectedSoup.steps, currentStep - 2);
    }
  };

  const handleSoupSelect = (soup) => {
    setSelectedSoup(soup);
    setShowDetailPanel(true);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const closeDetailPanel = () => {
    stopSpeaking();
    setShowDetailPanel(false);
    setSelectedSoup(null);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="soups-page">
      {/* Header */}
      <header className="soups-header">
        <div className="soups-header-content">
          <h1 className="soups-page-title">Soup Recipe Collection</h1>
          <p className="soups-page-description">
            A curated selection of comforting and flavorful soups from around the world.
          </p>
        </div>
      </header>

      {/* Soups Grid */}
      <main className="soups-main">
        <div className="soups-grid-section">
          <div className="soups-grid">
            {soups.map(soup => (
              <div 
                key={soup.id} 
                className="soups-technique-card"
                onClick={() => handleSoupSelect(soup)}
              >
                <div 
                  className="soups-card-image"
                  style={{ backgroundImage: `url(${soup.image})` }}
                ></div>
                
                <div className="soups-card-content">
                  <h3 className="soups-card-title">{soup.name}</h3>
                  <p className="soups-card-description">{soup.tagline}</p>
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

      {/* DETAIL MODAL with SELECTED SOUP IMAGE as Background */}
      {showDetailPanel && selectedSoup && (
        <div className="soups-modal-overlay" onClick={closeDetailPanel}>
          <div 
            className="soups-modal" 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url(${selectedSoup.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <button className="soups-modal-close" onClick={closeDetailPanel}>×</button>
            
            <div className="soups-modal-header">
              <div className="soups-modal-title">
                <h2>{selectedSoup.name}</h2>
              </div>
            </div>

            <div className="soups-modal-content">
              {/* COLUMN 1 - INGREDIENTS */}
              <div className="soups-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="soups-ingredients-list">
                  {selectedSoup.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="soups-ingredient-item">
                      <span className="soups-ingredient-bullet">•</span>
                      <span className="soups-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 2 - STEPS TO MAKE */}
              <div className="soups-modal-steps">
                <h3>Steps to Make </h3>
                <div className="soups-steps-list">
                  {selectedSoup.steps.map((step, idx) => (
                    <div key={idx} className="soups-step-item">
                      <span className="soups-step-number">{idx + 1}.</span>
                      <span className="soups-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 3 - VOICE INSTRUCTIONS */}
              <div className="soups-modal-voice-container">
                <div className="voice-panel">
                  <h3><i className="fas fa-volume-up"></i> Voice Instructions</h3>
                  
                  <div className="voice-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${progress}%`}}></div>
                    </div>
                    <div className="progress-info">
                      <span>Step {currentStep} of {selectedSoup.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <div className="voice-controls">
                    <button 
                      className={`voice-main-btn ${isPlaying ? 'stop' : 'play'}`}
                      onClick={() => isPlaying ? stopSpeaking() : speakInstructions(selectedSoup.steps)}
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
                        disabled={currentStep >= selectedSoup.steps.length}
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

export default RecipeSoupPage;