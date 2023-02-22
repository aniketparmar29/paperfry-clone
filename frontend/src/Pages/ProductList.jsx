import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { getProducts } from "../Redux/ProductReducer/action";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.ProductReducer.opp);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const filteredProducts = products.filter((product) => product.category === "Queen Bed Foldable Mattresses");

  return (
    <div className="w-full grid grid-cols-2 mt-8 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center  " >
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
