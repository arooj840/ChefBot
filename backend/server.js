const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Pehle dotenv config karo
dotenv.config();

// Phir Routes Import
const authRoutes = require('./routes/authRoutes');
const pantryRoutes = require('./routes/pantryRoutes');
const shoppingRoutes = require('./routes/shoppingRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const mealPlanRoutes = require('./routes/mealPlanRoutes');  
const timerRoutes     = require('./routes/timerRoutes');  
const dailyReportRoutes = require('./routes/dailyReportRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const beginnersGuideRoutes = require('./routes/beginnersGuideRoutes');
const aboutContentRoutes = require('./routes/aboutContentRoutes');
const contactRoutes = require('./routes/contactRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/pantry', pantryRoutes);
app.use('/api/shopping', shoppingRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/mealplan', mealPlanRoutes);   
app.use('/api/timers',   timerRoutes);  
app.use('/api/dailyreport', dailyReportRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/beginners-guides', beginnersGuideRoutes);
app.use('/api/about-content', aboutContentRoutes);
app.use('/api/contact', contactRoutes);


// Test Route
app.get('/', (req, res) => {
  res.send('ChefBot Server is Running!');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected Successfully!');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.log('MongoDB Connection Error:', err);
  });