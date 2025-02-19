import { MakeProtectedApiCall } from "utility/api";

// ** Headers
const getHeaders = () => {
  return {
    "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
    "content-type": "application/json",
  };
};

const baseUrl = "https://pos2.flashdeal.in/kaivee-blog/";

export const GET_ALL_BLOGS = () => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}api/getBlogs`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        dispatch({ type: "GET_ALL_BLOGS", data: res?.data?.data });
        return { success: true, data: res.data?.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_ALL_AWARDS = () => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}api/getAwards`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        dispatch({ type: "GET_ALL_AWARDS", data: res?.data?.data });
        return { success: true, data: res.data?.data };
      } else {
        return { success: false, data: res?.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_ALL_AWARD = () => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}api/getAllAwards`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        dispatch({ type: "GET_ALL_AWARDS", data: res?.data?.data });
        return { success: true, data: res.data?.data };
      } else {
        return { success: false, data: res?.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_ALL_AWARDS_DETAILS = (slug) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}api/getAwardByUrl/${slug}`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        // dispatch({ type: "GET_ALL_AWARDS", data: res?.data?.data });
        return { success: true, data: res.data?.data };
      } else {
        return { success: false, data: res?.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_ALL_ACCREDITIONS = () => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}api/getAccreditions`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        // dispatch({ type: "GET_ALL_AWARDS", data: res?.data?.data });
        return { success: true, data: res.data?.data };
      } else {
        return { success: false, data: res?.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_ALL_ACCREDITIONS_DETAILS = (slug) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}api/getAccreditionByUrl/${slug}`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        // dispatch({ type: "GET_ALL_AWARDS", data: res?.data?.data });
        return { success: true, data: res.data?.data };
      } else {
        return { success: false, data: res?.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};
export const GET_ALL_MEDIA = () => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}api/getMedia`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        dispatch({ type: "GET_ALL_MEDIA", data: res?.data?.data });
        return { success: true, data: res.data?.data };
      } else {
        return { success: false, data: res?.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_ALL_PRINT_MEDIA = () => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}api/getPrintMedia`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        dispatch({ type: "GET_ALL_PRINT_MEDIA", data: res?.data?.data });
        return { success: true, data: res.data?.data };
      } else {
        return { success: false, data: res?.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};
export const GET_ALL_PRINT_MEDIA_BUTTON = (id) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}api/getPrintMediaNewsButtons/${id}`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        // dispatch({ type: "GET_ALL_PRINT_MEDIA", data: res?.data?.data });
        return { success: true, data: res.data?.data };
      } else {
        return { success: false, data: res?.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_ALL_ANNOUNCMENT = () => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}api/getAnnouncement`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        dispatch({ type: "GET_ALL_ANNOUNCMENT", data: res?.data?.data });
        return { success: true, data: res.data?.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};

export const GET_ALL_HEALTHCARE = (page = 1) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}api/getHealthcare`;
      const res = await MakeProtectedApiCall(url, "GET", getHeaders());
      if (res?.status === 200) {
        dispatch({ type: "GET_ALL_HEALTHCARE", data: res?.data });
        return { success: true, data: res.data };
      } else {
        return { success: false, data: res.data };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};
