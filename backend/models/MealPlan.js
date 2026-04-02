const mongoose = require('mongoose');

const mealPlanSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
    name: { type: String, default: 'My Meal Plan' },
    duration: { type: String, enum: ['daily', 'weekly'], required: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date },
    preferences: {
      dietType: { type: String, enum: ['veg', 'non-veg', 'mixed'] },
      targetAudience: { type: String, enum: ['general', 'kids', 'patient'] },
      ageGroup: String,
      patientCondition: String,
      allergies: [String],
      familyMembers: String,
      budget: { type: String, enum: ['economy', 'standard', 'premium', 'deluxe'] },
      planningMode: { type: String, enum: ['ai', 'pantry', 'custom'] },
    },
    plan: {
      type: Map,
      of: {
        breakfast: {
          recipeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' },
          name: String,
          image: String,
          available: Boolean,
        },
        lunch: {
          recipeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' },
          name: String,
          image: String,
          available: Boolean,
        },
        dinner: {
          recipeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' },
          name: String,
          image: String,
          available: Boolean,
        },
      },
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

mealPlanSchema.index({ userId: 1, createdAt: -1 });
const MealPlan = mongoose.model('MealPlan', mealPlanSchema);
module.exports = MealPlan;   