import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipesAppetizers.css';

const RecipesAppetizers = () => {
  const navigate = useNavigate();
  const [selectedAppetizer, setSelectedAppetizer] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // 45 Appetizers Data (Halal - No Bacon)
  const appetizers = [
    // SPRING ROLLS (7)
    { 
      id: 1, 
      name: "Vegetable Spring Rolls",
      tagline: "Crispy vegetable spring rolls with sweet chili sauce",
      image: "https://images.unsplash.com/photo-1586196476672-e71ee28a8b8b?w=500",
      ingredients: [
        "12 spring roll wrappers",
        "2 cups cabbage, shredded",
        "1 carrot, julienned",
        "1 bell pepper, julienned",
        "100g bean sprouts",
        "2 tbsp soy sauce",
        "1 tsp ginger, grated",
        "2 cloves garlic, minced",
        "1 tbsp cornstarch",
        "Oil for deep frying"
      ],
      steps: [
        "Mix all vegetables in a bowl with soy sauce, ginger, and garlic.",
        "In a small bowl, mix cornstarch with 2 tbsp water to make paste.",
        "Place spring roll wrapper in diamond position.",
        "Add filling near bottom corner, roll halfway, fold sides, roll to top.",
        "Seal edge with cornstarch paste.",
        "Heat oil in deep pan to 350°F (175°C).",
        "Fry spring rolls in batches until golden brown (4-5 minutes).",
        "Drain on paper towels and serve hot with sweet chili sauce."
      ]
    },
    { 
      id: 2, 
      name: "Chicken Spring Rolls",
      tagline: "Crispy chicken spring rolls with vegetables",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500",
      ingredients: [
        "12 spring roll wrappers",
        "200g chicken breast, minced",
        "1 cup cabbage, shredded",
        "1 carrot, julienned",
        "2 tbsp soy sauce",
        "1 tsp ginger, grated",
        "2 cloves garlic, minced",
        "1 tbsp oyster sauce",
        "1 tbsp cornstarch",
        "Oil for deep frying"
      ],
      steps: [
        "Marinate chicken with soy sauce, ginger, garlic for 15 minutes.",
        "Cook chicken in pan until no longer pink, let cool.",
        "Mix cooked chicken with vegetables and oyster sauce.",
        "Place wrapper, add filling, roll and seal with cornstarch paste.",
        "Heat oil to 350°F (175°C).",
        "Fry until golden brown (4-5 minutes).",
        "Drain on paper towels.",
        "Serve hot with chili sauce."
      ]
    },
    { 
      id: 3, 
      name: "Shrimp Spring Rolls",
      tagline: "Delicate spring rolls with succulent shrimp",
      image: "https://images.unsplash.com/photo-1541698434-c26ee1888db0?w=500",
      ingredients: [
        "12 spring roll wrappers",
        "200g shrimp, peeled and chopped",
        "1 cup cabbage, shredded",
        "1 carrot, julienned",
        "2 tbsp fish sauce",
        "1 tsp ginger, grated",
        "2 cloves garlic, minced",
        "1 tbsp cornstarch",
        "Oil for deep frying"
      ],
      steps: [
        "Mix shrimp with fish sauce, ginger, and garlic.",
        "Add vegetables and mix well.",
        "Place wrapper, add filling, roll and seal with cornstarch paste.",
        "Heat oil to 350°F (175°C).",
        "Fry until golden and shrimp is cooked (4-5 minutes).",
        "Drain on paper towels.",
        "Serve hot with sweet chili sauce."
      ]
    },
    { 
      id: 4, 
      name: "Cheese Spring Rolls",
      tagline: "Crispy rolls with melted cheese filling",
      image: "https://images.unsplash.com/photo-1586196476672-e71ee28a8b8b?w=500",
      ingredients: [
        "12 spring roll wrappers",
        "200g mozzarella cheese, shredded",
        "100g cream cheese",
        "2 tbsp parsley, chopped",
        "1 tsp black pepper",
        "1 egg, beaten",
        "Oil for deep frying"
      ],
      steps: [
        "Mix mozzarella, cream cheese, parsley, and pepper.",
        "Place wrapper, add cheese mixture in center.",
        "Roll tightly, sealing edges with beaten egg.",
        "Heat oil to 350°F (175°C).",
        "Fry until golden brown (3-4 minutes).",
        "Drain on paper towels.",
        "Serve hot with marinara sauce."
      ]
    },
    { 
      id: 5, 
      name: "Tofu Spring Rolls",
      tagline: "Vegetarian spring rolls with crispy tofu",
      image: "https://images.unsplash.com/photo-1586196476672-e71ee28a8b8b?w=500",
      ingredients: [
        "12 spring roll wrappers",
        "200g firm tofu, crumbled",
        "1 cup cabbage, shredded",
        "1 carrot, julienned",
        "2 tbsp soy sauce",
        "1 tsp ginger, grated",
        "1 tbsp sesame oil",
        "1 tbsp cornstarch",
        "Oil for deep frying"
      ],
      steps: [
        "Press tofu to remove excess water, crumble.",
        "Mix tofu with vegetables, soy sauce, ginger, and sesame oil.",
        "Place wrapper, add filling, roll and seal with cornstarch paste.",
        "Heat oil to 350°F (175°C).",
        "Fry until golden brown (4-5 minutes).",
        "Drain on paper towels.",
        "Serve hot with sweet chili sauce."
      ]
    },
    { 
      id: 6, 
      name: "Duck Spring Rolls",
      tagline: "Exquisite spring rolls with roasted duck",
      image: "https://images.unsplash.com/photo-1586196476672-e71ee28a8b8b?w=500",
      ingredients: [
        "12 spring roll wrappers",
        "200g roasted duck, shredded",
        "1 cup cabbage, shredded",
        "1 carrot, julienned",
        "2 tbsp hoisin sauce",
        "1 tsp five-spice powder",
        "2 spring onions, chopped",
        "1 tbsp cornstarch",
        "Oil for deep frying"
      ],
      steps: [
        "Mix shredded duck with hoisin sauce and five-spice.",
        "Add vegetables and spring onions, mix well.",
        "Place wrapper, add filling, roll and seal with cornstarch paste.",
        "Heat oil to 350°F (175°C).",
        "Fry until golden brown (4-5 minutes).",
        "Drain on paper towels.",
        "Serve hot with plum sauce."
      ]
    },
    { 
      id: 7, 
      name: "Lamb Spring Rolls",
      tagline: "Savory lamb mince spring rolls",
      image: "https://images.unsplash.com/photo-1586196476672-e71ee28a8b8b?w=500",
      ingredients: [
        "12 spring roll wrappers",
        "200g lamb mince",
        "1 onion, finely chopped",
        "2 cloves garlic, minced",
        "1 tsp cumin powder",
        "1 tsp coriander powder",
        "1/2 tsp cinnamon",
        "2 tbsp pine nuts",
        "Oil for deep frying"
      ],
      steps: [
        "Brown lamb mince with onion and garlic.",
        "Add spices and pine nuts, cook until dry.",
        "Cool completely.",
        "Fill wrappers, roll and seal.",
        "Deep fry until golden.",
        "Serve with yogurt sauce."
      ]
    },

    // SAMOSAS (7)
    { 
      id: 8, 
      name: "Vegetable Samosa",
      tagline: "Crispy samosa with spiced potato filling",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
      ingredients: [
        "12 samosa wrappers",
        "3 potatoes, boiled and mashed",
        "1/2 cup peas",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1 tsp cumin seeds",
        "1 tsp coriander powder",
        "1/2 tsp garam masala",
        "Oil for deep frying"
      ],
      steps: [
        "Heat oil, add cumin seeds until they crackle.",
        "Add onions and green chilies, sauté until golden.",
        "Add peas and cook for 2 minutes.",
        "Add mashed potatoes and all spices, mix well.",
        "Cook for 5 minutes, let filling cool completely.",
        "Form samosas with wrappers and filling.",
        "Seal edges with water.",
        "Deep fry until golden brown, serve with mint chutney."
      ]
    },
    { 
      id: 9, 
      name: "Chicken Samosa",
      tagline: "Flaky samosa with spiced chicken filling",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
      ingredients: [
        "12 samosa wrappers",
        "200g ground chicken",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1 tsp ginger-garlic paste",
        "1 tsp cumin powder",
        "1 tsp coriander powder",
        "1/2 tsp garam masala",
        "Oil for deep frying"
      ],
      steps: [
        "Heat oil, add cumin seeds, then onions until golden.",
        "Add ginger-garlic paste and green chilies, cook for 1 minute.",
        "Add ground chicken, cook until no longer pink.",
        "Add spices and cook for 5 minutes until dry.",
        "Let filling cool completely.",
        "Fill samosa wrappers with chicken mixture.",
        "Seal edges with water.",
        "Deep fry until golden, serve with chutney."
      ]
    },
    { 
      id: 10, 
      name: "Keema Samosa",
      tagline: "Spiced minced lamb samosa",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
      ingredients: [
        "12 samosa wrappers",
        "250g lamb mince",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1 tsp ginger-garlic paste",
        "1 tsp cumin powder",
        "1 tsp coriander powder",
        "1/2 tsp garam masala",
        "Oil for deep frying"
      ],
      steps: [
        "Heat oil, sauté onions until golden.",
        "Add ginger-garlic paste and green chilies.",
        "Add lamb mince, cook until browned.",
        "Add all spices, cook until meat is dry.",
        "Let filling cool completely.",
        "Fill samosa wrappers with keema mixture.",
        "Seal edges with water.",
        "Deep fry until golden, serve with mint chutney."
      ]
    },
    { 
      id: 11, 
      name: "Lentil Samosa",
      tagline: "Protein-rich lentil filled samosa",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
      ingredients: [
        "12 samosa wrappers",
        "1 cup moong dal (split yellow lentils)",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1 tsp cumin seeds",
        "1/2 tsp turmeric",
        "1 tsp coriander powder",
        "Salt to taste",
        "Oil for deep frying"
      ],
      steps: [
        "Soak lentils for 2 hours, drain.",
        "Cook lentils with little water until soft but not mushy.",
        "Heat oil, add cumin seeds, then onions until golden.",
        "Add green chilies and spices, cook for 1 minute.",
        "Add cooked lentils, mix well, cook until dry.",
        "Let filling cool completely.",
        "Fill samosa wrappers with lentil mixture.",
        "Deep fry until golden, serve with chutney."
      ]
    },
    { 
      id: 12, 
      name: "Cheese Samosa",
      tagline: "Innovative samosa with melted cheese",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
      ingredients: [
        "12 samosa wrappers",
        "200g mozzarella cheese, grated",
        "100g cream cheese",
        "2 tbsp parsley, chopped",
        "1 tsp black pepper",
        "1/2 tsp red chili flakes",
        "1 egg, beaten",
        "Oil for deep frying"
      ],
      steps: [
        "Mix both cheeses with parsley, pepper, and chili flakes.",
        "Place cheese mixture in center of wrapper.",
        "Fold into samosa shape, seal edges with beaten egg.",
        "Refrigerate for 15 minutes to set.",
        "Heat oil to 350°F (175°C).",
        "Fry until golden brown (3-4 minutes).",
        "Drain on paper towels.",
        "Serve hot with marinara sauce."
      ]
    },
    { 
      id: 13, 
      name: "Spinach & Feta Samosa",
      tagline: "Greek-inspired spinach and feta samosa",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
      ingredients: [
        "12 samosa wrappers",
        "200g spinach, chopped",
        "150g feta cheese, crumbled",
        "1 onion, finely chopped",
        "2 cloves garlic, minced",
        "1/2 tsp nutmeg",
        "Black pepper to taste",
        "Oil for deep frying"
      ],
      steps: [
        "Sauté onion and garlic until soft.",
        "Add spinach, cook until wilted (3-4 minutes).",
        "Remove from heat, let cool, squeeze out excess water.",
        "Mix spinach with feta, nutmeg, and pepper.",
        "Fill samosa wrappers with mixture.",
        "Seal edges with water.",
        "Deep fry until golden brown.",
        "Serve hot with tzatziki sauce."
      ]
    },
    { 
      id: 14, 
      name: "Mushroom Samosa",
      tagline: "Earthy mushroom-filled samosa",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
      ingredients: [
        "12 samosa wrappers",
        "300g mushrooms, finely chopped",
        "1 onion, finely chopped",
        "2 cloves garlic, minced",
        "1 tsp thyme",
        "1/2 tsp black pepper",
        "2 tbsp cream cheese",
        "Oil for deep frying"
      ],
      steps: [
        "Sauté onion and garlic until soft.",
        "Add mushrooms, cook until moisture evaporates.",
        "Add thyme and pepper, cook for 2 minutes.",
        "Stir in cream cheese, mix well, cool.",
        "Fill samosa wrappers.",
        "Seal and deep fry until golden.",
        "Serve hot."
      ]
    },

    // PAKORAS & FRITTERS (7)
    { 
      id: 15, 
      name: "Vegetable Pakoras",
      tagline: "Mixed vegetable fritters in gram flour batter",
      image: "https://images.unsplash.com/photo-1623428454614-abaf00244?w=500",
      ingredients: [
        "1 cup gram flour (besan)",
        "1 onion, sliced",
        "1 potato, thinly sliced",
        "1 cup spinach leaves",
        "2 green chilies, chopped",
        "1 tsp cumin seeds",
        "1/2 tsp turmeric",
        "1/2 tsp red chili powder",
        "Water as needed",
        "Oil for deep frying"
      ],
      steps: [
        "Mix gram flour with all spices and enough water to make thick batter.",
        "Add all vegetables to batter, mix well to coat.",
        "Heat oil in deep pan.",
        "Drop spoonfuls of vegetable mixture into hot oil.",
        "Fry until golden brown (4-5 minutes).",
        "Remove with slotted spoon, drain on paper towels.",
        "Serve hot with mint chutney."
      ]
    },
    { 
      id: 16, 
      name: "Chicken Pakoras",
      tagline: "Crispy chicken fritters",
      image: "https://images.unsplash.com/photo-1623428454614-abaf00244?w=500",
      ingredients: [
        "200g chicken breast, thinly sliced",
        "1 cup gram flour",
        "1 tsp ginger-garlic paste",
        "1 tsp cumin powder",
        "1/2 tsp turmeric",
        "1/2 tsp red chili powder",
        "Salt to taste",
        "Water as needed",
        "Oil for deep frying"
      ],
      steps: [
        "Marinate chicken with ginger-garlic paste and spices for 30 minutes.",
        "Mix gram flour with water to make thick batter.",
        "Dip chicken pieces in batter to coat evenly.",
        "Heat oil to 350°F (175°C).",
        "Fry chicken pieces in batches until golden and cooked (5-6 minutes).",
        "Drain on paper towels.",
        "Serve hot with mint chutney."
      ]
    },
    { 
      id: 17, 
      name: "Onion Pakoras",
      tagline: "Crispy onion fritters",
      image: "https://images.unsplash.com/photo-1623428454614-abaf00244?w=500",
      ingredients: [
        "2 large onions, thinly sliced",
        "1 cup gram flour",
        "2 green chilies, chopped",
        "1 tsp cumin seeds",
        "1/2 tsp turmeric",
        "1/2 tsp red chili powder",
        "Salt to taste",
        "Water as needed",
        "Oil for deep frying"
      ],
      steps: [
        "Mix gram flour with all spices and water to make thick batter.",
        "Add sliced onions and green chilies, mix well.",
        "Heat oil in deep pan.",
        "Drop spoonfuls of onion mixture into hot oil.",
        "Fry until golden and crispy (4-5 minutes).",
        "Drain on paper towels.",
        "Serve hot with ketchup or chutney."
      ]
    },
    { 
      id: 18, 
      name: "Spinach Pakoras",
      tagline: "Healthy spinach fritters",
      image: "https://images.unsplash.com/photo-1623428454614-abaf00244?w=500",
      ingredients: [
        "2 cups spinach leaves, roughly chopped",
        "1 cup gram flour",
        "1 onion, finely chopped",
        "2 green chilies, chopped",
        "1 tsp cumin seeds",
        "1/2 tsp turmeric",
        "1/2 tsp red chili powder",
        "Water as needed",
        "Oil for deep frying"
      ],
      steps: [
        "Mix gram flour with all spices and water to make thick batter.",
        "Add spinach, onion, and green chilies, mix well.",
        "Heat oil in deep pan.",
        "Drop spoonfuls of spinach mixture into hot oil.",
        "Fry until golden and crispy (4-5 minutes).",
        "Drain on paper towels.",
        "Serve hot with mint chutney."
      ]
    },
    { 
      id: 19, 
      name: "Fish Pakoras",
      tagline: "Spiced fish fritters",
      image: "https://images.unsplash.com/photo-1623428454614-abaf00244?w=500",
      ingredients: [
        "200g fish fillets, cut into bite-sized pieces",
        "1 cup gram flour",
        "1 tsp ginger-garlic paste",
        "1 tsp cumin powder",
        "1/2 tsp turmeric",
        "1/2 tsp red chili powder",
        "1 tsp lemon juice",
        "Water as needed",
        "Oil for deep frying"
      ],
      steps: [
        "Marinate fish with ginger-garlic paste, spices, and lemon juice for 30 minutes.",
        "Mix gram flour with water to make thick batter.",
        "Dip fish pieces in batter to coat evenly.",
        "Heat oil to 350°F (175°C).",
        "Fry fish pieces until golden and cooked (4-5 minutes).",
        "Drain on paper towels.",
        "Serve hot with tartar sauce."
      ]
    },
    { 
      id: 20, 
      name: "Paneer Pakoras",
      tagline: "Crispy Indian cottage cheese fritters",
      image: "https://images.unsplash.com/photo-1623428454614-abaf00244?w=500",
      ingredients: [
        "200g paneer, cut into cubes",
        "1 cup gram flour",
        "1 tsp ginger-garlic paste",
        "1/2 tsp turmeric",
        "1/2 tsp red chili powder",
        "1/2 tsp garam masala",
        "Salt to taste",
        "Water as needed",
        "Oil for deep frying"
      ],
      steps: [
        "Mix gram flour with spices and water to make thick batter.",
        "Gently coat paneer cubes in batter.",
        "Heat oil to 350°F (175°C).",
        "Fry paneer cubes until golden (3-4 minutes).",
        "Drain on paper towels.",
        "Serve hot with mint chutney."
      ]
    },
    { 
      id: 21, 
      name: "Potato Pakoras",
      tagline: "Thinly sliced potato fritters",
      image: "https://images.unsplash.com/photo-1623428454614-abaf00244?w=500",
      ingredients: [
        "3 potatoes, thinly sliced",
        "1 cup gram flour",
        "1 tsp cumin seeds",
        "1/2 tsp turmeric",
        "1/2 tsp red chili powder",
        "1/2 tsp ajwain (carom seeds)",
        "Water as needed",
        "Oil for deep frying"
      ],
      steps: [
        "Mix gram flour with all spices and water to make thick batter.",
        "Dip potato slices in batter to coat.",
        "Heat oil to 350°F (175°C).",
        "Fry potato slices in batches until golden and crispy.",
        "Drain on paper towels.",
        "Sprinkle with chaat masala.",
        "Serve hot with ketchup."
      ]
    },

    // CHICKEN WINGS (6)
    { 
      id: 22, 
      name: "Hot & Spicy Wings",
      tagline: "Fiery chicken wings with hot sauce",
      image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=500",
      ingredients: [
        "12 chicken wings",
        "1/2 cup hot sauce",
        "1/4 cup butter, melted",
        "1 tbsp vinegar",
        "1 tsp garlic powder",
        "1/2 tsp cayenne pepper",
        "Oil for frying"
      ],
      steps: [
        "Pat chicken wings dry with paper towels.",
        "Heat oil to 375°F (190°C).",
        "Fry wings in batches for 10-12 minutes until golden and cooked.",
        "In a bowl, mix hot sauce, melted butter, vinegar, garlic powder, and cayenne.",
        "Toss fried wings in sauce until well coated.",
        "Serve hot with ranch dressing."
      ]
    },
    { 
      id: 23, 
      name: "BBQ Wings",
      tagline: "Smoky barbecue chicken wings",
      image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=500",
      ingredients: [
        "12 chicken wings",
        "1 cup BBQ sauce",
        "2 tbsp honey",
        "1 tbsp brown sugar",
        "1 tsp smoked paprika",
        "1 tsp garlic powder",
        "Oil for frying"
      ],
      steps: [
        "Pat wings dry, season with salt and pepper.",
        "Heat oil and fry wings until golden and cooked (10-12 minutes).",
        "In a saucepan, combine BBQ sauce, honey, brown sugar, paprika, and garlic powder.",
        "Heat sauce until bubbling, then reduce heat.",
        "Toss fried wings in BBQ sauce until coated.",
        "Serve hot."
      ]
    },
    { 
      id: 24, 
      name: "Garlic Parmesan Wings",
      tagline: "Savory wings with garlic and cheese",
      image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=500",
      ingredients: [
        "12 chicken wings",
        "1/4 cup butter",
        "6 cloves garlic, minced",
        "1/2 cup grated Parmesan cheese",
        "2 tbsp parsley, chopped",
        "Salt and pepper to taste",
        "Oil for frying"
      ],
      steps: [
        "Fry wings until golden and cooked (10-12 minutes).",
        "In a pan, melt butter and sauté garlic until fragrant (1-2 minutes).",
        "Place fried wings in large bowl, pour garlic butter over.",
        "Sprinkle with Parmesan cheese and parsley, toss well.",
        "Serve hot."
      ]
    },
    { 
      id: 25, 
      name: "Honey Sesame Wings",
      tagline: "Sweet and savory Asian-style wings",
      image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=500",
      ingredients: [
        "12 chicken wings",
        "1/2 cup honey",
        "1/4 cup soy sauce",
        "2 tbsp sesame oil",
        "2 cloves garlic, minced",
        "1 tbsp ginger, grated",
        "Sesame seeds for garnish",
        "Oil for frying"
      ],
      steps: [
        "Mix honey, soy sauce, sesame oil, garlic, and ginger in a bowl.",
        "Fry wings until golden and cooked (10-12 minutes).",
        "Toss hot wings in honey mixture until well coated.",
        "Sprinkle with sesame seeds.",
        "Serve hot with spring onions."
      ]
    },
    { 
      id: 26, 
      name: "Salt & Pepper Wings",
      tagline: "Simple but delicious crispy wings",
      image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=500",
      ingredients: [
        "12 chicken wings",
        "2 tbsp salt",
        "1 tbsp black pepper, crushed",
        "1 tsp white pepper",
        "2 green chilies, chopped",
        "2 cloves garlic, minced",
        "Oil for frying"
      ],
      steps: [
        "Season wings with salt and let sit for 30 minutes.",
        "Heat oil and fry wings until crispy and golden (12-15 minutes).",
        "In a separate pan, heat 1 tbsp oil, sauté garlic and green chilies.",
        "Add fried wings, sprinkle with black and white pepper.",
        "Toss well to coat.",
        "Serve hot with lemon wedges."
      ]
    },
    { 
      id: 27, 
      name: "Lemon Pepper Wings",
      tagline: "Zesty lemon and pepper wings",
      image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=500",
      ingredients: [
        "12 chicken wings",
        "2 tbsp lemon pepper seasoning",
        "1 tsp garlic powder",
        "1 tsp onion powder",
        "Zest of 1 lemon",
        "2 tbsp lemon juice",
        "Oil for frying"
      ],
      steps: [
        "Season wings with lemon pepper, garlic powder, onion powder.",
        "Fry until golden and cooked.",
        "Toss with fresh lemon zest and juice.",
        "Serve hot."
      ]
    },

    // CHEESE-BASED (5)
    { 
      id: 28, 
      name: "Mozzarella Sticks",
      tagline: "Crispy breaded mozzarella cheese sticks",
      image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=500",
      ingredients: [
        "12 mozzarella cheese sticks",
        "1 cup all-purpose flour",
        "2 eggs, beaten",
        "1 cup breadcrumbs",
        "1 tsp Italian seasoning",
        "1/2 tsp garlic powder",
        "Salt to taste",
        "Oil for deep frying",
        "Marinara sauce for dipping"
      ],
      steps: [
        "Freeze cheese sticks for at least 2 hours until solid.",
        "Set up three bowls: flour, beaten eggs, breadcrumbs mixed with seasonings.",
        "Coat each cheese stick in flour, then egg, then breadcrumbs.",
        "Repeat egg and breadcrumb coating for extra crispy coating.",
        "Freeze again for 30 minutes.",
        "Heat oil to 375°F (190°C).",
        "Fry frozen sticks in batches for 1-2 minutes until golden.",
        "Drain and serve immediately with marinara sauce."
      ]
    },
    { 
      id: 29, 
      name: "Jalapeño Poppers",
      tagline: "Spicy jalapeños stuffed with cream cheese",
      image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=500",
      ingredients: [
        "12 fresh jalapeños",
        "8 oz cream cheese, softened",
        "1 cup cheddar cheese, shredded",
        "1 tsp cumin powder",
        "1/2 tsp garlic powder",
        "1 cup breadcrumbs",
        "2 eggs, beaten",
        "Oil for deep frying"
      ],
      steps: [
        "Cut jalapeños in half lengthwise, remove seeds and membranes.",
        "Mix cream cheese, cheddar, cumin, and garlic powder.",
        "Stuff each jalapeño half with cheese mixture.",
        "Press halves back together or leave open-faced.",
        "Dip in beaten egg, then coat with breadcrumbs.",
        "Freeze for 30 minutes.",
        "Deep fry until golden (3-4 minutes).",
        "Serve hot with ranch dressing."
      ]
    },
    { 
      id: 30, 
      name: "Stuffed Mushrooms",
      tagline: "Mushrooms caps filled with cheesy herb mixture",
      image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=500",
      ingredients: [
        "24 large mushrooms, stems removed",
        "8 oz cream cheese, softened",
        "1/2 cup Parmesan cheese, grated",
        "2 cloves garlic, minced",
        "2 tbsp parsley, chopped",
        "1/2 tsp black pepper",
        "2 tbsp breadcrumbs",
        "2 tbsp olive oil"
      ],
      steps: [
        "Preheat oven to 375°F (190°C).",
        "Clean mushrooms, remove stems (chop stems finely).",
        "Mix cream cheese, Parmesan, chopped stems, garlic, parsley, pepper.",
        "Fill each mushroom cap with cheese mixture.",
        "Sprinkle breadcrumbs on top, drizzle with olive oil.",
        "Bake for 20 minutes until mushrooms are tender and tops are golden.",
        "Let cool slightly before serving.",
        "Serve warm as elegant appetizer."
      ]
    },
    { 
      id: 31, 
      name: "Cheese Balls",
      tagline: "Crispy fried cheese balls",
      image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=500",
      ingredients: [
        "200g mozzarella cheese, cubed",
        "100g cream cheese",
        "1 cup all-purpose flour",
        "2 eggs, beaten",
        "1 cup breadcrumbs",
        "1 tsp Italian seasoning",
        "Oil for deep frying",
        "Marinara sauce for dipping"
      ],
      steps: [
        "Cut mozzarella into small cubes.",
        "Take small piece of cream cheese, wrap around mozzarella cube, form into ball.",
        "Freeze cheese balls for 1 hour until firm.",
        "Set up flour, egg, and breadcrumbs with seasoning.",
        "Coat frozen cheese balls in flour, then egg, then breadcrumbs.",
        "Repeat for double coating.",
        "Deep fry at 350°F (175°C) for 2-3 minutes until golden.",
        "Serve immediately with marinara sauce."
      ]
    },
    { 
      id: 32, 
      name: "Halloumi Fries",
      tagline: "Crispy fried halloumi cheese sticks",
      image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=500",
      ingredients: [
        "200g halloumi cheese",
        "1/4 cup flour",
        "1 tsp paprika",
        "1/2 tsp black pepper",
        "Oil for frying",
        "Lemon wedges for serving"
      ],
      steps: [
        "Cut halloumi into fry-shaped sticks.",
        "Mix flour with paprika and pepper.",
        "Dredge halloumi sticks in seasoned flour.",
        "Heat oil in pan.",
        "Fry until golden on all sides (2-3 minutes).",
        "Drain on paper towels.",
        "Serve hot with lemon wedges."
      ]
    },

    // SEAFOOD (5)
    { 
      id: 33, 
      name: "Shrimp Tempura",
      tagline: "Light and crispy Japanese-style fried shrimp",
      image: "https://images.unsplash.com/photo-1541698434-c26ee1888db0?w=500",
      ingredients: [
        "12 large shrimp, peeled with tails on",
        "1 cup all-purpose flour",
        "1/4 cup cornstarch",
        "1 cup ice-cold water",
        "1 egg yolk",
        "1/2 tsp baking soda",
        "Salt to taste",
        "Oil for deep frying",
        "Tempura dipping sauce"
      ],
      steps: [
        "Make slits on underside of shrimp to prevent curling.",
        "Pat shrimp completely dry.",
        "Mix flour, cornstarch, baking soda, and salt.",
        "Add ice-cold water and egg yolk, mix gently (batter should be lumpy).",
        "Heat oil to 375°F (190°C).",
        "Dip shrimp in batter, let excess drip off.",
        "Deep fry in batches for 2-3 minutes until light golden.",
        "Drain and serve immediately with tempura sauce."
      ]
    },
    { 
      id: 34, 
      name: "Calamari Rings",
      tagline: "Tender squid rings with crispy coating",
      image: "https://images.unsplash.com/photo-1541698434-c26ee1888db0?w=500",
      ingredients: [
        "500g calamari rings",
        "1 cup all-purpose flour",
        "1/2 cup cornmeal",
        "1 tsp paprika",
        "1 tsp garlic powder",
        "Salt and pepper to taste",
        "2 eggs, beaten",
        "Oil for deep frying",
        "Lemon wedges for serving"
      ],
      steps: [
        "Pat calamari rings completely dry.",
        "Mix flour, cornmeal, paprika, garlic powder, salt, pepper.",
        "Dip rings in beaten egg, then dredge in flour mixture.",
        "Heat oil to 375°F (190°C).",
        "Fry in batches for 2-3 minutes until golden.",
        "Drain on paper towels.",
        "Serve hot with lemon wedges and marinara sauce."
      ]
    },
    { 
      id: 35, 
      name: "Fish Bites",
      tagline: "Bite-sized crispy fish pieces",
      image: "https://images.unsplash.com/photo-1541698434-c26ee1888db0?w=500",
      ingredients: [
        "400g white fish fillets, cut into 1-inch pieces",
        "1 cup all-purpose flour",
        "1 cup breadcrumbs",
        "2 eggs, beaten",
        "1 tsp garlic powder",
        "1 tsp paprika",
        "Salt and pepper to taste",
        "Oil for deep frying",
        "Tartar sauce for serving"
      ],
      steps: [
        "Season fish pieces with salt, pepper, garlic powder, paprika.",
        "Set up three bowls: flour, beaten eggs, breadcrumbs.",
        "Coat fish in flour, then egg, then breadcrumbs.",
        "Heat oil to 375°F (190°C).",
        "Fry fish bites in batches for 3-4 minutes until golden.",
        "Drain on paper towels.",
        "Serve hot with tartar sauce."
      ]
    },
    { 
      id: 36, 
      name: "Crab Cakes",
      tagline: "Lump crab meat cakes with herbs",
      image: "https://images.unsplash.com/photo-1541698434-c26ee1888db0?w=500",
      ingredients: [
        "400g lump crab meat",
        "1/2 cup breadcrumbs",
        "1/4 cup mayonnaise",
        "1 egg, beaten",
        "2 tbsp parsley, chopped",
        "1 tsp Dijon mustard",
        "1 tsp Old Bay seasoning",
        "Salt and pepper to taste",
        "Oil for pan frying"
      ],
      steps: [
        "Pick through crab meat to remove any shells.",
        "Mix crab meat, breadcrumbs, mayonnaise, egg, parsley, mustard, seasoning.",
        "Form into 8 patties, refrigerate for 30 minutes.",
        "Heat oil in skillet over medium heat.",
        "Cook crab cakes for 4-5 minutes per side until golden brown.",
        "Drain on paper towels.",
        "Serve hot with remoulade sauce."
      ]
    },
    { 
      id: 37, 
      name: "Shrimp Cocktail",
      tagline: "Classic chilled shrimp with cocktail sauce",
      image: "https://images.unsplash.com/photo-1541698434-c26ee1888db0?w=500",
      ingredients: [
        "24 large shrimp, cooked and peeled",
        "1/2 cup ketchup",
        "2 tbsp horseradish",
        "1 tbsp lemon juice",
        "1 tsp Worcestershire sauce",
        "Lemon wedges for garnish"
      ],
      steps: [
        "Mix ketchup, horseradish, lemon juice, Worcestershire for sauce.",
        "Chill sauce for 1 hour.",
        "Arrange shrimp on platter with cocktail sauce.",
        "Garnish with lemon wedges.",
        "Serve chilled."
      ]
    },

    // DIPS & SPREADS (5)
    { 
      id: 38, 
      name: "Hummus with Pita",
      tagline: "Creamy chickpea dip with warm pita bread",
      image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=500",
      ingredients: [
        "2 cans chickpeas, drained",
        "1/4 cup tahini",
        "3 tbsp lemon juice",
        "2 cloves garlic",
        "1/2 tsp cumin",
        "Salt to taste",
        "3 tbsp olive oil",
        "Paprika for garnish",
        "Pita bread for serving"
      ],
      steps: [
        "Combine chickpeas, tahini, lemon juice, garlic, cumin, salt in food processor.",
        "Blend until smooth, scraping down sides.",
        "With processor running, slowly add olive oil until creamy.",
        "Transfer to serving bowl.",
        "Make a well in center, drizzle with olive oil.",
        "Sprinkle with paprika.",
        "Warm pita bread in oven.",
        "Serve hummus with warm pita triangles."
      ]
    },
    { 
      id: 39, 
      name: "Guacamole with Chips",
      tagline: "Fresh avocado dip with tortilla chips",
      image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=500",
      ingredients: [
        "3 ripe avocados",
        "1 tomato, diced",
        "1/2 red onion, finely chopped",
        "1 jalapeño, seeded and minced",
        "1/4 cup cilantro, chopped",
        "2 tbsp lime juice",
        "1 clove garlic, minced",
        "Salt to taste",
        "Tortilla chips for serving"
      ],
      steps: [
        "Cut avocados, remove pit, scoop flesh into bowl.",
        "Mash avocados with fork to desired consistency.",
        "Add tomato, onion, jalapeño, cilantro, lime juice, garlic.",
        "Mix well, season with salt.",
        "Press plastic wrap directly on surface to prevent browning.",
        "Let sit 30 minutes for flavors to meld.",
        "Serve with tortilla chips."
      ]
    },
    { 
      id: 40, 
      name: "Smoked Salmon Dip",
      tagline: "Elegant smoked salmon spread",
      image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=500",
      ingredients: [
        "200g smoked salmon, chopped",
        "8 oz cream cheese, softened",
        "1/4 cup sour cream",
        "2 tbsp lemon juice",
        "2 tbsp dill, chopped",
        "1 tbsp capers, chopped",
        "1 tsp horseradish",
        "Black pepper to taste",
        "Cucumber rounds for serving"
      ],
      steps: [
        "Beat cream cheese and sour cream until smooth.",
        "Add lemon juice, horseradish, pepper, mix well.",
        "Fold in smoked salmon, dill, and capers.",
        "Refrigerate for at least 1 hour.",
        "Transfer to serving bowl.",
        "Garnish with extra dill and capers.",
        "Serve with cucumber rounds or crackers."
      ]
    },
    { 
      id: 41, 
      name: "Spinach & Artichoke Dip",
      tagline: "Creamy hot spinach and artichoke dip",
      image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=500",
      ingredients: [
        "200g frozen spinach, thawed and drained",
        "1 can artichoke hearts, chopped",
        "8 oz cream cheese",
        "1/2 cup sour cream",
        "1/2 cup mayonnaise",
        "1 cup Parmesan cheese, grated",
        "2 cloves garlic, minced",
        "1/2 tsp red pepper flakes"
      ],
      steps: [
        "Preheat oven to 375°F (190°C).",
        "Squeeze all water from spinach.",
        "Beat cream cheese until smooth, add sour cream and mayonnaise.",
        "Stir in spinach, artichokes, garlic, red pepper flakes.",
        "Fold in half the Parmesan cheese.",
        "Transfer to baking dish, top with remaining Parmesan.",
        "Bake for 25 minutes until hot and bubbly.",
        "Serve hot with tortilla chips or bread."
      ]
    },
    { 
      id: 42, 
      name: "Roasted Red Pepper Dip",
      tagline: "Smoky sweet pepper dip",
      image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=500",
      ingredients: [
        "3 roasted red peppers (from jar)",
        "1 cup walnuts, toasted",
        "2 cloves garlic",
        "2 tbsp olive oil",
        "1 tbsp lemon juice",
        "1 tsp smoked paprika",
        "1/2 tsp cumin",
        "Salt to taste",
        "Pita chips for serving"
      ],
      steps: [
        "Drain roasted peppers well.",
        "Combine all ingredients in food processor.",
        "Blend until smooth but with slight texture.",
        "Taste and adjust seasoning.",
        "Transfer to serving bowl.",
        "Drizzle with olive oil and sprinkle with paprika.",
        "Let sit 30 minutes for flavors to develop.",
        "Serve with pita chips or bread."
      ]
    },

    // STUFFED & WRAPPED (3)
    { 
      id: 43, 
      name: "Stuffed Mushrooms (Herb)",
      tagline: "Mushrooms stuffed with herb breadcrumb mixture",
      image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=500",
      ingredients: [
        "24 large mushrooms",
        "1 cup breadcrumbs",
        "1/2 cup Parmesan, grated",
        "1/4 cup parsley, chopped",
        "2 cloves garlic, minced",
        "1 tsp thyme",
        "1/4 cup olive oil",
        "Salt and pepper to taste"
      ],
      steps: [
        "Preheat oven to 375°F (190°C).",
        "Remove mushroom stems, chop finely.",
        "Mix chopped stems with breadcrumbs, Parmesan, parsley, garlic, thyme.",
        "Add olive oil gradually until mixture comes together.",
        "Season with salt and pepper.",
        "Fill each mushroom cap with stuffing mixture.",
        "Place on baking sheet, bake for 20 minutes.",
        "Serve warm."
      ]
    },
    { 
      id: 44, 
      name: "Chicken Lollipop",
      tagline: "Spicy Indo-Chinese chicken winglets",
      image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=500",
      ingredients: [
        "12 chicken wing lollipops",
        "2 tbsp soy sauce",
        "1 tbsp chili sauce",
        "1 tbsp ginger-garlic paste",
        "1 tsp red chili powder",
        "1/2 tsp black pepper",
        "1 egg, beaten",
        "1/2 cup cornstarch",
        "Oil for deep frying"
      ],
      steps: [
        "Make lollipops by cutting around small end of wing, pushing meat down.",
        "Marinate chicken with soy sauce, chili sauce, ginger-garlic paste, spices for 1 hour.",
        "Add beaten egg and cornstarch to marinated chicken, mix well.",
        "Heat oil to 350°F (175°C).",
        "Fry lollipops for 8-10 minutes until golden and cooked.",
        "Drain on paper towels.",
        "Toss in additional chili sauce if desired.",
        "Serve hot with mayonnaise."
      ]
    },
    { 
      id: 45, 
      name: "Puff Pastry Bites",
      tagline: "Flaky puff pastry with various fillings",
      image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=500",
      ingredients: [
        "1 sheet puff pastry, thawed",
        "Filling options: cheese, spinach, mushroom, chicken",
        "1 egg, beaten",
        "Sesame seeds for garnish"
      ],
      steps: [
        "Preheat oven to 400°F (200°C).",
        "Roll out puff pastry slightly.",
        "Cut into 2-inch squares.",
        "Place small amount of filling in center of each square.",
        "Fold corners to center, pinch to seal, or leave open-faced.",
        "Place on baking sheet lined with parchment paper.",
        "Brush with beaten egg, sprinkle with sesame seeds.",
        "Bake for 15-18 minutes until puffed and golden."
      ]
    }
  ];

  // Voice instructions handler (same as soup page)
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
    if (selectedAppetizer && currentStep < selectedAppetizer.steps.length) {
      stopSpeaking();
      speakInstructions(selectedAppetizer.steps, currentStep);
    }
  };

  const speakPreviousStep = () => {
    if (selectedAppetizer && currentStep > 1) {
      stopSpeaking();
      speakInstructions(selectedAppetizer.steps, currentStep - 2);
    }
  };

  const handleAppetizerSelect = (appetizer) => {
    setSelectedAppetizer(appetizer);
    setShowDetailPanel(true);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const closeDetailPanel = () => {
    stopSpeaking();
    setShowDetailPanel(false);
    setSelectedAppetizer(null);
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="appetizers-page">
      {/* Header */}
      <header className="appetizers-header">
        <div className="appetizers-header-content">
          <h1 className="appetizers-page-title">Appetizers Collection</h1>
          <p className="appetizers-page-description">
            A curated selection of 45 delicious starters and finger foods for every occasion.
          </p>
        </div>
      </header>

      {/* Appetizers Grid */}
      <main className="appetizers-main">
        <div className="appetizers-grid-section">
          <div className="appetizers-grid">
            {appetizers.map(appetizer => (
              <div 
                key={appetizer.id} 
                className="appetizers-card"
                onClick={() => handleAppetizerSelect(appetizer)}
              >
                <div 
                  className="appetizers-card-image"
                  style={{ backgroundImage: `url(${appetizer.image})` }}
                ></div>
                
                <div className="appetizers-card-content">
                  <h3 className="appetizers-card-title">{appetizer.name}</h3>
                  <p className="appetizers-card-description">{appetizer.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Back to Home Button */}
      <div className="back-button-container">
        <button className="back-home-btn" onClick={handleGoBack}>
          <span>←</span> Back to Home
        </button>
      </div>

      {/* DETAIL MODAL */}
      {showDetailPanel && selectedAppetizer && (
        <div className="appetizers-modal-overlay" onClick={closeDetailPanel}>
          <div 
            className="appetizers-modal" 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url(${selectedAppetizer.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <button className="appetizers-modal-close" onClick={closeDetailPanel}>×</button>
            
            <div className="appetizers-modal-header">
              <div className="appetizers-modal-title">
                <h2>{selectedAppetizer.name}</h2>
              </div>
            </div>

            <div className="appetizers-modal-content">
              {/* COLUMN 1 - INGREDIENTS */}
              <div className="appetizers-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="appetizers-ingredients-list">
                  {selectedAppetizer.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="appetizers-ingredient-item">
                      <span className="appetizers-ingredient-bullet">•</span>
                      <span className="appetizers-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 2 - STEPS TO MAKE */}
              <div className="appetizers-modal-steps">
                <h3>Steps to Make</h3>
                <div className="appetizers-steps-list">
                  {selectedAppetizer.steps.map((step, idx) => (
                    <div key={idx} className="appetizers-step-item">
                      <span className="appetizers-step-number">{idx + 1}.</span>
                      <span className="appetizers-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 3 - VOICE INSTRUCTIONS */}
              <div className="appetizers-modal-voice-container">
                <div className="voice-panel">
                  <h3>🎤 Voice Instructions</h3>
                  
                  <div className="voice-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${progress}%`}}></div>
                    </div>
                    <div className="progress-info">
                      <span>Step {currentStep} of {selectedAppetizer.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <div className="voice-controls">
                    <button 
                      className={`voice-main-btn ${isPlaying ? 'stop' : 'play'}`}
                      onClick={() => isPlaying ? stopSpeaking() : speakInstructions(selectedAppetizer.steps)}
                    >
                      {isPlaying ? '⏹️ Stop' : '▶️ Start Voice Guide'}
                    </button>

                    <div className="step-controls">
                      <button 
                        className="step-btn prev"
                        onClick={speakPreviousStep}
                        disabled={currentStep <= 1}
                      >
                        ⏪ Prev
                      </button>
                      <button 
                        className="step-btn next"
                        onClick={speakNextStep}
                        disabled={currentStep >= selectedAppetizer.steps.length}
                      >
                        Next ⏩
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

export default RecipesAppetizers;