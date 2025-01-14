import BreadCrumb from "components/breadcrumb";
import React, { useEffect, useState } from "react";
import EditIcon from "assets/images/dashboard/edit1.png";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER_FAMILY_MEMBERS } from "redux/actions/member";
import { GET_USER_DETAILS } from "redux/actions/auth";
import AddNewMemberModal from "components/addMemberModal";
import EditMemberModal from "components/editMemberModal";
import { Trash } from "react-feather";
import DeleteMembers from "./deleteMember";

const breadcrumblist = [
  { name: "Home", path: "/" },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
];
const ManageMembersLayout = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [memeberBy, setMemeberBy] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { member } = store;

  const { userFamilyMembers } = member;
  useEffect(() => {
    dispatch(GET_USER_DETAILS());
    dispatch(GET_USER_FAMILY_MEMBERS());
  }, [dispatch]);

  return (
    <>
      <div className="container py-[35px] md:py-[70px]">
        <BreadCrumb active="Manage Members" breadcrumblist={breadcrumblist} />
        <div>
          <div className="flex md:flex-nowrap flex-wrap gap-[20px] justify-between">
            <p className="text-lg font-semibold">Manage Members</p>
            <button
              onClick={() => setOpen(true)}
              className=" bg-orange text-white rounded px-[30px] py-[12px] text-[16px]"
            >
              + Add Member
            </button>
            {open && <AddNewMemberModal setOpen={setOpen} open={open} />}
          </div>
          {userFamilyMembers?.data.map((item, index) => (
            <div className="my-[30px]" key={index}>
              <table className="shadow-md rounded-xl  overflow-hidden   border-collapse border border-[#EFF1F5] w-full">
                <thead>
                  <tr>
                    <th
                      colSpan="2"
                      className="border  md:py-[10px] bg-[rgb(255,244,224)] md:px-[24px] px-[12px] py-[6px] border-[#EFF1F5] "
                    >
                      <div className="flex gap-[5px] flex-wrap justify-between items-center">
                        <span className="md:text-[18px] text-[16px]">
                          {item.fullName}
                        </span>
                        <div className="flex justify-start space-x-3 items-center">
                          <button
                            onClick={() => {
                              setEditOpen(true);
                              setMemeberBy(item);
                            }}
                            className=" bg-orange flex gap-[3px] space-x-2 items-center text-white rounded px-2 py-1 font-[300] text-[16px]"
                          >
                            <img src={EditIcon.src} alt="edit icon" />{" "}
                            <span className="md:text-[18px] text-[13px]">
                              Edit Info
                            </span>
                          </button>
                          <button
                            onClick={() => {
                              setItemToDelete(item);
                            }}
                            className="bg-orange w-7 h-7 rounded-full flex justify-center items-center"
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
                    <td className=" border border-[#EFF1F5] py-[10px] px-[20px] text-[14px] md:text-[18px]">
                      Relation
                    </td>
                    <td className=" border border-[#EFF1F5]py-[10px] px-[20px] text-[14px] md:text-[18px]">
                      <div className="!w-[100px]">{item?.relation}</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="!w-[100px] border border-[#EFF1F5] py-[10px] px-[20px] text-[14px] md:text-[18px]">
                      Gender
                    </td>
                    <td className=" !w-[100px] border border-[#EFF1F5]py-[10px] px-[20px] text-[14px] md:text-[18px]">
                      <div className="!w-[100px]">{item?.gender}</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="!w-[100px] border border-[#EFF1F5] py-[10px] px-[20px] text-[14px] md:text-[18px]">
                      Age
                    </td>
                    <td className="!w-[100px] border border-[#EFF1F5]py-[10px] px-[20px] text-[14px] md:text-[18px]">
                      <div className="!w-[100px]">{item?.age}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
          {editOpen && (
            <EditMemberModal
              setOpen={setEditOpen}
              open={editOpen}
              member={memeberBy}
            />
          )}
          {itemToDelete !== null && (
            <DeleteMembers
              setItemToDelete={setItemToDelete}
              itemToDelete={itemToDelete}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ManageMembersLayout;
