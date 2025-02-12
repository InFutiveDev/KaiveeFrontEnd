import React from "react";
import FranchiseeBanner from "./FranchiseeBanner";
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
import InquiryForm from "components/inquiryForm";
import FranchiseeForm from "./FranchiseeForm";

const FranchiseeLayout = () => {
  return (
    <div>
      <section>
        <div>
          <FranchiseeBanner />
        </div>
      </section>
      <div className="container py-[70px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-[24px] text-black font-source-pro mb-[20px]">
              Become a Clinic Franchise
            </h1>
            <h2 className="text-[18px] lg:text-[18px] md:text-[18px] text-[#D41958] font-source-pro mb-[20px]">
              Partner with Kaivee Healthcare – Grow with India's Trusted Diagnostic Network
            </h2>
            <div className="flex flex-col gap-y-2 mb-[35px]">
              <p className="lg:text-[18px] md:text-[18px] text-[18px] text-[#71717A]">
                Looking to start your own diagnostic center? Join hands with Kaivee Healthcare and become part of a fast-growing, trusted healthcare brand. With our cutting-edge technology, proven business model, and strong brand reputation, you can build a successful diagnostic franchise while contributing to healthier communities.
              </p>

              <h2 className="text-[20px]   font-source-pro font-semibold my-[10px]">
                Why join hands with us?
              </h2>
              <p className="text-black font-semibold text-lg "></p>
              <div className="text-secondary ">
                <p className="text-[18px]  text-[#71717A] mb-2">
                  At Kaivee Healthcare, we don't just offer a franchise—we offer a partnership for growth and success. Here's why entrepreneurs choose us:
                </p>

                <ul className="text-[18px] list-disc ml-4">
                  <li>
                    <strong> Strong Brand Recognition</strong>: Be part of a trusted name in the diagnostics industry.
                  </li>
                  <li>
                     <strong> Advanced Technology & Infrastructure</strong>: Access to the latest diagnostic equipment and lab management systems.
                  </li>
                  <li><strong>  Proven Business Model</strong>: Benefit from a scalable, profitable business structure with consistent support.</li>
                  <li>
                     <strong> Comprehensive Training & Support</strong>: From operations to marketing, we've got you covered.
                  </li>
                  <li> <strong> Low Investment, High Returns</strong>: Affordable entry with great growth potential in the booming healthcare sector.</li>
                  <li>
                     <strong> Continuous Guidance</strong>: Ongoing operational, technical, and marketing support to help your franchise thrive.
                  </li>
                </ul>
              </div>
              <h2 className="text-[20px] font-source-pro font-semibold my-[10px]">
                Who is an Ideal Franchise Partner for Diagnostics?
              </h2>
              <p className="text-[18px]  text-[#71717A]">
                We're looking for passionate, growth-driven individuals or organizations who:
              </p>


              <div className="text-secondary  text-[18px]">
                <ul className="list-disc ml-4">
                  <li>
                    Are committed to delivering quality healthcare services.
                  </li>
                  <li>
                    Have a basic understanding of healthcare or business operations (not mandatory).
                  </li>
                  <li>
                    Possess a strong entrepreneurial spirit and leadership qualities.
                  </li>
                  <li>
                    Are ready to invest in infrastructure and team building.
                  </li>
                  <li>Believe in ethical business practices and customer-centric values.</li>
                </ul>
                <p className=" text-[18px] text-[#D41958] mt-2">
                  Whether you're a healthcare professional, entrepreneur, or investor, if you're eager to make an impact, you're the perfect fit for Kaivee Healthcare!
                </p>

              </div>
              <h2 className="text-[20px]   font-semibold font-source-pro my-[10px]">
                What we offers?
              </h2>
              <p className="text-[18px] text-[#71717A]">
                When you partner with Kaivee Healthcare, you get more than just a franchise—you get a complete support system:
              </p>

              <div className="text-secondary  text-[18px]">
                <ul className="list-disc ml-4">

                  <li>
                     <span className="font-bold">Brand Power:</span> Leverage our trusted name to attract customers effortlessly.
                  </li>
                  <li>
                     <span className="font-bold">Setup Assistance:</span> Guidance in selecting the right location, designing the clinic, and procuring equipment.
                  </li>
                  <li>
                     <span className="font-bold">Training & Development:</span> Hands-on training for your staff in lab operations, customer service, and quality control.
                  </li>
                  <li>
                     <span className="font-bold">Marketing Support:</span> Comprehensive marketing strategies, digital promotions, and local outreach programs.
                  </li>
                  <li>
                     <span className="font-bold">Quality Assurance:</span> Strict quality protocols and regular audits to maintain high diagnostic standards.
                  </li>
                  <li>
                     <span className="font-bold">Tech-Enabled Solutions:</span> Access to advanced software for smooth operations, billing, and reporting.
                  </li>
                  <li>
                     <span className="font-bold">Growth Opportunities:</span> Scope for expansion into multiple services, health packages, and more.
                  </li>
                </ul>
              </div>
              <h2 className="text-[18x]  font-semibold font-source-pro my-[10px]">
                Ready to build a successful diagnostic business with us?
              </h2>
              <p className=" font-semibold text-[18px] text-[#D41958]">
                Join Kaivee Healthcare Today – Let's Shape the Future of Diagnostics Together!              </p>
            </div>
          </div>
          <div className="lg:sticky lg:top-[161px] h-min">
            <FranchiseeForm />
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto lg:px-4 px-2 py-8">
          <WhyChoose data={data} />
        </div>
      </div>
    </div>
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

export default FranchiseeLayout;
