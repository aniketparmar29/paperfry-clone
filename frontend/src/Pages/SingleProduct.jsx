import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../Components/ImageCarousel';
import RatingBar from '../Components/RatingBar'
import {FaRegShareSquare} from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs';
function SingleProduct() {
  const {query, id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const rating = (Math.random() * 5) + 1;
  const rat = Math.floor(Math.random()*500)+1;
  let ratcout;
  for(let key in product){
    if(key=="rating-count"){
      ratcout=product[key];
    }else{
      ratcout=rat;
    }
  }
  useEffect(() => {
    fetch(`https://long-plum-coyote-gown.cyclic.app/products/${id}`)
      .then(response => response.json())
      .then(productData => setProduct(productData.data))
      .catch(error => console.error(error));
  }, [id]);
  function handleAddToCart() {
    // Add product to cart
  }

  function handleBuyNow() {
    // Navigate to checkout page with product
  }

  if (!product) {
    return         <img className="w-[50%] m-auto" src="https://ii1.pepperfry.com/img/grey.gif" alt="loading" />;
  }
console.log(product[0].images)
  return (
    <div className=" lg:flex xl:flex md:flex  gap-4 justify-between w-[90%] m-auto">

      <div className="product-images">
        <ImageCarousel images={product[0].images}/>
      </div>
      <div className="m-10">
        <h1 className='text-xl'>{product[0].title}</h1>
        <button className="wishlist absolute top-9 right-16 mt-2 mr-2 text-2xl cursor-pointer">
          <BsHeart />
        </button>
        <button className="wishlist absolute top-9 right-8 mt-2 mr-2 text-2xl cursor-pointer">
          <FaRegShareSquare />
        </button>
        <p className='text-lg font-bold text-orange-600'>{product[0].brand}</p>
        <div className=" p-1 m-1 flex items-center">
          <RatingBar rating={rating} />
          <p className="ml-2">({rat || ratcout} Ratings)</p>
        </div>
        <div className='flex gap-x-6'>
        <h2 className='text-2xl font-bold'>₹ {product[0].mrp}</h2>
        <h5 className="text-[rgb(104,175,93)]  text-lg font-semibold">
        ({product[0].discount})
      </h5>
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
}
export default SingleProduct;