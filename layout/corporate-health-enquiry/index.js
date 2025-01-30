import React from "react";
import CorporateHealthEnquiryBanner from "./CorporateHealthEnquiryBanner";
import { YelloShadoRightSVG } from "assets/images/SvgImage";
import { YelloShadoLeftSVG } from "assets/images/SvgImage";
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
                  {` Welcome to the us! We are dedicated to promoting the health and wellbeing of your organization's most valuable asset – your employees. Our comprehensive
                  corporate health services are designed to empower businesses in us to prioritise the
                  health and productivity of their workforce.`}
                </p>
                <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro">
                  Key Benefits of Corporate Health Enquiry
                </h2>
                {/* <p className="text-black font-semibold text-[32px] "></p> */}
                <p className="text-secondary text-[16px]  lg:text-[16px] md:text-xl">
                  <b>1. Customized Health Solutions:</b> At us, we understand
                  that each organization has unique healthcare needs. We offer
                  customized health packages tailored to your company's
                  requirements, ensuring that you receive the most relevant and
                  effective services.
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
export default CorporateHealthLayout;
