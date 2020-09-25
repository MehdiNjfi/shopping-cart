import { combineReducers } from 'redux'
import products, * as fromProducts from './products'
import cart from './cart'

export default combineReducers({ products, cart })

// Get AddedIds and Quantity from cart
const getAddedIds = (state) => state.cart.addedIds
const getQuantity = (state, id) => state.cart.quantityById[id] || 0
// Get the product you are looking at with the ID of that product
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

// The output of this function is an array with objects including quantity
export const getCartProducts = (state) => {
  return getAddedIds(state).map((id) => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id),
  }))
}

export const getDiscount = (state) =>
  getAddedIds(state)
    .reduce(
      (total, id) =>
        total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2) * state.cart.discount

export const getTotal = (state) =>
  getAddedIds(state)
    .reduce(
      (total, id) =>
        total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2) - getDiscount(state).toFixed(2)
