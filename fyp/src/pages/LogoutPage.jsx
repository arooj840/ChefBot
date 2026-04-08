import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogoutPage.css';

const LogoutPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    try {
      const token = localStorage.getItem('token');

      // Call backend logout API if token exists
      if (token) {
        await fetch('http://localhost:5000/api/auth/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
      }

      // Clear local storage
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      setLoading(false);
      setShowModal(false);
      
      // Show success message and redirect
      setTimeout(() => {
        navigate('/login-page');
      }, 500);

    } catch (err) {
      console.error('Logout error:', err);
      // Still clear local storage even if API fails
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setLoading(false);
      setShowModal(false);
      
      setTimeout(() => {
        navigate('/login-page');
      }, 500);
    }
  };

  return (
    <div className="logout-page-wrapper">
      <div className="logout-page-container">
        {/* LEFT PANEL */}
        <div className="logout-left-panel">
          <div className="logout-logo-container">
            <div className="logout-logo-circle">
              <img src="/logo.png" alt="ChefBot Logo" className="logout-logo-img" />
            </div>
            <div className="logout-logo-text">
              <h1>ChefBot</h1>
              <p>Your AI Cooking Assistant</p>
            </div>
          </div>
          
          <div className="logout-content">
            <div className="logout-icon">
              <i className="fas fa-sign-out-alt"></i>
            </div>
            <h2>Ready to Leave?</h2>
            <p>You are about to logout from your ChefBot account.</p>
            <p className="logout-note">You can always log back in anytime!</p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="logout-right-panel">
          <div className="logout-buttons">
            <button 
              className="logout-cancel-btn"
              onClick={() => navigate('/home')}
            >
              <i className="fas fa-arrow-left"></i> Stay Logged In
            </button>
            <button 
              className="logout-confirm-btn"
              onClick={() => setShowModal(true)}
            >
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="logout-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="logout-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="logout-modal-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to logout from ChefBot?</p>
            <div className="logout-modal-buttons">
              <button 
                className="logout-modal-cancel"
                onClick={() => setShowModal(false)}
                disabled={loading}
              >
                Cancel
              </button>
              <button 
                className="logout-modal-confirm"
                onClick={handleLogout}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Logging out...
                  </>
                ) : (
                  <>
                    <i className="fas fa-sign-out-alt"></i> Yes, Logout
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

export default LogoutPage;