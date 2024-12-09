import {products} from "../data/productsMock";

import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="m-4 sm:justify-evenly sm:gap-5 sm:flex">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
