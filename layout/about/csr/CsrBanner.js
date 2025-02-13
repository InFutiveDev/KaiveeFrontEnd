import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CsrBannerImg from "assets/images/about/csr/csr-banner.png";
import { AboutCsrSocial } from "assets/images/SvgImage";
import { AboutCsrEducation } from "assets/images/SvgImage";
import { AboutCsrHealth } from "assets/images/SvgImage";
import { AboutCsrSkil } from "assets/images/SvgImage";
import BreadCrumb from "components/breadcrumb";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import Image from "next/image";
import BannerImage from "assets/images/about/csr/CSR 140X300.webp";
import MobileImage from "assets/images/about/csr/CSR 1000 x 600.webp";
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
const CsrBanner = () => {
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
        <BreadCrumb active="CSR" breadcrumblist={breadcrumblist} />
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
//       <div className="grid gap-[40px] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-2">
//         <div>
//           <BreadCrumb active="CSR" breadcrumblist={breadcrumblist} />
//           <p className="xl:text-4xl lg!text-[40px] font-semibold font-source-pro">
//             Corporate Social Responsibility
//           </p>
//           <p className="text-secondary xl:text-[18px] text-[14px] mt-[16px] xl:mt-[24px]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//             labore
//           </p>
//           <button className="mt-[36px] bg-[#F7A708] text-white rounded lg:px-[30px] lg:py-[12px] px-[20px] py-[6px] text-[16px]">
//             Contact Now
//           </button>
//         </div>
//         <div>
//           <div className="relative">
//             <img src={CsrBannerImg.src} alt="csr-banner" width={"100%"} />
//             {/* <div className="absolute top-4 left-[40%] rounded-lg blur-card p-[12px]">
//               <div className="flex gap-3">
//                 <AboutCsrSocial />
//                 <p>
//                   Social
//                   <br /> Welfare
//                 </p>
//               </div>
//             </div>
//             <div className="absolute top-32  rounded-lg blur-card p-[12px]">
//               <div className="flex gap-3">
//                 <AboutCsrEducation />
//                 <p>Education</p>
//               </div>
//             </div>
//             <div className="absolute bottom-8 left-[40%]  rounded-lg blur-card p-[12px]">
//               <div className="flex gap-3">
//                 <AboutCsrHealth />
//                 <p>HealthCare</p>
//               </div>
//             </div>
//             <div className="absolute top-32 right-0  rounded-lg blur-card p-[12px]">
//               <div className="flex gap-3">
//                 <AboutCsrSkil />
//                 <p>
//                   Skill <br /> Development
//                 </p>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="home-slider-swiper">
//       <div className="grid gap-[20px] xl:gap-[40px] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-2">
//         <div>
//           <BreadCrumb active="CSR" breadcrumblist={breadcrumblist} />
//           <p className="xl:text-4xl lg!text-[40px] font-semibold font-source-pro">
//             Corporate Social Responsibility
//           </p>
//           <p className="text-secondary xl:text-[18px] text-[14px] mt-[16px] xl:mt-[24px]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//             labore
//           </p>
//           <button className="mt-[20px] xl:mt-[36px] bg-[#F7A708] text-white rounded lg:px-[30px] lg:py-[12px] px-[20px] py-[6px] text-[16px]">
//             Contact Now
//           </button>
//         </div>
//         <div>
//           <div className="relative">
//             <img src={CsrBannerImg.src} alt="csr-banner" width={"100%"} />
//             {/* <div className="absolute top-4 left-[40%] rounded-lg blur-card p-[12px]">
//               <div className="flex gap-3">
//                 <AboutCsrSocial />
//                 <p>
//                   Social
//                   <br /> Welfare
//                 </p>
//               </div>
//             </div>
//             <div className="absolute top-32  rounded-lg blur-card p-[12px]">
//               <div className="flex gap-3">
//                 <AboutCsrEducation />
//                 <p>Education</p>
//               </div>
//             </div>
//             <div className="absolute bottom-8 left-[40%]  rounded-lg blur-card p-[12px]">
//               <div className="flex gap-3">
//                 <AboutCsrHealth />
//                 <p>HealthCare</p>
//               </div>
//             </div>
//             <div className="absolute top-32 right-0  rounded-lg blur-card p-[12px]">
//               <div className="flex gap-3">
//                 <AboutCsrSkil />
//                 <p>
//                   Skill <br /> Development
//                 </p>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   </Slider>
// </div>

export default CsrBanner;
