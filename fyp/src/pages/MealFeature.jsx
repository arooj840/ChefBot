import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MealFeature.css';

const MealFeature = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    dietType: '', allergy: '', ageGroup: '',
    budget: '', familyMembers: '', planDuration: '',
  });
  const [customMembers, setCustomMembers] = useState('');
  const [showMembersDD, setShowMembersDD] = useState(false);

  const [generated,   setGenerated]   = useState(false);
  const [generating,  setGenerating]  = useState(false);
  const [mealPlan,    setMealPlan]    = useState({});
  const [selectedDay, setSelectedDay] = useState(0);
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
  const [pantryItems, setPantryItems] = useState([]);
  const [showRecipeModal,  setShowRecipeModal]  = useState(false);
  const [selectedMealSlot, setSelectedMealSlot] = useState({ dayIndex:0, mealType:'breakfast' });
  const [searchTerm,    setSearchTerm]    = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [modalLoading,  setModalLoading]  = useState(false);
  const [noRecipesPopup, setNoRecipesPopup] = useState(null);

  const days          = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const dayShortNames = ['MON','TUE','WED','THU','FRI','SAT','SUN'];

  const dietOptions     = [{value:'veg',label:'Vegetarian'},{value:'non-veg',label:'Non-Vegetarian'},{value:'mixed',label:'Mixed'},{value:'eggetarian',label:'Eggetarian'}];
  const allergyOptions  = [{value:'none',label:'None'},{value:'egg',label:'Egg'},{value:'peanut',label:'Peanut'},{value:'gluten',label:'Gluten'},{value:'lactose',label:'Lactose'},{value:'shellfish',label:'Shellfish'},{value:'nuts',label:'Nuts'}];
  const ageGroupOptions = [{value:'general',label:'General'},{value:'kids',label:'Kids (4–12)'},{value:'teens',label:'Teenagers'},{value:'elderly',label:'Elderly'},{value:'patient',label:'Patient'}];
  const budgetOptions   = [{value:'economy',label:'Economy'},{value:'standard',label:'Standard'},{value:'premium',label:'Premium'},{value:'deluxe',label:'Deluxe'}];
  const durationOptions = [{value:'daily',label:'Daily'},{value:'weekly',label:'Weekly'}];
  const quickMembers    = ['1','2','3','4','5','6','7','8','9','10'];

  const mealTypeIcons = { breakfast:'🌅', lunch:'☀️', dinner:'🌙' };

  useEffect(() => { fetchPantry(); }, []);
  useEffect(() => {
    if (showRecipeModal && searchTerm.length > 1) {
      const d = setTimeout(() => fetchRecipesSearch(searchTerm), 500);
      return () => clearTimeout(d);
    } else if (searchTerm.length === 0) setSearchResults([]);
  }, [searchTerm, showRecipeModal]);

  // Close members dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest('.mc-members-dd-wrap')) setShowMembersDD(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const fetchPantry = async () => {
    try {
      const token = localStorage.getItem('token');
      const res   = await fetch('http://localhost:5000/api/pantry', { headers:{ Authorization:`Bearer ${token}` } });
      const data  = await res.json();
      if (data.success && data.items) setPantryItems(data.items.map(i => i.name));
    } catch(e) { console.error(e); }
  };

  const getWeekDates = () => {
    const today = new Date(), start = new Date(today);
    start.setDate(today.getDate() - today.getDay() + 1 + currentWeekOffset * 7);
    return Array.from({length:7},(_,i)=>{ const d=new Date(start); d.setDate(start.getDate()+i); return d.getDate(); });
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
    return `${filters.familyMembers} ${parseInt(filters.familyMembers)===1?'member':'members'}`;
  };

  const getFamilyCount = () => {
    if (filters.familyMembers === 'custom') return parseInt(customMembers) || 10;
    return parseInt(filters.familyMembers) || 1;
  };

  const isAllSelected = () =>
    filters.dietType && filters.allergy && filters.ageGroup &&
    filters.budget && filters.planDuration &&
    filters.familyMembers &&
    (filters.familyMembers !== 'custom' || (customMembers && parseInt(customMembers) > 0));

  const handleGenerate = async () => {
    if (!isAllSelected()) { alert('Please select all options!'); return; }
    setGenerating(true); setGenerated(false); setNoRecipesPopup(null); setSelectedDay(0);
    try {
      const token = localStorage.getItem('token');
      let url = `http://localhost:5000/api/mealplan/generate?dietType=${filters.dietType}&allergy=${filters.allergy}&ageGroup=${filters.ageGroup}&budget=${filters.budget}&familyCount=${getFamilyCount()}&duration=${filters.planDuration}`;
      if (pantryItems.length) url += `&pantry=${encodeURIComponent(pantryItems.join(','))}`;
      const res  = await fetch(url, { headers:{ Authorization:`Bearer ${token}` } });
      const data = await res.json();
      if (data.success && data.plan) { setMealPlan(data.plan); setGenerated(true); setTimeout(() => document.getElementById('mc-calendar')?.scrollIntoView({behavior:'smooth'}), 150); }
      else if (data.noRecipes) setNoRecipesPopup({ message:data.message, tip:data.tip });
      else alert(data.message || 'No recipes found.');
    } catch(e) { console.error(e); alert('Could not connect to server.'); }
    finally { setGenerating(false); }
  };

  const savePlan = async () => {
    try {
      const token = localStorage.getItem('token');
      const res   = await fetch('http://localhost:5000/api/mealplan/save', {
        method:'POST', headers:{'Content-Type':'application/json', Authorization:`Bearer ${token}`},
        body: JSON.stringify({ name:`Meal Plan - ${new Date().toLocaleDateString()}`, preferences:{...filters, familyMembers: filters.familyMembers==='custom'?customMembers:filters.familyMembers}, plan:mealPlan }),
      });
      const data = await res.json();
      if (data.success) {
        alert('Meal plan saved!');
        setFilters({dietType:'',allergy:'',ageGroup:'',budget:'',familyMembers:'',planDuration:''});
        setCustomMembers(''); setMealPlan({}); setGenerated(false); setSelectedDay(0);
      } else alert('Save failed: ' + data.message);
    } catch { alert('Could not connect.'); }
  };

  const viewRecipe = (id, name) => {
    if (id) navigate(`/recipe/${id}?members=${getFamilyCount()}`);
    else    navigate(`/recipes?search=${encodeURIComponent(name)}`);
  };

  const openAddRecipeModal = (dayIndex, mealType) => {
    setSelectedMealSlot({dayIndex,mealType}); setShowRecipeModal(true); setSearchTerm(''); setSearchResults([]);
  };

  const fetchRecipesSearch = async (q) => {
    setModalLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res   = await fetch(`http://localhost:5000/api/recipes/search?q=${encodeURIComponent(q)}`, { headers:{ Authorization:`Bearer ${token}` } });
      const data  = await res.json();
      setSearchResults(data.success ? data.recipes : []);
    } catch { setSearchResults([]); } finally { setModalLoading(false); }
  };

  const selectRecipe = (recipe) => {
    setMealPlan(prev => ({
      ...prev,
      [selectedMealSlot.dayIndex]: {
        ...prev[selectedMealSlot.dayIndex],
        [selectedMealSlot.mealType]: {
          _id:recipe._id, name:recipe.name||recipe.title,
          image:recipe.image||'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
          available:true, tagline:`${recipe.dietType||''} • ${recipe.cuisine||'Delicious'}`, matchScore:100,
        },
      },
    }));
    setShowRecipeModal(false);
  };

  const dates    = getWeekDates();
  const isWeekly = filters.planDuration === 'weekly';

  return (
    <div className="mc-app">

      {/* ── HEADER ── */}
      <div className="mc-header">
        <h1 className="mc-title">My Meal Plan</h1>
        <p className="mc-subtitle">Select your preferences and generate a personalized meal plan</p>
      </div>

      <div className="mc-page-wrapper">

        {/* ══ FILTER BAR ══ */}
        <div className="mc-filters-bar">

          {/* 5 normal selects */}
          {[
            { key:'dietType',     label:'Diet Type',     options:dietOptions },
            { key:'allergy',      label:'Allergy',       options:allergyOptions },
            { key:'ageGroup',     label:'Age Group',     options:ageGroupOptions },
            { key:'budget',       label:'Budget',        options:budgetOptions },
            { key:'planDuration', label:'Plan Duration', options:durationOptions },
          ].map(({ key, label, options }) => (
            <div key={key} className="mc-filter-group">
              <label className="mc-filter-label">{label} <span className="mc-required">*</span></label>
              <select
                className={`mc-filter-select ${!filters[key] ? 'mc-select-empty' : ''}`}
                value={filters[key]}
                onChange={e => setFilters(p => ({...p, [key]:e.target.value}))}
              >
                <option value="">-- Select --</option>
                {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          ))}

          {/* Family Members — custom dropdown */}
          <div className="mc-filter-group mc-members-dd-wrap">
            <label className="mc-filter-label">Family Members <span className="mc-required">*</span></label>
            <div
              className={`mc-filter-select mc-members-trigger ${!filters.familyMembers?'mc-select-empty':''}`}
              onClick={() => setShowMembersDD(p => !p)}
            >
              <span>{getMemberDisplay() || '-- Select --'}</span>
              <span className="mc-dd-caret">▾</span>
            </div>

            {showMembersDD && (
              <div className="mc-members-dropdown">
                <div className="mc-members-dd-title">Quick Select</div>
                <div className="mc-members-quick">
                  {quickMembers.map(n => (
                    <button
                      key={n}
                      className={`mc-members-num ${filters.familyMembers===n?'mc-num-active':''}`}
                      onClick={() => { setFilters(p=>({...p,familyMembers:n})); setCustomMembers(''); setShowMembersDD(false); }}
                    >{n}</button>
                  ))}
                </div>
                <div className="mc-members-dd-divider"/>
                <div className="mc-members-dd-title">Or type any number</div>
                <div className="mc-members-custom-row">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    className="mc-members-custom-input"
                    placeholder="e.g. 15, 20, 50..."
                    value={customMembers}
                    onChange={e => { setCustomMembers(e.target.value); setFilters(p=>({...p,familyMembers:'custom'})); }}
                  />
                  {customMembers && (
                    <button
                      className="mc-members-confirm-btn"
                      onClick={() => setShowMembersDD(false)}
                    >✓ Done</button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Generate button */}
          <div className="mc-filter-actions">
            <button
              className={`mc-generate-btn ${!isAllSelected()||generating ? 'mc-btn-disabled':''}`}
              onClick={handleGenerate}
              disabled={!isAllSelected()||generating}
            >
              {generating ? <><span className="mc-spin-sm"/>Generating...</> : 'Generate Plan'}
            </button>
          </div>
        </div>

        {/* ── EMPTY STATE ── */}
        {!generated && !generating && (
          <div className="mc-empty-state">
            <div className="mc-empty-icon">🍽️</div>
            <h3>Ready to plan your meals?</h3>
            <p>Select all preferences above, then click <strong>Generate Plan</strong>.</p>
          </div>
        )}

        {/* ── LOADING ── */}
        {generating && (
          <div className="mc-loading-state">
            <div className="mc-spinner"/>
            <p>Generating your meal plan...</p>
          </div>
        )}

        {/* ══ CALENDAR ══ */}
        {generated && !generating && Object.keys(mealPlan).length > 0 && (
          <div id="mc-calendar" className="mc-calendar-section">

            {/* Week nav */}
            {isWeekly && (
              <div className="mc-week-nav">
                <button className="mc-nav-arrow" onClick={() => setCurrentWeekOffset(p=>p-1)}>‹</button>
                <span className="mc-week-range">{getDateRange()}</span>
                <button className="mc-nav-arrow" onClick={() => setCurrentWeekOffset(p=>p+1)}>›</button>
              </div>
            )}

            {/* Day tabs */}
            {isWeekly && (
              <div className="mc-day-tabs">
                {days.map((day,index) => (
                  <div key={index} className={`mc-day-tab ${index===selectedDay?'mc-tab-active':''}`} onClick={()=>setSelectedDay(index)}>
                    <span className="mc-tab-short">{dayShortNames[index]}</span>
                    <span className="mc-tab-date">{dates[index]}</span>
                    <div className="mc-tab-dots">
                      {['breakfast','lunch','dinner'].map(mt=>(
                        <span key={mt} className={`mc-tab-dot ${mealPlan[index]?.[mt]?'mc-dot-on':''}`}/>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Day + members label */}
            <div className="mc-day-label-row">
              {isWeekly
                ? <><span className="mc-sel-day">{days[selectedDay]}</span><span className="mc-sel-date">{dates[selectedDay]}</span></>
                : <span className="mc-sel-day">Daily Plan</span>
              }
              <span className="mc-members-pill"> For {getMemberDisplay()}</span>
            </div>

            {/* ══ MAIN GRID ══ */}
            <div className="mc-calendar-grid">

              {/* Header */}
              <div className="mc-grid-head">
                <div className="mc-grid-head-empty"/>
                <div className="mc-grid-head-cell">Breakfast</div>
                <div className="mc-grid-head-cell">Lunch</div>
                <div className="mc-grid-head-cell">Dinner</div>
              </div>

              {/* Day rows — show ALL days in grid */}
              {Array.from({length:isWeekly?7:1},(_,dayIndex)=>(
                <div key={dayIndex} className={`mc-grid-row ${dayIndex===selectedDay&&isWeekly?'mc-row-active':''}`}>

                  {/* Day label */}
                  <div className="mc-grid-day-label" onClick={()=>isWeekly&&setSelectedDay(dayIndex)}>
                    <span className="mc-grid-day-short">{dayShortNames[dayIndex]}</span>
                    <span className="mc-grid-day-num">{dates[dayIndex]}</span>
                  </div>

                  {/* 3 meal cells */}
                  {['breakfast','lunch','dinner'].map(mealType=>{
                    const meal = mealPlan[dayIndex]?.[mealType];
                    return (
                      <div key={mealType} className="mc-grid-meal-cell">
                        {meal ? (
                          <div className="mc-grid-meal-img" style={{backgroundImage:`url(${meal.image})`}} onClick={()=>viewRecipe(meal._id,meal.name)}>
                            <div className={`mc-grid-avail-dot ${meal.available?'mc-grid-dot-green':'mc-grid-dot-red'}`}/>
                            <div className="mc-grid-score">{meal.matchScore}%</div>
                          </div>
                        ) : (
                          <div className="mc-grid-empty-cell" onClick={()=>openAddRecipeModal(dayIndex,mealType)}>
                            <span>{mealTypeIcons[mealType]}</span>
                            <span>Add</span>
                          </div>
                        )}
                        <p className="mc-grid-meal-name" onClick={()=>meal&&viewRecipe(meal._id,meal.name)}>
                          {meal?meal.name:'No recipe'}
                        </p>
                        <div className="mc-grid-btns">
                          {meal&&<button className="mc-grid-btn mc-grid-btn-view" onClick={()=>viewRecipe(meal._id,meal.name)}>View</button>}
                          <button className="mc-grid-btn mc-grid-btn-change" onClick={()=>openAddRecipeModal(dayIndex,mealType)}>
                            {meal?'Change':'Add'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* ── SAVE CARD ── */}
            <div className="mc-save-plan-row">
              <div className="mc-save-plan-card">
                <div className="mc-save-plan-text">
                  <span>✅</span>
                  <div>
                    <p>Your meal plan is ready!</p>
                    <small>Save it to access later from your profile</small>
                  </div>
                </div>
                <button className="mc-save-plan-btn" onClick={savePlan}> Save Plan</button>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* ── RECIPE MODAL ── */}
      {showRecipeModal && (
        <div className="mc-modal-overlay" onClick={()=>setShowRecipeModal(false)}>
          <div className="mc-modal" onClick={e=>e.stopPropagation()}>
            <div className="mc-modal-head"><h3>Select a Recipe</h3><button className="mc-modal-close" onClick={()=>setShowRecipeModal(false)}>×</button></div>
            <div className="mc-modal-body">
              <input type="text" placeholder="Search recipes..." value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} className="mc-modal-search" autoFocus/>
              {modalLoading&&<p className="mc-modal-msg">Searching...</p>}
              <div className="mc-modal-results">
                {searchResults.map(r=>(
                  <div key={r._id} className="mc-modal-item" onClick={()=>selectRecipe(r)}>
                    <img src={r.image||'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=80'} alt={r.name||r.title}/>
                    <div><div className="mc-modal-rname">{r.name||r.title}</div><div className="mc-modal-rdesc">{r.dietType} • {r.cuisine||'Any'}</div></div>
                  </div>
                ))}
                {searchTerm.length>1&&!modalLoading&&searchResults.length===0&&<p className="mc-modal-msg">No recipes found.</p>}
              </div>
            </div>
            <div className="mc-modal-foot"><button className="mc-modal-cancel" onClick={()=>setShowRecipeModal(false)}>Cancel</button></div>
          </div>
        </div>
      )}

      {/* ── NO RECIPES POPUP ── */}
      {noRecipesPopup && (
        <div className="mc-modal-overlay" onClick={()=>setNoRecipesPopup(null)}>
          <div className="mc-modal" onClick={e=>e.stopPropagation()}>
            <div className="mc-modal-head" style={{background:'#c0392b'}}><h3>No Recipes Found</h3><button className="mc-modal-close" onClick={()=>setNoRecipesPopup(null)}>×</button></div>
            <div className="mc-modal-body" style={{textAlign:'center',padding:'30px 24px'}}>
              <div style={{fontSize:'3rem',marginBottom:16}}>🔍</div>
              <p style={{fontWeight:600,marginBottom:14}}>{noRecipesPopup.message}</p>
              <div style={{background:'#fff8e1',border:'1px solid #ffe082',borderRadius:10,padding:'12px 16px'}}>
                <p style={{fontSize:'0.85rem',color:'#555',margin:0}}>💡 {noRecipesPopup.tip}</p>
              </div>
            </div>
            <div className="mc-modal-foot" style={{justifyContent:'center'}}>
              <button className="mc-generate-btn" style={{background:'#284a4b',opacity:1}} onClick={()=>setNoRecipesPopup(null)}>Change Filters</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealFeature;