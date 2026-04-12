import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../PantryPage.css'; // wohi CSS jo pehle use kar rahe the

const PantryPageUrdu = () => {
  const navigate = useNavigate();

  // State
  const [items, setItems] = useState([]);
  const [pantryShoppingList, setPantryShoppingList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    name: '',
    quantity: '',
    unit: 'کلو',
    category: 'سبزیاں'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategories, setOpenCategories] = useState({});

  // Categories and Units (Urdu)
  const categories = ['سبزیاں', 'پھل', 'دہی دودھ', 'اناج', 'مصالے', 'گوشت', 'مشروبات', 'دیگر'];
  const units = ['کلو', 'گرام', 'لیٹر', 'ملی لیٹر', 'عدد', 'درجن'];

  // LocalStorage keys
  const PANTRY_KEY = 'pantryItemsUrdu';
  const SHOPPING_KEY = 'pantryShoppingListUrdu';

  // Load data from localStorage on mount
  useEffect(() => {
    const savedItems = localStorage.getItem(PANTRY_KEY);
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
    const savedShopping = localStorage.getItem(SHOPPING_KEY);
    if (savedShopping) {
      setPantryShoppingList(JSON.parse(savedShopping));
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(PANTRY_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem(SHOPPING_KEY, JSON.stringify(pantryShoppingList));
  }, [pantryShoppingList]);

  // Helper: Show message
  const showMessage = (msg, type = 'info') => {
    alert(msg);
  };

  // Toggle category collapse
  const toggleCategory = (categoryName) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  // Add to pantry shopping list (local)
  const addToPantryShoppingList = (item) => {
    if (!pantryShoppingList.some(i => i.name === item.name)) {
      setPantryShoppingList([...pantryShoppingList, { ...item, id: Date.now() }]);
      showMessage(`${item.name} خریداری کی فہرست میں شامل!`, 'success');
    } else {
      showMessage('یہ چیز پہلے سے موجود ہے!', 'warning');
    }
  };

  // Remove from pantry shopping list
  const removeFromPantryShoppingList = (id) => {
    setPantryShoppingList(pantryShoppingList.filter(i => i.id !== id));
    showMessage('چیز ہٹا دی گئی', 'info');
  };

  // Clear all shopping list
  const clearPantryShoppingList = () => {
    if (window.confirm('کیا آپ پوری فہرست صاف کرنا چاہتے ہیں؟')) {
      setPantryShoppingList([]);
      showMessage('فہرست صاف کر دی گئی', 'success');
    }
  };

  // Add all to main shopping list and redirect
  const addAllToShoppingAndRedirect = () => {
    if (pantryShoppingList.length === 0) {
      showMessage('شامل کرنے کے لیے کوئی چیز نہیں!', 'warning');
      return;
    }
    // فرض کریں main shopping list کا الگ page ہے
    navigate('/smart-shopping-urdu', { state: { fromPantry: pantryShoppingList } });
  };

  // Save item (add/edit)
  const handleSaveItem = () => {
    if (!currentItem.name || !currentItem.quantity) {
      showMessage('براہ کرم نام اور مقدار بھریں!', 'warning');
      return;
    }

    if (editMode) {
      setItems(items.map(item =>
        item.id === currentItem.id ? currentItem : item
      ));
      showMessage('چیز تبدیل ہو گئی!', 'success');
    } else {
      const newItem = {
        ...currentItem,
        id: Date.now(),
        quantity: parseInt(currentItem.quantity)
      };
      setItems([...items, newItem]);
      showMessage('چیز شامل ہو گئی!', 'success');
    }
    handleCloseModal();
  };

  // Delete item
  const handleDelete = (id) => {
    if (window.confirm('کیا آپ یہ چیز مٹانا چاہتے ہیں؟')) {
      setItems(items.filter(item => item.id !== id));
      // also remove from shopping list if present
      setPantryShoppingList(pantryShoppingList.filter(item => item.id !== id));
      showMessage('چیز مٹا دی گئی', 'success');
    }
  };

  // Edit item
  const handleEdit = (item) => {
    setCurrentItem({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      unit: item.unit,
      category: item.category
    });
    setEditMode(true);
    setShowModal(true);
  };

  // Add new item
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

  // Filter items based on search
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = items.length;
  const lowStockItems = items.filter(item => item.quantity <= 2).length;
  const totalCategories = [...new Set(items.map(item => item.category))].length;
  const isSearchActive = searchTerm.trim().length > 0;

  return (
    <div className="pantry-page">
      {/* Full screen image */}
      <div className="fullscreen-food-image">
        <div className="fullscreen-food-content">
          <h1>آپ کا سمارٹ باورچی خانہ</h1>
        </div>
      </div>

      {/* Hero section */}
      <div className="p-hero-section">
        <div className="p-hero-content">
          <h1 className="p-hero-title">آپ کی پینٹری کی چیزیں</h1>
          <p className="p-hero-subtitle">اپنے باورچی خانے کو ترتیب سے رکھیں</p>
        </div>
      </div>

      {/* Stats */}
      {items.length > 0 && (
        <div className="stats-section">
          <div className="stat-card">
            <p className="stat-number">{totalItems}</p>
            <p className="stat-label">کل چیزیں</p>
          </div>
          <div className="stat-card low-stock-card">
            <p className="stat-number">{lowStockItems}</p>
            <p className="stat-label">کم ذخیرہ</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">{totalCategories}</p>
            <p className="stat-label">اقسام</p>
          </div>
        </div>
      )}

      {/* Search + Add */}
      <div className="search-add-section">
        <input
          type="text"
          placeholder="چیزیں تلاش کریں..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-field-pantry"
        />
        <button className="btn-add-new-item" onClick={handleAddNew}>
          + نئی چیز شامل کریں
        </button>
      </div>

      {/* Shopping List Section (Pantry Shopping List) */}
      <div className="shopping-list-section">
        <div className="shopping-list-header">
          <h3 className="shopping-list-title">🛒 خریداری کی فہرست ({pantryShoppingList.length})</h3>
          <div className="shopping-list-actions">
            <button
              className="btn-add-all-to-shopping"
              onClick={addAllToShoppingAndRedirect}
              disabled={pantryShoppingList.length === 0}
            >
              سب خریداری میں شامل کریں
            </button>
            <button
              className="btn-clear-shopping-list"
              onClick={clearPantryShoppingList}
            >
              سب صاف کریں
            </button>
          </div>
        </div>
        <div className="shopping-items-list">
          {pantryShoppingList.length === 0 ? (
            <div className="empty-shopping-message">
              <p>کوئی چیز نہیں۔ شامل کرنے کے لیے 🛒 بٹن دبائیں۔</p>
            </div>
          ) : (
            pantryShoppingList.map(item => (
              <div key={item.id} className="shopping-list-item">
                <span className="quantity-badge-simple">{item.quantity} {item.unit}</span>
                <h4 className="shopping-item-name">{item.name}</h4>
                <button
                  className="btn-remove-shopping-item"
                  onClick={() => removeFromPantryShoppingList(item.id)}
                >
                  ہٹائیں
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Main Pantry Items List */}
      {items.length === 0 ? (
        <div className="p-empty-message">
          <h4>آپ کی پینٹری خالی ہے</h4>
          <p>چیزیں شامل کرنا شروع کریں!</p>
          <button className="btn-add-first-item" onClick={handleAddNew}>
            + پہلی چیز شامل کریں
          </button>
        </div>
      ) : isSearchActive ? (
        // Search active - flat list
        <div className="search-results-section">
          <div className="category-section">
            <div className="search-results-header">
              <h3 className="category-title-simple">
                تلاش کے نتائج ({filteredItems.length})
              </h3>
            </div>
            {filteredItems.length === 0 ? (
              <div className="no-results-message">
                <p>"{searchTerm}" کے لیے کوئی چیز نہیں ملی</p>
              </div>
            ) : (
              <div className="checklist-items open">
                {filteredItems.map(item => {
                  const isLowStock = item.quantity <= 2;
                  const isInShoppingList = pantryShoppingList.some(i => i.name === item.name);
                  return (
                    <div key={item.id} className={`checklist-item ${isLowStock ? 'low-stock-checklist' : ''}`}>
                      <span className="quantity-badge-simple">{item.quantity} {item.unit}</span>
                      <h4 className="item-name-simple">{item.name}</h4>
                      <div className="checklist-actions">
                        <button
                          className={`btn-add-item ${isInShoppingList ? 'added' : ''}`}
                          onClick={() => addToPantryShoppingList(item)}
                          disabled={isInShoppingList}
                        >
                          {isInShoppingList ? '✓ شامل ہے' : '🛒 شامل کریں'}
                        </button>
                        <button className="btn-edit-item" onClick={() => handleEdit(item)}>✏️</button>
                        <button className="btn-delete-item" onClick={() => handleDelete(item.id)}>🗑️</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        // Categories with collapse
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
                      <div key={item.id} className={`checklist-item ${isLowStock ? 'low-stock-checklist' : ''}`}>
                        <span className="quantity-badge-simple">{item.quantity} {item.unit}</span>
                        <h4 className="item-name-simple">{item.name}</h4>
                        <div className="checklist-actions">
                          <button
                            className={`btn-add-item ${isInShoppingList ? 'added' : ''}`}
                            onClick={() => addToPantryShoppingList(item)}
                            disabled={isInShoppingList}
                          >
                            {isInShoppingList ? '✓ شامل ہے' : '🛒 شامل کریں'}
                          </button>
                          <button className="btn-edit-item" onClick={() => handleEdit(item)}>✏️</button>
                          <button className="btn-delete-item" onClick={() => handleDelete(item.id)}>🗑️</button>
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

      {/* Modal for Add/Edit */}
      {showModal && (
        <div className="pantry-modal-overlay" onClick={handleCloseModal}>
          <div className="pantry-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pantry-modal-header-custom">
              <h2>{editMode ? 'چیز تبدیل کریں' : 'نئی چیز شامل کریں'}</h2>
              <button className="btn-close-modal" onClick={handleCloseModal}>×</button>
            </div>
            <div className="pantry-modal-body">
              <div className="form-group">
                <label>نام</label>
                <input
                  type="text"
                  value={currentItem.name}
                  onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                  placeholder="مثال: ٹماٹر، چاول، دودھ"
                />
              </div>
              <div className="form-group">
                <label>مقدار</label>
                <input
                  type="number"
                  value={currentItem.quantity}
                  onChange={(e) => setCurrentItem({ ...currentItem, quantity: e.target.value })}
                  placeholder="مقدار درج کریں"
                />
              </div>
              <div className="form-group">
                <label>یونٹ</label>
                <select value={currentItem.unit} onChange={(e) => setCurrentItem({ ...currentItem, unit: e.target.value })}>
                  {units.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>قسم</label>
                <select value={currentItem.category} onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="pantry-modal-footer">
              <button className="btn-modal-cancel" onClick={handleCloseModal}>منسوخ</button>
              <button className="btn-modal-add" onClick={handleSaveItem}>
                {editMode ? 'تبدیل کریں' : 'شامل کریں'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back to Home Button */}
      <div className="back-home-container">
        <button className="btn-back-home" onClick={() => navigate('/')}>
          ← ہوم پیج پر واپس
        </button>
      </div>
    </div>
  );
};

export default PantryPageUrdu;