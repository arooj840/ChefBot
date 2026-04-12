import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ShoppingList.css'; // wohi CSS jo pehle use kar rahe the (copy karna ya path sahi karna)

const ShoppingListUrdu = () => {
  const navigate = useNavigate();

  // State
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    name: '',
    quantity: '',
    unit: 'عدد',
    category: 'اشیا'
  });
  const [searchTerm, setSearchTerm] = useState('');

  // Categories and Units (Urdu)
  const categories = ['اشیا', 'سبزیاں', 'پھل', 'دہی دودھ', 'گوشت', 'مشروبات', 'سنیکس', 'گھریلو', 'دیگر'];
  const units = ['عدد', 'کلو', 'گرام', 'لیٹر', 'ملی لیٹر', 'درجن', 'پیکٹ', 'بوتلیں'];

  // LocalStorage key
  const STORAGE_KEY = 'shoppingListUrdu';

  // Load data from localStorage on mount
  useEffect(() => {
    const savedItems = localStorage.getItem(STORAGE_KEY);
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  // Helper: Show message
  const showMessage = (msg, type = 'info') => {
    alert(msg);
  };

  // WhatsApp share function (same as original, no backend)
  const shareOnWhatsApp = () => {
    if (items.length === 0) {
      showMessage('شیئر کرنے کے لیے کوئی چیز نہیں!', 'warning');
      return;
    }

    let message = "🛒 *میری خریداری کی فہرست* 🛒\n";
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
    message += `📊 کل اشیاء: ${items.length}\n`;
    message += `📅 ${new Date().toLocaleDateString()}\n`;
    message += `📍 شیف بوٹ - سمارٹ باورچی خانہ\n`;
    message += "─────────────────\n";
    message += "✅ خریداری مبارک! 🛒";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Save item (add/edit)
  const handleSaveItem = () => {
    if (!currentItem.name || !currentItem.quantity) {
      showMessage('براہ کرم نام اور مقدار بھریں!', 'warning');
      return;
    }

    if (editMode) {
      setItems(items.map(item =>
        item.id === currentItem.id ? { ...currentItem, quantity: parseInt(currentItem.quantity) } : item
      ));
      showMessage('چیز تبدیل ہو گئی!', 'success');
    } else {
      const newItem = {
        id: Date.now(),
        name: currentItem.name,
        quantity: parseInt(currentItem.quantity),
        unit: currentItem.unit,
        category: currentItem.category,
        purchased: false
      };
      setItems([...items, newItem]);
      showMessage('چیز شامل ہو گئی!', 'success');
    }
    handleCloseModal();
  };

  // Mark as purchased (delete item)
  const markAsPurchased = (id) => {
    if (window.confirm('کیا آپ نے یہ چیز خرید لی؟ یہ فہرست سے ہٹ جائے گی۔')) {
      setItems(items.filter(item => item.id !== id));
      showMessage('چیز خریدی گئی! فہرست سے ہٹا دی گئی۔', 'success');
    }
  };

  // Delete item - updated with simple Urdu
  const handleDelete = (id) => {
    if (window.confirm('کیا آپ یہ چیز مٹانا چاہتے ہیں؟')) {   // "حذف" -> "مٹانا"
      setItems(items.filter(item => item.id !== id));
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
    setCurrentItem({ name: '', quantity: '', unit: 'عدد', category: 'اشیا' });
    setEditMode(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditMode(false);
    setCurrentItem({ name: '', quantity: '', unit: 'عدد', category: 'اشیا' });
  };

  // Filter items
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = items.length;
  const purchasedItems = items.filter(item => item.purchased).length;
  const pendingItems = totalItems - purchasedItems;

  return (
    <div className="shopping-page">
      {/* Full screen image */}
      <div className="shopping-fullscreen-food-image">
        <div className="shopping-fullscreen-food-content">
          <h1>آپ کی سمارٹ خریداری فہرست</h1>
          <p>خریداری کی اشیاء کو ٹریک کریں</p>
        </div>
      </div>

      {/* Hero section - updated "منظم" to "ترتیب دیں" */}
      <div className="shopping-hero-section">
        <div className="shopping-hero-content">
          <h1 className="shopping-hero-title">میری خریداری کی فہرست</h1>
          <p className="shopping-hero-subtitle">اشیاء کو ترتیب دیں</p>   {/* منظم -> ترتیب دیں */}
        </div>
      </div>

      {/* Stats */}
      {items.length > 0 && (
        <div className="shopping-stats-section">
          <div className="shopping-stat-card">
            <p className="shopping-stat-number">{totalItems}</p>
            <p className="shopping-stat-label">کل اشیاء</p>
          </div>
          <div className="shopping-stat-card">
            <p className="shopping-stat-number">{pendingItems}</p>
            <p className="shopping-stat-label">باقی</p>
          </div>
          <div className="shopping-stat-card shopping-low-stock-card">
            <p className="shopping-stat-number">{purchasedItems}</p>
            <p className="shopping-stat-label">خرید شدہ</p>
          </div>
        </div>
      )}

      {/* Search + Add */}
      <div className="shopping-search-add-section">
        <input
          type="text"
          placeholder="اشیاء تلاش کریں..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="shopping-search-field"
        />
        <button className="shopping-btn-primary-custom" onClick={handleAddNew}>
          + نئی چیز شامل کریں
        </button>
      </div>

      {/* WhatsApp Share Button */}
      <div className="whatsapp-share-container">
        <button className="btn-whatsapp-share" onClick={shareOnWhatsApp}>
          📱 واٹس ایپ پر شیئر کریں
        </button>
      </div>

      {/* Main Shopping List */}
      {items.length === 0 ? (
        <div className="shopping-empty-message">
          <h4>آپ کی خریداری فہرست خالی ہے</h4>
          <p>اشیاء شامل کرنا شروع کریں!</p>
          <button className="shopping-btn-primary-custom" onClick={handleAddNew}>
            + پہلی چیز شامل کریں
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
                    <div key={item.id} className="shopping-checklist-item">
                      <span className="shopping-quantity-badge-simple">{item.quantity} {item.unit}</span>
                      <h4 className="shopping-item-name-simple">
                        {item.name}
                        {item.fromPantry && <span className="from-pantry-badge"> (پینٹری سے)</span>}
                      </h4>
                      <div className="shopping-checklist-actions">
                        <button
                          className="shopping-purchase-btn"
                          onClick={() => markAsPurchased(item.id)}
                          title="خرید شدہ"
                        >
                          ✓
                        </button>
                        <button
                          className="shopping-edit-action-btn"
                          onClick={() => handleEdit(item)}
                          title="تبدیل کریں"
                        >
                          ✏️
                        </button>
                        <button
                          className="shopping-delete-action-btn"
                          onClick={() => handleDelete(item.id)}
                          title="مٹائیں"
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

      {/* Modal for Add/Edit */}
      {showModal && (
        <div className="shopping-modal-overlay" onClick={handleCloseModal}>
          <div className="shopping-modal" onClick={(e) => e.stopPropagation()}>
            <div className="shopping-modal-header-custom">
              <h2>{editMode ? 'چیز تبدیل کریں' : 'نئی چیز شامل کریں'}</h2>
              <button className="shopping-btn-close" onClick={handleCloseModal}>×</button>
            </div>
            <div className="shopping-modal-body">
              <div className="shopping-form-group">
                <label>چیز کا نام</label>
                <input
                  type="text"
                  placeholder="مثال: دودھ، سیب، روٹی"
                  value={currentItem.name}
                  onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                />
              </div>
              <div className="shopping-form-group">
                <label>مقدار</label>
                <input
                  type="number"
                  placeholder="مثال: 2، 0.5، 10"
                  value={currentItem.quantity}
                  onChange={(e) => setCurrentItem({ ...currentItem, quantity: e.target.value })}
                />
              </div>
              <div className="shopping-form-group">
                <label>یونٹ</label>
                <select value={currentItem.unit} onChange={(e) => setCurrentItem({ ...currentItem, unit: e.target.value })}>
                  {units.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div className="shopping-form-group">
                <label>قسم</label>
                <select value={currentItem.category} onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="shopping-modal-footer">
              <button className="shopping-btn-outline-custom" onClick={handleCloseModal}>منسوخ</button>
              <button className="shopping-btn-primary-custom" onClick={handleSaveItem}>
                {editMode ? 'تبدیل کریں' : 'فہرست میں شامل کریں'}
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

export default ShoppingListUrdu;