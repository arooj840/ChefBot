// models/DailyReport.js
const mongoose = require('mongoose');

// Sub-schema for used/lowStock items (reusable)
const pantryUpdateItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true }
}, { _id: false });

const shoppingActivityItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true }
}, { _id: false });

const dailyReportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },
    date: {
      type: Date,
      required: true,
      default: () => new Date().setHours(0,0,0,0), // aaj ki midnight
      index: true
    },
    meals: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recipe'
    }],
    pantryUpdates: {
      itemsUsed: [pantryUpdateItemSchema],
      lowStock: [pantryUpdateItemSchema]
    },
    shoppingActivity: [shoppingActivityItemSchema],
    alarmsUsed: {
      type: Number,
      default: 0
    },
    summary: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: { createdAt: 'generatedAt', updatedAt: false } // generatedAt auto
  }
);

// Ensure one report per user per day
dailyReportSchema.index({ userId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('DailyReport', dailyReportSchema);