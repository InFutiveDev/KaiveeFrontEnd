import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BreadCrumb from "components/breadcrumb";
import BannerImage from "assets/images/health-packages/health package 1400x300.webp";
import MobileImage from "assets/images/health-packages/main health package 1000 x 600.webp";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import Image from "next/image";

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
const HealthPackagesBanner = () => {
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
        <BreadCrumb active="Health packages" breadcrumblist={breadcrumblist} />
      </div>
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
//       <div className="grid justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-2">
//         <div className="relative">
//           <div className="pb-3">
//             <BreadCrumb
//               active="Health packages"
//               breadcrumblist={breadcrumblist}
//             />
//             <p className="xl:text-[48px] text-xl font-bold font-source-pro mb-0">
//               Your Health is <br className="xl:block hidden" /> Our Priority
//             </p>
//             <div className="absolute right-[174px] z-[-1] -top-10">
//               <Image width={200} height={200} className=" object-fill " src={TTWinkleImage.src} />
//             </div>
//             <p className="text-secondary lg:text-[18px] text-[14px] mt-[15px] xl:mt-[24px]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing<br className="xl:block hidden" /> elit, sed do
//               eiusmod tempor incididunt ut labore Lorem<br className="xl:block hidden" /> ipsum dolor sit amet,
//               consectetur adipiscing elit, sed<br className="xl:block hidden" /> do eiusmod tempor incididunt ut
//               labore{" "}
//             </p>
//           </div>
//           <div className="mt-[15px] xl:mt-[36px] lg:flex gap-3">
//             <div className="flex items-center gap-1 lg:mb-0 mb-2">
//               <div>
//                 <HealthInstagramSVG />
//               </div>
//               <span className="font-bold font-source-pro text-[16px]">Instagram_Account</span>
//             </div>
//             <div className="flex items-center gap-1 lg:mb-0 mb-2">
//               <div>
//                 <HealthTwiterSVG />
//               </div>
//               <span className="font-bold font-source-pro text-[16px]">Twiter_Account</span>
//             </div>
//             <div className="flex items-center gap-1 lg:mb-0 mb-2">
//               <div>
//                 <HealthFacebookSVG />
//               </div>
//               <span className="font-bold font-source-pro text-[16px]">Facebook_Account</span>
//             </div>
//           </div>
//           <div className="absolute -top-2  right-[-35px]">
//             <img src={MedicalCross.src} />
//           </div>
//         </div>
//         <div>
//           <div className=" relative flex justify-center z-10 ">
//             <img src={HealthPackagesBannerImg.src} className="!w-[70%]"/>
//           </div>
//         </div>
//       </div>
//     </div>

//   </Slider>
// </div>

export default HealthPackagesBanner;
