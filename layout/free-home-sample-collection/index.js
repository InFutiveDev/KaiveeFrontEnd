import React from "react";
// import FreeHomeBannerImg from "assets/images/freeHomeSampleCollection/front-view-young-male-courier-blue.png";
// import { CallYellowImg } from "assets/images/SvgImage";
// import { YellowBgCallSVG } from "assets/images/SvgImage";
// import { FilterSVG } from "assets/images/SvgImage";
// import { MessageSVG } from "assets/images/SvgImage";
import InquiryForm from "components/inquiryForm";
import WhyChoose from "components/WhyChoose";
// why choose
import img11 from "assets/images/whychooseus/1.png";
import img22 from "assets/images/whychooseus/2-png.png";
import img33 from "assets/images/whychooseus/icon-3.png";
import img44 from "assets/images/whychooseus/3-png.png";
import img55 from "assets/images/whychooseus/4-png.png";
import img66 from "assets/images/whychooseus/5-png.png";
import img77 from "assets/images/whychooseus/6-png.png";
import img88 from "assets/images/whychooseus/7-png.png";
import Image from "next/image";
// import BreadCrumb from "components/breadcrumb";
import LazyLoad from "react-lazyload";
import Link from "next/link";
// import Image from "next/image";
import FreeHomeSampleCollectionBanner from "./FreeHomeSampleCollectionBanner";
import { CallBlackImg } from "assets/images/SvgImage";

const breadcrumblist = [{ name: "Home", path: "/" }];

const FreeHomeSampleCollectionLayout = () => {
  return (
    <div>
      <section>
        <div>
          <FreeHomeSampleCollectionBanner />
        </div>
       
      </section>
      <div className="container py-6">
        <div className="flex gap-1  py-2 lg:flex-row md:flex-row flex-col ">
          <div className="lg:w-5/6 md:w-3/4 w-full">
            <div>
              <h1 className=" text-secondary text-lg sm:text-[26px]  mb-[20px]">
                Various Tests At Home By Us
              </h1>

              <div className="flex flex-col gap-y-2">
                <p className="text-secondary text-[18px] sm:text-[18px]">
                  At Kaivee Healthcare, we make healthcare more convenient by offering home sample collection for your blood tests. Skip the hassle of visiting a lab and let our certified professionals come to your home at a time that works best for you.
                </p>
                <h2 className="text-lg sm:text-[24px] font-[400] mb-[10px]">
                  You Just Need To Follow Some Simple Steps To Book A Home
                  Collection Visit.
                </h2>
                <div className="text-secondary text-[18px] sm:text-[18px] px-2">
                  <p>
                    Booking your home collection with Kaivee Healthcare is easy and quick.
                    Just follow these simple steps:
                  </p>

                  <h3 className=" font-bold ">
                    1. Choose Your Test
                  </h3>

                  Select the blood tests you want from our wide range of diagnostic services.
                </div>
                <div className="text-secondary text-[18px] sm:text-[18px] px-2">
                  <h3 className=" font-bold ">
                    2. Enter Your Details
                  </h3>

                  Provide your personal details and preferred time for the home visit.
                </div>
                <div className="text-secondary text-[18px] sm:text-[18px] px-2">
                  <h3 className=" font-bold ">
                    3. Schedule a Convenient Time
                  </h3>

                  Pick a time that suits you best for the sample collection.
                </div>
                <div className="text-secondary text-[18px] sm:text-[18px] px-2">
                  <h3 className=" font-bold ">
                    4. Confirm the Booking
                  </h3>

                  Complete the booking and get a confirmation of your appointment.
                </div>
                <div className="text-secondary text-[18px] sm:text-[18px] px-2">
                  <h3 className=" font-bold ">
                    4. Sit Back and Relax:
                  </h3>

                  Our professional technician will arrive at your location, collect the samples, and ensure your tests are processed with the highest accuracy.
                </div>
                <div className="text-secondary text-[18px] sm:text-[18px] px-2">
                  <h3 className=" font-bold">
                    4. Get Results Online:
                  </h3>

                  Receive your test results securely through our online portal—quick and hassle-free.
                </div>
              </div>
              <p className="text-[#D41958]" >It's that simple to get your blood tests done without leaving your home!</p>
            </div>
          </div>
          <div className="sticky lg:top-[197px] xl:top-[161px] mt-2 h-min flex justify-end lg:w-2/4 ">
            <InquiryForm />
          </div>
        </div>
      </div>
      <div>
        <div className="background-image-freehome-sample flex justify-center items-center ">
          <div className="flex px-[30px] justify-center items-center flex-col gap-4">
            <p className="text-white text-center text-3xl font-bold">
              Book Your Home Collection Today!
            </p>
            <p className="text-white text-center ">
              Easy, Convenient, and Fast | Get Results Online | 24/7 Customer Support
            </p>
            <div className="flex gap-2">
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
      <div className="py-[70px]">
        <WhyChoose data={data} />
      </div>
    </div>
  );
};
const data = [
  {
    id: 1,
    title: "NABL Accredited Labs",
    
    icon: <Image src={img33} alt="NABL Accredited Icon" />,
  },
  {
    id: 2,
    title: "Trusted by Leading Doctors & Hospitals",
    
    icon: <Image src={img22} alt="doctors Icon" />,
  },
  {
    id: 3,
    title: "Shortest Reporting Time",
  
    icon: <Image src={img55} alt="time Icon" />,
  },
  {
    id: 4,
    title: "Accurate Test Reports",
   
    icon: <Image src={img44} alt="report Icon" />,
  },
  {
    id: 5,
    title: "Satisfied Customers",
    
    icon: <Image src={img11} alt="customer Icon" />,
  },
  {
    id: 6,
    title: "Most Affordable Prices",
    
    icon: <Image src={img66} alt="NABL Accredited Icon" />,
  },
  {
    id: 7,
    title: "Painless Sample Collection",
    
    icon: <Image src={img77} alt="collection Icon" />,
  },
  {
    id: 8,
    title: "Scientific Orientation",
    
    icon: <Image src={img88} alt="scientific Icon" />,
  },
];
export default FreeHomeSampleCollectionLayout;
