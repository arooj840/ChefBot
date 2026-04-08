import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipesFish.css';

const RecipesFish = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All Fish Recipes (35+ recipes) with detailed instructions
  const fishRecipes = [
    // ==================== FISH CURRIES (8) ====================
    { 
      id: 1, 
      name: "Fish Curry",
      tagline: "Classic Pakistani fish curry - tangy and spicy",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish fillets (rohu, salmon, or any firm white fish) - cut into pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - blended into smooth puree",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish",
        "2 green chilies - slit lengthwise",
        "1 cup warm water"
      ],
      steps: [
        "Clean and wash fish pieces thoroughly. Pat dry with paper towels. Apply 1/2 teaspoon turmeric powder and a pinch of salt to the fish pieces. Set aside for 15 minutes.",
        "Heat oil in a deep pan over medium heat. Add cumin seeds and let them crackle for 30 seconds until fragrant.",
        "Add finely chopped onions and sauté for 6-7 minutes until they turn golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until the raw smell disappears.",
        "Add tomato puree and cook for 5-6 minutes until the oil separates from the masala.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes until the spices are fragrant.",
        "Add 1 cup of warm water and bring to a boil. Reduce heat and simmer for 5 minutes.",
        "Gently add the fish pieces one by one into the gravy. Be careful not to break them.",
        "Cook for 8-10 minutes on medium-low heat until the fish is cooked through and flakes easily with a fork.",
        "Sprinkle garam masala and garnish with fresh coriander leaves and green chilies.",
        "Serve hot with steamed rice, roti, or naan."
      ]
    },
    { 
      id: 2, 
      name: "Fish Masala",
      tagline: "Spicy fish masala gravy - bold and flavorful",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - cut into pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Marinate fish pieces with 1/2 teaspoon turmeric powder and salt. Set aside for 15 minutes.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft and mushy.",
        "Add red chili powder and salt. Mix well and cook for 2-3 minutes until the oil separates.",
        "Add 1 cup of warm water and bring to a boil. Simmer for 5 minutes.",
        "Gently add the fish pieces and cook for 8-10 minutes until fish is done.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Serve hot with rice or roti."
      ]
    },
    { 
      id: 3, 
      name: "Fish Curry with Coconut",
      tagline: "South Indian style fish curry - creamy coconut flavor",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - cut into pieces",
        "1 cup thick coconut milk",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon mustard seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "Few curry leaves",
        "1/4 cup cooking oil",
        "Salt to taste"
      ],
      steps: [
        "Marinate fish with turmeric powder and salt. Set aside for 15 minutes.",
        "Heat oil in a pan over medium heat. Add mustard seeds and curry leaves. Let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add coconut milk and bring to a gentle simmer. Do not boil vigorously as coconut milk may curdle.",
        "Simmer for 5 minutes on low heat.",
        "Gently add the fish pieces and cook for 8-10 minutes until fish is done.",
        "Serve hot with steamed rice or appam."
      ]
    },
    { 
      id: 4, 
      name: "Fish Kadhai",
      tagline: "Kadhai style fish curry - restaurant style",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - cut into pieces",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 medium capsicum - sliced",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon coriander powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Marinate fish with turmeric and salt. Set aside for 15 minutes.",
        "Heat oil in a kadhai or wok over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and capsicum. Cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1/2 cup of warm water and bring to a simmer.",
        "Gently add the fish pieces and cook for 8-10 minutes until fish is done.",
        "Garnish with fresh coriander leaves and serve hot with naan or roti."
      ]
    },
    { 
      id: 5, 
      name: "Fish Do Pyaza",
      tagline: "Fish with double onions - sweet and savory",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - cut into pieces",
        "2 large onions - thinly sliced (divided use)",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Marinate fish with turmeric and salt. Set aside for 15 minutes.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add half of the sliced onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add turmeric powder, red chili powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1/2 cup of warm water and bring to a simmer.",
        "Gently add the fish pieces and the remaining raw sliced onions.",
        "Cook for 8-10 minutes until fish is done.",
        "Sprinkle garam masala, garnish with coriander, and serve hot."
      ]
    },
    { 
      id: 6, 
      name: "Fish Jalfrezi",
      tagline: "Fish with mixed veggies - Indo-Chinese style",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - boneless, cut into cubes",
        "1 medium capsicum - sliced into strips",
        "1 medium onion - sliced",
        "1 medium tomato - sliced",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "1 tablespoon soy sauce"
      ],
      steps: [
        "Lightly fry the fish cubes in 2 tablespoons of oil for 2-3 minutes until golden. Remove and set aside.",
        "Heat remaining oil in a wok or pan over high heat. Add cumin seeds and let them crackle.",
        "Add sliced onions and sauté for 2 minutes until soft but still crunchy.",
        "Add ginger-garlic paste and cook for 1 minute.",
        "Add capsicum and tomato. Stir-fry for 2-3 minutes on high heat.",
        "Add turmeric powder, red chili powder, salt, and soy sauce. Mix well.",
        "Add the fried fish cubes and toss gently to combine.",
        "Cook for 2-3 minutes until everything is well mixed and heated through.",
        "Serve hot with fried rice or noodles."
      ]
    },
    { 
      id: 7, 
      name: "Fish Malai Curry",
      tagline: "Creamy fish curry - mild and rich",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - cut into pieces",
        "1 cup heavy cream",
        "2 medium onions - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon white pepper powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Marinate fish with turmeric and salt. Set aside for 15 minutes.",
        "Heat oil in a pan over medium heat. Add cumin seeds and let them crackle for 30 seconds.",
        "Add finely chopped onions and sauté for 5-6 minutes until soft and translucent.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add turmeric powder, white pepper powder, and salt. Mix well and cook for 2 minutes.",
        "Add 1/2 cup of warm water and bring to a simmer.",
        "Gently add the fish pieces and cook for 5-6 minutes until almost done.",
        "Reduce heat to low. Add cream and stir gently. Do not boil after adding cream.",
        "Simmer for 5 minutes on low heat.",
        "Garnish with fresh coriander leaves and serve hot with naan or roti."
      ]
    },
    { 
      id: 8, 
      name: "Fish Kofta Curry",
      tagline: "Fish balls in spicy gravy - unique and delicious",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - boneless, minced",
        "1 medium onion - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin powder",
        "1 teaspoon red chili powder",
        "1 large egg",
        "2 tablespoons breadcrumbs",
        "For gravy: 2 onions, 2 tomatoes, ginger-garlic paste, spices",
        "Oil for deep frying",
        "2 tablespoons oil for gravy",
        "Salt to taste"
      ],
      steps: [
        "For koftas: Mix minced fish with chopped onion, ginger-garlic paste, cumin powder, red chili powder, egg, breadcrumbs, and salt.",
        "Shape the mixture into small lemon-sized balls (koftas).",
        "Heat oil for deep frying over medium heat. Fry the koftas until golden brown, about 5-7 minutes. Drain on paper towels and set aside.",
        "For gravy: Heat 2 tablespoons oil in a separate pan. Add cumin seeds and let them crackle.",
        "Add finely chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chopped tomatoes and cook until soft.",
        "Add red chili powder, turmeric powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.",
        "Add 1 cup of warm water and bring to a boil. Simmer for 5-7 minutes.",
        "Add the fried koftas and simmer for 8-10 minutes on low heat.",
        "Sprinkle garam masala and garnish with coriander. Serve hot with rice or roti."
      ]
    },

    // ==================== FISH FRY (5) ====================
    { 
      id: 9, 
      name: "Fish Fry",
      tagline: "Crispy fried fish - perfect starter",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish fillets - cut into pieces",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 tablespoon lemon juice",
        "Salt to taste",
        "Oil for shallow frying",
        "1/2 cup rice flour or semolina (sooji)"
      ],
      steps: [
        "Clean the fish pieces and make 2-3 shallow slits on each piece to allow the marinade to penetrate.",
        "In a bowl, mix ginger-garlic paste, red chili powder, turmeric powder, cumin powder, coriander powder, lemon juice, and salt to make a smooth paste.",
        "Apply this marinade generously to all fish pieces. Cover and refrigerate for 30 minutes.",
        "After marination, sprinkle rice flour or semolina on both sides of each fish piece and coat evenly.",
        "Heat oil in a shallow pan over medium heat. The oil should be about 1/2 inch deep.",
        "When the oil is hot, gently place the fish pieces in the pan. Do not overcrowd.",
        "Cook for 3-4 minutes on each side until golden brown and crispy.",
        "Flip carefully using a spatula to avoid breaking the fish.",
        "Remove and drain on paper towels.",
        "Serve hot with mint chutney, onion rings, and lemon wedges."
      ]
    },
    { 
      id: 10, 
      name: "Karachi Fish Fry",
      tagline: "Famous Karachi style fish fry - crispy and spicy",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish slices - about 1 inch thick",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1 tablespoon lemon juice",
        "Salt to taste",
        "1/2 cup chickpea flour (besan)",
        "2 tablespoons rice flour",
        "Oil for deep frying",
        "Water as needed"
      ],
      steps: [
        "Wash fish slices and pat dry with paper towels. Make slits on both sides.",
        "In a bowl, mix ginger-garlic paste, red chili powder, turmeric, cumin powder, coriander powder, garam masala, lemon juice, and salt.",
        "Apply this marinade to the fish slices. Cover and refrigerate for 30-45 minutes.",
        "In a separate bowl, mix chickpea flour and rice flour. Add water gradually to make a thick, smooth batter (like pakora batter consistency).",
        "Heat oil in a deep pan over medium heat for deep frying.",
        "Dip each marinated fish slice into the batter, coating it completely.",
        "Gently drop the coated fish into the hot oil. Do not overcrowd the pan.",
        "Deep fry for 4-5 minutes on each side until golden brown and crispy.",
        "Remove with a slotted spoon and drain on paper towels.",
        "Serve hot with raita, salad, and lemon wedges."
      ]
    },
    { 
      id: 11, 
      name: "Tawa Fish Fry",
      tagline: "Griddle fried fish - simple and healthy",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - cut into pieces",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon fish masala powder",
        "1 tablespoon lemon juice",
        "Salt to taste",
        "Oil for frying",
        "Lemon wedges for serving",
        "Onion rings for serving"
      ],
      steps: [
        "Clean fish pieces and pat dry. Make shallow slits on both sides.",
        "In a bowl, mix ginger-garlic paste, red chili powder, turmeric powder, fish masala, lemon juice, and salt.",
        "Apply this marinade generously to all fish pieces. Cover and marinate for 30 minutes.",
        "Heat a tawa (griddle) over medium heat and add enough oil to coat the surface.",
        "When the tawa is hot, place the marinated fish pieces on it.",
        "Cook for 4-5 minutes on each side until golden brown and crispy.",
        "Flip carefully using a spatula. Add more oil if needed.",
        "The fish should be cooked through and flake easily when done.",
        "Serve hot with onion rings, lemon wedges, and mint chutney."
      ]
    },
    { 
      id: 12, 
      name: "Andhra Fish Fry",
      tagline: "Spicy Andhra style fish fry - very hot and flavorful",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - cut into pieces",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon cumin powder",
        "1 teaspoon black pepper powder",
        "1 tablespoon lemon juice",
        "Salt to taste",
        "Oil for shallow frying"
      ],
      steps: [
        "Clean fish pieces thoroughly and pat dry. Make deep slits on both sides.",
        "In a bowl, mix ginger-garlic paste, red chili powder, turmeric powder, cumin powder, pepper powder, lemon juice, and salt.",
        "Apply this spicy marinade generously to all fish pieces, making sure it gets into the slits.",
        "Cover and refrigerate for 1 hour for best results.",
        "Heat oil in a shallow pan over medium heat.",
        "Gently place the marinated fish pieces in the hot oil.",
        "Cook for 4-5 minutes on each side until dark golden brown and very crispy.",
        "The fish should be cooked through and the outside should be crunchy.",
        "Remove and drain on paper towels.",
        "Serve hot with sliced onions, lemon wedges, and a spicy chutney."
      ]
    },
    { 
      id: 13, 
      name: "Fish Finger",
      tagline: "Crispy fish fingers - kids favorite",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish fillets - boneless, cut into finger-sized strips",
        "1 cup all-purpose flour (maida)",
        "2 large eggs - beaten well",
        "1 cup breadcrumbs (panko or regular)",
        "1 teaspoon red chili powder",
        "1/2 teaspoon black pepper powder",
        "Salt to taste",
        "Oil for deep frying"
      ],
      steps: [
        "Pat dry the fish strips with paper towels. Season with salt and pepper on both sides.",
        "Set up a breading station with three shallow bowls: Bowl 1 - flour mixed with red chili powder and salt. Bowl 2 - beaten eggs. Bowl 3 - breadcrumbs.",
        "Take one fish strip and coat it in the flour mixture, shaking off excess.",
        "Dip it into the beaten eggs, making sure it's fully coated.",
        "Roll it in the breadcrumbs, pressing gently so the crumbs stick well.",
        "For extra crispy fingers, repeat the egg and breadcrumb coating once more.",
        "Place the coated fish fingers on a plate and repeat with remaining strips.",
        "Heat oil in a deep pan over medium heat for deep frying.",
        "Gently drop the fish fingers into the hot oil. Do not overcrowd.",
        "Deep fry for 3-4 minutes until golden brown and crispy.",
        "Remove with a slotted spoon and drain on paper towels.",
        "Serve hot with tartar sauce, ketchup, or mayonnaise."
      ]
    },

    // ==================== FISH TIKKA (4) ====================
    { 
      id: 14, 
      name: "Fish Tikka",
      tagline: "Grilled fish tikka - smoky and delicious",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - boneless, cut into cubes",
        "1/2 cup plain yogurt - beaten until smooth",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon red chili powder",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1 tablespoon lemon juice",
        "2 tablespoons oil",
        "Salt to taste",
        "1 medium capsicum - cut into cubes",
        "1 medium onion - cut into cubes"
      ],
      steps: [
        "In a large bowl, mix yogurt, ginger-garlic paste, red chili powder, cumin powder, coriander powder, garam masala, lemon juice, oil, and salt.",
        "Add fish cubes to the marinade. Mix gently to coat all pieces. Cover and refrigerate for 2 hours.",
        "If using wooden skewers, soak them in water for 30 minutes to prevent burning.",
        "Thread the marinated fish cubes onto skewers, alternating with capsicum and onion cubes.",
        "Preheat oven to 400°F (200°C) or heat a grill/tawa.",
        "If using oven: Place skewers on a baking tray lined with foil. Bake for 12-15 minutes, turning once halfway.",
        "If using tawa: Cook on medium heat, turning frequently, until charred and cooked through.",
        "Brush with oil while cooking to keep them moist.",
        "Serve hot with mint chutney, onion rings, and lemon wedges."
      ]
    },
    { 
      id: 15, 
      name: "Malai Fish Tikka",
      tagline: "Creamy malai fish tikka - mild and rich",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - boneless cubes",
        "1/2 cup heavy cream",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons green chili paste",
        "1 teaspoon white pepper powder",
        "1 teaspoon garam masala",
        "1 tablespoon lemon juice",
        "2 tablespoons oil",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix cream, ginger-garlic paste, green chili paste, white pepper, garam masala, lemon juice, oil, and salt.",
        "Add fish cubes and mix gently to coat. Cover and refrigerate for 2 hours.",
        "Soak wooden skewers in water for 30 minutes.",
        "Thread the marinated fish onto skewers.",
        "Preheat oven to 400°F (200°C) or heat a grill.",
        "Cook for 12-15 minutes until fish is cooked and lightly charred.",
        "Brush with oil while cooking.",
        "Serve hot with mint chutney and salad."
      ]
    },
    { 
      id: 16, 
      name: "Hariyali Fish Tikka",
      tagline: "Green marinated fish tikka - herby and fresh",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - boneless cubes",
        "1 cup fresh mint-coriander chutney",
        "2 tablespoons ginger-garlic paste",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin powder",
        "1 teaspoon chaat masala",
        "1 tablespoon lemon juice",
        "2 tablespoons oil",
        "Salt to taste"
      ],
      steps: [
        "In a bowl, mix mint-coriander chutney, ginger-garlic paste, green chilies, cumin powder, lemon juice, oil, and salt.",
        "Add fish cubes and mix well. Cover and refrigerate for 2 hours.",
        "Soak skewers in water for 30 minutes.",
        "Thread the marinated fish onto skewers.",
        "Preheat oven to 400°F (200°C) or heat a grill.",
        "Cook for 12-15 minutes until fish is done and slightly charred.",
        "Sprinkle chaat masala on top before serving.",
        "Serve hot with onion rings and lemon wedges."
      ]
    },
    { 
      id: 17, 
      name: "Fish Tikka Boti",
      tagline: "Boneless fish tikka pieces - restaurant style",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - boneless cubes",
        "1/2 cup plain yogurt",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon red chili powder",
        "1 teaspoon tandoori masala",
        "1 tablespoon mustard oil",
        "Salt to taste",
        "Oil for brushing"
      ],
      steps: [
        "In a bowl, whisk yogurt until smooth. Add ginger-garlic paste, red chili powder, tandoori masala, mustard oil, and salt.",
        "Add fish cubes and mix gently to coat. Cover and refrigerate for 2 hours.",
        "Soak wooden skewers in water for 30 minutes.",
        "Thread the marinated fish pieces onto skewers.",
        "Preheat oven to 400°F (200°C) or heat a grill.",
        "Cook for 10-12 minutes, turning occasionally, until fish is charred and cooked.",
        "Brush with oil while cooking to keep moist.",
        "Serve hot with mint chutney, onion rings, and lemon wedges."
      ]
    },

    // ==================== FISH PULAO/BIRYANI (3) ====================
    { 
      id: 18, 
      name: "Fish Pulao",
      tagline: "Fragrant rice with fish - one pot meal",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      ingredients: [
        "500g fish - fried until golden",
        "2 cups basmati rice - washed and soaked for 30 minutes",
        "2 medium onions - thinly sliced",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "4 whole cloves",
        "2 green cardamom pods",
        "1 small cinnamon stick",
        "1 teaspoon garam masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Wash basmati rice thoroughly and soak in water for 30 minutes. Drain before using.",
        "Lightly fry the fish pieces in 2 tablespoons of oil until golden. Remove and set aside.",
        "Heat remaining oil in a large pot over medium heat. Add whole spices (cloves, cardamom, cinnamon) and cumin seeds. Sauté for 30 seconds until fragrant.",
        "Add sliced onions and sauté for 6-7 minutes until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes until fragrant.",
        "Add chopped tomatoes and cook for 5-6 minutes until soft.",
        "Add salt and 3 cups of warm water. Bring to a boil.",
        "Add soaked and drained rice. Cook on high heat for 5-7 minutes until rice is 70% done.",
        "Reduce heat to low. Gently place the fried fish pieces on top of the rice.",
        "Sprinkle garam masala and garnish with fresh coriander leaves.",
        "Cover with a tight lid and cook on low heat (dum) for 15-20 minutes.",
        "Gently mix before serving. Serve hot with raita."
      ]
    },
    { 
      id: 19, 
      name: "Fish Biryani",
      tagline: "Spicy fish biryani - aromatic and flavorful",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      ingredients: [
        "500g fish - fried until golden",
        "2 cups basmati rice - washed and soaked",
        "2 medium onions - thinly sliced",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "4 cloves",
        "2 cardamom pods",
        "1 cinnamon stick",
        "1 teaspoon biryani masala",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Saffron strands soaked in 2 tbsp warm milk",
        "Fresh coriander and mint leaves for garnish"
      ],
      steps: [
        "Wash and soak rice for 30 minutes. Drain.",
        "Heat oil in a large pot. Add whole spices and sauté for 30 seconds.",
        "Add sliced onions and sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add tomatoes and cook until soft.",
        "Add biryani masala and salt. Cook for 2 minutes.",
        "Add 3 cups water and bring to boil.",
        "Add rice and cook until 70% done (about 5-7 minutes). Drain excess water.",
        "In a separate pot, layer half the rice, then all the fried fish, then the remaining rice.",
        "Sprinkle saffron milk, coriander, and mint leaves over the top.",
        "Cover tightly and cook on low heat (dum) for 20 minutes.",
        "Gently mix before serving. Serve hot with raita."
      ]
    },
    { 
      id: 20, 
      name: "Fish Fried Rice",
      tagline: "Chinese style fish fried rice - quick and tasty",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
      ingredients: [
        "250g fish - boneless, cut into small cubes",
        "2 cups cooked rice (preferably day-old)",
        "1 medium onion - finely chopped",
        "1/2 cup carrots - finely diced",
        "1/2 cup green peas",
        "2 tablespoons soy sauce",
        "1 tablespoon oil",
        "Salt to taste",
        "Spring onions - chopped for garnish"
      ],
      steps: [
        "Lightly fry the fish cubes in 1 tablespoon of oil for 2-3 minutes until golden and cooked. Remove and set aside.",
        "Heat remaining oil in a wok or large pan over high heat. Add chopped onions and sauté for 1-2 minutes.",
        "Add diced carrots and green peas. Stir-fry for 2-3 minutes until vegetables are tender-crisp.",
        "Add the cooked rice and break up any clumps. Mix well.",
        "Add soy sauce and salt. Mix thoroughly and cook for 2-3 minutes.",
        "Add the fried fish cubes and mix gently.",
        "Garnish with chopped spring onions and serve hot."
      ]
    },

    // ==================== FISH PAKORA (2) ====================
    { 
      id: 21, 
      name: "Fish Pakora",
      tagline: "Crispy fish fritters - perfect tea time snack",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - boneless, cut into bite-sized cubes",
        "1 cup besan (gram flour)",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon carom seeds (ajwain)",
        "Salt to taste",
        "Water as needed",
        "Oil for deep frying"
      ],
      steps: [
        "Pat dry the fish cubes with paper towels. Set aside.",
        "In a bowl, mix besan, ginger-garlic paste, red chili powder, turmeric powder, carom seeds, and salt.",
        "Add water gradually to make a thick, smooth batter (like pakora batter consistency).",
        "Dip each fish cube into the batter, coating it completely.",
        "Heat oil in a deep pan over medium heat for deep frying.",
        "Gently drop the coated fish cubes into the hot oil. Do not overcrowd.",
        "Deep fry for 3-4 minutes until golden brown and crispy.",
        "Remove with a slotted spoon and drain on paper towels.",
        "Serve hot with mint chutney or ketchup."
      ]
    },
    { 
      id: 22, 
      name: "Fish Manchurian",
      tagline: "Indo-Chinese style fish - sweet and spicy",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - boneless cubes",
        "1 cup cornflour",
        "1 large egg",
        "1 tablespoon ginger-garlic paste",
        "For sauce: 1 onion, 1 capsicum",
        "2 tablespoons soy sauce",
        "1 tablespoon chili sauce",
        "1 tablespoon vinegar",
        "1 tablespoon tomato ketchup",
        "1 teaspoon sugar",
        "Oil for deep frying",
        "2 tablespoons oil for sauce",
        "1 teaspoon cornflour mixed with 1/4 cup water"
      ],
      steps: [
        "In a bowl, mix cornflour, egg, ginger-garlic paste, and salt. Add water if needed to make a thick batter.",
        "Dip fish cubes in the batter and coat well.",
        "Heat oil for deep frying. Deep fry the coated fish until golden and crispy. Set aside.",
        "For sauce: Heat 2 tablespoons oil in a wok. Add chopped onions and capsicum. Stir-fry for 2 minutes.",
        "Add soy sauce, chili sauce, vinegar, tomato ketchup, sugar, and 1/2 cup water. Bring to a boil.",
        "Add the cornflour slurry to thicken the sauce.",
        "Add the fried fish cubes and toss gently to coat with the sauce.",
        "Cook for 2 minutes until well combined.",
        "Serve hot with fried rice or noodles."
      ]
    },

    // ==================== FISH CUTLETS (2) ====================
    { 
      id: 23, 
      name: "Fish Cutlet",
      tagline: "Crispy fish cutlets - perfect appetizer",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - boiled and mashed",
        "2 medium potatoes - boiled and mashed",
        "1 medium onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon ginger paste",
        "1 teaspoon red chili powder",
        "1/2 teaspoon black pepper powder",
        "Salt to taste",
        "1 cup breadcrumbs for coating",
        "Oil for shallow frying"
      ],
      steps: [
        "Boil the fish until cooked. Drain and mash with a fork. Remove any bones carefully.",
        "Boil potatoes until soft. Peel and mash them.",
        "In a large bowl, mix mashed fish, mashed potatoes, chopped onions, green chilies, ginger paste, red chili powder, pepper powder, and salt.",
        "Mix everything well until combined.",
        "Divide the mixture into equal portions and shape into round or oval cutlets.",
        "Roll each cutlet in breadcrumbs to coat evenly.",
        "Heat oil in a pan over medium heat for shallow frying.",
        "Place the cutlets in the pan and cook for 3-4 minutes per side until golden brown and crispy.",
        "Remove and drain on paper towels.",
        "Serve hot with mint chutney or ketchup."
      ]
    },
    { 
      id: 24, 
      name: "Fish Kebab",
      tagline: "Fish seekh kebabs - soft and flavorful",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - boneless, minced",
        "1 medium onion - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 teaspoon garam masala",
        "1/2 cup breadcrumbs",
        "1 large egg",
        "Salt to taste",
        "Oil for shallow frying"
      ],
      steps: [
        "In a food processor, mince the fish until smooth. Transfer to a large bowl.",
        "Add chopped onions, ginger-garlic paste, green chilies, cumin powder, coriander powder, garam masala, breadcrumbs, egg, and salt.",
        "Mix everything well until combined. The mixture should be firm enough to shape.",
        "Divide the mixture into equal portions and shape into long kebabs around skewers (if using).",
        "If not using skewers, shape into patties.",
        "Heat oil in a pan over medium heat for shallow frying.",
        "Place the kebabs in the pan and cook for 3-4 minutes per side until golden brown and cooked through.",
        "Remove and drain on paper towels.",
        "Serve hot with mint chutney and onion rings."
      ]
    },

    // ==================== FISH MASALA (3) ====================
    { 
      id: 25, 
      name: "Fish Masala Fry",
      tagline: "Spicy masala coated fish - very flavorful",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish slices - about 1 inch thick",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon turmeric powder",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1 tablespoon lemon juice",
        "Salt to taste",
        "2 tablespoons rice flour",
        "Oil for shallow frying"
      ],
      steps: [
        "Wash fish slices and pat dry with paper towels. Make slits on both sides.",
        "In a bowl, mix ginger-garlic paste, red chili powder, turmeric, cumin powder, coriander powder, lemon juice, and salt.",
        "Add a little water to make a thick paste.",
        "Apply this masala paste generously to both sides of the fish slices.",
        "Cover and refrigerate for 30 minutes.",
        "After marination, sprinkle rice flour on both sides of each fish slice.",
        "Heat oil in a shallow pan over medium heat.",
        "Gently place the fish slices in the hot oil.",
        "Cook for 4-5 minutes on each side until golden brown and crispy.",
        "Serve hot with mint chutney and lemon wedges."
      ]
    },
    { 
      id: 26, 
      name: "Fish 65",
      tagline: "Spicy South Indian fish starter - very hot",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - boneless cubes",
        "2 tablespoons ginger-garlic paste",
        "2 teaspoons red chili powder",
        "1 teaspoon black pepper powder",
        "1 tablespoon cornflour",
        "1 tablespoon rice flour",
        "1 large egg",
        "Salt to taste",
        "Oil for deep frying",
        "Few curry leaves",
        "1 teaspoon mustard seeds"
      ],
      steps: [
        "In a bowl, mix ginger-garlic paste, red chili powder, pepper powder, cornflour, rice flour, egg, and salt.",
        "Add fish cubes and mix well to coat. Marinate for 1 hour.",
        "Heat oil in a deep pan over medium heat for deep frying.",
        "Deep fry the marinated fish cubes until golden and crispy, about 4-5 minutes. Remove and set aside.",
        "In a small pan, heat 1 tablespoon oil. Add mustard seeds and curry leaves. Let them crackle.",
        "Add the fried fish cubes to this tempering and toss well.",
        "Serve hot as a starter with onion slices and lemon wedges."
      ]
    },
    { 
      id: 27, 
      name: "Fish Chili",
      tagline: "Spicy chili fish - Indo-Chinese style",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - boneless cubes",
        "2 tablespoons cornflour",
        "1 tablespoon soy sauce",
        "1 tablespoon chili sauce",
        "1 tablespoon vinegar",
        "1 medium onion - sliced",
        "1 medium capsicum - sliced",
        "2 green chilies - slit",
        "1 tablespoon ginger-garlic paste",
        "Oil for deep frying",
        "2 tablespoons oil for sauce"
      ],
      steps: [
        "Coat fish cubes with cornflour, salt, and pepper. Deep fry until golden and crispy. Set aside.",
        "Heat 2 tablespoons oil in a wok. Add ginger-garlic paste and sauté for 1 minute.",
        "Add sliced onions, capsicum, and green chilies. Stir-fry on high heat for 2 minutes.",
        "Add soy sauce, chili sauce, vinegar, and 1/2 cup water. Bring to a boil.",
        "Add a cornflour slurry (1 tsp cornflour + 2 tbsp water) to thicken the sauce.",
        "Add the fried fish cubes and toss gently to coat with the sauce.",
        "Cook for 2-3 minutes until well combined.",
        "Serve hot with fried rice or noodles."
      ]
    },

    // ==================== FISH WITH VEGETABLES (3) ====================
    { 
      id: 28, 
      name: "Fish Aloo",
      tagline: "Fish with potato curry - hearty meal",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - cut into pieces",
        "2 medium potatoes - peeled and cut into cubes",
        "2 medium onions - finely chopped",
        "2 medium tomatoes - finely chopped",
        "2 tablespoons ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon turmeric powder",
        "2 teaspoons red chili powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Lightly fry the fish pieces in 2 tablespoons of oil for 2-3 minutes. Remove and set aside.",
        "Heat remaining oil in the same pan. Add cumin seeds and let them crackle.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chopped tomatoes and cook until soft.",
        "Add potato cubes, turmeric powder, red chili powder, and salt. Mix well.",
        "Add 1 cup of warm water and cook until potatoes are almost tender, about 10 minutes.",
        "Add the fried fish pieces and simmer for 5-7 minutes until fish is cooked.",
        "Garnish with fresh coriander and serve hot with rice or roti."
      ]
    },
    { 
      id: 29, 
      name: "Fish Palak",
      tagline: "Fish with spinach - healthy and delicious",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5",
      ingredients: [
        "500g fish - cut into pieces",
        "2 cups fresh spinach - blanched and pureed",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Lightly fry the fish pieces in 2 tablespoons of oil. Remove and set aside.",
        "Heat remaining oil in a pan. Add cumin seeds and let them crackle.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chopped tomatoes and cook until soft.",
        "Add spinach puree, turmeric powder, red chili powder, and salt. Cook for 3-4 minutes.",
        "Add 1/2 cup of warm water and bring to a simmer.",
        "Add the fried fish pieces and cook for 5-7 minutes until fish is done.",
        "Garnish with fresh coriander and serve hot with roti or naan."
      ]
    },
    { 
      id: 30, 
      name: "Fish Matar",
      tagline: "Fish with peas - sweet and savory",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - cut into pieces",
        "1 cup fresh or frozen green peas",
        "1 medium onion - finely chopped",
        "2 medium tomatoes - finely chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin seeds",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "1/2 cup cooking oil",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Lightly fry the fish pieces in 2 tablespoons of oil. Remove and set aside.",
        "Heat remaining oil in a pan. Add cumin seeds and let them crackle.",
        "Add chopped onions and sauté until golden brown.",
        "Add ginger-garlic paste and cook for 2 minutes.",
        "Add chopped tomatoes and cook until soft.",
        "Add green peas, turmeric powder, red chili powder, and salt. Cook for 5 minutes.",
        "Add 1/2 cup of warm water and bring to a simmer.",
        "Add the fried fish pieces and cook for 5-7 minutes until fish is done.",
        "Garnish with fresh coriander and serve hot with rice or roti."
      ]
    },

    // ==================== FISH ROTI/ROLL (2) ====================
    { 
      id: 31, 
      name: "Fish Roll",
      tagline: "Fish kathi roll - perfect street food",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "250g fish fingers - cooked",
        "4 parathas or rotis",
        "1 medium onion - thinly sliced",
        "1 medium capsicum - thinly sliced",
        "1/2 cup cabbage - shredded",
        "4 tablespoons mayonnaise or mint chutney",
        "Chaat masala to sprinkle",
        "Lemon juice"
      ],
      steps: [
        "Prepare fish fingers by following the fish finger recipe (#13) and keep ready.",
        "Warm the parathas on a tawa until soft and pliable.",
        "Spread mayonnaise or mint chutney evenly on each paratha.",
        "Place the fish fingers in the center of the paratha.",
        "Top with sliced onions, capsicum, and shredded cabbage.",
        "Sprinkle chaat masala and a few drops of lemon juice.",
        "Roll the paratha tightly from one side to form a roll.",
        "Wrap the bottom half with foil or parchment paper for easy handling.",
        "Serve immediately with extra chutney."
      ]
    },
    { 
      id: 32, 
      name: "Fish Sandwich",
      tagline: "Grilled fish sandwich - quick lunch",
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122",
      ingredients: [
        "200g fish fingers - cooked",
        "8 slices of bread",
        "Butter for spreading",
        "Lettuce leaves",
        "Tomato slices",
        "Onion slices",
        "4 tablespoons mayonnaise"
      ],
      steps: [
        "Prepare fish fingers by following the fish finger recipe (#13) and keep ready.",
        "Butter one side of each bread slice.",
        "Spread mayonnaise on the buttered side.",
        "Place lettuce leaves on 4 bread slices.",
        "Add tomato slices and onion slices on top of the lettuce.",
        "Place 2-3 fish fingers on each slice.",
        "Cover with the remaining bread slices, buttered side down.",
        "Press gently. Toast in a sandwich press or pan until golden brown.",
        "Cut diagonally and serve hot with ketchup or tartar sauce."
      ]
    },

    // ==================== FISH SOUP (2) ====================
    { 
      id: 33, 
      name: "Fish Soup",
      tagline: "Clear fish soup - light and healthy",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "250g fish bones and head (or fish pieces)",
        "1 medium onion - chopped",
        "1 inch ginger - sliced",
        "4 cloves garlic - crushed",
        "1 teaspoon black pepper powder",
        "Salt to taste",
        "4 cups water",
        "Fresh coriander leaves for garnish"
      ],
      steps: [
        "Clean the fish bones and head thoroughly.",
        "In a large pot, add fish bones, chopped onion, ginger slices, crushed garlic, and 4 cups of water.",
        "Bring to a boil, then reduce heat and simmer for 30-40 minutes.",
        "Strain the stock through a fine mesh strainer into another pot. Discard the solids.",
        "Add black pepper powder and salt to the clear stock.",
        "Bring to a gentle simmer for 5 minutes.",
        "If using fish pieces instead of bones, add them now and cook for 5-7 minutes until done.",
        "Garnish with fresh coriander leaves.",
        "Serve hot as a starter or light meal."
      ]
    },
    { 
      id: 34, 
      name: "Fish Manchow Soup",
      tagline: "Spicy Chinese fish soup - thick and flavorful",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "200g fish - boneless, minced",
        "4 cups chicken or vegetable stock",
        "1 medium onion - finely chopped",
        "2 tablespoons soy sauce",
        "1 tablespoon chili sauce",
        "1 tablespoon vinegar",
        "1 teaspoon black pepper powder",
        "1 large egg - beaten",
        "2 tablespoons cornflour mixed with 1/4 cup water",
        "Spring onions - chopped for garnish",
        "2 tablespoons oil"
      ],
      steps: [
        "Heat oil in a large pot. Add chopped onions and sauté for 2-3 minutes.",
        "Add minced fish and cook for 3-4 minutes until it changes color.",
        "Add soy sauce, chili sauce, vinegar, pepper powder, and stock. Bring to a boil.",
        "Simmer for 5-7 minutes until the fish is cooked.",
        "Add the cornflour slurry and stir continuously until the soup thickens.",
        "Slowly pour the beaten egg into the soup while stirring constantly to create egg ribbons.",
        "Simmer for 2 more minutes.",
        "Garnish with chopped spring onions.",
        "Serve hot with fried noodles on the side."
      ]
    },

    // ==================== FISH PICKLE (1) ====================
    { 
      id: 35, 
      name: "Fish Pickle",
      tagline: "Spicy fish pickle - tangy and long lasting",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      ingredients: [
        "500g fish - boneless, cut into small pieces",
        "1/2 cup mustard oil",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons red chili powder",
        "1 tablespoon turmeric powder",
        "1 tablespoon fenugreek seeds (methi dana)",
        "1 tablespoon mustard seeds (rai)",
        "1/2 cup vinegar",
        "Salt to taste"
      ],
      steps: [
        "Wash fish pieces and pat dry completely. Deep fry until golden and crispy. Drain and set aside.",
        "Heat mustard oil in a pan until it smokes. Remove from heat and let it cool slightly.",
        "Reheat the oil on low heat. Add fenugreek seeds and mustard seeds. Let them crackle.",
        "Add ginger-garlic paste and cook for 2-3 minutes until fragrant.",
        "Add red chili powder, turmeric powder, and salt. Cook for 1 minute.",
        "Add vinegar and bring to a boil. Cook for 2-3 minutes.",
        "Add the fried fish pieces and mix gently to coat with the masala.",
        "Cook for 2-3 minutes, then turn off the heat.",
        "Let the pickle cool completely to room temperature.",
        "Transfer to a clean, dry glass jar.",
        "Store in a cool, dry place for 2 days before eating to allow flavors to develop.",
        "Serve as a condiment with rice or roti."
      ]
    }
  ];

  const allFishRecipes = fishRecipes;

  const recipesList = allFishRecipes;

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
    <div className="fish-page">
      <header className="fish-header">
        <div className="fish-header-content">
          <h1 className="fish-title">Fish Dishes</h1>
          <p className="fish-description">
            Discover 35+ delicious fish recipes - curries, fries, tikka, biryani, and much more
          </p>
        </div>
      </header>

      <main className="fish-main">
        <div className="fish-grid-section">
          <div className="fish-grid">
            {recipesList.map((recipe) => (
              <div
                key={recipe.id}
                className="fish-card"
                onClick={() => handleRecipeClick(recipe)}
              >
                <div
                  className="fish-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                />
                <div className="fish-card-content">
                  <h3 className="fish-card-title">{recipe.name}</h3>
                  <p className="fish-card-description">{recipe.tagline}</p>
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
        <div className="fish-modal-overlay" onClick={handleCloseModal}>
          <div
            className="fish-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button className="fish-modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="fish-modal-header">
              <div className="fish-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="fish-modal-content">
              <div className="fish-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="fish-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="fish-ingredient-item">
                      <span className="fish-ingredient-bullet">•</span>
                      <span className="fish-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fish-modal-steps">
                <h3>Steps to Make</h3>
                <div className="fish-steps-list">
                  {selectedRecipe.steps.map((step, index) => (
                    <div key={index} className="fish-step-item">
                      <span className="fish-step-number">{index + 1}.</span>
                      <span className="fish-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fish-modal-voice-container">
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

export default RecipesFish;