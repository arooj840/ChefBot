const User = require('../models/User');
const UserSettings = require('../models/UserSettings');

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update user profile - FIXED VERSION
exports.updateProfile = async (req, res) => {
  try {
    console.log("Update profile request:", req.body);
    const { name, profilePicture } = req.body;
    
    const user = await User.findById(req.user._id);
    
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    if (name) user.name = name;
    if (profilePicture !== undefined) user.profilePicture = profilePicture;
    
    // Save with validateBeforeSave false to avoid pre-save issues
    await user.save({ validateBeforeSave: false });
    
    console.log("Profile updated for user:", user.name);
    
    res.json({ 
      success: true, 
      message: 'Profile updated successfully',
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email, 
        profilePicture: user.profilePicture 
      }
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get user settings
exports.getSettings = async (req, res) => {
  try {
    let settings = await UserSettings.findOne({ userId: req.user._id });
    
    if (!settings) {
      settings = await UserSettings.create({ userId: req.user._id });
    }
    
    res.json({ success: true, settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update user settings
exports.updateSettings = async (req, res) => {
  try {
    const { soundPreferences, notificationPreferences, displayPreferences } = req.body;
    
    let settings = await UserSettings.findOne({ userId: req.user._id });
    
    if (!settings) {
      settings = new UserSettings({ userId: req.user._id });
    }
    
    if (soundPreferences) {
      settings.soundPreferences = { ...settings.soundPreferences, ...soundPreferences };
    }
    if (notificationPreferences) {
      settings.notificationPreferences = { ...settings.notificationPreferences, ...notificationPreferences };
    }
    if (displayPreferences) {
      settings.displayPreferences = { ...settings.displayPreferences, ...displayPreferences };
    }
    
    await settings.save();
    
    res.json({ success: true, message: 'Settings updated', settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get user stats
exports.getStats = async (req, res) => {
  try {
    const Timer = require('../models/Timer');
    
    const totalTimers = await Timer.countDocuments({ userId: req.user._id });
    const activeTimers = await Timer.countDocuments({ 
      userId: req.user._id, 
      status: 'running' 
    });
    const completedTimers = await Timer.countDocuments({ 
      userId: req.user._id, 
      status: 'completed' 
    });
    
    res.json({ 
      success: true, 
      stats: {
        totalTimers,
        activeTimers,
        completedTimers
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};