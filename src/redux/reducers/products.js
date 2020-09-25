import { combineReducers } from 'redux'
import {
  SET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
} from '../constant/actionsTypes'

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // If the product has inventory, reduce it
      return action.inventory > 0
        ? {
            ...state,
            inventory: state.inventory > 0 ? state.inventory - 1 : 0,
          }
        : state
    case REMOVE_FROM_CART:
      // If there is quantity, add to inventory otherwise do nothing
      return action.quantity > 0
        ? {
            ...state,
            inventory: state.inventory + 1,
          }
        : state
    case REMOVE_ALL_FROM_CART:
      // Return product inventory
      return {
        ...state,
        inventory: state.inventory + action.removeCount,
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {}),
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action),
        }
      }
      return state
  }
}

const visibleProducts = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products.map((product) => {
        return { id: product.id, title: product.title }
      })
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleProducts,
})

export const getProduct = (state, id) => state.byId[id]

export const getVisibleProducts = (state) =>
  state.visibleProducts.map((product) => getProduct(state, product.id))
