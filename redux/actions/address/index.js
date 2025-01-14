import { MakeProtectedApiCall } from "utility/api";

// ** Headers
const getHeaders = () => {
  return {
    "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
    "content-type": "application/json",
  };
};

const baseUrl = process.env.REACT_APP_BASE_URL;

export const ADD_USER_ADDRESS = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/address/add`;
      const res = await MakeProtectedApiCall(url, "POST", getHeaders(), data);
      if (res?.status === 200) {
        return { success: true, data: res };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const EDTI_USER_ADDRESS = (data, id) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/address/update/${id}`;
      const res = await MakeProtectedApiCall(url, "PUT", getHeaders(), data);
      if (res?.status === 200) {
        return { success: true, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_USER_ADDRESSES = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/address/getById`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders(), data);
      if (res?.status === 200) {
        dispatch({ type: "GET_USER_ADDRESSES", data: res?.data });
        return { success: true, data: res.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const DELETE_USER_ADDRESS = (addressId) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/address/delete/${addressId}`;
      const res = await MakeProtectedApiCall(url, "DELETE", getHeaders());
      if (res?.status === 200) {
        return { success: true, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};
