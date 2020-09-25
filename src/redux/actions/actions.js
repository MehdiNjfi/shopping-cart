import {
  SET_PRODUCTS,
  ADD_TO_CART,
  SET_SHOW_CART,
  SET_DISCOUNT,
} from '../constant/actionsTypes'

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
})

export const addProduct = (productId, inventory) => ({
  type: ADD_TO_CART,
  productId,
  inventory,
})

export const setShowCart = () => ({
  type: SET_SHOW_CART,
})

export const setDiscount = (discount) => ({
  type: SET_DISCOUNT,
  discount,
})
