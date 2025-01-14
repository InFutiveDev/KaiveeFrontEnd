// **  Initial State
const initialState = {
  habits: null,
  habitInfo: null,
}

const manageHabitReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_HABITS':
      return {
        ...state,
        habits: action.data
      }
    case 'GET_HABIT_BY_ID':
      return {
        ...state,
        habitInfo: action.data
      }
    default:
      return state
  }
}

export default manageHabitReducer
