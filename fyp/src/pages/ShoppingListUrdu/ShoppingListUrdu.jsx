import React, { useState, useEffect } from 'react';
import './ShoppingListUrdu.css';
import { useNavigate } from 'react-router-dom';

const ShoppingListUrdu = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState({ 
    name: '', 
    quantity: '', 
    unit: 'عدد', 
    category: 'کھانے کی چیزیں' 
  });
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['کھانے کی چیزیں', 'سبزیاں', 'پھل', 'دہی دودھ', 'گوشت', 'مشروبات', 'سنیکس', 'گھریلو اشیاء', 'دیگر'];
  const units = ['عدد', 'کلو', 'گرام', 'لیٹر', 'ملی لیٹر', 'درجن', 'پیکٹ', 'بوتل'];

  useEffect(() => {
    window.scrollTo(0, 0);
    const redirectedItem = localStorage.getItem('redirectedItemUrdu');
    if (redirectedItem) {
      const item = JSON.parse(redirectedItem);
      if (!items.some(i => i.id === item.id)) {
        setItems([...items, item]);
      }
      localStorage.removeItem('redirectedItemUrdu');
    }
  }, []);

  const handleSaveItem = () => {
    if (!currentItem.name || !currentItem.quantity) {
      alert('براہ کرم تمام معلومات بھریں!');
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
    if (window.confirm('کیا آپ یہ چیز حذف کرنا چاہتے ہیں؟')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setEditMode(true);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setCurrentItem({ name: '', quantity: '', unit: 'عدد', category: 'کھانے کی چیزیں' });
    setEditMode(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditMode(false);
    setCurrentItem({ name: '', quantity: '', unit: 'عدد', category: 'کھانے کی چیزیں' });
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
    <div className="urdu-shopping-page">
      
      <div className="urdu-shopping-fullscreen-food-image">
        <div className="urdu-shopping-fullscreen-food-content">
          <h1>میری خریداری کی فہرست</h1>
          <p>جو چیزیں خریدنی ہیں انہیں یاد رکھیں</p>
        </div>
      </div>

      <div className="urdu-shopping-hero-section">
        <h1 className="urdu-shopping-hero-title">خریداری کی فہرست</h1>
        <p className="urdu-shopping-hero-subtitle">اپنی خریداری کو منظم رکھیں</p>
      </div>

      {items.length > 0 && (
        <div className="urdu-shopping-stats-section">
          <div className="urdu-shopping-stat-card">
            <p className="urdu-shopping-stat-number">{totalItems}</p>
            <p className="urdu-shopping-stat-label">کل اشیاء</p>
          </div>
          <div className="urdu-shopping-stat-card">
            <p className="urdu-shopping-stat-number">{pendingItems}</p>
            <p className="urdu-shopping-stat-label">خریدنی باقی</p>
          </div>
          <div className="urdu-shopping-stat-card urdu-shopping-low-stock-card">
            <p className="urdu-shopping-stat-number">{purchasedItems}</p>
            <p className="urdu-shopping-stat-label">خرید لیا</p>
          </div>
        </div>
      )}

      <div className="urdu-shopping-search-add-section">
        <input
          type="text"
          placeholder="تلاش کریں..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="urdu-shopping-search-field"
        />
        <button className="urdu-shopping-btn-primary-custom" onClick={handleAddNew}>
          + چیز شامل کریں
        </button>
      </div>

      {items.length === 0 ? (
        <div className="urdu-shopping-empty-message">
          <h4>فہرست خالی ہے</h4>
          <p>خریداری کی چیزیں شامل کریں!</p>
          <button className="urdu-shopping-btn-primary-custom" onClick={handleAddNew}>
            + پہلی چیز شامل کریں
          </button>
        </div>
      ) : (
        <div className="urdu-shopping-categories-checklist">
          {categories.map(category => {
            const categoryItems = filteredItems.filter(item => item.category === category);
            if (categoryItems.length === 0) return null;
            
            return (
              <div key={category} className="urdu-shopping-category-section">
                <div className="urdu-shopping-category-header-simple">
                  <h3 className="urdu-shopping-category-title-simple">{category}</h3>
                </div>
                <div className="urdu-shopping-checklist-items">
                  {categoryItems.map(item => (
                    <div key={item.id} className={`urdu-shopping-checklist-item ${item.purchased ? 'urdu-shopping-purchased-item' : ''}`}>
                      <span className="urdu-shopping-quantity-badge-simple">{item.quantity} {item.unit}</span>
                      <h4 className="urdu-shopping-item-name-simple" style={{ 
                        textDecoration: item.purchased ? 'line-through' : 'none',
                        opacity: item.purchased ? 0.6 : 1 
                      }}>
                        {item.name}
                      </h4>
                      <div className="urdu-shopping-checklist-actions">
                        <button 
                          className={`urdu-shopping-checklist-action-btn ${item.purchased ? 'urdu-shopping-purchased-btn' : 'urdu-shopping-purchase-btn'}`}
                          onClick={() => markAsPurchased(item.id)}
                          title={item.purchased ? "خریدنی ہے" : "خرید لیا"}
                        >
                          {item.purchased ? '✓' : '○'}
                        </button>
                        <button className="urdu-shopping-checklist-action-btn urdu-shopping-edit-action-btn" onClick={() => handleEdit(item)}>✏️</button>
                        <button className="urdu-shopping-checklist-action-btn urdu-shopping-delete-action-btn" onClick={() => handleDelete(item.id)}>🗑️</button>
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
        <div className="urdu-shopping-modal-overlay" onClick={handleCloseModal}>
          <div className="urdu-shopping-modal" onClick={(e) => e.stopPropagation()}>
            <div className="urdu-shopping-modal-header-custom">
              <h2>{editMode ? 'ترمیم کریں' : 'چیز شامل کریں'}</h2>
              <button className="urdu-shopping-btn-close" onClick={handleCloseModal}>×</button>
            </div>
            <div className="urdu-shopping-modal-body">
              <div className="urdu-shopping-form-group">
                <label>چیز کا نام</label>
                <input 
                  type="text" 
                  placeholder="مثال: دودھ، سیب، روٹی"
                  value={currentItem.name} 
                  onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                />
              </div>
              <div className="urdu-shopping-form-group">
                <label>مقدار</label>
                <input 
                  type="number" 
                  placeholder="مثال: 2، 0.5، 10"
                  value={currentItem.quantity} 
                  onChange={(e) => setCurrentItem({ ...currentItem, quantity: e.target.value })}
                />
              </div>
              <div className="urdu-shopping-form-group">
                <label>یونٹ</label>
                <select value={currentItem.unit} onChange={(e) => setCurrentItem({ ...currentItem, unit: e.target.value })}>
                  {units.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div className="urdu-shopping-form-group">
                <label>اقسام</label>
                <select value={currentItem.category} onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="urdu-shopping-modal-footer">
              <button className="urdu-shopping-btn-outline-custom" onClick={handleCloseModal}>منسوخ</button>
              <button className="urdu-shopping-btn-primary-custom" onClick={handleSaveItem}>
                {editMode ? 'اپ ڈیٹ' : 'شامل کریں'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ShoppingListUrdu;