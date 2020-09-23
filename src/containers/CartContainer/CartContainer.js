import React from 'react'
import { connect } from 'react-redux'
import { getCartProducts } from '../../redux/reducers'

const CartContainer = ({ cart }) => {
  return <section>CartContainer</section>
}

const mapStateToProps = (state) => {
  return { cart: getCartProducts(state) }
}

export default connect(mapStateToProps)(CartContainer)
