import { useEffect, useState } from "react";
import { CheckObjectValidation } from "utility/Utils";
import { useDispatch } from "react-redux";
import { ADD_NEW_INQUIRY } from "redux/actions/inquiry";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";
import { useRouter } from "next/router";

const InquiryForm = ({ leads_source = "" }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [payload, setPayload] = useState({
    patient_name: "",
    patient_email: "",
    mobile_number: "",
    location: "",
    option: "",
    message: "",
    inquiry_from: leads_source || "city x-ray website",
  });

  const [errorKeyName, setErrorKeyName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkValidation = CheckObjectValidation(payload, ["patient_email"]);
    setErrorKeyName(checkValidation.keyname);
    if (checkValidation.isvalid) {
      setLoading(true);
      const res = await dispatch(ADD_NEW_INQUIRY(payload));
      if (res?.success) {
        setPayload({
          patient_name: "",
          patient_email: "",
          mobile_number: "",
          message: "",
          inquiry_from: "city x-ray website",
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

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        <span>☰</span> Enquire Now
      </h2>

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <label htmlFor="patient_name" className="block text-gray-700 ">
            Full Name *
          </label>
        <input
          type="text"
          name="patient_name"
          value={payload.patient_name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
        {errorKeyName === "patient_name" && (
          <p className="text-red-500 text-sm">Please enter your name</p>
        )}
        <label htmlFor="patient_email" className="block text-gray-700">
            Email *
          </label>
        <input
          type="email"
          name="patient_email"
          value={payload.patient_email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
        {errorKeyName === "patient_email" && (
          <p className="text-red-500 text-sm">Please enter a valid email</p>
        )}
        <label htmlFor="mobile_number" className="block text-gray-700 ">
            Phone *
          </label>
        <input
          type="text"
          name="mobile_number"
          value={payload.mobile_number}
          onChange={(e) => {
            if (/^[0-9\s]*$/.test(e.target.value)) {
              handleChange(e);
            }
          }}
          placeholder="Enter Phone"
          maxLength="10"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
        {errorKeyName === "mobile_number" && (
          <p className="text-red-500 text-sm">Please enter a valid phone number</p>
        )}

       
<label htmlFor="message" className="block text-gray-700 ">
            Message *
          </label>
        <textarea
          name="message"
          value={payload.message}
          onChange={handleChange}
          placeholder="Write your message"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 h-24"
        />
        {errorKeyName === "message" && (
          <p className="text-red-500 text-sm">Please enter your inquiry</p>
        )}

        <button
          type="submit"
          className="w-full bg-[#D41958] text-white font-bold rounded-lg py-2 hover:bg-[#B0164A] transition-all"
        >
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;
