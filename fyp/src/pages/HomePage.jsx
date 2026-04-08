import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);
  const [showMealSuggestor, setShowMealSuggestor] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
    if (!showChatbot) {
      setUnreadMessages(0);
    }
  };

  // ADD THIS FUNCTION
  const toggleMealSuggestor = () => {
    setShowMealSuggestor(!showMealSuggestor);
  };

  // FEATURES ARRAY - 5 ITEMS ONLY
  const features = [
 {
      image: 'pantry-staples.jpg',
      title: 'Meal Suggestion',
      path: '/meal-suggestion'
    },
    {
      image: 'pantry-staples.jpg',
      title: 'Pantry List',
      path: '/smart-pantry'
    },
    {
      image: 'recipe.jpg',
      title: 'Recipe Database',
      path: '/recipes'
    },
    {
      image: 'plannermeal.jpg',
      title: 'Meal Planner',
      path: '/meal-planner'
    },
    {
      image: 'shoppinglist.png',
      title: 'Shopping List',
      path: '/smart-shopping'
    },
    {
      image: 'beginners.jpg',
      title: 'Beginners Guidance',
      path: '/guidance'
    }
  ];

  const recipes = [
    {
      image: "home_biryani.jpg",
      name: "Chicken Biryani",
      description: "Spiced chicken with aromatic rice.",
      category: "Main",
    },
    {
      image: "home_veg_salad.jpg",
      name: "Veg Salad",
      description: "Fresh veggies tossed with light dressing.",
      category: "Salad",
    },
    {
      image: "home_icecream.jpg",
      name: "Chocolate Ice Cream",
      description: "Rich,moist with creamy frosting ice cream.",
      category: "Dessert",
    }
  ];

  const guidanceImages = [
    "home_m.jpg",
    "home_m2.jpg",
    "home_m3.jpg"
  ];

  const foodImages = [
    "home1.jpg",
    "home2.jpg",
    "home3.jpg",
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="chefbot-hero">
        <div className="chefbot-slider">
          <img src="/1.png" alt="ChefBot Image 1" className="chefbot-slide-image" />
          <img src="/2.png" alt="ChefBot Image 2" className="chefbot-slide-image" />
        </div>
      </section>

      {/* Features Section */}
      <section className="h-features-section">
        <h2 className="h-features-title">Our Amazing Features</h2>
        
     
        
        <div className="h-features-grid">
          {features.map((feature, index) => (
            <Link 
              to={feature.path} 
              key={index} 
              className="h-feature-box"
              style={{textDecoration: 'none'}}
            >
              <div className="h-feature-image">
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className="h-feature-content">
                <h3 className="h-feature-title">{feature.title}</h3>
                <span className="h-feature-link">
                  Explore <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HERO 2 */}
      <section className="hero-section1">
        <div className="hero-left">
          <h2>Digital Cooking</h2>
          <p>Turn pantry items into delicious meals with ChefBot's recipe suggestions.</p>
          <Link to="/" className="contact-link">Start Learning →</Link>
        </div>
        <div className="hero-center">
          <h1>No grocery trip needed! Cook from pantry items with ChefBot.</h1>
        </div>
        <div className="hero-right">
          <img src="beginners.jpg" alt="Smart kitchen" />
        </div>
      </section>

      {/* FOOD SHOWCASE */}
      <section className="food-showcase">
        {foodImages.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            className="food-image" 
            alt={`Cooking ${index + 1}`} 
          />
        ))}
      </section>

      {/* CLASSES SECTION */}
      <section className="classes-section">
        <img 
          src="home_gui.jpg" 
          className="classes-image" 
          alt="AI Kitchen" 
        />
        <div className="classes-content">
          <div className="section-label">LEARN TO COOK</div>
          <h2>Guidance for beginners<br />made <span className="italic">easy</span></h2>
          <p>
            Master cooking basics with step-by-step instructions, pantry organization tips, and smart shopping guidance. 
            Perfect for those starting their cooking journey with confidence and ease.
          </p>
        </div>
      </section>

      {/* Meal plan SECTION */}
      <section className="m_plan-section">
        <div className="m_plan-header">
          <div className="m_plan-title">
            <div className="section-label">Meal Planner</div>
            <h2>Never wonder 'what's for dinner?' again with smart meal planning.</h2>
          </div>
          <Link to="/meal-planner" className="btn">Let's plan</Link>
        </div>
        <div className="m_plan-grid">
          {guidanceImages.map((image, index) => (
            <div className="m_plan-card" key={index}>
              <img src={image} alt={`m_plan${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
       
      {/* Recipes Section */}
      <section className="h-recipes-section">
        <div className="h-recipes-container">
          <h2 className="h-recipes-title">Popular Recipes</h2>
          <p className="h-recipes-subtitle">
            Discover delicious recipes curated by ChefBot AI
          </p>
          <div className="h-recipes-grid">
            {recipes.map((recipe, index) => (
              <div key={index} className="h-recipe-card">
                <div className="h-recipe-image">
                  <img src={recipe.image} alt={recipe.name} />
                  <div className="recipe-category">{recipe.category}</div>
                </div>
                <div className="h-recipe-content">
                  <h3 className="h-recipe-name">{recipe.name}</h3>
                  <p className="h-recipe-description">{recipe.description}</p>
                  <Link to="/recipes" className="h-recipe-btn">View Recipe</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEAL SUGGESTOR POPUP */}
      {showMealSuggestor && (
        <div className="meal-suggestor-popup active">
          <div className="meal-suggestor-popup-header">
            <h3><i className="fas fa-robot"></i> Meal Suggestor Chat</h3>
            <button className="close-popup" onClick={toggleMealSuggestor}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="meal-suggestor-chat-body">
            <div className="chat-message bot">
              <div className="message-content">
                <p>Hi! I'm your Meal Suggestor Bot.</p>
                <p>Ask me for meal ideas like:</p>
                <p>• "breakfast suggestions"</p>
                <p>• "quick lunch ideas"</p>
                <p>• "vegetarian dinner"</p>
              </div>
            </div>
          </div>
          
          <div className="meal-suggestor-chat-footer">
            <input 
              type="text" 
              className="chat-input" 
              placeholder="Ask for meal suggestions..."
            />
            <button className="chat-send-btn">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}

      {/* ========== CHATBOT ICON ========== */}
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <i className="fas fa-robot"></i>
        {unreadMessages > 0 && (
          <span className="chatbot-badge">{unreadMessages}</span>
        )}
      </div>

      {/* Chatbot Modal */}
      {showChatbot && (
        <div className="chatbot-modal active">
          <div className="chatbot-header">
            <h3><i className="fas fa-robot"></i> ChefBot Assistant</h3>
            <button className="close-chatbot" onClick={toggleChatbot}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="chatbot-body">
            <p>Hello! I'm ChefBot. How can I help you with cooking today? 🍳</p>
          </div>
          <div className="chatbot-footer">
            <input 
              type="text" 
              className="chatbot-input" 
              placeholder="Type your message..."
            />
            <button className="chatbot-send">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;