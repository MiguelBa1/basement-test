import Image from "next/image";
import {useContext} from "react";

import {formatCurrency} from "../utils/formatCurrency";
import hoverImg from "../public/add-to-cart.svg";
import CartContext from "../context/cart/CartContext";

const ProductCard = ({_id, name, img, price}) => {
  const {addToCart, showHideCart} = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({_id, name, img, price});
    showHideCart();
  };

  const formattedPrice = formatCurrency(price);

  return (
    <div>
      <button
        aria-label={`Add ${name} to cart`}
        className="relative transition-colors duration-500 border-b-2 border-white bg-gradient-to-b from-final-gray to-initial-black hover:from-black hover:to-gray-900"
        onClick={handleAddToCart}
      >
        <div>
          <Image alt={name} height={1156} src={img} width={880} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center duration-500 opacity-0 cursor-pointer hover:opacity-100">
          <Image alt="hover image" src={hoverImg} />
        </div>
      </button>
      <div className="flex justify-between text-xl font-basement-black">
        <span>{name}</span>
        <span>{formattedPrice}</span>
      </div>
    </div>
  );
};

export default ProductCard;
