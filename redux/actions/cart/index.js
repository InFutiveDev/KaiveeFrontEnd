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

export const UPDATE_CART_QAUNTITY = (quantity) => {
  return async dispatch => {
    dispatch({ type: 'UPDATE_CART_QAUNTITY', data: quantity })
  }
}
