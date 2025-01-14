import { MakeProtectedApiCall } from "utility/api"

// ** Headers
const getHeaders = () => {
  return {
    "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
    "content-type": "application/json"
  }
}

const baseUrl = process.env.REACT_APP_BASE_URL

export const GET_ALL_BANNERS = data => {
  return async dispatch => {
    try {
      const url = `${baseUrl}/banner/getAll`
      const res = await MakeProtectedApiCall(url, 'GET', getHeaders(), data)
      if (res?.status === 200) {
        dispatch({ type: 'GET_ALL_BANNERS', data: res?.data?.data })
        return { success: true, data: res.data?.data }
      } else {
        return { success: false, data: res.data }
      }
    } catch (error) {
      console.log((error.response.data).replace(/\\/g, ""))
    }
  }
}
