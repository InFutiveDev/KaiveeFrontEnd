import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddNewAddressModal from "components/addNewAddressModal";
import { GET_USER_ADDRESSES } from "redux/actions/address";
import SpinnerComponent from "components/spinner";
// import Menu from '../../assets/images/menus.svg'
import EditAddressModal from "components/editAddress";
import DeteleModal from "components/deleteModal";
import { MoreVertical } from "react-feather";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const MyAddresses = () => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const store = useSelector((state) => state.address);
  const { userAddresses } = store;

  useEffect(() => {
    dispatch(GET_USER_ADDRESSES());
  }, [dispatch]);
  return (
    <>
      {!userAddresses?.data ? (
        <SpinnerComponent />
      ) : (
        <div id="myAddresses" className="active">
          <div className="mainContent">
            <div className="container profileContent p-0">
              <div className="head">
                <p>My Addresses</p>
                <AddNewAddressModal />
              </div>{" "}
              <div className="contentInfo">
                <div className="bookingInfo">
                  <table className="dashbord-table">
                    <thead className="dashbord">
                      <tr>
                        <th>Name</th>
                        <th>Address Line 1</th>
                        <th>Address Line 2</th>
                        <th>City, State &amp; Pincode</th>
                        <th></th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    {userAddresses.data.length ? (
                      <>
                        {userAddresses.data.map((address) => {
                          return (
                            <>
                              <tbody className="table_body">
                                <tr className="text-black">
                                  <td>{address.fullName}</td>
                                  <td>{address.address1}</td>
                                  <td>{address.address2}</td>
                                  <td className="text-green">
                                    {address.city}, {address.state} -{" "}
                                    {address.postCode}
                                  </td>
                                  <td>
                                  
                                  </td>
                                  <td>
                                    <EditAddressModal address={address} />
                                  </td>
                                  <td>
                                    <DeteleModal address={address} />
                                  </td>
                                </tr>
                              </tbody>

                              {/* <div key={address._id} className="bookingInfo">
                              <div className="text">
                                <div className="item1">
                                  <p className="font-bold">Name :</p> <p>{address.fullName}</p>
                                </div>{" "}
                                <div className="item1">
                                  <p className="font-bold">Address Line 1 :</p>{" "}
                                  <p>{address.address1}</p>
                                </div>{" "}
                                <div className="item1">
                                  <p className="font-bold">Address Line 2 :</p>{" "}
                                  <p>{address.address2}</p>
                                </div>{" "}
                                {" "}
                                <div className="item1">
                                  <p className="font-bold">City, State &amp; Pincode :</p>
                                  <p>{" "} {address.city}, {address.state} - {address.postCode}</p>
                                </div>{" "}
                              </div>{" "}
                              <div className="d-flex justify-content-end">
                                <div>
                                  <EditAddressModal address={address} /> 
                                </div>
                                <div>
                                  <DeteleModal address={address} />
                                </div>
                              </div>
                            </div> */}
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <span className="no-booking">
                          No Addresses Found..!!
                        </span>
                      </>
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyAddresses;
