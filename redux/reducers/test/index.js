// **  Initial State
const initialState = {
  tests: null,
  testInfo: null,
  testsByCategory: null,
  testsByHabit: null,
  testsSuggestions: null,
  getfeaturedbyId: null
}

const manageTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_TEST':
      return {
        ...state,
        tests: action.data
      }
    case 'GET_TEST_BY_ID':
      return {
        ...state,
        testInfo: action.data
      }
    case 'GET_TEST_BY_CATEGORY':
      return {
        ...state,
        testsByCategory: action.data
      }
    case 'GET_FEATURED_BY_ID':
      return {
        ...state,
        getfeaturedbyId: action.data
      }
    case 'GET_TEST_BY_HABIT':
      return {
        ...state,
        testsByHabit: action.data
      }
    case 'GET_ALL_TESTS_SUGGESTION':
      return {
        ...state,
        testsSuggestions: action.data
      }
    default:
      return state
  }
}

export default manageTestReducer
