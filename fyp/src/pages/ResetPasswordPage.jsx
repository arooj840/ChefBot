import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './ResetPasswordPage.css';

const ResetPasswordPage = () => {
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
      setError('Invalid reset link. Please request again.');
      setTimeout(() => {
        navigate('/forgot-password');
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
      setError("Passwords do not match!");
      return;
    }

    if (formData.newPassword.length < 6) {
      setError("Password must be at least 6 characters long!");
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
        setMessage(response.data.message || 'Password reset successfully!');
        setTimeout(() => {
          navigate('/login-page');
        }, 2000);
      } else {
        setError(response.data.message || 'Failed to reset password');
      }
    } catch (err) {
      console.error("Reset Password Error:", err);
      setError(err.response?.data?.message || 'Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-wrapper">
      <div className="reset-password-container">
        {/* LEFT PANEL */}
        <div className="reset-left-panel">
          <div className="reset-logo-container">
            <div className="reset-logo-circle">
              <img src="/logo.png" alt="ChefBot Logo" className="reset-logo-img" />
            </div>
            <div className="reset-logo-text">
              <h1>ChefBot</h1>
              <p>Your AI Cooking Assistant</p>
            </div>
          </div>
          <div className="reset-welcome-section">
            <h2>Create New Password</h2>
            <p>Your new password must be different from previously used passwords.</p>
            
            {/* EMAIL DISPLAY - Same as OTP page */}
            <div style={{
              background: '#f0f0f0',
              padding: '10px 15px',
              borderRadius: '8px',
              marginTop: '15px',
              textAlign: 'center'
            }}>
              <i className="fas fa-envelope" style={{ color: '#ff6b35', marginRight: '8px' }}></i>
              <strong style={{ color: '#333' }}>{email}</strong>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="reset-right-panel">
          {message && (
            <div className="reset-success-message">
              <i className="fas fa-check-circle"></i> {message}
            </div>
          )}
          {error && (
            <div className="reset-error-message">
              <i className="fas fa-exclamation-circle"></i> {error}
            </div>
          )}

          <form className="reset-form-container" onSubmit={handleSubmit}>
            <div className="reset-form-group">
              <label className="reset-form-label" htmlFor="newPassword">New Password</label>
              <div className="reset-input-wrapper">
                <input
                  className="reset-input"
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  placeholder="Enter new password (min. 6 characters)"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="reset-password-toggle"
                  onClick={togglePasswordVisibility}
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  <i className={showPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                </button>
              </div>
            </div>

            <div className="reset-form-group">
              <label className="reset-form-label" htmlFor="confirmPassword">Confirm Password</label>
              <div className="reset-input-wrapper">
                <input
                  className="reset-input"
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your new password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="reset-submit-btn" disabled={loading}>
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>

            <div className="reset-back-link">
              <Link to="/login-page">Back to Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;