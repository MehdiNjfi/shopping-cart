import React from 'react'
import { connect } from 'react-redux'
import { getCartProducts, getTotal } from '../../redux/reducers'
import {
  addProduct,
  removeFromCart,
  setShowCart,
  setDiscount,
} from '../../redux/actions/actions'
import Modal from '../../components/Modal/Modal'
import CartWrapper from '../../components/Cart/CWrapper/CartWrapper.js'

const CartContainer = ({
  cart,
  addProduct,
  removeFromCart,
  showCart,
  totalPrice,
  setShowCart,
  setDiscount,
}) => {
  return (
    <section className="cartContainer">
      <Modal showCart={showCart} setShowCart={setShowCart}>
        <CartWrapper
          cart={cart}
          addProduct={addProduct}
          removeFromCart={removeFromCart}
          setShowCart={setShowCart}
          totalPrice={totalPrice}
          setDiscount={setDiscount}
        />
      </Modal>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: getCartProducts(state),
    showCart: state.cart.showCart,
    totalPrice: getTotal(state),
  }
}

export default connect(mapStateToProps, {
  addProduct,
  removeFromCart,
  setShowCart,
  setDiscount,
})(CartContainer)
