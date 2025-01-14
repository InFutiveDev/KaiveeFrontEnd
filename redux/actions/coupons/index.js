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

export const GET_ALL_COUPONS = (offset, searchTerm) => {
  return async (dispatch) => {
    const url = `${baseUrl}/coupon/getAll?page=${offset}&limit=20&str=${
      searchTerm || ""
    }`;
    const res = await MakeProtectedApiCall(url, "GET", getHeaders());
    dispatch({ type: "GET_ALL_COUPONS", data: res?.data });
    return { success: res?.data?.data?.couponData?.length > 0 ? true : false };
  };
};

export const APPLY_COUPON = (data) => {
  return async (dispatch) => {
    const url = `${baseUrl}/coupon/applycoupon`;
    const res = await MakeProtectedApiCall(url, "POST", getHeaders(), data);
    return res?.data?.data
  };
};
