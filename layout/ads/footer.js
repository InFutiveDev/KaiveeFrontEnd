import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";
import { ADD_NEW_INQUIRY_LANDING } from "redux/actions/inquiry";
import { CheckObjectValidation } from "utility/Utils";
import { WhatsappSVG } from "assets/images/SvgImage";
import { useRouter } from "next/router";

const FooterAds = ({ data }) => {
  const [sendData, setSendData] = useState({
    patient_name: "",
    mobile_number: "",
  });
  const router = useRouter();
  const [errorKeyName, setErrorKeyName] = useState("");
  const dispatch = useDispatch();
  console.log(data);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errorKeyName === name) {
      setErrorKeyName("");
    }
    setSendData({ ...sendData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkValidation = CheckObjectValidation(sendData, []);
    setErrorKeyName(checkValidation.keyname);
    if (checkValidation.isvalid) {
      const res = await dispatch(
        ADD_NEW_INQUIRY_LANDING({
          ...sendData,
          inquiry_from: data?.leads_source,
        })
      );
      if (res?.success) {
        router.push(`/ads/thank-you`); // Redirect to thank-you page
        setSendData({
          patient_name: "",
          mobile_number: "",
          url: window.location.href,
          inquiry_from: data?.leads_source,
        });
      } else {
        dispatch(LOGIN_MODAL_OPEN(true));
      }
    }
  };

  useEffect(() => {
    // Ensure 'url' in sendData matches the full current URL
    if (typeof window !== "undefined") {
      setSendData((prevData) => ({
        ...prevData,
        url: window.location.href,
      }));
    }
  }, []);
  return (
    <footer className=" bg-[#f6f0d9] body-font">
      <div className="absolute bottom-4 right-[13px]">
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919319274356&text=Hi+Kaivee+HealthCare"
          target="_black"
          className="flex items-center justify-center"
        >
          <WhatsappSVG />
        </a>
      </div>
      <div className="container  py-9 mx-auto flex flex-wrap gap-2">
        <div className="md:w-[38%]">
          <h2 className="font-[400] mb-3 sm:text-xl text-xl text-gray-900">
            Contact Us
          </h2>
          <p className="p-0 mb-1 text-gray-800  text-[20px] font-[400] font-source-pro">
            <snap className="font-semibold"> Our Main Hub :</snap> 5A/34, Tilak
            Nagar, Najafgarh <br /> Road, New Delhi–110018
          </p>
          <p className=" text-gray-800  text-[20px] font-[400] font-source-pro">
            <span className="font-semibold"> Timing :</span> 7:30am to 11:00pm
          </p>
        </div>
        <div className="md:w-[25%]">
          <h2 className="font-[400] mb-3 sm:text-xl text-xl text-gray-900">
            Connect
          </h2>
          <div className="flex mb-2 justify-start items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <div>
              <p className="mb-0 pb-0 text-[16px]">Email</p>
              <p className="font-[500] -mt-1 text-black text-[14px]">
                lft@cityxrayclinic.com
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="mb-0 text-[16px]">Phone No.</p>
              <p className="font-[500]  -mt-1 text-black text-[14px]">
                01147252098
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-start items-center">
          <div className="w-full border rounded-2xl bg-white p-3 shadow">
            <p className="font-[400] text-center mb-3 sm:text-xl text-xl text-gray-900">
              Get A Free Call Back
            </p>
            <div className="mb-2">
              <input
                type="text"
                className=" border w-full placeholder:text-gray-600 rounded-lg p-1 bg-transparent "
                name="patient_name"
                value={sendData.patient_name}
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Enter Your Name"
              />
              {errorKeyName === "patient_name" ? (
                <span className="text-danger">Name is Required</span>
              ) : null}
            </div>
            <div className="mb-2">
              <input
                type="text"
                maxLength={10}
                className=" border w-full placeholder:text-gray-600 rounded-lg p-1 bg-transparent "
                name="mobile_number"
                value={sendData?.mobile_number}
                onChange={(e) => {
                  if (/^[0-9\s]*$/.test(e.target?.value)) {
                    handleChange(e);
                  }
                }}
                placeholder="Enter Your Phone No.*"
              />
              {errorKeyName === "mobile_number" ? (
                <span className="text-danger">Please Enter a valid number</span>
              ) : null}
            </div>
            <center>
              <button
                type="submit"
                onClick={handleSubmit}
                className=" p-2 mt-2 text-[18px] rounded-md bg-[#fcc42f]"
              >
                Request a Call Back
              </button>
            </center>
          </div>
        </div>
      </div>
      <div className="container pb-3">
        <div className="flex flex-wrap justify-between pt-[24px]">
          <span className=" text-[14px] font-normal">
            © 2015 City X-Ray & Scan Clinic Pvt. Ltd. All Rights Reserved!
          </span>
          <ul className="flex flex-wrap  ">
            <span className=" text-[14px] font-normal">
              Terms & Conditions Apply
            </span>
            {/* <li className="text-[14px] font-normal px-[6px]  border-r-[1px] border-[#27272A]">
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </li>
            <li className="text-[14px] font-normal px-[6px] border-r-[1px] border-[#27272A]">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="text-[14px] font-normal px-[6px] border-r-[1px] border-[#27272A]">
              <Link href="/disclaimer">Disclaimer</Link>
            </li>
            <li className="text-[14px] font-normal px-[6px]">
              <Link href="/refund-policy">Refund & Cancellation Policy</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterAds;
