const mongoose = require('mongoose');

const shoppingItemSchema = new mongoose.Schema({
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
    enum: ['pieces', 'kg', 'g', 'liters', 'ml', 'dozen', 'packets', 'bottles']
  },
  category: {
    type: String,
    required: true,
    enum: ['Groceries', 'Vegetables', 'Fruits', 'Dairy', 
           'Meat', 'Beverages', 'Snacks', 'Household', 'Other'],
    default: 'Groceries'
  },
  purchased: {
    type: Boolean,
    default: false
  },
  fromPantry: {
    type: Boolean,
    default: false
  }
});

const shoppingListSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  items: [shoppingItemSchema]
}, { timestamps: true });

module.exports = mongoose.model('ShoppingList', shoppingListSchema);