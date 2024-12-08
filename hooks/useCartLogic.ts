import {useContext} from "react";

import {CartContextType} from "../types";
import {formatCurrency} from "../utils/formatCurrency";
import CartContext from "../context/cart/CartContext";

const useCartLogic = () => {
  const {showCart, cartItems, showHideCart} = useContext<CartContextType>(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((amount, item) => item.price * item.quantity + amount, 0);
  };

  const handleCheckout = () => {
    cartItems.forEach((item) => {
      console.log(
        `Product: ${item.name}, price: $${item.price}, size: ${item.size}, quantity: ${item.quantity}`,
      );
    });
    const total = formatCurrency(calculateTotal());

    console.log(`Total: ${total}`);
  };

  const formattedTotal = formatCurrency(calculateTotal());

  return {
    showCart,
    cartItems,
    showHideCart,
    handleCheckout,
    formattedTotal,
  };
};

export default useCartLogic;
