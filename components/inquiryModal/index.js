import { useState } from "react";
import { Modal } from "reactstrap";
import { CheckObjectValidation } from "utility/Utils";
import { useDispatch } from "react-redux";
import { ADD_NEW_INQUIRY } from "redux/actions/inquiry";

const InquiryModal = ({ handleInquiryModal }) => {
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    contact_name: "",
    contact_email: "",
    contact_phone: "",
  });
  const [errorKeyName, setErrorKeyName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkValidation = CheckObjectValidation(payload, []);
    setErrorKeyName(checkValidation.keyname);
    if (checkValidation.isvalid) {
      setLoading(true);
      const res = await dispatch(ADD_NEW_INQUIRY(payload));
      if (res?.success) {
        setLoading(false);
        handleInquiryModal();
        // setShowEmailSent(true)
      } else {
        setLoading(false);
        handleInquiryModal();
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
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={true}
        toggle={() => handleInquiryModal()}
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="modal-header">
          <h5 className="modal-title">Enquire Now</h5>
          <button
            aria-label="Close"
            className=" close"
            onClick={() => handleInquiryModal()}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="col-md-12 form-group mb-2">
            <label htmlFor="" className="col-form-label">
              Name *
            </label>
            <input
              type="text"
              className="form-control"
              name="contact_name"
              id="contact_name"
              placeholder="Your name"
              onChange={handleChange}
            />
            {errorKeyName === "contact_name" ? (
              <p className="text-danger">Please Enter a your name</p>
            ) : null}
            <label htmlFor="" className="col-form-label">
              Email *
            </label>
            <input
              type="text"
              className="form-control"
              name="contact_email"
              id="contact_email"
              placeholder="Your email"
              onChange={handleChange}
            />
            {errorKeyName === "contact_email" ? (
              <p className="text-danger">Please Enter a valid Email</p>
            ) : null}
            <label htmlFor="" className="col-form-label">
              Phone *
            </label>
            <input
              type="text"
              className="form-control"
              name="contact_phone"
              id="contact_phone"
              maxLength="10"
              placeholder="Phone"
              onChange={handleChange}
            />
            {errorKeyName === "contact_phone" ? (
              <p className="text-danger">Please Enter a your number</p>
            ) : null}
          </div>
        </div>
        <div className="modal-footer">
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-[20px] bg-orange text-white rounded px-[24px] py-[12px]"
            >
              {loading ? "Processing..." : "Submit"}
            </button>
            {/* <button
              className="btnRed"
              color="primary"
              size="sm"
              onClick={handleSubmit}
            >
              {loading ? "Processing..." : "Submit"}
            </button> */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default InquiryModal;
