import React from "react";
import Slider from "react-slick";
import CorporateHealthBannerImg from "assets/images/corporate-health-enquiry/portrait-happy-parents-with-son-looking-camera-isolated-removebg-preview 1.png";
import BreadCrumb from "components/breadcrumb";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import Image from "next/image";
import BannerImage from "assets/images/corporate-health-enquiry/corporate tie ups banner 1400x300.webp";
import MobileImage from "assets/images/corporate-health-enquiry/corporate  1000 x 600.webp";
const RightArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button onClick={onClick} className={className} style={{ ...style }}>
      <PrevIcons />,
    </button>
  );
};

const LeftArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button onClick={onClick} className={className} style={{ ...style }}>
      <NextIcons />,
    </button>
  );
};
const breadcrumblist = [{ name: "Home", path: "/" }];
const CorporateHealthEnquiryBanner = () => {
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
      <div className="relative w-full  items-center hidden sm:flex">
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
      <div className="relative w-full  items-center flex  sm:hidden">
        <Image
          quality={100}
          width={1000}
          height={400}
          layout="fixed"
          alt={"about image"}
          className=" object-fill md:mb-0 mb-3  h-auto w-full object-center "
          src={MobileImage}
        />
      </div>
    </div>
  );
};


export default CorporateHealthEnquiryBanner;
