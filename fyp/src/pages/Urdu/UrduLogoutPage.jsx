import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UrduLogoutPage.css';

const UrduLogoutPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    try {
      const token = localStorage.getItem('token');

      if (token) {
        await fetch('http://localhost:5000/api/auth/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
      }

      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('userLanguage');

      setLoading(false);
      setShowModal(false);
      
      setTimeout(() => {
        navigate('/urdu-login');
      }, 500);

    } catch (err) {
      console.error('Logout error:', err);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('userLanguage');
      setLoading(false);
      setShowModal(false);
      
      setTimeout(() => {
        navigate('/urdu-login');
      }, 500);
    }
  };

  return (
    <div className="ur-logout-page-wrapper" dir="rtl">
      <div className="ur-logout-page-container">
        {/* LEFT PANEL */}
        <div className="ur-logout-left-panel">
          <div className="ur-logout-logo-container">
            <div className="ur-logout-logo-circle">
              <img src="/logo.png" alt="ChefBot Logo" className="ur-logout-logo-img" />
            </div>
            <div className="ur-logout-logo-text">
              <h1>شیف بوٹ</h1>
              <p>تمہارا AI کچن مددگار</p>
            </div>
          </div>
          
          <div className="ur-logout-content">
            <div className="ur-logout-icon">
              <i className="fas fa-sign-out-alt"></i>
            </div>
            <h2>جا رہے ہو؟</h2>
            <p>تم اپنے شیف بوٹ اکاؤنٹ سے لاگ آؤٹ کرنے والے ہو۔</p>
            <p className="ur-logout-note">تم کسی بھی وقت واپس آ سکتے ہو!</p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="ur-logout-right-panel">
          <div className="ur-logout-buttons">
            <button 
              className="ur-logout-cancel-btn"
              onClick={() => navigate('/urdu-home')}
            >
              <i className="fas fa-arrow-right"></i> لاگ ان رہو
            </button>
            <button 
              className="ur-logout-confirm-btn"
              onClick={() => setShowModal(true)}
            >
              <i className="fas fa-sign-out-alt"></i> لاگ آؤٹ
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="ur-logout-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="ur-logout-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="ur-logout-modal-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <h3>پکی بات؟</h3>
            <p>کیا تم واقعی لاگ آؤٹ کرنا چاہتے ہو؟</p>
            <div className="ur-logout-modal-buttons">
              <button 
                className="ur-logout-modal-cancel"
                onClick={() => setShowModal(false)}
                disabled={loading}
              >
                ہاں، لاگ آؤٹ
              </button>
              <button 
                className="ur-logout-modal-confirm"
                onClick={handleLogout}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> لاگ آؤٹ ہو رہا ہے...
                  </>
                ) : (
                  <>
                    <i className="fas fa-sign-out-alt"></i> ہاں، لاگ آؤٹ
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrduLogoutPage;