import { AlertError, MakeProtectedApiCall } from "../../../utility/api";

// ** env backend url
const baseUrl = process.env.REACT_APP_BASE_URL;

// ** Headers
const getHeaders = () => {
  return {
    "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
    "content-type": "application/json",
  };
};

export const ADD_NEW_INQUIRY = (data) => {
  return async (dispatch) => {
    const url = `${baseUrl}/inquiry/add`;
    const res = await MakeProtectedApiCall(url, "POST", getHeaders(), data);
    if (res?.status === 200) {
      return { success: true, status: 200, data: res.data };
    }
  };
};

export const ADD_NEW_INQUIRY_LANDING = (data) => {
  return async (dispatch) => {
    const url = `${baseUrl}/landingInquiry/add`;
    const res = await MakeProtectedApiCall(
      url,
      "POST",
      { "content-type": "application/json" },
      data
    );
    if (res?.status === 200) {
      return { success: true, status: 200, data: res.data };
    }
  };
};

export const ADD_NEW_CORPORATE = (data) => {
  return async (dispatch) => {
    const url = `${baseUrl}/corporate/add-corporate`;
    const res = await MakeProtectedApiCall(url, "POST", getHeaders(), data);
    if (res?.status === 200) {
      return { success: true, status: 200, data: res.data };
    }
  };
};

export const ADD_REASEARCH_FORM = (data) => {
  return async (dispatch) => {
    const url = `${baseUrl}/reasearch/add-form`;
    const res = await MakeProtectedApiCall(url, "POST", getHeaders(), data);
    if (res?.status === 200) {
      return { success: true, status: 200, data: res.data };
    }
  };
};
