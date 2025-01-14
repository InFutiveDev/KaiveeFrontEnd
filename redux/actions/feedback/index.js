import { MakeProtectedApiCall } from "utility/api";

// ** Headers
const getHeaders = () => {
  return {
    "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
    "content-type": "application/json",
  };
};

const baseUrl = process.env.REACT_APP_BASE_URL;

export const ADD_FEEDBACK = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/feedback/add`;
      const res = await MakeProtectedApiCall(url, "POST", getHeaders(), data);
      if (res?.status === 200) {
        return { success: true, data: res };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const ADD_FEEDBACK_NEW = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/feedback/new/add`;
      const res = await MakeProtectedApiCall(url, "POST", getHeaders(), data);
      if (res?.status === 200) {
        return { success: true, data: res };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};
export const GET_FAQ_S = (id) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/faq/getBy-testID/${id}`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        dispatch({ type: "GET_FAQ_S", data: res?.data?.data });
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};
