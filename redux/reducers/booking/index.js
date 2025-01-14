// **  Initial State
const initialState = {
  userBookings: null,
};

const authBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_BOOKINGS":
      return {
        ...state,
        userBookings: action.data,
      };
    case "GET_REPORT_TRACKING":
      return {
        ...state,
        getReportTracking: action.data,
      };

    default:
      return state;
  }
};

export default authBookingReducer;
