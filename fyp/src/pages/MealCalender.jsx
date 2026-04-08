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
      console.warn('No plan found, using empty slots');
      const emptyPlan = {};
      for (let i = 0; i < 7; i++) {
        emptyPlan[i] = { breakfast: null, lunch: null, dinner: null };
      }
      setMealPlan(emptyPlan);
    }
  }, [mode]);

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

  // Function to navigate to recipe detail page
  const viewRecipe = (recipeId, recipeName) => {
    if (!recipeId) {
      // fallback: search by name if no ID
      navigate(`/recipes?search=${encodeURIComponent(recipeName)}`);
    } else {
      navigate(`/recipe/${recipeId}`);
    }
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

  const handleAddRecipe = (dayIndex, mealType) => {
    alert(`Add recipe for ${days[dayIndex]} - ${mealType}. This will open recipe search modal.`);
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
            <button
              className={`mp-view-btn ${currentView === 'daily' ? 'mp-active' : ''}`}
              onClick={() => switchView('daily')}
            >
              Daily View
            </button>
            <button
              className={`mp-view-btn ${currentView === 'weekly' ? 'mp-active' : ''}`}
              onClick={() => switchView('weekly')}
            >
              Weekly View
            </button>
          </div>

          <div className="mp-date-navigation">
            <button className="mp-nav-arrow" onClick={previousWeek}>‹</button>
            <div className="mp-date-range">{getDateRange()}</div>
            <button className="mp-nav-arrow" onClick={nextWeek}>›</button>
          </div>

          {/* ========= DAILY VIEW ========= */}
          {currentView === 'daily' && (
            <div className="mp-daily-view">
              <div className="mp-day-selector">
                {days.map((day, index) => (
                  <div
                    key={index}
                    className={`mp-day-tab ${index === selectedDay ? 'mp-active' : ''}`}
                    onClick={() => setSelectedDay(index)}
                  >
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
                      <h2 className="mp-meal-type-heading">
                        {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                      </h2>
                      <div className="mp-meal-display-card">
                        <div className="mp-meal-image-section">
                          <img 
                            src={meal ? meal.image : 'https://via.placeholder.com/150?text=No+Recipe'} 
                            alt={meal ? meal.name : 'Empty'} 
                          />
                          <div className={`mp-status-badge ${meal?.available ? 'mp-available' : 'mp-unavailable'}`}>
                            {meal ? (meal.available ? 'Available' : 'Missing Items') : 'No recipe'}
                          </div>
                        </div>
                        <div className="mp-meal-details-section">
                          <h3 className="mp-meal-title">{meal ? meal.name : 'No recipe selected'}</h3>
                          {!meal && mode === 'custom' && (
                            <button 
                              className="mp-add-recipe-btn" 
                              onClick={() => handleAddRecipe(selectedDay, mealType)}
                            >
                              + Add Recipe
                            </button>
                          )}
                          {meal && meal.tagline && (
                            <p className="mp-meal-tagline">{meal.tagline}</p>
                          )}
                          {/* 🔽 NEW: View Complete Recipe Button (only if meal exists) */}
                          {meal && (
                            <button 
                              className="mp-view-recipe-btn"
                              onClick={() => viewRecipe(meal._id || meal.id, meal.name)}
                            >
                              📖 View Complete Recipe
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========= WEEKLY VIEW ========= */}
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
                              {/* 🔽 NEW: Small View Recipe button for weekly view */}
                              <button 
                                className="mp-weekly-view-recipe-btn"
                                onClick={() => viewRecipe(meal._id || meal.id, meal.name)}
                              >
                                View Recipe
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="mp-empty-meal-box" onClick={() => mode === 'custom' && handleAddRecipe(dayIndex, mealType)}>
                            <span className="mp-empty-icon">+</span>
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
            <button className="mp-action-button mp-save-btn" onClick={savePlan}>
              Save Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCalender;