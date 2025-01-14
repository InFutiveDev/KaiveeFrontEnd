import { MakeProtectedApiCall } from "utility/api";

// ** Headers
const getHeaders = () => {
  return {
    "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
    "content-type": "application/json",
  };
};

const baseUrl = process.env.REACT_APP_BASE_URL;

export const ADD_USER_MEMBER_CARD = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/card/add`;
      const res = await MakeProtectedApiCall(url, "POST", getHeaders(), data);
      if (res?.status === 200) {
        return { success: true, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};
