import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './UrduLoginPage.css';

const UrduLoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  
  const from = location.state?.from || '/urdu-home';
  
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
      setError("یوزر نام اور پاسورڈ دونوں لکھو!");
      return;
    }

    try {
      setLoading(true);
      setError('');
      
      const result = await login(formData.username, formData.password);
      
      if (result.success) {
        navigate(from, { replace: true });
      } else {
        setError(result.error);
      }
    } catch (err) {
      console.error(err);
      setError("کچھ غلط ہو گیا! دوبارہ کوشش کرو۔");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ur-login-page-wrapper" dir="rtl">
      <div className="ur-login-page-container">
        {/* LEFT PANEL */}
        <div className="ur-login-left-panel">
          <div className="ur-login-logo-container">
            <div className="ur-login-logo-circle">
              <img src="/logo.png" alt="ChefBot Logo" className="ur-login-logo-img" />
            </div>
            <div className="ur-login-logo-text">
              <h1>شیف بوٹ</h1>
              <p>تمہارا AI کچن مددگار</p>
            </div>
          </div>
          <div className="ur-login-welcome-section">
            <h2>واپس آؤ!</h2>
            <p>لاگ ان کرو اور اپنا کھانا پکانے کا سفر جاری رکھو</p>
          </div>
          <ul className="ur-login-features-list">
            <li><i className="fas fa-check-circle"></i> کھانا ڈھونڈو</li>
            <li><i className="fas fa-check-circle"></i> آسان کھانے کا پلان</li>
            <li><i className="fas fa-check-circle"></i> کھانا پکانے کا طریقہ سیکھو</li>
            <li><i className="fas fa-check-circle"></i> خریداری کی لسٹ</li>
          </ul>
        </div>

        {/* RIGHT PANEL */}
        <div className="ur-login-right-panel">
          <div className="ur-login-form-header">
            <h2>لاگ ان کرو</h2>
            <p>اپنی معلومات لکھو</p>
          </div>

          {error && (
            <div className="ur-login-error-message">
              <i className="fas fa-exclamation-circle"></i> {error}
            </div>
          )}

          <form className="ur-login-form-container" onSubmit={handleSubmit}>
            <div className="ur-login-form-group">
              <label className="ur-login-form-label" htmlFor="username">یوزر نام یا ای میل</label>
              <input
                className="ur-login-input"
                type="text"
                id="username"
                name="username"
                placeholder="یوزر نام یا ای میل لکھو"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="ur-login-form-group">
              <label className="ur-login-form-label" htmlFor="password">پاسورڈ</label>
              <div className="ur-login-input-wrapper">
                <input
                  className="ur-login-input"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="پاسورڈ لکھو"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="ur-login-password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <i className={showPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                </button>
              </div>
            </div>

            <div className="ur-login-options">
              <label className="ur-login-remember">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleInputChange}
                />
                یاد رکھو
              </label>
              <Link to="/forgot-password" className="ur-login-forgot">پاسورڈ بھول گئے؟</Link>
            </div>

            <button type="submit" className="ur-login-submit-btn" disabled={loading}>
              {loading ? 'لاگ ان ہو رہا ہے...' : 'لاگ ان کرو'}
            </button>

            <div className="ur-login-signup-link">
              اکاؤنٹ نہیں ہے؟ <Link to="/urdu-signup">اکاؤنٹ بناو</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UrduLoginPage;