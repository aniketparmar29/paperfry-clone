import { useState, useEffect } from 'react';
const Filter = ({ products, onFilter, selectedFilters }) => {
    const [brands, setBrands] = useState([]);
  
    const handleBrandChange = (event) => {
      const brand = event.target.value;
      const isChecked = event.target.checked;
  
      if (isChecked) {
        setBrands((prevBrands) => [...prevBrands, brand]);
      } else {
        setBrands((prevBrands) => prevBrands.filter((b) => b !== brand));
      }
  
      const filteredProducts = brands.length
        ? products.filter((product) => brands.includes(product.brand))
        : products;
  
      onFilter(filteredProducts);
    };
  
    const clearFilters = () => {
      setBrands([]);
      onFilter(products);
    };
  
    return (
      <div className="flex flex-col items-start space-y-2">
        <h3 className="font-medium text-gray-800">Filter by brand</h3>
        <div className="flex flex-col space-y-1">
          {Array.from(new Set(products?.map((product) => product.brand))).map(
            (brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  value={brand}
                  checked={brands.includes(brand)}
                  onChange={handleBrandChange}
                  className="mr-2 rounded-sm border-gray-400 focus:ring-2 focus:ring-indigo-500"
                />
                <span className="text-gray-700">{brand}</span>
              </label>
            )
          )}
        </div>
        {brands && brands.length > 0 && (
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Clear Filters
          </button>
        )}
      </div>
    );
  };

export default Filter;
