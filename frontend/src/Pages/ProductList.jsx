import React from "react";
import ProductCard from "../Components/ProductCard";

const ProductList = ({products,query}) => {
  return (
    <div className="w-[30%] lg:w-[80%] h-[30%] lg:h-[80%] grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
  {products ? (
    products.map((product) => (
      <ProductCard key={product._id} product={product} query={query} />
    ))
  ) : (
    <img className="w-1/2 mx-auto" src="https://ii1.pepperfry.com/img/grey.gif" alt="loading" />
  )}
</div>

  );
};

export default ProductList;
