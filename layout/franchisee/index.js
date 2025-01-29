import React from "react";
import FranchiseeBanner from "./FranchiseeBanner";
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
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-8">
          <div className="lg:col-span-2">
            <div>
              <h1 className="text-[18px] lg:text-[26px] md:text-[22x] text-black  font-semibold font-source-pro mb-[20px]">
                Become a Clinic Franchise
              </h1>
              {/* <p className="text-black font-semibold lg:text-[32px] text-lg mb-[20px]"></p> */}
              <div className="flex flex-col gap-y-2 mb-[35px]">
                <p className="text-secondary lg:text-[16px] text-[14px]">
                  The medical diagnostics market in India is expected to grow at
                  a steady rate of 15% CAGR. Clinic has been one of the renowned
                  private Diagnostic set up in Delhi since last over two
                  decades. It covers a complete range of diagnostic
                  investigations for Pathology, Radiology, Cardiology &
                  Neurology departments – all under one roof.
                </p>
                <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro my-[10px]">
                  Why join hands with us?
                </h2>
                <p className="text-black font-semibold lg:text-[26px] text-lg "></p>
                <div className="text-secondary lg:text-[16px] text-[14px]">
                  <ul className="list-disc ml-4">
                    <li>
                      Pride of associating with us, an established and credible
                      brand in healthcare industry.
                    </li>
                    <li>
                      Franchisee gets all support and encouragement to grow with
                      the Organization.
                    </li>
                    <li>A trusted name of world-class technology.</li>
                    <li>
                      Managed by professionals with years of experience oversee
                      the chain
                    </li>
                  </ul>
                </div>
                <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro my-[10px]">
                  Who is an ideal franchisee of Diagnostics?
                </h2>

                <div className="text-secondary lg:text-[16px] text-[14px]">
                  <ul className="list-disc ml-4">
                    <li>
                      Preferred phlebotomist, doctors, and medical experienced
                      background healthcare professionals.
                    </li>
                    <li>
                      He/She who can join as a partner, commit time to grow the
                      business with the goal of becoming a successful
                      entrepreneur.
                    </li>
                    <li>
                      Approx having 100-250 sq. ft. area on Ground Floor in
                      Delhi or NCR whether leased, rented or owned with toilet
                      facility.
                    </li>
                    <li>
                      Minimum investment required of Rs. 50,000 to Rs. 2Lakhs
                    </li>
                    <li>Franchise/Brand Fee: Rs. 50,000 Security deposit.</li>
                  </ul>
                </div>
                <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro my-[10px]">
                  What we offers?
                </h2>

                <div className="text-secondary lg:text-[16px] text-[14px]">
                  <ul className="list-disc ml-4">
                    <li>
                      Franchisee business model with multiple options for
                      earning
                    </li>
                    <li>
                      Supporting services including logistics, consumables,
                      software licenses, and marketing support.
                    </li>
                    <li>
                      Wide range of tests menu by us, from routine to
                      specialized tests.
                    </li>
                    <li>
                      Marketing support through leaflets, camps, health checks,
                      RWA initiatives and advertising.
                    </li>
                    <li>
                      Franchisee customer care support– complaints and
                      grievances handling
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="h-min  sticky lg:top-[197px] xl:top-[161px]">
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

export default FranchiseeLayout;
