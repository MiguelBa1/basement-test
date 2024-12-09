import Image from "next/image";

import {useCartStore} from "../store/useCartStore";
import hoverImg from "../public/add-to-cart.svg";
import {Product} from "../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({product}: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const toggleCart = useCartStore((state) => state.toggleCart);

  const handleAddToCart = () => {
    addToCart({...product, size: "M"});
    toggleCart();
  };

  return (
    <div>
      <button
        aria-label={`Add ${product.name} to cart`}
        className="relative transition-colors duration-500 border-b-2 border-white bg-gradient-to-b from-final-gray to-initial-black hover:from-black hover:to-gray-900"
        onClick={handleAddToCart}
      >
        <div>
          <Image alt={product.name} height={1156} src={product.imageUrl} width={880} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center duration-500 opacity-0 cursor-pointer hover:opacity-100">
          <Image alt="hover image" src={hoverImg} />
        </div>
      </button>
      <div className="flex justify-between text-xl font-basement-black">
        <span>{product.name}</span>
        <span>{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
