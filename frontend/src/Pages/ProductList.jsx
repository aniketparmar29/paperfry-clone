import React from "react";
import ProductCard from "../Components/ProductCard";

const ProductList = ({filteredProducts}) => {
  return (
    <div className="w-[75%] grid grid-cols-2 mt-8 sm:grid-cols-2 gap-y-4 lg:grid-cols-3">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
