import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipesHeavyGravy.css';

const RecipesHeavyGravy = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All Heavy Gravy Recipes (45 recipes) with detailed instructions
  const gravyRecipes = [
    // ==================== NIHARI (5) ====================
    { 
      id: 1, 
      name: "Beef Nihari",
      tagline: "Slow-cooked spicy beef stew - classic breakfast dish",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "1 kg beef shank - with bone, cut into large pieces",
        "1/2 cup cooking oil or ghee",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons nihari masala powder",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon salt (or to taste)",
        "4 cups warm water",
        "1/4 cup wheat flour (for thickening)",
        "1/2 cup water (for flour slurry)",
        "For garnish: ginger julienne, green chilies, fresh coriander, lemon wedges"
      ],
      steps: [
        "Heat oil or ghee in a large heavy-bottomed pot over medium heat. Add sliced onions and fry for 7-8 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2-3 minutes until the raw smell disappears.",
        "Add beef pieces and fry on high heat for 10-12 minutes until the meat is well-browned on all sides.",
        "Add nihari masala, turmeric powder, red chili powder, and salt. Mix well and cook for 3-4 minutes until the spices are fragrant.",
        "Add 4 cups of warm water and bring to a boil. Stir well to combine.",
        "Reduce heat to low, cover the pot, and cook for 2-3 hours until the meat is very tender and falling off the bone. Stir occasionally.",
        "In a small bowl, mix wheat flour with 1/2 cup of water to make a smooth slurry without lumps.",
        "Slowly add the flour slurry to the nihari while stirring continuously to prevent lumps from forming.",
        "Simmer for 15-20 minutes, stirring occasionally, until the gravy thickens to the desired consistency.",
        "The nihari should have a thick, velvety gravy that coats the meat.",
        "Serve hot in bowls, garnished with julienned ginger, sliced green chilies, fresh coriander, and a squeeze of lemon juice.",
        "Enjoy with naan bread."
      ]
    },
    { 
      id: 2, 
      name: "Mutton Nihari",
      tagline: "Nihari with mutton - rich and flavorful",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "1 kg mutton shanks - with bones",
        "1/2 cup cooking oil",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons nihari masala",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon salt",
        "4 cups warm water",
        "1/4 cup wheat flour",
        "1/2 cup water for slurry"
      ],
      steps: [
        "Heat oil in a large pot over medium heat. Fry sliced onions for 7-8 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
        "Add mutton shanks and fry for 10-12 minutes until well-browned on all sides.",
        "Add nihari masala, turmeric, red chili powder, and salt. Mix well and cook for 3-4 minutes.",
        "Add 4 cups of warm water and bring to a boil. Reduce heat to low.",
        "Cover and cook for 2-3 hours until the mutton is very tender and falling off the bone.",
        "Mix wheat flour with 1/2 cup water to make a smooth slurry.",
        "Add the slurry to the nihari while stirring continuously.",
        "Simmer for 15-20 minutes until the gravy thickens.",
        "Serve hot with naan, garnished with ginger, green chilies, coriander, and lemon."
      ]
    },
    { 
      id: 3, 
      name: "Chicken Nihari",
      tagline: "Quick chicken nihari - ready in 1 hour",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "1 kg chicken - curry cut pieces",
        "1/2 cup cooking oil",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons nihari masala",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon salt",
        "3 cups warm water",
        "2 tablespoons wheat flour",
        "1/4 cup water for slurry"
      ],
      steps: [
        "Heat oil in a large pot over medium heat. Fry sliced onions for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add nihari masala, turmeric, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 3 cups of warm water and bring to a boil. Reduce heat to low.",
        "Cover and cook for 25-30 minutes until the chicken is tender.",
        "Mix wheat flour with 1/4 cup water to make a smooth slurry.",
        "Add the slurry to the nihari while stirring continuously.",
        "Simmer for 10-15 minutes until the gravy thickens.",
        "Serve hot with naan, garnished with ginger, green chilies, and coriander."
      ]
    },
    { 
      id: 4, 
      name: "Bong Nihari",
      tagline: "Nihari with bone marrow - extra rich",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "1 kg beef with marrow bones (nalli)",
        "1/2 cup cooking oil",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons nihari masala",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon salt",
        "4 cups warm water",
        "1/4 cup wheat flour",
        "1/2 cup water for slurry"
      ],
      steps: [
        "Follow the same steps as beef nihari (recipe #1).",
        "Ensure you use beef shanks with visible marrow bones.",
        "The marrow will melt into the gravy, making it extra rich and flavorful.",
        "Cook for 3-4 hours until the marrow is completely dissolved.",
        "Serve with extra marrow pieces on top as garnish.",
        "Enjoy with naan bread."
      ]
    },
    { 
      id: 5, 
      name: "Special Nihari",
      tagline: "Restaurant style nihari - extra rich",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "1 kg beef - shank with bone",
        "1/2 cup oil",
        "3 medium onions - thinly sliced",
        "3 tablespoons ginger-garlic paste",
        "3 tablespoons nihari masala",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon salt",
        "1 teaspoon garam masala",
        "4 cups water",
        "1/4 cup wheat flour",
        "1/2 cup water for slurry",
        "For garnish: ginger julienne, green chilies, fresh coriander, lemon"
      ],
      steps: [
        "Follow the beef nihari recipe with extra onions and spices.",
        "Add garam masala at the end for extra aroma.",
        "Cook for 3-4 hours for the richest flavor.",
        "Garnish generously with all toppings.",
        "Serve with naan and enjoy."
      ]
    },

    // ==================== HALEEM (5) ====================
    { 
      id: 6, 
      name: "Beef Haleem",
      tagline: "Slow-cooked meat and lentil porridge - complete meal",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g beef - boneless, cut into cubes",
        "1 cup whole wheat (dalia) - washed and soaked",
        "1/2 cup chana dal - washed and soaked",
        "1/2 cup moong dal - washed",
        "1/2 cup masoor dal - washed",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric powder",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1 cup cooking oil",
        "Salt to taste",
        "For garnish: fried onions, ginger julienne, green chilies, coriander, lemon wedges"
      ],
      steps: [
        "Soak wheat, chana dal, moong dal, and masoor dal in water for 2 hours. Drain before cooking.",
        "In a pressure cooker, add beef with turmeric powder, salt, and 2 cups of water. Pressure cook for 4-5 whistles until very tender.",
        "In a separate large pot, add soaked wheat and dals with 4 cups of water. Cook until very soft and mushy (about 45-60 minutes).",
        "Heat oil in a large pan over medium heat. Add sliced onions and fry for 7-8 minutes until golden brown. Remove half for garnish.",
        "Add ginger-garlic paste to the remaining onions and cook for 2-3 minutes until fragrant.",
        "Add red chili powder, cumin powder, coriander powder, and salt. Cook for 2 minutes.",
        "Add the cooked beef along with its stock. Shred the meat using two forks or a masher.",
        "Add the cooked wheat and dal mixture. Mix everything well.",
        "Reduce heat to low and cook for 30-40 minutes, stirring continuously with a wooden spoon or whisk to blend everything together.",
        "The mixture should become thick and homogenous. Add water if needed to adjust consistency.",
        "Add garam masala and mix well. Cook for another 5-10 minutes.",
        "Serve hot in bowls, topped with fried onions, ginger julienne, sliced green chilies, fresh coriander, and a squeeze of lemon.",
        "Enjoy with naan bread."
      ]
    },
    { 
      id: 7, 
      name: "Mutton Haleem",
      tagline: "Haleem with mutton - rich and flavorful",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g mutton - boneless cubes",
        "1 cup whole wheat (dalia)",
        "1/2 cup chana dal",
        "1/2 cup moong dal",
        "1/2 cup masoor dal",
        "2 medium onions - sliced",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Soak wheat and dals for 2 hours.",
        "Pressure cook mutton with turmeric and salt until very tender.",
        "Cook wheat and dals separately until soft.",
        "Heat oil, fry onions until golden. Remove half for garnish.",
        "Add ginger-garlic to remaining onions, cook for 2 minutes.",
        "Add spices and cook for 2 minutes.",
        "Add mutton with stock, shred the meat.",
        "Add cooked wheat and dals, mix well.",
        "Cook on low heat for 30-40 minutes, stirring continuously.",
        "Add garam masala and mix.",
        "Serve hot with garnishes."
      ]
    },
    { 
      id: 8, 
      name: "Chicken Haleem",
      tagline: "Lighter chicken haleem - quicker to make",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - boneless cubes",
        "1 cup whole wheat (dalia)",
        "1/2 cup chana dal",
        "1/2 cup moong dal",
        "2 medium onions - sliced",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric",
        "1 teaspoon cumin powder",
        "1 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Soak wheat and dals for 2 hours.",
        "Pressure cook chicken with turmeric and salt until tender. Shred the chicken.",
        "Cook wheat and dals until soft.",
        "Heat oil, fry onions until golden.",
        "Add ginger-garlic and spices, cook for 2 minutes.",
        "Add shredded chicken with stock.",
        "Add cooked wheat and dals, mix well.",
        "Cook on low heat for 20-25 minutes, stirring continuously.",
        "Serve hot with fried onions and garnishes."
      ]
    },
    { 
      id: 9, 
      name: "Hyderabadi Haleem",
      tagline: "Famous Hyderabadi haleem - rich and aromatic",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g beef or mutton",
        "1 cup whole wheat (dalia)",
        "1/2 cup chana dal",
        "1/2 cup moong dal",
        "1/2 cup rice - washed",
        "2 medium onions - sliced",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric",
        "1 teaspoon garam masala",
        "1 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Soak wheat, dals, and rice for 2 hours.",
        "Pressure cook meat with turmeric and salt until tender.",
        "Cook grains and dals together until very soft.",
        "Heat oil, fry onions until golden brown.",
        "Add ginger-garlic and spices, cook for 2 minutes.",
        "Add meat with stock, shred well.",
        "Add cooked grains and dal mixture.",
        "Blend well with a whisk for 30-40 minutes.",
        "Add garam masala and serve with fried onions and nuts."
      ]
    },
    { 
      id: 10, 
      name: "Special Haleem",
      tagline: "Restaurant style haleem - extra rich",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g mixed meat (beef and mutton)",
        "1 cup wheat",
        "1/2 cup chana dal",
        "1/2 cup moong dal",
        "1/2 cup masoor dal",
        "3 medium onions - sliced",
        "3 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric",
        "1 teaspoon cumin",
        "1 teaspoon coriander",
        "1 teaspoon garam masala",
        "1 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Follow the main haleem recipe with extra meat and spices.",
        "Use both beef and mutton for richer flavor.",
        "Cook for longer to achieve the perfect consistency.",
        "Garnish with fried onions, nuts, and fresh herbs.",
        "Serve hot."
      ]
    },

    // ==================== PAYE (SIRI PAYE) (4) ====================
    { 
      id: 11, 
      name: "Mutton Paye",
      tagline: "Trotters curry - rich and gelatinous",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "4 mutton trotters (paye) - cleaned thoroughly",
        "2 medium onions - sliced",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric powder",
        "1 teaspoon salt",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "6 cups warm water",
        "1/4 cup wheat flour",
        "1/2 cup water for slurry",
        "For garnish: ginger julienne, green chilies, coriander, lemon"
      ],
      steps: [
        "Clean the trotters thoroughly. Scrub them well and remove any hair. Wash multiple times.",
        "Heat oil in a large heavy-bottomed pot over medium heat. Add sliced onions and fry for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
        "Add the cleaned trotters and fry for 10-12 minutes until they change color.",
        "Add red chili powder, turmeric powder, cumin powder, coriander powder, and salt. Mix well and cook for 3-4 minutes.",
        "Add 6 cups of warm water and bring to a boil. Reduce heat to low.",
        "Cover and cook for 3-4 hours until the meat is falling off the bones and the cartilage has softened.",
        "Mix wheat flour with 1/2 cup water to make a smooth slurry.",
        "Add the slurry to the paye while stirring continuously to prevent lumps.",
        "Simmer for 20-30 minutes until the gravy thickens to a rich, sticky consistency.",
        "Add garam masala and mix well.",
        "Serve hot with naan, garnished with ginger, green chilies, coriander, and lemon."
      ]
    },
    { 
      id: 12, 
      name: "Beef Paye",
      tagline: "Beef trotters curry - hearty and rich",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "4 beef trotters - cleaned",
        "2 medium onions - sliced",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric",
        "1 teaspoon salt",
        "1 teaspoon cumin powder",
        "1/2 cup oil",
        "6 cups water",
        "1/4 cup flour",
        "1/2 cup water for slurry"
      ],
      steps: [
        "Clean beef trotters thoroughly.",
        "Heat oil, fry onions until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add trotters and fry for 10-12 minutes.",
        "Add spices and salt. Mix well.",
        "Add 6 cups of water and bring to a boil.",
        "Cover and cook for 3-4 hours until very tender.",
        "Make flour slurry and add to the curry.",
        "Simmer for 20 minutes until thickened.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 13, 
      name: "Kashmiri Paye",
      tagline: "Kashmiri style trotters - aromatic",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "4 mutton trotters - cleaned",
        "2 medium onions - sliced",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon fennel powder",
        "1 teaspoon dry ginger powder",
        "1 teaspoon salt",
        "1/2 cup oil",
        "1 cup yogurt - beaten",
        "6 cups water"
      ],
      steps: [
        "Clean trotters thoroughly.",
        "Heat oil, fry onions until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add trotters and fry for 10 minutes.",
        "Add fennel powder, dry ginger, red chili, and salt.",
        "Add beaten yogurt and mix well. Cook for 5 minutes.",
        "Add 6 cups of water and bring to a boil.",
        "Cover and cook for 3-4 hours until tender.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 14, 
      name: "Special Paye",
      tagline: "Rich and creamy paye - restaurant style",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "4 trotters - cleaned",
        "3 medium onions - sliced",
        "3 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric",
        "1 teaspoon cumin",
        "1 teaspoon garam masala",
        "1/2 cup oil",
        "6 cups water",
        "1/4 cup flour",
        "1/2 cup yogurt"
      ],
      steps: [
        "Follow basic paye recipe.",
        "Add yogurt for extra richness and tanginess.",
        "Cook until very tender and gravy is thick.",
        "Garnish generously and serve with naan."
      ]
    },

    // ==================== KHICHDA (3) ====================
    { 
      id: 15, 
      name: "Beef Khichda",
      tagline: "Rich meat and lentil porridge - similar to haleem",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g beef - boneless cubes",
        "1 cup rice - washed and soaked",
        "1/2 cup chana dal - soaked",
        "1/2 cup moong dal - soaked",
        "1/2 cup masoor dal - soaked",
        "2 medium onions - sliced",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric",
        "1 teaspoon cumin powder",
        "1 teaspoon garam masala",
        "1 cup oil",
        "Salt to taste",
        "For garnish: fried onions, ginger, green chilies, coriander, lemon"
      ],
      steps: [
        "Soak rice and dals for 30 minutes.",
        "Pressure cook beef with turmeric and salt until very tender. Shred the meat.",
        "In a separate pot, cook rice and dals with 4 cups of water until very soft and mushy.",
        "Heat oil in a large pan, fry onions until golden brown. Remove half for garnish.",
        "Add ginger-garlic paste to remaining onions, cook for 2 minutes.",
        "Add red chili powder, cumin, and salt. Cook for 2 minutes.",
        "Add shredded beef with its stock.",
        "Add cooked rice and dal mixture. Mix well.",
        "Cook on low heat for 20-30 minutes, stirring continuously with a wooden spoon.",
        "Mash the mixture with the back of the spoon until well blended.",
        "Add garam masala and mix well.",
        "Serve hot with fried onions, ginger, green chilies, coriander, and lemon."
      ]
    },
    { 
      id: 16, 
      name: "Mutton Khichda",
      tagline: "Khichda with mutton - rich and flavorful",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g mutton - boneless cubes",
        "1 cup rice",
        "1/2 cup chana dal",
        "1/2 cup moong dal",
        "1/2 cup masoor dal",
        "2 onions - sliced",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili",
        "1 teaspoon turmeric",
        "1 teaspoon cumin",
        "1 teaspoon garam masala",
        "1 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Follow same steps as beef khichda.",
        "Use mutton instead of beef.",
        "Cook until mutton is very tender.",
        "Serve hot with garnishes."
      ]
    },
    { 
      id: 17, 
      name: "Chicken Khichda",
      tagline: "Lighter chicken version - quicker to make",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "500g chicken - boneless cubes",
        "1 cup rice",
        "1/2 cup chana dal",
        "1/2 cup moong dal",
        "2 onions - sliced",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili",
        "1 teaspoon turmeric",
        "1 teaspoon cumin",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Cook chicken until tender and shred.",
        "Cook rice and dals until soft.",
        "Follow same mixing process.",
        "Serve hot with garnishes."
      ]
    },

    // ==================== KORMA (4) ====================
    { 
      id: 18, 
      name: "Chicken Korma",
      tagline: "Rich creamy chicken curry - Mughlai dish",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken - curry cut pieces",
        "1 cup plain yogurt - beaten until smooth",
        "2 medium onions - thinly sliced",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "4 whole cloves",
        "2 green cardamom pods",
        "1 small cinnamon stick",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1/4 cup heavy cream",
        "2 tablespoons almond paste",
        "2 tablespoons fried onions for garnish"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add whole spices (cloves, cardamom, cinnamon) and cumin seeds. Sauté for 30 seconds until fragrant.",
        "Add sliced onions and fry for 7-8 minutes until dark golden brown.",
        "Remove half of the fried onions and set aside for garnish.",
        "Add ginger-garlic paste to the remaining onions and cook for 2-3 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Reduce heat to low. Add beaten yogurt slowly, stirring continuously to prevent curdling.",
        "Add 1/2 cup of warm water and stir well.",
        "Cover and cook on low heat for 20-25 minutes until the chicken is tender.",
        "Add cream and almond paste. Simmer for 5-7 minutes on low heat.",
        "Add garam masala and mix well.",
        "Garnish with reserved fried onions and serve hot with naan or rice."
      ]
    },
    { 
      id: 19, 
      name: "Mutton Korma",
      tagline: "Royal mutton korma - rich and aromatic",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "1 cup yogurt - beaten",
        "2 medium onions - sliced",
        "2 tablespoons ginger-garlic paste",
        "4 cloves",
        "2 cardamom",
        "1 cinnamon stick",
        "1 teaspoon turmeric",
        "2 teaspoons red chili",
        "1 teaspoon garam masala",
        "1/2 cup oil",
        "Salt to taste",
        "1/4 cup cream",
        "2 tablespoons almond paste"
      ],
      steps: [
        "Follow the same steps as chicken korma.",
        "For mutton, cook for 45-50 minutes until tender.",
        "Add more water if needed during cooking.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 20, 
      name: "Shahi Korma",
      tagline: "Royal rich korma - extra luxurious",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken or mutton",
        "1 cup yogurt",
        "2 onions - sliced",
        "2 tablespoons ginger-garlic paste",
        "4 cloves",
        "2 cardamom",
        "1 cinnamon",
        "1 teaspoon turmeric",
        "1 teaspoon red chili",
        "1 teaspoon garam masala",
        "1/2 cup oil",
        "Salt to taste",
        "1/2 cup cream",
        "2 tablespoons almond paste",
        "1 tablespoon kewra water",
        "Silver leaf for garnish"
      ],
      steps: [
        "Prepare korma using the main recipe.",
        "Add extra cream for richness.",
        "Add kewra water for floral aroma.",
        "Garnish with silver leaf (varak) for royal presentation.",
        "Serve with naan."
      ]
    },
    { 
      id: 21, 
      name: "Nawabi Korma",
      tagline: "Nawabi style korma - rich with nuts",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg meat (chicken or mutton)",
        "1 cup yogurt",
        "2 onions - sliced",
        "2 tablespoons ginger-garlic paste",
        "Whole spices (cloves, cardamom, cinnamon)",
        "1 teaspoon turmeric",
        "1 teaspoon red chili",
        "1 teaspoon garam masala",
        "1/2 cup oil",
        "1/2 cup cream",
        "2 tablespoons almond paste",
        "2 tablespoons cashew paste"
      ],
      steps: [
        "Cook meat with spices until tender.",
        "Add both almond and cashew pastes for richness.",
        "Add cream at the end.",
        "Garnish with fried onions and nuts.",
        "Serve hot."
      ]
    },

    // ==================== KARAHI GRAVY (3) ====================
    { 
      id: 22, 
      name: "Chicken Karahi",
      tagline: "Traditional karahi with thick gravy",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken - curry cut pieces",
        "4 medium tomatoes - chopped",
        "2 tablespoons ginger - julienned",
        "2 tablespoons garlic - chopped",
        "4 green chilies - slit",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili flakes",
        "1 teaspoon black pepper powder",
        "1 teaspoon salt",
        "1/2 cup cooking oil",
        "1 cup warm water",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Heat oil in a karahi (wok) over high heat. Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add julienned ginger, chopped garlic, and slit green chilies. Cook for 2-3 minutes until fragrant.",
        "Add chopped tomatoes and cook for 6-7 minutes until they become soft and mushy.",
        "Add cumin seeds, red chili flakes, black pepper, and salt. Mix well.",
        "Add 1 cup of warm water and bring to a boil.",
        "Cook on high heat for 10-12 minutes until the gravy thickens and the oil separates.",
        "The gravy should be thick and cling to the chicken pieces.",
        "Garnish with fresh coriander and serve hot with naan."
      ]
    },
    { 
      id: 23, 
      name: "Mutton Karahi",
      tagline: "Mutton karahi with thick gravy - rich and spicy",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "4 medium tomatoes - chopped",
        "2 tablespoons ginger - julienned",
        "2 tablespoons garlic - chopped",
        "4 green chilies - slit",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili flakes",
        "1 teaspoon black pepper",
        "1 teaspoon salt",
        "1/2 cup oil",
        "1 cup water"
      ],
      steps: [
        "Heat oil in a karahi. Add mutton and fry for 8-10 minutes until browned.",
        "Add ginger, garlic, and green chilies. Cook for 2-3 minutes.",
        "Add tomatoes and cook until soft and oil separates.",
        "Add cumin, red chili flakes, pepper, and salt.",
        "Add 1 cup of water and cook on high heat until mutton is tender and gravy thickens (about 45-50 minutes).",
        "Serve hot with naan."
      ]
    },
    { 
      id: 24, 
      name: "White Karahi",
      tagline: "Creamy white gravy karahi - mild and rich",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken - curry cut pieces",
        "1 cup plain yogurt - beaten",
        "2 tablespoons ginger paste",
        "2 tablespoons garlic paste",
        "4 green chilies - slit",
        "1 teaspoon white pepper powder",
        "1 teaspoon black pepper powder",
        "1 teaspoon salt",
        "1/2 cup oil",
        "1/2 cup heavy cream"
      ],
      steps: [
        "Heat oil in a karahi. Add chicken and fry for 5-7 minutes until white.",
        "Add ginger paste, garlic paste, and green chilies. Cook for 2-3 minutes.",
        "Add beaten yogurt and cook on high heat for 5-7 minutes until the oil separates.",
        "Add white pepper, black pepper, and salt. Mix well.",
        "Reduce heat to low and add cream. Simmer for 5-7 minutes.",
        "Do not boil after adding cream.",
        "Serve hot with naan."
      ]
    },

    // ==================== HANDI (3) ====================
    { 
      id: 25, 
      name: "Chicken Handi",
      tagline: "Slow-cooked creamy chicken - handi style",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken - curry cut pieces",
        "1 cup plain yogurt - beaten",
        "2 medium onions - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1/4 cup heavy cream",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Heat oil in a handi or heavy-bottomed pot over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Reduce heat to low. Add beaten yogurt slowly, stirring continuously to prevent curdling.",
        "Add 1/2 cup of warm water and stir well.",
        "Cover and cook on low heat for 25-30 minutes until the chicken is tender.",
        "Add cream and garam masala. Simmer for 5-7 minutes on low heat.",
        "Garnish with fresh coriander and serve hot with naan."
      ]
    },
    { 
      id: 26, 
      name: "Mutton Handi",
      tagline: "Creamy mutton handi - rich and flavorful",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "1 cup yogurt - beaten",
        "2 onions - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric",
        "2 teaspoons red chili",
        "1 teaspoon garam masala",
        "1/2 cup oil",
        "Salt to taste",
        "1/4 cup cream"
      ],
      steps: [
        "Follow the same steps as chicken handi.",
        "For mutton, cook for 45-50 minutes until tender.",
        "Add more water if needed during cooking.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 27, 
      name: "Vegetable Handi",
      tagline: "Mixed veg in creamy gravy - vegetarian delight",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554",
      ingredients: [
        "2 cups mixed vegetables (cauliflower, carrots, peas, beans, potatoes)",
        "1 cup yogurt - beaten",
        "2 onions - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric",
        "2 teaspoons red chili",
        "1/2 cup oil",
        "Salt to taste",
        "1/4 cup cream"
      ],
      steps: [
        "Heat oil in a handi. Add cumin seeds and onions. Sauté until golden.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add mixed vegetables and sauté for 3-4 minutes.",
        "Add turmeric, red chili, and salt. Mix well.",
        "Add beaten yogurt slowly, stirring continuously.",
        "Add 1/2 cup water and cook until vegetables are tender (about 15-20 minutes).",
        "Add cream and simmer for 5 minutes.",
        "Serve hot with naan or rice."
      ]
    },

    // ==================== DAL GRAVY (3) ====================
    { 
      id: 28, 
      name: "Dal Makhani",
      tagline: "Creamy black lentils - restaurant style",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup whole urad dal (black lentils) - washed and soaked overnight",
        "1/4 cup rajma (kidney beans) - washed and soaked overnight",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1/2 cup heavy cream",
        "3 tablespoons butter",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash urad dal and rajma together. Soak in plenty of water overnight (8-10 hours). Drain before cooking.",
        "In a pressure cooker, add soaked dal and rajma, 3 cups of water, turmeric powder, and salt. Pressure cook for 5-6 whistles until very soft.",
        "Let the pressure release naturally. Open the lid and mash the dal well with a masher. Set aside.",
        "Heat butter in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
        "Add tomato puree and cook for 5-6 minutes until the butter separates from the masala.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the cooked dal and stir well. Add 1/2 cup of water if needed.",
        "Simmer on low heat for 30-40 minutes, stirring occasionally.",
        "Add cream and simmer for another 10-15 minutes.",
        "Garnish with fresh coriander and serve hot with butter naan."
      ]
    },
    { 
      id: 29, 
      name: "Dal Bukhara",
      tagline: "Creamy black dal from Peshawar - royal dish",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup whole urad dal - washed and soaked overnight",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon red chili powder",
        "1/2 cup heavy cream",
        "3 tablespoons butter",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Cook urad dal until very soft (pressure cook for 5-6 whistles).",
        "Mash the dal well.",
        "Heat butter, add onions and sauté until golden.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add tomato puree and cook until butter separates.",
        "Add red chili powder and salt.",
        "Add dal and simmer on low heat for 1 hour.",
        "Add cream and simmer for 10 minutes.",
        "Serve with butter naan."
      ]
    },
    { 
      id: 30, 
      name: "Dal Fry",
      tagline: "Tempered lentils - simple and delicious",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996d",
      ingredients: [
        "1 cup toor dal (pigeon pea lentils) - washed",
        "1 medium onion - finely chopped",
        "1 medium tomato - finely chopped",
        "1 teaspoon cumin seeds",
        "1 teaspoon mustard seeds",
        "2 dried red chilies",
        "2 tablespoons ghee",
        "1/2 teaspoon turmeric",
        "1 teaspoon red chili powder",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash toor dal and pressure cook with 2 cups of water, turmeric, and salt for 3-4 whistles until soft.",
        "Whisk the dal until smooth. Set aside.",
        "Heat ghee in a small pan over medium heat. Add mustard seeds, cumin seeds, and dried red chilies. Let them crackle for 30 seconds.",
        "Add chopped onions and sauté for 3-4 minutes until golden.",
        "Add chopped tomatoes and cook for 2-3 minutes until soft.",
        "Add red chili powder and mix well.",
        "Pour this tempering over the cooked dal.",
        "Simmer for 5-7 minutes, stirring occasionally.",
        "Garnish with fresh coriander and serve hot with rice."
      ]
    },

    // ==================== ACHAAR GOSHT (2) ====================
    { 
      id: 31, 
      name: "Achaar Gosht",
      tagline: "Pickle flavored meat curry - tangy and spicy",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton or beef - curry cut pieces",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons pickle masala (achari masala)",
        "1 teaspoon fennel seeds",
        "1 teaspoon mustard seeds",
        "1 teaspoon fenugreek seeds",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric powder",
        "1/2 cup cooking oil",
        "1 cup plain yogurt - beaten",
        "Salt to taste",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add fennel seeds, mustard seeds, and fenugreek seeds. Let them crackle for 30 seconds.",
        "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
        "Add meat pieces and fry for 8-10 minutes until well-browned.",
        "Add pickle masala, red chili powder, turmeric, and salt. Mix well and cook for 3-4 minutes.",
        "Reduce heat to low. Add beaten yogurt slowly, stirring continuously.",
        "Add 1 cup of warm water and bring to a boil.",
        "Cover and cook for 45-50 minutes until the meat is tender.",
        "The gravy should be thick and have a distinct pickle-like tangy flavor.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 32, 
      name: "Chicken Achaar",
      tagline: "Chicken pickle curry - quick and tangy",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken - curry cut pieces",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons pickle masala",
        "1 teaspoon fennel seeds",
        "1 teaspoon mustard seeds",
        "2 teaspoons red chili powder",
        "1/2 cup oil",
        "1/2 cup yogurt",
        "Salt to taste",
        "1/2 cup water"
      ],
      steps: [
        "Marinate chicken with pickle masala for 30 minutes.",
        "Heat oil, add fennel and mustard seeds. Let them crackle.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add marinated chicken and fry for 5-7 minutes until white.",
        "Add red chili powder and salt.",
        "Add beaten yogurt and 1/2 cup water. Mix well.",
        "Cover and cook for 20-25 minutes until chicken is tender.",
        "Serve hot with naan."
      ]
    },

    // ==================== ROGAN JOSH (2) ====================
    { 
      id: 33, 
      name: "Kashmiri Rogan Josh",
      tagline: "Red Kashmiri curry - aromatic and rich",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton - curry cut pieces",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon fennel powder",
        "2 teaspoons red chili powder (Kashmiri for red color)",
        "1 teaspoon dry ginger powder",
        "1 cup plain yogurt - beaten",
        "1/2 cup cooking oil",
        "1 teaspoon garam masala",
        "Salt to taste",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
        "Add mutton pieces and fry for 8-10 minutes until well-browned.",
        "Add fennel powder, red chili powder, dry ginger powder, and salt. Mix well and cook for 2-3 minutes.",
        "Reduce heat to low. Add beaten yogurt slowly, stirring continuously.",
        "Add 1 cup of warm water and bring to a boil.",
        "Cover and cook for 45-50 minutes until the mutton is tender.",
        "Sprinkle garam masala and serve hot with naan or rice."
      ]
    },
    { 
      id: 34, 
      name: "Rogan Josh Gravy",
      tagline: "Thick rogan josh - extra rich",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "1 kg mutton",
        "2 onions - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin",
        "1 teaspoon fennel powder",
        "2 teaspoons red chili",
        "1 cup yogurt",
        "1/2 cup oil",
        "1 teaspoon garam masala",
        "Salt to taste"
      ],
      steps: [
        "Fry onions until golden brown.",
        "Add ginger-garlic paste and mutton. Fry until browned.",
        "Add spices and cook for 2 minutes.",
        "Add yogurt and cook until oil separates.",
        "Add 1 cup water and cook until mutton is tender and gravy is thick.",
        "Serve hot."
      ]
    },

    // ==================== LAHORI CHICKEN (2) ====================
    { 
      id: 35, 
      name: "Lahori Chicken",
      tagline: "Spicy Lahori style curry - bold flavors",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken - curry cut pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric powder",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add red chili powder, turmeric, cumin, coriander, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water and bring to a boil.",
        "Cover and cook for 20-25 minutes until the chicken is tender and the gravy has thickened.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 36, 
      name: "Lahori Karahi",
      tagline: "Lahori style karahi - spicy and thick",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "4 medium tomatoes - chopped",
        "2 tablespoons ginger-garlic paste",
        "4 green chilies - slit",
        "1 teaspoon cumin seeds",
        "2 teaspoons red chili powder",
        "1 teaspoon salt",
        "1/2 cup oil",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Heat oil in a karahi. Add chicken and fry for 5-7 minutes until white.",
        "Add ginger-garlic paste and green chilies. Cook for 2 minutes.",
        "Add chopped tomatoes and cook until soft and oil separates.",
        "Add cumin, red chili powder, and salt. Mix well.",
        "Cook on high heat until the gravy thickens and the chicken is tender.",
        "Garnish with coriander and serve with naan."
      ]
    },

    // ==================== PESHAWARI CHICKEN (2) ====================
    { 
      id: 37, 
      name: "Peshawari Chicken",
      tagline: "Peshawar style chicken curry - rustic and flavorful",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken - curry cut pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon black pepper powder",
        "1 teaspoon cumin powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1 cup warm water"
      ],
      steps: [
        "Heat oil in a pan over medium heat. Add chopped onions and sauté for 6-7 minutes until dark golden brown.",
        "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
        "Add chicken pieces and fry for 5-7 minutes until the chicken turns white.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add red chili powder, black pepper, cumin, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water and bring to a boil.",
        "Cover and cook for 20-25 minutes until the chicken is tender.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 38, 
      name: "Peshawari Karahi",
      tagline: "Peshawari style karahi - simple and bold",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken",
        "4 tomatoes - chopped",
        "2 tablespoons ginger - julienned",
        "2 tablespoons garlic - chopped",
        "4 green chilies",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili flakes",
        "1 teaspoon black pepper",
        "1/2 cup oil"
      ],
      steps: [
        "Heat oil in a karahi. Add chicken and fry for 5-7 minutes.",
        "Add ginger, garlic, and green chilies. Cook for 2 minutes.",
        "Add tomatoes and cook until soft and oil separates.",
        "Add cumin, red chili flakes, black pepper, and salt.",
        "Cook on high heat until chicken is tender and gravy is thick.",
        "Serve hot with naan."
      ]
    },

    // ==================== BHUNA GOSHT (2) ====================
    { 
      id: 39, 
      name: "Bhuna Gosht",
      tagline: "Dry meat curry - thick and spicy",
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
        "Add finely chopped onions and sauté for 7-8 minutes until dark golden brown.",
        "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
        "Add mutton pieces and fry for 10-12 minutes until well-browned on all sides.",
        "Add chopped tomatoes and cook for 6-7 minutes until they become dry and the oil separates.",
        "Add red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1/2 cup of warm water. Cover and cook on low heat for 45-50 minutes until the mutton is tender.",
        "Cook uncovered for the last 10-15 minutes to dry out the gravy.",
        "The final dish should have a thick, dry consistency with the masala clinging to the meat.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 40, 
      name: "Chicken Bhuna",
      tagline: "Dry chicken curry - quick and flavorful",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      ingredients: [
        "1 kg chicken - curry cut pieces",
        "2 onions - finely chopped",
        "2 tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1/2 cup oil",
        "Salt to taste",
        "1/4 cup water"
      ],
      steps: [
        "Follow the same steps as mutton bhuna.",
        "For chicken, cook for 20-25 minutes instead of 45 minutes.",
        "The dish should be dry with thick masala coating the chicken.",
        "Serve hot with naan."
      ]
    },

    // ==================== KOFTA (3) ====================
    { 
      id: 41, 
      name: "Meatball Curry",
      tagline: "Kofta in thick gravy - meatball curry",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      ingredients: [
        "500g mutton or chicken mince",
        "1 medium onion - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon red chili powder",
        "1 large egg",
        "2 tablespoons breadcrumbs",
        "For gravy: 2 onions, 2 tomatoes",
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix mince with chopped onion, ginger-garlic paste, cumin, coriander, red chili, egg, breadcrumbs, and salt.",
        "Shape the mixture into small lemon-sized balls (kofta).",
        "Heat oil in a shallow pan. Shallow fry the kofta for 5-7 minutes until golden brown. Remove and set aside.",
        "For gravy: In the same pan, add more oil if needed. Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chopped tomatoes and cook until soft.",
        "Add red chili powder, coriander powder, and salt. Cook for 2-3 minutes.",
        "Add 1 cup of warm water and bring to a boil. Simmer for 5 minutes.",
        "Add the fried kofta and simmer for 10-12 minutes.",
        "Serve hot with naan or rice."
      ]
    },
    { 
      id: 42, 
      name: "Nargisi Kofta",
      tagline: "Kofta stuffed with egg - royal dish",
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
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Mix mince with chopped onion, ginger-garlic paste, cumin, garam masala, raw egg, and salt.",
        "Divide the mince mixture into 4 equal portions.",
        "Take one portion and flatten it in your palm. Place a boiled egg in the center and wrap the mince around it completely.",
        "Repeat with the remaining eggs and mince.",
        "Heat oil and shallow fry the stuffed kofta until golden brown. Set aside.",
        "Prepare gravy using onions and tomatoes (same as meatball curry).",
        "Add the kofta to the gravy and simmer for 10-12 minutes.",
        "Serve hot with naan."
      ]
    },
    { 
      id: 43, 
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
        "1/2 cup oil",
        "Salt to taste"
      ],
      steps: [
        "Make kofta using mince, onion, ginger-garlic, cumin, garam masala, 1/4 cup cream, egg, and salt.",
        "Shape into balls and shallow fry until golden. Set aside.",
        "For gravy: Heat oil, add chopped onions and sauté until golden.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add tomato puree and cook until oil separates.",
        "Add red chili powder and salt. Mix well.",
        "Add 1/2 cup of warm water and bring to a simmer.",
        "Add the remaining 1/4 cup cream and stir well.",
        "Add the fried kofta and simmer for 10 minutes.",
        "Serve hot with naan."
      ]
    },

    // ==================== SPECIAL (2) ====================
    { 
      id: 44, 
      name: "Nalli Nihari",
      tagline: "Bone marrow nihari - extra rich",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      ingredients: [
        "1 kg nalli (beef shanks with marrow)",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons nihari masala",
        "1 teaspoon turmeric",
        "2 teaspoons red chili powder",
        "1/2 cup oil",
        "1/4 cup wheat flour",
        "Salt to taste",
        "4 cups water"
      ],
      steps: [
        "Follow the beef nihari recipe.",
        "Use shanks with visible marrow bones.",
        "Cook for 3-4 hours until the marrow melts into the gravy.",
        "Serve hot with naan and bone marrow pieces on top."
      ]
    },
    { 
      id: 45, 
      name: "Bheja Masala",
      tagline: "Brain curry - delicacy",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      ingredients: [
        "500g lamb brain",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Clean the brain carefully. Remove any membranes. Soak in salted water for 30 minutes.",
        "Boil the brain in water with turmeric and salt for 10 minutes until firm. Drain and cut into cubes.",
        "Heat oil in a pan over medium heat. Add chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add red chili powder and salt. Mix well and cook for 2 minutes.",
        "Add the brain pieces and cook gently for 5-7 minutes. Be careful not to break them.",
        "Add 1/2 cup of water and simmer for 10 minutes.",
        "Sprinkle garam masala and garnish with fresh coriander.",
        "Serve hot with naan or roti."
      ]
    }
  ];
  const allGravyRecipes = gravyRecipes;

  const recipesList = allGravyRecipes;

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
    <div className="heavy-gravy-page">
      <header className="heavy-gravy-header">
        <div className="heavy-gravy-header-content">
          <h1 className="heavy-gravy-title">Heavy Gravy Dishes</h1>
          <p className="heavy-gravy-description">
            Discover 45+ rich and flavorful heavy gravy recipes - Nihari, Haleem, Paye, Korma, Handi, and much more
          </p>
        </div>
      </header>

      <main className="heavy-gravy-main">
        <div className="heavy-gravy-grid-section">
          <div className="heavy-gravy-grid">
            {recipesList.map((recipe) => (
              <div
                key={recipe.id}
                className="heavy-gravy-card"
                onClick={() => handleRecipeClick(recipe)}
              >
                <div
                  className="heavy-gravy-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                />
                <div className="heavy-gravy-card-content">
                  <h3 className="heavy-gravy-card-title">{recipe.name}</h3>
                  <p className="heavy-gravy-card-description">{recipe.tagline}</p>
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
        <div className="heavy-gravy-modal-overlay" onClick={handleCloseModal}>
          <div
            className="heavy-gravy-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button className="heavy-gravy-modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="heavy-gravy-modal-header">
              <div className="heavy-gravy-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="heavy-gravy-modal-content">
              <div className="heavy-gravy-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="heavy-gravy-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="heavy-gravy-ingredient-item">
                      <span className="heavy-gravy-ingredient-bullet">•</span>
                      <span className="heavy-gravy-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="heavy-gravy-modal-steps">
                <h3>Steps to Make</h3>
                <div className="heavy-gravy-steps-list">
                  {selectedRecipe.steps.map((step, index) => (
                    <div key={index} className="heavy-gravy-step-item">
                      <span className="heavy-gravy-step-number">{index + 1}.</span>
                      <span className="heavy-gravy-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="heavy-gravy-modal-voice-container">
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

export default RecipesHeavyGravy;