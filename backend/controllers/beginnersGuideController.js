const BeginnersGuide = require('../models/BeginnersGuide');

// ========== PUBLIC ROUTES (User) ==========
// Get all guides (with optional category filter)
exports.getAllGuides = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = {};
    if (category) filter.category = category;
    
    const guides = await BeginnersGuide.find(filter)
      .sort({ createdAt: -1 })
      .select('title category image createdAt');
    
    res.json({ success: true, count: guides.length, guides });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single guide by ID
exports.getGuideById = async (req, res) => {
  try {
    const guide = await BeginnersGuide.findById(req.params.id);
    if (!guide) return res.status(404).json({ success: false, message: 'Guide not found' });
    res.json({ success: true, guide });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ========== ADMIN ROUTES (Protected) ==========
// Create new guide
exports.createGuide = async (req, res) => {
  try {
    const { title, content, category, image, video } = req.body;
    const guide = await BeginnersGuide.create({
      title,
      content,
      category,
      image: image || '',
      video: video || '',
      createdBy: req.user._id,
    });
    res.status(201).json({ success: true, guide });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update guide
exports.updateGuide = async (req, res) => {
  try {
    const guide = await BeginnersGuide.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!guide) return res.status(404).json({ success: false, message: 'Guide not found' });
    res.json({ success: true, guide });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete guide
exports.deleteGuide = async (req, res) => {
  try {
    const guide = await BeginnersGuide.findByIdAndDelete(req.params.id);
    if (!guide) return res.status(404).json({ success: false, message: 'Guide not found' });
    res.json({ success: true, message: 'Guide deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};