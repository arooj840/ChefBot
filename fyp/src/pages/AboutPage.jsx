import { useNavigate } from 'react-router-dom'
import './AboutPage.css'

export default function AboutPage() {
  const navigate = useNavigate()

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>ChefBot - Your Personal Kitchen Assistant</p>
        </div>
      </section>

      {/* What is ChefBot + Mission - Combined Row */}
      <section className="about-section combined-section">
        <div className="section-container">
          <div className="two-col-grid">
            {/* What is ChefBot */}
            <div className="info-card">
              <div className="info-card-inner">
                <div className="info-text">
                  <h2>What is ChefBot?</h2>
                  <p>ChefBot is your personal kitchen assistant designed to make everyday cooking easier and safe whether you're a beginner or experienced cook.</p>
                  <p>It tracks your pantry, suggests meals,explains cooking steps clearly, and guides appliance safety.</p>
                </div>
                <img src="/about-cooking.jpg" alt="Cooking" className="section-image" />
                <div className="info-image">
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="info-card alt">
              <h2>Our Mission</h2>
              <p>To empower every home cook with intelligent kitchen tools that simplify routines, reduce food wastage, and build confidence.</p>
              <div className="mission-highlights">
                <div className="highlight"><span className="highlight-icon">✓</span><span>Simplify cooking routines</span></div>
                <div className="highlight"><span className="highlight-icon">✓</span><span>Reduce food wastage</span></div>
                <div className="highlight"><span className="highlight-icon">✓</span><span>Build confidence in kitchen</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Only */}
      <section className="about-section alt-bg">
        <div className="section-container">
          <div className="benefits-wrapper">
            <h2 className="section-title">Key Benefits</h2>
            <div className="benefits-grid">
              {[
                { num: "01", title: "Save Time", desc: "Instant meal suggestions from your pantry." },
                { num: "02", title: "Reduce Waste", desc: "Use ingredients you already have." },
                { num: "03", title: "Learn Safely", desc: "Guidance for beginners on tools & methods." },
                { num: "04", title: "Stay Organized", desc: "Pantry, lists & plans in one place." },
              ].map((b, i) => (
                <div className="benefit-card" key={i}>
                  <div className="benefit-number">{b.num}</div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="about-section about-works">
        <div className="section-container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            {[
              { num: 1, title: "Create Account", desc: "Sign up with email & password" },
              { num: 2, title: "Add Pantry", desc: "List your ingredients" },
              { num: 3, title: "Get Suggestions", desc: "Receive meal recommendations" },
              { num: 4, title: "Cook & Enjoy", desc: "Follow guidance confidently" },
            ].map((s, i) => (
              <div className="step-card" key={i}>
                <div className="step-circle">{s.num}</div>
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