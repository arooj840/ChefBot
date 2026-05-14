import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './MealFeature.css';


const CustomSelect = ({ label, options, value, onChange, required }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const selected = options.find(o => o.value === value);

  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div className="csel" ref={ref}>
      <label className="mc-filter-label">
        {label}{required && <span className="mc-required"> *</span>}
      </label>
      <div
        className={`csel__box ${!value ? 'csel__box--empty' : ''} ${open ? 'csel__box--open' : ''}`}
        onClick={() => setOpen(p => !p)}
      >
        <span className={value ? 'csel__val' : 'csel__ph'}>
          {selected ? selected.label : '-- Select --'}
        </span>
        <span className={`csel__arrow ${open ? 'csel__arrow--up' : ''}`}>▾</span>
      </div>
      {open && (
        <ul className="csel__list">
          {options.map(o => (
            <li
              key={o.value}
              className={`csel__item ${value === o.value ? 'csel__item--active' : ''}`}
              onMouseDown={(e) => { e.preventDefault(); onChange(o.value); setOpen(false); }}
            >
              {o.label}
              {value === o.value && <span className="csel__tick"></span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   MAIN MEAL FEATURE
══════════════════════════════════════════════════════ */
const MealFeature = () => {
  const navigate = useNavigate();

  // Load from localStorage on mount
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

  const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const dayShortNames = ['MON','TUE','WED','THU','FRI','SAT','SUN'];

  const dietOptions = [
    { value:'veg', label:'Vegetarian' },
    { value:'non-veg', label:'Non-Vegetarian' },
    { value:'mixed', label:'Mixed' },
    { value:'eggetarian', label:'Eggetarian' }
  ];
  const allergyOptions = [
    { value:'none', label:'None' },
    { value:'egg', label:'Egg' },
    { value:'peanut', label:'Peanut' },
    { value:'gluten', label:'Gluten' },
    { value:'lactose', label:'Lactose' },
    { value:'shellfish', label:'Shellfish' },
   
  ];
  const ageGroupOptions = [
    { value:'general', label:'General' },
    { value:'kids', label:'Kids' },
    { value:'patient', label:'Patient' },
  ];
  const durationOptions = [
    { value:'daily', label:'Daily' },
    { value:'weekly', label:'Weekly' }
  ];
  const quickMembers = ['1','2','3','4','5','6','7','8','9','10'];

  useEffect(() => { fetchPantry(); }, []);
  useEffect(() => {
    // Save to localStorage whenever filters/plan change
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
    const m = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${start.getDate()} ${m[start.getMonth()]} – ${end.getDate()} ${m[end.getMonth()]}`;
  };

  const getMemberDisplay = () => {
    if (!filters.familyMembers) return '';
    if (filters.familyMembers === 'custom') return customMembers ? `${customMembers} members` : 'Enter number';
    return `${filters.familyMembers} ${parseInt(filters.familyMembers) === 1 ? 'member' : 'members'}`;
  };

  const getFamilyCount = () => {
    if (filters.familyMembers === 'custom') return parseInt(customMembers) || 10;
    return parseInt(filters.familyMembers) || 1;
  };

  const isAllSelected = () =>
    filters.dietType && filters.allergy && filters.ageGroup && filters.planDuration && filters.familyMembers &&
    (filters.familyMembers !== 'custom' || (customMembers && parseInt(customMembers) > 0));

  const handleGenerate = async () => {
    if (!isAllSelected()) { alert('Please select all options!'); return; }
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
        setTimeout(() => document.getElementById('mc-calendar')?.scrollIntoView({ behavior: 'smooth' }), 150);
      } else if (data.noRecipes) {
        setNoRecipesPopup({ message: data.message, tip: data.tip });
      } else {
        alert(data.message || 'No recipes found.');
      }
    } catch (e) { console.error(e); alert('Could not connect to server.'); }
    finally { setGenerating(false); }
  };

  const savePlan = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/mealplan/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          name: `Meal Plan - ${new Date().toLocaleDateString()}`,
          preferences: { ...filters, familyMembers: filters.familyMembers === 'custom' ? customMembers : filters.familyMembers },
          plan: mealPlan,
        }),
      });
      const data = await res.json();
      if (data.success) {
        alert('Meal plan saved!');
        // Clear localStorage and reset state (plan khatam)
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
        alert('Save failed: ' + data.message);
      }
    } catch { alert('Could not connect.'); }
  };

  const viewRecipe = (id, name) => {
    if (id) {
      navigate(`/recipe/${id}?members=${getFamilyCount()}`);
    } else if (name) {
      navigate(`/recipes?search=${encodeURIComponent(name)}`);
    }
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
          tagline: `${recipe.dietType || ''} • ${recipe.cuisine || 'Delicious'}`,
          matchScore: 100,
        },
      },
    }));
    setShowSearchModal(false); setSearchTerm(''); setSearchResults([]);
  };

  const dates = getWeekDates();
  const isWeekly = filters.planDuration === 'weekly';

  return (
    <div className="mc-app">
      <div className="mc-header">
        <h1 className="mc-title">My Meal Plan</h1>
        <p className="mc-subtitle">Select your preferences and generate a personalized meal plan</p>
      </div>

      <div className="mc-page-wrapper">
        <div className="mc-filters-bar">
          <CustomSelect label="Diet Type" options={dietOptions} value={filters.dietType} onChange={v => setFilters(p => ({ ...p, dietType: v }))} required />
          <CustomSelect label="Allergy" options={allergyOptions} value={filters.allergy} onChange={v => setFilters(p => ({ ...p, allergy: v }))} required />
          <CustomSelect label="Age Group" options={ageGroupOptions} value={filters.ageGroup} onChange={v => setFilters(p => ({ ...p, ageGroup: v }))} required />
          <CustomSelect label="Plan Duration" options={durationOptions} value={filters.planDuration} onChange={v => setFilters(p => ({ ...p, planDuration: v }))} required />

          <div className="csel" ref={membersRef}>
            <label className="mc-filter-label">Family Members<span className="mc-required"> *</span></label>
            <div
              className={`csel__box ${!filters.familyMembers ? 'csel__box--empty' : ''} ${showMembersDD ? 'csel__box--open' : ''}`}
              onClick={() => setShowMembersDD(p => !p)}
            >
              <span className={filters.familyMembers ? 'csel__val' : 'csel__ph'}>
                {getMemberDisplay() || '-- Select --'}
              </span>
              <span className={`csel__arrow ${showMembersDD ? 'csel__arrow--up' : ''}`}>▾</span>
            </div>
            {showMembersDD && (
              <div className="mc-members-panel">
                <p className="mc-members-title">Quick Select</p>
                <div className="mc-members-grid">
                  {quickMembers.map(n => (
                    <button key={n}
                      className={`mc-members-btn ${filters.familyMembers === n ? 'mc-members-btn--active' : ''}`}
                      onMouseDown={(e) => { e.preventDefault(); setFilters(p => ({ ...p, familyMembers: n })); setCustomMembers(''); setShowMembersDD(false); }}
                    >{n}</button>
                  ))}
                </div>
                <hr className="mc-members-hr" />
                <p className="mc-members-title">Or enter any number</p>
                <div className="mc-members-custom">
                  <input type="number" min="1" max="500" className="mc-members-input"
                    placeholder="e.g. 15, 20…" value={customMembers}
                    onChange={e => { setCustomMembers(e.target.value); setFilters(p => ({ ...p, familyMembers: 'custom' })); }}
                  />
                  {customMembers && (
                    <button className="mc-members-done" onMouseDown={(e) => { e.preventDefault(); setShowMembersDD(false); }}>Done</button>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mc-filter-actions">
            <button
              className={`mc-generate-btn ${!isAllSelected() || generating ? 'mc-btn-disabled' : ''}`}
              onClick={handleGenerate} disabled={!isAllSelected() || generating}
            >
              {generating ? <><span className="mc-spin-sm" />Generating…</> : 'Generate Plan'}
            </button>
          </div>
        </div>

        {!generated && !generating && (
          <div className="mc-empty-state">
            <div className="mc-empty-icon">🍽️</div>
            <h3>Ready to plan your meals?</h3>
            <p>Select all preferences above, then click <strong>Generate Plan</strong>.</p>
          </div>
        )}

        {generating && (
          <div className="mc-loading-state">
            <div className="mc-spinner" />
            <p>Generating your meal plan…</p>
          </div>
        )}

        {generated && !generating && Object.keys(mealPlan).length > 0 && (
          <div id="mc-calendar" className="mc-calendar-section">
            {isWeekly && (
              <div className="mc-week-nav">
                <button className="mc-nav-arrow" onClick={() => setCurrentWeekOffset(p => p - 1)}>&#8249;</button>
                <span className="mc-week-range">{getDateRange()}</span>
                <button className="mc-nav-arrow" onClick={() => setCurrentWeekOffset(p => p + 1)}>&#8250;</button>
              </div>
            )}

            {isWeekly && (
              <div className="mc-day-tabs">
                {days.map((_, index) => (
                  <div key={index} className={`mc-day-tab ${index === selectedDay ? 'mc-tab-active' : ''}`} onClick={() => setSelectedDay(index)}>
                    <span className="mc-tab-short">{dayShortNames[index]}</span>
                    <span className="mc-tab-date">{dates[index]}</span>
                    <div className="mc-tab-dots">
                      {['breakfast','lunch','dinner'].map(mt => (
                        <span key={mt} className={`mc-tab-dot ${mealPlan[index]?.[mt] ? 'mc-dot-on' : ''}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mc-day-label-row">
              {isWeekly
                ? <><span className="mc-sel-day">{days[selectedDay]}</span><span className="mc-sel-date">{dates[selectedDay]}</span></>
                : <span className="mc-sel-day">Daily Plan</span>
              }
              <span className="mc-members-pill">For {getMemberDisplay()}</span>
            </div>

            <div className="mc-calendar-grid">
              <div className="mc-grid-head">
                <div className="mc-grid-head-day" />
                <div className="mc-grid-head-cell">Breakfast</div>
                <div className="mc-grid-head-cell">Lunch</div>
                <div className="mc-grid-head-cell">Dinner</div>
              </div>

              {Array.from({ length: isWeekly ? 7 : 1 }, (_, dayIndex) => (
                <div key={dayIndex} className={`mc-grid-row ${dayIndex === selectedDay && isWeekly ? 'mc-row-active' : ''}`}>
                  <div className="mc-grid-day-cell" onClick={() => isWeekly && setSelectedDay(dayIndex)}>
                    <span className="mc-day-short">{dayShortNames[dayIndex]}</span>
                    <span className="mc-day-num">{dates[dayIndex]}</span>
                  </div>

                  {['breakfast','lunch','dinner'].map(mealType => {
                    const meal = mealPlan[dayIndex]?.[mealType];
                    return (
                      <div key={mealType} className="mc-meal-cell" data-meal={mealType.charAt(0).toUpperCase() + mealType.slice(1)}>
                        {meal ? (
                          <div className="mc-meal-inner">
                            <div className="mc-thumb" style={{ backgroundImage: `url(${meal.image})` }} onClick={() => viewRecipe(meal._id, meal.name)}>
                              <span className={`mc-dot ${meal.available ? 'mc-dot--green' : 'mc-dot--red'}`} />
                              <span className="mc-pct">{meal.matchScore}%</span>
                            </div>
                            <div className="mc-meal-text">
                              <p className="mc-meal-name" onClick={() => viewRecipe(meal._id, meal.name)} title={meal.name}>{meal.name}</p>
                              <div className="mc-meal-btns">
                                <button className="mc-btn-view" onClick={() => viewRecipe(meal._id, meal.name)}>View</button>
                                <button className="mc-btn-change" onClick={() => openSearchModal(dayIndex, mealType)}>Change</button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="mc-add-cell" onClick={() => openSearchModal(dayIndex, mealType)}>
                            <span className="mc-add-plus">+</span>
                            <span className="mc-add-lbl">Add Recipe</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="mc-save-row">
              <div className="mc-save-card">
                <div>
                  <p className="mc-save-title">Your meal plan is ready!</p>
                  <small className="mc-save-sub">Save it to access later from your profile</small>
                </div>
                <button className="mc-save-btn" onClick={savePlan}>Save Plan</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {showSearchModal && (
        <div className="mc-overlay" onClick={() => setShowSearchModal(false)}>
          <div className="mc-modal" onClick={e => e.stopPropagation()}>
            <div className="mc-modal-head">
              <h3>Search &amp; Select Recipe</h3>
              <button className="mc-modal-x" onClick={() => setShowSearchModal(false)}>×</button>
            </div>
            <div className="mc-modal-body">
              <div className="mc-search-row">
                <input type="text" className="mc-search-inp" autoFocus
                  placeholder="Type recipe name to search database…"
                  value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                {searchTerm && <button className="mc-search-clr" onClick={() => { setSearchTerm(''); setSearchResults([]); }}>×</button>}
              </div>
              {!searchTerm && <p className="mc-search-hint">Start typing to search from your database</p>}
              {modalLoading && <div className="mc-modal-load"><div className="mc-mini-spin" /><span>Searching…</span></div>}
              <div className="mc-results">
                {searchResults.map(r => (
                  <div key={r._id} className="mc-result-item" onClick={() => selectRecipe(r)}>
                    <img src={r.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=80'} alt={r.name || r.title} />
                    <div className="mc-result-info">
                      <p className="mc-result-name">{r.name || r.title}</p>
                      <p className="mc-result-meta">{r.dietType || 'Any'} &bull; {r.cuisine || 'Any cuisine'}</p>
                    </div>
                    <span className="mc-result-badge">Select</span>
                  </div>
                ))}
                {searchTerm.length > 1 && !modalLoading && searchResults.length === 0 && (
                  <div className="mc-no-result">
                    <p>No recipes found for "<strong>{searchTerm}</strong>"</p>
                    <small>Try a different name</small>
                  </div>
                )}
              </div>
            </div>
            <div className="mc-modal-foot">
              <button className="mc-modal-cancel" onClick={() => setShowSearchModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {noRecipesPopup && (
        <div className="mc-overlay" onClick={() => setNoRecipesPopup(null)}>
          <div className="mc-modal" onClick={e => e.stopPropagation()}>
            <div className="mc-modal-head" style={{ background: '#c0392b' }}>
              <h3>No Recipes Found</h3>
              <button className="mc-modal-x" onClick={() => setNoRecipesPopup(null)}>×</button>
            </div>
            <div className="mc-modal-body" style={{ textAlign: 'center', padding: '30px 24px' }}>
              <p style={{ fontWeight: 600, marginBottom: 14 }}>{noRecipesPopup.message}</p>
              <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderRadius: 10, padding: '12px 16px' }}>
                <p style={{ fontSize: '.85rem', color: '#555', margin: 0 }}>Tip: {noRecipesPopup.tip}</p>
              </div>
            </div>
            <div className="mc-modal-foot" style={{ justifyContent: 'center' }}>
              <button className="mc-generate-btn" style={{ background: '#284a4b', opacity: 1 }} onClick={() => setNoRecipesPopup(null)}>Change Filters</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealFeature;