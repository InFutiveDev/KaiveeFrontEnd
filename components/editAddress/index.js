import { useEffect, useState } from "react";
import { Modal } from "reactstrap";
import { useDispatch } from "react-redux";
import { EDTI_USER_ADDRESS, GET_USER_ADDRESSES } from "redux/actions/address";
import moment from "moment";

const EditAddressModal = ({ address, open, setOpen, dateShow = true }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorKeyName, setErrorKeyName] = useState("");
  const [payload, setPayload] = useState(address);

  // useEffect(()=>{
  //   setPayload()
  // },[address])

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errorKeyName === name) {
      setErrorKeyName("");
    }
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = async () => {
    let data = {
      address1: payload?.address1,
      address_type: payload?.address_type,
      city: payload?.city,
      // date_add: payload?.date_add || "",
      // time: payload?.time || "",
      near_by_locality: payload?.near_by_locality,
      postCode: payload?.postCode,
      address_type: payload?.address_type,
    };
    setLoading(true);
    const res = await dispatch(EDTI_USER_ADDRESS(data, address?._id));
    if (res?.success) {
      setLoading(false);
      dispatch(GET_USER_ADDRESSES());
      setOpen(!open);
      setPayload("");
    } else {
      setLoading(false);
      setOpen(!open);
    }
  };

  useEffect(() => {
    setPayload(address);
  }, [address]);

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
          style={{ display: "block" }}
          aria-modal="true"
          role="dialog"
        >
          <div>
            <div>
              <div className="modal-header">
                <h5 id="addNewAddressLabel" className="modal-title">
                  Edit Address
                </h5>
              </div>
              <div>
                <div className="m-3 grid gap-2 grid-cols-2">
                  <div>
                    <p className="text-[16px] text-gray-700">Address Line 1</p>
                    <div>
                      <input
                        type="text"
                        id="address1"
                        placeholder="Enter Address line 1"
                        name="address1"
                        value={payload?.address1}
                        required
                        onChange={handleChange}
                        className=" text-gray-900 border rounded-lg font-[300] text-[16px] p-1 w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[16px] text-gray-700">
                      Near by locality
                    </p>
                    <div>
                      <input
                        type="text"
                        id="near_by_locality"
                        placeholder="Near by locality"
                        name="near_by_locality"
                        value={payload?.near_by_locality}
                        onChange={handleChange}
                        className=" text-gray-900 border rounded-lg font-[300] text-[16px] p-1 w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[16px] text-gray-700"> Address Type </p>
                    <select
                      id="address_type"
                      name="address_type"
                      className=" text-gray-900 border rounded-lg font-[300] text-[16px] p-1 w-full"
                      onChange={handleChange}
                      value={payload?.address_type}
                    >
                      <option value="">Select Address Type</option>
                      <option value="Office">Office</option>
                      <option value="Home">Home</option>
                      <option value="Business">Business</option>
                      <option value="Home">Other</option>
                    </select>
                  </div>
                  <div>
                    <p className="text-[16px] text-gray-700"> State </p>
                    <div>
                      <select
                        id="state"
                        name="state"
                        className=" text-gray-900 border rounded-lg font-[300] text-[16px] p-1 w-full"
                        value={payload?.state}
                        onChange={handleChange}
                      >
                        <option value="">Select State</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Haryana">Haryana</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <p className="text-[16px] text-gray-700">City</p>
                    <input
                      type="text"
                      id="city"
                      placeholder="City"
                      name="city"
                      value={payload?.city}
                      required
                      onChange={handleChange}
                      className=" text-gray-900 border rounded-lg font-[300] text-[16px] p-1 w-full"
                    />
                    {/**/}
                  </div>
                  <div>
                    <p className="text-[16px] text-gray-700">Postal Zip Code</p>
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
                      className=" text-gray-900 border rounded-lg font-[300] text-[16px] p-1 w-full"
                    />
                  </div>
                  {/* {dateShow ? (
                    <div className="grid gap-2 grid-cols-2">
                      <div>
                        <p className="text-[16px] text-gray-700">Date </p>
                        <input
                          type="date"
                          id="date_add"
                          placeholder="date_add"
                          name="date_add"
                          value={moment(new Date(payload?.date_add)).format(
                            "YYYY-MM-DD"
                          )}
                          required
                          onChange={handleChange}
                          className=" text-gray-900 border rounded-lg font-[300] text-[16px] p-1 w-full"
                        />
                      </div>
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
                    </div>
                  ) : (
                    ""
                  )} */}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="mt-[20px] bg-white text-orange border-[1px] border-orange rounded p-1 px-2"
                  onClick={() => setOpen(!open)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="mt-[20px] bg-orange text-white rounded p-1 px-2"
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

export default EditAddressModal;
