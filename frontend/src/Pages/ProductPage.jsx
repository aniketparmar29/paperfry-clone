import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../Redux/ProductReducer/action';
import ProductList from './ProductList';

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductReducer.opp);
  const { query } = useParams();
  const [brandFilters, setBrandFilters] = useState({});

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
    if (Object.keys(brandFilters).length === 0) {
      return true;
    } else {
      return brandFilters[product.brand];
    }
  });

  const brandCheckboxes = Array.from(new Set(products.map((product) => product.brand))).map((brand) => (
    <div key={brand}>
      <label>
        <input
          type="checkbox"
          name={brand}
          checked={brandFilters[brand] || false}
          onChange={handleCheckboxChange}
        />
        {brand}
      </label>
    </div>
  ));

  return (
    <div className="flex gap-x-4">
      <div>
        <h2>Filter by Brand</h2>
        {brandCheckboxes}
        <button onClick={clearFilters}>Clear Filters</button>
      </div>
      <ProductList products={filteredProducts} query={query} />
    </div>
  );
};

export default ProductPage;
