const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ==================
// REGISTER
// ==================
const register = async (req, res) => {
  try {
    const { name, email, password, agreeToTerms } = req.body;

    // All fields are avaliable?
    if (!name || !email || !password || !agreeToTerms) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    // Email is already registered?
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already has been registered' });
    }

    // Password encrypt 
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User 
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      agreeToTerms
    });

    res.status(201).json({
      message: 'Account has been successfully created!',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ==================
// LOGIN
// ==================
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Fields hain?
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password Enter' });
    }

    // Find User
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email and password are Wrong' });
    }

    // Account blocked?
    if (user.isBlocked) {
      return res.status(403).json({ message: ' Your Account  are block.Contact to Admin' });
    }

    // Account locked hai?
    if (user.lockUntil && user.lockUntil > Date.now()) {
      return res.status(403).json({ message: 'Account are lock Try after 5 minute' });
    }

    // Password check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // Wrong password count badhao
      user.loginAttempts += 1;

      // 3 baar galat toh lock 
      if (user.loginAttempts >= 3) {
        user.lockUntil = new Date(Date.now() + 5 * 60 * 1000); // 5 minute
        user.loginAttempts = 0;
        await user.save();
        return res.status(403).json({ message: 'Too many failed attempts! Account locked for 5 minutes.'  });
      }

      await user.save();
      return res.status(400).json({ message: 'Email or password are Wrong' });
    }

    // Login successful - attempts reset karo
    user.loginAttempts = 0;
    user.lockUntil = null;
    await user.save();

    // Token banao
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      message: 'Login successful!',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ==================
// LOGOUT
// ==================
const logout = async (req, res) => {
  try {
    res.status(200).json({ message: 'Logout successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { register, login, logout };