import React from 'react';
import './LanguagePopup.css';

const LanguagePopup = () => {
  const handleLanguageSelect = (lang) => {
    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;
    
    if (isLoggedIn) {
      // Logged in user → permanent storage (localStorage)
      localStorage.setItem('userLanguage', lang);
      localStorage.setItem('languageSelectedByLoggedInUser', 'true');
      
      if (lang === 'urdu') {
        window.location.href = '/urdu-home';
      } else {
        window.location.href = '/home';
      }
    } else {
      // Not logged in → temporary storage (sessionStorage)
      sessionStorage.setItem('sessionLanguage', lang);
      sessionStorage.setItem('sessionLanguageSelected', 'true');
      
      // Redirect based on language
      if (lang === 'urdu') {
        window.location.href = '/urdu-public';
      } else {
        window.location.href = '/';
      }
    }
  };

  return (
    <div className="lang-popup-overlay">
      <div className="lang-popup-box">
        <h2>🌐 Select Language</h2>
        <p>Choose your preferred language</p>
        <button className="lang-btn english-btn" onClick={() => handleLanguageSelect('en')}>
          English
        </button>
        <button className="lang-btn urdu-btn" onClick={() => handleLanguageSelect('urdu')}>
          اردو
        </button>
      </div>
    </div>
  );
};

export default LanguagePopup;