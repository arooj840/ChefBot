import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LanguagePopup from '../components/LanguagePopup';
import './PublicHome.css';

const PublicHome = () => {
  const navigate = useNavigate();
  
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);

  // Carousel Data
  const furnitureItems = [
    { id: 1, title: "AI ChefBot Assistant", description: "Get instant meal suggestions based on what's in your pantry. Our AI ChefBot creates personalized meals just for you!", image: "ai.jpg", bgImage: "ai.jpg" },
    { id: 2, title: "Save Pantry Items", description: "Keep, organize and track all your pantry essentials in one place so you never run out of ingredients again.", image: "pantry-staples.jpg", bgImage: "pantry-staples.jpg" },
    { id: 3, title: "Recipe Diary", description: "Explore your recipes from recipes collection and track your cooking journey.", image: "recipe.jpg", bgImage: "recipe.jpg" },
    { id: 4, title: "Add your Shopping List", description: "Create and manage your shopping list easily so you never forget what to buy.", image: "shoppinglist.png", bgImage: "shoppinglist.png" },
    { id: 5, title: "Guidance For Beginners", description: "Get complete guidance and tips designed especially for beginners to start with ease.", image: "beginners.jpg", bgImage: "beginners.jpg" },
    { id: 6, title: "Plan your Meals", description: "Plan your weekly meals form grocery lists to organize your cooking schedule.", image: "plannermeal.jpg", bgImage: "plannermeal.jpg" }
  ];

  const [currentCenterIndex, setCurrentCenterIndex] = useState(0);
  const heroBackgroundRef = useRef(null);
  const timeoutRef = useRef(null);
  const redirectTimeoutRef = useRef(null); // 👈 Track redirect timeout

  // ✅ FIXED - Sirf 1 toaster aayega
  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedLanguage = localStorage.getItem('userLanguage');
    const isLoggedIn = !!token;
    
    // Case 1: Logged in user with language selected → redirect with ONE toast
    if (isLoggedIn && savedLanguage) {
      // Sirf EK toast dikhao
      toast.info("🔄 You are already logged in! Redirecting to dashboard...");
      
      redirectTimeoutRef.current = setTimeout(() => {
        window.location.href = savedLanguage === 'urdu' ? '/urdu-home' : '/home';
      }, 2000); // 2 seconds delay
      return;
    }
    
    // Case 2: Logged in user with NO language → auto set English
    if (isLoggedIn && !savedLanguage) {
      localStorage.setItem('userLanguage', 'en');
      localStorage.setItem('languageSelectedByLoggedInUser', 'true');
      toast.info("🔄 Setting default language... Redirecting to dashboard");
      
      redirectTimeoutRef.current = setTimeout(() => {
        window.location.href = '/home';
      }, 1500);
      return;
    }
    
    // Case 3: NOT logged in user
    const sessionLanguageSelected = sessionStorage.getItem('sessionLanguageSelected');
    
    if (sessionLanguageSelected === 'true') {
      console.log('✅ Session me language already selected - popup nahi aayega');
      return;
    }
    
    if (!isLoggedIn && sessionLanguageSelected !== 'true') {
      console.log('🆕 New session - showing language popup in 5 seconds');
      timeoutRef.current = setTimeout(() => {
        setShowLanguagePopup(true);
      }, 5000);
    }
    
    // Cleanup
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (redirectTimeoutRef.current) clearTimeout(redirectTimeoutRef.current);
    };
    
  }, []);

  // Rest of your carousel code remains the SAME...
  // (Initialize Carousel, prevItem, nextItem, handleCardHover, etc.)
  
  useEffect(() => {
    if (heroBackgroundRef.current) {
      heroBackgroundRef.current.style.backgroundImage = `url('${furnitureItems[currentCenterIndex].bgImage}')`;
    }
    
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevItem();
      if (e.key === 'ArrowRight') nextItem();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentCenterIndex]);

  const prevItem = () => {
    setCurrentCenterIndex((prev) => 
      prev === 0 ? furnitureItems.length - 1 : prev - 1
    );
  };

  const nextItem = () => {
    setCurrentCenterIndex((prev) => 
      prev === furnitureItems.length - 1 ? 0 : prev + 1
    );
  };

  const handleCardHover = (bgImage) => {
    if (heroBackgroundRef.current) {
      heroBackgroundRef.current.style.backgroundImage = `url('${bgImage}')`;
    }
  };

  const handleCardLeave = () => {
    if (heroBackgroundRef.current) {
      heroBackgroundRef.current.style.backgroundImage = `url('${furnitureItems[currentCenterIndex].bgImage}')`;
    }
  };

  const handleCardClick = (index) => {
    setCurrentCenterIndex(index);
    if (heroBackgroundRef.current) {
      heroBackgroundRef.current.style.backgroundImage = `url('${furnitureItems[index].bgImage}')`;
    }
  };

  const getCardStyle = (index) => {
    const position = index - currentCenterIndex;
    
    if (position === 0) {
      return {
        transform: 'translateX(0) scale(1)',
        zIndex: '10',
        opacity: '1'
      };
    } else if (position === -2 || (position === 4 && currentCenterIndex === 0)) {
      return {
        transform: 'translateX(-400px) scale(0.7)',
        zIndex: '1',
        opacity: '0.7'
      };
    } else if (position === -1 || (position === 5 && currentCenterIndex === 0)) {
      return {
        transform: 'translateX(-200px) scale(0.85)',
        zIndex: '2',
        opacity: '0.8'
      };
    } else if (position === 1 || (position === -5 && currentCenterIndex === 5)) {
      return {
        transform: 'translateX(200px) scale(0.85)',
        zIndex: '2',
        opacity: '0.8'
      };
    } else if (position === 2 || (position === -4 && currentCenterIndex === 5)) {
      return {
        transform: 'translateX(400px) scale(0.7)',
        zIndex: '1',
        opacity: '0.7'
      };
    } else {
      return {
        opacity: '0',
        transform: 'translateX(1000px)'
      };
    }
  };

  return (
    <>
      <section className="hero-carousel-section">
        <div className="hero-background-container" ref={heroBackgroundRef}></div>
        <div className="hero-background-overlay"></div>

        <div className="hero-left-section">
          <div className="hero-section-tag"></div>
          <h1 className="hero-main-heading">AJ KHANE MEIN KIYA PAKAEN?</h1>
          <h2 className="hero-second-heading">Let's ask CHEFBOT</h2>
          <p className="hero-description">"ChefBot: Your smart kitchen AI that cooks up ideas from what you have!"</p>
        </div>

        <div className="hero-right-section">
          <div className="carousel-container">
            <div className="carousel-track">
              {furnitureItems.map((item, index) => {
                const cardStyle = getCardStyle(index);
                return (
                  <div
                    key={item.id}
                    className={`carousel-item ${index === currentCenterIndex ? 'center-card' : 'side-card'}`}
                    style={cardStyle}
                    onMouseEnter={() => handleCardHover(item.bgImage)}
                    onMouseLeave={handleCardLeave}
                    onClick={() => handleCardClick(index)}
                  >
                    <div className="item-image" style={{backgroundImage: `url('${item.image}')`}}></div>
                    <div className="item-content">
                      <h3 className="item-title">{item.title}</h3>
                      <p className="item-description">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="carousel-indicators">
              {furnitureItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`indicator ${index === currentCenterIndex ? 'active' : ''}`}
                  onClick={() => setCurrentCenterIndex(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-boxes">
        <div className="content-box box-1 content-left">
          <div className="colored-box">
            <h2>AI ChefBot Assistant</h2>
            <p className="box-description">Get instant meal suggestions based on what's in your pantry. Our AI ChefBot creates personalized meals just for you!</p>
            <button className="btn" onClick={() => navigate('/login-page')}>Ask ChefBot Now</button>
          </div>
        </div>

        <div className="content-box box-2 content-right">
          <div className="colored-box">
            <h2>Recipe Diary</h2>
            <p className="box-description">Explore your recipes from recipes collection and track your cooking journey.</p>
            <button className="btn" onClick={() => navigate('/login-page')}>Try Now</button>
          </div>
        </div>

        <div className="content-box box-3 content-left">
          <div className="colored-box">
            <h2>Complete Guidance for Beginners</h2>
            <p className="box-description">Get complete guidance and tips designed especially for beginners to start with ease.</p>
            <button className="btn" onClick={() => navigate('/login-page')}>Explore Guide</button>
          </div>
        </div>

        <div className="content-box box-4 content-right">
          <div className="colored-box">
            <h2>Store Pantry Items</h2>
            <p className="box-description">Keep, organize and track all your pantry essentials in one place so you never run out of ingredients again.</p>
            <button className="btn" onClick={() => navigate('/login-page')}>Fill Your Pantry</button>
          </div>
        </div>

        <section className="recipe-section-container">
          <h2 className="section-title">Popular Recipes</h2>
          <div className="recipe-section">
            <div className="recipe-card">
              <img src="speghetti_public.jpg" alt="Spaghetti Carbonara" />
              <h3>Spaghetti Carbonara</h3>
              <p>Creamy Italian pasta with eggs, cheese, and pancetta</p>
              <button className="btn" onClick={() => navigate('/login-page')}>View Recipe</button>
            </div>
            <div className="recipe-card">
              <img src="tikka_public.jpg" alt="Chicken Tikka Masala" />
              <h3>Chicken Tikka Masala</h3>
              <p>Tender chicken in rich and creamy tomato sauce</p>
              <button className="btn" onClick={() => navigate('/login-page')}>View Recipe</button>
            </div>
            <div className="recipe-card">
              <img src="pizza_public.jpg" alt="Margherita Pizza" />
              <h3>Margherita Pizza</h3>
              <p>Classic pizza with fresh tomatoes, mozzarella and basil</p>
              <button className="btn" onClick={() => navigate('/login-page')}>View Recipe</button>
            </div>
            <div className="recipe-card">
              <img src="cake_public.jpg" alt="Chocolate Cake" />
              <h3>Chocolate Cake</h3>
              <p>Moist cake with rich frosting that melts in your mouth.</p>
              <button className="btn" onClick={() => navigate('/login-page')}>View Recipe</button>
            </div>
          </div>
        </section>

        <div className="content-box box-5 content-left">
          <div className="colored-box">
            <h2>Create Your Shopping List</h2>
            <p className="box-description">Create and manage your shopping list easily so you never forget what to buy.</p>
            <button className="btn" onClick={() => navigate('/login-page')}>Get Shopping</button>
          </div>
        </div>
        
        <div className="content-box box-6 content-right">
          <div className="colored-box">
            <h2>Smart Meal Planning</h2>
            <p className="box-description">Plan your weekly meals form grocery lists to organize your cooking schedule.</p>
            <button className="btn" onClick={() => navigate('/login-page')}>Start Planning</button>
          </div>
        </div>
      </section>

      {showLanguagePopup && <LanguagePopup />}
    </>
  );
};

export default PublicHome;