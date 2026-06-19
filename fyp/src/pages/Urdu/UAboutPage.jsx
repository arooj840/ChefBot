import { useNavigate } from 'react-router-dom'
import './UAboutPage.css'

export default function UAboutPage() {
  const navigate = useNavigate()

  return (
    <div className="ur-about-page" dir="rtl">
      {/* Hero Section */}
      <section className="ur-about-hero">
        <div className="ur-hero-content">
          <h1>اباؤٹ</h1>
          <p>شیف بوٹ - تمہارا کچن مددگار</p>
        </div>
      </section>

      {/* What is ChefBot + Mission - Combined Row */}
      <section className="ur-about-section ur-combined-section">
        <div className="ur-section-container">
          <div className="ur-two-col-grid">
            {/* What is ChefBot */}
            <div className="ur-info-card">
              <div className="ur-info-card-inner">
                <div className="ur-info-text">
                  <h2>شیف بوٹ کیا ہے؟</h2>
                  <p>شیف بوٹ آپ کا ذاتی باورچی خانہ کا ساتھی ہے جو روزمرہ کی کھانا پکانے کو آسان،اور محفوظ بناتا ہے۔</p>
                  <p>یہ آپ کی پینٹری کو ٹریک کرتا ہے، دستیاب اشیاء سے کھانے تجویز کرتا ہے، کھانا پکانے کی ہدایات واضح طریقے سے بتاتا ہے، اور آلات کو محفوظ طریقے سے چلانا بتائے۔</p>
                </div>
                <div className="ur-info-image">
                  <img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=250&fit=crop" alt="کھانا پکانا" className="ur-section-image" />
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="ur-info-card ur-alt">
              <h2>ہمارا مقصد</h2>
              <p>ہر گھر کے کھانے والے کو ذہین باورچی خانہ کے آلات دینا جو روزمرہ کو آسان بنائیں، کھانے کی ضائع کو کم کریں، اور اعتماد بڑھائیں۔</p>
             <div className="ur-mission-highlights">
  <div className="ur-highlight" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', direction: 'rtl' }}>
    <span className="ur-highlight-icon">✓</span>
    <span>کھانا پکانے کو آسان بنانا</span>
  </div>
  <div className="ur-highlight" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', direction: 'rtl' }}>
    <span className="ur-highlight-icon">✓</span>
    <span>کھانے کی ضائع کو کم کرنا</span>
  </div>
  <div className="ur-highlight" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', direction: 'rtl' }}>
    <span className="ur-highlight-icon">✓</span>
    <span>باورچی خانہ میں اعتماد بڑھانا</span>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Only */}
      <section className="ur-about-section ur-alt-bg">
        <div className="ur-section-container">
          <div className="ur-benefits-wrapper">
            <h2 className="ur-section-title">اہم فوائد</h2>
            <div className="ur-benefits-grid">
              {[
                { num: "01", title: "وقت بچائیں", desc: "اپنی پینٹری سے فوری کھانے کے مشورے لو۔" },
                { num: "02", title: "کھانا بچائیں", desc: "اپنے پاس موجود اشیاء استعمال کریں۔" },
                { num: "03", title: "محفوظ طریقے سے سیکھیں", desc: "نئے لوگوں کے لیے آلات کی رہنمائی۔" },
                { num: "04", title: "آرگنائزڈ رہو", desc: "پینٹری،  لسٹ، پلان ایک جگہ۔" },
              ].map((b, i) => (
                <div className="ur-benefit-card" key={i}>
                  <div className="ur-benefit-number">{b.num}</div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="ur-about-section ur-about-works">
        <div className="ur-section-container">
          <h2 className="ur-section-title">یہ کیسے کام کرتا ہے</h2>
          <div className="ur-steps-grid">
            {[
              { num: 1, title: "اکاؤنٹ بنائیں", desc: "ای میل اور پاس ورڈ سے سائن اپ کریں" },
              { num: 2, title: "پینٹری شامل کریں", desc: "اپنی اشیاء کی فہرست بنائیں" },
              { num: 3, title:  "مشورے لو", desc: "کھانے کے مشورے لو" },
              { num: 4, title: "کھائیں اور لطف اٹھائیں", desc:" آسان طریقے سے پکا" },
            ].map((s, i) => (
              <div className="ur-step-card" key={i}>
                <div className="ur-step-circle">{s.num}</div>
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