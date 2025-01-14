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

export const GET_ALL_TEST = (offset, searchTerm) => {
  return async (dispatch) => {
    const url = `${baseUrl}/test/getAll?page=${offset}&limit=10&str=${
      searchTerm || ""
    }`;
    const res = await MakeProtectedApiCall(url, "GET", getHeaders());
    dispatch({ type: "GET_ALL_TEST", data: res?.data });
  };
};

export const GET_TEST_BY_ID = (testId) => {
  return async (dispatch) => {
    const url = `${baseUrl}/test/get-test-byId/${testId}`;
    const res = await MakeProtectedApiCall(url, "GET", getHeaders());
    dispatch({ type: "GET_TEST_BY_ID", data: res?.data });
    return { success: true, data: res.data };
  };
};

export const GET_TEST_BY_CATEGORY = (categoryId, offset, str) => {
  return async (dispatch) => {
    const url = `${baseUrl}/test/bycategory/${categoryId}?limit=9&page=${offset}${
      str && `&str=${str}`
    }`;
    const res = await MakeProtectedApiCall(url, "GET", getHeaders());
    dispatch({ type: "GET_TEST_BY_CATEGORY", data: res?.data });
  };
};

export const GET_FEATURED_BY_ID = (categoryId, offset, str) => {
  return async (dispatch) => {
    const url = `${baseUrl}/test/get-featuredtest-by-Category/${categoryId}?limit=9&page=${offset}${
      str && `&str=${str}`
    }`;
    const res = await MakeProtectedApiCall(url, "GET", getHeaders());
    dispatch({ type: "GET_FEATURED_BY_ID", data: res?.data });
  };
};

export const GET_TEST_BY_HABIT = (habitId, offset) => {
  return async (dispatch) => {
    const url = `${baseUrl}/test/getTestByHebbitId/${habitId}?limit=10&page=${offset}`;
    const res = await MakeProtectedApiCall(url, "GET", getHeaders());
    dispatch({ type: "GET_TEST_BY_HABIT", data: res?.data });
  };
};

export const GET_ALL_TESTS_SUGGESTION = (offset, searchTerm) => {
  return async (dispatch) => {
    const url = `${baseUrl}/test/getAll?page=${offset}&limit=10&str=${
      searchTerm || ""
    }`;
    const res = await MakeProtectedApiCall(url, "GET", getHeaders());
    dispatch({ type: "GET_ALL_TESTS_SUGGESTION", data: res?.data });
  };
};
