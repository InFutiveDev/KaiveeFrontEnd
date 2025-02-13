import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import AwardsImg from "assets/images/about/awards/healthcare-award 1.png";
import BreadCrumb from "components/breadcrumb";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import Image from "next/image";
import BannerImage from "assets/images/about/awards/Award & Accredation 1263x300.webp";
import MobileImage from "assets/images/about/awards/Award & accredation 1000 x 600.webp";
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
const AwardsAccreditaionBanner = () => {
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
        <BreadCrumb
          active="Awards & Accreditations"
          breadcrumblist={breadcrumblist}
        />
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
      {/* <div className="relative w-full  items-center flex  sm:hidden">
        <Image
          quality={100}
          width={1000}
          height={400}
          layout="fixed"
          alt={"about image"}
          className=" object-fill md:mb-0 mb-3  h-auto w-full object-center "
          src={MobileImage}
        />
      </div> */}
    </div>
  );
};
// <div className="container" style={{ width: "100%" }}>
//   <Slider {...settings} className="carousel desktop-banner about">
//     <div className="home-slider-swiper">
//       <div className="grid gap-[30px] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-2">
//         <div>
//           <BreadCrumb
//             active=" Awards & Accreditations"
//             breadcrumblist={breadcrumblist}
//           />
//           <p className="xl:text-[48px] lg:text-[32px] md:text-[28px] font-semibold font-source-pro">
//             Winer of 2nd IHW Digital Health Award 2022
//           </p>

//           <span className="mt-[20px] md:mt-[36px] inline-block border-2 border-dashed border-orange bg-white text-black rounded-full lg:px-[20px] px-[12px]
//           py-[12px] xl:text-[24px] lg:text-[16px] md:text-[13px] text-[11px] font-semibold font-source-pro">
//             In the category of Digital Application In Diagnostics
//           </span>
//         </div>
//         <div>
//           <div className="flex justify-end">
//             <Image width={440} height={440} src={AwardsImg.src} alt="csr-banner" className=" object-fill " loading='eager' />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="home-slider-swiper">
//       <div className="grid gap-[30px] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2">
//         <div>
//           <p className="xl:text-[48px] lg:text-[32px] md:text-[28px] font-semibold font-source-pro">
//             Winer of 2nd IHW Digital Health Award 2022{" "}
//           </p>
//           <span className="mt-[20px] md:mt-[36px] inline-block border-2 border-dashed border-orange bg-white text-black rounded-full lg:px-[20px] px-[12px]
//            py-[12px]  xl:text-[24px] lg:text-[16px] md:text-[13px] text-[11px] font-semibold font-source-pro">
//             In the category of Digital Application In Diagnostics
//           </span>
//         </div>
//         <div>
//           <div className="flex justify-end">
//             <Image width={440} height={440} src={AwardsImg.src} alt="csr-banner" className=" object-fill " loading='eager' />
//           </div>
//         </div>
//       </div>
//     </div>
//   </Slider>
// </div>

export default AwardsAccreditaionBanner;
