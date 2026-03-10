import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './UContactPage.css'

export default function UContactPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
      return
    }
    console.log('پیغام:', formData)
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(''), 3000)
  }

  return (
    <div className="u-contact-page">

      {/* Hero */}
      <section className="u-contact-hero">
        <div className="u-hero-content">
          <h1>ہم سے رابطہ کریں</h1>
          <p>ہم سے رابطہ کریں۔ ہم آپ سے سننے کے لیے بے تاب ہیں۔</p>
        </div>
      </section>

      {/* Main Content + FAQ - All in one section */}
      <section className="u-contact-main">
        <div className="u-contact-container">

          {/* LEFT - Info */}
          <div className="u-contact-left">
            <h2>ہم آپ کی مدد کرنا چاہتے ہیں!</h2>
            <p>شیف بوٹ کے بارے میں سوالات ہیں؟ مدد کی ضرورت ہے؟ ہم عام طور پر کاروباری دنوں میں 24-48 گھنٹوں میں جواب دیتے ہیں۔</p>

            <div className="u-contact-info">
              <div className="u-info-box">
                <h3>پتہ</h3>
                <p>فیکلٹی آف آئی ٹی، سرکاری گریجویٹ کالج برائے خواتین<br />سیٹلائٹ ٹاؤن، گوجرانوالہ، پنجاب</p>
              </div>
              <div className="u-info-box">
                <h3>ای میل</h3>
                <p>
                  <a href="mailto:support@chefbot.com">support@chefbot.com</a><br />
                  <a href="mailto:info@chefbot.com">info@chefbot.com</a>
                </p>
              </div>
              <div className="u-info-box">
                <h3>فون</h3>
                <p>+92 30...........<br /><small>سوموار - جمعہ، 9 صبح - 5 شام</small></p>
              </div>
              <div className="u-info-box">
                <h3>ہم سے فالو کریں</h3>
                <div className="u-social-links">
                  <a href="#">فیس بک</a>
                  <a href="#">ٹویٹر</a>
                  <a href="#">انسٹاگرام</a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="u-contact-right">
            <div className="u-form-box">
              {status === 'success' && (
                <div className="u-alert u-success">✓ پیغام کامیابی سے بھیجا گیا!</div>
              )}
              {status === 'error' && (
                <div className="u-alert u-error">✗ براہ کرم تمام فیلڈ پُر کریں۔</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="u-form-group">
                  <label>نام *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="آپ کا نام" />
                </div>
                <div className="u-form-group">
                  <label>ای میل *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                </div>
                <div className="u-form-group">
                  <label>پیغام *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="ہمیں مزید بتائیں..." rows="4"></textarea>
                </div>
                <button type="submit" className="u-submit-btn">پیغام بھیجیں</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Compact */}
      <section className="u-contact-faq u-alt-bg">
        <div className="u-contact-container-inner">
          <h2>اکثر پوچھے جانے والے سوالات</h2>
          <div className="u-faq-grid">
            {[
              { q: "جواب دینا کتنی تیزی سے ہے؟", a: "ہم عام طور پر کاروباری دنوں میں 24-48 گھنٹوں میں جواب دیتے ہیں۔" },
              { q: "کیا آپ کسٹمر سپورٹ فراہم کرتے ہیں؟", a: "جی! ہماری سپورٹ ٹیم سوموار–جمعہ، صبح 9 بجے سے شام 5 بجے تک دستیاب ہے۔" },
              { q: "میں بگ کی رپورٹ کیسے کروں؟", a: "اوپر دیے گئے فارم کو استعمال کریں اور مسئلہ تفصیل سے بیان کریں۔" },
              { q: "کیا میں نئی خصوصیت تجویز کر سکتا ہوں؟", a: "ہمیں تجاویز پسند ہیں! انہیں رابطہ فارم کے ذریعے شیئر کریں۔" },
              { q: "کیا آپ شراکت داری کی پیشکش کرتے ہیں؟", a: "جی، ہم شراکت داری کے لیے کھلے ہیں۔ ہم سے رابطہ کریں۔" },
              { q: "کیا شیف بوٹ موبائل پر دستیاب ہے؟", a: "فی الوقت صرف ویب۔ موبائل ایپس ہماری مستقبل کی منصوبہ بندی میں ہیں۔" },
            ].map((faq, i) => (
              <div className="u-faq-card" key={i}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}