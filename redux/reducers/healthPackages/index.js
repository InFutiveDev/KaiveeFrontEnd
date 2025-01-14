// **  Initial State
const initialState = {
  data: null,
};
const healthPackesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_HEALTH_PACKES":
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};

export default healthPackesReducer;
