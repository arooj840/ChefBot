import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeFeature.css';

const RecipeFeature = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 const recipeTypes = [
  // --- MEALS ---
  { id: 1, title: 'BREAKFAST', description: 'Start your day with delicious morning meals', path: '/BreakFast', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAkO6PiyzExlXgDE-kZFg0VQlAt1sOqclhA&s' },
  { id: 2, title: 'LUNCH', description: 'Hearty and satisfying midday meals', path: '/recipe-lunch', image: 'https://substackcdn.com/image/fetch/$s_!Xw3X!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdfa9ec03-d4e8-4946-9649-cf7fe4f34059_1442x1103.heic' },
  { id: 3, title: 'DINNER', description: 'Perfect main courses for evening meals', path: '/recipe-dinner', image: 'https://substackcdn.com/image/fetch/$s_!Xw3X!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdfa9ec03-d4e8-4946-9649-cf7fe4f34059_1442x1103.heic' },
  
  // --- APPETIZERS & SOUPS ---
  { id: 4, title: 'SOUPS', description: 'Warm and comforting soups for all seasons', path: '/soups', image: 'https://substackcdn.com/image/fetch/$s_!Xw3X!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdfa9ec03-d4e8-4946-9649-cf7fe4f34059_1442x1103.heic' },
  { id: 5, title: 'APPETIZERS', description: 'Perfect starters and finger foods', path: '/appetizers', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 6, title: 'SNACKS', description: 'Quick bites for any time of day', path: '/Snack', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  
  // --- DESSERTS & BAKING ---
  { id: 7, title: 'DESSERTS', description: 'Sweet delights and indulgent treats', path: '/desserts', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 8, title: 'BAKING', description: 'Freshly baked goods and pastries', path: '/Baking', image: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  
  // --- BEVERAGES ---
  { id: 9, title: 'BEVERAGES', description: 'Refreshing drinks for every mood', path: '/Beverage', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  
  // --- HEALTHY OPTIONS ---
  { id: 10, title: 'SALADS', description: 'Fresh and healthy salad recipes', path: '/Salads', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  
  // --- SPECIALTY ---
  { id: 11, title: 'REGIONAL', description: 'Traditional and authentic regional dishes', path: '/Regional', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 12, title: 'JUNK FOOD', description: 'Indulgent comfort food favorites', path: '/cheat-meal', image: 'https://substackcdn.com/image/fetch/$s_!Xw3X!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdfa9ec03-d4e8-4946-9649-cf7fe4f34059_1442x1103.heic' }
];

  const budgetCategories = [
    { id: 1, title: 'BUDGET-FRIENDLY', path: '/BudgetFriendly', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', features: ['Budget-friendly meals', 'Save money cooking', 'Affordable ingredients', 'Meal prep tips'] },
    { id: 2, title: 'STUDENT RECIPES', path: '/StudentRecipe', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', features: ['Easy student meals', 'Dorm room cooking', 'Quick recipes', 'Minimal equipment'] },
    { id: 3, title: 'QUICK & EASY', path: '/QuickRecipe', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', features: ['15-min meals', 'Simple recipes', 'Minimal cleanup', 'Busy weeknights'] },
    { id: 4, title: 'VEGETARIAN', path: '/Vege', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', features: ['Meat-free meals', 'Plant-based protein', 'Healthy options', 'Vegetarian classics'] }
  ];

  const heroImages = [
    'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
    'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => prev === heroImages.length - 1 ? 0 : prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleRecipeTypeClick = (path) => navigate(path);
  const handleBudgetCategoryClick = (path) => navigate(path);

  return (
    <div className="rf-homepage">

      {/* HERO */}
      <section className="rf-hero-banner">
        <div className="rf-hero-slider">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`rf-hero-slide ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}

          <div className="rf-slider-dots">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`rf-slider-dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <main className="rf-main-content">

        {/* Recipe Types */}
        <section className="rf-recipe-types-section">
          <div className="rf-recipe-types-container">
            <div className="rf-section-header">
              <h2>Culinary Masterpieces</h2>
              <p>Chef-curated recipes to transform your cooking experience</p>
            </div>

            <div className="rf-recipe-types-grid">
              {recipeTypes.map((type) => (
                <div
                  key={type.id}
                  className="rf-circle-card-wrapper"
                  onClick={() => handleRecipeTypeClick(type.path)}
                >
                  <div className="rf-circle-card">
                    <div className="rf-circle-image-container">
                      <img
                        src={type.image}
                        alt={type.title}
                        className="rf-circle-image"
                      />
                    </div>
                  </div>
                  <h3 className="rf-circle-card-title">{type.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Budget Section */}
        <section className="rf-budget-friendly-section">
          <div className="rf-section-header">
            <h2>Smart Cooking Solutions</h2>
            <p>Restaurant-quality meals designed for everyday cooking</p>
          </div>

          <div className="rf-budget-grid-new">
            {budgetCategories.map((category) => (
              <div
                key={category.id}
                className="rf-budget-card-new"
                onClick={() => handleBudgetCategoryClick(category.path)}
              >
                <div className="rf-budget-card-header">
                  <h3 className="rf-budget-card-title">{category.title}</h3>
                </div>

                <div className="rf-budget-card-image-container">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="rf-budget-card-image"
                  />
                </div>

                <div className="rf-budget-card-content">
                  <ul className="rf-budget-card-features">
                    {category.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="rf-features-section">
          <div className="rf-section-header">
            <h2>Elevate Your Cooking Journey</h2>
            <p>Advanced features designed for modern home chefs</p>
          </div>

          <div className="rf-features-grid">
            <div className="rf-feature-card">
              <div className="rf-feature-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>AI-Powered Recipes</h3>
              <p>Get personalized recipe suggestions based on your preferences</p>
            </div>

            <div className="rf-feature-card">
              <div className="rf-feature-icon">
                <i className="fas fa-step-forward"></i>
              </div>
              <h3>Step-by-Step Guide</h3>
              <p>Detailed cooking instructions with timers and tips</p>
            </div>

            <div className="rf-feature-card">
              <div className="rf-feature-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <h3>Meal Planning</h3>
              <p>Smart weekly meal plans with automatic grocery lists</p>
            </div>

            <div className="rf-feature-card">
              <div className="rf-feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Quick Cooking</h3>
              <p>Fast and easy recipes for busy schedules</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default RecipeFeature;