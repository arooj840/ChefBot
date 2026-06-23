// controllers/settingsController.js
const Settings = require('../models/Settings');

// Get settings (admin only – ya public if needed)
exports.getSettings = async (req, res) => {
  try {
    const settings = await Settings.getSingleton();
    res.json({ success: true, settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update settings (admin only)
exports.updateSettings = async (req, res) => {
  try {
    const { suggestionRules, planningRules, notificationSettings, generalSettings } = req.body;
    const adminId = req.user._id; // auth middleware se admin ID milegi

    // Pehle existing settings le lo
    let settings = await Settings.getSingleton();

    // Update karo
    if (suggestionRules) settings.suggestionRules = suggestionRules;
    if (planningRules) settings.planningRules = planningRules;
    if (notificationSettings) settings.notificationSettings = notificationSettings;
    if (generalSettings) settings.generalSettings = generalSettings;
    settings.updatedBy = adminId;

    await settings.save();
    res.json({ success: true, message: 'Settings updated', settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};