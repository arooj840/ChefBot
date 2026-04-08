import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './RecipesLunch.css';

const RecipesLunch = () => {
  const scrollContainerRef = useRef(null);

  const categories = [
    {
      id: 1,
      name: "Vegetables",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
      recipeCount: 3,
      route: "/lunch",
      state: { defaultTab: 'veg' }  // ✅ Veg tab open karega
    },
    {
      id: 2,
      name: "Lentiles (Daal)",
      image: "https://images.unsplash.com/photo-1546833999-bf9a581a1996?w=500",
      recipeCount: 3,
      route: "/lunch",
      state: { defaultTab: 'dal' }  // ✅ Dal tab open karega
    },
    {
      id: 3,
      name: "Egg Dishes",
      image: "https://images.unsplash.com/photo-1584483766114-2c22c5e4f7b0?w=500",
      recipeCount: 7,
      route: "/egg-dishes"
    },
    {
      id: 4,
      name: "Fish Dishes",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500",
      recipeCount: 4,
      route: "/fish-dishes"
    },
    {
      id: 5,
      name: "Chicken Dishes",
      image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5?w=500",
      recipeCount: 5,
      route: "/chicken"
    },
    {
      id: 6,
      name: "Mutton Dishes",
      image: "https://images.unsplash.com/photo-1545247181-516773c7e8a2?w=500",
      recipeCount: 6,
      route: "/mutton"
    },
    {
      id: 7,
      name: "Keema Dishes",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=500",
      recipeCount: 7,
      route: "/qeema"
    },
    {
      id: 8,
      name: "Rice Dishes",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500",
      recipeCount: 8,
      route: "/rice"
    },
    {
      id: 9,
      name: "Breads",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
      recipeCount: 9,
      route: "/breads"
    },
    {
      id: 10,
      name: "BBQ / Grills",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=500",
      recipeCount: 10,
      route: "/BBQ"
    },
    {
      id: 11,
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
    <div className="recipes-lunch-page">
      {/* Header */}
      <header className="recipes-lunch-header">
        <div className="recipes-lunch-header-content">
          <h1 className="recipes-lunch-title">Lunch Offerings</h1>
          <p className="recipes-lunch-description">
            Delightful Lunch Creations
          </p>
        </div>
      </header>

      {/* Categories Container with Arrows */}
      <main className="recipes-lunch-main">
        <div className="recipes-lunch-carousel">
          <button className="recipes-lunch-arrow recipes-lunch-arrow-left" onClick={scrollLeft}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="recipes-lunch-scroll-wrapper" ref={scrollContainerRef}>
            <div className="recipes-lunch-grid">
              {categories.map((category, index) => (
                <Link
                  key={category.id}
                  to={category.route}
                  state={category.state}  // ✅ State pass kar rahe hain
                  className={`recipes-lunch-card ${index % 2 === 0 ? 'recipes-lunch-card-up' : 'recipes-lunch-card-down'}`}
                >
                  {/* Image Container */}
                  <div className="recipes-lunch-card-image-container">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="recipes-lunch-card-img"
                      loading="lazy"
                    />
                    <div className="recipes-lunch-card-overlay"></div>
                    <span className="recipes-lunch-card-badge">
                      {category.recipeCount}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="recipes-lunch-card-content">
                    <h3 className="recipes-lunch-card-title">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <button className="recipes-lunch-arrow recipes-lunch-arrow-right" onClick={scrollRight}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="recipes-lunch-bg-pattern"></div>
    </div>
  );
};

export default RecipesLunch;