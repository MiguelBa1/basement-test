import {create} from "zustand";

import {CartItem} from "../types";

interface CartState {
  showCart: boolean;
  cartItems: CartItem[];
  toggleCart: () => void;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  updateCartSize: (id: string, size: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  showCart: false,
  cartItems: [],
  toggleCart: () => set((state) => ({showCart: !state.showCart})),
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find((cartItem) => cartItem._id === item._id);

      if (existingItem) {
        return state;
      }

      return {
        cartItems: [...state.cartItems, {...item, quantity: 1, size: "M"}],
      };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem._id !== id),
    })),
  updateCartQuantity: (id, quantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((cartItem) =>
        cartItem._id === id ? {...cartItem, quantity} : cartItem,
      ),
    })),
  updateCartSize: (id, size) =>
    set((state) => ({
      cartItems: state.cartItems.map((cartItem) =>
        cartItem._id === id ? {...cartItem, size} : cartItem,
      ),
    })),
}));
