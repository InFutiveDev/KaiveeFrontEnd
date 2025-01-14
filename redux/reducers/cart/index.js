// **  Initial State
const initialState = {
  cartQuantity: 0,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CART_QAUNTITY':
      return {
        ...state,
        cartQuantity: action.data
      }
    default:
      return state
  }
}

export default authReducer
