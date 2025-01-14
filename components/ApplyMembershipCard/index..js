import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "reactstrap";
import { ADD_USER_MEMBER_CARD } from "redux/actions/memberCard";
import { CheckObjectValidation } from "utility/Utils";

const ApplyMembershipCard = ({ open, setOpen }) => {
  const [payload, setPayload] = useState({
    fullName: "",
    gender: "",
    age: "",
    relation: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [errorKeyName, setErrorKeyName] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errorKeyName === name) {
      setErrorKeyName("");
    }
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkValidation = CheckObjectValidation(payload, []);
    setErrorKeyName(checkValidation.keyname);
    if (checkValidation.isvalid) {
      setLoading(true);
      const res = await dispatch(ADD_USER_MEMBER_CARD(payload));
      if (res?.success) {
        setLoading(false);
        // dispatch(GET_USER_FAMILY_MEMBERS());
        setOpen(!open);
      } else {
        setLoading(false);
        setOpen(!open);
      }
    }
  };
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      isOpen={open}
      toggle={() => setOpen(!open)}
    >
      <div
        id="addNewAddress"
        tabIndex={-1}
        aria-labelledby="addNewAddress"
        className="modal fade show"
        style={{ display: "block" }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 id="addNewAddressLabel" className="modal-title">
                Add a Membership Card
              </h5>
            </div>{" "}
            <div className="modal-body">
              <div className="formFields profileFields">
                <div>
                  <label htmlFor="name" className="col-form-label">
                    Full name (First and Last name)
                  </label>{" "}
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter Full Name here"
                    required
                    onChange={handleChange}
                    className="form-control"
                  />{" "}
                  {errorKeyName === "fullName" ? (
                    <span className="text-danger">Full Name is Required</span>
                  ) : null}
                  {/**/}
                </div>{" "}
                <div>
                  <label htmlFor="phone" className="col-form-label">
                    Phone Number
                  </label>{" "}
                  <input
                    type="tel"
                    name="phone"
                    pattern="^[0]?[789]\d{9}$"
                    required
                    autoComplete="off"
                    maxLength={10}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="form-control"
                  />
                  {errorKeyName === "phone" ? (
                    <span className="text-danger">
                      Phone Number is Required
                    </span>
                  ) : null}{" "}
                </div>
                <div>
                  <label htmlFor="relation" className="col-form-label">
                    Relation
                  </label>{" "}
                  <select
                    id="relation"
                    required="required"
                    tabIndex={3}
                    aria-describedby="relation"
                    className="form-select"
                    name="relation"
                    onChange={handleChange}
                  >
                    <option value="">Select relation with person</option>{" "}
                    <option value="self">Self</option>{" "}
                    <option value="mother">Mother</option>{" "}
                    <option value="father">Father</option>{" "}
                    <option value="spouse">Spouse</option>{" "}
                    <option value="brother">Brother</option>{" "}
                    <option value="sister">Sister</option>{" "}
                    <option value="friend">Friend</option>{" "}
                    <option value="other">Other</option>
                  </select>
                  {errorKeyName === "relation" ? (
                    <span className="text-danger">Relation is Required</span>
                  ) : null}
                  {/**/}
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="gender" className="col-form-label">
                      Gender
                    </label>
                    <select
                      id="gender"
                      aria-describedby="gender"
                      required="required"
                      tabIndex={3}
                      name="gender"
                      className="form-select"
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errorKeyName === "gender" ? (
                      <span className="text-danger">Gender is Required</span>
                    ) : null}
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="age" className="col-form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      id="age"
                      onChange={handleChange}
                      placeholder="Age"
                    />
                    {errorKeyName === "age" ? (
                      <span className="text-danger">Age is Required</span>
                    ) : null}
                    {/**/}
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="modal-footer accordian-buttons">
              <button
                type="button"
                // data-bs-dismiss="modal"
                className="mt-[20px] bg-white text-orange border-[1px] border-orange rounded px-[24px] py-[12px]"
                onClick={() => setOpen(!open)}
              >
                Cancel
              </button>{" "}
              <button
                type="submit"
                onClick={handleSubmit}
                className="mt-[20px] bg-orange text-white rounded px-[24px] py-[12px]"
              >
                {loading ? "Processing..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ApplyMembershipCard;
