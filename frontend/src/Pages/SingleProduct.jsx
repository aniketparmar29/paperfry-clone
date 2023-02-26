import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../Components/ImageCarousel';
import {TbShieldCheck} from 'react-icons/tb'
import RatingBar from '../Components/RatingBar'
import {FaRegShareSquare} from 'react-icons/fa'
import {MdDesignServices} from 'react-icons/md'
import {CiDeliveryTruck} from 'react-icons/ci'
import Navbar from '../Pages/Components/Navbar'
import DropdownMenu from '../Pages/Components/DropdownMenu'
import Footer from '../Pages/Components/Footer'
import { BsHeart } from 'react-icons/bs';
import { updateCart } from '../Redux/CartReducer/action';
import {useDispatch, useSelector} from 'react-redux'
function SingleProduct() {
  const user= useSelector(val=>val.userAuth)
  const {cart} = useSelector(val=>val.CartReducer)
  const dispatch = useDispatch()
  const {query, id } = useParams();
  const [product, setProduct] = useState(null);
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
  useEffect(() => {
    fetch(`https://long-plum-coyote-gown.cyclic.app/products/${id}`)
      .then(response => response.json())
      .then(productData => setProduct(productData.data))
      .catch(error => console.error(error));
  }, [id]);
  function handleAddToCart(id) {
   dispatch( updateCart({cart:[...cart,id]}))
  }

  function handleBuyNow() {
    // Navigate to checkout page with product
  }

  if (!product) {
    return         <img className="w-[50%] m-auto" src="https://ii1.pepperfry.com/img/grey.gif" alt="loading" />;
  }
  return (
    <><DropdownMenu/>
    <div className=" lg:flex xl:flex md:flex  gap-4 justify-between w-[90%] m-auto">

      <div className="product-images w-[50%]">
        <ImageCarousel images={product[0].images}/>
      </div>
      <div className="m-10 w-[50%]">
        <h1 className='text-xl'>{product[0].title}</h1>
        <div className="wishlist absolute top-[11rem] right-16 mt-2 mr-2 text-2xl cursor-pointer">
          <BsHeart />
        </div>
        <div className="wishlist absolute top-[11rem] right-8 mt-2 mr-2 text-2xl cursor-pointer">
          <FaRegShareSquare />
        </div>
        <p className='text-lg font-bold text-orange-600'>{product[0].brand}</p>
        <div className=" p-1 m-1 flex items-center">
          <RatingBar rating={rating} />
          <p className="ml-2">({rat || ratcout} Ratings)</p>
        </div>
        <div className='flex gap-x-6'>
        <h2 className='text-2xl font-bold'>₹ {product[0].price_offer}</h2>
        <h5 className="text-[rgb(104,175,93)]  text-lg font-semibold">
        ({product[0].discount})
      </h5>
        </div>
          <p>Save ₹ {product[0].mrp-product[0].price_offer} <span className="line-through mx-2">MRP ₹ {product[0].mrp}</span> (Inc of all taxes)</p>
        <hr className='py-2 mt-2' />
        <img className='w-[100%]' src="https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_Web_VIPCouponNOMRP_2x_2502_ETOM.jpg" alt="offer" />
        
        <div className='flex gap-x-4 mt-5'>
          <h2 className='font-bold mt-2'>DELIVERY</h2>
        <div>
        <div className="dilevery">
          <p className='text-sm'>Enter Pincode to get Delivery Date, Assembly Information and other details</p>
          <div className='flex'>
          <input type="text" className='border-2 p-2 text-lg' placeholder='Enter a Pincode' />
          <p className='text-base mx-5 pt-3'>Pepperfry Fulfilled</p>
          </div>
          <p className='text-orange-600 absolute top-[31.5rem] cursor-pointer right-[24rem]'>Apply</p>
        </div>
        <p className='flex gap-x-4 mt-5'><CiDeliveryTruck className='text-lg'/> Delivery charges as applicable <span className='font-bold'>Pincode Required</span></p>
        <p className='flex gap-x-4 mt-5'><MdDesignServices className='text-lg'/> Assembly Charges as applicable <span className='font-bold'>Pincode Required</span></p>
        <div className='flex gap-x-2 mt-5 border-2 border-orange-600 p-2 w-[90%] text-sm bg-[#FFEEE7]'>
          <input type="checkbox" name="" id="" className="w-5 h-5 m-2 text-orange-500 bg-gray-100 border-gray-300 rounded-lg focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-orange-600"/>
          <div >
            <p className='font-semibold'>Add Full Furniture Protection for only ₹ 3,734</p>
            <p className='text-orange-600 font-bold'>Learn More?</p>
          </div>
            <TbShieldCheck className='text-4xl text-orange-600'/>
        </div>
        </div>
        </div>

        <div className="btns flex gap-x-4 mt-5">
          <div className='p-4 border-2 border-black'>
          <label htmlFor="Que">Que</label>
          <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          </div>
          <div onClick={()=>handleAddToCart(id)} className='p-4 border-2 px-12 border-black'>ADD TO CART</div>
          <div className='p-4 border-2 px-14 text-lg font-bold bg-orange-600 text-white'>BUY NOW</div>
        </div>

        <div className='flex gap-x-4 mt-7'>
          <h2 className='font-bold text-base mt-2'>MORE OFFERS</h2>
        <div className='text-slate-600 text-sm'>
          <div>
          <p className='font-bold'>Extra Rs.500 off on Kotak Bank Credit Card EMICode: KOTAKPF5</p>
          <p>Get flat discount of INR 500 on Kotak Bank Credit Card EMI transactions on a minimum purchase value of INR 3,000</p>
          </div>
          <div>
          <p className='font-bold'>Extra Rs.500 off on BOB CCEMICode: BOBPF10</p>
          <p>Get flat discount of INR 500 on Bank Of Baroda Credit Cards EMI Transactions on a minimum purchase value of INR 3,000</p>
          </div>
          <div>
          <p className='font-bold'>Extra Promo Benefit</p>
          <p>Get flat discount of INR 500 on Bank Of Baroda Credit Cards EMI Transactions on a minimum purchase value of INR 3,000</p>
          </div>
        </div>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
}
export default SingleProduct;