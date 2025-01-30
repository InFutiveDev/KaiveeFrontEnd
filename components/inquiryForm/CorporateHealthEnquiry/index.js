import { useEffect, useState } from "react";
import { CheckObjectValidation } from "utility/Utils";
import { useDispatch } from "react-redux";
import { ADD_NEW_CORPORATE, ADD_NEW_INQUIRY } from "redux/actions/inquiry";
import { FacilitesBooksSvg } from "assets/images/SvgImage";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";
import { useRouter } from "next/router";

const CorporateHealthEnquiry = ({ hideUX = false, leads_source = "" }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [payload, setPayload] = useState({
    your_name: "",
    company_name: "",
    your_email: "",
    mobile_number: "",
    select_enquiry: "",
  });
  const [errorKeyName, setErrorKeyName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkValidation = CheckObjectValidation(payload, []);
    setErrorKeyName(checkValidation.keyname);
    if (checkValidation.isvalid) {
      setLoading(true);
      const res = await dispatch(
        ADD_NEW_CORPORATE({
          ...payload,
        })
      );
      if (res?.success) {
        setPayload({
          your_name: "",
          company_name: "",
          your_email: "",
          mobile_number: "",
          select_enquiry: "",
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
  const Select_Enquiry = [
    "Corporate Health Checkup",
    "Pre-employment Checkup",
    "Annual health checkup",
    "Onsite Corporate Health Camps",
    "Clinical Trial",
    "Occupation Health Services",
    "Drug & Alcohal Screening",
    "Medical Testing for Visa (Immigrants/Worker)",
    "Other",
  ];
  return (
    <div>
      <div className="shadow-md bg-white border border-[#E4E4E7] h-auto rounded-xl">
        {!hideUX && (
          <div className="facilities-enquiry rounded-xl p-2 md:p-3 m-2">
            <div className="flex justify-center gap-x-2 flex-nowrap items-center">
              <FacilitesBooksSvg />
              <p className="text-[#3F3F46]  xl:text-xl lg:text-[18px] md:text-[18px] text-[14px] font-bold font-source-pro">
                Get In Touch with Our Health Expert
              </p>
            </div>
          </div>
        )}
        <div className="col-md-12 form-group mb-2">
          <label
            htmlFor=""
            className="col-form-label md:text-[16px] text-[14px]"
          >
            Your Name *
          </label>
          <input
            value={payload?.your_name}
            type="text"
            className="form-control rounded placeholder:font-[300] placeholder:text-[14px]"
            name="your_name"
            id="your_name"
            placeholder="Your name"
            onChange={handleChange}
          />
          {errorKeyName === "your_name" ? (
            <p className="text-red-500 text-sm">Please Enter a your name</p>
          ) : null}

          <label
            htmlFor=""
            className="col-form-label md:text-[16px] text-[14px]"
          >
            Company Name *
          </label>
          <input
            value={payload?.company_name}
            type="text"
            className="form-control rounded placeholder:font-[300] placeholder:text-[14px]"
            name="company_name"
            id="company_name"
            placeholder="Company Name"
            onChange={handleChange}
          />
          {errorKeyName === "company_name" ? (
            <p className="text-red-500 text-sm">Please Enter a company name</p>
          ) : null}

          <div>
            <label
              htmlFor=""
              className="col-form-label md:text-[16px] text-[14px]"
            >
              Email *
            </label>
            <input
              value={payload?.your_email}
              type="email"
              className="form-control rounded placeholder:font-[300] placeholder:text-[14px]"
              name="your_email"
              id="your_email"
              placeholder="Your email"
              onChange={handleChange}
            />
            {errorKeyName === "your_email" ? (
              <p className="text-red-500 text-sm">Please Enter a valid Email</p>
            ) : null}
          </div>

          <label
            htmlFor=""
            className="col-form-label md:text-[16px] text-[14px]"
          >
            Phone *
          </label>
          <input
            value={payload?.mobile_number}
            type="text"
            className="form-control rounded placeholder:font-[300] placeholder:text-[14px]"
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
            Select Enquiry *
          </label>
          <select
            name="select_enquiry"
            value={payload?.select_enquiry}
            onChange={handleChange}
            className=" text-base border border-[#E5E7EB] bg-white rounded-[8px] w-full p-2"
          >
            <option>Select Enquiry</option>
            {Select_Enquiry.map((item, index) => (
              <option key={index} value={item} className="overflow-hidden">
                {item}
              </option>
            ))}
          </select>
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

export default CorporateHealthEnquiry;
