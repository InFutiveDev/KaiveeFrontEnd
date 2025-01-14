// **  Initial State
const initialState = {
  logedInUser: null,
  loginModalOpen: false,
  redirect: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DETAILS":
      return {
        ...state,
        logedInUser: action.data,
      };
    case "LOGIN_MODAL_OPEN":
      return {
        ...state,
        loginModalOpen: action.data,
      };
    case "LOGIN_SUBMIT_REDIRECT":
      return {
        ...state,
        redirect: action.data,
      };
    default:
      return state;
  }
};

export default authReducer;
