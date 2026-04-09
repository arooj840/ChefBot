import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MealCalender.css';

const MealCalender = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const mode = queryParams.get('mode') || 'custom';

  const [currentView, setCurrentView] = useState('daily');
  const [selectedDay, setSelectedDay] = useState(0);
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
  const [preferences, setPreferences] = useState({
    duration: 'weekly',
    dietType: 'veg',
    targetAudience: 'general',
    ageGroup: '',
    patientCondition: '',
    allergies: [],
    familyMembers: '2',
    budget: 'standard',
    planningMode: 'ai'
  });
  const [mealPlan, setMealPlan] = useState({});
  
  // Modal state for adding recipe
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const [selectedMealSlot, setSelectedMealSlot] = useState({ dayIndex: 0, mealType: 'breakfast' });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayShortNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  useEffect(() => {
    const savedPreferences = localStorage.getItem('mealPreferences');
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }

    const savedPlan = localStorage.getItem('generatedMealPlan');
    if (savedPlan) {
      setMealPlan(JSON.parse(savedPlan));
    } else if (mode === 'custom') {
      const emptyPlan = {};
      for (let i = 0; i < 7; i++) {
        emptyPlan[i] = { breakfast: null, lunch: null, dinner: null };
      }
      setMealPlan(emptyPlan);
    } else {
      const emptyPlan = {};
      for (let i = 0; i < 7; i++) {
        emptyPlan[i] = { breakfast: null, lunch: null, dinner: null };
      }
      setMealPlan(emptyPlan);
    }
  }, [mode]);

  // Search recipes from backend
  useEffect(() => {
    if (showRecipeModal && searchTerm.length > 1) {
      const delayDebounce = setTimeout(() => {
        fetchRecipes(searchTerm);
      }, 500);
      return () => clearTimeout(delayDebounce);
    } else if (searchTerm.length === 0) {
      setSearchResults([]);
    }
  }, [searchTerm, showRecipeModal]);

  const fetchRecipes = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/recipes/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      if (data.success) {
        setSearchResults(data.recipes);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const getWeekDates = () => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - today.getDay() + 1 + (currentWeekOffset * 7));
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date.getDate());
    }
    return dates;
  };

  const getDateRange = () => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - today.getDay() + 1 + (currentWeekOffset * 7));
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${startDate.getDate()} ${months[startDate.getMonth()]} - ${endDate.getDate()} ${months[endDate.getMonth()]}`;
  };

  const previousWeek = () => setCurrentWeekOffset(prev => prev - 1);
  const nextWeek = () => setCurrentWeekOffset(prev => prev + 1);
  const switchView = (view) => setCurrentView(view);
  const backToPreferences = () => navigate('/meal-planner');

  const savePlan = async () => {
    const planData = {
      name: `Meal Plan - ${new Date().toLocaleDateString()}`,
      duration: preferences.duration,
      preferences: {
        dietType: preferences.dietType,
        targetAudience: preferences.targetAudience,
        ageGroup: preferences.ageGroup,
        patientCondition: preferences.patientCondition,
        allergies: preferences.allergies,
        familyMembers: preferences.familyMembers,
        budget: preferences.budget,
        planningMode: mode,
      },
      plan: mealPlan,
    };

    try {
      const response = await fetch('http://localhost:5000/api/mealplan/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(planData),
      });
      const data = await response.json();
      if (data.success) {
        alert('Meal plan saved successfully!');
      } else {
        alert('Failed to save plan: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Save plan error:', error);
      alert('Could not connect to server. Please try again later.');
    }
  };

  const viewRecipe = (recipeId, recipeName) => {
    if (recipeId) {
      navigate(`/recipe/${recipeId}`);
    } else {
      navigate(`/recipes?search=${encodeURIComponent(recipeName)}`);
    }
  };

  // Open modal to add/change recipe
  const openAddRecipeModal = (dayIndex, mealType) => {
    setSelectedMealSlot({ dayIndex, mealType });
    setShowRecipeModal(true);
    setSearchTerm('');
    setSearchResults([]);
  };

  // Select a recipe from search results
  const selectRecipe = (recipe) => {
    setMealPlan(prev => ({
      ...prev,
      [selectedMealSlot.dayIndex]: {
        ...prev[selectedMealSlot.dayIndex],
        [selectedMealSlot.mealType]: {
          _id: recipe._id,
          name: recipe.name,
          image: recipe.image || 'https://via.placeholder.com/150',
          available: true,
          tagline: recipe.tagline || `${recipe.dietType} • ${recipe.cuisine || 'Delicious'}`
        }
      }
    }));
    setShowRecipeModal(false);
  };

  const dates = getWeekDates();

  const getTargetAudienceText = () => {
    if (preferences.targetAudience === 'general') return 'General';
    if (preferences.targetAudience === 'kids') return `Kids (${preferences.ageGroup})`;
    if (preferences.targetAudience === 'patient') return `Patient (${preferences.patientCondition})`;
    return '';
  };

  const getBudgetText = () => {
    const b = preferences.budget;
    if (b === 'economy') return 'Economy';
    if (b === 'standard') return 'Standard';
    if (b === 'premium') return 'Premium';
    if (b === 'deluxe') return 'Deluxe';
    return b || 'Standard';
  };

  const getDietText = () => {
    if (preferences.dietType === 'veg') return 'Vegetarian';
    if (preferences.dietType === 'non-veg') return 'Non-Veg';
    return 'Mixed';
  };

  return (
    <div className="meal-planner-app">
      <div className="meal-planner-wrapper">
        <div className="mp-fullscreen-image">
          <div className="mp-fullscreen-content">
            <h1>Your Meal Calendar</h1>
            <p>View and manage your personalized meal plan</p>
          </div>
        </div>

        <div className="mp-calendar-container">
          <div className="mp-calendar-top-section">
            <button className="mp-btn-back" onClick={backToPreferences}>
              ← Back to Preferences
            </button>
            <div className="mp-plan-info-banner">
              <div className="mp-plan-info-item">
                <span className="mp-info-label">Diet:</span>
                <span className="mp-info-value">{getDietText()}</span>
              </div>
              <div className="mp-plan-info-item">
                <span className="mp-info-label">For:</span>
                <span className="mp-info-value">{getTargetAudienceText() || 'General'}</span>
              </div>
              <div className="mp-plan-info-item">
                <span className="mp-info-label">Duration:</span>
                <span className="mp-info-value">{preferences.duration === 'daily' ? 'Daily' : 'Weekly'}</span>
              </div>
              <div className="mp-plan-info-item">
                <span className="mp-info-label">Budget:</span>
                <span className="mp-info-value">{getBudgetText()}</span>
              </div>
            </div>
          </div>

          <div className="mp-view-toggle">
            <button className={`mp-view-btn ${currentView === 'daily' ? 'mp-active' : ''}`} onClick={() => switchView('daily')}>Daily View</button>
            <button className={`mp-view-btn ${currentView === 'weekly' ? 'mp-active' : ''}`} onClick={() => switchView('weekly')}>Weekly View</button>
          </div>

          <div className="mp-date-navigation">
            <button className="mp-nav-arrow" onClick={previousWeek}>‹</button>
            <div className="mp-date-range">{getDateRange()}</div>
            <button className="mp-nav-arrow" onClick={nextWeek}>›</button>
          </div>

          {/* DAILY VIEW */}
          {currentView === 'daily' && (
            <div className="mp-daily-view">
              <div className="mp-day-selector">
                {days.map((day, index) => (
                  <div key={index} className={`mp-day-tab ${index === selectedDay ? 'mp-active' : ''}`} onClick={() => setSelectedDay(index)}>
                    <div className="mp-day-name-short">{dayShortNames[index]}</div>
                    <div className="mp-day-date-num">{dates[index]}</div>
                  </div>
                ))}
              </div>
              <div className="mp-daily-meals-container">
                {['breakfast', 'lunch', 'dinner'].map((mealType) => {
                  const meal = mealPlan[selectedDay]?.[mealType];
                  return (
                    <div key={mealType} className="mp-daily-meal-section">
                      <h2 className="mp-meal-type-heading">{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h2>
                      <div className="mp-meal-display-card">
                        <div className="mp-meal-image-section">
                          <img src={meal ? meal.image : 'https://via.placeholder.com/150?text=No+Recipe'} alt={meal ? meal.name : 'Empty'} />
                          <div className={`mp-status-badge ${meal?.available ? 'mp-available' : 'mp-unavailable'}`}>
                            {meal ? (meal.available ? 'Available' : 'Missing Items') : 'No recipe'}
                          </div>
                        </div>
                        <div className="mp-meal-details-section">
                          <h3 className="mp-meal-title">{meal ? meal.name : 'No recipe selected'}</h3>
                          {meal && <p className="mp-meal-tagline">{meal.tagline || 'Delicious meal'}</p>}
                          <div className="mp-meal-buttons">
                            {meal && (
                              <button className="mp-view-recipe-btn" onClick={() => viewRecipe(meal._id, meal.name)}>📖 View Recipe</button>
                            )}
                            <button className="mp-add-recipe-btn" onClick={() => openAddRecipeModal(selectedDay, mealType)}>
                              {meal ? '🔄 Change Recipe' : '+ Add Recipe'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* WEEKLY VIEW */}
          {currentView === 'weekly' && (
            <div className="mp-weekly-view">
              <div className="mp-weekly-grid-header">
                <div className="mp-grid-cell mp-header-cell mp-empty-cell"></div>
                <div className="mp-grid-cell mp-header-cell">Breakfast</div>
                <div className="mp-grid-cell mp-header-cell">Lunch</div>
                <div className="mp-grid-cell mp-header-cell">Dinner</div>
              </div>
              {days.map((_, dayIndex) => (
                <div key={dayIndex} className="mp-weekly-grid-row">
                  <div className="mp-grid-cell mp-day-cell">
                    <div className="mp-day-label">
                      <span className="mp-day-short">{dayShortNames[dayIndex]}</span>
                      <span className="mp-day-num">{dates[dayIndex]}</span>
                    </div>
                  </div>
                  {['breakfast', 'lunch', 'dinner'].map((mealType) => {
                    const meal = mealPlan[dayIndex]?.[mealType];
                    return (
                      <div key={mealType} className="mp-grid-cell mp-meal-cell">
                        {meal ? (
                          <div className="mp-weekly-meal-box">
                            <div className="mp-weekly-meal-img-wrapper">
                              <img src={meal.image} alt={meal.name} />
                              <div className={`mp-weekly-status-icon ${meal.available ? 'mp-available' : 'mp-unavailable'}`}></div>
                            </div>
                            <div className="mp-weekly-meal-text">
                              <div className="mp-weekly-meal-name">{meal.name}</div>
                              <div className="mp-weekly-buttons">
                                <button className="mp-weekly-view-recipe-btn" onClick={() => viewRecipe(meal._id, meal.name)}>View Recipe</button>
                                <button className="mp-weekly-change-btn" onClick={() => openAddRecipeModal(dayIndex, mealType)}>Change</button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="mp-empty-meal-box" onClick={() => openAddRecipeModal(dayIndex, mealType)}>
                            <span className="mp-empty-icon">+</span>
                            <span className="mp-empty-text">Add Recipe</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          <div className="mp-plan-actions">
            <button className="mp-action-button mp-save-btn" onClick={savePlan}>Save Plan</button>
          </div>
        </div>
      </div>

      {/* Modal for Recipe Search */}
      {showRecipeModal && (
        <div className="mp-modal-overlay" onClick={() => setShowRecipeModal(false)}>
          <div className="mp-modal" onClick={(e) => e.stopPropagation()}>
            <div className="mp-modal-header">
              <h3>Select a Recipe</h3>
              <button className="mp-close-modal" onClick={() => setShowRecipeModal(false)}>×</button>
            </div>
            <div className="mp-modal-body">
              <input type="text" placeholder="Search recipes by name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="mp-modal-search" autoFocus />
              {loading && <p className="mp-loading-text">Searching...</p>}
              <div className="mp-recipe-results">
                {searchResults.map(recipe => (
                  <div key={recipe._id} className="mp-recipe-result-item" onClick={() => selectRecipe(recipe)}>
                    <img src={recipe.image || 'https://via.placeholder.com/50'} alt={recipe.name} />
                    <div className="mp-recipe-result-info">
                      <div className="mp-recipe-result-name">{recipe.name}</div>
                      <div className="mp-recipe-result-desc">{recipe.dietType} • {recipe.cuisine || 'Any'}</div>
                    </div>
                  </div>
                ))}
                {searchTerm.length > 1 && !loading && searchResults.length === 0 && (
                  <p className="mp-no-results">No recipes found. Try another keyword.</p>
                )}
              </div>
            </div>
            <div className="mp-modal-footer">
              <button className="mp-modal-cancel" onClick={() => setShowRecipeModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealCalender;