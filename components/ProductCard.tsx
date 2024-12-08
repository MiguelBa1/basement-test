import Image from "next/image";
import {useDispatch} from "react-redux";

import {addToCart, toggleCart} from "../store/slices/cartSlice";
import hoverImg from "../public/add-to-cart.svg";
import {Product} from "../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({product}: ProductCardProps) => {
  const {name, imageUrl, price} = product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({...product, size: "M", quantity: 1}));
    dispatch(toggleCart());
  };

  return (
    <div>
      <button
        aria-label={`Add ${name} to cart`}
        className="relative transition-colors duration-500 border-b-2 border-white bg-gradient-to-b from-final-gray to-initial-black hover:from-black hover:to-gray-900"
        onClick={handleAddToCart}
      >
        <div>
          <Image alt={name} height={1156} src={imageUrl} width={880} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center duration-500 opacity-0 cursor-pointer hover:opacity-100">
          <Image alt="hover image" src={hoverImg} />
        </div>
      </button>
      <div className="flex justify-between text-xl font-basement-black">
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
