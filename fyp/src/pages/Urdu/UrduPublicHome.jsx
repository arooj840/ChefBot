import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LanguagePopup from '../../components/LanguagePopup';
import './UrduPublicHome.css';

const UrduPublicHome = () => {
  const navigate = useNavigate();
  
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);

  // Carousel Data
  const furnitureItems = [
    { id: 1, title: "AI شیف بوٹ مددگار", description: "اپنی پینٹری میں جو ہے اس سے فوری کھانے کی تجاویز پاؤ۔", image: "ai.jpg", bgImage: "ai.jpg" },
    { id: 2, title: "پینٹری محفوظ کرو", description: "اپنی پینٹری کی سب چیزیں ایک جگہ رکھو اور ان کا پتہ رکھو۔", image: "pantry-staples.jpg", bgImage: "pantry-staples.jpg" },
    { id: 3, title: "کھانوں کی ڈائری", description: "اپنے پسندیدہ کھانے دیکھو اور اپنا کھانا پکانے کا سفر چیک کرو۔", image: "recipe.jpg", bgImage: "recipe.jpg" },
    { id: 4, title: "خریداری کی لسٹ", description: "اپنی خریداری کی لسٹ آسانی سے بناو تاکہ کچھ بھولنا نہ پڑے۔", image: "shoppinglist.png", bgImage: "shoppinglist.png" },
    { id: 5, title: "نئے لوگوں کے لیے", description: "   آسان طریقے سے رہنمائی پاؤ۔", image: "beginners.jpg", bgImage: "beginners.jpg" },
    { id: 6, title: "کھانے کا پلان بناو", description: "ہفتے بھر کے کھانے کا پلان بناو اور اپنا وقت بچاؤ۔", image: "plannermeal.jpg", bgImage: "plannermeal.jpg" }
  ];

  const [currentCenterIndex, setCurrentCenterIndex] = useState(0);
  const heroBackgroundRef = useRef(null);
  const timeoutRef = useRef(null);
  const redirectTimeoutRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedLanguage = localStorage.getItem('userLanguage');
    const isLoggedIn = !!token;
    
    if (isLoggedIn && savedLanguage) {
      toast.info("🔄 آپ پہلے سے لاگ ان ہیں! ڈیش بورڈ پر جا رہے ہیں...");
      redirectTimeoutRef.current = setTimeout(() => {
        window.location.href = savedLanguage === 'urdu' ? '/urdu-home' : '/home';
      }, 2000);
      return;
    }
    
    if (isLoggedIn && !savedLanguage) {
      localStorage.setItem('userLanguage', 'en');
      localStorage.setItem('languageSelectedByLoggedInUser', 'true');
      toast.info("🔄 زبان بدل رہی ہے... ڈیش بورڈ پر جا رہے ہیں");
      redirectTimeoutRef.current = setTimeout(() => {
        window.location.href = '/home';
      }, 1500);
      return;
    }
    
    const sessionLanguageSelected = sessionStorage.getItem('sessionLanguageSelected');
    
    if (sessionLanguageSelected === 'true') {
      console.log('✅ زبان پہلے سے سیٹ ہے - پاپ اپ نہیں آئے گا');
      return;
    }
    
    if (!isLoggedIn && sessionLanguageSelected !== 'true') {
      console.log('🆕 نیا سیشن - 5 سیکنڈ میں زبان کا پاپ اپ آئے گا');
      timeoutRef.current = setTimeout(() => {
        setShowLanguagePopup(true);
      }, 5000);
    }
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (redirectTimeoutRef.current) clearTimeout(redirectTimeoutRef.current);
    };
    
  }, []);

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
      <section className="ur-hero-carousel-section">
        <div className="ur-hero-background-container" ref={heroBackgroundRef}></div>
        <div className="ur-hero-background-overlay"></div>

        <div className="ur-hero-left-section">
          <div className="ur-hero-section-tag"></div>
          <h1 className="ur-hero-main-heading">آج کھانے میں کیا پکائیں؟</h1>
          <h2 className="ur-hero-second-heading">چلو شیف بوٹ سے پوچھیں</h2>
          <p className="ur-hero-description">"شیف بوٹ: تمہارا سمارٹ کچن مددگار جو جو ہے اسی سے کھانا بتائے"</p>
        </div>

        <div className="ur-hero-right-section">
          <div className="ur-carousel-container">
            <div className="ur-carousel-track">
              {furnitureItems.map((item, index) => {
                const cardStyle = getCardStyle(index);
                return (
                  <div
                    key={item.id}
                    className={`ur-carousel-item ${index === currentCenterIndex ? 'ur-center-card' : 'ur-side-card'}`}
                    style={cardStyle}
                    onMouseEnter={() => handleCardHover(item.bgImage)}
                    onMouseLeave={handleCardLeave}
                    onClick={() => handleCardClick(index)}
                  >
                    <div className="ur-item-image" style={{backgroundImage: `url('${item.image}')`}}></div>
                    <div className="ur-item-content">
                      <h3 className="ur-item-title">{item.title}</h3>
                      <p className="ur-item-description">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="ur-carousel-indicators">
              {furnitureItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`ur-indicator ${index === currentCenterIndex ? 'ur-active' : ''}`}
                  onClick={() => setCurrentCenterIndex(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ur-section-boxes">
        <div className="ur-content-box ur-box-1 ur-content-left">
          <div className="ur-colored-box">
            <h2>AI شیف بوٹ مددگار</h2>
            <p className="ur-box-description">اپنی پینٹری میں جو ہے اس سے فوری کھانا ڈھونڈو۔</p>
            <button className="ur-btn" onClick={() => navigate('/urdu-home')}>شیف بوٹ سے پوچھو</button>
          </div>
        </div>

        <div className="ur-content-box ur-box-2 ur-content-right">
          <div className="ur-colored-box">
            <h2>کھانوں کی ڈائری</h2>
            <p className="ur-box-description">اپنے پسندیدہ کھانے دیکھو اور اپنا کھانا پکانے کا سفر چیک کرو۔</p>
            <button className="ur-btn" onClick={() => navigate('/urdu-home')}></button>
          </div>
        </div>

        <div className="ur-content-box ur-box-3 ur-content-left">
          <div className="ur-colored-box">
            <h2>نئے لوگوں کے لیے</h2>
            <p className="ur-box-description">آسان طریقے سے سیکھو</p>
            <button className="ur-btn" onClick={() => navigate('/urdu-home')}>سیکھو</button>
          </div>
        </div>

        <div className="ur-content-box ur-box-4 ur-content-right">
          <div className="ur-colored-box">
            <h2>پینٹری محفوظ کرو</h2>
            <p className="ur-box-description">اپنی پینٹری کی سب چیزیں ایک جگہ رکھو اور ان کا پتہ رکھو۔</p>
            <button className="ur-btn" onClick={() => navigate('/urdu-home')}>پینٹری بھرو</button>
          </div>
        </div>

        <section className="ur-recipe-section-container">
          <h2 className="ur-section-title">مشہور کھانے</h2>
          <div className="ur-recipe-section">
            <div className="ur-recipe-card">
              <img src="speghetti_public.jpg" alt="Spaghetti Carbonara" />
              <h3>سپگیٹی </h3>
              <p>کریمی پاستا</p>
              <button className="ur-btn" onClick={() => navigate('/urdu-home')}>کھانا دیکھو</button>
            </div>
            <div className="ur-recipe-card">
              <img src="tikka_public.jpg" alt="Chicken Tikka Masala" />
              <h3>چکن تکہ مصالحہ</h3>
              <p>نرم چکن مزیدار کریمی ٹماٹر کی گریوی میں</p>
              <button className="ur-btn" onClick={() => navigate('/urdu-home')}>کھانا دیکھو</button>
            </div>
            <div className="ur-recipe-card">
              <img src="pizza_public.jpg" alt="Margherita Pizza" />
              <h3>مارگریٹا پیزا</h3>
              <p>کلاسک پیزا تازہ ٹماٹر، موزاریلا اور تلسی کے ساتھ</p>
              <button className="ur-btn" onClick={() => navigate('/urdu-home')}>کھانا دیکھو</button>
            </div>
            <div className="ur-recipe-card">
              <img src="cake_public.jpg" alt="Chocolate Cake" />
              <h3>چاکلیٹ کیک</h3>
              <p>نرم کیک مزیدار چاکلیٹ فراسٹنگ کے ساتھ</p>
              <button className="ur-btn" onClick={() => navigate('/urdu-home')}>کھانا دیکھو</button>
            </div>
          </div>
        </section>

        <div className="ur-content-box ur-box-5 ur-content-left">
          <div className="ur-colored-box">
            <h2>خریداری کی لسٹ بناو</h2>
            <p className="ur-box-description">اپنی خریداری کی لسٹ آسانی سے بناو تاکہ کچھ بھولنا نہ پڑے۔</p>
            <button className="ur-btn" onClick={() => navigate('/urdu-home')}>لسٹ بناو</button>
          </div>
        </div>
        
        <div className="ur-content-box ur-box-6 ur-content-right">
          <div className="ur-colored-box">
            <h2>سمارٹ کھانے کا پلان</h2>
            <p className="ur-box-description">ہفتے بھر کے کھانے کا پلان بناو اور اپنا وقت بچاؤ۔</p>
            <button className="ur-btn" onClick={() => navigate('/urdu-home')}>پلان بناو</button>
          </div>
        </div>
      </section>

      {showLanguagePopup && <LanguagePopup />}
    </>
  );
};

export default UrduPublicHome;