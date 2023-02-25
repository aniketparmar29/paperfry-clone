import React,{useEffect,useState} from 'react'
import ProductList from './ProductList'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import Filter from '../Components/Filter';
function ProductPage({query}) {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.ProductReducer.opp);
  const [filteredProducts, setFilteredProducts] = useState(products.data || []);

  const handleFilterChange = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };
  useEffect(() => {
    dispatch(getProducts(query));
  }, []);
  console.log(products,query)
  return (
    <div className='flex gap-x-4'>
      <Filter
        products={products.data}
        onFilter={handleFilterChange}
        selectedFilters={[]}
      />
      <ProductList products={filteredProducts} query={query}/>
    </div>
  )
}

export default ProductPage;

ProductPage.defaultProps = {
  query :"sofasets"
}