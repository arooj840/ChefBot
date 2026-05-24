import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import './MealSuggestion.css';

// SVG Icon Components
const Icons = {
  Search: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  ),
  Refresh: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>
    </svg>
  ),
  Box: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
    </svg>
  ),
  Cart: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
  ),
  Plus: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="M12 5v14"/>
    </svg>
  ),
  X: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  ),
  ChevronLeft: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  ),
  Eye: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  Chef: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" x2="18" y1="17" y2="17"/>
    </svg>
  ),
  ShoppingBag: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
  AlertTriangle: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>
    </svg>
  ),
  Check: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  ),
  ArrowLeft: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
    </svg>
  ),
  Edit: () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  ),
  Trash: () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
    </svg>
  ),
  Users: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Clock: () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  History: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>
    </svg>
  ),
  NoCooking: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>
    </svg>
  ),
  Note: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  ),
  Skip: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>
    </svg>
  ),
  Dot: () => (
    <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  )
  
};

const MealSuggestion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestionsData, setSuggestionsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchedFor, setSearchedFor] = useState('');
  const [visibleCount, setVisibleCount] = useState(8);
  const [pantryItems, setPantryItems] = useState([]);
  const [pantryCount, setPantryCount] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDayMeals, setSelectedDayMeals] = useState([]);
  const [expandedDay, setExpandedDay] = useState(null);
  const [isNoCookingDay, setIsNoCookingDay] = useState(false);
  const [dayStatus, setDayStatus] = useState({});

  const [showAddMealForm, setShowAddMealForm] = useState(false);
  const [selectedMealRecipe, setSelectedMealRecipe] = useState('');
  const [manualRecipeName, setManualRecipeName] = useState('');
  const [recipeSuggestions, setRecipeSuggestions] = useState([]);
  const [showRecipeSuggestions, setShowRecipeSuggestions] = useState(false);
  const [selectedMealMembers, setSelectedMealMembers] = useState(4);
  const [editingMeal, setEditingMeal] = useState(null);
  const [allRecipes, setAllRecipes] = useState([]);
  const [showMissingInline, setShowMissingInline] = useState(false);
  const [missingFundamentals, setMissingFundamentals] = useState([]);
  const [skipFundamental, setSkipFundamental] = useState(false);
  const [showMonthHistory, setShowMonthHistory] = useState(false);
  const [monthHistory, setMonthHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showMemberPopup, setShowMemberPopup] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedMembers, setSelectedMembers] = useState('4');
  const [customMembers, setCustomMembers] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [isCooking, setIsCooking] = useState(false);

  const [filters, setFilters] = useState({
    mealType: 'all',
    dietType: 'all',
    allergy: 'none',
    ageGroup: 'general'
  });

  const [patientSections, setPatientSections] = useState({
    diabetes: { recipes: [], currentPage: 0, total: 0, loading: false, hasMore: false },
    heart: { recipes: [], currentPage: 0, total: 0, loading: false, hasMore: false },
    bp: { recipes: [], currentPage: 0, total: 0, loading: false, hasMore: false },
    kidney: { recipes: [], currentPage: 0, total: 0, loading: false, hasMore: false },
    lowfat: { recipes: [], currentPage: 0, total: 0, loading: false, hasMore: false }
  });

  const patientTypes = [
    { id: 'diabetes', name: 'Diabetes Friendly', label: 'DB' },
    { id: 'heart', name: 'Heart Health', label: 'HH' },
    { id: 'bp', name: 'BP / Low Salt', label: 'BP' },
    { id: 'kidney', name: 'Kidney Friendly', label: 'KD' },
    { id: 'lowfat', name: 'Low Fat', label: 'LF' }
  ];

  const getDateForDay = (dayName) => {
    const today = new Date();
    const daysMap = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };
    const targetDay = daysMap[dayName];
    let diff = targetDay - today.getDay();
    const date = new Date(today);
    date.setDate(today.getDate() + diff);
    return date.toISOString().split('T')[0];
  };

  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const weekDays = [
    { id: 'mon', name: 'MON', fullName: 'Monday', date: getDateForDay('Monday') },
    { id: 'tue', name: 'TUE', fullName: 'Tuesday', date: getDateForDay('Tuesday') },
    { id: 'wed', name: 'WED', fullName: 'Wednesday', date: getDateForDay('Wednesday') },
    { id: 'thu', name: 'THU', fullName: 'Thursday', date: getDateForDay('Thursday') },
    { id: 'fri', name: 'FRI', fullName: 'Friday', date: getDateForDay('Friday') },
    { id: 'sat', name: 'SAT', fullName: 'Saturday', date: getDateForDay('Saturday') },
    { id: 'sun', name: 'SUN', fullName: 'Sunday', date: getDateForDay('Sunday') }
  ];

  const getTodayDayId = () => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const dayMap = { Monday: 'mon', Tuesday: 'tue', Wednesday: 'wed', Thursday: 'thu', Friday: 'fri', Saturday: 'sat', Sunday: 'sun' };
    return dayMap[today] || 'tue';
  };

  const mealTypes = ['all', 'breakfast', 'lunch', 'dinner', 'snacks'];
  const dietTypes = ['all', 'veg', 'non-veg', 'eggetarian'];
  const allergies = ['none', 'egg', 'peanut', 'gluten', 'lactose', 'shellfish'];
  const ageGroups = ['kids', 'general', 'patient', 'family-mix'];

  const moreCategories = [
    { id: 'quick', name: 'Quick Recipes', query: 'quick' },
    { id: 'spicy', name: 'Spicy', query: 'spicy' },
    { id: 'healthy', name: 'Healthy', query: 'healthy' },
    { id: 'chicken', name: 'Chicken', query: 'chicken' },
    { id: 'vegetarian', name: 'Vegetarian', query: 'vegetarian' },
    { id: 'fish', name: 'Fish', query: 'fish' },
    { id: 'rice', name: 'Rice', query: 'rice' },
    { id: 'dessert', name: 'Dessert', query: 'dessert' },
    { id: 'none', name: 'None', query: null }
  ];

  const memberOptions = [
    { value: '2', label: '2 people' },
    { value: '4', label: '4 people' },
    { value: '6', label: '6 people' },
    { value: '8', label: '8 people' },
    { value: '10', label: '10 people' },
    { value: 'other', label: 'Other (enter manually)' }
  ];

  // Check if any pending days for red dot
  const hasPendingDays = () => {
    const todayDate = new Date().toISOString().split('T')[0];
    return Object.keys(dayStatus).some(date => 
      date >= todayDate && dayStatus[date] === 'pending'
    );
  };

  // Handle resize for mobile detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleRefreshPantry = async () => {
    toast.info('Refreshing pantry...');
    await fetchPantryItems();
    await fetchSuggestions(searchQuery);
    toast.success('Pantry refreshed!');
  };

  const handleViewPantry = () => navigate('/smart-pantry');
  const handleViewShoppingList = () => navigate('/smart-shopping');

  const fetchMonthHistory = async () => {
    try {
      setLoadingHistory(true);
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/meal-suggestions/cooking-log/month', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (data.success) {
        setMonthHistory(data.meals || []);
        setShowMonthHistory(true);
      } else {
        toast.error(data.message || 'Failed to load history');
      }
    } catch (error) {
      console.error('Error fetching month history:', error);
      toast.error('Error loading month history');
    } finally {
      setLoadingHistory(false);
    }
  };

  const fetchAllRecipes = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/recipes?limit=100', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (data.success && data.recipes) setAllRecipes(data.recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const fetchPantryItems = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/pantry', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (data.success && data.items) {
        const itemNames = data.items.map(item => item.name.toLowerCase().trim());
        setPantryItems(itemNames);
        setPantryCount(data.items.length);
        return itemNames;
      }
    } catch (error) {
      console.error('Error fetching pantry:', error);
      return [];
    }
  };

  const fetchCookingLogForDate = async (date) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/meal-suggestions/cooking-log/${date}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      let status = 'pending';
      if (data.meals && data.meals.length > 0) status = 'completed';
      else if (data.isNoCookingDay === true) status = 'no-cooking';

      setDayStatus(prev => ({ ...prev, [date]: status }));
      if (status === 'no-cooking') { setSelectedDayMeals([]); setIsNoCookingDay(true); }
      else if (status === 'completed') { setIsNoCookingDay(false); setSelectedDayMeals(data.meals || []); }
      else { setIsNoCookingDay(false); setSelectedDayMeals([]); }
    } catch (error) {
      console.error('Error fetching cooking log:', error);
      setSelectedDayMeals([]);
      setIsNoCookingDay(false);
      setDayStatus(prev => ({ ...prev, [date]: 'pending' }));
    }
  };

  const loadAllDayStatuses = async () => {
    for (const day of weekDays) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:5000/api/meal-suggestions/cooking-log/${day.date}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        let status = 'pending';
        if (data.meals && data.meals.length > 0) status = 'completed';
        else if (data.isNoCookingDay === true) status = 'no-cooking';
        setDayStatus(prev => ({ ...prev, [day.date]: status }));
      } catch (error) {
        console.error('Error loading status for', day.date, error);
      }
    }
  };

  const searchRecipesForSuggestions = async (query) => {
    if (!query.trim()) { setRecipeSuggestions([]); setShowRecipeSuggestions(false); return; }
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/recipes/search?q=${encodeURIComponent(query)}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (data.success && data.recipes) {
        setRecipeSuggestions(data.recipes.slice(0, 5));
        setShowRecipeSuggestions(true);
      }
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  const handleManualRecipeChange = (e) => {
    const value = e.target.value;
    setManualRecipeName(value);
    searchRecipesForSuggestions(value);
  };

  const selectRecipeSuggestion = (recipe) => {
    setManualRecipeName(recipe.title);
    setSelectedMealRecipe(recipe._id);
    setShowRecipeSuggestions(false);
  };

  const fetchPatientRecipes = async (type, page = 0) => {
    try {
      const token = localStorage.getItem('token');
      const limit = 5;
      setPatientSections(prev => ({ ...prev, [type]: { ...prev[type], loading: true } }));
      const response = await fetch(`http://localhost:5000/api/recipes/patient/${type}?limit=${limit}&skip=${page * limit}&dietType=${filters.dietType}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (data.success && data.recipes) {
        setPatientSections(prev => ({
          ...prev,
          [type]: { recipes: data.recipes, currentPage: page, total: data.total, loading: false, hasMore: data.hasMore || false }
        }));
      } else {
        setPatientSections(prev => ({ ...prev, [type]: { ...prev[type], loading: false, recipes: [] } }));
      }
    } catch (error) {
      setPatientSections(prev => ({ ...prev, [type]: { ...prev[type], loading: false, recipes: [] } }));
    }
  };

  const handlePatientNext = (type, currentPage, hasMore) => { if (hasMore) fetchPatientRecipes(type, currentPage + 1); };
  const handlePatientPrev = (type, currentPage) => { if (currentPage > 0) fetchPatientRecipes(type, currentPage - 1); };

  const handleAddToShopping = async (recipe) => {
    if (!recipe.missing || recipe.missing.length === 0) { toast.info('No missing ingredients to add'); return; }
    try {
      const token = localStorage.getItem('token');
      const shoppingResponse = await fetch('http://localhost:5000/api/shopping', { headers: { 'Authorization': `Bearer ${token}` } });
      const shoppingData = await shoppingResponse.json();
      const existingShoppingItems = shoppingData.items?.map(item => item.name?.toLowerCase().trim()) || [];
      const alreadyInShopping = [];
      const newItems = [];
      recipe.missing.forEach(item => {
        const itemLower = item.toLowerCase().trim();
        if (existingShoppingItems.includes(itemLower)) alreadyInShopping.push(item);
        else newItems.push(item);
      });
      if (alreadyInShopping.length > 0) toast.warning(`Already in shopping list: ${alreadyInShopping.join(', ')}`);
      if (newItems.length > 0) {
        const addResponse = await fetch('http://localhost:5000/api/shopping/add-missing', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ recipeId: recipe.id || recipe._id, missingIngredients: newItems })
        });
        const addData = await addResponse.json();
        if (addData.success) toast.success(`Added to shopping list: ${newItems.join(', ')}`);
        else toast.error(addData.message || 'Failed to add items');
      } else if (alreadyInShopping.length > 0 && newItems.length === 0) {
        toast.info('All missing items are already in your shopping list!');
      }
    } catch (error) {
      toast.error('Error adding items to shopping list');
    }
  };

  const fetchSuggestions = async (search = searchQuery, forceSkip = false) => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem('token');
      let pantryNames = pantryItems;
      if (pantryNames.length === 0) pantryNames = await fetchPantryItems();
      let url = `http://localhost:5000/api/meal-suggestions?`;
      if (search && search !== '') url += `search=${encodeURIComponent(search)}&`;
      if (filters.mealType !== 'all') url += `mealTime=${filters.mealType}&`;
      if (filters.dietType !== 'all') url += `dietType=${filters.dietType}&`;
      if (filters.allergy !== 'none') url += `allergy=${filters.allergy}&`;
      if (filters.ageGroup !== 'general') url += `ageGroup=${filters.ageGroup}&`;
      if (forceSkip || skipFundamental) url += `skipFundamental=true&`;
      if (pantryNames.length > 0) url += `pantry=${encodeURIComponent(pantryNames.join(','))}&`;
      const response = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` } });
      const data = await response.json();
      if (!data || typeof data !== 'object') { setError('Invalid response from server'); setSuggestionsData([]); }
      else if (!data.success && data.message) { setError(data.message); setSuggestionsData([]); }
      else if (data.missingFundamentals && data.missingFundamentals.length > 0) {
        setMissingFundamentals(data.missingFundamentals);
        setShowMissingInline(true);
        setSuggestionsData([]);
      } else if (data.suggestions && data.suggestions.length > 0) {
        setSuggestionsData(data.suggestions);
        if (search) setSearchedFor(search);
        setShowMissingInline(false);
        setError(null);
      } else {
        setSuggestionsData([]);
        if (data.message) setError(data.message);
      }
    } catch (err) {
      setError('Failed to load suggestions. Please try again.');
      setSuggestionsData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDayClick = async (day) => {
    setSelectedDate(day);
    
    if (isMobile) {
      setDrawerOpen(false);
      setExpandedDay(day.id);
    } else {
      setExpandedDay(day.id);
    }
    
    await fetchCookingLogForDate(day.date);
  };

  const handleCloseExpanded = () => { setExpandedDay(null); setIsNoCookingDay(false); };

  const handleNoCooking = async () => {
    if (!selectedDate) { toast.error('No date selected'); return; }
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/meal-suggestions/cooking-log', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: selectedDate.date, recipeId: null, recipeName: null, members: 0, noCooking: true })
      });
      const data = await response.json();
      if (data.success) {
        toast.success(`Marked ${selectedDate.fullName} as no cooking day`);
        setSelectedDayMeals([]);
        setIsNoCookingDay(true);
        setDayStatus(prev => ({ ...prev, [selectedDate.date]: 'no-cooking' }));
        setShowAddMealForm(false);
      } else {
        toast.error(data.message || 'Error saving');
      }
    } catch (error) {
      toast.error('Error saving no cooking status');
    }
  };

  const handleForgotToLog = () => {
    if (!selectedDate) { toast.error('Please select a day first'); return; }
    setEditingMeal(null);
    setSelectedMealRecipe('');
    setManualRecipeName('');
    setRecipeSuggestions([]);
    setShowRecipeSuggestions(false);
    setSelectedMealMembers(4);
    setShowAddMealForm(true);
    setIsNoCookingDay(false);
  };

  const handleEditMeal = (meal) => {
    setEditingMeal(meal);
    setSelectedMealRecipe(meal.recipeId);
    setManualRecipeName(meal.recipeName);
    setSelectedMealMembers(meal.members);
    setShowAddMealForm(true);
  };

  const handleDeleteMeal = async (meal) => {
    if (!selectedDate) return toast.error('No date selected');
    try {
      const token = localStorage.getItem('token');
      const mealId = meal._id || meal.id;
      const response = await fetch(`http://localhost:5000/api/meal-suggestions/cooking-log/${selectedDate.date}/meal/${mealId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (data.success) {
        toast.success('Meal deleted successfully');
        const updatedResponse = await fetch(`http://localhost:5000/api/meal-suggestions/cooking-log/${selectedDate.date}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const updatedData = await updatedResponse.json();
        if (!updatedData.meals || updatedData.meals.length === 0) {
          setDayStatus(prev => ({ ...prev, [selectedDate.date]: 'pending' }));
        }
        await fetchCookingLogForDate(selectedDate.date);
      } else {
        toast.error(data.message || 'Error deleting meal');
      }
    } catch (error) {
      toast.error('Error deleting meal');
    }
  };

  const handleSaveMeal = async () => {
    if (!selectedDate) return toast.error('No date selected');
    if (!manualRecipeName.trim()) return toast.warning('Please enter recipe name');
    try {
      const token = localStorage.getItem('token');
      if (editingMeal) {
        const response = await fetch(`http://localhost:5000/api/meal-suggestions/cooking-log/${selectedDate.date}/meal/${editingMeal._id || editingMeal.id}`, {
          method: 'PUT',
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ recipeId: selectedMealRecipe || 'manual', recipeName: manualRecipeName, members: selectedMealMembers })
        });
        const data = await response.json();
        if (data.success) toast.success(`Meal updated: ${manualRecipeName}`);
        else toast.error(data.message || 'Error updating meal');
      } else {
        const response = await fetch('http://localhost:5000/api/meal-suggestions/cooking-log', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ date: selectedDate.date, recipeId: selectedMealRecipe || 'manual', recipeName: manualRecipeName, members: selectedMealMembers })
        });
        const data = await response.json();
        if (data.success) {
          toast.success(`${manualRecipeName} added for ${selectedDate.fullName || selectedDate.id}`);
          setDayStatus(prev => ({ ...prev, [selectedDate.date]: 'completed' }));
        } else toast.error(data.message || 'Error adding meal');
      }
      setShowAddMealForm(false);
      setEditingMeal(null);
      setSelectedMealRecipe('');
      setManualRecipeName('');
      setRecipeSuggestions([]);
      setSelectedMealMembers(4);
      await fetchCookingLogForDate(selectedDate.date);
    } catch (error) {
      toast.error('Error saving meal');
    }
  };

  const handleAddMissingToShopping = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/shopping/add-multiple', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: missingFundamentals.map(item => ({ name: item, quantity: 1, unit: 'piece' })) })
      });
      if (response.ok) toast.success(`${missingFundamentals.length} essential items added to shopping list!`);
      else toast.error('Failed to add items');
    } catch (error) { toast.error('Error adding items'); }
  };

  const handlePandaMartOrder = () => {
    window.open(`https://www.google.com/search?q=pandamart+${encodeURIComponent(missingFundamentals.join(', '))}+Pakistan`, '_blank');
    toast.info('Opening Google search for Pandamart');
  };

  const handleSkipAndContinue = () => {
    setSkipFundamental(true);
    setShowMissingInline(false);
    fetchSuggestions(searchQuery, true);
    toast.info('Showing available recipes with your current pantry');
  };

  const handleConfirmCooking = async () => {
    const membersValue = selectedMembers === 'other' ? customMembers : selectedMembers;
    if (!membersValue || membersValue === '') return toast.warning('Please select number of people');
    setIsCooking(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/meal-suggestions/cook', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipeId: selectedRecipe.id || selectedRecipe._id, members: parseInt(membersValue), date: selectedDate?.date || new Date().toISOString().split('T')[0] })
      });
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        setShowMemberPopup(false);
        setSelectedRecipe(null);
        navigate(`/recipe/${selectedRecipe.id}?members=${membersValue}`);
        if (selectedDate) {
          setDayStatus(prev => ({ ...prev, [selectedDate.date]: 'completed' }));
          await fetchCookingLogForDate(selectedDate.date);
        }
        fetchSuggestions(searchQuery);
      } else {
        toast.error(data.message || 'Error cooking recipe');
      }
    } catch (error) {
      toast.error('Error cooking recipe');
    } finally {
      setIsCooking(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) { setSkipFundamental(false); fetchSuggestions(searchQuery); }
  };

  const handleCategorySelect = (category) => {
    setShowCategoryModal(false);
    if (category.query === null) return;
    setSearchQuery(category.query);
    setSkipFundamental(false);
    fetchSuggestions(category.query);
  };

  const handleRecipeClick = (recipe) => {
    const recipeId = recipe._id || recipe.id || recipe.recipeId;
    if (recipeId) navigate(`/recipe/${recipeId}`);
    else toast.error('Recipe ID not found');
  };

  const handleCookIt = (recipe) => {
    setSelectedRecipe(recipe);
    setSelectedMembers('4');
    setCustomMembers('');
    setShowCustomInput(false);
    setShowMemberPopup(true);
  };

  const handleMemberSelect = (value) => {
    if (value === 'other') { setShowCustomInput(true); setSelectedMembers(''); }
    else { setShowCustomInput(false); setSelectedMembers(value); setCustomMembers(''); }
  };

  const handleCustomMemberChange = (e) => {
    const val = e.target.value;
    setCustomMembers(val);
    setSelectedMembers(val);
  };

  const loadMore = () => setVisibleCount(prev => prev + 8);

  const getMatchColor = (matchPercent) => {
    const percent = parseInt(matchPercent);
    if (percent >= 80) return '#22c55e';
    if (percent >= 60) return '#22c55e';
    if (percent >= 40) return '#f97316';
    return '#ef4444';
  };

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  useEffect(() => { loadAllDayStatuses(); }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('q');
    fetchAllRecipes();
    fetchPantryItems();
    if (searchParam) { setSearchQuery(searchParam); fetchSuggestions(searchParam); }
    else { fetchSuggestions(''); }
    
    // First time only - PERMANENT (localStorage)
    const hasVisitedPermanently = localStorage.getItem('mealSuggestionFirstTime');
    if (!hasVisitedPermanently && isMobile) {
      setTimeout(() => {
        setDrawerOpen(true);
        localStorage.setItem('mealSuggestionFirstTime', 'true');
      }, 500);
    }
    
    const todayId = getTodayDayId();
    const todayDay = weekDays.find(day => day.id === todayId);
    if (todayDay) {
      setSelectedDate(todayDay);
      setExpandedDay(todayId);
      fetchCookingLogForDate(todayDay.date);
    }
  }, []);

  useEffect(() => { if (!loading) fetchSuggestions(searchQuery); }, [filters]);

  useEffect(() => {
    if (filters.ageGroup === 'patient') {
      patientTypes.forEach(type => fetchPatientRecipes(type.id, 0));
    }
  }, [filters.ageGroup, filters.dietType]);

  const HorizontalScrollSection = ({ title, label, recipes, currentPage, hasMore, onPrev, onNext, loading }) => {
    if (loading && recipes.length === 0) {
      return (
        <div className="patient-section">
          <h3 className="patient-section-title"><span className="patient-label">{label}</span>{title}</h3>
          <div className="horizontal-scroll-container"><div className="loading-placeholder">Loading recipes...</div></div>
        </div>
      );
    }
    if (recipes.length === 0) return null;
    return (
      <div className="patient-section">
        <h3 className="patient-section-title"><span className="patient-label">{label}</span>{title}</h3>
        <div className="horizontal-scroll-container">
          <button className="scroll-arrow scroll-left" onClick={onPrev} disabled={currentPage === 0}><Icons.ChevronLeft /></button>
          <div className="patient-recipes-wrapper">
            {recipes.map((recipe) => (
              <div key={recipe._id} className="patient-recipe-card">
                <div className="patient-recipe-image" style={{ backgroundImage: `url(${recipe.image || 'https://via.placeholder.com/150x150?text=No+Image'})` }} onClick={() => handleRecipeClick(recipe)}></div>
                <div className="patient-recipe-info-block">
                  <h4 className="patient-recipe-title">{recipe.title}</h4>
                  <p className="patient-recipe-info"><Icons.Clock /> {recipe.cookingTime} min</p>
                  <div className="patient-recipe-actions">
                    <button className="patient-view-btn" onClick={(e) => { e.stopPropagation(); handleRecipeClick(recipe); }}><Icons.Eye /> View</button>
                    <button className="patient-cook-btn" onClick={(e) => { e.stopPropagation(); handleCookIt(recipe); }}><Icons.Chef /> Cook</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-arrow scroll-right" onClick={onNext} disabled={!hasMore}><Icons.ChevronRight /></button>
        </div>
      </div>
    );
  };

  const visibleSuggestions = suggestionsData.slice(0, visibleCount);
  const hasMore = visibleCount < suggestionsData.length;

 const getDayStatusIcon = (day) => {
  const status = dayStatus[day.date];
  const todayDate = new Date().toISOString().split('T')[0];
  
  // Sirf PAST ya TODAY ki dates check karo, FUTURE ki nahi
  const isFutureDay = day.date > todayDate;
  
  // Sirf pending status aur future day nahi hai tabhi red dot dikhao
  if (status === 'pending' && !isFutureDay) {
    return <span className="ms-status-dot ms-status-pending"></span>;
  }
  
  return null;
};

  if (loading) {
    return (
      <div className="ms-container">
        <div className="ms-loading">
          <div className="ms-spinner"></div>
          <p>Finding recipes for you...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ms-container">
      {/* Mobile Drawer Overlay - Blur Effect */}
      {isMobile && drawerOpen && (
        <div className="ms-drawer-overlay" onClick={closeDrawer}></div>
      )}

      {/* Mobile Side Drawer */}
      {isMobile && (
        <div className={`ms-side-drawer ${drawerOpen ? 'open' : ''}`}>
          <div className="ms-drawer-header">
            <h3><Icons.Calendar /> Calendar</h3>
            <button className="ms-drawer-close" onClick={closeDrawer}><Icons.X /></button>
          </div>
          <div className="ms-drawer-content">
            {weekDays.map(day => {
              const isToday = day.date === new Date().toISOString().split('T')[0];
              const status = dayStatus[day.date];
              return (
                <div
                  key={day.id}
                  className={`ms-drawer-day-item ${selectedDate?.id === day.id ? 'active' : ''} ${isToday ? 'today' : ''}`}
                  onClick={() => handleDayClick(day)}
                >
                  <div className="ms-drawer-day-info">
                    <span className="ms-drawer-day-name">{day.fullName}</span>
                    <span className="ms-drawer-day-date">{getFormattedDate(day.date)}</span>
                  </div>
                  {status === 'pending' && <div className="ms-drawer-status-dot"></div>}
                </div>
              );
            })}
            <button className="ms-drawer-history-btn" onClick={() => { fetchMonthHistory(); closeDrawer(); }}>
              <Icons.History /> Month History
            </button>
          </div>
        </div>
      )}

      <header className="ms-header">
        <div className="ms-header-content">
          <h1 className="ms-title">What to Cook Today?</h1>
          <p className="ms-description">Search by meal type, ingredients, or cuisine preference</p>
        </div>
      </header>

      <div className="ms-layout">
        {/* LEFT CALENDAR - Desktop only */}
        {!isMobile && (
          <div className={`ms-days-calendar ${expandedDay !== null ? 'ms-expanded' : ''}`}>
            {weekDays.map(day => {
              const isExpanded = expandedDay === day.id;
              const mealsForDay = isExpanded ? selectedDayMeals : [];
              const status = dayStatus[day.date];
              const todayDate = new Date().toISOString().split('T')[0];
              const isToday = day.date === todayDate;

              return (
                <div key={day.id} className="ms-day-wrapper">
                  <div
                    className={`ms-day-item ${selectedDate?.id === day.id ? 'ms-day-active' : ''} ${isToday ? 'ms-day-today' : ''}`}
                    onClick={() => handleDayClick(day)}
                  >
                    <span className="ms-day-name">{day.name}</span>
                    <span className="ms-day-date">{getFormattedDate(day.date)}</span>
                    {getDayStatusIcon(day)}
                  </div>

                  {isExpanded && (
                    <div className="ms-day-meals-expanded">
                      <div className="ms-expanded-header">
                        <div>
                          <span className="ms-expanded-day">{day.fullName}</span>
                          <span className="ms-expanded-date">{getFormattedDate(day.date)}</span>
                        </div>
                        <button className="ms-expanded-close" onClick={handleCloseExpanded}><Icons.X /></button>
                      </div>

                      {status === 'no-cooking' ? (
                        <div className="ms-no-meals-expanded">
                          <div className="ms-no-cooking-msg">
                            <Icons.NoCooking />
                            <span>No cooking this day</span>
                          </div>
                          <button className="ms-add-meal-expanded" onClick={handleForgotToLog}><Icons.Plus /> Add Meal</button>
                        </div>
                      ) : mealsForDay.length > 0 ? (
                        <>
                          <div className="ms-meals-list-expanded">
                            {mealsForDay.map((meal, idx) => (
                              <div key={idx} className="ms-meal-item-expanded">
                                <div className="ms-meal-info-expanded">
                                  <span className="ms-meal-name">{meal.recipeName}</span>
                                  <span className="ms-meal-members"><Icons.Users /> {meal.members}</span>
                                </div>
                                <div className="ms-meal-actions-expanded">
                                  <button className="ms-delete-meal" onClick={() => handleDeleteMeal(meal)} title="Delete"><Icons.Trash /></button>
                                </div>
                              </div>
                            ))}
                          </div>
                          <button className="ms-add-meal-expanded" onClick={handleForgotToLog}><Icons.Plus /> Add Meal</button>
                        </>
                      ) : (
                        <div className="ms-no-meals-expanded">
                          <p className="ms-no-meals-text">No meals recorded.</p>
                          <div className="ms-expanded-actions">
                            <button className="ms-no-cooking-expanded" onClick={handleNoCooking}><Icons.NoCooking /> No cooking done</button>
                            <button className="ms-forgot-log-expanded" onClick={handleForgotToLog}><Icons.Note /> I forgot to log</button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="ms-day-wrapper">
              <button className="ms-month-history-btn" onClick={fetchMonthHistory}>
                <Icons.History />
                <span className="ms-day-date">Month</span>
              </button>
            </div>
          </div>
        )}

        {/* MAIN CONTENT - Blur when drawer open on mobile */}
        <div className={`ms-main-content ${isMobile && drawerOpen ? 'ms-blurred' : ''}`}>
          
          {/* Search */}
          <div className="ms-search-section">
            <form onSubmit={handleSearchSubmit} className="ms-search-form">
              <div className="ms-search-wrapper">
                <span className="ms-search-icon"><Icons.Search /></span>
                <input
                  type="text"
                  className="ms-search-input"
                  placeholder="Search: breakfast, spicy chicken, quick dinner..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button type="submit" className="ms-search-btn">Find Recipes</button>
            </form>
            
            {/* Action Buttons - Mobile mein History icon bhi yahin */}
            <div className="ms-action-buttons">
              {isMobile && (
                <button 
                  className={`ms-mobile-history-btn ${hasPendingDays() ? 'has-notification' : ''}`}
                  onClick={openDrawer}
                  title="Calendar"
                >
                  <Icons.History />
                </button>
              )}
              <button className="ms-refresh-btn" onClick={handleRefreshPantry} title="Refresh Pantry">
                <Icons.Refresh />
                <span>Refresh</span>
              </button>
              <button className="ms-view-pantry-btn" onClick={handleViewPantry} title="Pantry">
                <Icons.Box />
                <span>Pantry ({pantryCount})</span>
              </button>
              <button className="ms-view-shopping-btn" onClick={handleViewShoppingList} title="Shopping List">
                <Icons.Cart />
                <span>Shopping</span>
              </button>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="ms-filters-bar">
            <div className="ms-filter-group">
              <label className="ms-filter-label"> Meal</label>
              <select className="ms-filter-select" value={filters.mealType} onChange={(e) => setFilters({ ...filters, mealType: e.target.value })}>
                {mealTypes.map(type => <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>)}
              </select>
            </div>
            <div className="ms-filter-group">
              <label className="ms-filter-label"> Diet</label>
              <select className="ms-filter-select" value={filters.dietType} onChange={(e) => setFilters({ ...filters, dietType: e.target.value })}>
                {dietTypes.map(type => <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>)}
              </select>
            </div>
            <div className="ms-filter-group">
              <label className="ms-filter-label"> Allergy</label>
              <select className="ms-filter-select" value={filters.allergy} onChange={(e) => setFilters({ ...filters, allergy: e.target.value })}>
                {allergies.map(allergy => <option key={allergy} value={allergy}>{allergy.charAt(0).toUpperCase() + allergy.slice(1)}</option>)}
              </select>
            </div>
            <div className="ms-filter-group">
              <label className="ms-filter-label"> Age</label>
              <select className="ms-filter-select" value={filters.ageGroup} onChange={(e) => setFilters({ ...filters, ageGroup: e.target.value })}>
                {ageGroups.map(group => <option key={group} value={group}>{group.replace('-', ' ').charAt(0).toUpperCase() + group.slice(1)}</option>)}
              </select>
            </div>
            <button className="ms-plus-btn" onClick={() => setShowCategoryModal(true)}>
              <Icons.Plus />
              <span>More</span>
            </button>
          </div>

          {/* Mobile Expanded Day View - Bottom Sheet */}
          {isMobile && expandedDay && (
            <div className="ms-mobile-expanded-day">
              <div className="ms-mobile-expanded-header">
                <h3>{selectedDate?.fullName} - {selectedDate?.date}</h3>
                <button className="ms-mobile-expanded-close" onClick={handleCloseExpanded}><Icons.X /></button>
              </div>
              <div className="ms-mobile-expanded-content">
                {dayStatus[selectedDate?.date] === 'no-cooking' ? (
                  <div className="ms-no-meals-expanded">
                    <p>No cooking this day</p>
                    <button className="ms-add-meal-expanded" onClick={handleForgotToLog}><Icons.Plus /> Add Meal</button>
                  </div>
                ) : selectedDayMeals.length > 0 ? (
                  <>
                    {selectedDayMeals.map((meal, idx) => (
                      <div key={idx} className="ms-meal-item-expanded">
                        <div>
                          <span className="ms-meal-name">{meal.recipeName}</span>
                          <span className="ms-meal-members"><Icons.Users /> {meal.members}</span>
                        </div>
                        <button className="ms-delete-meal" onClick={() => handleDeleteMeal(meal)}><Icons.Trash /></button>
                      </div>
                    ))}
                    <button className="ms-add-meal-expanded" onClick={handleForgotToLog}><Icons.Plus /> Add Meal</button>
                  </>
                ) : (
                  <div className="ms-no-meals-expanded">
                    <p>No meals recorded.</p>
                    <div className="ms-expanded-actions">
                      <button className="ms-no-cooking-expanded" onClick={handleNoCooking}>No cooking done</button>
                      <button className="ms-forgot-log-expanded" onClick={handleForgotToLog}>I forgot to log</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Patient Sections */}
          {filters.ageGroup === 'patient' && (
            <div className="patient-sections-container">
              {patientTypes.map(type => (
                <HorizontalScrollSection
                  key={type.id}
                  title={type.name}
                  label={type.label}
                  recipes={patientSections[type.id].recipes}
                  currentPage={patientSections[type.id].currentPage}
                  hasMore={patientSections[type.id].hasMore}
                  onPrev={() => handlePatientPrev(type.id, patientSections[type.id].currentPage)}
                  onNext={() => handlePatientNext(type.id, patientSections[type.id].currentPage, patientSections[type.id].hasMore)}
                  loading={patientSections[type.id].loading}
                />
              ))}
            </div>
          )}

          {/* Missing Fundamentals Banner */}
          {showMissingInline && (
            <div className="ms-missing-inline">
              <div className="ms-missing-inline-header">
                <span className="ms-missing-icon"><Icons.AlertTriangle /></span>
                <span className="ms-missing-title">Essential Items Missing</span>
              </div>
              <p>Your pantry is missing: <strong>{missingFundamentals.join(', ')}</strong></p>
              <div className="ms-missing-inline-actions">
                <button className="ms-inline-btn ms-inline-shopping" onClick={handleAddMissingToShopping}><Icons.Cart /> Add to Shopping List</button>
                <button className="ms-inline-btn ms-inline-panda" onClick={handlePandaMartOrder}><Icons.ShoppingBag /> Order from Panda Mart</button>
                <button className="ms-inline-btn ms-inline-skip" onClick={handleSkipAndContinue}><Icons.Skip /> Skip & Show Suggestions</button>
              </div>
            </div>
          )}

          {error && !showMissingInline && <div className="ms-error"><p>{error}</p></div>}

          {!showMissingInline && suggestionsData.length > 0 && (
            <div className="ms-results-info">
              {searchedFor && <p>Results for: <strong>"{searchedFor}"</strong></p>}
              <p>Found <span className="ms-results-count">{suggestionsData.length}</span> recipes</p>
            </div>
          )}

          {!showMissingInline && visibleSuggestions.length > 0 && (
            <>
              <div className="ms-suggestions-grid">
                {visibleSuggestions.map((recipe, idx) => (
                  <div key={idx} className="ms-recipe-card">
                    <div className="ms-recipe-image" style={{ backgroundImage: `url(${recipe.image || 'https://via.placeholder.com/400x250?text=No+Image'})` }} onClick={() => handleRecipeClick(recipe)}>
                      <span className="ms-match-badge" style={{ backgroundColor: getMatchColor(recipe.match) }}>{recipe.match}%</span>
                    </div>
                    <div className="ms-recipe-content">
                      <h3 className="ms-recipe-name" onClick={() => handleRecipeClick(recipe)}>{recipe.name}</h3>
                      <p className="ms-recipe-category">
                        <span>{recipe.subCategory || recipe.category}</span>
                        <span className="ms-recipe-time"><Icons.Clock /> {recipe.cookingTime} min</span>
                      </p>
                      {recipe.missing && recipe.missing.length > 0 ? (
                        <div className="ms-missing-ingredients">
                          <span className="ms-missing-label">Missing:</span>
                          <span className="ms-missing-items">{recipe.missing.slice(0, 3).join(', ')}{recipe.missing.length > 3 && ` +${recipe.missing.length - 3}`}</span>
                        </div>
                      ) : (
                        <div className="ms-full-match"><Icons.Check /> All ingredients ready</div>
                      )}
                      <div className="ms-match-progress">
                        <div className="ms-match-progress-bar" style={{ width: `${recipe.match}%`, backgroundColor: getMatchColor(recipe.match) }}></div>
                      </div>
                      <div className="ms-recipe-actions">
                        <button className="ms-btn-view" onClick={() => handleRecipeClick(recipe)}><Icons.Eye /> View</button>
                        <button className="ms-btn-cook" onClick={() => handleCookIt(recipe)}><Icons.Chef /> Cook</button>
                        {recipe.missing && recipe.missing.length > 0 && (
                          <button className="ms-btn-shop" onClick={() => handleAddToShopping(recipe)}><Icons.Cart /></button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {hasMore && (
                <div className="ms-show-more">
                  <button className="ms-show-more-btn" onClick={loadMore}>
                    Show More — {suggestionsData.length - visibleCount} more recipes
                  </button>
                </div>
              )}
            </>
          )}

          {!showMissingInline && !loading && !error && suggestionsData.length === 0 && filters.ageGroup !== 'patient' && (
            <div className="ms-empty-state">
              <div className="ms-empty-icon"><Icons.Search /></div>
              <h3>No recipes found</h3>
              <p>Try searching for breakfast, lunch, dinner, or quick recipes</p>
            </div>
          )}

          <div className="ms-back-section">
            <button className="ms-back-btn" onClick={() => navigate(-1)}><Icons.ArrowLeft /> Back</button>
          </div>
        </div>
      </div>

      {/* MODALS */}
      {showCategoryModal && (
        <div className="ms-modal-overlay" onClick={() => setShowCategoryModal(false)}>
          <div className="ms-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ms-modal-header">
              <h3>More Categories</h3>
              <button className="ms-modal-close" onClick={() => setShowCategoryModal(false)}><Icons.X /></button>
            </div>
            <div className="ms-modal-body">
              <div className="ms-categories-grid">
                {moreCategories.map(cat => (
                  <button key={cat.id} className="ms-category-btn" onClick={() => handleCategorySelect(cat)}>{cat.name}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {showMemberPopup && selectedRecipe && (
        <div className="ms-popup-overlay" onClick={() => setShowMemberPopup(false)}>
          <div className="ms-popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="ms-popup-header">
              <h3>{selectedRecipe.name}</h3>
              <button className="ms-popup-close" onClick={() => setShowMemberPopup(false)}><Icons.X /></button>
            </div>
            <div className="ms-popup-body">
              <p className="ms-popup-question">How many people are eating?</p>
              <p className="ms-popup-base-info">Base recipe serves: {selectedRecipe.baseServings || 4} persons</p>
              <div className="ms-member-options">
                {memberOptions.map(option => (
                  <label key={option.value} className="ms-member-option">
                    <input type="radio" name="members" value={option.value} checked={option.value === 'other' ? showCustomInput : selectedMembers === option.value} onChange={() => handleMemberSelect(option.value)} />
                    <span><Icons.Users /> {option.label}</span>
                  </label>
                ))}
                {showCustomInput && (
                  <input type="number" className="ms-custom-member-input" placeholder="Enter number of people" value={customMembers} onChange={handleCustomMemberChange} min="1" autoFocus />
                )}
              </div>
            </div>
            <div className="ms-popup-footer">
              <button className="ms-popup-view" onClick={() => {
                const members = selectedMembers === 'other' ? customMembers : selectedMembers;
                if (!members) { toast.warning('Please select number of people'); return; }
                navigate(`/recipe/${selectedRecipe.id}?members=${members}`);
                setShowMemberPopup(false);
              }}><Icons.Eye /> View</button>
              <button className="ms-popup-cook-view" onClick={handleConfirmCooking} disabled={isCooking}>
                {isCooking ? 'Cooking...' : <><Icons.Chef /> Cook & View</>}
              </button>
              <button className="ms-popup-cancel" onClick={() => setShowMemberPopup(false)}><Icons.X /> Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showAddMealForm && selectedDate && (
        <div className="ms-popup-overlay" onClick={() => setShowAddMealForm(false)}>
          <div className="ms-popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="ms-popup-header">
              <h3>{editingMeal ? 'Edit Meal' : 'Add Meal'} — {selectedDate.fullName || selectedDate.id}</h3>
              <button className="ms-popup-close" onClick={() => setShowAddMealForm(false)}><Icons.X /></button>
            </div>
            <div className="ms-popup-body">
              <div className="ms-form-group">
                <label>Recipe Name</label>
                <div className="ms-suggestions-container">
                  <input type="text" className="ms-recipe-input" placeholder="Type recipe name..." value={manualRecipeName} onChange={handleManualRecipeChange} autoFocus />
                  {showRecipeSuggestions && recipeSuggestions.length > 0 && (
                    <div className="ms-suggestions-dropdown">
                      {recipeSuggestions.map(recipe => (
                        <div key={recipe._id} className="ms-suggestion-item" onClick={() => selectRecipeSuggestion(recipe)}>{recipe.title}</div>
                      ))}
                    </div>
                  )}
                </div>
                <small>Type to search recipes from database</small>
              </div>
              <div className="ms-form-group">
                <label>Number of People</label>
                <input type="number" value={selectedMealMembers} onChange={(e) => setSelectedMealMembers(parseInt(e.target.value))} min="1" />
              </div>
            </div>
            <div className="ms-popup-footer">
              <button className="ms-popup-cancel" onClick={() => { setShowAddMealForm(false); setEditingMeal(null); setManualRecipeName(''); setRecipeSuggestions([]); }}><Icons.X /> Cancel</button>
              <button className="ms-popup-confirm" onClick={handleSaveMeal}><Icons.Check /> Save</button>
            </div>
          </div>
        </div>
      )}

      {showMonthHistory && (
        <div className="ms-popup-overlay" onClick={() => setShowMonthHistory(false)}>
          <div className="ms-history-popup" onClick={(e) => e.stopPropagation()}>
            <div className="ms-popup-header">
              <h3>Full Month History</h3>
              <button className="ms-popup-close" onClick={() => setShowMonthHistory(false)}><Icons.X /></button>
            </div>
            <div className="ms-history-popup-body">
              {loadingHistory ? (
                <div className="loading-placeholder">Loading history...</div>
              ) : monthHistory.length === 0 ? (
                <div className="empty-history">
                  <p>No cooking history found for the last 30 days</p>
                  <p className="empty-history-sub">Start cooking some recipes to see them here!</p>
                </div>
              ) : (
                <div className="history-list">
                  {monthHistory.map((meal, idx) => (
                    <div key={idx} className="history-item" onClick={() => { setShowMonthHistory(false); navigate(`/recipe/${meal.recipeId}`); }}>
                      <div className="history-date">
                        <span className="history-day">{meal.dayName}</span>
                        <span className="history-date-num">{meal.date}</span>
                      </div>
                      <div className="history-details">
                        <span className="history-recipe">{meal.recipeName}</span>
                        <span className="history-members"><Icons.Users /> {meal.members} persons</span>
                      </div>
                      <div className="history-arrow"><Icons.ChevronRight /></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="ms-popup-footer">
              <button className="ms-popup-cancel" onClick={() => setShowMonthHistory(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealSuggestion;