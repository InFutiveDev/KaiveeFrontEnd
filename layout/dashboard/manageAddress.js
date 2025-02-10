import React, { useEffect, useState } from "react";
import BreadCrumb from "components/breadcrumb";
import { GET_USER_ADDRESSES } from "redux/actions/address";
import { useDispatch, useSelector } from "react-redux";
import AddNewAddressModal from "components/addNewAddressModal";
import EditAddressModal from "components/editAddress";
import DeleteAddress from "./deleteAddress"; // Import the DeleteAddress component
import Edit from "assets/images/dashboard/edit1.png";
import { Trash } from "react-feather";

const breadcrumblist = [
  { name: "Home", path: "/" },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
];

const ManageAddressLayout = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [address, setAddress] = useState(null);
  const [addressToDelete, setAddressToDelete] = useState(null); // State for delete modal
  const store = useSelector((state) => state.address);
  const { userAddresses } = store;

  useEffect(() => {
    dispatch(GET_USER_ADDRESSES());
  }, [dispatch]);

  return (
    <>
      <div className="container py-[70px]">
        <BreadCrumb active="Manage Address" breadcrumblist={breadcrumblist} />
        <div>
          <div className="flex md:flex-nowrap flex-wrap gap-[20px] justify-between">
            <p className="text-lg font-semibold">Manage Address</p>
            <button
              onClick={() => setOpen(true)}
              className=" bg-[#D41958] text-white rounded p-2 text-[16px]"
            >
              + Add Address
            </button>
            {open && <AddNewAddressModal setOpen={setOpen} open={open} />}
          </div>

          {userAddresses?.data?.map((item, index) => (
            <div className="my-[30px]" key={index}>
              <table className="shadow-md rounded-xl overflow-hidden border-collapse border border-[#EFF1F5] w-full">
                <thead>
                  <tr>
                    <th
                      colSpan="2"
                      className="border py-[10px] bg-[#D419580D] px-[24px] border-[#EFF1F5]"
                    >
                      <div className="flex justify-between items-center font-source-pro text-[24px] font-[600]">
                        <span className="md:text-[18px] text-[16px]">
                          Address {index + 1}
                        </span>
                        <div className="flex gap-4">
                          <button
                            onClick={() => {
                              setEditOpen(true);
                              setAddress(item);
                            }}
                            className="bg-[#D41958] text-white rounded p-2 text-[16px] flex"
                          >
                            <span className="pr-2 md:text-[18px] text-[16px]">
                              <img src={Edit?.src} alt="Edit" />
                            </span>
                            Edit Info
                          </button>
                          <button
                            onClick={() => setAddressToDelete(item)} // Trigger the delete modal
                            className="bg-[#D41958] w-9 h-9 rounded-full flex justify-center items-center"
                          >
                            <Trash size={18} color="white" />
                          </button>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#EFF1F5] py-[8px] text-[14px] md:text-[18px] px-[20px]">
                      Address
                    </td>
                    <td className="border border-[#EFF1F5] py-[8px] text-[14px] md:text-[18px] px-[20px]">
                      <div className="!w-[200px]">{item?.address1}</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#EFF1F5] py-[8px] px-[20px] text-[14px] md:text-[18px]">
                      Pincode
                    </td>
                    <td className="border border-[#EFF1F5] py-[8px] px-[20px] text-[14px] md:text-[18px]">
                      <div className="!w-[150px]">{item?.postCode}</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#EFF1F5] py-[8px] px-[20px] text-[14px] md:text-[18px]">
                      Nearby Locality
                    </td>
                    <td className="border border-[#EFF1F5] py-[8px] px-[20px] text-[14px] md:text-[18px]">
                      <div className="!w-[150px]">{item?.near_by_locality}</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#EFF1F5] py-[10px] px-[20px] text-[14px] md:text-[18px]">
                      Address Type
                    </td>
                    <td className="border border-[#EFF1F5] py-[10px] px-[20px] text-[14px] md:text-[18px]">
                      <div className="!w-[150px]">{item?.address_type}</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#EFF1F5] py-[10px] px-[20px] text-[14px] md:text-[18px]">
                      City
                    </td>
                    <td className="border border-[#EFF1F5] py-[10px] px-[20px] text-[14px] md:text-[18px]">
                      <div className="!w-[150px]">{item?.city}</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#EFF1F5] py-[10px] px-[20px] text-[14px] md:text-[18px]">
                      State
                    </td>
                    <td className="border border-[#EFF1F5] py-[10px] px-[20px] text-[14px] md:text-[18px]">
                      <div className="!w-[150px]">{item?.state}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}

          {editOpen && (
            <EditAddressModal
              setOpen={setEditOpen}
              open={editOpen}
              address={address}
            />
          )}

          {/* Delete Address Modal */}
          {addressToDelete && (
            <DeleteAddress
              addressToDelete={addressToDelete}
              setAddressToDelete={setAddressToDelete}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ManageAddressLayout;
