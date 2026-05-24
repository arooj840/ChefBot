import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useLanguage } from '../../context/LanguageContext';
import UrduAlarmModal from './UrduAlarmModal';
import './UrduHeader.css';

const UrduHeader = ({ onSettingsClick }) => {
  const { user } = useAuth();
  const { language, toggleLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [isAlarmModalOpen, setIsAlarmModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [showLang, setShowLang] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/urdu-meal-suggestion?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const openAlarmModal = () => {
    if (!user) {
      navigate('/urdu-login');
      return;
    }
    setIsAlarmModalOpen(true);
  };

  const closeAlarmModal = () => {
    setIsAlarmModalOpen(false);
  };

  const openSettings = () => {
    if (!user) {
      navigate('/urdu-login');
      return;
    }
    if (onSettingsClick) {
      onSettingsClick();
    }
  };

  const changeLanguage = (lang) => {
    setShowLang(false);
    toggleLanguage(lang);
    
    const currentPath = location.pathname;
    
    if (lang === 'ur') {
      let urduPath = currentPath;
      if (currentPath === '/') urduPath = '/urdu';
      else if (currentPath === '/home') urduPath = '/urdu-home';
      else if (currentPath === '/smart-pantry') urduPath = '/smart-pantry-urdu';
      else if (currentPath === '/smart-shopping') urduPath = '/smart-shopping-urdu';
      else if (currentPath === '/meal-planner') urduPath = '/smart-planner-urdu';
      else if (currentPath === '/meal-suggestion') urduPath = '/urdu-meal-suggestion';
      navigate(urduPath);
    } else {
      let englishPath = currentPath;
      if (currentPath === '/urdu') englishPath = '/';
      else if (currentPath === '/urdu-home') englishPath = '/home';
      else if (currentPath === '/smart-pantry-urdu') englishPath = '/smart-pantry';
      else if (currentPath === '/smart-shopping-urdu') englishPath = '/smart-shopping';
      else if (currentPath === '/smart-planner-urdu') englishPath = '/meal-planner';
      else if (currentPath === '/urdu-meal-suggestion') englishPath = '/meal-suggestion';
      navigate(englishPath);
    }
  };

  // Auth pages hide
  const authPages = ['/login-page', '/signup', '/forgot-password', '/verify-otp', '/reset-password', '/logout'];
  if (authPages.includes(location.pathname)) return null;
  if (location.pathname === '/urdu-login' || location.pathname === '/Alarm') return null;

  return (
    <>
      <nav className="ur-navbar-top">
        <div className="ur-welcome-text">
          اوئے یار! شیف بوٹ میں خوش آمدید - تمہارا AI کچن مددگار
        </div>
      </nav>

      <nav className="ur-navbar-main">
        <div className="ur-logo">
          <img src="/logo.png" alt="ChefBot Logo" className="ur-logo-img" />
        </div>

        <div className="ur-nav-center">
          <Link to="/urdu-home" className="ur-nav-link">ہوم</Link>
          <Link to="/urdu-about" className="ur-nav-link">ہمارے بارے میں</Link>
          <Link to="/urdu-contact" className="ur-nav-link">رابطہ کریں</Link>
          <Link to="/urdu-guidance" className="ur-nav-link">مدد</Link>
          <Link to="/urdu-recipes" className="ur-nav-link">کھانے</Link>

          <form className="ur-h-search-container" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="کھانا ڈھونڈو..."
              className="ur-h-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="ur-h-search-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>
          </form>
        </div>

        <div className="ur-nav-right">
          {user && (
            <div className="ur-simple-icon ur-alarm-icon" onClick={openAlarmModal}>
              <i className="fas fa-bell"></i>
            </div>
          )}

          <div className="ur-language-selector">
            <div className="ur-simple-icon" onClick={() => setShowLang(!showLang)}>
              <i className="fas fa-globe"></i>
            </div>
            <span>EN/UR</span>
            {showLang && (
              <div className="ur-language-dropdown">
                <div onClick={() => changeLanguage("en")}>انگلش</div>
                <div onClick={() => changeLanguage("ur")}>اردو</div>
              </div>
            )}
          </div>

          {user && (
            <div className="ur-simple-icon ur-settings-icon" onClick={openSettings}>
              <i className="fas fa-cog"></i>
            </div>
          )}

          {user && (
            <div className="ur-simple-icon ur-logout-icon" onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              localStorage.removeItem("hideHeader");
              window.location.href = '/urdu-login';
            }}>
              <i className="fas fa-sign-out-alt"></i>
            </div>
          )}
        </div>
      </nav>

      <UrduAlarmModal isOpen={isAlarmModalOpen} onClose={closeAlarmModal} />
    </>
  );
};

export default UrduHeader;