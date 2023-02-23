import React from 'react'
import ProductList from './ProductList'

function ProductPage() {
  return (
    <div className='flex gap-x-4'>
      <div className="filter">filter</div>
      <ProductList/>
    </div>
  )
}

export default ProductPage