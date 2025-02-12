import React, { useEffect, useState } from "react";
import HealthPackagesBanner from "./HealthPackagesBanner";

import HealthPackagesCard from "./HealthPackagesCard";
import WhyChoose from "components/WhyChoose";

import { CallBlackImg } from "assets/images/SvgImage";
import Link from "next/link";
// why choose
import img1 from "assets/images/whychooseus/1.png";
import img2 from "assets/images/whychooseus/2-png.png";
import img3 from "assets/images/whychooseus/icon-3.png";
import img4 from "assets/images/whychooseus/3-png.png";
import img5 from "assets/images/whychooseus/4-png.png";
import img6 from "assets/images/whychooseus/5-png.png";
import img7 from "assets/images/whychooseus/6-png.png";
import img8 from "assets/images/whychooseus/7-png.png";
import Image from "next/image";
import LazyLoad from "react-lazyload";

const HealthPackagesLayout = ({ healthPackages }) => {
  const [cart, setCart] = useState({});

  const handleCartData = (cartData) => {
    setCart(cartData);
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
    }
  }, []);

  return (
    // <LazyLoad>
    <div>
      <section>
        <div>
          <HealthPackagesBanner />
        </div>
        {/* <div className=" absolute top-[10px] left-[10.3rem] xl:block hidden">
            <Image
              src={LogoCity.src}
              loading="eager"
              className=" object-fill "
              width={150}
              height={150}
            />
          </div> */}
      </section>
      <div className="py-[70px] container">
        <h1 className="text-[18px] lg:text-[26px] md:text-[22x] text-black  font-source-pro mb-[20px]">
          {" "}
          Your Health, Our Priority – Comprehensive Health Packages for Every Need
        </h1>
        {/* <p className="text-black font-semibold font-source-pro text-[32px] ">
            Health Packages
          </p> */}
        <div className="grid  2xl:grid-cols-4 xl:grid-cols-4   lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5">
          {healthPackages?.categoryData?.map((item, index) => (
            <HealthPackagesCard
              cart={cart}
              handleCartData={handleCartData}
              data={item}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#FAFAFA] ">
        <div className="container  py-[35px] md:py-[70px]">
          <ul className="md:ml-[10px] flex flex-col gap-2 mt-[10px]">
            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              Stay ahead of health issues with Kaivee Healthcare’s preventive health packages designed to detect potential risks early and keep you in control of your well-being.
            </p>

          </ul>
          <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro mt-2" >
            Preventive Health Packages
          </h2>
          <ul className="md:ml-[10px] flex flex-col gap-2 mt-[10px]">
            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              Health isn’t just about treating illnesses—it’s about preventing them. Our preventive health packages are tailored to suit different age groups, lifestyles, and medical needs, helping you catch health issues before they become serious.
            </p>

            <li className="text-secondary text-[18px] lg:text-[16px] md:text-xl">
              Choose from a range of packages that cover:
            </li>
            <ul className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] space-y-3">
              <li>
                <span className="font-bold">Basic Health Screenings:</span> Routine tests for general health check-ups.
              </li>
              <li>
                <span className="font-bold">Advanced Full Body Check-ups:</span> In-depth diagnostics for a complete health overview.
              </li>
              <li>
                <span className="font-bold">Lifestyle-Specific Packages:</span> Designed for individuals with sedentary jobs, high-stress levels, or specific health risks.
              </li>
              <li>
                <span className="font-bold">Senior Citizen Health Plans:</span> Focused on age-related conditions like diabetes, heart health, and bone density.
              </li>
              <li>
                <span className="font-bold">Women’s Health Packages:</span> Specialized tests for hormonal balance, reproductive health, and more.
              </li>
            </ul>
            <li className=" text-[18px] text-[#D41958] lg:text-[18px] md:text-xl pb-[10px]">
              Early detection can save lives—invest in your health today!
            </li>
          </ul>
          <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro mb-2">
            Best Health Checkup Packages at Affordable Prices
          </h2>

          <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A]">
            Quality healthcare shouldn’t come with a hefty price tag. At
             Kaivee Healthcare, we offer the best health checkup packages
            at affordable rates without compromising on accuracy or
            service quality.
          </p>

          <ul className="md:ml-[10px] flex flex-col gap-2 mt-[10px]">
            <li
              className="text-secondary text-[16px] lg:text-[16px] md:text-xl ml-[30px]"
              style={{ listStyleType: "disc" }}
            >
               <strong>Transparent Pricing </strong>: No hidden costs—just clear, upfront rates.
            </li>
            <li
              className="text-secondary text-[16px] lg:text-[16px] md:text-xl ml-[30px]"
              style={{ listStyleType: "disc" }}
            >
               <strong>Comprehensive Test Panels</strong>: Covering everything from basic blood tests to advanced diagnostics.
            </li>
            <li
              className="text-secondary text-[16px] lg:text-[16px] md:text-xl ml-[30px]"
              style={{ listStyleType: "disc" }}
            >
               <strong>Quick Turnaround</strong>: Fast reporting without compromising accuracy.
            </li>
            <li
              className="text-secondary text-[16px] lg:text-[16px] md:text-xl ml-[30px]"
              style={{ listStyleType: "disc" }}
            >
               <strong>Convenient Home Sample Collection</strong>: Get tested from the comfort of your home.
            </li>
          </ul>

          <p className="text-[#D41958] text-[18px] lg:text-[18px] md:text-xl mt-2">
            Stay healthy, stay informed—without breaking the bank.
          </p>
        </div>
      </div>
      <div className="bg-white p-2">
        <WhyChoose data={data} />
      </div>
      <div className="background-image-health flex justify-center items-center ">
        <div className="flex px-[30px] justify-center items-center flex-col gap-4">
          <p className="text-white text-center text-[40px] font-source-pro font-bold pb-2">
            Prioritize Your Health Today!
          </p>
          <p className="text-white text-center font-normal pb-3">
             Book Your Health Package Now | Home Sample Collection Available | Get Reports Online, Fast & Hassle-Free
          </p>
          <div className="flex gap-2">
            {/* <button className="flex gap-x-1 md:gap-x-2 justify-center items-center text-orange bg-white rounded py-[10px] lg:px-[24px] px-[10px] lg:text-[18px] text-[14px]">
                  <CallBlackImg />
                  Call Now
                </button> */}
            <Link
              href="tel:8800133928"
              className="flex gap-x-1 md:gap-x-2 justify-center items-center text-blacke font-medium bg-[#D41958] rounded py-[10px] lg:px-[24px] px-[10px] lg:text-[18px] text-[14px]"
            >
              <CallBlackImg />
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </LazyLoad>
  );
};

const data = [
  {
    id: 1,
    title: "NABL Accredited Labs",
    
    icon: <Image src={img3} alt="NABL Accredited Icon" />,
  },
  {
    id: 2,
    title: "Trusted by Leading Doctors & Hospitals",
    
    icon: <Image src={img2} alt="doctors Icon" />,
  },
  {
    id: 3,
    title: "Shortest Reporting Time",
  
    icon: <Image src={img5} alt="time Icon" />,
  },
  {
    id: 4,
    title: "Accurate Test Reports",
   
    icon: <Image src={img4} alt="report Icon" />,
  },
  {
    id: 5,
    title: "Satisfied Customers",
    
    icon: <Image src={img1} alt="customer Icon" />,
  },
  {
    id: 6,
    title: "100+ Labs",
    
    icon: <Image src={img6} alt="NABL Accredited Icon" />,
  },
  {
    id: 7,
    title: "3000+ Collection Centres",
    
    icon: <Image src={img7} alt="collection Icon" />,
  },
  {
    id: 8,
    title: "Scientific Orientation",
    
    icon: <Image src={img8} alt="scientific Icon" />,
  },
];
export default HealthPackagesLayout;
