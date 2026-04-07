const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const ContactContent = require('../../models/ContactContent');
const User = require('../../models/User');

const defaultContactData = {
  address: {
    line1: 'Faculty of IT, Govt. Graduate College for Women',
    line2: 'Satellite Town, Gujranwala, Punjab',
  },
  emails: [
    { address: 'support@chefbot.com', label: 'Support' },
    { address: 'info@chefbot.com', label: 'Info' },
  ],
  phone: {
    number: '+92 30...........',
    timing: 'Mon - Fri, 9AM - 5PM',
  },
  socialLinks: [
    { platform: 'Facebook', url: '#' },
    { platform: 'Twitter', url: '#' },
    { platform: 'Instagram', url: '#' },
  ],
  faq: [
    { question: 'How fast is response?', answer: 'We typically respond within 24-48 hours during business days.' },
    { question: 'Do you offer customer support?', answer: 'Yes! Our support team is available Mon–Fri, 9AM to 5PM PKT.' },
    { question: 'How can I report a bug?', answer: 'Use the form above and describe the issue in detail.' },
    { question: 'Can I suggest a new feature?', answer: 'We love suggestions! Share them via the contact form.' },
    { question: 'Do you offer partnerships?', answer: 'Yes, we\'re open to partnerships. Get in touch with us.' },
    { question: 'Is ChefBot available on mobile?', answer: 'Currently web only. Mobile apps are in our future roadmap.' },
  ],
  isActive: true,
};

async function seedContactContent() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    const admin = await User.findOne({ email: 'admin@chefbot.com' });
    if (!admin) {
      console.error('❌ Admin not found! Please create admin first.');
      process.exit(1);
    }

    await ContactContent.deleteMany({});
    console.log('🗑️ Existing contact content removed');

    const result = await ContactContent.create({
      ...defaultContactData,
      lastUpdatedBy: admin._id,
    });
    console.log(`✅ Contact content inserted successfully with ID: ${result._id}`);

    process.exit(0);
  } catch (err) {
    console.error('❌ Migration failed:', err);
    process.exit(1);
  }
}

seedContactContent();