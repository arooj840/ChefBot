import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import { showToast } from '../components/Toast';
import './ShoppingList.css';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [purchasedIds, setPurchasedIds] = useState(new Set());
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState({ 
    name: '', 
    quantity: '', 
    unit: 'pieces', 
    category: 'Groceries' 
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  
  const navigate = useNavigate();

  const categories = ['Groceries', 'Vegetables', 'Fruits', 'Dairy', 'Meat', 'Beverages', 'Snacks', 'Household', 'Other'];
  const units = ['pieces', 'kg', 'g', 'liters', 'ml', 'dozen', 'packets', 'bottles'];

  const getToken = () => localStorage.getItem('token');

  // ========== WHATSAPP SHARE FUNCTION ==========
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
          const isPurchased = purchasedIds.has(item._id);
          message += `${index + 1}. ${item.quantity} ${item.unit} - ${item.name}${isPurchased ? ' ✅' : ''}\n`;
        });
        message += "\n";
      }
    });
    
    message += "─────────────────\n";
    message += `Total Items: ${items.length}\n`;
    message += ` Purchased: ${purchasedIds.size}\n`;
    message += ` ${new Date().toLocaleDateString()}\n`;
    message += ` ChefBot - Smart Kitchen\n`;
    message += "─────────────────\n";
    message += "Happy Shopping! ";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // ========== BACKEND API CALLS ==========
  const fetchShoppingItems = async () => {
    try {
      setLoading(true);
      const token = getToken();
      if (!token) {
        navigate('/login-page');
        return;
      }

      const response = await fetch('http://localhost:5000/api/shopping', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if (response.ok) {
        setItems(data.items || []);
      } else {
        showToast(data.message || 'Failed', 'error');
      }
    } catch (err) {
      showToast('Server error', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShoppingItems();
  }, []);

  const handleSaveItem = async () => {
    if (!currentItem.name || !currentItem.quantity) {
      showToast('Please fill all fields!', 'warning');
      return;
    }

    try {
      const token = getToken();
      const url = editMode 
        ? `http://localhost:5000/api/shopping/${currentItem._id}`
        : 'http://localhost:5000/api/shopping';
      
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

  // ========== MARK AS PURCHASED (Frontend toggle) ==========
  const markAsPurchased = (id) => {
    setPurchasedIds(prev => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
        showToast('Marked as pending!', 'warning');
      } else {
        updated.add(id);
        showToast('Marked as purchased! ', 'success');
      }
      return updated;
    });
  };

  const handleDelete = async (id) => {
    try {
      const token = getToken();
      const response = await fetch(`http://localhost:5000/api/shopping/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if (response.ok) {
        setItems(data.items);
        setPurchasedIds(prev => {
          const updated = new Set(prev);
          updated.delete(id);
          return updated;
        });
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
    setCurrentItem({ name: '', quantity: '', unit: 'pieces', category: 'Groceries' });
    setEditMode(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditMode(false);
    setCurrentItem({ name: '', quantity: '', unit: 'pieces', category: 'Groceries' });
  };

  const openDeliveryModal = () => setShowDeliveryModal(true);
  const closeDeliveryModal = () => setShowDeliveryModal(false);
  
  const handleCityOrder = () => {
    window.open('https://www.foodpanda.pk/', '_blank');
    closeDeliveryModal();
  };
  
  const handleVillageOrder = () => {
    window.open('https://www.naheed.pk/', '_blank');
    closeDeliveryModal();
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = items.length;
  const purchasedItems = purchasedIds.size;
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

      {error && (
        <div className="shopping-error-message">
          <i className="fas fa-exclamation-circle"></i> {error}
        </div>
      )}

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
          <div className="shopping-stat-card shopping-purchased-card">
            <p className="shopping-stat-number">{purchasedItems}</p>
            <p className="shopping-stat-label">Purchased</p>
          </div>
        </div>
      )}

      {/* Search + Add New Item */}
      <div className="shopping-search-add-section">
        <input
          type="text"
          placeholder="Search shopping items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="shopping-search-field"
        />
        <button className="shopping-btn-primary-custom" onClick={handleAddNew}>
          Add New Item
        </button>
      </div>

      {/* Shop Online + WhatsApp Share */}
      <div className="shopping-top-action-buttons">
        <button className="btn-shop-online" onClick={openDeliveryModal}>
          Shop Online
        </button>
        <button className="btn-whatsapp-share" onClick={shareOnWhatsApp}>
          Share on WhatsApp
        </button>
      </div>

      {items.length === 0 ? (
        <div className="shopping-empty-message">
          <h4>Your shopping list is empty</h4>
          <p>Start adding items you need to buy!</p>
          <button className="shopping-btn-primary-custom" onClick={handleAddNew}>
            Add First Item
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
                  <span className="category-count-badge">{categoryItems.length}</span>
                </div>
                <div className="shopping-checklist-items">
                  {categoryItems.map(item => {
                    const isPurchased = purchasedIds.has(item._id);
                    return (
                      <div 
                        key={item._id} 
                        className={`shopping-checklist-item ${isPurchased ? 'item-purchased' : ''}`}
                      >
                        <span className="shopping-quantity-badge-simple">
                          {item.quantity} {item.unit}
                        </span>
                        <h4 className={`shopping-item-name-simple ${isPurchased ? 'item-name-purchased' : ''}`}>
                          {item.name}
                          {item.fromPantry && <span className="from-pantry-badge"> (from pantry)</span>}
                        </h4>
<div className="shopping-checklist-actions">
  <div className="shopping-checklist-actions">
  <button 
    className="shopping-purchase-btn" 
    onClick={() => markAsPurchased(item._id)}
    title="Mark as purchased"
  >
    <FaCheck />
  </button>
  <button 
    className="shopping-edit-action-btn" 
    onClick={() => handleEdit(item)}
    title="Edit item"
  >
    <FaEdit />
  </button>
  <button 
    className="shopping-delete-action-btn" 
    onClick={() => handleDelete(item._id)}
    title="Delete item"
  >
    <FaTrash />
  </button>
</div>
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

      {/* Item Add/Edit Modal */}
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
                <label>Category</label>
                <select value={currentItem.category} onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="shopping-form-group">
                <label>Unit</label>
                <select value={currentItem.unit} onChange={(e) => setCurrentItem({ ...currentItem, unit: e.target.value })}>
                  {units.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
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
            </div>
            <div className="shopping-modal-footer">
              <button className="shopping-btn-outline-custom" onClick={handleCloseModal}>Cancel</button>
              <button className="shopping-btn-primary-custom" onClick={handleSaveItem}>
                {editMode ? 'Update Item' : 'Add to List'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back to Home */}
      <div className="back-home-container">
        <button className="btn-back-home" onClick={() => navigate('/')}>
           Back to Home
        </button>
      </div>

      {/* Delivery Options Popup Modal */}
      {showDeliveryModal && (
        <div className="shopping-modal-overlay" onClick={closeDeliveryModal}>
          <div className="delivery-modal" onClick={(e) => e.stopPropagation()}>
            <div className="delivery-modal-header">
              <h3>Choose Delivery Service</h3>
              <button className="delivery-modal-close" onClick={closeDeliveryModal}>×</button>
            </div>
            <div className="delivery-modal-body">
              <div className="delivery-option" onClick={handleCityOrder}>
                <div className="delivery-option-text">
                  <strong>foodpanda (pandamart)</strong>
                  <p>For cities – 30 minute delivery</p>
                </div>
              </div>
              <div className="delivery-option" onClick={handleVillageOrder}>
                <div className="delivery-option-text">
                  <strong>Naheed.pk</strong>
                  <p>For villages – Nationwide delivery (1-3 days)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingList;