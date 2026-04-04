// migrate/migrateBeginners.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const User = require('../models/User');
const BeginnersGuide = require('../models/BeginnersGuide');

// ==================== 1. BAKERY ESSENTIALS PAGE ====================
// Tools & Equipment (BakeryEssentialsPage.js - toolsData)
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
      { name: "Professional Series", image: "https://images.unsplash.com/photo-1581235720854-7431a2d6d7b2?auto=format&fit=crop&w=300", description: "Heavy-duty, commercial grade", capacity: "5-7 quart", power: "1000W+", bestFor: "Frequent baking, bread dough, large batches" },
      { name: "Home Series", image: "https://images.unsplash.com/photo-1581235720854-7431a2d6d7b2?auto=format&fit=crop&w=300", description: "Compact, affordable", capacity: "4-5 quart", power: "500-800W", bestFor: "Occasional bakers, cakes, cookies" }
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
      { name: "Precision Scale", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300", description: "High accuracy, 0.1g precision", capacity: "3-5kg", features: "0.1g increments", bestFor: "Baking, coffee, spices" },
      { name: "Heavy Duty Scale", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300", description: "Large capacity", capacity: "10-15kg", features: "1g increments", bestFor: "Bread making, large batches" }
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
      { name: "Analog Oven Thermometer", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300", description: "Traditional dial type", range: "50-300°C", features: "No battery needed", bestFor: "General baking" },
      { name: "Digital Oven Thermometer", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300", description: "Digital display, probe", range: "-50 to 300°C", features: "Remote display", bestFor: "Precise temperature control" }
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
      { name: "Half Sheet Size", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300", description: "Fits standard baking sheet", size: "16.5 x 11.5 inches", features: "Measurement markings", bestFor: "Cookies, pastries" },
      { name: "Quarter Sheet Size", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300", description: "Smaller size", size: "9.5 x 13 inches", features: "Fits toaster ovens", bestFor: "Small batches, toaster ovens" }
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
      { name: "Stainless Steel Scraper", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300", description: "All metal construction", size: "6 x 4 inches", features: "Ruler markings", bestFor: "Bread dough, heavy use" },
      { name: "Plastic Bench Scraper", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300", description: "Flexible, gentle", size: "6 x 4 inches", features: "Flexible blade", bestFor: "Delicate pastries, scraping bowls" }
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
      { name: "Wire Pastry Blender", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300", description: "Traditional wire design", blades: "5-7 wires", features: "Efficient cutting", bestFor: "Pie crusts, biscuits" },
      { name: "Solid Blade Blender", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300", description: "Solid metal blades", blades: "4-5 solid blades", features: "More durable", bestFor: "Heavy use, professional" }
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
      { name: "Plastic Turntable", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300", description: "Lightweight, affordable", diameter: "10-12 inches", features: "Non-slip surface", bestFor: "Home bakers, occasional use" },
      { name: "Metal Turntable", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300", description: "Heavy-duty, professional", diameter: "12-16 inches", features: "Ball bearing rotation", bestFor: "Professional decorators" }
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
      { name: "Rattan Banneton", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300", description: "Traditional rattan", shape: "Round or oval", features: "Beautiful spiral pattern", bestFor: "Artisan breads" },
      { name: "Plastic Proofing Basket", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300", description: "Modern, easy clean", shape: "Various shapes", features: "Easy to clean", bestFor: "High hydration doughs" }
    ]
  }
];

// Techniques (BakeryEssentialsPage.js - techniquesData)
const techniquesData = [
  {
    id: 1,
    name: "Creaming Method",
    image: "CreamingMethod.png",
    tagline: "Foundation of cake making",
    fullDesc: "Beating butter and sugar together to incorporate air, creating light and fluffy baked goods. Essential for cakes, cookies, and some breads.",
    steps: [ "Bring butter to room temperature", "Beat butter until creamy", "Gradually add sugar, beat until light and fluffy", "Add eggs one at a time", "Alternate dry and wet ingredients" ],
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
    steps: [ "Add lighter mixture to heavier mixture", "Cut through center with spatula", "Scoop from bottom, fold over top", "Rotate bowl slightly", "Repeat until just combined" ],
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
    steps: [ "Combine ingredients until shaggy mass", "Turn out onto floured surface", "Push with heel of hand", "Fold dough over", "Rotate and repeat" ],
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
    steps: [ "Roll out dough, place in pan", "Chill for 30 minutes", "Line with parchment, fill with weights", "Bake at 375°F for 15 minutes", "Remove weights, bake until golden" ],
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
    steps: [ "Chop chocolate finely", "Melt 2/3 to 115°F (46°C)", "Add remaining 1/3 unmelted chocolate", "Stir until cooled to 82°F (28°C)", "Rewarm to 88-90°F (31-32°C)" ],
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
    stages: [ "Thread Stage: 230-235°F (110-113°C)", "Soft Ball: 235-240°F (113-116°C)", "Firm Ball: 245-250°F (118-121°C)", "Hard Ball: 250-265°F (121-129°C)", "Soft Crack: 270-290°F (132-143°C)", "Hard Crack: 300-310°F (149-154°C)", "Caramel: 320-350°F (160-177°C)" ],
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
    steps: [ "Make détrempe (dough base)", "Create butter block", "Encase butter in dough", "Roll out, fold in thirds", "Chill, repeat folds" ],
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
    methods: [ "Whole egg + water: All-purpose shine", "Egg yolk + cream: Deep golden color", "Egg white: Very shiny finish", "Milk or cream: Subtle browning" ],
    tips: "Brush gently, avoid pooling, apply just before baking",
    commonMistakes: ["Too thick application", "Brushing off rise", "Wrong type for item"],
    applications: "Bread, pastries, pie crusts"
  }
];

// Ingredients (BakeryEssentialsPage.js - ingredientsData)
const ingredientsData = [
  {
    id: 1,
    name: "Flour Types",
    image: "FlourTypes.png",
    tagline: "Choosing the right flour",
    fullDesc: "Different flours have different protein contents and gluten-forming abilities, making them suitable for specific baked goods.",
    types: [
      { name: "All-Purpose Flour", protein: "10-12%", uses: "Cakes, cookies, quick breads", description: "Most versatile, medium protein" },
      { name: "Bread Flour", protein: "12-14%", uses: "Yeast breads, pizza dough", description: "High protein, strong gluten" },
      { name: "Cake Flour", protein: "7-9%", uses: "Delicate cakes, pastries", description: "Low protein, fine texture" },
      { name: "Pastry Flour", protein: "9-10%", uses: "Pie crusts, biscuits", description: "Between AP and cake flour" }
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
      { name: "Baking Soda", activation: "Acid + liquid", ratio: "1/4 tsp per cup of flour", uses: "Quick breads, cookies" },
      { name: "Baking Powder", activation: "Heat + moisture", ratio: "1 tsp per cup of flour", uses: "Cakes, muffins, biscuits" },
      { name: "Yeast", activation: "Sugar + warmth + time", ratio: "2 1/4 tsp per 4 cups flour", uses: "Breads, rolls, pastries" }
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
      { name: "Butter", flavor: "Rich, creamy", texture: "Flaky, tender", uses: "Pastries, cakes, cookies" },
      { name: "Shortening", flavor: "Neutral", texture: "Very flaky", uses: "Pie crusts, biscuits" },
      { name: "Oil", flavor: "Neutral", texture: "Moist, dense", uses: "Quick breads, cakes" },
      { name: "Lard", flavor: "Slightly savory", texture: "Extremely flaky", uses: "Pie crusts, pastries" }
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
      { name: "Granulated Sugar", properties: "Standard sweetener", effects: "Browning, tenderness", substitutes: "None directly" },
      { name: "Brown Sugar", properties: "Molasses content", effects: "Moisture, flavor", substitutes: "White sugar + molasses" },
      { name: "Honey", properties: "Liquid, hygroscopic", effects: "Moisture, browning", substitutes: "Reduce liquid by 1/4 cup" },
      { name: "Maple Syrup", properties: "Liquid, distinct flavor", effects: "Moisture, flavor", substitutes: "Honey or corn syrup" }
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
    functions: [ "Structure: Proteins coagulate during baking", "Leavening: Traps air when beaten", "Emulsification: Binds fat and water", "Flavor: Rich taste", "Color: Golden brown when baked", "Moisture: Adds liquid content" ],
    sizes: [ "Small: 43g (about 1.5 oz)", "Medium: 50g (about 1.75 oz)", "Large: 57g (about 2 oz)", "Extra Large: 64g (about 2.25 oz)", "Jumbo: 71g (about 2.5 oz)" ],
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
      { name: "Milk", fat: "0-3.5%", uses: "General baking, breads", substitutes: "Water + butter, plant milks" },
      { name: "Buttermilk", fat: "1-2%", uses: "Tangy flavor, tenderizing", substitutes: "Milk + acid (vinegar/lemon)" },
      { name: "Cream", fat: "18-36%", uses: "Richness, whipping", substitutes: "Milk + butter (for baking)" },
      { name: "Yogurt", fat: "0-10%", uses: "Moisture, tanginess", substitutes: "Sour cream, buttermilk" }
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
      { name: "Unsweetened", cocoa: "100%", sugar: "0%", uses: "Baking, need added sugar" },
      { name: "Bittersweet", cocoa: "70-85%", sugar: "15-30%", uses: "Professional baking" },
      { name: "Semisweet", cocoa: "50-69%", sugar: "31-50%", uses: "Chips, general baking" },
      { name: "Milk Chocolate", cocoa: "10-40%", sugar: "60-90%", uses: "Eating, some baking" },
      { name: "White Chocolate", cocoa: "0% (cocoa butter)", sugar: "Varies", uses: "Decorating, some baking" }
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
      { name: "Vanilla Extract", strength: "Very strong", usage: "1-2 tsp per recipe", notes: "Most common, enhances other flavors" },
      { name: "Almond Extract", strength: "Extremely strong", usage: "1/4-1/2 tsp per recipe", notes: "Use sparingly, potent flavor" },
      { name: "Lemon Extract", strength: "Strong", usage: "1/2-1 tsp per recipe", notes: "Bright, citrus flavor" },
      { name: "Other Extracts", strength: "Varies", usage: "Follow recipe", notes: "Mint, orange, coconut, etc." }
    ],
    tips: "Add at end of mixing, use pure not imitation",
    storage: "Dark cupboard, away from heat"
  }
];

// Temperature (BakeryEssentialsPage.js - temperatureData)
const temperatureData = [
  {
    id: 1,
    name: "Oven Temperatures",
    image: "OvenTemp.png",
    tagline: "Perfect baking temperatures",
    fullDesc: "Different baked goods require specific oven temperatures for optimal results.",
    temperatures: [ "Very Slow: 250-275°F (120-135°C) - Drying, meringues", "Slow: 300°F (150°C) - Rich fruit cakes", "Moderately Slow: 325°F (165°C) - Cakes, cookies", "Moderate: 350°F (175°C) - Most baking", "Moderately Hot: 375-400°F (190-205°C) - Pastries, pies", "Hot: 425-450°F (220-230°C) - Bread, puff pastry", "Very Hot: 475-500°F (245-260°C) - Pizza, artisan bread" ],
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
      { name: "Butter", temp: "Room temp (65-70°F/18-21°C)", reason: "Creams properly with sugar" },
      { name: "Eggs", temp: "Room temp", reason: "Better emulsion, more volume" },
      { name: "Milk/Water for Yeast", temp: "105-115°F (40-46°C)", reason: "Activates yeast without killing" },
      { name: "Heavy Cream", temp: "Very cold", reason: "Whips to better volume" }
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
    proofingStages: [ "Bulk Fermentation: 75-78°F (24-26°C)", "First Proof: 75-80°F (24-27°C)", "Final Proof: 80-85°F (27-29°C)", "Retardation (slow): 35-50°F (2-10°C)" ],
    methods: [ "Oven with light on: Creates 80-90°F warmth", "Microwave with hot water: Creates humid environment", "Proofing box: Controlled temperature", "Room temperature: 68-72°F ideal" ],
    signs: "Doubled in size, finger indentation remains",
    overproofing: "Collapses when touched, sour smell"
  },
  {
    id: 4,
    name: "Sugar Temperature Stages",
    image: "SugarTemp.png",
    tagline: "Candy making precision",
    fullDesc: "Sugar syrup reaches different consistencies at specific temperatures, used for various confections.",
    stages: [ "Thread: 230-235°F (110-113°C) - Syrups", "Soft Ball: 235-240°F (113-116°C) - Fudge", "Firm Ball: 245-250°F (118-121°C) - Caramels", "Hard Ball: 250-265°F (121-129°C) - Nougat", "Soft Crack: 270-290°F (132-143°C) - Taffy", "Hard Crack: 300-310°F (149-154°C) - Lollipops", "Caramel: 320-350°F (160-177°C) - Caramel sauce" ],
    testing: "Cold water test: Drop syrup in ice water",
    equipment: "Candy thermometer, heavy saucepan"
  },
  {
    id: 5,
    name: "Chocolate Tempering",
    image: "ChocolateTemp.png",
    tagline: "Perfect tempering temperatures",
    fullDesc: "Tempering chocolate involves precise temperature control to create stable cocoa butter crystals.",
    temperatures: [ "Dark Chocolate: Melt to 115-120°F (46-49°C), cool to 80-82°F (27-28°C), reheat to 88-90°F (31-32°C)", "Milk Chocolate: Melt to 110-115°F (43-46°C), cool to 80-82°F (27-28°C), reheat to 86-88°F (30-31°C)", "White Chocolate: Melt to 110°F (43°C), cool to 79-81°F (26-27°C), reheat to 84-86°F (29-30°C)" ],
    methods: [ "Seeding: Add chopped chocolate to melted", "Tabling: Spread on marble, work back and forth", "Microwave: Short bursts, frequent stirring" ],
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
      { name: "Breads", cooling: "Wire rack completely", time: "1-2 hours minimum", notes: "Listen for crackling crust" },
      { name: "Cakes", cooling: "10 min in pan, then rack", time: "Completely cool before frosting", notes: "Prevents condensation" },
      { name: "Cookies", cooling: "2 min on sheet, then rack", time: "Completely cool before storing", notes: "Continues baking on hot sheet" },
      { name: "Pastries", cooling: "Wire rack, elevated", time: "Until room temperature", notes: "Prevents soggy bottoms" }
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
      { name: "Bread", temp: "Room temperature", container: "Paper bag or bread box", duration: "2-3 days" },
      { name: "Cakes with Frosting", temp: "Room temperature", container: "Cake carrier", duration: "2-3 days" },
      { name: "Pastries with Custard", temp: "Refrigerated", container: "Airtight container", duration: "1-2 days" },
      { name: "Cookies", temp: "Room temperature", container: "Airtight with parchment", duration: "1 week" }
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
    problems: [ "Dense cake: Butter too cold, oven too cool", "Tough cookies: Overmixed, butter too warm", "Bread didn't rise: Yeast killed by hot liquid", "Soggy bottom: Not cooled on rack", "Burnt edges: Oven too hot, wrong rack position", "Pale baked goods: Oven too cool, not preheated", "Cracked cheesecake: Too rapid temperature change", "Flat cookies: Butter too warm, dough not chilled" ],
    solutions: [ "Use oven thermometer", "Bring ingredients to proper temp", "Preheat adequately", "Check oven calibration", "Use correct rack position", "Allow proper cooling time", "Chill dough when specified", "Avoid temperature shocks" ],
    equipment: "Oven thermometer, instant-read thermometer"
  }
];

// Decorating (BakeryEssentialsPage.js - decoratingData)
const decoratingData = [
  {
    id: 1,
    name: "Piping Bags & Tips",
    image: "PipingBags.png",
    tagline: "Essential for cake decorating",
    fullDesc: "Tools for applying frosting, cream, and other decorations in controlled patterns and shapes.",
    types: [
      { name: "Disposable Bags", material: "Plastic", sizes: "12, 16, 18 inch", bestFor: "Buttercream, royal icing" },
      { name: "Reusable Bags", material: "Silicone/nylon", sizes: "Various", bestFor: "Frequent use, professionals" },
      { name: "Couplers", material: "Plastic", function: "Tip changing", bestFor: "Multiple designs" }
    ],
    tipTypes: [ "Round tips: Writing, dots, outlines", "Star tips: Stars, shells, borders", "Leaf tips: Leaves, ruffles", "Petal tips: Flowers, ribbons", "Specialty tips: Basketweave, grass" ],
    cleaning: "Disposable: discard, Reusable: wash immediately"
  },
  {
    id: 2,
    name: "Offset Spatulas",
    image: "OffSetSpatulas.png",
    tagline: "Smooth frosting application",
    fullDesc: "Angled blades for easy frosting application and smoothing, especially on cake sides.",
    sizes: [
      { name: "Small", length: "4-5 inches", uses: "Detail work, filling cupcakes" },
      { name: "Medium", length: "6-7 inches", uses: "Standard cake decorating" },
      { name: "Large", length: "9-10 inches", uses: "Large cakes, crumb coating" },
      { name: "Mini", length: "2-3 inches", uses: "Tiny details, repair work" }
    ],
    materials: [ "Stainless steel", "Flexible tip", "Comfortable handle" ],
    techniques: [ "Crumb coat: Thin layer to trap crumbs", "Final coat: Smooth, even application", "Swirls: Create textured patterns", "Smooth: Perfectly flat finish" ]
  },
  {
    id: 3,
    name: "Cake Combs",
    image: "CakeCombs.png",
    tagline: "Creating textured finishes",
    fullDesc: "Tools with various patterned edges for creating decorative textures on cake frosting.",
    patterns: [ "Straight lines: Classic, clean look", "Scalloped: Wavy, elegant pattern", "Ridged: Multiple parallel lines", "Square: Geometric pattern", "Combination: Multiple patterns on one tool" ],
    materials: [ "Plastic: Affordable, various patterns", "Metal: Durable, precise edges", "Acrylic: Clear, see-through" ],
    usage: [ "Apply thick layer of frosting", "Chill briefly to set", "Hold comb at angle", "Rotate turntable while applying pressure", "Clean comb between passes" ],
    tips: "Keep frosting cool but spreadable"
  },
  {
    id: 4,
    name: "Fondant Tools",
    image: "FondantTools.png",
    tagline: "Working with sugar paste",
    fullDesc: "Specialized tools for rolling, cutting, shaping, and detailing fondant decorations.",
    tools: [
      { name: "Rolling Pin", type: "Non-stick, smooth", use: "Rolling fondant evenly" },
      { name: "Smoothers", type: "Flat, padded", use: "Smoothing air bubbles" },
      { name: "Cutters", type: "Various shapes", use: "Cutting shapes, letters" },
      { name: "Embossers", type: "Patterned", use: "Adding texture" },
      { name: "Modeling Tools", type: "Pointed, shaped", use: "Adding details" }
    ],
    essentials: [ "Cornstarch/powdered sugar for dusting", "Fondant mat", "Pizza cutter for trimming", "Water brush for attaching" ],
    storage: "Keep in airtight container, avoid humidity"
  },
  {
    id: 5,
    name: "Airbrush Kit",
    image: "AirBrushKit.png",
    tagline: "Professional coloring and effects",
    fullDesc: "Spray system for applying even color, creating gradients, and adding special effects to cakes.",
    components: [ "Air compressor: Provides air pressure", "Airbrush gun: Applies color", "Hose: Connects compressor to gun", "Colors: Food-safe airbrush colors", "Cleaning kit: For maintenance" ],
    techniques: [ "Base coating: Even color application", "Gradients: Smooth color transitions", "Stenciling: Precise patterns", "Shadowing: Depth and dimension", "Metallics: Gold, silver, pearl effects" ],
    colors: [ "Liquid colors: Ready to use", "Gel colors: Thicker, need thinning", "Powder colors: Mix with alcohol", "Metallic dusts: Mix with vodka" ],
    cleaning: "Clean immediately after use"
  },
  {
    id: 6,
    name: "Stencils & Molds",
    image: "Stencils.png",
    tagline: "Creating consistent patterns",
    fullDesc: "Tools for creating repeated patterns and shapes with precision and consistency.",
    types: [
      { name: "Plastic Stencils", material: "Flexible plastic", uses: "Dusting, airbrushing, frosting", patterns: "Lace, geometric, floral" },
      { name: "Metal Stencils", material: "Thin metal", uses: "Royal icing, chocolate transfer", patterns: "Detailed, intricate designs" },
      { name: "Silicone Molds", material: "Food-grade silicone", uses: "Chocolate, fondant, gum paste", patterns: "3D shapes, figures, flowers" }
    ],
    techniques: [ "Hold stencil firmly against surface", "Apply medium with spatula or brush", "Lift straight up carefully", "Clean stencil between uses", "For molds: Press material firmly, freeze if needed" ],
    storage: "Flat storage to prevent warping"
  },
  {
    id: 7,
    name: "Coloring Tools",
    image: "ColoringTools.png",
    tagline: "Adding vibrant colors",
    fullDesc: "Tools and materials for coloring frostings, fondants, chocolates, and other baking mediums.",
    colorTypes: [
      { name: "Gel Colors", intensity: "Very high", uses: "Buttercream, royal icing", notes: "Won't thin consistency" },
      { name: "Liquid Colors", intensity: "Medium", uses: "Thin icings, airbrushing", notes: "Can thin consistency" },
      { name: "Powder Colors", intensity: "High when activated", uses: "Dusting, painting", notes: "Mix with alcohol for paint" },
      { name: "Natural Colors", intensity: "Low to medium", uses: "All mediums", notes: "From plants, vegetables" }
    ],
    tools: [ "Toothpicks: For adding small amounts", "Spatulas: For mixing into batches", "Gloves: To prevent stained hands", "Separate containers: For custom colors" ],
    tips: [ "Add color gradually", "Colors deepen over time", "Use white base for bright colors", "Store colors away from light" ]
  },
  {
    id: 8,
    name: "Finishing Tools",
    image: "FinishingTools.png",
    tagline: "The final touches",
    fullDesc: "Tools for adding final decorations and perfecting the presentation of baked goods.",
    tools: [
      { name: "Cake Leveler", function: "Even cake layers", types: "Wire, serrated blade" },
      { name: "Cake Lifter", function: "Moving cakes safely", types: "Thin metal sheet" },
      { name: "Cake Boards", function: "Support and presentation", types: "Cardboard, foam core" },
      { name: "Drip Bottles", function: "Controlled ganache drips", types: "Squeeze bottles" },
      { name: "Sprinkle Shakers", function: "Even sprinkle distribution", types: "Shaker containers" },
      { name: "Edible Glitter", function: "Sparkle effect", types: "Dust, spray, flakes" },
      { name: "Luster Dust", function: "Metallic shine", types: "Pearl, gold, silver" },
      { name: "Edible Markers", function: "Drawing, writing", types: "Various colors" }
    ],
    presentation: [ "Cake stands: Elevate for display", "Cake domes: Protect while showing", "Boxes: For transport and gifting", "Ribbons: Decorative finishing" ]
  }
];

// ==================== 2. BEGINNERS PAGE (Skill Cards) ====================
const skillCards = [
  { id: '01', image: 'KitchenTools.png', title: 'Kitchen Tools', route: '/kitchen-tools', features: [ 'Tools that make cooking easier and more precise.' ] },
  { id: '02', image: 'CuttingTechniques.png', title: 'Cutting Techniques', route: '/cutting-techniques', features: [ 'Tools that make cooking easier and more precise.' ] },
  { id: '03', image: 'CookingMethods.png', title: 'Cooking Methods', route: '/cooking-methods', features: [ 'Heat-based techniques used to prepare and cook food.' ] },
  { id: '04', image: 'MeatCuts.png', title: 'Meat Cuts', route: '/meat-cuts', features: [ 'Different portions of meat from various animal parts.' ] },
  { id: '05', image: 'KitchenAppliances.png', title: 'Kitchen Appliances', route: '/kitchen-appliances', features: [ 'Electrical devices that assist with cooking and food preparation.' ] },
  { id: '06', image: 'PantryBasics.png', title: 'Pantry Basics', route: '/pantry-basics', features: [ 'Staple ingredients that form the foundation of everyday cooking.' ] },
  { id: '07', image: 'MeasuringSkills.png', title: 'Measuring Skills', route: '/measuring-skills', features: [ 'Techniques for accurately measuring ingredients.' ] },
  { id: '08', image: 'BakingEssentials.png', title: 'Bakery Essentials', route: '/bakery-essentials', features: [ 'Must-have tools and ingredients for successful baking.' ] }
];

// ==================== 3. COOKING METHODS PAGE ====================
const cookingMethods = [
  {
    id: 1, name: "Boiling", tagline: "Cooking in boiling water", fullDesc: "Boiling is a moist-heat cooking method where food is submerged in water at 100°C (212°F). This method is excellent for cooking pasta, vegetables, eggs, and grains. It's a fast cooking method that retains nutrients when done properly.",
    keyUses: ["Pasta", "Vegetables", "Eggs", "Rice"], previewImg: "BoilingMethod.png", temperature: "100°C (212°F)", equipment: "Saucepan, Stock pot", bestFor: "Pasta, hard vegetables, grains",
    tips: ["Use salted water for flavor", "Don't overcrowd the pot", "Use rolling boil for pasta", "Ice bath stops cooking"],
    steps: [ "Fill a pot with water and bring to a rolling boil.", "Add salt to the boiling water for flavor.", "Carefully add the food to the boiling water.", "Cook for the recommended time, stirring occasionally.", "Drain and serve immediately or shock in ice water." ]
  },
  {
    id: 2, name: "Simmering", tagline: "Gentle cooking below boiling point", fullDesc: "Simmering cooks food in liquid at temperatures between 85-95°C (185-203°F). The liquid shows small bubbles and gentle movement. This method is perfect for delicate foods that need slow, even cooking without breaking apart.",
    keyUses: ["Soups", "Stews", "Sauces", "Grains"], previewImg: "SimmeringMethod.png", temperature: "85-95°C (185-203°F)", equipment: "Saucepan, Dutch oven", bestFor: "Tender meats, soups, sauces",
    tips: ["Maintain gentle bubbles", "Use lid to retain heat", "Stir occasionally", "Adjust heat as needed"],
    steps: [ "Bring liquid to a boil first.", "Reduce heat until bubbles are small and gentle.", "Add ingredients to the simmering liquid.", "Cover partially to allow steam to escape.", "Cook until food is tender and flavors meld." ]
  },
  {
    id: 3, name: "Steaming", tagline: "Cooking with steam heat", fullDesc: "Steaming cooks food by exposing it to steam from boiling water. This moist-heat method preserves nutrients, color, and texture better than boiling. Food doesn't touch the water, preventing nutrient loss.",
    keyUses: ["Vegetables", "Fish", "Dumplings", "Rice"], previewImg: "SteamingMethod.png", temperature: "100°C (212°F)", equipment: "Steamer basket, Bamboo steamer", bestFor: "Delicate vegetables, seafood, dim sum",
    tips: ["Don't let water touch food", "Use tight-fitting lid", "Check water level", "Layer foods properly"],
    steps: [ "Add water to a pot and bring to a boil.", "Place steamer basket over (not in) the water.", "Arrange food in a single layer in the basket.", "Cover with tight-fitting lid to trap steam.", "Steam for recommended time until cooked." ]
  },
  {
    id: 4, name: "Sautéing", tagline: "Quick frying in minimal oil", fullDesc: "Sautéing cooks food quickly in a small amount of oil or fat over relatively high heat. The French word 'sauter' means 'to jump', referring to the tossing motion. This method creates flavorful browned surfaces while keeping interiors tender.",
    keyUses: ["Vegetables", "Meat pieces", "Shrimp", "Mushrooms"], previewImg: "SautingMethod.png", temperature: "Medium-high heat", equipment: "Skillet, Sauté pan", bestFor: "Quick-cooking ingredients, stir-fries",
    tips: ["Preheat pan properly", "Don't overcrowd pan", "Keep food moving", "Use high smoke point oil"],
    steps: [ "Heat pan over medium-high heat.", "Add small amount of oil and heat until shimmering.", "Add ingredients in a single layer.", "Cook without moving for 1-2 minutes to sear.", "Toss or stir frequently until cooked through." ]
  },
  {
    id: 5, name: "Pan-Frying", tagline: "Shallow frying in oil", fullDesc: "Pan-frying uses more oil than sautéing (about 1/4 to 1/2 inch deep) to cook food. The oil should come about halfway up the food. This method creates a crispy exterior while cooking the interior through conduction.",
    keyUses: ["Chicken cutlets", "Fish fillets", "Patties", "Potatoes"], previewImg: "Pan-FryingMethod.png", temperature: "Medium heat", equipment: "Skillet, Frying pan", bestFor: "Breaded foods, thick cuts, crispy textures",
    tips: ["Maintain oil temperature", "Don't flip too early", "Drain on paper towels", "Season immediately"],
    steps: [ "Add oil to pan (1/4 to 1/2 inch deep).", "Heat oil to proper temperature (not smoking).", "Carefully add food to the hot oil.", "Cook until golden brown on one side.", "Flip and cook until golden brown and cooked through." ]
  },
  {
    id: 6, name: "Deep-Frying", tagline: "Complete submersion in hot oil", fullDesc: "Deep-frying completely submerges food in hot oil (typically 175-190°C/350-375°F). This creates a crispy, golden exterior while sealing in moisture. Proper temperature control is crucial to prevent oil absorption.",
    keyUses: ["French fries", "Chicken", "Doughnuts", "Fritters"], previewImg: "Deep-FryingMethod.png", temperature: "175-190°C (350-375°F)", equipment: "Deep fryer, Dutch oven", bestFor: "Battered foods, crispy snacks",
    tips: ["Use thermometer", "Fry in batches", "Drain properly", "Reuse oil properly"],
    steps: [ "Fill fryer with oil and heat to proper temperature.", "Pat food dry and coat if battering/breading.", "Carefully lower food into hot oil.", "Fry until golden brown and cooked through.", "Remove and drain on paper towels." ]
  },
  {
    id: 7, name: "Baking", tagline: "Dry heat cooking in oven", fullDesc: "Baking uses dry heat in an enclosed oven to cook food. Hot air circulates around the food, cooking it evenly. This method is ideal for foods that need structure development like bread, cakes, and casseroles.",
    keyUses: ["Bread", "Cakes", "Casseroles", "Roasted vegetables"], previewImg: "BakingMethod.png", temperature: "150-250°C (300-480°F)", equipment: "Oven, Baking sheets", bestFor: "Baked goods, casseroles, one-pan meals",
    tips: ["Preheat oven", "Use middle rack", "Rotate pans", "Test for doneness"],
    steps: [ "Preheat oven to required temperature.", "Prepare food and place in appropriate bakeware.", "Place in center of preheated oven.", "Bake for recommended time.", "Check for doneness and remove from oven." ]
  },
  {
    id: 8, name: "Roasting", tagline: "High-heat oven cooking", fullDesc: "Roasting uses dry heat at high temperatures (usually above 200°C/400°F) to cook food, typically meat or vegetables. The high heat caramelizes the exterior while keeping the interior moist. Often used for larger cuts of meat.",
    keyUses: ["Whole chicken", "Vegetables", "Large meat cuts", "Nuts"], previewImg: "RoastingMethod.png", temperature: "200-230°C (400-450°F)", equipment: "Roasting pan, Oven", bestFor: "Large meats, root vegetables",
    tips: ["Use roasting rack", "Baste occasionally", "Rest before carving", "Use meat thermometer"],
    steps: [ "Preheat oven to high temperature.", "Season food and place on roasting rack.", "Roast until exterior is browned.", "Reduce heat if needed for even cooking.", "Rest before serving for juicier results." ]
  },
  {
    id: 9, name: "Grilling", tagline: "Direct heat from below", fullDesc: "Grilling cooks food with direct radiant heat from below. This method creates distinctive char marks and smoky flavor. Perfect for quick-cooking foods that benefit from high heat and caramelization.",
    keyUses: ["Burgers", "Steaks", "Vegetables", "Kebabs"], previewImg: "GrillingMethod.png", temperature: "High heat", equipment: "Grill, Barbecue", bestFor: "Meats, vegetables with structure",
    tips: ["Clean grill grates", "Oil food not grates", "Create heat zones", "Don't press food"],
    steps: [ "Preheat grill to high heat.", "Clean and oil grill grates.", "Place food on hot grill grates.", "Cook until grill marks appear.", "Flip and cook to desired doneness." ]
  },
  {
    id: 10, name: "Broiling", tagline: "Direct heat from above", fullDesc: "Broiling uses direct radiant heat from above the food. Similar to an upside-down grill, it quickly browns and cooks the surface of food. Excellent for melting cheese, browning toppings, or cooking thin cuts.",
    keyUses: ["Cheese melting", "Fish fillets", "Toast toppings", "Thin meats"], previewImg: "BroilingMethod.png", temperature: "260-290°C (500-550°F)", equipment: "Oven broiler", bestFor: "Quick browning, thin cuts",
    tips: ["Watch carefully", "Use broiler pan", "Adjust rack position", "Preheat broiler"],
    steps: [ "Preheat broiler for 5-10 minutes.", "Place food on broiler pan or baking sheet.", "Position rack 4-6 inches from heat source.", "Broil until browned and cooked.", "Watch carefully to prevent burning." ]
  },
  {
    id: 11, name: "Braising", tagline: "Slow cooking with moist heat", fullDesc: "Braising combines searing at high heat then slow cooking in liquid at low heat. This two-step method is perfect for tough cuts of meat that become tender with long, slow cooking. The liquid can become a flavorful sauce.",
    keyUses: ["Pot roast", "Short ribs", "Brisket", "Stews"], previewImg: "BraisingMethod.png", temperature: "Low heat (150°C/300°F)", equipment: "Dutch oven, Heavy pot", bestFor: "Tough meats, one-pot meals",
    tips: ["Sear well first", "Use tight-fitting lid", "Cook low and slow", "Skim fat from sauce"],
    steps: [ "Sear meat in hot oil until browned.", "Remove meat and sauté vegetables.", "Add liquid and return meat to pot.", "Cover and cook at low temperature for hours.", "Reduce sauce and skim fat before serving." ]
  },
  {
    id: 12, name: "Stewing", tagline: "Slow simmering in liquid", fullDesc: "Stewing involves cooking small pieces of food completely submerged in liquid at low temperatures for extended periods. Similar to braising but with more liquid and smaller food pieces. Creates tender results with flavorful broth.",
    keyUses: ["Beef stew", "Curries", "Chili", "Ragù"], previewImg: "StewingMethod.png", temperature: "Low heat", equipment: "Stock pot, Dutch oven", bestFor: "Small meat pieces, hearty dishes",
    tips: ["Cut uniform pieces", "Brown meat first", "Skim fat regularly", "Add vegetables at right time"],
    steps: [ "Brown meat pieces in batches.", "Sauté vegetables in same pot.", "Add liquid and return meat to pot.", "Simmer covered for 1-3 hours.", "Adjust seasoning and serve hot." ]
  }
];

// ==================== 4. CUTTING TECHNIQUES PAGE ====================
const cuttingTechniques = [
  {
    id: 1, name: "Julienne", tagline: "Matchstick-style thin strips", fullDesc: "Julienne is a knife technique that produces thin, matchstick-sized strips of vegetables or fruits. The standard dimensions are 4mm × 4mm × 5-7cm long. It's essential for dishes that require quick cooking and uniform texture.",
    keyUses: ["Stir-fries", "Salads", "Garnishes", "Asian dishes"], previewImg: "JulienneCut.png", knife: "Chef's knife or Santoku",
    tips: ["Keep fingers curled under", "Create planks first, then strips", "Maintain uniform thickness"],
    steps: [ "Wash and peel the vegetable if needed.", "Trim the ends and cut into 5-7 cm long segments.", "Slice the segments into 4 mm thick planks.", "Stack the planks and slice lengthwise into 4 mm thick strips.", "Keep cuts even for uniform matchstick-sized pieces." ]
  },
  {
    id: 2, name: "Brunoise", tagline: "Fine 3mm cubes", fullDesc: "Brunoise is an extremely fine dice cut, typically 3mm × 3mm × 3mm. It's the smallest of the dice cuts and requires precision knife work. Often used for garnishes or ingredients that need to cook quickly or melt into dishes.",
    keyUses: ["Sauces", "Soups", "Garnishes", "Stuffings"], previewImg: "BrunoiseCut.png", knife: "Sharp Chef's knife",
    tips: ["Start with julienne cuts", "Use claw grip for safety", "Keep knife very sharp"],
    steps: [ "Start with julienne-cut vegetables (4mm × 4mm strips).", "Gather the julienne strips into a tight bundle.", "Slice across the bundle at 3mm intervals.", "Keep the pieces as uniform as possible.", "Use a gentle rocking motion for precision cuts." ]
  },
  {
    id: 3, name: "Chiffonade", tagline: "Fine ribbon cuts for leafy greens", fullDesc: "Chiffonade is a technique for cutting leafy herbs and vegetables into thin, ribbon-like strips. Literally meaning 'made of rags' in French, it's perfect for herbs and leafy greens where you want maximum flavor and elegant presentation.",
    keyUses: ["Herb garnishes", "Salads", "Pasta dishes", "Garnishes"], previewImg: "ChiffonadeCut.png", knife: "Chef's knife",
    tips: ["Stack leaves neatly", "Roll tightly before cutting", "Use gentle sawing motion"],
    steps: [ "Wash and thoroughly dry the leaves.", "Stack 5-10 leaves of similar size neatly.", "Roll the stack tightly into a cigar shape.", "Slice across the roll into thin ribbons (1-3mm wide).", "Separate the ribbons gently with your fingers." ]
  },
  {
    id: 4, name: "Dice", tagline: "Uniform cube cuts", fullDesc: "Dicing involves cutting food into uniform cube-shaped pieces. There are different sizes: large dice (20mm), medium dice (12mm), and small dice (6mm). Uniform dicing ensures even cooking and professional presentation.",
    keyUses: ["Sautéing", "Soups", "Stews", "Salads"], previewImg: "DiceCut.png", knife: "Chef's knife",
    tips: ["Create planks then batons", "Maintain consistent pressure", "Use cutting board anchors"],
    steps: [ "Trim and square off the vegetable.", "Slice into uniform planks of desired thickness.", "Stack planks and cut into uniform batons.", "Line up batons and cut into cubes.", "Adjust size based on recipe requirements." ]
  },
  {
    id: 5, name: "Slice", tagline: "Basic cross-sectional cuts", fullDesc: "Slicing is the most fundamental cutting technique, involving cutting food into flat, broad pieces. The thickness can vary from paper-thin to thick slices depending on the recipe requirements.",
    keyUses: ["Sandwiches", "Roasting", "Frying", "Presentation"], previewImg: "SliceCut.png", knife: "Chef's knife or Santoku",
    tips: ["Use rocking motion", "Keep slices even", "Anchor food with flat side down"],
    steps: [ "Create a flat surface by cutting a thin slice off one side.", "Place the flat side down on the cutting board.", "Use claw grip to hold the food securely.", "Slice to desired thickness using a smooth motion.", "Keep slices consistent for even cooking." ]
  },
  {
    id: 6, name: "Mince", tagline: "Finely chopped pieces", fullDesc: "Mincing involves cutting food into very small, irregular pieces that are smaller than a dice. The goal is to create tiny pieces that distribute flavor evenly throughout a dish without being noticeable.",
    keyUses: ["Garlic", "Onions", "Herbs", "Flavor bases"], previewImg: "MinceCut.png", knife: "Chef's knife",
    tips: ["Rock knife back and forth", "Gather and chop repeatedly", "Use curved blade efficiently"],
    steps: [ "Start with finely chopped pieces.", "Place the tip of the knife on the cutting board.", "Rock the knife back and forth while moving across the pile.", "Gather the pieces and repeat the process.", "Continue until desired fineness is achieved." ]
  },
  {
    id: 7, name: "Batonnet", tagline: "Stick-shaped cuts", fullDesc: "Batonnet produces stick-shaped pieces, typically 6mm × 6mm × 5-6cm long. It's larger than julienne and serves as a starting point for medium dice cuts. Perfect for vegetables that will be served as side dishes or in stews.",
    keyUses: ["French fries", "Vegetable sticks", "Stir-fries", "Crudités"], previewImg: "BatonnetCut.png", knife: "Chef's knife",
    tips: ["Trim sides first", "Measure thickness", "Keep consistent length"],
    steps: [ "Trim and square off the vegetable.", "Cut into 5-6cm long segments.", "Slice each segment into 6mm thick planks.", "Stack planks and cut into 6mm thick sticks.", "Maintain uniform size throughout." ]
  },
  {
    id: 8, name: "Tourne", tagline: "Football-shaped decorative cuts", fullDesc: "Tourne (or 'turned') is an advanced knife technique that produces seven-sided, football-shaped pieces. It's a decorative cut used in fine dining to create elegant vegetable presentations that cook evenly.",
    keyUses: ["Fine dining", "Garnishes", "Roasted vegetables", "Special occasions"], previewImg: "TourneCut.png", knife: "Paring knife or tourne knife",
    tips: ["Use small paring knife", "Practice on carrots first", "Maintain seven equal sides"],
    steps: [ "Peel the vegetable and cut into 5cm lengths.", "Hold the vegetable at an angle with your thumb.", "Make a shallow cut along the length, rotating after each cut.", "Create seven equal sides around the vegetable.", "Trim ends for uniform football shapes." ]
  }
];

// ==================== MAPPING TO BEGINNERSGUIDE SCHEMA ====================
const allGuides = [];

// Map bakery tools
toolsData.forEach(item => {
  allGuides.push({
    title: item.name,
    content: item.fullDesc,
    category: 'tools',
    image: item.image,
    video: ''
  });
});
// Map bakery techniques
techniquesData.forEach(item => {
  allGuides.push({
    title: item.name,
    content: item.fullDesc,
    category: 'techniques',
    image: item.image,
    video: ''
  });
});
// Map bakery ingredients
ingredientsData.forEach(item => {
  allGuides.push({
    title: item.name,
    content: item.fullDesc,
    category: 'ingredients',
    image: item.image,
    video: ''
  });
});
// Map bakery temperature
temperatureData.forEach(item => {
  allGuides.push({
    title: item.name,
    content: item.fullDesc,
    category: 'temperature',
    image: item.image,
    video: ''
  });
});
// Map bakery decorating
decoratingData.forEach(item => {
  allGuides.push({
    title: item.name,
    content: item.fullDesc,
    category: 'decorating',
    image: item.image,
    video: ''
  });
});
// Map beginners skill cards
skillCards.forEach(card => {
  allGuides.push({
    title: card.title,
    content: card.features.join(' '),
    category: 'basics',
    image: card.image,
    video: ''
  });
});
// Map cooking methods
cookingMethods.forEach(method => {
  allGuides.push({
    title: method.name,
    content: method.fullDesc,
    category: 'cooking-methods',
    image: method.previewImg,
    video: ''
  });
});
// Map cutting techniques
cuttingTechniques.forEach(tech => {
  allGuides.push({
    title: tech.name,
    content: tech.fullDesc,
    category: 'cutting-techniques',
    image: tech.previewImg,
    video: ''
  });
});

// ==================== MIGRATION FUNCTION ====================
const migrate = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    const admin = await User.findOne({ email: 'admin@chefbot.com' });
    if (!admin) {
      console.error('Admin not found! Please create admin first.');
      process.exit(1);
    }

 

    const guidesToInsert = allGuides.map(g => ({ ...g, createdBy: admin._id }));
    const result = await BeginnersGuide.insertMany(guidesToInsert);
    console.log(`✅ ${result.length} beginners guides inserted.`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

migrate();