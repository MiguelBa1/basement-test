import {CartItem as CartItemType} from "../types/cart";

import CartItem from "./CartItem";

interface CartContentProps {
  cartItems: CartItemType[];
}

const CartContent = ({cartItems}: CartContentProps) => {
  if (cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <span>There are no items in your cart.</span>
      </div>
    );
  }

  return (
    <ul>
      {cartItems.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}
    </ul>
  );
};

export default CartContent;
