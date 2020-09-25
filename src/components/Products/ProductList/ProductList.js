import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.scss'

const ProductList = ({ products, addProduct }) => {
  // Products Comes from productsContainer component
  return (
    <div className="productList">
      <div className="productList-header">
        <h1 className="productList-header-title">Products</h1>
      </div>

      <div className="productList-body">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addProduct={addProduct}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
