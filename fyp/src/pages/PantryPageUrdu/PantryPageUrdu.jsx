import React, { useState, useEffect } from 'react';
import './PantryPageUrdu.css';
import { useNavigate } from 'react-router-dom';

const PantryPageUrdu = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState({ 
    name: '', 
    quantity: '', 
    unit: 'کلو', 
    category: 'سبزیاں' 
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [shoppingList, setShoppingList] = useState([]);
  
  const navigate = useNavigate();

  const categories = ['سبزیاں', 'پھل', 'دہی دودھ', 'اناج', 'مصالے', 'گوشت', 'مشروبات', 'دیگر'];
  const units = ['کلو', 'گرام', 'لیٹر', 'ملی لیٹر', 'عدد', 'درجن'];

  useEffect(() => {
    console.log("ڈیٹا لوڈ ہو رہا ہے");
    window.scrollTo(0, 0);
    
    const savedItems = localStorage.getItem('pantryItemsUrdu');
    
    if (savedItems && savedItems !== "[]" && savedItems !== "null") {
      try {
        const parsedItems = JSON.parse(savedItems);
        setItems(parsedItems);
      } catch (error) {
        console.error("خرابی:", error);
        setItems([]);
      }
    } else {
      setItems([]);
    }
    
    const savedShoppingList = localStorage.getItem('shoppingListUrdu');
    
    if (savedShoppingList && savedShoppingList !== "[]" && savedShoppingList !== "null") {
      try {
        const parsedShoppingList = JSON.parse(savedShoppingList);
        setShoppingList(parsedShoppingList);
      } catch (error) {
        console.error("خرابی:", error);
        setShoppingList([]);
      }
    } else {
      setShoppingList([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pantryItemsUrdu', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('shoppingListUrdu', JSON.stringify(shoppingList));
  }, [shoppingList]);

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
      setShoppingList(shoppingList.filter(item => item.id !== id));
    }
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setEditMode(true);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setCurrentItem({ name: '', quantity: '', unit: 'کلو', category: 'سبزیاں' });
    setEditMode(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditMode(false);
    setCurrentItem({ name: '', quantity: '', unit: 'کلو', category: 'سبزیاں' });
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToShoppingList = (item) => {
    if (!shoppingList.some(i => i.id === item.id)) {
      const updatedList = [...shoppingList, item];
      setShoppingList(updatedList);
      alert(`${item.name} خریداری کی فہرست میں شامل ہو گیا!`);
    } else {
      alert('یہ چیز پہلے سے موجود ہے!');
    }
  };

  const addToShoppingListAndRedirect = (item) => {
    if (!shoppingList.some(i => i.id === item.id)) {
      const updatedShoppingList = [...shoppingList, item];
      setShoppingList(updatedShoppingList);
    }
    navigate('/smart-shopping-urdu');
  };

  const removeFromShoppingList = (id) => {
    setShoppingList(shoppingList.filter(item => item.id !== id));
  };

  const clearShoppingList = () => {
    if (window.confirm('کیا آپ پوری فہرست صاف کرنا چاہتے ہیں؟')) {
      setShoppingList([]);
    }
  };

  const isInShoppingList = (id) => {
    return shoppingList.some(item => item.id === id);
  };

  const goToShoppingPage = () => {
    navigate('/smart-shopping-urdu');
  };

  const totalItems = items.length;
  const lowStockItems = items.filter(item => parseInt(item.quantity) <= 1).length;
  const totalCategories = [...new Set(items.map(item => item.category))].length;

  return (
    <div className="urdu-pantry-page">
      <div className="urdu-fullscreen-food-image">
        <div className="urdu-fullscreen-food-content">
          <h1>آپ کا گھریلو ذخیرہ</h1>
          <p>اشیاء کو ریکارڈ کریں اور بہتر طریقے سے کھانا بنائیں</p>
        </div>
      </div>
      
      <div className="urdu-hero-section">
        <h1 className="urdu-hero-title">اشیاء شامل کریں</h1>
        <p className="urdu-hero-subtitle">اپنی باورچی خانے کو منظم رکھیں</p>
      </div>

      {items.length > 0 && (
        <div className="urdu-stats-section">
          <div className="urdu-stat-card">
            <p className="urdu-stat-number">{totalItems}</p>
            <p className="urdu-stat-label">کل اشیاء</p>
          </div>
          <div className="urdu-stat-card urdu-low-stock-card">
            <p className="urdu-stat-number">{lowStockItems}</p>
            <p className="urdu-stat-label">کم ذخیرہ</p>
          </div>
          <div className="urdu-stat-card">
            <p className="urdu-stat-number">{totalCategories}</p>
            <p className="urdu-stat-label">اقسام</p>
          </div>
        </div>
      )}

      <div className="urdu-search-add-section">
        <input
          type="text"
          placeholder="تلاش کریں..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="urdu-search-field"
        />
        <button className="urdu-btn-add-new" onClick={handleAddNew}>
          + شے شامل کریں
        </button>
      </div>

      {shoppingList.length > 0 && (
        <div className="urdu-shopping-list-section">
          <div className="urdu-shopping-list-header">
            <h3 className="urdu-shopping-list-title">🛒 خریداری ({shoppingList.length})</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="urdu-btn-view-shopping" 
                onClick={goToShoppingPage}
              >
                فہرست دیکھیں
              </button>
              <button className="urdu-btn-clear-shopping" onClick={clearShoppingList}>
                صاف کریں
              </button>
            </div>
          </div>
          <div className="urdu-checklist-items">
            {shoppingList.slice(0, 3).map(item => (
              <div key={item.id} className="urdu-shopping-item">
                <span className="urdu-qty-badge">{item.quantity} {item.unit}</span>
                <h4 className="urdu-shopping-item-name">{item.name}</h4>
                <button 
                  className="urdu-btn-remove-shopping" 
                  onClick={() => removeFromShoppingList(item.id)}
                >
                  ہٹائیں
                </button>
              </div>
            ))}
            {shoppingList.length > 3 && (
              <div className="urdu-shopping-item" style={{ justifyContent: 'center', background: 'transparent' }}>
                <button 
                  className="urdu-btn-view-more" 
                  onClick={goToShoppingPage}
                >
                  {shoppingList.length - 3} مزید →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {items.length === 0 ? (
        <div className="urdu-empty-message">
          <h4>ذخیرہ خالی ہے</h4>
          <p>اشیاء شامل کرنا شروع کریں!</p>
          <button className="urdu-btn-add-first" onClick={handleAddNew}>
            + پہلی شے شامل کریں
          </button>
        </div>
      ) : (
        <div className="urdu-categories-checklist">
          {categories.map(category => {
            const categoryItems = filteredItems.filter(item => item.category === category);
            if (categoryItems.length === 0) return null;
            
            return (
              <div key={category} className="urdu-category-section">
                <div className="urdu-category-header">
                  <h3 className="urdu-category-title">{category}</h3>
                </div>
                <div className="urdu-checklist-items">
                  {categoryItems.map(item => {
                    const isLowStock = parseInt(item.quantity) <= 2;
                    
                    return (
                      <div key={item.id} className={`urdu-checklist-item ${isLowStock ? 'urdu-low-stock' : ''}`}>
                        <span className="urdu-qty-badge">{item.quantity} {item.unit}</span>
                        <h4 className="urdu-item-name">{item.name}</h4>
                        <div className="urdu-item-actions">
                          {isLowStock ? (
                            <button 
                              className={`urdu-btn-cart ${isInShoppingList(item.id) ? 'urdu-in-list' : ''}`}
                              onClick={() => addToShoppingList(item)}
                              title={isInShoppingList(item.id) ? "موجود ہے" : "خریداری میں شامل کریں"}
                            >
                              {isInShoppingList(item.id) ? '✓' : '🛒'}
                            </button>
                          ) : (
                            <button 
                              className={`urdu-btn-cart ${isInShoppingList(item.id) ? 'urdu-in-list' : ''}`}
                              onClick={() => addToShoppingListAndRedirect(item)}
                              title={isInShoppingList(item.id) ? "خریداری پر جائیں" : "شامل اور جائیں"}
                            >
                              {isInShoppingList(item.id) ? '✓' : '🛒'}
                            </button>
                          )}
                          
                          <button className="urdu-btn-edit" onClick={() => handleEdit(item)} title="ترمیم">✏️</button>
                          <button className="urdu-btn-delete" onClick={() => handleDelete(item.id)} title="حذف">🗑️</button>
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

      {showModal && (
        <div className="urdu-modal-overlay" onClick={handleCloseModal}>
          <div className="urdu-modal" onClick={(e) => e.stopPropagation()}>
            <div className="urdu-modal-header">
              <h2>{editMode ? 'ترمیم کریں' : 'شے شامل کریں'}</h2>
              <button className="urdu-btn-close-modal" onClick={handleCloseModal} title="بند کریں">
                ×
              </button>
            </div>
            <div className="urdu-modal-body">
              <div className="urdu-form-group">
                <label>نام</label>
                <input type="text" value={currentItem.name} onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}/>
              </div>
              <div className="urdu-form-group">
                <label>مقدار</label>
                <input type="number" value={currentItem.quantity} onChange={(e) => setCurrentItem({ ...currentItem, quantity: e.target.value })}/>
              </div>
              <div className="urdu-form-group">
                <label>یونٹ</label>
                <select value={currentItem.unit} onChange={(e) => setCurrentItem({ ...currentItem, unit: e.target.value })}>
                  {units.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div className="urdu-form-group">
                <label>اقسام</label>
                <select value={currentItem.category} onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="urdu-modal-footer">
              <button className="urdu-btn-modal-cancel" onClick={handleCloseModal}>منسوخ</button>
              <button className="urdu-btn-modal-save" onClick={handleSaveItem}>
                {editMode ? 'اپ ڈیٹ' : 'شامل'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PantryPageUrdu;