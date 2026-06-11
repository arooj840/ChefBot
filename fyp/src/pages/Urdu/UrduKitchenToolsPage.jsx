import React, { useState, useEffect } from 'react';
import './UrduKitchenToolsPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UrduKitchenToolsPage = () => {
  const navigate = useNavigate();

  const [selectedTool, setSelectedTool] = useState(null);
  const [cookwareTab, setCookwareTab] = useState('types');
  const [crockeryTab, setCrockeryTab] = useState('dining');
  const [servingTab, setServingTab] = useState('utensils');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // State variables
  const [kitchenEssentials, setKitchenEssentials] = useState([]);
  const [knivesData, setKnivesData] = useState([]);
  const [cuttingBoardTypes, setCuttingBoardTypes] = useState([]);
  const [mixingBowlTypes, setMixingBowlTypes] = useState([]);
  const [utensilItems, setUtensilItems] = useState([]);
  const [cookwareTypes, setCookwareTypes] = useState([]);
  const [cookwareMaterials, setCookwareMaterials] = useState([]);
  const [crockeryItems, setCrockeryItems] = useState([]);
  const [cutleryItems, setCutleryItems] = useState([]);
  
  const [servingUtensils, setServingUtensils] = useState([]);
  const [servingCutlery, setServingCutlery] = useState([]);
  const [servingBowls, setServingBowls] = useState([]);
  const [servingPlatters, setServingPlatters] = useState([]);
  const [servingGravy, setServingGravy] = useState([]);
  const [servingAccessories, setServingAccessories] = useState([]);

  // Get token from localStorage
  const getToken = () => localStorage.getItem('token');

  // Merge content helper
  const mergeContent = (guide) => {
    const content = guide.content || {};
    return {
      id: guide._id,
      image: guide.image || content.image || '',
      name: guide.title || content.name || '',
      tagline: content.tagline || '',
      fullDesc: content.fullDesc || '',
      description: content.description || '',
      keyUses: content.keyUses || [],
      bestFor: content.bestFor || '',
      type: content.type || '',
      material: content.material || '',
      price: content.price || '',
      priceRange: content.priceRange || '',
      durability: content.durability || '',
      pros: content.pros || [],
      cons: content.cons || [],
      care: content.care || '',
      size: content.size || '',
      sizes: content.sizes || '',
      capacity: content.capacity || '',
      diameter: content.diameter || '',
      length: content.length || '',
      bladeType: content.bladeType || '',
      utensilType: content.utensilType || '',
      cookwareType: content.cookwareType || '',
      crockeryType: content.crockeryType || '',
      cutleryType: content.cutleryType || '',
      servingType: content.servingType || '',
      materialType: content.materialType || '',
      category: content.category || guide.category || '',
      items: content.items || [],
      commonItems: content.commonItems || [],
      subcategory: content.subcategory || ''
    };
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);
    
    const token = getToken();
    
    if (!token) {
      console.warn('No token found, please login first');
      setError('براہ کرم باورچی خانے کے اوزار دیکھنے کے لیے لاگ ان کریں');
      setLoading(false);
      return;
    }
    
    try {
      const response = await axios.get(
        'http://localhost:5000/api/beginners-guide?mainCategory=kitchen-tools',
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      const allGuides = response.data.guides || [];
      
      console.log('Total guides fetched:', allGuides.length);
      
      const uniqueSubCategories = [...new Set(allGuides.map(g => g.subCategory))];
      console.log('Unique subCategories:', uniqueSubCategories);
      
      const essentials    = allGuides.filter(g => g.subCategory === 'essentials' || g.subCategory === 'kitchen-essentials');
      const knives        = allGuides.filter(g => g.subCategory === 'knives');
      const boards        = allGuides.filter(g => g.subCategory === 'cutting-boards');
      const bowls         = allGuides.filter(g => g.subCategory === 'mixing-bowls');
      const utensils      = allGuides.filter(g => g.subCategory === 'utensils');
      const cookware      = allGuides.filter(g => g.subCategory === 'cookware');
      const cookwareMat   = allGuides.filter(g => g.subCategory === 'cookware-materials');
      const crockery      = allGuides.filter(g => g.subCategory === 'crockery');
      const cutlery       = allGuides.filter(g => g.subCategory === 'cutlery');
      const servingware   = allGuides.filter(g => g.subCategory === 'servingware');
      
      setKitchenEssentials(essentials.map(mergeContent));
      setKnivesData(knives.map(mergeContent));
      setCuttingBoardTypes(boards.map(mergeContent));
      setMixingBowlTypes(bowls.map(mergeContent));
      setUtensilItems(utensils.map(mergeContent));
      setCookwareTypes(cookware.map(mergeContent));
      setCookwareMaterials(cookwareMat.map(mergeContent));
      setCrockeryItems(crockery.map(mergeContent));
      setCutleryItems(cutlery.map(mergeContent));
      
      const servingUtensilsData = servingware.filter(g => 
        g.content?.subcategory === 'utensils' || 
        g.title?.toLowerCase().includes('utensils')
      ).map(mergeContent);
      
      const servingCutleryData = servingware.filter(g => 
        g.content?.subcategory === 'cutlery' || 
        g.title?.toLowerCase().includes('cutlery set')
      ).map(mergeContent);
      
      const servingBowlsData = servingware.filter(g => 
        g.content?.subcategory === 'bowls' || 
        g.title?.toLowerCase().includes('bowls')
      ).map(mergeContent);
      
      const servingPlattersData = servingware.filter(g => 
        g.content?.subcategory === 'platters-and-trays' || 
        g.title?.toLowerCase().includes('platters')
      ).map(mergeContent);
      
      const servingGravyData = servingware.filter(g => 
        g.content?.subcategory === 'gravy-and-sauceware' || 
        g.title?.toLowerCase().includes('gravy')
      ).map(mergeContent);
      
      const servingAccessoriesData = servingware.filter(g => 
        g.content?.subcategory === 'accessories' || 
        g.title?.toLowerCase().includes('accessories')
      ).map(mergeContent);
      
      setServingUtensils(servingUtensilsData);
      setServingCutlery(servingCutleryData);
      setServingBowls(servingBowlsData);
      setServingPlatters(servingPlattersData);
      setServingGravy(servingGravyData);
      setServingAccessories(servingAccessoriesData);
      
      if (essentials.length > 0 && !selectedTool) {
        setSelectedTool(mergeContent(essentials[0]));
      } else if (knives.length > 0 && !selectedTool) {
        setSelectedTool({ id: 'knives', name: 'چھریاں', isCategory: true });
      }
      
    } catch (err) {
      console.error('Error fetching data:', err);
      if (err.response?.status === 401) {
        setError('آپ کا سیشن ختم ہو گیا۔ براہ کرم دوبارہ لاگ ان کریں۔');
      } else {
        setError('باورچی خانے کے اوزار لوڈ کرنے میں ناکامی۔ براہ کرم دوبارہ کوشش کریں۔');
      }
    } finally {
      setLoading(false);
    }
  };

  const getCurrentItems = () => {
    if (!selectedTool) return [];
    
    const name = selectedTool.name;
    
    if (name === 'چھریاں') return knivesData;
    if (name === 'کاٹنے کے بورڈ') return cuttingBoardTypes;
    if (name === 'ملانے والے پیالے') return mixingBowlTypes;
    if (name === 'برتن') return utensilItems;
    if (name === 'کراکری') return getFilteredCrockery();
    if (name === 'کٹلری') return cutleryItems;
    if (name === 'کک ویئر') {
      return cookwareTab === 'types' ? cookwareTypes : cookwareMaterials;
    }
    if (name === 'سرونگ ویئر') {
      if (servingTab === 'utensils') return servingUtensils;
      if (servingTab === 'cutlery') return servingCutlery;
      if (servingTab === 'bowls') return servingBowls;
      if (servingTab === 'platters') return servingPlatters;
      if (servingTab === 'gravy') return servingGravy;
      if (servingTab === 'accessories') return servingAccessories;
      return [];
    }
    
    return kitchenEssentials.filter(item => item.name === name);
  };

  const getFilteredCrockery = () => {
    if (crockeryTab === 'dining')
      return crockeryItems.filter(i => {
        const n = i.name?.toLowerCase() || '';
        return n.includes('plate') || n.includes('bowl') || n.includes('dinner');
      });
    if (crockeryTab === 'tea')
      return crockeryItems.filter(i => {
        const n = i.name?.toLowerCase() || '';
        return n.includes('cup') || n.includes('mug') || n.includes('tea') || n.includes('coffee');
      });
    if (crockeryTab === 'water')
      return crockeryItems.filter(i => {
        const n = i.name?.toLowerCase() || '';
        return n.includes('glass') || n.includes('water') || n.includes('jug') || n.includes('pitcher');
      });
    return crockeryItems;
  };

  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
    setSidebarOpen(false);
  };

  const handleCategorySelect = (categoryName) => {
    const selected = { id: categoryName.toLowerCase(), name: categoryName, isCategory: true };
    setSelectedTool(selected);
    setSidebarOpen(false);
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
    setSidebarOpen(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  // Loading state
  if (loading) {
    return (
      <div className="ur-ktp-container">
        <div className="ur-loading-spinner">باورچی خانے کے اوزار لوڈ ہو رہے ہیں...</div>
      </div>
    );
  }

  const currentItems = getCurrentItems();

  return (
    <div className="ur-ktp-container" dir="rtl">

      {/* MOBILE TOP BAR */}
      <div className="ur-ktp-mobile-topbar">
        <button
          className={`ur-ktp-hamburger ${sidebarOpen ? 'open' : ''}`}
          onClick={() => setSidebarOpen(prev => !prev)}
          aria-label="مینو"
        >
          <span /><span /><span />
        </button>
        <h1 className="ur-ktp-page-title">باورچی خانے کے اوزار</h1>
      </div>

      {/* OVERLAY */}
      <div
        className={`ur-ktp-sidebar-overlay${sidebarOpen ? ' visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      <div className="ur-ktp-layout">

        {/* SIDEBAR */}
        <aside className={`ur-ktp-sidebar${sidebarOpen ? ' open' : ''}`}>
          <div className="ur-ktp-sidebar-header">
            <h2 className="ur-ktp-sidebar-title">باورچی خانے کے اوزار</h2>
            <p className="ur-ktp-sidebar-subtitle">ضروری سامان</p>
          </div>
          <div className="ur-ktp-sidebar-tools">
            <ul className="ur-ktp-tools-list">
              {kitchenEssentials.map(tool => (
                <li
                  key={tool.id}
                  className={`ur-ktp-tool-list-item${selectedTool?.id === tool.id ? ' ur-ktp-active' : ''}`}
                  onClick={() => handleToolSelect(tool)}
                >
                  <span className="ur-ktp-tool-list-name">{tool.name}</span>
                </li>
              ))}
              
              {kitchenEssentials.length > 0 && <li className="ur-ktp-tool-list-divider">اقسام</li>}
              
              {['چھریاں', 'کاٹنے کے بورڈ', 'ملانے والے پیالے', 'برتن', 'کک ویئر', 'کراکری', 'کٹلری', 'سرونگ ویئر'].map(cat => {
                let hasItems = false;
                if (cat === 'چھریاں') hasItems = knivesData.length > 0;
                else if (cat === 'کاٹنے کے بورڈ') hasItems = cuttingBoardTypes.length > 0;
                else if (cat === 'ملانے والے پیالے') hasItems = mixingBowlTypes.length > 0;
                else if (cat === 'برتن') hasItems = utensilItems.length > 0;
                else if (cat === 'کک ویئر') hasItems = cookwareTypes.length > 0;
                else if (cat === 'کراکری') hasItems = crockeryItems.length > 0;
                else if (cat === 'کٹلری') hasItems = cutleryItems.length > 0;
                else if (cat === 'سرونگ ویئر') hasItems = servingUtensils.length > 0;
                
                if (!hasItems) return null;
                
                return (
                  <li
                    key={cat}
                    className={`ur-ktp-tool-list-item${selectedTool?.name === cat ? ' ur-ktp-active' : ''}`}
                    onClick={() => handleCategorySelect(cat)}
                  >
                    <span className="ur-ktp-tool-list-name">{cat}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* MAIN */}
        <main className="ur-ktp-main">
          {error ? (
            <div className="ur-ktp-error-container">
              <div className="ur-ktp-error-icon">🔒</div>
              <h2>لاگ ان ضروری ہے</h2>
              <p>{error}</p>
              <button className="ur-ktp-login-btn" onClick={() => navigate('/urdu-login')}>
                لاگ ان کریں
              </button>
            </div>
          ) : selectedTool ? (
            <>
              <header className="ur-ktp-main-header">
                <div className="ur-ktp-header-content">
                  <h1 className="ur-ktp-page-title">{selectedTool.name}</h1>
                  <p className="ur-ktp-page-description">
                    {selectedTool.tagline || 'ہمارے باورچی خانے کے اوزار دیکھیں'}
                  </p>
                </div>
              </header>

              <div className="ur-ktp-content-area">

                {/* Cookware tabs */}
                {selectedTool.name === 'کک ویئر' && (
                  <div className="ur-ktp-tabs">
                    <button 
                      className={`ur-ktp-tab${cookwareTab === 'types' ? ' ur-ktp-tab-active' : ''}`} 
                      onClick={() => setCookwareTab('types')}
                    >
                      اقسام ({cookwareTypes.length})
                    </button>
                    <button 
                      className={`ur-ktp-tab${cookwareTab === 'materials' ? ' ur-ktp-tab-active' : ''}`} 
                      onClick={() => setCookwareTab('materials')}
                    >
                      مواد ({cookwareMaterials.length})
                    </button>
                  </div>
                )}

                {/* Crockery tabs */}
                {selectedTool.name === 'کراکری' && (
                  <div className="ur-ktp-tabs">
                    <button className={`ur-ktp-tab${crockeryTab === 'dining' ? ' ur-ktp-tab-active' : ''}`} onClick={() => setCrockeryTab('dining')}>
                      کھانے کے لیے
                    </button>
                    <button className={`ur-ktp-tab${crockeryTab === 'tea' ? ' ur-ktp-tab-active' : ''}`} onClick={() => setCrockeryTab('tea')}>
                      چائے اور کافی
                    </button>
                    <button className={`ur-ktp-tab${crockeryTab === 'water' ? ' ur-ktp-tab-active' : ''}`} onClick={() => setCrockeryTab('water')}>
                      پانی اور مشروبات
                    </button>
                  </div>
                )}

                {/* Servingware tabs */}
                {selectedTool.name === 'سرونگ ویئر' && (
                  <div className="ur-ktp-tabs">
                    <button className={`ur-ktp-tab${servingTab === 'utensils' ? ' ur-ktp-tab-active' : ''}`} onClick={() => setServingTab('utensils')}>
                      برتن ({servingUtensils.length})
                    </button>
                    <button className={`ur-ktp-tab${servingTab === 'cutlery' ? ' ur-ktp-tab-active' : ''}`} onClick={() => setServingTab('cutlery')}>
                      کٹلری ({servingCutlery.length})
                    </button>
                    <button className={`ur-ktp-tab${servingTab === 'bowls' ? ' ur-ktp-tab-active' : ''}`} onClick={() => setServingTab('bowls')}>
                      پیالے ({servingBowls.length})
                    </button>
                    <button className={`ur-ktp-tab${servingTab === 'platters' ? ' ur-ktp-tab-active' : ''}`} onClick={() => setServingTab('platters')}>
                      تھال ({servingPlatters.length})
                    </button>
                    <button className={`ur-ktp-tab${servingTab === 'gravy' ? ' ur-ktp-tab-active' : ''}`} onClick={() => setServingTab('gravy')}>
                      سالن کے برتن ({servingGravy.length})
                    </button>
                    <button className={`ur-ktp-tab${servingTab === 'accessories' ? ' ur-ktp-tab-active' : ''}`} onClick={() => setServingTab('accessories')}>
                      اضافی اشیاء ({servingAccessories.length})
                    </button>
                  </div>
                )}

                {/* Cards Grid */}
                <div className="ur-ktp-cards-grid">
                  {currentItems.length > 0 ? (
                    currentItems.map(item => (
                      <div
                        key={item.id}
                        className="ur-ktp-card"
                        onClick={() => openModal(item)}
                      >
                        <div 
                          className="ur-ktp-card-image" 
                          style={{ backgroundImage: `url(${item.image || 'https://via.placeholder.com/300x200?text=No+Image'})` }} 
                        />
                        <div className="ur-ktp-card-content">
                          <h4 className="ur-ktp-card-title">{item.name}</h4>
                          <p className="ur-ktp-card-sub">{item.tagline || item.material || item.bestFor || 'باورچی خانے کی ضروری چیز'}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="ur-ktp-empty-state">
                      <p>اس زمرے میں کوئی چیز نہیں ملی۔</p>
                      <p className="ur-ktp-empty-sub">براہ کرم بعد میں دوبارہ دیکھیں۔</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="ur-ktp-loading">لوڈ ہو رہا ہے...</div>
          )}

          {/* BACK BUTTON */}
          <div className="ur-ktp-back-section">
            <button
              className="ur-ktp-back-button"
              onClick={() => {
                try { navigate('/urdu-guidance'); }
                catch { window.location.href = '/urdu-guidance'; }
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>واپس رہنمائی پر</span>
            </button>
          </div>
        </main>
      </div>

      {/* MODAL */}
      {showModal && selectedItem && (
        <div className="ur-ktp-modal-overlay" onClick={closeModal}>
          <div className="ur-ktp-modal" onClick={e => e.stopPropagation()}>
            <button className="ur-ktp-modal-close" onClick={closeModal}>×</button>

            <div 
              className="ur-ktp-modal-hero" 
              style={{ backgroundImage: `url(${selectedItem.image || 'https://via.placeholder.com/600x300?text=No+Image'})` }}
            >
              <div className="ur-ktp-modal-hero-overlay"></div>
              <div className="ur-ktp-modal-hero-content">
                <p className="ur-ktp-modal-hero-label">باورچی خانے کا اوزار</p>
                <h2 className="ur-ktp-modal-hero-title">{selectedItem.name}</h2>
                {selectedItem.tagline && (
                  <p className="ur-ktp-modal-hero-subtitle">{selectedItem.tagline}</p>
                )}
              </div>
            </div>

            <div className="ur-ktp-modal-inner">
              <div className="ur-ktp-modal-left">
                {(selectedItem.fullDesc || selectedItem.description) && (
                  <>
                    <div className="ur-ktp-msec">
                      <span className="ur-ktp-msec-label">اس اوزار کے بارے میں</span>
                      <p className="ur-ktp-msec-text">{selectedItem.fullDesc || selectedItem.description}</p>
                    </div>
                    <hr className="ur-ktp-mdivider" />
                  </>
                )}

                {selectedItem.bestFor && (
                  <>
                    <div className="ur-ktp-msec">
                      <span className="ur-ktp-msec-label">بہترین استعمال</span>
                      <div className="ur-ktp-best-badge">{selectedItem.bestFor}</div>
                    </div>
                    <hr className="ur-ktp-mdivider" />
                  </>
                )}

                {selectedItem.keyUses?.length > 0 && (
                  <>
                    <div className="ur-ktp-msec">
                      <span className="ur-ktp-msec-label">عام استعمال</span>
                      <div className="ur-ktp-uses-wrap">
                        {selectedItem.keyUses.map((use, idx) => (
                          <div key={idx} className="ur-ktp-use-tag">• {use}</div>
                        ))}
                      </div>
                    </div>
                    <hr className="ur-ktp-mdivider" />
                  </>
                )}

                {(selectedItem.material || selectedItem.price || selectedItem.durability || selectedItem.size) && (
                  <>
                    <div className="ur-ktp-msec">
                      <span className="ur-ktp-msec-label">تفصیلات</span>
                      <div className="ur-ktp-specs-grid">
                        {selectedItem.material && <div className="ur-ktp-spec-item"><strong>مواد:</strong> {selectedItem.material}</div>}
                        {selectedItem.price && <div className="ur-ktp-spec-item"><strong>قیمت:</strong> {selectedItem.price}</div>}
                        {selectedItem.priceRange && <div className="ur-ktp-spec-item"><strong>قیمت کی حد:</strong> {selectedItem.priceRange}</div>}
                        {selectedItem.durability && <div className="ur-ktp-spec-item"><strong>پائیداری:</strong> {selectedItem.durability}</div>}
                        {selectedItem.size && <div className="ur-ktp-spec-item"><strong>سائز:</strong> {selectedItem.size}</div>}
                        {selectedItem.capacity && <div className="ur-ktp-spec-item"><strong>گنجائش:</strong> {selectedItem.capacity}</div>}
                      </div>
                    </div>
                    <hr className="ur-ktp-mdivider" />
                  </>
                )}

                {(selectedItem.pros?.length > 0 || selectedItem.cons?.length > 0) && (
                  <div className="ur-ktp-modal-two-col">
                    {selectedItem.pros?.length > 0 && (
                      <div className="ur-ktp-msec">
                        <span className="ur-ktp-msec-label">فوائد ✓</span>
                        {selectedItem.pros.map((pro, idx) => (
                          <div key={idx} className="ur-ktp-pro-card">• {pro}</div>
                        ))}
                      </div>
                    )}
                    {selectedItem.cons?.length > 0 && (
                      <div className="ur-ktp-msec">
                        <span className="ur-ktp-msec-label">نقصانات ✗</span>
                        {selectedItem.cons.map((con, idx) => (
                          <div key={idx} className="ur-ktp-con-card">• {con}</div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {selectedItem.care && (
                  <div className="ur-ktp-msec">
                    <span className="ur-ktp-msec-label">دیکھ بھال کے طریقے</span>
                    <div className="ur-ktp-care-card">🧼 {selectedItem.care}</div>
                  </div>
                )}
              </div>

              <div className="ur-ktp-modal-right">
                <div 
                  className="ur-ktp-modal-right-image" 
                  style={{ backgroundImage: `url(${selectedItem.image || 'https://via.placeholder.com/400x400?text=No+Image'})` }} 
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrduKitchenToolsPage;