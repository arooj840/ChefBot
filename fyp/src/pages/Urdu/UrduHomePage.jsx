import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UrduHomePage.css';

const UrduHomePage = () => {
  const [email, setEmail] = useState('');
  const [showMealSuggestor, setShowMealSuggestor] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const toggleMealSuggestor = () => setShowMealSuggestor(!showMealSuggestor);

  const features = [
    { image: 'image.png',          title: 'کیا پکاؤں',    path: '/urdu-meal-suggestion' },
    { image: 'pantry-staples.jpg', title: 'میری پینٹری',        path: '/smart-pantry-urdu'    },
    { image: 'recipe.jpg',         title: 'کھانے',            path: '/recipes'         },
    { image: 'plannermeal.jpg',    title: 'کھانے کا پلان',       path: '/smart-planner-urdu'    },
    { image: 'shoppinglist.png',   title: 'خریداری کی لسٹ',      path: '/smart-shopping-urdu'  },
    { image: 'beginners.jpg',      title: 'نئے لوگوں کے لیے', path: '/guidance'        },
    
  ];

  const recipes = [
    { image: 'home_biryani.jpg',   name: 'چکن بریانی',     description: 'مصالحے دار چکن خوشبودار چاولوں کے ساتھ', category: 'Main',    time: '60 منٹ', rating: 5 },
    { image: 'home_veg_salad.jpg', name: 'سبزیوں کا سلاد',           description: 'تازہ سبزیوں کا سلاد',      category: 'Salad',   time: '10 منٹ', rating: 4 },
    { image: 'home_icecream.jpg',  name: 'چاکلیٹ آئس کریم', description: 'ملائم چاکلیٹ آئس کریم',    category: 'Dessert', time: '20 منٹ', rating: 5 },
  ];

  const guidanceImages = [
    { img: 'home_m.jpg',  day: 'پیر',    label: 'ناشتہ' },
    { img: 'home_m2.jpg', day: 'بدھ', label: 'دوپہر'     },
    { img: 'home_m3.jpg', day: 'جمعہ',    label: 'رات'    },
  ];

  const foodImages = [
    { img: 'home1.jpg', caption: 'تازہ اجزاء' },
    { img: 'home2.jpg', caption: 'جلدی کھانے'        },
    { img: 'home3.jpg', caption: 'صحت مند کھانے'      },
  ];

  const stats = [
    { number: '500+', label: 'کھانے'      },
    { number: '50K+', label: 'خوش گاہک'  },
    { number: '6',    label: 'سمارٹ ٹولز'  },
    { number: '4.9★', label: 'صارفین کی رائے'  },
  ];

  const cookSteps = [
    { num: '1', icon: 'fas fa-box-open',    title: 'پینٹری بھرو',  desc: 'اپنے اجزاء ڈالو'      },
    { num: '2', icon: 'fas fa-robot',       title: 'کھانا دیکھو',  desc: 'AI سے مشورے'    },
    { num: '3', icon: 'fas fa-calendar-alt',title: 'پلان بناو',    desc: 'پہلے سے کھانے بتاؤ'      },
    { num: '4', icon: 'fas fa-utensils',    title: 'پکاؤ!',        desc: 'آسان طریقے سے'     },
  ];

  return (
    <div className="ur-home-container" dir="rtl">

      {/* ══════════════════════════════════════════════════
          ABOVE THE FOLD  —  image 40% + cook section 60%
          ══════════════════════════════════════════════════ */}
      <div className="ur-above-fold-wrapper">

        {/* HERO — 40% */}
        <div className="ur-chefbot-hero">
          <div className="ur-chefbot-slider">
            <img src="/1.png" alt="ChefBot slide 1" className="ur-chefbot-slide-image" />
            <img src="/2.png" alt="ChefBot slide 2" className="ur-chefbot-slide-image" />
          </div>
        </div>

        {/* COOK TODAY — 60% */}
        <div className="ur-cook-today-section">

          {/* LEFT — title, search, buttons */}
          <div className="ur-cook-left">
            <h2 className="ur-cook-title">
              آج کیا <em>پکانا</em> چاہتے ہو؟
            </h2>

            <p className="ur-cook-sub">
              کوئی ڈش ڈھونڈو یا AI سے مشورہ لو
            </p>

            <div className="ur-cook-search">
              <i className="fas fa-search ur-cook-search-icon"></i>
              <input
                className="ur-cook-search-input"
                placeholder="کھانا ڈھونڈو…"
              />
              <button className="ur-cook-search-btn">ڈھونڈو</button>
            </div>

            <div className="ur-cook-btns">
              <button className="ur-cook-btn-primary">پینٹری سے شروع کرو</button>
              <button className="ur-cook-btn-secondary">کھانا ڈھونڈو</button>
            </div>
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="ur-cook-vdivider"></div>

          {/* RIGHT — 2×2 step cards */}
          <div className="ur-cook-right">
            <p className="ur-cook-steps-label">کیسے کام کرتا ہے</p>
            <div className="ur-cook-steps-grid">
              {cookSteps.map((s) => (
                <div className="ur-cook-step-card" key={s.num}>
                  <div className="ur-cook-step-top">
                    <div className="ur-cook-step-icon">
                      <i className={s.icon}></i>
                    </div>
                    <span className="ur-cook-step-num">{s.num}</span>
                  </div>
                  <h4 className="ur-cook-step-title">{s.title}</h4>
                  <p className="ur-cook-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      {/* END ABOVE FOLD */}

      {/* Wave bridge */}
      <div className="ur-fold-bridge"></div>

      {/* ══════════════════════════════════════════════════
          FEATURES
          ══════════════════════════════════════════════════ */}
      <section className="ur-h-features-section">
        <div className="ur-h-features-header">
          <h2 className="ur-h-features-title">
            کھانا پکانے کے لیے سب کچھ <em>آسان</em> طریقے سے
          </h2>
        </div>
        <div className="ur-h-features-grid">
          {features.map((feature, index) => (
            <Link
              to={feature.path}
              key={index}
              className="ur-h-feature-box"
              style={{ textDecoration: 'none' }}
            >
              <div className="ur-h-feature-image">
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className="ur-h-feature-content">
                <h3 className="ur-h-feature-title">{feature.title}</h3>
                <span className="ur-h-feature-link">
                  دیکھو <i className="fas fa-arrow-left"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          DIGITAL COOKING BANNER
          ══════════════════════════════════════════════════ */}
      <section className="ur-digital-banner">
        <div className="ur-digital-banner-left">
          <span className="ur-digital-banner-tag">
            <i className="fas fa-leaf"></i> ڈیجیٹل کھانا
          </span>
          <h2 className="ur-digital-banner-title">
            باہر جانے کی ضرورت نہیں۔<br />
            <em>سمارٹ طریقے سے</em> پکاؤ جو تمہارے پاس ہے۔
          </h2>
          <p className="ur-digital-banner-desc">
            ChefBot کی AI پینٹری سے کھانا بناو
          </p>
          <Link to="/smart-pantry-urdu" className="ur-digital-banner-btn">
            سیکھنا شروع کرو <i className="fas fa-arrow-left"></i>
          </Link>
        </div>
        <div className="ur-digital-banner-right">
          <div className="ur-digital-banner-img-wrap">
            <img src="beginners.jpg" alt="Smart kitchen" />
            <div className="ur-digital-banner-badge">
              <i className="fas fa-robot"></i>
              <span>AI سے مدد</span>
            </div>
          </div>
          <div className="ur-digital-stats-row">
            {stats.map((s, i) => (
              <div className="ur-digital-stat" key={i}>
                <span className="ur-digital-stat-num">{s.number}</span>
                <span className="ur-digital-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOOD SHOWCASE
          ══════════════════════════════════════════════════ */}
      <section className="ur-food-showcase">
        <div className="ur-food-showcase-header">
          <span className="ur-food-eyebrow">ہمارے کچن سے</span>
          <h3 className="ur-food-showcase-title">پیار سے پکایا، خوشی سے پیش کیا</h3>
        </div>
        <div className="ur-food-showcase-grid">
          {foodImages.map((item, index) => (
            <div className="ur-food-card" key={index}>
              <img src={item.img} className="ur-food-image" alt={item.caption} />
              <div className="ur-food-card-overlay"><span>{item.caption}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CLASSES / BEGINNERS
          ══════════════════════════════════════════════════ */}
      <section className="ur-classes-section">
        <div className="ur-classes-img-wrap">
          <img src="home_gui.jpg" className="ur-classes-image" alt="AI Kitchen" />
          <div className="ur-classes-img-badge">
            <i className="fas fa-graduation-cap"></i>
            <span>نئے لوگوں کے لیے</span>
          </div>
        </div>
        <div className="ur-classes-content">
          <div className="ur-section-label">کھانا پکانا سیکھو</div>
          <h2>نئے لوگ آسان طریقے سے سیکھیں<br /><em>آسان</em> طریقے سے</h2>
          <p>
            کھانا پکانے کی بنیادی باتیں سیکھو قدم بہ قدم۔ پینٹری کو ترتیب دو،
            اور سمجھداری سے خریداری کرو۔
          </p>
          <div className="ur-classes-checklist">
            <div className="ur-classes-check-item"><i className="fas fa-check-circle"></i> قدم بہ قدم ہدایات</div>
            <div className="ur-classes-check-item"><i className="fas fa-check-circle"></i> پینٹری ترتیب دینے کے طریقے</div>
            <div className="ur-classes-check-item"><i className="fas fa-check-circle"></i> سمجھداری سے خریداری</div>
          </div>
          <Link to="/guidance" className="ur-classes-cta-btn">
            اپنا سفر شروع کرو <i className="fas fa-arrow-left"></i>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MEAL PLAN
          ══════════════════════════════════════════════════ */}
      <section className="ur-m_plan-section">
        <div className="ur-m_plan-header">
          <div className="ur-m_plan-title">
            <div className="ur-section-label-light">کھانے کا منصوبہ</div>
            <h2>اب کبھی سوچنا مت پڑے گا<br /><em>'آج کیا پکاؤں؟'</em></h2>
            <p className="ur-m_plan-subtitle">سمارٹ ہفتہ وار پلان بناو جو وقت اور پیسہ بچاؤ۔</p>
          </div>
          <Link to="/smart-planner-urdu" className="ur-btn">پلان بناو <i className="fas fa-arrow-left"></i></Link>
        </div>
        <div className="ur-m_plan-grid">
          {guidanceImages.map((item, index) => (
            <div className="ur-m_plan-card" key={index}>
              <img src={item.img} alt={item.day} />
              <div className="ur-m_plan-card-info">
                <span className="ur-m_plan-day">{item.day}</span>
                <span className="ur-m_plan-meal">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          POPULAR RECIPES
          ══════════════════════════════════════════════════ */}
      <section className="ur-h-recipes-section">
        <div className="ur-h-recipes-container">
          <div className="ur-h-recipes-header">
            <span className="ur-recipes-eyebrow">شیف کی پسند</span>
            <h2 className="ur-h-recipes-title">مشہور کھانا دیکھو</h2>
            <p className="ur-h-recipes-subtitle">ChefBot AI کی طرف سے چنی ہوئی مزیدار مشہور کھانے</p>
          </div>
          <div className="ur-h-recipes-grid">
            {recipes.map((recipe, index) => (
              <div key={index} className="ur-h-recipe-card">
                <div className="ur-h-recipe-image">
                  <img src={recipe.image} alt={recipe.name} />
                  <div className="ur-recipe-category">{recipe.category}</div>
                  <div className="ur-recipe-time"><i className="fas fa-clock"></i> {recipe.time}</div>
                </div>
                <div className="ur-h-recipe-content">
                  <div className="ur-recipe-stars">{'★'.repeat(recipe.rating)}{'☆'.repeat(5 - recipe.rating)}</div>
                  <h3 className="ur-h-recipe-name">{recipe.name}</h3>
                  <p className="ur-h-recipe-description">{recipe.description}</p>
                  <Link to="/recipes" className="ur-h-recipe-btn">مشہور کھانے<i className="fas fa-arrow-left"></i></Link>
                </div>
              </div>
            ))}
          </div>
          <div className="ur-h-recipes-footer">
            <Link to="/recipes" className="ur-h-recipes-view-all">سب مشہور کھانے دیکھو <i className="fas fa-arrow-left"></i></Link>
          </div>
        </div>
      </section>

      {/* MEAL SUGGESTOR POPUP */}
      {showMealSuggestor && (
        <div className="ur-meal-suggestor-popup active">
          <div className="ur-meal-suggestor-popup-header">
            <h3><i className="fas fa-robot"></i> کھانے کی تجاویز</h3>
            <button className="ur-close-popup" onClick={toggleMealSuggestor}><i className="fas fa-times"></i></button>
          </div>
          <div className="ur-meal-suggestor-chat-body">
            <div className="ur-chat-message bot">
              <div className="ur-message-content">
                <p>ہیلو! میں تمہارا مددگار ہوں۔</p>
                <p>• "ناشتے کی تجاویز"</p>
                <p>• "دوپہر کے کھانے"</p>
                <p>• "سبزی والا کھانا"</p>
              </div>
            </div>
          </div>
          <div className="ur-meal-suggestor-chat-footer">
            <input type="text" className="ur-chat-input" placeholder="کھانے کے بارے میں پوچھو..." />
            <button className="ur-chat-send-btn"><i className="fas fa-paper-plane"></i></button>
          </div>
        </div>
      )}

    </div>
  );
};

export default UrduHomePage;