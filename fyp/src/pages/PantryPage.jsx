import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../components/Toast';
import './PantryPage.css';

const PantryPage = () => {
  const [items, setItems] = useState([]);
  const [pantryShoppingList, setPantryShoppingList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showLowStockModal, setShowLowStockModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    name: '', quantity: '', unit: 'kg', category: 'Vegetables'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [addingAll, setAddingAll] = useState(false);

  const navigate = useNavigate();

  const categories = ['Vegetables', 'Fruits', 'Dairy', 'Grains', 'Spices', 'Meat', 'Beverages', 'Other'];
  const units = ['kg', 'g', 'liters', 'ml', 'pieces', 'dozen'];

  // 🎯 UNIT-BASED LOW STOCK THRESHOLDS (most important)
  const unitThreshold = {
    'kg': 1,
    'g': 500,
    'liters': 1,
    'ml': 500,
    'pieces': 3,
    'dozen': 0.25
  };

  // Fallback category thresholds (if unit not found)
  const categoryThreshold = {
    'Vegetables': 1,
    'Fruits': 1,
    'Dairy': 0.5,
    'Grains': 2,
    'Spices': 0.2,
    'Meat': 0.5,
    'Beverages': 1,
    'Other': 0.5
  };

  // Helper: check if item is low stock based on its UNIT first, then category, then default 0.5
  const isLowStockItem = (item) => {
    // 1. Check unit-based threshold
    if (unitThreshold[item.unit] !== undefined) {
      return item.quantity < unitThreshold[item.unit];
    }
    // 2. Fallback to category threshold
    const catThreshold = categoryThreshold[item.category];
    if (catThreshold !== undefined) {
      return item.quantity < catThreshold;
    }
    // 3. Default
    return item.quantity <= 0.5;
  };

  const getToken = () => localStorage.getItem('token');

  // ... (all fetch, add, delete functions remain exactly the same as before)
  // I will copy them from the previous message to keep consistency

  const fetchPantryItems = async () => {
    try {
      setLoading(true);
      const token = getToken();
      if (!token) { navigate('/login-page'); return; }
      const response = await fetch('http://localhost:5000/api/pantry', {
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (response.ok) setItems(data.items || []);
    } catch (err) {
      console.error(err);
      showToast('Server error', 'error');
    } finally {
      setLoading(false);
    }
  };

  const fetchPantryShoppingList = async () => {
    try {
      const token = getToken();
      if (!token) return;
      const response = await fetch('http://localhost:5000/api/pantry-shopping', {
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (response.ok) setPantryShoppingList(data.items || []);
    } catch (err) { console.error(err); }
  };

  const addToPantryShoppingList = async (item) => {
    try {
      const token = getToken();
      const response = await fetch('http://localhost:5000/api/pantry-shopping', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: item.name, quantity: item.quantity, unit: item.unit, category: item.category })
      });
      const data = await response.json();
      if (response.ok) { setPantryShoppingList(data.items); showToast(`${item.name} added!`, 'success'); }
      else showToast(data.message || 'Failed', 'error');
    } catch (err) { showToast('Server error', 'error'); }
  };

  const removeFromPantryShoppingList = async (id) => {
    try {
      const token = getToken();
      const response = await fetch(`http://localhost:5000/api/pantry-shopping/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (response.ok) { setPantryShoppingList(data.items); showToast('Item removed', 'info'); }
    } catch (err) { showToast('Server error', 'error'); }
  };

  const clearPantryShoppingList = async () => {
    try {
      const token = getToken();
      const response = await fetch('http://localhost:5000/api/pantry-shopping', {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (response.ok) { setPantryShoppingList([]); showToast('Shopping list cleared!', 'success'); }
    } catch (err) { showToast('Server error', 'error'); }
  };const addAllToShoppingAndRedirect = async () => {
  if (pantryShoppingList.length === 0) {
    showToast('No items to add!', 'warning');
    return;
  }
  setAddingAll(true);

  let successCount = 0;

  try {
    const token = getToken();
    if (!token) {
      showToast('Please login again', 'error');
      navigate('/login-page');
      return;
    }

    for (const item of pantryShoppingList) {
      try {
        const response = await fetch('http://localhost:5000/api/shopping', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: item.name,
            quantity: item.quantity,
            unit: item.unit,
            category: item.category,
            fromPantry: true
          })
        });
        if (response.ok) successCount++;
        else {
          const errorData = await response.json();
          console.error('Failed to add', item.name, errorData);
        }
      } catch (err) {
        console.error('Error adding', item.name, err);
      }
    }

    if (successCount > 0) {
      showToast(`${successCount} item(s) added to main shopping list!`, 'success');
      // Clear pantry shopping list from backend and state
      await clearPantryShoppingList();
      
      // ✅ REDIRECT TO SHOPPING LIST PAGE
      navigate('/smart-shopping');  // <-- YEH LINE ADD KARO
    } else {
      showToast('Failed to add items. Check console.', 'error');
    }
  } catch (err) {
    console.error(err);
    showToast('Server error. Please try again.', 'error');
  } finally {
    setAddingAll(false);
  }
};
  const handleSaveItem = async () => {
    if (!currentItem.name || !currentItem.quantity) { showToast('Please fill all fields!', 'warning'); return; }
    try {
      const token = getToken();
      const url = editMode ? `http://localhost:5000/api/pantry/${currentItem._id}` : 'http://localhost:5000/api/pantry';
      const response = await fetch(url, {
        method: editMode ? 'PUT' : 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: currentItem.name,
          quantity: parseFloat(currentItem.quantity),
          unit: currentItem.unit,
          category: currentItem.category
        })
      });
      const data = await response.json();
      if (response.ok) { setItems(data.items); handleCloseModal(); showToast(editMode ? 'Updated!' : 'Added!', 'success'); }
      else showToast(data.message || 'Failed', 'error');
    } catch (err) { showToast('Server error', 'error'); }
  };

  const handleDelete = async (id) => {
    try {
      const token = getToken();
      const response = await fetch(`http://localhost:5000/api/pantry/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (response.ok) { setItems(data.items); showToast('Item deleted!', 'success'); }
    } catch (err) { showToast('Server error', 'error'); }
  };

  const handleEdit = (item) => {
    setCurrentItem({ _id: item._id, name: item.name, quantity: item.quantity, unit: item.unit, category: item.category });
    setEditMode(true);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setCurrentItem({ name: '', quantity: '', unit: 'kg', category: 'Vegetables' });
    setEditMode(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditMode(false);
    setCurrentItem({ name: '', quantity: '', unit: 'kg', category: 'Vegetables' });
  };

  useEffect(() => {
    fetchPantryItems();
    fetchPantryShoppingList();
  }, []);

  /* ── Derived data using unit-based thresholds ── */
  const lowStockItems = items.filter(isLowStockItem);
  const isSearchActive = searchTerm.trim().length > 0;
  const allTabs = ['All', ...categories];

  const tabItems = isSearchActive
    ? items.filter(i => i.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : activeTab === 'All'
      ? items
      : items.filter(i => i.category === activeTab);

  const totalItems = items.length;
  const totalCategories = [...new Set(items.map(i => i.category))].length;

  if (loading) return (
    <div className="pantry-page">
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );

  return (
    <div className="pantry-page">
      {/* Hero Banner */}
      <div className="fullscreen-food-image">
        <div className="fullscreen-food-content">
          <h1>Your Smart Kitchen Pantry</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="p-hero-section">
        <div className="p-hero-content">
          <h1 className="p-hero-title">Your Pantry Items</h1>
          <p className="p-hero-subtitle">Manage your kitchen inventory efficiently</p>
        </div>
      </div>

      {error && <div className="pantry-error-message">{error}</div>}

      {/* Stats */}
      {items.length > 0 && (
        <div className="stats-section">
          <div className="stat-card">
            <p className="stat-number">{totalItems}</p>
            <p className="stat-label">Total Items</p>
          </div>
          <div className="stat-card low-stock-card">
            <p className="stat-number">{lowStockItems.length}</p>
            <p className="stat-label">Low Stock</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">{totalCategories}</p>
            <p className="stat-label">Categories</p>
          </div>
        </div>
      )}

      {/* Top Controls: Search + Add + Low Stock Button + Alert Button */}
      <div className="top-controls-row">
        <div className="search-add-section">
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setActiveTab('All'); }}
            className="search-field-pantry"
          />
          <button className="btn-add-new-item" onClick={handleAddNew}>+ Add New Item</button>
        </div>
        <div className="alert-buttons-group">
          {lowStockItems.length > 0 && (
            <button
              className="btn-low-stock-filter"
              onClick={() => setShowLowStockModal(true)}
            >
              Low Stock ({lowStockItems.length})
            </button>
          )}
          <button
            className="btn-alert-filter"
            onClick={() => setShowLowStockModal(true)}
          >
             Alert
          </button>
        </div>
      </div>

      {/* Shopping List */}
      <div className="shopping-list-section">
        <div className="shopping-list-header">
          <h3 className="shopping-list-title">Shopping List ({pantryShoppingList.length})</h3>
          <div className="shopping-list-actions">
            <button
              className="btn-add-all-to-shopping"
              onClick={addAllToShoppingAndRedirect}
              disabled={addingAll || pantryShoppingList.length === 0}
            >
              {addingAll ? 'Adding...' : 'Add All to Shopping List'}
            </button>
            <button className="btn-clear-shopping-list" onClick={clearPantryShoppingList}>
              Clear All
            </button>
          </div>
        </div>
        <div className="shopping-items-list">
          {pantryShoppingList.length === 0 ? (
            <div className="empty-shopping-message">
              <p>No items. Click Add on items to add.</p>
            </div>
          ) : (
            pantryShoppingList.map(item => (
              <div key={item._id} className="shopping-list-item">
                <span className="quantity-badge-simple">{item.quantity} {item.unit}</span>
                <h4 className="shopping-item-name">{item.name}</h4>
                <button className="btn-remove-shopping-item" onClick={() => removeFromPantryShoppingList(item._id)}>
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Main Content */}
      {items.length === 0 ? (
        <div className="p-empty-message">
          <h4>Your pantry is empty</h4>
          <p>Start adding items to your pantry!</p>
          <button className="btn-add-first-item" onClick={handleAddNew}>+ Add First Item</button>
        </div>
      ) : (
        <div className="tabs-wrapper">

          {!isSearchActive && (
            <div className="tabs-nav-bar">
              {allTabs.map(cat => {
                const count = cat === 'All' ? items.length : items.filter(i => i.category === cat).length;
                const hasLow = cat !== 'All' && items.some(i => i.category === cat && isLowStockItem(i));
                const isEmpty = cat !== 'All' && count === 0;
                return (
                  <button
                    key={cat}
                    className={`tab-pill-btn ${activeTab === cat ? 'active' : ''} ${isEmpty ? 'empty-tab' : ''}`}
                    onClick={() => setActiveTab(cat)}
                  >
                    {cat}
                    {hasLow && <span className="tab-low-dot" title="Low stock">●</span>}
                    <span className="tab-count-badge">{count}</span>
                  </button>
                );
              })}
            </div>
          )}

          {isSearchActive && (
            <div className="search-results-label">
              Search Results for "<strong>{searchTerm}</strong>" — {tabItems.length} found
            </div>
          )}

          {tabItems.length === 0 ? (
            <div className="tab-empty-state">
              {isSearchActive ? (
                <p>No items found for "{searchTerm}"</p>
              ) : (
                <>
                  <p className="empty-cat-title">"{activeTab}" category is empty</p>
                  <p className="empty-cat-sub">Add items to this category to see them here.</p>
                  <button className="btn-add-to-cat" onClick={() => {
                    setCurrentItem({ name: '', quantity: '', unit: 'kg', category: activeTab === 'All' ? 'Vegetables' : activeTab });
                    setEditMode(false);
                    setShowModal(true);
                  }}>
                    + Add {activeTab === 'All' ? 'Item' : activeTab + ' Item'}
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="tab-items-grid">
              {tabItems.map(item => {
                const isLowStock = isLowStockItem(item);
                const isInShoppingList = pantryShoppingList.some(i => i.name === item.name);
                return (
                  <div key={item._id} className={`tab-item-card ${isLowStock ? 'low-stock' : ''}`}>
                    <div className="tab-card-top">
                      <span className={`tab-qty-badge ${isLowStock ? 'low' : ''}`}>
                        {item.quantity} {item.unit}
                      </span>
                      {isLowStock && <span className="low-stock-flag">Low Stock</span>}
                    </div>
                    <h4 className="tab-item-name">{item.name}</h4>
                    <p className="tab-item-cat">{item.category}</p>
                    <div className="tab-card-actions">
                      <button
                        className={`tab-btn-cart ${isInShoppingList ? 'added' : ''}`}
                        onClick={() => addToPantryShoppingList(item)}
                        disabled={isInShoppingList}
                      >
                        {isInShoppingList ? 'Added' : 'Add'}
                      </button>
                      <button className="tab-btn-icon edit" onClick={() => handleEdit(item)}>Edit</button>
                      <button className="tab-btn-icon del" onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Low Stock Modal */}
      {showLowStockModal && (
        <div className="pantry-modal-overlay" onClick={() => setShowLowStockModal(false)}>
          <div className="pantry-modal low-stock-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pantry-modal-header-custom">
              <h2>Low Stock Items</h2>
              <button className="btn-close-modal" onClick={() => setShowLowStockModal(false)}>×</button>
            </div>
            <div className="pantry-modal-body low-stock-modal-body">
              {lowStockItems.length === 0 ? (
                <p className="low-stock-empty">No low stock items.</p>
              ) : (
                <div className="low-stock-modal-grid">
                  {lowStockItems.map(item => {
                    const isInShoppingList = pantryShoppingList.some(i => i.name === item.name);
                    return (
                      <div key={item._id} className="low-stock-modal-card">
                        <div className="modal-card-top">
                          <span className="modal-qty-badge low">{item.quantity} {item.unit}</span>
                          <span className="low-stock-flag-modal">Low Stock</span>
                        </div>
                        <h4 className="modal-item-name">{item.name}</h4>
                        <p className="modal-item-cat">{item.category}</p>
                        <div className="modal-card-actions">
                          <button
                            className={`modal-btn-cart ${isInShoppingList ? 'added' : ''}`}
                            onClick={() => addToPantryShoppingList(item)}
                            disabled={isInShoppingList}
                          >
                            {isInShoppingList ? 'Added' : 'Add to Cart'}
                          </button>
                          <button className="modal-btn-icon edit" onClick={() => { handleEdit(item); setShowLowStockModal(false); }}>Edit</button>
                          <button className="modal-btn-icon del" onClick={() => { handleDelete(item._id); setShowLowStockModal(false); }}>Delete</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="pantry-modal-footer">
              <button className="btn-modal-cancel" onClick={() => setShowLowStockModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="pantry-modal-overlay" onClick={handleCloseModal}>
          <div className="pantry-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pantry-modal-header-custom">
              <h2>{editMode ? 'Edit Item' : 'Add New Item'}</h2>
              <button className="btn-close-modal" onClick={handleCloseModal}>×</button>
            </div>
            <div className="pantry-modal-body">
              <div className="form-group">
                <label>Name</label>
                <input type="text" value={currentItem.name}
                  onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                  placeholder="e.g., Tomato, Rice, Milk" />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input type="number" step="any" value={currentItem.quantity}
                  onChange={(e) => setCurrentItem({ ...currentItem, quantity: e.target.value })}
                  placeholder="Enter quantity" />
              </div>
              <div className="form-group">
                <label>Unit</label>
                <select value={currentItem.unit} onChange={(e) => setCurrentItem({ ...currentItem, unit: e.target.value })}>
                  {units.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Category</label>
                <select value={currentItem.category} onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="pantry-modal-footer">
              <button className="btn-modal-cancel" onClick={handleCloseModal}>Cancel</button>
              <button className="btn-modal-add" onClick={handleSaveItem}>
                {editMode ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back to Home */}
      <div className="back-home-container">
        <button className="btn-back-home" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
};

export default PantryPage;