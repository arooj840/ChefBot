const mongoose = require('mongoose');

const contactContentSchema = new mongoose.Schema(
  {
    address: {
      line1: {
        type: String,
        default: 'Faculty of IT, Govt. Graduate College for Women',
      },
      line2: {
        type: String,
        default: 'Satellite Town, Gujranwala, Punjab',
      },
    },
    emails: [
      {
        address: { type: String, default: 'support@chefbot.com' },
        label: { type: String, default: 'Support' },
      },
      {
        address: { type: String, default: 'info@chefbot.com' },
        label: { type: String, default: 'Info' },
      },
    ],
    phone: {
      number: { type: String, default: '+92 30...........' },
      timing: { type: String, default: 'Mon - Fri, 9AM - 5PM' },
    },
    socialLinks: [
      {
        platform: { type: String, default: 'Facebook' },
        url: { type: String, default: '#' },
      },
      {
        platform: { type: String, default: 'Twitter' },
        url: { type: String, default: '#' },
      },
      {
        platform: { type: String, default: 'Instagram' },
        url: { type: String, default: '#' },
      },
    ],
    faq: [
      {
        question: { type: String, default: 'How fast is response?' },
        answer: { type: String, default: 'We typically respond within 24-48 hours during business days.' },
      },
      {
        question: { type: String, default: 'Do you offer customer support?' },
        answer: { type: String, default: 'Yes! Our support team is available Mon–Fri, 9AM to 5PM PKT.' },
      },
      {
        question: { type: String, default: 'How can I report a bug?' },
        answer: { type: String, default: 'Use the form above and describe the issue in detail.' },
      },
      {
        question: { type: String, default: 'Can I suggest a new feature?' },
        answer: { type: String, default: 'We love suggestions! Share them via the contact form.' },
      },
      {
        question: { type: String, default: 'Do you offer partnerships?' },
        answer: { type: String, default: 'Yes, we\'re open to partnerships. Get in touch with us.' },
      },
      {
        question: { type: String, default: 'Is ChefBot available on mobile?' },
        answer: { type: String, default: 'Currently web only. Mobile apps are in our future roadmap.' },
      },
    ],
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

module.exports = mongoose.model('ContactContent', contactContentSchema);