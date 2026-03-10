import React, { useState, useEffect } from 'react';
import './PantryPage.css';
import { useNavigate } from 'react-router-dom';

const PantryPage = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState({ 
    name: '', 
    quantity: '', 
    unit: 'kg', 
    category: 'Vegetables' 
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [shoppingList, setShoppingList] = useState([]);
  
  const navigate = useNavigate();

  const categories = ['Vegetables', 'Fruits', 'Dairy', 'Grains', 'Spices', 'Meat', 'Beverages', 'Other'];
  const units = ['kg', 'g', 'liters', 'ml', 'pieces', 'dozen'];

  // ✅ FIXED: Load BOTH pantry items AND shopping list from localStorage
  useEffect(() => {
    console.log("🔄 PantryPage: Loading data from localStorage");
    window.scrollTo(0, 0);
    
    // Load pantry items
    const savedItems = localStorage.getItem('pantryItems');
    console.log("📦 Saved pantry items:", savedItems);
    
    if (savedItems && savedItems !== "[]" && savedItems !== "null") {
      try {
        const parsedItems = JSON.parse(savedItems);
        setItems(parsedItems);
        console.log("✅ Loaded pantry items:", parsedItems.length);
      } catch (error) {
        console.error("❌ Error parsing pantry items:", error);
        setItems([]);
      }
    } else {
      setItems([]);
    }
    
    // Load shopping list
    const savedShoppingList = localStorage.getItem('shoppingList');
    console.log("🛒 Saved shopping list:", savedShoppingList);
    
    if (savedShoppingList && savedShoppingList !== "[]" && savedShoppingList !== "null") {
      try {
        const parsedShoppingList = JSON.parse(savedShoppingList);
        setShoppingList(parsedShoppingList);
        console.log("✅ Loaded shopping list:", parsedShoppingList.length);
      } catch (error) {
        console.error("❌ Error parsing shopping list:", error);
        setShoppingList([]);
      }
    } else {
      setShoppingList([]);
    }
  }, []); // Empty dependency array - runs only on mount

  // ✅ Save pantry items to localStorage whenever they change
  useEffect(() => {
    console.log("💾 Saving pantry items to localStorage:", items.length);
    localStorage.setItem('pantryItems', JSON.stringify(items));
  }, [items]);

  // ✅ Save shopping list to localStorage whenever it changes
  useEffect(() => {
    console.log("🛒 Saving shopping list to localStorage:", shoppingList.length);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }, [shoppingList]);

  const handleSaveItem = () => {
    if (!currentItem.name || !currentItem.quantity) {
      alert('Please fill all fields!');
      return;
    }

    if (editMode) {
      setItems(items.map(item => item.id === currentItem.id ? currentItem : item));
    } else {
      setItems([...items, { ...currentItem, id: Date.now() }]);
    }

    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setItems(items.filter(item => item.id !== id));
      setShoppingList(shoppingList.filter(item => item.id !== id));
    }
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
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

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ LOW STOCK ITEMS: Sirf shopping list mein add kare (NO REDIRECT)
  const addToShoppingList = (item) => {
    if (!shoppingList.some(i => i.id === item.id)) {
      const updatedList = [...shoppingList, item];
      setShoppingList(updatedList);
      alert(`${item.name} shopping list mein add ho gaya!`);
    } else {
      alert('Ye item pehle se shopping list mein hai!');
    }
  };

  // ✅ NORMAL ITEMS: Shopping list mein add kare AUR redirect kare
  const addToShoppingListAndRedirect = (item) => {
    if (!shoppingList.some(i => i.id === item.id)) {
      const updatedShoppingList = [...shoppingList, item];
      setShoppingList(updatedShoppingList);
    }
    navigate('/shopping-list');
  };

  const removeFromShoppingList = (id) => {
    setShoppingList(shoppingList.filter(item => item.id !== id));
  };

  const clearShoppingList = () => {
    if (window.confirm('Clear entire shopping list?')) {
      setShoppingList([]);
    }
  };

  const isInShoppingList = (id) => {
    return shoppingList.some(item => item.id === id);
  };

  const goToShoppingPage = () => {
    navigate('/smart-shopping');
  };

  const totalItems = items.length;
  const lowStockItems = items.filter(item => parseInt(item.quantity) <= 1).length;
  const totalCategories = [...new Set(items.map(item => item.category))].length;

  return (
    <div className="pantry-page">
      <div className="fullscreen-food-image">
        <div className="fullscreen-food-content">
          <h1>Your Smart Kitchen Pantry</h1>
          <p>Track ingredients, reduce waste, and cook smarter</p>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="p-hero-section">
        <h1 className="p-hero-title">Add your pantry items</h1>
        <p className="p-hero-subtitle">Manage your kitchen inventory efficiently</p>
      </div>

      {/* Stats Section */}
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

      {/* Search + Add */}
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

      {/* Shopping List Section */}
      {shoppingList.length > 0 && (
        <div className="shopping-list-section">
          <div className="shopping-list-header">
            <h3 className="shopping-list-title">🛒 Shopping List ({shoppingList.length})</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn-view-shopping-list" 
                onClick={goToShoppingPage}
              >
                View Full List
              </button>
              <button className="btn-clear-shopping-list" onClick={clearShoppingList}>
                Clear All
              </button>
            </div>
          </div>
          <div className="checklist-items">
            {shoppingList.slice(0, 3).map(item => (
              <div key={item.id} className="shopping-list-item">
                <span className="quantity-badge-simple">{item.quantity} {item.unit}</span>
                <h4 className="shopping-item-name">{item.name}</h4>
                <button 
                  className="btn-remove-shopping-item" 
                  onClick={() => removeFromShoppingList(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            {shoppingList.length > 3 && (
              <div className="shopping-list-item" style={{ justifyContent: 'center', background: 'transparent' }}>
                <button 
                  className="btn-view-more-items" 
                  onClick={goToShoppingPage}
                >
                  View {shoppingList.length - 3} more items →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Categories Checklist */}
      {items.length === 0 ? (
        <div className="p-empty-message">
          <h4>Your pantry is empty</h4>
          <p>Start adding items to your pantry!</p>
          <button className="btn-add-first-item" onClick={handleAddNew}>
            + Add First Item
          </button>
        </div>
      ) : (
        <div className="categories-checklist">
          {categories.map(category => {
            const categoryItems = filteredItems.filter(item => item.category === category);
            if (categoryItems.length === 0) return null;
            
            return (
              <div key={category} className="category-section">
                <div className="category-header-simple">
                  <h3 className="category-title-simple">{category}</h3>
                </div>
                <div className="checklist-items">
                  {categoryItems.map(item => {
                    const isLowStock = parseInt(item.quantity) <= 2;
                    
                    return (
                      <div key={item.id} className={`checklist-item ${isLowStock ? 'low-stock-checklist' : ''}`}>
                        <span className="quantity-badge-simple">{item.quantity} {item.unit}</span>
                        <h4 className="item-name-simple">{item.name}</h4>
                        <div className="checklist-actions">
                          {/* ✅ LOW STOCK ITEMS: Sirf shopping list mein add kare */}
                          {isLowStock ? (
                            <button 
                              className={`btn-shopping-cart ${isInShoppingList(item.id) ? 'in-list' : ''}`}
                              onClick={() => addToShoppingList(item)}
                              title={isInShoppingList(item.id) ? "Already in Shopping List" : "Add to Shopping List"}
                            >
                              {isInShoppingList(item.id) ? '✓' : '🛒'}
                            </button>
                          ) : (
                            /* ✅ NORMAL ITEMS: Shopping list mein add kare AUR redirect kare */
                            <button 
                              className={`btn-shopping-cart ${isInShoppingList(item.id) ? 'in-list' : ''}`}
                              onClick={() => addToShoppingListAndRedirect(item)}
                              title={isInShoppingList(item.id) ? "Go to Shopping List" : "Add to Shopping List & Go"}
                            >
                              {isInShoppingList(item.id) ? '✓' : '🛒'}
                            </button>
                          )}
                          
                          <button className="btn-edit-item" onClick={() => handleEdit(item)} title="Edit">✏️</button>
                          <button className="btn-delete-item" onClick={() => handleDelete(item.id)} title="Delete">🗑️</button>
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
              <button className="btn-close-modal" onClick={handleCloseModal} title="Close">
                ×
              </button>
            </div>
            <div className="pantry-modal-body">
              <div className="form-group">
                <label>Name</label>
                <input type="text" value={currentItem.name} onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}/>
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input type="number" value={currentItem.quantity} onChange={(e) => setCurrentItem({ ...currentItem, quantity: e.target.value })}/>
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

    </div>
  );
};

export default PantryPage;