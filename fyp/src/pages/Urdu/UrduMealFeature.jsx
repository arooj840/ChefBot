import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../MealFeature.css';

const UrduMealFeature = () => {
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
                <h1>سمارٹ کھانے کا پلان</h1>
                <p>اپنی پینٹری، بجٹ اور پسند کے مطابق ذاتی پلان بنائیں</p>
              </div>
            </div>
            <div className="mp-planning-hero">
              <h1 className="mp-planning-title">کھانے کا پلان</h1>
              <p className="mp-planning-subtitle">یہ قدم مکمل کریں اور اپنا بہترین پلان بنائیں</p>
            </div>
            <div className="mp-planning-stats">
              <div className="mp-stat-card"><div className="mp-stat-number">1</div><div className="mp-stat-label">موجودہ قدم</div></div>
              <div className="mp-stat-card"><div className="mp-stat-number">{totalSlides}</div><div className="mp-stat-label">کل قدم</div></div>
              <div className="mp-stat-card"><div className="mp-stat-number">12%</div><div className="mp-stat-label">مکمل</div></div>
            </div>
          </>
        )}

        {currentSlide > 1 && (
          <div className="mp-slide-header">
            <div className="mp-slide-progress">
              <div className="mp-progress-indicator">قدم {currentSlide} / {totalSlides}</div>
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
                <h2>شیف بوٹ میں خوش آمدید</h2>
                <p className="mp-slide-description">
                  اپنی پینٹری کی چیزیں، بجٹ اور کھانے کی پسند کے مطابق پلان بنائیں۔
                </p>
                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-primary" onClick={nextSlide}>شروع کریں →</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide 2: Duration */}
          {currentSlide === 2 && (
            <div className="mp-slide">
              <div className="mp-slide-content">
                <h2>مدت چنیں</h2>
                <div className="mp-options-grid-two">
                  <div className={`mp-option-card ${duration === 'daily' ? 'selected' : ''}`} onClick={() => setDuration('daily')}>
                    <div className="mp-option-image"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400" alt="Daily" /></div>
                    <div className="mp-label">روزانہ پلان</div>
                    <div className="mp-option-detail">1 دن کا پلان • تیز اور آسان</div>
                  </div>
                  <div className={`mp-option-card ${duration === 'weekly' ? 'selected' : ''}`} onClick={() => setDuration('weekly')}>
                    <div className="mp-option-image"><img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400" alt="Weekly" /></div>
                    <div className="mp-label">ہفتہ وار پلان</div>
                    <div className="mp-option-detail">7 دن کا پلان • آسان اور بہتر</div>
                  </div>
                </div>
                {duration && (
                  <div className="mp-selection-indicator">
                    منتخب: <strong>{duration === 'daily' ? 'روزانہ پلان (1 دن)' : 'ہفتہ وار پلان (7 دن)'}</strong>
                  </div>
                )}
                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-secondary" onClick={prevSlide}>← پیچھے</button>
                  <button className="mp-btn mp-btn-primary" onClick={nextSlide} disabled={!duration}>اگلا →</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide 3: Diet Type */}
          {currentSlide === 3 && (
            <div className="mp-slide">
              <div className="mp-slide-content">
                <h2>خوراک کی قسم منتخب کریں</h2>
                <div className="mp-options-grid-three">
                  <div className={`mp-option-card ${dietType === 'veg' ? 'selected' : ''}`} onClick={() => { setDietType('veg'); setTargetAudience(''); setAgeGroup(''); setPatientCondition(''); }}>
                    <div className="mp-option-image"><img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" alt="Vegetarian" /></div>
                    <div className="mp-label">صرف سبزی</div>
                    <div className="mp-option-detail">صرف سبزیوں والا کھانا</div>
                  </div>
                  <div className={`mp-option-card ${dietType === 'mixed' ? 'selected' : ''}`} onClick={() => { setDietType('mixed'); setTargetAudience(''); setAgeGroup(''); setPatientCondition(''); }}>
                    <div className="mp-option-image"><img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" alt="Mixed" /></div>
                    <div className="mp-label">مکس</div>
                    <div className="mp-option-detail">سبزی اور گوشت دونوں</div>
                  </div>
                  <div className={`mp-option-card ${dietType === 'non-veg' ? 'selected' : ''}`} onClick={() => { setDietType('non-veg'); setTargetAudience(''); setAgeGroup(''); setPatientCondition(''); }}>
                    <div className="mp-option-image"><img src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400" alt="Non-Vegetarian" /></div>
                    <div className="mp-label">صرف گوشت</div>
                    <div className="mp-option-detail">گوشت، مچھلی اور انڈے شامل</div>
                  </div>
                </div>
                {dietType && (
                  <div className="mp-selection-indicator">
                    منتخب: <strong>{dietType === 'veg' ? 'صرف سبزی' : dietType === 'mixed' ? 'مکس' : 'صرف گوشت'}</strong>
                  </div>
                )}
                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-secondary" onClick={prevSlide}>← پیچھے</button>
                  <button className="mp-btn mp-btn-primary" onClick={nextSlide} disabled={!dietType}>اگلا →</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide 4: Target Audience */}
          {currentSlide === 4 && (
            <div className="mp-slide">
              <div className="mp-slide-content">
                <h2>یہ پلان کس کے لیے ہے؟</h2>
                <div className="mp-target-audience-grid">
                  <div className={`mp-target-card ${targetAudience === 'general' ? 'selected' : ''}`}
                    onClick={() => { setTargetAudience('general'); setAgeGroup(''); setPatientCondition(''); }}>
                    <div className="mp-target-icon">👨‍👩‍👧‍👦</div>
                    <div className="mp-target-title">عام</div>
                  </div>

                  <div className="mp-target-card-wrapper">
                    <div className={`mp-target-card ${targetAudience === 'kids' ? 'selected' : ''}`}
                      onClick={() => { setTargetAudience('kids'); setPatientCondition(''); }}>
                      <div className="mp-target-icon">🧒</div>
                      <div className="mp-target-title">بچے اور نوعمر</div>
                    </div>
                    {targetAudience === 'kids' && (
                      <div className="mp-inline-dropdown">
                        <select
                          className="mp-custom-select"
                          value={ageGroup}
                          onChange={(e) => setAgeGroup(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <option value="">عمر کا گروپ منتخب کریں</option>
                          <option value="toddlers">چھوٹے بچے (1-3 سال)</option>
                          <option value="kids">بچے (4-8 سال)</option>
                          <option value="preteens">نوعمر (9-12 سال)</option>
                          <option value="teens">نوجوان (13-18 سال)</option>
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="mp-target-card-wrapper">
                    <div className={`mp-target-card ${targetAudience === 'patient' ? 'selected' : ''}`}
                      onClick={() => { setTargetAudience('patient'); setAgeGroup(''); }}>
                      <div className="mp-target-icon">🏥</div>
                      <div className="mp-target-title">مریض کے لیے</div>
                    </div>
                    {targetAudience === 'patient' && (
                      <div className="mp-inline-dropdown">
                        <select
                          className="mp-custom-select"
                          value={patientCondition}
                          onChange={(e) => setPatientCondition(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <option value="">بیماری منتخب کریں</option>
                          <option value="diabetes">شوگر</option>
                          <option value="heart">دل کی بیماری</option>
                          <option value="bp">ہائی بلڈ پریشر</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {targetAudience && (
                  <div className="mp-selection-indicator">
                    منتخب: <strong>
                      {targetAudience === 'general' ? 'عام'
                        : targetAudience === 'kids'
                          ? `بچے${ageGroup ? ` — ${ageGroup === 'toddlers' ? 'چھوٹے بچے' : ageGroup === 'kids' ? 'بچے' : ageGroup === 'preteens' ? 'نوعمر' : 'نوجوان'}` : ''}`
                          : `مریض${patientCondition ? ` — ${patientCondition === 'diabetes' ? 'شوگر' : patientCondition === 'heart' ? 'دل کی بیماری' : 'ہائی بلڈ پریشر'}` : ''}`
                      }
                    </strong>
                  </div>
                )}

                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-secondary" onClick={prevSlide}>← پیچھے</button>
                  <button
                    className="mp-btn mp-btn-primary"
                    onClick={nextSlide}
                    disabled={
                      !targetAudience ||
                      (targetAudience === 'kids' && !ageGroup) ||
                      (targetAudience === 'patient' && !patientCondition)
                    }
                  >اگلا →</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide 5: Allergies */}
          {currentSlide === 5 && (
            <div className="mp-slide">
              <div className="mp-slide-content">
                <h2>کیا آپ کو کھانے سے الرجی ہے؟</h2>
                {allergies.length > 0 && (
                  <div className="mp-selection-indicator">
                    منتخب الرجیاں: <strong>{allergies.join(', ')}</strong>
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
                        placeholder="الرجی لکھیں اور Enter دبائیں..."
                        value={allergyInput}
                        onChange={(e) => setAllergyInput(e.target.value)}
                        onKeyPress={addAllergy}
                      />
                    </div>
                  </div>
                  <div className="mp-allergy-suggestions">
                    <div className="mp-suggestions-header">عام الرجیاں (شامل کرنے کے لیے کلک کریں):</div>
                    <div className="mp-suggestion-chips">
                      {['انڈے', 'مچھلی', 'مغز', 'دودھ', 'گندم', 'شیل فش'].map(item => (
                        <div key={item} className="mp-suggestion-chip"
                          onClick={() => { if (!allergies.includes(item)) setAllergies([...allergies, item]); }}>
                          + {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mp-info-card">
                    <strong>پہلے تحفظ:</strong> ان اشیاء پر مشتمل پکوان آپ کے پلان سے اپنے آپ خارج کر دیے جائیں گے۔
                  </div>
                </div>
                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-secondary" onClick={prevSlide}>← پیچھے</button>
                  <button className="mp-btn mp-btn-skip" onClick={nextSlide}>چھوڑیں</button>
                  <button className="mp-btn mp-btn-primary" onClick={nextSlide}>اگلا →</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide 6: Family Members */}
          {currentSlide === 6 && (
            <div className="mp-slide">
              <div className="mp-slide-content">
                <h2>خاندان کے کتنے افراد ہیں؟</h2>
                {familyMembers && (
                  <div className="mp-selection-indicator">
                    کھانا پک رہا ہے: <strong>{familyMembers} {familyMembers === '1' ? 'فرد' : 'افراد'}</strong>
                  </div>
                )}
                <div className="mp-family-counter-container">
                  <button className="mp-counter-btn minus-btn"
                    onClick={() => { const num = familyMembers === '8+' ? 8 : parseInt(familyMembers); if (num > 1) setFamilyMembers(String(num - 1)); }}
                    disabled={familyMembers === '1'}>−</button>
                  <div className="mp-counter-display">
                    <div className="mp-counter-number">{familyMembers}</div>
                    <div className="mp-counter-label">{familyMembers === '1' ? 'فرد' : 'افراد'}</div>
                  </div>
                  <button className="mp-counter-btn plus-btn"
                    onClick={() => { const num = familyMembers === '8+' ? 8 : parseInt(familyMembers); if (num < 8) setFamilyMembers(String(num + 1)); else setFamilyMembers('8+'); }}>+</button>
                </div>
                <div className="mp-family-size-guide">
                  <div className="mp-size-guide-item" onClick={() => handleFamilySizeSelect('1-2')}><span className="mp-guide-number">1-2</span><span className="mp-guide-text">اکیلا یا جوڑا</span></div>
                  <div className="mp-size-guide-item" onClick={() => handleFamilySizeSelect('3-4')}><span className="mp-guide-number">3-4</span><span className="mp-guide-text">چھوٹا خاندان</span></div>
                  <div className="mp-size-guide-item" onClick={() => handleFamilySizeSelect('5-7')}><span className="mp-guide-number">5-7</span><span className="mp-guide-text">درمیانی خاندان</span></div>
                  <div className="mp-size-guide-item" onClick={() => handleFamilySizeSelect('8+')}><span className="mp-guide-number">8+</span><span className="mp-guide-text">بڑا خاندان</span></div>
                </div>
                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-secondary" onClick={prevSlide}>← پیچھے</button>
                  <button className="mp-btn mp-btn-primary" onClick={nextSlide}>اگلا →</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide 7: Budget */}
          {currentSlide === 7 && (
            <div className="mp-slide">
              <div className="mp-slide-content">
                <h2>اپنا بجٹ مقرر کریں</h2>
                <div className="mp-options-grid-four">
                  <div className={`mp-option-card ${budget === 'economy' ? 'selected' : ''}`} onClick={() => setBudget('economy')}><div className="mp-budget-icon">💰</div><div className="mp-label">کفایتی</div><div className="mp-option-detail">کم بجٹ والے کھانے</div></div>
                  <div className={`mp-option-card ${budget === 'standard' ? 'selected' : ''}`} onClick={() => setBudget('standard')}><div className="mp-budget-icon">💵</div><div className="mp-label">معمولی</div><div className="mp-option-detail">متوازن اختیارات</div></div>
                  <div className={`mp-option-card ${budget === 'premium' ? 'selected' : ''}`} onClick={() => setBudget('premium')}><div className="mp-budget-icon">💎</div><div className="mp-label">اعلی</div><div className="mp-option-detail">زیادہ اقسام</div></div>
                  <div className={`mp-option-card ${budget === 'deluxe' ? 'selected' : ''}`} onClick={() => setBudget('deluxe')}><div className="mp-budget-icon">👑</div><div className="mp-label">بہترین</div><div className="mp-option-detail">بہترین اجزاء</div></div>
                </div>
                {budget && (
                  <div className="mp-selection-indicator">
                    منتخب: <strong>
                      {budget === 'economy' ? 'کفایتی' : budget === 'standard' ? 'معمولی' : budget === 'premium' ? 'اعلی' : 'بہترین'}
                    </strong>
                  </div>
                )}
                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-secondary" onClick={prevSlide}>← پیچھے</button>
                  <button className="mp-btn mp-btn-primary" onClick={nextSlide} disabled={!budget}>اگلا →</button>
                </div>
              </div>
            </div>
          )}

          {/* Slide 8: AI Plan Generation */}
          {currentSlide === 8 && (
            <div className="mp-slide">
              <div className="mp-slide-content">
                <h2>AI کھانے کا پلان بنائیں</h2>
                <div className="mp-single-card-container">
                  <div className="mp-ai-card" onClick={handleCardClick}>
                    <div className="mp-ai-card-icon">🤖</div>
                    <h3>AI سے پلان بنائیں</h3>
                    <p>AI آپ کی پینٹری میں موجود اشیاء کی بنیاد پر کھانے کا پلان تیار کرے گا۔ ضائع ہونے سے بچیں اور پیسے بچائیں۔</p>
                  </div>
                </div>

                {isCardClicked && (
                  <div className="mp-plan-summary-box">
                    <h3>آپ کے پلان کا خلاصہ:</h3>
                    <ul>
                      <li><strong>مدت:</strong> {duration === 'daily' ? '1 دن' : '7 دن'}</li>
                      <li><strong>خوراک:</strong> {dietType === 'veg' ? 'صرف سبزی' : dietType === 'mixed' ? 'مکس' : 'صرف گوشت'}</li>
                      <li><strong>ٹارگٹ:</strong> {targetAudience === 'general' ? 'عام' : targetAudience === 'kids' ? `بچے (${ageGroup === 'toddlers' ? 'چھوٹے بچے' : ageGroup === 'kids' ? 'بچے' : ageGroup === 'preteens' ? 'نوعمر' : 'نوجوان'})` : `مریض (${patientCondition === 'diabetes' ? 'شوگر' : patientCondition === 'heart' ? 'دل کی بیماری' : 'ہائی بلڈ پریشر'})`}</li>
                      <li><strong>خاندان:</strong> {familyMembers} {familyMembers === '1' ? 'فرد' : 'افراد'}</li>
                      <li><strong>بجٹ:</strong> {budget === 'economy' ? 'کفایتی' : budget === 'standard' ? 'معمولی' : budget === 'premium' ? 'اعلی' : 'بہترین'}</li>
                      {allergies.length > 0 && <li><strong>الرجیاں:</strong> {allergies.join(', ')}</li>}
                      <li><strong>طریقہ:</strong> AI پلان (آپ کی پینٹری استعمال کرتے ہوئے)</li>
                    </ul>
                  </div>
                )}

                <div className="mp-button-group">
                  <button className="mp-btn mp-btn-secondary" onClick={prevSlide}>← پیچھے</button>
                  <button className="mp-btn mp-btn-primary mp-btn-generate" onClick={goToCalendar} disabled={!isCardClicked}>
  AI پلان بنائیں →
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

export default UrduMealFeature;