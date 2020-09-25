import React from 'react'
import Product from '../Product/Product.js'
import xIcon from '../../../assets/images/icons/x.svg'
import './CartWrapper.scss'

const Cart = ({ cart, setShowCart }) => {
  return (
    <div className="cart">
      <div className="cart-header">
        <h1 className="cart-header-title">Cart</h1>
        {/* setShowCart action is connected to the Redax Store for show or hide cart */}
        <img
          src={xIcon}
          alt="X"
          width="30px"
          height="30px"
          className="cart-header-icon"
          onClick={setShowCart}
        />
      </div>

      <div className="cart-body">
        {/* A message is displayed when the card is empty, otherwise the card is mapped */}
        {cart.length === 0 ? (
          <div className="cart-empty">Cart is empty!</div>
        ) : (
          cart.map((productCart) => {
            return <Product productCart={productCart} key={productCart.title} />
          })
        )}
      </div>
    </div>
  )
}

export default Cart
