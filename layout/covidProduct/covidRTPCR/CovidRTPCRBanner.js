import React from "react";
import Slider from "react-slick";
import CovidRTPCRBannerImg from "assets/images/covid/OBJECT.png";
import { CovidImgOng } from "assets/images/SvgImage";
import { CovidImgTwo } from "assets/images/SvgImage";
import { CovidImgThree } from "assets/images/SvgImage";
import { CovidImgFour } from "assets/images/SvgImage";
import { CovidImgFive } from "assets/images/SvgImage";
import BreadCrumb from "components/breadcrumb";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import Image from "next/image";
import BannerImage from "assets/images/covid/Covid RT PCR test banner 1400x300.webp";
import MobileImage from "assets/images/covid/COVID RT PCR TEST 1000 x 600.webp";
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

const breadcrumblist = [
  { name: "Home", path: "/" },
  { name: "Covid 19", path: "/" },
];
const CovidRTPCRBanner = () => {
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
          alt={"covid RTP image"}
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
          alt={"covid RTP image"}
          className="object-fill md:mb-0 mb-3  h-auto w-full object-center "
          src={MobileImage}
        />
      </div>
    </div>
  );
};
// <div className="container" style={{ width: "100%" }}>
//    <BreadCrumb
//             active="Covid 19 RT-PCR"
//             breadcrumblist={breadcrumblist}
//           />
//   <Slider {...settings} className="carousel desktop-banner about">
//     <div className="home-slider-swiper">
//       <div className="grid gap-[50px] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-2">
//         <div>

//           <p className="xl:text-[48px] text-xl font-bold font-source-pro">
//             Lets Fight Corona virus
//           </p>
//           <p className="text-secondary mt-[24px] lg:text-[18px] text-[14px]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
//           </p>
//           <div className="flex flex-wrap gap-1 md:gap-2 xl:gap-5 mt-[20px]">
//             <div>
//               <CovidImgOng />
//             </div>
//             <div>
//               <CovidImgTwo />
//             </div>
//             <div>
//               <CovidImgThree />
//             </div>
//             <div>
//               <CovidImgFour />
//             </div>
//             <div>
//               <CovidImgFive />
//             </div>
//           </div>
//         </div>
//         <div className="px-[35px] lg:px-[70px]">
//           <Image src={CovidRTPCRBannerImg.src} loading='eager' width={200} height={200} className="!w-full" />
//         </div>
//       </div>
//     </div>
//   </Slider>
// </div>

export default CovidRTPCRBanner;
