const AboutContent = require('../models/AboutContent');

// GET about content (public)
exports.getAboutContent = async (req, res) => {
  try {
    let content = await AboutContent.findOne({ isActive: true });
    
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'About content not found. Please run migration.',
      });
    }
    
    res.json({
      success: true,
      data: content,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE about content (admin only)
exports.updateAboutContent = async (req, res) => {
  try {
    let content = await AboutContent.findOne();
    
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'About content not found',
      });
    }
    
    const updated = await AboutContent.findByIdAndUpdate(
      content._id,
      { ...req.body, lastUpdatedBy: req.user.id },
      { new: true, runValidators: true }
    );
    
    res.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};