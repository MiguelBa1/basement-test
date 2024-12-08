import {CartItemType} from "../types";

import CartItem from "./CartItem";

interface CartContentProps {
  cartItems: CartItemType[];
}

const CartContent: React.FC<CartContentProps> = ({cartItems}) => {
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
        <CartItem
          key={item._id}
          _id={item._id}
          description={item.description}
          img={item.imageUrl}
          name={item.name}
          price={item.price}
          qty={item.quantity}
          size={item.size}
        />
      ))}
    </ul>
  );
};

export default CartContent;
