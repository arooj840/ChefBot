import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './VerifyOTPPage.css';

const VerifyOTPPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const email = location.state?.email || '';

  // Agar email nahi hai to redirect
  useEffect(() => {
    if (!email) {
      navigate('/forgot-password');
    }
  }, [email, navigate]);

  // Timer countdown
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      setError('Please enter the complete 6-digit OTP');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/verify-otp', {
        email,
        otp: otpValue
      });

      console.log("Verify OTP Response:", response.data);

      if (response.status === 200) {
        setMessage('OTP verified successfully!');
        
        const resetToken = response.data.resetToken;
        
        setTimeout(() => {
          navigate('/reset-password', { 
            state: { 
              email: email, 
              resetToken: resetToken 
            } 
          });
        }, 1500);
      } else {
        setError(response.data.message || 'Invalid OTP. Please try again.');
      }
    } catch (err) {
      console.error("Verify OTP Error:", err);
      setError(err.response?.data?.message || 'Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      console.log("Resend OTP Response:", response.data);
      
      if (response.status === 200) {
        setMessage('New OTP has been sent to your email!');
        setTimer(60);
        setCanResend(false);
        setOtp(['', '', '', '', '', '']);
      } else {
        setError(response.data.message || 'Failed to resend OTP.');
      }
    } catch (err) {
      console.error("Resend OTP Error:", err);
      setError(err.response?.data?.message || 'Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    if (pastedData.length === 6 && /^\d+$/.test(pastedData)) {
      setOtp(pastedData.split(''));
    }
  };

  return (
    <div className="otp-page-wrapper">
      <div className="otp-page-container">
        {/* LEFT PANEL */}
        <div className="otp-left-panel">
          <div className="otp-logo-container">
            <div className="otp-logo-circle">
              <img src="/logo.png" alt="ChefBot Logo" className="otp-logo-img" />
            </div>
            <div className="otp-logo-text">
              <h1>ChefBot</h1>
              <p>Your AI Cooking Assistant</p>
            </div>
          </div>
          <div className="otp-welcome-section">
            <h2>Verify Your Identity</h2>
            <p>We've sent a verification code to your email address to ensure your account's security.</p>
            
            {/* ✅ EMAIL DISPLAY - YAHAN EMAIL SHOW HOGA */}
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
        <div className="otp-right-panel">
          {message && (
            <div className="otp-success-message">
              <i className="fas fa-check-circle"></i> {message}
            </div>
          )}
          {error && (
            <div className="otp-error-message">
              <i className="fas fa-exclamation-circle"></i> {error}
            </div>
          )}

          <form className="otp-form-container" onSubmit={handleSubmit} onPaste={handlePaste}>
            <div className="otp-input-group">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  className="otp-input"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  autoFocus={index === 0}
                  inputMode="numeric"
                  pattern="\d*"
                  disabled={loading}
                />
              ))}
            </div>

            <button type="submit" className="otp-verify-btn" disabled={loading}>
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>

            <div className="otp-resend-section">
              {canResend ? (
                <button type="button" className="otp-resend-link" onClick={handleResendOTP} disabled={loading}>
                  Resend OTP
                </button>
              ) : (
                <span className="otp-timer">Resend in {timer} seconds</span>
              )}
            </div>

            <div className="otp-change-email">
              <Link to="/forgot-password">Wrong email? Try again</Link>
            </div>

            <div className="otp-back-link">
              <Link to="/login-page">Back to Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTPPage;