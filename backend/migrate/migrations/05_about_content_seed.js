const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const AboutContent = require('../../models/AboutContent');
const User = require('../../models/User');

const aboutData = {
  hero: {
    title: 'About Us',
    subtitle: 'ChefBot - Your Personal Kitchen Assistant',
    image: '',
  },
  whatIsChefBot: {
    title: 'What is ChefBot?',
    description: 'ChefBot is your personal kitchen assistant designed to make everyday cooking easier, safer, and more organized — whether you\'re a beginner or experienced cook.',
    description2: 'It tracks your pantry, suggests meals from available ingredients, explains cooking steps clearly, and guides appliance safety.',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=250&fit=crop',
  },
  mission: {
    title: 'Our Mission',
    description: 'To empower every home cook with intelligent kitchen tools that simplify routines, reduce food wastage, and build confidence.',
    highlights: [
      { text: 'Simplify cooking routines' },
      { text: 'Reduce food wastage' },
      { text: 'Build confidence in kitchen' },
    ],
  },
  features: {
    title: 'Why Choose ChefBot?',
    items: [
      { title: 'Pantry Management', description: 'Track grocery items digitally' },
      { title: 'Smart Meal Suggestions', description: 'Recommendations from your pantry' },
      { title: 'Meal Planning', description: 'Plan daily or weekly meals' },
      { title: 'Step-by-Step Guidance', description: 'Clear cooking instructions' },
      { title: 'Kitchen Safety Tips', description: 'Safe appliance usage guide' },
      { title: 'Smart Alarms', description: 'Cooking timers & reminders' },
      { title: 'Voice & Text', description: 'Hands-free interaction' },
      { title: 'Shopping List', description: 'Digital shopping management' },
    ],
  },
  benefits: {
    title: 'Key Benefits',
    items: [
      { number: '01', title: 'Save Time', description: 'Instant meal suggestions from your pantry.' },
      { number: '02', title: 'Reduce Waste', description: 'Use ingredients you already have.' },
      { number: '03', title: 'Learn Safely', description: 'Guidance for beginners on tools & methods.' },
      { number: '04', title: 'Stay Organized', description: 'Pantry, lists & plans in one place.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: 1, title: 'Create Account', description: 'Sign up with email & password' },
      { number: 2, title: 'Add Pantry', description: 'List your ingredients' },
      { number: 3, title: 'Get Suggestions', description: 'Receive meal recommendations' },
      { number: 4, title: 'Cook & Enjoy', description: 'Follow guidance confidently' },
    ],
  },
  seo: {
    metaTitle: 'ChefBot - About Us',
    metaDescription: 'Learn about ChefBot, your personal kitchen assistant for smarter cooking.',
  },
  isActive: true,
};

async function seedAboutContent() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    const admin = await User.findOne({ email: 'admin@chefbot.com' });
    if (!admin) {
      console.error('❌ Admin not found! Please create admin first.');
      process.exit(1);
    }

    // Delete existing about content
    await AboutContent.deleteMany({});
    console.log('🗑️ Existing about content removed');

    // Insert new content
    const contentToInsert = {
      ...aboutData,
      lastUpdatedBy: admin._id,
    };
    
    const result = await AboutContent.create(contentToInsert);
    console.log(`✅ About content inserted successfully with ID: ${result._id}`);

    process.exit(0);
  } catch (err) {
    console.error('❌ Migration failed:', err);
    process.exit(1);
  }
}

seedAboutContent();