import {
  SET_PRODUCTS,
  ADD_TO_CART,
  SET_SHOW_CART,
  SET_DISCOUNT,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
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

export const removeFromCart = (productId, quantity) => ({
  type: REMOVE_FROM_CART,
  productId,
  quantity,
})

export const removeAllFromCart = (productId, removeCount) => ({
  type: REMOVE_ALL_FROM_CART,
  productId,
  removeCount,
})
