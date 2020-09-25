import React from 'react'
import xIcon from '../../../assets/images/icons/x.svg'
import plusIcon from '../../../assets/images/icons/plus.svg'
import minusIcon from '../../../assets/images/icons/minus.svg'
import './Product.scss'

const Product = ({ productCart, addProduct }) => {
  // productCart comes from CartWrapper component
  return (
    <div className="product-cart">
      {/* Remove and product image */}
      <div className="product-cart-images">
        <button className="product-cart-images-button">
          <img
            src={xIcon}
            alt="X"
            width="30px"
            height="30px"
            className="product-cart-images-button-x"
          />
        </button>
        <img
          src={productCart.image}
          alt="product-image"
          className="product-cart-images-productImage"
        />
      </div>

      {/* product title */}
      <div className="product-cart-title">{productCart.title}</div>

      {/* product quantity and Increase or decrease the quantity of products*/}
      <div className="product-cart-quantity">
        <button className="product-cart-quantity-button">
          <img src={minusIcon} alt="-" />
        </button>
        <span>{productCart.quantity}</span>
        <button
          className="product-cart-quantity-button"
          onClick={() => addProduct(productCart.id, productCart.inventory)}
        >
          <img src={plusIcon} alt="+" />
        </button>
      </div>

      {/* product price  */}
      <div className="product-cart-price">
        ${Number(productCart.price * productCart.quantity).toFixed(2)}
      </div>
    </div>
  )
}

export default Product
