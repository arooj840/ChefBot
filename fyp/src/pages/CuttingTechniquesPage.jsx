import React, { useState } from 'react';
import './CuttingTechniquesPage.css';
import { useNavigate } from 'react-router-dom';
const CuttingTechniquesPage = () => {
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);

  // CUTTING TECHNIQUES DATA
  const cuttingTechniques = [
    {
      id: 1,
      name: "Julienne",
      tagline: "Matchstick-style thin strips",
      fullDesc: "Julienne is a knife technique that produces thin, matchstick-sized strips of vegetables or fruits. The standard dimensions are 4mm × 4mm × 5-7cm long. It's essential for dishes that require quick cooking and uniform texture.",
      keyUses: ["Stir-fries", "Salads", "Garnishes", "Asian dishes"],
      previewImg: "JulienneCut.png",
      knife: "Chef's knife or Santoku",
      tips: ["Keep fingers curled under", "Create planks first, then strips", "Maintain uniform thickness"],
      steps: [
        "Wash and peel the vegetable if needed.",
        "Trim the ends and cut into 5-7 cm long segments.",
        "Slice the segments into 4 mm thick planks.",
        "Stack the planks and slice lengthwise into 4 mm thick strips.",
        "Keep cuts even for uniform matchstick-sized pieces."
      ]
    },
    {
      id: 2,
      name: "Brunoise",
      tagline: "Fine 3mm cubes",
      fullDesc: "Brunoise is an extremely fine dice cut, typically 3mm × 3mm × 3mm. It's the smallest of the dice cuts and requires precision knife work. Often used for garnishes or ingredients that need to cook quickly or melt into dishes.",
      keyUses: ["Sauces", "Soups", "Garnishes", "Stuffings"],
      previewImg: "BrunoiseCut.png",
      knife: "Sharp Chef's knife",
      tips: ["Start with julienne cuts", "Use claw grip for safety", "Keep knife very sharp"],
      steps: [
        "Start with julienne-cut vegetables (4mm × 4mm strips).",
        "Gather the julienne strips into a tight bundle.",
        "Slice across the bundle at 3mm intervals.",
        "Keep the pieces as uniform as possible.",
        "Use a gentle rocking motion for precision cuts."
      ]
    },
    {
      id: 3,
      name: "Chiffonade",
      tagline: "Fine ribbon cuts for leafy greens",
      fullDesc: "Chiffonade is a technique for cutting leafy herbs and vegetables into thin, ribbon-like strips. Literally meaning 'made of rags' in French, it's perfect for herbs and leafy greens where you want maximum flavor and elegant presentation.",
      keyUses: ["Herb garnishes", "Salads", "Pasta dishes", "Garnishes"],
      previewImg: "ChiffonadeCut.png",
      knife: "Chef's knife",
      tips: ["Stack leaves neatly", "Roll tightly before cutting", "Use gentle sawing motion"],
      steps: [
        "Wash and thoroughly dry the leaves.",
        "Stack 5-10 leaves of similar size neatly.",
        "Roll the stack tightly into a cigar shape.",
        "Slice across the roll into thin ribbons (1-3mm wide).",
        "Separate the ribbons gently with your fingers."
      ]
    },
    {
      id: 4,
      name: "Dice",
      tagline: "Uniform cube cuts",
      fullDesc: "Dicing involves cutting food into uniform cube-shaped pieces. There are different sizes: large dice (20mm), medium dice (12mm), and small dice (6mm). Uniform dicing ensures even cooking and professional presentation.",
      keyUses: ["Sautéing", "Soups", "Stews", "Salads"],
      previewImg: "DiceCut.png",
      knife: "Chef's knife",
      tips: ["Create planks then batons", "Maintain consistent pressure", "Use cutting board anchors"],
      steps: [
        "Trim and square off the vegetable.",
        "Slice into uniform planks of desired thickness.",
        "Stack planks and cut into uniform batons.",
        "Line up batons and cut into cubes.",
        "Adjust size based on recipe requirements."
      ]
    },
    {
      id: 5,
      name: "Slice",
      tagline: "Basic cross-sectional cuts",
      fullDesc: "Slicing is the most fundamental cutting technique, involving cutting food into flat, broad pieces. The thickness can vary from paper-thin to thick slices depending on the recipe requirements.",
      keyUses: ["Sandwiches", "Roasting", "Frying", "Presentation"],
      previewImg: "SliceCut.png",
      knife: "Chef's knife or Santoku",
      tips: ["Use rocking motion", "Keep slices even", "Anchor food with flat side down"],
      steps: [
        "Create a flat surface by cutting a thin slice off one side.",
        "Place the flat side down on the cutting board.",
        "Use claw grip to hold the food securely.",
        "Slice to desired thickness using a smooth motion.",
        "Keep slices consistent for even cooking."
      ]
    },
    {
      id: 6,
      name: "Mince",
      tagline: "Finely chopped pieces",
      fullDesc: "Mincing involves cutting food into very small, irregular pieces that are smaller than a dice. The goal is to create tiny pieces that distribute flavor evenly throughout a dish without being noticeable.",
      keyUses: ["Garlic", "Onions", "Herbs", "Flavor bases"],
      previewImg: "MinceCut.png",
      knife: "Chef's knife",
      tips: ["Rock knife back and forth", "Gather and chop repeatedly", "Use curved blade efficiently"],
      steps: [
        "Start with finely chopped pieces.",
        "Place the tip of the knife on the cutting board.",
        "Rock the knife back and forth while moving across the pile.",
        "Gather the pieces and repeat the process.",
        "Continue until desired fineness is achieved."
      ]
    },
    {
      id: 7,
      name: "Batonnet",
      tagline: "Stick-shaped cuts",
      fullDesc: "Batonnet produces stick-shaped pieces, typically 6mm × 6mm × 5-6cm long. It's larger than julienne and serves as a starting point for medium dice cuts. Perfect for vegetables that will be served as side dishes or in stews.",
      keyUses: ["French fries", "Vegetable sticks", "Stir-fries", "Crudités"],
      previewImg: "BatonnetCut.png",
      knife: "Chef's knife",
      tips: ["Trim sides first", "Measure thickness", "Keep consistent length"],
      steps: [
        "Trim and square off the vegetable.",
        "Cut into 5-6cm long segments.",
        "Slice each segment into 6mm thick planks.",
        "Stack planks and cut into 6mm thick sticks.",
        "Maintain uniform size throughout."
      ]
    },
    {
      id: 8,
      name: "Tourne",
      tagline: "Football-shaped decorative cuts",
      fullDesc: "Tourne (or 'turned') is an advanced knife technique that produces seven-sided, football-shaped pieces. It's a decorative cut used in fine dining to create elegant vegetable presentations that cook evenly.",
      keyUses: ["Fine dining", "Garnishes", "Roasted vegetables", "Special occasions"],
      previewImg: "TourneCut.png",
      knife: "Paring knife or tourne knife",
      tips: ["Use small paring knife", "Practice on carrots first", "Maintain seven equal sides"],
      steps: [
        "Peel the vegetable and cut into 5cm lengths.",
        "Hold the vegetable at an angle with your thumb.",
        "Make a shallow cut along the length, rotating after each cut.",
        "Create seven equal sides around the vegetable.",
        "Trim ends for uniform football shapes."
      ]
    }
  ];

  const handleTechniqueSelect = (technique) => {
    setSelectedTechnique(technique);
    setShowDetailPanel(true);
  };

  const closeDetailPanel = () => {
    setShowDetailPanel(false);
    setSelectedTechnique(null);
  };

  // Helper functions for card classes
  const getTechniqueCardClass = (techniqueName) => {
    const name = techniqueName.toLowerCase();
    if (name.includes('julienne')) return 'julienne';
    if (name.includes('brunoise')) return 'brunoise';
    if (name.includes('chiffonade')) return 'chiffonade';
    if (name.includes('dice')) return 'dice';
    if (name.includes('slice')) return 'slice';
    if (name.includes('mince')) return 'mince';
    if (name.includes('batonnet')) return 'batonnet';
    if (name.includes('tourne')) return 'tourne';
    return '';
  };

  return (
    <div className="ctp-container">
      <div className="ctp-layout">
        {/* SIDEBAR */}
        <aside className="ctp-sidebar">
          <div className="ctp-sidebar-header">
            <h2 className="ctp-sidebar-title">Cutting Techniques</h2>
            <p className="ctp-sidebar-subtitle">Essential Knife Skills</p>
          </div>

          <div className="ctp-sidebar-techniques">
            <ul className="ctp-techniques-list">
              {cuttingTechniques.map(technique => (
                <li 
                  key={technique.id} 
                  className={`ctp-technique-list-item ${selectedTechnique?.id === technique.id ? 'ctp-active' : ''}`}
                  onClick={() => handleTechniqueSelect(technique)}
                >
                  <span className="ctp-technique-list-name">{technique.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="ctp-main">
          <header className="ctp-main-header">
            <div className="ctp-header-content">
              <h1 className="ctp-page-title">Essential Cutting Techniques</h1>
              <p className="ctp-page-description">
                Master professional knife skills with these fundamental cutting techniques.
              </p>
            </div>
          </header>

          {/* TECHNIQUES GRID */}
          <div className="ctp-techniques-grid-section">
            <div className="ctp-techniques-grid">
              {cuttingTechniques.map(technique => (
                <div 
                  key={technique.id} 
                  className="ctp-technique-card"
                  onClick={() => handleTechniqueSelect(technique)}
                >
                  <div 
                    className="ctp-card-image"
                    style={{ backgroundImage: `url(${technique.previewImg})` }}
                  ></div>
                  
                  <div className="ctp-card-content">
                    <h3 className="ctp-card-title">{technique.name}</h3>
                    <p className="ctp-card-description">{technique.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* DETAIL MODAL */}
      {showDetailPanel && selectedTechnique && (
        <div className="ctp-modal-overlay" onClick={closeDetailPanel}>
          <div className="ctp-modal" onClick={(e) => e.stopPropagation()}>
            <button className="ctp-modal-close" onClick={closeDetailPanel}>×</button>
            
            <div className="ctp-modal-header">
              <div className="ctp-modal-title">
                <h2>{selectedTechnique.name}</h2>
                <p className="ctp-modal-subtitle">{selectedTechnique.tagline}</p>
              </div>
            </div>

            <div className="ctp-modal-content">
              {/* LEFT SIDE - CONTENT */}
              <div className="ctp-modal-details">
                {/* DESCRIPTION */}
                <div className="ctp-detail-section description-section">
                  <h3>Description</h3>
                  <p>{selectedTechnique.fullDesc}</p>
                </div>

                {/* COMMON USES - HORIZONTAL */}
                <div className="ctp-detail-section uses-section">
                  <h3>Common Uses</h3>
                  <div className="ctp-uses-list">
                    {selectedTechnique.keyUses.map((use, idx) => (
                      <div key={idx} className="ctp-use-item">
                        <span className="ctp-use-check">✓</span>
                        <span>{use}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TECHNIQUE DETAILS - UNDER COMMON USES */}
                <div className="ctp-detail-section details-section">
                  <h3>Technique Details</h3>
                  <div className="ctp-details-list">
                    <div className="ctp-detail-item">
                      <span className="ctp-detail-label">Recommended Knife:</span>
                      <span className="ctp-detail-value">{selectedTechnique.knife}</span>
                    </div>
                  </div>
                </div>

                {/* STEPS */}
                <div className="ctp-detail-section steps-section">
                  <h3>Steps to {selectedTechnique.name} Cut</h3>
                  <div className="ctp-steps-list">
                    {selectedTechnique.steps.map((step, idx) => (
                      <div key={idx} className="ctp-step-item">
                        <span className="ctp-step-number">{idx + 1}.</span>
                        <span className="ctp-step-text">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

              {/* TIPS - WITH NUMBERED STYLE */}
<div className="ctp-detail-section tips-section">
  <h3>Pro Tips</h3>
  <div className="ctp-tips-list">
    {selectedTechnique.tips.map((tip, idx) => (
      <div key={idx} className="ctp-tip-item">
        <span className="ctp-tip-number">{idx + 1}.</span>
        <span className="ctp-tip-text">{tip}</span>
      </div>
    ))}
  </div>
</div>
</div>
              {/* RIGHT SIDE - IMAGE */}
              <div className="ctp-modal-image-container">
                <div 
                  className="ctp-modal-main-image"
                  style={{ backgroundImage: `url(${selectedTechnique.previewImg})` }}
                ></div>
                <div className="ctp-image-caption">
                  {selectedTechnique.name} - Cutting Technique
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

export default CuttingTechniquesPage;