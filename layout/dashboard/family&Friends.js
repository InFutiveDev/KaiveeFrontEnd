import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SpinnerComponent from "components/spinner";
import AddNewMemberModal from "components/addMemberModal";
import { GET_USER_DETAILS } from "redux/actions/auth";
import { GET_USER_FAMILY_MEMBERS } from "redux/actions/member";
import EditMemberModal from "components/editMemberModal";
import DeteleMemberModal from "components/deleteMemberModal";

const MyFamilyFriends = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { auth, member } = store;
  const { userFamilyMembers } = member;
  useEffect(() => {
    dispatch(GET_USER_DETAILS());
    dispatch(GET_USER_FAMILY_MEMBERS());
  }, [dispatch]);

  return (
    <>
      {!auth?.logedInUser.data ? (
        <SpinnerComponent />
      ) : (
        <div id="family" className="active">
          <div className="mainContent">
            <div className="container p-0 profileContent family">
              <div className="head">
                <p>My Family & Friends</p>
                <AddNewMemberModal />
              </div>{" "}
              <div className="contentInfo">
                <div className="bookingInfo">
                  <table className="dashbord-table">
                    <thead className="dashbord-table">
                      <tr className="text-black">
                        <th>Name</th>
                        <th className="">Age</th>
                        <th className="">Relation</th>
                        <th className="">Gender</th>
                        <th className="" style={{ width: "80px" }}>
                          Edit
                        </th>
                        <th className="" style={{ width: "80px" }}>
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody className="table_body text-capitalize">
                      <tr>
                        <td className="text-black title1 text-capitalize">
                          {auth?.logedInUser.data[0].name}
                        </td>
                        <td className="text-black">
                          {auth?.logedInUser.data[0].age} years
                        </td>
                        <td className="text-black ">My Self</td>
                        <td className="text-black">
                          {auth?.logedInUser.data[0].gender}
                        </td>
                        {/* <td><EditMemberModal member={auth?.logedInUser.data[0]} /></td> */}
                        {/* <td><DeteleMemberModal member={auth?.logedInUser.data[0]} /></td> */}
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      {userFamilyMembers?.data.map((member) => (
                        <tr>
                          <td className="text-black title1 text-capitalize">
                            {member.fullName}
                          </td>
                          <td className="text-black">{member.age} years</td>
                          <td className="text-black">{member.relation}</td>
                          <td className="text-black">{member.gender}</td>
                          <td>
                            <EditMemberModal member={member} />
                          </td>
                          <td>
                            <DeteleMemberModal member={member} />
                          </td>
                        </tr>
                      ))}
                      {/* <tr>
                        <td className="text-black title1 text-capitalize">{auth?.logedInUser.data[0].name}</td>
                        <td className="text-black">years</td>
                        <td className="text-black">My Self</td>
                        <td className="text-black"></td>
                        <td><EditMemberModal member={member} /></td>
                        <td><DeteleMemberModal member={member} /></td>
                      </tr> */}
                    </tbody>
                  </table>
                  {/* <div className="text">
                    <p className="title1 text-capitalize">{auth?.logedInUser.data[0].name}</p>{" "}
                    <div className="item1">
                      <p className="font-bold">Age :</p> <p>{auth?.logedInUser.data[0].age} years</p>
                    </div>{" "}
                    <div className="item1">
                      <p className="font-bold">Relation :</p> <p>My Self</p>
                    </div>{" "}
                    <div className="item1">
                      <p className="font-bold text-capitalize">Gender :</p> <p>{auth?.logedInUser.data[0].gender}</p>
                    </div>
                  </div> */}
                  {/* <div className="d-flex justify-content-end">
                    <div>
                        <EditMemberModal member={auth?.logedInUser.data[0]} />
                    </div>
                  </div> */}
                </div>
                {/* {
                  userFamilyMembers?.data.map((member) => {
                    return (
                      <div key={member?._id} className="bookingInfo">
                        <div className="text">
                          <p className="title1 text-capitalize">{member.fullName}</p>{" "}
                          <div className="item1">
                            <p className="font-bold">Age :</p> <p>{member.age} years</p>
                          </div>{" "}
                          <div className="item1">
                            <p className="font-bold">Relation :</p> <p className="text-capitalize">{member.relation}</p>
                          </div>{" "}
                          <div className="item1">
                            <p className="font-bold">Gender :</p> <p className="text-capitalize">{member.gender}</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <div>
                            <EditMemberModal member={member} />
                          </div>
                          <div>
                            <DeteleMemberModal member={member} />
                          </div>
                        </div>
                      </div>
                    )
                  })
                } */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyFamilyFriends;
