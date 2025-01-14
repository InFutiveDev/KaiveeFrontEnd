import { useEffect, useState } from "react";
import SpinnerComponent from "components/spinner";
import { useDispatch, useSelector } from "react-redux";
import EditProfileModal from "components/EditProfileModal";
import { GET_USER_DETAILS, UPDATE_USER_DETAILS } from "redux/actions/auth";

const EditProfile = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.auth);
  const { logedInUser } = store;
  const [userInfo, setUserInfo] = useState({
    name: "",
    mobile: "",
    emailId: "",
    gender: "",
    age: "",
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(GET_USER_DETAILS());
  }, [dispatch]);

  useEffect(() => {
    if (logedInUser?.data[0]) {
      setUserInfo(logedInUser?.data[0]);
    }
  }, [logedInUser]);

  return (
    <>
      {!logedInUser?.data ? (
        <SpinnerComponent />
      ) : (
        <div id="editProfile" className="active">
          <div className="profileContent">
            <div className="head">
              <p>Edit Profile</p>
            </div>{" "}
            <div className="contentInfo">
              <div className="bookingInfo">
                <table className="dashbord-table">
                  <thead className="dashbord">
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Mail Id</th>
                      <th>Update</th>
                    </tr>
                  </thead>

                  <tbody className="table_body">
                    <tr className="text-black">
                      <td>{userInfo.name}</td>
                      <td>{userInfo.mobile}</td>
                      <td>{userInfo.age}</td>
                      <td>{userInfo.gender}</td>
                      <td>{userInfo.emailId}</td>
                      <td>
                        <EditProfileModal
                          userInfo={userInfo}
                          setUserInfo={setUserInfo}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
