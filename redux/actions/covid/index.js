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

export const GET_BY_ID_COVID = () => {
  return async (dispatch) => {
    // const url = `${baseUrl}/test/get-test-byId/658e741407522962277da838`;
    const url = `${baseUrl}/test/get-test-byId/650bd19a262063d6536c5a00`;
    const res = await MakeProtectedApiCall(url, "GET", getHeaders());
    // dispatch({ type: "GET_ALL_LAB_DETAIL", data: res?.data });
    return res?.data;
  };
};
