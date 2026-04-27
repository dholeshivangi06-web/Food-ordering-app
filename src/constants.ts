/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Restaurant, FoodCategory, MenuItem } from './types';

export const CATEGORIES: FoodCategory[] = [
  { id: '1', name: 'Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: '2', name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: '3', name: 'Sushi', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: '4', name: 'Healthy', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: '5', name: 'Desserts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: '6', name: 'Coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=200&h=200' },
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'res1',
    name: 'The Burger Loft',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
    deliveryTime: '20-30 min',
    priceRange: '₹₹',
    cuisine: ['Burgers', 'American', 'Fast Food'],
    isVeg: false,
    offers: ['50% OFF', 'Free Delivery'],
  },
  {
    id: 'res2',
    name: 'Artisan Pizza Co.',
    image: 'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    deliveryTime: '30-40 min',
    priceRange: '₹₹₹',
    cuisine: ['Italian', 'Pizza', 'Pasta'],
    isVeg: true,
    offers: ['Buy 1 Get 1'],
  },
  {
    id: 'res3',
    name: 'Zen Sushi Garden',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    deliveryTime: '25-35 min',
    priceRange: '₹₹₹',
    cuisine: ['Japanese', 'Sushi', 'Seafood'],
    isVeg: false,
    offers: ['10% OFF on first order'],
  },
  {
    id: 'res4',
    name: 'Verde Kitchen',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17051?auto=format&fit=crop&q=80&w=800',
    rating: 4.4,
    deliveryTime: '15-25 min',
    priceRange: '₹₹',
    cuisine: ['Salads', 'Healthy', 'Vegan'],
    isVeg: true,
    offers: ['Complimentary Drink'],
  },
  {
    id: 'res5',
    name: 'Spice Route',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    deliveryTime: '35-45 min',
    priceRange: '₹₹',
    cuisine: ['Indian', 'Curry', 'Spicy'],
    isVeg: false,
    offers: ['20% OFF'],
  },
  {
    id: 'res6',
    name: 'Morning Dew Coffee',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    deliveryTime: '10-15 min',
    priceRange: '₹',
    cuisine: ['Cafe', 'Breakfast', 'Bakery'],
    isVeg: true,
    offers: ['Free Cookie'],
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Signature Truffle Burger',
    price: 499,
    description: 'Black truffle mayo, swiss cheese, caramelized onions, and wagyu beef patty.',
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&q=80&w=400',
    isVeg: false,
    category: 'Burgers',
  },
  {
    id: 'm2',
    name: 'Margherita Burrata',
    price: 650,
    description: 'San Marzano tomatoes, fresh burrata balance, cold-pressed olive oil, and basil.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=400',
    isVeg: true,
    category: 'Pizza',
  },
  {
    id: 'm3',
    name: 'Dragon Roll (8 pcs)',
    price: 899,
    description: 'Tempura shrimp, avocado, cucumber, topped with eel and unagi sauce.',
    image: 'https://images.unsplash.com/photo-1559466273-d95e72debaf8?auto=format&fit=crop&q=80&w=400',
    isVeg: false,
    category: 'Sushi',
  },
  {
    id: 'm4',
    name: 'Quinoa & Avocado Bowl',
    price: 395,
    description: 'Organic quinoa, kale, cherry tomatoes, cucumbers, chickpeas, and lemon tahini dressing.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400',
    isVeg: true,
    category: 'Healthy',
  },
];
