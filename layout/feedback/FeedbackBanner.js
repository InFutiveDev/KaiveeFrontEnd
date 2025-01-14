import React from "react";
import Slider from "react-slick";
import FeedBack from "assets/images/feedback/Group 1410140921.png";
import BreadCrumb from "components/breadcrumb";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import BannerImage from "assets/images/feedback/feedback 1400x300.webp";
import MobileImage from "assets/images/feedback/review 1000 x 600.webp";
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
const FeedbackBanner = () => {
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
        <BreadCrumb active="Feedback" breadcrumblist={breadcrumblist} />
      </div>
      <div className="relative w-full  items-center hidden sm:flex">
        <Image
          quality={100}
          width={2000}
          height={400}
          layout="fixed"
          alt={"feedback"}
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
          alt={"feedback"}
          className=" object-fill md:mb-0 mb-3  h-auto w-full object-center "
          src={MobileImage}
        />
      </div>
    </div>
  );
};
// <div className="container" style={{ width: "100%" }}>
//           <BreadCrumb active="Feedback" breadcrumblist={breadcrumblist} />

//   <Slider {...settings} className="carousel desktop-banner ">
//     <div className="home-slider-swiper">
//       <div className="grid gap-[50px] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-2">
//         <div>
//           <p className="lg:text-[48px] text-lg font-bold font-source-pro">
//             We Want Your Feedback
//           </p>
//           <p className="text-secondary lg:text-[18px] text-[14px] mt-[24px]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
//           </p>
//         </div>
//         <div className="px-[35px] lg:px-[70px]">
//           <img src={FeedBack.src}  />
//         </div>
//       </div>
//     </div>
//     <div className="home-slider-swiper">
//       <div className="grid gap-[50px] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-2 ">
//         <div>
//           <p className="lg:text-[48px] text-lg font-bold font-source-pro">
//             We Want Your Feedback
//           </p>
//           <p className="text-secondary lg:text-[18px] text-[14px] mt-[24px]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
//           </p>
//         </div>
//         <div className="px-[35px] lg:px-[70px]">
//           <img src={FeedBack.src} />
//         </div>
//       </div>
//     </div>
//   </Slider>
// </div>

export default FeedbackBanner;
