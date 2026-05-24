import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './UrduVerifyOTPPage.css';

const UrduVerifyOTPPage = () => {
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
      navigate('/urdu-forgot-password');
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
      document.getElementById(`ur-otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`ur-otp-${index - 1}`)?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      setError('مکمل 6 عدد او ٹی پی لکھو');
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
        setMessage('او ٹی پی ٹھیک ہے!');
        
        const resetToken = response.data.resetToken;
        
        setTimeout(() => {
          navigate('/urdu-reset-password', { 
            state: { 
              email: email, 
              resetToken: resetToken 
            } 
          });
        }, 1500);
      } else {
        setError(response.data.message || 'غلط او ٹی پی۔ دوبارہ کوشش کرو۔');
      }
    } catch (err) {
      console.error("Verify OTP Error:", err);
      setError(err.response?.data?.message || 'سرور کی خرابی۔ دوبارہ کوشش کرو۔');
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
        setMessage('نیا او ٹی پی تمہارے ای میل پر بھیج دیا گیا!');
        setTimer(60);
        setCanResend(false);
        setOtp(['', '', '', '', '', '']);
      } else {
        setError(response.data.message || 'او ٹی پی بھیجنے میں مسئلہ ہوا۔');
      }
    } catch (err) {
      console.error("Resend OTP Error:", err);
      setError(err.response?.data?.message || 'سرور کی خرابی۔ دوبارہ کوشش کرو۔');
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
    <div className="ur-otp-page-wrapper" dir="rtl">
      <div className="ur-otp-page-container">
        {/* LEFT PANEL */}
        <div className="ur-otp-left-panel">
          <div className="ur-otp-logo-container">
            <div className="ur-otp-logo-circle">
              <img src="/logo.png" alt="ChefBot Logo" className="ur-otp-logo-img" />
            </div>
            <div className="ur-otp-logo-text">
              <h1>شیف بوٹ</h1>
              <p>تمہارا AI کچن مددگار</p>
            </div>
          </div>
          <div className="ur-otp-welcome-section">
            <h2>اپنی شناخت بتاؤ</h2>
            <p>تمہارے ای میل پر تصدیقی کوڈ بھیج دیا گیا ہے۔</p>
            
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
        <div className="ur-otp-right-panel">
          {message && (
            <div className="ur-otp-success-message">
              <i className="fas fa-check-circle"></i> {message}
            </div>
          )}
          {error && (
            <div className="ur-otp-error-message">
              <i className="fas fa-exclamation-circle"></i> {error}
            </div>
          )}

          <form className="ur-otp-form-container" onSubmit={handleSubmit} onPaste={handlePaste}>
            <div className="ur-otp-input-group">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`ur-otp-${index}`}
                  type="text"
                  maxLength="1"
                  className="ur-otp-input"
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

            <button type="submit" className="ur-otp-verify-btn" disabled={loading}>
              {loading ? 'چیک ہو رہا ہے...' : 'او ٹی پی چیک کرو'}
            </button>

            <div className="ur-otp-resend-section">
              {canResend ? (
                <button type="button" className="ur-otp-resend-link" onClick={handleResendOTP} disabled={loading}>
                  دوبارہ او ٹی پی بھیجو
                </button>
              ) : (
                <span className="ur-otp-timer">دوبارہ بھیجنے میں {timer} سیکنڈ</span>
              )}
            </div>

            <div className="ur-otp-change-email">
              <Link to="/urdu-forgot-password">غلط ای میل؟ دوبارہ کرو</Link>
            </div>

            <div className="ur-otp-back-link">
              <Link to="/urdu-login">واپس لاگ ان پر</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UrduVerifyOTPPage;