const Timer = require('../models/Timer');

// ─────────────────────────────────────────────────
// 1. Timer bananh (POST /api/timers)
//    User naya cooking timer set karta hai
// ─────────────────────────────────────────────────
const createTimer = async (req, res) => {
  try {
    const { recipeId, label, duration } = req.body;

    if (!duration || duration < 1) {
      return res.status(400).json({
        success: false,
        message: 'Duration (seconds mein) zaroori hai',
      });
    }

    //  endTime manually calculate karo
    const endTime = new Date(Date.now() + duration * 1000);

    const timer = await Timer.create({
      userId: req.user._id,
      recipeId: recipeId || null,
      label: label || 'Cooking Timer',
      duration,
      endTime,
      status: 'running',
    });

    res.status(201).json({
      success: true,
      message: 'Timer shuru ho gaya!',
      timer,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─────────────────────────────────────────────────
// 2. User ke saare timers dekho (GET /api/timers)
// ─────────────────────────────────────────────────
const getUserTimers = async (req, res) => {
  try {
    const timers = await Timer.find({ userId: req.user._id })
      .populate('recipeId', 'title')
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, timers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─────────────────────────────────────────────────
// 3. Sirf running timers dekho (GET /api/timers/active)
// ─────────────────────────────────────────────────
const getActiveTimers = async (req, res) => {
  try {
    const timers = await Timer.find({
      userId: req.user._id,
      status: 'running',
    }).populate('recipeId', 'title');

    res.status(200).json({ success: true, timers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─────────────────────────────────────────────────
// 4. Timer complete karo (PUT /api/timers/:id/complete)
// ─────────────────────────────────────────────────
const completeTimer = async (req, res) => {
  try {
    const timer = await Timer.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!timer) {
      return res.status(404).json({
        success: false,
        message: 'Timer nahi mila',
      });
    }

    timer.status = 'completed';
    await timer.save();

    res.status(200).json({
      success: true,
      message: 'Timer khatam ho gaya!',
      timer,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─────────────────────────────────────────────────
// 5. Timer delete karo (DELETE /api/timers/:id)
// ─────────────────────────────────────────────────
const deleteTimer = async (req, res) => {
  try {
    const timer = await Timer.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!timer) {
      return res.status(404).json({
        success: false,
        message: 'Timer nahi mila ya delete nahi ho sakta',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Timer delete ho gaya',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createTimer,
  getUserTimers,
  getActiveTimers,
  completeTimer,
  deleteTimer,
};