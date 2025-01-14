import React, { useState } from "react";
import FeedbackBanner from "./FeedbackBanner";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import OtpComponents from "components/OtpComponents";
import AwesomeEmoji from "assets/images/feedback/superstar 1.png";
import VeryGoodEmoji from "assets/images/feedback/emoji (1) 1.png";
import GoodEmoji from "assets/images/feedback/smiling 1.png";
import AverageEmoji from "assets/images/feedback/smile 1.png";
import BadEmoji from "assets/images/feedback/sad 1.png";
import { StarSVG } from "assets/images/SvgImage";
import { StarLightSVG } from "assets/images/SvgImage";
import { useDispatch } from "react-redux";
import { ADD_FEEDBACK, ADD_FEEDBACK_NEW } from "redux/actions/feedback";
import LazyLoad from "react-lazyload";
import { CheckObjectValidation } from "utility/Utils";

const FeedBackLayout = () => {
  // const [currentActiveTab, setCurrentActiveTab] = useState("1");
  // const [feedbackData, setFeedbackData] = useState({
  //   suggestion: "",
  //   gender: "",
  //   your_phone: "",
  //   your_email: "",
  //   your_name: "",
  // });
  // // hook
  // const dispatch = useDispatch();
  // const toggle = (tab) => {
  //   if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  // };
  // const handleChange = (e) => {
  //   let { value, name } = e.target;
  //   setFeedbackData({ ...feedbackData, [name]: value });
  // };
  // const handleSubmit = () => {
  //   if (feedbackData) {
  //     dispatch(ADD_FEEDBACK(feedbackData)).then((res) => {
  //       if (res?.data?.status == 200) {
  //         setFeedbackData({
  //           suggestion: "",
  //           gender: "",
  //           your_phone: "",
  //           your_email: "",
  //           your_name: "",
  //         });
  //       }
  //     });
  //   }
  // };

  const [payload, setPayload] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    mobile_number: "",
    message: "",
  });
  const [errorKeyName, setErrorKeyName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkValidation = CheckObjectValidation(payload, []);
    setErrorKeyName(checkValidation.keyname);
    if (checkValidation.isvalid) {
      const res = await dispatch(ADD_FEEDBACK_NEW(payload));
      if (res?.success) {
        setPayload({
          first_name: "",
          last_name: "",
          email_id: "",
          mobile_number: "",
          message: "",
        });
      }
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
    <>
      <LazyLoad>
        <section>
          <div>
            <FeedbackBanner />
          </div>
        </section>
        <div>
          <div className="content contact-content">
            <div className="bg-box" />
            <div className="container">
              <div className="row no-gutters contact-wrap">
                <div className=" col-lg-6 p-2 ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4508047755!2d77.06715997457094!3d28.586249886182642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b3d620205b1%3A0xe21a1fe217f40c4!2sInFutive%20Technology%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1736764228427!5m2!1sen!2sin"
                    width={"100%"}
                    height={"100%"}
                    allowFullScreen="true"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="col-lg-6">
                  <div className="form h-100">
                    <form id="contactForm" name="contactForm">
                      <div>
                        <p className="text-[24px] ">
                          Give Your Valuable Feedback
                        </p>
                        <span className="text-[14px]">
                          Your feedback helps us serve you better
                        </span>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group mb-2">
                          <label htmlFor="" className="col-form-label">
                            First Name *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="first_name"
                            id="first_name"
                            value={payload.first_name}
                            onChange={handleChange}
                          />
                          {errorKeyName === "first_name" ? (
                            <p className="text-danger">
                              Please Enter a your first name
                            </p>
                          ) : null}
                        </div>
                        <div className="col-md-6 form-group mb-2">
                          <label htmlFor="" className="col-form-label">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="last_name"
                            id="last_name"
                            value={payload.last_name}
                            onChange={handleChange}
                          />
                          {errorKeyName === "last_name" ? (
                            <p className="text-danger">
                              Please Enter a your last name
                            </p>
                          ) : null}
                        </div>
                        <div className="col-md-6 form-group mb-2">
                          <label htmlFor="" className="col-form-label">
                            Email *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="email_id"
                            id="email_id"
                            value={payload.email_id}
                            onChange={handleChange}
                          />
                          {errorKeyName === "email_id" ? (
                            <p className="text-danger">
                              Please Enter a valid Email
                            </p>
                          ) : null}
                        </div>
                        <div className="col-md-6  form-group mb-2">
                          <label htmlFor="" className="col-form-label">
                            Phone *
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            name="mobile_number"
                            id="mobile_number"
                            value={payload.mobile_number}
                            onChange={handleChange}
                          />
                          {errorKeyName === "mobile_number" ? (
                            <p className="text-danger">
                              Please Enter a your number
                            </p>
                          ) : null}
                        </div>
                      </div>
                      {/* <div className="row">
                    <div className="col-md-6 form-group mb-2">
                      <label htmlFor="" className="col-form-label">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="contact_company"
                        id="contact_company"
                        value={payload.contact_company}
                        onChange={handleChange}
                      />
                      {errorKeyName === "contact_company" ? (
                        <p className="text-danger">Please Enter a Subject</p>
                      ) : null}
                    </div>
                  </div> */}
                      <div className="row">
                        <div className="col-md-12 form-group mb-2">
                          <label htmlFor="message" className="col-form-label">
                            Message *
                          </label>
                          <textarea
                            className="form-control"
                            name="message"
                            id="message"
                            value={payload.message}
                            onChange={handleChange}
                            cols={30}
                            rows={4}
                          />
                          {errorKeyName === "message" ? (
                            <p className="text-danger">
                              Please Enter a your message
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <input
                            type="submit"
                            className=" contact-submitbutton "
                            onClick={handleSubmit}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container py-[35px] md:py-[70px]">
            <div className="flex justify-center">
              <Nav tabs className="!border-0">
                <NavItem>
                  <NavLink
                    className={` !font-semibold !text-[14px] md:!text-[16px] ${
                      currentActiveTab === "1"
                        ? "text-orange !border-b-2 !border-t-0 !border-r-0 !border-l-0 !border-orange "
                        : "text-secondary !border-0 cursor-pointer "
                    }`}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Existing Patient
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={` !font-normal !text-[14px] md:!text-[16px] ${
                      currentActiveTab === "2"
                        ? "text-orange !border-b-2 !border-t-0 !border-r-0 !border-l-0 !border-orange "
                        : "text-secondary !border-0 cursor-pointer "
                    }`}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    New Patient
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <div className="mt-[40px]">
              <TabContent activeTab={currentActiveTab}>
                <TabPane tabId="1">
                  <div className="grid gap-10 lg:grid-cols-2 grid-cols-1 ">
                    <div>
                      <div className="form-group">
                        <label
                          htmlFor="organizationName"
                          className="font-normal text-[18px] mb-0 "
                        >
                          Your Lab Number
                        </label>
                        <div className="mt-[6px]">
                          <input
                            type="text"
                            className="border rounded-lg px-[16px] w-full py-[14px] focus:outline-none text-[18px] font-normal font-poppins"
                            placeholder="011-4725-2000"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="organizationName"
                          className="font-normal text-[18px] mb-0"
                        >
                          Enter Otp
                        </label>
                        <div className=" ">
                          <OtpComponents />
                          <span className="text-black pb-3 text-[12px]">
                            The OTP is sent to your registered mobile number
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="organizationName"
                          className="font-normal text-[18px]"
                        >
                          Any Suggestions for us
                        </label>
                        <div className="mt-[6px] !text-black">
                          <textarea
                            rows="2"
                            className="border rounded-lg px-[16px] w-full py-[14px] focus:outline-none text-[18px] font-normal"
                          >
                            ****
                          </textarea>
                        </div>
                      </div>
                      <div>
                        <buttton className="text-center bg-orange text-white rounded  py-[10px] px-[30px] text-[16px] font-semibold">
                          Submit
                        </buttton>
                      </div>
                    </div>
                    <div className="bg-[#FEF8EB] rounded-xl p-[16px] md:p-[24px]">
                      <p className=" font-semibold  text-center text-black font-source-pro text-[17px] md:text-[32px]">
                        Share your overall Experience
                      </p>
                      <div className="grid mt-[40px] grid-cols-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        <div className="flex flex-col items-center gap-y-2">
                          <div className="flex justify-center">
                            <img
                              src={AwesomeEmoji.src}
                              className="md:w-auto w-[50%]"
                            />
                          </div>
                          <p className="text-black text-[18px]">Awesome</p>
                          <div className="flex gap-1 mb-2">
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-2">
                          <div className="flex justify-center">
                            <img
                              src={VeryGoodEmoji.src}
                              className="md:w-auto w-[50%]"
                            />
                          </div>
                          <p className="text-black text-[18px]">Very Good</p>
                          <div className="flex gap-1 mb-2">
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarLightSVG />
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-2">
                          <div className="flex justify-center">
                            <img
                              src={GoodEmoji.src}
                              className="md:w-auto w-[50%]"
                            />
                          </div>
                          <p className="text-black text-[18px]"> Good</p>
                          <div className="flex gap-1 mb-2">
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarLightSVG />
                            <StarLightSVG />
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-2">
                          <div className="flex justify-center">
                            <img
                              src={AverageEmoji.src}
                              className="md:w-auto w-[50%]"
                            />
                          </div>
                          <p className="text-black text-[18px]">Average</p>
                          <div className="flex gap-1 mb-2">
                            <StarSVG />
                            <StarSVG />
                            <StarLightSVG />
                            <StarLightSVG />
                            <StarLightSVG />
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-2">
                          <div className="flex justify-center">
                            <img
                              src={BadEmoji.src}
                              className="md:w-auto w-[50%]"
                            />
                          </div>
                          <p className="text-black text-[18px]">Bad</p>
                          <div className="flex gap-1 mb-2">
                            <StarSVG />
                            <StarLightSVG />
                            <StarLightSVG />
                            <StarLightSVG />
                            <StarLightSVG />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="grid gap-10 lg:grid-cols-2 grid-cols-1">
                    <div className="bg-[#FEF8EB] rounded-xl p-[16px] md:p-[24px]">
                      <p className=" font-semibold text-center text-black font-source-pro text-[1px] md:text-[32px]">
                        Share your overall Experience
                      </p>
                      <div className="grid gap-3 mt-[0px] md:mt-[40px] grid-cols-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
                        <div className="flex flex-col items-center gap-y-2 justify-center">
                          <div className="flex justify-center">
                            <img
                              src={AwesomeEmoji.src}
                              className="md:w-auto w-[50%]"
                            />
                          </div>
                          <p className="text-black text-[14px] md:text-[18px]">
                            Awesome
                          </p>
                          <div className="flex gap-1 mb-2">
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-2">
                          <div className="flex justify-center">
                            <img
                              src={VeryGoodEmoji.src}
                              className="md:w-auto w-[50%]"
                            />
                          </div>
                          <p className="text-black text-[14px] md:text-[18px]">
                            Very Good
                          </p>
                          <div className="flex gap-1 mb-2">
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarLightSVG />
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-2">
                          <div className="flex justify-center">
                            <img
                              src={GoodEmoji.src}
                              className="md:w-auto w-[50%]"
                            />
                          </div>
                          <p className="text-black text-[14px] md:text-[18px]">
                            {" "}
                            Good
                          </p>
                          <div className="flex gap-1 mb-2">
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarLightSVG />
                            <StarLightSVG />
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-2">
                          <div className="flex justify-center">
                            <img
                              src={AverageEmoji.src}
                              className="md:w-auto w-[50%]"
                            />
                          </div>
                          <p className="text-black text-[14px] md:text-[18px]">
                            Average
                          </p>
                          <div className="flex gap-1 mb-2">
                            <StarSVG />
                            <StarSVG />
                            <StarLightSVG />
                            <StarLightSVG />
                            <StarLightSVG />
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-2">
                          <div className="flex justify-center">
                            <img
                              src={BadEmoji.src}
                              className="md:w-auto w-[50%]"
                            />
                          </div>
                          <p className="text-black text-[14px] md:text-[18px]">
                            Bad
                          </p>
                          <div className="flex gap-1 mb-2">
                            <StarSVG />
                            <StarLightSVG />
                            <StarLightSVG />
                            <StarLightSVG />
                            <StarLightSVG />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-3 ">
                        <div className="form-group">
                          <label
                            htmlFor="organizationName"
                            className="font-medium text-[15px] md:text-[18px] mb-0"
                          >
                            Your Mobile Number
                          </label>
                          <div className="mt-[6px]">
                            <input
                              type="text"
                              name="your_phone"
                              onChange={handleChange}
                              value={feedbackData?.your_phone}
                              className="border rounded-lg px-[16px] w-full py-[14px] focus:outline-none text-[14px] md:text-[18px] font-normal font-poppins "
                              placeholder="Enter Your Mobile number"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="organizationName"
                            className="font-medium text-[15px] md:text-[18px] mb-0"
                          >
                            Enter OTP
                          </label>
                          <div className="mt-[6px]">
                            <input
                              type="number"
                              name="your_phone"
                              className="border rounded-lg px-[16px] w-full py-[14px] focus:outline-none text-[14px] md:text-[18px] font-normal font-poppins"
                              placeholder="Enter Otp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-3">
                        <div className="form-group">
                          <label
                            htmlFor="organizationName"
                            className="font-medium text-[15px] md:text-[18px] mb-0"
                          >
                            Your Name
                          </label>
                          <div className="mt-[6px]">
                            <input
                              type="text"
                              name="your_name"
                              onChange={handleChange}
                              value={feedbackData?.your_name}
                              className="border rounded-lg px-[16px] w-full py-[14px] focus:outline-none text-[14px] md:text-[18px] font-normal font-poppins"
                              placeholder="Enter Your Name"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="organizationName"
                            className="font-medium text-[15px] md:text-[18px] mb-0"
                          >
                            Your Email ID
                          </label>
                          <div className="mt-[6px]">
                            <input
                              type="email"
                              name="your_email"
                              onChange={handleChange}
                              value={feedbackData?.your_email}
                              className="border rounded-lg px-[16px] w-full py-[14px] focus:outline-none text-[14px] md:text-[18px] font-normal font-poppins"
                              placeholder="Enter Your Email ID"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="organizationName"
                          className="font-medium text-[15px] md:text-[18px]  mb-0"
                        >
                          Gender
                        </label>
                        <div className="mt-[6px] text-black">
                          <select
                            name="gender"
                            onChange={handleChange}
                            value={feedbackData?.gender}
                            className="border rounded-lg px-[16px] w-full py-[14px] focus:outline-none text-[14px] md:text-[18px] font-normal font-poppins"
                          >
                            <option>Gender</option>
                            <option value={"Male"}>Male</option>
                            <option value={"Female"}>Female</option>
                            <option value={"Prefer-not-to-say"}>
                              Prefer not to say
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="organizationName"
                          className="font-medium text-[15px] lg:text-[18px] mb-0"
                        >
                          Any Suggestions for us
                        </label>
                        <div className="mt-[6px]">
                          <textarea
                            rows="2"
                            name="suggestion"
                            onChange={handleChange}
                            value={feedbackData?.suggestion}
                            className="border rounded-lg px-[16px] w-full py-[14px] focus:outline-none text-[14px] md:text-[18px] font-normal font-poppins"
                          />
                        </div>
                      </div>
                      <div>
                        <buttton
                          onClick={() => handleSubmit()}
                          className="cursor-pointer text-center bg-orange text-white rounded  py-[12px] px-[30px] font-normal text-[16px]"
                        >
                          Submit
                        </buttton>
                      </div>
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </div>
          </div> */}
        </div>
      </LazyLoad>
    </>
  );
};

export default FeedBackLayout;
