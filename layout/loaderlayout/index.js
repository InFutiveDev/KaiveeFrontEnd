// Layout.js
import SpinnerComponent from "components/spinner";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const LoaderLayout = ({ children, loading }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (router?.pathname.includes("dashboard")) {
      const token = localStorage.getItem("accessToken");
      console.log("token", token);
      if (token == null) {
        dispatch({ type: "LOGIN_MODAL_OPEN", data: true });
      }
    }
  }, [router]);
  return (
    <div>
      {children}
      {loading && (
        <div className="z-[1000] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div role="status">
            <SpinnerComponent />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoaderLayout;
