import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeStudentPage.css';

const RecipeStudentPage = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // Student recipe images array - Har recipe ki apni image
  const studentImages = [
    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=300&fit=crop", // Maggi with Egg
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=300&fit=crop", // Omelette Sandwich
    "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&h=300&fit=crop", // Cup Noodles
    "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500&h=300&fit=crop", // Butter Toast
    "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?w=500&h=300&fit=crop", // Fruit Chaat
    "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&h=300&fit=crop", // Yogurt with Fruits
    "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500&h=300&fit=crop", // Cereal with Milk
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=300&fit=crop", // Peanut Butter Toast
    "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&h=300&fit=crop", // Jam Sandwich
    "https://images.unsplash.com/photo-1606913853347-bb6e96f5d7b6?w=500&h=300&fit=crop", // Boiled Eggs
    "https://images.unsplash.com/photo-1483137140003-ae073b395549?w=500&h=300&fit=crop", // French Toast
    "https://images.unsplash.com/photo-1593614911681-ee6c8c7b6163?w=500&h=300&fit=crop", // Scrambled Eggs
    "https://images.unsplash.com/photo-1559919436-8d6f6ee0117a?w=500&h=300&fit=crop", // Aloo Paratha
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=300&fit=crop", // Chana Chaat
    "https://images.unsplash.com/photo-1572799011048-50b9c6d2937f?w=500&h=300&fit=crop", // Vegetable Sandwich
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&h=300&fit=crop", // Pasta with Tomato Sauce
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=300&fit=crop", // Fried Rice
    "https://images.unsplash.com/photo-1585937421612-70ca003675ed?w=500&h=300&fit=crop", // Daal Chawal
    "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&h=300&fit=crop", // Chicken Sandwich
    "https://images.unsplash.com/photo-1516714435131-44d6b64dc6f4?w=500&h=300&fit=crop", // Qeema Paratha
  ];

  // All Student Recipes with Complete Instructions
  const studentRecipes = [
    { 
      id: 1, 
      name: "Maggi with Egg",
      tagline: "Quick instant noodles with egg for protein",
      image: studentImages[0],
      ingredients: [
        "1 packet Maggi noodles",
        "1 egg",
        "1 ½ cups water",
        "Maggi tastemaker (comes with packet)",
        "½ teaspoon oil or butter",
        "Salt to taste",
        "Pinch of black pepper (optional)"
      ],
      steps: [
        "Boil 1 ½ cups water in a small pan.",
        "Add Maggi noodles and tastemaker to boiling water.",
        "Cook for 2 minutes on medium heat, stirring occasionally.",
        "In a separate small bowl, beat the egg lightly with a fork.",
        "After 2 minutes, pour the beaten egg slowly into the Maggi while stirring continuously.",
        "Cook for another 1-2 minutes until egg is cooked and noodles are soft.",
        "Add oil or butter, mix well.",
        "Add salt if needed and black pepper for extra flavor.",
        "Serve hot immediately."
      ]
    },
    { 
      id: 2, 
      name: "Omelette Sandwich",
      tagline: "Protein-packed omelette between bread slices",
      image: studentImages[1],
      ingredients: [
        "2 eggs",
        "2 slices of bread",
        "1 small onion, finely chopped",
        "1 small tomato, finely chopped",
        "1 green chili, finely chopped (optional)",
        "2 tablespoons chopped coriander",
        "Salt to taste",
        "¼ teaspoon black pepper",
        "1 teaspoon oil or butter"
      ],
      steps: [
        "Break eggs into a bowl and beat well with a fork.",
        "Add chopped onion, tomato, green chili, and coriander to eggs.",
        "Add salt and black pepper, mix everything well.",
        "Heat oil or butter in a frying pan on medium heat.",
        "Pour egg mixture into pan and spread evenly.",
        "Cook for 1-2 minutes until bottom is set.",
        "Place bread slices on top of the omelette.",
        "Carefully flip the omelette with bread slices attached.",
        "Cook for another 1-2 minutes until bread is lightly toasted.",
        "Fold omelette over bread and serve hot."
      ]
    },
    { 
      id: 3, 
      name: "Cup Noodles",
      tagline: "Instant noodles in a cup - ready in minutes",
      image: studentImages[2],
      ingredients: [
        "1 cup instant noodles (any brand)",
        "Boiling water as needed",
        "Optional add-ons:",
        "Chopped spring onions",
        "Few drops of soy sauce",
        "¼ teaspoon chili flakes"
      ],
      steps: [
        "Open the cup noodles and remove the seasoning packet.",
        "Add the seasoning powder to the noodles in the cup.",
        "If using add-ons, add them now.",
        "Pour boiling water into the cup up to the marked line.",
        "Close the lid and let it sit for 3 minutes.",
        "After 3 minutes, stir well with a fork.",
        "Add extra seasoning if desired.",
        "Enjoy directly from the cup."
      ]
    },
    { 
      id: 4, 
      name: "Butter Toast",
      tagline: "Crispy golden toast with butter",
      image: studentImages[3],
      ingredients: [
        "2 slices of bread",
        "1 tablespoon butter",
        "Optional spreads:",
        "Jam, honey, or cheese spread",
        "Pinch of salt (for savory version)"
      ],
      steps: [
        "Take bread slices and spread butter evenly on one side.",
        "Heat a frying pan on medium heat.",
        "Place bread butter-side down in the pan.",
        "Cook for 1-2 minutes until golden brown and crispy.",
        "Spread more butter on the top side while cooking.",
        "Flip and cook the other side for 1-2 minutes.",
        "Remove from pan and add your favorite spread.",
        "For savory version, sprinkle a little salt before serving.",
        "Serve hot with tea or coffee."
      ]
    },
    { 
      id: 5, 
      name: "Fruit Chaat",
      tagline: "Tangy and spicy mixed fruit salad",
      image: studentImages[4],
      ingredients: [
        "1 apple, chopped",
        "1 banana, sliced",
        "1 orange, peeled and segmented",
        "½ cup pomegranate seeds",
        "1 teaspoon chaat masala",
        "½ teaspoon black salt",
        "1 tablespoon lemon juice",
        "Fresh mint leaves for garnish"
      ],
      steps: [
        "Wash and prepare all fruits.",
        "Chop apple into small cubes.",
        "Slice banana into rounds.",
        "Peel orange and separate segments.",
        "In a large bowl, mix all fruits together.",
        "Add pomegranate seeds.",
        "Sprinkle chaat masala and black salt.",
        "Drizzle lemon juice over fruits.",
        "Gently mix everything without mashing fruits.",
        "Garnish with fresh mint leaves.",
        "Serve immediately for best taste."
      ]
    },
    { 
      id: 6, 
      name: "Yogurt with Fruits",
      tagline: "Creamy yogurt with fresh fruits",
      image: studentImages[5],
      ingredients: [
        "1 cup plain yogurt",
        "½ banana, sliced",
        "½ apple, chopped",
        "¼ cup grapes, halved",
        "1 tablespoon honey or sugar",
        "¼ teaspoon cardamom powder",
        "1 tablespoon chopped nuts (optional)"
      ],
      steps: [
        "Take yogurt in a bowl and whisk until smooth.",
        "Add honey or sugar and mix well.",
        "Add cardamom powder and mix.",
        "Prepare fruits by washing and cutting.",
        "Add banana slices, apple pieces, and grapes to yogurt.",
        "Mix gently to coat fruits with yogurt.",
        "If using nuts, add them now.",
        "Serve chilled or at room temperature.",
        "You can also layer fruits and yogurt in a glass for presentation."
      ]
    },
    { 
      id: 7, 
      name: "Cereal with Milk",
      tagline: "Classic breakfast cereal with milk",
      image: studentImages[6],
      ingredients: [
        "1 cup breakfast cereal (cornflakes, wheat flakes, etc.)",
        "1 cup milk (cold or warm)",
        "1 teaspoon sugar or honey (optional)",
        "Sliced banana or other fruits (optional)"
      ],
      steps: [
        "Take a cereal bowl.",
        "Add 1 cup of cereal to the bowl.",
        "If using fruits, add sliced banana now.",
        "Pour milk over cereal until just covered.",
        "Add sugar or honey if desired.",
        "Mix lightly and serve immediately.",
        "For hot cereal: warm the milk first before pouring.",
        "Eat immediately to keep cereal crunchy."
      ]
    },
    { 
      id: 8, 
      name: "Peanut Butter Toast",
      tagline: "Nutritious toast with creamy peanut butter",
      image: studentImages[7],
      ingredients: [
        "2 slices of bread",
        "2 tablespoons peanut butter",
        "1 teaspoon honey or jam (optional)",
        "½ banana, sliced (optional)",
        "Pinch of cinnamon (optional)"
      ],
      steps: [
        "Toast bread slices until golden brown.",
        "Spread peanut butter evenly on warm toast.",
        "If using honey, drizzle over peanut butter.",
        "For banana version: arrange banana slices on peanut butter.",
        "Sprinkle cinnamon if using.",
        "Put two slices together or enjoy separately.",
        "Serve immediately.",
        "Great for breakfast or quick snack."
      ]
    },
    { 
      id: 9, 
      name: "Jam Sandwich",
      tagline: "Sweet and simple jam-filled sandwich",
      image: studentImages[8],
      ingredients: [
        "2 slices of bread",
        "2 tablespoons fruit jam (any flavor)",
        "1 teaspoon butter (optional)",
        "Optional: sprinkle of powdered sugar"
      ],
      steps: [
        "Take bread slices.",
        "Spread jam evenly on one slice.",
        "If using butter, spread on the other slice.",
        "Put slices together with jam in middle.",
        "For toasted version: toast bread first, then add jam.",
        "Cut diagonally for better presentation.",
        "Sprinkle powdered sugar on top if desired.",
        "Serve immediately."
      ]
    },
    { 
      id: 10, 
      name: "Boiled Eggs",
      tagline: "Perfect protein-packed boiled eggs",
      image: studentImages[9],
      ingredients: [
        "2 eggs",
        "Water for boiling",
        "Salt and pepper to taste",
        "Optional: chaat masala, soy sauce"
      ],
      steps: [
        "Take eggs and wash them under running water.",
        "Place eggs in a small pot.",
        "Add enough water to cover eggs completely.",
        "Bring water to boil on high heat.",
        "Once boiling, reduce heat to medium.",
        "Boil for 8-10 minutes for hard-boiled eggs.",
        "For soft-boiled: boil for 5-6 minutes.",
        "Remove eggs and place in cold water for 2 minutes.",
        "Peel eggs carefully.",
        "Sprinkle salt, pepper, or your favorite seasoning.",
        "Serve with bread or as protein snack."
      ]
    },
    { 
      id: 11, 
      name: "French Toast",
      tagline: "Egg-dipped toast, golden and sweet",
      image: studentImages[10],
      ingredients: [
        "2 slices of bread",
        "1 egg",
        "2 tablespoons milk",
        "1 teaspoon sugar",
        "¼ teaspoon vanilla extract (optional)",
        "Pinch of cinnamon powder",
        "1 tablespoon butter or oil",
        "Honey or maple syrup for serving"
      ],
      steps: [
        "In a shallow bowl, beat egg well.",
        "Add milk, sugar, vanilla, and cinnamon. Mix well.",
        "Heat butter or oil in frying pan on medium heat.",
        "Dip bread slice in egg mixture, coating both sides.",
        "Let excess drip off.",
        "Place in hot pan and cook for 2-3 minutes per side.",
        "Cook until golden brown on both sides.",
        "Repeat with second slice.",
        "Serve hot with honey or maple syrup.",
        "Great for breakfast or brunch."
      ]
    },
    { 
      id: 12, 
      name: "Scrambled Eggs",
      tagline: "Fluffy and creamy scrambled eggs",
      image: studentImages[11],
      ingredients: [
        "2 eggs",
        "1 tablespoon milk or water",
        "Salt to taste",
        "¼ teaspoon black pepper",
        "1 teaspoon butter or oil",
        "Optional: chopped onions, tomatoes, green chili"
      ],
      steps: [
        "Break eggs into a bowl.",
        "Add milk, salt, and pepper.",
        "Beat well with fork until fluffy.",
        "If using vegetables, add them now.",
        "Heat butter or oil in pan on medium heat.",
        "Pour egg mixture into pan.",
        "Let it set for 30 seconds.",
        "Gently stir with spatula, pushing cooked parts to center.",
        "Cook until eggs are set but still moist.",
        "Remove from heat immediately.",
        "Serve hot with toast or bread."
      ]
    },
    { 
      id: 13, 
      name: "Aloo Paratha (Ready-made)",
      tagline: "Quick potato-stuffed flatbread",
      image: studentImages[12],
      ingredients: [
        "2 ready-made aloo parathas",
        "2 tablespoons oil or ghee",
        "Yogurt for serving",
        "Pickle or chutney (optional)",
        "Butter for topping (optional)"
      ],
      steps: [
        "Take frozen or ready-made aloo parathas.",
        "Heat a frying pan or tawa on medium heat.",
        "Add 1 teaspoon oil or ghee.",
        "Place paratha on hot pan.",
        "Cook for 1-2 minutes until golden brown.",
        "Flip and cook other side.",
        "Add more oil around edges for crispiness.",
        "Press gently with spatula while cooking.",
        "Cook until both sides are golden and crispy.",
        "Serve hot with yogurt and pickle.",
        "Top with butter if desired."
      ]
    },
    { 
      id: 14, 
      name: "Chana Chaat",
      tagline: "Spicy and tangy chickpea salad",
      image: studentImages[13],
      ingredients: [
        "1 cup boiled chickpeas (canned or fresh)",
        "1 small onion, finely chopped",
        "1 small tomato, chopped",
        "½ cucumber, chopped",
        "1 green chili, chopped (optional)",
        "1 tablespoon chopped coriander",
        "1 teaspoon chaat masala",
        "½ teaspoon roasted cumin powder",
        "1 tablespoon lemon juice",
        "Salt to taste"
      ],
      steps: [
        "If using canned chickpeas, drain and rinse well.",
        "In a large bowl, combine chickpeas, onion, tomato, cucumber.",
        "Add green chili if using.",
        "Add chaat masala, cumin powder, and salt.",
        "Mix everything well.",
        "Add lemon juice and mix again.",
        "Garnish with fresh coriander.",
        "Taste and adjust seasoning.",
        "Serve immediately as snack or light meal.",
        "Can be served with puri or crackers."
      ]
    },
    { 
      id: 15, 
      name: "Vegetable Sandwich",
      tagline: "Fresh and healthy veg sandwich",
      image: studentImages[14],
      ingredients: [
        "4 slices of bread",
        "1 boiled potato, sliced",
        "1 cucumber, thinly sliced",
        "1 tomato, thinly sliced",
        "1 small onion, thinly sliced",
        "4 lettuce leaves (optional)",
        "Butter for spreading",
        "Green chutney or mayonnaise",
        "Salt and pepper to taste"
      ],
      steps: [
        "Spread butter on one side of each bread slice.",
        "Spread green chutney or mayonnaise on buttered side.",
        "Layer lettuce leaf on one slice.",
        "Arrange potato slices, cucumber, tomato, and onion.",
        "Sprinkle salt and pepper.",
        "Cover with another bread slice, buttered side down.",
        "Repeat for second sandwich.",
        "Cut diagonally into triangles.",
        "Serve immediately.",
        "Can be grilled for hot sandwich."
      ]
    },
    { 
      id: 16, 
      name: "Pasta with Tomato Sauce",
      tagline: "Simple pasta with ready-made sauce",
      image: studentImages[15],
      ingredients: [
        "1 cup pasta (penne, macaroni, or spaghetti)",
        "2 cups water",
        "Salt for boiling water",
        "½ cup tomato pasta sauce",
        "1 teaspoon olive oil or butter",
        "¼ teaspoon dried oregano",
        "¼ teaspoon chili flakes",
        "Grated cheese (optional)"
      ],
      steps: [
        "Boil water in a pot with salt.",
        "Add pasta and cook for 8-10 minutes or as per package instructions.",
        "Drain pasta, saving some pasta water.",
        "Heat tomato sauce in same pot.",
        "Add cooked pasta to sauce.",
        "Add oregano, chili flakes, and olive oil.",
        "Mix well, adding pasta water if too dry.",
        "Cook for 1-2 minutes more.",
        "Add grated cheese if using.",
        "Mix and serve hot."
      ]
    },
    { 
      id: 17, 
      name: "Fried Rice",
      tagline: "Quick fried rice with leftovers",
      image: studentImages[16],
      ingredients: [
        "2 cups leftover cooked rice",
        "1 egg (optional)",
        "½ cup mixed vegetables (peas, carrots, corn)",
        "1 small onion, chopped",
        "2 tablespoons soy sauce",
        "1 tablespoon oil",
        "Salt and pepper to taste",
        "Spring onions for garnish"
      ],
      steps: [
        "Heat oil in a wok or large pan.",
        "Add chopped onion and cook until soft.",
        "Add mixed vegetables and cook for 2 minutes.",
        "Push vegetables to side, add egg and scramble.",
        "Add leftover rice and break up any lumps.",
        "Add soy sauce, salt, and pepper.",
        "Mix everything well and cook for 3-4 minutes.",
        "Garnish with chopped spring onions.",
        "Serve hot as complete meal.",
        "Add chicken or shrimp for non-veg version."
      ]
    },
    { 
      id: 18, 
      name: "Daal Chawal",
      tagline: "Comforting lentils with rice",
      image: studentImages[17],
      ingredients: [
        "½ cup masoor dal (red lentils)",
        "1 cup rice",
        "3 cups water",
        "1 teaspoon turmeric powder",
        "1 teaspoon salt",
        "1 tablespoon ghee or oil",
        "½ teaspoon cumin seeds",
        "1 dried red chili (optional)",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Wash dal and rice separately.",
        "In pressure cooker, add dal, rice, water, turmeric, and salt.",
        "Close lid and cook for 2 whistles on medium heat.",
        "Let pressure release naturally.",
        "For tempering: heat ghee in small pan.",
        "Add cumin seeds and red chili.",
        "Pour tempering over cooked daal chawal.",
        "Mix gently and garnish with coriander.",
        "Serve hot with pickle or yogurt.",
        "Simple, nutritious student meal."
      ]
    },
    { 
      id: 19, 
      name: "Chicken Sandwich",
      tagline: "Hearty sandwich with shredded chicken",
      image: studentImages[18],
      ingredients: [
        "2 slices of bread",
        "½ cup shredded cooked chicken",
        "2 tablespoons mayonnaise",
        "1 tablespoon chopped celery or onion",
        "Lettuce leaves",
        "Salt and pepper to taste",
        "Butter for toasting"
      ],
      steps: [
        "Mix shredded chicken with mayonnaise.",
        "Add chopped celery or onion.",
        "Season with salt and pepper.",
        "Butter bread slices on one side.",
        "Place lettuce leaf on unbuttered side of one slice.",
        "Spread chicken mixture over lettuce.",
        "Cover with second bread slice, buttered side out.",
        "Toast in pan until golden brown on both sides.",
        "Cut diagonally and serve hot.",
        "Great for using leftover chicken."
      ]
    },
    { 
      id: 20, 
      name: "Qeema Paratha",
      tagline: "Stuffed paratha with minced meat",
      image: studentImages[19],
      ingredients: [
        "2 ready-made parathas",
        "½ cup cooked minced meat (qeema)",
        "1 small onion, finely chopped",
        "1 green chili, chopped",
        "1 tablespoon oil",
        "¼ teaspoon garam masala",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Heat oil in pan, add chopped onion.",
        "Cook until onion is golden brown.",
        "Add cooked qeema and green chili.",
        "Add garam masala and salt, mix well.",
        "Cook for 2-3 minutes, then remove from heat.",
        "Add fresh coriander, mix.",
        "Take paratha, place qeema mixture in center.",
        "Fold paratha over filling or make roll.",
        "Heat in pan until crispy on both sides.",
        "Serve hot with yogurt or raita."
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

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="student-page">
      {/* Header */}
      <header className="student-header">
        <div className="student-header-content">
          <h1 className="student-page-title">Smart Student Meals</h1>
          <p className="student-page-description">
            Quick and cost-conscious recipes tailored for everyday student cooking.
          </p>
        </div>
      </header>

      {/* Student Recipes Grid */}
      <main className="student-main">
        <div className="student-grid-section">
          <div className="student-grid">
            {studentRecipes.map(recipe => (
              <div 
                key={recipe.id} 
                className="student-technique-card"
                onClick={() => handleRecipeSelect(recipe)}
              >
                <div 
                  className="student-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                ></div>
                
                <div className="student-card-content">
                  <h3 className="student-card-title">{recipe.name}</h3>
                  <p className="student-card-description">{recipe.tagline}</p>
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

      {/* DETAIL MODAL with SELECTED RECIPE IMAGE as Background */}
      {showDetailPanel && selectedRecipe && (
        <div className="student-modal-overlay" onClick={closeDetailPanel}>
          <div 
            className="student-modal" 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <button className="student-modal-close" onClick={closeDetailPanel}>×</button>
            
            <div className="student-modal-header">
              <div className="student-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="student-modal-content">
              {/* COLUMN 1 - INGREDIENTS */}
              <div className="student-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="student-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="student-ingredient-item">
                      <span className="student-ingredient-bullet">•</span>
                      <span className="student-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 2 - STEPS TO MAKE */}
              <div className="student-modal-steps">
                <h3>Steps to Make</h3>
                <div className="student-steps-list">
                  {selectedRecipe.steps.map((step, idx) => (
                    <div key={idx} className="student-step-item">
                      <span className="student-step-number">{idx + 1}.</span>
                      <span className="student-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUMN 3 - VOICE INSTRUCTIONS */}
              <div className="student-modal-voice-container">
                <div className="voice-panel">
                  <h3><i className="fas fa-volume-up"></i> Voice Instructions</h3>
                  
                  <div className="voice-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${progress}%`}}></div>
                    </div>
                    <div className="progress-info">
                      <span>Step {currentStep} of {selectedRecipe.steps.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>

                  <div className="voice-controls">
                    <button 
                      className={`voice-main-btn ${isPlaying ? 'stop' : 'play'}`}
                      onClick={() => isPlaying ? stopSpeaking() : speakInstructions(selectedRecipe.steps)}
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

export default RecipeStudentPage;