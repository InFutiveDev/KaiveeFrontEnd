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
            Franchisee - Kaivee Healthcare
            </h1>
            <h2 className="text-[18px] lg:text-[18px] md:text-[18px] text-[#D41958] font-source-pro mb-[20px]">
            Become a Franchise Partner and Be Part of Our Healthcare Success Story
            </h2>
            <div className="flex flex-col gap-y-2 mb-[35px]">
              <p className="lg:text-[18px] md:text-[18px] text-[18px] text-[#71717A]">
              Healthcare is among the most expanding industries with continual demand for quality, available, and affordable services. Kaivee Healthcare, a reputed name in the field of diagnostic services, home healthcare & outpatient care, has introduced franchise opportunities for entrepreneurs and investors keen on revolutionizing the healthcare delivery process.              </p>
              <p className="lg:text-[18px] md:text-[18px] text-[18px] text-[#71717A]">
              We are designing a strong patient-centered care based model to leverage your existing infrastructure to join as a Franchisee with Kaivee Healthcare. Our profit-sharing partnership model allows you to run your healthcare facility while we provide you with our expertise and brand value for a profitable and sustainable healthcare opportunity.</p>
              <h2 className="text-[20px]   font-source-pro font-semibold my-[10px]">
              How Do You Apply for a Kaivee Healthcare Franchise?
              </h2>
              <p className="text-black font-semibold text-lg "></p>
              <div className="text-secondary ">
                {/* <p className="text-[18px]  text-[#71717A] mb-2">
                  At Kaivee Healthcare, we don't just offer a franchise—we offer a partnership for growth and success. Here's why entrepreneurs choose us:
                </p> */}

                <ul className="text-[18px] list-disc ml-4">
                  <li>
                  Healthcare providers interested in practicing more.
                  </li>
                  <li>
                  Picture entrepreneurs and business owners thinking about entering the healthcare industry.
                  </li>
                  <li>Acquirers looking for a solid and profitable healthcare company.
                  </li>
                  <li>
                  Hospitals and clinics looking to diversify services under an established brand.
                  </li>
                  <li> Service Motivated — People who are excited about healthcare and wellness services.</li>
                  
                </ul>
              </div>
              <h2 className="text-[20px] font-source-pro font-semibold my-[10px]">
              Franchisee Support from Kaivee Healthcare
              </h2>
              


              <div className="text-secondary  text-[18px]">
                <ul className="list-disc ml-4">
                  <li>
                  A Long Way to Go: Location, clinic, equipment.
                  </li>
                  <li>
                  Hiring of qualified doctors, technicians and support staff.
                  </li>
                  <li>
                  Train to Learn: Staff training regarding operations, patient care, and technology use.
                  </li>
                  <li>
                  Marketing and Branding: Local and digital marketing campaigns, branding materials.
                  </li>
                  <li>Operational Support: Ongoing operational support and performance oversight.</li>

                </ul>
                

              </div>
              <h2 className="text-[20px]   font-semibold font-source-pro my-[10px]">
              Advantages of partnering with Kaivee Healthcare Franchising
              </h2>
              <p className="text-[18px] text-[#71717A]">
              With diagnostics, OPD consultations, home healthcare services, health check-up packages, and telemedicine consultations, franchisees can get multiple streams of revenue and maximize their business.              </p>

              <div className="text-secondary  text-[18px]">
                <ul className="list-disc ml-4">

                  <li>
                  1. Established Brand Recognition.
                  </li>
                  <li>
                  2. Proven Business Model.
                  </li>
                  <li>
                  3. Comprehensive Training and Support.
                  </li>
                  <li>
                  4. MovingTowards Technology-Enabled Healthcare Operations.
                  </li>
                  <li>
                  5. Opportunities For Revenue From Multiple Streams.
                  </li>
                  
                </ul>
              </div>
              <h2 className="text-[18x]  font-semibold font-source-pro my-[10px]">
              Join Forces with Kaivee Healthcare and Make the Future Healthier
              </h2>
              <p className=" font-semibold text-[18px] text-[#71717A]">
              Become a franchisee and team up with a rapidly expanding healthcare brand. With our collaborative efforts, we can make quality healthcare services accessible and thus the patient care shall be revolutionized.              </p>
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

export default FranchiseeLayout;
