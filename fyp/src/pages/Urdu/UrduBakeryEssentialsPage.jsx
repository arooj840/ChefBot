import React, { useState, useEffect } from 'react';
import './UrduBakeryEssentialsPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UrduBakeryEssentialsPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [activeTab, setActiveTab] = useState('tools');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [toolsData, setToolsData] = useState([]);
  const [techniquesData, setTechniquesData] = useState([]);
  const [ingredientsData, setIngredientsData] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);
  const [decoratingData, setDecoratingData] = useState([]);

  const navigate = useNavigate();
  const API_BASE_URL = 'http://localhost:5000';

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
    try {
      const categories = ['tools', 'techniques', 'ingredients', 'temperature', 'decorating'];
      
      const results = await Promise.all(
        categories.map(async (cat) => {
          try {
            const response = await axios.get(`${API_BASE_URL}/api/beginners-guide?category=${cat}`);
            return { category: cat, data: response.data.guides || [] };
          } catch (err) {
            console.error(`Error fetching ${cat}:`, err);
            return { category: cat, data: [] };
          }
        })
      );

      let hasData = false;
      results.forEach(result => {
        if (result.data.length > 0) hasData = true;
        switch (result.category) {
          case 'tools': setToolsData(result.data); break;
          case 'techniques': setTechniquesData(result.data); break;
          case 'ingredients': setIngredientsData(result.data); break;
          case 'temperature': setTemperatureData(result.data); break;
          case 'decorating': setDecoratingData(result.data); break;
          default: break;
        }
      });

      if (!hasData) {
        setError('ڈیٹا بیس میں کوئی بیکری کی معلومات نہیں ملی۔');
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('سرور سے ڈیٹا لوڈ کرنے میں ناکامی۔ براہ کرم اپنا کنیکشن چیک کریں۔');
    } finally {
      setLoading(false);
    }
  };

  const parseContent = (content) => {
    if (!content) return {};
    if (typeof content === 'object' && content !== null) return content;
    if (typeof content === 'string') {
      try { 
        return JSON.parse(content); 
      } catch(e) { 
        return { fullDesc: content, tagline: content }; 
      }
    }
    return {};
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case 'tools': return toolsData;
      case 'techniques': return techniquesData;
      case 'ingredients': return ingredientsData;
      case 'temperature': return temperatureData;
      case 'decorating': return decoratingData;
      default: return toolsData;
    }
  };

  const sidebarItems = [
    { key: 'tools', label: 'اوزار اور سامان' },
    { key: 'techniques', label: 'بیکنگ کے طریقے' },
    { key: 'ingredients', label: 'اجزاء کی رہنمائی' },
    { key: 'temperature', label: 'درجہ حرارت کنٹرول' },
    { key: 'decorating', label: 'سجاوٹ کے اوزار' },
  ];

  const getCategoryTitle = () => {
    return sidebarItems.find(s => s.key === activeTab)?.label || 'بیکری کے ضروری اوزار';
  };

  const getCategoryDescription = () => {
    switch (activeTab) {
      case 'tools': return 'پیشہ ورانہ بیکنگ کے لیے ضروری اوزار اور سامان۔';
      case 'techniques': return 'بنیادی اور جدید بیکنگ کے طریقے سیکھیں۔';
      case 'ingredients': return 'اہم بیکنگ اجزاء کی مکمل رہنمائی۔';
      case 'temperature': return 'بہترین بیکنگ کے لیے درجہ حرارت کنٹرول۔';
      case 'decorating': return 'خوبصورت کیک سجاوٹ کے اوزار اور طریقے۔';
      default: return 'ہماری جامع رہنمائی کے ساتھ پیشہ ورانہ بیکنگ سیکھیں۔';
    }
  };

  const getCardClass = (title = '') => {
    const t = title.toLowerCase();
    if (t.includes('mixer')) return 'bakery-mixer';
    if (t.includes('scale')) return 'bakery-scale';
    if (t.includes('thermometer')) return 'bakery-thermometer';
    if (t.includes('mat')) return 'bakery-mat';
    if (t.includes('scraper')) return 'bakery-scraper';
    if (t.includes('blender')) return 'bakery-blender';
    if (t.includes('turntable')) return 'bakery-turntable';
    if (t.includes('basket')) return 'bakery-basket';
    if (t.includes('lamination')) return 'bakery-lamination';
    if (t.includes('proofing')) return 'bakery-proofing';
    if (t.includes('flour')) return 'bakery-flour';
    if (t.includes('yeast')) return 'bakery-yeast';
    if (t.includes('oven')) return 'bakery-oven';
    if (t.includes('piping')) return 'bakery-piping';
    return '';
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setShowDetailPanel(true);
    setSidebarOpen(false);
  };

  const closeDetailPanel = () => {
    setShowDetailPanel(false);
    setSelectedItem(null);
  };

  // SVG Icons
  const BakeryIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.5 2 5.5 4.5 5.5 8C5.5 10 6.5 11.5 8 12.5V14H16V12.5C17.5 11.5 18.5 10 18.5 8C18.5 4.5 15.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 14V19C8 20.1 8.9 21 10 21H14C15.1 21 16 20.1 16 19V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 17H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const LightbulbIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 19.5H14.5M9.5 21.5H14.5M12 2.5C8.5 2.5 5.5 5.2 5.5 9C5.5 11.5 7 13.5 8.5 15C9.5 16 10 17 10 18H14C14 17 14.5 16 15.5 15C17 13.5 18.5 11.5 18.5 9C18.5 5.2 15.5 2.5 12 2.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );

  const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const WarningIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 9V13M12 17H12.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );

  const tipIcons = [<LightbulbIcon />, <CheckIcon />, <WarningIcon />, <LightbulbIcon />, <CheckIcon />, <WarningIcon />];

  if (loading) {
    return (
      <div className="ur-bep-container">
        <div className="ur-loading-spinner">بیکری کے ضروری اوزار لوڈ ہو رہے ہیں...</div>
      </div>
    );
  }

  if (error && getCurrentData().length === 0) {
    return (
      <div className="ur-bep-container">
        <div className="ur-error-message">
          <p>{error}</p>
          <button onClick={() => fetchAllData()} className="ur-retry-button">
            دوبارہ کوشش کریں
          </button>
        </div>
      </div>
    );
  }

  const currentData = getCurrentData();

  return (
    <div className="ur-bep-container" dir="rtl">

      {/* MOBILE TOP BAR */}
      <div className="ur-bep-mobile-topbar">
        <button
          className={`ur-bep-hamburger ${sidebarOpen ? 'open' : ''}`}
          onClick={() => setSidebarOpen(prev => !prev)}
          aria-label="مینو"
        >
          <span /><span /><span />
        </button>
        <h1 className="ur-bep-page-title">{getCategoryTitle()}</h1>
      </div>

      {/* OVERLAY */}
      <div
        className={`ur-bep-sidebar-overlay${sidebarOpen ? ' visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      <div className="ur-bep-layout">

        {/* SIDEBAR */}
        <aside className={`ur-bep-sidebar${sidebarOpen ? ' open' : ''}`}>
          <div className="ur-bep-sidebar-header">
            <h2 className="ur-bep-sidebar-title">بیکری کے ضروری اوزار</h2>
            <p className="ur-bep-sidebar-subtitle">پیشہ ورانہ بیکنگ سیکھیں</p>
          </div>
          <div className="ur-bep-sidebar-categories">
            <ul className="ur-bep-categories-list">
              {sidebarItems.map(item => (
                <li
                  key={item.key}
                  className={`ur-bep-category-item${activeTab === item.key ? ' ur-bep-active' : ''}`}
                  onClick={() => { setActiveTab(item.key); setSidebarOpen(false); }}
                >
                  <span className="ur-bep-category-name">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* MAIN */}
        <main className="ur-bep-main">
          <header className="ur-bep-main-header">
            <div className="ur-bep-header-content">
              <h1 className="ur-bep-page-title desktop-title">{getCategoryTitle()}</h1>
              <p className="ur-bep-page-description">{getCategoryDescription()}</p>
              {error && <p className="ur-error-note">{error}</p>}
            </div>
          </header>

          <div className="ur-bep-items-grid-section">
            <div className="ur-bep-items-grid">
              {currentData.map((item, index) => {
                const content = parseContent(item.content);
                return (
                  <div
                    key={item._id || index}
                    className={`ur-bep-item-card ${getCardClass(item.title)}`}
                    onClick={() => handleItemSelect(item)}
                  >
                    <div className="ur-bep-card-image" style={{ backgroundImage: `url(${item.image || '/api/placeholder/120/120'})` }} />
                    <div className="ur-bep-card-content">
                      <h3 className="ur-bep-card-title">{item.title}</h3>
                      <p className="ur-bep-card-description">{content.tagline || item.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BACK BUTTON */}
          <div className="ur-bep-back-section">
            <button
              className="ur-bep-back-button"
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
      {showDetailPanel && selectedItem && (() => {
        const content = parseContent(selectedItem.content);
        return (
          <div className="ur-bep-modal-overlay" onClick={closeDetailPanel}>
            <div className="ur-bep-modal" onClick={e => e.stopPropagation()}>

              <button className="ur-bep-modal-close" onClick={closeDetailPanel}>×</button>

              <div className="ur-bep-modal-hero">
                <p className="ur-bep-modal-hero-label">بیکری کا ضروری اوزار</p>
                <h2 className="ur-bep-modal-hero-title">{selectedItem.title}</h2>
                <p className="ur-bep-modal-hero-subtitle">{content.tagline || selectedItem.title}</p>
              </div>

              <div className="ur-bep-modal-inner">

                <div className="ur-bep-modal-left">

                  <div className="ur-bep-msec">
                    <span className="ur-bep-msec-label">اس اوزار کے بارے میں</span>
                    <p className="ur-bep-msec-text">{content.fullDesc || content.tagline || selectedItem.title}</p>
                  </div>

                  <hr className="ur-bep-mdivider" />

                  {content.keyFeatures && content.keyFeatures.length > 0 && (
                    <>
                      <div className="ur-bep-uses-badge-row">
                        <div className="ur-bep-uses-section">
                          <span className="ur-bep-msec-label">اہم خصوصیات</span>
                          <div className="ur-bep-uses-wrap">
                            {content.keyFeatures.map((f, idx) => (
                              <div key={idx} className="ur-bep-use-tag">
                                <span className="ur-bep-use-dot">•</span>
                                {f}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="ur-bep-badge-section">
                          <span className="ur-bep-msec-label">قسم</span>
                          <div className="ur-bep-category-badge">
                            <span className="ur-bep-category-badge-icon"><BakeryIcon /></span>
                            <span className="ur-bep-category-badge-value">{getCategoryTitle()}</span>
                          </div>
                        </div>
                      </div>
                      <hr className="ur-bep-mdivider" />
                    </>
                  )}

                  <div className="ur-bep-modal-two-col">

                    {content.steps && content.steps.length > 0 && (
                      <div className="ur-bep-msec">
                        <span className="ur-bep-msec-label">کیسے استعمال کریں</span>
                        <div className="ur-bep-steps-list">
                          {content.steps.map((step, idx) => (
                            <div key={idx} className="ur-bep-step-card">
                              <span className="ur-bep-step-num">{idx + 1}</span>
                              <span className="ur-bep-step-txt">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {content.properUsage && content.properUsage.length > 0 && (
                      <div className="ur-bep-msec">
                        <span className="ur-bep-msec-label">صحیح استعمال</span>
                        <div className="ur-bep-tips-list">
                          {content.properUsage.map((tip, idx) => (
                            <div key={idx} className="ur-bep-tip-card">
                              <span className="ur-bep-tip-icon">{tipIcons[idx % tipIcons.length]}</span>
                              <span className="ur-bep-tip-txt">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  {content.commonMistakes && content.commonMistakes.length > 0 && (
                    <>
                      <hr className="ur-bep-mdivider" />
                      <div className="ur-bep-msec">
                        <span className="ur-bep-msec-label">عام غلطیاں جن سے بچیں</span>
                        <div className="ur-bep-mistakes-list">
                          {content.commonMistakes.map((m, idx) => (
                            <div key={idx} className="ur-bep-mistake-card">
                              <span className="ur-bep-mistake-icon"><WarningIcon /></span>
                              <span className="ur-bep-tip-txt">{m}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {content.tips && (
                    <>
                      <hr className="ur-bep-mdivider" />
                      <div className="ur-bep-msec">
                        <span className="ur-bep-msec-label">ماہرانہ مشورے</span>
                        <div className="ur-bep-tip-card">
                          <span className="ur-bep-tip-icon"><LightbulbIcon /></span>
                          <span className="ur-bep-tip-txt">{content.tips}</span>
                        </div>
                      </div>
                    </>
                  )}

                </div>

                <div className="ur-bep-modal-right">
                  <div
                    className="ur-bep-modal-right-image"
                    style={{ backgroundImage: `url(${selectedItem.image || '/api/placeholder/400/400'})` }}
                  />
                </div>

              </div>
            </div>
          </div>
        );
      })()}

    </div>
  );
};

export default UrduBakeryEssentialsPage;