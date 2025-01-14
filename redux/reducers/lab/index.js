// **  Initial State
const initialState = {
  data: null,
};
const labDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_LAB_DETAIL":
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};

export default labDetailsReducer;
