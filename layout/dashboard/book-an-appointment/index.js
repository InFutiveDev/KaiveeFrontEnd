import React, { useEffect, useState } from "react";
import BannerImg from "assets/images/dashboard/OBJECTS.png";
import ImgOne from "assets/images/dashboard/Frame.png";
import ImgTwo from "assets/images/dashboard/Vector (2).png";
import { useDispatch, useSelector } from "react-redux";
import { POST_APPOINTMENT } from "redux/actions/book-an-appointment";
import { Edit, Plus } from "react-feather";
import { GET_USER_FAMILY_MEMBERS } from "redux/actions/member";
import { GET_USER_DETAILS } from "redux/actions/auth";
import AddNewAddressModal from "components/addNewAddressModal";
import BookDes from "./bookDes";
import BookCard from "./bookCard";
import EditAddressModal from "components/editAddress";
import { GET_USER_ADDRESSES } from "redux/actions/address";
import SelectAddress from "./selectAddress";
import { useRouter } from "next/router";
import LazyLoad from "react-lazyload";
import Image from "next/image";
import EditMemberModal from "components/editMemberModal";
import AddNewMemberModal from "components/addMemberModal";
import EditProfileModal from "components/EditProfileModal";
import BookAnAppointmentBanner from "./BookAnAppointmentBanner";
import { CheckObjectValidation } from "utility/Utils";
import { toast } from "react-toastify";

const BookAppointmentLayout = () => {
  const [sendData, setSendData] = useState({
    appointment_date: "",
    nearest_centre: "",
    primary: false,
    time: "",
  });
  const store = useSelector((state) => state);
  const { member, auth, address } = store;
  const { userAddresses } = address;
  const { userFamilyMembers } = member;
  const { logedInUser } = auth;
  const [selectMember, setSelectMember] = useState(null);
  const [memeberBy, setMemeberBy] = useState(null);
  const [errorKeyName, setErrorKeyName] = useState("");

  const [addressBy, setAddressBy] = useState(null);
  const [memberEditOpen, setMemberEditOpen] = useState(false);
  const [memberOpen, setMemberOpen] = useState(false);
  const [addressEditOpen, setAddressEditOpen] = useState(false);
  const [profileEditOpen, setProfileEditOpen] = useState(false);
  const [addressOpen, setAddressOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(GET_USER_DETAILS());
    dispatch(GET_USER_FAMILY_MEMBERS());
    dispatch(GET_USER_ADDRESSES());
  }, []);

  const handleSubmit = () => {
    console.log("sendData", sendData);
    const checkValidation = CheckObjectValidation(sendData, [
      "add_prescription",
      "dob",
    ]);
    setErrorKeyName(checkValidation.keyname);
    if (checkValidation.isvalid) {
      dispatch(POST_APPOINTMENT(sendData)).then((res) => {
        if (res?.data?.status === 200) {
          setSendData({
            appointment_date: "",
            nearest_centre: "",
            Time: "",
            primary: false,
          });
        }
      });
    } else {
      toast.error(
        "Please select address, member, primary member, date and time"
      );
    }
  };

  const handleFamilyMembers = (item) => {
    setSelectMember(item);
    setSendData({ ...sendData, memberId: item?._id });
  };

  const handleAddress = (address) => {
    setSendData({ ...sendData, address });
  };

  useEffect(() => {
    const tokenAuth = localStorage.getItem("accessToken");
    console.log("tokenAuth", tokenAuth);
    if (!tokenAuth) {
      dispatch({ type: "LOGIN_MODAL_OPEN", data: true });
      router.push("/");
    }
    // logedInUser?.data
  }, []);

  return (
    <LazyLoad>
      {/* <section className=" p-4 sm:p-10  relative overflow-hidden bg-[#FFF3D4]">
        <div className="flex justify-start items-center space-x-3 ">
          <div>
            <p className=" text-[15px] sm:text-4xl ">
              Book An{" "}
              <span className="text-[15px] sm:text-4xl font-[400]">
                Appointment
              </span>
            </p>
            <p className="text-secondary text-[15px] sm:text-4xl">
              Any Time , Any Where
            </p>

            <button className="mt-[10px] sm:p-2  p-1 bg-orange text-white rounded ">
              Apply
            </button>
          </div>
          <div>
            <Image
              width={500}
              height={500}
              loading="eager"
              alt="banner"
              className="h-28 sm:h-auto"
              src={BannerImg.src}
            />
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <Image
            width={200}
            height={200}
            loading="eager"
            alt="banner"
            className="object-contain sm:h-auto"
            src={ImgOne.src}
          />
        </div>
        <div className="absolute top-0 left-0">
          <Image
            width={200}
            height={200}
            loading="eager"
            alt="banner  "
            className="object-contain sm:h-auto"
            src={ImgTwo.src}
          />
        </div>
      </section> */}
      <section>
        <div>
          <BookAnAppointmentBanner />
        </div>
      </section>
      <div>
        <div className="container mx-auto flex py-2 lg:flex-row md:flex-row flex-col  space-x-2">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
            <p className="text-lg font-[400]">Primary Member</p>
            {logedInUser?.data?.length > 0 && (
              <div className="my-[30px]">
                <table className="shadow-md rounded-xl  overflow-hidden   border-collapse border border-[#EFF1F5] w-full">
                  <thead>
                    <tr>
                      <th
                        colSpan="2"
                        className="border  py-[10px] bg-[#D419580D] px-2.5 border-[#EFF1F5] "
                      >
                        <div className="flex justify-start items-center space-x-2">
                          <span>{logedInUser?.data[0]?.name}</span>
                          <input
                            checked={
                              logedInUser?.data[0]?._id === sendData?.memberId
                            }
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSendData({
                                  ...sendData,
                                  primary: true,
                                  memberId: logedInUser?.data[0]?._id,
                                });
                                setSelectMember(null);
                              } else {
                                setSendData({
                                  ...sendData,
                                  primary: false,
                                  memberId: "",
                                });
                              }
                            }}
                            type="checkbox"
                            className="h-5 w-5"
                          />
                          <button
                            className="flex gap-1 items-center bg-[#D41958] text-white rounded px-[16px] py-[10px] text-xs font-semibold"
                            onClick={() => {
                              setUserInfo(logedInUser?.data[0]);
                              setProfileEditOpen(true);
                            }}
                          >
                            Edit Profile
                          </button>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-[15px] sm:text-lg border text-black border-[#EFF1F5]  p-2">
                        Relation
                      </td>
                      <td className="text-[15px] sm:text-lg border text-secondary border-[#EFF1F5] p-2">
                        Self
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[15px] sm:text-lg border text-black border-[#EFF1F5]  p-2">
                        Gender
                      </td>
                      <td className="text-[15px] sm:text-lg border text-secondary border-[#EFF1F5] p-2">
                        {logedInUser?.data[0]?.gender || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[15px] sm:text-lg border text-black border-[#EFF1F5]  p-2">
                        Age
                      </td>
                      <td className="text-[15px] sm:text-lg border text-secondary border-[#EFF1F5] p-2">
                        {logedInUser?.data[0]?.age}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[15px] sm:text-lg border text-black border-[#EFF1F5]  p-2">
                        Mobile
                      </td>
                      <td className="text-[15px] sm:text-lg border text-secondary border-[#EFF1F5] p-2">
                        {logedInUser?.data[0]?.mobile}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            <div className="shadow-md rounded-xl border-[1px] bg-white border-[#E4E4E7] p-2">
              <div className="flex flex-col sm:text-justify-between pb-3 ">
                <p className="py-2 text-xl sm:text-lg font-[600] ">
                  I Want to Book an Appointment
                </p>
                <div className="shadow-md bg-white border-[1px] border-[#8abc59] overflow-hidden rounded-xl">
                  <div className="py-[18px] px-[24px] bg-[#D419580D] border-b-[1px] items-center border-[#E4E4E7] flex justify-between">
                    <p className="text-lg font-semibold">Select Member</p>
                  </div>
                  <div className="p-2">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-2 my-3">
                      {userFamilyMembers?.data?.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            if (!sendData?.primary) {
                              handleFamilyMembers(item);
                            }
                          }}
                          className={`cursor-pointer relative rounded-xl ${
                            selectMember?._id == item?._id
                              ? "bg-[#D419580D] border-[1px] border-[#8abc59]"
                              : "bg-white border-[1px] border-[#E4E4E7]"
                          }  p-[24px]`}
                        >
                          <p className="text-[#3F3F46] text-base text-capitalize font-semibold">
                            {item?.fullName}
                          </p>
                          <div className="my-[8px] ">
                            <span className="text-secondary text-capitalize text-base">
                              Gender :- {item?.gender}
                            </span>
                          </div>
                          <div className="mb-[8px]">
                            <span className="text-secondary text-base">
                              +91{item?.phone}
                            </span>
                          </div>

                          <div className="flex justify-between gap-[12px]">
                            <span className="text-secondary text-capitalize text-base">
                              Relation :- {item?.relation}
                            </span>
                            <span className="text-secondary text-base">
                              Age :- {item?.age}
                            </span>
                          </div>
                          <div
                            onClick={() => {
                              setMemberEditOpen(true);
                              setMemeberBy(item);
                            }}
                            className="cursor-pointer absolute top-2 right-3"
                          >
                            <Edit />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-[40px] flex justify-center gap-3">
                      <button
                        className="flex gap-1 items-center bg-[#D41958] text-white rounded px-[16px] py-[10px] text-xs font-semibold"
                        onClick={() => setMemberOpen(true)}
                      >
                        <Plus className="text-lg" /> Add Member
                      </button>
                    </div>
                  </div>
                  <SelectAddress
                    address={sendData?.address}
                    data={userAddresses?.data}
                    handleAddress={handleAddress}
                    setAddressEditOpen={setAddressEditOpen}
                    setAddressBy={setAddressBy}
                  />
                  <div className="my-[20px] flex justify-center gap-3">
                    <button
                      className="flex gap-1 items-center bg-[#D41958] text-white rounded px-[16px] py-[10px] text-xs font-semibold"
                      onClick={() => setAddressOpen(true)}
                    >
                      <Plus className="text-lg" /> Add Address
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BookCard
            setSendData={setSendData}
            sendData={sendData}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      {memberOpen && (
        <AddNewMemberModal setOpen={setMemberOpen} open={memberOpen} />
      )}
      {addressOpen && (
        <AddNewAddressModal setOpen={setAddressOpen} open={addressOpen} />
      )}
      {console.log("memeberBy", memeberBy)}
      {memberEditOpen && (
        <EditMemberModal
          setOpen={setMemberEditOpen}
          open={memberEditOpen}
          member={memeberBy}
        />
      )}
      {addressEditOpen && (
        <EditAddressModal
          setOpen={setAddressEditOpen}
          open={addressEditOpen}
          address={addressBy}
        />
      )}
      {profileEditOpen && (
        <EditProfileModal
          setOpen={setProfileEditOpen}
          open={profileEditOpen}
          setUserInfo={setUserInfo}
          userInfo={userInfo}
        />
      )}
      <BookDes />
    </LazyLoad>
  );
};

export default BookAppointmentLayout;
