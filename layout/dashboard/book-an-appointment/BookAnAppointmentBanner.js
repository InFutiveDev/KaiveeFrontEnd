import React from "react";

import Image from "next/image";
import BannerImage from "assets/images/dashboard/Book an Appoinment banner 1400x300.webp";
import BreadCrumb from "components/breadcrumb";

const breadcrumblist = [{ name: "Dashboard", path: "/dashboard" }];
const BookAnAppointmentBanner = () => {
  return (
    <div className="w-full">
      <div className="2xl:pl-[10rem] xl:pl-[4rem] lg:pl-[1rem] pl-[16px]">
        <BreadCrumb
          active="Book an Appointment"
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
          className="object-fill md:mb-0 mb-3  h-auto w-full object-center"
          src={BannerImage}
        />
      </div>
    </div>
  );
};

export default BookAnAppointmentBanner;
