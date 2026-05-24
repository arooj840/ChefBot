import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UrduForgotPasswordPage.css';

const UrduForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Clear messages when email changes
  useEffect(() => {
    setMessage('');
    setError('');
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('براہ کرم درست ای میل لکھو!');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'او ٹی پی بھیجنے میں مسئلہ ہوا۔ دوبارہ کوشش کرو۔');
        setLoading(false);
        return;
      }

      // Optional: save temporary token from backend for OTP verification
      if (data.tempToken) {
        localStorage.setItem('otpToken', data.tempToken);
      }

      setMessage(data.message || 'او ٹی پی تمہارے ای میل پر بھیج دیا گیا ہے!');

      // Navigate to OTP verification page after 2 seconds
      setTimeout(() => {
        navigate('/urdu-verify-otp', { state: { email } });
      }, 2000);

    } catch (err) {
      console.error('Forgot password error:', err);
      setError('کچھ غلط ہو گیا! انٹرنیٹ چیک کرو اور دوبارہ کوشش کرو۔');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ur-forgot-page-wrapper" dir="rtl">
      <div className="ur-forgot-page-container">
        {/* LEFT PANEL */}
        <div className="ur-forgot-left-panel">
          <div className="ur-forgot-logo-container">
            <div className="ur-forgot-logo-circle">
              <img src="/logo.png" alt="ChefBot Logo" className="ur-forgot-logo-img" />
            </div>
            <div className="ur-forgot-logo-text">
              <h1>شیف بوٹ</h1>
              <p>تمہارا AI کچن مددگار</p>
            </div>
          </div>

          <div className="ur-forgot-welcome-section">
            <h2>پاسورڈ بھول گئے؟</h2>
            <p>فکر نہ کرو! ہم تمہاری مدد کریں گے۔</p>
          </div>

          <ul className="ur-forgot-steps-list">
            <li><i className="fas fa-envelope"></i> اپنا ای میل لکھو</li>
            <li><i className="fas fa-key"></i> او ٹی پی نمبر لو</li>
            <li><i className="fas fa-lock"></i> نیا پاسورڈ بناو</li>
            <li><i className="fas fa-utensils"></i> کھانا پکانا جاری رکھو</li>
          </ul>
        </div>

        {/* RIGHT PANEL */}
        <div className="ur-forgot-right-panel">
          <div className="ur-forgot-form-header">
            <h2>پاسورڈ بدلو</h2>
            <p>اپنا ای میل لکھو، ہم او ٹی پی بھیجیں گے</p>
          </div>

          {message && <div className="ur-forgot-success-message"><i className="fas fa-check-circle"></i> {message}</div>}
          {error && <div className="ur-forgot-error-message"><i className="fas fa-exclamation-circle"></i> {error}</div>}

          <form className="ur-forgot-form-container" onSubmit={handleSubmit}>
            <div className="ur-forgot-form-group">
              <label className="ur-forgot-form-label" htmlFor="email">ای میل</label>
              <div className="ur-forgot-input-wrapper">
                <input
                  className="ur-forgot-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="اپنا ای میل لکھو"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
                <i className="fas fa-envelope ur-forgot-input-icon"></i>
              </div>
            </div>

            <button type="submit" className="ur-forgot-submit-btn" disabled={loading}>
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> او ٹی پی بھیج رہے ہیں...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> او ٹی پی بھیجو
                </>
              )}
            </button>

            <div className="ur-forgot-back-link">
              <Link to="/urdu-login"><i className="fas fa-arrow-right"></i> واپس لاگ ان پر</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UrduForgotPasswordPage;