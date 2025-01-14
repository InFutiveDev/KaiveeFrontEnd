import { useEffect, useState } from "react";
import { Modal } from "reactstrap";
import { useDispatch } from "react-redux";
import {
  EDTI_USER_FAMILY_MEMBER,
  GET_USER_FAMILY_MEMBERS,
} from "redux/actions/member";
const CheckOutEditMemeberModal = ({ setOpen, open, member }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorKeyName, setErrorKeyName] = useState("");
  const [payload, setPayload] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errorKeyName === name) {
      setErrorKeyName("");
    }
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const res = await dispatch(EDTI_USER_FAMILY_MEMBER(payload));
    if (res?.success) {
      setLoading(false);
      dispatch(GET_USER_FAMILY_MEMBERS());
      setOpen(!open);
      setPayload("");
    } else {
      setLoading(false);
      setOpen(!open);
    }
  };

  useEffect(() => {
    setPayload(member);
  }, [member]);
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
          <div className="modal-content !rounded-xl overflow-hidden">
            <div className="modal-header bg-[#FFF4E0]">
              <h5 id="addNewAddressLabel" className="modal-title">
                1. Edit Member
              </h5>
            </div>{" "}
            <div className="modal-body">
              <div className="formFields profileFields">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="name">Name</label>{" "}
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter Name here"
                      required
                      value={payload?.fullName}
                      onChange={handleChange}
                      className="form-control"
                    />{" "}
                    {/**/}
                  </div>{" "}
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="relation" className="col-form-label">
                      Relation
                    </label>{" "}
                    <select
                      id="relation"
                      required="required"
                      tabIndex={3}
                      aria-describedby="relation"
                      className="form-select"
                      value={payload.relation}
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
                    {/**/}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="phone" className="col-form-label">
                      Mobile No
                    </label>{" "}
                    <input
                      type="tel"
                      name="phone"
                      pattern="^[0]?[789]\d{9}$"
                      required
                      autoComplete="off"
                      maxLength={10}
                      onKeyPress={(e) =>
                        !/[0-9]/.test(e.key) && e.preventDefault()
                      }
                      value={payload.phone}
                      onChange={handleChange}
                      placeholder="Mobile No"
                      className="form-control"
                    />{" "}
                  </div>
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
                      value={payload.gender}
                      className="form-select"
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {/**/}
                </div>
                <div>
                  <label htmlFor="age" className="col-form-label">
                    Age
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="age"
                    id="age"
                    maxLength={2}
                    min="0"
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    value={payload.age}
                    onChange={handleChange}
                    placeholder="Your Age"
                  />
                  {/**/}
                </div>{" "}
              </div>
            </div>{" "}
            <div className="modal-footer">
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

export default CheckOutEditMemeberModal;
