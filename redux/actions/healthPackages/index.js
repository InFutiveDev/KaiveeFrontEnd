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

export const GET_ALL_HEALTH_PACKAGES = () => {
  return async (dispatch) => {
    const url = `${baseUrl}/test/getAll-package`;
    const res = await MakeProtectedApiCall(url, "GET", getHeaders());
    dispatch({ type: "GET_ALL_HEALTH_PACKES", data: res?.data });
  };
};
