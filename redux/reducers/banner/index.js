// **  Initial State
const initialState = {
  banners: null,
};

const manageBannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_BANNERS":
      return {
        ...state,
        banners: {
          ...action.data,
        },
      };
    default:
      return state;
  }
};

export default manageBannerReducer;
