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
              Corporate Tie-up - Kaivee Healthcare
              </h1>
              <div className="flex flex-col gap-y-2">
                <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A]">
                With organizations moving faster than ever, there is no doubt that employee health and wellness are paramount to any organization is productivity and success. All companies with healthy workers have lower absenteeism, high morale, and want performance. Kaivee Healthcare provides Corporate Tie-up solutions for businesses of all sizes and industries, tailored to unique healthcare requirements. At our core, we believe that good health translates to good business, and we are on a mission to empower organizations to invest in holistic healthcare services for their employees.                </p>
                <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A]">
                Your employees get access to a comprehensive suite of medical services ranging from preventive health check-ups, doctor consultations, diagnostic tests to wellness programs with a Corporate Tie-up from Kaivee Healthcare. We have flexible packs tailored to work with organizations of all size including start-up, SME or corporate.                </p>


                <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro mt-2 mb-2">
                  Key Benefits of Corporate Health Enquiry
                </h2>
                {/* <p className="text-black font-semibold text-[32px] "></p> */}
                <p className="text-secondary text-[18px] lg:text-[18px] md:text-xl">
  <b>1. Complete Solution for Your Employee Health Needs:</b> 
  We offer comprehensive healthcare solutions ranging from health check-ups, OPD consultations, home sample collections, vaccination drives, and referrals to specialists. We provide solutions to both preventive and medicinal health care of employees.
</p>

<p className="text-secondary text-[18px] lg:text-[18px] md:text-xl">
  <b>2. Tailored Health Packages:</b> 
  As the best corporate health package in Dubai, our bundles can be constructed according to your workforce strength, budget, and industry specifications. Our health screening and well-being services go far beyond to include annual well-being checks, executive health assessment, and disease-specific wellness programs.
</p>

<p className="text-secondary text-[18px] lg:text-[18px] md:text-xl">
  <b>3. Wellness Initiatives and Onsite Health Camps:</b> 
  We conduct health camps, wellness sessions, and vaccination drives at your office premises through Kaivee Healthcare. These initiatives promote health awareness and preventive care among employees.
</p>

<p className="text-secondary text-[18px] lg:text-[18px] md:text-xl">
  <b>4. Effortless Management of Employee Healthcare:</b> 
  We have advanced technology that offers easy scheduling, online access to reports, and dedicated account managers to ensure seamless delivery of healthcare services to your employees.
</p>


                <p>
                By investing in employee health, you can improve your organizational performance with healthy employees. Kaivee Health Care has taken the initiative to partner with companies and provide comprehensive corporate healthcare solutions for their employees to yield measurable results.
                </p>
                <p className="text-[#D41958] mt-2">Let us help you create a healthier, happier, and more productive workplace.</p>
              </div>
            </div>
            <div className="col-span-1 h-min  sticky lg:top-[197px] xl:top-[161px]  lg:order-last order-first">
              {/* <InquiryForm /> */}
              <CorporateHealthEnquiry />
            </div>
          </div>
          <div className="mt-12">
  <h2 className=" text-2xl font-semibold text-black">Healthcare Services for Companies</h2>

  <ul className="mt-2 list-disc pl-2 space-y-2 text-secondary text-[18px] lg:text-[18px] md:text-xl">
    <li>
      <b>Annual Health Check-up Plans:</b> Regular health checks help catch early signs of sickness and encourage preventive healthcare. Our checks include key parameters such as diabetes, heart health, liver function, kidney health, and more.
    </li>
    <li>
      <b>Doctor OPD Services:</b> Consultations with General Physicians and Specialists. Kaivee Healthcare offers OPD services through its centers and provides home consultation options for employees.
    </li>
    <li>
      <b>Laboratory Tests & Diagnostics:</b> We provide a full spectrum of pathology and radiology services. Employees can get tested without disrupting work schedules, thanks to home sample collection services.
    </li>
    <li>
      <b>Vaccination Drives:</b> Safeguard your workforce with flu, hepatitis, COVID-19, and other vaccines, offered conveniently at the office or home.
    </li>
    <li>
      <b>Wellness Workshops and Wellness Talks:</b> Engage your employees with wellness programs that include stress management workshops, workout programs, dietary counseling, and mental health assistance.
    </li>
  </ul>
</div>
<div className="mt-12">
  <h2 className="text-2xl font-semibold text-black">
    Which Corporates Would Benefit from a Partnership with Kaivee Healthcare?
  </h2>

  <ul className=" mt-2 list-disc pl-2 space-y-2 text-secondary text-[18px] lg:text-[18px] md:text-xl">
    <li>All corporates looking to implement employee wellness programs.</li>
    <li>Organizations intending to perform annual health screenings.</li>
    <li>Companies planning onsite health check-up camps for employees.</li>
    <li>Enterprises seeking customized healthcare solutions as HR benefits.</li>
    <li>Organizations with remote or hybrid workforces in need of customizable healthcare solutions.</li>
  </ul>
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
export default CorporateHealthLayout;
