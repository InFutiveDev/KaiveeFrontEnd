// **  Initial State
const initialState = {
  data: null,
  byidData: null,
  reletedData: null,
};

const bookTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOOK_A_TEST":
      return {
        ...state,
        data: action.data,
      };
    case "GET_BY_IDBOOK_A_TEST":
      return {
        ...state,
        byidData: action.data,
      };
    case "GET_RELETED_BOOK_A_TEST":
      return {
        ...state,
        reletedData: action.data,
      };
    default:
      return state;
  }
};

export default bookTestReducer;
