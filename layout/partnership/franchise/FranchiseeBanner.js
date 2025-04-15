import React from "react";
import BannerImage from "assets/images/franchisee/franchise banner 1400 X 300.webp";
import MobileImage from "assets/images/franchisee/franchise 1000 x 600.webp";
import BreadCrumb from "components/breadcrumb";

import Image from "next/image";

const breadcrumblist = [{ name: "Home", path: "/" }];
const FranchiseeBanner = () => {
  return (
    <div className="w-full">
      <div className="2xl:pl-[10rem] xl:pl-[4rem] lg:pl-[1rem] pl-[16px]">
        <BreadCrumb active="Facilities" breadcrumblist={breadcrumblist} />
      </div>
      <div className="relative w-full  items-center hidden sm:flex">
        <Image
          quality={100}
          width={2000}
          height={400}
          layout="fixed"
          alt={"about image"}
          className=" object-fill md:mb-0 mb-3  h-auto w-full object-center"
          src="https://ik.imagekit.io/InFutiveTechnology/kaivee/franchise%20(1).jpg?updatedAt=1744708617380"
        />
      </div>
      <div className="relative w-full  items-center flex  sm:hidden">
        <Image
          quality={100}
          width={1000}
          height={400}
          layout="fixed"
          alt={"about image"}
          className=" object-fill md:mb-0 mb-3  h-auto w-full object-center "
          src="https://ik.imagekit.io/InFutiveTechnology/kaivee/franchise%20(1).jpg?updatedAt=1744708617380"
        />
      </div>
    </div>
  );
};

export default FranchiseeBanner;
