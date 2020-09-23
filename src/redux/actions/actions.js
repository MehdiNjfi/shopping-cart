import { SET_PRODUCTS, ADD_TO_CART } from '../constant/actionsTypes'

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
})

export const addProduct = (productId, inventory) => ({
  type: ADD_TO_CART,
  productId,
  inventory,
})
