import { MakeProtectedApiCall } from "utility/api";

// ** Headers
const getHeaders = () => {
  return {
    "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
    "content-type": "application/json",
  };
};

const baseUrl = process.env.REACT_APP_BASE_URL;

export const GET_BOOK_A_TEST = (offset, limit = 12, query) => {
  return async (dispatch) => {
    try {
      let url = `${baseUrl}/test/getAll?page=${offset}&limit=${limit}${query}`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        dispatch({ type: "GET_BOOK_A_TEST", data: res?.data });
        return { success: true, data: res.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};


export const GET_BYID_BOOK_A_TEST = (id) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/test/get-test-byId/${id}`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        dispatch({ type: "GET_BY_IDBOOK_A_TEST", data: res?.data });
        return { success: true, data: res.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const GET_RELETED_BOOK_A_TEST = (id) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/test/bycategory/${id}?limit=5&page=1`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        dispatch({ type: "GET_RELETED_BOOK_A_TEST", data: res?.data });
        return { success: true, data: res.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};
