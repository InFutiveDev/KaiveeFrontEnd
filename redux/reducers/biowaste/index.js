// **  Initial State
const initialState = {
  bioWaste: null,
};

const biowasteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BIO_WASTES":
      return {
        ...state,
        bioWaste: action.data,
      };

    default:
      return state;
  }
};

export default biowasteReducer;
