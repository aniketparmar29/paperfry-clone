import { Grid } from "@chakra-ui/react";
import React from "react";

const ProductCard = ({
  image,
  name,
  brand,
  category,
  price,
  inventory,
  availability,
}) => {
  return (
    <div id="product_card">
      <div>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{brand}</p>
        <p>{category}</p>
        <p>{inventory}</p>
        <div>
          {availability ? (
            <h3 style={{ color: "green" }}>Available</h3>
          ) : (
            <h3 style={{ color: "red" }}>Out of Stock</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
