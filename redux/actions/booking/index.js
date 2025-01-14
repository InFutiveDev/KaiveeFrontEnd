import { MakeProtectedApiCall } from "utility/api";

// ** Headers
const getHeaders = () => {
  return {
    "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
    "content-type": "application/json",
  };
};

const baseUrl = process.env.REACT_APP_BASE_URL;

export const ADD_USER_BOOKING = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/booking/add`;
      const res = await MakeProtectedApiCall(url, "POST", getHeaders(), data);
      if (res?.status === 200) {
        return { success: true, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_USER_BOOKINGS = (offset) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/booking/getById?collection=newest&page=${offset}&limit=5`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        dispatch({ type: "GET_USER_BOOKINGS", data: res?.data });
        return { success: true, data: res.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_REPORT_TRACKING = (phone) => {
  return async (dispatch) => {
    try {
      const url = `https://crm.cityxrayclinic.com/citycrm/Api/getBookingData?bookingMobileNo=${phone}`;
      // const url = `http://crm.cityxrayclinic.com/citycrm/Api/getBookingData?bookingMobileNo=9911990096`;
      // const url = `http://crm.cityxrayclinic.com/citycrm/Api/getBookingData?bookingMobileNo=7503200640`;
      // const url = `${baseUrl}/getBookingData?bookingMobileNo=${phone}`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        dispatch({ type: "GET_REPORT_TRACKING", data: res?.data });
        return { success: true, data: res.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_USER_BOOKINGS_STATUS = (paymentId, linkId) => {
  return async (dispatch) => {
    try {
      // const url = `${baseUrl}/booking/check-booking-status?order_id=${id}`;
      const url = `${baseUrl}/booking/check-booking-razorpay-status?payment_id=${paymentId}&payment_link_id=${linkId}`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      console.log("res--66", res);
      if (res?.status === 200) {
        // dispatch({ type: "GET_USER_BOOKINGS", data: res?.data });
        return { success: true, data: res.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};
