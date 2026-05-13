const ShoppingList = require('../models/ShoppingList');

// Helper to get consistent userId (works with both .id and ._id)
const getUserId = (req) => req.user.id || req.user._id;

// ==================
// GET SHOPPING ITEMS (FIXED)
const getShoppingItems = async (req, res) => {
  try {
    const userId = req.user.id || req.user._id;  // ✅ ensure yeh line hai
    let shoppingList = await ShoppingList.findOne({ userId });
    if (!shoppingList) {
      shoppingList = await ShoppingList.create({ userId, items: [] });
    }
    res.status(200).json({ success: true, items: shoppingList.items });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ==================
// ADD SHOPPING ITEM (FIXED)
// ==================
const addShoppingItem = async (req, res) => {
  try {
    const { name, quantity, unit, category, fromPantry } = req.body;
    const userId = getUserId(req);

    if (!name || !quantity) {
      return res.status(400).json({ success: false, message: 'Name and quantity are required!' });
    }

    const qty = Number(quantity);
    if (isNaN(qty) || qty <= 0) {
      return res.status(400).json({ success: false, message: 'Quantity must be a positive number' });
    }

    const finalUnit = unit || 'pieces';
    const finalCategory = category || 'Other';

    let shoppingList = await ShoppingList.findOne({ userId });

    if (!shoppingList) {
      shoppingList = await ShoppingList.create({ userId, items: [] });
    }

    shoppingList.items.push({
      name: name.trim(),
      quantity: qty,
      unit: finalUnit,
      category: finalCategory,
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
    console.error('ADD shopping error:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// ==================
// UPDATE SHOPPING ITEM
// ==================
const updateShoppingItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { name, quantity, unit, category } = req.body;
    const userId = getUserId(req);

    const shoppingList = await ShoppingList.findOne({ userId });
    if (!shoppingList) {
      return res.status(404).json({ success: false, message: 'Shopping list not found!' });
    }

    const item = shoppingList.items.id(itemId);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found!' });
    }

    if (name) item.name = name;
    if (quantity) {
      const qty = Number(quantity);
      if (!isNaN(qty) && qty > 0) item.quantity = qty;
    }
    if (unit) item.unit = unit;
    if (category) item.category = category;

    await shoppingList.save();
    res.status(200).json({ success: true, message: 'Item updated!', items: shoppingList.items });
  } catch (error) {
    console.error('UPDATE shopping error:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// ==================
// MARK AS PURCHASED
// ==================
const markAsPurchased = async (req, res) => {
  try {
    const { itemId } = req.params;
    const userId = getUserId(req);

    const shoppingList = await ShoppingList.findOne({ userId });
    if (!shoppingList) {
      return res.status(404).json({ success: false, message: 'Shopping list not found!' });
    }

    const item = shoppingList.items.id(itemId);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found!' });
    }

    item.purchased = !item.purchased;
    await shoppingList.save();

    res.status(200).json({
      success: true,
      message: item.purchased ? 'Marked as purchased!' : 'Marked as not purchased!',
      items: shoppingList.items
    });
  } catch (error) {
    console.error('MARK purchased error:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// ==================
// DELETE SHOPPING ITEM
// ==================
const deleteShoppingItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const userId = getUserId(req);

    const shoppingList = await ShoppingList.findOne({ userId });
    if (!shoppingList) {
      return res.status(404).json({ success: false, message: 'Shopping list not found!' });
    }

    shoppingList.items = shoppingList.items.filter(item => item._id.toString() !== itemId);
    await shoppingList.save();

    res.status(200).json({ success: true, message: 'Item deleted!', items: shoppingList.items });
  } catch (error) {
    console.error('DELETE shopping error:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

module.exports = {
  getShoppingItems,
  addShoppingItem,
  updateShoppingItem,
  markAsPurchased,
  deleteShoppingItem
};