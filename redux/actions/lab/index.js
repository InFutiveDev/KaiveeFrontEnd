import { MakeProtectedApiCall } from "../../../utility/api";

// ** env backend url
const baseUrl = process.env.REACT_APP_BASE_URL;

// ** Headers
const getHeaders = () => {
  return {
    "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
    "content-type": "application/json",
  };
};

export const GET_ALL_LAB_DETAIL = () => {
  return async (dispatch) => {
    const url = `${baseUrl}/lab-detail/getAll?page=1&limit=4&str=`;
    const res = await MakeProtectedApiCall(url, "GET", getHeaders());
    dispatch({ type: "GET_ALL_LAB_DETAIL", data: res?.data });
    return res?.data;
  };
};
