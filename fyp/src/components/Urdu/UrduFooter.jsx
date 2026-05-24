import React from 'react';
import { Link } from 'react-router-dom';
import './UrduFooter.css';

function UrduFooter() {
  const currentPath = window.location.pathname;
  
  console.log("🟢 FOOTER DEBUG: Current Path =", currentPath);

  // ✅ PAGES WHERE NO FOOTER SHOULD SHOW
  const noFooterPages = [
    '/login', 
    '/login-page', 
    '/urdu-login',
    '/signup',
    '/urdu-signup',
    '/forgot-password',
    '/urdu-forgot-password',
    '/verify-otp',
    '/urdu-verify-otp',
    '/reset-password',
    '/urdu-reset-password',
    '/Alarm', 
    '/alarm'
  ];
  
  // ✅ Check if current path should have no footer
  if (noFooterPages.includes(currentPath)) {
    console.log("🟡 FOOTER: Hiding footer for", currentPath);
    return null;
  }

  // ✅ ALL OTHER PAGES - FULL FOOTER
  console.log("🟢 FOOTER: Showing full footer for", currentPath);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ChefBot میں شامل ہونے کا شکریہ!");
  };

  return (
    <footer className="ur-chefbot-footer" dir="rtl">
      <div className="ur-footer-gallery">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="کھانا 1" />
        <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0" alt="کھانا 2" />
        <img src="https://images.unsplash.com/photo-1521305916504-4a1121188589" alt="کھانا 3" />
        <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt="کھانا 4" />
        <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0" alt="کھانا 5" />
      </div>

      <div className="ur-footer-cta">
        <h2>آؤ مل کر کچھ مزیدار پکائیں۔</h2>
      </div>

      <div className="ur-footer-main">
        <div className="ur-footer-column">
          <h3>شیف بوٹ</h3>
          <p>تمہارا AI کچن پارٹنر جو ترکیبیں بتائے، کھانے کا پلان بنائے، اور کھانا پکانے کو آسان اور مزے دار بنائے۔</p>
        </div>

        <div className="ur-footer-column">
          <h4>جلدی لنک</h4>
          <ul>
            <li><Link to="/urdu">ہوم</Link></li>
            <li><Link to="/urdu-recipes">کھانے</Link></li>
            <li><Link to="/urdu-meal-planner">کھانے کا پلان</Link></li>
            <li><Link to="/urdu-guidance">رہنمائی</Link></li>
            <li><Link to="/urdu-about">ہمارے بارے میں</Link></li>
          </ul>
        </div>

        <div className="ur-footer-column">
          <h4>جڑے رہو</h4>
        </div>
      </div>

      <div className="ur-footer-bottom">
        <p>© 2026 شیف بوٹ۔ سب حقوق ہمارے ہیں</p>
      </div>
    </footer>
  );
}

export default UrduFooter;