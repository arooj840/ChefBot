const Pantry = require('../models/Pantry');

// ==================
// GET PANTRY ITEMS
// ==================
const getPantryItems = async (req, res) => {
  try {
    let pantry = await Pantry.findOne({ userId: req.user._id });
    
    if (!pantry) {
      pantry = await Pantry.create({ userId: req.user._id, items: [] });
    }
    
    res.status(200).json({ success: true, items: pantry.items });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ==================
// ADD PANTRY ITEM
// ==================
const addPantryItem = async (req, res) => {
  try {
    const { name, quantity, unit, category } = req.body;

    if (!name || !quantity || !unit || !category) {
      return res.status(400).json({ message: 'Please fill all fields!' });
    }

    let pantry = await Pantry.findOne({ userId: req.user._id });
    
    if (!pantry) {
      pantry = await Pantry.create({ userId: req.user._id, items: [] });
    }

    const isLowStock = quantity <= 2;

    pantry.items.push({ name, quantity, unit, category, isLowStock });
    await pantry.save();

    res.status(201).json({ 
      success: true, 
      message: 'Item added successfully!', 
      items: pantry.items 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ==================
// UPDATE PANTRY ITEM
// ==================
const updatePantryItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { name, quantity, unit, category } = req.body;

    const pantry = await Pantry.findOne({ userId: req.user._id });
    
    if (!pantry) {
      return res.status(404).json({ message: 'Pantry not found!' });
    }

    const item = pantry.items.id(itemId);
    
    if (!item) {
      return res.status(404).json({ message: 'Item not found!' });
    }

    item.name = name || item.name;
    item.quantity = quantity || item.quantity;
    item.unit = unit || item.unit;
    item.category = category || item.category;
    item.isLowStock = quantity <= 2;

    await pantry.save();

    res.status(200).json({ 
      success: true, 
      message: 'Item updated successfully!', 
      items: pantry.items 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ==================
// DELETE PANTRY ITEM
// ==================
const deletePantryItem = async (req, res) => {
  try {
    const { itemId } = req.params;

    const pantry = await Pantry.findOne({ userId: req.user._id });
    
    if (!pantry) {
      return res.status(404).json({ message: 'Pantry not found!' });
    }

    pantry.items = pantry.items.filter(
      item => item._id.toString() !== itemId
    );

    await pantry.save();

    res.status(200).json({ 
      success: true, 
      message: 'Item deleted successfully!', 
      items: pantry.items 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getPantryItems, addPantryItem, updatePantryItem, deletePantryItem };