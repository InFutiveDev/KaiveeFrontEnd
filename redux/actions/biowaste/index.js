import { MakeProtectedApiCall } from "utility/api";

// ** Headers
const getHeaders = () => {
  return {
    "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
    "content-type": "application/json",
  };
};

const baseUrl = process.env.REACT_APP_BASE_URL;

export const GET_BIO_WASTE = (offset, limit = 12, month, year) => {
  return async (dispatch) => {
    try {
      let url = `${baseUrl}/biowaste/getAllList?months=${month}&year=${year}&limit=${limit}&page=${offset}`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        dispatch({ type: "GET_BIO_WASTES", data: res?.data });

        return { success: true, data: res.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};
