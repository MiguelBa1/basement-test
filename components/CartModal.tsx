import React from "react";

import {useCartStore} from "../store/useCartStore";
import {formatCurrency} from "../utils/formatCurrency";

import CartContent from "./CartContent";

const CartModal: React.FC = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const showCart = useCartStore((state) => state.showCart);
  const toggleCart = useCartStore((state) => state.toggleCart);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggleCart();
    }
  };

  const handleCheckout = () => {
    const total = formatCurrency(
      cartItems.reduce((amount, item) => item.price * item.quantity + amount, 0),
    );

    alert(`Total: ${total}`);
  };

  const formattedTotal = formatCurrency(
    cartItems.reduce((amount, item) => item.price * item.quantity + amount, 0),
  );

  return (
    <>
      <div
        aria-hidden={!showCart}
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 bg-black bg-opacity-50 ${
          showCart ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleBackgroundClick}
      >
        <div
          className={`top-0 right-0 grid h-screen gap-2 p-5 overflow-auto bg-black font-basement-black md:h-3/4 md:border grid-rows-cart md:fixed transform transition-transform duration-500 ${
            showCart ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="text-right">
            <button onClick={toggleCart}>→ CLOSE</button>
          </div>
          <div className="text-center text-8xl">
            YOUR <span className="text-stroke-white text-stroke-2 text-fill-transparent">CART</span>
          </div>
          <div>
            <CartContent cartItems={cartItems} />
          </div>
          <div className="md:grid grid-cols-bottom-cart">
            <div className="flex justify-between gap-2 md:justify-start md:text-3xl">
              <div>TOTAL:</div>
              <div>{formattedTotal}</div>
            </div>
            <button
              className="w-full pt-4 text-5xl text-center text-black transition-all border-t duration-50 md:pt-0 md:border-0 md:text-3xl text-stroke-white text-stroke-2 hover:text-white hover:text-stroke-none"
              onClick={handleCheckout}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
