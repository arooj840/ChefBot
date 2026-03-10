import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MealCalender.css';

// ============================================================
// DUMMY RECIPE DATABASE
// Abhi: Yeh sab hardcoded dummy data hai JSX file mein
// Backend ke baad: MongoDB mein hoga, API se aayega
// ============================================================
const RECIPE_DATABASE = {
  veg: {
    general: {
      breakfast: [
        { name: 'Aloo Paratha',     time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['Atta', 'Aloo', 'Pyaz', 'Hara Dhania', 'Namak'] },
        { name: 'Halwa Puri',       time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['Maida', 'Sooji', 'Cheeni', 'Ghee', 'Elaichi'] },
        { name: 'Dahi Bhalla',      time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Dahi', 'Urad Dal', 'Imli', 'Podina', 'Zeera'] },
        { name: 'Chana Chaat',      time: '15 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Chana', 'Pyaz', 'Tamatar', 'Hara Dhania', 'Lemon'] },
        { name: 'Besan Ka Cheela',  time: '15 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Besan', 'Pyaz', 'Tamatar', 'Hara Dhania', 'Namak'] },
        { name: 'Poha',             time: '15 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Chiwra', 'Pyaz', 'Matar', 'Lemon', 'Haldi'] },
        { name: 'Masala Omelette',  time: '10 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['Ande', 'Pyaz', 'Tamatar', 'Hara Mirch', 'Namak'] },
      ],
      lunch: [
        { name: 'Daal Chawal',      time: '35 min', servings: '3 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Masoor Daal', 'Chawal', 'Pyaz', 'Tamatar', 'Lehsan'] },
        { name: 'Palak Paneer',     time: '30 min', servings: '3 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Palak', 'Paneer', 'Pyaz', 'Tamatar', 'Cream'] },
        { name: 'Chana Masala',     time: '40 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Safed Chana', 'Pyaz', 'Tamatar', 'Adrak Lehsan', 'Garam Masala'] },
        { name: 'Rajma Chawal',     time: '45 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Rajma', 'Chawal', 'Pyaz', 'Tamatar', 'Masalay'] },
        { name: 'Aloo Gobi',        time: '25 min', servings: '3 servings', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['Aloo', 'Gobi', 'Pyaz', 'Haldi', 'Zeera'] },
        { name: 'Sarson Ka Saag',   time: '60 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Sarson', 'Makki Atta', 'Lehsan', 'Adrak', 'Ghee'] },
        { name: 'Veg Biryani',      time: '50 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Basmati Chawal', 'Mix Sabziyaan', 'Dahi', 'Zafran', 'Garam Masala'] },
      ],
      dinner: [
        { name: 'Daal Makhani',         time: '50 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Kali Daal', 'Makhan', 'Cream', 'Tamatar', 'Masalay'] },
        { name: 'Paneer Butter Masala', time: '35 min', servings: '3 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Paneer', 'Makhan', 'Tamatar', 'Kaju', 'Cream'] },
        { name: 'Aloo Matar',           time: '25 min', servings: '3 servings', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Aloo', 'Matar', 'Pyaz', 'Tamatar', 'Zeera'] },
        { name: 'Khichdi',              time: '25 min', servings: '3 servings', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['Chawal', 'Moong Daal', 'Ghee', 'Zeera', 'Haldi'] },
        { name: 'Baingan Bharta',       time: '35 min', servings: '3 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Baingan', 'Pyaz', 'Tamatar', 'Hara Dhania', 'Masalay'] },
        { name: 'Mix Veg Curry',        time: '30 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['Mix Sabziyaan', 'Pyaz', 'Tamatar', 'Dahi', 'Garam Masala'] },
        { name: 'Shahi Paneer',         time: '40 min', servings: '3 servings', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['Paneer', 'Kaju', 'Dahi', 'Cream', 'Kesar'] },
      ],
    },
    kids: {
      breakfast: [
        { name: 'Chocolate Paratha',  time: '15 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['Atta', 'Chocolate Spread', 'Makhan', 'Cheeni'] },
        { name: 'Fruit Chaat',        time: '10 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Seb', 'Kela', 'Angoor', 'Chaat Masala', 'Lemon'] },
        { name: 'Doodh Sooji',        time: '15 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['Sooji', 'Doodh', 'Cheeni', 'Elaichi', 'Kaju'] },
        { name: 'Cheesy Paratha',     time: '15 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Atta', 'Cheese', 'Makhan', 'Namak'] },
        { name: 'Banana Milkshake',   time: '5 min',  servings: '1 serving',  image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Kela', 'Doodh', 'Cheeni', 'Vanilla'] },
        { name: 'Aloo Toast',         time: '15 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Bread', 'Aloo', 'Makhan', 'Namak', 'Zeera'] },
        { name: 'Egg Paratha',        time: '15 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['Atta', 'Anda', 'Makhan', 'Namak', 'Kali Mirch'] },
      ],
      lunch: [
        { name: 'Macaroni',           time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400', ingredients: ['Macaroni', 'Tamatar Sauce', 'Paneer', 'Doodh', 'Masalay'] },
        { name: 'Aloo Sabzi Roti',    time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Aloo', 'Atta', 'Pyaz', 'Masalay', 'Ghee'] },
        { name: 'Daal Chawal (Mild)', time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Masoor Daal', 'Chawal', 'Ghee', 'Namak', 'Haldi'] },
        { name: 'Veg Sandwich',       time: '10 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['Bread', 'Paneer', 'Kheera', 'Tamatar', 'Mayonnaise'] },
        { name: 'Cheesy Pasta',       time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400', ingredients: ['Pasta', 'Cheese', 'Cream', 'Butter', 'Herbs'] },
        { name: 'Veg Pulao',          time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Chawal', 'Mix Sabziyaan', 'Ghee', 'Pyaz', 'Zeera'] },
        { name: 'Paneer Paratha',     time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Atta', 'Paneer', 'Pyaz', 'Hara Dhania', 'Masalay'] },
      ],
      dinner: [
        { name: 'Veg Noodles',    time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400', ingredients: ['Noodles', 'Sabziyaan', 'Soy Sauce', 'Kali Mirch', 'Tel'] },
        { name: 'Pizza Paratha',  time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Atta', 'Tamatar Sauce', 'Mozzarella', 'Sabziyaan', 'Oregano'] },
        { name: 'Khichdi',        time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['Chawal', 'Moong Daal', 'Ghee', 'Namak', 'Haldi'] },
        { name: 'Daal Roti',      time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Masoor Daal', 'Atta', 'Ghee', 'Haldi', 'Namak'] },
        { name: 'Aloo Matar',     time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['Aloo', 'Matar', 'Pyaz', 'Tamatar', 'No Tez Masala'] },
        { name: 'Egg Curry',      time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Ande', 'Tamatar', 'Pyaz', 'No Tez Mirch', 'Masalay'] },
        { name: 'Veg Soup + Roti',time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Mix Sabziyaan', 'Adrak', 'Kali Mirch', 'Atta', 'Makhan'] },
      ],
    },
    patient: {
      diabetes: {
        breakfast: [
          { name: 'Oats Daliya',      time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Oats', 'Doodh (skimmed)', 'Akhrot', 'Dalchini'] },
          { name: 'Methi Paratha',    time: '20 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['Atta (gehun)', 'Methi', 'Namak', 'Zeera'] },
          { name: 'Sprout Chaat',     time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Sprouts', 'Lemon', 'Pyaz', 'Hara Dhania', 'No Cheeni'] },
          { name: 'Moong Dal Cheela', time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Moong Dal', 'Pyaz', 'Adrak', 'Hara Dhania', 'No Oil'] },
          { name: 'Fruit Bowl',       time: '5 min',  servings: '1 serving', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Seb', 'Amrood', 'Nashpati', 'No Banana'] },
          { name: 'Brown Bread Sabzi',time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['Brown Bread', 'Tamatar', 'Kheera', 'Pyaz', 'No Makhan'] },
          { name: 'Daliya',           time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['Daliya', 'Doodh (low fat)', 'No Cheeni', 'Elaichi'] },
        ],
        lunch: [
          { name: 'Karela Sabzi',   time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Karela', 'Pyaz', 'Tamatar', 'Masalay', 'Tel (kam)'] },
          { name: 'Daal (Low Oil)', time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Masoor Daal', 'Pyaz', 'Tamatar', 'Haldi', 'Tel (1 tsp)'] },
          { name: 'Tinda Sabzi',    time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['Tinda', 'Pyaz', 'Tamatar', 'Haldi', 'No Tez Mirch'] },
          { name: 'Methi Daal',     time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Methi', 'Chana Dal', 'Pyaz', 'Adrak', 'Tel (kam)'] },
          { name: 'Gobhi Sabzi',    time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Gobi', 'Pyaz', 'Adrak', 'Haldi', 'Tel (1 tsp)'] },
          { name: 'Brown Rice Daal',time: '40 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['Brown Chawal', 'Moong Daal', 'Haldi', 'Zeera', 'Ghee (thora)'] },
          { name: 'Palak Soup',     time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Palak', 'Lehsan', 'Kali Mirch', 'No Cream'] },
        ],
        dinner: [
          { name: 'Tori Ki Sabzi', time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Tori', 'Pyaz', 'Tamatar', 'Haldi', 'Zeera'] },
          { name: 'Palak Daal',    time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Palak', 'Moong Daal', 'Lehsan', 'Haldi', 'Tel (1 tsp)'] },
          { name: 'Lauki Sabzi',   time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Lauki', 'Pyaz', 'Tamatar', 'Haldi', 'No Namak Zyada'] },
          { name: 'Bhindi Sabzi',  time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['Bhindi', 'Pyaz', 'Tamatar', 'Zeera', 'Tel (1 tsp)'] },
          { name: 'Besan Cheela',  time: '15 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Besan', 'Pyaz', 'Adrak', 'Hara Dhania', 'Tel (1 tsp)'] },
          { name: 'Sprout Curry',  time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Sprouts', 'Tamatar', 'Adrak', 'Haldi', 'No Oil'] },
          { name: 'Kheera Raita',  time: '10 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Dahi', 'Kheera', 'Zeera', 'No Cheeni', 'Hara Dhania'] },
        ],
      },
      heart: {
        breakfast: [
          { name: 'Oats Porridge',    time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Oats', 'Paani', 'Seb', 'Shahad', 'Akhrot'] },
          { name: 'Brown Bread Toast',time: '5 min',  servings: '1 serving', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['Brown Bread', 'Avocado', 'Lemon', 'Kali Mirch'] },
          { name: 'Fruit Smoothie',   time: '5 min',  servings: '1 serving', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Mix Fruits', 'Doodh (skimmed)', 'Shahad', 'No Cheeni'] },
          { name: 'Sprout Salad',     time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Sprouts', 'Kheera', 'Tamatar', 'Lemon', 'No Salt'] },
          { name: 'Banana Oats',      time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['Oats', 'Kela', 'Doodh (low fat)', 'Shahad'] },
          { name: 'Moong Dal Cheela', time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Moong Dal', 'Pyaz', 'Adrak', 'Hara Dhania', 'No Oil'] },
          { name: 'Daliya',           time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['Daliya', 'Doodh', 'Shahad', 'Elaichi', 'No Ghee'] },
        ],
        lunch: [
          { name: 'Masoor Daal',  time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Masoor Daal', 'Pyaz', 'Tamatar', 'Haldi', 'Olive Oil'] },
          { name: 'Sabzi Shorba', time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Mix Sabziyaan', 'Lahsan', 'Adrak', 'Kali Mirch'] },
          { name: 'Lauki Soup',   time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Lauki', 'Adrak', 'Kali Mirch', 'No Oil'] },
          { name: 'Gobhi Daal',   time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['Gobi', 'Moong Daal', 'Haldi', 'Zeera', 'Olive Oil (1 tsp)'] },
          { name: 'Brown Rice',   time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Brown Chawal', 'Kali Mirch', 'Namak (kam)', 'Pani'] },
          { name: 'Palak Soup',   time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Palak', 'Lehsan', 'Adrak', 'No Cream', 'No Makhan'] },
          { name: 'Veg Salad',    time: '10 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Kheera', 'Tamatar', 'Pyaz', 'Lemon', 'No Salt'] },
        ],
        dinner: [
          { name: 'Steamed Veg',        time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['Gobi', 'Gajar', 'Matar', 'Zeera', 'Namak (kam)'] },
          { name: 'Palak Daal',         time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Palak', 'Moong Daal', 'Lehsan', 'Haldi', 'Tel (1 tsp)'] },
          { name: 'Lauki Sabzi',        time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Lauki', 'Zeera', 'Haldi', 'No Tel', 'Kali Mirch'] },
          { name: 'Brown Rice Khichdi', time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['Brown Chawal', 'Moong Daal', 'Haldi', 'Zeera', 'No Ghee'] },
          { name: 'Methi Sabzi',        time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Methi', 'Pyaz', 'Tamatar', 'Zeera', 'No Zyada Tel'] },
          { name: 'Daal Shorba',        time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Masoor Daal', 'Adrak', 'Kali Mirch', 'Lehsan', 'No Makhan'] },
          { name: 'Tori Sabzi',         time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Tori', 'Pyaz', 'Zeera', 'Tel (1 tsp)', 'No Namak'] },
        ],
      },
      bp: {
        breakfast: [
          { name: 'Banana Smoothie', time: '5 min',  servings: '1 serving', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Kela', 'Doodh', 'Akhrot', 'Shahad'] },
          { name: 'Daliya',          time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['Daliya', 'Doodh', 'Mewa', 'Elaichi'] },
          { name: 'Oats + Fruit',    time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Oats', 'Seb', 'Akhrot', 'No Namak'] },
          { name: 'Fruit Bowl',      time: '5 min',  servings: '1 serving', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Kela', 'Seb', 'Angoor', 'Shahad', 'No Namak'] },
          { name: 'Brown Toast',     time: '5 min',  servings: '1 serving', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['Brown Bread', 'Avocado', 'Lemon', 'No Namak'] },
          { name: 'Moong Cheela',    time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Moong Dal', 'Adrak', 'Hara Dhania', 'No Namak', 'No Oil'] },
          { name: 'Doodh Oats',      time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['Oats', 'Doodh (skimmed)', 'Kela', 'Shahad'] },
        ],
        lunch: [
          { name: 'Moong Daal Palak',time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Moong Daal', 'Palak', 'Lahsan', 'Tel (kam)'] },
          { name: 'Methi Sabzi',     time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Methi', 'Pyaz', 'Tamatar', 'Zeera'] },
          { name: 'Gobhi Sabzi',     time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['Gobi', 'Adrak', 'Haldi', 'No Namak', 'Zeera'] },
          { name: 'Daal (No Salt)',  time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Moong Daal', 'Haldi', 'Zeera', 'No Namak', 'Adrak'] },
          { name: 'Lauki Curry',     time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Lauki', 'Pyaz', 'Haldi', 'No Namak', 'No Mirch'] },
          { name: 'Brown Rice',      time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400', ingredients: ['Brown Chawal', 'Kali Mirch', 'No Namak', 'Pani'] },
          { name: 'Palak Soup',      time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Palak', 'Lehsan', 'Kali Mirch', 'No Namak'] },
        ],
        dinner: [
          { name: 'Light Khichdi', time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['Chawal', 'Moong Daal', 'Haldi', 'Ghee (thora)', 'No Namak'] },
          { name: 'Tori Sabzi',    time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Tori', 'Pyaz', 'Zeera', 'Tel (1 tsp)', 'No Namak'] },
          { name: 'Palak Daal',    time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Palak', 'Moong Daal', 'Adrak', 'No Namak', 'No Tez Mirch'] },
          { name: 'Veg Soup',      time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['Mix Sabziyaan', 'Adrak', 'Kali Mirch', 'No Namak'] },
          { name: 'Bhindi Sabzi',  time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Bhindi', 'Pyaz', 'Haldi', 'No Namak', 'Tel (1 tsp)'] },
          { name: 'Methi Sabzi',   time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Methi', 'Pyaz', 'Tamatar', 'Zeera', 'No Zyada Tel'] },
          { name: 'Daal Soup',     time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Masoor Daal', 'Adrak', 'Haldi', 'No Namak', 'No Tel'] },
        ],
      },
    },
  },

  'non-veg': {
    general: {
      breakfast: [
        { name: 'Anda Paratha',    time: '15 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['Atta', 'Anda', 'Pyaz', 'Hara Mirch', 'Namak'] },
        { name: 'Keema Paratha',   time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['Atta', 'Keema', 'Pyaz', 'Hara Dhania', 'Masalay'] },
        { name: 'Anda Bhurji',     time: '10 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Ande', 'Pyaz', 'Tamatar', 'Hara Mirch', 'Masalay'] },
        { name: 'Haleem',          time: '180 min',servings: '6 servings', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Gosht', 'Daalein', 'Gehu', 'Masalay', 'Fried Pyaz'] },
        { name: 'Nihari Naan',     time: '120 min',servings: '4 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Beef', 'Naan', 'Adrak', 'Nihari Masala', 'Ghee'] },
        { name: 'Chicken Sandwich',time: '15 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['Bread', 'Chicken', 'Mayonnaise', 'Lettuce', 'Tamatar'] },
        { name: 'Boiled Egg Chaat',time: '10 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Ande', 'Chaat Masala', 'Lemon', 'Pyaz', 'Hara Dhania'] },
      ],
      lunch: [
        { name: 'Chicken Karahi',  time: '40 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['Chicken', 'Tamatar', 'Adrak Lehsan', 'Hara Dhania', 'Masalay'] },
        { name: 'Mutton Biryani',  time: '90 min', servings: '6 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Basmati Chawal', 'Mutton', 'Dahi', 'Zafran', 'Garam Masala'] },
        { name: 'Daal Gosht',      time: '60 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Gosht', 'Chana Daal', 'Pyaz', 'Tamatar', 'Masalay'] },
        { name: 'Aloo Gosht',      time: '60 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['Gosht', 'Aloo', 'Pyaz', 'Tamatar', 'Masalay'] },
        { name: 'Chicken Pulao',   time: '50 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1596040033229-a0b7e2d82ae8?w=400', ingredients: ['Chicken', 'Chawal', 'Pyaz', 'Sabut Masalay', 'Dahi'] },
        { name: 'Murgh Makhni',    time: '45 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Chicken', 'Makhan', 'Tamatar', 'Cream', 'Masalay'] },
        { name: 'Beef Kofta Curry',time: '50 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Keema', 'Pyaz', 'Tamatar', 'Anda', 'Garam Masala'] },
      ],
      dinner: [
        { name: 'Mutton Karahi', time: '60 min',  servings: '4 servings', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['Mutton', 'Tamatar', 'Adrak', 'Kali Mirch', 'Hara Dhania'] },
        { name: 'Chicken Handi', time: '45 min',  servings: '4 servings', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Chicken', 'Dahi', 'Cream', 'Pyaz', 'Masalay'] },
        { name: 'Beef Nihari',   time: '180 min', servings: '6 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Beef', 'Adrak', 'Nihari Masala', 'Imli', 'Ghee'] },
        { name: 'Chicken Qorma', time: '50 min',  servings: '4 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Chicken', 'Dahi', 'Kaju', 'Elaichi', 'Zarda'] },
        { name: 'Fish Curry',    time: '35 min',  servings: '3 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Machli', 'Tamatar', 'Pyaz', 'Haldi', 'Zeera'] },
        { name: 'Seekh Kebab',   time: '30 min',  servings: '3 servings', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400', ingredients: ['Keema', 'Pyaz', 'Hara Dhania', 'Garam Masala', 'Adrak Lehsan'] },
        { name: 'Paye',          time: '240 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Paye', 'Pyaz', 'Adrak Lehsan', 'Garam Masala', 'Ghee'] },
      ],
    },
    kids: {
      breakfast: [
        { name: 'Anda Paratha (Mild)',  time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['Atta', 'Anda', 'Makhan', 'Thodi Namak'] },
        { name: 'Chicken Sandwich',     time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['Bread', 'Chicken Boil', 'Mayonnaise', 'Tamatar', 'Lettuce'] },
        { name: 'Boiled Egg',           time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Ande', 'Namak', 'Kali Mirch (thori)', 'Brown Bread'] },
        { name: 'Anda Bhurji (Mild)',   time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Ande', 'Pyaz', 'Tamatar', 'Makhan', 'No Mirch'] },
        { name: 'Chicken Toast',        time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Bread', 'Chicken', 'Cheese', 'Mayonnaise', 'No Tez'] },
        { name: 'Banana Milkshake',     time: '5 min',  servings: '1 serving', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Kela', 'Doodh', 'Cheeni', 'Vanilla'] },
        { name: 'Egg Roll (Mild)',      time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['Anda', 'Paratha', 'Ketchup', 'No Tez Masala'] },
      ],
      lunch: [
        { name: 'Chicken Pulao',      time: '45 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1596040033229-a0b7e2d82ae8?w=400', ingredients: ['Chicken', 'Chawal', 'Pyaz', 'Sabut Masalay'] },
        { name: 'Mild Chicken Curry', time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Chicken', 'Tamatar', 'Dahi', 'Cream', 'No Tez Mirch'] },
        { name: 'Chicken Noodles',    time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Noodles', 'Chicken', 'Sabziyaan', 'Soy Sauce'] },
        { name: 'Keema Roti',         time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['Keema', 'Atta', 'Pyaz', 'Hara Dhania', 'No Tez Masala'] },
        { name: 'Egg Fried Rice',     time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Chawal', 'Anda', 'Sabziyaan', 'Soy Sauce', 'No Tez'] },
        { name: 'Chicken Pasta',      time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400', ingredients: ['Pasta', 'Chicken', 'Tamatar Sauce', 'Cheese', 'Oregano'] },
        { name: 'Chicken Sandwich',   time: '15 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['Bread', 'Chicken', 'Cheese', 'Lettuce', 'Mayonnaise'] },
      ],
      dinner: [
        { name: 'Chicken Nuggets',      time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400', ingredients: ['Chicken', 'Breadcrumbs', 'Anda', 'Namak'] },
        { name: 'Keema Paratha (Mild)', time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['Atta', 'Keema', 'Pyaz', 'Hara Dhania', 'No Tez Masala'] },
        { name: 'Chicken Qorma (Mild)',time: '40 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Chicken', 'Dahi', 'Kaju', 'Cream', 'No Tez Mirch'] },
        { name: 'Pizza Paratha',        time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Atta', 'Tamatar Sauce', 'Mozzarella', 'Chicken', 'Oregano'] },
        { name: 'Chicken Soup',         time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Chicken', 'Sabziyaan', 'Adrak', 'No Tez', 'Kali Mirch'] },
        { name: 'Egg Curry (Mild)',     time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Ande', 'Tamatar', 'Pyaz', 'No Tez Mirch', 'Masalay (kam)'] },
        { name: 'Chicken Rice',         time: '40 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Chicken', 'Chawal', 'Pyaz', 'Garam Masala (thora)'] },
      ],
    },
    patient: {
      diabetes: {
        breakfast: [
          { name: 'Boiled Egg (2)',           time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Ande', 'No Salt', 'Kali Mirch', 'Brown Bread'] },
          { name: 'Grilled Chicken Sandwich', time: '20 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['Brown Bread', 'Grilled Chicken', 'Lettuce', 'Mustard'] },
          { name: 'Egg White Omelette',       time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Ande ki Safedi', 'Sabziyaan', 'No Oil', 'No Namak'] },
          { name: 'Boiled Chicken Toast',     time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['Boil Chicken', 'Brown Bread', 'Lettuce', 'No Makhan'] },
          { name: 'Egg Bhurji (No Oil)',      time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Ande', 'Pyaz', 'Tamatar', 'No Oil', 'Herbs'] },
          { name: 'Chicken Sprout Salad',     time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Boil Chicken', 'Sprouts', 'Kheera', 'Lemon', 'No Dressing'] },
          { name: 'Tuna Salad',               time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Tuna', 'Kheera', 'Pyaz', 'Lemon', 'No Mayo'] },
        ],
        lunch: [
          { name: 'Grilled Fish',         time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Machli', 'Lemon', 'Herbs', 'No Oil', 'Namak (kam)'] },
          { name: 'Chicken Shorba',       time: '40 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Chicken', 'Sabziyaan', 'Adrak', 'Kali Mirch'] },
          { name: 'Boil Chicken + Salad', time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['Chicken', 'Kheera', 'Tamatar', 'Lemon', 'No Dressing'] },
          { name: 'Tuna + Brown Rice',    time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Tuna', 'Brown Chawal', 'Kheera', 'Lemon'] },
          { name: 'Fish Soup',            time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Machli', 'Sabziyaan', 'Adrak', 'No Oil', 'Kali Mirch'] },
          { name: 'Grilled Chicken Salad',time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400', ingredients: ['Grilled Chicken', 'Lettuce', 'Tamatar', 'Kheera', 'Lemon'] },
          { name: 'Egg + Sabzi',          time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Ande', 'Palak', 'Tamatar', 'No Tel', 'Kali Mirch'] },
        ],
        dinner: [
          { name: 'Baked Chicken',               time: '45 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400', ingredients: ['Chicken', 'Herbs', 'Lemon', 'Kali Mirch', 'Olive Oil (kam)'] },
          { name: 'Chicken Daal',                time: '50 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Chicken', 'Masoor Daal', 'Pyaz', 'Haldi', 'Tel (1 tsp)'] },
          { name: 'Steamed Fish',                time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Machli', 'Lemon', 'Adrak', 'No Oil'] },
          { name: 'Grilled Chicken + Sabzi',     time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['Chicken', 'Gobi', 'Gajar', 'Herbs', 'No Makhan'] },
          { name: 'Fish + Brown Rice',           time: '40 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Machli', 'Brown Chawal', 'Haldi', 'Lemon'] },
          { name: 'Chicken Soup',                time: '40 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Chicken', 'Sabziyaan', 'Adrak', 'No Oil'] },
          { name: 'Egg + Palak',                 time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Ande', 'Palak', 'Lehsan', 'No Makhan'] },
        ],
      },
      heart: {
        breakfast: [
          { name: 'Egg White Omelette', time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['Ande ki Safedi', 'Sabziyaan', 'No Oil', 'Herbs'] },
          { name: 'Boiled Egg Toast',   time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Anda', 'Brown Bread', 'No Makhan', 'Kali Mirch'] },
          { name: 'Oats + Egg White',   time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Oats', 'Ande ki Safedi', 'Kela', 'No Cheeni'] },
          { name: 'Tuna Sandwich',      time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['Tuna', 'Brown Bread', 'Lettuce', 'Lemon', 'No Mayo'] },
          { name: 'Fruit + Egg Bowl',   time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Anda', 'Seb', 'Akhrot', 'No Cheeni'] },
          { name: 'Grilled Chicken Wrap',time:'15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Chicken', 'Lettuce', 'Tamatar', 'No Mayo', 'Whole Wheat'] },
          { name: 'Banana Oats',        time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['Oats', 'Kela', 'Doodh (low fat)', 'Shahad'] },
        ],
        lunch: [
          { name: 'Steamed Fish',           time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Machli', 'Lemon', 'Adrak', 'No Oil'] },
          { name: 'Chicken Soup',           time: '40 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Chicken', 'Sabziyaan', 'Adrak', 'Kali Mirch', 'No Extra Oil'] },
          { name: 'Grilled Fish Salad',     time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Machli', 'Lettuce', 'Tamatar', 'Lemon', 'No Dressing'] },
          { name: 'Boil Chicken + Sabzi',   time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['Chicken', 'Gobi', 'Gajar', 'Adrak', 'No Makhan'] },
          { name: 'Fish + Brown Rice',      time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Machli', 'Brown Chawal', 'Herbs', 'Lemon'] },
          { name: 'Tuna Salad',             time: '10 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400', ingredients: ['Tuna', 'Kheera', 'Tamatar', 'Lemon', 'No Mayo'] },
          { name: 'Egg + Veg Curry',        time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Ande', 'Palak', 'Tamatar', 'No Makhan'] },
        ],
        dinner: [
          { name: 'Grilled Chicken', time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['Chicken', 'Herbs', 'Lemon', 'Olive Oil (1 tsp)'] },
          { name: 'Fish Shorba',     time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Machli', 'Sabziyaan', 'Adrak', 'No Extra Salt'] },
          { name: 'Baked Fish',      time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Machli', 'Herbs', 'Lemon', 'No Oil'] },
          { name: 'Chicken + Veg',   time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Chicken', 'Gobi', 'Gajar', 'No Makhan', 'Herbs'] },
          { name: 'Egg + Palak',     time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Ande', 'Palak', 'Lehsan', 'No Makhan'] },
          { name: 'Tuna + Salad',    time: '15 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Tuna', 'Lettuce', 'Kheera', 'Lemon', 'No Dressing'] },
          { name: 'Chicken Daal Soup',time:'45 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Chicken', 'Masoor Daal', 'Adrak', 'No Makhan'] },
        ],
      },
      bp: {
        breakfast: [
          { name: 'Egg White Bhurji', time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Ande ki Safedi', 'Pyaz', 'Tamatar', 'No Salt', 'Herbs'] },
          { name: 'Boiled Egg Toast',  time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['Anda', 'Brown Bread', 'No Salt', 'Kali Mirch'] },
          { name: 'Banana + Egg',      time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Kela', 'Anda', 'Brown Bread', 'No Namak'] },
          { name: 'Tuna Brown Toast',  time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Tuna', 'Brown Bread', 'Lettuce', 'No Salt', 'No Mayo'] },
          { name: 'Egg Salad',         time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Anda', 'Kheera', 'Tamatar', 'Lemon', 'No Namak'] },
          { name: 'Chicken Oats',      time: '15 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Oats', 'Chicken Broth', 'Adrak', 'No Namak'] },
          { name: 'Fruit + Egg Bowl',  time: '10 min', servings: '1 serving', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['Anda', 'Kela', 'Seb', 'Shahad', 'No Namak'] },
        ],
        lunch: [
          { name: 'Boiled Chicken + Sabzi',time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['Chicken', 'Sabziyaan', 'Adrak', 'No Salt'] },
          { name: 'Grilled Fish',          time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Machli', 'Lemon', 'Herbs', 'No Salt'] },
          { name: 'Chicken Soup (No Salt)',time: '40 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Chicken', 'Sabziyaan', 'Adrak', 'No Namak'] },
          { name: 'Egg + Brown Rice',      time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Anda', 'Brown Chawal', 'Sabziyaan', 'No Namak'] },
          { name: 'Fish Salad',            time: '15 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Machli', 'Lettuce', 'Kheera', 'Lemon', 'No Salt'] },
          { name: 'Tuna + Veg',            time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400', ingredients: ['Tuna', 'Gobi', 'Gajar', 'No Namak'] },
          { name: 'Chicken Brown Rice',    time: '40 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Chicken', 'Brown Chawal', 'Herbs', 'No Namak'] },
        ],
        dinner: [
          { name: 'Light Khichdi + Chicken',time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['Chawal', 'Moong Daal', 'Chicken', 'No Salt', 'Haldi'] },
          { name: 'Fish Shorba',            time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['Machli', 'Sabziyaan', 'Adrak', 'No Extra Salt'] },
          { name: 'Grilled Chicken',        time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['Chicken', 'Herbs', 'Lemon', 'No Salt', 'No Makhan'] },
          { name: 'Baked Fish',             time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['Machli', 'Lemon', 'Herbs', 'No Namak'] },
          { name: 'Egg + Palak (No Salt)',  time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Ande', 'Palak', 'Lehsan', 'No Namak'] },
          { name: 'Chicken Veg Soup',       time: '35 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Chicken', 'Gobi', 'Gajar', 'Adrak', 'No Namak'] },
          { name: 'Tuna + Veg Salad',       time: '15 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['Tuna', 'Kheera', 'Tamatar', 'Lemon', 'No Namak'] },
        ],
      },
    },
  },

  mixed: {
    general: {
      breakfast: [
        { name: 'Anda Paratha',  time: '15 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['Atta', 'Anda', 'Pyaz', 'Hara Mirch', 'Namak'] },
        { name: 'Aloo Paratha',  time: '20 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['Atta', 'Aloo', 'Pyaz', 'Hara Dhania', 'Masalay'] },
        { name: 'Keema Paratha', time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['Atta', 'Keema', 'Pyaz', 'Hara Dhania', 'Masalay'] },
        { name: 'Halwa Puri',    time: '30 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['Maida', 'Sooji', 'Cheeni', 'Ghee', 'Elaichi'] },
        { name: 'Anda Bhurji',   time: '10 min', servings: '1 serving',  image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Ande', 'Pyaz', 'Tamatar', 'Hara Mirch', 'Masalay'] },
        { name: 'Dahi Bhalla',   time: '25 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Dahi', 'Urad Dal', 'Imli', 'Podina', 'Zeera'] },
        { name: 'Chana Chaat',   time: '15 min', servings: '2 servings', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Chana', 'Pyaz', 'Tamatar', 'Hara Dhania', 'Lemon'] },
      ],
      lunch: [
        { name: 'Chicken Karahi', time: '40 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['Chicken', 'Tamatar', 'Adrak Lehsan', 'Hara Dhania', 'Masalay'] },
        { name: 'Daal Chawal',    time: '35 min', servings: '3 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Masoor Daal', 'Chawal', 'Pyaz', 'Tamatar', 'Masalay'] },
        { name: 'Aloo Gosht',     time: '60 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['Gosht', 'Aloo', 'Pyaz', 'Tamatar', 'Masalay'] },
        { name: 'Chana Masala',   time: '40 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Safed Chana', 'Pyaz', 'Tamatar', 'Adrak Lehsan', 'Masalay'] },
        { name: 'Mutton Biryani', time: '90 min', servings: '6 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Basmati Chawal', 'Mutton', 'Dahi', 'Zafran', 'Garam Masala'] },
        { name: 'Palak Paneer',   time: '30 min', servings: '3 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Palak', 'Paneer', 'Pyaz', 'Tamatar', 'Cream'] },
        { name: 'Veg Biryani',    time: '50 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['Basmati Chawal', 'Mix Sabziyaan', 'Dahi', 'Zafran', 'Garam Masala'] },
      ],
      dinner: [
        { name: 'Mutton Karahi',        time: '60 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['Mutton', 'Tamatar', 'Adrak', 'Kali Mirch', 'Hara Dhania'] },
        { name: 'Daal Makhani',         time: '50 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['Kali Daal', 'Makhan', 'Cream', 'Tamatar', 'Masalay'] },
        { name: 'Chicken Handi',        time: '45 min', servings: '4 servings', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['Chicken', 'Dahi', 'Cream', 'Pyaz', 'Masalay'] },
        { name: 'Paneer Butter Masala', time: '35 min', servings: '3 servings', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['Paneer', 'Makhan', 'Tamatar', 'Cream', 'Masalay'] },
        { name: 'Seekh Kebab',          time: '30 min', servings: '3 servings', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400', ingredients: ['Keema', 'Pyaz', 'Hara Dhania', 'Garam Masala', 'Adrak Lehsan'] },
        { name: 'Aloo Matar',           time: '25 min', servings: '3 servings', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['Aloo', 'Matar', 'Pyaz', 'Tamatar', 'Zeera'] },
        { name: 'Khichdi',              time: '25 min', servings: '3 servings', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['Chawal', 'Moong Daal', 'Ghee', 'Zeera', 'Haldi'] },
      ],
    },
    // Mixed kids → non-veg kids use hogi, mixed patient → non-veg patient
    kids:    { breakfast: [], lunch: [], dinner: [] },
    patient: { diabetes: { breakfast:[], lunch:[], dinner:[] }, heart:{ breakfast:[], lunch:[], dinner:[] }, bp:{ breakfast:[], lunch:[], dinner:[] } },
  },
};

// ============================================================
// LOGIC FUNCTIONS
// ============================================================

// Step 1: Preferences ke hisaab se recipe list nikalo
const getRecipeList = (prefs, mealType) => {
  const diet      = prefs.dietType        || 'veg';
  const audience  = prefs.targetAudience  || 'general';
  const condition = prefs.patientCondition|| 'diabetes';
  try {
    if (diet === 'mixed' && audience === 'kids')
      return RECIPE_DATABASE['non-veg'].kids[mealType] || [];
    if (diet === 'mixed' && audience === 'patient')
      return RECIPE_DATABASE['non-veg'].patient[condition]?.[mealType] || [];
    if (audience === 'patient')
      return RECIPE_DATABASE[diet]?.patient?.[condition]?.[mealType] || [];
    if (audience === 'kids')
      return RECIPE_DATABASE[diet]?.kids?.[mealType] || [];
    return RECIPE_DATABASE[diet]?.general?.[mealType] || [];
  } catch {
    return RECIPE_DATABASE.veg.general[mealType] || [];
  }
};

// Step 2: Allergy wali recipes hatao
const filterByAllergy = (recipes, allergies) => {
  if (!allergies || allergies.length === 0) return recipes;
  return recipes.filter(recipe =>
    !allergies.some(allergy =>
      recipe.ingredients.some(ing =>
        ing.toLowerCase().includes(allergy.toLowerCase())
      )
    )
  );
};

// Step 3: 7 din ka plan banao (recipes rotate hoti hain)
const generateMealPlan = (prefs) => {
  const plan = {};
  ['breakfast', 'lunch', 'dinner'].forEach(mealType => {
    let recipes = getRecipeList(prefs, mealType);
    recipes = filterByAllergy(recipes, prefs.allergies);
    for (let day = 0; day < 7; day++) {
      if (!plan[day]) plan[day] = {};
      plan[day][mealType] = recipes.length > 0
        ? { ...recipes[day % recipes.length], available: true }
        : { name: 'Recipe available nahi', time: '-', servings: '-', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: [], available: false };
    }
  });
  return plan;
};

// ============================================================
// COMPONENT — Aapki original design bilkul same
// ============================================================
const MealCalender = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView]             = useState('daily');
  const [selectedDay, setSelectedDay]             = useState(0);
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
  const [preferences, setPreferences]             = useState({});
  const [mealPlan, setMealPlan]                   = useState({
    0:{breakfast:{name:'',available:true,image:''},lunch:{name:'',available:true,image:''},dinner:{name:'',available:true,image:''}},
    1:{breakfast:{name:'',available:true,image:''},lunch:{name:'',available:true,image:''},dinner:{name:'',available:true,image:''}},
    2:{breakfast:{name:'',available:true,image:''},lunch:{name:'',available:true,image:''},dinner:{name:'',available:true,image:''}},
    3:{breakfast:{name:'',available:true,image:''},lunch:{name:'',available:true,image:''},dinner:{name:'',available:true,image:''}},
    4:{breakfast:{name:'',available:true,image:''},lunch:{name:'',available:true,image:''},dinner:{name:'',available:true,image:''}},
    5:{breakfast:{name:'',available:true,image:''},lunch:{name:'',available:true,image:''},dinner:{name:'',available:true,image:''}},
    6:{breakfast:{name:'',available:true,image:''},lunch:{name:'',available:true,image:''},dinner:{name:'',available:true,image:''}},
  });

  const days          = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const dayShortNames = ['MON','TUE','WED','THU','FRI','SAT','SUN'];

  // ── DATA LOAD ──
  // ABHI: localStorage se prefs leke frontend mein plan generate
  // BACKEND KE BAAD: sirf yeh line replace hogi:
  //   const res = await axios.post('/api/generate-meal-plan', prefs)
  //   setMealPlan(res.data)
  useEffect(() => {
    const savedPreferences = localStorage.getItem('mealPreferences');
    if (savedPreferences) {
      const prefs = JSON.parse(savedPreferences);
      setPreferences(prefs);
      const plan = generateMealPlan(prefs); // ← ABHI frontend
      setMealPlan(plan);
    }
  }, []);

  const getWeekDates = () => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - today.getDay() + 1 + (currentWeekOffset * 7));
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date.getDate());
    }
    return dates;
  };

  const getDateRange = () => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - today.getDay() + 1 + (currentWeekOffset * 7));
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${startDate.getDate()} ${months[startDate.getMonth()]} - ${endDate.getDate()} ${months[endDate.getMonth()]}`;
  };

  const previousWeek   = () => setCurrentWeekOffset(currentWeekOffset - 1);
  const nextWeek       = () => setCurrentWeekOffset(currentWeekOffset + 1);
  const switchView     = (view) => setCurrentView(view);
  const backToPreferences = () => navigate('/meal-feature');
  const savePlan       = () => {
    localStorage.setItem('savedMealPlan', JSON.stringify(mealPlan));
    alert('Meal plan saved successfully!');
  };

  const dates = getWeekDates();

  const getTargetAudienceText = () => {
    if (preferences.targetAudience === 'general') return 'General';
    if (preferences.targetAudience === 'kids')    return `Kids (${preferences.ageGroup})`;
    if (preferences.targetAudience === 'patient') return `Patient (${preferences.patientCondition})`;
    return '';
  };

  const getBudgetText = () => {
    if (preferences.budget === 'economy')  return 'Economy';
    if (preferences.budget === 'standard') return 'Standard';
    if (preferences.budget === 'premium')  return 'Premium';
    if (preferences.budget === 'deluxe')   return 'Deluxe';
    return preferences.budget || '';
  };

  // ── RENDER — Aapki original JSX bilkul same ──
  return (
    <div className="meal-planner-app">
      <div className="meal-planner-wrapper">

        {/* Full Screen Image Banner */}
        <div className="mp-fullscreen-image">
          <div className="mp-fullscreen-content">
            <h1>Your Meal Calendar</h1>
            <p>View and manage your personalized meal plan</p>
          </div>
        </div>

        <div className="mp-calendar-container">
          {/* Back Button and Plan Info */}
          <div className="mp-calendar-top-section">
            <button className="mp-btn-back" onClick={backToPreferences}>
              ← Back to Preferences
            </button>
            <div className="mp-plan-info-banner">
              <div className="mp-plan-info-item">
                <span className="mp-info-label">Diet:</span>
                <span className="mp-info-value">
                  {preferences.dietType === 'veg' ? 'Vegetarian' : preferences.dietType === 'non-veg' ? 'Non-Veg' : 'Mixed'}
                </span>
              </div>
              <div className="mp-plan-info-item">
                <span className="mp-info-label">For:</span>
                <span className="mp-info-value">{getTargetAudienceText()}</span>
              </div>
              <div className="mp-plan-info-item">
                <span className="mp-info-label">Duration:</span>
                <span className="mp-info-value">{preferences.duration === 'daily' ? 'Daily' : 'Weekly'}</span>
              </div>
              <div className="mp-plan-info-item">
                <span className="mp-info-label">Budget:</span>
                <span className="mp-info-value">{getBudgetText()}</span>
              </div>
              {preferences.allergies?.length > 0 && (
                <div className="mp-plan-info-item">
                  <span className="mp-info-label">Allergies:</span>
                  <span className="mp-info-value" style={{color:'#ff6b6b'}}>{preferences.allergies.join(', ')}</span>
                </div>
              )}
            </div>
          </div>

          {/* View Toggle */}
          <div className="mp-view-toggle">
            <button className={`mp-view-btn ${currentView === 'daily'  ? 'mp-active' : ''}`} onClick={() => switchView('daily')}>Daily View</button>
            <button className={`mp-view-btn ${currentView === 'weekly' ? 'mp-active' : ''}`} onClick={() => switchView('weekly')}>Weekly View</button>
          </div>

          {/* Date Navigation */}
          <div className="mp-date-navigation">
            <button className="mp-nav-arrow" onClick={previousWeek}>‹</button>
            <div className="mp-date-range">{getDateRange()}</div>
            <button className="mp-nav-arrow" onClick={nextWeek}>›</button>
          </div>

          {/* ── DAILY VIEW ── */}
          {currentView === 'daily' && (
            <div className="mp-daily-view">
              <div className="mp-day-selector">
                {days.map((day, index) => (
                  <div key={index} className={`mp-day-tab ${index === selectedDay ? 'mp-active' : ''}`} onClick={() => setSelectedDay(index)}>
                    <div className="mp-day-name-short">{dayShortNames[index]}</div>
                    <div className="mp-day-date-num">{dates[index]}</div>
                  </div>
                ))}
              </div>

              <div className="mp-daily-meals-container">
                {['breakfast','lunch','dinner'].map((mealType) => {
                  const meal = mealPlan[selectedDay]?.[mealType];
                  if (!meal) return null;
                  return (
                    <div key={mealType} className="mp-daily-meal-section">
                      <h2 className="mp-meal-type-heading">
                        {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                      </h2>
                      <div className="mp-meal-display-card">
                        <div className="mp-meal-image-section" style={{width:'100%',height:'220px',overflow:'hidden',borderRadius:'12px 12px 0 0'}}>
                          <img src={meal.image} alt={meal.name}
                            style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}
                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'; }} />
                        </div>
                        <div className="mp-meal-details-section" style={{padding:'12px 16px'}}>
                          <h3 className="mp-meal-title">{meal.name}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── WEEKLY VIEW ── */}
          {currentView === 'weekly' && (
            <div className="mp-weekly-view">
              <div className="mp-weekly-grid-header">
                <div className="mp-grid-cell mp-header-cell mp-empty-cell"></div>
                <div className="mp-grid-cell mp-header-cell">Breakfast</div>
                <div className="mp-grid-cell mp-header-cell">Lunch</div>
                <div className="mp-grid-cell mp-header-cell">Dinner</div>
              </div>
              {days.map((day, dayIndex) => (
                <div key={dayIndex} className="mp-weekly-grid-row">
                  <div className="mp-grid-cell mp-day-cell">
                    <div className="mp-day-label">
                      <span className="mp-day-short">{dayShortNames[dayIndex]}</span>
                      <span className="mp-day-num">{dates[dayIndex]}</span>
                    </div>
                  </div>
                  {['breakfast','lunch','dinner'].map((mealType) => {
                    const meal = mealPlan[dayIndex]?.[mealType];
                    return (
                      <div key={mealType} className="mp-grid-cell mp-meal-cell">
                        {meal ? (
                          <div className="mp-weekly-meal-box">
                          <div className="mp-weekly-meal-img-wrapper" style={{width:'100%',height:'110px',overflow:'hidden',borderRadius:'8px 8px 0 0',position:'relative'}}>
                              <img src={meal.image} alt={meal.name}
                              style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}
                              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'; }} />
                             
                            </div>
                            <div className="mp-weekly-meal-text">
                              <div className="mp-weekly-meal-name">{meal.name}</div>
                            </div>
                          </div>
                        ) : (
                          <div className="mp-empty-meal-box">
                            <span className="mp-empty-icon">+</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="mp-plan-actions">
            <button className="mp-action-button mp-save-btn" onClick={savePlan}>Save Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCalender;