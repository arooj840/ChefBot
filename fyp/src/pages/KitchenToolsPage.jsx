import React, { useState } from 'react';
import './KitchenToolsPage.css';
import { useNavigate } from 'react-router-dom';
const KitchenToolsPage = () => {
  // ===== STATES =====
 
  // ===== 1. KITCHEN ESSENTIALS - 8 TOOLS =====
  const kitchenEssentials = [
    {
      id: 1,
      name: "Chef's Knife",
      tagline: "Master tool for precision cutting",
      fullDesc: "The chef's knife handles 90% of kitchen cutting. 8-inch blade ideal for most tasks.",
      keyUses: ["Chopping vegetables", "Slicing meats", "Mincing herbs", "Dicing onions"],
      previewImg: "Chefs.png",
    },
    {
      id: 2,
      name: "Cutting Board",
      tagline: "Safe surface for food prep",
      fullDesc: "Protects knives and counters. Different materials suit different needs. Wood has natural antibacterial properties.",
      keyUses: ["Chopping vegetables", "Slicing meats", "Meal prep", "Dough rolling"],
      previewImg: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400",
    },
    {
      id: 3,
      name: "Mixing Bowls",
      tagline: "Versatile containers for mixing",
      fullDesc: "Nested sets save space. Stainless steel won't absorb odors or stains. Essential for food preparation.",
      keyUses: ["Mixing batters", "Marinating meat", "Storing ingredients", "Kneading dough"],
      previewImg: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400",
    },
    {
      id: 4,
      name: "Cookware Set",
      tagline: "Foundation of kitchen cooking",
      fullDesc: "Quality pans distribute heat evenly. Includes pressure cooker, tawa, karahi, skillet, saucepan, stock pot, dutch oven, and baking dish.",
      keyUses: ["Sautéing vegetables", "Boiling pasta", "Frying eggs", "Making curries"],
      previewImg: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400",
    },
    {
      id: 5,
      name: "Utensil Set",
      tagline: "Tools for cooking and serving",
      fullDesc: "Right tool for each task improves efficiency. Includes wooden spoon, spatula, whisk, tongs, ladle, kitchen shears, slotted spoon, and vegetable peeler.",
      keyUses: ["Stirring sauces", "Flipping pancakes", "Serving food", "Mixing ingredients"],
      previewImg: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400",
    },
    {
      id: 6,
      name: "Crockery Set",
      tagline: "Complete dining essentials",
      fullDesc: "Complete dinnerware set including dinner plates, side plates, soup bowls, cereal bowls, mugs, water glasses, tea cups & saucers, and serving bowls.",
      keyUses: ["Serving meals", "Formal dining", "Everyday use", "Entertaining guests"],
      previewImg: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400",
    },
    {
      id: 7,
      name: "Cutlery Set",
      tagline: "Essential eating utensils",
      fullDesc: "Complete cutlery set including dinner fork, dinner knife, tablespoon, teaspoon, dessert spoon, soup spoon, salad fork, and butter knife.",
      keyUses: ["Eating meals", "Formal dining", "Everyday use", "Entertaining"],
      previewImg: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400",
    },
    {
      id: 8,
      name: "Servingware Set",
      tagline: "Elegant serving essentials",
      fullDesc: "Complete servingware set including serving bowls, platters, gravy boat, butter dish, sugar bowl, creamer, salad bowl with servers, and cake stand.",
      keyUses: ["Serving food", "Entertaining guests", "Special occasions", "Family gatherings"],
      previewImg: "https://images.unsplash.com/photo-1587334994507-9b731baa1e46?auto=format&fit=crop&w=400",
    }
  ];
// ===== 2. STATES (AB USE KARO) =====
  const [selectedTool, setSelectedTool] = useState(kitchenEssentials[0]);  // ✅ AB DEFINED HAI
  const [cookwareTab, setCookwareTab] = useState('types');
  const [crockeryTab, setCrockeryTab] = useState('dining');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // ===== 1. PEHLE STATE ADD KARO =====
const [servingTab, setServingTab] = useState('servingware');  // 👈 YEH ADD KARO
  // ===== 2. KNIVES DATA =====
  const knivesData = [
    {
      id: 1,
      name: "Chef's Knife",
      image: "Chefs.png",
      size: "8-10 inches",
      bestFor: "All-purpose chopping, slicing",
      material: "High-carbon stainless steel",
      price: "$50-$200",
      fullDesc: "The most versatile knife in the kitchen. Perfect for chopping vegetables, slicing meats, and mincing herbs.",
      care: "Hand wash only, sharpen regularly",
      durability: "Lifetime",
      pros: ["Versatile", "Precise cutting", "Comfortable grip", "Multi-purpose"],
      cons: ["Requires sharpening", "Heavy for some", "Expensive"]
    },
    {
      id: 2,
      name: "Paring Knife",
      image: "Paring.png",
      size: "3-4 inches",
      bestFor: "Peeling, precision work",
      material: "Stainless steel",
      price: "$20-$60",
      fullDesc: "Small knife ideal for peeling fruits, deveining shrimp, and other detailed cutting tasks.",
      care: "Hand wash recommended",
      durability: "5-10 years",
      pros: ["Precise", "Easy to handle", "Great for detail work", "Lightweight"],
      cons: ["Limited use", "Small blade", "Not for heavy cutting"]
    },
    {
      id: 3,
      name: "Bread Knife",
      image: "Bread.png",
      size: "8-10 inches",
      bestFor: "Slicing crusty bread",
      material: "Stainless steel with serrated edge",
      price: "$30-$80",
      fullDesc: "Serrated edge easily cuts through crusty bread without crushing it.",
      care: "Hand wash only",
      durability: "5-10 years",
      pros: ["Serrated edge", "Cuts without crushing", "Long blade", "Perfect for bread"],
      cons: ["Difficult to sharpen", "Specific use", "Bulky"]
    },
    {
      id: 4,
      name: "Santoku Knife",
      image: "Santoku.png",
      size: "5-7 inches",
      bestFor: "Japanese-style slicing",
      material: "Japanese steel",
      price: "$60-$150",
      fullDesc: "Japanese-style all-purpose knife with granton edges to prevent food from sticking.",
      care: "Hand wash, regular honing",
      durability: "Lifetime",
      pros: ["Granton edges", "Lightweight", "Precise cuts", "Beautiful design"],
      cons: ["Expensive", "Requires care", "Fragile tip"]
    },
    {
      id: 5,
      name: "Boning Knife",
      image: "Boning.png",
      size: "5-7 inches",
      bestFor: "Removing bones from meat",
      material: "Flexible stainless steel",
      price: "$25-$70",
      fullDesc: "Thin, flexible blade perfect for deboning chicken, fish, and other meats.",
      care: "Hand wash, keep sharp",
      durability: "5-10 years",
      pros: ["Flexible blade", "Precise deboning", "Thin profile", "Great for meat"],
      cons: ["Fragile tip", "Specialized use", "Not for general cutting"]
    },
    {
      id: 6,
      name: "Utility Knife",
      image: "Utility.png",
      size: "4-6 inches",
      bestFor: "Small cutting tasks",
      material: "Stainless steel",
      price: "$15-$45",
      fullDesc: "Mid-sized knife for tasks too small for chef's knife but too large for paring knife.",
      care: "Hand wash recommended",
      durability: "5-10 years",
      pros: ["Versatile", "Mid-size", "Easy to use", "Affordable"],
      cons: ["Not specialized", "Average performance", "Basic steel"]
    },
    {
      id: 7,
      name: "Nakiri Knife",
      image: "Nakiri.png",
      size: "6-7 inches",
      bestFor: "Vegetable chopping",
      material: "Japanese carbon steel",
      price: "$70-$180",
      fullDesc: "Japanese vegetable knife with straight edge for precise chopping.",
      care: "Hand wash, dry immediately",
      durability: "Lifetime",
      pros: ["Straight edge", "Perfect for veggies", "Precise cuts", "Traditional"],
      cons: ["Not for meat", "Requires care", "Expensive", "Rusts easily"]
    }
  ];

  // ===== 3. CUTTING BOARD DATA =====
  const cuttingBoardTypes = [
    {
      id: 1,
      name: "Bamboo",
      image: "BambooBoard.png",
      pros: ["Eco-friendly", "Lightweight", "Naturally antibacterial", "Sustainable"],
      cons: ["Can dull knives faster", "Absorbs moisture", "Not dishwasher safe"],
      bestFor: "General vegetable chopping, fruits, bread",
      care: "Hand wash, oil monthly",
      price: "$20-$50",
      fullDesc: "Bamboo cutting boards are sustainable, lightweight, and naturally antibacterial. Perfect for everyday vegetable prep.",
      durability: "3-5 years"
    },
    {
      id: 2,
      name: "Maple",
      image: "MappleBoard.png",
      pros: ["Durable", "Gentle on knives", "Natural antibacterial", "Self-healing"],
      cons: ["Heavier", "More expensive", "Requires oiling"],
      bestFor: "All-purpose cutting, meat preparation, heavy use",
      care: "Hand wash, oil regularly",
      price: "$50-$150",
      fullDesc: "Hard maple is the gold standard for cutting boards. Durable, self-healing, and gentle on knife edges.",
      durability: "10+ years"
    },
    {
      id: 3,
      name: "Plastic",
      image: "PlasticBoard.png",
      pros: ["Dishwasher safe", "Lightweight", "Affordable", "Color-coded"],
      cons: ["Can harbor bacteria", "Not eco-friendly", "Scratches easily"],
      bestFor: "Raw meat, fish, color-coded use, outdoor cooking",
      care: "Dishwasher safe",
      price: "$10-$30",
      fullDesc: "Plastic boards are affordable and dishwasher safe. Use separate colors for meat, veg, and fish.",
      durability: "1-2 years"
    },
    {
      id: 4,
      name: "Rubber",
      image: "RubberBoard.png",
      pros: ["Self-healing surface", "Gentle on knives", "Non-slip", "Sanitary"],
      cons: ["Heavy", "Can stain", "Expensive"],
      bestFor: "Professional kitchens, heavy use, high-volume prep",
      care: "Hand wash, sanitize regularly",
      price: "$40-$100",
      fullDesc: "Rubber cutting boards are professional-grade with self-healing properties. Extremely gentle on knives.",
      durability: "5-7 years"
    }
  ];

  // ===== 4. MIXING BOWL DATA =====
  const mixingBowlTypes = [
    {
      id: 1,
      name: "Stainless Steel",
      image: "SteelBowl.png",
      pros: ["Durable", "Non-reactive", "Dishwasher safe", "Won't absorb odors", "Lightweight"],
      cons: ["Can be noisy", "Can dent if dropped", "Not microwave safe"],
      bestFor: "Mixing, marinating, storing, baking",
      sizes: "1-5 quart set",
      care: "Dishwasher safe",
      price: "$30-$80",
      fullDesc: "Stainless steel bowls are virtually indestructible, non-reactive, and won't absorb stains or odors.",
      durability: "Lifetime"
    },
    {
      id: 2,
      name: "Glass",
      image: "GlassBowl.png",
      pros: ["Heat-resistant", "Microwave safe", "Easy to clean", "Non-staining", "See-through"],
      cons: ["Can break if dropped", "Heavier", "More expensive"],
      bestFor: "Baking, microwave use, serving, storage",
      sizes: "0.5-4 quart set",
      care: "Dishwasher safe",
      price: "$25-$60",
      fullDesc: "Glass bowls are perfect for microwave use and serving. Non-porous surface won't stain or retain odors.",
      durability: "5-10 years"
    },
    {
      id: 3,
      name: "Ceramic/Porcelain",
      image: "CeramicBowl.png",
      pros: ["Oven-safe", "Stylish appearance", "Non-reactive surface", "Heat retention"],
      cons: ["Can chip or crack", "Heavier", "More expensive", "Bulky"],
      bestFor: "Serving, baking, mixing, table presentation",
      sizes: "Various sizes",
      care: "Hand wash recommended",
      price: "$40-$100",
      fullDesc: "Ceramic bowls are beautiful enough for serving and functional for baking. Excellent heat retention.",
      durability: "10+ years"
    },
    {
      id: 4,
      name: "Plastic",
      image: "PlasticBowl.png",
      pros: ["Lightweight", "Unbreakable", "Affordable", "Color variety", "Nesting"],
      cons: ["Can stain", "Not heat resistant", "Can absorb odors", "Scratches"],
      bestFor: "Everyday mixing, kids use, outdoor cooking, camping",
      sizes: "Set of 3-5",
      care: "Dishwasher safe",
      price: "$15-$40",
      fullDesc: "Plastic bowls are lightweight and unbreakable. Great for kids and outdoor use.",
      durability: "2-3 years"
    },
    {
      id: 5,
      name: "Copper/Silicone",
      image: "CopperBowl.png",
      pros: ["Professional quality", "Flexible rim", "Heat conductive", "Non-slip base", "Elegant"],
      cons: ["Expensive", "Requires special care", "Heavier", "Tarnishes"],
      bestFor: "Professional kitchens, candy making, precise cooking, whipping egg whites",
      sizes: "2-3 quart",
      care: "Hand wash, polish",
      price: "$80-$200",
      fullDesc: "Copper bowls are preferred by professionals for whipping egg whites. Excellent heat conductivity.",
      durability: "Lifetime"
    }
  ];

  // ===== 5. UTENSIL ITEMS DATA =====
  const utensilItems = [
    {
      id: 1,
      name: "Wooden Spoon",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400",
      pros: ["Gentle on cookware", "Doesn't conduct heat", "Natural antibacterial", "Eco-friendly"],
      cons: ["Not dishwasher safe", "Requires oiling", "Can crack", "Absorbs odors"],
      bestFor: "Stirring sauces, mixing batters, non-stick pans",
      material: "Beechwood or bamboo",
      care: "Hand wash, oil monthly",
      price: "$5-$15",
      fullDesc: "Wooden spoons are timeless kitchen tools. They won't scratch non-stick surfaces and don't conduct heat.",
      durability: "5+ years"
    },
    {
      id: 2,
      name: "Spatula (Turner)",
      image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=400",
      pros: ["Flipping food easily", "Thin edge", "Heat resistant", "Flexible"],
      cons: ["Can scratch pans if metal", "Limited use", "Handle can melt"],
      bestFor: "Flipping pancakes, burgers, eggs, cookies",
      material: "Silicone, wood, or metal",
      care: "Dishwasher safe (silicone)",
      price: "$8-$20",
      fullDesc: "Spatulas are essential for flipping and turning foods. Silicone versions are heat-resistant and non-scratch.",
      durability: "3-5 years"
    },
    {
      id: 3,
      name: "Whisk",
      image: "https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&w=400",
      pros: ["Efficient mixing", "Incorporates air", "Various sizes", "Versatile"],
      cons: ["Difficult to clean", "Can splash", "Bulky storage"],
      bestFor: "Beating eggs, mixing sauces, whipping cream, gravies",
      material: "Stainless steel",
      care: "Hand wash recommended",
      price: "$6-$18",
      fullDesc: "Whisks incorporate air into mixtures, making them perfect for fluffy eggs and whipped cream.",
      durability: "5+ years"
    },
    {
      id: 4,
      name: "Tongs",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400",
      pros: ["Secure grip", "Locks for storage", "Heat resistant", "Versatile"],
      cons: ["Can scratch pans", "Spring wears out", "Bulky"],
      bestFor: "Turning meat, serving pasta, grilling, salad tossing",
      material: "Stainless steel with silicone tips",
      care: "Dishwasher safe",
      price: "$10-$25",
      fullDesc: "Tongs are like an extension of your hand. Great for flipping, serving, and gripping hot foods.",
      durability: "5-10 years"
    },
    {
      id: 5,
      name: "Ladle",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400",
      pros: ["Deep bowl", "Long handle", "Easy pouring", "Hook handle"],
      cons: ["Large size", "Only for liquids", "Storage space"],
      bestFor: "Serving soups, stews, sauces, gravies, punch",
      material: "Stainless steel",
      care: "Dishwasher safe",
      price: "$8-$20",
      fullDesc: "Ladles are perfect for serving soups, stews, and sauces. Deep bowl holds plenty of liquid.",
      durability: "10+ years"
    },
    {
      id: 6,
      name: "Kitchen Shears",
      image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400",
      pros: ["Multi-purpose", "Easy to clean", "Dismantle for washing", "Sharp"],
      cons: ["Need sharpening", "Not for heavy-duty", "Rust if wet"],
      bestFor: "Cutting herbs, opening packages, snipping poultry, pizza",
      material: "Stainless steel",
      care: "Hand wash, dry immediately",
      price: "$12-$30",
      fullDesc: "Kitchen shears are incredibly versatile. Use them for herbs, packaging, poultry, and more.",
      durability: "5-10 years"
    },
    {
      id: 7,
      name: "Slotted Spoon",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400",
      pros: ["Drains liquids", "Versatile", "Easy to clean", "Lightweight"],
      cons: ["Food falls through", "Limited capacity", "Not for liquids"],
      bestFor: "Serving vegetables, pasta, fried foods, dumplings",
      material: "Stainless steel",
      care: "Dishwasher safe",
      price: "$7-$18",
      fullDesc: "Slotted spoons drain liquids while serving. Perfect for lifting pasta, vegetables, and fried foods.",
      durability: "10+ years"
    },
    {
      id: 8,
      name: "Vegetable Peeler",
      image: "https://images.unsplash.com/photo-1587334994507-9b731baa1e46?auto=format&fit=crop&w=400",
      pros: ["Easy to use", "Safe", "Thin peels", "Comfortable grip"],
      cons: ["Blunt quickly", "Only for peeling", "Can break"],
      bestFor: "Peeling potatoes, carrots, apples, cucumbers",
      material: "Stainless steel",
      care: "Hand wash",
      price: "$5-$15",
      fullDesc: "Vegetable peelers make quick work of peeling. Swivel blade follows contours of produce.",
      durability: "2-3 years"
    }
  ];

  // ===== 6. COOKWARE TYPES DATA =====
  const cookwareTypes = [
    {
      id: 1,
      name: "Pressure Cooker",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400",
      pros: ["Fast cooking", "Energy saving", "Retains nutrients", "Tenderizes meat"],
      cons: ["Safety concerns", "Learning curve", "Limited recipes", "Bulky"],
      bestFor: "Rice, lentils, beans, stews, tough meats",
      material: "Stainless steel or aluminum",
      capacity: "3-10 liters",
      care: "Hand wash, check gasket",
      price: "$40-$150",
      fullDesc: "Pressure cookers cook food up to 70% faster. Perfect for beans, lentils, and tough cuts of meat.",
      durability: "10+ years"
    },
    {
      id: 2,
      name: "Tawa/Griddle",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400",
      pros: ["Even heating", "Large surface", "Versatile", "No oil needed"],
      cons: ["Storage space", "Heavy", "Seasoning required", "Slow heating"],
      bestFor: "Roti, paratha, pancakes, sandwiches, dosa",
      material: "Cast iron or non-stick",
      diameter: "8-12 inches",
      care: "Season regularly",
      price: "$15-$50",
      fullDesc: "Tawa or griddle is essential for flatbreads. Cast iron versions develop natural non-stick seasoning.",
      durability: "Lifetime"
    },
    {
      id: 3,
      name: "Karahi/Wok",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400",
      pros: ["High heat cooking", "Versatile", "Quick cooking", "Even heating"],
      cons: ["Seasoning required", "Not for slow cooking", "Special care", "Handle gets hot"],
      bestFor: "Stir-frying, deep-frying, Indian curries, noodles",
      material: "Carbon steel, cast iron, or non-stick",
      capacity: "2-5 liters",
      care: "Season before use",
      price: "$25-$80",
      fullDesc: "Karahi or wok is perfect for high-heat cooking. Curved shape allows easy tossing and stirring.",
      durability: "Lifetime"
    },
    {
      id: 4,
      name: "Skillet/Frying Pan",
      image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=400",
      pros: ["Versatile", "Quick heating", "Easy to use", "Non-stick options"],
      cons: ["Limited capacity", "Food can stick", "Requires oil", "Handle gets hot"],
      bestFor: "Sautéing, frying eggs, searing meat, pancakes",
      material: "Non-stick, stainless steel, cast iron",
      diameter: "8-12 inches",
      care: "Varies by material",
      price: "$20-$100",
      fullDesc: "Skillets are the most used pan in the kitchen. Perfect for everyday cooking tasks.",
      durability: "5-10 years"
    },
    {
      id: 5,
      name: "Saucepan",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400",
      pros: ["Even heating", "Pouring spout", "Lid included", "Good for liquids"],
      cons: ["Single purpose", "Limited size", "Can boil over", "Small capacity"],
      bestFor: "Boiling water, making sauces, simmering, rice",
      material: "Stainless steel, non-stick",
      capacity: "1-4 quarts",
      care: "Dishwasher safe",
      price: "$25-$80",
      fullDesc: "Saucepans are essential for liquids and sauces. Perfect size for everyday use.",
      durability: "10+ years"
    },
    {
      id: 6,
      name: "Stock Pot",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400",
      pros: ["Large capacity", "Versatile", "Lid included", "Great for batches"],
      cons: ["Heavy", "Storage space", "Slow heating", "Hard to clean"],
      bestFor: "Soups, stocks, pasta, large batches, canning",
      material: "Stainless steel",
      capacity: "8-20 quarts",
      care: "Dishwasher safe",
      price: "$30-$120",
      fullDesc: "Stock pots are for large quantities. Perfect for soup day and pasta night.",
      durability: "10+ years"
    },
    {
      id: 7,
      name: "Dutch Oven",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400",
      pros: ["Retains heat", "Versatile", "Oven safe", "Beautiful colors"],
      cons: ["Expensive", "Heavy", "Requires seasoning", "Enamel can chip"],
      bestFor: "Braising, stewing, baking bread, slow cooking",
      material: "Enameled cast iron",
      capacity: "4-7 quarts",
      care: "Hand wash, avoid metal utensils",
      price: "$50-$300",
      fullDesc: "Dutch ovens are legendary for their heat retention. One pot does it all.",
      durability: "Lifetime"
    },
    {
      id: 8,
      name: "Baking Dish",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400",
      pros: ["Oven safe", "Even baking", "Serving dish", "Variety of sizes"],
      cons: ["Single purpose", "Can break", "Storage space", "Heavy"],
      bestFor: "Casseroles, lasagna, baked dishes, desserts",
      material: "Glass, ceramic, stoneware",
      sizes: "Various",
      care: "Dishwasher safe",
      price: "$15-$60",
      fullDesc: "Baking dishes go from oven to table. Perfect for family-style meals.",
      durability: "5-10 years"
    }
  ];

  // ===== 7. COOKWARE MATERIALS DATA =====
  const cookwareMaterials = [
    {
      id: 1,
      name: "Stainless Steel",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400",
      pros: ["Durable", "Non-reactive", "Dishwasher safe", "Oven safe", "Professional"],
      cons: ["Food can stick", "Heavier", "Can discolor", "Expensive"],
      bestFor: "All-purpose cooking, professional kitchens, searing",
      care: "Dishwasher safe",
      durability: "Lifetime",
      price: "$$-$$$",
      fullDesc: "Stainless steel is the workhorse of professional kitchens. Durable and non-reactive."
    },
    {
      id: 2,
      name: "Glass",
      image: "https://images.unsplash.com/photo-1576613109753-27804de2cba8?auto=format&fit=crop&w=400",
      pros: ["Heat-resistant", "Microwave safe", "Easy to clean", "Non-staining", "See-through"],
      cons: ["Can break", "Not for stovetop", "Limited use", "Heavy"],
      bestFor: "Baking dishes, microwave use, storage, leftovers",
      care: "Dishwasher safe",
      durability: "5-10 years",
      price: "$-$$",
      fullDesc: "Glass is perfect for baking and storage. Won't stain or retain odors."
    },
    {
      id: 3,
      name: "Non-Stick",
      image: "https://images.unsplash.com/photo-1587334994507-9b731baa1e46?auto=format&fit=crop&w=400",
      pros: ["Easy cleaning", "Less oil needed", "Food doesn't stick", "Lightweight"],
      cons: ["Coating wears off", "Not for high heat", "Scratches easily", "Not oven safe"],
      bestFor: "Eggs, pancakes, delicate foods, low-fat cooking",
      care: "Hand wash, use wooden utensils",
      durability: "2-5 years",
      price: "$-$$",
      fullDesc: "Non-stick pans are perfect for eggs and fish. Easy cleanup but short lifespan."
    },
    {
      id: 4,
      name: "Cast Iron",
      image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400",
      pros: ["Natural non-stick", "Adds iron to food", "Durable", "Oven safe", "Heat retention"],
      cons: ["Heavy", "Requires seasoning", "Rusts easily", "Handle gets hot"],
      bestFor: "High heat cooking, searing, frying, baking, camping",
      care: "Season regularly, dry immediately",
      durability: "Lifetime",
      price: "$$-$$$",
      fullDesc: "Cast iron lasts forever and gets better with age. Adds iron to your food naturally."
    }
  ];

  // ===== 8. CROCKERY ITEMS DATA =====
  const crockeryItems = [
    // DINING SET (5 items)
    {
      id: 1,
      name: "Dinner Plates",
      category: "dining",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400",
      pros: ["Essential", "Various sizes", "Easy to clean", "Stackable"],
      cons: ["Can break", "Storage space", "Sets needed", "Expensive"],
      bestFor: "Main course, formal dining, everyday meals",
      material: "Ceramic, Porcelain",
      care: "Dishwasher safe",
      price: "$5-$25 each",
      fullDesc: "Dinner plates are the foundation of your table setting. Choose durable porcelain for everyday.",
      durability: "5-10 years"
    },
    {
      id: 2,
      name: "Side Plates",
      category: "dining",
      image: "https://images.unsplash.com/photo-1587334994507-9b731baa1e46?auto=format&fit=crop&w=400",
      pros: ["Multi-purpose", "Space saving", "Versatile", "Perfect for bread"],
      cons: ["Small size", "Limited use", "Extra item to store"],
      bestFor: "Salad, bread, snacks, desserts, appetizers",
      material: "Ceramic, Porcelain",
      care: "Dishwasher safe",
      price: "$3-$15 each",
      fullDesc: "Side plates are perfect for bread, salad, and desserts. Great for portion control.",
      durability: "5-10 years"
    },
    {
      id: 3,
      name: "Soup Bowls",
      category: "dining",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400",
      pros: ["Deep design", "Holds liquids", "Wide rim", "Comfortable"],
      cons: ["Limited use", "Storage space", "Can break", "Bulky"],
      bestFor: "Soups, salads, cereals, pasta, ramen",
      material: "Ceramic, Stoneware",
      capacity: "12-20 oz",
      care: "Dishwasher safe",
      price: "$4-$18 each",
      fullDesc: "Soup bowls are deeper than cereal bowls. Perfect for broth-based meals.",
      durability: "5-10 years"
    },
    {
      id: 4,
      name: "Cereal Bowls",
      category: "dining",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400",
      pros: ["Versatile", "Everyday use", "Various sizes", "Stackable"],
      cons: ["Small capacity", "Can chip", "Not for hot liquids"],
      bestFor: "Breakfast cereal, rice, desserts, snacks, oatmeal",
      material: "Ceramic, Melamine",
      capacity: "16-24 oz",
      care: "Dishwasher safe",
      price: "$3-$12 each",
      fullDesc: "Cereal bowls are everyday essentials. Great for breakfast and small meals.",
      durability: "3-5 years"
    },
    {
      id: 5,
      name: "Serving Bowls",
      category: "dining",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400",
      pros: ["Large capacity", "Family style", "Versatile", "Beautiful"],
      cons: ["Heavy", "Storage space", "Can break", "Expensive"],
      bestFor: "Salads, pasta, rice, snacks, family meals, parties",
      material: "Ceramic, Glass, Stoneware",
      capacity: "1-3 quarts",
      care: "Dishwasher safe",
      price: "$10-$35 each",
      fullDesc: "Serving bowls bring the family together. Perfect for sharing meals.",
      durability: "5-10 years"
    },
    
    // TEA SET (4 items)
    {
      id: 6,
      name: "Tea Cups & Saucers",
      category: "tea",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400",
      pros: ["Elegant", "Formal", "Saucer catches spills", "Traditional"],
      cons: ["Fragile", "Small capacity", "Hand wash only", "Expensive"],
      bestFor: "Formal tea, coffee, guests, special occasions",
      material: "Fine porcelain, Bone china",
      capacity: "6-8 oz",
      care: "Hand wash recommended",
      price: "$10-$40 per set",
      fullDesc: "Tea cups and saucers add elegance to any gathering. Perfect for afternoon tea.",
      durability: "10+ years"
    },
    {
      id: 7,
      name: "Mugs",
      category: "tea",
      image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=400",
      pros: ["Heat resistant", "Easy to hold", "Microwave safe", "Large capacity"],
      cons: ["Can stain", "Bulky storage", "Can break"],
      bestFor: "Tea, coffee, hot chocolate, soups, hot drinks",
      material: "Ceramic, Stoneware",
      capacity: "10-16 oz",
      care: "Dishwasher safe",
      price: "$5-$20 each",
      fullDesc: "Mugs are everyday essentials. Perfect for your morning coffee or evening tea.",
      durability: "5-10 years"
    },
    {
      id: 8,
      name: "Sugar Bowl",
      category: "tea",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400",
      pros: ["Keeps sugar dry", "With lid", "Easy to use", "Elegant"],
      cons: ["Small size", "Needs refilling", "Lid can break"],
      bestFor: "Sugar, sweeteners, powdered spices, coffee service",
      material: "Ceramic, Porcelain",
      capacity: "8-12 oz",
      care: "Dishwasher safe",
      price: "$8-$20",
      fullDesc: "Sugar bowls keep your sugar fresh and dry. Perfect for coffee and tea service.",
      durability: "5-10 years"
    },
    {
      id: 9,
      name: "Creamer",
      category: "tea",
      image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=400",
      pros: ["Pouring spout", "Keeps milk fresh", "Elegant", "Easy pouring"],
      cons: ["Small capacity", "Needs frequent cleaning", "Can chip"],
      bestFor: "Milk, cream, liquid toppings, coffee service",
      material: "Ceramic, Glass",
      capacity: "6-10 oz",
      care: "Dishwasher safe",
      price: "$6-$18",
      fullDesc: "Creamers complete your tea set. No more milk cartons on the table.",
      durability: "5-10 years"
    },
    
    // WATER SET (3 items)
    {
      id: 10,
      name: "Water Glasses",
      category: "water",
      image: "https://images.unsplash.com/photo-1576613109753-27804de2cba8?auto=format&fit=crop&w=400",
      pros: ["Clear view", "Easy to clean", "Durable", "Classic"],
      cons: ["Can break", "Heavy", "Water spots"],
      bestFor: "Water, juices, cold beverages, everyday use",
      material: "Glass",
      capacity: "10-16 oz",
      care: "Dishwasher safe",
      price: "$2-$10 each",
      fullDesc: "Simple, elegant water glasses for everyday hydration.",
      durability: "3-5 years"
    },
    {
      id: 11,
      name: "Juice Glasses",
      category: "water",
      image: "https://images.unsplash.com/photo-1576613109753-27804de2cba8?auto=format&fit=crop&w=400",
      pros: ["Smaller size", "Perfect for juices", "Stackable", "Lightweight"],
      cons: ["Small capacity", "Can break", "Easy to tip"],
      bestFor: "Juices, soft drinks, kids meals, shots",
      material: "Glass",
      capacity: "6-8 oz",
      care: "Dishwasher safe",
      price: "$1-$6 each",
      fullDesc: "Small glasses perfect for morning juice or kids' drinks.",
      durability: "3-5 years"
    },
    {
      id: 12,
      name: "Pitcher",
      category: "water",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400",
      pros: ["Large capacity", "Easy pouring", "Keeps drinks cold", "Perfect for parties"],
      cons: ["Bulky", "Storage space", "Can break", "Heavy when full"],
      bestFor: "Serving water, juices, iced tea, lemonade, parties",
      material: "Glass, Plastic",
      capacity: "1-2 liters",
      care: "Dishwasher safe",
      price: "$10-$30",
      fullDesc: "Pitchers are essential for serving drinks to family and guests.",
      durability: "3-5 years"
    }
  ];

  // ===== 9. CUTLERY ITEMS DATA =====
  const cutleryItems = [
    {
      id: 1,
      name: "Dinner Fork",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400",
      pros: ["Essential", "Versatile", "Easy to clean", "Comfortable"],
      cons: ["Food can get stuck", "Can bend if cheap", "Prongs break"],
      bestFor: "Main course, salads, pasta, everyday meals",
      material: "Stainless steel",
      length: "7-8 inches",
      care: "Dishwasher safe",
      price: "$2-$8 each",
      fullDesc: "The dinner fork is your most-used utensil. Invest in quality stainless steel.",
      durability: "10+ years"
    },
    {
      id: 2,
      name: "Dinner Knife",
      image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400",
      pros: ["Sharp edge", "Essential cutting", "Durable", "Serrated options"],
      cons: ["Needs sharpening", "Safety with kids", "Can rust"],
      bestFor: "Cutting meat, vegetables, spreading butter",
      material: "Stainless steel",
      length: "8-9 inches",
      care: "Dishwasher safe",
      price: "$3-$10 each",
      fullDesc: "Dinner knives should be sharp enough to cut meat but safe for everyday use.",
      durability: "10+ years"
    },
    {
      id: 3,
      name: "Tablespoon",
      image: "https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&w=400",
      pros: ["Multi-purpose", "Serving size", "Measuring tool", "Strong"],
      cons: ["Too large for some", "Not for fine dining", "Heavy"],
      bestFor: "Serving food, measuring, eating main course, soup",
      material: "Stainless steel",
      length: "6-7 inches",
      care: "Dishwasher safe",
      price: "$2-$6 each",
      fullDesc: "Tablespoons are larger than teaspoons. Great for serving and eating.",
      durability: "10+ years"
    },
    {
      id: 4,
      name: "Teaspoon",
      image: "https://images.unsplash.com/photo-1587334994507-9b731baa1e46?auto=format&fit=crop&w=400",
      pros: ["Perfect size", "Versatile", "Easy to handle", "Essential"],
      cons: ["Too small for some", "Can get lost", "Bends easily"],
      bestFor: "Tea/coffee stirring, desserts, small portions, medicine",
      material: "Stainless steel",
      length: "5-6 inches",
      care: "Dishwasher safe",
      price: "$1-$5 each",
      fullDesc: "Teaspoons are for stirring coffee and eating desserts. Every kitchen needs many.",
      durability: "10+ years"
    },
    {
      id: 5,
      name: "Dessert Spoon",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400",
      pros: ["Perfect dessert size", "Elegant design", "Versatile", "Comfortable"],
      cons: ["Limited use", "Specialized", "Not for main course"],
      bestFor: "Desserts, cereals, ice cream, pudding",
      material: "Stainless steel",
      length: "6-7 inches",
      care: "Dishwasher safe",
      price: "$2-$7 each",
      fullDesc: "Dessert spoons are smaller than tablespoons. Perfect for sweets and cereals.",
      durability: "10+ years"
    },
    {
      id: 6,
      name: "Soup Spoon",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400",
      pros: ["Round bowl", "Holds liquids", "Comfortable grip", "Deep"],
      cons: ["Single purpose", "Large size", "Bulky storage"],
      bestFor: "Soups, stews, broth, liquid foods",
      material: "Stainless steel",
      length: "6-7 inches",
      care: "Dishwasher safe",
      price: "$2-$7 each",
      fullDesc: "Soup spoons have a round bowl to hold more liquid. Essential for soup lovers.",
      durability: "10+ years"
    },
    {
      id: 7,
      name: "Salad Fork",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400",
      pros: ["Smaller size", "Perfect for salads", "Lightweight", "Elegant"],
      cons: ["Limited use", "Similar to dinner fork", "Extra item"],
      bestFor: "Salads, appetizers, desserts, pasta",
      material: "Stainless steel",
      length: "6-7 inches",
      care: "Dishwasher safe",
      price: "$2-$6 each",
      fullDesc: "Salad forks are slightly smaller than dinner forks. Perfect for first courses.",
      durability: "10+ years"
    },
    {
      id: 8,
      name: "Butter Knife",
      image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=400",
      pros: ["Rounded edge", "Safe to use", "Spreading tool", "Blunt tip"],
      cons: ["Not for cutting", "Limited function", "Small"],
      bestFor: "Spreading butter, jams, soft cheeses, condiments",
      material: "Stainless steel",
      length: "6-7 inches",
      care: "Dishwasher safe",
      price: "$2-$6 each",
      fullDesc: "Butter knives have rounded tips for safe spreading. Essential for breakfast.",
      durability: "10+ years"
    }
  ];

  // ===== 10. SERVINGWARE ITEMS DATA =====
  const servingwareItems = [
    {
      id: 1,
      name: "Serving Bowls",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400",
      pros: ["Large capacity", "Family style", "Various sizes", "Beautiful"],
      cons: ["Storage space", "Can break", "Heavy", "Expensive"],
      bestFor: "Salads, pasta, rice, snacks, family meals",
      material: "Ceramic, Glass, Stoneware",
      capacity: "1-3 quarts",
      care: "Dishwasher safe",
      price: "$10-$35",
      fullDesc: "Serving bowls bring the family together. Perfect for sharing meals.",
      durability: "5-10 years"
    },
    {
      id: 2,
      name: "Platters",
      image: "https://images.unsplash.com/photo-1587334994507-9b731baa1e46?auto=format&fit=crop&w=400",
      pros: ["Large surface", "Elegant presentation", "Versatile", "Beautiful"],
      cons: ["Bulky", "Difficult to store", "Fragile", "Heavy"],
      bestFor: "Meat, biryani, roasts, cheese boards, appetizers",
      material: "Ceramic, Porcelain, Glass",
      sizes: "12-16 inches",
      care: "Hand wash recommended",
      price: "$15-$50",
      fullDesc: "Platters make your food look special. Perfect for entertaining.",
      durability: "5-10 years"
    },
    {
      id: 3,
      name: "Gravy Boat",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400",
      pros: ["Easy pouring", "Lid keeps warm", "Elegant design", "No drips"],
      cons: ["Single purpose", "Storage space", "Can break", "Small"],
      bestFor: "Gravies, sauces, dressings, syrup",
      material: "Ceramic, Porcelain",
      capacity: "12-16 oz",
      care: "Hand wash recommended",
      price: "$10-$25",
      fullDesc: "Gravy boats make serving sauces mess-free. Essential for holiday meals.",
      durability: "10+ years"
    },
    {
      id: 4,
      name: "Butter Dish",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400",
      pros: ["Keeps butter fresh", "Covered design", "Elegant", "Protects"],
      cons: ["Small capacity", "Needs cleaning", "Lid can break"],
      bestFor: "Butter, ghee, spreads, margarine",
      material: "Ceramic, Glass",
      capacity: "4-8 oz",
      care: "Dishwasher safe",
      price: "$8-$20",
      fullDesc: "Butter dishes keep your butter fresh and spreadable. No more wrapper mess.",
      durability: "5-10 years"
    },
    {
      id: 5,
      name: "Sugar Bowl",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400",
      pros: ["Keeps sugar dry", "With lid", "Easy to use", "Elegant"],
      cons: ["Small size", "Needs refilling", "Lid can break"],
      bestFor: "Sugar, sweeteners, powdered spices, coffee service",
      material: "Ceramic, Porcelain",
      capacity: "8-12 oz",
      care: "Dishwasher safe",
      price: "$8-$20",
      fullDesc: "Sugar bowls keep your sugar fresh and dry. Perfect for coffee and tea service.",
      durability: "5-10 years"
    },
    {
      id: 6,
      name: "Creamer",
      image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=400",
      pros: ["Pouring spout", "Keeps milk fresh", "Elegant", "Easy pouring"],
      cons: ["Small capacity", "Needs frequent cleaning", "Can chip"],
      bestFor: "Milk, cream, liquid toppings, coffee service",
      material: "Ceramic, Glass",
      capacity: "6-10 oz",
      care: "Dishwasher safe",
      price: "$6-$18",
      fullDesc: "Creamers complete your table setting. No more milk cartons on the table.",
      durability: "5-10 years"
    },
    {
      id: 7,
      name: "Salad Bowl with Servers",
      image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400",
      pros: ["Complete set", "Includes servers", "Large size", "Beautiful"],
      cons: ["Bulky", "Difficult to store", "Multiple pieces", "Expensive"],
      bestFor: "Salads, fresh vegetables, fruits, party food",
      material: "Wood, Glass, Ceramic",
      capacity: "2-4 quarts",
      care: "Hand wash",
      price: "$20-$60",
      fullDesc: "Salad bowls with servers make tossing and serving salads easy and elegant.",
      durability: "5-10 years"
    },
    {
      id: 8,
      name: "Cake Stand",
      image: "https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&w=400",
      pros: ["Elevated display", "Elegant", "Centerpiece", "Beautiful"],
      cons: ["Single purpose", "Storage space", "Fragile", "Expensive"],
      bestFor: "Cakes, desserts, pastries, cupcakes, tiered treats",
      material: "Glass, Ceramic, Metal",
      diameter: "10-12 inches",
      care: "Hand wash",
      price: "$15-$45",
      fullDesc: "Cake stands turn desserts into centerpieces. Perfect for birthdays and parties.",
      durability: "10+ years"
    }
  ];

  // ===== 11. SERVING CUTLERY COLLECTION =====
  const servingCutleryItem = {
    id: 1,
    name: "Serving Cutlery Collection",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400",
    pros: ["Complete serving set", "Various types", "Elegant presentation", "Essential for parties"],
    cons: ["Multiple pieces", "Storage space", "Needs regular cleaning", "Expensive"],
    bestFor: "Serving food at parties, family gatherings, special occasions, buffets",
    description: "Includes serving spoons (large, slotted, solid), serving forks, serving tongs, serving ladles, pie servers, cake slicers, and cheese knives.",
    material: "Stainless steel",
    care: "Hand wash recommended",
    price: "$30-$80",
    fullDesc: "A complete serving cutlery set for all your entertaining needs. Everything you need to serve guests elegantly.",
    durability: "10+ years"
  };

  // ===== HELPER FUNCTIONS =====
  const getKnifeCardClass = (knifeName) => {
    const name = knifeName.toLowerCase();
    if (name.includes('chef')) return 'chef';
    if (name.includes('paring')) return 'paring';
    if (name.includes('bread')) return 'bread';
    if (name.includes('santoku')) return 'santoku';
    if (name.includes('boning')) return 'boning';
    if (name.includes('utility')) return 'utility';
    if (name.includes('nakiri')) return 'nakiri';
    return '';
  };

  const getBoardCardClass = (boardName) => {
    const name = boardName.toLowerCase();
    if (name.includes('bamboo')) return 'board-bamboo';
    if (name.includes('maple')) return 'board-maple';
    if (name.includes('plastic')) return 'board-plastic';
    if (name.includes('rubber')) return 'board-rubber';
    return '';
  };

  const getBowlCardClass = (bowlName) => {
    const name = bowlName.toLowerCase();
    if (name.includes('stainless')) return 'bowl-steel';
    if (name.includes('glass')) return 'bowl-glass';
    if (name.includes('ceramic') || name.includes('porcelain')) return 'bowl-ceramic';
    if (name.includes('plastic')) return 'bowl-plastic';
    if (name.includes('copper') || name.includes('silicone')) return 'bowl-copper';
    return '';
  };

  const getUtensilCardClass = (utensilName) => {
    const name = utensilName.toLowerCase();
    if (name.includes('wooden') || name.includes('spoon')) return 'utensil-wooden';
    if (name.includes('spatula')) return 'utensil-spatula';
    if (name.includes('whisk')) return 'utensil-whisk';
    if (name.includes('tongs')) return 'utensil-tongs';
    if (name.includes('ladle')) return 'utensil-ladle';
    if (name.includes('shears') || name.includes('scissors')) return 'utensil-shears';
    if (name.includes('slotted')) return 'utensil-slotted';
    if (name.includes('peeler')) return 'utensil-peeler';
    return '';
  };

  const getCookwareTypeClass = (cookwareName) => {
    const name = cookwareName.toLowerCase();
    if (name.includes('pressure')) return 'cookware-pressure';
    if (name.includes('tawa') || name.includes('griddle')) return 'cookware-tawa';
    if (name.includes('karahi') || name.includes('wok')) return 'cookware-karahi';
    if (name.includes('skillet') || name.includes('frying')) return 'cookware-skillet';
    if (name.includes('saucepan')) return 'cookware-saucepan';
    if (name.includes('stock')) return 'cookware-stock';
    if (name.includes('dutch')) return 'cookware-dutch';
    if (name.includes('baking')) return 'cookware-baking';
    return '';
  };

  const getCookwareMaterialClass = (materialName) => {
    const name = materialName.toLowerCase();
    if (name.includes('stainless')) return 'cookware-steel';
    if (name.includes('glass')) return 'cookware-glass';
    if (name.includes('non-stick')) return 'cookware-nonstick';
    if (name.includes('iron') || name.includes('cast')) return 'cookware-iron';
    return '';
  };

  const getCrockeryCardClass = (crockeryName) => {
    const name = crockeryName.toLowerCase();
    if (name.includes('dinner') && name.includes('plate')) return 'crockery-dinner';
    if (name.includes('side')) return 'crockery-side';
    if (name.includes('soup')) return 'crockery-soup';
    if (name.includes('cereal')) return 'crockery-cereal';
    if (name.includes('mug')) return 'crockery-mug';
    if (name.includes('water') && name.includes('glass')) return 'crockery-water';
    if (name.includes('juice')) return 'crockery-juice';
    if (name.includes('pitcher')) return 'crockery-pitcher';
    if (name.includes('tea') && name.includes('cup')) return 'crockery-tea';
    if (name.includes('sugar')) return 'crockery-sugar';
    if (name.includes('creamer')) return 'crockery-creamer';
    if (name.includes('serving') && name.includes('bowl')) return 'crockery-serving';
    return '';
  };

  const getCutleryCardClass = (cutleryName) => {
    const name = cutleryName.toLowerCase();
    if (name.includes('dinner') && name.includes('fork')) return 'cutlery-dinner-fork';
    if (name.includes('dinner') && name.includes('knife')) return 'cutlery-dinner-knife';
    if (name.includes('tablespoon')) return 'cutlery-tablespoon';
    if (name.includes('teaspoon')) return 'cutlery-teaspoon';
    if (name.includes('dessert')) return 'cutlery-dessert';
    if (name.includes('soup')) return 'cutlery-soup';
    if (name.includes('salad')) return 'cutlery-salad';
    if (name.includes('butter')) return 'cutlery-butter';
    return '';
  };

  const getServingwareCardClass = (servingwareName) => {
    const name = servingwareName.toLowerCase();
    if (name.includes('serving') && name.includes('bowl')) return 'servingware-bowl';
    if (name.includes('platter')) return 'servingware-platter';
    if (name.includes('gravy')) return 'servingware-gravy';
    if (name.includes('butter') && name.includes('dish')) return 'servingware-butter';
    if (name.includes('sugar')) return 'servingware-sugar';
    if (name.includes('creamer')) return 'servingware-creamer';
    if (name.includes('salad') && name.includes('bowl')) return 'servingware-salad';
    if (name.includes('cake')) return 'servingware-cake';
    return '';
  };

  // Filter crockery items by category
  const getFilteredCrockery = () => {
    if (crockeryTab === 'dining') {
      return crockeryItems.filter(item => item.category === 'dining');
    } else if (crockeryTab === 'tea') {
      return crockeryItems.filter(item => item.category === 'tea');
    } else if (crockeryTab === 'water') {
      return crockeryItems.filter(item => item.category === 'water');
    }
    return [];
  };

  // Open modal with selected item
  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="ktp-container">
      <div className="ktp-layout">
        {/* ===== SIDEBAR ===== */}
        <aside className="ktp-sidebar">
          <div className="ktp-sidebar-header">
            <h2 className="ktp-sidebar-title">Kitchen Tools</h2>
            <p className="ktp-sidebar-subtitle">Essential Equipment</p>
          </div>

          <div className="ktp-sidebar-tools">
            <ul className="ktp-tools-list">
              {kitchenEssentials.map(tool => (
                <li
                  key={tool.id}
                  className={`ktp-tool-list-item ${selectedTool?.id === tool.id ? 'ktp-active' : ''}`}
                  onClick={() => setSelectedTool(tool)}
                >
                  <span className="ktp-tool-list-name">{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ===== MAIN CONTENT - RIGHT SIDE ===== */}
        <main className="ktp-main">
          <header className="ktp-main-header">
            <div className="ktp-header-content">
              <h1 className="ktp-page-title">{selectedTool.name}</h1>
              <p className="ktp-page-description">{selectedTool.tagline}</p>
            </div>
          </header>

          {/* ===== CONTENT BASED ON SELECTED TOOL ===== */}
          <div className="ktp-content-area">
            
            {/* ----- 1. CHEF'S KNIFE - KNIVES ----- */}
            {selectedTool.name === "Chef's Knife" && (
              <div className="ktp-knives-section">
                <h3 className="ktp-section-heading">Kitchen Knives (7)</h3>
                <div className="ktp-cards-grid">
                  {knivesData.map((knife) => (
                    <div 
                      key={knife.id} 
                      className={`ktp-card ktp-knife-card ${getKnifeCardClass(knife.name)}`}
                      onClick={() => openModal({...knife, type: 'knife', category: 'Knife'})}
                    >
                      <div className="ktp-card-image" style={{ backgroundImage: `url(${knife.image})` }}></div>
                      <div className="ktp-card-content">
                        <h4 className="ktp-card-title">{knife.name}</h4>
                        <div className="ktp-card-size">{knife.size}</div>
                        <div className="ktp-card-best">{knife.bestFor}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ----- 2. CUTTING BOARD - BOARDS ----- */}
            {selectedTool.name === "Cutting Board" && (
              <div className="ktp-boards-section">
                <h3 className="ktp-section-heading">Cutting Boards (4)</h3>
                <div className="ktp-cards-grid">
                  {cuttingBoardTypes.map((board) => (
                    <div 
                      key={board.id} 
                      className={`ktp-card ktp-board-card ${getBoardCardClass(board.name)}`}
                      onClick={() => openModal({...board, type: 'board', category: 'Cutting Board'})}
                    >
                      <div className="ktp-card-image" style={{ backgroundImage: `url(${board.image})` }}></div>
                      <div className="ktp-card-content">
                        <h4 className="ktp-card-title">{board.name}</h4>
                        <div className="ktp-card-material">{board.bestFor}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ----- 3. MIXING BOWLS - BOWLS ----- */}
            {selectedTool.name === "Mixing Bowls" && (
              <div className="ktp-bowls-section">
                <h3 className="ktp-section-heading">Mixing Bowls (5)</h3>
                <div className="ktp-cards-grid">
                  {mixingBowlTypes.map((bowl) => (
                    <div 
                      key={bowl.id} 
                      className={`ktp-card ktp-bowl-card ${getBowlCardClass(bowl.name)}`}
                      onClick={() => openModal({...bowl, type: 'bowl', category: 'Mixing Bowl'})}
                    >
                      <div className="ktp-card-image" style={{ backgroundImage: `url(${bowl.image})` }}></div>
                      <div className="ktp-card-content">
                        <h4 className="ktp-card-title">{bowl.name}</h4>
                        <div className="ktp-card-material">{bowl.sizes}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ----- 4. UTENSIL SET - UTENSILS ----- */}
            {selectedTool.name === "Utensil Set" && (
              <div className="ktp-utensils-section">
                <h3 className="ktp-section-heading">Kitchen Utensils (8)</h3>
                <div className="ktp-cards-grid">
                  {utensilItems.map((utensil) => (
                    <div 
                      key={utensil.id} 
                      className={`ktp-card ktp-utensil-card ${getUtensilCardClass(utensil.name)}`}
                      onClick={() => openModal({...utensil, type: 'utensil', category: 'Utensil'})}
                    >
                      <div className="ktp-card-image" style={{ backgroundImage: `url(${utensil.image})` }}></div>
                      <div className="ktp-card-content">
                        <h4 className="ktp-card-title">{utensil.name}</h4>
                        <div className="ktp-card-material">{utensil.material}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ----- 5. COOKWARE SET - TYPES + MATERIALS (TABS) ----- */}
            {selectedTool.name === "Cookware Set" && (
              <div className="ktp-cookware-section">
                {/* TABS */}
                <div className="ktp-tabs">
                  <button 
                    className={`ktp-tab ${cookwareTab === 'types' ? 'ktp-tab-active' : ''}`}
                    onClick={() => setCookwareTab('types')}
                  >
                    Cookware Types (8)
                  </button>
                  <button 
                    className={`ktp-tab ${cookwareTab === 'materials' ? 'ktp-tab-active' : ''}`}
                    onClick={() => setCookwareTab('materials')}
                  >
                    Cookware Materials (4)
                  </button>
                </div>

                {/* TYPES CONTENT */}
                {cookwareTab === 'types' && (
                  <div className="ktp-cookware-types-section">
                    <div className="ktp-cards-grid">
                      {cookwareTypes.map((item) => (
                        <div 
                          key={item.id} 
                          className={`ktp-card ktp-cookware-type-card ${getCookwareTypeClass(item.name)}`}
                          onClick={() => openModal({...item, type: 'cookware-type', category: 'Cookware'})}
                        >
                          <div className="ktp-card-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                          <div className="ktp-card-content">
                            <h4 className="ktp-card-title">{item.name}</h4>
                            <div className="ktp-card-material">{item.material}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* MATERIALS CONTENT */}
                {cookwareTab === 'materials' && (
                  <div className="ktp-cookware-materials-section">
                    <div className="ktp-cards-grid">
                      {cookwareMaterials.map((item) => (
                        <div 
                          key={item.id} 
                          className={`ktp-card ktp-cookware-material-card ${getCookwareMaterialClass(item.name)}`}
                          onClick={() => openModal({...item, type: 'cookware-material', category: 'Cookware Material'})}
                        >
                          <div className="ktp-card-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                          <div className="ktp-card-content">
                            <h4 className="ktp-card-title">{item.name}</h4>
                            <div className="ktp-card-material">{item.durability}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ----- 6. CROCKERY SET - DINING, TEA, WATER (TABS) ----- */}
            {selectedTool.name === "Crockery Set" && (
              <div className="ktp-crockery-section">
                {/* TABS */}
                <div className="ktp-tabs">
                  <button 
                    className={`ktp-tab ${crockeryTab === 'dining' ? 'ktp-tab-active' : ''}`}
                    onClick={() => setCrockeryTab('dining')}
                  >
                    Dining Set (5)
                  </button>
                  <button 
                    className={`ktp-tab ${crockeryTab === 'tea' ? 'ktp-tab-active' : ''}`}
                    onClick={() => setCrockeryTab('tea')}
                  >
                    Tea Set (4)
                  </button>
                  <button 
                    className={`ktp-tab ${crockeryTab === 'water' ? 'ktp-tab-active' : ''}`}
                    onClick={() => setCrockeryTab('water')}
                  >
                    Water Set (3)
                  </button>
                </div>

                {/* FILTERED CROCKERY CARDS */}
                <div className="ktp-crockery-items-section">
                  <div className="ktp-cards-grid">
                    {getFilteredCrockery().map((item) => (
                      <div 
                        key={item.id} 
                        className={`ktp-card ktp-crockery-card ${getCrockeryCardClass(item.name)}`}
                        onClick={() => openModal({...item, type: 'crockery', category: 'Crockery'})}
                      >
                        <div className="ktp-card-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                        <div className="ktp-card-content">
                          <h4 className="ktp-card-title">{item.name}</h4>
                          <div className="ktp-card-material">{item.material}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ----- 7. CUTLERY SET - CUTLERY ----- */}
            {selectedTool.name === "Cutlery Set" && (
              <div className="ktp-cutlery-section">
                <h3 className="ktp-section-heading">Cutlery (8)</h3>
                <div className="ktp-cards-grid">
                  {cutleryItems.map((item) => (
                    <div 
                      key={item.id} 
                      className={`ktp-card ktp-cutlery-card ${getCutleryCardClass(item.name)}`}
                      onClick={() => openModal({...item, type: 'cutlery', category: 'Cutlery'})}
                    >
                      <div className="ktp-card-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                      <div className="ktp-card-content">
                        <h4 className="ktp-card-title">{item.name}</h4>
                        <div className="ktp-card-material">{item.material}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ----- 8. SERVINGWARE SET - SERVINGWARE ----- */}
            {selectedTool.name === "Servingware Set" && (
              <div className="ktp-servingware-section">
                {/* TABS */}
                <div className="ktp-tabs">
                  <button 
                    className={`ktp-tab ${servingTab === 'servingware' ? 'ktp-tab-active' : ''}`}
                    onClick={() => setServingTab('servingware')}
                  >
                    Servingware (8)
                  </button>
                  <button 
                    className={`ktp-tab ${servingTab === 'cutlery' ? 'ktp-tab-active' : ''}`}
                    onClick={() => setServingTab('cutlery')}
                  >
                    Serving Cutlery (1)
                  </button>
                </div>

                {/* SERVINGWARE ITEMS (8) */}
                {servingTab === 'servingware' && (
                  <div className="ktp-servingware-items-section">
                    <div className="ktp-cards-grid">
                      {servingwareItems.map((item) => (
                        <div 
                          key={item.id} 
                          className={`ktp-card ktp-servingware-card ${getServingwareCardClass(item.name)}`}
                          onClick={() => openModal({...item, type: 'servingware', category: 'Servingware'})}
                        >
                          <div className="ktp-card-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                          <div className="ktp-card-content">
                            <h4 className="ktp-card-title">{item.name}</h4>
                            <div className="ktp-card-material">{item.capacity || item.sizes || item.diameter}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SERVING CUTLERY (1) */}
                {servingTab === 'cutlery' && (
                  <div className="ktp-serving-cutlery-section">
                    <div className="ktp-cards-grid">
                      <div 
                        className="ktp-card ktp-serving-cutlery-card"
                        onClick={() => openModal({...servingCutleryItem, type: 'serving-cutlery', category: 'Serving Cutlery'})}
                      >
                        <div className="ktp-card-image" style={{ backgroundImage: `url(${servingCutleryItem.image})` }}></div>
                        <div className="ktp-card-content">
                          <h4 className="ktp-card-title">{servingCutleryItem.name}</h4>
                          <div className="ktp-card-material">Complete Set</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* ===== MODAL - RIGHT IMAGE, LEFT SCROLLABLE CONTENT ===== */}
      {showModal && selectedItem && (
        <div className="ktp-modal-overlay" onClick={closeModal}>
          <div className="ktp-modal" onClick={(e) => e.stopPropagation()}>
            <button className="ktp-modal-close" onClick={closeModal}>×</button>
            
            <div className="ktp-modal-content">
              {/* LEFT SIDE - SCROLLABLE CONTENT (70%) */}
              <div className="ktp-modal-left">
                <div className="ktp-modal-title">
                  <h2>{selectedItem.name}</h2>
                  {selectedItem.bestFor && (
                    <p className="ktp-modal-subtitle">{selectedItem.bestFor}</p>
                  )}
                </div>

                {/* QUICK SPECS BADGES - HORIZONTAL ROW */}
                <div className="ktp-quick-specs">
                  {selectedItem.price && (
                    <span className="ktp-spec-badge price">💰 {selectedItem.price}</span>
                  )}
                  {selectedItem.size && (
                    <span className="ktp-spec-badge">📏 {selectedItem.size}</span>
                  )}
                  {selectedItem.material && (
                    <span className="ktp-spec-badge">⚙️ {selectedItem.material}</span>
                  )}
                  {selectedItem.capacity && (
                    <span className="ktp-spec-badge">📦 {selectedItem.capacity}</span>
                  )}
                  {selectedItem.durability && (
                    <span className="ktp-spec-badge">⏳ {selectedItem.durability}</span>
                  )}
                </div>

                {/* FULL DESCRIPTION */}
                {selectedItem.fullDesc && (
                  <div className="ktp-modal-description">
                    <h3>📝 Description</h3>
                    <p>{selectedItem.fullDesc}</p>
                  </div>
                )}

                {/* PROS & CONS - HORIZONTAL ROWS */}
                {selectedItem.pros && selectedItem.pros.length > 0 && (
                  <div className="ktp-pros-cons-section">
                    <h3>⭐ Pros & Cons</h3>
                    <div className="ktp-pros-row">
                      {selectedItem.pros.map((pro, index) => (
                        <span key={index} className="ktp-pros-badge">✓ {pro}</span>
                      ))}
                    </div>
                    <div className="ktp-cons-row">
                      {selectedItem.cons.map((con, index) => (
                        <span key={index} className="ktp-cons-badge">✗ {con}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* KEY USES (FOR KNIVES, ETC) */}
                {selectedItem.keyUses && (
                  <div className="ktp-key-uses">
                    <h3>🔪 Common Uses</h3>
                    <div className="ktp-uses-row">
                      {selectedItem.keyUses.map((use, index) => (
                        <span key={index} className="ktp-use-badge">• {use}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CARE INSTRUCTIONS */}
                {selectedItem.care && (
                  <div className="ktp-care-section">
                    <h3>🧼 Care & Maintenance</h3>
                    <p>{selectedItem.care}</p>
                  </div>
                )}

                {/* ADDITIONAL DETAILS */}
                <div className="ktp-additional-details">
                  {selectedItem.sizes && !selectedItem.capacity && (
                    <p><strong>Sizes:</strong> {selectedItem.sizes}</p>
                  )}
                  {selectedItem.diameter && (
                    <p><strong>Diameter:</strong> {selectedItem.diameter}</p>
                  )}
                  {selectedItem.length && (
                    <p><strong>Length:</strong> {selectedItem.length}</p>
                  )}
                  {selectedItem.description && (
                    <p><strong>Includes:</strong> {selectedItem.description}</p>
                  )}
                </div>

                {/* VIEW DETAILS BUTTON */}
                <button className="ktp-view-details-btn">View Full Specifications →</button>
              </div>

              {/* RIGHT SIDE - FIXED IMAGE (30%) */}
              <div className="ktp-modal-right">
                <div className="ktp-modal-image-container">
                  <div 
                    className="ktp-modal-image"
                    style={{ backgroundImage: `url(${selectedItem.image})` }}
                  ></div>
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

export default KitchenToolsPage;