import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MealFeatureUrdu.css';

const MealFeatureUrdu = () => {
  const navigate = useNavigate();
  const [maujoodaSlide, setMaujoodaSlide] = useState(1);

  const [muddat, setMuddat] = useState('');
  const [khanePaKism, setKhanePaKism] = useState('');
  const [kinKeLiye, setKinKeLiye] = useState('');
  const [umarGroup, setUmarGroup] = useState('');
  const [marizkiHalat, setMarizkiHalat] = useState('');
  const [allergies, setAllergies] = useState([]);
  const [allergyInput, setAllergyInput] = useState('');
  const [gharKeLog, setGharKeLog] = useState('2');
  const [bajat, setBajat] = useState('');
  const [planKaTareeqa, setPlanKaTareeqa] = useState('');
  const [pantryCheeZein, setPantryCheeZein] = useState([]);

  const kulSlides = 8;
  const taraqqiBar = (maujoodaSlide / kulSlides) * 100;

  useEffect(() => {
    const maahfoozPantry = localStorage.getItem('pantryItems');
    if (maahfoozPantry) {
      setPantryCheeZein(JSON.parse(maahfoozPantry));
    }
  }, []);

  const aglaSlide = () => {
    if (maujoodaSlide < kulSlides) {
      setMaujoodaSlide(maujoodaSlide + 1);
      setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
    }
  };

  const pichlaaSlide = () => {
    if (maujoodaSlide > 1) {
      setMaujoodaSlide(maujoodaSlide - 1);
      setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
    }
  };

  const allergyDaalein = (e) => {
    if (e.key === 'Enter' && allergyInput.trim()) {
      e.preventDefault();
      setAllergies([...allergies, allergyInput.trim()]);
      setAllergyInput('');
    }
  };

  const allergyHataein = (index) => {
    setAllergies(allergies.filter((_, i) => i !== index));
  };

  const gharKaSaizChunein = (range) => {
    if (range === '1-2') setGharKeLog('2');
    else if (range === '3-4') setGharKeLog('4');
    else if (range === '5-7') setGharKeLog('7');
    else if (range === '8+') setGharKeLog('8+');
  };

  const planKaTareeqaChunein = (tareeqa) => {
    setPlanKaTareeqa(tareeqa);
    if (tareeqa === 'pantry' && pantryCheeZein.length === 0) {
      alert('آپ کی پینٹری خالی ہے! پہلے پینٹری میں اشیاء شامل کریں یا دوسرا طریقہ چنیں۔');
      return;
    }
  };

  const calenderParJao = () => {
    const pasandeedgiyan = {
      duration: muddat,
      dietType: khanePaKism,
      targetAudience: kinKeLiye,
      ageGroup: umarGroup,
      patientCondition: marizkiHalat,
      allergies,
      familyMembers: gharKeLog,
      budget: bajat,
      planningMode: planKaTareeqa,
      pantryItems: planKaTareeqa === 'pantry' ? pantryCheeZein : []
    };
    localStorage.setItem('mealPreferences', JSON.stringify(pasandeedgiyan));
    if (planKaTareeqa === 'custom') {
      navigate('/meal-calender-urdu?mode=custom');
    } else if (planKaTareeqa === 'pantry') {
      navigate('/meal-calender-urdu?mode=pantry');
    }
  };

  return (
    <div className="ur-khana-app">
      <div className="ur-khana-wrapper">

        {/* صرف پہلے سلائیڈ پر */}
        {maujoodaSlide === 1 && (
          <>
            <div className="ur-puri-tasveer">
              <div className="ur-tasveer-mazmoon">
                <h1>کھانے کی پلاننگ</h1>
                <p>اپنی پینٹری اور بجٹ کے حساب سے کھانا پلان کریں</p>
              </div>
            </div>

            <div className="ur-hero-section">
              <h1 className="ur-hero-title">کھانے کا پلان بنائیں</h1>
              <p className="ur-hero-subtitle">یہ مراحل پورے کریں اور اپنا پلان تیار کریں</p>
            </div>

            <div className="ur-اعداد-section">
              <div className="ur-عدد-card">
                <div className="ur-عدد-number">1</div>
                <div className="ur-عدد-label">موجودہ مرحلہ</div>
              </div>
              <div className="ur-عدد-card">
                <div className="ur-عدد-number">{kulSlides}</div>
                <div className="ur-عدد-label">کل مراحل</div>
              </div>
              <div className="ur-عدد-card">
                <div className="ur-عدد-number">12%</div>
                <div className="ur-عدد-label">مکمل ہوا</div>
              </div>
            </div>
          </>
        )}

        {/* سلائیڈ 2-8 کے لیے چھوٹا ہیڈر */}
        {maujoodaSlide > 1 && (
          <div className="ur-slide-header">
            <div className="ur-slide-progress">
              <div className="ur-progress-indicator">
                مرحلہ {maujoodaSlide} از {kulSlides}
              </div>
              <div className="ur-progress-bar-mini">
                <div className="ur-progress-fill" style={{ width: `${taraqqiBar}%` }}></div>
              </div>
            </div>
          </div>
        )}

        {/* سلائیڈ کنٹینر */}
        <div className={`ur-slide-container ${maujoodaSlide === 1 ? 'ur-pehla-slide' : ''}`}>
          <div className="ur-progress-container">
            <div className="ur-progress-bar" style={{ width: `${taraqqiBar}%` }}></div>
          </div>

          {/* سلائیڈ ۱: خوش آمدید */}
          {maujoodaSlide === 1 && (
            <div className="ur-slide ur-khush-amdeed-slide">
              <div className="ur-slide-mazmoon">
                <h2>شیف بوٹ میں خوش آمدید</h2>
                <p className="ur-slide-tafseeel">اپنی پینٹری، بجٹ اور کھانے کی پسند کے حساب سے پلان بنائیں۔</p>
                <div className="ur-button-group">
                  <button className="ur-btn ur-btn-primary" onClick={aglaSlide}>شروع کریں! ←</button>
                </div>
              </div>
            </div>
          )}

          {/* سلائیڈ ۲: مدت */}
          {maujoodaSlide === 2 && (
            <div className="ur-slide">
              <div className="ur-slide-mazmoon">
                <h2>کتنے دن کا پلان چاہیے؟</h2>
                <p className="ur-slide-tafseeel">ایک دن کا یا پورے ہفتے کا پلان بنائیں</p>

                <div className="ur-options-grid-two">
                  <div
                    className={`ur-option-card ${muddat === 'daily' ? 'ur-chunaa' : ''}`}
                    onClick={() => setMuddat('daily')}
                  >
                    <div className="ur-option-icon">📅</div>
                    <div className="ur-option-image">
                      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" alt="روزانہ" />
                    </div>
                    <div className="ur-label">روزانہ پلان</div>
                    <div className="ur-option-detail">1 دن کا پلان • سادہ اور آسان</div>
                  </div>
                  <div
                    className={`ur-option-card ${muddat === 'weekly' ? 'ur-chunaa' : ''}`}
                    onClick={() => setMuddat('weekly')}
                  >
                    <div className="ur-option-icon">🗓️</div>
                    <div className="ur-option-image">
                      <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80" alt="ہفتہ وار" />
                    </div>
                    <div className="ur-label">ہفتہ وار پلان</div>
                    <div className="ur-option-detail">7 دن کا پلان • منظم اور آسان</div>
                  </div>
                </div>

                {muddat && (
                  <div className="ur-chunaav-indicator">
                    منتخب: <strong>{muddat === 'daily' ? 'روزانہ پلان (1 دن)' : 'ہفتہ وار پلان (7 دن)'}</strong>
                  </div>
                )}
                <div className="ur-button-group">
                  <button className="ur-btn ur-btn-secondary" onClick={pichlaaSlide}>→ پیچھے</button>
                  <button className="ur-btn ur-btn-primary" onClick={aglaSlide} disabled={!muddat}>آگے ←</button>
                </div>
              </div>
            </div>
          )}

          {/* سلائیڈ ۳: کھانے کی قسم */}
          {maujoodaSlide === 3 && (
            <div className="ur-slide">
              <div className="ur-slide-mazmoon">
                <h2>کیا کھانا پسند ہے؟</h2>
                <p className="ur-slide-tafseeel">اپنی پسند کے مطابق کھانا چنیں</p>

                <div className="ur-options-grid-three">
                  <div
                    className={`ur-option-card ${khanePaKism === 'veg' ? 'ur-chunaa' : ''}`}
                    onClick={() => { setKhanePaKism('veg'); setKinKeLiye(''); setUmarGroup(''); setMarizkiHalat(''); }}
                  >
                    <div className="ur-option-image">
                      <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" alt="سبزی" />
                    </div>
                    <div className="ur-label">صرف سبزی</div>
                    <div className="ur-option-detail">سبزیوں سے بنے کھانے</div>
                  </div>

                  <div
                    className={`ur-option-card ${khanePaKism === 'mixed' ? 'ur-chunaa' : ''}`}
                    onClick={() => { setKhanePaKism('mixed'); setKinKeLiye(''); setUmarGroup(''); setMarizkiHalat(''); }}
                  >
                    <div className="ur-option-image">
                      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80" alt="ملا جلا" />
                    </div>
                    <div className="ur-label">ملا جلا</div>
                    <div className="ur-option-detail">سبزی اور گوشت دونوں</div>
                  </div>

                  <div
                    className={`ur-option-card ${khanePaKism === 'non-veg' ? 'ur-chunaa' : ''}`}
                    onClick={() => { setKhanePaKism('non-veg'); setKinKeLiye(''); setUmarGroup(''); setMarizkiHalat(''); }}
                  >
                    <div className="ur-option-image">
                      <img src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80" alt="گوشت" />
                    </div>
                    <div className="ur-label">صرف گوشت</div>
                    <div className="ur-option-detail">گوشت، مچھلی اور انڈے</div>
                  </div>
                </div>

                {khanePaKism && (
                  <div className="ur-chunaav-indicator">
                    منتخب: <strong>
                      {khanePaKism === 'veg' ? 'صرف سبزی' :
                       khanePaKism === 'mixed' ? 'ملا جلا (سبزی + گوشت)' : 'صرف گوشت'}
                    </strong>
                  </div>
                )}
                <div className="ur-button-group">
                  <button className="ur-btn ur-btn-secondary" onClick={pichlaaSlide}>→ پیچھے</button>
                  <button className="ur-btn ur-btn-primary" onClick={aglaSlide} disabled={!khanePaKism}>آگے ←</button>
                </div>
              </div>
            </div>
          )}

          {/* سلائیڈ ۴: کس کے لیے */}
          {maujoodaSlide === 4 && (
            <div className="ur-slide">
              <div className="ur-slide-mazmoon">
                <h2>یہ پلان کس کے لیے ہے؟</h2>
                <p className="ur-slide-tafseeel">
                  {khanePaKism === 'veg' ? 'سبزی ' :
                   khanePaKism === 'mixed' ? 'ملا جلا ' : 'گوشت '}
                  کھانا کس کے لیے بنانا ہے؟
                </p>

                <div className="ur-target-grid">
                  <div
                    className={`ur-target-card ${kinKeLiye === 'general' ? 'ur-chunaa' : ''}`}
                    onClick={() => { setKinKeLiye('general'); setUmarGroup(''); setMarizkiHalat(''); }}
                  >
                    <div className="ur-target-icon">👨‍👩‍👧‍👦</div>
                    <h3 className="ur-target-title">عام</h3>
                  </div>

                  <div
                    className={`ur-target-card ${kinKeLiye === 'kids' ? 'ur-chunaa' : ''}`}
                    onClick={() => { setKinKeLiye('kids'); setMarizkiHalat(''); }}
                  >
                    <div className="ur-target-icon">🧒</div>
                    <h3 className="ur-target-title">بچے اور نوجوان</h3>
                  </div>

                  <div
                    className={`ur-target-card ${kinKeLiye === 'patient' ? 'ur-chunaa' : ''}`}
                    onClick={() => { setKinKeLiye('patient'); setUmarGroup(''); }}
                  >
                    <div className="ur-target-icon">🏥</div>
                    <h3 className="ur-target-title">مریض کا کھانا</h3>
                  </div>
                </div>

                {kinKeLiye === 'kids' && (
                  <div className="ur-conditional-dropdown">
                    <label className="ur-dropdown-label">عمر کا گروپ چنیں:</label>
                    <select className="ur-custom-select" value={umarGroup} onChange={(e) => setUmarGroup(e.target.value)}>
                      <option value="">عمر کا گروپ چنیں</option>
                      <option value="toddlers">چھوٹے بچے (1-3 سال)</option>
                      <option value="kids">بچے (4-8 سال)</option>
                      <option value="preteens">بڑے بچے (9-12 سال)</option>
                      <option value="teens">نوجوان (13-18 سال)</option>
                    </select>
                    {umarGroup && (
                      <div className="ur-chunaav-indicator" style={{ marginTop: '15px' }}>
                        منتخب عمر: <strong>
                          {umarGroup === 'toddlers' ? 'چھوٹے بچے (1-3 سال)' :
                           umarGroup === 'kids' ? 'بچے (4-8 سال)' :
                           umarGroup === 'preteens' ? 'بڑے بچے (9-12 سال)' : 'نوجوان (13-18 سال)'}
                        </strong>
                      </div>
                    )}
                  </div>
                )}

                {kinKeLiye === 'patient' && (
                  <div className="ur-conditional-dropdown">
                    <label className="ur-dropdown-label">مریض کی بیماری چنیں:</label>
                    <select className="ur-custom-select" value={marizkiHalat} onChange={(e) => setMarizkiHalat(e.target.value)}>
                      <option value="">بیماری چنیں</option>
                      <option value="diabetes">شوگر</option>
                      <option value="heart">دل کی بیماری</option>
                      <option value="bp">بلڈ پریشر</option>
                    </select>
                    {marizkiHalat && (
                      <div className="ur-chunaav-indicator" style={{ marginTop: '15px' }}>
                        منتخب بیماری: <strong>
                          {marizkiHalat === 'diabetes' ? 'شوگر' :
                           marizkiHalat === 'heart' ? 'دل کی بیماری' : 'بلڈ پریشر'}
                        </strong>
                      </div>
                    )}
                  </div>
                )}

                {kinKeLiye && (
                  <div className="ur-chunaav-indicator">
                    منتخب: <strong>
                      {kinKeLiye === 'general' ? 'عام (سب کے لیے)' :
                       kinKeLiye === 'kids' ? 'بچے اور نوجوان' : 'مریض کا کھانا'}
                    </strong>
                  </div>
                )}
                <div className="ur-button-group">
                  <button className="ur-btn ur-btn-secondary" onClick={pichlaaSlide}>→ پیچھے</button>
                  <button
                    className="ur-btn ur-btn-primary"
                    onClick={aglaSlide}
                    disabled={
                      !kinKeLiye ||
                      (kinKeLiye === 'kids' && !umarGroup) ||
                      (kinKeLiye === 'patient' && !marizkiHalat)
                    }
                  >آگے ←</button>
                </div>
              </div>
            </div>
          )}

          {/* سلائیڈ ۵: الرجی */}
          {maujoodaSlide === 5 && (
            <div className="ur-slide">
              <div className="ur-slide-mazmoon">
                <h2>کوئی کھانے کی الرجی؟</h2>
                <p className="ur-slide-tafseeel">ہمیں بتائیں کہ کون سی چیزیں نہیں کھانی</p>

                {allergies.length > 0 && (
                  <div className="ur-chunaav-indicator">
                    منتخب الرجی: <strong>{allergies.join('، ')}</strong>
                  </div>
                )}

                <div className="ur-allergy-wrapper">
                  <div className="ur-input-group">
                    <div className="ur-tags-container">
                      {allergies.map((allergy, index) => (
                        <div key={index} className="ur-tag ur-allergy-tag">
                          <span className="ur-tag-text">{allergy}</span>
                          <span className="ur-remove" onClick={() => allergyHataein(index)}>×</span>
                        </div>
                      ))}
                      <input
                        type="text"
                        className="ur-tag-input"
                        placeholder="الرجی لکھیں اور Enter دبائیں..."
                        value={allergyInput}
                        onChange={(e) => setAllergyInput(e.target.value)}
                        onKeyPress={allergyDaalein}
                      />
                    </div>
                  </div>

                  <div className="ur-allergy-suggestions">
                    <div className="ur-suggestions-header">عام الرجیاں (کلک کر کے شامل کریں):</div>
                    <div className="ur-suggestion-chips">
                      {['انڈے', 'مچھلی', 'گری دار میوے', 'دودھ', 'گندم', 'سمندری غذا'].map((item) => (
                        <div
                          key={item}
                          className="ur-suggestion-chip"
                          onClick={() => { if (!allergies.includes(item)) setAllergies([...allergies, item]); }}
                        >
                          + {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="ur-info-card">
                    <strong>حفاظت پہلے:</strong> ان اجزاء والی ترکیبیں خودبخود ہٹا دی جائیں گی۔
                  </div>
                </div>

                <div className="ur-button-group">
                  <button className="ur-btn ur-btn-secondary" onClick={pichlaaSlide}>→ پیچھے</button>
                  <button className="ur-btn ur-btn-skip" onClick={aglaSlide}>چھوڑیں</button>
                  <button className="ur-btn ur-btn-primary" onClick={aglaSlide}>آگے ←</button>
                </div>
              </div>
            </div>
          )}

          {/* سلائیڈ ۶: گھر کے افراد */}
          {maujoodaSlide === 6 && (
            <div className="ur-slide">
              <div className="ur-slide-mazmoon">
                <h2>گھر میں کتنے افراد ہیں؟</h2>
                <p className="ur-slide-tafseeel">بتائیں کہ آپ کتنے لوگوں کے لیے کھانا بنا رہے ہیں</p>

                {gharKeLog && (
                  <div className="ur-chunaav-indicator">
                    کھانا بنے گا: <strong>{gharKeLog} {gharKeLog === '1' ? 'شخص' : 'افراد'} کے لیے</strong>
                  </div>
                )}

                <div className="ur-family-counter">
                  <button
                    className="ur-counter-btn ur-minus-btn"
                    onClick={() => {
                      const num = gharKeLog === '8+' ? 8 : parseInt(gharKeLog);
                      if (num > 1) setGharKeLog(String(num - 1));
                    }}
                    disabled={gharKeLog === '1'}
                  >−</button>

                  <div className="ur-counter-display">
                    <div className="ur-counter-number">{gharKeLog}</div>
                    <div className="ur-counter-label">{gharKeLog === '1' ? 'شخص' : 'افراد'}</div>
                  </div>

                  <button
                    className="ur-counter-btn ur-plus-btn"
                    onClick={() => {
                      const num = gharKeLog === '8+' ? 8 : parseInt(gharKeLog);
                      if (num < 8) setGharKeLog(String(num + 1));
                      else setGharKeLog('8+');
                    }}
                  >+</button>
                </div>

                <div className="ur-family-size-guide">
                  <div className="ur-size-guide-item ur-clickable" onClick={() => gharKaSaizChunein('1-2')}>
                    <span className="ur-guide-number">1-2</span>
                    <span className="ur-guide-text">اکیلے یا جوڑا</span>
                  </div>
                  <div className="ur-size-guide-item ur-clickable" onClick={() => gharKaSaizChunein('3-4')}>
                    <span className="ur-guide-number">3-4</span>
                    <span className="ur-guide-text">چھوٹا گھر</span>
                  </div>
                  <div className="ur-size-guide-item ur-clickable" onClick={() => gharKaSaizChunein('5-7')}>
                    <span className="ur-guide-number">5-7</span>
                    <span className="ur-guide-text">درمیانہ گھر</span>
                  </div>
                  <div className="ur-size-guide-item ur-clickable" onClick={() => gharKaSaizChunein('8+')}>
                    <span className="ur-guide-number">8+</span>
                    <span className="ur-guide-text">بڑا گھر</span>
                  </div>
                </div>

                <div className="ur-button-group">
                  <button className="ur-btn ur-btn-secondary" onClick={pichlaaSlide}>→ پیچھے</button>
                  <button className="ur-btn ur-btn-primary" onClick={aglaSlide}>آگے ←</button>
                </div>
              </div>
            </div>
          )}

          {/* سلائیڈ ۷: بجٹ */}
          {maujoodaSlide === 7 && (
            <div className="ur-slide">
              <div className="ur-slide-mazmoon">
                <h2>بجٹ طے کریں</h2>
                <p className="ur-slide-tafseeel">
                  اپنا {muddat === 'daily' ? 'روزانہ' : 'ہفتہ وار'} کھانے کا بجٹ چنیں
                </p>

                <div className="ur-options-grid-four">
                  <div className={`ur-option-card ${bajat === 'economy' ? 'ur-chunaa' : ''}`} onClick={() => setBajat('economy')}>
                    <div className="ur-budget-icon">💰</div>
                    <div className="ur-label">سستا</div>
                    <div className="ur-option-detail">کم خرچ کھانے</div>
                  </div>
                  <div className={`ur-option-card ${bajat === 'standard' ? 'ur-chunaa' : ''}`} onClick={() => setBajat('standard')}>
                    <div className="ur-budget-icon">💵</div>
                    <div className="ur-label">ٹھیک ٹھاک</div>
                    <div className="ur-option-detail">درمیانہ خرچ</div>
                  </div>
                  <div className={`ur-option-card ${bajat === 'premium' ? 'ur-chunaa' : ''}`} onClick={() => setBajat('premium')}>
                    <div className="ur-budget-icon">💎</div>
                    <div className="ur-label">اچھا</div>
                    <div className="ur-option-detail">زیادہ قسمیں</div>
                  </div>
                  <div className={`ur-option-card ${bajat === 'deluxe' ? 'ur-chunaa' : ''}`} onClick={() => setBajat('deluxe')}>
                    <div className="ur-budget-icon">👑</div>
                    <div className="ur-label">بہترین</div>
                    <div className="ur-option-detail">عمدہ اجزاء</div>
                  </div>
                </div>

                {bajat && (
                  <div className="ur-chunaav-indicator">
                    منتخب: <strong>
                      {bajat === 'economy' ? 'سستا بجٹ' :
                       bajat === 'standard' ? 'ٹھیک ٹھاک بجٹ' :
                       bajat === 'premium' ? 'اچھا بجٹ' : 'بہترین بجٹ'}
                    </strong>
                  </div>
                )}

                <div className="ur-button-group">
                  <button className="ur-btn ur-btn-secondary" onClick={pichlaaSlide}>→ پیچھے</button>
                  <button className="ur-btn ur-btn-primary" onClick={aglaSlide} disabled={!bajat}>آگے ←</button>
                </div>
              </div>
            </div>
          )}

          {/* سلائیڈ 8: پلان کا طریقہ */}
          {maujoodaSlide === 8 && (
            <div className="ur-slide">
              <div className="ur-slide-mazmoon">
                <h2>پلان کیسے بنانا ہے؟</h2>
                <p className="ur-slide-tafseeel">اپنا طریقہ چنیں</p>

                <div className="ur-planning-mode-grid">
                  <div
                    className={`ur-planning-mode-card ${planKaTareeqa === 'pantry' ? 'ur-chunaa' : ''}`}
                    onClick={() => planKaTareeqaChunein('pantry')}
                  >
                    <div className="ur-mode-number">1</div>
                    <div className="ur-mode-icon">🛒</div>
                    <h3 className="ur-mode-heading">پینٹری سے پلان</h3>
                    <p className="ur-mode-text">
                      گھر میں جو چیزیں ہیں ان سے کھانے بتائیں
                      {pantryCheeZein.length > 0 ? ` (${pantryCheeZein.length} چیزیں موجود)` : ' (پینٹری خالی ہے)'}
                    </p>
                  </div>

                  <div
                    className={`ur-planning-mode-card ${planKaTareeqa === 'custom' ? 'ur-chunaa' : ''}`}
                    onClick={() => setPlanKaTareeqa('custom')}
                  >
                    <div className="ur-mode-number">2</div>
                    <div className="ur-mode-icon">✏️</div>
                    <h3 className="ur-mode-heading">خود پلان بنائیں</h3>
                    <p className="ur-mode-text">
                      ہر کھانے کے لیے خود ترکیبیں چنیں
                    </p>
                  </div>
                </div>

                {planKaTareeqa && (
                  <div className="ur-chunaav-indicator">
                    منتخب: <strong>
                      {planKaTareeqa === 'pantry' ? 'پینٹری سے پلان' : 'خود پلان بنائیں'}
                    </strong>
                  </div>
                )}

                {/* خلاصہ */}
                <div className="ur-plan-summary-box">
                  <h3>آپ کا پلان:</h3>
                  <ul>
                    <li><strong>مدت:</strong> {muddat === 'daily' ? '1 دن' : '7 دن'}</li>
                    <li><strong>کھانا:</strong> {
                      khanePaKism === 'veg' ? 'صرف سبزی' :
                      khanePaKism === 'mixed' ? 'ملا جلا' : 'صرف گوشت'
                    }</li>
                    <li><strong>کس کے لیے:</strong> {
                      kinKeLiye === 'general' ? 'سب کے لیے' :
                      kinKeLiye === 'kids' ? `بچے (${umarGroup})` :
                      `مریض (${marizkiHalat === 'diabetes' ? 'شوگر' : marizkiHalat === 'heart' ? 'دل' : 'بلڈ پریشر'})`
                    }</li>
                    <li><strong>افراد:</strong> {gharKeLog}</li>
                    <li><strong>بجٹ:</strong> {
                      bajat === 'economy' ? 'سستا' :
                      bajat === 'standard' ? 'ٹھیک ٹھاک' :
                      bajat === 'premium' ? 'اچھا' : 'بہترین'
                    }</li>
                    {allergies.length > 0 && (
                      <li><strong>الرجی:</strong> {allergies.join('، ')}</li>
                    )}
                    <li><strong>طریقہ:</strong> {planKaTareeqa === 'pantry' ? 'پینٹری سے' : 'خود بنائیں'}</li>
                  </ul>
                </div>

                <div className="ur-button-group">
                  <button className="ur-btn ur-btn-secondary" onClick={pichlaaSlide}>→ پیچھے</button>
                  <button
                    className="ur-btn ur-btn-primary ur-btn-generate"
                    onClick={calenderParJao}
                    disabled={!planKaTareeqa || (planKaTareeqa === 'pantry' && pantryCheeZein.length === 0)}
                  >
                    {planKaTareeqa === 'custom' ? 'پلان بنانا شروع کریں ←' : 'پینٹری سے پلان بنائیں ←'}
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

export default MealFeatureUrdu;