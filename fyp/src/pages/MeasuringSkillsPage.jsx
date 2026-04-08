import React, { useState } from 'react';
import './MeasuringSkillsPage.css';
import { useNavigate } from 'react-router-dom';
const MeasuringSkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('tools');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);

  // SECTION 1: MEASURING TOOLS
  const toolsData = [
    {
      id: 1,
      name: "Measuring Cups (Liquid)",
      image: "LiqMT.png",
      tagline: "Transparent cups with spout for liquids",
      fullDesc: "Specially designed for measuring liquids. Made of clear glass or plastic with measurement markings in ml and fl oz. Have a spout for easy pouring. Essential for accurate liquid measurements in cooking and baking.",
      keyFeatures: ["Spout for pouring", "Eye-level reading", "Metric & Imperial marks", "Heat resistant"],
      properUsage: "Place on flat surface, fill to mark, read at eye level, pour slowly from spout",
      commonMistakes: ["Holding cup while reading", "Not using flat surface", "Pouring too fast"],
      
      types: [
        {
          name: "Glass Measuring Cup",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Heat-resistant borosilicate glass",
          capacity: "250ml, 500ml, 1L",
          bestFor: "Hot liquids, precise measurements"
        },
        {
          name: "Plastic Measuring Cup",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Lightweight, durable plastic",
          capacity: "250ml, 500ml, 1L",
          bestFor: "Daily use, safety with kids"
        }
      ]
    },
    {
      id: 2,
      name: "Measuring Cups (Dry)",
      image: "CupsMT.png",
      tagline: "Nested cups for dry ingredients",
      fullDesc: "Set of nesting cups for measuring dry ingredients like flour, sugar, rice. Usually come in set of 4: 1 cup, 1/2 cup, 1/3 cup, 1/4 cup. Made of metal or plastic with flat rims for leveling.",
      keyFeatures: ["Nested design", "Flat rim for leveling", "Easy storage", "Stackable"],
      properUsage: "Scoop ingredient, overfill, level with straight edge",
      commonMistakes: ["Packing flour", "Using for liquids", "Not leveling properly"],
      
      types: [
        {
          name: "Metal Measuring Cups",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Stainless steel, durable",
          sizes: "1, 1/2, 1/3, 1/4 cups",
          bestFor: "Professional use, longevity"
        },
        {
          name: "Plastic Measuring Cups",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Colorful, lightweight",
          sizes: "1, 1/2, 1/3, 1/4 cups",
          bestFor: "Home kitchens, baking"
        }
      ]
    },
    {
      id: 3,
      name: "Measuring Spoons",
      image: "SpoonsMT.png",
      tagline: "For small ingredient measurements",
      fullDesc: "Set of spoons for measuring small quantities of both dry and liquid ingredients. Standard set includes: 1 tbsp, 1 tsp, 1/2 tsp, 1/4 tsp. Essential for spices, baking powder, vanilla extract, etc.",
      keyFeatures: ["Nested design", "Leveling edge", "Both dry & liquid use", "Compact storage"],
      properUsage: "Fill spoon, level with straight edge, pour carefully",
      commonMistakes: ["Using for large quantities", "Not leveling spices", "Confusing tbsp & tsp"],
      
      types: [
        {
          name: "Standard Measuring Spoons",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Basic 4-piece set",
          sizes: "1 tbsp, 1 tsp, 1/2 tsp, 1/4 tsp",
          bestFor: "General cooking"
        },
        {
          name: "Extended Set",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Includes 1/8 tsp, 1/2 tbsp",
          sizes: "6-8 pieces",
          bestFor: "Baking, precise recipes"
        }
      ]
    },
    {
      id: 4,
      name: "Kitchen Scale",
      image: "KitScaleMT.png",
      tagline: "Precision weight measurement",
      fullDesc: "Digital or analog scale for measuring ingredients by weight. Most accurate method for baking. Can measure in grams, ounces, pounds. Digital scales with tare function are most convenient.",
      keyFeatures: ["Digital display", "Tare function", "Multiple units", "Precise to 1g"],
      properUsage: "Place bowl, press tare, add ingredient, read weight",
      commonMistakes: ["Not using tare function", "Uneven surface", "Battery issues"],
     
      types: [
        {
          name: "Digital Kitchen Scale",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Electronic, precise",
          capacity: "Up to 5kg, 1g precision",
          bestFor: "Baking, dieting"
        },
        {
          name: "Mechanical Scale",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Spring-based, no battery",
          capacity: "Up to 2kg",
          bestFor: "Basic kitchen use"
        }
      ]
    },
    {
      id: 5,
      name: "Measuring Jug",
      image: "JugMT.png",
      tagline: "Large capacity liquid measurement",
      fullDesc: "Large jug with measurement markings for bigger quantities of liquids. Usually 1-2 liter capacity. Essential for measuring water for rice, stock for soups, milk for large batches.",
      keyFeatures: ["Large capacity", "Easy-grip handle", "Pouring lip", "Clear markings"],
      properUsage: "Place on counter, fill to mark, lift to pour",
      commonMistakes: ["Holding while reading", "Spilling while pouring", "Not cleaning properly"],
     
      types: [
        {
          name: "Plastic Measuring Jug",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Lightweight, durable",
          capacity: "1L, 2L, 4L",
          bestFor: "Daily cooking"
        },
        {
          name: "Glass Measuring Jug",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Heat-resistant, easy to clean",
          capacity: "1L, 1.5L, 2L",
          bestFor: "Hot liquids"
        }
      ]
    },
    {
      id: 6,
      name: "Food Thermometer",
      image: "FoodThermMT.png",
      tagline: "Temperature measurement for cooking",
      fullDesc: "Essential for food safety and perfect cooking. Measures internal temperature of meat, oil temperature for frying, candy temperature for desserts. Digital instant-read thermometers are most popular.",
      keyFeatures: ["Instant read", "Digital display", "Food-safe probe", "Auto-off"],
      properUsage: "Insert into thickest part, wait for reading, clean after use",
      commonMistakes: ["Touching bone", "Not cleaning probe", "Wrong placement"],
    
      types: [
        {
          name: "Instant-Read Thermometer",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Quick reading, portable",
          range: "-50°C to 300°C",
          bestFor: "Meat, poultry"
        },
        {
          name: "Oven Thermometer",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "For oven temperature",
          range: "50°C - 300°C",
          bestFor: "Baking, roasting"
        }
      ]
    },
    {
      id: 7,
      name: "Kitchen Timer",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      tagline: "Time management in cooking",
      fullDesc: "Essential for perfect cooking results. Helps track cooking times for various dishes. Can be mechanical, digital, or app-based. Multiple timers useful for complex recipes.",
      keyFeatures: ["Multiple timers", "Loud alarm", "Magnetic back", "Count up/down"],
      properUsage: "Set time, start timer, attend to other tasks",
      commonMistakes: ["Forgetting to start", "Setting wrong time", "Ignoring alarm"],
     
      types: [
        {
          name: "Digital Kitchen Timer",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Electronic, precise",
          features: "Multiple timers, memory",
          bestFor: "Modern kitchens"
        },
        {
          name: "Mechanical Timer",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Wind-up, classic",
          features: "No battery needed",
          bestFor: "Traditional cooking"
        }
      ]
    },
    {
      id: 8,
      name: "Portion Scoops",
      image: "PortionScoopsMT.png",
      tagline: "Consistent portion control",
      fullDesc: "Also called dishers or ice cream scoops. Used for consistent portioning of cookie dough, rice, batter, etc. Number indicates scoops per quart (#20 = 20 scoops per quart).",
      keyFeatures: ["Release mechanism", "Ergonomic handle", "Standardized sizes", "Durable construction"],
      properUsage: "Scoop, level, release with trigger",
      commonMistakes: ["Wrong size selection", "Not leveling", "Forceful scooping"],
      
      types: [
        {
          name: "Cookie Scoop",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "For uniform cookies",
          sizes: "#20, #24, #30",
          bestFor: "Baking, catering"
        },
        {
          name: "Rice Scoop",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "For portioning rice",
          capacity: "1/2 cup, 3/4 cup",
          bestFor: "Meal prep"
        }
      ]
    }
  ];

  // SECTION 2: MEASURING TECHNIQUES
  const techniquesData = [
    {
      id: 1,
      name: "Leveling Dry Ingredients",
      image: "MTLevel-Dry.png",
      tagline: "Perfect flat measurements",
      fullDesc: "Technique for measuring dry ingredients like flour, sugar, baking powder. Ensures exact amount by removing excess. Essential for baking accuracy.",
      steps: [
        "Scoop ingredient with measuring cup",
        "Overfill slightly above rim",
        "Use straight edge (knife, spatula)",
        "Sweep across to remove excess"
      ],
      tips: "Use dry measuring cups only, don't shake or tap cup",
      commonMistakes: ["Packing flour", "Using liquid cup", "Not using straight edge"],
      applications: "Flour, sugar, cocoa powder, baking soda"
    },
    {
      id: 2,
      name: "Meniscus Reading (Liquids)",
      image: "MTMeniscus.png",
      tagline: "Accurate liquid measurement",
      fullDesc: "Reading the curved surface of liquid in measuring cup. Read from bottom of curve for accuracy. Essential for scientific precision in cooking.",
      steps: [
        "Place measuring cup on flat surface",
        "Pour liquid to just below desired mark",
        "Bend down to eye level",
        "Read from bottom of curve (meniscus)"
      ],
      tips: "Use clear measuring cup, ensure good lighting",
      commonMistakes: ["Reading from above", "Holding cup in hand", "Ignoring curve"],
      applications: "Water, milk, oil, syrups, vinegar"
    },
    {
      id: 3,
      name: "Spoon & Level Method",
      image: "MTSpoonLevel.png",
      tagline: "Proper flour measurement",
      fullDesc: "Correct method for measuring flour without packing it. Aerates flour and gives consistent results. Prevents dense baked goods.",
      steps: [
        "Fluff flour in container with spoon",
        "Gently spoon flour into measuring cup",
        "Overfill above rim",
        "Level with straight edge"
      ],
      tips: "Never scoop directly from bag, don't shake cup",
      commonMistakes: ["Scooping from bag", "Packing flour", "Tapping cup"],
      applications: "All-purpose flour, whole wheat flour"
    },
    {
      id: 4,
      name: "Brown Sugar Packing",
      image: "MTBrownSugar.png",
      tagline: "Measuring moist ingredients",
      fullDesc: "Technique for measuring brown sugar, which needs to be packed to remove air pockets. Creates moist, dense texture in recipes.",
      steps: [
        "Place brown sugar in measuring cup",
        "Press down firmly with back of spoon",
        "Add more sugar and press again",
        "Level with rim when packed"
      ],
      tips: "Should hold shape when turned out, use fresh moist brown sugar",
      commonMistakes: ["Not packing enough", "Using stale sugar", "Over-packing"],
      applications: "Brown sugar, moist coconut"
    },
    {
      id: 5,
      name: "Taring a Scale",
      image: "MTScale.png",
      tagline: "Zeroing scale with container",
      fullDesc: "Using tare function to subtract container weight. Allows sequential adding of multiple ingredients to same bowl. Essential for efficient cooking.",
      steps: [
        "Place empty bowl on scale",
        "Press tare/zero button",
        "Add first ingredient to desired weight",
        "Press tare again, add next ingredient"
      ],
      tips: "Use lightweight bowls, check scale is level",
      commonMistakes: ["Forgetting to tare", "Uneven surface", "Overloading scale"],
      applications: "Baking, meal prep, diet tracking"
    },
    {
      id: 6,
      name: "Sticky Ingredient Method",
      image: "MTStickyIng.png",
      tagline: "Measuring honey, syrup, peanut butter",
      fullDesc: "Technique for measuring sticky ingredients without waste. Uses oil or water coating for easy release.",
      steps: [
        "Lightly oil or spray measuring cup/spoon",
        "Add sticky ingredient",
        "Level if needed",
        "Easily pour out without sticking"
      ],
      tips: "Use warm utensils for easier flow, scrape with spatula",
      commonMistakes: ["Not greasing", "Wasting ingredient", "Inaccurate measurement"],
      applications: "Honey, maple syrup, molasses, peanut butter"
    },
    {
      id: 7,
      name: "Butter Measurement",
      image: "MTButter.png",
      tagline: "Measuring solid fats",
      fullDesc: "Methods for measuring butter and shortening. Can use measurement marks on wrapper, water displacement, or scale.",
      methods: [
        "Use markings on butter wrapper",
        "Water displacement method",
        "Kitchen scale (most accurate)",
        "Pre-marked butter dish"
      ],
      tips: "Soften butter for cups, use cold for scale",
      commonMistakes: ["Guessing amounts", "Not using wrapper marks", "Melting butter"],
      applications: "Butter, margarine, shortening"
    },
    {
      id: 8,
      name: "Eye-Level Measurement",
      image: "MTEyeLevel.png",
      tagline: "Avoiding parallax error",
      fullDesc: "Positioning yourself at eye level with measurement markings to avoid reading errors. Critical for both liquid and some dry measurements.",
      steps: [
        "Place measuring vessel on counter",
        "Bend or crouch to eye level",
        "Align eyes with measurement mark",
        "Adjust liquid/ingredient to exact mark"
      ],
      tips: "Use well-lit area, wear glasses if needed",
      commonMistakes: ["Reading from above", "Angled viewing", "Poor lighting"],
      applications: "All precise measurements"
    }
  ];

  // SECTION 3: ESTIMATION SKILLS
  const estimationData = [
    {
      id: 1,
      name: "Visual Estimation",
      image: "VisualET.png",
      tagline: "Measuring by sight",
      fullDesc: "Estimating quantities without tools using visual cues. Develops with experience. Useful for quick cooking, adjustments, and professional kitchens.",
      techniques: [
        "Compare to known objects (tennis ball = 1/2 cup)",
        "Divide pan/pot mentally into portions",
        "Use finger measurements (knuckle depth)",
        "Estimate by handfuls"
      ],
      accuracy: "±10-20% with practice",
      whenToUse: "Stir-fries, soups, salads, casual cooking",
      whenNotToUse: "Baking, exact recipes, first attempts"
    },
    {
      id: 2,
      name: "Hand Measurements",
      image: "HandMeasureET.png",
      tagline: "Using your hand as guide",
      fullDesc: "Traditional method using hand parts as measurement references. Consistent because hand size relates to body size.",
      measurements: [
        "Pinch = thumb & 1-2 fingers",
        "Dash = 1/8 teaspoon",
        "Smidgen = 1/32 teaspoon",
        "Handful = about 1/2 cup",
        "Palm = about 3 oz protein"
      ],
      tips: "Practice with measured amounts first, note your personal sizes",
      applications: "Spices, herbs, grains, protein portions"
    },
    {
      id: 3,
      name: "Pinch & Dash System",
      image: "PachET.png",
      tagline: "Small quantity estimation",
      fullDesc: "Traditional measurements for very small amounts, especially spices. Based on finger pinch sizes.",
      definitions: [
        "Pinch = thumb & forefinger",
        "Dash = 2-3 drops or quick shake",
        "Smidgen = half a pinch",
        "Drop = single drop from bottle"
      ],
      equivalents: [
        "1 pinch ≈ 1/16 teaspoon",
        "2 pinches ≈ 1/8 teaspoon",
        "1 dash ≈ 1/8 teaspoon liquid",
        "3 drops ≈ 1/4 teaspoon"
      ],
      applications: "Salt, pepper, spices, extracts"
    },
    {
      id: 4,
      name: "Volume by Eye",
      image: "VolumeET.png",
      tagline: "Estimating cups & liters",
      fullDesc: "Estimating volume measurements without tools by comparing to common containers and mental visualization.",
      references: [
        "Tea mug = about 1 cup",
        "Small yogurt cup = 1/2 cup",
        "Soda can = 12 oz (1.5 cups)",
        "Wine glass = 5-6 oz",
        "Rice bowl = 1 cup cooked rice"
      ],
      practiceTips: [
        "Measure water into different containers",
        "Memorize common package sizes",
        "Practice with clear containers first"
      ],
      accuracy: "Improves with regular practice"
    },
    {
      id: 5,
      name: "Weight Estimation",
      image: "WeightET.png",
      tagline: "Guessing weight by feel",
      fullDesc: "Estimating weight of ingredients, especially produce and meat, by heft and size comparison.",
      comparisons: [
        "Tennis ball = 2 oz",
        "Baseball = 5 oz",
        "Deck of cards = 3 oz meat",
        "Smartphone = 6-7 oz",
        "Can of soda = 12 oz"
      ],
      techniques: [
        "Practice with scale first",
        "Compare to known weighted objects",
        "Consider density differences"
      ],
      applications: "Fruits, vegetables, meat portions"
    },
    {
      id: 6,
      name: "Portion Estimation",
      image: "PortionET.png",
      tagline: "Serving size by eye",
      fullDesc: "Estimating proper serving sizes for balanced meals without weighing or measuring.",
      guidelines: [
        "Protein = palm-sized",
        "Carbs = fist-sized",
        "Vegetables = two handfuls",
        "Fats = thumb-sized",
        "Cheese = two dice-sized"
      ],
      plateMethod: [
        "1/2 plate non-starchy vegetables",
        "1/4 plate protein",
        "1/4 plate carbohydrates"
      ],
      applications: "Meal planning, diet control, buffet servings"
    },
    {
      id: 7,
      name: "Seasoning by Taste",
      image: "TasteET.png",
      tagline: "Adjusting flavors intuitively",
      fullDesc: "Adding seasonings without measurements based on taste, smell, and experience. The mark of an experienced cook.",
      process: [
        "Start with less than recipe suggests",
        "Add gradually, tasting frequently",
        "Consider dish volume and cooking time",
        "Balance flavors (salt, acid, sweet, umami)"
      ],
      tips: [
        "Salt early, herbs late",
        "Acids brighten at end",
        "Sweet balances spice",
        "Umami enhances depth"
      ],
      applications: "Soups, stews, sauces, marinades"
    },
    {
      id: 8,
      name: "Cooking Time Estimation",
      image: "CookTimeET.png",
      tagline: "Timing without clock",
      fullDesc: "Estimating cooking times based on experience, visual cues, and sensory signals.",
      indicators: [
        "Color change (browning, transparency)",
        "Texture (fork-tender, al dente)",
        "Smell (aromas developing)",
        "Sound (sizzling changes)",
        "Sight (bubbles, reduction)"
      ],
      timeReferences: [
        "Boil water: 5-10 minutes",
        "Sauté vegetables: 5-7 minutes",
        "Cook rice: 15-20 minutes",
        "Bake chicken: 25-30 minutes"
      ],
      applications: "All cooking processes"
    }
  ];

  // SECTION 4: CONVERSION SKILLS
  const conversionData = [
    {
      id: 1,
      name: "Volume Conversions",
      image: "VolumeCS.png",
      tagline: "Cups, tablespoons, milliliters",
      fullDesc: "Converting between different volume measurement units commonly used in recipes.",
      commonConversions: [
        "1 tablespoon = 3 teaspoons",
        "1/4 cup = 4 tablespoons",
        "1/3 cup = 5 tablespoons + 1 teaspoon",
        "1/2 cup = 8 tablespoons",
        "1 cup = 16 tablespoons",
        "1 cup = 240 ml",
        "1 quart = 4 cups",
        "1 gallon = 16 cups"
      ],
      metricConversions: [
        "1 teaspoon = 5 ml",
        "1 tablespoon = 15 ml",
        "1 fluid ounce = 30 ml",
        "1 cup = 240 ml",
        "1 pint = 480 ml",
        "1 quart = 960 ml",
        "1 liter = 4.2 cups"
      ],
      tips: "Use measuring spoons within cups, memorize key ratios"
    },
    {
      id: 2,
      name: "Weight Conversions",
      image: "WeightCS.png",
      tagline: "Grams, ounces, pounds",
      fullDesc: "Converting between weight measurement systems for precise ingredient measurement.",
      commonConversions: [
        "1 ounce = 28 grams",
        "4 ounces = 113 grams (1/4 pound)",
        "8 ounces = 227 grams (1/2 pound)",
        "16 ounces = 454 grams (1 pound)",
        "1 kilogram = 2.2 pounds",
        "1 pound = 454 grams"
      ],
      bakingConversions: [
        "1 cup flour = 120-125g",
        "1 cup sugar = 200g",
        "1 cup butter = 227g",
        "1 cup water = 240g",
        "1 cup honey = 340g"
      ],
      tips: "Weigh for accuracy, volume varies by ingredient"
    },
    {
      id: 3,
      name: "Temperature Conversions",
      image: "TemperatureCS.png",
      tagline: "Celsius ↔ Fahrenheit",
      fullDesc: "Converting oven and cooking temperatures between Celsius and Fahrenheit systems.",
      formula: [
        "°F to °C: Subtract 32, multiply by 5/9",
        "°C to °F: Multiply by 9/5, add 32"
      ],
      commonTemperatures: [
        "Freezing: 0°C = 32°F",
        "Room temp: 20°C = 68°F",
        "Body temp: 37°C = 98.6°F",
        "Simmer: 85°C = 185°F",
        "Boiling: 100°C = 212°F"
      ],
      ovenTemperatures: [
        "Very cool: 120°C = 250°F",
        "Cool: 150°C = 300°F",
        "Moderate: 180°C = 350°F",
        "Hot: 200°C = 400°F",
        "Very hot: 230°C = 450°F"
      ],
      tips: "Memorize key points, use oven thermometer"
    },
    {
      id: 4,
      name: "Recipe Scaling",
      image: "RecipeCS.png",
      tagline: "Adjusting recipe quantities",
      fullDesc: "Increasing or decreasing recipe quantities while maintaining proper ratios and cooking times.",
      scalingRules: [
        "Multiply all ingredients by same factor",
        "Adjust cooking times (not linear)",
        "Consider pan size changes",
        "Adjust seasoning carefully"
      ],
      commonMultipliers: [
        "Half recipe: Multiply by 0.5",
        "Double recipe: Multiply by 2",
        "Triple recipe: Multiply by 3",
        "Quarter recipe: Multiply by 0.25"
      ],
      exceptions: [
        "Spices: Increase slightly less",
        "Salt: Increase carefully, taste",
        "Baking powder/soda: Exact scaling",
        "Eggs: Round to nearest whole"
      ],
      tips: "Write down conversions, check pan capacity"
    },
    {
      id: 5,
      name: "Imperial to Metric",
      image: "ImperialCS.png",
      tagline: "US measurements to metric",
      fullDesc: "Converting American recipe measurements to metric system used in most other countries.",
      volumeConversions: [
        "1 teaspoon = 5 ml",
        "1 tablespoon = 15 ml",
        "1 fluid ounce = 30 ml",
        "1 cup = 240 ml",
        "1 pint = 480 ml",
        "1 quart = 960 ml",
        "1 gallon = 3.8 liters"
      ],
      weightConversions: [
        "1 ounce = 28 grams",
        "1 pound = 454 grams",
        "1 pound = 0.45 kilograms"
      ],
      ovenConversions: [
        "250°F = 120°C",
        "300°F = 150°C",
        "350°F = 180°C",
        "400°F = 200°C",
        "450°F = 230°C"
      ],
      tips: "Round to convenient metric amounts, use scale for accuracy"
    },
    {
      id: 6,
      name: "Ingredient Substitutions",
      image: "IngredientCS.png",
      tagline: "Converting ingredients",
      fullDesc: "Substituting ingredients when originals aren't available while maintaining similar properties.",
      commonSubstitutions: [
        "1 cup buttermilk = 1 cup milk + 1 tbsp vinegar",
        "1 cup cake flour = 1 cup flour - 2 tbsp",
        "1 tsp baking powder = 1/4 tsp baking soda + 1/2 tsp cream of tartar",
        "1 cup honey = 1 1/4 cup sugar + 1/4 cup water",
        "1 cup oil = 1 cup melted butter"
      ],
      dairySubstitutions: [
        "1 cup milk = 1 cup water + 1/4 cup dry milk",
        "1 cup cream = 3/4 cup milk + 1/4 cup butter",
        "1 cup yogurt = 1 cup buttermilk"
      ],
      tips: "Consider flavor and texture changes, test when possible"
    },
    {
      id: 7,
      name: "Pan Size Conversions",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      tagline: "Adjusting for different pans",
      fullDesc: "Converting recipes for different pan sizes and shapes while maintaining baking times and results.",
      commonPanSizes: [
        "8-inch round = 6-inch round × 1.8",
        "9-inch round = 8-inch round × 1.3",
        "13×9 inch = two 9-inch rounds",
        "Loaf pan = 8×4 inch or 9×5 inch"
      ],
      areaCalculations: [
        "Round pan: π × radius²",
        "Square/rectangular: length × width",
        "Compare areas to adjust quantities"
      ],
      adjustmentRules: [
        "Keep depth similar (1-2 inch difference max)",
        "Adjust time for thickness changes",
        "Check doneness with toothpick"
      ],
      tips: "Fill pans 2/3 full, use parchment paper"
    },
    {
      id: 8,
      name: "Measurement Equivalents",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      tagline: "Quick reference conversions",
      fullDesc: "Memorizing common measurement equivalents for quick mental calculations in the kitchen.",
      mustKnowEquivalents: [
        "3 teaspoons = 1 tablespoon",
        "4 tablespoons = 1/4 cup",
        "16 tablespoons = 1 cup",
        "2 cups = 1 pint",
        "2 pints = 1 quart",
        "4 quarts = 1 gallon",
        "8 fluid ounces = 1 cup",
        "16 ounces = 1 pound"
      ],
      metricEquivalents: [
        "5 ml = 1 teaspoon",
        "15 ml = 1 tablespoon",
        "240 ml = 1 cup",
        "1 liter = 4.2 cups",
        "28 grams = 1 ounce",
        "454 grams = 1 pound"
      ],
      handyEquivalents: [
        "Butter: 1 stick = 1/2 cup = 8 tbsp = 113g",
        "Sugar: 1 cup = 200g = 7 oz",
        "Flour: 1 cup = 120g = 4.25 oz",
        "Rice: 1 cup raw = 3 cups cooked"
      ],
      tips: "Create cheat sheet for fridge door"
    }
  ];

  // SECTION 5: PRECISION SKILLS
  const precisionData = [
    {
      id: 1,
      name: "Baking Precision",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      tagline: "Exact measurements for baking",
      fullDesc: "Techniques for achieving the precision required in baking where chemical reactions depend on exact ratios.",
      criticalRules: [
        "Use scale for dry ingredients",
        "Measure liquids at eye level",
        "Room temperature ingredients",
        "Precise oven temperature",
        "Exact timing"
      ],
      commonErrors: [
        "Scooping flour from bag",
        "Not leveling measurements",
        "Guessing small amounts",
        "Substituting without adjustment"
      ],
      toolsRequired: [
        "Digital kitchen scale",
        "Proper measuring cups/spoons",
        "Oven thermometer",
        "Kitchen timer"
      ],
      tips: "Weigh ingredients, follow recipes exactly, don't improvise in baking"
    },
    {
      id: 2,
      name: "Scale Calibration",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      tagline: "Ensuring scale accuracy",
      fullDesc: "Regular calibration and maintenance of kitchen scales for consistent, accurate measurements.",
      calibrationMethods: [
        "Use calibration weights",
        "Coins (US nickel = 5g)",
        "Water (1ml = 1g at 4°C)",
        "Manufacturer's instructions"
      ],
      maintenanceTips: [
        "Clean after each use",
        "Store in dry place",
        "Replace batteries regularly",
        "Check zero before each use",
        "Avoid overloading"
      ],
      accuracyCheck: [
        "Weigh known object",
        "Check at different weights",
        "Test tare function",
        "Verify on different surfaces"
      ],
      tips: "Calibrate monthly, use on hard flat surface, handle gently"
    },
    {
      id: 3,
      name: "Micro Measurements",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      tagline: "Measuring tiny amounts",
      fullDesc: "Techniques for accurately measuring very small quantities crucial in baking and specialized cooking.",
      toolsForMicro: [
        "1/8 and 1/16 tsp measures",
        "Digital scale (1g precision)",
        "Medicine droppers",
        "Micro measuring spoons"
      ],
      techniques: [
        "Use scale for under 1 tsp",
        "Dropper for liquids",
        "Dip & sweep for powders",
        "Divide known amounts"
      ],
      criticalAmounts: [
        "Yeast: 2.25 tsp per packet",
        "Baking soda: exact amounts",
        "Salt: affects fermentation",
        "Spices: balance flavors"
      ],
      tips: "Invest in micro spoons, use scale for accuracy, practice with water"
    },
    {
      id: 4,
      name: "Consistent Portioning",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      tagline: "Uniform food portions",
      fullDesc: "Creating identical portions for consistent cooking, professional presentation, and controlled servings.",
      portioningTools: [
        "Cookie/ice cream scoops",
        "Kitchen scale",
        "Measuring cups",
        "Portion control plates",
        "Divided containers"
      ],
      techniques: [
        "Weigh each portion",
        "Use same scoop size",
        "Divide total by number",
        "Visual markers in pans"
      ],
      benefits: [
        "Even cooking",
        "Professional appearance",
        "Consistent nutrition",
        "Cost control",
        "Waste reduction"
      ],
      tips: "Weigh first few, then eyeball, use consistent tools"
    },
    {
      id: 5,
      name: "Temperature Precision",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      tagline: "Exact temperature control",
      fullDesc: "Achieving and maintaining precise temperatures crucial for candy making, meat cooking, and baking.",
      criticalTemperatures: [
        "Meat doneness temperatures",
        "Candy stages (soft ball, hard crack)",
        "Yeast activation (105-115°F)",
        "Chocolate tempering",
        "Oil for frying"
      ],
      tools: [
        "Instant-read thermometer",
        "Candy thermometer",
        "Oven thermometer",
        "Infrared thermometer"
      ],
      techniques: [
        "Calibrate thermometers regularly",
        "Measure in thickest part",
        "Avoid bone/fat pockets",
        "Allow for carryover cooking"
      ],
      tips: "Invest in quality thermometer, calibrate monthly, clean probes"
    },
    {
      id: 6,
      name: "Hydration Ratios",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      tagline: "Baking with exact water ratios",
      fullDesc: "Precise water-to-flour ratios essential for bread baking, pasta making, and dough preparation.",
      commonRatios: [
        "Bread: 60-75% hydration",
        "Pasta: 50% hydration",
        "Pie crust: 30-40% hydration",
        "Cookie dough: 15-25%"
      ],
      calculation: [
        "Hydration % = (water weight ÷ flour weight) × 100",
        "Baker's percentages",
        "Adjust for humidity",
        "Account for other liquids"
      ],
      effects: [
        "Higher hydration: more open crumb",
        "Lower hydration: denser texture",
        "Affects fermentation time",
        "Changes handling properties"
      ],
      tips: "Weigh ingredients, adjust for climate, keep notes"
    },
    {
      id: 7,
      name: "Ingredient Ratios",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      tagline: "Mastering recipe ratios",
      fullDesc: "Understanding and applying fundamental ingredient ratios that form the basis of countless recipes.",
      basicRatios: [
        "Pie dough: 3:2:1 (flour:fat:water)",
        "Biscuits: 3:1:2 (flour:fat:liquid)",
        "Pancakes: 2:2:1:1/2 (flour:liquid:egg:fat)",
        "Vinaigrette: 3:1 (oil:vinegar)",
        "Rice: 1:2 (rice:water)"
      ],
      application: [
        "Scale up/down easily",
        "Create variations",
        "Troubleshoot failures",
        "Memorize less recipes"
      ],
      benefits: [
        "Flexibility in cooking",
        "Better understanding",
        "Easier improvisation",
        "Confidence in kitchen"
      ],
      tips: "Learn ratios instead of recipes, practice with variations"
    },
    {
      id: 8,
      name: "Measurement Documentation",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      tagline: "Recording exact measurements",
      fullDesc: "System for documenting precise measurements, adjustments, and results for consistent reproduction.",
      documentationMethods: [
        "Recipe journal/notebook",
        "Digital notes app",
        "Photograph measurements",
        "Spreadsheet tracking"
      ],
      whatToRecord: [
        "Exact weights/measures",
        "Brands of ingredients",
        "Equipment used",
        "Time/temperature",
        "Results and adjustments"
      ],
      benefits: [
        "Reproduce successes",
        "Avoid repeating mistakes",
        "Track improvements",
        "Share exact recipes"
      ],
      tips: "Be consistent, include details, review regularly"
    }
  ];

  // Get current data based on selected category
  const getCurrentData = () => {
    switch (selectedCategory) {
      case 'tools': return toolsData;
      case 'techniques': return techniquesData;
      case 'estimation': return estimationData;
      case 'conversions': return conversionData;
      case 'precision': return precisionData;
      default: return toolsData;
    }
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setShowDetailPanel(true);
  };

  const closeDetailPanel = () => {
    setShowDetailPanel(false);
    setSelectedItem(null);
  };

  return (
    <div className="msp-container">
      <div className="msp-layout">
        {/* SIDEBAR */}
        <aside className="msp-sidebar">
          <div className="msp-sidebar-header">
            <h2 className="msp-sidebar-title">Measuring Skills</h2>
            
          </div>

          <div className="msp-sidebar-categories">
            <ul className="msp-categories-list">
              <li 
                className={`msp-category-item ${selectedCategory === 'tools' ? 'msp-active' : ''}`}
                onClick={() => setSelectedCategory('tools')}
              >
                <span className="msp-category-name">Tools & Equipment</span>
              </li>
              <li 
                className={`msp-category-item ${selectedCategory === 'techniques' ? 'msp-active' : ''}`}
                onClick={() => setSelectedCategory('techniques')}
              >
                <span className="msp-category-name">Measuring Techniques</span>
              </li>
              <li 
                className={`msp-category-item ${selectedCategory === 'estimation' ? 'msp-active' : ''}`}
                onClick={() => setSelectedCategory('estimation')}
              >
                <span className="msp-category-name">Estimation Skills</span>
              </li>
              <li 
                className={`msp-category-item ${selectedCategory === 'conversions' ? 'msp-active' : ''}`}
                onClick={() => setSelectedCategory('conversions')}
              >
                <span className="msp-category-name">Conversion Skills</span>
              </li>
              <li 
                className={`msp-category-item ${selectedCategory === 'precision' ? 'msp-active' : ''}`}
                onClick={() => setSelectedCategory('precision')}
              >
                <span className="msp-category-name">Precision Skills</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="msp-main">
          <header className="msp-main-header">
            <div className="msp-header-content">
              <h1 className="msp-page-title">
                {selectedCategory === 'tools' && 'Measuring Tools & Equipment'}
                {selectedCategory === 'techniques' && 'Measuring Techniques'}
                {selectedCategory === 'estimation' && 'Estimation Skills'}
                {selectedCategory === 'conversions' && 'Conversion Skills'}
                {selectedCategory === 'precision' && 'Precision Skills'}
              </h1>
              <p className="msp-page-description">
                {selectedCategory === 'tools' && 'Essential tools for accurate kitchen measurements and their proper usage.'}
                {selectedCategory === 'techniques' && 'Proper methods and techniques for measuring ingredients accurately.'}
                {selectedCategory === 'estimation' && 'Skills for estimating quantities when precise measuring isn\'t possible.'}
                {selectedCategory === 'conversions' && 'Converting between measurement systems and adjusting recipes.'}
                {selectedCategory === 'precision' && 'Advanced skills for exact measurements in baking and precision cooking.'}
              </p>
            </div>
          </header>

          {/* ITEMS GRID */}
          <div className="msp-items-grid-section">
            <div className="msp-items-grid">
              {getCurrentData().map(item => (
                <div 
                  key={item.id} 
                  className="msp-item-card"
                  onClick={() => handleItemSelect(item)}
                >
                  <div 
                    className="msp-card-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  
                  <div className="msp-card-content">
                    <div className="msp-card-header">
                      <h3 className="msp-card-title">{item.name}</h3>
                      {item.essentiality && (
                        <div className={`msp-essentiality-badge ${item.essentiality.toLowerCase()}`}>
                          {item.essentiality}
                        </div>
                      )}
                    </div>
                    <p className="msp-card-description">{item.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* ===== FIXED MODAL - SIRF LEFT SIDE SCROLL, RIGHT IMAGE FIXED ===== */}
      {showDetailPanel && selectedItem && (
        <div className="msp-modal-overlay" onClick={closeDetailPanel}>
          <div className="msp-modal" onClick={(e) => e.stopPropagation()}>
            <button className="msp-modal-close" onClick={closeDetailPanel}>×</button>
            
            <div className="msp-modal-header">
              <div className="msp-modal-title">
                <h2>{selectedItem.name}</h2>
                <p className="msp-modal-subtitle">{selectedItem.tagline}</p>
              </div>
            </div>

            {/* DIRECT 2-COLUMN LAYOUT - NO EXTRA WRAPPERS */}
            <div className="msp-modal-content">
              
              {/* LEFT SIDE - SCROLLABLE CONTENT (65%) */}
              <div className="msp-modal-left">
                <div className="msp-modal-details">
                  
                  {/* DESCRIPTION */}
                  <div className="msp-detail-section">
                    <h3>📋 Description</h3>
                    <div className="msp-detail-content">
                      <p>{selectedItem.fullDesc}</p>
                    </div>
                  </div>

                  {/* ===== TOOLS CATEGORY ===== */}
                  {selectedCategory === 'tools' && selectedItem && (
                    <>
                      {/* Key Features */}
                      {selectedItem.keyFeatures && selectedItem.keyFeatures.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>✅ Key Features</h3>
                          <div className="msp-features-horizontal">
                            {selectedItem.keyFeatures.map((feature, idx) => (
                              <div key={idx} className="msp-feature-box">
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Proper Usage */}
                      {selectedItem.properUsage && (
                        <div className="msp-detail-section">
                          <h3>📝 Proper Usage</h3>
                          <div className="msp-detail-content">
                            <p><strong>How to use correctly:</strong> {selectedItem.properUsage}</p>
                          </div>
                        </div>
                      )}

                      {/* Common Mistakes */}
                      {selectedItem.commonMistakes && selectedItem.commonMistakes.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>❌ Common Mistakes</h3>
                          <div className="msp-mistakes-horizontal">
                            {selectedItem.commonMistakes.map((mistake, idx) => (
                              <div key={idx} className="msp-mistake-box">
                                {mistake}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Essentiality */}
                      {selectedItem.essentiality && (
                        <div className="msp-detail-section">
                          <h3>⭐ Importance Level</h3>
                          <div className="msp-detail-content">
                            <p><strong>{selectedItem.essentiality}</strong> - {
                              selectedItem.essentiality === 'Essential' ? 'Must-have for every kitchen' :
                              selectedItem.essentiality === 'Important' ? 'Highly recommended for serious cooks' :
                              selectedItem.essentiality === 'Useful' ? 'Good to have for specific tasks' :
                              'Specialized tool for specific purposes'
                            }</p>
                          </div>
                        </div>
                      )}

                      {/* Types & Varieties */}
                      {selectedItem.types && selectedItem.types.length > 0 && (
                        <div className="msp-types-section">
                          <h3 className="msp-types-heading">🔧 Types & Varieties</h3>
                          <div className="msp-types-grid">
                            {selectedItem.types.map((type, index) => (
                              <div key={index} className="msp-type-card">
                                <div 
                                  className="msp-type-image"
                                  style={{ backgroundImage: `url(${type.image})` }}
                                ></div>
                                <div className="msp-type-content">
                                  <h4>{type.name}</h4>
                                  <p className="msp-type-desc">{type.description}</p>
                                  {type.capacity && (
                                    <div className="msp-type-info">
                                      <span className="msp-type-info-item">📏 Capacity: {type.capacity}</span>
                                    </div>
                                  )}
                                  {type.sizes && (
                                    <div className="msp-type-info">
                                      <span className="msp-type-info-item">📐 Sizes: {type.sizes}</span>
                                    </div>
                                  )}
                                  {type.range && (
                                    <div className="msp-type-info">
                                      <span className="msp-type-info-item">🌡️ Range: {type.range}</span>
                                    </div>
                                  )}
                                  <div className="msp-type-best">
                                    <strong>Best For:</strong> {type.bestFor}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* ===== TECHNIQUES CATEGORY ===== */}
                  {selectedCategory === 'techniques' && selectedItem && (
                    <>
                      {/* Steps */}
                      {selectedItem.steps && selectedItem.steps.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📋 Step-by-Step Process</h3>
                          <div className="msp-detail-content">
                            <ol className="msp-steps-list">
                              {selectedItem.steps.map((step, idx) => (
                                <li key={idx} className="msp-step-item">{step}</li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      )}

                      {/* Tips */}
                      {selectedItem.tips && (
                        <div className="msp-detail-section">
                          <h3>💡 Pro Tips</h3>
                          <div className="msp-detail-content">
                            <p><strong>Expert advice:</strong> {selectedItem.tips}</p>
                          </div>
                        </div>
                      )}

                      {/* Common Mistakes */}
                      {selectedItem.commonMistakes && selectedItem.commonMistakes.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>❌ Common Mistakes</h3>
                          <div className="msp-mistakes-horizontal">
                            {selectedItem.commonMistakes.map((mistake, idx) => (
                              <div key={idx} className="msp-mistake-box">
                                {mistake}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Applications */}
                      {selectedItem.applications && (
                        <div className="msp-detail-section">
                          <h3>🎯 Where to Apply</h3>
                          <div className="msp-detail-content">
                            <p><strong>Use for:</strong> {selectedItem.applications}</p>
                          </div>
                        </div>
                      )}

                      {/* Methods */}
                      {selectedItem.methods && selectedItem.methods.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🛠️ Different Methods</h3>
                          <div className="msp-detail-content">
                            <ol className="msp-methods-list">
                              {selectedItem.methods.map((method, idx) => (
                                <li key={idx} className="msp-method-item">{method}</li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* ===== ESTIMATION CATEGORY ===== */}
                  {selectedCategory === 'estimation' && selectedItem && (
                    <>
                      {/* Techniques */}
                      {selectedItem.techniques && selectedItem.techniques.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>👐 Estimation Techniques</h3>
                          <div className="msp-detail-content">
                            <ul className="msp-techniques-list">
                              {selectedItem.techniques.map((tech, idx) => (
                                <li key={idx} className="msp-technique-item">
                                  <span className="msp-technique-icon">•</span>
                                  <span>{tech}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Measurements */}
                      {selectedItem.measurements && selectedItem.measurements.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📏 Measurement References</h3>
                          <div className="msp-measurements-grid">
                            {selectedItem.measurements.map((measurement, idx) => (
                              <div key={idx} className="msp-measurement-box">
                                {measurement}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Definitions */}
                      {selectedItem.definitions && selectedItem.definitions.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📚 Definitions</h3>
                          <div className="msp-detail-content">
                            <ul className="msp-definitions-list">
                              {selectedItem.definitions.map((definition, idx) => (
                                <li key={idx} className="msp-definition-item">
                                  <span className="msp-definition-icon">•</span>
                                  <span>{definition}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Equivalents */}
                      {selectedItem.equivalents && selectedItem.equivalents.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>⚖️ Measurement Equivalents</h3>
                          <div className="msp-equivalents-grid">
                            {selectedItem.equivalents.map((equivalent, idx) => (
                              <div key={idx} className="msp-equivalent-box">
                                {equivalent}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Comparisons */}
                      {selectedItem.comparisons && selectedItem.comparisons.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>⚖️ Weight Comparisons</h3>
                          <div className="msp-comparisons-grid">
                            {selectedItem.comparisons.map((comparison, idx) => (
                              <div key={idx} className="msp-comparison-box">
                                {comparison}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* References */}
                      {selectedItem.references && selectedItem.references.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>👀 Visual References</h3>
                          <div className="msp-references-grid">
                            {selectedItem.references.map((reference, idx) => (
                              <div key={idx} className="msp-reference-box">
                                {reference}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Guidelines */}
                      {selectedItem.guidelines && selectedItem.guidelines.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🍽️ Portion Guidelines</h3>
                          <div className="msp-guidelines-grid">
                            {selectedItem.guidelines.map((guideline, idx) => (
                              <div key={idx} className="msp-guideline-box">
                                {guideline}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Plate Method */}
                      {selectedItem.plateMethod && selectedItem.plateMethod.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🍽️ Plate Method</h3>
                          <div className="msp-plate-method-grid">
                            {selectedItem.plateMethod.map((method, idx) => (
                              <div key={idx} className="msp-plate-method-box">
                                {method}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Process */}
                      {selectedItem.process && selectedItem.process.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🧂 Seasoning Process</h3>
                          <div className="msp-detail-content">
                            <ol className="msp-process-list">
                              {selectedItem.process.map((step, idx) => (
                                <li key={idx} className="msp-process-item">{step}</li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      )}

                      {/* Tips Array */}
                      {selectedItem.tips && Array.isArray(selectedItem.tips) && (
                        <div className="msp-detail-section">
                          <h3>💡 Flavor Tips</h3>
                          <div className="msp-tips-grid">
                            {selectedItem.tips.map((tip, idx) => (
                              <div key={idx} className="msp-tip-box">
                                {tip}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Indicators */}
                      {selectedItem.indicators && selectedItem.indicators.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>👁️ Visual & Sensory Indicators</h3>
                          <div className="msp-indicators-grid">
                            {selectedItem.indicators.map((indicator, idx) => (
                              <div key={idx} className="msp-indicator-box">
                                {indicator}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Time References */}
                      {selectedItem.timeReferences && selectedItem.timeReferences.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>⏰ Time References</h3>
                          <div className="msp-time-references-grid">
                            {selectedItem.timeReferences.map((time, idx) => (
                              <div key={idx} className="msp-time-reference-box">
                                {time}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Practice Tips */}
                      {selectedItem.practiceTips && selectedItem.practiceTips.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📚 Practice Tips</h3>
                          <div className="msp-detail-content">
                            <ol className="msp-practice-tips-list">
                              {selectedItem.practiceTips.map((tip, idx) => (
                                <li key={idx} className="msp-practice-tip-item">{tip}</li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      )}

                      {/* Accuracy */}
                      {selectedItem.accuracy && (
                        <div className="msp-detail-section">
                          <h3>🎯 Expected Accuracy</h3>
                          <div className="msp-detail-content">
                            <p><strong>How accurate can you get:</strong> {selectedItem.accuracy}</p>
                          </div>
                        </div>
                      )}

                      {/* When to Use */}
                      {selectedItem.whenToUse && (
                        <div className="msp-detail-section">
                          <h3>✅ When to Use This Method</h3>
                          <div className="msp-detail-content">
                            <p><strong>Best situations:</strong> {selectedItem.whenToUse}</p>
                          </div>
                        </div>
                      )}

                      {/* When NOT to Use */}
                      {selectedItem.whenNotToUse && (
                        <div className="msp-detail-section">
                          <h3>❌ When NOT to Use This Method</h3>
                          <div className="msp-detail-content">
                            <p><strong>Avoid when:</strong> {selectedItem.whenNotToUse}</p>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* ===== CONVERSIONS CATEGORY ===== */}
                  {selectedCategory === 'conversions' && selectedItem && (
                    <>
                      {/* Common Conversions */}
                      {selectedItem.commonConversions && selectedItem.commonConversions.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🔄 Common Conversions</h3>
                          <div className="msp-conversions-grid">
                            {selectedItem.commonConversions.map((conversion, idx) => (
                              <div key={idx} className="msp-conversion-box">
                                {conversion}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Metric Conversions */}
                      {selectedItem.metricConversions && selectedItem.metricConversions.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📏 Metric Conversions</h3>
                          <div className="msp-metric-conversions-grid">
                            {selectedItem.metricConversions.map((conversion, idx) => (
                              <div key={idx} className="msp-metric-conversion-box">
                                {conversion}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Baking Conversions */}
                      {selectedItem.bakingConversions && selectedItem.bakingConversions.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🍰 Baking Conversions</h3>
                          <div className="msp-baking-conversions-grid">
                            {selectedItem.bakingConversions.map((conversion, idx) => (
                              <div key={idx} className="msp-baking-conversion-box">
                                {conversion}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Formula */}
                      {selectedItem.formula && selectedItem.formula.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🧮 Conversion Formulas</h3>
                          <div className="msp-formula-grid">
                            {selectedItem.formula.map((formula, idx) => (
                              <div key={idx} className="msp-formula-box">
                                {formula}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Common Temperatures */}
                      {selectedItem.commonTemperatures && selectedItem.commonTemperatures.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🌡️ Common Temperatures</h3>
                          <div className="msp-temperatures-grid">
                            {selectedItem.commonTemperatures.map((temp, idx) => (
                              <div key={idx} className="msp-temperature-box">
                                {temp}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Oven Temperatures */}
                      {selectedItem.ovenTemperatures && selectedItem.ovenTemperatures.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🔥 Oven Temperatures</h3>
                          <div className="msp-oven-temperatures-grid">
                            {selectedItem.ovenTemperatures.map((temp, idx) => (
                              <div key={idx} className="msp-oven-temperature-box">
                                {temp}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Volume Conversions */}
                      {selectedItem.volumeConversions && selectedItem.volumeConversions.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📊 Volume Conversions</h3>
                          <div className="msp-volume-conversions-grid">
                            {selectedItem.volumeConversions.map((conversion, idx) => (
                              <div key={idx} className="msp-volume-conversion-box">
                                {conversion}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Weight Conversions */}
                      {selectedItem.weightConversions && selectedItem.weightConversions.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>⚖️ Weight Conversions</h3>
                          <div className="msp-weight-conversions-grid">
                            {selectedItem.weightConversions.map((conversion, idx) => (
                              <div key={idx} className="msp-weight-conversion-box">
                                {conversion}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Oven Conversions */}
                      {selectedItem.ovenConversions && selectedItem.ovenConversions.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🔥 Oven Conversions</h3>
                          <div className="msp-oven-conversions-grid">
                            {selectedItem.ovenConversions.map((conversion, idx) => (
                              <div key={idx} className="msp-oven-conversion-box">
                                {conversion}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Common Substitutions */}
                      {selectedItem.commonSubstitutions && selectedItem.commonSubstitutions.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🔄 Common Substitutions</h3>
                          <div className="msp-substitutions-grid">
                            {selectedItem.commonSubstitutions.map((sub, idx) => (
                              <div key={idx} className="msp-substitution-box">
                                {sub}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Dairy Substitutions */}
                      {selectedItem.dairySubstitutions && selectedItem.dairySubstitutions.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🥛 Dairy Substitutions</h3>
                          <div className="msp-dairy-substitutions-grid">
                            {selectedItem.dairySubstitutions.map((sub, idx) => (
                              <div key={idx} className="msp-dairy-substitution-box">
                                {sub}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Scaling Rules */}
                      {selectedItem.scalingRules && selectedItem.scalingRules.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📈 Recipe Scaling Rules</h3>
                          <div className="msp-scaling-rules-grid">
                            {selectedItem.scalingRules.map((rule, idx) => (
                              <div key={idx} className="msp-scaling-rule-box">
                                {rule}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Common Multipliers */}
                      {selectedItem.commonMultipliers && selectedItem.commonMultipliers.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>✖️ Common Multipliers</h3>
                          <div className="msp-multipliers-grid">
                            {selectedItem.commonMultipliers.map((multiplier, idx) => (
                              <div key={idx} className="msp-multiplier-box">
                                {multiplier}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Exceptions */}
                      {selectedItem.exceptions && selectedItem.exceptions.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>⚠️ Scaling Exceptions</h3>
                          <div className="msp-exceptions-grid">
                            {selectedItem.exceptions.map((exception, idx) => (
                              <div key={idx} className="msp-exception-box">
                                {exception}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Common Pan Sizes */}
                      {selectedItem.commonPanSizes && selectedItem.commonPanSizes.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🥘 Common Pan Sizes</h3>
                          <div className="msp-pan-sizes-grid">
                            {selectedItem.commonPanSizes.map((size, idx) => (
                              <div key={idx} className="msp-pan-size-box">
                                {size}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Area Calculations */}
                      {selectedItem.areaCalculations && selectedItem.areaCalculations.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📐 Area Calculations</h3>
                          <div className="msp-area-calculations-grid">
                            {selectedItem.areaCalculations.map((calc, idx) => (
                              <div key={idx} className="msp-area-calculation-box">
                                {calc}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Adjustment Rules */}
                      {selectedItem.adjustmentRules && selectedItem.adjustmentRules.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>⚙️ Adjustment Rules</h3>
                          <div className="msp-adjustment-rules-grid">
                            {selectedItem.adjustmentRules.map((rule, idx) => (
                              <div key={idx} className="msp-adjustment-rule-box">
                                {rule}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Must-Know Equivalents */}
                      {selectedItem.mustKnowEquivalents && selectedItem.mustKnowEquivalents.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📚 Must-Know Equivalents</h3>
                          <div className="msp-must-know-grid">
                            {selectedItem.mustKnowEquivalents.map((equiv, idx) => (
                              <div key={idx} className="msp-must-know-box">
                                {equiv}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Metric Equivalents */}
                      {selectedItem.metricEquivalents && selectedItem.metricEquivalents.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📏 Metric Equivalents</h3>
                          <div className="msp-metric-equivalents-grid">
                            {selectedItem.metricEquivalents.map((equiv, idx) => (
                              <div key={idx} className="msp-metric-equivalent-box">
                                {equiv}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Handy Equivalents */}
                      {selectedItem.handyEquivalents && selectedItem.handyEquivalents.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>✨ Handy Equivalents</h3>
                          <div className="msp-handy-equivalents-grid">
                            {selectedItem.handyEquivalents.map((equiv, idx) => (
                              <div key={idx} className="msp-handy-equivalent-box">
                                {equiv}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tips */}
                      {selectedItem.tips && (
                        <div className="msp-detail-section">
                          <h3>💡 Pro Tips</h3>
                          <div className="msp-detail-content">
                            <p><strong>Expert advice:</strong> {selectedItem.tips}</p>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* ===== PRECISION CATEGORY ===== */}
                  {selectedCategory === 'precision' && selectedItem && (
                    <>
                      {/* Critical Rules */}
                      {selectedItem.criticalRules && selectedItem.criticalRules.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🎯 Critical Rules</h3>
                          <div className="msp-critical-rules-grid">
                            {selectedItem.criticalRules.map((rule, idx) => (
                              <div key={idx} className="msp-critical-rule-box">
                                {rule}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Common Errors */}
                      {selectedItem.commonErrors && selectedItem.commonErrors.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>❌ Common Errors</h3>
                          <div className="msp-errors-grid">
                            {selectedItem.commonErrors.map((error, idx) => (
                              <div key={idx} className="msp-error-box">
                                {error}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tools Required */}
                      {selectedItem.toolsRequired && selectedItem.toolsRequired.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🔧 Tools Required</h3>
                          <div className="msp-tools-required-grid">
                            {selectedItem.toolsRequired.map((tool, idx) => (
                              <div key={idx} className="msp-tool-required-box">
                                {tool}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Calibration Methods */}
                      {selectedItem.calibrationMethods && selectedItem.calibrationMethods.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>⚖️ Calibration Methods</h3>
                          <div className="msp-calibration-methods-grid">
                            {selectedItem.calibrationMethods.map((method, idx) => (
                              <div key={idx} className="msp-calibration-method-box">
                                {method}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Maintenance Tips */}
                      {selectedItem.maintenanceTips && selectedItem.maintenanceTips.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🔧 Maintenance Tips</h3>
                          <div className="msp-maintenance-tips-grid">
                            {selectedItem.maintenanceTips.map((tip, idx) => (
                              <div key={idx} className="msp-maintenance-tip-box">
                                {tip}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Accuracy Check */}
                      {selectedItem.accuracyCheck && selectedItem.accuracyCheck.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>✅ Accuracy Check</h3>
                          <div className="msp-accuracy-check-grid">
                            {selectedItem.accuracyCheck.map((check, idx) => (
                              <div key={idx} className="msp-accuracy-check-box">
                                {check}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tools for Micro */}
                      {selectedItem.toolsForMicro && selectedItem.toolsForMicro.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🔬 Tools for Micro Measurements</h3>
                          <div className="msp-micro-tools-grid">
                            {selectedItem.toolsForMicro.map((tool, idx) => (
                              <div key={idx} className="msp-micro-tool-box">
                                {tool}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Micro Techniques */}
                      {selectedItem.techniques && selectedItem.techniques.length > 0 && selectedItem.name !== "Temperature Precision" && (
                        <div className="msp-detail-section">
                          <h3>🔍 Micro Measurement Techniques</h3>
                          <div className="msp-micro-techniques-grid">
                            {selectedItem.techniques.map((tech, idx) => (
                              <div key={idx} className="msp-micro-technique-box">
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Critical Amounts */}
                      {selectedItem.criticalAmounts && selectedItem.criticalAmounts.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>⚡ Critical Amounts</h3>
                          <div className="msp-critical-amounts-grid">
                            {selectedItem.criticalAmounts.map((amount, idx) => (
                              <div key={idx} className="msp-critical-amount-box">
                                {amount}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Portioning Tools */}
                      {selectedItem.portioningTools && selectedItem.portioningTools.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🍽️ Portioning Tools</h3>
                          <div className="msp-portioning-tools-grid">
                            {selectedItem.portioningTools.map((tool, idx) => (
                              <div key={idx} className="msp-portioning-tool-box">
                                {tool}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Portioning Techniques */}
                      {selectedItem.techniques && selectedItem.techniques.length > 0 && selectedItem.name === "Consistent Portioning" && (
                        <div className="msp-detail-section">
                          <h3>👐 Portioning Techniques</h3>
                          <div className="msp-portioning-techniques-grid">
                            {selectedItem.techniques.map((tech, idx) => (
                              <div key={idx} className="msp-portioning-technique-box">
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Benefits */}
                      {selectedItem.benefits && selectedItem.benefits.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>✅ Benefits</h3>
                          <div className="msp-benefits-grid">
                            {selectedItem.benefits.map((benefit, idx) => (
                              <div key={idx} className="msp-benefit-box">
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Critical Temperatures */}
                      {selectedItem.criticalTemperatures && selectedItem.criticalTemperatures.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🌡️ Critical Temperatures</h3>
                          <div className="msp-critical-temperatures-grid">
                            {selectedItem.criticalTemperatures.map((temp, idx) => (
                              <div key={idx} className="msp-critical-temperature-box">
                                {temp}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Temperature Tools */}
                      {selectedItem.tools && selectedItem.tools.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🔧 Temperature Tools</h3>
                          <div className="msp-temperature-tools-grid">
                            {selectedItem.tools.map((tool, idx) => (
                              <div key={idx} className="msp-temperature-tool-box">
                                {tool}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Temperature Techniques */}
                      {selectedItem.techniques && selectedItem.techniques.length > 0 && selectedItem.name === "Temperature Precision" && (
                        <div className="msp-detail-section">
                          <h3>📊 Temperature Techniques</h3>
                          <div className="msp-temperature-techniques-grid">
                            {selectedItem.techniques.map((tech, idx) => (
                              <div key={idx} className="msp-temperature-technique-box">
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Common Ratios */}
                      {selectedItem.commonRatios && selectedItem.commonRatios.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📐 Common Ratios</h3>
                          <div className="msp-ratios-grid">
                            {selectedItem.commonRatios.map((ratio, idx) => (
                              <div key={idx} className="msp-ratio-box">
                                {ratio}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Calculation */}
                      {selectedItem.calculation && selectedItem.calculation.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🧮 Calculation Methods</h3>
                          <div className="msp-calculation-grid">
                            {selectedItem.calculation.map((calc, idx) => (
                              <div key={idx} className="msp-calculation-box">
                                {calc}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Effects */}
                      {selectedItem.effects && selectedItem.effects.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📊 Effects</h3>
                          <div className="msp-effects-grid">
                            {selectedItem.effects.map((effect, idx) => (
                              <div key={idx} className="msp-effect-box">
                                {effect}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Basic Ratios */}
                      {selectedItem.basicRatios && selectedItem.basicRatios.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📏 Basic Ratios</h3>
                          <div className="msp-basic-ratios-grid">
                            {selectedItem.basicRatios.map((ratio, idx) => (
                              <div key={idx} className="msp-basic-ratio-box">
                                {ratio}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Application */}
                      {selectedItem.application && selectedItem.application.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>🎯 Application</h3>
                          <div className="msp-application-methods-grid">
                            {selectedItem.application.map((method, idx) => (
                              <div key={idx} className="msp-application-method-box">
                                {method}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Documentation Methods */}
                      {selectedItem.documentationMethods && selectedItem.documentationMethods.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📝 Documentation Methods</h3>
                          <div className="msp-documentation-methods-grid">
                            {selectedItem.documentationMethods.map((method, idx) => (
                              <div key={idx} className="msp-documentation-method-box">
                                {method}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* What to Record */}
                      {selectedItem.whatToRecord && selectedItem.whatToRecord.length > 0 && (
                        <div className="msp-detail-section">
                          <h3>📋 What to Record</h3>
                          <div className="msp-what-to-record-grid">
                            {selectedItem.whatToRecord.map((item, idx) => (
                              <div key={idx} className="msp-record-item-box">
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tips */}
                      {selectedItem.tips && (
                        <div className="msp-detail-section">
                          <h3>💡 Pro Tips</h3>
                          <div className="msp-detail-content">
                            <p><strong>Expert advice:</strong> {selectedItem.tips}</p>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* RIGHT SIDE - FIXED IMAGE (35%) - NO SCROLL */}
              <div className="msp-modal-right">
                <div className="msp-main-image-container">
                  <div 
                    className="msp-main-image"
                    style={{ backgroundImage: `url(${selectedItem.image})` }}
                  >
                    {selectedItem.essentiality && (
                      <div className="msp-image-overlay">
                        <div className={`msp-essentiality-badge-large ${selectedItem.essentiality.toLowerCase()}`}>
                          {selectedItem.essentiality}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Back to Home Button */}
 <div className="back-home-container">
         <button 
  className="back-home-btn"
  onClick={() => {
    try {
      navigate('/guidance');
    } catch (error) {
      window.location.href = '/guidance';
    }
  }}
>
  ← Back to Guidance Page
</button>
      </div>
    </div>
  );
};

export default MeasuringSkillsPage;