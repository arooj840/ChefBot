const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema(
  {
    // Suggestion Rules
    suggestionRules: {
      matchPercentage: { type: Number, default: 70, min: 0, max: 100 },
      cuisineFilters: { type: [String], default: [] },
      blacklist: { type: [String], default: [] } // ingredients ya recipe IDs
    },
    // Planning Rules
    planningRules: {
      maxRecipesPerDay: { type: Number, default: 3 },
      selectionAlgorithm: { type: String, enum: ['random', 'popular', 'balanced'], default: 'random' }
    },
    // Notification Settings
    notificationSettings: {
      email: { type: Boolean, default: true },
      push: { type: Boolean, default: false }
    },
    // General Settings
    generalSettings: {
      appName: { type: String, default: 'ChefBot' },
      logo: { type: String, default: '' },
      contactEmail: { type: String, default: 'support@chefbot.com' }
    },
    // Admin who last updated
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: { updatedAt: 'updatedAt', createdAt: false } // sirf updatedAt chahiye
  }
);

// Ensure only one document exists (singleton)
settingsSchema.statics.getSingleton = async function() {
  let settings = await this.findOne();
  if (!settings) {
    // Pehli baar create karo (default values ke saath)
    // updatedBy ke liye koi admin ID chahiye. Pehle admin create karo.
    // Abhi ke liye dummy ObjectId de sakte ho, baad mein real admin se replace karoge.
    const defaultAdminId = new mongoose.Types.ObjectId(); // temporary
    settings = await this.create({ updatedBy: defaultAdminId });
  }
  return settings;
};

module.exports = mongoose.model('Settings', settingsSchema);