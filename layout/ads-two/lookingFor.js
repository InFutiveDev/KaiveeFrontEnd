import { useEffect, useState } from "react";
import { Phone, User } from "react-feather";
import { useDispatch } from "react-redux";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";
import { ADD_NEW_INQUIRY_LANDING } from "redux/actions/inquiry";
import { CheckObjectValidation } from "utility/Utils";

const LookingFor = ({ data }) => {
  const [sendData, setSendData] = useState({
    patient_name: "",
    mobile_number: "",
  });
  const [errorKeyName, setErrorKeyName] = useState("");
  const dispatch = useDispatch();

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
    <div className="py-7 mt-6 bg-[#F7F7FB]  rounded-lg container text-center mx-auto">
      <h2 className="font-[400] mb-3 sm:text-2xl text-2xl text-gray-900">
        Don't You Get What You’re Looking For?
      </h2>
      <div>
        <div className="w-full text-center grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 items-start gap-4">
          <div>
            <div className="p-1 w-full shadow border rounded-md flex justify-start items-center">
              <div className="w-8 h-8 flex justify-center items-center">
                <User size={28} />
              </div>
              <div>
                <input
                  type="text"
                  className=" bg-transparent border-none placeholder:font-[300] text-[20px] px-3"
                  name="patient_name"
                  value={sendData.patient_name}
                  onChange={handleChange}
                  placeholder="Your Name*"
                />
              </div>
            </div>
            {errorKeyName === "patient_name" ? (
              <span className="text-danger">Name is Required</span>
            ) : null}
          </div>
          <div>
            <div className="p-1 w-full shadow border rounded-md flex justify-start items-center">
              <div className="w-8 h-8 flex justify-center items-center">
                <Phone size={28} />
              </div>
              <div>
                <input
                  type="text"
                  maxLength={10}
                  className=" bg-transparent border-none placeholder:font-[300] text-[20px] px-3"
                  name="mobile_number"
                  value={sendData?.mobile_number}
                  onChange={(e) => {
                    if (/^[0-9\s]*$/.test(e.target?.value)) {
                      handleChange(e);
                    }
                  }}
                  placeholder="Phone No.*"
                />{" "}
              </div>
            </div>
            {errorKeyName === "mobile_number" ? (
              <span className="text-danger">Please Enter a valid number</span>
            ) : null}
          </div>
          <div className="bg-orange px-3 py-2 rounded-full">
            <button
              onClick={handleSubmit}
              className="w-full h-full bg-[#7bb44ceb] rounded"
            >
              Request a Call Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingFor;
