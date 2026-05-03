import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../components/Toast';
import './ShoppingList.css';

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
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const categories = ['Groceries', 'Vegetables', 'Fruits', 'Dairy', 'Meat', 'Beverages', 'Snacks', 'Household', 'Other'];
  const units = ['pieces', 'kg', 'g', 'liters', 'ml', 'dozen', 'packets', 'bottles'];

  // ========== LOCALSTORAGE FUNCTIONS (Mock Backend) ==========
  const loadFromStorage = () => {
    const stored = localStorage.getItem('shoppingList');
    if (stored) {
      setItems(JSON.parse(stored));
    } else {
      // Mock data for testing
      const mockItems = [
        { _id: '1', name: 'Milk', quantity: 2, unit: 'liters', category: 'Dairy', purchased: false },
        { _id: '2', name: 'Bread', quantity: 1, unit: 'pieces', category: 'Groceries', purchased: false },
        { _id: '3', name: 'Apples', quantity: 4, unit: 'pieces', category: 'Fruits', purchased: false },
        { _id: '4', name: 'Chicken', quantity: 1, unit: 'kg', category: 'Meat', purchased: false }
      ];
      setItems(mockItems);
      localStorage.setItem('shoppingList', JSON.stringify(mockItems));
    }
  };

  const saveToStorage = (newItems) => {
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
    setItems(newItems);
  };

  useEffect(() => {
    loadFromStorage();
  }, []);

  // ========== WHATSAPP SHARE FUNCTION (EXACTLY AS YOURS) ==========
  const shareOnWhatsApp = () => {
    if (items.length === 0) {
      showToast('No items to share!', 'warning');
      return;
    }

    let message = "🛒 *MY SHOPPING LIST* 🛒\n";
    message += "─────────────────\n\n";
    
    categories.forEach(category => {
      const categoryItems = items.filter(item => item.category === category);
      if (categoryItems.length > 0) {
        message += `📁 *${category.toUpperCase()}* (${categoryItems.length})\n`;
        message += "─────────────────\n";
        categoryItems.forEach((item, index) => {
          message += `${index + 1}. ${item.quantity} ${item.unit} - ${item.name}\n`;
        });
        message += "\n";
      }
    });
    
    message += "─────────────────\n";
    message += `📊 Total Items: ${items.length}\n`;
    message += `📅 ${new Date().toLocaleDateString()}\n`;
    message += `📍 ChefBot - Smart Kitchen\n`;
    message += "─────────────────\n";
    message += "✅ Happy Shopping! 🛒";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  // ========== CRUD Operations (using localStorage) ==========
  const handleSaveItem = () => {
    if (!currentItem.name || !currentItem.quantity) {
      showToast('Please fill all fields!', 'warning');
      return;
    }

    const newItem = {
      _id: editMode ? currentItem._id : Date.now().toString(),
      name: currentItem.name,
      quantity: parseInt(currentItem.quantity),
      unit: currentItem.unit,
      category: currentItem.category,
      purchased: editMode ? currentItem.purchased : false
    };

    let updatedItems;
    if (editMode) {
      updatedItems = items.map(item => item._id === newItem._id ? newItem : item);
    } else {
      updatedItems = [...items, newItem];
    }
    saveToStorage(updatedItems);
    handleCloseModal();
    showToast(editMode ? 'Updated!' : 'Added!', 'success');
  };

  const markAsPurchased = (id) => {
    const updatedItems = items.map(item => 
      item._id === id ? { ...item, purchased: true } : item
    );
    saveToStorage(updatedItems);
    showToast('Item marked as purchased!', 'success');
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter(item => item._id !== id);
    saveToStorage(updatedItems);
    showToast('Item deleted!', 'success');
  };

  const handleEdit = (item) => {
    setCurrentItem({ ...item });
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

  const totalItems = items.length;
  const purchasedItems = items.filter(item => item.purchased).length;
  const pendingItems = totalItems - purchasedItems;

  if (loading) {
    return (
      <div className="shopping-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-page">
      <div className="shopping-fullscreen-food-image">
        <div className="shopping-fullscreen-food-content">
          <h1>Your Smart Shopping List</h1>
          <p>Track what you need to buy, mark as purchased</p>
        </div>
      </div>

      <div className="shopping-hero-section">
        <div className="shopping-hero-content">
          <h1 className="shopping-hero-title">My Shopping List</h1>
          <p className="shopping-hero-subtitle">Manage items you need to purchase</p>
        </div>
      </div>

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
          <div className="shopping-stat-card">
            <p className="shopping-stat-number">{purchasedItems}</p>
            <p className="shopping-stat-label">Purchased</p>
          </div>
        </div>
      )}

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

      {/* WhatsApp Share Button */}
      <div className="whatsapp-share-container">
        <button className="btn-whatsapp-share" onClick={shareOnWhatsApp}>
          📱 Share on WhatsApp
        </button>
      </div>

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
                    <div key={item._id} className="shopping-checklist-item">
                      <span className="shopping-quantity-badge-simple">{item.quantity} {item.unit}</span>
                      <h4 className="shopping-item-name-simple">
                        {item.name}
                        {item.fromPantry && <span className="from-pantry-badge"> (from pantry)</span>}
                      </h4>
                      <div className="shopping-checklist-actions">
                        <button 
                          className="shopping-purchase-btn"
                          onClick={() => markAsPurchased(item._id)}
                          title="Mark as purchased"
                        >
                          ✓
                        </button>
                        <button 
                          className="shopping-edit-action-btn" 
                          onClick={() => handleEdit(item)}
                          title="Edit"
                        >
                          ✏️
                        </button>
                        <button 
                          className="shopping-delete-action-btn" 
                          onClick={() => handleDelete(item._id)}
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

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
    
      {/* Back to Home Button */}
      <div className="back-home-container">
        <button className="btn-back-home" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default ShoppingList;