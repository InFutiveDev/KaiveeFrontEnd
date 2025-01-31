import { useEffect, useState } from "react";
import { CheckObjectValidation } from "utility/Utils";
import { useDispatch } from "react-redux";
import { ADD_NEW_INQUIRY } from "redux/actions/inquiry";
import { FacilitesBooksSvg } from "assets/images/SvgImage";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";
import { useRouter } from "next/router";

const InquiryForm = ({
  hideUX = false,
  leads_source = "",
  hideEmail = false,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [payload, setPayload] = useState({
    patient_name: "",
    patient_email: "",
    mobile_number: "",
    message: "",
    inquiry_from: leads_source || "city x-ray website",
    // url: window?.location?.href || "",
  });
  const [errorKeyName, setErrorKeyName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkValidation = CheckObjectValidation(payload, ["patient_email"]);
    setErrorKeyName(checkValidation.keyname);
    if (checkValidation.isvalid) {
      setLoading(true);
      const res = await dispatch(
        ADD_NEW_INQUIRY({
          ...payload,
          inquiry_from: leads_source || "city x-ray website",
        })
      );
      console.log("res", res);
      if (res?.success) {
        setPayload({
          patient_name: "",
          patient_email: "",
          mobile_number: "",
          message: "",
          inquiry_from: "city x-ray website",
          url: window.location.href,
        });
      } else {
        dispatch(LOGIN_MODAL_OPEN(true));
      }
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errorKeyName === name) {
      setErrorKeyName("");
    }
    setPayload({ ...payload, [name]: value });
  };
  useEffect(() => {
    if (window) {
      setPayload({ ...payload, url: window.location.href });
    }
  }, []);
  return (
    <div id="enquiry_form">
      <div className="shadow-md bg-white border border-[#E4E4E7] h-auto rounded-xl">
        {!hideUX && (
          <div className="facilities-enquiry rounded-xl p-2 md:p-3 m-2">
            <div className="flex justify-center gap-x-2 flex-nowrap items-center">
              <FacilitesBooksSvg />
              <p className="text-[#3F3F46]  xl:text-xl lg:text-[18px] md:text-[18px] text-[14px] font-bold font-source-pro">
              Connect with Our Health Experts
              </p>
            </div>
          </div>
        )}
        <div className="col-md-12 form-group mb-2">
          <label
            htmlFor=""
            className="col-form-label md:text-[16px] text-[14px]"
          >
           
          </label>
          <input
            value={payload?.patient_name}
            type="text"
            className="form-control rounded placeholder:font-[300] placeholder:text-[14px] shadow-md"
            name="patient_name"
            id="patient_name"
            placeholder="Your name"
            onChange={handleChange}
          />
          {errorKeyName === "patient_name" ? (
            <p className="text-red-500 text-sm">Please Enter a your name</p>
          ) : null}
          {!hideEmail && (
            <div>
              <label
                htmlFor=""
                className="col-form-label md:text-[16px] text-[14px]"
              >
                
              </label>
              <input
                value={payload?.patient_email}
                type="text"
                className="form-control rounded placeholder:font-[300] placeholder:text-[14px] shadow-md"
                name="patient_email"
                id="patient_email"
                placeholder="Your email"
                onChange={handleChange}
              />
              {errorKeyName === "patient_email" ? (
                <p className="text-red-500 text-sm">
                  Please Enter a valid Email
                </p>
              ) : null}
            </div>
          )}
          <label
            htmlFor=""
            className="col-form-label md:text-[16px] text-[14px]"
          >
            
          </label>
          <input
            value={payload?.mobile_number}
            type="text"
            className="form-control rounded placeholder:font-[300] placeholder:text-[14px] shadow-md"
            name="mobile_number"
            maxLength="10"
            placeholder="Phone"
            onChange={(e) => {
              if (/^[0-9\s]*$/.test(e.target?.value)) {
                handleChange(e);
              }
            }}
          />
          {errorKeyName === "mobile_number" ? (
            <p className="text-red-500 text-sm">Please Enter a your number</p>
          ) : null}
          <label
            htmlFor=""
            className="col-form-label md:text-[16px] text-[14px]"
          >
            
          </label>
          <textarea
            value={payload?.message}
            type="text"
            className="form-control rounded placeholder:font-[300] placeholder:text-[14px] shadow-md"
            name="message"
            id="message"
            placeholder="Message"
            onChange={handleChange}
          />
          {errorKeyName === "message" ? (
            <p className="text-red-500 text-sm">Please Enter a your Inquiry</p>
          ) : null}
        </div>
        <div className="w-full flex justify-end items-center p-2">
          <button
            type="submit"
            onClick={handleSubmit}
            id={"btnInquiry"}
            className="bg-[#D41958] text-white rounded px-3 py-1"
          >
            {loading ? "Processing..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
