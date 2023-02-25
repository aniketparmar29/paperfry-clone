import React from "react";
import ProductCard from "../Components/ProductCard";

const ProductList = ({products,query}) => {
  return (
    <div className="w-[80%] grid grid-cols-2 mt-8 sm:grid-cols-2 gap-10 lg:grid-cols-3">
      {products ? (
        products.map((product) => (
          <ProductCard key={product._id} product={product} query={query} />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
