import React from 'react'
import { connect } from 'react-redux'
import { getCartProducts } from '../../redux/reducers'
import { setShowCart } from '../../redux/actions/actions'
import Modal from '../../components/Modal/Modal'
import Cart from '../../components/Cart/CWrapper/CartWrapper.js'

const CartContainer = ({ cart, showCart, setShowCart }) => {
  return (
    <section className="cartContainer">
      <Modal showCart={showCart} setShowCart={setShowCart}>
        <Cart cart={cart} setShowCart={setShowCart} />
      </Modal>
    </section>
  )
}

const mapStateToProps = (state) => {
  return { cart: getCartProducts(state), showCart: state.cart.showCart }
}

export default connect(mapStateToProps, { setShowCart })(CartContainer)
