import React from 'react'
import { connect } from 'react-redux'
import { getCartProducts, getTotal } from '../../redux/reducers'
import { setShowCart, setDiscount } from '../../redux/actions/actions'
import Modal from '../../components/Modal/Modal'
import CartWrapper from '../../components/Cart/CWrapper/CartWrapper.js'

const CartContainer = ({
  cart,
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

export default connect(mapStateToProps, { setShowCart, setDiscount })(
  CartContainer
)
