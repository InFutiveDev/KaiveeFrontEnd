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
        <div className="grid-cols-1 lg:grid-cols-3 grid gap-4 my-[30px]">
  {/* Left Column: Link Section with background image */}
  <div
  className="lg:col-span-1 border-[1px] border-[#E4E4E7] rounded-xl p-[20px] md:p-[24px] flex flex-col justify-between bg-no-repeat bg-center bg-contain min-h-[300px]"
  style={{
    backgroundImage: `url('https://ik.imagekit.io/InFutiveTechnology/kaivee/work-team-checking-giant-check-list_23-2148074630%20(1)%20(1).jpg?updatedAt=1744877017223')`,
  }}
>
  {/* Empty div can act as spacing above */}
  <div></div>

  {/* Link/button at bottom */}
  <div className="flex justify-center">
    <a
      href="http://115.246.78.204/zenhealth/Design/onlinelab/Default.aspx"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#d31b5e] underline text-center text-sm md:text-lg font-semibold bg-white bg-opacity-80 px-4 py-2 rounded"
    >
      Click here to access your lab reports directly
    </a>
  </div>
</div>




  {/* Right Column: Health Report Content */}
  <div className="lg:col-span-2 relative bg-[#b8d4ff] rounded-xl px-[20px] md:px-[40px] flex items-center lg:pt-0 pt-[60px]">
    <div className="grid-cols-1 grid md:grid-cols-2 items-center">
      <div>
        <p className="text-xl font-bold pb-3">Health Report</p>
        <span className="text-secondary text-[14px] md:text-[20px]">
          If you have undergone a test with Kaivee Healthcare, you can easily access your health report through our platform.
        </span>
      </div>
      <div>
        <Image
          width={380}
          height={380}
          className="object-fill"
          loading="eager"
          src={ImageOne.src}
        />
      </div>
    </div>

    <div className="absolute bottom-4 left-0">
      <Image
        width={80}
        height={80}
        className="object-fill"
        src={RoundImg.src}
      />
    </div>
    <div className="absolute bottom-0 left-0">
      <Image
        width={80}
        height={80}
        className="object-fill"
        src={RoundImg.src}
      />
    </div>
  </div>


          
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
