import React from "react";

import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import BannerImage from "assets/images/biomedical-waster/Biomedical Waste 1400x300.webp";
import MobileImage from "assets/images/biomedical-waster/bio medical  waste 1000 x 600.webp";
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
const BiomedicalWasteBanner = () => {
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
//       <div className="grid gap-[50px] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-1 font-">
//         <div>
//           <BreadCrumb
//             active="Biomedical Waste "
//             breadcrumblist={breadcrumblist}
//           />
//           <p className="lg:text-[48px]  text-[18px] font-bold font-source-pro ">
//             Biomedical Waste <br /> Management
//           </p>
//           <p className="text-secondary mt-[24px] lg:text-[18px] text-[14px] font-normal">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
//           </p>
//           <div>
//             <button className="bg-orange text-white rounded lg:px-[30px] lg:py-[12px] px-[15px] py-[10px] text-[16px] my-[16px] font-semibold">
//               Learn More
//             </button>
//           </div>
//         </div>
//         <div>
//           <img src={BiomedicalWasteImage.src} className="!max-h-[400px]" />
//         </div>
//       </div>
//     </div>

//     <div className="home-slider-swiper">
//       <div className="grid gap-[50px] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-1 font-">
//         <div>
//           <BreadCrumb
//             active="Biomedical Waste "
//             breadcrumblist={breadcrumblist}
//           />
//           <p className="lg:text-[48px]  text-[18px] font-bold font-source-pro">
//             Biomedical Waste <br /> Management
//           </p>
//           <p className="text-secondary mt-[24px] lg:text-[18px] text-[14px] font-normal">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
//           </p>
//           <div>
//             <button className="bg-orange text-white rounded lg:px-[30px] lg:py-[12px] px-[15px] py-[10px] text-[16px] my-[16px] font-semibold">
//               Learn More
//             </button>
//           </div>
//         </div>
//         <div>
//           <img src={BiomedicalWasteImage.src} className="!max-h-[400px]" />
//         </div>
//       </div>
//     </div>
//   </Slider>
// </div>
export default BiomedicalWasteBanner;
