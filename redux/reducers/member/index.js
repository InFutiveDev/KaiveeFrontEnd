// **  Initial State
const initialState = {
  userFamilyMembers: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_FAMILY_MEMBERS':
      return {
        ...state,
        userFamilyMembers: action.data
      }
    default:
      return state
  }
}

export default authReducer
