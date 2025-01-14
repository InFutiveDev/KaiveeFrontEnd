import { MakeProtectedApiCall } from "utility/api";

// ** Headers
const getHeaders = () => {
  return {
    "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
    "content-type": "application/json",
  };
};

const baseUrl = process.env.REACT_APP_BASE_URL;
// ** Handle User Login
export const HANDLE_LOGIN = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/user/auth/login`;
      const res = await MakeProtectedApiCall(
        url,
        "POST",
        { "content-type": "application/json" },
        data
      );
      if (res?.status === 200) {
        dispatch({ type: "HANDLE_LOGIN", data: res.data.data });
        return { success: true, data: res.data };
      }
      return { success: false };
    } catch (error) {
      console.log(error);
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

// ** Create Account
export const REGISTER_NEW_USER = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/user/auth/register/email`;
      const res = await MakeProtectedApiCall(
        url,
        "POST",
        { "content-type": "application/json" },
        data
      );
      if (res?.status === 201) {
        return { success: true, data: res.data };
      }
      return { success: false };
    } catch (error) {
      console.log((error?.response?.data).replace(/\\/g, ""));
    }
  };
};

export const FORGOT_PASSWORD = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/user/auth/forgot-password`;
      const res = await MakeProtectedApiCall(
        url,
        "POST",
        { "content-type": "application/json" },
        data
      );
      if (res?.status === 200) {
        dispatch({ type: "FORGOT_PASSWORD", data: res.data });
        return { success: true, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const EMAIL_VERIFY = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/user/auth/email-verify`;
      const res = await MakeProtectedApiCall(url, "POST", getHeaders(), data);
      if (res?.status === 200) {
        return { success: true, data: res.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};
export const EMAIL_RE_VERIFY = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/user/auth/resend-email`;
      const res = await MakeProtectedApiCall(url, "POST", getHeaders(), data);
      if (res?.status === 200) {
        return { success: true, data: res.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_USER_DETAILS = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/userdata/getById`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders(), data);
      if (res?.status === 200) {
        dispatch({ type: "GET_USER_DETAILS", data: res?.data });
        return { success: true, data: res.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const RESET_PASSWORD = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/user/auth/reset-password`;
      const res = await MakeProtectedApiCall(
        url,
        "POST",
        { "content-type": "application/json" },
        data
      );
      if (res?.status === 200) {
        dispatch({ type: "RESET_PASSWORD", data: res.data });
        return { success: true, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const UPDATE_USER_DETAILS = (data) => {
  return async (dispatch) => {
    try {
      let getHeadersForFile = () => {
        return {
          "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
          "Content-type": "multipart/form-date",
          Accept: "application/json",
        };
      };
      const url = `${baseUrl}/userdata/update`;
      const formData = new FormData();
      Object.keys(data).forEach((key) => formData.append(key, data[key]));
      const res = await MakeProtectedApiCall(
        url,
        "PUT",
        getHeadersForFile(),
        formData
      );
      if (res?.status === 200) {
        return { success: true, data: res.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_DATA_BY_ID_FOR_LANDING_PAGE = (id) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/landingData/getById/${id}`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        return { success: true, data: res.data?.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_DATA_BY_ID_FAQ = (id) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/faq/getBy-testID/${id}`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      console.log("resppppp>", res);
      if (res?.status === 200) {
        return { success: true, data: res.data?.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};
export const POST_SUBSCRIBER = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/subscriber/add`;

      const res = await MakeProtectedApiCall(
        url,
        "POST",
        { "content-type": "application/json" },
        data
      );
      if (res?.status === 200) {
        return { success: true, data: res.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};
export const LOGIN_MODAL_OPEN = (data) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_MODAL_OPEN", data: data });
  };
};
export const LOGIN_SUBMIT_REDIRECT = (data) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_SUBMIT_REDIRECT", data: data });
  };
};
