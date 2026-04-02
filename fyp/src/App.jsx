import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// English Pages
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PantryPage from "./pages/PantryPage/PantryPage";
import ShoppingList from "./pages/ShoppingList/ShoppingList";
import MealFeature from "./pages/MealFeature/MealFeature";
import MealCalender from "./pages/MealCalender/MealCalender";

// Urdu Pages
import UAboutPage from "./pages/UAboutPage/UAboutPage";
import UContactPage from "./pages/UContactPage/UContactPage";
import PantryPageUrdu from "./pages/PantryPageUrdu/PantryPageUrdu";
import ShoppingListUrdu from "./pages/ShoppingListUrdu/ShoppingListUrdu";
import MealFeatureUrdu from "./pages/MealFeatureUrdu/MealFeatureUrdu";
import MealCalenderUrdu from "./pages/MealCalenderUrdu/MealCalenderUrdu";

function App() {
  return (
    <Router>
      <Routes>
        {/* English Routes */}
        <Route path="/" element={<PantryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
        <Route path="/meal-feature" element={<MealFeature />} />
        <Route path="/meal-calender" element={<MealCalender />} />
        <Route path="/calendar" element={<MealCalender />} />
        {/* Urdu Routes */}
        <Route path="/about-urdu" element={<UAboutPage />} />
        <Route path="/contact-urdu" element={<UContactPage />} />
        <Route path="/pantry-urdu" element={<PantryPageUrdu />} />
        <Route path="/shopping-list-urdu" element={<ShoppingListUrdu />} />
        <Route path="/meal-feature-urdu" element={<MealFeatureUrdu />} />
        <Route path="/meal-calender-urdu" element={<MealCalenderUrdu />} />
      </Routes>
    </Router>
  );
}

export default App;