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

export const GET_ALL_CATEGORIES = (searchTerm) => {
  return async (dispatch) => {
    const url = `${baseUrl}/category/getAll?str=${searchTerm || ""}`;
    const res = await MakeProtectedApiCall(url, "GET", getHeaders());
    dispatch({ type: "GET_ALL_CATEGORIES", data: res?.data });
  };
};

export const GET_TOP_CATEGORIES = (searchTerm) => {
  return async (dispatch) => {
    const url = `${baseUrl}/category/getAll?limit=10&str=${searchTerm || ""}`;
    const res = await MakeProtectedApiCall(url, "GET", getHeaders());
    dispatch({ type: "GET_TOP_CATEGORIES", data: res?.data });
  };
};

export const GET_CATEGORY_BY_ID = (categoryUrl) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/category/get-byId/${categoryUrl}`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status == 200 || res?.status == 201) {
        dispatch({ type: "GET_CATEGORY_BY_ID", data: res?.data?.data });
      }
    } catch (error) {
      console.log(error);
    }

  };
};
