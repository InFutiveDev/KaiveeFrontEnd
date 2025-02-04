import React from "react";
// import FreeHomeBannerImg from "assets/images/freeHomeSampleCollection/front-view-young-male-courier-blue.png";
// import { CallYellowImg } from "assets/images/SvgImage";
// import { YellowBgCallSVG } from "assets/images/SvgImage";
// import { FilterSVG } from "assets/images/SvgImage";
// import { MessageSVG } from "assets/images/SvgImage";
import InquiryForm from "components/inquiryForm";
import WhyChoose from "components/WhyChoose";
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
                Blood Test At Home By us
              </h1>

              <div className="flex flex-col gap-y-2">
                <p className="text-secondary text-[16px] sm:text-[16px]">
                  At <span className="font-bold">Kaivee Healthcare</span>, we make healthcare more convenient by offering
                  <span className="font-bold"> home sample collection</span> for your blood tests. Skip the hassle of
                  visiting a lab and let our <span className="font-bold">certified professionals</span> come to your home
                  at a time that works best for you.
                </p>
                <h2 className="text-lg sm:text-[24px] font-[400] mb-[20px]">
                  You Just Need To Follow Some Simple Steps To Book A Home
                  Collection Visit.
                </h2>
                <div className="text-secondary text-[16px] sm:text-[16px]">
                  <p>
                    <span className="font-bold ">Booking your home collection</span> with Kaivee Healthcare is easy and quick.
                    Just follow these <span className="font-bold">simple steps</span>:
                  </p>

                  <h3 className=" font-bold ">
                    1. Choose Your Test
                  </h3>

                  Select the blood tests you want from our wide range of diagnostic services.
                </div>
                <div className="text-secondary text-[16px] sm:text-[16px]">
                  <h3 className=" font-bold ">
                    2. Enter Your Details
                  </h3>

                  Provide your personal details and preferred time for the home visit.
                </div>
                <div className="text-secondary text-[16px] sm:text-[16px]">
                  <h3 className=" font-bold ">
                    3. Schedule a Convenient Time
                  </h3>

                  Pick a time that suits you best for the sample collection.
                </div>
                <div className="text-secondary text-[16px] sm:text-[16px]">
                  <h3 className=" font-bold ">
                    4. Confirm the Booking
                  </h3>

                  Complete the booking and get a confirmation of your appointment.
                </div>
                <div className="text-secondary text-[16px] sm:text-[16px]">
                  <h3 className=" font-bold ">
                    4. Sit Back and Relax:
                  </h3>

                  Our professional technician will arrive at your location, collect the samples, and ensure your tests are processed with the highest accuracy.
                </div>
                <div className="text-secondary text-[16px] sm:text-[16px]">
                  <h3 className=" font-bold">
                    4. Get Results Online:
                  </h3>

                  Receive your test results securely through our online portal—quick and hassle-free.
                </div>
              </div>
              <p >It’s that simple to get your blood tests done without leaving your home!</p>
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
              🚪 Easy, Convenient, and Fast | 💻 Get Results Online | 📞 24/7 Customer Support
            </p>
            <div className="flex gap-2">
              <Link
                href="tel:011-2000-2000"
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
export default FreeHomeSampleCollectionLayout;
