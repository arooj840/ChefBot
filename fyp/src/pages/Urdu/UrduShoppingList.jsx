import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import { showToast } from '../../components/Toast';
import './UrduShoppingList.css';

const UrduShoppingList = () => {
  const [items, setItems] = useState([]);
  const [purchasedIds, setPurchasedIds] = useState(new Set());
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState({ 
    name: '', 
    quantity: '', 
    unit: 'عدد', 
    category: 'کھانے پینے کا' 
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  
  const navigate = useNavigate();

  const categories = ['کھانے پینے کا', 'سبزیاں', 'پھل', 'دودھ دہی', 'گوشت', 'مشروبات', 'چپس وغیرہ', 'گھر کا سامان', 'باقی'];
  const units = ['عدد', 'کلو', 'گرام', 'لیٹر', 'ملی', 'درجن', 'پیکٹ', 'بوتل'];

  const categoryMap = {
    'Groceries': 'کھانے پینے کا',
    'Vegetables': 'سبزیاں',
    'Fruits': 'پھل',
    'Dairy': 'دودھ دہی',
    'Meat': 'گوشت',
    'Beverages': 'مشروبات',
    'Snacks': 'چپس وغیرہ',
    'Household': 'گھر کا سامان',
    'Other': 'باقی'
  };

  const categoryMapReverse = {
    'کھانے پینے کا': 'Groceries',
    'سبزیاں': 'Vegetables',
    'پھل': 'Fruits',
    'دودھ دہی': 'Dairy',
    'گوشت': 'Meat',
    'مشروبات': 'Beverages',
    'چپس وغیرہ': 'Snacks',
    'گھر کا سامان': 'Household',
    'باقی': 'Other'
  };

  const unitMapReverse = {
    'عدد': 'pieces',
    'کلو': 'kg',
    'گرام': 'g',
    'لیٹر': 'liters',
    'ملی': 'ml',
    'درجن': 'dozen',
    'پیکٹ': 'packets',
    'بوتل': 'bottles'
  };

  const unitMap = {
    'pieces': 'عدد',
    'kg': 'کلو',
    'g': 'گرام',
    'liters': 'لیٹر',
    'ml': 'ملی',
    'dozen': 'درجن',
    'packets': 'پیکٹ',
    'bottles': 'بوتل'
  };

  const getToken = () => localStorage.getItem('token');

  const shareOnWhatsApp = () => {
    if (items.length === 0) {
      showToast('کوئی چیز نہیں ہے!', 'warning');
      return;
    }

    let message = "🛒 *میری خریداری کی لسٹ* 🛒\n";
    message += "─────────────────\n\n";
    
    Object.keys(categoryMap).forEach(engCat => {
      const categoryItems = items.filter(item => item.category === engCat);
      if (categoryItems.length > 0) {
        message += `📁 *${categoryMap[engCat]}* (${categoryItems.length})\n`;
        message += "─────────────────\n";
        categoryItems.forEach((item, index) => {
          const isPurchased = purchasedIds.has(item._id);
          message += `${index + 1}. ${item.quantity} ${unitMap[item.unit] || item.unit} - ${item.name}${isPurchased ? ' ✅' : ''}\n`;
        });
        message += "\n";
      }
    });
    
    message += "─────────────────\n";
    message += `سب چیزیں: ${items.length}\n`;
    message += `خرید لی: ${purchasedIds.size}\n`;
    message += `${new Date().toLocaleDateString('ur-PK')}\n`;
    message += `ChefBot - سمارٹ کچن\n`;
    message += "─────────────────\n";
    message += "اچھی خریداری کریں! 🎉";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

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
        showToast(data.message || 'کوئی مسئلہ آ گیا', 'error');
      }
    } catch (err) {
      showToast('انٹرنیٹ یا سرور کا مسئلہ ہے', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShoppingItems();
  }, []);

  const handleSaveItem = async () => {
    if (!currentItem.name || !currentItem.quantity) {
      showToast('سب جگہ لکھیں!', 'warning');
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
          unit: unitMapReverse[currentItem.unit] || currentItem.unit,
          category: categoryMapReverse[currentItem.category] || currentItem.category
        })
      });

      const data = await response.json();
      if (response.ok) {
        setItems(data.items);
        handleCloseModal();
        showToast(editMode ? 'بدل دیا!' : 'ڈال دیا!', 'success');
      } else {
        showToast(data.message || 'کوئی مسئلہ آ گیا', 'error');
      }
    } catch (err) {
      showToast('انٹرنیٹ یا سرور کا مسئلہ ہے', 'error');
    }
  };

  const markAsPurchased = (id) => {
    setPurchasedIds(prev => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
        showToast('واپس لسٹ میں آ گئی!', 'warning');
      } else {
        updated.add(id);
        showToast('خرید لی! ✅', 'success');
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
        showToast('ہٹا دی!', 'success');
      }
    } catch (err) {
      showToast('انٹرنیٹ یا سرور کا مسئلہ ہے', 'error');
    }
  };

  const handleEdit = (item) => {
    setCurrentItem({
      _id: item._id,
      name: item.name,
      quantity: item.quantity,
      unit: unitMap[item.unit] || item.unit,
      category: categoryMap[item.category] || item.category
    });
    setEditMode(true);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setCurrentItem({ name: '', quantity: '', unit: 'عدد', category: 'کھانے پینے کا' });
    setEditMode(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditMode(false);
    setCurrentItem({ name: '', quantity: '', unit: 'عدد', category: 'کھانے پینے کا' });
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
      <div className="ur-shopping-page">
        <div className="ur-loading-container">
          <div className="ur-spinner"></div>
          <p>لوڈ ہو رہا ہے...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ur-shopping-page">

      {/* اوپر کی تصویر */}
      <div className="ur-shopping-fullscreen-food-image">
        <div className="ur-shopping-fullscreen-food-content">
          <h1>آپ کی خریداری کی لسٹ</h1>
          <p>جو چیزیں لینی ہیں یہاں لکھیں</p>
        </div>
      </div>

      {/* ہیرو سیکشن */}
      <div className="ur-shopping-hero-section">
        <div className="ur-shopping-hero-content">
          <h1 className="ur-shopping-hero-title">میری خریداری</h1>
          <p className="ur-shopping-hero-subtitle">اپنی لسٹ یہاں بنائیں</p>
        </div>
      </div>

      {error && (
        <div className="ur-shopping-error-message">
          <i className="fas fa-exclamation-circle"></i> {error}
        </div>
      )}

      {/* گنتی */}
      {items.length > 0 && (
        <div className="ur-shopping-stats-section">
          <div className="ur-shopping-stat-card">
            <p className="ur-shopping-stat-number">{totalItems}</p>
            <p className="ur-shopping-stat-label">سب چیزیں</p>
          </div>
          <div className="ur-shopping-stat-card">
            <p className="ur-shopping-stat-number">{pendingItems}</p>
            <p className="ur-shopping-stat-label">لینی ہیں</p>
          </div>
          <div className="ur-shopping-stat-card ur-shopping-purchased-card">
            <p className="ur-shopping-stat-number">{purchasedItems}</p>
            <p className="ur-shopping-stat-label">لے لی</p>
          </div>
        </div>
      )}

      {/* تلاش اور نئی چیز */}
      <div className="ur-shopping-search-add-section">
        <input
          type="text"
          placeholder="چیز ڈھونڈیں..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ur-shopping-search-field"
        />
        <button className="ur-shopping-btn-primary-custom" onClick={handleAddNew}>
          نئی چیز ڈالیں
        </button>
      </div>

      {/* آن لائن اور واٹس ایپ */}
      <div className="ur-shopping-top-action-buttons">
        <button className="ur-btn-shop-online" onClick={openDeliveryModal}>
          آن لائن خریداری
        </button>
        <button className="ur-btn-whatsapp-share" onClick={shareOnWhatsApp}>
          واٹس ایپ پر بھیجیں
        </button>
      </div>

      {/* لسٹ خالی ہو تو */}
      {items.length === 0 ? (
        <div className="ur-shopping-empty-message">
          <h4>لسٹ خالی ہے</h4>
          <p>جو چیزیں لینی ہیں وہ ڈالیں!</p>
          <button className="ur-shopping-btn-primary-custom" onClick={handleAddNew}>
            پہلی چیز ڈالیں
          </button>
        </div>
      ) : (
        <div className="ur-shopping-categories-checklist">
          {Object.keys(categoryMap).map(engCategory => {
            const urduCategory = categoryMap[engCategory];
            const categoryItems = filteredItems.filter(item => item.category === engCategory);
            if (categoryItems.length === 0) return null;
            
            return (
              <div key={engCategory} className="ur-shopping-category-section">
                <div className="ur-shopping-category-header-simple">
                  <h3 className="ur-shopping-category-title-simple">{urduCategory}</h3>
                  <span className="ur-category-count-badge">{categoryItems.length}</span>
                </div>
                <div className="ur-shopping-checklist-items">
                  {categoryItems.map(item => {
                    const isPurchased = purchasedIds.has(item._id);
                    return (
                      <div 
                        key={item._id} 
                        className={`ur-shopping-checklist-item ${isPurchased ? 'ur-item-purchased' : ''}`}
                      >
                        <span className="ur-shopping-quantity-badge-simple">
                          {item.quantity} {unitMap[item.unit] || item.unit}
                        </span>
                        <h4 className={`ur-shopping-item-name-simple ${isPurchased ? 'ur-item-name-purchased' : ''}`}>
                          {item.name}
                          {item.fromPantry && <span className="ur-from-pantry-badge"> (پینٹری سے)</span>}
                        </h4>
                        <div className="ur-shopping-checklist-actions">
                          <button 
                            className="ur-shopping-purchase-btn" 
                            onClick={() => markAsPurchased(item._id)}
                            title="لے لی"
                          >
                            <FaCheck />
                          </button>
                          <button 
                            className="ur-shopping-edit-action-btn" 
                            onClick={() => handleEdit(item)}
                            title="بدلیں"
                          >
                            <FaEdit />
                          </button>
                          <button 
                            className="ur-shopping-delete-action-btn" 
                            onClick={() => handleDelete(item._id)}
                            title="ہٹائیں"
                          >
                            <FaTrash />
                          </button>
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

      {/* چیز ڈالنے / بدلنے کا Modal */}
      {showModal && (
        <div className="ur-shopping-modal-overlay" onClick={handleCloseModal}>
          <div className="ur-shopping-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ur-shopping-modal-header-custom">
              <h2>{editMode ? 'چیز بدلیں' : 'نئی چیز ڈالیں'}</h2>
              <button className="ur-shopping-btn-close" onClick={handleCloseModal}>×</button>
            </div>
            <div className="ur-shopping-modal-body">
              <div className="ur-shopping-form-group">
                <label>چیز کا نام</label>
                <input 
                  type="text" 
                  placeholder="جیسے: دودھ، سیب، آٹا"
                  value={currentItem.name} 
                  onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                />
              </div>
              
              <div className="ur-shopping-form-group">
                <label>قسم</label>
                <select value={currentItem.category} onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="ur-shopping-form-group">
                <label>یونٹ</label>
                <select value={currentItem.unit} onChange={(e) => setCurrentItem({ ...currentItem, unit: e.target.value })}>
                  {units.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div className="ur-shopping-form-group">
                <label>تعداد</label>
                <input 
                  type="number" 
                  placeholder="جیسے: 2، 5، 10"
                  value={currentItem.quantity} 
                  onChange={(e) => setCurrentItem({ ...currentItem, quantity: e.target.value })}
                />
              </div>
            </div>
            <div className="ur-shopping-modal-footer">
              <button className="ur-shopping-btn-outline-custom" onClick={handleCloseModal}>بند کریں</button>
              <button className="ur-shopping-btn-primary-custom" onClick={handleSaveItem}>
                {editMode ? 'محفوظ کریں' : 'لسٹ میں ڈالیں'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* واپس جائیں */}
      <div className="ur-back-home-container">
        <button className="ur-btn-back-home" onClick={() => navigate('/')}>
          ← واپس جائیں
        </button>
      </div>

      {/* ڈیلیوری */}
      {showDeliveryModal && (
        <div className="ur-shopping-modal-overlay" onClick={closeDeliveryModal}>
          <div className="ur-delivery-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ur-delivery-modal-header">
              <h3>کہاں سے منگوائیں؟</h3>
              <button className="ur-delivery-modal-close" onClick={closeDeliveryModal}>×</button>
            </div>
            <div className="ur-delivery-modal-body">
              <div className="ur-delivery-option" onClick={handleCityOrder}>
                <div className="ur-delivery-option-text">
                  <strong>فوڈ پانڈا</strong>
                  <p>شہر میں – 30 منٹ میں گھر پہنچے</p>
                </div>
              </div>
              <div className="ur-delivery-option" onClick={handleVillageOrder}>
                <div className="ur-delivery-option-text">
                  <strong>ناہید ڈاٹ پی کے</strong>
                  <p>گاؤں کے لیے – 1 سے 3 دن میں ملے</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrduShoppingList;