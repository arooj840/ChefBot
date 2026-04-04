// controllers/DailyReportController.js
const DailyReport = require('../models/DailyReport');
const Pantry = require('../models/Pantry');
const ShoppingList = require('../models/ShoppingList');
const Timer = require('../models/Timer');
const MealPlan = require('../models/MealPlan');

const getTodayStart = () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  return start;
};

// 1. Generate or update today's report for a user
exports.generateTodayReport = async (req, res) => {
  try {
    const userId = req.user?._id || req.body.userId; // from auth or body
    const today = getTodayStart();

    // Fetch data from other collections for today
    // For simplicity, we assume you have these functions; otherwise you can query directly.

    // a) Meals: which recipes did user cook today? 
    

    const meals = []; // TODO: implement logic to get today's cooked recipes

    // b) Pantry updates: items used & low stock
    const pantry = await Pantry.findOne({ userId });
    let itemsUsed = [];
    let lowStock = [];
    if (pantry && pantry.items) {
      // You need to track what items were used today. For demo, we'll just check low stock.
      lowStock = pantry.items.filter(item => item.quantity <= item.threshold)
                              .map(item => ({ name: item.name, quantity: item.quantity }));
      // itemsUsed: you need a log of used items. We'll keep empty for now.
    }

    // c) Shopping activity: items added today
    const shopping = await ShoppingList.findOne({ userId });
    let shoppingActivity = [];
    if (shopping && shopping.items) {
      // You need timestamps on shopping items to know which were added today.
      // For now, we'll just take all items (not ideal). Better to add `createdAt` to shopping items.
      shoppingActivity = shopping.items.map(item => ({ name: item.name, quantity: item.quantity }));
    }

    // d) Alarms used today
    const alarmsUsed = await Timer.countDocuments({ userId, status: 'completed', createdAt: { $gte: today } });

    // e) Generate summary text
    const summary = `Today you used ${alarmsUsed} timers. ${lowStock.length} items are low in stock. ${shoppingActivity.length} items added to shopping list.`;

    // Upsert (update or create)
    const report = await DailyReport.findOneAndUpdate(
      { userId, date: today },
      {
        $set: {
          meals,
          pantryUpdates: { itemsUsed, lowStock },
          shoppingActivity,
          alarmsUsed,
          summary
        }
      },
      { upsert: true, new: true }
    );

    res.status(200).json({ success: true, report });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 2. Get all reports of a user (paginated)
exports.getUserReports = async (req, res) => {
  try {
    const userId = req.user?._id || req.params.userId;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const reports = await DailyReport.find({ userId })
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit)
      .populate('meals', 'title image'); // populate recipe details

    const total = await DailyReport.countDocuments({ userId });

    res.json({ success: true, reports, total, page, pages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 3. Get report for a specific date (user)
exports.getReportByDate = async (req, res) => {
  try {
    const userId = req.user?._id;
    const { date } = req.params; // expect YYYY-MM-DD
    const targetDate = new Date(date);
    targetDate.setHours(0,0,0,0);

    const report = await DailyReport.findOne({ userId, date: targetDate }).populate('meals', 'title image');
    if (!report) return res.status(404).json({ success: false, message: 'No report for this date' });
    res.json({ success: true, report });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 4. Admin: get all users' reports (with filters)
exports.getAllReportsAdmin = async (req, res) => {
  try {
    // only admin can access (add middleware)
    const { startDate, endDate, userId, page = 1, limit = 20 } = req.query;
    let filter = {};
    if (userId) filter.userId = userId;
    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }
    const skip = (page - 1) * limit;
    const reports = await DailyReport.find(filter)
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit)
      .populate('userId', 'name email')
      .populate('meals', 'title');
    const total = await DailyReport.countDocuments(filter);
    res.json({ success: true, reports, total, page, pages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};