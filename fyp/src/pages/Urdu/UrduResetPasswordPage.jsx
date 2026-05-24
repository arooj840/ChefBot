import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './UrduResetPasswordPage.css';

const UrduResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const resetToken = location.state?.resetToken;
  const email = location.state?.email;

  // Agar token nahi hai to redirect
  useEffect(() => {
    if (!resetToken) {
      setError('غلط لنک۔ دوبارہ کوشش کرو');
      setTimeout(() => {
        navigate('/urdu-forgot-password');
      }, 2000);
    }
  }, [resetToken, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      setError("پاسورڈز ایک جیسے نہیں ہیں!");
      return;
    }

    if (formData.newPassword.length < 6) {
      setError("پاسورڈ کم از کم 6 حروف کا ہونا چاہیے!");
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/reset-password', {
        resetToken: resetToken,
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword
      });

      console.log("Reset Password Response:", response.data);

      if (response.status === 200) {
        setMessage(response.data.message || 'پاسورڈ بدل دیا گیا!');
        setTimeout(() => {
          navigate('/urdu-login');
        }, 2000);
      } else {
        setError(response.data.message || 'پاسورڈ نہیں بدل سکے');
      }
    } catch (err) {
      console.error("Reset Password Error:", err);
      setError(err.response?.data?.message || 'سرور کی خرابی۔ دوبارہ کوشش کرو۔');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ur-reset-password-wrapper" dir="rtl">
      <div className="ur-reset-password-container">
        {/* LEFT PANEL */}
        <div className="ur-reset-left-panel">
          <div className="ur-reset-logo-container">
            <div className="ur-reset-logo-circle">
              <img src="/logo.png" alt="ChefBot Logo" className="ur-reset-logo-img" />
            </div>
            <div className="ur-reset-logo-text">
              <h1>شیف بوٹ</h1>
              <p>تمہارا AI کچن مددگار</p>
            </div>
          </div>
          <div className="ur-reset-welcome-section">
            <h2>نیا پاسورڈ بناو</h2>
            <p>نیا پاسورڈ پرانے سے مختلف ہونا چاہیے۔</p>
            
            {/* EMAIL DISPLAY */}
            <div style={{
              background: '#f0f0f0',
              padding: '10px 15px',
              borderRadius: '8px',
              marginTop: '15px',
              textAlign: 'center'
            }}>
              <i className="fas fa-envelope" style={{ color: '#ff6b35', marginLeft: '8px' }}></i>
              <strong style={{ color: '#333' }}>{email}</strong>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="ur-reset-right-panel">
          {message && (
            <div className="ur-reset-success-message">
              <i className="fas fa-check-circle"></i> {message}
            </div>
          )}
          {error && (
            <div className="ur-reset-error-message">
              <i className="fas fa-exclamation-circle"></i> {error}
            </div>
          )}

          <form className="ur-reset-form-container" onSubmit={handleSubmit}>
            <div className="ur-reset-form-group">
              <label className="ur-reset-form-label" htmlFor="newPassword">نیا پاسورڈ</label>
              <div className="ur-reset-input-wrapper">
                <input
                  className="ur-reset-input"
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  placeholder="نیا پاسورڈ لکھو (6 حروف سے کم از کم)"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="ur-reset-password-toggle"
                  onClick={togglePasswordVisibility}
                  title={showPassword ? "پاسورڈ چھپاؤ" : "پاسورڈ دکھاؤ"}
                >
                  <i className={showPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                </button>
              </div>
            </div>

            <div className="ur-reset-form-group">
              <label className="ur-reset-form-label" htmlFor="confirmPassword">پاسورڈ دوبارہ لکھو</label>
              <div className="ur-reset-input-wrapper">
                <input
                  className="ur-reset-input"
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="پاسورڈ دوبارہ لکھو"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="ur-reset-submit-btn" disabled={loading}>
              {loading ? 'بدل رہا ہے...' : 'پاسورڈ بدلو'}
            </button>

            <div className="ur-reset-back-link">
              <Link to="/urdu-login">واپس لاگ ان پر</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UrduResetPasswordPage;