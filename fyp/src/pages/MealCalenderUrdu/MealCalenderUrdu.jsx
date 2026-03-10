import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MealCalenderUrdu.css';

// ============================================================
// ترکیبوں کا ڈیٹابیس
// ============================================================
const RECIPE_DATABASE = {
  veg: {
    general: {
      breakfast: [
        { name: 'آلو پراٹھا',     time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['آٹا', 'آلو', 'پیاز', 'ہرا دھنیا', 'نمک'] },
        { name: 'حلوہ پوری',      time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['میدہ', 'سوجی', 'چینی', 'گھی', 'الائچی'] },
        { name: 'دہی بھلہ',       time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['دہی', 'اڑد دال', 'املی', 'پودینہ', 'زیرہ'] },
        { name: 'چنا چاٹ',        time: '15 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['چنا', 'پیاز', 'ٹماٹر', 'ہرا دھنیا', 'لیموں'] },
        { name: 'بیسن کا چیلہ',   time: '15 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['بیسن', 'پیاز', 'ٹماٹر', 'ہرا دھنیا', 'نمک'] },
        { name: 'پوہا',            time: '15 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['چوڑا', 'پیاز', 'مٹر', 'لیموں', 'ہلدی'] },
        { name: 'مسالہ آملیٹ',    time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['انڈے', 'پیاز', 'ٹماٹر', 'ہری مرچ', 'نمک'] },
      ],
      lunch: [
        { name: 'دال چاول',       time: '35 منٹ', servings: '3', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['مسور دال', 'چاول', 'پیاز', 'ٹماٹر', 'لہسن'] },
        { name: 'پالک پنیر',      time: '30 منٹ', servings: '3', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['پالک', 'پنیر', 'پیاز', 'ٹماٹر', 'کریم'] },
        { name: 'چنا مسالہ',      time: '40 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['سفید چنا', 'پیاز', 'ٹماٹر', 'ادرک لہسن', 'گرم مسالہ'] },
        { name: 'راجما چاول',     time: '45 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['راجما', 'چاول', 'پیاز', 'ٹماٹر', 'مسالے'] },
        { name: 'آلو گوبھی',      time: '25 منٹ', servings: '3', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['آلو', 'گوبھی', 'پیاز', 'ہلدی', 'زیرہ'] },
        { name: 'سرسوں کا ساگ',   time: '60 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['سرسوں', 'مکئی آٹا', 'لہسن', 'ادرک', 'گھی'] },
        { name: 'سبز بریانی',     time: '50 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['باسمتی چاول', 'مکس سبزیاں', 'دہی', 'زعفران', 'گرم مسالہ'] },
      ],
      dinner: [
        { name: 'دال مکھنی',          time: '50 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['کالی دال', 'مکھن', 'کریم', 'ٹماٹر', 'مسالے'] },
        { name: 'پنیر بٹر مسالہ',     time: '35 منٹ', servings: '3', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['پنیر', 'مکھن', 'ٹماٹر', 'کاجو', 'کریم'] },
        { name: 'آلو مٹر',            time: '25 منٹ', servings: '3', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['آلو', 'مٹر', 'پیاز', 'ٹماٹر', 'زیرہ'] },
        { name: 'کھچڑی',             time: '25 منٹ', servings: '3', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['چاول', 'مونگ دال', 'گھی', 'زیرہ', 'ہلدی'] },
        { name: 'بینگن بھرتہ',        time: '35 منٹ', servings: '3', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['بینگن', 'پیاز', 'ٹماٹر', 'ہرا دھنیا', 'مسالے'] },
        { name: 'مکس سبز سالن',       time: '30 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['مکس سبزیاں', 'پیاز', 'ٹماٹر', 'دہی', 'گرم مسالہ'] },
        { name: 'شاہی پنیر',          time: '40 منٹ', servings: '3', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['پنیر', 'کاجو', 'دہی', 'کریم', 'کیسر'] },
      ],
    },
    kids: {
      breakfast: [
        { name: 'چاکلیٹ پراٹھا',  time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['آٹا', 'چاکلیٹ', 'مکھن', 'چینی'] },
        { name: 'پھل چاٹ',         time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['سیب', 'کیلا', 'انگور', 'چاٹ مسالہ', 'لیموں'] },
        { name: 'دودھ سوجی',       time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['سوجی', 'دودھ', 'چینی', 'الائچی', 'کاجو'] },
        { name: 'چیز پراٹھا',      time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['آٹا', 'پنیر', 'مکھن', 'نمک'] },
        { name: 'کیلے کی لسی',     time: '5 منٹ',  servings: '1', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['کیلا', 'دودھ', 'چینی', 'ونیلا'] },
        { name: 'آلو ٹوسٹ',        time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['ڈبل روٹی', 'آلو', 'مکھن', 'نمک', 'زیرہ'] },
        { name: 'انڈا پراٹھا',     time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['آٹا', 'انڈا', 'مکھن', 'نمک', 'کالی مرچ'] },
      ],
      lunch: [
        { name: 'میکرونی',          time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400', ingredients: ['میکرونی', 'ٹماٹر ساس', 'پنیر', 'دودھ', 'مسالے'] },
        { name: 'آلو سبزی روٹی',   time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['آلو', 'آٹا', 'پیاز', 'مسالے', 'گھی'] },
        { name: 'ہلکی دال چاول',   time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['مسور دال', 'چاول', 'گھی', 'نمک', 'ہلدی'] },
        { name: 'سبز سینڈوچ',      time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['ڈبل روٹی', 'پنیر', 'کھیرا', 'ٹماٹر', 'مایونیز'] },
        { name: 'چیز پاستہ',        time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400', ingredients: ['پاستہ', 'پنیر', 'کریم', 'مکھن', 'جڑی بوٹیاں'] },
        { name: 'سبز پلاؤ',         time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['چاول', 'مکس سبزیاں', 'گھی', 'پیاز', 'زیرہ'] },
        { name: 'پنیر پراٹھا',      time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['آٹا', 'پنیر', 'پیاز', 'ہرا دھنیا', 'مسالے'] },
      ],
      dinner: [
        { name: 'سبز نوڈلز',       time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400', ingredients: ['نوڈلز', 'سبزیاں', 'سوی ساس', 'کالی مرچ', 'تیل'] },
        { name: 'پیزا پراٹھا',      time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['آٹا', 'ٹماٹر ساس', 'موزریلا', 'سبزیاں', 'اوریگانو'] },
        { name: 'کھچڑی',            time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['چاول', 'مونگ دال', 'گھی', 'نمک', 'ہلدی'] },
        { name: 'دال روٹی',         time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['مسور دال', 'آٹا', 'گھی', 'ہلدی', 'نمک'] },
        { name: 'آلو مٹر',          time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['آلو', 'مٹر', 'پیاز', 'ٹماٹر', 'ہلکے مسالے'] },
        { name: 'انڈا سالن',        time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['انڈے', 'ٹماٹر', 'پیاز', 'ہلکی مرچ', 'مسالے'] },
        { name: 'سبز سوپ + روٹی',  time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['مکس سبزیاں', 'ادرک', 'کالی مرچ', 'آٹا', 'مکھن'] },
      ],
    },
    patient: {
      diabetes: {
        breakfast: [
          { name: 'اوٹس دلیہ',      time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['اوٹس', 'کم چکنائی دودھ', 'اخروٹ', 'دار چینی'] },
          { name: 'میتھی پراٹھا',   time: '20 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['گندم آٹا', 'میتھی', 'نمک', 'زیرہ'] },
          { name: 'انکرت چاٹ',      time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['انکرت', 'لیموں', 'پیاز', 'ہرا دھنیا', 'بغیر چینی'] },
          { name: 'مونگ دال چیلہ',  time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['مونگ دال', 'پیاز', 'ادرک', 'ہرا دھنیا', 'بغیر تیل'] },
          { name: 'پھل کٹورا',       time: '5 منٹ',  servings: '1', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['سیب', 'امرود', 'ناشپاتی', 'بغیر کیلا'] },
          { name: 'براؤن روٹی سبزی', time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['براؤن روٹی', 'ٹماٹر', 'کھیرا', 'پیاز', 'بغیر مکھن'] },
          { name: 'دلیہ',            time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['دلیہ', 'کم چکنائی دودھ', 'بغیر چینی', 'الائچی'] },
        ],
        lunch: [
          { name: 'کریلہ سبزی',     time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['کریلہ', 'پیاز', 'ٹماٹر', 'مسالے', 'کم تیل'] },
          { name: 'کم تیل دال',     time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['مسور دال', 'پیاز', 'ٹماٹر', 'ہلدی', '1 چمچ تیل'] },
          { name: 'ٹنڈہ سبزی',      time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['ٹنڈہ', 'پیاز', 'ٹماٹر', 'ہلدی', 'بغیر تیز مرچ'] },
          { name: 'میتھی دال',       time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['میتھی', 'چنا دال', 'پیاز', 'ادرک', 'کم تیل'] },
          { name: 'گوبھی سبزی',      time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['گوبھی', 'پیاز', 'ادرک', 'ہلدی', '1 چمچ تیل'] },
          { name: 'براؤن چاول دال',  time: '40 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['براؤن چاول', 'مونگ دال', 'ہلدی', 'زیرہ', 'تھوڑا گھی'] },
          { name: 'پالک سوپ',        time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['پالک', 'لہسن', 'کالی مرچ', 'بغیر کریم'] },
        ],
        dinner: [
          { name: 'توری کی سبزی',   time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['توری', 'پیاز', 'ٹماٹر', 'ہلدی', 'زیرہ'] },
          { name: 'پالک دال',        time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['پالک', 'مونگ دال', 'لہسن', 'ہلدی', '1 چمچ تیل'] },
          { name: 'لوکی سبزی',       time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['لوکی', 'پیاز', 'ٹماٹر', 'ہلدی', 'کم نمک'] },
          { name: 'بھنڈی سبزی',      time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['بھنڈی', 'پیاز', 'ٹماٹر', 'زیرہ', '1 چمچ تیل'] },
          { name: 'بیسن چیلہ',       time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['بیسن', 'پیاز', 'ادرک', 'ہرا دھنیا', '1 چمچ تیل'] },
          { name: 'انکرت سالن',      time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['انکرت', 'ٹماٹر', 'ادرک', 'ہلدی', 'بغیر تیل'] },
          { name: 'کھیرا رائتہ',     time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['دہی', 'کھیرا', 'زیرہ', 'بغیر چینی', 'ہرا دھنیا'] },
        ],
      },
      heart: {
        breakfast: [
          { name: 'اوٹس دلیہ',      time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['اوٹس', 'پانی', 'سیب', 'شہد', 'اخروٹ'] },
          { name: 'براؤن روٹی',      time: '5 منٹ',  servings: '1', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['براؤن روٹی', 'ایوکاڈو', 'لیموں', 'کالی مرچ'] },
          { name: 'پھل اسموتھی',    time: '5 منٹ',  servings: '1', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['مکس پھل', 'کم چکنائی دودھ', 'شہد', 'بغیر چینی'] },
          { name: 'انکرت سلاد',     time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['انکرت', 'کھیرا', 'ٹماٹر', 'لیموں', 'بغیر نمک'] },
          { name: 'کیلا اوٹس',       time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['اوٹس', 'کیلا', 'کم چکنائی دودھ', 'شہد'] },
          { name: 'مونگ دال چیلہ',  time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['مونگ دال', 'پیاز', 'ادرک', 'ہرا دھنیا', 'بغیر تیل'] },
          { name: 'دلیہ',            time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['دلیہ', 'دودھ', 'شہد', 'الائچی', 'بغیر گھی'] },
        ],
        lunch: [
          { name: 'مسور دال',        time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['مسور دال', 'پیاز', 'ٹماٹر', 'ہلدی', 'زیتون تیل'] },
          { name: 'سبز شوربہ',       time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['مکس سبزیاں', 'لہسن', 'ادرک', 'کالی مرچ'] },
          { name: 'لوکی سوپ',        time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['لوکی', 'ادرک', 'کالی مرچ', 'بغیر تیل'] },
          { name: 'گوبھی دال',       time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['گوبھی', 'مونگ دال', 'ہلدی', 'زیرہ', '1 چمچ زیتون تیل'] },
          { name: 'براؤن چاول',      time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['براؤن چاول', 'کالی مرچ', 'کم نمک', 'پانی'] },
          { name: 'پالک سوپ',        time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['پالک', 'لہسن', 'ادرک', 'بغیر کریم', 'بغیر مکھن'] },
          { name: 'سبز سلاد',        time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['کھیرا', 'ٹماٹر', 'پیاز', 'لیموں', 'بغیر نمک'] },
        ],
        dinner: [
          { name: 'ابلی سبزیاں',     time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['گوبھی', 'گاجر', 'مٹر', 'زیرہ', 'کم نمک'] },
          { name: 'پالک دال',        time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['پالک', 'مونگ دال', 'لہسن', 'ہلدی', '1 چمچ تیل'] },
          { name: 'لوکی سبزی',       time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['لوکی', 'زیرہ', 'ہلدی', 'بغیر تیل', 'کالی مرچ'] },
          { name: 'براؤن چاول کھچڑی',time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['براؤن چاول', 'مونگ دال', 'ہلدی', 'زیرہ', 'بغیر گھی'] },
          { name: 'میتھی سبزی',      time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['میتھی', 'پیاز', 'ٹماٹر', 'زیرہ', 'کم تیل'] },
          { name: 'دال شوربہ',       time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['مسور دال', 'ادرک', 'کالی مرچ', 'لہسن', 'بغیر مکھن'] },
          { name: 'توری سبزی',       time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['توری', 'پیاز', 'زیرہ', '1 چمچ تیل', 'بغیر نمک'] },
        ],
      },
      bp: {
        breakfast: [
          { name: 'کیلے کی اسموتھی', time: '5 منٹ',  servings: '1', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['کیلا', 'دودھ', 'اخروٹ', 'شہد'] },
          { name: 'دلیہ',             time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['دلیہ', 'دودھ', 'میوہ', 'الائچی'] },
          { name: 'اوٹس + پھل',      time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['اوٹس', 'سیب', 'اخروٹ', 'بغیر نمک'] },
          { name: 'پھل کٹورا',        time: '5 منٹ',  servings: '1', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['کیلا', 'سیب', 'انگور', 'شہد', 'بغیر نمک'] },
          { name: 'براؤن ٹوسٹ',      time: '5 منٹ',  servings: '1', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['براؤن روٹی', 'ایوکاڈو', 'لیموں', 'بغیر نمک'] },
          { name: 'مونگ چیلہ',       time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['مونگ دال', 'ادرک', 'ہرا دھنیا', 'بغیر نمک', 'بغیر تیل'] },
          { name: 'دودھ اوٹس',       time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['اوٹس', 'کم چکنائی دودھ', 'کیلا', 'شہد'] },
        ],
        lunch: [
          { name: 'مونگ دال پالک',   time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['مونگ دال', 'پالک', 'لہسن', 'کم تیل'] },
          { name: 'میتھی سبزی',      time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['میتھی', 'پیاز', 'ٹماٹر', 'زیرہ'] },
          { name: 'گوبھی سبزی',      time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['گوبھی', 'ادرک', 'ہلدی', 'بغیر نمک', 'زیرہ'] },
          { name: 'بغیر نمک دال',    time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['مونگ دال', 'ہلدی', 'زیرہ', 'بغیر نمک', 'ادرک'] },
          { name: 'لوکی سالن',       time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['لوکی', 'پیاز', 'ہلدی', 'بغیر نمک', 'بغیر مرچ'] },
          { name: 'براؤن چاول',      time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400', ingredients: ['براؤن چاول', 'کالی مرچ', 'بغیر نمک', 'پانی'] },
          { name: 'پالک سوپ',        time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['پالک', 'لہسن', 'کالی مرچ', 'بغیر نمک'] },
        ],
        dinner: [
          { name: 'ہلکی کھچڑی',     time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['چاول', 'مونگ دال', 'ہلدی', 'تھوڑا گھی', 'بغیر نمک'] },
          { name: 'توری سبزی',       time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['توری', 'پیاز', 'زیرہ', '1 چمچ تیل', 'بغیر نمک'] },
          { name: 'پالک دال',        time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['پالک', 'مونگ دال', 'ادرک', 'بغیر نمک', 'بغیر تیز مرچ'] },
          { name: 'سبز سوپ',         time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['مکس سبزیاں', 'ادرک', 'کالی مرچ', 'بغیر نمک'] },
          { name: 'بھنڈی سبزی',      time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['بھنڈی', 'پیاز', 'ہلدی', 'بغیر نمک', '1 چمچ تیل'] },
          { name: 'میتھی سبزی',      time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['میتھی', 'پیاز', 'ٹماٹر', 'زیرہ', 'کم تیل'] },
          { name: 'دال سوپ',         time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['مسور دال', 'ادرک', 'ہلدی', 'بغیر نمک', 'بغیر تیل'] },
        ],
      },
    },
  },

  'non-veg': {
    general: {
      breakfast: [
        { name: 'انڈا پراٹھا',    time: '15 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['آٹا', 'انڈا', 'پیاز', 'ہری مرچ', 'نمک'] },
        { name: 'قیمہ پراٹھا',    time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['آٹا', 'قیمہ', 'پیاز', 'ہرا دھنیا', 'مسالے'] },
        { name: 'انڈا بھرجی',     time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['انڈے', 'پیاز', 'ٹماٹر', 'ہری مرچ', 'مسالے'] },
        { name: 'حلیم',            time: '180 منٹ',servings: '6', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['گوشت', 'دالیں', 'گیہوں', 'مسالے', 'تلی پیاز'] },
        { name: 'نہاری نان',       time: '120 منٹ',servings: '4', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['بیف', 'نان', 'ادرک', 'نہاری مسالہ', 'گھی'] },
        { name: 'چکن سینڈوچ',     time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['روٹی', 'چکن', 'مایونیز', 'سلاد', 'ٹماٹر'] },
        { name: 'ابلا انڈا چاٹ',  time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['انڈے', 'چاٹ مسالہ', 'لیموں', 'پیاز', 'ہرا دھنیا'] },
      ],
      lunch: [
        { name: 'چکن کڑاہی',       time: '40 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['چکن', 'ٹماٹر', 'ادرک لہسن', 'ہرا دھنیا', 'مسالے'] },
        { name: 'مٹن بریانی',      time: '90 منٹ', servings: '6', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['باسمتی چاول', 'مٹن', 'دہی', 'زعفران', 'گرم مسالہ'] },
        { name: 'دال گوشت',        time: '60 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['گوشت', 'چنا دال', 'پیاز', 'ٹماٹر', 'مسالے'] },
        { name: 'آلو گوشت',        time: '60 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['گوشت', 'آلو', 'پیاز', 'ٹماٹر', 'مسالے'] },
        { name: 'چکن پلاؤ',        time: '50 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1596040033229-a0b7e2d82ae8?w=400', ingredients: ['چکن', 'چاول', 'پیاز', 'سبت مسالے', 'دہی'] },
        { name: 'مرغ مکھنی',       time: '45 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['چکن', 'مکھن', 'ٹماٹر', 'کریم', 'مسالے'] },
        { name: 'بیف کوفتہ سالن',  time: '50 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['قیمہ', 'پیاز', 'ٹماٹر', 'انڈا', 'گرم مسالہ'] },
      ],
      dinner: [
        { name: 'مٹن کڑاہی',      time: '60 منٹ',  servings: '4', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['مٹن', 'ٹماٹر', 'ادرک', 'کالی مرچ', 'ہرا دھنیا'] },
        { name: 'چکن ہانڈی',      time: '45 منٹ',  servings: '4', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['چکن', 'دہی', 'کریم', 'پیاز', 'مسالے'] },
        { name: 'بیف نہاری',       time: '180 منٹ', servings: '6', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['بیف', 'ادرک', 'نہاری مسالہ', 'املی', 'گھی'] },
        { name: 'چکن قورمہ',      time: '50 منٹ',  servings: '4', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['چکن', 'دہی', 'کاجو', 'الائچی', 'زردہ'] },
        { name: 'مچھلی سالن',     time: '35 منٹ',  servings: '3', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['مچھلی', 'ٹماٹر', 'پیاز', 'ہلدی', 'زیرہ'] },
        { name: 'سیخ کباب',       time: '30 منٹ',  servings: '3', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400', ingredients: ['قیمہ', 'پیاز', 'ہرا دھنیا', 'گرم مسالہ', 'ادرک لہسن'] },
        { name: 'پائے',            time: '240 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['پائے', 'پیاز', 'ادرک لہسن', 'گرم مسالہ', 'گھی'] },
      ],
    },
    kids: {
      breakfast: [
        { name: 'ہلکا انڈا پراٹھا', time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['آٹا', 'انڈا', 'مکھن', 'تھوڑا نمک'] },
        { name: 'چکن سینڈوچ',      time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['روٹی', 'ابلا چکن', 'مایونیز', 'ٹماٹر', 'سلاد'] },
        { name: 'ابلا انڈا',         time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['انڈے', 'نمک', 'تھوڑی کالی مرچ', 'براؤن روٹی'] },
        { name: 'ہلکی انڈا بھرجی', time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['انڈے', 'پیاز', 'ٹماٹر', 'مکھن', 'بغیر مرچ'] },
        { name: 'چکن ٹوسٹ',         time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['روٹی', 'چکن', 'پنیر', 'مایونیز', 'ہلکا'] },
        { name: 'کیلے کی لسی',      time: '5 منٹ',  servings: '1', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['کیلا', 'دودھ', 'چینی', 'ونیلا'] },
        { name: 'ہلکا انڈا رول',    time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['انڈا', 'پراٹھا', 'کیچپ', 'ہلکے مسالے'] },
      ],
      lunch: [
        { name: 'چکن پلاؤ',         time: '45 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1596040033229-a0b7e2d82ae8?w=400', ingredients: ['چکن', 'چاول', 'پیاز', 'سبت مسالے'] },
        { name: 'ہلکا چکن سالن',    time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['چکن', 'ٹماٹر', 'دہی', 'کریم', 'بغیر تیز مرچ'] },
        { name: 'چکن نوڈلز',        time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['نوڈلز', 'چکن', 'سبزیاں', 'سوی ساس'] },
        { name: 'قیمہ روٹی',         time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['قیمہ', 'آٹا', 'پیاز', 'ہرا دھنیا', 'ہلکے مسالے'] },
        { name: 'انڈا فرائیڈ رائس', time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['چاول', 'انڈا', 'سبزیاں', 'سوی ساس', 'ہلکا'] },
        { name: 'چکن پاستہ',         time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400', ingredients: ['پاستہ', 'چکن', 'ٹماٹر ساس', 'پنیر', 'اوریگانو'] },
        { name: 'چکن سینڈوچ',        time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['روٹی', 'چکن', 'پنیر', 'سلاد', 'مایونیز'] },
      ],
      dinner: [
        { name: 'چکن نگٹس',           time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400', ingredients: ['چکن', 'بریڈ کرمبز', 'انڈا', 'نمک'] },
        { name: 'ہلکا قیمہ پراٹھا',  time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['آٹا', 'قیمہ', 'پیاز', 'ہرا دھنیا', 'ہلکے مسالے'] },
        { name: 'ہلکا چکن قورمہ',    time: '40 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['چکن', 'دہی', 'کاجو', 'کریم', 'بغیر تیز مرچ'] },
        { name: 'پیزا پراٹھا',         time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['آٹا', 'ٹماٹر ساس', 'موزریلا', 'چکن', 'اوریگانو'] },
        { name: 'چکن سوپ',             time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['چکن', 'سبزیاں', 'ادرک', 'ہلکا', 'کالی مرچ'] },
        { name: 'ہلکا انڈا سالن',     time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['انڈے', 'ٹماٹر', 'پیاز', 'بغیر تیز مرچ', 'ہلکے مسالے'] },
        { name: 'چکن چاول',            time: '40 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['چکن', 'چاول', 'پیاز', 'تھوڑا گرم مسالہ'] },
      ],
    },
    patient: {
      diabetes: {
        breakfast: [
          { name: 'ابلا انڈا (2)',        time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['انڈے', 'بغیر نمک', 'کالی مرچ', 'براؤن روٹی'] },
          { name: 'گرل چکن سینڈوچ',      time: '20 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['براؤن روٹی', 'گرل چکن', 'سلاد', 'سرسوں'] },
          { name: 'انڈے کی سفیدی آملیٹ', time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['انڈے کی سفیدی', 'سبزیاں', 'بغیر تیل', 'بغیر نمک'] },
          { name: 'ابلا چکن ٹوسٹ',       time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['ابلا چکن', 'براؤن روٹی', 'سلاد', 'بغیر مکھن'] },
          { name: 'بغیر تیل انڈا بھرجی', time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['انڈے', 'پیاز', 'ٹماٹر', 'بغیر تیل', 'جڑی بوٹیاں'] },
          { name: 'چکن انکرت سلاد',       time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['ابلا چکن', 'انکرت', 'کھیرا', 'لیموں', 'بغیر ڈریسنگ'] },
          { name: 'ٹونا سلاد',             time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['ٹونا', 'کھیرا', 'پیاز', 'لیموں', 'بغیر مایو'] },
        ],
        lunch: [
          { name: 'گرل مچھلی',         time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['مچھلی', 'لیموں', 'جڑی بوٹیاں', 'بغیر تیل', 'کم نمک'] },
          { name: 'چکن شوربہ',         time: '40 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['چکن', 'سبزیاں', 'ادرک', 'کالی مرچ'] },
          { name: 'ابلا چکن + سلاد',   time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['چکن', 'کھیرا', 'ٹماٹر', 'لیموں', 'بغیر ڈریسنگ'] },
          { name: 'ٹونا + براؤن چاول', time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['ٹونا', 'براؤن چاول', 'کھیرا', 'لیموں'] },
          { name: 'مچھلی سوپ',         time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['مچھلی', 'سبزیاں', 'ادرک', 'بغیر تیل', 'کالی مرچ'] },
          { name: 'گرل چکن سلاد',      time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400', ingredients: ['گرل چکن', 'سلاد', 'ٹماٹر', 'کھیرا', 'لیموں'] },
          { name: 'انڈا + سبزی',        time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['انڈے', 'پالک', 'ٹماٹر', 'بغیر تیل', 'کالی مرچ'] },
        ],
        dinner: [
          { name: 'بیکڈ چکن',               time: '45 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400', ingredients: ['چکن', 'جڑی بوٹیاں', 'لیموں', 'کالی مرچ', 'کم زیتون تیل'] },
          { name: 'چکن دال',                time: '50 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['چکن', 'مسور دال', 'پیاز', 'ہلدی', '1 چمچ تیل'] },
          { name: 'ابلی مچھلی',             time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['مچھلی', 'لیموں', 'ادرک', 'بغیر تیل'] },
          { name: 'گرل چکن + سبزی',         time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['چکن', 'گوبھی', 'گاجر', 'جڑی بوٹیاں', 'بغیر مکھن'] },
          { name: 'مچھلی + براؤن چاول',     time: '40 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['مچھلی', 'براؤن چاول', 'ہلدی', 'لیموں'] },
          { name: 'چکن سوپ',                time: '40 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['چکن', 'سبزیاں', 'ادرک', 'بغیر تیل'] },
          { name: 'انڈا + پالک',            time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['انڈے', 'پالک', 'لہسن', 'بغیر مکھن'] },
        ],
      },
      heart: {
        breakfast: [
          { name: 'انڈے کی سفیدی آملیٹ', time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['انڈے کی سفیدی', 'سبزیاں', 'بغیر تیل', 'جڑی بوٹیاں'] },
          { name: 'ابلا انڈا ٹوسٹ',       time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['انڈا', 'براؤن روٹی', 'بغیر مکھن', 'کالی مرچ'] },
          { name: 'اوٹس + انڈے کی سفیدی', time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['اوٹس', 'انڈے کی سفیدی', 'کیلا', 'بغیر چینی'] },
          { name: 'ٹونا سینڈوچ',           time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['ٹونا', 'براؤن روٹی', 'سلاد', 'لیموں', 'بغیر مایو'] },
          { name: 'پھل + انڈا کٹورا',      time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['انڈا', 'سیب', 'اخروٹ', 'بغیر چینی'] },
          { name: 'گرل چکن رول',           time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['چکن', 'سلاد', 'ٹماٹر', 'بغیر مایو', 'گندم روٹی'] },
          { name: 'کیلا اوٹس',              time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['اوٹس', 'کیلا', 'کم چکنائی دودھ', 'شہد'] },
        ],
        lunch: [
          { name: 'ابلی مچھلی',         time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['مچھلی', 'لیموں', 'ادرک', 'بغیر تیل'] },
          { name: 'چکن سوپ',            time: '40 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['چکن', 'سبزیاں', 'ادرک', 'کالی مرچ', 'کم تیل'] },
          { name: 'گرل مچھلی سلاد',     time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['مچھلی', 'سلاد', 'ٹماٹر', 'لیموں', 'بغیر ڈریسنگ'] },
          { name: 'ابلا چکن + سبزی',    time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['چکن', 'گوبھی', 'گاجر', 'ادرک', 'بغیر مکھن'] },
          { name: 'مچھلی + براؤن چاول', time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['مچھلی', 'براؤن چاول', 'جڑی بوٹیاں', 'لیموں'] },
          { name: 'ٹونا سلاد',           time: '10 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400', ingredients: ['ٹونا', 'کھیرا', 'ٹماٹر', 'لیموں', 'بغیر مایو'] },
          { name: 'انڈا + سبز سالن',     time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['انڈے', 'پالک', 'ٹماٹر', 'بغیر مکھن'] },
        ],
        dinner: [
          { name: 'گرل چکن',        time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['چکن', 'جڑی بوٹیاں', 'لیموں', '1 چمچ زیتون تیل'] },
          { name: 'مچھلی شوربہ',   time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['مچھلی', 'سبزیاں', 'ادرک', 'کم نمک'] },
          { name: 'بیکڈ مچھلی',    time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['مچھلی', 'جڑی بوٹیاں', 'لیموں', 'بغیر تیل'] },
          { name: 'چکن + سبزی',    time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['چکن', 'گوبھی', 'گاجر', 'بغیر مکھن', 'جڑی بوٹیاں'] },
          { name: 'انڈا + پالک',   time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['انڈے', 'پالک', 'لہسن', 'بغیر مکھن'] },
          { name: 'ٹونا + سلاد',   time: '15 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['ٹونا', 'سلاد', 'کھیرا', 'لیموں', 'بغیر ڈریسنگ'] },
          { name: 'چکن دال سوپ',  time: '45 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['چکن', 'مسور دال', 'ادرک', 'بغیر مکھن'] },
        ],
      },
      bp: {
        breakfast: [
          { name: 'انڈے کی سفیدی بھرجی', time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['انڈے کی سفیدی', 'پیاز', 'ٹماٹر', 'بغیر نمک', 'جڑی بوٹیاں'] },
          { name: 'ابلا انڈا ٹوسٹ',       time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['انڈا', 'براؤن روٹی', 'بغیر نمک', 'کالی مرچ'] },
          { name: 'کیلا + انڈا',           time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['کیلا', 'انڈا', 'براؤن روٹی', 'بغیر نمک'] },
          { name: 'ٹونا براؤن ٹوسٹ',      time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['ٹونا', 'براؤن روٹی', 'سلاد', 'بغیر نمک', 'بغیر مایو'] },
          { name: 'انڈا سلاد',             time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['انڈا', 'کھیرا', 'ٹماٹر', 'لیموں', 'بغیر نمک'] },
          { name: 'چکن اوٹس',              time: '15 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['اوٹس', 'چکن شوربہ', 'ادرک', 'بغیر نمک'] },
          { name: 'پھل + انڈا کٹورا',      time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['انڈا', 'کیلا', 'سیب', 'شہد', 'بغیر نمک'] },
        ],
        lunch: [
          { name: 'ابلا چکن + سبزی',        time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['چکن', 'سبزیاں', 'ادرک', 'بغیر نمک'] },
          { name: 'گرل مچھلی',              time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['مچھلی', 'لیموں', 'جڑی بوٹیاں', 'بغیر نمک'] },
          { name: 'بغیر نمک چکن سوپ',      time: '40 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['چکن', 'سبزیاں', 'ادرک', 'بغیر نمک'] },
          { name: 'انڈا + براؤن چاول',      time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['انڈا', 'براؤن چاول', 'سبزیاں', 'بغیر نمک'] },
          { name: 'مچھلی سلاد',             time: '15 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['مچھلی', 'سلاد', 'کھیرا', 'لیموں', 'بغیر نمک'] },
          { name: 'ٹونا + سبزی',            time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400', ingredients: ['ٹونا', 'گوبھی', 'گاجر', 'بغیر نمک'] },
          { name: 'چکن براؤن چاول',         time: '40 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['چکن', 'براؤن چاول', 'جڑی بوٹیاں', 'بغیر نمک'] },
        ],
        dinner: [
          { name: 'ہلکی کھچڑی + چکن',  time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['چاول', 'مونگ دال', 'چکن', 'بغیر نمک', 'ہلدی'] },
          { name: 'مچھلی شوربہ',        time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', ingredients: ['مچھلی', 'سبزیاں', 'ادرک', 'کم نمک'] },
          { name: 'گرل چکن',            time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['چکن', 'جڑی بوٹیاں', 'لیموں', 'بغیر نمک', 'بغیر مکھن'] },
          { name: 'بیکڈ مچھلی',         time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', ingredients: ['مچھلی', 'لیموں', 'جڑی بوٹیاں', 'بغیر نمک'] },
          { name: 'انڈا + پالک (بغیر نمک)', time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['انڈے', 'پالک', 'لہسن', 'بغیر نمک'] },
          { name: 'چکن سبز سوپ',        time: '35 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['چکن', 'گوبھی', 'گاجر', 'ادرک', 'بغیر نمک'] },
          { name: 'ٹونا + سبز سلاد',    time: '15 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: ['ٹونا', 'کھیرا', 'ٹماٹر', 'لیموں', 'بغیر نمک'] },
        ],
      },
    },
  },

  mixed: {
    general: {
      breakfast: [
        { name: 'انڈا پراٹھا',  time: '15 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', ingredients: ['آٹا', 'انڈا', 'پیاز', 'ہری مرچ', 'نمک'] },
        { name: 'آلو پراٹھا',   time: '20 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['آٹا', 'آلو', 'پیاز', 'ہرا دھنیا', 'مسالے'] },
        { name: 'قیمہ پراٹھا',  time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1630409346730-1beb04c65b6b?w=400', ingredients: ['آٹا', 'قیمہ', 'پیاز', 'ہرا دھنیا', 'مسالے'] },
        { name: 'حلوہ پوری',    time: '30 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', ingredients: ['میدہ', 'سوجی', 'چینی', 'گھی', 'الائچی'] },
        { name: 'انڈا بھرجی',   time: '10 منٹ', servings: '1', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['انڈے', 'پیاز', 'ٹماٹر', 'ہری مرچ', 'مسالے'] },
        { name: 'دہی بھلہ',     time: '25 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['دہی', 'اڑد دال', 'املی', 'پودینہ', 'زیرہ'] },
        { name: 'چنا چاٹ',      time: '15 منٹ', servings: '2', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['چنا', 'پیاز', 'ٹماٹر', 'ہرا دھنیا', 'لیموں'] },
      ],
      lunch: [
        { name: 'چکن کڑاہی',   time: '40 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['چکن', 'ٹماٹر', 'ادرک لہسن', 'ہرا دھنیا', 'مسالے'] },
        { name: 'دال چاول',    time: '35 منٹ', servings: '3', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['مسور دال', 'چاول', 'پیاز', 'ٹماٹر', 'مسالے'] },
        { name: 'آلو گوشت',    time: '60 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', ingredients: ['گوشت', 'آلو', 'پیاز', 'ٹماٹر', 'مسالے'] },
        { name: 'چنا مسالہ',   time: '40 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['سفید چنا', 'پیاز', 'ٹماٹر', 'ادرک لہسن', 'مسالے'] },
        { name: 'مٹن بریانی',  time: '90 منٹ', servings: '6', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['باسمتی چاول', 'مٹن', 'دہی', 'زعفران', 'گرم مسالہ'] },
        { name: 'پالک پنیر',   time: '30 منٹ', servings: '3', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['پالک', 'پنیر', 'پیاز', 'ٹماٹر', 'کریم'] },
        { name: 'سبز بریانی',  time: '50 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', ingredients: ['باسمتی چاول', 'مکس سبزیاں', 'دہی', 'زعفران', 'گرم مسالہ'] },
      ],
      dinner: [
        { name: 'مٹن کڑاہی',        time: '60 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', ingredients: ['مٹن', 'ٹماٹر', 'ادرک', 'کالی مرچ', 'ہرا دھنیا'] },
        { name: 'دال مکھنی',         time: '50 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400', ingredients: ['کالی دال', 'مکھن', 'کریم', 'ٹماٹر', 'مسالے'] },
        { name: 'چکن ہانڈی',         time: '45 منٹ', servings: '4', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', ingredients: ['چکن', 'دہی', 'کریم', 'پیاز', 'مسالے'] },
        { name: 'پنیر بٹر مسالہ',    time: '35 منٹ', servings: '3', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', ingredients: ['پنیر', 'مکھن', 'ٹماٹر', 'کریم', 'مسالے'] },
        { name: 'سیخ کباب',          time: '30 منٹ', servings: '3', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400', ingredients: ['قیمہ', 'پیاز', 'ہرا دھنیا', 'گرم مسالہ', 'ادرک لہسن'] },
        { name: 'آلو مٹر',           time: '25 منٹ', servings: '3', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', ingredients: ['آلو', 'مٹر', 'پیاز', 'ٹماٹر', 'زیرہ'] },
        { name: 'کھچڑی',             time: '25 منٹ', servings: '3', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', ingredients: ['چاول', 'مونگ دال', 'گھی', 'زیرہ', 'ہلدی'] },
      ],
    },
    kids:    { breakfast: [], lunch: [], dinner: [] },
    patient: { diabetes: { breakfast:[], lunch:[], dinner:[] }, heart:{ breakfast:[], lunch:[], dinner:[] }, bp:{ breakfast:[], lunch:[], dinner:[] } },
  },
};

// ============================================================
// منطقی افعال
// ============================================================
const terkeebonKiFehrist = (prefs, khanaPaKism) => {
  const diet      = prefs.dietType        || 'veg';
  const audience  = prefs.targetAudience  || 'general';
  const condition = prefs.patientCondition|| 'diabetes';
  try {
    if (diet === 'mixed' && audience === 'kids')
      return RECIPE_DATABASE['non-veg'].kids[khanaPaKism] || [];
    if (diet === 'mixed' && audience === 'patient')
      return RECIPE_DATABASE['non-veg'].patient[condition]?.[khanaPaKism] || [];
    if (audience === 'patient')
      return RECIPE_DATABASE[diet]?.patient?.[condition]?.[khanaPaKism] || [];
    if (audience === 'kids')
      return RECIPE_DATABASE[diet]?.kids?.[khanaPaKism] || [];
    return RECIPE_DATABASE[diet]?.general?.[khanaPaKism] || [];
  } catch {
    return RECIPE_DATABASE.veg.general[khanaPaKism] || [];
  }
};

const allergyFilter = (tarkeeebein, allergies) => {
  if (!allergies || allergies.length === 0) return tarkeeebein;
  return tarkeeebein.filter(recipe =>
    !allergies.some(allergy =>
      recipe.ingredients.some(ing =>
        ing.toLowerCase().includes(allergy.toLowerCase())
      )
    )
  );
};

const khanePaKaPlanBanao = (prefs) => {
  const plan = {};
  ['breakfast', 'lunch', 'dinner'].forEach(khanaPaKism => {
    let tarkeeebein = terkeebonKiFehrist(prefs, khanaPaKism);
    tarkeeebein = allergyFilter(tarkeeebein, prefs.allergies);
    for (let din = 0; din < 7; din++) {
      if (!plan[din]) plan[din] = {};
      plan[din][khanaPaKism] = tarkeeebein.length > 0
        ? { ...tarkeeebein[din % tarkeeebein.length], available: true }
        : { name: 'ترکیب دستیاب نہیں', time: '-', servings: '-', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', ingredients: [], available: false };
    }
  });
  return plan;
};

// ============================================================
// کمپوننٹ
// ============================================================
const MealCalenderUrdu = () => {
  const navigate = useNavigate();
  const [maujoodaView, setMaujoodaView]             = useState('daily');
  const [chunaaHuaDin, setChunaaHuaDin]             = useState(0);
  const [hafteKaFaraq, setHafteKaFaraq]             = useState(0);
  const [pasandeedgiyan, setPasandeedgiyan]         = useState({});
  const [khanePaKaPlan, setKhanePaKaPlan]           = useState({
    0:{breakfast:{name:'',available:true,image:''},lunch:{name:'',available:true,image:''},dinner:{name:'',available:true,image:''}},
    1:{breakfast:{name:'',available:true,image:''},lunch:{name:'',available:true,image:''},dinner:{name:'',available:true,image:''}},
    2:{breakfast:{name:'',available:true,image:''},lunch:{name:'',available:true,image:''},dinner:{name:'',available:true,image:''}},
    3:{breakfast:{name:'',available:true,image:''},lunch:{name:'',available:true,image:''},dinner:{name:'',available:true,image:''}},
    4:{breakfast:{name:'',available:true,image:''},lunch:{name:'',available:true,image:''},dinner:{name:'',available:true,image:''}},
    5:{breakfast:{name:'',available:true,image:''},lunch:{name:'',available:true,image:''},dinner:{name:'',available:true,image:''}},
    6:{breakfast:{name:'',available:true,image:''},lunch:{name:'',available:true,image:''},dinner:{name:'',available:true,image:''}},
  });

  const din          = ['پیر','منگل','بدھ','جمعرات','جمعہ','ہفتہ','اتوار'];
  const dinMukhtisar = ['پیر','منگل','بدھ','جمعرات','جمعہ','ہفتہ','اتوار'];
  const khanaPaKism  = { breakfast: 'ناشتہ', lunch: 'دوپہر کا کھانا', dinner: 'رات کا کھانا' };

  useEffect(() => {
    const maahfooz = localStorage.getItem('mealPreferences');
    if (maahfooz) {
      const prefs = JSON.parse(maahfooz);
      setPasandeedgiyan(prefs);
      const plan = khanePaKaPlanBanao(prefs);
      setKhanePaKaPlan(plan);
    }
  }, []);

  const hafteKiTaareekhen = () => {
    const aaj = new Date();
    const shuru = new Date(aaj);
    shuru.setDate(aaj.getDate() - aaj.getDay() + 1 + (hafteKaFaraq * 7));
    const taareekhen = [];
    for (let i = 0; i < 7; i++) {
      const t = new Date(shuru);
      t.setDate(shuru.getDate() + i);
      taareekhen.push(t.getDate());
    }
    return taareekhen;
  };

  const tarееkhKaDaaera = () => {
    const aaj = new Date();
    const shuru = new Date(aaj);
    shuru.setDate(aaj.getDate() - aaj.getDay() + 1 + (hafteKaFaraq * 7));
    const akhir = new Date(shuru);
    akhir.setDate(shuru.getDate() + 6);
    const maheenay = ['جنوری','فروری','مارچ','اپریل','مئی','جون','جولائی','اگست','ستمبر','اکتوبر','نومبر','دسمبر'];
    return `${shuru.getDate()} ${maheenay[shuru.getMonth()]} - ${akhir.getDate()} ${maheenay[akhir.getMonth()]}`;
  };

  const pichlaaHafta  = () => setHafteKaFaraq(hafteKaFaraq - 1);
  const aglaHafta     = () => setHafteKaFaraq(hafteKaFaraq + 1);
  const viewBadlein   = (view) => setMaujoodaView(view);
  const wapasPasandeedgiyan = () => navigate('/meal-feature-urdu');

  const planMaahfoozKarein = () => {
    localStorage.setItem('savedMealPlan', JSON.stringify(khanePaKaPlan));
    alert('کھانے کا منصوبہ محفوظ ہو گیا!');
  };

  const taareekhen = hafteKiTaareekhen();

  const pasandeedgiyanKaMazmoon = () => {
    if (pasandeedgiyan.targetAudience === 'general') return 'عام';
    if (pasandeedgiyan.targetAudience === 'kids')    return `بچے (${pasandeedgiyan.ageGroup})`;
    if (pasandeedgiyan.targetAudience === 'patient') return `مریض (${pasandeedgiyan.patientCondition})`;
    return '';
  };

  const bajatKaMazmoon = () => {
    if (pasandeedgiyan.budget === 'economy')  return 'سستا';
    if (pasandeedgiyan.budget === 'standard') return 'ٹھیک ٹھاک';
    if (pasandeedgiyan.budget === 'premium')  return 'اچھا';
    if (pasandeedgiyan.budget === 'deluxe')   return 'بہترین';
    return pasandeedgiyan.budget || '';
  };

  return (
    <div className="ur-cal-app">
      <div className="ur-cal-wrapper">

        {/* بینر */}
        <div className="ur-cal-banner">
          <div className="ur-cal-banner-mazmoon">
            <h1>آپ کا کھانے کا کیلنڈر</h1>
            <p>اپنے ذاتی کھانے کے منصوبے کو دیکھیں اور منظم کریں</p>
          </div>
        </div>

        <div className="ur-cal-container">

          {/* اوپر کا حصہ */}
          <div className="ur-cal-top-section">
            <button className="ur-cal-btn-back" onClick={wapasPasandeedgiyan}>
              → پسندیدگیوں پر واپس
            </button>
            <div className="ur-cal-info-banner">
              <div className="ur-cal-info-item">
                <span className="ur-cal-info-label">خوراک:</span>
                <span className="ur-cal-info-value">
                  {pasandeedgiyan.dietType === 'veg' ? 'سبزی' : pasandeedgiyan.dietType === 'non-veg' ? 'گوشت' : 'ملا جلا'}
                </span>
              </div>
              <div className="ur-cal-info-item">
                <span className="ur-cal-info-label">کے لیے:</span>
                <span className="ur-cal-info-value">{pasandeedgiyanKaMazmoon()}</span>
              </div>
              <div className="ur-cal-info-item">
                <span className="ur-cal-info-label">مدت:</span>
                <span className="ur-cal-info-value">{pasandeedgiyan.duration === 'daily' ? 'روزانہ' : 'ہفتہ وار'}</span>
              </div>
              <div className="ur-cal-info-item">
                <span className="ur-cal-info-label">بجٹ:</span>
                <span className="ur-cal-info-value">{bajatKaMazmoon()}</span>
              </div>
              {pasandeedgiyan.allergies?.length > 0 && (
                <div className="ur-cal-info-item">
                  <span className="ur-cal-info-label">الرجی:</span>
                  <span className="ur-cal-info-value" style={{color:'#ff6b6b'}}>{pasandeedgiyan.allergies.join('، ')}</span>
                </div>
              )}
            </div>
          </div>

          {/* ویو ٹوگل */}
          <div className="ur-cal-view-toggle">
            <button className={`ur-cal-view-btn ${maujoodaView === 'daily'  ? 'ur-cal-active' : ''}`} onClick={() => viewBadlein('daily')}>روزانہ نظارہ</button>
            <button className={`ur-cal-view-btn ${maujoodaView === 'weekly' ? 'ur-cal-active' : ''}`} onClick={() => viewBadlein('weekly')}>ہفتہ وار نظارہ</button>
          </div>

          {/* تاریخ نیویگیشن */}
          <div className="ur-cal-date-nav">
            <button className="ur-cal-nav-arrow" onClick={pichlaaHafta}>‹</button>
            <div className="ur-cal-date-range">{tarееkhKaDaaera()}</div>
            <button className="ur-cal-nav-arrow" onClick={aglaHafta}>›</button>
          </div>

          {/* روزانہ نظارہ */}
          {maujoodaView === 'daily' && (
            <div className="ur-cal-daily-view">
              <div className="ur-cal-day-selector">
                {din.map((d, i) => (
                  <div key={i} className={`ur-cal-day-tab ${i === chunaaHuaDin ? 'ur-cal-active' : ''}`} onClick={() => setChunaaHuaDin(i)}>
                    <div className="ur-cal-day-name">{dinMukhtisar[i]}</div>
                    <div className="ur-cal-day-num">{taareekhen[i]}</div>
                  </div>
                ))}
              </div>

              <div className="ur-cal-daily-meals">
                {['breakfast','lunch','dinner'].map((qism) => {
                  const khana = khanePaKaPlan[chunaaHuaDin]?.[qism];
                  if (!khana) return null;
                  return (
                    <div key={qism} className="ur-cal-meal-section">
                      <h2 className="ur-cal-meal-heading">{khanaPaKism[qism]}</h2>
                      <div className="ur-cal-meal-card">
                        <div className="ur-cal-meal-img" style={{width:'100%',height:'220px',overflow:'hidden',borderRadius:'12px 12px 0 0'}}>
                          <img src={khana.image} alt={khana.name}
                            style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}
                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'; }} />
                        </div>
                        <div className="ur-cal-meal-details" style={{padding:'12px 16px'}}>
                          <h3 className="ur-cal-meal-name">{khana.name}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ہفتہ وار نظارہ */}
          {maujoodaView === 'weekly' && (
            <div className="ur-cal-weekly-view">
              <div className="ur-cal-weekly-header">
                <div className="ur-cal-grid-cell ur-cal-header-cell ur-cal-empty-cell"></div>
                <div className="ur-cal-grid-cell ur-cal-header-cell">ناشتہ</div>
                <div className="ur-cal-grid-cell ur-cal-header-cell">دوپہر کا کھانا</div>
                <div className="ur-cal-grid-cell ur-cal-header-cell">رات کا کھانا</div>
              </div>
              {din.map((d, dinIndex) => (
                <div key={dinIndex} className="ur-cal-weekly-row">
                  <div className="ur-cal-grid-cell ur-cal-day-cell">
                    <div className="ur-cal-day-label">
                      <span className="ur-cal-day-short">{dinMukhtisar[dinIndex]}</span>
                      <span className="ur-cal-day-date">{taareekhen[dinIndex]}</span>
                    </div>
                  </div>
                  {['breakfast','lunch','dinner'].map((qism) => {
                    const khana = khanePaKaPlan[dinIndex]?.[qism];
                    return (
                      <div key={qism} className="ur-cal-grid-cell ur-cal-meal-cell">
                        {khana ? (
                          <div className="ur-cal-weekly-meal-box">
                            <div className="ur-cal-weekly-img" style={{width:'100%',height:'110px',overflow:'hidden',borderRadius:'8px 8px 0 0',position:'relative'}}>
                              <img src={khana.image} alt={khana.name}
                                style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'; }} />
                            </div>
                            <div className="ur-cal-weekly-meal-text">
                              <div className="ur-cal-weekly-meal-name">{khana.name}</div>
                            </div>
                          </div>
                        ) : (
                          <div className="ur-cal-empty-box">
                            <span className="ur-cal-empty-icon">+</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          {/* بٹن */}
          <div className="ur-cal-actions">
            <button className="ur-cal-action-btn ur-cal-save-btn" onClick={planMaahfoozKarein}>منصوبہ محفوظ کریں</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCalenderUrdu;