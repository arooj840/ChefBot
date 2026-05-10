// ============================================================
// models/MealPlan.js
// Frontend ke filters ke exact according
// ============================================================
const mongoose = require('mongoose');

// ── Single meal ka structure ──────────────────────────────
const mealItemSchema = new mongoose.Schema({
  _id:        { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', default: null },
  name:       { type: String, default: '' },
  image:      { type: String, default: '' },
  tagline:    { type: String, default: '' },
  available:  { type: Boolean, default: false },  // pantry match >= 50%
  matchScore: { type: Number, default: 0 },        // 0-100
}, { _id: false });

// ── Ek din ka plan ───────────────────────────────────────
const dayPlanSchema = new mongoose.Schema({
  breakfast: { type: mealItemSchema, default: null },
  lunch:     { type: mealItemSchema, default: null },
  dinner:    { type: mealItemSchema, default: null },
}, { _id: false });

// ── Main MealPlan Schema ──────────────────────────────────
const mealPlanSchema = new mongoose.Schema(
  {
    // Kaun sa user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },

    // Plan ka naam — frontend se aata hai
    // e.g. "Meal Plan - 10/5/2025"
    name: {
      type: String,
      default: '',
      trim: true,
    },

    // ── Filters jo user ne select kiye ──────────────────
    preferences: {

      // frontend value: 'veg' | 'non-veg' | 'mixed' | 'eggetarian'
      dietType: {
        type: String,
        enum: ['veg', 'non-veg', 'mixed', 'eggetarian', ''],
        default: '',
      },

      // frontend value: 'none' | 'egg' | 'peanut' | 'gluten' | 'lactose' | 'shellfish' | 'nuts'
      allergy: {
        type: String,
        enum: ['none','egg','peanut','gluten','lactose','shellfish','nuts',''],
        default: 'none',
      },

      // frontend value: 'general' | 'kids' | 'teens' | 'elderly' | 'patient'
      ageGroup: {
        type: String,
        enum: ['general','kids','teens','elderly','patient',''],
        default: 'general',
      },

      // frontend value: 'economy' | 'standard' | 'premium' | 'deluxe'
      budget: {
        type: String,
        enum: ['economy','standard','premium','deluxe',''],
        default: 'standard',
      },

      // String kyunki user '4', '8+', ya '15' type kar sakta hai
      familyMembers: {
        type: String,
        default: '2',
      },

      // frontend value: 'daily' | 'weekly'
      planDuration: {
        type: String,
        enum: ['daily','weekly',''],
        default: 'weekly',
      },
    },

    // ── Generated meal plan ──────────────────────────────
    // Key = day index string: "0", "1", ... "6"
    // Value = { breakfast, lunch, dinner }
    // Mixed type use kiya kyunki keys dynamic hain ("0"..."6")
    plan: {
      type: Map,
      of: dayPlanSchema,
      default: {},
    },

    // Kitne din ka plan generate hua
    totalDays: {
      type: Number,
      default: 7,
      min: 1,
      max: 7,
    },

    // Kitne log ke liye (actual number)
    familyCount: {
      type: Number,
      default: 2,
    },

    // Save time
    savedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// ── Indexes ───────────────────────────────────────────────
mealPlanSchema.index({ user: 1, savedAt: -1 }); // user ke plans newest first
mealPlanSchema.index({ 'preferences.dietType': 1 });
mealPlanSchema.index({ 'preferences.planDuration': 1 });

const MealPlan = mongoose.model('MealPlan', mealPlanSchema);
module.exports = MealPlan;