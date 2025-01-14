import Image from "next/image";
import React from "react";
import BannerImage from "assets/images/freeHomeSampleCollection/free home sample collcetion banner 1400x300.webp";
import BreadCrumb from "components/breadcrumb";
const breadcrumblist = [{ name: "Home", path: "/" }];

const FreeHomeSampleCollectionBanner = () => {
  return (
    <div className="w-full">
      <div className="2xl:pl-[10rem] xl:pl-[4rem] lg:pl-[1rem] pl-[16px]">
        <BreadCrumb
          active="book a home collection"
          breadcrumblist={breadcrumblist}
        />
      </div>
      <div className="relative w-full flex items-center">
        <Image
          quality={100}
          width={2000}
          height={400}
          layout="fixed"
          alt={"about image"}
          className=" object-fill md:mb-0 mb-3  h-auto w-full object-center"
          src={BannerImage}
        />
      </div>
    </div>
  );
};

export default FreeHomeSampleCollectionBanner;
