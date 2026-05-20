import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './UrduMealFeature.css';

const UrduCustomSelect = ({ label, options, value, onChange, required }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const selected = options.find(o => o.value === value);

  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div className="ur-csel" ref={ref}>
      <label className="ur-mc-filter-label">
        {label}{required && <span className="ur-mc-required"> *</span>}
      </label>
      <div
        className={`ur-csel__box ${!value ? 'ur-csel__box--empty' : ''} ${open ? 'ur-csel__box--open' : ''}`}
        onClick={() => setOpen(p => !p)}
      >
        <span className={value ? 'ur-csel__val' : 'ur-csel__ph'}>
          {selected ? selected.label : '-- منتخب کریں --'}
        </span>
        <span className={`ur-csel__arrow ${open ? 'ur-csel__arrow--up' : ''}`}>▾</span>
      </div>
      {open && (
        <ul className="ur-csel__list">
          {options.map(o => (
            <li
              key={o.value}
              className={`ur-csel__item ${value === o.value ? 'ur-csel__item--active' : ''}`}
              onMouseDown={(e) => { e.preventDefault(); onChange(o.value); setOpen(false); }}
            >
              {o.label}
              {value === o.value && <span className="ur-csel__tick">✓</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const UrduMealFeature = () => {
  const navigate = useNavigate();

  const loadFromStorage = () => {
    const savedFilters = localStorage.getItem('mealPlanFilters');
    const savedPlan = localStorage.getItem('mealPlanData');
    const savedGenerated = localStorage.getItem('mealPlanGenerated');
    const savedCustomMembers = localStorage.getItem('mealPlanCustomMembers');
    if (savedFilters && savedPlan && savedGenerated === 'true') {
      try {
        return {
          filters: JSON.parse(savedFilters),
          mealPlan: JSON.parse(savedPlan),
          generated: true,
          customMembers: savedCustomMembers || ''
        };
      } catch(e) { console.error(e); }
    }
    return {
      filters: { dietType: '', allergy: '', ageGroup: '', familyMembers: '', planDuration: '' },
      mealPlan: {},
      generated: false,
      customMembers: ''
    };
  };

  const initialData = loadFromStorage();

  const [filters, setFilters] = useState(initialData.filters);
  const [customMembers, setCustomMembers] = useState(initialData.customMembers);
  const [showMembersDD, setShowMembersDD] = useState(false);
  const [generated, setGenerated] = useState(initialData.generated);
  const [generating, setGenerating] = useState(false);
  const [mealPlan, setMealPlan] = useState(initialData.mealPlan);
  const [selectedDay, setSelectedDay] = useState(0);
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
  const [pantryItems, setPantryItems] = useState([]);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [selectedMealSlot, setSelectedMealSlot] = useState({ dayIndex: 0, mealType: 'breakfast' });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [modalLoading, setModalLoading] = useState(false);
  const [noRecipesPopup, setNoRecipesPopup] = useState(null);
  const membersRef = useRef(null);

  const days = ['پیر','منگل','بدھ','جمعرات','جمعہ','ہفتہ','اتوار'];
  const dayShortNames = ['پیر','منگل','بدھ','جمعرات','جمعہ','ہفتہ','اتوار'];

  const dietOptions = [
    { value:'veg', label:'صرف سبزی' },
    { value:'non-veg', label:'گوشت' },
    { value:'mixed', label:'دونوں (سبزی + گوشت)' },
    { value:'eggetarian', label:'انڈے' }
  ];
  const allergyOptions = [
    { value:'none', label:'کوئی نہیں' },
    { value:'egg', label:'انڈا' },
    { value:'peanut', label:'مونگ پھلی' },
    { value:'gluten', label:'گلوٹین' },
    { value:'lactose', label:'لیکٹوز' },
    { value:'shellfish', label:'شیل فش' },
  ];
  const ageGroupOptions = [
    { value:'general', label:'سب کے لیے' },
    { value:'kids', label:'بچے' },
    { value:'patient', label:'مریض' },
  ];
  const durationOptions = [
    { value:'daily', label:'ایک دن کا' },
    { value:'weekly', label:'ہفتے بھر کا' }
  ];
  const quickMembers = ['1','2','3','4','5','6','7','8','9','10'];

  useEffect(() => { fetchPantry(); }, []);
  useEffect(() => {
    if (generated && Object.keys(mealPlan).length > 0) {
      localStorage.setItem('mealPlanFilters', JSON.stringify(filters));
      localStorage.setItem('mealPlanData', JSON.stringify(mealPlan));
      localStorage.setItem('mealPlanGenerated', 'true');
      localStorage.setItem('mealPlanCustomMembers', customMembers);
    } else if (!generated) {
      localStorage.removeItem('mealPlanFilters');
      localStorage.removeItem('mealPlanData');
      localStorage.removeItem('mealPlanGenerated');
      localStorage.removeItem('mealPlanCustomMembers');
    }
  }, [filters, mealPlan, generated, customMembers]);

  useEffect(() => {
    if (showSearchModal && searchTerm.length > 1) {
      const d = setTimeout(() => fetchRecipesSearch(searchTerm), 400);
      return () => clearTimeout(d);
    } else if (searchTerm.length === 0) setSearchResults([]);
  }, [searchTerm, showSearchModal]);

  useEffect(() => {
    const close = (e) => { if (membersRef.current && !membersRef.current.contains(e.target)) setShowMembersDD(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const fetchPantry = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/pantry', { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      if (data.success && data.items) setPantryItems(data.items.map(i => i.name));
    } catch (e) { console.error(e); }
  };

  const getWeekDates = () => {
    const today = new Date(), start = new Date(today);
    start.setDate(today.getDate() - today.getDay() + 1 + currentWeekOffset * 7);
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start); d.setDate(start.getDate() + i); return d.getDate();
    });
  };

  const getDateRange = () => {
    const today = new Date(), start = new Date(today);
    start.setDate(today.getDate() - today.getDay() + 1 + currentWeekOffset * 7);
    const end = new Date(start); end.setDate(start.getDate() + 6);
    const m = ['جنوری','فروری','مارچ','اپریل','مئی','جون','جولائی','اگست','ستمبر','اکتوبر','نومبر','دسمبر'];
    return `${start.getDate()} ${m[start.getMonth()]} – ${end.getDate()} ${m[end.getMonth()]}`;
  };

  const getMemberDisplay = () => {
    if (!filters.familyMembers) return '';
    if (filters.familyMembers === 'custom') return customMembers ? `${customMembers} افراد` : 'تعداد درج کریں';
    return `${filters.familyMembers} ${parseInt(filters.familyMembers) === 1 ? 'فرد' : 'افراد'}`;
  };

  const getFamilyCount = () => {
    if (filters.familyMembers === 'custom') return parseInt(customMembers) || 10;
    return parseInt(filters.familyMembers) || 1;
  };

  const isAllSelected = () =>
    filters.dietType && filters.allergy && filters.ageGroup && filters.planDuration && filters.familyMembers &&
    (filters.familyMembers !== 'custom' || (customMembers && parseInt(customMembers) > 0));

  const handleGenerate = async () => {
    if (!isAllSelected()) { alert('براہ کرم تمام اختیارات منتخب کریں!'); return; }
    setGenerating(true); setGenerated(false); setNoRecipesPopup(null); setSelectedDay(0);
    try {
      const token = localStorage.getItem('token');
      let url = `http://localhost:5000/api/mealplan/generate?dietType=${filters.dietType}&allergy=${filters.allergy}&ageGroup=${filters.ageGroup}&familyCount=${getFamilyCount()}&duration=${filters.planDuration}`;
      if (pantryItems.length) url += `&pantry=${encodeURIComponent(pantryItems.join(','))}`;
      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      if (data.success && data.plan) {
        setMealPlan(data.plan);
        setGenerated(true);
        setTimeout(() => document.getElementById('ur-mc-calendar')?.scrollIntoView({ behavior: 'smooth' }), 150);
      } else if (data.noRecipes) {
        setNoRecipesPopup({ message: data.message, tip: data.tip });
      } else {
        alert(data.message || 'کوئی کھانا نہیں ملا');
      }
    } catch (e) { console.error(e); alert('سرور سے رابطہ نہیں ہو سکا۔'); }
    finally { setGenerating(false); }
  };

  const savePlan = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/mealplan/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          name: `کھانے کا پلان - ${new Date().toLocaleDateString()}`,
          preferences: { ...filters, familyMembers: filters.familyMembers === 'custom' ? customMembers : filters.familyMembers },
          plan: mealPlan,
        }),
      });
      const data = await res.json();
      if (data.success) {
        alert('کھانے کا  پلان محفوظ ہو گیا!');
        localStorage.removeItem('mealPlanFilters');
        localStorage.removeItem('mealPlanData');
        localStorage.removeItem('mealPlanGenerated');
        localStorage.removeItem('mealPlanCustomMembers');
        setFilters({ dietType: '', allergy: '', ageGroup: '', familyMembers: '', planDuration: '' });
        setCustomMembers('');
        setMealPlan({});
        setGenerated(false);
        setSelectedDay(0);
      } else {
        alert('محفوظ کرنے میں ناکامی: ' + data.message);
      }
    } catch { alert('رابطہ نہیں ہو سکا۔'); }
  };

  const viewRecipe = (id, name) => {
    if (id) navigate(`/recipe/${id}?members=${getFamilyCount()}`);
    else if (name) navigate(`/recipes?search=${encodeURIComponent(name)}`);
  };

  const openSearchModal = (dayIndex, mealType) => {
    setSelectedMealSlot({ dayIndex, mealType });
    setShowSearchModal(true);
    setSearchTerm(''); setSearchResults([]);
  };

  const fetchRecipesSearch = async (q) => {
    setModalLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5000/api/recipes/search?q=${encodeURIComponent(q)}`, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      setSearchResults(data.success ? data.recipes : []);
    } catch { setSearchResults([]); }
    finally { setModalLoading(false); }
  };

  const selectRecipe = (recipe) => {
    setMealPlan(prev => ({
      ...prev,
      [selectedMealSlot.dayIndex]: {
        ...prev[selectedMealSlot.dayIndex],
        [selectedMealSlot.mealType]: {
          _id: recipe._id, name: recipe.name || recipe.title,
          image: recipe.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
          available: true,
          tagline: `${recipe.dietType || ''} • ${recipe.cuisine || 'لذیذ'}`,
          matchScore: 100,
        },
      },
    }));
    setShowSearchModal(false); setSearchTerm(''); setSearchResults([]);
  };

  const dates = getWeekDates();
  const isWeekly = filters.planDuration === 'weekly';

  return (
    <div className="ur-mc-app" dir="rtl">
      <div className="ur-mc-header">
        <h1 className="ur-mc-title">کھانے کا پلان</h1>
        <p className="ur-mc-subtitle">اپنی پسند بتائیں اور اپنا کھانا بنائیں</p>
      </div>

      <div className="ur-mc-page-wrapper">

        {/* فلٹر بار */}
        <div className="ur-mc-filters-bar">
          <UrduCustomSelect label="کیسا کھانا" options={dietOptions} value={filters.dietType} onChange={v => setFilters(p => ({ ...p, dietType: v }))} required />
          <UrduCustomSelect label="الرجی" options={allergyOptions} value={filters.allergy} onChange={v => setFilters(p => ({ ...p, allergy: v }))} required />
          <UrduCustomSelect label="عمر گروپ" options={ageGroupOptions} value={filters.ageGroup} onChange={v => setFilters(p => ({ ...p, ageGroup: v }))} required />
          <UrduCustomSelect label="کتنے دن کا" options={durationOptions} value={filters.planDuration} onChange={v => setFilters(p => ({ ...p, planDuration: v }))} required />

          <div className="ur-csel" ref={membersRef}>
            <label className="ur-mc-filter-label">گھر کے لوگ<span className="ur-mc-required"> *</span></label>
            <div
              className={`ur-csel__box ${!filters.familyMembers ? 'ur-csel__box--empty' : ''} ${showMembersDD ? 'ur-csel__box--open' : ''}`}
              onClick={() => setShowMembersDD(p => !p)}
            >
              <span className={filters.familyMembers ? 'ur-csel__val' : 'ur-csel__ph'}>
                {getMemberDisplay() || '-- منتخب کریں --'}
              </span>
              <span className={`ur-csel__arrow ${showMembersDD ? 'ur-csel__arrow--up' : ''}`}>▾</span>
            </div>
            {showMembersDD && (
              <div className="ur-mc-members-panel">
                <p className="ur-mc-members-title">فوری انتخاب</p>
                <div className="ur-mc-members-grid">
                  {quickMembers.map(n => (
                    <button key={n}
                      className={`ur-mc-members-btn ${filters.familyMembers === n ? 'ur-mc-members-btn--active' : ''}`}
                      onMouseDown={(e) => { e.preventDefault(); setFilters(p => ({ ...p, familyMembers: n })); setCustomMembers(''); setShowMembersDD(false); }}
                    >{n}</button>
                  ))}
                </div>
                <hr className="ur-mc-members-hr" />
                <p className="ur-mc-members-title">یا کوئی بھی تعداد درج کریں</p>
                <div className="ur-mc-members-custom">
                  <input type="number" min="1" max="500" className="ur-mc-members-input"
                    placeholder="مثلاً 15, 20…" value={customMembers}
                    onChange={e => { setCustomMembers(e.target.value); setFilters(p => ({ ...p, familyMembers: 'custom' })); }}
                  />
                  {customMembers && (
                    <button className="ur-mc-members-done" onMouseDown={(e) => { e.preventDefault(); setShowMembersDD(false); }}>مکمل</button>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="ur-mc-filter-actions">
            <button
              className={`ur-mc-generate-btn ${!isAllSelected() || generating ? 'ur-mc-btn-disabled' : ''}`}
              onClick={handleGenerate} disabled={!isAllSelected() || generating}
            >
              {generating ? <><span className="ur-mc-spin-sm" />بن رہا ہے…</> : 'پلان بناو'}
            </button>
          </div>
        </div>

        {/* خالی حالت */}
        {!generated && !generating && (
          <div className="ur-mc-empty-state">
            <div className="ur-mc-empty-icon">🍽️</div>
            <h3>کیا آپ کھانے کا پلان بنانا چاہتے ہیں؟</h3>
            <p> اوپر سب پسند بتا دیں<strong> پلان بناو </strong> پر کلک کریں۔ </p>
          </div>
        )}

        {/* لوڈنگ */}
        {generating && (
          <div className="ur-mc-loading-state">
            <div className="ur-mc-spinner" />
            <p>آپ کا کھانے کا پلان تیار کیا جا رہا ہے…</p>
          </div>
        )}

        {/* کیلنڈر */}
        {generated && !generating && Object.keys(mealPlan).length > 0 && (
          <div id="ur-mc-calendar" className="ur-mc-calendar-section">

            {isWeekly && (
              <div className="ur-mc-week-nav">
                <button className="ur-mc-nav-arrow" onClick={() => setCurrentWeekOffset(p => p - 1)}>&#8249;</button>
                <span className="ur-mc-week-range">{getDateRange()}</span>
                <button className="ur-mc-nav-arrow" onClick={() => setCurrentWeekOffset(p => p + 1)}>&#8250;</button>
              </div>
            )}

            {isWeekly && (
              <div className="ur-mc-day-tabs">
                {days.map((_, index) => (
                  <div key={index} className={`ur-mc-day-tab ${index === selectedDay ? 'ur-mc-tab-active' : ''}`} onClick={() => setSelectedDay(index)}>
                    <span className="ur-mc-tab-short">{dayShortNames[index]}</span>
                    <span className="ur-mc-tab-date">{dates[index]}</span>
                    <div className="ur-mc-tab-dots">
                      {['breakfast','lunch','dinner'].map(mt => (
                        <span key={mt} className={`ur-mc-tab-dot ${mealPlan[index]?.[mt] ? 'ur-mc-dot-on' : ''}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="ur-mc-day-label-row">
              {isWeekly
                ? <><span className="ur-mc-sel-day">{days[selectedDay]}</span><span className="ur-mc-sel-date">{dates[selectedDay]}</span></>
                : <span className="ur-mc-sel-day">آج کا کھانا</span>
              }
              <span className="ur-mc-members-pill">کے لیے {getMemberDisplay()}</span>
            </div>

            <div className="ur-mc-grid-scroll-wrapper">
              <div className="ur-mc-calendar-grid">
                <div className="ur-mc-grid-head">
                  <div className="ur-mc-grid-head-day" />
                  <div className="ur-mc-grid-head-cell">ناشتہ</div>
                  <div className="ur-mc-grid-head-cell">دوپہر کا کھانا</div>
                  <div className="ur-mc-grid-head-cell">رات کا کھانا</div>
                </div>

                {Array.from({ length: isWeekly ? 7 : 1 }, (_, dayIndex) => (
                  <div key={dayIndex} className={`ur-mc-grid-row ${dayIndex === selectedDay && isWeekly ? 'ur-mc-row-active' : ''}`}>
                    <div className="ur-mc-grid-day-cell" onClick={() => isWeekly && setSelectedDay(dayIndex)}>
                      <span className="ur-mc-day-short">{dayShortNames[dayIndex]}</span>
                      <span className="ur-mc-day-num">{dates[dayIndex]}</span>
                    </div>

                    {['breakfast','lunch','dinner'].map(mealType => {
                      const meal = mealPlan[dayIndex]?.[mealType];
                      const mealTypeUrdu = mealType === 'breakfast' ? 'ناشتہ' : (mealType === 'lunch' ? 'دوپہر کا کھانا' : 'رات کا کھانا');
                      return (
                        <div key={mealType} className="ur-mc-meal-cell" data-meal={mealTypeUrdu}>
                          {meal ? (
                            <div className="ur-mc-meal-inner">
                              <div className="ur-mc-thumb" style={{ backgroundImage: `url(${meal.image})` }} onClick={() => viewRecipe(meal._id, meal.name)}>
                                <span className="ur-mc-pct">{meal.matchScore}%</span>
                              </div>
                              <div className="ur-mc-meal-text">
                                <p className="ur-mc-meal-name" onClick={() => viewRecipe(meal._id, meal.name)} title={meal.name}>{meal.name}</p>
                                <div className="ur-mc-meal-btns">
                                  <button className="ur-mc-btn-view" onClick={() => viewRecipe(meal._id, meal.name)}>کھانے کا طریقہ</button>
                                  <button className="ur-mc-btn-change" onClick={() => openSearchModal(dayIndex, mealType)}>تبدیل کریں</button>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="ur-mc-add-cell" onClick={() => openSearchModal(dayIndex, mealType)}>
                              <span className="ur-mc-add-plus">+</span>
                              <span className="ur-mc-add-lbl">کھانا ڈالو</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="ur-mc-save-row">
              <div className="ur-mc-save-card">
                <div>
                  <p className="ur-mc-save-title">آپ کا کھانے کا پلان تیار ہے!</p>
                  <small className="ur-mc-save-sub">بعد میں دیکھنے کے لیے</small>
                </div>
                <button className="ur-mc-save-btn" onClick={savePlan}>پلان محفوظ کریں</button>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* تلاش کا مودی */}
      {showSearchModal && (
        <div className="ur-mc-overlay" onClick={() => setShowSearchModal(false)}>
          <div className="ur-mc-modal" onClick={e => e.stopPropagation()}>
            <div className="ur-mc-modal-head">
              <h3>تلاش شروع کرنے کے لیے ٹائپ کریں</h3>
              <button className="ur-mc-modal-x" onClick={() => setShowSearchModal(false)}>×</button>
            </div>
            <div className="ur-mc-modal-body">
              <div className="ur-mc-search-row">
                <input type="text" className="ur-mc-search-inp" autoFocus
                  placeholder="تلاش شروع کرنے کے لیے ٹائپ کریں"
                  value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                {searchTerm && <button className="ur-mc-search-clr" onClick={() => { setSearchTerm(''); setSearchResults([]); }}>×</button>}
              </div>
              {!searchTerm && <p className="ur-mc-search-hint">تلاش شروع کرنے کے لیے ٹائپ کریں</p>}
              {modalLoading && <div className="ur-mc-modal-load"><div className="ur-mc-mini-spin" /><span>تلاش ہو رہی ہے…</span></div>}
              <div className="ur-mc-results">
                {searchResults.map(r => (
                  <div key={r._id} className="ur-mc-result-item" onClick={() => selectRecipe(r)}>
                    <img src={r.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=80'} alt={r.name || r.title} />
                    <div className="ur-mc-result-info">
                      <p className="ur-mc-result-name">{r.name || r.title}</p>
                      <p className="ur-mc-result-meta">{r.dietType || 'کوئی بھی'} &bull; {r.cuisine || 'کوئی کھانا'}</p>
                    </div>
                    <span className="ur-mc-result-badge">منتخب کریں</span>
                  </div>
                ))}
                {searchTerm.length > 1 && !modalLoading && searchResults.length === 0 && (
                  <div className="ur-mc-no-result">
                    <p>کوئی کھانا نہیں ملا"<strong>{searchTerm}</strong>"</p>
                    <small>کوئی اور نام لکھوں</small>
                  </div>
                )}
              </div>
            </div>
            <div className="ur-mc-modal-foot">
              <button className="ur-mc-modal-cancel" onClick={() => setShowSearchModal(false)}>منسوخ کریں</button>
            </div>
          </div>
        </div>
      )}

      {/* کوئی ترکیب نہ ملنے کا پاپ اپ */}
      {noRecipesPopup && (
        <div className="ur-mc-overlay" onClick={() => setNoRecipesPopup(null)}>
          <div className="ur-mc-modal" onClick={e => e.stopPropagation()}>
            <div className="ur-mc-modal-head" style={{ background: '#c0392b' }}>
              <h3>کھانا نہیں ملا</h3>
              <button className="ur-mc-modal-x" onClick={() => setNoRecipesPopup(null)}>×</button>
            </div>
            <div className="ur-mc-modal-body" style={{ textAlign: 'center', padding: '30px 24px' }}>
              <p style={{ fontWeight: 600, marginBottom: 14 }}>{noRecipesPopup.message}</p>
              <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderRadius: 10, padding: '12px 16px' }}>
                <p style={{ fontSize: '.85rem', color: '#555', margin: 0 }}>اشارہ: {noRecipesPopup.tip}</p>
              </div>
            </div>
            <div className="ur-mc-modal-foot" style={{ justifyContent: 'center' }}>
              <button className="ur-mc-generate-btn" style={{ background: '#284a4b', opacity: 1 }} onClick={() => setNoRecipesPopup(null)}>فلٹر تبدیل کریں</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrduMealFeature;