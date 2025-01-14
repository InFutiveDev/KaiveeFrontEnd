import axios from "axios";

// ** Toaster
import ToastContent from "components/toastContent";
import { Slide, toast } from "react-toastify";

import { AlertCircle } from "react-feather";

export const AlertError = (text) => {
  return toast.error(
    <ToastContent
      icon={<AlertCircle size={12} />}
      text={
        typeof text === "object"
          ? "Something is wrong Please  try one more time "
          : text
      }
      // title={"Fail :("}
    />,
    { transition: Slide, autoClose: 4000 }
  );
};

const AlertSuccess = (text) => {
  return toast.success(<ToastContent text={text} title="Success !" />, {
    transition: Slide,
    autoClose: 2000,
  });
};

// ** MakeProtectedApiCall( "url " , "request method " , "headers " , "payload " )
export const MakeProtectedApiCall = async (
  apiPath,
  method,
  header,
  bodyData = {}
) => {
  switch (method.toLowerCase()) {
    case "get":
      try {
        const res = await axios.get(apiPath, { headers: { ...header } });
        return res;
      } catch (error) {
        const msg = error.response?.data?.msg;

        toast.clearWaitingQueue();
        if (error.response?.status === 401) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        }
        // else {
        //   AlertError(msg);
        // }
        return { status: error.response?.status };
      }
      break;
    case "post":
      try {
        const res = await axios.post(apiPath, bodyData, {
          headers: { ...header },
        });
        console.log("res", res);
        AlertSuccess(res.data?.data?.msg || res.data.msg);
        return res;
      } catch (error) {
        const msg = error.response?.data?.msg;
        toast.clearWaitingQueue();
        if (error.response?.status === 401) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        } else {
          AlertError(msg);
        }
        return { status: error.response?.status };
      }
      break;
    case "put":
      try {
        const res = await axios.put(apiPath, bodyData, {
          headers: { ...header },
        });
        AlertSuccess(res.data?.data?.msg || res.data.msg);
        return res;
      } catch (error) {
        const msg = error.response?.data?.msg;
        toast.clearWaitingQueue();
        if (error.response?.status === 401) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        } else {
          AlertError(msg);
        }
        return { status: error.response?.status };
      }
      break;
    case "patch":
      try {
        const res = await axios.patch(apiPath, bodyData, {
          headers: { ...header },
        });
        AlertSuccess(res.data?.data?.msg || res.data.msg);
        return res;
      } catch (error) {
        const msg = error.response?.data?.msg;

        toast.clearWaitingQueue();
        if (error.response?.status === 401) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        } else {
          AlertError(msg);
        }
        return { status: error.response?.status };
      }
      break;
    case "delete":
      try {
        const res = await axios.delete(apiPath, {
          headers: header,
          data: bodyData,
        });
        AlertSuccess(res.data?.data?.msg || res.data.msg);
        return res;
      } catch (error) {
        const msg = error.response?.data?.msg;

        toast.clearWaitingQueue();
        if (error.response?.status === 401) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        } else {
          AlertError(msg);
        }
        return { status: error.response?.status };
      }
      break;
    default:
      break;
  }
};
