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
// <div className="container" style={{ width: "100%" }}>
//   <Slider {...settings} className="carousel desktop-banner about">
//     <div className="home-slider-swiper">
//       <div className="grid gap-[50px] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-1 ">
//         <div>
//           <BreadCrumb
//             active="Corporate Health Enquiry"
//             breadcrumblist={breadcrumblist}
//           />
//           <p className="lg:text-[36px] text-lg font-bold font-source-pro ">
//             {" "}
//             Secure Youe Family’s Health With Corporate Health Insurance
//           </p>

//           <p className="text-secondary lg:text-[18px] text-[14px] mt-[24px]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
//             amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//             sed do eiusmod tempor.
//           </p>
//           <button className="mt-[36px] bg-orange text-white rounded px-[30px] py-[12px]">
//             Grt Quote
//           </button>
//         </div>
//         <div>
//           <img src={CorporateHealthBannerImg.src} className="!w-full" />
//         </div>
//       </div>
//     </div>

//   </Slider>
// </div>

export default CorporateHealthEnquiryBanner;
