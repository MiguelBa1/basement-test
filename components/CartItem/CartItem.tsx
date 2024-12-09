import Image from "next/image";

import {useCartStore} from "../../store/useCartStore";
import {formatCurrency} from "../../utils/formatCurrency";
import {CartItem as CartItemType} from "../../types";

import {QuantitySelector, SizeSelector} from "./index";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({item}: CartItemProps) => {
  const {_id, name, imageUrl, price, quantity, size} = item;

  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateCartQuantity = useCartStore((state) => state.updateCartQuantity);
  const updateCartSize = useCartStore((state) => state.updateCartSize);

  const handleQuantityChange = (delta: number) => {
    if (quantity + delta === 0) {
      removeFromCart(_id);
    } else {
      updateCartQuantity(_id, quantity + delta);
    }
  };

  const handleSizeChange = (selectedSize: string) => {
    updateCartSize(_id, selectedSize);
  };

  return (
    <li className="flex p-2 mt-1 border-2 border-white h-36">
      <div className="relative w-24 h-32 bg-gradient-to-b from-final-gray to-initial-black">
        <Image alt={name} layout="fill" src={imageUrl} />
      </div>
      <div className="flex flex-col justify-between pl-3 md:text-xl">
        <div>{name}</div>
        <QuantitySelector quantity={quantity} onChange={handleQuantityChange} />
        <SizeSelector currentSize={size} onSizeChange={handleSizeChange} />
        <div className="text-sm md:text-lg">{formatCurrency(price)}</div>
      </div>
    </li>
  );
};

export default CartItem;
