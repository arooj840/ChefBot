import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MealFeature.css';

const MealFeature = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isCardClicked, setIsCardClicked] = useState(false);
  
  // Form States
  const [duration, setDuration] = useState('');
  const [dietType, setDietType] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [patientCondition, setPatientCondition] = useState('');
  const [allergies, setAllergies] = useState([]);
  const [allergyInput, setAllergyInput] = useState('');
  const [familyMembers, setFamilyMembers] = useState('2');
  const [budget, setBudget] = useState('');

  const [pantryItems, setPantryItems] = useState([]);

  const totalSlides = 8;
  const progress = (currentSlide / totalSlides) * 100;

  useEffect(() => {
    const savedPantry = localStorage.getItem('pantryItems');
    if (savedPantry) {
      setPantryItems(JSON.parse(savedPantry));
    }
  }, []);

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      if (currentSlide + 1 !== 8) setIsCardClicked(false);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      if (currentSlide - 1 !== 8) setIsCardClicked(false);
    }
  };

  const addAllergy = (e) => {
    if (e.key === 'Enter' && allergyInput.trim()) {
      e.preventDefault();
      setAllergies([...allergies, allergyInput.trim()]);
      setAllergyInput('');
    }
  };

  const removeAllergy = (index) => {
    setAllergies(allergies.filter((_, i) => i !== index));
  };

  const handleFamilySizeSelect = (range) => {
    if (range === '1-2') setFamilyMembers('2');
    else if (range === '3-4') setFamilyMembers('4');
    else if (range === '5-7') setFamilyMembers('7');
    else if (range === '8+') setFamilyMembers('8+');
  };

  const handleCardClick = () => {
    setIsCardClicked(true);
  };

  const goToCalendar = () => {
    console.log("Button clicked - forcing navigation");
    
    const preferences = {
      duration,
      dietType,
      targetAudience,
      ageGroup,
      patientCondition,
      allergies,
      familyMembers,
      budget,
      pantryItems: pantryItems
    };

    localStorage.setItem('mealPreferences', JSON.stringify(preferences));
    
    // DIRECT NAVIGATION - no React Router
    window.location.href = '/calender?mode=pantry';
  };

  return (
    <div className="meal-planner-app">
      <div className="meal-planner-wrapper">

        {/* Slide 1 top banner */}
        {currentSlide === 1 && (
          <>
            <div className="mp-fullscreen-image">
              <div className="mp-fullscreen-content">
                <h1>Smart Meal Planning</h1>
                <p>Create personalized meal plans based on your pantry, budget, and preferences</p>
              </div>
            </div>
            <div className="mp-planning-hero">
              <h1 className="mp-planning-title">Meal Planning Wizard</h1>
              <p className="mp-planning-subtitle">Follow these steps to create your perfect meal plan</p>
            </div>
            <div className="mp-planning-stats">
              <div className="mp-stat-card"><div className="mp-stat-number">1</div><div className="mp-stat-label">Current Step</div></div>
              <div className="mp-stat-card"><div className="mp-stat-number">{totalSlides}</div><div className="mp-stat-label">Total Steps</div></div>
              <div className="mp-stat-card"><div className="mp-stat-number">12%</div><div className="mp-stat-label">Completed</div></div>
            </div>
          </>
        )}

        {currentSlide > 1 && (
          <div className="mp-slide-header">
            <div className="mp-slide-progress">
              <div className="mp-progress-indicator">Step {currentSlide} of {totalSlides}</div>
              <div className="mp-progress-bar-mini"><div className="mp-progress-fill" style={{ width: `${progress}%` }}></div></div>
            </div>
          </div>
        )}

        <div className="mp-slide-container">
          <div className="mp-progress-container">
            <div className="mp-progress-bar" style={{ width: `${progress}%` }}></div>
          </div>

          {/* Slide 1: Welcome */}
          {currentSlide === 1 && (
            <div className="mp-slide mp-welcome-slide">
              <div className="mp-slide-content">
                <h2>Welcome to ChefBot Meal Planner</h2>
                <p className="mp-slide-description">
                  Plan your meals smartly based on your pantry items, budget, and dietary preferences.
                </p>
                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-primary" onClick={nextSlide}>Let's Start! →</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide 2: Duration */}
          {currentSlide === 2 && (
            <div className="mp-slide">
              <div className="mp-slide-content">
                <h2>Choose Planning Duration</h2>
                <div className="mp-options-grid-two">
                  <div className={`mp-option-card ${duration === 'daily' ? 'selected' : ''}`} onClick={() => setDuration('daily')}>
                    <div className="mp-option-image"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400" alt="Daily" /></div>
                    <div className="mp-label">Daily Plan</div>
                    <div className="mp-option-detail">Plan for 1 day • Quick and Simple</div>
                  </div>
                  <div className={`mp-option-card ${duration === 'weekly' ? 'selected' : ''}`} onClick={() => setDuration('weekly')}>
                    <div className="mp-option-image"><img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400" alt="Weekly" /></div>
                    <div className="mp-label">Weekly Plan</div>
                    <div className="mp-option-detail">Plan for 7 days • Organized and Efficient</div>
                  </div>
                </div>
                {duration && (
                  <div className="mp-selection-indicator">
                    Selected: <strong>{duration === 'daily' ? 'Daily Plan (1 Day)' : 'Weekly Plan (7 Days)'}</strong>
                  </div>
                )}
                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-secondary" onClick={prevSlide}>← Back</button>
                  <button className="mp-btn mp-btn-primary" onClick={nextSlide} disabled={!duration}>Next →</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide 3: Diet Type */}
          {currentSlide === 3 && (
            <div className="mp-slide">
              <div className="mp-slide-content">
                <h2>Select Your Diet Type</h2>
                <div className="mp-options-grid-three">
                  <div className={`mp-option-card ${dietType === 'veg' ? 'selected' : ''}`} onClick={() => { setDietType('veg'); setTargetAudience(''); setAgeGroup(''); setPatientCondition(''); }}>
                    <div className="mp-option-image"><img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" alt="Vegetarian" /></div>
                    <div className="mp-label">Vegetarian Only</div>
                    <div className="mp-option-detail">Only plant-based meals</div>
                  </div>
                  <div className={`mp-option-card ${dietType === 'mixed' ? 'selected' : ''}`} onClick={() => { setDietType('mixed'); setTargetAudience(''); setAgeGroup(''); setPatientCondition(''); }}>
                    <div className="mp-option-image"><img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" alt="Mixed" /></div>
                    <div className="mp-label">Mixed</div>
                    <div className="mp-option-detail">Both veg & non-veg meals</div>
                  </div>
                  <div className={`mp-option-card ${dietType === 'non-veg' ? 'selected' : ''}`} onClick={() => { setDietType('non-veg'); setTargetAudience(''); setAgeGroup(''); setPatientCondition(''); }}>
                    <div className="mp-option-image"><img src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400" alt="Non-Vegetarian" /></div>
                    <div className="mp-label">Non-Vegetarian Only</div>
                    <div className="mp-option-detail">Includes meat, fish and eggs</div>
                  </div>
                </div>
                {dietType && (
                  <div className="mp-selection-indicator">
                    Selected: <strong>{dietType === 'veg' ? 'Vegetarian Only' : dietType === 'mixed' ? 'Mixed' : 'Non-Vegetarian Only'}</strong>
                  </div>
                )}
                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-secondary" onClick={prevSlide}>← Back</button>
                  <button className="mp-btn mp-btn-primary" onClick={nextSlide} disabled={!dietType}>Next →</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide 4: Target Audience */}
          {currentSlide === 4 && (
            <div className="mp-slide">
              <div className="mp-slide-content">
                <h2>Who is this meal plan for?</h2>
                <div className="mp-target-audience-grid">
                  <div className={`mp-target-card ${targetAudience === 'general' ? 'selected' : ''}`}
                    onClick={() => { setTargetAudience('general'); setAgeGroup(''); setPatientCondition(''); }}>
                    <div className="mp-target-icon">👨‍👩‍👧‍👦</div>
                    <div className="mp-target-title">General</div>
                  </div>

                  <div className="mp-target-card-wrapper">
                    <div className={`mp-target-card ${targetAudience === 'kids' ? 'selected' : ''}`}
                      onClick={() => { setTargetAudience('kids'); setPatientCondition(''); }}>
                      <div className="mp-target-icon">🧒</div>
                      <div className="mp-target-title">Kids and Teens</div>
                    </div>
                    {targetAudience === 'kids' && (
                      <div className="mp-inline-dropdown">
                        <select
                          className="mp-custom-select"
                          value={ageGroup}
                          onChange={(e) => setAgeGroup(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <option value="">Select Age Group</option>
                          <option value="toddlers">Toddlers (1-3 years)</option>
                          <option value="kids">Kids (4-8 years)</option>
                          <option value="preteens">Pre-teens (9-12 years)</option>
                          <option value="teens">Teenagers (13-18 years)</option>
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="mp-target-card-wrapper">
                    <div className={`mp-target-card ${targetAudience === 'patient' ? 'selected' : ''}`}
                      onClick={() => { setTargetAudience('patient'); setAgeGroup(''); }}>
                      <div className="mp-target-icon">🏥</div>
                      <div className="mp-target-title">Patient Meal Plan</div>
                    </div>
                    {targetAudience === 'patient' && (
                      <div className="mp-inline-dropdown">
                        <select
                          className="mp-custom-select"
                          value={patientCondition}
                          onChange={(e) => setPatientCondition(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <option value="">Select Condition</option>
                          <option value="diabetes">Diabetes</option>
                          <option value="heart">Heart/Cardiac</option>
                          <option value="bp">High Blood Pressure</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {targetAudience && (
                  <div className="mp-selection-indicator">
                    Selected: <strong>
                      {targetAudience === 'general' ? 'General'
                        : targetAudience === 'kids'
                          ? `Kids & Teens${ageGroup ? ` — ${ageGroup === 'toddlers' ? 'Toddlers' : ageGroup === 'kids' ? 'Kids' : ageGroup === 'preteens' ? 'Pre-teens' : 'Teenagers'}` : ''}`
                          : `Patient Meal Plan${patientCondition ? ` — ${patientCondition === 'diabetes' ? 'Diabetes' : patientCondition === 'heart' ? 'Heart/Cardiac' : 'High Blood Pressure'}` : ''}`
                      }
                    </strong>
                  </div>
                )}

                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-secondary" onClick={prevSlide}>← Back</button>
                  <button
                    className="mp-btn mp-btn-primary"
                    onClick={nextSlide}
                    disabled={
                      !targetAudience ||
                      (targetAudience === 'kids' && !ageGroup) ||
                      (targetAudience === 'patient' && !patientCondition)
                    }
                  >Next →</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide 5: Allergies */}
          {currentSlide === 5 && (
            <div className="mp-slide">
              <div className="mp-slide-content">
                <h2>Any Food Allergies?</h2>
                {allergies.length > 0 && (
                  <div className="mp-selection-indicator">
                    Selected Allergies: <strong>{allergies.join(', ')}</strong>
                  </div>
                )}
                <div className="mp-allergy-input-wrapper">
                  <div className="mp-input-group">
                    <div className="mp-tags-container">
                      {allergies.map((allergy, index) => (
                        <div key={index} className="mp-tag mp-allergy-tag">
                          <span>{allergy}</span>
                          <span className="mp-remove" onClick={() => removeAllergy(index)}>×</span>
                        </div>
                      ))}
                      <input
                        type="text"
                        className="mp-tag-input"
                        placeholder="Type an allergy and press Enter..."
                        value={allergyInput}
                        onChange={(e) => setAllergyInput(e.target.value)}
                        onKeyPress={addAllergy}
                      />
                    </div>
                  </div>
                  <div className="mp-allergy-suggestions">
                    <div className="mp-suggestions-header">Common Allergies (Click to add):</div>
                    <div className="mp-suggestion-chips">
                      {['Eggs', 'Fish', 'Nuts', 'Dairy', 'Wheat', 'Shellfish'].map(item => (
                        <div key={item} className="mp-suggestion-chip"
                          onClick={() => { if (!allergies.includes(item)) setAllergies([...allergies, item]); }}>
                          + {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mp-info-card">
                    <strong>Safety First:</strong> Recipes containing these ingredients will be automatically excluded from your meal plan.
                  </div>
                </div>
                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-secondary" onClick={prevSlide}>← Back</button>
                  <button className="mp-btn mp-btn-skip" onClick={nextSlide}>Skip</button>
                  <button className="mp-btn mp-btn-primary" onClick={nextSlide}>Next →</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide 6: Family Members */}
          {currentSlide === 6 && (
            <div className="mp-slide">
              <div className="mp-slide-content">
                <h2>How Many Family Members?</h2>
                {familyMembers && (
                  <div className="mp-selection-indicator">
                    Cooking for: <strong>{familyMembers} {familyMembers === '1' ? 'person' : 'people'}</strong>
                  </div>
                )}
                <div className="mp-family-counter-container">
                  <button className="mp-counter-btn minus-btn"
                    onClick={() => { const num = familyMembers === '8+' ? 8 : parseInt(familyMembers); if (num > 1) setFamilyMembers(String(num - 1)); }}
                    disabled={familyMembers === '1'}>−</button>
                  <div className="mp-counter-display">
                    <div className="mp-counter-number">{familyMembers}</div>
                    <div className="mp-counter-label">{familyMembers === '1' ? 'Person' : 'People'}</div>
                  </div>
                  <button className="mp-counter-btn plus-btn"
                    onClick={() => { const num = familyMembers === '8+' ? 8 : parseInt(familyMembers); if (num < 8) setFamilyMembers(String(num + 1)); else setFamilyMembers('8+'); }}>+</button>
                </div>
                <div className="mp-family-size-guide">
                  <div className="mp-size-guide-item" onClick={() => handleFamilySizeSelect('1-2')}><span className="mp-guide-number">1-2</span><span className="mp-guide-text">Single or Couple</span></div>
                  <div className="mp-size-guide-item" onClick={() => handleFamilySizeSelect('3-4')}><span className="mp-guide-number">3-4</span><span className="mp-guide-text">Small Family</span></div>
                  <div className="mp-size-guide-item" onClick={() => handleFamilySizeSelect('5-7')}><span className="mp-guide-number">5-7</span><span className="mp-guide-text">Medium Family</span></div>
                  <div className="mp-size-guide-item" onClick={() => handleFamilySizeSelect('8+')}><span className="mp-guide-number">8+</span><span className="mp-guide-text">Large Family</span></div>
                </div>
                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-secondary" onClick={prevSlide}>← Back</button>
                  <button className="mp-btn mp-btn-primary" onClick={nextSlide}>Next →</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide 7: Budget */}
          {currentSlide === 7 && (
            <div className="mp-slide">
              <div className="mp-slide-content">
                <h2>Set Your Budget</h2>
                <div className="mp-options-grid-four">
                  <div className={`mp-option-card ${budget === 'economy' ? 'selected' : ''}`} onClick={() => setBudget('economy')}><div className="mp-budget-icon">💰</div><div className="mp-label">Economy</div><div className="mp-option-detail">Budget friendly meals</div></div>
                  <div className={`mp-option-card ${budget === 'standard' ? 'selected' : ''}`} onClick={() => setBudget('standard')}><div className="mp-budget-icon">💵</div><div className="mp-label">Standard</div><div className="mp-option-detail">Balanced options</div></div>
                  <div className={`mp-option-card ${budget === 'premium' ? 'selected' : ''}`} onClick={() => setBudget('premium')}><div className="mp-budget-icon">💎</div><div className="mp-label">Premium</div><div className="mp-option-detail">More variety</div></div>
                  <div className={`mp-option-card ${budget === 'deluxe' ? 'selected' : ''}`} onClick={() => setBudget('deluxe')}><div className="mp-budget-icon">👑</div><div className="mp-label">Deluxe</div><div className="mp-option-detail">Best ingredients</div></div>
                </div>
                {budget && (
                  <div className="mp-selection-indicator">
                    Selected: <strong>{budget.charAt(0).toUpperCase() + budget.slice(1)}</strong>
                  </div>
                )}
                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-secondary" onClick={prevSlide}>← Back</button>
                  <button className="mp-btn mp-btn-primary" onClick={nextSlide} disabled={!budget}>Next →</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide 8: AI Plan Generation - Summary only after card click */}
          {currentSlide === 8 && (
            <div className="mp-slide">
              <div className="mp-slide-content">
                <h2>Generate Your AI Meal Plan</h2>
                <div className="mp-single-card-container">
                  <div className="mp-ai-card" onClick={handleCardClick}>
                    <div className="mp-ai-card-icon">🤖</div>
                    <h3>Create Your Plan</h3>
                    <p>Generate meal plan using AI based on the ingredients you already have in your pantry. Reduce waste and save money!</p>
                  </div>
                </div>

                {/* Summary box - only show after card is clicked */}
                {isCardClicked && (
                  <div className="mp-plan-summary-box">
                    <h3>Your Plan Summary:</h3>
                    <ul>
                      <li><strong>Duration:</strong> {duration === 'daily' ? '1 Day' : '7 Days'}</li>
                      <li><strong>Diet:</strong> {dietType === 'veg' ? 'Vegetarian Only' : dietType === 'mixed' ? 'Mixed' : 'Non-Vegetarian Only'}</li>
                      <li><strong>Target:</strong> {targetAudience === 'general' ? 'General' : targetAudience === 'kids' ? `Kids (${ageGroup})` : `Patient (${patientCondition})`}</li>
                      <li><strong>Family Size:</strong> {familyMembers} {familyMembers === '1' ? 'person' : 'people'}</li>
                      <li><strong>Budget:</strong> {budget.charAt(0).toUpperCase() + budget.slice(1)}</li>
                      {allergies.length > 0 && <li><strong>Allergies:</strong> {allergies.join(', ')}</li>}
                      <li><strong>Method:</strong> AI Plan (using your pantry)</li>
                    </ul>
                  </div>
                )}

                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-secondary" onClick={prevSlide}>← Back</button>
                  <button className="mp-btn mp-btn-primary mp-btn-generate" onClick={goToCalendar}>
                    Generate AI Plan →
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default MealFeature;