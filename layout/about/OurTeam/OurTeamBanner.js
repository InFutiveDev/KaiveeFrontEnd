import React from "react";

import Image from "next/image";
import BreadCrumb from "components/breadcrumb";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import BannerImage from "assets/images/about/ourTeam/our team 1400x300.webp";
import MobileImage from "assets/images/about/ourTeam/our team 1000 x 600.webp";
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
  { name: "About Us", path: "/about" },
];
const OurTeamBanner = () => {
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
        <BreadCrumb active="Our Team" breadcrumblist={breadcrumblist} />
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
          src={BannerImage}
        />
      </div>
    </div>
  );
};
// <div className="container" style={{ width: "100%" }}>
//   <Slider {...settings} className="carousel desktop-banner about">
//     <div className="home-slider-swiper">
//       <div className="grid pr-0 lg:pr-[3rem] justify-between items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
//         <div className=" relative">
//           <BreadCrumb active="Our Team" breadcrumblist={breadcrumblist} />
//           <img
//             src={JoinOurTeam.src}
//             className="lg:!w-1/3 md:!w-[33%] !w-[33%] md:pb-0 pb-2"
//             alt="bannerImg"
//           />
//           <p className="lg:w-[70%] w-full text-gray-500 lg:text-[18px] text-xs lg:leading-6 leading-[22px] relative z-[9999] md:pb-0 pb-3">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//             labore
//           </p>
//           <div className="absolute z-10 top-[4.5rem] md:right-[-30px] lg:right-[-36px] xl:right-[-70px] 2xl:right-[-198px] bg-[#FAEED2] p-[30px] rounded-full xl:block lg:block md:block hidden">
//             <div className="lg:w-[128px] lg:h-[128px] md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center  bg-[#FFE0A2]">
//               <div className="">
//                 <img src={LogoImg.src} />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="flex justify-end relative">
//             <div>
//               <img
//                 width={"100%"}
//                 height={"100%"}
//                 style={{ objectFit: "contain" }}
//                 src={OurTeamBannerImg.src}
//                 alt="bannerImg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </Slider>
// </div>

export default OurTeamBanner;
