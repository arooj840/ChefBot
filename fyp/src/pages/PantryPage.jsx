import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../components/Toast';
import './PantryPage.css';

const PantryPage = () => {
  const [items, setItems] = useState([]);
  const [pantryShoppingList, setPantryShoppingList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState({ 
    name: '', 
    quantity: '', 
    unit: 'kg', 
    category: 'Vegetables' 
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [addingAll, setAddingAll] = useState(false);
  const [openCategories, setOpenCategories] = useState({});
  
  const navigate = useNavigate();

  const categories = ['Vegetables', 'Fruits', 'Dairy', 'Grains', 'Spices', 'Meat', 'Beverages', 'Other'];
  const units = ['kg', 'g', 'liters', 'ml', 'pieces', 'dozen'];

  const getToken = () => localStorage.getItem('token');

  // Toggle category function
  const toggleCategory = (categoryName) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  // Fetch pantry items
  const fetchPantryItems = async () => {
    try {
      setLoading(true);
      const token = getToken();
      if (!token) {
        navigate('/login-page');
        return;
      }

      const response = await fetch('http://localhost:5000/api/pantry', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if (response.ok) {
        setItems(data.items || []);
      }
    } catch (err) {
      console.error(err);
      showToast('Server error', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Fetch pantry shopping list
  const fetchPantryShoppingList = async () => {
    try {
      const token = getToken();
      if (!token) return;

      const response = await fetch('http://localhost:5000/api/pantry-shopping', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if (response.ok) {
        setPantryShoppingList(data.items || []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Add single item to pantry shopping list
  const addToPantryShoppingList = async (item) => {
    try {
      const token = getToken();
      
      const response = await fetch('http://localhost:5000/api/pantry-shopping', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: item.name,
          quantity: item.quantity,
          unit: item.unit,
          category: item.category
        })
      });

      const data = await response.json();
      if (response.ok) {
        setPantryShoppingList(data.items);
        showToast(`${item.name} added!`, 'success');
      } else {
        showToast(data.message || 'Failed', 'error');
      }
    } catch (err) {
      showToast('Server error', 'error');
    }
  };

  // Remove single item from pantry shopping list
  const removeFromPantryShoppingList = async (id) => {
    try {
      const token = getToken();
      const response = await fetch(`http://localhost:5000/api/pantry-shopping/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if (response.ok) {
        setPantryShoppingList(data.items);
        showToast('Item removed', 'info');
      }
    } catch (err) {
      showToast('Server error', 'error');
    }
  };

  // Clear pantry shopping list
  const clearPantryShoppingList = async () => {
    try {
      const token = getToken();
      const response = await fetch('http://localhost:5000/api/pantry-shopping', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if (response.ok) {
        setPantryShoppingList([]);
        showToast('Shopping list cleared!', 'success');
      }
    } catch (err) {
      showToast('Server error', 'error');
    }
  };

  // Add all to main shopping list and redirect
  const addAllToShoppingAndRedirect = async () => {
    if (pantryShoppingList.length === 0) {
      showToast('No items to add!', 'warning');
      return;
    }

    setAddingAll(true);
    let successCount = 0;

    try {
      const token = getToken();
      
      for (const item of pantryShoppingList) {
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

        if (response.ok) {
          successCount++;
        }
      }

      if (successCount > 0) {
        showToast(`${successCount} items added to shopping list!`, 'success');
        await clearPantryShoppingList();
        navigate('/smart-shopping');
      } else {
        showToast('Failed to add items', 'error');
      }
      
    } catch (err) {
      console.error(err);
      showToast('Server error', 'error');
    } finally {
      setAddingAll(false);
    }
  };

  // Pantry CRUD
  const handleSaveItem = async () => {
    if (!currentItem.name || !currentItem.quantity) {
      showToast('Please fill all fields!', 'warning');
      return;
    }

    try {
      const token = getToken();
      const url = editMode 
        ? `http://localhost:5000/api/pantry/${currentItem._id}`
        : 'http://localhost:5000/api/pantry';
      
      const method = editMode ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method: method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: currentItem.name,
          quantity: parseInt(currentItem.quantity),
          unit: currentItem.unit,
          category: currentItem.category
        })
      });

      const data = await response.json();
      if (response.ok) {
        setItems(data.items);
        handleCloseModal();
        showToast(editMode ? 'Updated!' : 'Added!', 'success');
      } else {
        showToast(data.message || 'Failed', 'error');
      }
    } catch (err) {
      showToast('Server error', 'error');
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = getToken();
      const response = await fetch(`http://localhost:5000/api/pantry/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if (response.ok) {
        setItems(data.items);
        showToast('Item deleted!', 'success');
      }
    } catch (err) {
      showToast('Server error', 'error');
    }
  };

  const handleEdit = (item) => {
    setCurrentItem({
      _id: item._id,
      name: item.name,
      quantity: item.quantity,
      unit: item.unit,
      category: item.category
    });
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

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = items.length;
  const lowStockItems = items.filter(item => item.quantity <= 2).length;
  const totalCategories = [...new Set(items.map(item => item.category))].length;
  
  // Check if search is active
  const isSearchActive = searchTerm.trim().length > 0;

  if (loading) {
    return (
      <div className="pantry-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pantry-page">
      <div className="fullscreen-food-image">
        <div className="fullscreen-food-content">
          <h1>Your Smart Kitchen Pantry</h1>
        </div>
      </div>
      
      {/* Pantry Hero Section */}
      <div className="p-hero-section">
        <div className="p-hero-content">
          <h1 className="p-hero-title">Your Pantry Items</h1>
          <p className="p-hero-subtitle">Manage your kitchen inventory efficiently</p>
        </div>
      </div>

      {error && (
        <div className="pantry-error-message">
          <i className="fas fa-exclamation-circle"></i> {error}
        </div>
      )}

      {items.length > 0 && (
        <div className="stats-section">
          <div className="stat-card">
            <p className="stat-number">{totalItems}</p>
            <p className="stat-label">Total Items</p>
          </div>
          <div className="stat-card low-stock-card">
            <p className="stat-number">{lowStockItems}</p>
            <p className="stat-label">Low Stock</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">{totalCategories}</p>
            <p className="stat-label">Categories</p>
          </div>
        </div>
      )}

      <div className="search-add-section">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-field-pantry"
        />
        <button className="btn-add-new-item" onClick={handleAddNew}>
          + Add New Item
        </button>
      </div>

      {/* Pantry Shopping List Section - Direct Show (No Arrow) */}
      <div className="shopping-list-section">
        <div className="shopping-list-header">
          <h3 className="shopping-list-title">🛒 Shopping List ({pantryShoppingList.length})</h3>
          <div className="shopping-list-actions">
            <button 
              className="btn-add-all-to-shopping" 
              onClick={addAllToShoppingAndRedirect}
              disabled={addingAll || pantryShoppingList.length === 0}
            >
              {addingAll ? 'Adding...' : '➕ Add All to Shopping List'}
            </button>
            <button 
              className="btn-clear-shopping-list" 
              onClick={clearPantryShoppingList}
            >
              Clear All
            </button>
          </div>
        </div>
        <div className="shopping-items-list">
          {pantryShoppingList.length === 0 ? (
            <div className="empty-shopping-message">
              <p>No items. Click 🛒 on items to add.</p>
            </div>
          ) : (
            pantryShoppingList.map(item => (
              <div key={item._id} className="shopping-list-item">
                <span className="quantity-badge-simple">{item.quantity} {item.unit}</span>
                <h4 className="shopping-item-name">{item.name}</h4>
                <button 
                  className="btn-remove-shopping-item" 
                  onClick={() => removeFromPantryShoppingList(item._id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Pantry Items List */}
      {items.length === 0 ? (
        <div className="p-empty-message">
          <h4>Your pantry is empty</h4>
          <p>Start adding items to your pantry!</p>
          <button className="btn-add-first-item" onClick={handleAddNew}>
            + Add First Item
          </button>
        </div>
      ) : isSearchActive ? (
        /* ✅ SEARCH ACTIVE - Flat list, no categories */
        <div className="search-results-section">
          <div className="category-section">
            <div className="search-results-header">
              <h3 className="category-title-simple">
                Search Results ({filteredItems.length})
              </h3>
            </div>
            {filteredItems.length === 0 ? (
              <div className="no-results-message">
                <p>No items found matching "{searchTerm}"</p>
              </div>
            ) : (
              <div className="checklist-items open">
                {filteredItems.map(item => {
                  const isLowStock = item.quantity <= 2;
                  const isInShoppingList = pantryShoppingList.some(i => i.name === item.name);
                  
                  return (
                    <div key={item._id} className={`checklist-item ${isLowStock ? 'low-stock-checklist' : ''}`}>
                      <span className="quantity-badge-simple">{item.quantity} {item.unit}</span>
                      <h4 className="item-name-simple">{item.name}</h4>
                      <div className="checklist-actions">
                        <button 
                          className={`btn-add-item ${isInShoppingList ? 'added' : ''}`}
                          onClick={() => addToPantryShoppingList(item)}
                          disabled={isInShoppingList}
                        >
                          {isInShoppingList ? '✓ Added' : '🛒 Add'}
                        </button>
                        <button className="btn-edit-item" onClick={() => handleEdit(item)}>✏️</button>
                        <button className="btn-delete-item" onClick={() => handleDelete(item._id)}>🗑️</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* ✅ NO SEARCH - Collapsible Categories */
        <div className="categories-checklist">
          {categories.map(category => {
            const categoryItems = filteredItems.filter(item => item.category === category);
            if (categoryItems.length === 0) return null;
            
            return (
              <div key={category} className="category-section">
                <div 
                  className="category-header-simple" 
                  onClick={() => toggleCategory(category)}
                >
                  <div className="category-title-simple">
                    {category}
                    <span className="category-count">({categoryItems.length})</span>
                  </div>
                  <div className={`category-arrow ${openCategories[category] ? 'open' : ''}`}>
                    ▼
                  </div>
                </div>
                <div className={`checklist-items ${openCategories[category] ? 'open' : ''}`}>
                  {categoryItems.map(item => {
                    const isLowStock = item.quantity <= 2;
                    const isInShoppingList = pantryShoppingList.some(i => i.name === item.name);
                    
                    return (
                      <div key={item._id} className={`checklist-item ${isLowStock ? 'low-stock-checklist' : ''}`}>
                        <span className="quantity-badge-simple">{item.quantity} {item.unit}</span>
                        <h4 className="item-name-simple">{item.name}</h4>
                        <div className="checklist-actions">
                          <button 
                            className={`btn-add-item ${isInShoppingList ? 'added' : ''}`}
                            onClick={() => addToPantryShoppingList(item)}
                            disabled={isInShoppingList}
                          >
                            {isInShoppingList ? '✓ Added' : '🛒 Add'}
                          </button>
                          <button className="btn-edit-item" onClick={() => handleEdit(item)}>✏️</button>
                          <button className="btn-delete-item" onClick={() => handleDelete(item._id)}>🗑️</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
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
                <input 
                  type="text" 
                  value={currentItem.name} 
                  onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                  placeholder="e.g., Tomato, Rice, Milk"
                />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input 
                  type="number" 
                  value={currentItem.quantity} 
                  onChange={(e) => setCurrentItem({ ...currentItem, quantity: e.target.value })}
                  placeholder="Enter quantity"
                />
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
     {/* ✅ Back to Home Button - LAST MEIN */}
      <div className="back-home-container">
        <button className="btn-back-home" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default PantryPage;