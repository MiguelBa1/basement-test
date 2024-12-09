import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {CartItem} from "../../types";

interface CartState {
  showCart: boolean;
  cartItems: CartItem[];
}

const initialState: CartState = {
  showCart: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find((item) => item._id === action.payload._id);

      if (!existingItem) {
        state.cartItems.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((item) => item._id !== action.payload);
    },
    updateCartQuantity: (state, action: PayloadAction<{id: string; quantity: number}>) => {
      const item = state.cartItems.find((item) => item._id === action.payload.id);

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    updateCartSize: (state, action: PayloadAction<{id: string; size: string}>) => {
      const item = state.cartItems.find((item) => item._id === action.payload.id);

      if (item) {
        item.size = action.payload.size;
      }
    },
  },
});

export const {toggleCart, addToCart, removeFromCart, updateCartQuantity, updateCartSize} =
  cartSlice.actions;

export default cartSlice.reducer;
