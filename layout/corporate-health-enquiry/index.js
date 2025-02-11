import React from "react";
import CorporateHealthEnquiryBanner from "./CorporateHealthEnquiryBanner";
import { YelloShadoRightSVG } from "assets/images/SvgImage";
import { YelloShadoLeftSVG } from "assets/images/SvgImage";
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
import CorporateHealthEnquiry from "components/inquiryForm/CorporateHealthEnquiry";

const CorporateHealthLayout = () => {
  return (
    <>
      <section>
        {/* className="web-view relative flexbox large-container" */}
        <div>
          <CorporateHealthEnquiryBanner />
        </div>
        {/* <div className="absolute top-0 left-0">
          <YelloShadoLeftSVG />
        </div>
        <div className="absolute top-0 right-0">
          <YelloShadoRightSVG />
        </div> */}
      </section>
      <div>
        <div className="container py-[70px]">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="md:col-span-2 sm:col-span-1 lg:order-first		 order-last">
              <h1 className="text-[18px] lg:text-[26px] md:text-[22x] text-black  font-semibold font-source-pro mb-[20px]">
                Corporate Health Enquiry
              </h1>
              <div className="flex flex-col gap-y-2">
                <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A]">
                  At <span className="font-bold">Kaivee Healthcare</span>, we understand the importance of a <span className="font-bold">healthy workforce</span> in driving business success. Our <span className="font-bold">Corporate Health Enquiry</span> services are designed to provide <span className="font-bold">comprehensive health solutions</span> tailored to your organization’s needs. Whether you are looking to offer <span className="font-bold">employee wellness programs</span>, <span className="font-bold">preventive health check-ups</span>, or <span className="font-bold">customized diagnostic services</span>, we are here to partner with you to ensure the well-being of your employees.
                </p>
                <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A]">
                  By collaborating with us, you’ll ensure that your employees have access to
                  <span className="font-bold"> high-quality diagnostics</span> and
                  <span className="font-bold"> preventive healthcare</span>, enabling them to stay
                  <span className="font-bold"> healthier</span>,
                  <span className="font-bold"> happier</span>, and
                  <span className="font-bold"> more productive</span>.
                </p>


                <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro">
                  Key Benefits of Corporate Health Enquiry
                </h2>
                {/* <p className="text-black font-semibold text-[32px] "></p> */}
                <p className="text-secondary text-[18px]  lg:text-[18px] md:text-xl">
                  <b>1.  Improved Employee Well-Being:</b> Regular health check-ups and preventive care can <strong>identify health risks </strong>  early, leading to healthier, more engaged employees.
                </p>
                <p className="text-secondary text-[18px] lg:text-[18px] md:text-xl  ">
                  <b>2.  Boost Productivity & Engagement:</b> A healthier workforce is a more productive one. Offering healthcare benefits shows your employees that you care, leading to higher <strong>job satisfaction and increased engagement</strong> .
                </p>
                <p className="text-secondary text-[18px] lg:text-[18px] md:text-xl">
                  <b> 3.  Cost-Effective Healthcare Solutions:</b> Offering health services through corporate tie-ups is<strong> more affordable </strong> than individual health plans. It’s an <strong> investment in long-term productivity </strong>and reduced absenteeism.
                </p>
                <p className="text-secondary text-[18px]  lg:text-[18px] md:text-xl">
                  <b>4.  Comprehensive Health Screenings:</b> We offer a variety of<strong> health packages </strong>designed specifically for organizations. From basic screenings to advanced tests, our packages are customizable to fit your company’s needs.
                </p>
                <p className="text-secondary text-[18px] lg:text-[18px] md:text-xl">
                  <b>5.  Convenient Services:</b> Our services are designed with your employees’ convenience in mind, including<strong> on-site check-ups, home sample collections, and easy access to reports</strong>.

                </p>
                <p className="text-secondary text-[18px]  lg:text-[18px] md:text-xl">
                  <b> 6. Data-Driven Insights:</b> Access detailed <strong>health reports and analytics </strong> that can help your company monitor overall employee health trends and identify potential wellness programs.
                </p>

                <p>
                  By integrating <span className="font-bold">Kaivee Healthcare</span> into your organization’s health
                  initiatives, you are investing in <span className="font-bold">preventive care</span>, <span className="font-bold">wellness</span>,
                  and the overall success of your team.
                </p>
                <p>Let us help you create a healthier, happier, and more productive workplace.</p>
              </div>
            </div>
            <div className="col-span-1 h-min  sticky lg:top-[197px] xl:top-[161px]  lg:order-last order-first">
              {/* <InquiryForm /> */}
              <CorporateHealthEnquiry />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        {/* <div className="container py-[70px]"> */}
        <WhyChoose data={data} />
        {/* </div> */}
      </div>
    </>
  );
};

const data=[
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
    title: "100+ Labs",
    
    icon: <Image src={img66} alt="NABL Accredited Icon" />,
  },
  {
    id: 7,
    title: "3000+ Collection Centres",
    
    icon: <Image src={img77} alt="collection Icon" />,
  },
  {
    id: 8,
    title: "Scientific Orientation",
    
    icon: <Image src={img88} alt="scientific Icon" />,
  },
];
export default CorporateHealthLayout;
