import { useState } from "react";
import { Modal } from "reactstrap";
import { useDispatch } from "react-redux";
import { CheckObjectValidation } from "utility/Utils";
import { ADD_USER_ADDRESS, GET_USER_ADDRESSES } from "redux/actions/address";

const AddNewAddressModal = ({ open, setOpen, dateShow }) => {
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    address1: "",
    near_by_locality: "",
    address_type: "",
    city: "",
    postCode: "",
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
    const checkValidation = CheckObjectValidation(payload, ["address2"]);
    setErrorKeyName(checkValidation.keyname);
    if (checkValidation.isvalid) {
      setLoading(true);
      const res = await dispatch(ADD_USER_ADDRESS(payload));
      if (res?.success) {
        setLoading(false);
        dispatch(GET_USER_ADDRESSES());
        setOpen(!open);
      } else {
        setLoading(false);
        setOpen(!open);
      }
    }
  };

  return (
    <>
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
                  Add a New Address
                </h5>
              </div>
              <div className="modal-body">
                <div className="md:m-3 grid gap-2 grid-cols-1 md:grid-cols-2">
                  <div>
                    <p className="text-[14px] md:text-[16px] pb-[5px] lg:text-[18px] text-gray-700">
                      Address Line 1
                    </p>
                    <div>
                      <input
                        type="text"
                        id="address1"
                        placeholder="Enter Address line 1"
                        name="address1"
                        required
                        onChange={handleChange}
                        className=" text-gray-900 border rounded-lg font-[300] text-[13px] md:text-[16px] p-1 w-full"
                      />
                      {errorKeyName === "address1" ? (
                        <span className="text-danger">Address Required</span>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] md:text-[16px] pb-[5px] lg:text-[18px] text-gray-700">
                      Near by locality
                    </p>
                    <div>
                      <input
                        type="text"
                        id="near_by_locality"
                        placeholder="Near by locality"
                        name="near_by_locality"
                        onChange={handleChange}
                        className=" text-gray-900 border rounded-lg font-[300] text-[13px] md:text-[16px] p-1 w-full"
                      />
                      {errorKeyName === "near_by_locality" ? (
                        <span className="text-danger">
                          Near Locality Required
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] md:text-[16px] pb-[5px] lg:text-[18px] text-gray-700">
                      {" "}
                      State{" "}
                    </p>
                    <div>
                      <select
                        id="state"
                        name="state"
                        className=" text-gray-900 border rounded-lg font-[300] text-[13px] md:text-[16px] p-1 w-full"
                        onChange={handleChange}
                      >
                        <option value="">Select State</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Haryana">Haryana</option>
                      </select>
                      {errorKeyName === "state" ? (
                        <span className="text-danger">Select your State</span>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] md:text-[16px] pb-[5px] lg:text-[18px] text-gray-700">
                      {" "}
                      Address Type{" "}
                    </p>
                    <div>
                      <select
                        id="address_type"
                        name="address_type"
                        className=" text-gray-900 border rounded-lg font-[300] text-[13px] md:text-[16px] p-1 w-full"
                        onChange={handleChange}
                      >
                        <option value="">Select Address Type </option>
                        <option value="Home">Home</option>
                        <option value="Office">Office</option>
                        <option value="Business">Business</option>
                        <option value="Other">Other</option>
                      </select>
                      {errorKeyName === "address_type" ? (
                        <span className="text-danger">
                          Select address Address type
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] md:text-[16px] pb-[5px] lg:text-[18px] text-gray-700">
                      City
                    </p>
                    <input
                      type="text"
                      id="city"
                      placeholder="City"
                      name="city"
                      value={payload?.city}
                      required
                      onChange={handleChange}
                      className=" text-gray-900 border rounded-lg font-[300] text-[13px] md:text-[16px] p-1 w-full"
                    />
                    {errorKeyName === "city" ? (
                      <span className="text-danger">City is Required</span>
                    ) : null}
                    {/**/}
                  </div>
                  <div>
                    <p className="text-[14px] md:text-[16px] pb-[5px] lg:text-[18px] text-gray-700">
                      Postal Zip Code
                    </p>
                    <input
                      type="number"
                      id="postCode"
                      inputMode="numeric"
                      placeholder="Pin Code"
                      name="postCode"
                      minlength="6"
                      required
                      value={payload?.postCode}
                      maxlength="6"
                      pattern="[0-9]{6}"
                      onChange={(e) => {
                        if (e.target.value?.length > 6) {
                          e.target.value = e.target.value.slice(0, -1);
                        } else {
                          handleChange(e);
                        }
                      }}
                      className=" text-gray-900 border rounded-lg font-[300] text-[13px] md:text-[16px] p-1 w-full"
                    />
                    {errorKeyName === "postCode" ? (
                      <span className="text-danger">Pin Code is Required</span>
                    ) : null}
                  </div>
                  {/* {dateShow ? (
                    <div>
                      <p className="text-[16px] text-gray-700">Date</p>
                      <input
                        type="date"
                        id="postCode"
                        name="date_add"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className=" text-gray-900 border rounded-lg font-[300] text-[13px] md:text-[16px] p-1 w-full"
                      />
                    </div>
                  ) : (
                    ""
                  )} */}
                  {/* {dateShow ? (
                    <div>
                      <p className="text-[16px] text-gray-700">Time </p>
                      <input
                        type="time"
                        id="time"
                        placeholder="time"
                        name="time"
                        value={payload?.time}
                        required
                        onChange={handleChange}
                        className=" text-gray-900 border rounded-lg font-[300] text-[16px] p-1 w-full"
                      />
                    </div>
                  ) : (
                    ""
                  )} */}
                </div>
              </div>
              <div className="modal-footer accordian-buttons center-bututon">
                <button
                  type="button"
                  className="mt-[20px] bg-white text-orange border-[1px] border-orange rounded p-2 py-2"
                  onClick={() => setOpen(!open)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="mt-[20px] bg-orange text-white rounded p-2 py-2"
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

export default AddNewAddressModal;
