const mongoose = require('mongoose');

const timerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID zaroori hai'],
    },
    recipeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recipe',
      default: null,
    },
    label: {
      type: String,
      trim: true,
      default: 'Cooking Timer',
    },
    duration: {
      type: Number,
      required: [true, 'Duration zaroori hai'],
      min: [1, 'Kam se kam 1 second hona chahiye'],
    },
    endTime: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      enum: ['running', 'completed'],
      default: 'running',
    },
  },
  {
    timestamps: true,
  }
);

// ✅ No pre-save hook – endTime will be set in controller

const Timer = mongoose.model('Timer', timerSchema);
module.exports = Timer;