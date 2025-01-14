// **  Initial State
const initialState = {
  coupons: null,
}

const manageCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_COUPONS':
      return {
        ...state,
        coupons: action.data
      }
    default:
      return state
  }
}

export default manageCategoryReducer
