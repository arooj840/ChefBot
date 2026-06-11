import React, { useState, useEffect } from 'react';
import './UrduCookingMethodsPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UrduCookingMethodsPage = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [cookingMethods, setCookingMethods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCookingMethods();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchCookingMethods = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5000/api/beginners-guide?category=cooking-methods');
      console.log('Fetched cooking methods:', response.data);
      
      const guides = response.data.guides || [];
      
      if (guides.length === 0) {
        setError('ڈیٹا بیس میں کوئی کھانا پکانے کا طریقہ نہیں ملا');
        setCookingMethods([]);
        setLoading(false);
        return;
      }

      const methods = guides.map((guide, index) => {
        let content = {};
        
        if (typeof guide.content === 'string') {
          try {
            if (guide.content.trim().startsWith('{')) {
              content = JSON.parse(guide.content);
            } else {
              content = { fullDesc: guide.content };
            }
          } catch (e) {
            console.error('Parse error for', guide.title, e);
            content = { fullDesc: guide.content };
          }
        } else if (typeof guide.content === 'object' && guide.content !== null) {
          content = guide.content;
        }

        return {
          id: guide._id || index + 1,
          name: guide.title,
          tagline: content.tagline || guide.title,
          fullDesc: content.fullDesc || content || `${guide.title} کے بارے میں سیکھیں`,
          keyUses: content.keyUses || ['عام کھانا پکانا'],
          previewImg: guide.image || `${guide.title.replace(/\s/g, '')}Method.png`,
          temperature: content.temperature || 'مختلف',
          equipment: content.equipment || 'معیاری برتن',
          bestFor: content.bestFor || 'مختلف پکوان',
          tips: content.tips || ['ترکیب کی ہدایات پر عمل کریں', 'پرفیکشن کے لیے مشق کریں'],
          steps: content.steps || [
            'اجزاء تیار کریں',
            'برتن گرم کریں',
            'اجزاء شامل کریں',
            'پکنے تک پکائیں',
            'گرم پیش کریں'
          ]
        };
      });

      setCookingMethods(methods);
    } catch (err) {
      console.error('API Error:', err);
      setError('سرور سے ڈیٹا لوڈ کرنے میں ناکامی۔ براہ کرم اپنا کنیکشن چیک کریں۔');
      setCookingMethods([]);
    } finally {
      setLoading(false);
    }
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setShowDetailPanel(true);
    setSidebarOpen(false);
  };

  const closeDetailPanel = () => {
    setShowDetailPanel(false);
    setSelectedMethod(null);
  };

  const getMethodCardClass = (name = '') => {
    const n = name.toLowerCase();
    if (n.includes('boil')) return 'boiling';
    if (n.includes('simmer')) return 'simmering';
    if (n.includes('steam')) return 'steaming';
    if (n.includes('sauté') || n.includes('saute')) return 'sauteing';
    if (n.includes('pan-fry') || n.includes('pan fry')) return 'pan-frying';
    if (n.includes('deep-fry') || n.includes('deep fry')) return 'deep-frying';
    if (n.includes('bak')) return 'baking';
    if (n.includes('roast')) return 'roasting';
    if (n.includes('grill')) return 'grilling';
    if (n.includes('broil')) return 'broiling';
    if (n.includes('brais')) return 'braising';
    if (n.includes('stew')) return 'stewing';
    return '';
  };

  const getHeatType = (desc = '') =>
    desc.toLowerCase().includes('moist') ? 'گیلی گرمی' : 'خشک گرمی';

  // SVG Icons
  const ThermometerIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const LightbulbIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 19.5H14.5M9.5 21.5H14.5M12 2.5C8.5 2.5 5.5 5.2 5.5 9C5.5 11.5 7 13.5 8.5 15C9.5 16 10 17 10 18H14C14 17 14.5 16 15.5 15C17 13.5 18.5 11.5 18.5 9C18.5 5.2 15.5 2.5 12 2.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );

  const FlameIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C12 2 8 7 8 12a4 4 0 008 0c0-2-1-4-1-4s2 1.5 2 4a6 6 0 01-12 0C5 8 9 3 12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 14c0-2 1-3.5 1-3.5s1 1.5 1 3.5a2 2 0 01-4 0c0-1.5 1-3 2-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );

  const PotIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 8h12l-1.5 9H7.5L6 8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 8h16M9 8V6a1 1 0 011-1h4a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M3 8h1M20 8h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const TargetIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
    </svg>
  );

  const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const WrenchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const tipIcons = [<LightbulbIcon />, <FlameIcon />, <PotIcon />, <TargetIcon />, <CheckIcon />, <LightbulbIcon />];

  // Loading state
  if (loading) {
    return (
      <div className="ur-cmp-container">
        <div className="ur-loading-spinner">ڈیٹا بیس سے کھانا پکانے کے طریقے لوڈ ہو رہے ہیں...</div>
      </div>
    );
  }

  // Error state
  if (error && cookingMethods.length === 0) {
    return (
      <div className="ur-cmp-container">
        <div className="ur-error-message">
          <p>{error}</p>
          <button onClick={() => fetchCookingMethods()} className="ur-retry-button">
            دوبارہ کوشش کریں
          </button>
        </div>
      </div>
    );
  }

  // Render
  return (
    <div className="ur-cmp-container" dir="rtl">

      {/* MOBILE TOP BAR */}
      <div className="ur-cmp-mobile-topbar">
        <button
          className={`ur-cmp-hamburger ${sidebarOpen ? 'open' : ''}`}
          onClick={() => setSidebarOpen(prev => !prev)}
          aria-label="مینو"
        >
          <span /><span /><span />
        </button>
        <h1 className="ur-cmp-page-title">کھانا پکانے کے اہم طریقے</h1>
      </div>

      {/* OVERLAY */}
      <div
        className={`ur-cmp-sidebar-overlay${sidebarOpen ? ' visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      <div className="ur-cmp-layout">

        {/* SIDEBAR */}
        <aside className={`ur-cmp-sidebar${sidebarOpen ? ' open' : ''}`}>
          <div className="ur-cmp-sidebar-header">
            <h2 className="ur-cmp-sidebar-title">کھانا پکانے کے طریقے</h2>
            <p className="ur-cmp-sidebar-subtitle">ضروری تکنیکیں</p>
          </div>
          <div className="ur-cmp-sidebar-methods">
            <ul className="ur-cmp-methods-list">
              {cookingMethods.map(method => (
                <li
                  key={method.id}
                  className={`ur-cmp-method-list-item${selectedMethod?.id === method.id ? ' ur-cmp-active' : ''}`}
                  onClick={() => handleMethodSelect(method)}
                >
                  <span className="ur-cmp-method-list-name">{method.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* MAIN */}
        <main className="ur-cmp-main">
          <header className="ur-cmp-main-header">
            <div className="ur-cmp-header-content">
              <h1 className="ur-cmp-page-title desktop-title">کھانا پکانے کے اہم طریقے</h1>
              <p className="ur-cmp-page-description">
                دنیا بھر میں اپنی کھانا پکانے کی مہارت کو بہتر بنانے کے لیے بنیادی تکنیکیں سیکھیں۔
              </p>
              {error && <p className="ur-error-note">{error}</p>}
            </div>
          </header>

          <div className="ur-cmp-methods-grid-section">
            <div className="ur-cmp-methods-grid">
              {cookingMethods.map(method => (
                <div
                  key={method.id}
                  className={`ur-cmp-method-card ${getMethodCardClass(method.name)}`}
                  onClick={() => handleMethodSelect(method)}
                >
                  <div className="ur-cmp-card-image" style={{ backgroundImage: `url(${method.previewImg})` }} />
                  <div className="ur-cmp-card-content">
                    <h3 className="ur-cmp-card-title">{method.name}</h3>
                    <p className="ur-cmp-card-description">{method.tagline}</p>
                    <div className="ur-cmp-card-heat-type">
                      <span className={`ur-cmp-heat-badge ${method.fullDesc?.toLowerCase().includes('moist') ? 'moist-heat' : 'dry-heat'}`}>
                        {getHeatType(method.fullDesc)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BACK BUTTON */}
          <div className="ur-cmp-back-section">
            <button
              className="ur-cmp-back-button"
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
      {showDetailPanel && selectedMethod && (
        <div className="ur-cmp-modal-overlay" onClick={closeDetailPanel}>
          <div className="ur-cmp-modal" onClick={e => e.stopPropagation()}>

            <button className="ur-cmp-modal-close" onClick={closeDetailPanel}>×</button>

            <div className="ur-cmp-modal-hero">
              <p className="ur-cmp-modal-hero-label">کھانا پکانے کا طریقہ</p>
              <h2 className="ur-cmp-modal-hero-title">{selectedMethod.name}</h2>
              <p className="ur-cmp-modal-hero-subtitle">{selectedMethod.tagline}</p>
            </div>

            <div className="ur-cmp-modal-inner">

              <div className="ur-cmp-modal-left">

                {/* Description */}
                <div className="ur-cmp-msec">
                  <span className="ur-cmp-msec-label">اس طریقے کے بارے میں</span>
                  <p className="ur-cmp-msec-text">{selectedMethod.fullDesc}</p>
                </div>

                <hr className="ur-cmp-mdivider" />

                {/* Key Uses + Method Details row */}
                <div className="ur-cmp-uses-details-row">

                  <div className="ur-cmp-uses-section">
                    <span className="ur-cmp-msec-label">عام استعمال</span>
                    <div className="ur-cmp-uses-wrap">
                      {selectedMethod.keyUses?.map((use, idx) => (
                        <div key={idx} className="ur-cmp-use-tag">
                          <span className="ur-cmp-use-dot">•</span>
                          {use}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="ur-cmp-details-section">
                    <span className="ur-cmp-msec-label">طریقے کی تفصیلات</span>
                    <div className="ur-cmp-detail-badges">

                      <div className="ur-cmp-detail-badge">
                        <span className="ur-cmp-detail-badge-icon"><ThermometerIcon /></span>
                        <div className="ur-cmp-detail-badge-text">
                          <span className="ur-cmp-detail-badge-label">درجہ حرارت</span>
                          <span className="ur-cmp-detail-badge-value">{selectedMethod.temperature}</span>
                        </div>
                      </div>

                      <div className="ur-cmp-detail-badge">
                        <span className="ur-cmp-detail-badge-icon"><WrenchIcon /></span>
                        <div className="ur-cmp-detail-badge-text">
                          <span className="ur-cmp-detail-badge-label">آلات</span>
                          <span className="ur-cmp-detail-badge-value">{selectedMethod.equipment}</span>
                        </div>
                      </div>

                      <div className="ur-cmp-detail-badge">
                        <span className="ur-cmp-detail-badge-icon"><TargetIcon /></span>
                        <div className="ur-cmp-detail-badge-text">
                          <span className="ur-cmp-detail-badge-label">بہترین استعمال</span>
                          <span className="ur-cmp-detail-badge-value">{selectedMethod.bestFor}</span>
                        </div>
                      </div>

                      <div className="ur-cmp-detail-badge">
                        <span className={`ur-cmp-heat-pill ${selectedMethod.fullDesc?.toLowerCase().includes('moist') ? 'moist-heat' : 'dry-heat'}`}>
                          {getHeatType(selectedMethod.fullDesc)}
                        </span>
                      </div>

                    </div>
                  </div>

                </div>

                <hr className="ur-cmp-mdivider" />

                {/* Steps + Tips two-col */}
                <div className="ur-cmp-modal-two-col">

                  <div className="ur-cmp-msec">
                    <span className="ur-cmp-msec-label">کیسے کریں</span>
                    <div className="ur-cmp-steps-list">
                      {selectedMethod.steps?.map((step, idx) => (
                        <div key={idx} className="ur-cmp-step-card">
                          <span className="ur-cmp-step-num">{idx + 1}</span>
                          <span className="ur-cmp-step-txt">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="ur-cmp-msec">
                    <span className="ur-cmp-msec-label">ماہرانہ مشورے</span>
                    <div className="ur-cmp-tips-list">
                      {selectedMethod.tips?.map((tip, idx) => (
                        <div key={idx} className="ur-cmp-tip-card">
                          <span className="ur-cmp-tip-icon">{tipIcons[idx % tipIcons.length]}</span>
                          <span className="ur-cmp-tip-txt">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              <div className="ur-cmp-modal-right">
                <div
                  className="ur-cmp-modal-right-image"
                  style={{ backgroundImage: `url(${selectedMethod.previewImg})` }}
                />
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default UrduCookingMethodsPage;