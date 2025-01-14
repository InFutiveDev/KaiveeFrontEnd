import { MakeProtectedApiCall } from "../../../utility/api";

// ** env backend url
const baseUrl = process.env.REACT_APP_BASE_URL;

// ** Headers
const getHeaders = () => {
  return {
    // "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
    "content-type": "application/json",
  };
};
export const GET_ALL_OUR_TEAM = (offset) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/team/getAll/?limit=12&page=${offset}`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        return { success: true, data: res.data?.data };
      } else {
        return { success: false, data: res?.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};
