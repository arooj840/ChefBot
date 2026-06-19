import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// ✅ Auth Provider
import { AuthProvider } from './context/AuthContext';

// ✅ Language Provider
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// ✅ Headers & Footers
import Header from './components/Header';
import Footer from './components/Footer';
import UrduHeader from './components/Urdu/UrduHeader';
import UrduFooter from './components/Urdu/UrduFooter';

// ✅ Pages - English
import HomePage from './pages/HomePage';
import PublicHome from './pages/PublicHome';
import PantryPage from './pages/PantryPage';
import ShoppingList from './pages/ShoppingList';
import BeginnersPage from './pages/BeginnersPage';
import MeasuringSkillsPage from './pages/MeasuringSkillsPage';
import KitchenAppliancesPage from './pages/KitchenAppliancesPage';
import CuttingTechniquesPage from './pages/CuttingTechniquesPage';
import KitchenToolsPage from './pages/KitchenToolsPage';
import CookingMethodsPage from './pages/CookingMethodsPage';
import MeatProcessingPage from './pages/MeatProcessingPage';
import RecipeFeature from './pages/RecipeFeature';
import RecipeSoupPage from './pages/RecipeSoupPage';
import RecipeBakingPage from './pages/RecipeBakingPage';
import RecipeBeveragesPage from './pages/RecipeBeveragesPage';
import RecipeDessertsPage from './pages/RecipeDessertsPage';
import MealSuggestion from './pages/MealSuggestion';
import MealFeature from './pages/MealFeature';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import UrduSignUpPage from './pages/Urdu/UrduSignUpPage';
import PantryBasicsPage from './pages/PantryBasicsPage';
import BakeryEssentialsPage from './pages/BakeryEssentialsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RecipeDetail from './pages/RecipeDetail';
import RecipeVegetablePage from './pages/RecipeVegetablePage';
import RecipeStudentPage from './pages/RecipeStudentPage';
import RecipeRegionalPage from './pages/RecipeRegionalPage';
import RecipeSaladsPage from './pages/RecipeSaladsPage';
import RecipeSnacksPage from './pages/RecipeSnacksPage';
import RecipeQuickPage from './pages/RecipeQuickPage';
import Lunch from './pages/Lunch';
import RecipesLunch from './pages/RecipesLunch';
import RecipeBreakFast from './pages/RecipeBreakFast';
import RecipePlainVegetables from './pages/RecipePlainVegetables';
import RecipesVegChicken from './pages/RecipesVegChicken';
import RecipesVegMutton from './pages/RecipesVegMutton';
import RecipesPlainDal from './pages/RecipesPlainDal';
import RecipesDalChicken from './pages/RecipesDalChicken';
import RecipesDalMutton from './pages/RecipesDalMutton';
import RecipesEggDishes from './pages/RecipesEggDishes';
import RecipesFish from './pages/RecipesFish';
import RecipesPureChicken from './pages/RecipesPureChicken';
import RecipesPureMutton from './pages/RecipesPureMutton';
import RecipesQeema from './pages/RecipesQeema';
import RecipesRice from './pages/RecipesRice';
import RecipesHeavyGravy from './pages/RecipesHeavyGravy';
import RecipesBread from './pages/RecipesBread';
import RecipesBBQ from './pages/RecipesBBQ';
import RecipesLightDinner from './pages/RecipesLightDinner';
import Dinner from './pages/Dinner';
import RecipesDinner from './pages/RecipesDinner';
import RecipesAppetizers from './pages/RecipesAppetizers';
import RecipeCheatMeal from './pages/RecipeCheatMeal';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import VerifyOTPPage from './pages/VerifyOTPPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

// ✅ Urdu Pages
import UrduPantryPage from './pages/Urdu/UrduPantryPage';
import UrduHomePage from './pages/Urdu/UrduHomePage';
import UrduResetPasswordPage from './pages/Urdu/UrduResetPasswordPage';
import UrduPublicHome from './pages/Urdu/UrduPublicHome';
import UrduLogoutPage from './pages/Urdu/UrduLogoutPage';
import UrduLoginPage from './pages/Urdu/UrduLoginPage';
import UrduForgotPasswordPage from './pages/Urdu/UrduForgotPasswordPage';
import UrduShoppingList from './pages/Urdu/UrduShoppingList';
import UrduMealFeature from './pages/Urdu/UrduMealFeature';
import UrduMealSuggestion from './pages/Urdu/UrduMealSuggestion';
import UrduVerifyOTPPage from './pages/Urdu/UrduVerifyOTPPage';
import UAboutPage from './pages/Urdu/UAboutPage';
import UContactPage from './pages/Urdu/UContactPage';
import UrduCuttingTechniquesPage from './pages/Urdu/UrduCuttingTechniquesPage';
import UrduCookingMethodsPage from './pages/Urdu/UrduCookingMethodsPage';
//import UrduKitchenAppliancesPage from './pages/Urdu/UrduKitchenAppliancesPage';
import UrduBakeryEssentialsPage from './pages/Urdu/UrduBakeryEssentialsPage';
import './App.css';

function AppWrapper() {
  const location = useLocation();
  const { language } = useLanguage();
  
  // ✅ Sirf URL ke hisaab se decide karo, language state ko ignore karo (temporary fix)
  // Is tarah /home par always English header/show hoga
  const isUrdu = location.pathname.includes('/urdu') || 
                 location.pathname.includes('-urdu') ||
                 location.pathname === '/smart-pantry-urdu' ||
                 location.pathname === '/smart-shopping-urdu' ||
                 location.pathname === '/smart-planner-urdu' ||
                 location.pathname === '/urdu-meal-suggestion' ||
                 location.pathname === '/urdu-home' ||
                 location.pathname === '/urdu-about' ||
                 location.pathname === '/urdu-contact';

  // Conditional Header and Footer
  const HeaderComponent = isUrdu ? UrduHeader : Header;
  const FooterComponent = isUrdu ? UrduFooter : Footer;

  return (
    <div 
      className={`app-wrapper ${isUrdu ? 'urdu-mode' : 'english-mode'}`} 
      dir={isUrdu ? "rtl" : "ltr"}
    >
      <HeaderComponent />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicHome />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/urdu" element={<UrduPublicHome />} />

        {/* Auth Routes */}
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<VerifyOTPPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/urdu-login" element={<UrduLoginPage />} />
        <Route path="/urdu-logout" element={<UrduLogoutPage />} />
        <Route path="/urdu-forgot-password" element={<UrduForgotPasswordPage />} />
        <Route path="/urdu-verify-otp" element={<UrduVerifyOTPPage />} />
        <Route path="/urdu-reset-password" element={<UrduResetPasswordPage />} />
        <Route path="/urdu-signup" element={<UrduSignUpPage />} />
        <Route path="/urdu-home" element={<UrduHomePage />} />

        {/* English Routes */}
        <Route path="/smart-pantry" element={<PantryPage />} />
        <Route path="/smart-shopping" element={<ShoppingList />} />
        <Route path="/meal-suggestion" element={<MealSuggestion />} />
        <Route path="/meal-planner" element={<MealFeature />} />
        
        {/* Urdu Routes */}
        <Route path="/smart-pantry-urdu" element={<UrduPantryPage />} />
        <Route path="/smart-shopping-urdu" element={<UrduShoppingList />} />
        <Route path="/smart-planner-urdu" element={<UrduMealFeature />} />
        <Route path="/urdu-meal-suggestion" element={<UrduMealSuggestion />} />
        
        {/* Guidance Routes */}
        <Route path="/guidance" element={<BeginnersPage />} />
        <Route path="/measuring-skills" element={<MeasuringSkillsPage />} />
        //<Route path="/kitchen-appliances" element={<KitchenAppliancesPage />} />
        <Route path="/cutting-techniques" element={<CuttingTechniquesPage />} />
        <Route path="/kitchen-tools" element={<KitchenToolsPage />} />
        <Route path="/cooking-methods" element={<CookingMethodsPage />} />
        <Route path="/meat-cuts" element={<MeatProcessingPage />} />
        <Route path="/pantry-basics" element={<PantryBasicsPage />} />
        <Route path="/bakery-essentials" element={<BakeryEssentialsPage />} />
        <Route path="/urdu-cutting-techniques" element={<UrduCuttingTechniquesPage />} />
        <Route path="/urdu-cooking-methods" element={<UrduCookingMethodsPage />} />
<Route path="/urdu-bakery-essentials" element={<UrduBakeryEssentialsPage />} />
        {/* Recipe Routes */}
        <Route path="/recipes" element={<RecipeFeature />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/soups" element={<RecipeSoupPage />} />
        <Route path="/Beverages" element={<RecipeBeveragesPage />} />
        <Route path="/desserts" element={<RecipeDessertsPage />} />
        <Route path="/baking" element={<RecipeBakingPage />} />
        <Route path="/Vege" element={<RecipeVegetablePage />} />
        <Route path="/QuickRecipe" element={<RecipeQuickPage />} />
        <Route path="/StudentRecipe" element={<RecipeStudentPage />} />
        <Route path="/Regional" element={<RecipeRegionalPage />} />
        <Route path="/Salads" element={<RecipeSaladsPage />} />
        <Route path="/Snack" element={<RecipeSnacksPage />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/recipe-lunch" element={<RecipesLunch />} />
        <Route path="/BreakFast" element={<RecipeBreakFast />} />
        <Route path="/plain-veg" element={<RecipePlainVegetables />} />
        <Route path="/veg-chick" element={<RecipesVegChicken />} />
        <Route path="/veg-mutton" element={<RecipesVegMutton />} />
        <Route path="/plain-dal" element={<RecipesPlainDal />} />
        <Route path="/dal-chick" element={<RecipesDalChicken />} />
        <Route path="/dal-mutton" element={<RecipesDalMutton />} />
        <Route path="/egg-dishes" element={<RecipesEggDishes />} />
        <Route path="/fish-dishes" element={<RecipesFish />} />
        <Route path="/chicken" element={<RecipesPureChicken />} />
        <Route path="/mutton" element={<RecipesPureMutton />} />
        <Route path="/qeema" element={<RecipesQeema />} />
        <Route path="/rice" element={<RecipesRice />} />
        <Route path="/gravy" element={<RecipesHeavyGravy />} />
        <Route path="/BBQ" element={<RecipesBBQ />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/recipe-dinner" element={<RecipesDinner />} />
        <Route path="/breads" element={<RecipesBread />} />
        <Route path="/appetizers" element={<RecipesAppetizers />} />
        <Route path="/dinner-light" element={<RecipesLightDinner />} />
        <Route path="/cheat-meal" element={<RecipeCheatMeal />} />
        
        {/* About/Contact */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/urdu-about" element={<UAboutPage />} />
        <Route path="/urdu-contact" element={<UContactPage />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <LanguageProvider>
          <AppWrapper />
        </LanguageProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;