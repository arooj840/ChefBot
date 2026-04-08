import React, { useState } from 'react';
import './BakeryEssentialsPage.css';
import { useNavigate } from 'react-router-dom';
const BakeryEssentialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('tools');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const navigate = useNavigate();

  // FUNCTIONS
  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setShowDetailPanel(true);
  };

  const closeDetailPanel = () => {
    setShowDetailPanel(false);
    setSelectedItem(null);
  };

  // SECTION 1: BAKERY TOOLS & EQUIPMENT
  const toolsData = [
    {
      id: 1,
      name: "Stand Mixer",
      image: "StandMixer.png",
      tagline: "The workhorse of any bakery",
      fullDesc: "Essential for mixing doughs, batters, and creams. A powerful stand mixer with various attachments (dough hook, paddle, whisk) saves time and ensures consistent results in baking.",
      keyFeatures: ["Multiple speed settings", "Various attachments", "Powerful motor", "Tilt-head design", "Timer function"],
      properUsage: "Start on low speed, gradually increase, scrape bowl regularly, don't overload",
      commonMistakes: ["Overmixing dough", "Using wrong attachment", "Overloading capacity", "Not scraping bowl"],
      types: [
        {
          name: "Professional Series",
          image: "https://images.unsplash.com/photo-1581235720854-7431a2d6d7b2?auto=format&fit=crop&w=300",
          description: "Heavy-duty, commercial grade",
          capacity: "5-7 quart",
          power: "1000W+",
          bestFor: "Frequent baking, bread dough, large batches"
        },
        {
          name: "Home Series",
          image: "https://images.unsplash.com/photo-1581235720854-7431a2d6d7b2?auto=format&fit=crop&w=300",
          description: "Compact, affordable",
          capacity: "4-5 quart",
          power: "500-800W",
          bestFor: "Occasional bakers, cakes, cookies"
        }
      ]
    },
    {
      id: 2,
      name: "Digital Kitchen Scale",
      image: "KitchenScales.png",
      tagline: "Precision measurement for perfect baking",
      fullDesc: "Crucial for accurate baking where measurements must be precise. Digital scales provide exact weights in grams or ounces, essential for consistent results.",
      keyFeatures: ["1g precision", "Tare function", "Multiple units", "Auto-off", "Large display"],
      properUsage: "Place bowl, press tare, add ingredient, read weight",
      commonMistakes: ["Not using tare function", "Uneven surface", "Ignoring battery level"],
     
      types: [
        {
          name: "Precision Scale",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "High accuracy, 0.1g precision",
          capacity: "3-5kg",
          features: "0.1g increments",
          bestFor: "Baking, coffee, spices"
        },
        {
          name: "Heavy Duty Scale",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Large capacity",
          capacity: "10-15kg",
          features: "1g increments",
          bestFor: "Bread making, large batches"
        }
      ]
    },
    {
      id: 3,
      name: "Oven Thermometer",
      image: "OvenThermometer.png",
      tagline: "Accurate oven temperature reading",
      fullDesc: "Most ovens have inaccurate temperature displays. An oven thermometer ensures you're baking at the right temperature for perfect results every time.",
      keyFeatures: ["Easy to read", "Heat resistant", "Hangs from rack", "Wide range"],
      properUsage: "Hang in center of oven, preheat, check temperature",
      commonMistakes: ["Placing near door", "Not preheating fully", "Ignoring hot spots"],
    
      types: [
        {
          name: "Analog Oven Thermometer",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Traditional dial type",
          range: "50-300°C",
          features: "No battery needed",
          bestFor: "General baking"
        },
        {
          name: "Digital Oven Thermometer",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Digital display, probe",
          range: "-50 to 300°C",
          features: "Remote display",
          bestFor: "Precise temperature control"
        }
      ]
    },
    {
      id: 4,
      name: "Silicone Baking Mats",
      image: "SiliconBakingMats.png",
      tagline: "Non-stick, reusable baking surface",
      fullDesc: "Replace parchment paper with these reusable mats. Provide even baking, prevent sticking, and are easy to clean.",
      keyFeatures: ["Non-stick surface", "Heat resistant", "Easy to clean", "Reusable"],
      properUsage: "Place on baking sheet, bake, cool, wipe clean",
      commonMistakes: ["Cutting on mat", "Using sharp utensils", "High heat beyond limit"],
    
      types: [
        {
          name: "Half Sheet Size",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Fits standard baking sheet",
          size: "16.5 x 11.5 inches",
          features: "Measurement markings",
          bestFor: "Cookies, pastries"
        },
        {
          name: "Quarter Sheet Size",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Smaller size",
          size: "9.5 x 13 inches",
          features: "Fits toaster ovens",
          bestFor: "Small batches, toaster ovens"
        }
      ]
    },
    {
      id: 5,
      name: "Bench Scraper",
      image: "BenchScrappers.png",
      tagline: "Multi-purpose dough tool",
      fullDesc: "Essential for working with dough. Used for cutting, scraping, cleaning surfaces, and portioning dough.",
      keyFeatures: ["Stainless steel blade", "Easy grip handle", "Measurement markings", "Durable"],
      properUsage: "Cut dough, scrape surfaces, portion, clean counters",
      commonMistakes: ["Using as hammer", "Cutting frozen items", "Not cleaning properly"],

      types: [
        {
          name: "Stainless Steel Scraper",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "All metal construction",
          size: "6 x 4 inches",
          features: "Ruler markings",
          bestFor: "Bread dough, heavy use"
        },
        {
          name: "Plastic Bench Scraper",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Flexible, gentle",
          size: "6 x 4 inches",
          features: "Flexible blade",
          bestFor: "Delicate pastries, scraping bowls"
        }
      ]
    },
    {
      id: 6,
      name: "Pastry Blender",
      image: "PastryBlenders.png",
      tagline: "Perfect for cutting fat into flour",
      fullDesc: "Essential tool for making pie crusts, biscuits, and scones. Cuts cold butter into flour without melting it.",
      keyFeatures: ["Multiple blades", "Comfortable handle", "Easy to clean", "Durable"],
      properUsage: "Press into flour-butter mixture, use rocking motion",
      commonMistakes: ["Overworking dough", "Using warm butter", "Washing in dishwasher"],
     
      types: [
        {
          name: "Wire Pastry Blender",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Traditional wire design",
          blades: "5-7 wires",
          features: "Efficient cutting",
          bestFor: "Pie crusts, biscuits"
        },
        {
          name: "Solid Blade Blender",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Solid metal blades",
          blades: "4-5 solid blades",
          features: "More durable",
          bestFor: "Heavy use, professional"
        }
      ]
    },
    {
      id: 7,
      name: "Cake Turntable",
      image: "CakeTurnTable.png",
      tagline: "Essential for cake decorating",
      fullDesc: "Rotating platform that makes cake decorating much easier. Allows smooth frosting application and even decorating.",
      keyFeatures: ["Smooth rotation", "Non-slip surface", "Adjustable height", "Sturdy base"],
      properUsage: "Place cake on turntable, rotate while frosting",
      commonMistakes: ["Overloading weight", "Not cleaning properly", "Forcing rotation"],
    
      types: [
        {
          name: "Plastic Turntable",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Lightweight, affordable",
          diameter: "10-12 inches",
          features: "Non-slip surface",
          bestFor: "Home bakers, occasional use"
        },
        {
          name: "Metal Turntable",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Heavy-duty, professional",
          diameter: "12-16 inches",
          features: "Ball bearing rotation",
          bestFor: "Professional decorators"
        }
      ]
    },
    {
      id: 8,
      name: "Dough Proofing Baskets",
      image: "DoughBaskets.png",
      tagline: "For perfect bread shaping and proofing",
      fullDesc: "Also called bannetons. Used for the final proof of bread dough, giving it shape and beautiful patterns.",
      keyFeatures: ["Natural materials", "Creates patterns", "Allows air circulation", "Traditional"],
      properUsage: "Flour heavily, place shaped dough, cover, proof",
      commonMistakes: ["Not enough flour", "Washing with soap", "Storing wet"],
    
      types: [
        {
          name: "Rattan Banneton",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Traditional rattan",
          shape: "Round or oval",
          features: "Beautiful spiral pattern",
          bestFor: "Artisan breads"
        },
        {
          name: "Plastic Proofing Basket",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300",
          description: "Modern, easy clean",
          shape: "Various shapes",
          features: "Easy to clean",
          bestFor: "High hydration doughs"
        }
      ]
    }
  ];

  // SECTION 2: BAKING TECHNIQUES
  const techniquesData = [
    {
      id: 1,
      name: "Creaming Method",
      image: "CreamingMethod.png",
      tagline: "Foundation of cake making",
      fullDesc: "Beating butter and sugar together to incorporate air, creating light and fluffy baked goods. Essential for cakes, cookies, and some breads.",
      steps: [
        "Bring butter to room temperature",
        "Beat butter until creamy",
        "Gradually add sugar, beat until light and fluffy",
        "Add eggs one at a time",
        "Alternate dry and wet ingredients"
      ],
      tips: "Butter should be soft but not melted, scrape bowl regularly",
      commonMistakes: ["Butter too cold/hot", "Not creaming long enough", "Adding all sugar at once"],
      applications: "Cakes, cookies, cupcakes, some breads"
    },
    {
      id: 2,
      name: "Folding Technique",
      image: "FoldingTechnique.png",
      tagline: "Gentle mixing for delicate batters",
      fullDesc: "Gentle mixing method used to combine light, airy ingredients with heavier mixtures without deflating the air bubbles.",
      steps: [
        "Add lighter mixture to heavier mixture",
        "Cut through center with spatula",
        "Scoop from bottom, fold over top",
        "Rotate bowl slightly",
        "Repeat until just combined"
      ],
      tips: "Use large spatula, work quickly but gently, stop when streaks disappear",
      commonMistakes: ["Stirring instead of folding", "Overmixing", "Using wrong tool"],
      applications: "Meringues, whipped cream, soufflés, chiffon cakes"
    },
    {
      id: 3,
      name: "Kneading Dough",
      image: "KneadingDough.png",
      tagline: "Developing gluten structure",
      fullDesc: "Working dough to develop gluten, which gives bread its structure and chewiness. Can be done by hand or with a mixer.",
      steps: [
        "Combine ingredients until shaggy mass",
        "Turn out onto floured surface",
        "Push with heel of hand",
        "Fold dough over",
        "Rotate and repeat"
      ],
      tips: "Windowpane test indicates proper gluten development",
      commonMistakes: ["Adding too much flour", "Under/over kneading", "Wrong surface"],
      applications: "Bread dough, pizza dough, some pastries"
    },
    {
      id: 4,
      name: "Blind Baking",
      image: "BlindBaking.png",
      tagline: "Pre-baking pie crusts",
      fullDesc: "Baking a pie crust before adding filling to prevent sogginess. Essential for custard pies and quiches.",
      steps: [
        "Roll out dough, place in pan",
        "Chill for 30 minutes",
        "Line with parchment, fill with weights",
        "Bake at 375°F for 15 minutes",
        "Remove weights, bake until golden"
      ],
      tips: "Use pie weights or dried beans, prick bottom with fork",
      commonMistakes: ["Not chilling dough", "Skipping weights", "Overbaking"],
      applications: "Custard pies, quiches, tart shells"
    },
    {
      id: 5,
      name: "Tempering Chocolate",
      image: "TempChocolate.png",
      tagline: "Perfect shiny chocolate",
      fullDesc: "Process of melting and cooling chocolate to specific temperatures to stabilize cocoa butter crystals, resulting in shiny, snap-able chocolate.",
      steps: [
        "Chop chocolate finely",
        "Melt 2/3 to 115°F (46°C)",
        "Add remaining 1/3 unmelted chocolate",
        "Stir until cooled to 82°F (28°C)",
        "Rewarm to 88-90°F (31-32°C)"
      ],
      tips: "Use chocolate thermometer, work in cool room",
      commonMistakes: ["Getting water in chocolate", "Wrong temperatures", "Rushing"],
      applications: "Chocolate decorations, dipping, molding"
    },
    {
      id: 6,
      name: "Sugar Stages",
      image: "SugarStages.png",
      tagline: "Cooking sugar to perfect consistency",
      fullDesc: "Heating sugar syrup to specific temperatures creates different textures for various confections.",
      stages: [
        "Thread Stage: 230-235°F (110-113°C)",
        "Soft Ball: 235-240°F (113-116°C)",
        "Firm Ball: 245-250°F (118-121°C)",
        "Hard Ball: 250-265°F (121-129°C)",
        "Soft Crack: 270-290°F (132-143°C)",
        "Hard Crack: 300-310°F (149-154°C)",
        "Caramel: 320-350°F (160-177°C)"
      ],
      tips: "Use clean saucepan, brush sides with water, don't stir",
      commonMistakes: ["Crystallization", "Wrong temperature", "Burnt sugar"],
      applications: "Candy making, caramel, frosting"
    },
    {
      id: 7,
      name: "Lamination",
      image: "Lamination.png",
      tagline: "Creating flaky pastry layers",
      fullDesc: "Technique of folding butter into dough multiple times to create hundreds of thin layers that puff up during baking.",
      steps: [
        "Make détrempe (dough base)",
        "Create butter block",
        "Encase butter in dough",
        "Roll out, fold in thirds",
        "Chill, repeat folds"
      ],
      tips: "Keep everything cold, consistent thickness, proper resting",
      commonMistakes: ["Butter too soft", "Not chilling enough", "Rushing process"],
      applications: "Croissants, puff pastry, Danish"
    },
    {
      id: 8,
      name: "Egg Wash Application",
      image: "EggWash.png",
      tagline: "Golden, shiny baked goods",
      fullDesc: "Brushing dough with egg wash before baking creates beautiful golden color and shiny finish.",
      methods: [
        "Whole egg + water: All-purpose shine",
        "Egg yolk + cream: Deep golden color",
        "Egg white: Very shiny finish",
        "Milk or cream: Subtle browning"
      ],
      tips: "Brush gently, avoid pooling, apply just before baking",
      commonMistakes: ["Too thick application", "Brushing off rise", "Wrong type for item"],
      applications: "Bread, pastries, pie crusts"
    }
  ];

  // SECTION 3: INGREDIENTS GUIDE
  const ingredientsData = [
    {
      id: 1,
      name: "Flour Types",
      image: "FlourTypes.png",
      tagline: "Choosing the right flour",
      fullDesc: "Different flours have different protein contents and gluten-forming abilities, making them suitable for specific baked goods.",
      types: [
        {
          name: "All-Purpose Flour",
          protein: "10-12%",
          uses: "Cakes, cookies, quick breads",
          description: "Most versatile, medium protein"
        },
        {
          name: "Bread Flour",
          protein: "12-14%",
          uses: "Yeast breads, pizza dough",
          description: "High protein, strong gluten"
        },
        {
          name: "Cake Flour",
          protein: "7-9%",
          uses: "Delicate cakes, pastries",
          description: "Low protein, fine texture"
        },
        {
          name: "Pastry Flour",
          protein: "9-10%",
          uses: "Pie crusts, biscuits",
          description: "Between AP and cake flour"
        }
      ],
      storage: "Store in airtight container in cool, dry place",
      substitution: "1 cup AP flour = 1 cup + 2 tbsp cake flour (remove 2 tbsp per cup)"
    },
    {
      id: 2,
      name: "Leavening Agents",
      image: "LeaveningAgents.png",
      tagline: "Making baked goods rise",
      fullDesc: "Chemical agents that produce gas bubbles in batter or dough, causing it to expand and become light and porous.",
      agents: [
        {
          name: "Baking Soda",
          activation: "Acid + liquid",
          ratio: "1/4 tsp per cup of flour",
          uses: "Quick breads, cookies"
        },
        {
          name: "Baking Powder",
          activation: "Heat + moisture",
          ratio: "1 tsp per cup of flour",
          uses: "Cakes, muffins, biscuits"
        },
        {
          name: "Yeast",
          activation: "Sugar + warmth + time",
          ratio: "2 1/4 tsp per 4 cups flour",
          uses: "Breads, rolls, pastries"
        }
      ],
      tips: "Check expiration dates, measure accurately, don't overmix",
      commonMistakes: ["Using expired agents", "Wrong measurement", "Wrong activation"]
    },
    {
      id: 3,
      name: "Fats in Baking",
      image: "Fats.png",
      tagline: "Flavor, texture, and tenderness",
      fullDesc: "Fats contribute to flavor, tenderness, moisture, and structure in baked goods. Different fats have different properties.",
      fats: [
        {
          name: "Butter",
          flavor: "Rich, creamy",
          texture: "Flaky, tender",
          uses: "Pastries, cakes, cookies"
        },
        {
          name: "Shortening",
          flavor: "Neutral",
          texture: "Very flaky",
          uses: "Pie crusts, biscuits"
        },
        {
          name: "Oil",
          flavor: "Neutral",
          texture: "Moist, dense",
          uses: "Quick breads, cakes"
        },
        {
          name: "Lard",
          flavor: "Slightly savory",
          texture: "Extremely flaky",
          uses: "Pie crusts, pastries"
        }
      ],
      tips: "Temperature matters, don't substitute randomly",
      storage: "Butter: refrigerated, Shortening: room temp"
    },
    {
      id: 4,
      name: "Sweeteners",
      image: "Sweetners.png",
      tagline: "More than just sweetness",
      fullDesc: "Sweeteners provide sweetness, moisture, browning, and structure in baking. Each has unique properties.",
      sweeteners: [
        {
          name: "Granulated Sugar",
          properties: "Standard sweetener",
          effects: "Browning, tenderness",
          substitutes: "None directly"
        },
        {
          name: "Brown Sugar",
          properties: "Molasses content",
          effects: "Moisture, flavor",
          substitutes: "White sugar + molasses"
        },
        {
          name: "Honey",
          properties: "Liquid, hygroscopic",
          effects: "Moisture, browning",
          substitutes: "Reduce liquid by 1/4 cup"
        },
        {
          name: "Maple Syrup",
          properties: "Liquid, distinct flavor",
          effects: "Moisture, flavor",
          substitutes: "Honey or corn syrup"
        }
      ],
      conversion: "1 cup sugar = 3/4 cup honey (reduce liquid)",
      storage: "Keep dry sweeteners airtight, liquid at room temp"
    },
    {
      id: 5,
      name: "Egg Functions",
      image: "EggFunction.png",
      tagline: "The multi-purpose ingredient",
      fullDesc: "Eggs serve multiple functions in baking: structure, leavening, emulsification, flavor, and color.",
      functions: [
        "Structure: Proteins coagulate during baking",
        "Leavening: Traps air when beaten",
        "Emulsification: Binds fat and water",
        "Flavor: Rich taste",
        "Color: Golden brown when baked",
        "Moisture: Adds liquid content"
      ],
      sizes: [
        "Small: 43g (about 1.5 oz)",
        "Medium: 50g (about 1.75 oz)",
        "Large: 57g (about 2 oz)",
        "Extra Large: 64g (about 2.25 oz)",
        "Jumbo: 71g (about 2.5 oz)"
      ],
      tips: "Room temperature eggs incorporate better",
      substitutes: "1 egg = 1/4 cup applesauce, yogurt, or mashed banana"
    },
    {
      id: 6,
      name: "Dairy Products",
      image: "DairyProducts.png",
      tagline: "Moisture, flavor, and richness",
      fullDesc: "Dairy adds moisture, fat, protein, and flavor to baked goods. Different products have different fat contents and consistencies.",
      dairy: [
        {
          name: "Milk",
          fat: "0-3.5%",
          uses: "General baking, breads",
          substitutes: "Water + butter, plant milks"
        },
        {
          name: "Buttermilk",
          fat: "1-2%",
          uses: "Tangy flavor, tenderizing",
          substitutes: "Milk + acid (vinegar/lemon)"
        },
        {
          name: "Cream",
          fat: "18-36%",
          uses: "Richness, whipping",
          substitutes: "Milk + butter (for baking)"
        },
        {
          name: "Yogurt",
          fat: "0-10%",
          uses: "Moisture, tanginess",
          substitutes: "Sour cream, buttermilk"
        }
      ],
      tips: "Use full-fat for richest results",
      storage: "Refrigerate, check expiration dates"
    },
    {
      id: 7,
      name: "Chocolate Types",
      image: "ChocolateTypes.png",
      tagline: "From cocoa beans to baked goods",
      fullDesc: "Different percentages and types of chocolate are used for different purposes in baking.",
      chocolates: [
        {
          name: "Unsweetened",
          cocoa: "100%",
          sugar: "0%",
          uses: "Baking, need added sugar"
        },
        {
          name: "Bittersweet",
          cocoa: "70-85%",
          sugar: "15-30%",
          uses: "Professional baking"
        },
        {
          name: "Semisweet",
          cocoa: "50-69%",
          sugar: "31-50%",
          uses: "Chips, general baking"
        },
        {
          name: "Milk Chocolate",
          cocoa: "10-40%",
          sugar: "60-90%",
          uses: "Eating, some baking"
        },
        {
          name: "White Chocolate",
          cocoa: "0% (cocoa butter)",
          sugar: "Varies",
          uses: "Decorating, some baking"
        }
      ],
      melting: "Low heat, dry environment",
      storage: "Cool, dry place away from odors"
    },
    {
      id: 8,
      name: "Flavorings & Extracts",
      image: "Flavouring.png",
      tagline: "Adding personality to baked goods",
      fullDesc: "Concentrated flavors that add character without adding significant liquid to recipes.",
      flavorings: [
        {
          name: "Vanilla Extract",
          strength: "Very strong",
          usage: "1-2 tsp per recipe",
          notes: "Most common, enhances other flavors"
        },
        {
          name: "Almond Extract",
          strength: "Extremely strong",
          usage: "1/4-1/2 tsp per recipe",
          notes: "Use sparingly, potent flavor"
        },
        {
          name: "Lemon Extract",
          strength: "Strong",
          usage: "1/2-1 tsp per recipe",
          notes: "Bright, citrus flavor"
        },
        {
          name: "Other Extracts",
          strength: "Varies",
          usage: "Follow recipe",
          notes: "Mint, orange, coconut, etc."
        }
      ],
      tips: "Add at end of mixing, use pure not imitation",
      storage: "Dark cupboard, away from heat"
    }
  ];

  // SECTION 4: TEMPERATURE CONTROL - FIXED with all properties
  const temperatureData = [
    {
      id: 1,
      name: "Oven Temperatures",
      image: "OvenTemp.png",
      tagline: "Perfect baking temperatures",
      fullDesc: "Different baked goods require specific oven temperatures for optimal results.",
      temperatures: [
        "Very Slow: 250-275°F (120-135°C) - Drying, meringues",
        "Slow: 300°F (150°C) - Rich fruit cakes",
        "Moderately Slow: 325°F (165°C) - Cakes, cookies",
        "Moderate: 350°F (175°C) - Most baking",
        "Moderately Hot: 375-400°F (190-205°C) - Pastries, pies",
        "Hot: 425-450°F (220-230°C) - Bread, puff pastry",
        "Very Hot: 475-500°F (245-260°C) - Pizza, artisan bread"
      ],
      tips: "Always preheat, use oven thermometer, know your oven's hot spots",
      conversion: "°C = (°F - 32) × 5/9"
    },
    {
      id: 2,
      name: "Ingredient Temperatures",
      image: "IngredientsTemp.png",
      tagline: "The importance of temperature",
      fullDesc: "Temperature of ingredients significantly affects baking results, especially in yeast doughs and butter-based recipes.",
      ingredients: [
        {
          name: "Butter",
          temp: "Room temp (65-70°F/18-21°C)",
          reason: "Creams properly with sugar"
        },
        {
          name: "Eggs",
          temp: "Room temp",
          reason: "Better emulsion, more volume"
        },
        {
          name: "Milk/Water for Yeast",
          temp: "105-115°F (40-46°C)",
          reason: "Activates yeast without killing"
        },
        {
          name: "Heavy Cream",
          temp: "Very cold",
          reason: "Whips to better volume"
        }
      ],
      warming: "To warm eggs: place in warm water 5-10 min",
      cooling: "To cool butter: cut, freeze 10-15 min"
    },
    {
      id: 3,
      name: "Proofing Temperatures",
      image: "ProofingTemp.png",
      tagline: "Perfect dough rising conditions",
      fullDesc: "Yeast activity is temperature dependent. Different temperatures create different fermentation characteristics.",
      proofingStages: [
        "Bulk Fermentation: 75-78°F (24-26°C)",
        "First Proof: 75-80°F (24-27°C)",
        "Final Proof: 80-85°F (27-29°C)",
        "Retardation (slow): 35-50°F (2-10°C)"
      ],
      methods: [
        "Oven with light on: Creates 80-90°F warmth",
        "Microwave with hot water: Creates humid environment",
        "Proofing box: Controlled temperature",
        "Room temperature: 68-72°F ideal"
      ],
      signs: "Doubled in size, finger indentation remains",
      overproofing: "Collapses when touched, sour smell"
    },
    {
      id: 4,
      name: "Sugar Temperature Stages",
      image: "SugarTemp.png",
      tagline: "Candy making precision",
      fullDesc: "Sugar syrup reaches different consistencies at specific temperatures, used for various confections.",
      stages: [
        "Thread: 230-235°F (110-113°C) - Syrups",
        "Soft Ball: 235-240°F (113-116°C) - Fudge",
        "Firm Ball: 245-250°F (118-121°C) - Caramels",
        "Hard Ball: 250-265°F (121-129°C) - Nougat",
        "Soft Crack: 270-290°F (132-143°C) - Taffy",
        "Hard Crack: 300-310°F (149-154°C) - Lollipops",
        "Caramel: 320-350°F (160-177°C) - Caramel sauce"
      ],
      testing: "Cold water test: Drop syrup in ice water",
      equipment: "Candy thermometer, heavy saucepan"
    },
    {
      id: 5,
      name: "Chocolate Tempering",
      image: "ChocolateTemp.png",
      tagline: "Perfect tempering temperatures",
      fullDesc: "Tempering chocolate involves precise temperature control to create stable cocoa butter crystals.",
      temperatures: [
        "Dark Chocolate: Melt to 115-120°F (46-49°C), cool to 80-82°F (27-28°C), reheat to 88-90°F (31-32°C)",
        "Milk Chocolate: Melt to 110-115°F (43-46°C), cool to 80-82°F (27-28°C), reheat to 86-88°F (30-31°C)",
        "White Chocolate: Melt to 110°F (43°C), cool to 79-81°F (26-27°C), reheat to 84-86°F (29-30°C)"
      ],
      methods: [
        "Seeding: Add chopped chocolate to melted",
        "Tabling: Spread on marble, work back and forth",
        "Microwave: Short bursts, frequent stirring"
      ],
      signs: "Shiny appearance, crisp snap",
      storage: "Tempered chocolate sets quickly at room temp"
    },
    {
      id: 6,
      name: "Cooling & Setting",
      image: "CoolingStages.png",
      tagline: "Post-baking temperature control",
      fullDesc: "Proper cooling prevents sogginess, cracking, and ensures proper texture development.",
      items: [
        {
          name: "Breads",
          cooling: "Wire rack completely",
          time: "1-2 hours minimum",
          notes: "Listen for crackling crust"
        },
        {
          name: "Cakes",
          cooling: "10 min in pan, then rack",
          time: "Completely cool before frosting",
          notes: "Prevents condensation"
        },
        {
          name: "Cookies",
          cooling: "2 min on sheet, then rack",
          time: "Completely cool before storing",
          notes: "Continues baking on hot sheet"
        },
        {
          name: "Pastries",
          cooling: "Wire rack, elevated",
          time: "Until room temperature",
          notes: "Prevents soggy bottoms"
        }
      ],
      rushing: "Don't refrigerate warm baked goods",
      freezing: "Only freeze completely cooled items"
    },
    {
      id: 7,
      name: "Storage Temperatures",
      image: "StorageTemp.png",
      tagline: "Keeping baked goods fresh",
      fullDesc: "Different baked goods require different storage conditions to maintain freshness and prevent spoilage.",
      storage: [
        {
          name: "Bread",
          temp: "Room temperature",
          container: "Paper bag or bread box",
          duration: "2-3 days"
        },
        {
          name: "Cakes with Frosting",
          temp: "Room temperature",
          container: "Cake carrier",
          duration: "2-3 days"
        },
        {
          name: "Pastries with Custard",
          temp: "Refrigerated",
          container: "Airtight container",
          duration: "1-2 days"
        },
        {
          name: "Cookies",
          temp: "Room temperature",
          container: "Airtight with parchment",
          duration: "1 week"
        }
      ],
      freezing: "Wrap well, label with date",
      thawing: "Room temperature, don't microwave"
    },
    {
      id: 8,
      name: "Temperature Troubleshooting",
      image: "TempTrouble.png",
      tagline: "Fixing temperature-related issues",
      fullDesc: "Common baking problems often relate to temperature control issues.",
      problems: [
        "Dense cake: Butter too cold, oven too cool",
        "Tough cookies: Overmixed, butter too warm",
        "Bread didn't rise: Yeast killed by hot liquid",
        "Soggy bottom: Not cooled on rack",
        "Burnt edges: Oven too hot, wrong rack position",
        "Pale baked goods: Oven too cool, not preheated",
        "Cracked cheesecake: Too rapid temperature change",
        "Flat cookies: Butter too warm, dough not chilled"
      ],
      solutions: [
        "Use oven thermometer",
        "Bring ingredients to proper temp",
        "Preheat adequately",
        "Check oven calibration",
        "Use correct rack position",
        "Allow proper cooling time",
        "Chill dough when specified",
        "Avoid temperature shocks"
      ],
      equipment: "Oven thermometer, instant-read thermometer"
    }
  ];

  // SECTION 5: DECORATING TOOLS - FIXED with all properties
  const decoratingData = [
    {
      id: 1,
      name: "Piping Bags & Tips",
      image: "PipingBags.png",
      tagline: "Essential for cake decorating",
      fullDesc: "Tools for applying frosting, cream, and other decorations in controlled patterns and shapes.",
      types: [
        {
          name: "Disposable Bags",
          material: "Plastic",
          sizes: "12, 16, 18 inch",
          bestFor: "Buttercream, royal icing"
        },
        {
          name: "Reusable Bags",
          material: "Silicone/nylon",
          sizes: "Various",
          bestFor: "Frequent use, professionals"
        },
        {
          name: "Couplers",
          material: "Plastic",
          function: "Tip changing",
          bestFor: "Multiple designs"
        }
      ],
      tipTypes: [
        "Round tips: Writing, dots, outlines",
        "Star tips: Stars, shells, borders",
        "Leaf tips: Leaves, ruffles",
        "Petal tips: Flowers, ribbons",
        "Specialty tips: Basketweave, grass"
      ],
      cleaning: "Disposable: discard, Reusable: wash immediately"
    },
    {
      id: 2,
      name: "Offset Spatulas",
      image: "OffSetSpatulas.png",
      tagline: "Smooth frosting application",
      fullDesc: "Angled blades for easy frosting application and smoothing, especially on cake sides.",
      sizes: [
        {
          name: "Small",
          length: "4-5 inches",
          uses: "Detail work, filling cupcakes"
        },
        {
          name: "Medium",
          length: "6-7 inches",
          uses: "Standard cake decorating"
        },
        {
          name: "Large",
          length: "9-10 inches",
          uses: "Large cakes, crumb coating"
        },
        {
          name: "Mini",
          length: "2-3 inches",
          uses: "Tiny details, repair work"
        }
      ],
      materials: ["Stainless steel", "Flexible tip", "Comfortable handle"],
      techniques: [
        "Crumb coat: Thin layer to trap crumbs",
        "Final coat: Smooth, even application",
        "Swirls: Create textured patterns",
        "Smooth: Perfectly flat finish"
      ]
    },
    {
      id: 3,
      name: "Cake Combs",
      image: "CakeCombs.png",
      tagline: "Creating textured finishes",
      fullDesc: "Tools with various patterned edges for creating decorative textures on cake frosting.",
      patterns: [
        "Straight lines: Classic, clean look",
        "Scalloped: Wavy, elegant pattern",
        "Ridged: Multiple parallel lines",
        "Square: Geometric pattern",
        "Combination: Multiple patterns on one tool"
      ],
      materials: [
        "Plastic: Affordable, various patterns",
        "Metal: Durable, precise edges",
        "Acrylic: Clear, see-through"
      ],
      usage: [
        "Apply thick layer of frosting",
        "Chill briefly to set",
        "Hold comb at angle",
        "Rotate turntable while applying pressure",
        "Clean comb between passes"
      ],
      tips: "Keep frosting cool but spreadable"
    },
    {
      id: 4,
      name: "Fondant Tools",
      image: "FondantTools.png",
      tagline: "Working with sugar paste",
      fullDesc: "Specialized tools for rolling, cutting, shaping, and detailing fondant decorations.",
      tools: [
        {
          name: "Rolling Pin",
          type: "Non-stick, smooth",
          use: "Rolling fondant evenly"
        },
        {
          name: "Smoothers",
          type: "Flat, padded",
          use: "Smoothing air bubbles"
        },
        {
          name: "Cutters",
          type: "Various shapes",
          use: "Cutting shapes, letters"
        },
        {
          name: "Embossers",
          type: "Patterned",
          use: "Adding texture"
        },
        {
          name: "Modeling Tools",
          type: "Pointed, shaped",
          use: "Adding details"
        }
      ],
      essentials: [
        "Cornstarch/powdered sugar for dusting",
        "Fondant mat",
        "Pizza cutter for trimming",
        "Water brush for attaching"
      ],
      storage: "Keep in airtight container, avoid humidity"
    },
    {
      id: 5,
      name: "Airbrush Kit",
      image: "AirBrushKit.png",
      tagline: "Professional coloring and effects",
      fullDesc: "Spray system for applying even color, creating gradients, and adding special effects to cakes.",
      components: [
        "Air compressor: Provides air pressure",
        "Airbrush gun: Applies color",
        "Hose: Connects compressor to gun",
        "Colors: Food-safe airbrush colors",
        "Cleaning kit: For maintenance"
      ],
      techniques: [
        "Base coating: Even color application",
        "Gradients: Smooth color transitions",
        "Stenciling: Precise patterns",
        "Shadowing: Depth and dimension",
        "Metallics: Gold, silver, pearl effects"
      ],
      colors: [
        "Liquid colors: Ready to use",
        "Gel colors: Thicker, need thinning",
        "Powder colors: Mix with alcohol",
        "Metallic dusts: Mix with vodka"
      ],
      cleaning: "Clean immediately after use"
    },
    {
      id: 6,
      name: "Stencils & Molds",
      image: "Stencils.png",
      tagline: "Creating consistent patterns",
      fullDesc: "Tools for creating repeated patterns and shapes with precision and consistency.",
      types: [
        {
          name: "Plastic Stencils",
          material: "Flexible plastic",
          uses: "Dusting, airbrushing, frosting",
          patterns: "Lace, geometric, floral"
        },
        {
          name: "Metal Stencils",
          material: "Thin metal",
          uses: "Royal icing, chocolate transfer",
          patterns: "Detailed, intricate designs"
        },
        {
          name: "Silicone Molds",
          material: "Food-grade silicone",
          uses: "Chocolate, fondant, gum paste",
          patterns: "3D shapes, figures, flowers"
        }
      ],
      techniques: [
        "Hold stencil firmly against surface",
        "Apply medium with spatula or brush",
        "Lift straight up carefully",
        "Clean stencil between uses",
        "For molds: Press material firmly, freeze if needed"
      ],
      storage: "Flat storage to prevent warping"
    },
    {
      id: 7,
      name: "Coloring Tools",
      image: "ColoringTools.png",
      tagline: "Adding vibrant colors",
      fullDesc: "Tools and materials for coloring frostings, fondants, chocolates, and other baking mediums.",
      colorTypes: [
        {
          name: "Gel Colors",
          intensity: "Very high",
          uses: "Buttercream, royal icing",
          notes: "Won't thin consistency"
        },
        {
          name: "Liquid Colors",
          intensity: "Medium",
          uses: "Thin icings, airbrushing",
          notes: "Can thin consistency"
        },
        {
          name: "Powder Colors",
          intensity: "High when activated",
          uses: "Dusting, painting",
          notes: "Mix with alcohol for paint"
        },
        {
          name: "Natural Colors",
          intensity: "Low to medium",
          uses: "All mediums",
          notes: "From plants, vegetables"
        }
      ],
      tools: [
        "Toothpicks: For adding small amounts",
        "Spatulas: For mixing into batches",
        "Gloves: To prevent stained hands",
        "Separate containers: For custom colors"
      ],
      tips: [
        "Add color gradually",
        "Colors deepen over time",
        "Use white base for bright colors",
        "Store colors away from light"
      ]
    },
    {
      id: 8,
      name: "Finishing Tools",
      image: "FinishingTools.png",
      tagline: "The final touches",
      fullDesc: "Tools for adding final decorations and perfecting the presentation of baked goods.",
      tools: [
        {
          name: "Cake Leveler",
          function: "Even cake layers",
          types: "Wire, serrated blade"
        },
        {
          name: "Cake Lifter",
          function: "Moving cakes safely",
          types: "Thin metal sheet"
        },
        {
          name: "Cake Boards",
          function: "Support and presentation",
          types: "Cardboard, foam core"
        },
        {
          name: "Drip Bottles",
          function: "Controlled ganache drips",
          types: "Squeeze bottles"
        },
        {
          name: "Sprinkle Shakers",
          function: "Even sprinkle distribution",
          types: "Shaker containers"
        },
        {
          name: "Edible Glitter",
          function: "Sparkle effect",
          types: "Dust, spray, flakes"
        },
        {
          name: "Luster Dust",
          function: "Metallic shine",
          types: "Pearl, gold, silver"
        },
        {
          name: "Edible Markers",
          function: "Drawing, writing",
          types: "Various colors"
        }
      ],
      presentation: [
        "Cake stands: Elevate for display",
        "Cake domes: Protect while showing",
        "Boxes: For transport and gifting",
        "Ribbons: Decorative finishing"
      ]
    }
  ];

  // Get current data based on selected category
  const getCurrentData = () => {
    switch (selectedCategory) {
      case 'tools': return toolsData;
      case 'techniques': return techniquesData;
      case 'ingredients': return ingredientsData;
      case 'temperature': return temperatureData;
      case 'decorating': return decoratingData;
      default: return toolsData;
    }
  };

  return (
    <div className="bep-container">
      <div className="bep-layout">
        {/* SIDEBAR */}
        <aside className="bep-sidebar">
          <div className="bep-sidebar-header">
            <h2 className="bep-sidebar-title">Bakery Essentials</h2>
            <p className="bep-sidebar-subtitle">Master Professional Baking</p>
          </div>

          <div className="bep-sidebar-categories">
            <ul className="bep-categories-list">
              <li 
                className={`bep-category-item ${selectedCategory === 'tools' ? 'bep-active' : ''}`}
                onClick={() => setSelectedCategory('tools')}
              >
                <span className="bep-category-name">Tools & Equipment</span>
              </li>
              <li 
                className={`bep-category-item ${selectedCategory === 'techniques' ? 'bep-active' : ''}`}
                onClick={() => setSelectedCategory('techniques')}
              >
                <span className="bep-category-name">Baking Techniques</span>
              </li>
              <li 
                className={`bep-category-item ${selectedCategory === 'ingredients' ? 'bep-active' : ''}`}
                onClick={() => setSelectedCategory('ingredients')}
              >
                <span className="bep-category-name">Ingredients Guide</span>
              </li>
              <li 
                className={`bep-category-item ${selectedCategory === 'temperature' ? 'bep-active' : ''}`}
                onClick={() => setSelectedCategory('temperature')}
              >
                <span className="bep-category-name">Temperature Control</span>
              </li>
              <li 
                className={`bep-category-item ${selectedCategory === 'decorating' ? 'bep-active' : ''}`}
                onClick={() => setSelectedCategory('decorating')}
              >
                <span className="bep-category-name">Decorating Tools</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="bep-main">
          <header className="bep-main-header">
            <div className="bep-header-content">
              <h1 className="bep-page-title">
                {selectedCategory === 'tools' && 'Bakery Tools & Equipment'}
                {selectedCategory === 'techniques' && 'Baking Techniques'}
                {selectedCategory === 'ingredients' && 'Ingredients Guide'}
                {selectedCategory === 'temperature' && 'Temperature Control'}
                {selectedCategory === 'decorating' && 'Decorating Tools'}
              </h1>
              <p className="bep-page-description">
                {selectedCategory === 'tools' && 'Essential tools and equipment for professional baking and pastry work.'}
                {selectedCategory === 'techniques' && 'Master fundamental and advanced baking techniques for perfect results.'}
                {selectedCategory === 'ingredients' && 'Comprehensive guide to baking ingredients and their functions.'}
                {selectedCategory === 'temperature' && 'Precise temperature control for perfect baking every time.'}
                {selectedCategory === 'decorating' && 'Tools and techniques for beautiful cake and pastry decoration.'}
              </p>
            </div>
          </header>

          {/* ITEMS GRID */}
          <div className="bep-items-grid-section">
            <div className="bep-items-grid">
              {getCurrentData().map(item => (
                <div 
                  key={item.id} 
                  className="bep-item-card"
                  onClick={() => handleItemSelect(item)}
                >
                  <div 
                    className="bep-card-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  
                  <div className="bep-card-content">
                    <div className="bep-card-header">
                      <h3 className="bep-card-title">{item.name}</h3>
                      {item.essentiality && (
                        <div className={`bep-essentiality-badge ${item.essentiality.toLowerCase()}`}>
                          {item.essentiality}
                        </div>
                      )}
                    </div>
                    <p className="bep-card-description">{item.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* ===== FIXED MODAL - SIRF LEFT SIDE SCROLL, RIGHT IMAGE FIXED ===== */}
      {showDetailPanel && selectedItem && (
        <div className="bep-modal-overlay" onClick={closeDetailPanel}>
          <div className="bep-modal" onClick={(e) => e.stopPropagation()}>
            <button className="bep-modal-close" onClick={closeDetailPanel}>×</button>
            
            <div className="bep-modal-header">
              <div className="bep-modal-title">
                <h2>{selectedItem.name}</h2>
                <p className="bep-modal-subtitle">{selectedItem.tagline}</p>
              </div>
            </div>

            {/* DIRECT 2-COLUMN LAYOUT - NO EXTRA WRAPPERS */}
            <div className="bep-modal-content">
              
              {/* LEFT SIDE - SCROLLABLE CONTENT (65%) */}
              <div className="bep-modal-left">
                <div className="bep-modal-details">
                  
                  {/* DESCRIPTION SECTION - ALL CATEGORIES */}
                  <div className="bep-detail-section">
                    <h3>📋 Description</h3>
                    <div className="bep-detail-content">
                      <p>{selectedItem.fullDesc}</p>
                    </div>
                  </div>

                  {/* TOOLS CATEGORY DETAILS */}
                  {selectedCategory === 'tools' && (
                    <>
                      {selectedItem.keyFeatures && selectedItem.keyFeatures.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>✅ Key Features</h3>
                          <div className="bep-features-grid">
                            {selectedItem.keyFeatures.map((feature, idx) => (
                              <div key={idx} className="bep-feature-item">
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.properUsage && (
                        <div className="bep-detail-section">
                          <h3>📝 Proper Usage</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.properUsage}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.commonMistakes && selectedItem.commonMistakes.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>❌ Common Mistakes</h3>
                          <div className="bep-mistakes-grid">
                            {selectedItem.commonMistakes.map((mistake, idx) => (
                              <div key={idx} className="bep-mistake-item">
                                {mistake}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.essentiality && (
                        <div className="bep-detail-section">
                          <h3>⭐ Importance Level</h3>
                          <div className="bep-detail-content">
                            <p><strong>{selectedItem.essentiality}</strong> - {
                              selectedItem.essentiality === 'Essential' ? 'Must-have for every bakery' :
                              selectedItem.essentiality === 'Important' ? 'Highly recommended for serious bakers' :
                              selectedItem.essentiality === 'Useful' ? 'Good to have for specific tasks' :
                              'Specialized tool for specific purposes'
                            }</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.types && selectedItem.types.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🔧 Types & Varieties</h3>
                          <div className="bep-types-grid">
                            {selectedItem.types.map((type, idx) => (
                              <div key={idx} className="bep-type-card">
                                <div 
                                  className="bep-type-image"
                                  style={{ 
                                    backgroundImage: `url(${type.image || selectedItem.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                  }}
                                ></div>
                                <div className="bep-type-content">
                                  <h4>{type.name}</h4>
                                  <p className="bep-type-desc">{type.description}</p>
                                  <div className="bep-type-details">
                                    {type.capacity && <p><strong>Capacity:</strong> {type.capacity}</p>}
                                    {type.power && <p><strong>Power:</strong> {type.power}</p>}
                                    {type.features && <p><strong>Features:</strong> {type.features}</p>}
                                    {type.size && <p><strong>Size:</strong> {type.size}</p>}
                                    {type.shape && <p><strong>Shape:</strong> {type.shape}</p>}
                                    {type.blades && <p><strong>Blades:</strong> {type.blades}</p>}
                                    {type.diameter && <p><strong>Diameter:</strong> {type.diameter}</p>}
                                  </div>
                                  <div className="bep-type-bestfor">
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

                  {/* TECHNIQUES CATEGORY DETAILS */}
                  {selectedCategory === 'techniques' && (
                    <>
                      {selectedItem.steps && selectedItem.steps.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>📝 Step-by-Step Process</h3>
                          <div className="bep-steps-list">
                            {selectedItem.steps.map((step, idx) => (
                              <div key={idx} className="bep-step">
                                <span className="bep-step-number">{idx + 1}.</span>
                                <span className="bep-step-text">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.stages && selectedItem.stages.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🌡️ Temperature Stages</h3>
                          <div className="bep-stages-grid">
                            {selectedItem.stages.map((stage, idx) => (
                              <div key={idx} className="bep-stage-item">
                                {stage}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.methods && selectedItem.methods.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🛠️ Different Methods</h3>
                          <div className="bep-methods-grid">
                            {selectedItem.methods.map((method, idx) => (
                              <div key={idx} className="bep-method-item">
                                {method}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.tips && (
                        <div className="bep-detail-section">
                          <h3>💡 Pro Tips</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.tips}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.commonMistakes && selectedItem.commonMistakes.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>❌ Common Mistakes to Avoid</h3>
                          <div className="bep-mistakes-list">
                            {selectedItem.commonMistakes.map((mistake, idx) => (
                              <div key={idx} className="bep-mistake-list-item">
                                {mistake}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.applications && (
                        <div className="bep-detail-section">
                          <h3>🎯 Applications</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.applications}</p>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* INGREDIENTS CATEGORY DETAILS */}
                  {selectedCategory === 'ingredients' && (
                    <>
                      {selectedItem.types && selectedItem.types.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>📊 Types & Varieties</h3>
                          <div className="bep-ingredient-types-grid">
                            {selectedItem.types.map((type, idx) => (
                              <div key={idx} className="bep-ingredient-type-card">
                                <h4>{type.name}</h4>
                                {type.protein && <p><strong>Protein:</strong> {type.protein}</p>}
                                {type.uses && <p><strong>Uses:</strong> {type.uses}</p>}
                                {type.description && <p><strong>Description:</strong> {type.description}</p>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.agents && selectedItem.agents.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>⚗️ Leavening Agents</h3>
                          <div className="bep-agents-grid">
                            {selectedItem.agents.map((agent, idx) => (
                              <div key={idx} className="bep-agent-card">
                                <h4>{agent.name}</h4>
                                {agent.activation && <p><strong>Activation:</strong> {agent.activation}</p>}
                                {agent.ratio && <p><strong>Ratio:</strong> {agent.ratio}</p>}
                                {agent.uses && <p><strong>Uses:</strong> {agent.uses}</p>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.functions && selectedItem.functions.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🥚 Functions in Baking</h3>
                          <div className="bep-functions-grid">
                            {selectedItem.functions.map((func, idx) => (
                              <div key={idx} className="bep-function-item">
                                {func}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.storage && (
                        <div className="bep-detail-section">
                          <h3>📦 Storage Guidelines</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.storage}</p>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* TEMPERATURE CATEGORY DETAILS - FIXED */}
                  {selectedCategory === 'temperature' && (
                    <>
                      {selectedItem.temperatures && selectedItem.temperatures.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🌡️ Temperature Ranges</h3>
                          <div className="bep-temperatures-grid">
                            {selectedItem.temperatures.map((temp, idx) => (
                              <div key={idx} className="bep-temperature-item">
                                {temp}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.ingredients && selectedItem.ingredients.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🥚 Ingredient Temperatures</h3>
                          <div className="bep-ingredients-grid">
                            {selectedItem.ingredients.map((ingredient, idx) => (
                              <div key={idx} className="bep-ingredient-item">
                                <strong>{ingredient.name}:</strong> {ingredient.temp} - {ingredient.reason}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.proofingStages && selectedItem.proofingStages.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🌱 Proofing Stages</h3>
                          <div className="bep-proofing-grid">
                            {selectedItem.proofingStages.map((stage, idx) => (
                              <div key={idx} className="bep-proofing-item">
                                {stage}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.stages && selectedItem.stages.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🍬 Sugar Stages</h3>
                          <div className="bep-stages-grid">
                            {selectedItem.stages.map((stage, idx) => (
                              <div key={idx} className="bep-stage-item">
                                {stage}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.methods && selectedItem.methods.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🛠️ Methods</h3>
                          <div className="bep-methods-grid">
                            {selectedItem.methods.map((method, idx) => (
                              <div key={idx} className="bep-method-item">
                                {method}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.items && selectedItem.items.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>📋 Cooling Guidelines</h3>
                          <div className="bep-items-grid">
                            {selectedItem.items.map((item, idx) => (
                              <div key={idx} className="bep-item-card-mini">
                                <h4>{item.name}</h4>
                                <p><strong>Cooling:</strong> {item.cooling}</p>
                                <p><strong>Time:</strong> {item.time}</p>
                                <p><em>{item.notes}</em></p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.storage && selectedItem.storage.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>📦 Storage Guidelines</h3>
                          <div className="bep-storage-grid">
                            {selectedItem.storage.map((item, idx) => (
                              <div key={idx} className="bep-storage-item">
                                <h4>{item.name}</h4>
                                <p><strong>Temperature:</strong> {item.temp}</p>
                                <p><strong>Container:</strong> {item.container}</p>
                                <p><strong>Duration:</strong> {item.duration}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.problems && selectedItem.problems.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>⚠️ Common Problems</h3>
                          <div className="bep-problems-grid">
                            {selectedItem.problems.map((problem, idx) => (
                              <div key={idx} className="bep-problem-item">
                                {problem}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.solutions && selectedItem.solutions.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>✅ Solutions</h3>
                          <div className="bep-solutions-grid">
                            {selectedItem.solutions.map((solution, idx) => (
                              <div key={idx} className="bep-solution-item">
                                {solution}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.tips && (
                        <div className="bep-detail-section">
                          <h3>💡 Pro Tips</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.tips}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.warming && (
                        <div className="bep-detail-section">
                          <h3>🔥 Warming Tips</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.warming}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.cooling && (
                        <div className="bep-detail-section">
                          <h3>❄️ Cooling Tips</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.cooling}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.signs && (
                        <div className="bep-detail-section">
                          <h3>👀 Signs of Success</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.signs}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.overproofing && (
                        <div className="bep-detail-section">
                          <h3>⚠️ Overproofing Signs</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.overproofing}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.testing && (
                        <div className="bep-detail-section">
                          <h3>🧪 Testing Method</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.testing}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.equipment && (
                        <div className="bep-detail-section">
                          <h3>🔧 Required Equipment</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.equipment}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.conversion && (
                        <div className="bep-detail-section">
                          <h3>🔄 Temperature Conversion</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.conversion}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.rushing && (
                        <div className="bep-detail-section">
                          <h3>⏱️ Don't Rush</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.rushing}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.freezing && (
                        <div className="bep-detail-section">
                          <h3>❄️ Freezing Guidelines</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.freezing}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.thawing && (
                        <div className="bep-detail-section">
                          <h3>🧊 Thawing Guidelines</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.thawing}</p>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* DECORATING CATEGORY DETAILS - FIXED */}
                  {selectedCategory === 'decorating' && (
                    <>
                      {selectedItem.types && selectedItem.types.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🎨 Types & Materials</h3>
                          <div className="bep-decorating-types-grid">
                            {selectedItem.types.map((type, idx) => (
                              <div key={idx} className="bep-decorating-type-card">
                                <h4>{type.name}</h4>
                                {type.material && <p><strong>Material:</strong> {type.material}</p>}
                                {type.sizes && <p><strong>Sizes:</strong> {type.sizes}</p>}
                                {type.bestFor && <p><strong>Best For:</strong> {type.bestFor}</p>}
                                {type.function && <p><strong>Function:</strong> {type.function}</p>}
                                {type.patterns && <p><strong>Patterns:</strong> {type.patterns}</p>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.tipTypes && selectedItem.tipTypes.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🎯 Tip Types</h3>
                          <div className="bep-tiptypes-grid">
                            {selectedItem.tipTypes.map((tip, idx) => (
                              <div key={idx} className="bep-tiptype-item">
                                {tip}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.sizes && selectedItem.sizes.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>📏 Available Sizes</h3>
                          <div className="bep-sizes-grid">
                            {selectedItem.sizes.map((size, idx) => (
                              <div key={idx} className="bep-size-card">
                                <h4>{size.name}</h4>
                                <p><strong>Length:</strong> {size.length}</p>
                                <p><strong>Uses:</strong> {size.uses}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.materials && selectedItem.materials.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🧱 Materials</h3>
                          <div className="bep-materials-grid">
                            {selectedItem.materials.map((material, idx) => (
                              <div key={idx} className="bep-material-item">
                                {material}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.techniques && selectedItem.techniques.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🎯 Techniques</h3>
                          <div className="bep-techniques-grid">
                            {selectedItem.techniques.map((technique, idx) => (
                              <div key={idx} className="bep-technique-item">
                                {technique}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.patterns && selectedItem.patterns.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>✨ Patterns</h3>
                          <div className="bep-patterns-grid">
                            {selectedItem.patterns.map((pattern, idx) => (
                              <div key={idx} className="bep-pattern-item">
                                {pattern}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.usage && selectedItem.usage.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>📝 Usage Instructions</h3>
                          <div className="bep-usage-list">
                            {selectedItem.usage.map((step, idx) => (
                              <div key={idx} className="bep-usage-item">
                                {step}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.tools && selectedItem.tools.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🔧 Tools Included</h3>
                          <div className="bep-tools-grid">
                            {selectedItem.tools.map((tool, idx) => (
                              <div key={idx} className="bep-tool-card">
                                <h4>{tool.name}</h4>
                                {tool.type && <p><strong>Type:</strong> {tool.type}</p>}
                                {tool.use && <p><strong>Use:</strong> {tool.use}</p>}
                                {tool.function && <p><strong>Function:</strong> {tool.function}</p>}
                                {tool.types && <p><strong>Types:</strong> {tool.types}</p>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.essentials && selectedItem.essentials.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>✨ Essentials</h3>
                          <div className="bep-essentials-list">
                            {selectedItem.essentials.map((item, idx) => (
                              <div key={idx} className="bep-essential-item">
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.components && selectedItem.components.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>⚙️ Components</h3>
                          <div className="bep-components-list">
                            {selectedItem.components.map((component, idx) => (
                              <div key={idx} className="bep-component-item">
                                {component}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.colors && selectedItem.colors.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🎨 Color Types</h3>
                          <div className="bep-colors-list">
                            {selectedItem.colors.map((color, idx) => (
                              <div key={idx} className="bep-color-item">
                                {color}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.colorTypes && selectedItem.colorTypes.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🌈 Color Types</h3>
                          <div className="bep-colortypes-grid">
                            {selectedItem.colorTypes.map((color, idx) => (
                              <div key={idx} className="bep-colortype-card">
                                <h4>{color.name}</h4>
                                <p><strong>Intensity:</strong> {color.intensity}</p>
                                <p><strong>Uses:</strong> {color.uses}</p>
                                <p><em>{color.notes}</em></p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.presentation && selectedItem.presentation.length > 0 && (
                        <div className="bep-detail-section">
                          <h3>🎁 Presentation Ideas</h3>
                          <div className="bep-presentation-list">
                            {selectedItem.presentation.map((item, idx) => (
                              <div key={idx} className="bep-presentation-item">
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.cleaning && (
                        <div className="bep-detail-section">
                          <h3>🧼 Cleaning & Maintenance</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.cleaning}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.storage && typeof selectedItem.storage === 'string' && (
                        <div className="bep-detail-section">
                          <h3>📦 Storage</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.storage}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.tips && typeof selectedItem.tips === 'string' && (
                        <div className="bep-detail-section">
                          <h3>💡 Pro Tips</h3>
                          <div className="bep-detail-content">
                            <p>{selectedItem.tips}</p>
                          </div>
                        </div>
                      )}

                      {selectedItem.tips && Array.isArray(selectedItem.tips) && (
                        <div className="bep-detail-section">
                          <h3>💡 Pro Tips</h3>
                          <div className="bep-tips-list">
                            {selectedItem.tips.map((tip, idx) => (
                              <div key={idx} className="bep-tip-item">
                                {tip}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* RIGHT SIDE - FIXED IMAGE (35%) - NO SCROLL */}
              <div className="bep-modal-right">
                <div className="bep-main-image-container">
                  <div 
                    className="bep-main-image"
                    style={{ 
                      backgroundImage: `url(${selectedItem.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                   
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      )}
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

export default BakeryEssentialsPage;