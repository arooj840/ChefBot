import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Dinner.css';

const Dinner = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('veg'); // Default veg

  // 📌 Vegetables ki 3 categories
  const vegCategories = [
    {
      id: 1,
      name: "Plain Vegetables",
      tagline: "Simple aur ghar ki sabziyan",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554",
      route: "/plain-veg",
      type: "veg"
    },
    {
      id: 2,
      name: "Chicken + Vegetables",
      tagline: "Chicken ke saath mazedar sabziyan",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      route: "/veg-chick",
      type: "veg"
    },
    {
      id: 3,
      name: "Mutton + Vegetables",
      tagline: "Mutton aur sabzi ka perfect blend",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2",
      route: "/veg-mutton",
      type: "veg"
    }
  ];

  // 📌 Daal ki 3 categories
  const dalCategories = [
    {
      id: 4,
      name: "Plain Dal",
      tagline: "Simple daalen ghar jaisi",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996",
      route: "/plain-dal",
      type: "dal"
    },
    {
      id: 5,
      name: "Chicken + Dal",
      tagline: "Chicken ke saath daal ka maza",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36",
      route: "/dal-chick",
      type: "dal"
    },
    {
      id: 6,
      name: "Mutton + Dal",
      tagline: "Mutton aur daal ka rich combination",
      image: "https://images.unsplash.com/photo-1589779262934-68e4c9d3b4c2",
      route: "/dal-mutton",
      type: "dal"
    }
  ];

  // Sab categories combined
  const allCategories = [...vegCategories, ...dalCategories];

  // ✅ State se default tab set karo
  useEffect(() => {
    if (location.state?.defaultTab) {
      setActiveCategory(location.state.defaultTab);
    }
  }, [location.state]);

  // Filter categories based on active tab
  const filteredCategories = allCategories.filter(cat => cat.type === activeCategory);

  // Tab click handler
  const handleTabClick = (categoryType) => {
    setActiveCategory(categoryType);
  };

  return (
    <div className="dinner-page">
      {/* Header Section */}
      <header className="dinner-header">
        <div className="dinner-header-content">
          <h1 className="dinner-page-title">
            {activeCategory === 'veg' ? 'Vegetarian Delights' : 'Lentil Specialties'}
          </h1>
          <p className="dinner-page-description">
            {activeCategory === 'veg' 
              ? 'Fresh aur healthy sabziyon ke saath - 3 varieties'
              : 'Protein-rich daalon ke mazedar recipes - 3 varieties'}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="dinner-main">
        {/* Category Tabs - Sirf 2 tabs (Vegetables aur Daal) */}
        <div className="category-tabs">
          <button 
            className={`category-tab ${activeCategory === 'veg' ? 'active' : ''}`}
            onClick={() => handleTabClick('veg')}
          >
            <span className="category-name">Vegetables (3)</span>
          </button>
          <button 
            className={`category-tab ${activeCategory === 'dal' ? 'active' : ''}`}
            onClick={() => handleTabClick('dal')}
          >
            <span className="category-name">Lentils - Daal (3)</span>
          </button>
        </div>

        {/* Categories Grid */}
        <div className="dinner-grid-section">
          <div className="dinner-grid">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="dinner-category-card"
                onClick={() => navigate(category.route)}
              >
                <div
                  className="dinner-card-image"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="dinner-card-content">
                  <h3 className="dinner-card-title">{category.name}</h3>
                  <p className="dinner-card-description">{category.tagline}</p>
                  <div className="dinner-card-button">
                    <span>Explore Recipes</span>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Back Button - RecipesDinner par jayega */}
      <div className="back-button-container">
        <button className="back-home-btn" onClick={() => navigate('/recipe-dinner')}>
          <span>←</span> Back to Categories
        </button>
      </div>
    </div>
  );
};

export default Dinner;