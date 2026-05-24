// Mock Daily Report Service - Recipe Based Deduction

const mockMissingNotificationsList = [
  {
    id: "notif_001",
    title: "📋 Daily Report",
    message: "Aapka daily report pending hai. Kya banaya aaj?",
    sentAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    reportDate: new Date(),
    reportId: "report_001"
  }
];

// 🍽️ RECIPE DATABASE - Ingredients with default quantities (for 2 persons)
const recipeDatabase = {
  "chicken biryani": {
    ingredients: [
      { name: "chicken", quantity: 0.5, unit: "kg" },
      { name: "rice", quantity: 0.5, unit: "kg" },
      { name: "oil", quantity: 100, unit: "ml" },
      { name: "onion", quantity: 2, unit: "pcs" },
      { name: "tomato", quantity: 3, unit: "pcs" },
      { name: "garlic", quantity: 6, unit: "cloves" },
      { name: "ginger", quantity: 2, unit: "inch" },
      { name: "spices", quantity: 2, unit: "tbsp" },
      { name: "yogurt", quantity: 1, unit: "cup" }
    ]
  },
  "biryani": {
    ingredients: [
      { name: "chicken", quantity: 0.5, unit: "kg" },
      { name: "rice", quantity: 0.5, unit: "kg" },
      { name: "oil", quantity: 100, unit: "ml" },
      { name: "onion", quantity: 2, unit: "pcs" },
      { name: "tomato", quantity: 3, unit: "pcs" },
      { name: "garlic", quantity: 6, unit: "cloves" },
      { name: "ginger", quantity: 2, unit: "inch" },
      { name: "spices", quantity: 2, unit: "tbsp" },
      { name: "yogurt", quantity: 1, unit: "cup" }
    ]
  },
  "daal chawal": {
    ingredients: [
      { name: "rice", quantity: 0.5, unit: "kg" },
      { name: "oil", quantity: 50, unit: "ml" },
      { name: "onion", quantity: 1, unit: "pcs" },
      { name: "tomato", quantity: 2, unit: "pcs" },
      { name: "garlic", quantity: 4, unit: "cloves" },
      { name: "spices", quantity: 1, unit: "tbsp" }
    ]
  },
  "daal": {
    ingredients: [
      { name: "oil", quantity: 50, unit: "ml" },
      { name: "onion", quantity: 1, unit: "pcs" },
      { name: "tomato", quantity: 2, unit: "pcs" },
      { name: "garlic", quantity: 4, unit: "cloves" },
      { name: "spices", quantity: 1, unit: "tbsp" }
    ]
  },
  "chicken karahi": {
    ingredients: [
      { name: "chicken", quantity: 0.5, unit: "kg" },
      { name: "oil", quantity: 100, unit: "ml" },
      { name: "onion", quantity: 2, unit: "pcs" },
      { name: "tomato", quantity: 4, unit: "pcs" },
      { name: "garlic", quantity: 8, unit: "cloves" },
      { name: "ginger", quantity: 2, unit: "inch" },
      { name: "spices", quantity: 2, unit: "tbsp" },
      { name: "yogurt", quantity: 1, unit: "cup" }
    ]
  },
  "anda curry": {
    ingredients: [
      { name: "eggs", quantity: 4, unit: "pcs" },
      { name: "oil", quantity: 50, unit: "ml" },
      { name: "onion", quantity: 1, unit: "pcs" },
      { name: "tomato", quantity: 2, unit: "pcs" },
      { name: "garlic", quantity: 4, unit: "cloves" },
      { name: "spices", quantity: 1, unit: "tbsp" }
    ]
  },
  "egg curry": {
    ingredients: [
      { name: "eggs", quantity: 4, unit: "pcs" },
      { name: "oil", quantity: 50, unit: "ml" },
      { name: "onion", quantity: 1, unit: "pcs" },
      { name: "tomato", quantity: 2, unit: "pcs" },
      { name: "garlic", quantity: 4, unit: "cloves" },
      { name: "spices", quantity: 1, unit: "tbsp" }
    ]
  },
  "qeema": {
    ingredients: [
      { name: "oil", quantity: 80, unit: "ml" },
      { name: "onion", quantity: 2, unit: "pcs" },
      { name: "tomato", quantity: 3, unit: "pcs" },
      { name: "garlic", quantity: 6, unit: "cloves" },
      { name: "ginger", quantity: 1, unit: "inch" },
      { name: "spices", quantity: 2, unit: "tbsp" }
    ]
  },
  "fish curry": {
    ingredients: [
      { name: "fish", quantity: 0.5, unit: "kg" },
      { name: "oil", quantity: 80, unit: "ml" },
      { name: "onion", quantity: 2, unit: "pcs" },
      { name: "tomato", quantity: 3, unit: "pcs" },
      { name: "garlic", quantity: 6, unit: "cloves" },
      { name: "ginger", quantity: 2, unit: "inch" },
      { name: "spices", quantity: 2, unit: "tbsp" }
    ]
  },
  "vegetable curry": {
    ingredients: [
      { name: "oil", quantity: 50, unit: "ml" },
      { name: "onion", quantity: 1, unit: "pcs" },
      { name: "tomato", quantity: 2, unit: "pcs" },
      { name: "garlic", quantity: 4, unit: "cloves" },
      { name: "spices", quantity: 1, unit: "tbsp" },
      { name: "potato", quantity: 2, unit: "pcs" },
      { name: "vegetables", quantity: 0.5, unit: "kg" }
    ]
  },
  "pasta": {
    ingredients: [
      { name: "pasta", quantity: 0.3, unit: "kg" },
      { name: "oil", quantity: 30, unit: "ml" },
      { name: "onion", quantity: 1, unit: "pcs" },
      { name: "garlic", quantity: 4, unit: "cloves" },
      { name: "spices", quantity: 1, unit: "tbsp" }
    ]
  },
  "roti": {
    ingredients: [
      { name: "flour", quantity: 0.5, unit: "kg" },
      { name: "oil", quantity: 20, unit: "ml" }
    ]
  }
};

// Questions for user
const dailyReportQuestions = {
  reportId: "report_001",
  date: new Date().toISOString(),
  questions: [
    {
      id: "q1",
      text: "🍳 Aaj kya banaya?",
      type: "text",
      placeholder: "e.g., Chicken Biryani, Daal Chawal, Anda Curry",
      required: true
    },
    {
      id: "q2",
      text: "👥 Kitne logon ke liye banaya?",
      type: "select",
      options: ["1", "2", "3", "4", "5", "6+"],
      required: true
    },
    {
      id: "q3",
      text: "💰 Kitna karcha hua?",
      type: "select",
      options: ["< Rs. 500", "Rs. 500-1000", "Rs. 1000-1500", "Rs. 1500-2000", "> Rs. 2000"],
      required: false
    },
    {
      id: "q4",
      text: "⏰ Kitna time laga?",
      type: "select",
      options: ["< 30 min", "30-60 min", "1-2 hours", "2-3 hours", "> 3 hours"],
      required: true
    }
  ]
};

// 🔍 Find recipe from dish name
const findRecipe = (dishName) => {
  const lowerDish = dishName.toLowerCase().trim();
  
  // Exact match or partial match
  for (const [recipeName, recipeData] of Object.entries(recipeDatabase)) {
    if (lowerDish.includes(recipeName) || recipeName.includes(lowerDish)) {
      return { name: recipeName, ingredients: recipeData.ingredients };
    }
  }
  return null;
};

// 📦 Calculate deductions based on persons
const calculateDeductions = (ingredients, persons) => {
  const basePersons = 2; // Recipe database base for 2 persons
  const multiplier = persons / basePersons;
  
  return ingredients.map(ing => ({
    name: ing.name,
    quantity: (ing.quantity * multiplier).toFixed(2),
    unit: ing.unit,
    originalQuantity: ing.quantity,
    multiplier: multiplier
  }));
};

export const getMissingNotifications = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        notifications: mockMissingNotificationsList,
        pendingCount: 1
      });
    }, 500);
  });
};

export const getDailyReportQuestions = async (reportId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        report: dailyReportQuestions
      });
    }, 500);
  });
};

export const submitReportAnswers = async (reportId, answers) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const dishName = answers.q1;
      const persons = parseInt(answers.q2) || 2;
      
      // 🔍 Find recipe from database
      const recipe = findRecipe(dishName);
      
      let deductions = [];
      let message = "";
      
      if (recipe) {
        // ✅ Recipe found - calculate deductions
        deductions = calculateDeductions(recipe.ingredients, persons);
        message = `✅ Recipe found: "${recipe.name}". Pantry items deducted automatically!`;
        
        // Here you would call API to update pantry
        // await axiosInstance.post('/pantry/deduct', { deductions });
        
        console.log("📦 Pantry Deductions:", deductions);
      } else {
        // ❌ Recipe not found
        message = `⚠️ Recipe "${dishName}" not found in database. No items deducted.`;
        console.log("❌ Recipe not found:", dishName);
      }
      
      // Summary
      const summary = {
        dish: dishName,
        persons: persons,
        recipeFound: !!recipe,
        recipeName: recipe?.name || null,
        deductions: deductions,
        cost: answers.q3 || "Not specified",
        time: answers.q4
      };
      
      resolve({
        success: true,
        message: message,
        summary: summary,
        deductions: deductions
      });
    }, 500);
  });
};

export const markAsReplied = async (notificationId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Marked as replied"
      });
    }, 500);
  });
};

export const generateReport = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Daily report generated successfully!"
      });
    }, 500);
  });
};