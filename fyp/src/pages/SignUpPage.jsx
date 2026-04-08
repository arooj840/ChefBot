import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = () => {
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
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address!");
      return;
    }

    if (!formData.terms) {
      alert("You must accept the Terms of Service and Privacy Policy!");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    setLoading(true);

    try {
      // ✅ Backend API call - field names match karo
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullname,        // Backend expects 'name'
          email: formData.email,
          password: formData.password,
          agreeToTerms: formData.terms    // Backend expects 'agreeToTerms'
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        alert(data.message || "Account created successfully! Welcome to ChefBot!");
        navigate('/login-page');  // Redirect to login page
      } else {
        // Error from backend
        alert(data.message || "Signup failed! Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong! Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-section">
      <div className="signup-image">
        <div className="signup-content">
          <h1>Join Our Culinary Community</h1>
          <p>Create your account and unlock a world of delicious recipes, smart meal planning, and AI-powered cooking assistance.</p>
          
          <ul className="features">
            <li><i className="fas fa-check-circle"></i> Personalized recipe recommendations</li>
            <li><i className="fas fa-check-circle"></i> Smart meal planning tools</li>
            <li><i className="fas fa-check-circle"></i> Step-by-step cooking guidance</li>
            <li><i className="fas fa-check-circle"></i> Nutritional tracking</li>
            <li><i className="fas fa-check-circle"></i> Save and organize your favorite recipes</li>
          </ul>
        </div>
      </div>
      
      <div className="signup-form-container">
        <div className="signup-form">
          <h2>Create Account</h2>
          <p>Sign up to start your culinary journey</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input 
                type="text" 
                id="fullname" 
                name="fullname"
                className="form-control" 
                placeholder="Enter your full name" 
                value={formData.fullname}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="form-control" 
                placeholder="Enter your email" 
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  name="password"
                  className="form-control" 
                  placeholder="Create a password (min. 6 characters)" 
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button 
                  type="button" 
                  className="toggle-password" 
                  onClick={togglePasswordVisibility}
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  <i className={showPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                </button>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                id="confirmPassword" 
                name="confirmPassword"
                className="form-control" 
                placeholder="Confirm your password" 
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="checkbox-container">
              <input 
                type="checkbox" 
                id="terms" 
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
            </div>
            
            <button type="submit" className="btn-signup" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
            
            <div className="divider">
              <span>Or sign up with</span>
            </div>
            
            <div className="social-login">
              <button type="button" className="btn-social">
                <i className="fab fa-google" style={{color: "#DB4437"}}></i> Google
              </button>
              <button type="button" className="btn-social">
                <i className="fab fa-facebook-f" style={{color: "#4267B2"}}></i> Facebook
              </button>
            </div>
            
            <div className="login-link">
              Already have an account? <Link to="/login-page">Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;