import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCartPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { showToast } from '../../components/Toast';
import './UrduPantryPage.css';

const UrduPantryPage = () => {
  const [items, setItems] = useState([]);
  const [pantryShoppingList, setPantryShoppingList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showLowStockModal, setShowLowStockModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    name: '', quantity: '', unit: 'kg', category: 'Vegetables'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('سب');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [addingAll, setAddingAll] = useState(false);

  const navigate = useNavigate();

  const categories = ['سبزیاں', 'پھل', 'دودھ دہی', 'اناج', 'مصالحے', 'گوشت', 'مشروبات', 'دیگر'];
  const units = ['کلو', 'گرام', 'لیٹر', 'ملی', 'عدد', 'درجن'];

  // Unit-based thresholds (same as original, but labels in Urdu)
  const unitThreshold = {
    'کلو': 1,
    'گرام': 500,
    'لیٹر': 1,
    'ملی': 500,
    'عدد': 3,
    'درجن': 0.25
  };

  const categoryThreshold = {
    'سبزیاں': 1,
    'پھل': 1,
    'دودھ دہی': 0.5,
    'اناج': 2,
    'مصالحے': 0.2,
    'گوشت': 0.5,
    'مشروبات': 1,
    'دیگر': 0.5
  };

  const isLowStockItem = (item) => {
    if (unitThreshold[item.unit] !== undefined) {
      return item.quantity < unitThreshold[item.unit];
    }
    const catThreshold = categoryThreshold[item.category];
    if (catThreshold !== undefined) {
      return item.quantity < catThreshold;
    }
    return item.quantity <= 0.5;
  };

  const getToken = () => localStorage.getItem('token');

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
      showToast('سرور کی خرابی', 'error');
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
      if (response.ok) { setPantryShoppingList(data.items); showToast(`${item.name} شامل کر دی!`, 'success'); }
      else showToast(data.message || 'ناکام', 'error');
    } catch (err) { showToast('سرور کی خرابی', 'error'); }
  };

  const removeFromPantryShoppingList = async (id) => {
    try {
      const token = getToken();
      const response = await fetch(`http://localhost:5000/api/pantry-shopping/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (response.ok) { setPantryShoppingList(data.items); showToast('چیز ہٹا دی', 'info'); }
    } catch (err) { showToast('سرور کی خرابی', 'error'); }
  };

  const clearPantryShoppingList = async () => {
    try {
      const token = getToken();
      const response = await fetch('http://localhost:5000/api/pantry-shopping', {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (response.ok) { setPantryShoppingList([]); showToast('لسٹ صاف ہو گئی!', 'success'); }
    } catch (err) { showToast('سرور کی خرابی', 'error'); }
  };

  const addAllToShoppingAndRedirect = async () => {
    if (pantryShoppingList.length === 0) {
      showToast('کوئی چیز نہیں ہے!', 'warning');
      return;
    }
    setAddingAll(true);
    let successCount = 0;
    try {
      const token = getToken();
      if (!token) {
        showToast('براہ کرم دوبارہ لاگ ان کریں', 'error');
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
        showToast(`${successCount} چیز(یں) خریداری کی لسٹ میں شامل ہو گئی!`, 'success');
        await clearPantryShoppingList();
        navigate('/urdu-shopping'); // or '/smart-shopping'? adjust according to your Urdu shopping route
      } else {
        showToast('شامل کرنے میں ناکامی۔', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('سرور کی خرابی۔ براہ کرم دوبارہ کوشش کریں۔', 'error');
    } finally {
      setAddingAll(false);
    }
  };

  const handleSaveItem = async () => {
    if (!currentItem.name || !currentItem.quantity) { showToast('سبھی فیلڈز پُر کریں!', 'warning'); return; }
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
      if (response.ok) { setItems(data.items); handleCloseModal(); showToast(editMode ? 'بدل دیا!' : 'شامل کر دیا!', 'success'); }
      else showToast(data.message || 'ناکام', 'error');
    } catch (err) { showToast('سرور کی خرابی', 'error'); }
  };

  const handleDelete = async (id) => {
    try {
      const token = getToken();
      const response = await fetch(`http://localhost:5000/api/pantry/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (response.ok) { setItems(data.items); showToast('چیز حذف کر دی!', 'success'); }
    } catch (err) { showToast('سرور کی خرابی', 'error'); }
  };

  const handleEdit = (item) => {
    setCurrentItem({ _id: item._id, name: item.name, quantity: item.quantity, unit: item.unit, category: item.category });
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

  useEffect(() => {
    fetchPantryItems();
    fetchPantryShoppingList();
  }, []);

  const lowStockItems = items.filter(isLowStockItem);
  const isSearchActive = searchTerm.trim().length > 0;
  const allTabs = ['سب', ...categories];

  const tabItems = isSearchActive
    ? items.filter(i => i.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : activeTab === 'سب'
      ? items
      : items.filter(i => i.category === activeTab);

  const totalItems = items.length;
  const totalCategories = [...new Set(items.map(i => i.category))].length;

  if (loading) return (
    <div className="ur-pantry-page">
      <div className="ur-loading-container">
        <div className="ur-spinner"></div>
        <p>لوڈ ہو رہا ہے...</p>
      </div>
    </div>
  );

  return (
    <div className="ur-pantry-page" dir="rtl">
      {/* Hero Banner */}
      <div className="ur-fullscreen-food-image">
        <div className="ur-fullscreen-food-content">
          <h1>آپ کی سمارٹ پینٹری</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="ur-p-hero-section">
        <div className="ur-p-hero-content">
          <h1 className="ur-p-hero-title">میری پینٹری</h1>
          <p className="ur-p-hero-subtitle">اپنی پینٹری کو سنبھالو</p>
        </div>
      </div>

      {error && <div className="ur-pantry-error-message">{error}</div>}

      {/* Stats */}
      {items.length > 0 && (
        <div className="ur-stats-section">
          <div className="ur-stat-card">
            <p className="ur-stat-number">{totalItems}</p>
            <p className="ur-stat-label">کل چیزیں</p>
          </div>
          <div className="ur-stat-card ur-low-stock-card">
            <p className="ur-stat-number">{lowStockItems.length}</p>
            <p className="ur-stat-label">کم اسٹاک</p>
          </div>
          <div className="ur-stat-card">
            <p className="ur-stat-number">{totalCategories}</p>
            <p className="ur-stat-label">اقسام</p>
          </div>
        </div>
      )}

      {/* Top Controls */}
      <div className="ur-top-controls-row">
        <div className="ur-search-add-section">
          <input
            type="text"
            placeholder="چیزیں ڈھونڈو..."
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setActiveTab('سب'); }}
            className="ur-search-field-pantry"
          />
          <button className="ur-btn-add-new-item" onClick={handleAddNew}>+ نئی چیز ڈالو</button>
        </div>
        <div className="ur-alert-buttons-group">
          {lowStockItems.length > 0 && (
            <button
              className="ur-btn-low-stock-filter"
              onClick={() => setShowLowStockModal(true)}
            >
              کم اسٹاک ({lowStockItems.length})
            </button>
          )}
        </div>
      </div>

      {/* Shopping List Section */}
      <div className="ur-shopping-list-section">
        <div className="ur-shopping-list-header">
          <h3 className="ur-shopping-list-title">خریداری کی لسٹ ({pantryShoppingList.length})</h3>
          <div className="ur-shopping-list-actions">
            <button
              className="ur-btn-add-all-to-shopping"
              onClick={addAllToShoppingAndRedirect}
              disabled={addingAll || pantryShoppingList.length === 0}
            >
              {addingAll ? 'شامل ہو رہا ہے...' : 'سب کو خریداری کی لسٹ میں ڈالو'}
            </button>
            <button className="ur-btn-clear-shopping-list" onClick={clearPantryShoppingList}>
              سب صاف کرو
            </button>
          </div>
        </div>
        <div className="ur-shopping-items-list">
          {pantryShoppingList.length === 0 ? (
            <div className="ur-empty-shopping-message">
              <p>کوئی چیز نہیں۔ چیزوں پر کلک کریں شامل کرنے کے لیے۔</p>
            </div>
          ) : (
            pantryShoppingList.map(item => (
              <div key={item._id} className="ur-shopping-list-item">
                <span className="ur-quantity-badge-simple">{item.quantity} {item.unit}</span>
                <h4 className="ur-shopping-item-name">{item.name}</h4>
                <button className="ur-btn-remove-shopping-item" onClick={() => removeFromPantryShoppingList(item._id)}>
                  ہٹاؤ
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Main Content */}
      {items.length === 0 ? (
        <div className="ur-p-empty-message">
          <h4>آپ کی پینٹری خالی ہے</h4>
          <p>اپنی پینٹری میں چیزیں شامل کرنا شروع کریں!</p>
          <button className="ur-btn-add-first-item" onClick={handleAddNew}>+ پہلی چیز ڈالو</button>
        </div>
      ) : (
        <div className="ur-tabs-wrapper">
          {!isSearchActive && (
            <div className="ur-tabs-nav-bar">
              {allTabs.map(cat => {
                const count = cat === 'سب' ? items.length : items.filter(i => i.category === cat).length;
                const hasLow = cat !== 'سب' && items.some(i => i.category === cat && isLowStockItem(i));
                const isEmpty = cat !== 'سب' && count === 0;
                return (
                  <button
                    key={cat}
                    className={`ur-tab-pill-btn ${activeTab === cat ? 'active' : ''} ${isEmpty ? 'empty-tab' : ''}`}
                    onClick={() => setActiveTab(cat)}
                  >
                    {cat}
                    {hasLow && <span className="ur-tab-low-dot" title="کم اسٹاک">●</span>}
                    <span className="ur-tab-count-badge">{count}</span>
                  </button>
                );
              })}
            </div>
          )}

          {isSearchActive && (
            <div className="ur-search-results-label">
              "<strong>{searchTerm}</strong>" کے لیے نتائج — {tabItems.length} ملی
            </div>
          )}

          {tabItems.length === 0 ? (
            <div className="ur-tab-empty-state">
              {isSearchActive ? (
                <p>کوئی چیز نہیں ملی "{searchTerm}"</p>
              ) : (
                <>
                  <p className="ur-empty-cat-title">"{activeTab}" یہاں کچھ نہیں</p>
                  <p className="ur-empty-cat-sub">پہلے یہاں کچھ ڈالو</p>
                  <button className="ur-btn-add-to-cat" onClick={() => {
                    setCurrentItem({ name: '', quantity: '', unit: 'کلو', category: activeTab === 'سب' ? 'سبزیاں' : activeTab });
                    setEditMode(false);
                    setShowModal(true);
                  }}>
                     {activeTab === 'سب' ? 'چیز ڈالو' : `${activeTab} کی چیز ڈالو`}
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="ur-tab-items-grid">
              {tabItems.map(item => {
                const isLowStock = isLowStockItem(item);
                const isInShoppingList = pantryShoppingList.some(i => i.name === item.name);
                return (
                  <div key={item._id} className={`ur-tab-item-card ${isLowStock ? 'low-stock' : ''}`}>
                    <div className="ur-tab-card-top">
                      <span className={`ur-tab-qty-badge ${isLowStock ? 'low' : ''}`}>
                        {item.quantity} {item.unit}
                      </span>
                      {isLowStock && <span className="ur-low-stock-flag">کم اسٹاک</span>}
                    </div>
                    <h4 className="ur-tab-item-name">{item.name}</h4>
                    <p className="ur-tab-item-cat">{item.category}</p>
                    <div className="ur-tab-card-actions">
                      <button 
                        className={`ur-tab-btn-cart ${isInShoppingList ? 'added' : ''}`}
                        onClick={() => addToPantryShoppingList(item)}
                        disabled={isInShoppingList}
                        title="خریداری کی لسٹ میں ڈالو"
                      >
                        <FaCartPlus />
                      </button>
                      <button 
                        className="ur-tab-btn-icon edit" 
                        onClick={() => handleEdit(item)}
                        title="بدلو"
                      >
                        <FaEdit />
                      </button>
                      <button 
                        className="ur-tab-btn-icon del" 
                        onClick={() => handleDelete(item._id)}
                        title="حذف کرو"
                      >
                        <FaTrash />
                      </button>
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
        <div className="ur-pantry-modal-overlay" onClick={() => setShowLowStockModal(false)}>
          <div className="ur-pantry-modal low-stock-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ur-pantry-modal-header-custom">
              <h2>کم اسٹاک والی چیزیں</h2>
              <button className="ur-btn-close-modal" onClick={() => setShowLowStockModal(false)}>×</button>
            </div>
            <div className="ur-pantry-modal-body low-stock-modal-body">
              {lowStockItems.length === 0 ? (
                <p className="ur-low-stock-empty">کوئی کم اسٹاک چیز نہیں۔</p>
              ) : (
                <div className="ur-low-stock-modal-grid">
                  {lowStockItems.map(item => {
                    const isInShoppingList = pantryShoppingList.some(i => i.name === item.name);
                    return (
                      <div key={item._id} className="ur-low-stock-modal-card">
                        <div className="ur-modal-card-top">
                          <span className="ur-modal-qty-badge low">{item.quantity} {item.unit}</span>
                          <span className="ur-low-stock-flag-modal">کم اسٹاک</span>
                        </div>
                        <h4 className="ur-modal-item-name">{item.name}</h4>
                        <p className="ur-modal-item-cat">{item.category}</p>
                        <div className="ur-modal-card-actions">
                          <button
                            className={`ur-modal-btn-cart ${isInShoppingList ? 'added' : ''}`}
                            onClick={() => addToPantryShoppingList(item)}
                            disabled={isInShoppingList}
                            title="خریداری کی لسٹ میں ڈالو"
                          >
                            <FaCartPlus />
                          </button>
                          <button 
                            className="ur-modal-btn-icon edit" 
                            onClick={() => { handleEdit(item); setShowLowStockModal(false); }}
                            title="بدلو"
                          >
                            <FaEdit />
                          </button>
                          <button 
                            className="ur-modal-btn-icon del" 
                            onClick={() => { handleDelete(item._id); setShowLowStockModal(false); }}
                            title="مٹاؤ"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="ur-pantry-modal-footer">
              <button className="ur-btn-modal-cancel" onClick={() => setShowLowStockModal(false)}>بند کرو</button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="ur-pantry-modal-overlay" onClick={handleCloseModal}>
          <div className="ur-pantry-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ur-pantry-modal-header-custom">
              <h2>{editMode ? 'چیز بدلو' : 'نئی چیز ڈالو'}</h2>
              <button className="ur-btn-close-modal" onClick={handleCloseModal}>×</button>
            </div>
            <div className="ur-pantry-modal-body">
              <div className="ur-form-group">
                <label>نام</label>
                <input type="text" value={currentItem.name}
                  onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                  placeholder="مثلاً ٹماٹر، چاول، دودھ" />
              </div>
              <div className="ur-form-group">
                <label>قسم</label>
                <select value={currentItem.category} onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="ur-form-group">
                <label>یونٹ</label>
                <select value={currentItem.unit} onChange={(e) => setCurrentItem({ ...currentItem, unit: e.target.value })}>
                  {units.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div className="ur-form-group">
                <label>تعداد</label>
                <input type="number" step="any" value={currentItem.quantity}
                  onChange={(e) => setCurrentItem({ ...currentItem, quantity: e.target.value })}
                  placeholder="تعداد درج کریں" />
              </div>
            </div>
            <div className="ur-pantry-modal-footer">
              <button className="ur-btn-modal-cancel" onClick={handleCloseModal}>منسوخ</button>
              <button className="ur-btn-modal-add" onClick={handleSaveItem}>
                {editMode ? 'محفوظ کرو' : 'شامل کرو'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back to Home */}
      <div className="ur-back-home-container">
        <button className="ur-btn-back-home" onClick={() => navigate('/')}>واپس جائیں</button>
      </div>
    </div>
  );
};

export default UrduPantryPage;