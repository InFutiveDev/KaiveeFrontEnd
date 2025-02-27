import { useState } from "react";
import { Modal } from "reactstrap";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { GET_USER_DETAILS, UPDATE_USER_DETAILS } from "redux/actions/auth";

const EditProfileModal = ({ userInfo, setUserInfo, setOpen, open }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(userInfo?.profilePicture)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleFiles = async (e) => {
    const { files } = e.target;
    setAvatar(files[0])
    // setUserInfo({...userInfo, profilePicture: files[0]})
    // setPayload({ ...payload, [name]: files[0], [`${name}_base64`]: imageUrl });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    delete userInfo._id;
    delete userInfo?.emailId;
    userInfo['profilePicture'] = avatar
    const res = await dispatch(UPDATE_USER_DETAILS(userInfo));
    if (res?.success) {
      setLoading(false);
      dispatch(GET_USER_DETAILS());
      setOpen(false);
    } else {
      setLoading(false);
      dispatch(GET_USER_DETAILS());
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
              <div className="flex justify-start items-center px-3 py-2 border-b space-x-2">
                <h5 id="addNewAddressLabel" className="modal-title">
                  Edit Profile
                </h5>
                <div className="flex justify-start items-center">
                  <p className="mb-0">Hi, {userInfo.name}</p>
                  <a className="text-[16px] text-blue-600" href={`mailto:${userInfo.email}`}>
                    ( {userInfo.email})
                  </a>
                </div>
              </div>
              <div className="modal-body">
                <form>

                  <div className="form mt-4">
                    <div className="py-2 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="name">Your Name</label>
                        <input
                          placeholder="Enter Full Name here"
                          aria-describedby="name"
                          required="required"
                          tabIndex={1}
                          name="name"
                          type="text"
                          onChange={handleChange}
                          defaultValue={userInfo.name}
                          className="form-control "
                        />
                      </div>
                      <div>
                        <label htmlFor="number">Phone Number</label>
                        <input
                          type="tel"
                          name="number"
                          pattern="^[0]?[789]\d{9}$"
                          defaultValue={userInfo.mobile}
                          required="required"
                          autoComplete="off"
                          readOnly="readonly"
                          className="form-control"
                        />
                      </div>
                      <div>
                        <label htmlFor="emailId">Mail Id</label>
                        <input
                          id="email"
                          placeholder="Enter Your Email here"
                          aria-describedby="email"
                          tabIndex={2}
                          name="email"
                          type="email"
                          onChange={handleChange}
                          // readOnly="readonly"
                          defaultValue={userInfo.email}
                          className="form-control "
                        />
                      </div>
                      <div>
                        <label htmlFor="age">Age</label>
                        <input
                          id="age"
                          placeholder="Enter Age here"
                          aria-describedby="age"
                          required="required"
                          step={1}
                          tabIndex={4}
                          name="age"
                          type="text"
                          onChange={handleChange}
                          value={userInfo.age}
                          className="form-control "
                        />
                      </div>
                      <div className="w-full">
                        <label htmlFor="gender">
                          Gender
                        </label>
                        <select
                          id="gender"
                          aria-describedby="gender"
                          required="required"
                          tabIndex={3}
                          name="gender"
                          onChange={handleChange}
                          value={userInfo.gender}
                          className="form-select rounded-lg w-full"
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <div className="px-2">
                        <label>User Profile</label>
                        <input
                          type="file"
                          name="image"
                          id="image"
                          placeholder="Category Image"
                          onChange={handleFiles}
                        />
                        {avatar ? (
                          <div>
                            <span>Image Preview: </span>
                            <Image
                              src={URL.createObjectURL(avatar)}
                              alt="avatar"
                              className=" h-24 w-24 rounded-full border "
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="modal-footer-dashboard">
                      <button
                        type="button"
                        className="mt-[20px] bg-white text-orange border border-orange rounded-md px-2 py-1"
                        onClick={() => setOpen(!open)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="mt-[20px] bg-orange text-white rounded-md px-2 py-1"
                      >
                        {loading ? "Processing..." : "Update"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditProfileModal;
