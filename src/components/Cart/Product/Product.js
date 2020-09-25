import React from 'react'
import xIcon from '../../../assets/images/icons/x.svg'
import plusIcon from '../../../assets/images/icons/plus.svg'
import minusIcon from '../../../assets/images/icons/minus.svg'
import './Product.scss'

const Product = ({ productCart }) => {
  // productCart comes from CartWrapper component
  return (
    <div className="product-cart">
      <div className="product-cart-images">
        <img
          src={xIcon}
          alt="X"
          width="30px"
          height="30px"
          className="product-cart-images-x"
        />
        <img
          src={productCart.image}
          alt="product-image"
          className="product-cart-images-productImage"
        />
      </div>
      <div className="product-cart-title">{productCart.title}</div>
      <div className="product-cart-quantity">
        <img src={minusIcon} alt="-" />
        <span>{productCart.quantity}</span>
        <img src={plusIcon} alt="+" />
      </div>
      <div className="product-cart-price">
        ${Number(productCart.price * productCart.quantity).toFixed(2)}
      </div>
    </div>
  )
}

export default Product
