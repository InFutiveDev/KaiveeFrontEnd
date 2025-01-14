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

export const GET_ALL_HABITS = () => {
  return async (dispatch) => {
    const url = `${baseUrl}/hebit/getAll`;
    const res = await MakeProtectedApiCall(url, "GET", getHeaders());
    dispatch({ type: "GET_ALL_HABITS", data: res?.data });
  };
};

export const GET_HABIT_BY_ID = (habitId) => {
  return async (dispatch) => {
    const url = `${baseUrl}/hebit/getbyId/${habitId}`;
    const res = await MakeProtectedApiCall(url, "GET", getHeaders());
    dispatch({ type: "GET_HABIT_BY_ID", data: res?.data });
  };
};
