import React from "react";
import ImageOne from "assets/images/about/qualityAssurance/08092022053433NABL-Logo-removebg-preview 1.png";
import ImageTwo from "assets/images/about/qualityAssurance/08092022054634NABH-Logo-removebg-preview 1.png";
import BreadCrumb from "components/breadcrumb";
import BannerImage from "assets/images/about/qualityAssurance/assurance 1400x300.webp";
import MobileImage from "assets/images/about/qualityAssurance/qulity assurance 1000 x 600.webp";
import Image from "next/image";
const breadcrumblist = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
];
const QualityAssuranceBanner = () => {
  return (
    <div className="w-full">
      <div className="2xl:pl-[10rem] xl:pl-[4rem] lg:pl-[1rem] pl-[16px]">
        <BreadCrumb
          active="Quality Assurance"
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
// <div className="" style={{ width: "100%" }}>
//   <div className="home-slider-swiper">
//     <BreadCrumb
//       active="Quality Assurance"
//       breadcrumblist={breadcrumblist}
//     />
//     <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-[120px] items-center">
//       <div className="lg:mb-0 mb-10">
//         <p className="xl:text-[36px] lg:text-[20px] text-lg font-bold pb-3 lg:leading-[30px] xl:leading-[45px] font-source-pro">
//           City X-Ray & Scan Clinic Provides Quality Assuarance For Your Good
//           <br />
//           Health
//         </p>

//         <p className="xl:text-[18px] lg:text-[16px] text-[14px]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
//           consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//           labore
//         </p>
//       </div>
//       <div className="">
//         <div className="flex justify-center">
//           <div className="rounded-[140px] xl:h-[300px] lg:h-[255px] md:h-[220px] h-[160px] assurance-image  lg:p-[42px] p-[30px] ">
//             <img src={ImageOne.src} />
//           </div>
//           <div className="xl:h-[300px] lg:h-[255px] md:h-[220px] h-[160px] rounded-[140px] assurance-image ml-[20px] mt-[50px] lg:p-[42px] p-[30px] ">
//             <img src={ImageTwo.src} />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
export default QualityAssuranceBanner;
