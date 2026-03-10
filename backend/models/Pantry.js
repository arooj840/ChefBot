const mongoose = require('mongoose');

const pantryItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  unit: {
    type: String,
    required: true,
    enum: ['kg', 'g', 'liters', 'ml', 'pieces', 'dozen']
  },
  category: {
    type: String,
    required: true,
    enum: ['Vegetables', 'Fruits', 'Dairy', 'Grains', 
           'Spices', 'Meat', 'Beverages', 'Other'],
    default: 'Vegetables'
  },
  isLowStock: {
    type: Boolean,
    default: false
  }
});

const pantrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  items: [pantryItemSchema]
}, { timestamps: true });

module.exports = mongoose.model('Pantry', pantrySchema);