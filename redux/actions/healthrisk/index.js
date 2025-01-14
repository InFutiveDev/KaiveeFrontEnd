import { FETCH_HEALTHRISK_REQUEST,FETCH_HEALTHRISK_SUCCESS,FETCH_HEALTHRISK_FAILURE, FETCH_HEALTHRISK_BY_ID_SUCCESS, FETCH_HEALTHRISK_BY_ID_FAILURE, FETCH_HEALTHRISK_BY_ID_REQUEST } from "redux/reducers/constant"
import { MakeProtectedApiCall } from "../../../utility/api"

// ** env backend url 
const baseUrl = process.env.REACT_APP_BASE_URL

// ** Headers
const getHeaders = () => {
  return {
    "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
    "content-type": "application/json"
  }
}

export const GET_ALL_HEALTHRISK = () => {
  return async dispatch => {
    dispatch({ type: FETCH_HEALTHRISK_REQUEST });
    const url = `${baseUrl}/healthRisk/getAll?page=1&limit=10&str=`
     await MakeProtectedApiCall(url, 'GET', getHeaders())
      .then((response) => {
        dispatch({ type: FETCH_HEALTHRISK_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_HEALTHRISK_FAILURE, payload: error.message });
      });
  }
}

export const GET_HEALTHRISK_BY_ID = (habitId) => {
  return async dispatch => {
    dispatch({ type: FETCH_HEALTHRISK_BY_ID_REQUEST });
    const url = `${baseUrl}/healthRisk/getbyId/${habitId}`
    await MakeProtectedApiCall(url, 'GET', getHeaders())
    .then((response) => {
      dispatch({ type: FETCH_HEALTHRISK_BY_ID_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_HEALTHRISK_BY_ID_FAILURE, payload: error.message });
    });
  }
}
