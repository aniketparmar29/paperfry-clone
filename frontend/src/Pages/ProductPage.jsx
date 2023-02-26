import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../Redux/ProductReducer/action';
import ProductList from './ProductList';
import {FaTimes,FaFilter} from 'react-icons/fa'
import Navbar from '../Pages/Components/Navbar'
import Footer from '../Pages/Components/Footer'
const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductReducer.opp);
  const { query } = useParams();
  const [brandFilters, setBrandFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const isMobileOrTablet = /Mobile|Tablet/i.test(navigator.userAgent);

  useEffect(() => {
    dispatch(getProducts(query));
  }, [dispatch, query]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setBrandFilters({ ...brandFilters, [name]: checked });
  };

  const clearFilters = () => {
    setBrandFilters({});
  };

  const filteredProducts = products.filter((product) => {
    if (Object.keys(brandFilters).length === 0 || Object.values(brandFilters).every(val => !val)) {
      return true;
    } else {
      return brandFilters[product.brand];
    }
  });
  

  const brandCheckboxes = Array.from(new Set(products.map((product) => product.brand))).map((brand) => (
    <div key={brand} >
      <label className="text-xs">
        <input
          type="checkbox"
          name={brand}
          checked={brandFilters[brand] || false}
          onChange={handleCheckboxChange}
          className="w-5 h-5 mx-2 text-orange-500 bg-gray-100 border-gray-300 rounded-lg focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-orange-600"
        />
        {brand}
      </label>
    </div>
  ));

  return (
    <>
    <Navbar/>
    <div>
      <span className='text-slate-500 text-sm ml-[5%]'>Home<span className='font-bold px-5'>&#62;</span>{query}</span>
      <h1 className='text-2xl font-bold text-center mt-10 mb-28'>{query}</h1>
      <hr />
      <div className="flex gap-x-4">
        <div className='border-r-2 px-[1%] lg:px-10'>
          <button className='text-orange-600' onClick={clearFilters}>Clear Filters</button>
          {isMobileOrTablet && (
            <div className='flex justify-between items-center'>
              <div className='mobile-filter-icon' onClick={() => setShowFilters(!showFilters)}>
                {showFilters ? <FaTimes /> : <FaFilter />}
              </div>
            </div>
          )}
          {(!isMobileOrTablet || showFilters) && (
            <div className='border-t-2'>
              <h2 className='font-bold'>Brands</h2>
              {brandCheckboxes}
            </div>
          )}
        </div>
        <ProductList products={filteredProducts} query={query} />
      </div>
      {isMobileOrTablet && (
        <div className={`mobile-filters-menu ${showFilters ? 'open' : ''}`}>
          <div className='mobile-filter-header'>
            <div className='mobile-filter-header-content'>Filters</div>
            <div className='mobile-filter-header-close' onClick={() => setShowFilters(false)}>
              <FaTimes />
            </div>
          </div>
          <div className='mobile-filter-body'>
            <button className='mobile-filter-clear-btn' onClick={clearFilters}>Clear Filters</button>
            <div className='border-t-2'>
              <h2 className='font-bold'>Brands</h2>
              {brandCheckboxes}
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
      </>
  );
  
};

export default ProductPage;
