import BreadCrumb from "components/breadcrumb";
import React from "react";
import ImageOne from "assets/images/dashboard/reportimg.jpg";
import StartImg from "assets/images/dashboard/Group.png";
import ShadoImg from "assets/images/dashboard/Vector (1).png";
import RoundImg from "assets/images/dashboard/Ellipse 4004.png";
import Image from "next/image";
import LazyLoad from "react-lazyload";

const breadcrumblist = [
  { name: "Home", path: "/" },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
];
const MyReportLayout = () => {
  return (
    <LazyLoad>
      <div className="container py-[35px] md:py-[70px]">
        <BreadCrumb active="My Reports" breadcrumblist={breadcrumblist} />
        <p className="text-lg font-semibold">My Reports</p>
        <div className="grid-cols-1 lg:grid-cols-3 grid gap-4  my-[30px]">
          <div className="lg:col-span-1 border-[1px] border-[#E4E4E7] rounded-xl p-[20px] md:p-[24px]">
            <div className="form-group">
              <label
                htmlFor="organizationName"
                className="font-medium text-[15px] md:text-[20px]"
              >
                Patient
              </label>
              <div className="mt-[6px]">
                <select
                  className="border shadow-md  rounded-2xl px-[16px] w-full py-[14px] focus:outline-none text-[15px] md:text-[20px]"
                  placeholder="Select Patient"
                >
                  <option>Panel</option>
                  <option>Doctor</option>
                  {/* <option></option> */}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="organizationName"
                className="font-medium text-[15px] md:text-[20px]"
              >
                Password*
              </label>
              <div className="mt-[6px]">
                <input
                  type="number"
                  className="border shadow-md  rounded-2xl px-[16px] w-full py-[14px] focus:outline-none text-[15px] md:text-[20px]"
                  placeholder="**********"
                />
              </div>
            </div>
            <div className="mt-[6px]">
              <button className=" bg-[#d31b5e] text-white rounded w-full py-[8px] text-xs font-semibold">
                Check Report
              </button>
            </div>
            <span className="text-sm ">
              Please enter UHID and Password as printed on the receip
            </span>
          </div>
          <div className="lg:col-span-2 relative bg-[#def3e338] rounded-xl px-[20px] md:px-[40px] flex items-center lg:pt-0 pt-[60px]">
            <div className="grid-cols-1 grid md:grid-cols-2 items-center">
              <div>
                <p className="text-xl font-bold pb-3">Health Report</p>
                <span className="text-secondary text-[14px] md:text-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet,
                </span>
              </div>
              <div>
                <Image
                  width={380}
                  height={380}
                  className=" object-fill "
                  loading="eager"
                  src={ImageOne.src}
                />
              </div>
            </div>
            {/* <div className="absolute bottom-0 left-0">
              <Image
                width={80}
                height={80}
                className=" object-fill "
                loading="eager"
                src={ShadoImg.src}
              />
            </div> */}
            {/* <div className="absolute top-0 left-0">
              <Image
                width={80}
                height={80}
                className=" object-fill "
                src={StartImg.src}
              />
            </div> */}
            <div className="absolute bottom-4 left-0">
              <Image
                width={80}
                height={80}
                className=" object-fill "
                src={RoundImg.src}
              />
            </div>
            <div className="absolute bottom-0 left-0">
              <Image
                width={80}
                height={80}
                className=" object-fill "
                src={RoundImg.src}
              />
            </div>
          </div>
        </div>
        <div className="mt-[35px] md:mt-[70px]">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-[#d31b5e]">
            Now Just Enter your Reg No & Lab No And Get your Lab Reports Any
            Where and Any Time
          </p>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="container py-[35px] md:py-[70px]">
          <div className="text-[16px] md:text-[22px] font-semibold pb-2">
            IMPORTANT NOTE:
          </div>
          <span className="text-secondary text-[14px] md:text-[20px]">
            {" "}
            Our reports will be available online for a period of 7 days from the
            date given on your report collection slip. After that, you can
            collect the report from your nearest City Center Online reports
            cannot be accessed in following cases:{" "}
          </span>
          <ul className="list-disc ml-[40px] flex flex-col gap-2 mt-[10px]">
            <li className="text-secondary text-[14px] md:text-[20px]">
              Partial or unpaid payments
            </li>
            <li className="text-secondary text-[14px] md:text-[20px]">
              Patients on credit basis
            </li>
            <li className="text-secondary text-[14px] md:text-[20px]">
              Corporate clients under Pre-employment check-up
            </li>
            <li className="text-secondary text-[14px] md:text-[20px]">
              Insurance clients
            </li>
            <li className="text-secondary text-[14px] md:text-[20px]">
              Use only internet explore 7.0 or higher version
            </li>
            <li className="text-secondary text-[14px] md:text-[20px]">
              Adobe reader 8.0 or higher version must installed.
            </li>
          </ul>
        </div>
      </div>
    </LazyLoad>
  );
};

export default MyReportLayout;
