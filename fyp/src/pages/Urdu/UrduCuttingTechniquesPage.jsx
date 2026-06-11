import React, { useState, useEffect } from 'react';
import './UrduCuttingTechniquesPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UrduCuttingTechniquesPage = () => {
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [cuttingTechniques, setCuttingTechniques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCuttingTechniques();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchCuttingTechniques = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5000/api/beginners-guide?category=cutting-techniques');
      console.log('Fetched data:', response.data);
      
      const guides = response.data.guides || [];
      
      if (guides.length === 0) {
        setError('ڈیٹا بیس میں کوئی کاٹنے کی تکنیک نہیں ملی');
        setCuttingTechniques([]);
        setLoading(false);
        return;
      }

      const techniques = guides.map((guide, index) => {
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
          fullDesc: content.fullDesc || content || `سیکھیں ${guide.title} کے بارے میں`,
          keyUses: content.keyUses || ['عام کٹائی'],
          previewImg: guide.image || `${guide.title.replace(/\s/g, '')}.png`,
          knife: content.knife || "شیف کی چھری",
          tips: content.tips || ['باقاعدگی سے مشق کریں', 'چھری تیز رکھیں'],
          steps: content.steps || ['اجزاء تیار کریں', 'کاٹیں']
        };
      });

      setCuttingTechniques(techniques);
    } catch (err) {
      console.error('API Error:', err);
      setError('سرور سے ڈیٹا لوڈ کرنے میں ناکامی۔ براہ کرم اپنا کنیکشن چیک کریں۔');
      setCuttingTechniques([]);
    } finally {
      setLoading(false);
    }
  };

  const handleTechniqueSelect = (technique) => {
    setSelectedTechnique(technique);
    setShowDetailPanel(true);
    setSidebarOpen(false);
  };

  const closeDetailPanel = () => {
    setShowDetailPanel(false);
    setSelectedTechnique(null);
  };

  const getTechniqueCardClass = (name) => {
    const n = name.toLowerCase();
    if (n.includes('julienne')) return 'julienne';
    if (n.includes('brunoise')) return 'brunoise';
    if (n.includes('chiffonade')) return 'chiffonade';
    if (n.includes('dice')) return 'dice';
    if (n.includes('slice')) return 'slice';
    if (n.includes('mince')) return 'mince';
    if (n.includes('batonnet')) return 'batonnet';
    if (n.includes('tourne')) return 'tourne';
    return '';
  };

  // SVG Icons
  const KnifeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 3L18 16.5M15.5 14L19 17.5L20.5 16L17 12.5M9.5 9L12 11.5M3 21L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14.5 5.5L18.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const LightbulbIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 19.5H14.5M9.5 21.5H14.5M12 2.5C8.5 2.5 5.5 5.2 5.5 9C5.5 11.5 7 13.5 8.5 15C9.5 16 10 17 10 18H14C14 17 14.5 16 15.5 15C17 13.5 18.5 11.5 18.5 9C18.5 5.2 15.5 2.5 12 2.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );

  const ScissorsIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M8.5 7L20 18M8.5 17L20 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );

  const SharpKnifeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 4L20 19.5M14.5 14L18.5 18L20 16.5L16 12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M3 20.5L10 13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );

  const HandIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 11.5V6.5C7 5.5 7.5 5 8.5 5C9.5 5 10 5.5 10 6.5V11M10 7.5V5C10 4 10.5 3.5 11.5 3.5C12.5 3.5 13 4 13 5V9.5M13 7.5V5C13 4 13.5 3.5 14.5 3.5C15.5 3.5 16 4 16 5V10M16 8.5V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M16 10.5C17 11.5 18 13 18 15C18 18.5 16 21 12 21C8 21 7 19 6.5 17C6 15 6 13 7 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );

  const TargetIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
    </svg>
  );

  const tipIcons = [
    <LightbulbIcon />,
    <ScissorsIcon />,
    <SharpKnifeIcon />,
    <HandIcon />,
    <TargetIcon />,
    <LightbulbIcon />
  ];

  if (loading) {
    return (
      <div className="ur-ctp-container">
        <div className="ur-loading-spinner">ڈیٹا بیس سے کاٹنے کی تکنیک لوڈ ہو رہی ہے...</div>
      </div>
    );
  }

  if (error && cuttingTechniques.length === 0) {
    return (
      <div className="ur-ctp-container">
        <div className="ur-error-message">
          <p>{error}</p>
          <button onClick={() => fetchCuttingTechniques()} className="ur-retry-button">
            دوبارہ کوشش کریں
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ur-ctp-container" dir="rtl">

      {/* MOBILE TOP BAR */}
      <div className="ur-ctp-mobile-topbar">
        <button
          className={`ur-ctp-hamburger ${sidebarOpen ? 'open' : ''}`}
          onClick={() => setSidebarOpen(prev => !prev)}
          aria-label="مینو"
        >
          <span /><span /><span />
        </button>
        <h1 className="ur-ctp-page-title">کاٹنے کی اہم تکنیکیں</h1>
      </div>

      {/* OVERLAY */}
      <div
        className={`ur-ctp-sidebar-overlay${sidebarOpen ? ' visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      <div className="ur-ctp-layout">

        {/* SIDEBAR */}
        <aside className={`ur-ctp-sidebar${sidebarOpen ? ' open' : ''}`}>
          <div className="ur-ctp-sidebar-header">
            <h2 className="ur-ctp-sidebar-title">کاٹنے کی تکنیکیں</h2>
            <p className="ur-ctp-sidebar-subtitle">چھری کے ضروری ہنر</p>
          </div>
          <div className="ur-ctp-sidebar-techniques">
            <ul className="ur-ctp-techniques-list">
              {cuttingTechniques.map(technique => (
                <li
                  key={technique.id}
                  className={`ur-ctp-technique-list-item${selectedTechnique?.id === technique.id ? ' ur-ctp-active' : ''}`}
                  onClick={() => handleTechniqueSelect(technique)}
                >
                  <span className="ur-ctp-technique-list-name">{technique.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* MAIN */}
        <main className="ur-ctp-main">
          <header className="ur-ctp-main-header">
            <div className="ur-ctp-header-content">
              <h1 className="ur-ctp-page-title desktop-title">کاٹنے کی اہم تکنیکیں</h1>
              <p className="ur-ctp-page-description">
                دنیا بھر کے باورچی خانوں میں استعمال ہونے والی ان بنیادی کاٹنے کی تکنیکوں کے ساتھ پیشہ ورانہ چھری کے ہنر سیکھیں۔
              </p>
              {error && <p className="ur-error-note">{error}</p>}
            </div>
          </header>

          <div className="ur-ctp-techniques-grid-section">
            <div className="ur-ctp-techniques-grid">
              {cuttingTechniques.map(technique => (
                <div
                  key={technique.id}
                  className={`ur-ctp-technique-card ${getTechniqueCardClass(technique.name)}`}
                  onClick={() => handleTechniqueSelect(technique)}
                >
                  <div className="ur-ctp-card-image" style={{ backgroundImage: `url(${technique.previewImg})` }} />
                  <div className="ur-ctp-card-content">
                    <h3 className="ur-ctp-card-title">{technique.name}</h3>
                    <p className="ur-ctp-card-description">{technique.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BACK BUTTON */}
          <div className="ur-ctp-back-section">
            <button
              className="ur-ctp-back-button"
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
      {showDetailPanel && selectedTechnique && (
        <div className="ur-ctp-modal-overlay" onClick={closeDetailPanel}>
          <div className="ur-ctp-modal" onClick={e => e.stopPropagation()}>

            <button className="ur-ctp-modal-close" onClick={closeDetailPanel}>×</button>

            <div className="ur-ctp-modal-hero">
              <p className="ur-ctp-modal-hero-label">کاٹنے کی تکنیک</p>
              <h2 className="ur-ctp-modal-hero-title">{selectedTechnique.name}</h2>
              <p className="ur-ctp-modal-hero-subtitle">{selectedTechnique.tagline}</p>
            </div>

            <div className="ur-ctp-modal-inner">

              <div className="ur-ctp-modal-left">

                <div className="ur-ctp-msec">
                  <span className="ur-ctp-msec-label">اس تکنیک کے بارے میں</span>
                  <p className="ur-ctp-msec-text">{selectedTechnique.fullDesc}</p>
                </div>

                <hr className="ur-ctp-mdivider" />

                <div className="ur-ctp-uses-knife-row">
                  <div className="ur-ctp-uses-section">
                    <span className="ur-ctp-msec-label">عام استعمال</span>
                    <div className="ur-ctp-uses-wrap">
                      {selectedTechnique.keyUses?.map((use, idx) => (
                        <div key={idx} className="ur-ctp-use-tag">
                          <span className="ur-ctp-use-dot">•</span>
                          {use}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="ur-ctp-knife-section">
                    <span className="ur-ctp-msec-label">تجویز کردہ چھری</span>
                    <div className="ur-ctp-knife-badge">
                      <span className="ur-ctp-knife-badge-icon"><KnifeIcon /></span>
                      <span className="ur-ctp-knife-badge-value">{selectedTechnique.knife}</span>
                    </div>
                  </div>
                </div>

                <hr className="ur-ctp-mdivider" />

                <div className="ur-ctp-modal-two-col">

                  <div className="ur-ctp-msec">
                    <span className="ur-ctp-msec-label">کیسے کریں</span>
                    <div className="ur-ctp-steps-list">
                      {selectedTechnique.steps?.map((step, idx) => (
                        <div key={idx} className="ur-ctp-step-card">
                          <span className="ur-ctp-step-num">{idx + 1}</span>
                          <span className="ur-ctp-step-txt">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="ur-ctp-msec">
                    <span className="ur-ctp-msec-label">ماہرانہ مشورے</span>
                    <div className="ur-ctp-tips-list">
                      {selectedTechnique.tips?.map((tip, idx) => (
                        <div key={idx} className="ur-ctp-tip-card">
                          <span className="ur-ctp-tip-icon">{tipIcons[idx % tipIcons.length]}</span>
                          <span className="ur-ctp-tip-txt">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              <div className="ur-ctp-modal-right">
                <div
                  className="ur-ctp-modal-right-image"
                  style={{ backgroundImage: `url(${selectedTechnique.previewImg})` }}
                />
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default UrduCuttingTechniquesPage;