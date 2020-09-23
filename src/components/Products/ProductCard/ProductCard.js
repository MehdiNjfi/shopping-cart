import React from 'react'
import './ProductCard.scss'

const ProductCard = ({ product, addProduct }) => {
  // Product Comes from productsList component
  return (
    <div className="card">
      <img src={product.image} alt={product.titles} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{product.title}</h4>
        <h5 className="card-price">${product.price}</h5>
        <button
          type="button"
          className="card-button"
          onClick={() => addProduct(product.id, product.inventory)}
          disabled={product.inventory === 0 ? true : false}
        >
          {product.inventory === 0 ? 'Sold out!' : 'Add to cart'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
