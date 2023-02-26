import React from 'react';
import { BsHeart } from 'react-icons/bs';
import RatingBar from './RatingBar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../Redux/CartReducer/action';
function ProductCard({ product ,query}) {
  const user= useSelector(val=>val.userAuth)
  const {cart} = useSelector(val=>val.CartReducer)
  const dispatch = useDispatch()
  const hanleAddTocart = (product)=>{
      // user?.user?.cart.push(product._id)
     dispatch( updateCart({cart:[...cart,product._id]}))
  }
  if(product.title==="Diego Fabric 3 Seater Sofa In Denim Blue Colour"){
    return;
  }
  if(product.title==="Siramika Sheesham Wood 3 Seater Sofa In Honey Oak Finish"){
    return;
  }
  if(product.title==="White Plastic Geographical Map Table Globe"){
    return;
  }
  const rating = (Math.random() * 5) + 1;
  const rat = Math.floor(Math.random()*500)+1;
  let ratcout;
  for(let key in product){
    if(key==="rating-count"){
      ratcout=product[key];
    }else{
      ratcout=rat;
    }
  }
  return (
    <>
    <div className="w-80 py-5">
      <div style={{ position: "relative" }}>
      <Link to={`/product/op/${product._id}`}>
        <img src={product.images[0] || product.images[1] || product.images[2] || product.images[3] || product.images[4] || `https://source.unsplash.com/random/?${query}` || "https://ii1.pepperfry.com/img/grey.gif"} alt={product.title} />
        </Link>
        <div onClick={()=>hanleAddTocart(product)} className="bg-orange-500 text-white font-bold z-10 p-3 rounded absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 transition duration-300">
          Add To Cart
        </div>
        <div className="wishlist absolute top-0 right-0 mt-2 mr-2 text-2xl cursor-pointer">
          <BsHeart />
        </div>
        <div className="rating absolute bottom-0 right-0 bg-white rounded-xl p-1 m-1 flex items-center">
          <RatingBar rating={rating} />
          <p className="ml-2">{rat || ratcout}</p>
        </div>
      </div>
      <h3 className="text-left">{product.title}</h3>
      <p className="text-gray-500 text-left">{product.brand}</p>
      <div className="flex gap-x-2">
        <h4 className="text-[rgb(255,124,70)] text-lg font-bold">
          ₹{product.price_offer}
        </h4>
        <h4 className="line-through text-lg">₹{product.mrp}</h4>
      </div>
      <h5 className="text-[rgb(104,175,93)] text-base text-left font-semibold">
        {product.discount}
      </h5>
      <p className='text-sm'>Ship in <span className='font-bold'>1 day</span></p>
      <style>{`
        .w-80:hover .adc {
          opacity: 1;
        }
      `}</style>
    </div>
    </>
  );
}

export default ProductCard;
