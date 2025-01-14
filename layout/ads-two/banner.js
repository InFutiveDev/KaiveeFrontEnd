import { memo, useEffect, useState } from "react";
// import InquiryForm from "components/inquiryForm";
import Image from "next/image";
import LandingInquiryForm from "components/landingPageInquiryForm";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { CheckObjectValidation } from "utility/Utils";
import { ADD_NEW_INQUIRY_LANDING } from "redux/actions/inquiry";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";

const AdsBanner = ({ data }) => {
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
        router.push(`/ads/thank-you/?id=${router?.query?.id}`);
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
    if (window) {
      setSendData({ ...sendData, url: window.location.href });
    }
  }, []);
  return (
    <div className="w-full flex flex-col sm:flex-row md:flex-row justify-start items-center">
      <div className="w-full  pb-2">
        <div className="relative w-full  items-center hidden sm:flex">
          <Image
            quality={100}
            width={2000}
            height={200}
            layout="fixed"
            className="object-fill !w-[100%] !h-[100%] object-center"
            alt={data?.landingpageimage_altTag || "About"}
            src={data?.landingpageimage}
          />
          <div className="p-3 mt-[-20px] sm:mt-[-50px]  mx-2 bg-white relative z-10 rounded-xl border-[1px] border-[#b0b1b2]">
            <h2 className="font-[400] mb-3 sm:text-2xl text-2xl text-gray-900 text-center">
              Book Your Test
            </h2>
            <div>
              <div className="w-full text-center grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 items-start gap-4">
                <div>
                  <div className="p-1 w-full shadow border rounded-md flex justify-start items-center">
                    <input
                      type="text"
                      className=" bg-transparent border-none placeholder:font-[300] text-[20px] px-3"
                      placeholder="Enter Name*"
                      name="patient_name"
                      value={sendData.patient_name}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    {errorKeyName === "patient_name" ? (
                      <span className="text-danger">Name is Required</span>
                    ) : null}
                  </div>
                </div>
                <div>
                  <div className="p-1 w-full shadow border rounded-md flex justify-start items-center">
                    <input
                      type="text"
                      maxLength={10}
                      className=" bg-transparent border-none placeholder:font-[300] text-[20px] px-3"
                      placeholder="Enter Your Phone No.*"
                      name="mobile_number"
                      value={sendData?.mobile_number}
                      onChange={(e) => {
                        if (/^[0-9\s]*$/.test(e.target?.value)) {
                          handleChange(e);
                        }
                      }}
                    />{" "}
                    {errorKeyName === "mobile_number" ? (
                      <span className="text-danger">
                        Please Enter a valid number
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="bg-orange px-3 py-1">
                  <button
                    onClick={handleSubmit}
                    className="w-full h-full bg-[#fcc42d] "
                  >
                    Request a Call Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AdsBanner);
