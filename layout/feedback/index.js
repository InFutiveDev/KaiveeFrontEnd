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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1278876753586!2d77.3960429!3d28.5659222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef823d515f91%3A0xd4d4ace124409340!2sZen%20Health%20Services!5e0!3m2!1sen!2sin!4v1737958352844!5m2!1sen!2sin"
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
                    <h3 className=" mt-2 text-[24px]    mb-3">Need Help?</h3>
                    <ul className=" text-[16px] list-disc text-gray-600 text-[14px] pl-5 space-y-2">
                      <li>Ensure all fields are filled out correctly.</li>
                      <li>Use a valid email to receive our response.</li>
                      <li>Phone number should include country code (if applicable).</li>
                      <li>Your message should be clear and concise.</li>
                      <li>We respond shortly after receiving your feedback.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </LazyLoad>
    </>
  );
};

export default FeedBackLayout;
