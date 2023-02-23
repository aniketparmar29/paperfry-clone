import React from 'react';
import { BsHeart } from 'react-icons/bs';
import RatingBar from './RatingBar';

function ProductCard({ key, product }) {
  const rating = (Math.random() * 5) + 1;

  return (
    <div key={key} className="w-72 m-auto">
      <div style={{ position: "relative" }}>
        <img src={product.images} alt={product.title} />
        <button className="bg-orange-500 text-white font-bold z-10 p-3 rounded absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 transition duration-300">
          Add To Cart
        </button>
        <button className="wishlist absolute top-0 right-0 mt-2 mr-2 text-2xl cursor-pointer">
          <BsHeart />
        </button>
        <div className="rating absolute bottom-0 right-0 bg-white rounded-xl p-1 m-1 flex items-center">
          <RatingBar rating={rating} />
          <p className="ml-2">{product.ratingcount}</p>
        </div>
      </div>
      <h3 className="text-left">{product.title}</h3>
      <p className="text-gray-500 text-left">{product.brand}</p>
      <div className="flex gap-x-2">
        <h4 className="text-[rgb(255,124,70)] text- font-bold">
          ₹{product.priceoffer}
        </h4>
        <h4 className="line-through">₹{product.mrp}</h4>
      </div>
      <h5 className="text-[rgb(104,175,93)] text-base text-left font-semibold">
        {product.discount}
      </h5>
      <style>{`
        .w-72 > div:hover button {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}





export default ProductCard;
