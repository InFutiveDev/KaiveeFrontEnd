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
    rating: 0,
  });
  const [errorKeyName, setErrorKeyName] = useState("");
  const [hover, setHover] = useState(0);
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
          rating: 0,
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

  const handleRating = (rating) => {
    setPayload({ ...payload, rating });
  };

  const ratingLevels = [
    { emoji: "😢", value: 1, label: "Very Bad", color: "bg-red-500" },
    { emoji: "😞", value: 2, label: "Bad", color: "bg-gray-500" },
    { emoji: "😐", value: 3, label: "Neutral", color: "bg-yellow-500" },
    { emoji: "🙂", value: 4, label: "Good", color: "bg-green-500" },
    { emoji: "😃", value: 5, label: "Excellent", color: "bg-pink-500" },
  ];

  // Check if all fields are filled
  const isFormComplete = () => {
    return (
      payload.first_name.trim() !== "" &&
      payload.last_name.trim() !== "" &&
      payload.email_id.trim() !== "" &&
      payload.mobile_number.trim() !== "" &&
      payload.message.trim() !== "" &&
      payload.rating > 0
    );
  };

  const selectedRating = ratingLevels.find((r) => r.value === payload.rating);

  return (
    <>
      <LazyLoad>
        <section className="relative">
          <div>
            <FeedbackBanner />
          </div>
        </section>
        <div className="content contact-content">
          <div className="container">
            <div className="row contact-wrap">
              <div className="col-lg-6 p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1278876753586!2d77.3960429!3d28.5659222!2m3!1f personallyf0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef823d515f91%3A0xd4d4ace124409340!2sZen%20Health%20Services!5e0!3m2!1sen!2sin!4v1737958352844!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="col-lg-6">
                <div className="form h-100">
                  <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
                    <div>
                      <p className="text-2xl font-bold">Give Your Valuable Feedback</p>
                      <span className="text-[16px]">Your feedback helps us serve you better</span>
                    </div>

                    {/* Star Rating */}
                    <div className="my-3">
                      <label className="col-form-label">Rate Us:</label>
                      <div className="flex space-x-3">
                        {ratingLevels.map((item) => (
                          <span
                            key={item.value}
                            className={`text-3xl cursor-pointer transition-all transform 
                              ${item.value <= (hover || payload.rating) ? "scale-125 text-yellow-500" : "text-gray-400"}
                              ${payload.rating === item.value ? "animate-bounce" : ""}
                            `}
                            onClick={() => handleRating(item.value)}
                            onMouseEnter={() => setHover(item.value)}
                            onMouseLeave={() => setHover(0)}
                            title={item.label}
                          >
                            {item.emoji}
                          </span>
                        ))}
                      </div>
                      {errorKeyName === "rating" && <p className="text-danger">Please select a rating</p>}
                    </div>

                    {/* Feedback Form Fields */}
                    <div className="row">
                      <div className="col-md-6 form-group mb-2">
                        <label className="col-form-label">First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="first_name"
                          value={payload.first_name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6 form-group mb-2">
                        <label className="col-form-label">Last Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="last_name"
                          value={payload.last_name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6 form-group mb-2">
                        <label className="col-form-label">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email_id"
                          value={payload.email_id}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6 form-group mb-2">
                        <label className="col-form-label">Phone *</label>
                        <input
                          type="number"
                          className="form-control"
                          name="mobile_number"
                          value={payload.mobile_number}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group mb-2">
                        <label className="col-form-label">Message *</label>
                        <textarea
                          className="form-control"
                          name="message"
                          value={payload.message}
                          onChange={handleChange}
                          cols={30}
                          rows={4}
                        />
                      </div>
                    </div>
                    {/* Submit Button - Always visible but disabled until form is complete */}
                    <div className="row">
                      <div className="col-12">
                        <button
                          type="submit"
                          className={`contact-submitbutton w-full p-3 text-white font-bold rounded-lg transition-all 
                            ${isFormComplete()
                              ? `${selectedRating?.color || 'bg-gray-400'} animate-zoom-in-out`
                              : 'bg-gray-400 cursor-not-allowed opacity-60'
                            }`}
                          disabled={!isFormComplete()}
                        >
                          {isFormComplete() && selectedRating 
                            ? `Submit Your ${selectedRating.label} Feedback` 
                            : 'Fill All Fields to Submit'}
                        </button>
                      </div>
                    </div>
                  </form>
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


