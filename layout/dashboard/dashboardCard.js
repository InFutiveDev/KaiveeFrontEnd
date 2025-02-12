import React, { useEffect, useState } from "react";
import { CallYellowImg } from "assets/images/SvgImage";
import { EmailYellowSVG } from "assets/images/SvgImage";
import ImgOne from "assets/images/dashboard/Frame 1410140987.png";
import EditImgActive from "assets/images/check-out/download_45x45.png"
import Profileicon from "assets/images/dashboard/Profile-icon.png";
import ImgTwo from "assets/images/dashboard/Frame 1410140987 (1).png";
import ImgThree from "assets/images/dashboard/Frame 1410140987 (2).png";
import ImgFour from "assets/images/dashboard/Frame 1410140987 (3).png";
import ImgFive from "assets/images/dashboard/Frame 1410140987 (4).png";
import ImgSix from "assets/images/dashboard/Frame 1410140987 (5).png";
import ImgSeven from "assets/images/dashboard/Frame 1410140987 (6).png";
import ImgEight from "assets/images/dashboard/Frame 1410140987 (7).png";
import ImgNine from "assets/images/dashboard/Frame 1410140987 (8).png";
import ImgTen from "assets/images/dashboard/Frame 1410140987 (9).png";
import ImgEleven from "assets/images/dashboard/Frame 1410140987 (10).png";
import { RightArrowSVG } from "assets/images/SvgImage";
import { GET_USER_DETAILS } from "redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import EditProfileModal from "components/EditProfileModal";
import UploadPrescriptionModal from "components/UploadPrescriptionModal";
import Link from "next/link";
import ApplyMembershipCard from "components/ApplyMembershipCard/index.";
import { useRouter } from "next/router";

const DashboardCard = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [Applyopen, setApplyOpen] = useState(false);
  const [UploadOpen, setUploadOpen] = useState(false);
  const router = useRouter();
  const store = useSelector((state) => state.auth);
  const { logedInUser } = store;
  const [userInfo, setUserInfo] = useState({
    name: "",
    mobile: "",
    email: "",
    gender: "",
    age: "",
  });

  useEffect(() => {
    dispatch(GET_USER_DETAILS());
  }, [dispatch]);

  useEffect(() => {
    if (logedInUser?.data[0]) {
      setUserInfo(logedInUser?.data[0]);
    }
  }, [logedInUser]);

  useEffect(() => {
    if (router?.query?.upload) {
      setUploadOpen(true);
    }
  }, []);
  const firstChar = userInfo?.name?.charAt(0)?.toUpperCase();

  return (
    <div>
      <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
        <div
          onClick={() => setOpen(true)}
          className="rounded-xl bg-white cursor-pointer shadow-md"
        >
          <div>
            <div className="bg-[#D419580D] py-[24px] rounded-t-xl w-full flex justify-center flex-column items-center">
            <div className="relative rounded-[50%] overflow-hidden bg-white h-[5rem] w-[5rem] flex justify-center items-center group">
            {!userInfo?.profilePicture ? (
              <div className="text-6xl">{firstChar}</div>
            ) : (
              <img
                className="object-cover rounded-[50%] h-[5rem] w-[5rem] p-2"
                src={userInfo?.profilePicture}
              />
            )}

          {/* Edit Icon */}
          <div className="absolute bottom-35px right-35px bg-gray-200 p-1 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <img src={EditImgActive.src} />
          </div>
          </div>

          <p className="mt-[10px] font-semibold text-lg">{userInfo?.name || "N/A"}</p>

            </div>
            <div className="p-2 pl-3">
            <div className="flex justify-start items-center gap-x-6 flex-wrap  ">
            {/* Email Section */}
            <div className="flex items-center gap-2">
            <EmailYellowSVG />
            <span className="text-base">{userInfo?.email || "NaN"}</span>
            </div>

            {/* Mobile Section */}
            <div className="flex items-center gap-2">
            <CallYellowImg />
            <span className="text-base">+91 {userInfo?.mobile || ""}</span>
            </div>
            </div>
            </div>

          </div>
        </div>

        <EditProfileModal
          setUserInfo={setUserInfo}
          setOpen={setOpen}
          userInfo={userInfo}
          open={open}
        />

        <Link href={"/dashboard/my-booking"}>
          <div className="rounded-xl overflow-hidden bg-white shadow-md ">
            <div className="bg-[#D419580D] flex justify-center py-[24px] w-full">
              <img src={ImgOne.src} alt="icon" />
            </div>
            <div className="bg-white py-[24px] px-[24px] flex justify-between">
              <p className="font-semibold">My Booking</p>
              <RightArrowSVG />
            </div>
          </div>
        </Link>

        <Link href={"/dashboard/my-report"}>
          <div className="rounded-xl overflow-hidden bg-white shadow-md ">
            <div className="bg-[#D419580D] flex justify-center py-[24px] w-full">
              <img src={ImgTwo.src} alt="icon" />
            </div>
            <div className="bg-white py-[24px] px-[24px] flex justify-between">
              <p className="font-semibold">My Report</p>
              <RightArrowSVG />
            </div>
          </div>
        </Link>

        <Link href={"/dashboard/report-tracking"}>
          <div className="rounded-xl overflow-hidden bg-white shadow-md ">
            <div className="bg-[#D419580D] flex justify-center py-[24px] w-full">
              <img src={ImgThree.src} alt="icon" />
            </div>
            <div className="bg-white py-[24px] px-[24px] flex justify-between">
              <p className="font-semibold">Track My Sample</p>
              <RightArrowSVG />
            </div>
          </div>
        </Link>

        <Link href={"/dashboard/manage-address"}>
          <div className="rounded-xl overflow-hidden bg-white shadow-md ">
            <div className="bg-[#D419580D] flex justify-center py-[24px] w-full">
              <img src={ImgFour.src} alt="icon" />
            </div>
            <div className="bg-white py-[24px] px-[24px] flex justify-between">
              <p className="font-semibold">Manage Address</p>
              <RightArrowSVG />
            </div>
          </div>
        </Link>

        <Link href={"/dashboard/manage-members"}>
          <div className="rounded-xl overflow-hidden bg-white shadow-md ">
            <div className="bg-[#D419580D] flex justify-center py-[24px] w-full">
              <img src={ImgFive.src} alt="icon" />
            </div>
            <div className="bg-white py-[24px] px-[24px] flex justify-between">
              <p className="font-semibold">Manage Members</p>
              <RightArrowSVG />
            </div>
          </div>
        </Link>

        <div
          role="button"
          onClick={() => setUploadOpen(true)}
          className="rounded-xl overflow-hidden bg-white shadow-md "
        >
          <div className="bg-[#D419580D] flex justify-center py-[24px] w-full">
            <img src={ImgSix.src} alt="icon" />
          </div>
          <div className="bg-white py-[24px] px-[24px] flex justify-between">
            <p className="font-semibold">Upload Prescription</p>
            <RightArrowSVG />
          </div>
        </div>

        <UploadPrescriptionModal setOpen={setUploadOpen} open={UploadOpen} />

        <Link href={"/feedback"}>
          <div className="rounded-xl overflow-hidden bg-white shadow-md ">
            <div className="bg-[#D419580D] flex justify-center py-[24px] w-full">
              <img src={ImgSeven.src} alt="icon" />
            </div>
            <div className="bg-white py-[24px] px-[24px] flex justify-between">
              <p className="font-semibold">Feedback</p>
              <RightArrowSVG />
            </div>
          </div>
        </Link>

        <Link href={"/book-a-test"}>
          <div className="rounded-xl overflow-hidden bg-white shadow-md ">
            <div className="bg-[#D419580D] flex justify-center py-[24px] w-full">
              <img src={ImgEight.src} alt="icon" />
            </div>
            <div className="bg-white py-[24px] px-[24px] flex justify-between">
              <p className="font-semibold">Book a Test</p>
              <RightArrowSVG />
            </div>
          </div>
        </Link>

        <Link href={"/free-home-sample-collection"}>
          <div className="rounded-xl overflow-hidden bg-white shadow-md ">
            <div className="bg-[#D419580D] flex justify-center py-[24px] w-full">
              <img src={ImgNine.src} alt="icon" />
            </div>
            <div className="bg-white py-[24px] px-[24px] flex justify-between">
              <p className="font-semibold">Book a Home Collection</p>
              <RightArrowSVG />
            </div>
          </div>
        </Link>

        {/* <div
          role="button"
          onClick={() => setApplyOpen(true)}
          className="rounded-xl overflow-hidden bg-white shadow-md "
        >
          <div className="bg-[#F7F8F8] flex justify-center py-[24px] w-full">
            <img src={ImgTen.src} alt="icon" />
          </div>
          <div className="bg-white py-[24px] px-[24px] flex justify-between">
            <p className="font-semibold">Apply Membership Card</p>
            <RightArrowSVG />
          </div>
        </div> */}

        {Applyopen && (
          <ApplyMembershipCard open={Applyopen} setOpen={setApplyOpen} />
        )}
        <Link href={"/dashboard/book-an-appointment"}>
          <div className="rounded-xl overflow-hidden bg-white shadow-md ">
            <div className="bg-[#D419580D] flex justify-center py-[24px] w-full">
              <img src={ImgEleven.src} alt="icon" />
            </div>
            <div className="bg-white py-[24px] px-[24px] flex justify-between">
              <p className="font-semibold">Book an Appointment</p>
              <RightArrowSVG />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardCard;
