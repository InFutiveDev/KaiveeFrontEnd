import { CheckObjectValidation } from "utility/Utils";
import { useState } from "react";
import ToastContent from "components/toastContent";
import { Slide, toast } from "react-toastify";
import { AlertCircle } from "react-feather";
import img1 from "assets/images/Finalimg/Book/contact-email.webp";
import img2 from "assets/images/Finalimg/Book/contact-phone.webp";
import { useDispatch } from "react-redux";
import { ADD_CONTACT } from "redux/actions/contact";

const Content = () => {
  const [payload, setPayload] = useState({
    first_name: "",
    last_name: "",
    emailId: "",
    mobile: "",
    message: "",
  });
  const [errorKeyName, setErrorKeyName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkValidation = CheckObjectValidation(payload, []);
    setErrorKeyName(checkValidation.keyname);
    if (checkValidation.isvalid) {
      const res = await dispatch(ADD_CONTACT(payload));
      if (res?.success) {
        setPayload({
          first_name: "",
          last_name: "",
          emailId: "",
          mobile: "",
          message: "",
        });
      }
      // toast.success(
      //   <ToastContent
      //     icon={<AlertCircle size={12} />}
      //     text={"Thanks For Your Message"}
      //     title="Success !"
      //   />,
      //   { transition: Slide, autoClose: 4000 }
      // );
      // alert('Thanks For Your Message')
      // setLoading(true)
      // const res = await dispatch(REGISTER_NEW_USER(payload))
      // if (res?.success) {
      //   setLoading(false)
      //   setShowEmailSent(true)
      // } else {
      //   setLoading(false)
      // }
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
      {/* <div className="bg-[#fcc42c]">
        <div className="container">
          <section className="d-flex text-lg py-1">
            <div>Home</div> <span className="ml-2">{">"}</span>
            <div className="ml-2">Contact Us</div>
          </section>
        </div>
      </div> */}
      <div className="container">
        <p className="text-center mt-3 text-2xl font-medium">Contact Us</p>
        <p className="text-center mt-3 text-2xl font-medium">
          AT Kaivee Healthcare
        </p>
        <div className="row mt-3">
          <div className="col-12 col-md-6 flex items-center justify-end">
            <div>
              <p>care@zenhealthsolutions.com</p>
              <p>Email us for any information or feedback</p>
            </div>
            <img src={img1.src} alt="Email img" />
          </div>
          <div className="col-12 col-md-6 flex items-center">
            <img src={img2.src} alt="Phone img" />
            <div>
              <p>+91 84483 35621</p>
              <p>
                Our call centre would be happy to assist you with your query.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content contact-content">
        <div className="bg-box" />
        <div className="container">
          <div className="row no-gutters contact-wrap">
            <div className="col-lg-7">
              <div className="form h-100">
                <form id="contactForm" name="contactForm">
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
                        name="emailId"
                        id="emailId"
                        value={payload.emailId}
                        onChange={handleChange}
                      />
                      {errorKeyName === "emailId" ? (
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
                        name="mobile"
                        id="mobile"
                        value={payload.mobile}
                        onChange={handleChange}
                      />
                      {errorKeyName === "mobile" ? (
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

                  {/* <ReCAPTCHA
                    sitekey="Your client site key"
                    onChange={onChange}
                  /> */}
                </form>
              </div>
            </div>
            <div className=" col-lg-5 flex justify-center items-center px-5 ">
              <div className="c-border  p-3">
                <p className="font-semibold mt-1">Corporate Office</p>
                <p className="text-lg mt-1">
                  Please feel free to reach out to us at our corporate office
                </p>
                <p className="text-lg mt-1">Kaivee HealthCare Noida, K-4, Sector-116, U.P-201305</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
