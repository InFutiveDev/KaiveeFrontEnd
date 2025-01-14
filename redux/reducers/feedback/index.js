// **  Initial State
const initialState = {
  faqsList: 0,
}

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FAQ_S':
      return {
        ...state,
        faqsList: action.data
      }
    default:
      return state
  }
}

export default feedbackReducer
