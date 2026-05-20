import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AlarmModal from './AlarmModal';
import './Header.css';

const Header = ({ onSettingsClick }) => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [isAlarmModalOpen, setIsAlarmModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [showLang, setShowLang] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/meal-suggestion?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const openAlarmModal = () => {
    // ✅ Agar user login nahi hai to login page pe bhejo
    if (!user) {
      navigate('/login-page');
      return;
    }
    setIsAlarmModalOpen(true);
  };

  const closeAlarmModal = () => {
    setIsAlarmModalOpen(false);
  };

  const openSettings = () => {
    // ✅ Agar user login nahi hai to login page pe bhejo
    if (!user) {
      navigate('/login-page');
      return;
    }
    if (onSettingsClick) {
      onSettingsClick();
    }
  };
const changeLanguage = (lang) => {
  setShowLang(false);
  if (lang === "ur") {
    navigate("/urdu-public");  // ✅ Urdu Public Home Page
  } else {
    navigate("/");   // ✅ English Home Page
  }
};

  // Auth pages hide
  const authPages = ['/login-page', '/signup', '/forgot-password', '/verify-otp', '/reset-password', '/logout'];
  if (authPages.includes(location.pathname)) return null;
  if (location.pathname === '/urdu-login' || location.pathname === '/Alarm') return null;

  return (
    <>
      <nav className="navbar-top">
        <div className="welcome-text">
          Hey guys! Welcome to ChefBot - Your AI Cooking Assistant
        </div>
      </nav>

      <nav className="navbar-main">
        <div className="logo">
          <img src="/logo.png" alt="ChefBot Logo" className="logo-img" />
        </div>

        <div className="nav-center">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/guidance" className="nav-link">Guidance</Link>
          <Link to="/recipes" className="nav-link">Recipes</Link>

          <form className="h-search-container" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search recipes..."
              className="h-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="h-search-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>
          </form>
        </div>

        <div className="nav-right">
          {/* ✅ Alarm Icon - Sirf login ke baad dikhe */}
          {user && (
            <div className="simple-icon alarm-icon" onClick={openAlarmModal}>
              <i className="fas fa-bell"></i>
            </div>
          )}

          <div className="language-selector">
            <div className="simple-icon" onClick={() => setShowLang(!showLang)}>
              <i className="fas fa-globe"></i>
            </div>
            <span>EN/UR</span>
            {showLang && (
              <div className="language-dropdown">
                <div onClick={() => changeLanguage("en")}>English</div>
                <div onClick={() => changeLanguage("ur")}>اردو</div>
              </div>
            )}
          </div>

          {/* ✅ Settings Icon - Sirf login ke baad dikhe */}
          {user && (
            <div className="simple-icon settings-icon" onClick={openSettings}>
              <i className="fas fa-cog"></i>
            </div>
          )}

          {/* ✅ Logout Icon - Sirf login ke baad dikhe */}
          {user && (
            <div className="simple-icon logout-icon" onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              localStorage.removeItem("hideHeader");
              window.location.href = '/login-page';
            }}>
              <i className="fas fa-sign-out-alt"></i>
            </div>
          )}
        </div>
      </nav>

      <AlarmModal isOpen={isAlarmModalOpen} onClose={closeAlarmModal} />
    </>
  );
};

export default Header;