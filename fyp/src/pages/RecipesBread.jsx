import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipesBread.css';

const RecipesBread = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const speechSynthesisRef = useRef(null);

  // All Bread Recipes (38 recipes) with detailed instructions
  const breadRecipes = [
    // ==================== ROTI (4) ====================
    { 
      id: 1, 
      name: "Tawa Roti",
      tagline: "Simple whole wheat flatbread - everyday staple",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups whole wheat flour (atta)",
        "Water as needed (about 3/4 cup)",
        "1 teaspoon salt",
        "1 tablespoon oil or ghee",
        "Extra flour for dusting"
      ],
      steps: [
        "In a large bowl, mix whole wheat flour and salt together.",
        "Add oil and rub it into the flour with your fingers until well combined.",
        "Gradually add water little by little and knead into a soft, smooth dough. The dough should be soft but not sticky.",
        "Knead the dough for 5-7 minutes until it becomes smooth and elastic.",
        "Cover the dough with a damp cloth and let it rest for 30 minutes. This makes the rotis soft.",
        "After resting, divide the dough into 10-12 equal-sized balls.",
        "Lightly dust a rolling surface with dry flour. Take one dough ball and flatten it with your palm.",
        "Roll it into a circle about 6-7 inches in diameter, using light pressure. Rotate frequently for even rolling.",
        "Heat a tawa (griddle) over medium-high heat until hot.",
        "Carefully place the rolled roti onto the hot tawa.",
        "Cook for 30-40 seconds until small bubbles appear on the surface. Flip using tongs or a spatula.",
        "Cook the other side for 30 seconds, then flip again.",
        "Press gently with a cloth or spatula - the roti should puff up.",
        "Remove from tawa and apply ghee or butter if desired.",
        "Stack in a roti basket or wrap in a cloth to keep warm. Serve hot with curry."
      ]
    },
    { 
      id: 2, 
      name: "Phulka",
      tagline: "Puffed roti cooked on direct flame - soft and light",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups whole wheat flour (atta)",
        "Water as needed (about 3/4 cup)",
        "1 teaspoon salt",
        "1 tablespoon oil",
        "Ghee or butter for serving"
      ],
      steps: [
        "In a large bowl, mix whole wheat flour and salt. Add oil and rub into the flour.",
        "Add water gradually and knead into a soft, smooth dough. Knead for 5-7 minutes.",
        "Cover and let the dough rest for 30 minutes. This is important for soft phulkas.",
        "Divide the dough into 10-12 equal balls. Keep them covered.",
        "Take one dough ball and roll it into a circle about 5-6 inches in diameter. Phulkas should be slightly thicker than regular rotis.",
        "Heat a tawa over medium-high heat until hot.",
        "Place the rolled phulka on the hot tawa. Cook for 30-40 seconds until you see small bubbles.",
        "Flip and cook the other side for 20-30 seconds until light brown spots appear.",
        "Now, using tongs, lift the phulka and place it directly over an open gas flame (medium flame).",
        "It will puff up like a balloon within 2-3 seconds. Flip to cook the other side briefly.",
        "Remove from flame and place in a roti basket.",
        "Brush with ghee or butter immediately for softness.",
        "Repeat with the remaining dough balls.",
        "Serve hot with dal, curry, or sabzi."
      ]
    },
    { 
      id: 3, 
      name: "Jowar Roti",
      tagline: "Sorghum flatbread - gluten-free and healthy",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups jowar flour (sorghum flour)",
        "Hot water as needed (about 1 cup)",
        "1 teaspoon salt",
        "1 tablespoon oil",
        "Extra flour for dusting"
      ],
      steps: [
        "In a large bowl, mix jowar flour and salt. Add oil and mix well.",
        "Heat water until it is hot but not boiling (about 60-70°C).",
        "Gradually add hot water to the flour while mixing with a spoon. Be careful as the water is hot.",
        "Mix until the dough comes together. Let it cool slightly, then knead into a soft, smooth dough. Jowar dough should be softer than wheat dough.",
        "Cover and let the dough rest for 15-20 minutes.",
        "Divide the dough into 8-10 equal balls.",
        "Place a dough ball between two sheets of plastic wrap or banana leaf. This prevents sticking.",
        "Roll gently into a circle about 6 inches in diameter. Jowar rotis crack easily, so roll gently.",
        "Heat a tawa over medium heat.",
        "Carefully peel off the plastic and place the roti on the hot tawa.",
        "Cook for 30-40 seconds until small bubbles appear. Flip and cook the other side.",
        "Press gently with a spatula - it will puff up slightly.",
        "Remove from tawa and apply ghee or butter.",
        "Serve hot with curry or saag."
      ]
    },
    { 
      id: 4, 
      name: "Bajra Roti",
      tagline: "Pearl millet flatbread - winter specialty",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups bajra flour (pearl millet flour)",
        "Hot water as needed (about 1 cup)",
        "1 teaspoon salt",
        "1 tablespoon ghee",
        "Extra ghee for cooking"
      ],
      steps: [
        "In a large bowl, mix bajra flour and salt.",
        "Heat water until hot but not boiling.",
        "Gradually add hot water to the flour while mixing with a spoon.",
        "Mix until the dough comes together. Let it cool slightly.",
        "Knead into a soft, smooth dough. Bajra dough is sticky, so wet your hands with water while kneading.",
        "Cover and let the dough rest for 15-20 minutes.",
        "Divide the dough into 8-10 equal balls.",
        "Take a dough ball and flatten it between your palms. Bajra rotis are traditionally patted by hand rather than rolled.",
        "Gently pat and shape into a circle about 5-6 inches in diameter. Wet your hands if the dough sticks.",
        "Heat a tawa over medium heat. Add a little ghee.",
        "Carefully place the patted roti on the hot tawa.",
        "Cook for 1-2 minutes until the bottom is golden brown.",
        "Flip and cook the other side, adding more ghee if desired.",
        "Press gently with a spatula to ensure even cooking.",
        "Remove from tawa and serve hot with sarson ka saag or gur (jaggery)."
      ]
    },

    // ==================== PARATHA (6) ====================
    { 
      id: 5, 
      name: "Simple Paratha",
      tagline: "Layered flatbread - crispy and flaky",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups whole wheat flour",
        "Water as needed (about 3/4 cup)",
        "1 teaspoon salt",
        "2 tablespoons oil",
        "Extra oil for cooking",
        "Ghee for brushing"
      ],
      steps: [
        "In a bowl, mix flour and salt. Add 2 tablespoons oil and rub into the flour.",
        "Gradually add water and knead into a soft, smooth dough. Knead for 5-7 minutes.",
        "Cover and let the dough rest for 30 minutes.",
        "Divide the dough into 8-10 equal balls.",
        "Take one dough ball and roll into a small circle (about 4 inches).",
        "Apply oil or ghee all over the surface. Sprinkle a little dry flour.",
        "Fold the circle into half, then fold again into a triangle or rectangle.",
        "Alternatively, roll it like a Swiss roll from one edge to make layers.",
        "Gently roll again into a circle about 6-7 inches in diameter. Be careful not to press too hard.",
        "Heat a tawa over medium heat. Place the paratha on the hot tawa.",
        "Cook for 1-2 minutes until bubbles appear. Flip and cook the other side.",
        "Apply oil or ghee on both sides. Flip and cook until golden brown and crispy.",
        "Press gently with a spatula to ensure even browning and flaking.",
        "Remove from tawa and serve hot with yogurt, pickle, or curry."
      ]
    },
    { 
      id: 6, 
      name: "Lachha Paratha",
      tagline: "Layered flaky paratha - restaurant style",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour (maida)",
        "Water as needed",
        "1 teaspoon salt",
        "2 tablespoons oil",
        "Ghee for cooking",
        "Extra flour for dusting"
      ],
      steps: [
        "In a bowl, mix flour and salt. Add 2 tablespoons oil and rub into the flour.",
        "Gradually add water and knead into a soft, smooth dough. Knead for 5-7 minutes.",
        "Cover and let the dough rest for 30 minutes.",
        "Divide the dough into 8 equal balls.",
        "Take one dough ball and roll it into a very thin circle (about 8-9 inches).",
        "Apply ghee all over the surface. Sprinkle a little dry flour.",
        "Start folding from one edge like a fan (pleats), making 1-inch folds.",
        "Once completely folded, coil the folded strip into a spiral.",
        "Press gently and roll again into a circle about 6-7 inches.",
        "Heat a tawa over medium heat. Place the paratha on the hot tawa.",
        "Cook for 1-2 minutes until bubbles appear. Flip and cook the other side.",
        "Apply ghee generously on both sides. Flip and cook until golden brown and very crispy.",
        "As it cooks, tap with a spatula to create layers.",
        "Remove from tawa and crush slightly with your hands to separate the layers.",
        "Serve hot with curry or dal."
      ]
    },
    { 
      id: 7, 
      name: "Aloo Paratha",
      tagline: "Potato stuffed paratha - classic breakfast",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups whole wheat flour",
        "Water for kneading",
        "1 teaspoon salt",
        "For filling: 3 medium potatoes - boiled and mashed",
        "1 small onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin powder",
        "1 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "1 teaspoon dry mango powder (amchur)",
        "Salt to taste",
        "Fresh coriander - chopped",
        "Oil or ghee for cooking"
      ],
      steps: [
        "Knead the dough with flour, salt, and water into a soft, smooth dough. Cover and rest for 30 minutes.",
        "For the filling: In a bowl, mix mashed potatoes with chopped onions, green chilies, cumin powder, red chili powder, garam masala, amchur powder, salt, and fresh coriander.",
        "Mix well and divide the filling into 8 equal portions. Roll each into a ball.",
        "Divide the dough into 8 equal balls.",
        "Take one dough ball and flatten it. Place one portion of the potato filling in the center.",
        "Gather the edges of the dough and bring them together to cover the filling completely. Pinch to seal.",
        "Gently flatten the stuffed ball and dust with dry flour.",
        "Carefully roll it into a circle about 6-7 inches in diameter. Roll gently to prevent the filling from coming out.",
        "Heat a tawa over medium heat. Place the paratha on the hot tawa.",
        "Cook for 1-2 minutes until bubbles appear. Flip and cook the other side.",
        "Apply oil or ghee on both sides. Flip and cook until golden brown and crispy.",
        "Repeat with the remaining dough and filling.",
        "Serve hot with butter, yogurt, or pickle."
      ]
    },
    { 
      id: 8, 
      name: "Gobhi Paratha",
      tagline: "Cauliflower stuffed paratha - nutritious and tasty",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups whole wheat flour",
        "Water for kneading",
        "1 teaspoon salt",
        "For filling: 1 cup cauliflower - grated",
        "1 small onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "1 teaspoon dry mango powder",
        "Salt to taste",
        "Fresh coriander - chopped",
        "Oil or ghee for cooking"
      ],
      steps: [
        "Knead the dough with flour, salt, and water. Rest for 30 minutes.",
        "For the filling: Squeeze out excess water from the grated cauliflower.",
        "In a bowl, mix cauliflower with onions, green chilies, cumin seeds, red chili powder, garam masala, amchur powder, salt, and coriander.",
        "Divide the filling into 8 equal portions.",
        "Divide the dough into 8 balls.",
        "Take one dough ball, flatten it, and place one portion of filling in the center.",
        "Gather the edges and seal tightly.",
        "Gently roll into a circle about 6-7 inches.",
        "Heat a tawa and cook the paratha with oil or ghee until golden brown on both sides.",
        "Serve hot with butter or yogurt."
      ]
    },
    { 
      id: 9, 
      name: "Mooli Paratha",
      tagline: "Radish stuffed paratha - unique and flavorful",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups whole wheat flour",
        "Water for kneading",
        "1 teaspoon salt",
        "For filling: 1 large radish (mooli) - grated",
        "1 small onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin powder",
        "1 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "Salt to taste",
        "Fresh coriander - chopped",
        "Oil or ghee for cooking"
      ],
      steps: [
        "Knead the dough with flour, salt, and water. Rest for 30 minutes.",
        "For the filling: Squeeze out all the water from the grated radish. Radish releases a lot of water.",
        "In a bowl, mix the squeezed radish with onions, green chilies, cumin powder, red chili powder, garam masala, salt, and coriander.",
        "Divide the filling into 8 portions.",
        "Divide the dough into 8 balls.",
        "Take one dough ball, flatten it, and place the filling in the center.",
        "Seal the edges and roll gently into a circle.",
        "Cook on hot tawa with oil or ghee until golden brown and crispy.",
        "Serve hot with butter or yogurt."
      ]
    },
    { 
      id: 10, 
      name: "Paneer Paratha",
      tagline: "Cottage cheese stuffed paratha - protein rich",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups whole wheat flour",
        "Water for kneading",
        "1 teaspoon salt",
        "For filling: 200g paneer - grated",
        "1 small onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin powder",
        "1 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "Salt to taste",
        "Fresh coriander - chopped",
        "Oil or ghee for cooking"
      ],
      steps: [
        "Knead the dough with flour, salt, and water. Rest for 30 minutes.",
        "For the filling: In a bowl, mix grated paneer with onions, green chilies, cumin powder, red chili powder, garam masala, salt, and coriander.",
        "Divide the filling into 8 portions.",
        "Divide the dough into 8 balls.",
        "Take one dough ball, flatten it, and place the paneer filling in the center.",
        "Gather the edges and seal tightly.",
        "Gently roll into a circle about 6-7 inches. Roll carefully as paneer can make the dough soft.",
        "Heat a tawa and cook the paratha with oil or ghee until golden brown on both sides.",
        "Serve hot with mint chutney or tomato ketchup."
      ]
    },

    // ==================== NAAN (5) ====================
    { 
      id: 11, 
      name: "Tandoori Naan",
      tagline: "Restaurant style naan - soft and pillowy",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour (maida)",
        "1/2 cup plain yogurt",
        "1 teaspoon instant yeast",
        "1 teaspoon sugar",
        "1 teaspoon salt",
        "1 tablespoon oil",
        "Warm water as needed",
        "Butter for brushing",
        "Nigella seeds (kalonji) or sesame seeds for topping"
      ],
      steps: [
        "In a small bowl, dissolve sugar in 1/4 cup warm water. Add yeast and let it sit for 5-10 minutes until frothy.",
        "In a large bowl, mix flour and salt. Add yogurt, oil, and the yeast mixture.",
        "Gradually add warm water and knead into a soft, smooth dough. Knead for 8-10 minutes.",
        "Place the dough in an oiled bowl, cover, and let it rise in a warm place for 2 hours until doubled in size.",
        "Punch down the dough and divide into 8 equal balls.",
        "Take one ball and roll it into a teardrop or oval shape (about 8 inches long).",
        "Sprinkle nigella seeds or sesame seeds on top. Gently press them in.",
        "Preheat oven to 250°C (480°F) or the highest setting. If you have a pizza stone, place it in the oven.",
        "Place the rolled naan on a baking sheet or directly on the pizza stone.",
        "Bake for 3-5 minutes until puffed and golden brown with dark spots.",
        "Alternatively, you can cook on a hot tawa and then finish under the broiler.",
        "Remove from oven and brush generously with melted butter.",
        "Serve hot with curry or dal."
      ]
    },
    { 
      id: 12, 
      name: "Garlic Naan",
      tagline: "Naan with garlic butter - aromatic and delicious",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup plain yogurt",
        "1 teaspoon instant yeast",
        "1 teaspoon sugar",
        "1 teaspoon salt",
        "1 tablespoon oil",
        "Warm water as needed",
        "For garlic butter: 4 tablespoons butter - melted",
        "4-5 cloves garlic - finely chopped",
        "2 tablespoons fresh coriander - chopped"
      ],
      steps: [
        "Make the naan dough following the same method as tandoori naan (steps 1-5 from recipe #11).",
        "For garlic butter: In a small bowl, mix melted butter with finely chopped garlic and fresh coriander. Set aside.",
        "Divide the dough into 8 balls. Roll each into a teardrop or oval shape.",
        "Bake the naan in a preheated oven at 250°C (480°F) for 3-5 minutes until puffed and golden.",
        "Remove from oven and brush generously with the garlic butter mixture.",
        "Sprinkle extra coriander on top if desired.",
        "Serve hot with butter chicken or dal makhani."
      ]
    },
    { 
      id: 13, 
      name: "Butter Naan",
      tagline: "Soft naan with butter - simple and delicious",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup plain yogurt",
        "1 teaspoon instant yeast",
        "1 teaspoon sugar",
        "1 teaspoon salt",
        "1 tablespoon oil",
        "Warm water as needed",
        "Butter for brushing"
      ],
      steps: [
        "Prepare the naan dough as described in recipe #11. Let it rise for 2 hours.",
        "Divide the dough into 8 balls. Roll each into a teardrop or oval shape.",
        "Bake in a preheated oven at 250°C (480°F) for 3-5 minutes until golden brown.",
        "Remove from oven and brush generously with melted butter while still hot.",
        "Stack in a basket and cover with a cloth to keep soft.",
        "Serve hot with any curry."
      ]
    },
    { 
      id: 14, 
      name: "Cheese Naan",
      tagline: "Naan stuffed with cheese - kids favorite",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup plain yogurt",
        "1 teaspoon instant yeast",
        "1 teaspoon sugar",
        "1 teaspoon salt",
        "1 tablespoon oil",
        "Warm water as needed",
        "For filling: 1/2 cup grated mozzarella or cheddar cheese",
        "Butter for brushing",
        "Dried oregano for topping"
      ],
      steps: [
        "Prepare the naan dough as described in recipe #11. Let it rise for 2 hours.",
        "Divide the dough into 8 balls.",
        "Take one dough ball and flatten it. Place 1 tablespoon of grated cheese in the center.",
        "Gather the edges and seal tightly to enclose the cheese.",
        "Gently roll into a teardrop or oval shape. Be careful not to press too hard.",
        "Place on a baking sheet and bake in a preheated oven at 250°C (480°F) for 3-5 minutes until golden and puffed.",
        "Brush with melted butter and sprinkle with dried oregano.",
        "Serve hot - the cheese will be melted and stretchy."
      ]
    },
    { 
      id: 15, 
      name: "Peshawari Naan",
      tagline: "Naan stuffed with nuts and coconut - sweet and savory",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup plain yogurt",
        "1 teaspoon instant yeast",
        "1 teaspoon sugar",
        "1 teaspoon salt",
        "1 tablespoon oil",
        "Warm water as needed",
        "For filling: 1/4 cup desiccated coconut",
        "2 tablespoons almonds - crushed",
        "2 tablespoons pistachios - crushed",
        "2 tablespoons raisins",
        "2 tablespoons sugar",
        "1/2 teaspoon cardamom powder",
        "Butter for brushing"
      ],
      steps: [
        "Prepare the naan dough as described in recipe #11. Let it rise for 2 hours.",
        "For the filling: In a bowl, mix coconut, crushed almonds, pistachios, raisins, sugar, and cardamom powder.",
        "Divide the dough into 8 balls.",
        "Take one dough ball and flatten it. Place 1-2 tablespoons of the filling in the center.",
        "Gather the edges and seal tightly. Gently roll into a teardrop shape.",
        "Bake in a preheated oven at 250°C (480°F) for 3-5 minutes until golden brown.",
        "Brush with melted butter and serve hot."
      ]
    },

    // ==================== ROGHNI NAAN (3) ====================
    { 
      id: 16, 
      name: "Roghni Naan",
      tagline: "Traditional sesame naan - soft and rich",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup plain yogurt",
        "1 teaspoon instant yeast",
        "1 teaspoon sugar",
        "1 teaspoon salt",
        "2 tablespoons oil",
        "Warm water as needed",
        "Sesame seeds for topping",
        "Butter for brushing"
      ],
      steps: [
        "In a bowl, mix flour, salt, yeast, and sugar.",
        "Add yogurt and oil. Gradually add warm water and knead into a soft, smooth dough.",
        "Cover and let the dough rise in a warm place for 2 hours.",
        "Divide the dough into 8 balls.",
        "Roll each ball into an oval or teardrop shape.",
        "Sprinkle sesame seeds on top and gently press them in.",
        "Bake in a preheated oven at 250°C (480°F) for 3-5 minutes until golden.",
        "Brush with butter and serve hot."
      ]
    },
    { 
      id: 17, 
      name: "Kabuli Naan",
      tagline: "Afghan style naan - rustic and delicious",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup plain yogurt",
        "1 teaspoon instant yeast",
        "1 teaspoon sugar",
        "1 teaspoon salt",
        "2 tablespoons oil",
        "Warm water as needed",
        "Nigella seeds (kalonji)",
        "Butter for brushing"
      ],
      steps: [
        "Prepare the dough as described in recipe #16. Let it rise for 2 hours.",
        "Divide the dough into 8 balls.",
        "Roll each ball into an oblong shape (about 8-9 inches long).",
        "Sprinkle nigella seeds generously on top.",
        "Bake in a preheated oven at 250°C (480°F) for 3-5 minutes until puffed and golden.",
        "Brush with butter and serve hot with kebabs or curry."
      ]
    },
    { 
      id: 18, 
      name: "Ammi's Roghni Naan",
      tagline: "Homestyle roghni naan - easy and quick",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup plain yogurt",
        "1 teaspoon baking powder",
        "1 teaspoon sugar",
        "1 teaspoon salt",
        "2 tablespoons oil",
        "Milk as needed for kneading",
        "Sesame seeds for topping"
      ],
      steps: [
        "In a bowl, mix flour, baking powder, salt, and sugar.",
        "Add yogurt and oil. Gradually add milk and knead into a soft dough.",
        "Cover and let the dough rest for 1 hour (no need to rise like yeast dough).",
        "Divide the dough into 8 balls.",
        "Roll each ball into an oval shape.",
        "Sprinkle sesame seeds on top.",
        "Heat a tawa over medium heat. Cook the naan on the tawa with a little oil until golden on both sides.",
        "Alternatively, bake in a preheated oven at 200°C (400°F) for 8-10 minutes.",
        "Brush with butter and serve hot."
      ]
    },

    // ==================== SHEERMAL (2) ====================
    { 
      id: 19, 
      name: "Sheermal",
      tagline: "Saffron flavored sweet flatbread - royal Mughlai bread",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup warm milk",
        "1/4 cup sugar",
        "1/4 cup ghee",
        "1/2 teaspoon saffron strands",
        "1/2 teaspoon cardamom powder",
        "1 teaspoon instant yeast",
        "1 teaspoon salt",
        "Extra milk for brushing"
      ],
      steps: [
        "Warm the milk slightly. Add saffron strands and let them steep for 10 minutes. The milk will turn yellow.",
        "In a bowl, mix flour, salt, sugar, and cardamom powder.",
        "Add ghee and rub into the flour until it resembles breadcrumbs.",
        "Dissolve yeast in 2 tablespoons of warm water with a pinch of sugar. Let it sit for 5-10 minutes until frothy.",
        "Add the yeast mixture and saffron milk to the flour. Mix well.",
        "Gradually add more warm water if needed and knead into a soft, smooth dough. Knead for 8-10 minutes.",
        "Cover and let the dough rise in a warm place for 2-3 hours until doubled.",
        "Punch down the dough and divide into 8 equal balls.",
        "Roll each ball into a thick circle (about 1/2 inch thick).",
        "Place on a baking sheet lined with parchment paper.",
        "Brush the tops with milk.",
        "Preheat oven to 180°C (350°F). Bake for 12-15 minutes until lightly golden.",
        "Remove from oven and brush with melted ghee.",
        "Serve warm with korma or nihari."
      ]
    },
    { 
      id: 20, 
      name: "Kashmiri Sheermal",
      tagline: "Kashmiri style sheermal - extra rich and flavorful",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup warm milk",
        "1/4 cup sugar",
        "1/4 cup ghee",
        "1/2 teaspoon saffron strands",
        "1/2 teaspoon cardamom powder",
        "1 teaspoon instant yeast",
        "1 teaspoon salt",
        "Poppy seeds for topping",
        "Milk for brushing"
      ],
      steps: [
        "Prepare the sheermal dough as described in recipe #19. Let it rise for 2-3 hours.",
        "Divide the dough into 8 balls. Roll each into a thick circle.",
        "Brush the tops with milk and sprinkle poppy seeds.",
        "Bake in a preheated oven at 180°C (350°F) for 12-15 minutes.",
        "Brush with melted ghee while still warm.",
        "Serve with Kashmiri rogan josh or keema."
      ]
    },

    // ==================== KULCHA (3) ====================
    { 
      id: 21, 
      name: "Plain Kulcha",
      tagline: "Leavened flatbread - soft and fluffy",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup plain yogurt",
        "1 teaspoon baking powder",
        "1 teaspoon sugar",
        "1 teaspoon salt",
        "2 tablespoons oil",
        "Milk for kneading",
        "Butter for brushing"
      ],
      steps: [
        "In a bowl, mix flour, baking powder, sugar, and salt.",
        "Add yogurt and oil. Mix well.",
        "Gradually add milk and knead into a soft, smooth dough. Knead for 5-7 minutes.",
        "Cover and let the dough rest for 1 hour.",
        "Divide the dough into 8 equal balls.",
        "Roll each ball into a circle about 5-6 inches in diameter.",
        "Heat a tawa over medium heat. Place the kulcha on the hot tawa.",
        "Cook for 1-2 minutes until bubbles appear. Flip and cook the other side.",
        "Press gently with a spatula - the kulcha will puff up.",
        "Apply butter on both sides and cook until golden brown.",
        "Serve hot with chole or curry."
      ]
    },
    { 
      id: 22, 
      name: "Aloo Kulcha",
      tagline: "Potato stuffed kulcha - Amritsari style",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup plain yogurt",
        "1 teaspoon baking powder",
        "1 teaspoon sugar",
        "1 teaspoon salt",
        "2 tablespoons oil",
        "Milk for kneading",
        "For filling: 2 large potatoes - boiled and mashed",
        "1 small onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili powder",
        "1 teaspoon dry mango powder",
        "Salt to taste",
        "Fresh coriander - chopped",
        "Butter for cooking"
      ],
      steps: [
        "Make the kulcha dough as described in recipe #21. Let it rest for 1 hour.",
        "For the filling: Mix mashed potatoes with onions, green chilies, cumin seeds, red chili powder, amchur powder, salt, and coriander.",
        "Divide the filling into 8 portions. Divide the dough into 8 balls.",
        "Take one dough ball, flatten it, and place a portion of filling in the center.",
        "Gather the edges and seal tightly. Gently roll into a circle about 5-6 inches.",
        "Heat a tawa over medium heat. Place the kulcha on the hot tawa.",
        "Cook with butter on both sides until golden brown and crispy.",
        "Serve hot with chole (chickpea curry)."
      ]
    },
    { 
      id: 23, 
      name: "Paneer Kulcha",
      tagline: "Paneer stuffed kulcha - vegetarian delight",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup plain yogurt",
        "1 teaspoon baking powder",
        "1 teaspoon sugar",
        "1 teaspoon salt",
        "2 tablespoons oil",
        "Milk for kneading",
        "For filling: 200g paneer - grated",
        "1 small onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin powder",
        "1 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "Salt to taste",
        "Fresh coriander - chopped",
        "Butter for cooking"
      ],
      steps: [
        "Make the kulcha dough as described in recipe #21. Let it rest for 1 hour.",
        "For the filling: Mix grated paneer with onions, green chilies, cumin powder, red chili powder, garam masala, salt, and coriander.",
        "Divide the filling into 8 portions. Divide the dough into 8 balls.",
        "Take one dough ball, flatten it, and place the paneer filling in the center.",
        "Seal the edges and gently roll into a circle.",
        "Cook on a hot tawa with butter until golden brown on both sides.",
        "Serve hot with mint chutney."
      ]
    },

    // ==================== BREAD PAKORA (2) ====================
    { 
      id: 24, 
      name: "Bread Pakora",
      tagline: "Fried bread fritters - perfect tea time snack",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "8 slices of bread",
        "1 cup besan (gram flour)",
        "1 medium onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon cumin seeds",
        "Salt to taste",
        "Water as needed",
        "Oil for deep frying"
      ],
      steps: [
        "In a bowl, mix besan with red chili powder, turmeric powder, cumin seeds, and salt.",
        "Gradually add water and whisk into a thick, smooth batter (like pakora batter consistency).",
        "Add chopped onions and green chilies to the batter. Mix well.",
        "Cut each bread slice into 4 small squares or triangles.",
        "Heat oil in a deep pan over medium heat for deep frying.",
        "Dip each bread piece into the batter, coating it completely.",
        "Gently drop the coated bread into the hot oil.",
        "Deep fry for 2-3 minutes until golden brown and crispy.",
        "Remove with a slotted spoon and drain on paper towels.",
        "Serve hot with mint chutney or tomato ketchup."
      ]
    },
    { 
      id: 25, 
      name: "Aloo Bread Pakora",
      tagline: "Bread pakora with potato filling - extra delicious",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "8 slices of bread",
        "2 large potatoes - boiled and mashed",
        "1 small onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon chaat masala",
        "1 teaspoon red chili powder",
        "Salt to taste",
        "For batter: 1 cup besan",
        "1/2 teaspoon turmeric",
        "1 teaspoon red chili powder",
        "1 teaspoon cumin seeds",
        "Water as needed",
        "Oil for deep frying"
      ],
      steps: [
        "For the filling: Mix mashed potatoes with onions, green chilies, chaat masala, red chili powder, and salt.",
        "Make the besan batter by mixing besan with turmeric, red chili powder, cumin seeds, salt, and water to make a thick batter.",
        "Take two bread slices. Spread the potato filling on one slice. Cover with the other slice to make a sandwich.",
        "Cut the sandwich into 4 pieces (or leave whole).",
        "Heat oil in a deep pan over medium heat.",
        "Dip each sandwich piece into the besan batter, coating all sides.",
        "Deep fry until golden brown and crispy, about 3-4 minutes.",
        "Drain on paper towels.",
        "Serve hot with mint chutney or ketchup."
      ]
    },

    // ==================== BREAD SANDWICH (3) ====================
    { 
      id: 26, 
      name: "Grilled Sandwich",
      tagline: "Classic grilled sandwich - quick and tasty",
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122",
      ingredients: [
        "8 slices of bread",
        "Butter for spreading",
        "2 potatoes - boiled and sliced",
        "1 cucumber - sliced",
        "1 tomato - sliced",
        "1 onion - sliced",
        "Chaat masala to sprinkle",
        "Green chutney",
        "Tomato ketchup"
      ],
      steps: [
        "Butter one side of each bread slice.",
        "On 4 slices, spread green chutney on the buttered side.",
        "Layer potato slices, cucumber slices, tomato slices, and onion slices on the chutney.",
        "Sprinkle chaat masala and a little salt.",
        "Add a drizzle of tomato ketchup if desired.",
        "Cover with the remaining bread slices, buttered side down.",
        "Heat a sandwich press or a tawa. Place the sandwiches on the press.",
        "Grill until golden brown and crispy, about 2-3 minutes.",
        "If using a tawa, press down with a heavy object while cooking.",
        "Cut diagonally and serve hot with ketchup."
      ]
    },
    { 
      id: 27, 
      name: "Bombay Sandwich",
      tagline: "Mumbai style grilled sandwich - spicy and tangy",
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122",
      ingredients: [
        "8 slices of bread",
        "Butter for spreading",
        "2 potatoes - boiled and sliced",
        "1 cucumber - sliced",
        "1 tomato - sliced",
        "1 onion - sliced",
        "1 capsicum - sliced",
        "Green chutney",
        "Tamarind chutney",
        "Chaat masala",
        "Red chili powder",
        "Cheese slices (optional)"
      ],
      steps: [
        "Butter one side of each bread slice.",
        "Spread green chutney on 4 slices. Spread tamarind chutney on the other 4 slices.",
        "On the green chutney slices, layer potato, cucumber, tomato, onion, and capsicum.",
        "Sprinkle chaat masala and red chili powder.",
        "Place a cheese slice on top if using.",
        "Cover with the tamarind chutney slices, chutney side down.",
        "Grill in a sandwich press until golden and the cheese melts.",
        "Cut into triangles and serve hot."
      ]
    },
    { 
      id: 28, 
      name: "Cheese Sandwich",
      tagline: "Cheese grilled sandwich - kids favorite",
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122",
      ingredients: [
        "8 slices of bread",
        "Butter for spreading",
        "4 slices of cheese (cheddar or mozzarella)",
        "Tomato slices",
        "Oregano",
        "Red chili flakes",
        "Mayonnaise (optional)"
      ],
      steps: [
        "Butter one side of each bread slice.",
        "On 4 slices, spread mayonnaise if desired.",
        "Place a cheese slice on each of these 4 slices.",
        "Add tomato slices on top of the cheese.",
        "Sprinkle oregano and red chili flakes.",
        "Cover with the remaining bread slices, buttered side down.",
        "Grill in a sandwich press until golden brown and the cheese melts.",
        "Serve hot with tomato ketchup."
      ]
    },

    // ==================== BREAD ROLL (2) ====================
    { 
      id: 29, 
      name: "Bread Roll",
      tagline: "Crispy bread rolls - perfect snack",
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122",
      ingredients: [
        "8 slices of bread",
        "2 large potatoes - boiled and mashed",
        "1 small onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon red chili powder",
        "1/2 teaspoon garam masala",
        "Salt to taste",
        "Fresh coriander - chopped",
        "1/2 cup breadcrumbs for coating",
        "Oil for deep frying"
      ],
      steps: [
        "For the filling: Mix mashed potatoes with onions, green chilies, red chili powder, garam masala, salt, and coriander. Set aside.",
        "Trim the edges of the bread slices. Using a rolling pin, roll each slice flat.",
        "Take one flattened bread slice. Place a spoonful of the potato filling in the center.",
        "Roll the bread tightly like a cigar, sealing the edge with a little water.",
        "Repeat with the remaining bread slices and filling.",
        "Roll each bread roll in breadcrumbs to coat evenly.",
        "Heat oil in a deep pan over medium heat for deep frying.",
        "Gently drop the bread rolls into the hot oil.",
        "Deep fry for 2-3 minutes until golden brown and crispy.",
        "Drain on paper towels and serve hot with ketchup or chutney."
      ]
    },
    { 
      id: 30, 
      name: "Veg Bread Roll",
      tagline: "Vegetable bread rolls - healthy and tasty",
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122",
      ingredients: [
        "8 slices of bread",
        "1 cup mixed vegetables - cooked and finely chopped",
        "1 small onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon chaat masala",
        "1/2 teaspoon red chili powder",
        "Salt to taste",
        "Fresh coriander - chopped",
        "1/2 cup breadcrumbs for coating",
        "Oil for deep frying"
      ],
      steps: [
        "For the filling: Mix cooked vegetables with onions, green chilies, chaat masala, red chili powder, salt, and coriander.",
        "Trim bread edges and roll each slice flat with a rolling pin.",
        "Place a spoonful of filling on each flattened bread slice.",
        "Roll tightly and seal the edge with water.",
        "Coat each roll in breadcrumbs.",
        "Deep fry in hot oil until golden brown and crispy, about 2-3 minutes.",
        "Drain on paper towels.",
        "Serve hot with mint chutney."
      ]
    },

    // ==================== SWEET BREAD (3) ====================
    { 
      id: 31, 
      name: "Meetha Paratha",
      tagline: "Sweet stuffed paratha - perfect dessert paratha",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups whole wheat flour",
        "Water for kneading",
        "1 teaspoon salt",
        "For filling: 1/2 cup grated jaggery (gur)",
        "2 tablespoons desiccated coconut",
        "2 tablespoons mixed nuts - crushed",
        "1/2 teaspoon cardamom powder",
        "Ghee for cooking"
      ],
      steps: [
        "Knead the dough with flour, salt, and water. Rest for 30 minutes.",
        "For the filling: Mix grated jaggery, coconut, crushed nuts, and cardamom powder.",
        "Divide the dough into 8 balls. Divide the filling into 8 portions.",
        "Take one dough ball, flatten it, and place a portion of filling in the center.",
        "Seal the edges and gently roll into a circle.",
        "Heat a tawa over medium heat. Cook the paratha with ghee until golden brown on both sides.",
        "The jaggery will melt inside, making it sweet and gooey.",
        "Serve hot as a dessert or breakfast."
      ]
    },
    { 
      id: 32, 
      name: "Banana Bread",
      tagline: "Sweet banana bread - moist and delicious",
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122",
      ingredients: [
        "2 cups all-purpose flour",
        "3 ripe bananas - mashed",
        "1/2 cup sugar",
        "1/4 cup oil",
        "1 teaspoon baking soda",
        "1 teaspoon vanilla extract",
        "1/2 cup chopped nuts (walnuts or pecans)",
        "1/2 teaspoon salt"
      ],
      steps: [
        "Preheat oven to 180°C (350°F). Grease a loaf pan with oil or butter.",
        "In a large bowl, mash the ripe bananas with a fork until smooth.",
        "Add sugar and oil to the mashed bananas. Mix well.",
        "Add vanilla extract and mix.",
        "In a separate bowl, mix flour, baking soda, and salt.",
        "Gradually add the dry ingredients to the banana mixture. Mix until just combined. Do not overmix.",
        "Fold in the chopped nuts.",
        "Pour the batter into the prepared loaf pan.",
        "Bake for 50-60 minutes until a toothpick inserted in the center comes out clean.",
        "Let it cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.",
        "Slice and serve with butter or as is."
      ]
    },
    { 
      id: 33, 
      name: "Puri",
      tagline: "Deep fried Indian bread - puffy and golden",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups whole wheat flour",
        "Water as needed (about 3/4 cup)",
        "1 teaspoon salt",
        "1 tablespoon oil",
        "Oil for deep frying"
      ],
      steps: [
        "In a bowl, mix flour and salt. Add 1 tablespoon oil and rub into the flour.",
        "Gradually add water and knead into a stiff, firm dough. Puri dough should be stiffer than roti dough.",
        "Knead for 5-7 minutes until smooth. Cover and rest for 30 minutes.",
        "Divide the dough into 15-20 small balls (about the size of a large marble).",
        "Roll each ball into a small circle about 3-4 inches in diameter. Puris should be rolled evenly and not too thin.",
        "Heat oil in a deep pan over medium-high heat. The oil should be hot but not smoking.",
        "To test, drop a small piece of dough into the oil - it should come up immediately.",
        "Gently slide one puri into the hot oil. Press gently with a slotted spoon to help it puff up.",
        "Within seconds, the puri will puff up like a balloon. Flip and cook the other side until golden.",
        "Remove and drain on paper towels. Repeat with the remaining dough.",
        "Serve hot with aloo sabzi or chole (chickpea curry)."
      ]
    },
    { 
      id: 34, 
      name: "Bhatura",
      tagline: "Fried leavened bread - soft and fluffy",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour",
        "1/4 cup semolina (sooji)",
        "1/2 cup plain yogurt",
        "1 teaspoon baking powder",
        "1 teaspoon sugar",
        "1 teaspoon salt",
        "2 tablespoons oil",
        "Warm water as needed",
        "Oil for deep frying"
      ],
      steps: [
        "In a large bowl, mix flour, semolina, baking powder, sugar, and salt.",
        "Add yogurt and oil. Mix well.",
        "Gradually add warm water and knead into a soft, smooth dough. Knead for 8-10 minutes.",
        "Cover and let the dough rest in a warm place for 2-3 hours. The dough will rise slightly.",
        "Divide the dough into 10-12 equal balls.",
        "Roll each ball into a circle or oval about 5-6 inches in diameter. Bhaturas should be rolled thicker than puris.",
        "Heat oil in a deep pan over medium heat. The oil should be moderately hot.",
        "Gently slide one bhatura into the hot oil. Press gently with a slotted spoon.",
        "It will puff up and become golden. Flip and cook the other side.",
        "Remove and drain on paper towels.",
        "Serve hot with chole (chickpea curry)."
      ]
    },
    { 
      id: 35, 
      name: "Roomali Roti",
      tagline: "Handkerchief thin bread - soft and thin",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups all-purpose flour",
        "Water as needed (about 3/4 cup)",
        "1 teaspoon salt",
        "1 tablespoon oil",
        "Extra flour for dusting"
      ],
      steps: [
        "In a bowl, mix flour and salt. Add oil and rub into the flour.",
        "Gradually add water and knead into a very soft, smooth dough. Roomali roti dough should be softer than regular roti dough.",
        "Knead for 8-10 minutes until the dough is very elastic.",
        "Cover and let the dough rest for 1 hour.",
        "Divide the dough into 10-12 balls. Keep them covered.",
        "Take one dough ball and dust generously with flour.",
        "Roll it into a very thin circle, as thin as possible (like a handkerchief).",
        "Heat an inverted tawa or a large flat pan over medium-high heat.",
        "Alternatively, you can cook on a regular tawa but roomali roti is traditionally made on an inverted tawa.",
        "Place the thin roti on the hot surface. Cook for 30-40 seconds until small bubbles appear.",
        "Flip and cook the other side for 20 seconds. Do not over-brown.",
        "Remove and fold into a triangle or roll.",
        "Serve hot with kebabs or curry."
      ]
    },
    { 
      id: 36, 
      name: "Missi Roti",
      tagline: "Spiced gram flour flatbread - Rajasthani specialty",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "1 cup whole wheat flour",
        "1 cup besan (gram flour)",
        "1 small onion - finely chopped",
        "2 green chilies - finely chopped",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "2 tablespoons oil",
        "Salt to taste",
        "Water to knead",
        "Ghee for cooking"
      ],
      steps: [
        "In a bowl, mix whole wheat flour, besan, salt, cumin seeds, red chili powder, and turmeric powder.",
        "Add chopped onions and green chilies. Mix well.",
        "Add oil and rub into the flour mixture.",
        "Gradually add water and knead into a soft, firm dough. Knead for 5-7 minutes.",
        "Cover and let the dough rest for 30 minutes.",
        "Divide the dough into 8-10 balls.",
        "Take one dough ball and roll it into a circle about 6 inches in diameter. The dough may crack, so roll gently.",
        "Heat a tawa over medium heat. Place the roti on the hot tawa.",
        "Cook for 1-2 minutes until bubbles appear. Flip and cook the other side.",
        "Apply ghee on both sides and cook until golden brown.",
        "Serve hot with butter or pickle."
      ]
    },
    { 
      id: 37, 
      name: "Thepla",
      tagline: "Gujarati spiced flatbread - perfect for travel",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups whole wheat flour",
        "1/2 cup besan",
        "1 cup fresh methi (fenugreek leaves) - finely chopped",
        "1 teaspoon ginger-green chili paste",
        "1 teaspoon cumin seeds",
        "1 teaspoon red chili powder",
        "1/2 teaspoon turmeric powder",
        "2 tablespoons oil",
        "Salt to taste",
        "Yogurt for kneading (about 1/2 cup)",
        "Water as needed"
      ],
      steps: [
        "In a bowl, mix whole wheat flour, besan, salt, cumin seeds, red chili powder, and turmeric powder.",
        "Add chopped methi leaves and ginger-chili paste. Mix well.",
        "Add oil and rub into the flour mixture.",
        "Add yogurt and mix. Gradually add water and knead into a soft, smooth dough.",
        "Cover and let the dough rest for 30 minutes.",
        "Divide the dough into 10-12 balls.",
        "Take one dough ball and roll it into a thin circle (about 5-6 inches).",
        "Heat a tawa over medium heat. Place the thepla on the hot tawa.",
        "Cook for 1 minute until bubbles appear. Flip and cook the other side.",
        "Apply oil or ghee on both sides. Flip and cook until golden brown spots appear.",
        "Remove from tawa. Theplas can be stored at room temperature for 2-3 days.",
        "Serve with yogurt or pickle."
      ]
    },
    { 
      id: 38, 
      name: "Makki di Roti",
      tagline: "Cornmeal flatbread - winter specialty",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      ingredients: [
        "2 cups makki ka atta (cornmeal flour)",
        "Hot water as needed (about 1 cup)",
        "Salt to taste",
        "Ghee for cooking"
      ],
      steps: [
        "In a bowl, mix makki ka atta and salt.",
        "Heat water until hot but not boiling.",
        "Gradually add hot water to the flour while mixing with a spoon.",
        "Mix until the dough comes together. Let it cool slightly.",
        "Knead into a soft dough. Cornmeal dough is sticky, so wet your hands with water while kneading.",
        "Cover and let the dough rest for 15-20 minutes.",
        "Divide the dough into 8-10 balls.",
        "Take a dough ball and flatten it between your palms. Corn rotis are patted by hand rather than rolled.",
        "Gently pat into a circle about 5-6 inches in diameter. Wet your hands if the dough sticks.",
        "Heat a tawa over medium heat. Place the patted roti on the hot tawa.",
        "Cook for 1-2 minutes until the bottom is golden. Flip and cook the other side.",
        "Apply ghee on both sides and cook until golden brown and crisp.",
        "Remove from tawa and serve hot with sarson ka saag (mustard greens curry)."
      ]
    }
  ];

  const allBreadRecipes = breadRecipes;

  const recipesList = allBreadRecipes;

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
    <div className="bread-page">
      <header className="bread-header">
        <div className="bread-header-content">
          <h1 className="bread-title">Breads</h1>
          <p className="bread-description">
            Discover 38+ delicious bread recipes - roti, paratha, naan, kulcha, sheermal, and much more
          </p>
        </div>
      </header>

      <main className="bread-main">
        <div className="bread-grid-section">
          <div className="bread-grid">
            {recipesList.map((recipe) => (
              <div
                key={recipe.id}
                className="bread-card"
                onClick={() => handleRecipeClick(recipe)}
              >
                <div
                  className="bread-card-image"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                />
                <div className="bread-card-content">
                  <h3 className="bread-card-title">{recipe.name}</h3>
                  <p className="bread-card-description">{recipe.tagline}</p>
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
        <div className="bread-modal-overlay" onClick={handleCloseModal}>
          <div
            className="bread-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${selectedRecipe.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button className="bread-modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="bread-modal-header">
              <div className="bread-modal-title">
                <h2>{selectedRecipe.name}</h2>
              </div>
            </div>

            <div className="bread-modal-content">
              <div className="bread-modal-ingredients">
                <h3>Ingredients</h3>
                <div className="bread-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="bread-ingredient-item">
                      <span className="bread-ingredient-bullet">•</span>
                      <span className="bread-ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bread-modal-steps">
                <h3>Steps to Make</h3>
                <div className="bread-steps-list">
                  {selectedRecipe.steps.map((step, index) => (
                    <div key={index} className="bread-step-item">
                      <span className="bread-step-number">{index + 1}.</span>
                      <span className="bread-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bread-modal-voice-container">
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

export default RecipesBread;