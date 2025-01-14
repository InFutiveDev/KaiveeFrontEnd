import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DoctorSvg from "assets/images/login/Doctors-pana 1.png";
import { GET_USER_DETAILS } from "redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import CancelIcon from "assets/images/login/cancel (2) 1.png";

const LoginWithOtp = ({ setOpen, redirectUrl = "" }) => {
  const [otpnumber, setotpnumber] = useState("");
  const [error, seterror] = useState("");
  const [invalidOTPError, setInvalidOTPError] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const redirectURL = useSelector((state) => state?.auth?.redirect);

  const [otpsend, setotpsend] = useState(false);
  const [counter, setcounter] = useState(30);
  const router = useRouter();

  const dispatch = useDispatch();

  const mobilenumberchange = (e) => {
    if (/^(\+\d{1,3}[- ]?)?\d{10}$/.test(e.target.value)) {
      seterror("");
      setmobilenumber(e.target.value);
    } else {
      seterror("Please Enter Valid Number");
    }
  };

  const sendotp = () => {
    if (mobilenumber) {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/user/auth/send-otp`,
          { mobile: mobilenumber },
          { "content-type": "application/json" }
        )
        .then((res) => {
          if (res?.status === 200) {
            setotpsend(true);
            setcounter(30);
          }
        })
        .catch((e) => seterror("Somthing went wrong!"));
    } else {
      seterror("Please Enter Number");
    }
  };

  const verify = () => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/user/auth/register/OTP`,
        { mobile: mobilenumber, otp: otpnumber },
        { "content-type": "application/json" }
      )
      .then((res) => {
        if (res?.status === 200) {
          localStorage.setItem("accessToken", res.data?.data.accessToken);
          localStorage.setItem("refreshToken", res.data?.data.refreshToken);
          if (redirectUrl) {
            router.push(redirectUrl);
          } else if (redirectURL) {
            router.push(redirectURL);
          }

          dispatch(GET_USER_DETAILS());
          const btn = document.getElementById("btnInquiry");
          if (btn) {
            btn.click();
          }
          setOpen(false);
        }
      })
      .catch((e) => setInvalidOTPError("Invalid OTP!"));
  };
  const handleEditNumber = () => {
    setotpsend(false);
    setcounter(30);
  };
  useEffect(() => {
    if (!otpsend) {
      setcounter(30);
    }
    if (otpsend) {
      setTimeout(() => {
        if (counter <= 0) {
          setcounter(String(0).padStart(2, "0"));
        } else {
          setcounter(String(counter - 1).padStart(2, "0"));
        }
      }, 1000);
    }
  });

  return (
    <>
      <div className="p-[20px] relative">
        <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 items-center">
          <div>
            <div>
              <Image
                src={DoctorSvg.src}
                loading="eager"
                width={300}
                height={300}
              />
            </div>
            {/* <p className="mt-2 text-sm font-semibold text-black font-source-pro ">
              Our Experts Make Your Health Batter
            </p> */}
          </div>
          <div>
            <p className="text-black text-lg font-semibold font-source-pro">
              Sign in
            </p>
            {!otpsend && (
              <p className="text-black text-base mt-[10px] font-poppins">
                View your reports and upcoming health checkups at one place
              </p>
            )}
            {!otpsend ? (
              <div className="mt-[10px]">
                <div className="form-group">
                  <label htmlFor="" className="text-lg font-source-pro">
                    Mobile Number
                  </label>

                  <div className="mt-[2px]">
                    <input
                      type="number"
                      name="mobile"
                      id="mobile"
                      disabled={otpsend}
                      required
                      className="border-b-2 border-[#FCC42C] placeholder-[#FCC42C] px-[16px] w-full py-[14px] focus:outline-none !text-base font-poppins"
                      placeholder="Enter Mobile Number"
                      onChange={mobilenumberchange}
                    />
                  </div>
                  <span className="text-danger" style={{ fontSize: "14px" }}>
                    {error}
                  </span>
                </div>
                <div className="mt-[25px]">
                  <button
                    onClick={sendotp}
                    className=" bg-[#FCC42C] text-white rounded-xl px-[30px] py-[12px] text-base font-poppins"
                  >
                    Proceed
                  </button>
                </div>
                <p className="text-secondary text-[16px] mt-[24px] font-poppins">
                  By proceeding, you agree to City X-Ray{" "}
                  <a href="https://www.cityxrayclinic.com/terms-conditions">
                    <b>T&C</b>
                  </a>{" "}
                  and{" "}
                  <a href="https://www.cityxrayclinic.com/privacy-policy">
                    <b>Privacy Policy</b>
                  </a>
                </p>
              </div>
            ) : (
              <div className="mt-[10px]">
                <div className="form-group">
                  <label htmlFor="userName" className="font-medium">
                    Enter Mobile Number
                  </label>
                  <div className="mt-[6px] relative">
                    <input
                      type="number"
                      name="mobile"
                      id="mobile"
                      value={mobilenumber}
                      disabled={otpsend}
                      className="border-b-2 border-[#FCC42C] placeholder-[#FCC42C] px-[16px] w-full py-[14px] focus:outline-none !text-base font-poppins"
                      placeholder="Enter Mobile Number"
                      required
                    />
                    <div
                      className="absolute right-3 top-2 cursor-pointer"
                      onClick={() => handleEditNumber()}
                    >
                      <CiEdit className="text-[#ffc936] font-semibold text-3xl" />
                    </div>
                  </div>
                  {error ? (
                    <span className="text-danger" style={{ fontSize: "14px" }}>
                      {error}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group w-full">
                  <label htmlFor="otp" className="font-medium">
                    Enter OTP
                  </label>
                  <div className="mt-[6px] flex justify-center w-full ">
                    <OtpInput
                      value={otpnumber}
                      name="otp"
                      onChange={(e) => {
                        setotpnumber(e);
                      }}
                      numInputs={6}
                      isInputNum={true}
                      inputType="number"
                      inputStyle={
                        "!w-[2rem] border-b-2 mx-1 border-[#FCC42C] otp-input test"
                      }
                      renderSeparator={<span> </span>}
                      renderInput={(props) => (
                        <input type="number" {...props} />
                      )}
                    />
                  </div>
                  {invalidOTPError ? (
                    <span className="text-danger" style={{ fontSize: "14px" }}>
                      {invalidOTPError}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "20px",
                    justifyContent: "space-between",
                    width: "95%",
                  }}
                >
                  <p className="login-text">I don't receive a code ?</p>
                  {counter <= 0 ? (
                    // <div>
                    <div className="">
                      <button
                        onClick={sendotp}
                        className=" login-text text-orange rounded px-[0px] py-[0px]"
                      >
                        Resend OTP
                      </button>
                    </div>
                  ) : (
                    // </div>
                    <span
                      style={{
                        color: "#FF9800",
                        fontSize: "25px",
                        fontWeight: "600",
                      }}
                    >
                      00:{counter}
                    </span>
                  )}
                </div>

                <div className="">
                  <button
                    onClick={verify}
                    className=" bg-orange text-white rounded px-[30px] py-[6px]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="absolute -top-2 right-0 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <Image src={CancelIcon} width={20} height={20} alt="cancel" />
        </div>
      </div>
    </>
  );
};

export default LoginWithOtp;
