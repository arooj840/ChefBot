const mongoose = require('mongoose');

const beginnersGuideSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: [
        // Pehle 4 pages (migrateBeginners.js)
        'tools', 'techniques', 'ingredients', 'temperature', 'decorating', 'basics',
        'cooking-methods', 'cutting-techniques',
        // Agle pages (migrateBeginnersPart2.js)
        'kitchen-tools', 'knives', 'cutting-boards', 'mixing-bowls', 'utensils', 'cookware',
        'crockery', 'cutlery', 'servingware', 'measuring-tools', 'measuring-techniques',
        'estimation', 'conversions', 'precision', 'meat-processing', 'pantry-basics',
        'spices', 'staples', 'vegetables',
        // 9th page (migrateBeginnersPart3.js)
        'appliances',
      ],
    },
    image: {
      type: String,
      default: '',
    },
    video: {
      type: String,
      default: '',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

// Indexes for faster queries
beginnersGuideSchema.index({ category: 1 });
beginnersGuideSchema.index({ createdBy: 1, createdAt: -1 });

const BeginnersGuide = mongoose.model('BeginnersGuide', beginnersGuideSchema);
module.exports = BeginnersGuide;