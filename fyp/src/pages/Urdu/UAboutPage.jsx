import { useNavigate } from 'react-router-dom'
import './UAboutPage.css'

export default function UAboutPage() {
  const navigate = useNavigate()

  return (
    <div className="u-about-page">
      {/* Hero Section */}
      <section className="u-about-hero">
        <div className="u-hero-content">
          <h1>ہمارے بارے میں</h1>
          <p>شیف بوٹ - آپ کا ذاتی باورچی خانہ کا ساتھی</p>
        </div>
      </section>

      {/* What is ChefBot + Mission - Combined Row */}
      <section className="u-about-section u-combined-section">
        <div className="u-section-container">
          <div className="u-two-col-grid">
            {/* What is ChefBot */}
            <div className="u-info-card">
              <div className="u-info-card-inner">
                <div className="u-info-text">
                  <h2>شیف بوٹ کیا ہے؟</h2>
                  <p>شیف بوٹ آپ کا ذاتی باورچی خانہ کا ساتھی ہے جو روزمرہ کی کھانا پکانے کو آسان، محفوظ اور منظم بناتا ہے۔ چاہے آپ نئے ہوں یا تجربہ کار۔</p>
                  <p>یہ آپ کی پینٹری کو ٹریک کرتا ہے، دستیاب اشیاء سے کھانے تجویز کرتا ہے، کھانا پکانے کی ہدایات واضح طریقے سے بتاتا ہے، اور آلات کی حفاظت کی رہنمائی کرتا ہے۔</p>
                </div>
                <div className="u-info-image">
                  <img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=250&fit=crop" alt="کھانا پکانا" className="u-section-image" />
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="u-info-card u-alt">
              <h2>ہمارا مقصد</h2>
              <p>ہر گھر کے کھانے والے کو ذہین باورچی خانہ کے آلات دینا جو روزین کو آسان بنائیں، کھانے کی ضائع کو کم کریں، اور اعتماد بڑھائیں۔</p>
              <div className="u-mission-highlights">
                <div className="u-highlight"><span className="u-highlight-icon">✓</span><span>کھانا پکانے کو آسان بنانا</span></div>
                <div className="u-highlight"><span className="u-highlight-icon">✓</span><span>کھانے کی ضائع کو کم کرنا</span></div>
                <div className="u-highlight"><span className="u-highlight-icon">✓</span><span>باورچی خانہ میں اعتماد بڑھانا</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features + Benefits - Side by Side */}
      <section className="u-about-section u-alt-bg">
        <div className="u-section-container">
          <div className="u-two-col-grid">
            {/* Why Choose ChefBot */}
            <div>
              <h2 className="u-section-title">شیف بوٹ کو کیوں منتخب کریں؟</h2>
              <div className="u-features-grid">
                {[
                  { title: "پینٹری کی نگرانی", desc: "اشیاء کو ڈجیٹل طریقے سے ٹریک کریں" },
                  { title: "ذہین کھانے کی تجاویز", desc: "آپ کی پینٹری سے سفارشات" },
                  { title: "کھانے کی منصوبہ بندی", desc: "روزانہ یا ہفتہ وار منصوبہ بنائیں" },
                  { title: "مرحلہ وار رہنمائی", desc: "واضح کھانا پکانے کی ہدایات" },
                  { title: "باورچی خانہ کی حفاظت", desc: "آلات کے استعمال کی رہنمائی" },
                  { title: "ذہین الارمیں", desc: "کھانا پکانے کی ٹائمریں اور یادیں" },
                  { title: "وائس اور ٹیکسٹ", desc: "بغیر ہاتھ استعمال کریں" },
                  { title: "خریداری کی فہرست", desc: "ڈجیٹل خریداری کا انتظام" },
                ].map((f, i) => (
                  <div className="u-feature-card" key={i}>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="u-section-title">اہم فوائل</h2>
              <div className="u-benefits-grid">
                {[
                  { num: "01", title: "وقت بچائیں", desc: "اپنی پینٹری سے فوری کھانے کی تجاویز۔" },
                  { num: "02", title: "کھانا بچائیں", desc: "اپنے پاس موجود اشیاء استعمال کریں۔" },
                  { num: "03", title: "محفوظ طریقے سے سیکھیں", desc: "نئے لوگوں کے لیے آلات کی رہنمائی۔" },
                  { num: "04", title: "منظم رہیں", desc: "پینٹری، فہرستیں اور منصوبے ایک جگہ۔" },
                ].map((b, i) => (
                  <div className="u-benefit-card" key={i}>
                    <div className="u-benefit-number">{b.num}</div>
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="u-about-section u-about-works">
        <div className="u-section-container">
          <h2 className="u-section-title">یہ کیسے کام کرتا ہے</h2>
          <div className="u-steps-grid">
            {[
              { num: 1, title: "اکاؤنٹ بنائیں", desc: "ای میل اور پاس ورڈ سے سائن اپ کریں" },
              { num: 2, title: "پینٹری شامل کریں", desc: "اپنی اشیاء کی فہرست بنائیں" },
              { num: 3, title: "تجاویز حاصل کریں", desc: "کھانے کی سفارشات وصول کریں" },
              { num: 4, title: "کھائیں اور لطف اٹھائیں", desc: "اعتماد سے رہنمائی کی پیروی کریں" },
            ].map((s, i) => (
              <div className="u-step-card" key={i}>
                <div className="u-step-circle">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}