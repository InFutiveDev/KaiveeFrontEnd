// **  Initial State
const initialState = {
  userAddresses: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_ADDRESSES':
      return {
        ...state,
        userAddresses: action.data
      }
    default:
      return state
  }
}

export default authReducer
