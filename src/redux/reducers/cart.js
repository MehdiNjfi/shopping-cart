import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
} from '../constant/actionsTypes'

const initialState = {
  addedIds: [],
  quantityById: {},
}

const addedIds = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    //
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
    //
    case REMOVE_FROM_CART:
    //
    case REMOVE_ALL_FROM_CART:
    //
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
      }
  }
}

export default cart
