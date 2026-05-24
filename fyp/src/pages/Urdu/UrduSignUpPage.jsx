import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UrduSignUpPage.css';

const UrduSignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
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
    
    if (formData.password !== formData.confirmPassword) {
      alert("پاسورڈز ایک جیسے نہیں ہیں!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("براہ کرم درست ای میل ایڈریس لکھیں!");
      return;
    }

    if (!formData.terms) {
      alert("براہ کرم شرائط اور پالیسی قبول کریں!");
      return;
    }

    if (formData.password.length < 6) {
      alert("پاسورڈ کم از کم 6 حروف کا ہونا چاہیے!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullname,
          email: formData.email,
          password: formData.password,
          agreeToTerms: formData.terms
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "اکاؤنٹ کامیابی سے بن گیا! شیف بوٹ میں خوش آمدید!");
        navigate('/login-page');
      } else {
        alert(data.message || "اکاؤنٹ نہیں بن سکا! براہ کرم دوبارہ کوشش کریں۔");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("کچھ غلط ہو گیا! براہ کرم انٹرنیٹ چیک کریں اور دوبارہ کوشش کریں۔");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ur-signup-section" dir="rtl">
      <div className="ur-signup-image">
        <div className="ur-signup-content">
          <h1>ہمارے ساتھ کھانا پکائیں</h1>
          <p>اپنا اکاؤنٹ بنائیں اورمزیدار کھانا، اور AI سے مدد کی دنیا کھولیں۔</p>
          
          <ul className="ur-features">
            <li><i className="fas fa-check-circle"></i> آسان طریقے سے کھانا پکاؤ</li>
            <li><i className="fas fa-check-circle"></i> کھانے کا پلان آسان بناؤ

</li>
            <li><i className="fas fa-check-circle"></i> کھانا پکانا سیکھو</li>
            <li><i className="fas fa-check-circle"></i> تندرست رہو</li>
            <li><i className="fas fa-check-circle"></i> اپنی من پسند کے کھانے </li>
          </ul>
        </div>
      </div>
      
      <div className="ur-signup-form-container">
        <div className="ur-signup-form">
          <h2>اکاؤنٹ بنائیں</h2>
          <p>اپنے کھانے کا سفر شروع کرنے کے لیے سائن اپ کریں</p>
          
          <form onSubmit={handleSubmit}>
            <div className="ur-form-group">
              <label htmlFor="fullname">پورا نام</label>
              <input 
                type="text" 
                id="fullname" 
                name="fullname"
                className="ur-form-control" 
                placeholder="اپنا پورا نام لکھیں" 
                value={formData.fullname}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="ur-form-group">
              <label htmlFor="email">ای میل ایڈریس</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="ur-form-control" 
                placeholder="اپنی ای میل لکھیں" 
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="ur-form-group">
              <label htmlFor="password">پاسورڈ</label>
              <div className="ur-password-container">
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  name="password"
                  className="ur-form-control" 
                  placeholder="پاسورڈ بنائیں (6 حروف سے کم از کم)" 
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button 
                  type="button" 
                  className="ur-toggle-password" 
                  onClick={togglePasswordVisibility}
                  title={showPassword ? "پاسورڈ چھپائیں" : "پاسورڈ دکھائیں"}
                >
                  <i className={showPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                </button>
              </div>
            </div>
            
            <div className="ur-form-group">
              <label htmlFor="confirmPassword">پاسورڈ دوبارہ لکھیں</label>
              <input 
                type={showPassword ? "text" : "password"} 
                id="confirmPassword" 
                name="confirmPassword"
                className="ur-form-control" 
                placeholder="اپنا پاسورڈ دوبارہ لکھیں" 
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="ur-checkbox-container">
              <input 
                type="checkbox" 
                id="terms" 
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="terms">میں <a href="#">اصول</a> اور <a href="#">رازداری کی پالیسی</a> سے متفق ہوں</label>
            </div>
            
            <button type="submit" className="ur-btn-signup" disabled={loading}>
              {loading ? 'اکاؤنٹ بن رہا ہے...' : 'اکاؤنٹ بنائیں'}
            </button>
            
            <div className="ur-login-link">
              پہلے سے اکاؤنٹ ہے؟ <Link to="/login-page">لاگ ان کریں</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UrduSignUpPage;