import { useState } from "react";
import { Modal } from "reactstrap";
import { useDispatch } from "react-redux";
import { CheckObjectValidation } from "utility/Utils";
import {
  ADD_USER_FAMILY_MEMBER,
  GET_USER_FAMILY_MEMBERS,
} from "redux/actions/member";

const AddNewMemberModal = ({ open, setOpen }) => {
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    fullName: "",
    gender: "",
    age: "",
    relation: "",
    phone: "",
  });
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
      const res = await dispatch(ADD_USER_FAMILY_MEMBER(payload));
      if (res?.success) {
        setLoading(false);
        dispatch(GET_USER_FAMILY_MEMBERS());
        setOpen(!open);
      } else {
        setLoading(false);
        setOpen(!open);
      }
    }
  };

  return (
    <>
      {/* <div>
        <button
          data-bs-toggle="modal"
          data-bs-target="#addNewMember"
          className="newAddress"
          onClick={() => setOpen(!open)}
        >
          Add Member
        </button>
      </div> */}
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={open}
        toggle={() => setOpen(!open)}
      >
        <div
          id="addNewMember"
          tabIndex={-1}
          aria-labelledby="addNewMember"
          className="modal fade show"
          style={{ display: "block" }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content ">
              <div className="modal-header bg-[#D419580D]">
                <h5 id="addNewAddressLabel" className="modal-title ">
                  Add a New Member
                </h5>
              </div>{" "}
              <div className="modal-body">
                <div className="formFields profileFields">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <label
                        htmlFor="name"
                        className="col-form-label text-[15px] font-medium"
                      >
                        Name
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
                        <span className="text-danger">
                          Full Name is Required
                        </span>
                      ) : null}
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <label
                        htmlFor="relation"
                        className="col-form-label text-[15px] font-medium"
                      >
                        Relation
                      </label>{" "}
                      <select
                        id="relation"
                        required="required"
                        tabIndex={3}
                        aria-describedby="relation"
                        className="form-select radius"
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
                        <span className="text-danger">
                          Relation is Required
                        </span>
                      ) : null}
                      {/**/}
                    </div>{" "}
                  </div>

                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <label
                        htmlFor="phone"
                        className="col-form-label text-[15px] font-medium"
                      >
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
                    <div className="col-md-6 col-sm-6">
                      <label
                        htmlFor="age"
                        className="col-form-label text-[15px] font-medium"
                      >
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
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <label
                        htmlFor="gender"
                        className="col-form-label text-[15px] font-medium"
                      >
                        Gender
                      </label>
                      <select
                        id="gender"
                        aria-describedby="gender"
                        required="required"
                        tabIndex={3}
                        name="gender"
                        className="form-select radius"
                        onChange={handleChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      {errorKeyName === "gender" ? (
                        <span className="text-danger">Gender is Required</span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer accordian-buttons center-bututon  bg-[#D419580D]">
                <button
                  type="button"
                  // data-bs-dismiss="modal"
                  className="mt-[20px] bg-white text-[#D41958] border-[1px] border-[#D41958] rounded px-[24px] py-[12px]"
                  onClick={() => setOpen(!open)}
                >
                  Cancel
                </button>{" "}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="mt-[20px] bg-[#D41958] text-white rounded px-[24px] py-[12px]"
                >
                  {loading ? "Processing..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddNewMemberModal;
