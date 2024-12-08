import Image from "next/image";
import {useContext} from "react";

import {formatCurrency} from "../utils/formatCurrency";
import CartContext from "../context/cart/CartContext";
import {CartItem as CartItemType} from "../types";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({
  item: {_id, name, imageUrl, description, price, quantity, size},
}: CartItemProps) => {
  const {changeQty, changeSize} = useContext(CartContext);

  const handleQuantityChange = (delta: number) => changeQty({_id, qty: quantity + delta});
  const handleSizeChange = (selectedSize: string) => changeSize({_id, size: selectedSize});

  return (
    <li className="flex p-2 mt-1 border-2 border-white h-36">
      <div className="relative w-24 h-32 bg-gradient-to-b from-final-gray to-initial-black">
        <Image alt={name} layout="fill" src={imageUrl} />
      </div>
      <div className="flex flex-col justify-between pl-3 md:text-xl">
        <div>{name}</div>
        <div className="text-sm text-gray-500 md:text-lg">{description}</div>
        <QuantitySelector quantity={quantity} onChange={handleQuantityChange} />
        <SizeSelector currentSize={size} onSizeChange={handleSizeChange} />
        <div className="text-sm md:text-lg">{formatCurrency(price)}</div>
      </div>
    </li>
  );
};

interface QuantitySelectorProps {
  quantity: number;
  onChange: (delta: number) => void;
}

const QuantitySelector = ({quantity, onChange}: QuantitySelectorProps) => (
  <div className="text-xs md:text-lg">
    QUANTITY:
    <div className="inline-block w-16 px-1 ml-3 border rounded-xl">
      <div className="flex justify-around">
        <button aria-label="Decrement quantity" onClick={() => onChange(-1)}>
          -
        </button>
        <span>{quantity}</span>
        <button aria-label="Increment quantity" onClick={() => onChange(1)}>
          +
        </button>
      </div>
    </div>
  </div>
);

interface SizeSelectorProps {
  currentSize: string;
  onSizeChange: (size: string) => void;
}

const SizeSelector = ({currentSize, onSizeChange}: SizeSelectorProps) => {
  const sizes = ["S", "M", "L", "XL"];
  const isSelected = (size: string) => currentSize === size;

  return (
    <div className="text-xs md:text-lg">
      SIZE:
      <span className="ml-3">
        {sizes.map((size) => (
          <button
            key={size}
            aria-pressed={isSelected(size)}
            className={`px-2 ${isSelected(size) ? "border rounded-xl" : ""}`}
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </span>
    </div>
  );
};

export default CartItem;
