import React from "react";
import BannerImage from "assets/images/covid/covid 19 vaccination 1400x300.webp";
import Image from "next/image";
const CovidVaccinationBanner = () => {
  return (
    <div className="w-full">
      <div className="relative w-full flex items-center">
        <Image
          quality={100}
          width={2000}
          height={400}
          layout="fixed"
          alt={"covid vaccination image"}
          className=" object-fill md:mb-0 mb-3  h-auto w-full object-center"
          src={BannerImage}
        />
      </div>
    </div>
  );
};

export default CovidVaccinationBanner;
