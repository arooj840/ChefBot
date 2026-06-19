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
    console.log('Message:', formData)
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(''), 3000)
  }

  return (
    <div className="ur-contact-page" dir="rtl">

      {/* Hero */}
      <section className="ur-contact-hero">
        <div className="ur-hero-content">
          <h1>کانٹیکٹ اس</h1>
         <p>ہم سے رابطہ کرو۔</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="ur-contact-main">
        <div className="ur-contact-container">

          {/* LEFT - Info */}
          <div className="ur-contact-left">
            <h2>ہم مدد کرنا پسند کریں گے!</h2>
            <p>شیف بوٹ کے بارے میں سوالات؟ مدد چاہیے؟</p>

            <div className="ur-contact-info">
              <div className="ur-info-box">
                <h3>پتہ</h3>
                <p>فیکلٹی آف آئی ٹی، گورنمنٹ گریجویٹ کالج فار ویمن<br />سیٹلائٹ ٹاؤن، گوجرانوالہ، پنجاب</p>
              </div>
              <div className="ur-info-box">
                <h3>ای میل</h3>
                <p>
                  <a href="mailto:support@chefbot.com">support@chefbot.com</a><br />
                  <a href="mailto:info@chefbot.com">info@chefbot.com</a>
                </p>
              </div>
              <div className="ur-info-box">
                <h3>فون</h3>
                <p>+92 30...........<br /><small></small></p>
              </div>
              <div className="ur-info-box">
                <h3>ہمیں فالو کریں</h3>
                <div className="ur-social-links">
                  <a href="#">فیس بک</a>
                  <a href="#">ٹوئٹر</a>
                  <a href="#">انسٹاگرام</a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="ur-contact-right">
            <div className="ur-form-box">
              {status === 'success' && (
                <div className="ur-alert success">✓ پیغام کامیابی سے بھیج دیا گیا!</div>
              )}
              {status === 'error' && (
                <div className="ur-alert error">✗ براہ کرم تمام خانے پُر کریں۔</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="ur-form-group">
                  <label>نام *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="آپ کا نام" />
                </div>
                <div className="ur-form-group">
                  <label>ای میل *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="آپ کی ای میل" />
                </div>
                <div className="ur-form-group">
                  <label>پیغام *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="ہمیں کچھ بتائیں..." rows="4"></textarea>
                </div>
                <button type="submit" className="ur-submit-btn">پیغام بھیجیں</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}