const ShoppingList = require('../models/ShoppingList');

// ==================
// GET SHOPPING ITEMS
// ==================
const getShoppingItems = async (req, res) => {
  try {
    let shoppingList = await ShoppingList.findOne({ userId: req.user._id });
    
    if (!shoppingList) {
      shoppingList = await ShoppingList.create({ 
        userId: req.user._id, 
        items: [] 
      });
    }
    
    res.status(200).json({ success: true, items: shoppingList.items });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ==================
// ADD SHOPPING ITEM
// ==================
const addShoppingItem = async (req, res) => {
  try {
    const { name, quantity, unit, category, fromPantry } = req.body;

    if (!name || !quantity || !unit || !category) {
      return res.status(400).json({ message: 'Please fill all fields!' });
    }

    let shoppingList = await ShoppingList.findOne({ userId: req.user._id });
    
    if (!shoppingList) {
      shoppingList = await ShoppingList.create({ 
        userId: req.user._id, 
        items: [] 
      });
    }

    shoppingList.items.push({ 
      name, 
      quantity, 
      unit, 
      category, 
      fromPantry: fromPantry || false,
      purchased: false
    });
    
    await shoppingList.save();

    res.status(201).json({ 
      success: true, 
      message: 'Item added successfully!', 
      items: shoppingList.items 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ==================
// UPDATE SHOPPING ITEM
// ==================
const updateShoppingItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { name, quantity, unit, category } = req.body;

    const shoppingList = await ShoppingList.findOne({ userId: req.user._id });
    
    if (!shoppingList) {
      return res.status(404).json({ message: 'Shopping list not found!' });
    }

    const item = shoppingList.items.id(itemId);
    
    if (!item) {
      return res.status(404).json({ message: 'Item not found!' });
    }

    item.name = name || item.name;
    item.quantity = quantity || item.quantity;
    item.unit = unit || item.unit;
    item.category = category || item.category;

    await shoppingList.save();

    res.status(200).json({ 
      success: true, 
      message: 'Item updated successfully!', 
      items: shoppingList.items 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ==================
// MARK AS PURCHASED
// ==================
const markAsPurchased = async (req, res) => {
  try {
    const { itemId } = req.params;

    const shoppingList = await ShoppingList.findOne({ userId: req.user._id });
    
    if (!shoppingList) {
      return res.status(404).json({ message: 'Shopping list not found!' });
    }

    const item = shoppingList.items.id(itemId);
    
    if (!item) {
      return res.status(404).json({ message: 'Item not found!' });
    }

    // Toggle purchased
    item.purchased = !item.purchased;
    await shoppingList.save();

    res.status(200).json({ 
      success: true, 
      message: item.purchased ? 'Item marked as purchased!' : 'Item marked as not purchased!',
      items: shoppingList.items 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ==================
// DELETE SHOPPING ITEM
// ==================
const deleteShoppingItem = async (req, res) => {
  try {
    const { itemId } = req.params;

    const shoppingList = await ShoppingList.findOne({ userId: req.user._id });
    
    if (!shoppingList) {
      return res.status(404).json({ message: 'Shopping list not found!' });
    }

    shoppingList.items = shoppingList.items.filter(
      item => item._id.toString() !== itemId
    );

    await shoppingList.save();

    res.status(200).json({ 
      success: true, 
      message: 'Item deleted successfully!', 
      items: shoppingList.items 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { 
  getShoppingItems, 
  addShoppingItem, 
  updateShoppingItem, 
  markAsPurchased,
  deleteShoppingItem 
};