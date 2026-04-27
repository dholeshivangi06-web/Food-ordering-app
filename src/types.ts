/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  priceRange: string;
  cuisine: string[];
  isVeg: boolean;
  offers: string[];
}

export interface FoodCategory {
  id: string;
  name: string;
  image: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  isVeg: boolean;
  category: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
