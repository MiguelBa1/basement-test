import ProductCard from "../components/ProductCard";
import {products} from "../data/productsMock";

const ProductList = () => {
  return (
    <div className="m-4 sm:justify-evenly sm:gap-5 sm:flex">
      {products.map((prod) => (
        <ProductCard
          key={prod._id}
          _id={prod._id}
          img={prod.imageUrl}
          name={prod.name}
          price={prod.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
