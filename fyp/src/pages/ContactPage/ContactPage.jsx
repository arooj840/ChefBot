import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ContactPage.css'

export default function ContactPage() {
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
    <div className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with us. We'd love to hear from you.</p>
        </div>
      </section>

      {/* Main Content + FAQ - All in one section */}
      <section className="contact-main">
        <div className="contact-container">

          {/* LEFT - Info */}
          <div className="contact-left">
            <h2>We'd Love to Help!</h2>
            <p>Have questions about ChefBot? Need support? We typically respond within 24-48 hours on business days.</p>

            <div className="contact-info">
              <div className="info-box">
                <h3>Address</h3>
                <p>Faculty of IT, Govt. Graduate College for Women<br />Satellite Town, Gujranwala, Punjab</p>
              </div>
              <div className="info-box">
                <h3>Email</h3>
                <p>
                  <a href="mailto:support@chefbot.com">support@chefbot.com</a><br />
                  <a href="mailto:info@chefbot.com">info@chefbot.com</a>
                </p>
              </div>
              <div className="info-box">
                <h3>Phone</h3>
                <p>+92 30...........<br /><small>Mon - Fri, 9AM - 5PM</small></p>
              </div>
              <div className="info-box">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#">Facebook</a>
                  <a href="#">Twitter</a>
                  <a href="#">Instagram</a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="contact-right">
            <div className="form-box">
              {status === 'success' && (
                <div className="alert success">✓ Message sent successfully!</div>
              )}
              {status === 'error' && (
                <div className="alert error">✗ Please fill in all fields.</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more..." rows="4"></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Compact */}
      <section className="contact-faq alt-bg">
        <div className="contact-container-inner">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {[
              { q: "How fast is response?", a: "We typically respond within 24-48 hours during business days." },
              { q: "Do you offer customer support?", a: "Yes! Our support team is available Mon–Fri, 9AM to 5PM PKT." },
              { q: "How can I report a bug?", a: "Use the form above and describe the issue in detail." },
              { q: "Can I suggest a new feature?", a: "We love suggestions! Share them via the contact form." },
              { q: "Do you offer partnerships?", a: "Yes, we're open to partnerships. Get in touch with us." },
              { q: "Is ChefBot available on mobile?", a: "Currently web only. Mobile apps are in our future roadmap." },
            ].map((faq, i) => (
              <div className="faq-card" key={i}>
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