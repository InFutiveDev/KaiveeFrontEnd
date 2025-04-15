import { Evidencesvg } from "assets/images/SvgImage";
import { ClinicalStudysvg } from "assets/images/SvgImage";
import { Healthsvg } from "assets/images/SvgImage";
import { Medicationsvg } from "assets/images/SvgImage";
import { Analysisvg } from "assets/images/SvgImage";
import React from "react";
import Slider from "react-slick";
import ClinicalBannerImage from "assets/images/clinical-research/Group 1410140916.png";
import ClinicalBannerImage2 from "assets/images/clinical-research/BANNER-Clinical-Research-Page.jpg";
import Image from 'next/image';
import BreadCrumb from "components/breadcrumb";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";

const RightArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button onClick={onClick} className={className} style={{ ...style }}>
      <PrevIcons />
    </button>
  );
};

const LeftArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button onClick={onClick} className={className} style={{ ...style }}>
      <NextIcons />
    </button>
  );
};

const breadcrumblist = [{ name: "Home", path: "/" }];

const ClinicalResearchBanner = () => {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
  };
  
  return (
    <div className="w-full">
       <div className="2xl:pl-[10rem] xl:pl-[4rem] lg:pl-[1rem] pl-[16px]">
              <BreadCrumb active="Clinical Research & Trials" breadcrumblist={breadcrumblist} />
            </div>
      <div className="relative w-full items-center hidden sm:flex">
        <Image
          quality={100}
          width={2000}
          height={400}
          alt="about image"
          className="object-fill md:mb-0 mb-3 h-auto w-full object-center"
          src="https://ik.imagekit.io/InFutiveTechnology/kaivee/WhatsApp%20Image%202025-04-15%20at%2015.20.15.jpg?updatedAt=1744710703315"/>
      </div>
      {/* Mobile image commented out for now */}
      <div className="relative w-full items-center flex sm:hidden">
        <Image
          quality={100}
          width={1000}
          height={400}
          alt="about image"
          className="object-fill md:mb-0 mb-3 h-auto w-full object-center"
          src="https://ik.imagekit.io/InFutiveTechnology/kaivee/WhatsApp%20Image%202025-04-15%20at%2015.20.15.jpg?updatedAt=1744710703315"
        />
      </div>
    </div>
  );
};

export default ClinicalResearchBanner;
