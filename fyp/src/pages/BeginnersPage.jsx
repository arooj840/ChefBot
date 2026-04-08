import React from 'react';
import './BeginnersPage.css';
import { useNavigate } from 'react-router-dom';

const BeginnersPage = () => {
  const navigate = useNavigate();

  const skillCards = [
    {
      id: '01',
      image: 'KitchenTools.png',  // REAL IMAGE
      title: 'Kitchen Tools',
      route: '/kitchen-tools',
      features: [
        'Tools that make cooking easier and more precise.'
      ]
    },
    {
      id: '02',
      image: 'CuttingTechniques.png',  // REAL IMAGE
      title: 'Cutting Techniques',
      route: '/cutting-techniques',
      features: [
        'Tools that make cooking easier and more precise.'
      ]
    },
    {
      id: '03',
      image: 'CookingMethods.png',  // REAL IMAGE
      title: 'Cooking Methods',
      route: '/cooking-methods',
      features: [
        'Heat-based techniques used to prepare and cook food.'
      ]
    },
    {
      id: '04',
      image: 'MeatCuts.png',  // REAL IMAGE
      title: 'Meat Cuts',
      route: '/meat-cuts',
      features: [
        'Different portions of meat from various animal parts.'
      ]
    },
    {
      id: '05',
      image: 'KitchenAppliances.png',  // REAL IMAGE
      title: 'Kitchen Appliances',
      route: '/kitchen-appliances',
      features: [
        'Electrical devices that assist with cooking and food preparation.'
      ]
    },
    {
      id: '06',
      image: 'PantryBasics.png',  // REAL IMAGE
      title: 'Pantry Basics',
      route: '/pantry-basics',
      features: [
        'Staple ingredients that form the foundation of everyday cooking.'
      ]
    },
    {
      id: '07',
      image: 'MeasuringSkills.png',  // REAL IMAGE
      title: 'Measuring Skills',
      route: '/measuring-skills',
      features: [
        'Techniques for accurately measuring ingredients.'
      ]
    },
    {
      id: '08',
      image: 'BakingEssentials.png',  // REAL IMAGE
      title: 'Bakery Essentials',
      route: '/bakery-essentials',
      features: [
        'Must-have tools and ingredients for successful baking.'
      ]
    }
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className="beginners-page">
      {/* Fullscreen Kitchen Image */}
      <div className="fullscreen-kitchen-image">
        <div className="fullscreen-kitchen-content">
          <h1>Kitchen Mastery Guide</h1>
          <p>Essential skills every home cook needs to master</p>
          <p>Step-by-step tutorials and expert tips</p>
        </div>
      </div>
      
      {/* Kitchen Mastery Title */}
      <div className="guide-header">
        <h1>Kitchen Mastery Guide</h1>
        <p>Master essential kitchen skills in one place</p>
      </div>

      {/* Skills Grid */}
      <div className="guide-sections-container">
        <div className="guide-sections-grid">
          {skillCards.map((card) => (
            <div 
              key={card.id} 
              className="guide-section-card"
              onClick={() => handleCardClick(card.route)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleCardClick(card.route)}
            >
              {/* HIDE Card Number */}
              <div className="guide-card-number" style={{display: 'none'}}>
                {card.id}
              </div>
              
              {/* HIDE Card Accent */}
              <div className="guide-card-accent" style={{display: 'none'}}></div>
              
              {/* TOP: Title */}
              <div className="guide-card-header">
                <div className="guide-card-title">
                  <h3>{card.title}</h3>
                </div>
              </div>
              
              {/* CENTER: REAL IMAGE - Not emoji/icon */}
              <div className="guide-card-image-container">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="guide-card-real-image"
                  loading="lazy"
                />
              </div>
              
              {/* BOTTOM: Description */}
              <div className="guide-card-content">
                <ul className="guide-card-features">
                  {card.features.map((feature, index) => (
                    <li key={index}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Back to Home Button */}
<div className="back-home-container">
  <button 
    className="back-home-btn"
    onClick={() => navigate('/home')}
  >
    ← Back to Home
  </button>
</div>
    </div>
  );
};

export default BeginnersPage;