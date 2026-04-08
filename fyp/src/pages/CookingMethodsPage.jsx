import React, { useState } from 'react';
import './CookingMethodsPage.css';
import { useNavigate } from 'react-router-dom';
const CookingMethodsPage = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);

  // COOKING METHODS DATA - UPDATED WITH STEPS
  const cookingMethods = [
    {
      id: 1,
      name: "Boiling",
      tagline: "Cooking in boiling water",
      fullDesc: "Boiling is a moist-heat cooking method where food is submerged in water at 100°C (212°F). This method is excellent for cooking pasta, vegetables, eggs, and grains. It's a fast cooking method that retains nutrients when done properly.",
      keyUses: ["Pasta", "Vegetables", "Eggs", "Rice"],
      previewImg: "BoilingMethod.png",
      temperature: "100°C (212°F)",
      equipment: "Saucepan, Stock pot",
      bestFor: "Pasta, hard vegetables, grains",
      tips: ["Use salted water for flavor", "Don't overcrowd the pot", "Use rolling boil for pasta", "Ice bath stops cooking"],
      steps: [
        "Fill a pot with water and bring to a rolling boil.",
        "Add salt to the boiling water for flavor.",
        "Carefully add the food to the boiling water.",
        "Cook for the recommended time, stirring occasionally.",
        "Drain and serve immediately or shock in ice water."
      ]
    },
    {
      id: 2,
      name: "Simmering",
      tagline: "Gentle cooking below boiling point",
      fullDesc: "Simmering cooks food in liquid at temperatures between 85-95°C (185-203°F). The liquid shows small bubbles and gentle movement. This method is perfect for delicate foods that need slow, even cooking without breaking apart.",
      keyUses: ["Soups", "Stews", "Sauces", "Grains"],
      previewImg: "SimmeringMethod.png",
      temperature: "85-95°C (185-203°F)",
      equipment: "Saucepan, Dutch oven",
      bestFor: "Tender meats, soups, sauces",
      tips: ["Maintain gentle bubbles", "Use lid to retain heat", "Stir occasionally", "Adjust heat as needed"],
      steps: [
        "Bring liquid to a boil first.",
        "Reduce heat until bubbles are small and gentle.",
        "Add ingredients to the simmering liquid.",
        "Cover partially to allow steam to escape.",
        "Cook until food is tender and flavors meld."
      ]
    },
    {
      id: 3,
      name: "Steaming",
      tagline: "Cooking with steam heat",
      fullDesc: "Steaming cooks food by exposing it to steam from boiling water. This moist-heat method preserves nutrients, color, and texture better than boiling. Food doesn't touch the water, preventing nutrient loss.",
      keyUses: ["Vegetables", "Fish", "Dumplings", "Rice"],
      previewImg: "SteamingMethod.png",
      temperature: "100°C (212°F)",
      equipment: "Steamer basket, Bamboo steamer",
      bestFor: "Delicate vegetables, seafood, dim sum",
      tips: ["Don't let water touch food", "Use tight-fitting lid", "Check water level", "Layer foods properly"],
      steps: [
        "Add water to a pot and bring to a boil.",
        "Place steamer basket over (not in) the water.",
        "Arrange food in a single layer in the basket.",
        "Cover with tight-fitting lid to trap steam.",
        "Steam for recommended time until cooked."
      ]
    },
    {
      id: 4,
      name: "Sautéing",
      tagline: "Quick frying in minimal oil",
      fullDesc: "Sautéing cooks food quickly in a small amount of oil or fat over relatively high heat. The French word 'sauter' means 'to jump', referring to the tossing motion. This method creates flavorful browned surfaces while keeping interiors tender.",
      keyUses: ["Vegetables", "Meat pieces", "Shrimp", "Mushrooms"],
      previewImg: "SautingMethod.png",
      temperature: "Medium-high heat",
      equipment: "Skillet, Sauté pan",
      bestFor: "Quick-cooking ingredients, stir-fries",
      tips: ["Preheat pan properly", "Don't overcrowd pan", "Keep food moving", "Use high smoke point oil"],
      steps: [
        "Heat pan over medium-high heat.",
        "Add small amount of oil and heat until shimmering.",
        "Add ingredients in a single layer.",
        "Cook without moving for 1-2 minutes to sear.",
        "Toss or stir frequently until cooked through."
      ]
    },
    {
      id: 5,
      name: "Pan-Frying",
      tagline: "Shallow frying in oil",
      fullDesc: "Pan-frying uses more oil than sautéing (about 1/4 to 1/2 inch deep) to cook food. The oil should come about halfway up the food. This method creates a crispy exterior while cooking the interior through conduction.",
      keyUses: ["Chicken cutlets", "Fish fillets", "Patties", "Potatoes"],
      previewImg: "Pan-FryingMethod.png",
      temperature: "Medium heat",
      equipment: "Skillet, Frying pan",
      bestFor: "Breaded foods, thick cuts, crispy textures",
      tips: ["Maintain oil temperature", "Don't flip too early", "Drain on paper towels", "Season immediately"],
      steps: [
        "Add oil to pan (1/4 to 1/2 inch deep).",
        "Heat oil to proper temperature (not smoking).",
        "Carefully add food to the hot oil.",
        "Cook until golden brown on one side.",
        "Flip and cook until golden brown and cooked through."
      ]
    },
    {
      id: 6,
      name: "Deep-Frying",
      tagline: "Complete submersion in hot oil",
      fullDesc: "Deep-frying completely submerges food in hot oil (typically 175-190°C/350-375°F). This creates a crispy, golden exterior while sealing in moisture. Proper temperature control is crucial to prevent oil absorption.",
      keyUses: ["French fries", "Chicken", "Doughnuts", "Fritters"],
      previewImg: "Deep-FryingMethod.png",
      temperature: "175-190°C (350-375°F)",
      equipment: "Deep fryer, Dutch oven",
      bestFor: "Battered foods, crispy snacks",
      tips: ["Use thermometer", "Fry in batches", "Drain properly", "Reuse oil properly"],
      steps: [
        "Fill fryer with oil and heat to proper temperature.",
        "Pat food dry and coat if battering/breading.",
        "Carefully lower food into hot oil.",
        "Fry until golden brown and cooked through.",
        "Remove and drain on paper towels."
      ]
    },
    {
      id: 7,
      name: "Baking",
      tagline: "Dry heat cooking in oven",
      fullDesc: "Baking uses dry heat in an enclosed oven to cook food. Hot air circulates around the food, cooking it evenly. This method is ideal for foods that need structure development like bread, cakes, and casseroles.",
      keyUses: ["Bread", "Cakes", "Casseroles", "Roasted vegetables"],
      previewImg: "BakingMethod.png",
      temperature: "150-250°C (300-480°F)",
      equipment: "Oven, Baking sheets",
      bestFor: "Baked goods, casseroles, one-pan meals",
      tips: ["Preheat oven", "Use middle rack", "Rotate pans", "Test for doneness"],
      steps: [
        "Preheat oven to required temperature.",
        "Prepare food and place in appropriate bakeware.",
        "Place in center of preheated oven.",
        "Bake for recommended time.",
        "Check for doneness and remove from oven."
      ]
    },
    {
      id: 8,
      name: "Roasting",
      tagline: "High-heat oven cooking",
      fullDesc: "Roasting uses dry heat at high temperatures (usually above 200°C/400°F) to cook food, typically meat or vegetables. The high heat caramelizes the exterior while keeping the interior moist. Often used for larger cuts of meat.",
      keyUses: ["Whole chicken", "Vegetables", "Large meat cuts", "Nuts"],
      previewImg: "RoastingMethod.png",
      temperature: "200-230°C (400-450°F)",
      equipment: "Roasting pan, Oven",
      bestFor: "Large meats, root vegetables",
      tips: ["Use roasting rack", "Baste occasionally", "Rest before carving", "Use meat thermometer"],
      steps: [
        "Preheat oven to high temperature.",
        "Season food and place on roasting rack.",
        "Roast until exterior is browned.",
        "Reduce heat if needed for even cooking.",
        "Rest before serving for juicier results."
      ]
    },
    {
      id: 9,
      name: "Grilling",
      tagline: "Direct heat from below",
      fullDesc: "Grilling cooks food with direct radiant heat from below. This method creates distinctive char marks and smoky flavor. Perfect for quick-cooking foods that benefit from high heat and caramelization.",
      keyUses: ["Burgers", "Steaks", "Vegetables", "Kebabs"],
      previewImg: "GrillingMethod.png",
      temperature: "High heat",
      equipment: "Grill, Barbecue",
      bestFor: "Meats, vegetables with structure",
      tips: ["Clean grill grates", "Oil food not grates", "Create heat zones", "Don't press food"],
      steps: [
        "Preheat grill to high heat.",
        "Clean and oil grill grates.",
        "Place food on hot grill grates.",
        "Cook until grill marks appear.",
        "Flip and cook to desired doneness."
      ]
    },
    {
      id: 10,
      name: "Broiling",
      tagline: "Direct heat from above",
      fullDesc: "Broiling uses direct radiant heat from above the food. Similar to an upside-down grill, it quickly browns and cooks the surface of food. Excellent for melting cheese, browning toppings, or cooking thin cuts.",
      keyUses: ["Cheese melting", "Fish fillets", "Toast toppings", "Thin meats"],
      previewImg: "BroilingMethod.png",
      temperature: "260-290°C (500-550°F)",
      equipment: "Oven broiler",
      bestFor: "Quick browning, thin cuts",
      tips: ["Watch carefully", "Use broiler pan", "Adjust rack position", "Preheat broiler"],
      steps: [
        "Preheat broiler for 5-10 minutes.",
        "Place food on broiler pan or baking sheet.",
        "Position rack 4-6 inches from heat source.",
        "Broil until browned and cooked.",
        "Watch carefully to prevent burning."
      ]
    },
    {
      id: 11,
      name: "Braising",
      tagline: "Slow cooking with moist heat",
      fullDesc: "Braising combines searing at high heat then slow cooking in liquid at low heat. This two-step method is perfect for tough cuts of meat that become tender with long, slow cooking. The liquid can become a flavorful sauce.",
      keyUses: ["Pot roast", "Short ribs", "Brisket", "Stews"],
      previewImg: "BraisingMethod.png",
      temperature: "Low heat (150°C/300°F)",
      equipment: "Dutch oven, Heavy pot",
      bestFor: "Tough meats, one-pot meals",
      tips: ["Sear well first", "Use tight-fitting lid", "Cook low and slow", "Skim fat from sauce"],
      steps: [
        "Sear meat in hot oil until browned.",
        "Remove meat and sauté vegetables.",
        "Add liquid and return meat to pot.",
        "Cover and cook at low temperature for hours.",
        "Reduce sauce and skim fat before serving."
      ]
    },
    {
      id: 12,
      name: "Stewing",
      tagline: "Slow simmering in liquid",
      fullDesc: "Stewing involves cooking small pieces of food completely submerged in liquid at low temperatures for extended periods. Similar to braising but with more liquid and smaller food pieces. Creates tender results with flavorful broth.",
      keyUses: ["Beef stew", "Curries", "Chili", "Ragù"],
      previewImg: "StewingMethod.png",
      temperature: "Low heat",
      equipment: "Stock pot, Dutch oven",
      bestFor: "Small meat pieces, hearty dishes",
      tips: ["Cut uniform pieces", "Brown meat first", "Skim fat regularly", "Add vegetables at right time"],
      steps: [
        "Brown meat pieces in batches.",
        "Sauté vegetables in same pot.",
        "Add liquid and return meat to pot.",
        "Simmer covered for 1-3 hours.",
        "Adjust seasoning and serve hot."
      ]
    }
  ];

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setShowDetailPanel(true);
  };

  const closeDetailPanel = () => {
    setShowDetailPanel(false);
    setSelectedMethod(null);
  };

  // Helper functions for card classes
  const getMethodCardClass = (methodName) => {
    const name = methodName.toLowerCase();
    if (name.includes('boil')) return 'boiling';
    if (name.includes('simmer')) return 'simmering';
    if (name.includes('steam')) return 'steaming';
    if (name.includes('sauté')) return 'sauteing';
    if (name.includes('pan-fry') || name.includes('panfry')) return 'pan-frying';
    if (name.includes('deep-fry') || name.includes('deepfry')) return 'deep-frying';
    if (name.includes('bake') && !name.includes('roast')) return 'baking';
    if (name.includes('roast')) return 'roasting';
    if (name.includes('grill')) return 'grilling';
    if (name.includes('broil')) return 'broiling';
    if (name.includes('brais')) return 'braising';
    if (name.includes('stew')) return 'stewing';
    return '';
  };

  return (
    <div className="cmp-container">
      <div className="cmp-layout">
        {/* SIDEBAR */}
        <aside className="cmp-sidebar">
          <div className="cmp-sidebar-header">
            <h2 className="cmp-sidebar-title">Cooking Methods</h2>
            <p className="cmp-sidebar-subtitle">Essential Techniques</p>
          </div>

          <div className="cmp-sidebar-methods">
            <ul className="cmp-methods-list">
              {cookingMethods.map(method => (
                <li 
                  key={method.id} 
                  className={`cmp-method-list-item ${selectedMethod?.id === method.id ? 'cmp-active' : ''}`}
                  onClick={() => handleMethodSelect(method)}
                >
                  <span className="cmp-method-list-name">{method.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="cmp-main">
          <header className="cmp-main-header">
            <div className="cmp-header-content">
              <h1 className="cmp-page-title">Essential Cooking Methods</h1>
              <p className="cmp-page-description">
                Master fundamental cooking techniques to elevate your culinary skills.
              </p>
            </div>
          </header>

          {/* METHODS GRID */}
          <div className="cmp-methods-grid-section">
            <div className="cmp-methods-grid">
              {cookingMethods.map(method => (
                <div 
                  key={method.id} 
                  className="cmp-method-card"
                  onClick={() => handleMethodSelect(method)}
                >
                  <div 
                    className="cmp-card-image"
                    style={{ backgroundImage: `url(${method.previewImg})` }}
                  ></div>
                  
                  <div className="cmp-card-content">
                    <h3 className="cmp-card-title">{method.name}</h3>
                    <p className="cmp-card-description">{method.tagline}</p>
                    <div className="cmp-card-heat-type">
                      <span className={`cmp-heat-badge ${method.fullDesc.includes('moist') ? 'moist-heat' : 'dry-heat'}`}>
                        {method.fullDesc.includes('moist') ? 'Moist Heat' : 'Dry Heat'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* DETAIL MODAL - USING ONLY CMP CLASSES */}
{showDetailPanel && selectedMethod && (
  <div className="cmp-modal-overlay" onClick={closeDetailPanel}>
    <div className="cmp-modal" onClick={(e) => e.stopPropagation()}>
      <button className="cmp-modal-close" onClick={closeDetailPanel}>×</button>
      
      <div className="cmp-modal-header">
        <div className="cmp-modal-title">
          <h2>{selectedMethod.name}</h2>
          <p className="cmp-modal-subtitle">{selectedMethod.tagline}</p>
        </div>
      </div>

      <div className="cmp-modal-content">
        {/* LEFT SIDE - CONTENT (65%) */}
        <div className="cmp-modal-details">
          {/* DESCRIPTION */}
          <div className="cmp-detail-section description-section">
            <h3>Description</h3>
            <p>{selectedMethod.fullDesc}</p>
          </div>

          {/* COMMON USES - HORIZONTAL */}
          <div className="cmp-detail-section uses-section">
            <h3>Common Uses</h3>
            <div className="cmp-uses-list">
              {selectedMethod.keyUses.map((use, idx) => (
                <div key={idx} className="cmp-use-item">
                  <span className="cmp-use-check">✓</span>
                  <span>{use}</span>
                </div>
              ))}
            </div>
          </div>

          {/* METHOD DETAILS */}
          <div className="cmp-detail-section details-section">
            <h3>Method Details</h3>
            <div className="cmp-details-list">
              <div className="cmp-detail-item">
                <span className="cmp-detail-label">Temperature:</span>
                <span className="cmp-detail-value">{selectedMethod.temperature}</span>
              </div>
              <div className="cmp-detail-item">
                <span className="cmp-detail-label">Equipment:</span>
                <span className="cmp-detail-value">{selectedMethod.equipment}</span>
              </div>
              <div className="cmp-detail-item">
                <span className="cmp-detail-label">Best For:</span>
                <span className="cmp-detail-value">{selectedMethod.bestFor}</span>
              </div>
            </div>
          </div>

          {/* STEPS */}
          <div className="cmp-detail-section steps-section">
            <h3>Steps to {selectedMethod.name}</h3>
            <div className="cmp-steps-list">
              {selectedMethod.steps.map((step, idx) => (
                <div key={idx} className="cmp-step-item">
                  <span className="cmp-step-number">{idx + 1}.</span>
                  <span className="cmp-step-text">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TIPS */}
          <div className="cmp-detail-section tips-section">
            <h3>Pro Tips</h3>
            <div className="cmp-tips-list">
              {selectedMethod.tips.map((tip, idx) => (
                <div key={idx} className="cmp-tip-item">
                  <span className="cmp-tip-icon">💡</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE (35%) */}
        <div className="cmp-modal-image-container">
          <div 
            className="cmp-modal-main-image"
            style={{ backgroundImage: `url(${selectedMethod.previewImg})` }}
          ></div>
          <div className="cmp-image-caption">
            {selectedMethod.name} - Cooking Method
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

export default CookingMethodsPage;