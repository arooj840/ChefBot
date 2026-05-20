import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentPath = window.location.pathname;
  
  console.log("🟢 FOOTER DEBUG: Current Path =", currentPath);

  // ✅ PAGES WHERE NO FOOTER SHOULD SHOW
  const noFooterPages = [
    '/login', 
    '/login-page', 
    '/urdu-login',
    '/signup',
    '/forgot-password',
    '/verify-otp',
    '/reset-password',
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
    alert("Thank you for joining ChefBot!");
  };

  return (
    <footer className="chefbot-footer">
      <div className="footer-gallery">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Food 1" />
        <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0" alt="Food 2" />
        <img src="https://images.unsplash.com/photo-1521305916504-4a1121188589" alt="Food 3" />
        <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt="Food 4" />
        <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0" alt="Food 5" />
      </div>

      <div className="footer-cta">
        <h2>Let's cook something amazing together.</h2>
        
      </div>

      <div className="footer-main">
        <div className="footer-column">
          <h3>ChefBot</h3>
          <p>Your AI kitchen partner that suggests recipes, helps plan meals, and makes cooking stress-free and fun.</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/meal-planning">Meal Planner</Link></li>
            <li><Link to="/guidance">Guidance</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Stay Connected</h4>
         
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ChefBot. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;