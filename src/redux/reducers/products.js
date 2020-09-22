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
    //
    case REMOVE_FROM_CART:
    //
    case REMOVE_ALL_FROM_CART:
    //
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
