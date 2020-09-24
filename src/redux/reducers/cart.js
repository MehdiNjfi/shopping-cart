import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  SET_SHOW_CART,
} from '../constant/actionsTypes'

const initialState = {
  addedIds: [],
  quantityById: {},
  showCart: false,
}

const addedIds = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Add product id to cart
      let uniqueAddedIds = [...state.addedIds, action.productId]
      // Unique arrays and remove duplicate cells
      return [...new Set(uniqueAddedIds)]
    case REMOVE_FROM_CART:
    //
    case REMOVE_ALL_FROM_CART:
    //
    default:
      return state.addedIds
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // If the product has inventory, add it to the quantity
      return action.inventory > 0
        ? {
            ...state,
            [action.productId]: state[action.productId]
              ? state[action.productId] + 1
              : 1,
          }
        : { ...state }
    case REMOVE_FROM_CART:
    //
    case REMOVE_ALL_FROM_CART:
    //
    default:
      return state
  }
}

const showCart = (state = initialState.showCart, action) => {
  switch (action.type) {
    case SET_SHOW_CART:
      return !state
    default:
      return state
  }
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        addedIds: addedIds(state, action),
        quantityById: quantityById(state.quantityById, action),
        showCart: showCart(state.showCart, action),
      }
  }
}

export default cart
