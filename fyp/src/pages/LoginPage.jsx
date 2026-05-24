import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  
  // Jis page se aaya tha wahan wapas jayega
  const from = location.state?.from || '/home';
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
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
      setError("Please enter both username and password!");
      return;
    }

    try {
      setLoading(true);
      setError('');
      
      const result = await login(formData.username, formData.password);
      
      if (result.success) {
        // ✅ Login ke baad wahi page open hoga jahan se aaya tha
        navigate(from, { replace: true });
      } else {
        setError(result.error);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong! Try again.");
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;