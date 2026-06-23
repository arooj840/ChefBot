const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  try {
    // Token hai?
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ 
        message: 'Access denied! Please login first.' 
      });
    }

    // Token verify karo
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // User dhundo
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(401).json({ 
        message: 'User not found!' 
      });
    }

    // Blocked hai?
    if (user.isBlocked) {
      return res.status(403).json({ 
        message: 'Account is blocked! Contact admin.' 
      });
    }

    req.user = user;
    next();

  } catch (error) {
    res.status(401).json({ 
      message: 'Invalid token! Please login again.' 
    });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ 
      message: 'Access denied! Admins only.' 
    });
  }
  next();
};

module.exports = { protect, adminOnly };