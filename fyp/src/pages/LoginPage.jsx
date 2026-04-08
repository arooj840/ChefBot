import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');  // ✅ Error state for message
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Please enter both username and password!");  // ✅ Set error instead of alert
      return;
    }

    try {
      setLoading(true);
      setError('');  // Clear previous error
      
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.username,
          password: formData.password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed!");  // ✅ Set error instead of alert
        setLoading(false);
        return;
      }

      // Save token and user info
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // ✅ No alert - direct redirect
      navigate('/home');
      
    } catch (err) {
      console.error(err);
      setError("Something went wrong! Try again.");  // ✅ Set error instead of alert
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-page-container">
        {/* LEFT PANEL */}
        <div className="login-left-panel">
          <div className="login-logo-container">
            <div className="login-logo-circle">
              <img src="/logo.png" alt="ChefBot Logo" className="login-logo-img" />
            </div>
            <div className="login-logo-text">
              <h1>ChefBot</h1>
              <p>Your AI Cooking Assistant</p>
            </div>
          </div>
          <div className="login-welcome-section">
            <h2>Welcome Back!</h2>
            <p>Sign in to continue your culinary journey with personalized recipes and guidance.</p>
          </div>
          <ul className="login-features-list">
            <li><i className="fas fa-check-circle"></i> Personalized meal recommendations</li>
            <li><i className="fas fa-check-circle"></i> Smart meal planning tools</li>
            <li><i className="fas fa-check-circle"></i> Step-by-step cooking guidance</li>
            <li><i className="fas fa-check-circle"></i> Digital shopping list</li>
          </ul>
        </div>

        {/* RIGHT PANEL */}
        <div className="login-right-panel">
          <div className="login-form-header">
            <h2>Login to Your Account</h2>
            <p>Enter your credentials to access ChefBot</p>
          </div>

          {/* ✅ Error Message Display */}
          {error && (
            <div className="login-error-message">
              <i className="fas fa-exclamation-circle"></i> {error}
            </div>
          )}

          <form className="login-form-container" onSubmit={handleSubmit}>
            <div className="login-form-group">
              <label className="login-form-label" htmlFor="username">Username or Email</label>
              <input
                className="login-input"
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username or email"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="login-form-group">
              <label className="login-form-label" htmlFor="password">Password</label>
              <div className="login-input-wrapper">
                <input
                  className="login-input"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={togglePasswordVisibility}
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  <i className={showPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="login-remember">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleInputChange}
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="login-forgot">Forgot Password?</Link>
            </div>

            <button type="submit" className="login-submit-btn" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="login-signup-link">
              Don't have an account? <Link to="/signup">Sign up now</Link>
            </div>

            <div className="login-divider">
              <span>Or continue with</span>
            </div>

            <div className="login-social-login">
              <button type="button" className="login-social-btn login-social-google">G</button>
              <button type="button" className="login-social-btn login-social-facebook">f</button>
              <button type="button" className="login-social-btn login-social-twitter">𝕏</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;