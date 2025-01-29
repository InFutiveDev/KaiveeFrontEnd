import React, { useEffect, useState } from "react";
import HealthPackagesBanner from "./HealthPackagesBanner";
import LogoCity from "assets/images/health-packages/logo1.png";
import HealthPackagesCard from "./HealthPackagesCard";
import WhyChoose from "components/WhyChoose";
import { GalleryImg } from "assets/images/SvgImage";
import { CallBlackImg } from "assets/images/SvgImage";
import Link from "next/link";
// why choose
import img11 from "assets/images/why choose us/1.png";
import img22 from "assets/images/why choose us/2.png";
import img33 from "assets/images/why choose us/3.png";
import img44 from "assets/images/why choose us/4.png";
import img55 from "assets/images/why choose us/5.png";
import img66 from "assets/images/why choose us/6.png";
import img77 from "assets/images/why choose us/7.png";
import img88 from "assets/images/why choose us/8.png";
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
        <h1 className="text-[18px] lg:text-[26px] md:text-[22x] text-black  font-semibold font-source-pro mb-[20px]">
          {" "}
          Best Health Checkup Packages At Affordable Prices In Delhi
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
            <li className="text-secondary text-[16px] lg:text-[16px] md:text-xl">
              Is indigestion keeping you awake at night? Is frequent fever
              taking a toll on your overall health? Feel shortness of breath or
              dizziness after a few miles of walking? Such symptoms, if ignored,
              may lead to major health problems. Therefore, regular health
              checkup is necessary for accurate diagnosis that can help guide
              the treatment process.
            </li>
            <li className="text-secondary text-[16px] lg:text-[16px] md:text-xl">
              City X-Ray & Scan Clinic is Delhi’s leading diagnostic centre,
              providing comprehensive{" "}
              <span className="font-bold">health checkup packages</span> at an
              affordable price. We are acclaimed for our world-class technology,
              state-of-the-art facilities, fast & accurate results and over 29
              years of excellence in diagnostic services. This enables us to
              provide tailored health checkup solutions that meet the unique
              medical needs of our patients.
            </li>
            <li className="text-secondary text-[16px] lg:text-[16px] md:text-xl pb-[10px]">
              Best health checkup packages near me in Delhi? Call us today to
              discuss the right healthcare package for you.
            </li>
          </ul>
          <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro">
            Preventive Health Checkup Packages With City X-Ray & Scan Clinic
          </h2>
          <ul className="md:ml-[10px] flex flex-col gap-2 mt-[10px]">
            <li className="text-secondary text-[16px] lg:text-[16px] md:text-xl">
              At City X-Ray & Scan Clinic, we believe that the health of you and
              your beloved ones is the most precious in this life. Therefore,
              proper diagnosis and care are important to prevent the onset of
              illness and diseases. Our preventive health checkup packages help
              build a strong shield that secures your health through effective
              and timely diagnosis.
            </li>
            <li className="text-secondary text-[16px] lg:text-[16px] md:text-xl">
              Thanks to advanced healthcare technologies, diseases that were
              earlier considered life-threatening can now be cured, provided it
              is diagnosed at an early stage. Regular checkups can help evaluate
              your health thoroughly, detect potential health conditions and
              give you complete peace of mind. Our primary objective is to help
              identify and treat a wide range of diseases before they become
              detrimental to your health.
            </li>
            <li className="text-secondary text-[16px] lg:text-[16px] md:text-xl">
              We recommend whole body checkup for people who have poor or
              irregular food habits, high-stress lifestyles, long working hours
              or are at a high risk of certain diseases. A timely checkup can
              help evaluate your health condition, monitor early symptoms and
              diagnose a wide range of diseases that may be detrimental if left
              untreated.
            </li>
            <li className="text-secondary text-[16px] lg:text-[16px] md:text-xl pb-[10px]">
              Early diagnosis through our healthcare packages can help guide the
              treatment process and cure. It can also help reduce your medical
              expenses in treating diseases that become life-threatening in the
              long run.
            </li>
          </ul>
          <p className="text-black font-semibold text-[16px] lg:text-[16px] md:text-xl">
            To get the best full body checkup price in Delhi, call us at
            011-4725-2000 today.
          </p>
          <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro">
            Best Health Checkup Packages At Affordable Prices In Delhi Types Of
            Health Checkups We Specialise In
          </h2>

          <p className="text-secondary text-[16px] lg:text-[16px] md:text-xl  md:pb-0 pb-[10px]">
            We are an award-winning diagnostic centre with over 29 years of
            excellence in high-quality medical diagnostics and patient care.
            Understanding the unique healthcare needs of our patients, we have
            tailored a wide range of packages that include:
          </p>
          <ul className="md:ml-[10px] flex flex-col gap-2 mt-[10px]">
            <li
              className="text-secondary text-[16px] lg:text-[16px] md:text-xl ml-[30px]"
              style={{ listStyleType: "disc" }}
            >
              Full Body Checkup: The advanced annual full body checkup comprises
              50+ tests, catering to different parts of the body and health
              conditions. You can also book our basic full-body checkup package
              that includes 30+ tests.
            </li>
            <li
              className="text-secondary text-[16px] lg:text-[16px] md:text-xl ml-[30px]"
              style={{ listStyleType: "disc" }}
            >
              Customised Health Packages: If you are at a risk of certain health
              condition or your doctor suspects the early symptoms to be of a
              common disease, our customised health packages are most suitable.
              The packages can be tailored depending on your medical needs and
              the health condition to be diagnosed.
            </li>
          </ul>
          <p className="text-secondary text-[16px] lg:text-[16px] md:text-xl">
            When it comes to reliable full-body checkup near me, we ensure
            certified doctors & technicians, advanced diagnostic procedures,
            fast & accurate reporting, and home sample collection.
          </p>
          <p className="text-secondary text-[16px] lg:text-[16px] md:text-xl">
            Book today and get attractive discounts on your full body checkup
            price.
          </p>
        </div>
      </div>
      <div className="bg-white p-2">
        <WhyChoose data={data} />
      </div>
      <div className="background-image-health flex justify-center items-center ">
        <div className="flex px-[30px] justify-center items-center flex-col gap-4">
          <p className="text-white text-center text-[40px] font-source-pro font-bold pb-2">
            Your Health Our Happiness
          </p>
          <p className="text-white text-center font-normal pb-3">
            Didn't find what you were looking for! Click to call us now.
          </p>
          <div className="flex gap-2">
            {/* <button className="flex gap-x-1 md:gap-x-2 justify-center items-center text-orange bg-white rounded py-[10px] lg:px-[24px] px-[10px] lg:text-[18px] text-[14px]">
                  <CallBlackImg />
                  Call Now
                </button> */}
            <Link
              href="tel:011-2000-2000"
              className="flex gap-x-1 md:gap-x-2 justify-center items-center text-blacke font-medium bg-orange rounded py-[10px] lg:px-[24px] px-[10px] lg:text-[18px] text-[14px]"
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
    // id: 1,
    // title: "NABL Accredited Labs",
    // description: "Follows all protocols as per NABL & CAP Guidelines",
    icon: <Image src={img11} alt="NABL Accredited Icon" />,
  },
  {
    id: 2,
    title: "Trusted by Leading Doctors & Hospitals",
    description: "Qualified Pathologist at each lab",
    icon: <Image src={img22} alt="NABL Accredited Icon" />,
  },
  {
    id: 3,
    title: "Shortest Reporting Time",
    description: "Ownership and Innovation",
    icon: <Image src={img33} alt="NABL Accredited Icon" />,
  },
  {
    id: 4,
    title: "Accurate Test Reports",
    description: "Quality checks by Quality Assurance Team",
    icon: <Image src={img44} alt="NABL Accredited Icon" />,
  },
  {
    id: 5,
    title: "1 Crore+ Satisfied Customers",
    description: "Making superior quality diagnostics services",
    icon: <Image src={img55} alt="NABL Accredited Icon" />,
  },
  {
    id: 6,
    title: "100+ Labs",
    description: "Large Network Labs in all the major cities",
    icon: <Image src={img66} alt="NABL Accredited Icon" />,
  },
  {
    id: 7,
    title: "3000+ Collection Centres",
    description: "Expanding our reach and counting",
    icon: <Image src={img77} alt="NABL Accredited Icon" />,
  },
  {
    id: 8,
    title: "Scientific Orientation",
    description: "MD Doctors in Every Lab & State-of-the-Art Machines",
    icon: <Image src={img88} alt="NABL Accredited Icon" />,
  },
];
export default HealthPackagesLayout;
