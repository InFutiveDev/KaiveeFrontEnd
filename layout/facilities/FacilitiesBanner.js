import React from "react";
import Image from "next/image";
import nodatImage from "assets/images/No-Image-Placeholder.jpg";
import BreadCrumb from "components/breadcrumb";

// const breadcrumblist = [{ name: "Home", path: "/" }];

const FacilitiesBanner = ({ category }) => {
  return (
    <div className="w-full">
      {/* <div className="2xl:pl-[10rem] xl:pl-[4rem] lg:pl-[1rem] pl-[16px]">
        <BreadCrumb active="About Us" breadcrumblist={breadcrumblist} />
      </div> */}
      {category?.category_image ? (
        <div className="relative w-full items-center hidden sm:flex">
          <Image
            quality={100}
            width={2000}
            height={400}
            layout="fixed"
            alt={category?.category_image_altTag}
            className=" object-fill md:mb-0 mb-3  h-auto w-full object-center "
            src={category?.category_image || nodatImage}
          />
        </div>
      ) : (
        ""
      )}
      {category?.mobile_banner ? (
        <div className="relative w-full  items-center flex  sm:hidden">
          <Image
            quality={100}
            width={2000}
            height={400}
            layout="fixed"
            alt={category?.category_image_altTag}
            className=" object-fill md:mb-0 mb-3  h-auto w-full object-center "
            src={category?.mobile_banner || nodatImage}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FacilitiesBanner;
