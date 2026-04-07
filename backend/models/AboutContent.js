const mongoose = require('mongoose');

const aboutContentSchema = new mongoose.Schema(
  {
    // Hero Section
    hero: {
      title: {
        type: String,
        default: 'About Us',
      },
      subtitle: {
        type: String,
        default: 'ChefBot - Your Personal Kitchen Assistant',
      },
      image: {
        type: String,
        default: '',
      },
    },
    // What is ChefBot Section
    whatIsChefBot: {
      title: {
        type: String,
        default: 'What is ChefBot?',
      },
      description: {
        type: String,
        default: 'ChefBot is your personal kitchen assistant designed to make everyday cooking easier, safer, and more organized — whether you\'re a beginner or experienced cook.',
      },
      description2: {
        type: String,
        default: 'It tracks your pantry, suggests meals from available ingredients, explains cooking steps clearly, and guides appliance safety.',
      },
      image: {
        type: String,
        default: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=250&fit=crop',
      },
    },
    // Our Mission Section
    mission: {
      title: {
        type: String,
        default: 'Our Mission',
      },
      description: {
        type: String,
        default: 'To empower every home cook with intelligent kitchen tools that simplify routines, reduce food wastage, and build confidence.',
      },
      highlights: [
        {
          text: {
            type: String,
            default: 'Simplify cooking routines',
          },
        },
        {
          text: {
            type: String,
            default: 'Reduce food wastage',
          },
        },
        {
          text: {
            type: String,
            default: 'Build confidence in kitchen',
          },
        },
      ],
    },
    // Features Section
    features: {
      title: {
        type: String,
        default: 'Why Choose ChefBot?',
      },
      items: [
        {
          title: { type: String, default: 'Pantry Management' },
          description: { type: String, default: 'Track grocery items digitally' },
        },
        {
          title: { type: String, default: 'Smart Meal Suggestions' },
          description: { type: String, default: 'Recommendations from your pantry' },
        },
        {
          title: { type: String, default: 'Meal Planning' },
          description: { type: String, default: 'Plan daily or weekly meals' },
        },
        {
          title: { type: String, default: 'Step-by-Step Guidance' },
          description: { type: String, default: 'Clear cooking instructions' },
        },
        {
          title: { type: String, default: 'Kitchen Safety Tips' },
          description: { type: String, default: 'Safe appliance usage guide' },
        },
        {
          title: { type: String, default: 'Smart Alarms' },
          description: { type: String, default: 'Cooking timers & reminders' },
        },
        {
          title: { type: String, default: 'Voice & Text' },
          description: { type: String, default: 'Hands-free interaction' },
        },
        {
          title: { type: String, default: 'Shopping List' },
          description: { type: String, default: 'Digital shopping management' },
        },
      ],
    },
    // Benefits Section
    benefits: {
      title: {
        type: String,
        default: 'Key Benefits',
      },
      items: [
        {
          number: { type: String, default: '01' },
          title: { type: String, default: 'Save Time' },
          description: { type: String, default: 'Instant meal suggestions from your pantry.' },
        },
        {
          number: { type: String, default: '02' },
          title: { type: String, default: 'Reduce Waste' },
          description: { type: String, default: 'Use ingredients you already have.' },
        },
        {
          number: { type: String, default: '03' },
          title: { type: String, default: 'Learn Safely' },
          description: { type: String, default: 'Guidance for beginners on tools & methods.' },
        },
        {
          number: { type: String, default: '04' },
          title: { type: String, default: 'Stay Organized' },
          description: { type: String, default: 'Pantry, lists & plans in one place.' },
        },
      ],
    },
    // How It Works Section
    howItWorks: {
      title: {
        type: String,
        default: 'How It Works',
      },
      steps: [
        {
          number: { type: Number, default: 1 },
          title: { type: String, default: 'Create Account' },
          description: { type: String, default: 'Sign up with email & password' },
        },
        {
          number: { type: Number, default: 2 },
          title: { type: String, default: 'Add Pantry' },
          description: { type: String, default: 'List your ingredients' },
        },
        {
          number: { type: Number, default: 3 },
          title: { type: String, default: 'Get Suggestions' },
          description: { type: String, default: 'Receive meal recommendations' },
        },
        {
          number: { type: Number, default: 4 },
          title: { type: String, default: 'Cook & Enjoy' },
          description: { type: String, default: 'Follow guidance confidently' },
        },
      ],
    },
    // SEO
    seo: {
      metaTitle: { type: String, default: 'ChefBot - About Us' },
      metaDescription: { type: String, default: 'Learn about ChefBot, your personal kitchen assistant for smarter cooking.' },
    },
    // Admin tracking
    lastUpdatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Only one about document should exist
aboutContentSchema.index({ isActive: 1 });

module.exports = mongoose.model('AboutContent', aboutContentSchema);