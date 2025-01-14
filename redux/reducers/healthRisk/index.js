import {
  FETCH_HEALTHRISK_REQUEST,
  FETCH_HEALTHRISK_FAILURE,
  FETCH_HEALTHRISK_SUCCESS,
  FETCH_HEALTHRISK_BY_ID_SUCCESS,
  FETCH_HEALTHRISK_BY_ID_FAILURE,
  FETCH_HEALTHRISK_BY_ID_REQUEST,
} from "../constant";

const initialState = {
  loading: false,
  healthRisk: [],
  error: null,
  healthById: null,
};

const manageHealthRisk = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEALTHRISK_SUCCESS:
      return {
        ...state,
        loading: false,
        healthRisk: action.payload.data,
      };
    case FETCH_HEALTHRISK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_HEALTHRISK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HEALTHRISK_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        healthById: action.payload.data,
      };
    case FETCH_HEALTHRISK_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_HEALTHRISK_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default manageHealthRisk;
