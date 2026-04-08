import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
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
      setError('Please enter a valid email address!');
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
        setError(data.message || 'Failed to send OTP. Try again.');
        setLoading(false);
        return;
      }

      // Optional: save temporary token from backend for OTP verification
      if (data.tempToken) {
        localStorage.setItem('otpToken', data.tempToken);
      }

      setMessage(data.message || 'OTP has been sent to your email address!');

      // Navigate to OTP verification page after 2 seconds
      setTimeout(() => {
        navigate('/verify-otp', { state: { email } });
      }, 2000);

    } catch (err) {
      console.error('Forgot password error:', err);
      setError('Something went wrong! Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-page-wrapper">
      <div className="forgot-page-container">
        {/* LEFT PANEL */}
        <div className="forgot-left-panel">
          <div className="forgot-logo-container">
            <div className="forgot-logo-circle">
              <img src="/logo.png" alt="ChefBot Logo" className="forgot-logo-img" />
            </div>
            <div className="forgot-logo-text">
              <h1>ChefBot</h1>
              <p>Your AI Cooking Assistant</p>
            </div>
          </div>

          <div className="forgot-welcome-section">
            <h2>Forgot Password?</h2>
            <p>Don't worry! We'll help you reset it and get back to cooking delicious meals.</p>
          </div>

          <ul className="forgot-steps-list">
            <li><i className="fas fa-envelope"></i> Enter your registered email</li>
            <li><i className="fas fa-key"></i> Receive OTP verification code</li>
            <li><i className="fas fa-lock"></i> Create new password</li>
            <li><i className="fas fa-utensils"></i> Continue your culinary journey</li>
          </ul>
        </div>

        {/* RIGHT PANEL */}
        <div className="forgot-right-panel">
          <div className="forgot-form-header">
            <h2>Reset Password</h2>
            <p>Enter your email address and we'll send you an OTP to reset your password.</p>
          </div>

          {message && <div className="forgot-success-message"><i className="fas fa-check-circle"></i> {message}</div>}
          {error && <div className="forgot-error-message"><i className="fas fa-exclamation-circle"></i> {error}</div>}

          <form className="forgot-form-container" onSubmit={handleSubmit}>
            <div className="forgot-form-group">
              <label className="forgot-form-label" htmlFor="email">Email Address</label>
              <div className="forgot-input-wrapper">
                <input
                  className="forgot-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
                <i className="fas fa-envelope forgot-input-icon"></i>
              </div>
            </div>

            <button type="submit" className="forgot-submit-btn" disabled={loading}>
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending OTP...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Send Reset OTP
                </>
              )}
            </button>

            <div className="forgot-back-link">
              <Link to="/login-page"><i className="fas fa-arrow-left"></i> Back to Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;