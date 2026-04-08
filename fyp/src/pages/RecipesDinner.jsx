import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './RecipesDinner.css';

const RecipesDinner = () => {
  const scrollContainerRef = useRef(null);

  const categories = [
    {
      id: 1,
      name: "Light Dinner",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
      recipeCount: 3,
      route: "/dinner-light",  // ✅ Direct page route (alag page)
      // state nahi dena
    },
    {
      id: 2,
      name: "Vegetables",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
      recipeCount: 3,
      route: "/dinner",
      state: { defaultTab: 'veg' }  // ✅ Dinner page veg tab
    },
    {
      id: 3,
      name: "Lentils (Daal)",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996?w=500",
      recipeCount: 3,
      route: "/dinner",
      state: { defaultTab: 'dal' }  // ✅ Dinner page dal tab
    },
    {
      id: 4,
      name: "Egg Dishes",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0?w=500",
      recipeCount: 7,
      route: "/egg-dishes"
    },
    {
      id: 5,
      name: "Fish Dishes",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500",
      recipeCount: 4,
      route: "/fish-dishes"
    },
    {
      id: 6,
      name: "Chicken Dishes",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5?w=500",
      recipeCount: 5,
      route: "/chicken"
    },
    {
      id: 7,
      name: "Mutton Dishes",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2?w=500",
      recipeCount: 6,
      route: "/mutton"
    },
    {
      id: 8,
      name: "Keema Dishes",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=500",
      recipeCount: 7,
      route: "/qeema"
    },
    {
      id: 9,
      name: "Rice Dishes",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500",
      recipeCount: 8,
      route: "/rice"
    },
    {
      id: 10,
      name: "Breads",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
      recipeCount: 9,
      route: "/breads"
    },
    {
      id: 11,
      name: "BBQ / Grills",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=500",
      recipeCount: 10,
      route: "/BBQ"
    },
    {
      id: 12,
      name: "Heavy Gravy",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36?w=500",
      recipeCount: 11,
      route: "/gravy"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="recipes-dinner-page">
      {/* Header */}
      <header className="recipes-dinner-header">
        <div className="recipes-dinner-header-content">
          <h1 className="recipes-dinner-title">Dinner Offerings</h1>
          <p className="recipes-dinner-description">
            Comforting Dinner Creations
          </p>
        </div>
      </header>

      {/* Categories Container with Arrows */}
      <main className="recipes-dinner-main">
        <div className="recipes-dinner-carousel">
          <button className="recipes-dinner-arrow recipes-dinner-arrow-left" onClick={scrollLeft}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="recipes-dinner-scroll-wrapper" ref={scrollContainerRef}>
            <div className="recipes-dinner-grid">
              {categories.map((category, index) => (
                <Link
                  key={category.id}
                  to={category.route}
                  state={category.state}
                  className={`recipes-dinner-card ${index % 2 === 0 ? 'recipes-dinner-card-up' : 'recipes-dinner-card-down'}`}
                >
                  {/* Image Container */}
                  <div className="recipes-dinner-card-image-container">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="recipes-dinner-card-img"
                      loading="lazy"
                    />
                    <div className="recipes-dinner-card-overlay"></div>
                    <span className="recipes-dinner-card-badge">
                      {category.recipeCount}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="recipes-dinner-card-content">
                    <h3 className="recipes-dinner-card-title">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <button className="recipes-dinner-arrow recipes-dinner-arrow-right" onClick={scrollRight}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="recipes-dinner-bg-pattern"></div>
    </div>
  );
};

export default RecipesDinner;