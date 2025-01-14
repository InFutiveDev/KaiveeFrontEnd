import React from "react";
import CorporateHealthEnquiryBanner from "./CorporateHealthEnquiryBanner";
import { YelloShadoRightSVG } from "assets/images/SvgImage";
import { YelloShadoLeftSVG } from "assets/images/SvgImage";
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
                <p className="text-secondary text-[16px] lg:text-[16px] md:text-xl">
                  {` Welcome to the City X-Ray and Scan Clinic! We are dedicated to promoting the health and wellbeing of your organization's most valuable asset – your employees. Our comprehensive
                  corporate health services are designed to empower businesses in City X-Ray to prioritise the
                  health and productivity of their workforce.`}
                </p>
                <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro">
                  Key Benefits of Corporate Health Enquiry
                </h2>
                {/* <p className="text-black font-semibold text-[32px] "></p> */}
                <p className="text-secondary text-[16px]  lg:text-[16px] md:text-xl">
                  <b>1. Customized Health Solutions:</b> At City X-Ray and Scan
                  Clinic, we understand that each organization has unique
                  healthcare needs. We offer customized health packages tailored
                  to your company's requirements, ensuring that you receive the
                  most relevant and effective services.
                </p>
                <p className="text-secondary text-[16px] lg:text-[16px] md:text-xl  ">
                  <b>2. Efficient Health Screenings:</b> Our state-of-the-art
                  diagnostic equipment and experienced medical professionals
                  ensure quick and accurate health screenings. This efficiency
                  minimizes downtime for your employees and keeps your business
                  running smoothly.
                </p>
                <p className="text-secondary text-[16px]  lg:text-[16px] md:text-xl">
                  <b> 3. Comprehensive Health Assessments:</b> Our corporate
                  health services encompass a wide range of assessments,
                  including general health check-ups, wellness programs,
                  vaccinations, and specialized tests. This comprehensive
                  approach enables you to address various health concerns within
                  your workforce.
                </p>
                <p className="text-secondary text-[16px]  lg:text-[16px] md:text-xl">
                  <b>4. Employee Well-Being:</b> Prioritizing employee health
                  contributes to increased morale and job satisfaction. By
                  offering our corporate health services, you demonstrate your
                  commitment to the well-being of your team, fostering a
                  positive work environment.
                </p>
                <p className="text-secondary text-[16px] lg:text-[16px] md:text-xl">
                  <b>5. Cost-Efficiency:</b> Investing in preventive healthcare
                  can significantly reduce long-term healthcare costs for your
                  organization. Detecting health issues early can prevent more
                  extensive and costly treatments down the line.
                </p>
                <p className="text-secondary text-[16px]  lg:text-[16px] md:text-xl">
                  <b> 6. Timely Reporting:</b> We provide detailed reports and
                  insights to help you track and manage your employees' health.
                  These reports assist in making informed decisions related to
                  employee benefits and wellness programs.
                </p>
                <p className="text-secondary text-[16px]  lg:text-[16px] md:text-xl">
                  <b> 7. Expert Guidance:</b> Our experienced medical
                  professionals are available to provide guidance and
                  recommendations based on the health data collected during
                  screenings. This ensures that your organization can take
                  proactive measures to address any health concerns.
                </p>
                <p className="text-secondary text-[16px]  lg:text-[16px] md:text-xl">
                  <b> 8. Convenience:</b> We offer flexible scheduling options
                  to accommodate your company's operational hours. Our
                  conveniently located clinics in City X make it easy for your
                  employees to access our services.
                </p>
                <p className="text-secondary text-[16px]  lg:text-[16px] md:text-xl">
                  <b> 9. Confidentiality:</b> We prioritize the privacy and
                  confidentiality of all health-related information. Your
                  employees can trust that their health data will be handled
                  with the utmost care and discretion.
                </p>
                <p className="text-secondary text-[16px]  lg:text-[16px] md:text-xl">
                  <b>10. Compliance and Certification:</b> Our corporate health
                  services are compliant with industry standards and
                  regulations. We can provide the necessary certifications and
                  documentation required by regulatory authorities.
                </p>
                <p className="text-secondary text-[16px] lg:text-[16px] md:text-xl">
                  {` Invest in the health and well-being of your employees with City X-Ray and Scan Clinic's
                  corporate health services. Contact us today to discuss how we can partner with your
                  organization to ensure a healthier, happier, and more productive workforce. Together, we can
                  build a healthier future for your business and your employees.`}
                </p>
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
export default CorporateHealthLayout;
