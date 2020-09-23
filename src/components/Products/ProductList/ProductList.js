import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.scss'

const ProductList = ({ products }) => {
  // Products Comes from productsContainer component
  return (
    <div className="productList">
      <div className="productList-header">
        <h1 className="productList-header-title">Products</h1>
        <label>
          <input
            type="text"
            placeholder="Search in products..."
            className="productList-header-searchInput"
          />
        </label>
      </div>

      <div className="productList-body">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

export default ProductList
