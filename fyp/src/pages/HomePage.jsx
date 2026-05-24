import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [showMealSuggestor, setShowMealSuggestor] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const toggleMealSuggestor = () => setShowMealSuggestor(!showMealSuggestor);

  const features = [
    { image: 'image.png',          title: 'Meal Suggestion',    path: '/meal-suggestion' },
    { image: 'pantry-staples.jpg', title: 'Pantry List',        path: '/smart-pantry'    },
    { image: 'recipe.jpg',         title: 'Recipe Database',    path: '/recipes'         },
    { image: 'plannermeal.jpg',    title: 'Meal Planner',       path: '/meal-planner'    },
    { image: 'shoppinglist.png',   title: 'Shopping List',      path: '/smart-shopping'  },
    { image: 'beginners.jpg',      title: 'Beginners Guidance', path: '/guidance'        },
  ];

  const recipes = [
    { image: 'home_biryani.jpg',   name: 'Chicken Biryani',     description: 'Slow-cooked spiced chicken layered with fragrant basmati rice.', category: 'Main',    time: '60 min', rating: 5 },
    { image: 'home_veg_salad.jpg', name: 'Veg Salad',           description: 'Crisp seasonal vegetables tossed in a zesty herb dressing.',      category: 'Salad',   time: '10 min', rating: 4 },
    { image: 'home_icecream.jpg',  name: 'Chocolate Ice Cream', description: 'Rich, velvety chocolate with a creamy melt-in-mouth texture.',    category: 'Dessert', time: '20 min', rating: 5 },
  ];

  const guidanceImages = [
    { img: 'home_m.jpg',  day: 'Monday',    label: 'Breakfast' },
    { img: 'home_m2.jpg', day: 'Wednesday', label: 'Lunch'     },
    { img: 'home_m3.jpg', day: 'Friday',    label: 'Dinner'    },
  ];

  const foodImages = [
    { img: 'home1.jpg', caption: 'Fresh Ingredients' },
    { img: 'home2.jpg', caption: 'Quick Meals'        },
    { img: 'home3.jpg', caption: 'Healthy Bowls'      },
  ];

  const stats = [
    { number: '500+', label: 'Recipes'      },
    { number: '50K+', label: 'Happy Cooks'  },
    { number: '6',    label: 'Smart Tools'  },
    { number: '4.9★', label: 'User Rating'  },
  ];

  const cookSteps = [
    { num: '1', icon: 'fas fa-box-open',    title: 'Fill Pantry',  desc: 'Add your ingredients'      },
    { num: '2', icon: 'fas fa-robot',       title: 'Get Recipes',  desc: 'AI-powered suggestions'    },
    { num: '3', icon: 'fas fa-calendar-alt',title: 'Plan Week',    desc: 'Schedule meals ahead'      },
    { num: '4', icon: 'fas fa-utensils',    title: 'Cook!',        desc: 'Step-by-step guidance'     },
  ];

  return (
    <div className="home-container">

      {/* ══════════════════════════════════════════════════
          ABOVE THE FOLD  —  image 40% + cook section 60%
          ══════════════════════════════════════════════════ */}
      <div className="above-fold-wrapper">

        {/* HERO — 40% */}
        <div className="chefbot-hero">
          <div className="chefbot-slider">
            <img src="/1.png" alt="ChefBot slide 1" className="chefbot-slide-image" />
            <img src="/2.png" alt="ChefBot slide 2" className="chefbot-slide-image" />
          </div>
        </div>

        {/* COOK TODAY — 60% */}
        <div className="cook-today-section">

          {/* dot texture via CSS ::before */}

          {/* LEFT — title, search, buttons */}
          <div className="cook-left">
            

            <h2 className="cook-title">
              What do you want<br />to <em>cook</em> today?
            </h2>

            <p className="cook-sub">
              Search a dish or let AI inspire your next meal.
            </p>

            <div className="cook-search">
              <i className="fas fa-search cook-search-icon"></i>
              <input
                className="cook-search-input"
                placeholder="Search recipes, ingredients…"
              />
              <button className="cook-search-btn">Search</button>
            </div>

            <div className="cook-btns">
              <button className="cook-btn-primary">Start with Pantry</button>
              <button className="cook-btn-secondary">Browse Recipes</button>
            </div>
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="cook-vdivider"></div>

          {/* RIGHT — 2×2 step cards */}
          <div className="cook-right">
            <p className="cook-steps-label">How it works</p>
            <div className="cook-steps-grid">
              {cookSteps.map((s) => (
                <div className="cook-step-card" key={s.num}>
                  <div className="cook-step-top">
                    <div className="cook-step-icon">
                      <i className={s.icon}></i>
                    </div>
                    <span className="cook-step-num">{s.num}</span>
                  </div>
                  <h4 className="cook-step-title">{s.title}</h4>
                  <p className="cook-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      {/* END ABOVE FOLD */}

      {/* Wave bridge */}
      <div className="fold-bridge"></div>

      {/* ══════════════════════════════════════════════════
          FEATURES
          ══════════════════════════════════════════════════ */}
      <section className="h-features-section">
        <div className="h-features-header">
          <h2 className="h-features-title">
            Everything you need to cook <em>smarter</em>
          </h2>
        </div>
        <div className="h-features-grid">
          {features.map((feature, index) => (
            <Link
              to={feature.path}
              key={index}
              className="h-feature-box"
              style={{ textDecoration: 'none' }}
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

      {/* ══════════════════════════════════════════════════
          DIGITAL COOKING BANNER
          ══════════════════════════════════════════════════ */}
      <section className="digital-banner">
        <div className="digital-banner-left">
          <span className="digital-banner-tag">
            <i className="fas fa-leaf"></i> Digital Cooking
          </span>
          <h2 className="digital-banner-title">
            No grocery trip needed.<br />
            <em>Cook smart</em> with what you have.
          </h2>
          <p className="digital-banner-desc">
            Turn pantry items into delicious meals with ChefBot's AI recipe suggestions.
            Zero waste, maximum flavour.
          </p>
          <Link to="/smart-pantry" className="digital-banner-btn">
            Start Learning <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        <div className="digital-banner-right">
          <div className="digital-banner-img-wrap">
            <img src="beginners.jpg" alt="Smart kitchen" />
            <div className="digital-banner-badge">
              <i className="fas fa-robot"></i>
              <span>AI Powered</span>
            </div>
          </div>
          <div className="digital-stats-row">
            {stats.map((s, i) => (
              <div className="digital-stat" key={i}>
                <span className="digital-stat-num">{s.number}</span>
                <span className="digital-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOOD SHOWCASE
          ══════════════════════════════════════════════════ */}
      <section className="food-showcase">
        <div className="food-showcase-header">
          <span className="food-eyebrow">Straight from the kitchen</span>
          <h3 className="food-showcase-title">Made with love, served with joy</h3>
        </div>
        <div className="food-showcase-grid">
          {foodImages.map((item, index) => (
            <div className="food-card" key={index}>
              <img src={item.img} className="food-image" alt={item.caption} />
              <div className="food-card-overlay"><span>{item.caption}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CLASSES / BEGINNERS
          ══════════════════════════════════════════════════ */}
      <section className="classes-section">
        <div className="classes-img-wrap">
          <img src="home_gui.jpg" className="classes-image" alt="AI Kitchen" />
          <div className="classes-img-badge">
            <i className="fas fa-graduation-cap"></i>
            <span>Beginner Friendly</span>
          </div>
        </div>
        <div className="classes-content">
          <div className="section-label">LEARN TO COOK</div>
          <h2>Guidance for beginners<br />made <em>easy</em></h2>
          <p>
            Master cooking basics with step-by-step instructions, pantry organization tips,
            and smart shopping guidance. Perfect for those starting their cooking journey
            with confidence and ease.
          </p>
          <div className="classes-checklist">
            <div className="classes-check-item"><i className="fas fa-check-circle"></i> Step-by-step instructions</div>
            <div className="classes-check-item"><i className="fas fa-check-circle"></i> Pantry organization tips</div>
            <div className="classes-check-item"><i className="fas fa-check-circle"></i> Smart shopping guidance</div>
          </div>
          <Link to="/guidance" className="classes-cta-btn">
            Start Your Journey <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MEAL PLAN
          ══════════════════════════════════════════════════ */}
      <section className="m_plan-section">
        <div className="m_plan-header">
          <div className="m_plan-title">
            <div className="section-label-light">Meal Planner</div>
            <h2>Never wonder <em>'what's for dinner?'</em><br />again.</h2>
            <p className="m_plan-subtitle">Smart weekly meal planning that saves time, money and mental energy.</p>
          </div>
          <Link to="/meal-planner" className="btn">Let's Plan <i className="fas fa-arrow-right"></i></Link>
        </div>
        <div className="m_plan-grid">
          {guidanceImages.map((item, index) => (
            <div className="m_plan-card" key={index}>
              <img src={item.img} alt={item.day} />
              <div className="m_plan-card-info">
                <span className="m_plan-day">{item.day}</span>
                <span className="m_plan-meal">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          POPULAR RECIPES
          ══════════════════════════════════════════════════ */}
      <section className="h-recipes-section">
        <div className="h-recipes-container">
          <div className="h-recipes-header">
            <span className="recipes-eyebrow">Chef's picks</span>
            <h2 className="h-recipes-title">Popular Recipes</h2>
            <p className="h-recipes-subtitle">Discover delicious recipes curated by ChefBot AI</p>
          </div>
          <div className="h-recipes-grid">
            {recipes.map((recipe, index) => (
              <div key={index} className="h-recipe-card">
                <div className="h-recipe-image">
                  <img src={recipe.image} alt={recipe.name} />
                  <div className="recipe-category">{recipe.category}</div>
                  <div className="recipe-time"><i className="fas fa-clock"></i> {recipe.time}</div>
                </div>
                <div className="h-recipe-content">
                  <div className="recipe-stars">{'★'.repeat(recipe.rating)}{'☆'.repeat(5 - recipe.rating)}</div>
                  <h3 className="h-recipe-name">{recipe.name}</h3>
                  <p className="h-recipe-description">{recipe.description}</p>
                  <Link to="/recipes" className="h-recipe-btn">View Recipe <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            ))}
          </div>
          <div className="h-recipes-footer">
            <Link to="/recipes" className="h-recipes-view-all">View All Recipes <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

   

      {/* MEAL SUGGESTOR POPUP */}
      {showMealSuggestor && (
        <div className="meal-suggestor-popup active">
          <div className="meal-suggestor-popup-header">
            <h3><i className="fas fa-robot"></i> Meal Suggestor Chat</h3>
            <button className="close-popup" onClick={toggleMealSuggestor}><i className="fas fa-times"></i></button>
          </div>
          <div className="meal-suggestor-chat-body">
            <div className="chat-message bot">
              <div className="message-content">
                <p>Hi! I'm your Meal Suggestor Bot.</p>
                <p>• "breakfast suggestions"</p>
                <p>• "quick lunch ideas"</p>
                <p>• "vegetarian dinner"</p>
              </div>
            </div>
          </div>
          <div className="meal-suggestor-chat-footer">
            <input type="text" className="chat-input" placeholder="Ask for meal suggestions..." />
            <button className="chat-send-btn"><i className="fas fa-paper-plane"></i></button>
          </div>
        </div>
      )}

    </div>
  );
};

export default HomePage;