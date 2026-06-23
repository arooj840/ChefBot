const PantryShopping = require('../models/PantryShopping');

// ==============================
// GET PANTRY SHOPPING LIST
// ==============================
const getPantryShoppingList = async (req, res) => {
  try {
    let list = await PantryShopping.findOne({ userId: req.user._id });

    if (!list) {
      list = await PantryShopping.create({ userId: req.user._id, items: [] });
    }

    res.status(200).json({ success: true, items: list.items });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ==============================
// ADD ITEM TO PANTRY SHOPPING LIST
// ==============================
const addToPantryShoppingList = async (req, res) => {
  try {
    const { name, quantity, unit, category } = req.body;

    if (!name || !quantity || !unit || !category) {
      return res.status(400).json({ message: 'Please fill all fields!' });
    }

    let list = await PantryShopping.findOne({ userId: req.user._id });

    if (!list) {
      list = await PantryShopping.create({ userId: req.user._id, items: [] });
    }

    // Duplicate check — same item dobara add na ho
    const alreadyExists = list.items.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyExists) {
      return res.status(400).json({ message: `${name} is already in the list!` });
    }

    list.items.push({ name, quantity, unit, category });
    await list.save();

    res.status(201).json({ success: true, message: 'Item added!', items: list.items });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ==============================
// REMOVE SINGLE ITEM
// ==============================
const removeFromPantryShoppingList = async (req, res) => {
  try {
    const { itemId } = req.params;

    const list = await PantryShopping.findOne({ userId: req.user._id });

    if (!list) {
      return res.status(404).json({ message: 'Shopping list not found!' });
    }

    list.items = list.items.filter(
      item => item._id.toString() !== itemId
    );

    await list.save();

    res.status(200).json({ success: true, message: 'Item removed!', items: list.items });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ==============================
// CLEAR ENTIRE LIST
// ==============================
const clearPantryShoppingList = async (req, res) => {
  try {
    const list = await PantryShopping.findOne({ userId: req.user._id });

    if (!list) {
      return res.status(404).json({ message: 'Shopping list not found!' });
    }

    list.items = [];
    await list.save();

    res.status(200).json({ success: true, message: 'List cleared!', items: [] });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getPantryShoppingList,
  addToPantryShoppingList,
  removeFromPantryShoppingList,
  clearPantryShoppingList
};