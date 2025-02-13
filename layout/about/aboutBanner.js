import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import AboutBannerImg from "assets/images/about/aboutBanner.png";
import BreadCrumb from "components/breadcrumb";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import LazyLoad from "react-lazyload";
import BannerImage from "assets/images/about/About us 1400x300.jpg";
import MobileImage from "assets/images/about/about us 1000 x 600.webp";
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
  console.log("className", className);
  return (
    <button
      onClick={onClick}
      className={`about-nextarrow ${className}`}
      style={{ ...style }}
    >
      <NextIcons />,
    </button>
  );
};

const breadcrumblist = [{ name: "Home", path: "/" }];
const Aboutbanner = () => {
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
        <BreadCrumb active="About Us" breadcrumblist={breadcrumblist} />
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
// <LazyLoad>
//   <div className="container" style={{ width: "100%" }}>
//     <BreadCrumb active="About Us" breadcrumblist={breadcrumblist} />
//     <Slider {...settings} className="carousel desktop-banner about">
//       <div className="home-slider-swiper ">
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center md:gap-5 gap-3">
//           <div>
//             <p className="lg:text-[36px] md:text-[26px] text-xl font-semibold md:mb-3 mb-2 font-source-pro">
//               30<sub>th</sub> Anniversary celebration{" "}
//             </p>
//             <p className="lg:text-[18px] text-xs md:pb-3 pb-2 text-[#71717A] lg:leading-6 leading-[22px]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//               do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
//               amet, consectetur adipiscing elit, sed do eiusmod tempor
//               incididunt ut labore
//             </p>
//             <p className="text-orange lg:text-[36px] text-xl font-source-pro font-medium">
//               Spacial Anniversary Discount
//             </p>
//             <button className="md:mt-[24px] mt-[15px] bg-orange text-white rounded md:px-[30px] md:py-[12px] px-[20px] py-[6px] text-sm md:text-[16px]">
//               Up to 30% off
//             </button>
//           </div>
//           <div>
//             <div className="flex flex-wrap xl:justify-end lg:justify-center justify-between relative">
//               <div>
//                 <Image
//                   style={{ objectFit: "contain" }}
//                   src={AboutBannerImg}
//                   alt="bannerImg"

//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="home-slider-swiper ">
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center md:gap-5 gap-3">
//           <div>
//             <p className="lg:text-[36px] md:text-[26px] text-xl font-semibold md:mb-3 mb-2 font-source-pro">
//               30<sub>th</sub> Anniversary celebration{" "}
//             </p>
//             <p className="lg:text-[18px] text-xs md:pb-3 pb-2 text-[#71717A] lg:leading-6 leading-[22px]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//               do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
//               amet, consectetur adipiscing elit, sed do eiusmod tempor
//               incididunt ut labore
//             </p>
//             <p className="text-orange lg:text-[36px] text-xl font-source-pro font-medium">
//               Spacial Anniversary Discount
//             </p>
//             <button className="md:mt-[24px] mt-[15px] bg-orange text-white rounded md:px-[30px] md:py-[12px] px-[20px] py-[6px] text-sm md:text-[16px]">
//               Up to 30% off
//             </button>
//           </div>
//           <div>
//             <div className="flex flex-wrap xl:justify-end lg:justify-center justify-between relative">
//               <div>
//                 <Image
//                   style={{ objectFit: "contain" }}
//                   src={AboutBannerImg}
//                   alt="bannerImg"

//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="home-slider-swiper ">
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center md:gap-5 gap-3">
//           <div>
//             <p className="lg:text-[36px] md:text-[26px] text-xl font-semibold md:mb-3 mb-2 font-source-pro">
//               30<sub>th</sub> Anniversary celebration{" "}
//             </p>
//             <p className="lg:text-[18px] text-xs md:pb-3 pb-2 text-[#71717A] lg:leading-6 leading-[22px]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//               do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
//               amet, consectetur adipiscing elit, sed do eiusmod tempor
//               incididunt ut labore
//             </p>
//             <p className="text-orange lg:text-[36px] text-xl font-source-pro font-medium">
//               Spacial Anniversary Discount
//             </p>
//             <button className="md:mt-[24px] mt-[15px] bg-orange text-white rounded md:px-[30px] md:py-[12px] px-[20px] py-[6px] text-sm md:text-[16px]">
//               Up to 30% off
//             </button>
//           </div>
//           <div>
//             <div className="flex flex-wrap xl:justify-end lg:justify-center justify-between relative">
//               <div>
//                 <Image
//                   style={{ objectFit: "contain" }}
//                   src={AboutBannerImg}
//                   alt="bannerImg"

//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Slider>
//   </div>
// </LazyLoad>

export default Aboutbanner;
