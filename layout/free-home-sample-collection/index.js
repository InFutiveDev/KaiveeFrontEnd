import React from "react";
// import FreeHomeBannerImg from "assets/images/freeHomeSampleCollection/front-view-young-male-courier-blue.png";
// import { CallYellowImg } from "assets/images/SvgImage";
// import { YellowBgCallSVG } from "assets/images/SvgImage";
// import { FilterSVG } from "assets/images/SvgImage";
// import { MessageSVG } from "assets/images/SvgImage";
import InquiryForm from "components/inquiryForm";
import WhyChoose from "components/WhyChoose";
// why choose
import ImageTwo from "assets/images/Finalimg/Why Choose Us/10M+ Happy Patients.webp";
import ImageThree from "assets/images/Finalimg/Why Choose Us/30 Years of Excellence in Diagnostic Health Care.webp";
import ImageFive from "assets/images/Finalimg/Why Choose Us/Affordable.webp";
import ImageSix from "assets/images/Finalimg/Why Choose Us/Fast & Accurate Results.webp";
import ImageSeven from "assets/images/Finalimg/Why Choose Us/Free Home Sample Collection.webp";
import ImageNine from "assets/images/Finalimg/Why Choose Us/Large Menu of Tests Available.webp";
import ImageEight from "assets/images/Finalimg/Why Choose Us/NABL & NABH Certified Centre.webp";
import ImageOne from "assets/images/Finalimg/Why Choose Us/Team of Experienced Doctor & Staffs.webp";
import ImageFour from "assets/images/Finalimg/Why Choose Us/World Class Technology.webp";
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
        {/* <div className="container ">
          <div className="grid  justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-1">
            <div>
              <BreadCrumb
                active="Free home sample collection"
                breadcrumblist={breadcrumblist}
              />
              <p className="text-5xl font-bold">
                {" "}
                Free Home Sample <br /> Collection
              </p>
              <div className="mt-[24px] flex flex-col gap-3">
                <div className=" flex gap-3 items-center">
                  <div>
                    <YellowBgCallSVG />
                  </div>
                  <span className="text-secondary">
                    Call us on 9253****** or just say hi on whatsapp at to book
                    an appointment
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <div>
                    <FilterSVG />
                  </div>
                  <span className="text-secondary">
                    Phlebotomist will visit Home to Collect Sample
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <div>
                    <MessageSVG />
                  </div>
                  <span className="text-secondary">
                    Get SAM with Login Credentials to Download your Report
                    Online
                  </span>
                </div>
              </div>
              <button className="mt-[36px] bg-orange text-white rounded px-[30px] py-[12px]">
                Contact Now
              </button>
            </div>
            <div>
              <Image
                width={500}
                height={500}
                loading="eager"
                className=" object-fill "
                src={FreeHomeBannerImg.src}
              />
            </div>
          </div>
        </div> */}
      </section>
      <div className="container py-6">
        <div className="flex gap-1  py-2 lg:flex-row md:flex-row flex-col ">
          <div className="lg:w-5/6 md:w-3/4 w-full">
            <div>
              <h1 className="text-lg sm:text-[26px] font-[400] mb-[20px]">
                Blood Test At Home By City X-Ray
              </h1>

              <div className="flex flex-col gap-y-2">
                <p className="text-secondary text-[16px] sm:text-[16px]">
                  In this pandemic, it can be difficult for most people to step
                  out of their homes for blood checkups. And for others, it can
                  be risky. At Kaivee, we understand that health cannot take a
                  backseat even if there’s a COVID-19 outbreak going on. With
                  the Kaivee home collection service, you have the convenience
                  of getting blood tests at home at an affordable price without
                  compromising on your safety. The home visit service is
                  especially helpful for people having weaker immunity and those
                  who are at a higher risk of facing major complications from
                  COVID-19. So instead of heading outside, having your blood
                  sample collected at home is a safer way to ensure all health
                  needs are fulfilled.
                </p>
                <h2 className="text-lg sm:text-[24px] font-[400] mb-[20px]">
                  You Just Need To Follow Some Simple Steps To Book A Home
                  Collection Visit.
                </h2>
                <div className="text-secondary text-[16px] sm:text-[16px]">
                  <h3 className=" font-normal ">
                    1. Pick A Convenient Location
                  </h3>
                  <br />
                  Testing at home is less stressful than taking the risk of
                  stepping outside during a pandemic. To book a home visit, all
                  you need to do is add your location details and qualified
                  phlebotomists from Metropolis will be at your doorstep for
                  home blood collection
                </div>
                <div className="text-secondary text-[16px] sm:text-[16px]">
                  <h3 className=" font-normal ">
                    2. Professional & Highly Trained Phlebotomists
                  </h3>
                  <br />
                  At Metropolis, all our phlebotomists are professional and
                  highly trained in what they do. They ensure utmost safety and
                  follow strict hygiene protocols while collecting your blood
                  samples.
                </div>
                <div className="text-secondary text-[16px] sm:text-[16px]">
                  <h3 className=" font-normal ">
                    3. Flexibility And Convenience
                  </h3>
                  <br />
                  You can book an appointment as per your convenient time and
                  get your blood sample collected safely from home. The blood
                  sample collection from home service is also available on
                  Sundays.
                </div>
                <div className="text-secondary text-[16px] sm:text-[16px]">
                  <h3 className=" font-normal ">
                    4. Get Your Test Reports Online
                  </h3>
                  <br />
                  Book a home visit and receive your test reports on email
                  within 24-48 hours of the sample collection. With this
                  service, you have the peace of mind of getting your blood
                  sample taken safely at home and the convenience of viewing
                  your reports online.
                </div>
              </div>
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
              Your Health Our Happiness
            </p>
            <p className="text-white text-center ">
              Didn't find what you were looking for! Click to call us now.
            </p>
            <div className="flex gap-2">
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
      <div className="py-[70px]">
        <WhyChoose data={data} />
      </div>
    </div>
  );
};
const data = [
  {
    title: "Team of Experienced <br /> Doctors & Staffs",
    image: ImageOne,
  },
  {
    title: "10M+ Happy Patients",
    image: ImageTwo,
  },
  {
    title: "31 Year of Excellence in <br /> Diagnostic Healthcare",
    image: ImageThree,
  },
  {
    title: "World Class Technology",
    image: ImageFour,
  },
  {
    title: "Fast & Accurate Results",
    image: ImageSix,
  },
  {
    title: "Affordable",
    image: ImageFive,
  },
  {
    title: "Free Home Sample <br /> Collection",
    image: ImageSeven,
  },
  {
    title: "NABL & NABH Certified <br /> Centre",
    image: ImageEight,
  },
  {
    title: "Large Menu of Tests <br /> Available ",
    image: ImageNine,
  },
];
export default FreeHomeSampleCollectionLayout;
