import React, { useState, useEffect } from 'react';
import './ShoppingList.css';
import { useNavigate } from 'react-router-dom';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState({ 
    name: '', 
    quantity: '', 
    unit: 'pieces', 
    category: 'Groceries' 
  });
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Groceries', 'Vegetables', 'Fruits', 'Dairy', 'Meat', 'Beverages', 'Snacks', 'Household', 'Other'];
  const units = ['pieces', 'kg', 'g', 'liters', 'ml', 'dozen', 'packets', 'bottles'];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // ✅ ADDED: Check if redirected from pantry with item
    const redirectedItem = localStorage.getItem('redirectedItem');
    if (redirectedItem) {
      const item = JSON.parse(redirectedItem);
      
      // Add to shopping list if not already present
      if (!items.some(i => i.id === item.id)) {
        setItems([...items, item]);
      }
      
      // Clear the redirected item flag
      localStorage.removeItem('redirectedItem');
    }
  }, []);

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
    }
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setEditMode(true);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setCurrentItem({ name: '', quantity: '', unit: 'pieces', category: 'Groceries' });
    setEditMode(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditMode(false);
    setCurrentItem({ name: '', quantity: '', unit: 'pieces', category: 'Groceries' });
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const markAsPurchased = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, purchased: !item.purchased } : item
    ));
  };

  const totalItems = items.length;
  const purchasedItems = items.filter(item => item.purchased).length;
  const pendingItems = totalItems - purchasedItems;

  return (
    <div className="shopping-page">
      
      {/* Full Screen Food Image - Like Pantry */}
      <div className="shopping-fullscreen-food-image">
        <div className="shopping-fullscreen-food-content">
          <h1>Your Smart Shopping List</h1>
          <p>Track what you need to buy, mark as purchased</p>
        </div>
      </div>

      {/* Hero Section - Same as Pantry */}
      <div className="shopping-hero-section">
        <h1 className="shopping-hero-title">My Shopping List</h1>
        <p className="shopping-hero-subtitle">Manage items you need to purchase</p>
      </div>

      {/* Stats Section - Shopping ke hisaab se */}
      {items.length > 0 && (
        <div className="shopping-stats-section">
          <div className="shopping-stat-card">
            <p className="shopping-stat-number">{totalItems}</p>
            <p className="shopping-stat-label">Total Items</p>
          </div>
          <div className="shopping-stat-card">
            <p className="shopping-stat-number">{pendingItems}</p>
            <p className="shopping-stat-label">To Buy</p>
          </div>
          <div className="shopping-stat-card shopping-low-stock-card">
            <p className="shopping-stat-number">{purchasedItems}</p>
            <p className="shopping-stat-label">Purchased</p>
          </div>
        </div>
      )}

      {/* Search + Add - Same as Pantry */}
      <div className="shopping-search-add-section">
        <input
          type="text"
          placeholder="Search shopping items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="shopping-search-field"
        />
        <button className="shopping-btn-primary-custom" onClick={handleAddNew}>
          + Add New Item
        </button>
      </div>

      {/* Categories Checklist - Same layout */}
      {items.length === 0 ? (
        <div className="shopping-empty-message">
          <h4>Your shopping list is empty</h4>
          <p>Start adding items you need to buy!</p>
          <button className="shopping-btn-primary-custom" onClick={handleAddNew}>
            + Add First Item
          </button>
        </div>
      ) : (
        <div className="shopping-categories-checklist">
          {categories.map(category => {
            const categoryItems = filteredItems.filter(item => item.category === category);
            if (categoryItems.length === 0) return null;
            
            return (
              <div key={category} className="shopping-category-section">
                <div className="shopping-category-header-simple">
                  <h3 className="shopping-category-title-simple">{category}</h3>
                </div>
                <div className="shopping-checklist-items">
                  {categoryItems.map(item => (
                    <div key={item.id} className={`shopping-checklist-item ${item.purchased ? 'shopping-purchased-item' : ''}`}>
                      <span className="shopping-quantity-badge-simple">{item.quantity} {item.unit}</span>
                      <h4 className="shopping-item-name-simple" style={{ 
                        textDecoration: item.purchased ? 'line-through' : 'none',
                        opacity: item.purchased ? 0.6 : 1 
                      }}>
                        {item.name}
                      </h4>
                      <div className="shopping-checklist-actions">
                        {/* Purchase Button */}
                        <button 
                          className={`shopping-checklist-action-btn ${item.purchased ? 'shopping-purchased-btn' : 'shopping-purchase-btn'}`}
                          onClick={() => markAsPurchased(item.id)}
                          title={item.purchased ? "Mark as not purchased" : "Mark as purchased"}
                        >
                          {item.purchased ? '✓' : '○'}
                        </button>
                        
                        <button className="shopping-checklist-action-btn shopping-edit-action-btn" onClick={() => handleEdit(item)}>✏️</button>
                        <button className="shopping-checklist-action-btn shopping-delete-action-btn" onClick={() => handleDelete(item.id)}>🗑️</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal - Same as Pantry */}
      {showModal && (
        <div className="shopping-modal-overlay" onClick={handleCloseModal}>
          <div className="shopping-modal" onClick={(e) => e.stopPropagation()}>
            <div className="shopping-modal-header-custom">
              <h2>{editMode ? 'Edit Item' : 'Add Shopping Item'}</h2>
              <button className="shopping-btn-close" onClick={handleCloseModal}>×</button>
            </div>
            <div className="shopping-modal-body">
              <div className="shopping-form-group">
                <label>Item Name</label>
                <input 
                  type="text" 
                  placeholder="e.g., Milk, Apples, Bread"
                  value={currentItem.name} 
                  onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                />
              </div>
              <div className="shopping-form-group">
                <label>Quantity</label>
                <input 
                  type="number" 
                  placeholder="e.g., 2, 0.5, 10"
                  value={currentItem.quantity} 
                  onChange={(e) => setCurrentItem({ ...currentItem, quantity: e.target.value })}
                />
              </div>
              <div className="shopping-form-group">
                <label>Unit</label>
                <select value={currentItem.unit} onChange={(e) => setCurrentItem({ ...currentItem, unit: e.target.value })}>
                  {units.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div className="shopping-form-group">
                <label>Category</label>
                <select value={currentItem.category} onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="shopping-modal-footer">
              <button className="shopping-btn-outline-custom" onClick={handleCloseModal}>Cancel</button>
              <button className="shopping-btn-primary-custom" onClick={handleSaveItem}>
                {editMode ? 'Update' : 'Add to List'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ShoppingList;