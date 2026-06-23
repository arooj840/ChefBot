const mongoose = require('mongoose');

const pantryShoppingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
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
  }
});

const pantryShoppingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  items: [pantryShoppingItemSchema]
}, { timestamps: true });

module.exports = mongoose.model('PantryShopping', pantryShoppingSchema);