import React from 'react';
import { BsHeart } from 'react-icons/bs';
import RatingBar from './RatingBar';

function ProductCard({ product }) {
  const rating = (Math.random() * 5) + 1;

  return (
    <div className="w-80">
      <div style={{ position: "relative" }}>
        <img src={product.images || product.images2 || product.images3 || product.images4 || product.images5 || product.images6 || product.images7 || product.images8 || `https://source.unsplash.com/random/?${product.category}` || "https://ii1.pepperfry.com/img/grey.gif"} alt={product.title} />
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
        <h4 className="text-[rgb(255,124,70)] text-lg font-bold">
          ₹{product.priceoffer}
        </h4>
        <h4 className="line-through text-lg">₹{product.mrp}</h4>
      </div>
      <h5 className="text-[rgb(104,175,93)] text-base text-left font-semibold">
        {product.discount}
      </h5>
      <style>{`
        .w-80:hover button {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default ProductCard;
