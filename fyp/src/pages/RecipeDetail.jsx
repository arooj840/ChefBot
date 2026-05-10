import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  
  // ✅ Scaling state
  const [selectedMembers, setSelectedMembers] = useState(4);
  const [showMembersDropdown, setShowMembersDropdown] = useState(false);
  
  const speechSynthesisRef = useRef(null);

  // ✅ Member options for scaling
  const memberOptions = [2, 4, 6, 8, 10];

  useEffect(() => {
    // ✅ Check URL for members parameter
    const params = new URLSearchParams(location.search);
    const membersParam = params.get('members');
    if (membersParam) {
      setSelectedMembers(parseInt(membersParam));
    }
    
    fetchRecipe();
  }, [id, location.search]);

  const fetchRecipe = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      // ✅ Pass members to API for scaling
      const response = await fetch(`http://localhost:5000/api/recipes/${id}?members=${selectedMembers}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (response.ok && data) {
        console.log("Setting recipe:", data);
        console.log("Scale factor:", data.scaleFactor);
        console.log("Requested members:", data.requestedMembers);
        setRecipe(data);
      } else {
        setError(data.message || "Recipe not found");
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setError("Failed to load recipe");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle member change for scaling
  const handleMemberChange = async (members) => {
    setSelectedMembers(members);
    setShowMembersDropdown(false);
    
    // Refetch recipe with new members
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/recipes/${id}?members=${members}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (response.ok && data) {
        setRecipe(data);
      } else {
        setError(data.message || "Recipe not found");
      }
    } catch (error) {
      console.error("Error fetching scaled recipe:", error);
      setError("Failed to load recipe");
    } finally {
      setLoading(false);
    }
  };

  const speakStep = (stepText) => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(stepText);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    utterance.onend = () => {
      if (isPlaying && currentStep < (recipe?.stepsRaw?.length || 0) - 1) {
        setCurrentStep(prev => prev + 1);
      } else if (isPlaying && currentStep === (recipe?.stepsRaw?.length || 0) - 1) {
        setIsPlaying(false);
        setCurrentStep(0);
      }
    };

    utterance.onerror = () => {
      console.error('Speech synthesis error');
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
    speechSynthesisRef.current = utterance;
  };

  const handlePlayPause = () => {
    if (!recipe) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      if (recipe.stepsRaw && recipe.stepsRaw[currentStep]) {
        speakStep(recipe.stepsRaw[currentStep]);
      }
    }
  };

  const handleNextStep = () => {
    if (!recipe || !recipe.stepsRaw) return;
    
    if (currentStep < recipe.stepsRaw.length - 1) {
      window.speechSynthesis.cancel();
      setCurrentStep(prev => prev + 1);
      if (isPlaying && recipe.stepsRaw[currentStep + 1]) {
        speakStep(recipe.stepsRaw[currentStep + 1]);
      }
    }
  };

  const handlePrevStep = () => {
    if (!recipe || !recipe.stepsRaw) return;
    
    if (currentStep > 0) {
      window.speechSynthesis.cancel();
      setCurrentStep(prev => prev - 1);
      if (isPlaying && recipe.stepsRaw[currentStep - 1]) {
        speakStep(recipe.stepsRaw[currentStep - 1]);
      }
    }
  };

  const handleRestart = () => {
    if (!recipe || !recipe.stepsRaw) return;
    
    window.speechSynthesis.cancel();
    setCurrentStep(0);
    if (isPlaying && recipe.stepsRaw[0]) {
      speakStep(recipe.stepsRaw[0]);
    }
  };

  useEffect(() => {
    if (recipe && recipe.stepsRaw && recipe.stepsRaw.length > 0) {
      setProgress(((currentStep + 1) / recipe.stepsRaw.length) * 100);
    }
  }, [currentStep, recipe]);

  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="recipe-detail-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading recipe...</p>
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="recipe-detail-page">
        <div className="error-container">
          <h2>❌ {error || "Recipe not found"}</h2>
          <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="recipe-detail-page">
      <div 
        className="recipe-modal-overlay"
        onClick={() => navigate(-1)}
      >
        <div 
          className="recipe-modal"
          style={{ backgroundImage: `url(${recipe.image})` }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="recipe-modal-close" onClick={() => navigate(-1)}>✕</button>
          
          <div className="recipe-modal-header">
            <div className="recipe-modal-title">
              <h2>{recipe.title}</h2>
              {recipe.tagline && <p className="recipe-modal-tagline">{recipe.tagline}</p>}
            </div>
            
            {/* ✅ Members Selection for Scaling */}
            <div className="recipe-members-selector">
              <div className="members-dropdown-container">
                <button 
                  className="members-dropdown-btn"
                  onClick={() => setShowMembersDropdown(!showMembersDropdown)}
                >
                  👥 {selectedMembers} persons 
                  <span className="dropdown-arrow">{showMembersDropdown ? '▲' : '▼'}</span>
                </button>
                {showMembersDropdown && (
                  <div className="members-dropdown-menu">
                    {memberOptions.map(members => (
                      <div 
                        key={members}
                        className={`members-option ${selectedMembers === members ? 'active' : ''}`}
                        onClick={() => handleMemberChange(members)}
                      >
                        {members} persons
                        {recipe.baseServings === members && <span className="base-badge">Base</span>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="recipe-meta-info">
                {recipe.cookingTime && <span className="meta-badge">⏱️ {recipe.cookingTime} mins</span>}
                {recipe.difficulty && <span className="meta-badge">📊 {recipe.difficulty}</span>}
                {recipe.category && <span className="meta-badge">🍽️ {recipe.category}</span>}
              </div>
            </div>
          </div>

          {/* ✅ Scaling info banner */}
          {recipe.scaleFactor && recipe.scaleFactor !== 1 && (
            <div className="scaling-info-banner">
              <span className="scaling-icon">⚖️</span>
              <span>Scaled from {recipe.baseServings} to {selectedMembers} persons</span>
              <span className="scaling-factor">({recipe.scaleFactor}x)</span>
            </div>
          )}

          <div className="recipe-modal-content">
            {/* INGREDIENTS - Scaled */}
            <div className="recipe-modal-ingredients">
              <h3>🛒 Ingredients {selectedMembers !== recipe.baseServings && `(for ${selectedMembers} persons)`}</h3>
              <div className="ingredients-list">
                {recipe.ingredientsRaw?.map((ingredient, idx) => (
                  <div key={idx} className="ingredient-item">
                    <span className="ingredient-bullet">•</span>
                    <span className="ingredient-text">{ingredient}</span>
                  </div>
                ))}
              </div>
              {recipe.scaleFactor && recipe.scaleFactor !== 1 && (
                <p className="scale-note">✨ Ingredients scaled from original recipe</p>
              )}
            </div>

            {/* STEPS */}
            <div className="recipe-modal-steps">
              <h3>👨‍🍳 Steps to Make</h3>
              <div className="steps-list">
                {recipe.stepsRaw && recipe.stepsRaw.length > 0 ? (
                  recipe.stepsRaw.map((step, idx) => (
                    <div key={idx} className="step-item">
                      <div className="step-number">{idx + 1}</div>
                      <div className="step-text">{step}</div>
                    </div>
                  ))
                ) : (
                  <p>No steps available</p>
                )}
              </div>
            </div>

            {/* VOICE INSTRUCTIONS */}
            <div className="recipe-modal-voice">
              <h3>🔊 Voice Instructions</h3>
              
              <div className="voice-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="progress-info">
                  <span>Step {currentStep + 1} of {recipe.stepsRaw?.length || 0}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>

              <div className="current-step">
                <p><strong>Current Step:</strong> {recipe.stepsRaw?.[currentStep] || 'Complete!'}</p>
              </div>

              <div className="voice-controls">
                <button className={`voice-btn ${isPlaying ? 'pause' : 'play'}`} onClick={handlePlayPause}>
                  {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                </button>
                <div className="step-buttons">
                  <button className="step-btn" onClick={handlePrevStep} disabled={currentStep === 0}>
                    ⏮️ Prev
                  </button>
                  <button className="step-btn" onClick={handleRestart}>
                    🔄 Restart
                  </button>
                  <button className="step-btn" onClick={handleNextStep} disabled={currentStep === (recipe.stepsRaw?.length || 0) - 1}>
                    Next ⏭️
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="back-button-container">
        <button className="back-home-btn" onClick={() => navigate(-1)}>
          <span>←</span> Back
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;