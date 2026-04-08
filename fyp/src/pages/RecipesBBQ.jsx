import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipesBBQ.css';

const RecipesBBQ = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All BBQ & Grill Recipes (43 recipes) with detailed instructions
  const bbqRecipes = [
    // ==================== CHICKEN TIKKA (6) ====================
    { 
      id: 1, 
      name: "Chicken Tikka",
      tagline: "Classic grilled chicken tikka - smoky and spicy",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 kg chicken - bone-in pieces (thighs and drumsticks preferred)",
        "1 cup plain yogurt - beaten until smooth",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons lemon juice",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric powder",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1 teaspoon salt",
        "2 tablespoons oil",
        "1 teaspoon chaat masala",
        "Charcoal for smoking (optional)"
      ],
      steps: [
        "Wash chicken pieces and pat dry with paper towels. Make deep cuts on each piece to allow marinade to penetrate.",
        "In a large bowl, whisk yogurt until smooth. Add ginger-garlic paste, lemon juice, red chili powder, turmeric, cumin powder, coriander powder, garam masala, salt, and oil.",
        "Mix everything well to form a smooth marinade.",
        "Add chicken pieces to the marinade and coat them thoroughly. Massage the marinade into the cuts.",
        "Cover and refrigerate for 4-6 hours (overnight is best for maximum flavor).",
        "Optional smoky flavor: Heat a small piece of charcoal until red hot. Place it in a small bowl inside the marinade bowl. Pour 1 teaspoon of ghee over the charcoal and immediately cover the bowl. Let the smoke infuse for 5-7 minutes.",
        "Preheat your grill to medium-high heat (about 200°C/400°F). If using an oven, preheat to 220°C (425°F).",
        "Thread the marinated chicken pieces onto skewers or place directly on the grill grate.",
        "Grill for 15-20 minutes, turning every 5 minutes, until the chicken is charred on the outside and cooked through inside.",
        "Baste with oil while grilling to keep it moist.",
        "Remove from grill and sprinkle chaat masala over the hot tikka.",
        "Serve hot with mint chutney, onion rings, and lemon wedges."
      ]
    },
    { 
      id: 2, 
      name: "Malai Tikka",
      tagline: "Creamy white tikka - mild and rich",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 kg boneless chicken - cut into 1-inch cubes",
        "1 cup heavy cream",
        "1/2 cup plain yogurt",
        "2 tablespoons ginger paste",
        "2 tablespoons garlic paste",
        "2 tablespoons green chili paste",
        "1 teaspoon white pepper powder",
        "1 teaspoon cardamom powder",
        "1 teaspoon salt",
        "2 tablespoons oil",
        "2 tablespoons lemon juice",
        "Charcoal for smoking (optional)"
      ],
      steps: [
        "Cut boneless chicken into uniform 1-inch cubes. Pat dry with paper towels.",
        "In a bowl, mix cream, yogurt, ginger paste, garlic paste, green chili paste, white pepper, cardamom powder, salt, oil, and lemon juice.",
        "Whisk until smooth and well combined.",
        "Add chicken cubes to the marinade and mix gently to coat every piece.",
        "Cover and refrigerate for 4-6 hours.",
        "For smoky flavor: Heat charcoal, place in bowl with ghee inside the marinade bowl, cover for 5 minutes.",
        "Preheat grill to medium heat (180°C/350°F).",
        "Thread chicken cubes onto skewers, leaving a little space between pieces for even cooking.",
        "Grill for 12-15 minutes, turning occasionally, until the chicken is golden and cooked through.",
        "Baste with oil or butter while grilling for extra moisture.",
        "The tikka should be white/creamy in color, not charred.",
        "Serve hot with green chutney and naan."
      ]
    },
    { 
      id: 3, 
      name: "Hariyali Tikka",
      tagline: "Green marinated tikka - fresh and herby",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 kg chicken - boneless, cut into cubes",
        "1 cup fresh coriander leaves",
        "1 cup fresh mint leaves",
        "4 green chilies",
        "2 tablespoons ginger-garlic paste",
        "1/2 cup plain yogurt",
        "1 teaspoon cumin powder",
        "1 teaspoon chaat masala",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "In a blender, combine coriander leaves, mint leaves, and green chilies. Blend into a smooth paste using a little water if needed.",
        "In a bowl, mix the green paste with yogurt, ginger-garlic paste, cumin powder, chaat masala, salt, and oil.",
        "Add chicken cubes and mix well to coat completely. The marinade should be bright green.",
        "Cover and refrigerate for 4 hours.",
        "Preheat grill to medium-high heat.",
        "Thread chicken onto skewers.",
        "Grill for 12-15 minutes, turning frequently, until chicken is charred and cooked through.",
        "The green color will deepen and become darker.",
        "Serve hot with onion rings and mint chutney."
      ]
    },
    { 
      id: 4, 
      name: "Achari Tikka",
      tagline: "Pickle flavored tikka - tangy and spicy",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 kg chicken - bone-in pieces",
        "1 cup plain yogurt",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons pickle masala (achari masala)",
        "1 teaspoon fennel seeds",
        "1 teaspoon mustard seeds",
        "1 teaspoon fenugreek seeds",
        "1 teaspoon red chili powder",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "In a small pan, dry roast fennel seeds, mustard seeds, and fenugreek seeds for 1-2 minutes until fragrant. Let cool, then grind to a coarse powder.",
        "In a bowl, mix yogurt, ginger-garlic paste, pickle masala, ground spices, red chili powder, salt, and oil.",
        "Make deep cuts on chicken pieces. Add to marinade and coat thoroughly.",
        "Cover and refrigerate for 4-6 hours.",
        "Preheat grill to medium-high heat.",
        "Grill chicken for 15-20 minutes, turning occasionally, until charred and cooked through.",
        "The tikka will have a distinct pickle-like tangy flavor.",
        "Serve hot with mint chutney and salad."
      ]
    },
    { 
      id: 5, 
      name: "Afghani Tikka",
      tagline: "Afghani style chicken - creamy and mild",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 kg chicken - boneless, cut into cubes",
        "1 cup heavy cream",
        "1/2 cup plain yogurt",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon white pepper powder",
        "1 teaspoon cardamom powder",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "In a bowl, mix cream, yogurt, ginger-garlic paste, white pepper, cardamom powder, salt, and oil.",
        "Add chicken cubes and mix well to coat.",
        "Cover and refrigerate for 4 hours.",
        "Preheat grill to medium heat.",
        "Thread chicken onto skewers.",
        "Grill for 12-15 minutes until golden and cooked through. Do not over-char.",
        "The tikka should remain light in color.",
        "Serve hot with naan and garlic yogurt sauce."
      ]
    },
    { 
      id: 6, 
      name: "Balochi Tikka",
      tagline: "Balochistan style spicy tikka - very hot",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 kg mutton or beef - boneless cubes",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons red chili powder",
        "1 tablespoon coriander powder",
        "1 teaspoon cumin powder",
        "1 teaspoon black pepper powder",
        "2 tablespoons mustard oil",
        "Salt to taste",
        "Charcoal for smoking"
      ],
      steps: [
        "In a bowl, mix ginger-garlic paste, red chili powder, coriander powder, cumin powder, black pepper, mustard oil, and salt.",
        "Add meat cubes and coat thoroughly. Mustard oil gives a distinct flavor.",
        "Cover and refrigerate overnight (8-10 hours) for best results.",
        "Add charcoal smoke for extra flavor.",
        "Preheat charcoal grill to high heat.",
        "Thread meat onto skewers.",
        "Grill for 15-20 minutes for mutton (10-12 for beef), turning frequently, until charred and tender.",
        "Serve hot with naan and spicy chutney."
      ]
    },

    // ==================== BOTI (4) ====================
    { 
      id: 7, 
      name: "Chicken Boti",
      tagline: "Boneless chicken cubes - tender and juicy",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 kg boneless chicken - cut into 1-inch cubes",
        "1 cup plain yogurt",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons lemon juice",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric powder",
        "1 teaspoon cumin powder",
        "1 teaspoon garam masala",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "In a bowl, mix yogurt, ginger-garlic paste, lemon juice, red chili powder, turmeric, cumin, garam masala, salt, and oil.",
        "Add chicken cubes and mix well to coat evenly.",
        "Cover and refrigerate for 4 hours.",
        "Preheat grill to medium-high heat.",
        "Thread chicken cubes onto skewers, leaving small gaps between pieces.",
        "Grill for 12-15 minutes, turning every 3-4 minutes, until charred and cooked through.",
        "Baste with oil while grilling to keep moist.",
        "Serve hot with mint chutney and onion rings."
      ]
    },
    { 
      id: 8, 
      name: "Malai Boti",
      tagline: "Creamy chicken boti - melt in mouth",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 kg boneless chicken - cut into cubes",
        "1 cup heavy cream",
        "1/2 cup plain yogurt",
        "2 tablespoons ginger paste",
        "2 tablespoons garlic paste",
        "1 teaspoon white pepper powder",
        "1 teaspoon cardamom powder",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Mix cream, yogurt, ginger paste, garlic paste, white pepper, cardamom, salt, and oil in a bowl.",
        "Add chicken cubes and coat well.",
        "Marinate for 4 hours in the refrigerator.",
        "Preheat grill to medium heat.",
        "Thread chicken onto skewers.",
        "Grill for 10-12 minutes until golden and cooked through.",
        "Do not over-char - the boti should remain light in color.",
        "Serve hot with garlic yogurt sauce and naan."
      ]
    },
    { 
      id: 9, 
      name: "Achari Boti",
      tagline: "Pickle flavored boti - tangy and spicy",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 kg boneless chicken - cubes",
        "1 cup plain yogurt",
        "2 tablespoons pickle masala",
        "1 teaspoon fennel seeds - crushed",
        "1 teaspoon mustard seeds - crushed",
        "1 teaspoon red chili powder",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Crush fennel and mustard seeds coarsely.",
        "Mix yogurt, pickle masala, crushed seeds, red chili, salt, and oil.",
        "Add chicken cubes and coat well.",
        "Marinate for 4 hours.",
        "Grill on medium-high heat for 12-15 minutes until charred.",
        "Serve hot with salad."
      ]
    },
    { 
      id: 10, 
      name: "Beef Boti",
      tagline: "Tender beef cubes - perfect for BBQ",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 kg beef - sirloin or tenderloin, cut into 1-inch cubes",
        "1 cup plain yogurt",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons raw papaya paste (meat tenderizer)",
        "2 teaspoons red chili powder",
        "1 teaspoon cumin powder",
        "1 teaspoon garam masala",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Papaya paste is essential for tenderizing beef. Grate raw papaya and make a paste.",
        "In a bowl, mix yogurt, ginger-garlic paste, papaya paste, red chili, cumin, garam masala, salt, and oil.",
        "Add beef cubes and coat thoroughly. Massage the marinade into the meat.",
        "Cover and refrigerate for 6-8 hours or overnight.",
        "Preheat grill to medium-high heat.",
        "Thread beef onto skewers.",
        "Grill for 15-18 minutes for medium doneness, turning frequently.",
        "Do not overcook or beef will become tough.",
        "Serve hot with naan and mint chutney."
      ]
    },

    // ==================== SEEKH KEBAB (5) ====================
    { 
      id: 11, 
      name: "Chicken Seekh Kebab",
      tagline: "Minced chicken kebabs - soft and flavorful",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g chicken mince (keema)",
        "1 medium onion - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "1/2 teaspoon chaat masala",
        "2 tablespoons fresh coriander - chopped",
        "1 tablespoon fresh mint - chopped",
        "1 large egg (binds the mixture)",
        "Salt to taste",
        "2 tablespoons oil for basting"
      ],
      steps: [
        "In a large bowl, add chicken mince. Ensure the mince is well-drained with no excess water.",
        "Add finely chopped onions, ginger-garlic paste, green chilies, cumin powder, coriander powder, red chili powder, garam masala, chaat masala, fresh coriander, mint, and salt.",
        "Add the egg and mix everything well with your hands.",
        "Knead the mixture for 8-10 minutes until it becomes sticky and binds together. This step is crucial for soft kebabs.",
        "Cover and refrigerate for 1 hour to let flavors develop.",
        "Wet your hands with water. Take a portion of the mixture and mold it onto a skewer in a sausage shape, about 6 inches long.",
        "Repeat with the remaining mixture.",
        "Preheat grill to medium heat or heat a tawa.",
        "If grilling: Cook on medium heat for 10-12 minutes, turning frequently, until evenly browned and cooked through.",
        "If using tawa: Shallow fry with oil until golden on all sides.",
        "Baste with oil while cooking to keep kebabs moist.",
        "Serve hot with mint chutney, onion rings, and lemon wedges."
      ]
    },
    { 
      id: 12, 
      name: "Mutton Seekh Kebab",
      tagline: "Spicy mutton kebabs - rich and flavorful",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g mutton mince (keema)",
        "1 medium onion - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "2 tablespoons fresh coriander - chopped",
        "1 teaspoon salt",
        "1 egg",
        "2 tablespoons oil"
      ],
      steps: [
        "Ensure mutton mince is fresh and well-drained.",
        "Mix all ingredients together in a bowl. Knead well for 8-10 minutes.",
        "Refrigerate for 1 hour.",
        "Mold onto skewers into sausage shapes.",
        "Grill on medium heat for 12-15 minutes, turning frequently, until charred and cooked.",
        "Baste with oil while grilling.",
        "Serve hot with mint chutney."
      ]
    },
    { 
      id: 13, 
      name: "Beef Seekh Kebab",
      tagline: "Beef mince kebabs - hearty and delicious",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g beef mince (keema)",
        "1 medium onion - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "2 tablespoons fresh coriander",
        "1 teaspoon salt",
        "1 egg",
        "2 tablespoons oil"
      ],
      steps: [
        "Mix all ingredients in a bowl. Knead well for 10 minutes.",
        "Refrigerate for 1 hour.",
        "Mold onto skewers.",
        "Grill on medium heat for 12-15 minutes until cooked through.",
        "Serve with chutney."
      ]
    },
    { 
      id: 14, 
      name: "Hariyali Seekh Kebab",
      tagline: "Green herb kebabs - fresh and aromatic",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g chicken or mutton mince",
        "1 cup fresh coriander leaves",
        "1/2 cup fresh mint leaves",
        "4 green chilies",
        "1 medium onion - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin powder",
        "1 teaspoon chaat masala",
        "1 teaspoon salt",
        "1 egg",
        "2 tablespoons oil"
      ],
      steps: [
        "Grind coriander, mint, and green chilies into a smooth paste.",
        "Mix the green paste with mince, onions, ginger-garlic paste, cumin, chaat masala, salt, and egg.",
        "Knead well for 8-10 minutes.",
        "Refrigerate for 1 hour.",
        "Mold onto skewers.",
        "Grill on medium heat for 10-12 minutes until cooked and slightly charred.",
        "Serve hot with mint chutney."
      ]
    },
    { 
      id: 15, 
      name: "Cheese Seekh Kebab",
      tagline: "Kebabs stuffed with cheese - kids favorite",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g chicken mince",
        "100g cheese - cut into small cubes (mozzarella or cheddar)",
        "1 medium onion - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon red chili powder",
        "1 teaspoon salt",
        "2 tablespoons fresh coriander",
        "1 egg"
      ],
      steps: [
        "Mix mince with all ingredients except cheese. Knead well for 8-10 minutes.",
        "Take a portion of the mince mixture and flatten it in your palm.",
        "Place a cheese cube in the center and wrap the mince around it completely.",
        "Gently shape into a sausage on a skewer.",
        "Repeat with remaining mixture and cheese.",
        "Grill on medium heat for 10-12 minutes until cooked and cheese starts to melt.",
        "Serve hot - the cheese will be gooey and melted inside."
      ]
    },

    // ==================== CHAPLI KEBAB (3) ====================
    { 
      id: 16, 
      name: "Chapli Kebab",
      tagline: "Peshawari style minced kebabs - crispy outside, soft inside",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g beef mince (keema)",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon red chili powder",
        "1 teaspoon pomegranate seeds (anardana) - crushed",
        "1 teaspoon garam masala",
        "2 tablespoons fresh coriander - chopped",
        "2 tablespoons fresh mint - chopped",
        "4 tablespoons cornflour (binds the kebab)",
        "1 large egg",
        "Salt to taste",
        "Oil for shallow frying"
      ],
      steps: [
        "In a large bowl, add beef mince. Make sure the mince is well-drained.",
        "Add finely chopped onions, tomatoes, ginger-garlic paste, green chilies, cumin powder, coriander powder, red chili powder, crushed anardana, garam masala, fresh coriander, mint, cornflour, egg, and salt.",
        "Mix everything well with your hands. Do not over-knead as chapli kebabs should have a coarse texture.",
        "Cover and refrigerate for 30 minutes to let flavors meld.",
        "Take a portion of the mixture (about the size of a tennis ball) and flatten it into a patty about 1/2 inch thick.",
        "Heat oil in a shallow pan over medium heat.",
        "Gently place the patties in the hot oil. Do not overcrowd the pan.",
        "Cook for 4-5 minutes on each side until golden brown and crispy.",
        "The edges should be crisp while the inside remains soft.",
        "Drain on paper towels.",
        "Serve hot with naan, raita, and fresh salad."
      ]
    },
    { 
      id: 17, 
      name: "Chicken Chapli Kebab",
      tagline: "Chicken version of chapli - lighter but just as tasty",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g chicken mince",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon red chili powder",
        "1 teaspoon anardana - crushed",
        "2 tablespoons fresh coriander",
        "3 tablespoons cornflour",
        "1 egg",
        "Salt to taste",
        "Oil for frying"
      ],
      steps: [
        "Mix all ingredients in a bowl. Do not over-knead.",
        "Rest for 30 minutes.",
        "Shape into patties.",
        "Shallow fry until golden brown and crispy on both sides.",
        "Serve hot with chutney."
      ]
    },
    { 
      id: 18, 
      name: "Peshawari Chapli Kebab",
      tagline: "Authentic Peshawari recipe - traditional and authentic",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g beef mince (preferably with some fat)",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon red chili powder",
        "1 tablespoon anardana (pomegranate seeds) - crushed",
        "2 tablespoons cornflour",
        "1 egg",
        "Salt to taste",
        "Oil for frying"
      ],
      steps: [
        "Mix all ingredients thoroughly.",
        "Let rest for 30 minutes.",
        "Shape into round patties.",
        "Shallow fry on low-medium heat until golden and crisp.",
        "Serve with naan."
      ]
    },

    // ==================== BIHARI KEBAB (3) ====================
    { 
      id: 19, 
      name: "Bihari Kebab",
      tagline: "Spicy thin meat kebabs - melt in mouth",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g beef - thinly sliced (flank or sirloin)",
        "1 cup plain yogurt",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons raw papaya paste (tenderizer)",
        "2 teaspoons red chili powder",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1 teaspoon salt",
        "2 tablespoons oil",
        "1 teaspoon chaat masala"
      ],
      steps: [
        "Pound the beef slices with a meat mallet to thin them further. This makes them tender.",
        "In a bowl, mix yogurt, ginger-garlic paste, papaya paste, red chili powder, cumin, coriander, garam masala, salt, and oil.",
        "Add beef slices and coat thoroughly. Make sure each slice is well-coated.",
        "Cover and refrigerate for 6-8 hours (overnight is best).",
        "Preheat grill to medium-high heat.",
        "Thread the marinated beef slices onto flat skewers (seekh style), weaving them back and forth.",
        "Grill for 8-10 minutes, turning frequently, until charred and cooked through.",
        "Do not overcook as beef will become tough.",
        "Sprinkle chaat masala and serve hot with mint chutney and naan."
      ]
    },
    { 
      id: 20, 
      name: "Chicken Bihari Kebab",
      tagline: "Chicken version - lighter and quicker",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g chicken breast - thinly sliced",
        "1 cup yogurt",
        "2 tablespoons ginger-garlic paste",
        "1 tablespoon papaya paste",
        "2 teaspoons red chili powder",
        "1 teaspoon cumin powder",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Pound chicken slices thin.",
        "Mix all marinade ingredients.",
        "Marinate chicken for 4 hours.",
        "Thread onto skewers.",
        "Grill for 6-8 minutes until cooked.",
        "Serve hot."
      ]
    },
    { 
      id: 21, 
      name: "Bihari Boti",
      tagline: "Bihari style boti - cubed version",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g beef - cut into 1-inch cubes",
        "1 cup yogurt",
        "2 tablespoons ginger-garlic paste",
        "1 tablespoon papaya paste",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Mix all marinade ingredients.",
        "Add beef cubes and marinate for 6 hours.",
        "Thread onto skewers.",
        "Grill for 12-15 minutes until tender.",
        "Serve hot."
      ]
    },

    // ==================== TANDOORI LEGS (3) ====================
    { 
      id: 22, 
      name: "Tandoori Chicken Legs",
      tagline: "Spicy grilled chicken legs - family favorite",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "6 chicken legs (drumsticks or thighs)",
        "1 cup plain yogurt",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons tandoori masala",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric powder",
        "1 teaspoon cumin powder",
        "1 teaspoon salt",
        "2 tablespoons oil",
        "Red food color - a pinch (optional)"
      ],
      steps: [
        "Make deep slits on the chicken legs to allow marinade to penetrate.",
        "In a bowl, mix yogurt, ginger-garlic paste, tandoori masala, red chili powder, turmeric, cumin, salt, oil, and food color if using.",
        "Apply marinade generously to chicken legs, getting into the slits.",
        "Cover and refrigerate for 4-6 hours.",
        "Preheat grill to medium heat (180°C/350°F).",
        "Place chicken legs on the grill grate.",
        "Grill for 20-25 minutes, turning every 5-6 minutes, until charred and cooked through.",
        "Baste with oil while grilling to keep moist.",
        "The internal temperature should reach 75°C (165°F).",
        "Serve hot with mint chutney and onion rings."
      ]
    },
    { 
      id: 23, 
      name: "Chicken Leg Piece",
      tagline: "Simple grilled chicken leg - basic but delicious",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "4 chicken legs",
        "1 cup yogurt",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Marinate chicken legs with all ingredients for 4 hours.",
        "Grill on medium heat for 20 minutes until cooked.",
        "Serve with salad."
      ]
    },
    { 
      id: 24, 
      name: "Hariyali Chicken Leg",
      tagline: "Green marinated legs - herby and fresh",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "4 chicken legs",
        "1 cup coriander-mint chutney",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin powder",
        "1 teaspoon chaat masala",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Mix chutney with ginger-garlic, cumin, chaat masala, salt, and oil.",
        "Marinate chicken legs for 4 hours.",
        "Grill until charred and cooked through.",
        "Serve hot."
      ]
    },

    // ==================== RESHMI KEBAB (3) ====================
    { 
      id: 25, 
      name: "Reshmi Kebab",
      tagline: "Silky smooth kebabs - royal Mughlai dish",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g chicken mince",
        "1/2 cup heavy cream",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons green chili paste",
        "1 teaspoon white pepper powder",
        "1 teaspoon cardamom powder",
        "1 teaspoon salt",
        "2 tablespoons cornflour",
        "Oil for brushing"
      ],
      steps: [
        "In a bowl, mix chicken mince with cream, ginger-garlic paste, green chili paste, white pepper, cardamom powder, salt, and cornflour.",
        "Knead well for 8-10 minutes until the mixture is very smooth and sticky.",
        "Cover and refrigerate for 1 hour.",
        "Wet your hands with water. Take a portion and shape into patties or onto skewers.",
        "Preheat grill to low-medium heat.",
        "Grill for 8-10 minutes, turning gently, until cooked and lightly golden.",
        "Do not over-char - reshmi kebabs should remain light in color.",
        "Brush with oil while cooking.",
        "Serve hot with mint chutney."
      ]
    },
    { 
      id: 26, 
      name: "Reshmi Tikka",
      tagline: "Silky chicken tikka - creamy and tender",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g boneless chicken - cut into cubes",
        "1/2 cup cream",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons green chili paste",
        "1 teaspoon white pepper",
        "1 teaspoon cardamom powder",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Mix cream, ginger-garlic paste, green chili paste, white pepper, cardamom, salt, and oil.",
        "Add chicken cubes and marinate for 4 hours.",
        "Thread onto skewers.",
        "Grill on low-medium heat for 10-12 minutes until cooked.",
        "Serve hot."
      ]
    },
    { 
      id: 27, 
      name: "Malai Reshmi",
      tagline: "Creamy reshmi kebab - extra rich",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g boneless chicken",
        "1 cup heavy cream",
        "2 tablespoons ginger paste",
        "2 tablespoons garlic paste",
        "1 teaspoon white pepper",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Mix all ingredients. Marinate chicken for 4 hours.",
        "Grill on low heat until cooked through.",
        "Serve with naan."
      ]
    },

    // ==================== GALOUTI KEBAB (2) ====================
    { 
      id: 28, 
      name: "Galouti Kebab",
      tagline: "Melt-in-mouth kebabs - Lucknow specialty",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g beef mince (very fine mince)",
        "1 tablespoon raw papaya paste",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "1 teaspoon cardamom powder",
        "1 teaspoon nutmeg powder",
        "1 teaspoon mace powder",
        "1 teaspoon salt",
        "2 tablespoons fried onions paste",
        "2 tablespoons ghee for frying"
      ],
      steps: [
        "In a bowl, mix beef mince with papaya paste, ginger-garlic paste, and all spice powders.",
        "Let it rest for 2 hours. The papaya acts as a tenderizer.",
        "Add fried onion paste (blend fried onions with a little water).",
        "Knead the mixture well for 10 minutes until very smooth and soft.",
        "Cover and refrigerate for 1 hour.",
        "Take small portions and shape into flat patties (about 2 inches in diameter).",
        "Heat ghee in a pan over low heat.",
        "Shallow fry the patties on low heat for 2-3 minutes per side until golden brown.",
        "The kebabs should be very soft and melt in your mouth.",
        "Serve hot with ulte tawe ka paratha and mint chutney."
      ]
    },
    { 
      id: 29, 
      name: "Chicken Galouti",
      tagline: "Chicken version - lighter but just as soft",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g chicken mince",
        "1 tablespoon raw papaya paste",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon red chili powder",
        "1 teaspoon garam masala",
        "1 teaspoon salt",
        "2 tablespoons fried onions paste",
        "2 tablespoons ghee"
      ],
      steps: [
        "Mix all ingredients and rest for 2 hours.",
        "Shape into small patties.",
        "Shallow fry on low heat until golden.",
        "Serve hot."
      ]
    },

    // ==================== GRILLED FISH (3) ====================
    { 
      id: 30, 
      name: "Fish Tikka",
      tagline: "Grilled fish fillets - light and healthy",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g firm white fish fillets (salmon, cod, or sea bass) - cut into cubes",
        "1/2 cup plain yogurt",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons lemon juice",
        "2 teaspoons red chili powder",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Cut fish into 1-inch cubes. Pat dry with paper towels.",
        "In a bowl, mix yogurt, ginger-garlic paste, lemon juice, red chili powder, cumin, coriander, salt, and oil.",
        "Add fish cubes and gently mix to coat. Fish is delicate, so mix gently.",
        "Marinate for only 30-45 minutes (fish doesn't need long marination).",
        "Preheat grill to high heat.",
        "Thread fish cubes onto skewers carefully.",
        "Grill for 3-4 minutes per side only. Fish cooks very quickly.",
        "Do not overcook or fish will become dry.",
        "Serve hot with lemon wedges and mint chutney."
      ]
    },
    { 
      id: 31, 
      name: "Grilled Fish",
      tagline: "Whole grilled fish - impressive main course",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "1 whole fish (pomfret, sea bass, or trout) - cleaned",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons lemon juice",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric powder",
        "1 teaspoon cumin powder",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Clean the fish thoroughly. Make 3-4 deep slits on each side of the fish.",
        "In a bowl, mix ginger-garlic paste, lemon juice, red chili powder, turmeric, cumin, salt, and oil.",
        "Apply the marinade generously all over the fish, including inside the cavity and into the slits.",
        "Cover and refrigerate for 1 hour.",
        "Preheat grill to medium-high heat.",
        "Place the fish on the grill grate.",
        "Grill for 10-12 minutes per side, depending on the thickness of the fish.",
        "Flip carefully using a wide spatula.",
        "The fish is done when the flesh flakes easily with a fork.",
        "Serve hot with lemon wedges and mint chutney."
      ]
    },
    { 
      id: 32, 
      name: "Tandoori Fish",
      tagline: "Tandoor style fish - smoky and charred",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish fillets - cut into pieces",
        "1/2 cup yogurt",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon red chili powder",
        "1 teaspoon chaat masala",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Marinate fish for 45 minutes.",
        "Grill on high heat for 3-4 minutes per side.",
        "Sprinkle chaat masala before serving.",
        "Serve hot."
      ]
    },

    // ==================== GRILLED VEGETABLES (3) ====================
    { 
      id: 33, 
      name: "Grilled Veg Platter",
      tagline: "Mixed grilled vegetables - perfect BBQ side",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "2 capsicums (bell peppers) - cut into cubes",
        "2 onions - cut into cubes",
        "2 tomatoes - thick slices",
        "1 zucchini - sliced",
        "1 eggplant - sliced",
        "2 tablespoons olive oil",
        "1 teaspoon red chili powder",
        "1 teaspoon cumin powder",
        "1 teaspoon dried oregano",
        "1 teaspoon salt"
      ],
      steps: [
        "Cut all vegetables into similar-sized pieces for even cooking.",
        "In a bowl, mix olive oil, red chili powder, cumin, oregano, and salt.",
        "Add vegetables and toss to coat evenly.",
        "Thread vegetables onto skewers, alternating colors for presentation.",
        "Preheat grill to medium-high heat.",
        "Grill skewers for 8-10 minutes, turning occasionally, until vegetables are charred and tender-crisp.",
        "Do not overcook - vegetables should still have some bite.",
        "Serve hot with mint chutney."
      ]
    },
    { 
      id: 34, 
      name: "Tandoori Mushroom",
      tagline: "Grilled mushrooms - juicy and flavorful",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g button mushrooms - cleaned",
        "1/2 cup yogurt",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon red chili powder",
        "1 teaspoon cumin powder",
        "1 teaspoon chaat masala",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Clean mushrooms with a damp cloth (don't wash them in water).",
        "In a bowl, mix yogurt, ginger-garlic paste, red chili, cumin, chaat masala, salt, and oil.",
        "Add mushrooms and gently mix to coat.",
        "Marinate for 30 minutes.",
        "Thread mushrooms onto skewers.",
        "Grill on medium-high heat for 5-7 minutes, turning once, until charred.",
        "Serve hot."
      ]
    },
    { 
      id: 35, 
      name: "Tandoori Paneer",
      tagline: "Grilled cottage cheese - vegetarian delight",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "500g paneer - cut into 1-inch cubes",
        "1 capsicum - cut into cubes",
        "1 onion - cut into cubes",
        "1/2 cup yogurt",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon red chili powder",
        "1 teaspoon cumin powder",
        "1 teaspoon chaat masala",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Soak paneer cubes in warm water for 10 minutes to keep them soft.",
        "In a bowl, mix yogurt, ginger-garlic paste, red chili, cumin, chaat masala, salt, and oil.",
        "Add paneer and vegetable cubes. Gently mix to coat.",
        "Marinate for 30 minutes.",
        "Thread onto skewers, alternating paneer and vegetables.",
        "Grill on medium heat for 5-7 minutes, turning gently, until charred.",
        "Paneer should be golden outside and soft inside.",
        "Serve hot with mint chutney."
      ]
    },

    // ==================== KEBAB MASALA (2) ====================
    { 
      id: 36, 
      name: "Seekh Kebab Masala",
      tagline: "Kebabs in spicy gravy - best of both worlds",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "12 seekh kebabs (pre-cooked)",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish",
        "1 cup warm water"
      ],
      steps: [
        "Prepare seekh kebabs using recipe #11 and set aside.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add tomato puree, red chili powder, turmeric, and salt. Cook for 5-6 minutes until oil separates.",
        "Add 1 cup of warm water and bring to a simmer. Cook for 5 minutes.",
        "Add the pre-cooked seekh kebabs to the gravy.",
        "Simmer for 5-7 minutes, gently spooning gravy over the kebabs.",
        "Sprinkle garam masala and garnish with fresh coriander.",
        "Serve hot with naan or roti."
      ]
    },
    { 
      id: 37, 
      name: "Chapli Kebab Karahi",
      tagline: "Chapli kebabs in karahi - traditional fusion",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "6 chapli kebabs (pre-cooked)",
        "2 medium tomatoes - chopped",
        "2 tablespoons ginger-garlic paste",
        "2 green chilies - slit",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Prepare chapli kebabs using recipe #16 and set aside.",
        "Heat oil in a karahi or wok over medium heat. Add cumin seeds and let them crackle.",
        "Add ginger-garlic paste and cook for 1-2 minutes.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add red chili powder and salt. Mix well.",
        "Add the pre-cooked chapli kebabs and green chilies.",
        "Simmer for 5 minutes, gently stirring.",
        "Garnish with fresh coriander leaves.",
        "Serve hot with naan."
      ]
    },

    // ==================== TANDOORI SPECIALS (3) ====================
    { 
      id: 38, 
      name: "Tandoori Raan",
      tagline: "Whole grilled leg of lamb - showstopper dish",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 whole lamb leg (about 2 kg)",
        "2 cups plain yogurt",
        "4 tablespoons ginger-garlic paste",
        "2 tablespoons red chili powder",
        "1 tablespoon turmeric powder",
        "1 tablespoon cumin powder",
        "1 tablespoon coriander powder",
        "1 tablespoon garam masala",
        "1 teaspoon nutmeg powder",
        "1 teaspoon mace powder",
        "1 tablespoon salt",
        "1/2 cup oil",
        "Charcoal for smoking"
      ],
      steps: [
        "Wash the lamb leg and pat dry. Make deep slits all over the meat with a sharp knife.",
        "In a large bowl, mix yogurt, ginger-garlic paste, red chili powder, turmeric, cumin, coriander, garam masala, nutmeg, mace, salt, and oil.",
        "Apply the marinade generously all over the lamb leg, pushing it into the slits.",
        "Cover and refrigerate for 24-48 hours. The longer, the better.",
        "Add charcoal smoke for 10 minutes before cooking.",
        "Preheat oven or grill to 160°C (325°F).",
        "Place the lamb leg on a roasting rack with a tray underneath to catch drippings.",
        "Roast for 2-3 hours, basting with the marinade every 30 minutes.",
        "For the last 15 minutes, increase heat to 200°C (400°F) to char the outside.",
        "Let the meat rest for 15 minutes before carving.",
        "Serve hot with naan and mint chutney."
      ]
    },
    { 
      id: 39, 
      name: "Mutton Chops",
      tagline: "Grilled mutton chops - tender and juicy",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 kg mutton chops (about 8-10 chops)",
        "1 cup plain yogurt",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons raw papaya paste",
        "2 teaspoons red chili powder",
        "1 teaspoon cumin powder",
        "1 teaspoon garam masala",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Wash mutton chops and pat dry. Trim excess fat if desired.",
        "In a bowl, mix yogurt, ginger-garlic paste, papaya paste, red chili powder, cumin, garam masala, salt, and oil.",
        "Apply marinade to chops and refrigerate for 6-8 hours.",
        "Preheat grill to medium-high heat.",
        "Place chops on the grill grate.",
        "Grill for 5-6 minutes per side for medium doneness.",
        "Baste with oil while grilling.",
        "Serve hot with mint chutney and salad."
      ]
    },
    { 
      id: 40, 
      name: "Tandoori Quail",
      tagline: "Grilled quail (Bater) - delicacy",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "6 quails (bater) - cleaned",
        "1 cup yogurt",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon cumin powder",
        "1 teaspoon garam masala",
        "1 teaspoon salt",
        "2 tablespoons oil"
      ],
      steps: [
        "Clean quails and make slits on them.",
        "Mix all marinade ingredients.",
        "Marinate quails for 4 hours.",
        "Preheat grill to medium heat.",
        "Grill quails for 10-12 minutes, turning occasionally, until cooked through.",
        "Serve hot with salad."
      ]
    },

    // ==================== BBQ SAUCES (3) ====================
    { 
      id: 41, 
      name: "Mint Chutney",
      tagline: "Fresh mint chutney - essential BBQ accompaniment",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 large bunch fresh mint leaves (about 2 cups)",
        "1 large bunch fresh coriander leaves (about 2 cups)",
        "4 green chilies (adjust to taste)",
        "2 tablespoons ginger - chopped",
        "1 tablespoon lemon juice",
        "1 teaspoon cumin powder",
        "1 teaspoon chaat masala",
        "1 teaspoon salt",
        "1/2 cup water (as needed)"
      ],
      steps: [
        "Wash mint and coriander leaves thoroughly.",
        "In a blender, add mint leaves, coriander leaves, green chilies, ginger, lemon juice, cumin powder, chaat masala, and salt.",
        "Add water gradually and blend into a smooth paste.",
        "The chutney should be thick but pourable.",
        "Taste and adjust salt and lemon juice as needed.",
        "Transfer to a bowl and refrigerate until serving.",
        "Serve with all BBQ items."
      ]
    },
    { 
      id: 42, 
      name: "Tamarind Chutney",
      tagline: "Sweet and sour chutney - tangy and delicious",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 cup tamarind pulp",
        "1/2 cup jaggery (or brown sugar)",
        "1 teaspoon cumin powder",
        "1 teaspoon ginger powder",
        "1 teaspoon red chili powder",
        "1 teaspoon salt",
        "1 cup water"
      ],
      steps: [
        "In a pan, add tamarind pulp and water. Bring to a boil.",
        "Reduce heat and simmer for 10 minutes until tamarind softens.",
        "Add jaggery and stir until dissolved.",
        "Add cumin powder, ginger powder, red chili powder, and salt.",
        "Simmer for another 10-15 minutes until the chutney thickens.",
        "Let it cool completely. It will thicken further as it cools.",
        "Store in a glass jar in the refrigerator.",
        "Serve with kebabs and tikkas."
      ]
    },
    { 
      id: 43, 
      name: "Garlic Yogurt Sauce",
      tagline: "Creamy garlic sauce - cooling and delicious",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      ingredients: [
        "1 cup plain yogurt",
        "4 cloves garlic - crushed into paste",
        "1 teaspoon salt",
        "1 teaspoon black pepper powder",
        "2 tablespoons fresh cream (optional)"
      ],
      steps: [
        "Whisk the yogurt in a bowl until smooth and creamy.",
        "Add crushed garlic, salt, and black pepper. Mix well.",
        "Add fresh cream if using and mix.",
        "Chill in the refrigerator for at least 30 minutes before serving.",
        "Serve with all BBQ items, especially seekh kebabs."
      ]
    }
  ];

  const allBBQRecipes = bbqRecipes;

  const recipesList = allBBQRecipes;

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
    <div className="bbq-page">
      <header className="bbq-header">
        <div className="bbq-header-content">
          <h1 className="bbq-title">BBQ & Grills</h1>
          <p className="bbq-description">
            Discover 40+ delicious BBQ recipes - tikka, boti, seekh kebab, chapli, bihari, reshmi, and much more
          </p>
        </div>
      </header>

      <main className="bbq-main">
        <div className="bbq-grid-section">
          <div className="bbq-grid">
            {recipesList.map((recipe) => (
              <div
                key={recipe.id}
                className="bbq-card"
                onClick={() => handleRecipeClick(recipe)}
              >
                <div
                  className="bbq-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                />
                <div className="bbq-card-content">
                  <h3 className="bbq-card-title">{recipe.name}</h3>
                  <p className="bbq-card-description">{recipe.tagline}</p>
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
        <div className="bbq-modal-overlay" onClick={handleCloseModal}>
          <div
            className="bbq-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button className="bbq-modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="bbq-modal-header">
              <div className="bbq-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="bbq-modal-content">
              <div className="bbq-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="bbq-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="bbq-ingredient-item">
                      <span className="bbq-ingredient-bullet">•</span>
                      <span className="bbq-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bbq-modal-steps">
                <h3>Steps to Make</h3>
                <div className="bbq-steps-list">
                  {selectedRecipe.steps.map((step, index) => (
                    <div key={index} className="bbq-step-item">
                      <span className="bbq-step-number">{index + 1}.</span>
                      <span className="bbq-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bbq-modal-voice-container">
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

export default RecipesBBQ;