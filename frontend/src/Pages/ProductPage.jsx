import React,{useEffect} from 'react'
import ProductList from './ProductList'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
function ProductPage({query}) {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.ProductReducer.opp);
  const filteredProducts = products.filter((product) => product.category === query);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className='flex gap-x-4'>
      <div className="filter">filter</div>
      <ProductList filteredProducts={filteredProducts}/>
    </div>
  )
}

export default ProductPage;

ProductPage.defaultProps = {
  query :"sofasets"
}