import React from "react";
import EmergencyImage from "assets/images/about/awards/Frame 1261152583.png";
import Image from "next/image";
import AboutFireImage from "assets/images/about/fireworks 3.svg";
import BreadCrumb from "components/breadcrumb";
const breadcrumblist = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Award & Accreditations ", path: "/about/awards-accreditations" },
];

const renderHTML = (htmlString) => {
  return { __html: htmlString };
};
const AwardDetails = ({ data, slug }) => {
  return (
    <div className="mt-3 mb-5">
      <BreadCrumb
        active={slug.replaceAll("-", " ")}
        breadcrumblist={breadcrumblist}
      />
      <div className="relative overflow-hidden bg-[#FFE5B2]  lg:px-20 md:px-12 lg:py-11 px-8 py-8 md:py-8 rounded-[24px]">
        <div className="grid lg:grid-cols-2  md:grid-cols-1 gap-4">
          <div>
            <p className="lg:text-[48px] text-[40px] font-bold font-source-pro pb-3">
              Winner Of
            </p>
            <p className="lg:text-[32px] text-[25px] font-semibold font-source-pro ">
              {data?.title}
            </p>
            <div className="flex gap-2 mt-[30px] items-center">
              <div>
                <Image
                  width={40}
                  height={40}
                  loading="eager"
                  className=" object-contain "
                  src={EmergencyImage.src}
                />
              </div>
              <p className="text-[18px] font-bold font-source-pro">
                20+ Awards
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              alt="awsrds"
              className=" object-cover sm:w-1/2 w-full "
              width={1000}
              height={1000}
              src={data?.img}
            />
          </div>
        </div>
        <div className="absolute left-[-20px] top-0">
          <Image
            width={180}
            height={180}
            className="w-full object-fill"
            src={AboutFireImage.src}
          />
        </div>
        <div className="absolute left-64 -bottom-[20px]">
          <Image
            width={180}
            height={180}
            className="w-full object-fill"
            src={AboutFireImage.src}
          />
        </div>
      </div>
      <div className="mt-5">
        <h6 className="text-black lg:text-[32px] text-xl font-semibold font-source-pro">
          Description
        </h6>
        <div
          className="text-secondary lg:text-[18px] text-base mt-[16px]"
          dangerouslySetInnerHTML={renderHTML(data?.description)}
        />
      </div>
    </div>
  );
};

export default AwardDetails;
