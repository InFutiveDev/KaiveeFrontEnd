import { Modal } from "reactstrap";
import LoginWithOtp from "components/LoginWithOtp";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";
import { useRouter } from "next/router";

const Login = ({ type, href }) => {
  const dispatch = useDispatch();
  const loginModalOpen = useSelector((state) => state?.auth?.loginModalOpen);
  const router = useRouter();
  const setOpen = (value) => {
    dispatch(LOGIN_MODAL_OPEN(value));
  };
  return (
    <>
      {type === "home" ? (
        <div
          role="button"
          className="loginbutton"
          onClick={() => setOpen(!loginModalOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_95_3421)">
              <path
                d="M11.829 11.5609C13.4173 11.5609 14.7926 10.9912 15.9163 9.86733C17.04 8.74362 17.6097 7.36868 17.6097 5.78025C17.6097 4.19237 17.04 2.81725 15.9161 1.69317C14.7922 0.569639 13.4171 0 11.829 0C10.2406 0 8.86568 0.569639 7.74197 1.69335C6.61825 2.81707 6.04843 4.19218 6.04843 5.78025C6.04843 7.36868 6.61825 8.7438 7.74215 9.86751C8.86605 10.991 10.2412 11.5609 11.829 11.5609Z"
                fill="#52525B"
              />
              <path
                d="M21.9436 18.4547C21.9112 17.9871 21.8456 17.477 21.7491 16.9383C21.6517 16.3956 21.5263 15.8825 21.3761 15.4136C21.2211 14.9289 21.0101 14.4502 20.7494 13.9916C20.4787 13.5155 20.1609 13.1009 19.8042 12.7598C19.4312 12.403 18.9745 12.116 18.4465 11.9067C17.9202 11.6985 17.337 11.5931 16.7132 11.5931C16.4682 11.5931 16.2313 11.6936 15.7737 11.9915C15.4921 12.1752 15.1627 12.3876 14.795 12.6225C14.4806 12.8228 14.0547 13.0105 13.5286 13.1804C13.0154 13.3465 12.4943 13.4307 11.9799 13.4307C11.4656 13.4307 10.9447 13.3465 10.4309 13.1804C9.90536 13.0107 9.47946 12.823 9.16544 12.6227C8.80124 12.39 8.47165 12.1775 8.18583 11.9913C7.7288 11.6934 7.49168 11.5929 7.24668 11.5929C6.62266 11.5929 6.03966 11.6985 5.5136 11.9069C4.98589 12.1158 4.52904 12.4028 4.15569 12.76C3.79919 13.1013 3.48113 13.5157 3.21087 13.9916C2.95031 14.4502 2.73938 14.9287 2.5841 15.4137C2.43414 15.8827 2.30871 16.3956 2.2113 16.9383C2.11481 17.4762 2.04926 17.9865 2.01685 18.4553C1.98499 18.9145 1.96887 19.3911 1.96887 19.8725C1.96887 21.1253 2.36712 22.1395 3.15246 22.8875C3.92809 23.6256 4.9544 24.0001 6.20244 24.0001H17.7585C19.0066 24.0001 20.0325 23.6258 20.8083 22.8875C21.5939 22.1401 21.9921 21.1257 21.9921 19.8723C21.9919 19.3888 21.9756 18.9118 21.9436 18.4547Z"
                fill="#52525B"
              />
            </g>
            <defs>
              <clipPath id="clip0_95_3421">
                <rect width="23.9999" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span className="cartText"> Login</span>
        </div>
      ) : (
        <div
          className="cart-frame-19 cursor-pointer "
          onClick={() => setOpen(!loginModalOpen)}
        >
          <div className="cart-text-wrapper-13 ">
            <div
              className="cart-text-wrapper-13"
              style={{
                backgroundColor: "transparent",
                border: "0px solid",
              }}
              onClick={() => {
                if (loginModalOpen) {
                  router.push("/check-out");
                }
              }}
            >
              Checkout
            </div>
          </div>
        </div>
      )}
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        size="sm"
        centered
        isOpen={loginModalOpen}
        toggle={() => setOpen(!loginModalOpen)}
        className="login-model-content"
      >
        <LoginWithOtp setOpen={setOpen} redirectUrl={href || ""} />
      </Modal>
    </>
  );
};

export default Login;
