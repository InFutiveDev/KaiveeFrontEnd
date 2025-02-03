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
              <h1 className="text-[20px] lg:text-[26px] md:text-[22x] text-black  font-semibold font-source-pro mb-[20px]">
                Become a Clinic Franchise
              </h1>
              <h2 className="text-[18px] lg:text-[24px] md:text-[20x] text-black   font-source-pro mb-[20px]">
                Partner with Kaivee Healthcare – Grow with India’s Trusted Diagnostic Network
              </h2>
              {/* <p className="text-black font-semibold lg:text-[32px] text-lg mb-[20px]"></p> */}
              <div className="flex flex-col gap-y-2 mb-[35px]">
                <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A]">
                  Looking to start your own <span className="font-bold">diagnostic center</span>? Join hands with
                  <span className="font-bold"> Kaivee Healthcare</span> and become part of a <span className="font-bold">fast-growing, trusted healthcare brand</span>.
                  With our <span className="font-bold">cutting-edge technology</span>, <span className="font-bold">proven business model</span>, and
                  <span className="font-bold"> strong brand reputation</span>, you can build a successful <span className="font-bold">diagnostic franchise</span>
                  while contributing to <span className="font-bold">healthier communities</span>.
                </p>

                <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro my-[10px]">
                  Why join hands with us?
                </h2>
                <p className="text-black font-semibold lg:text-[26px] text-lg "></p>
                <div className="text-secondary lg:text-[16px] text-[14px]">
                  <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mb-2">
                    At <span className="font-bold">Kaivee Healthcare</span>, we don’t just offer a <span className="font-bold">franchise</span>—we offer a
                    <span className="font-bold"> partnership for growth and success</span>. Here’s why <span className="font-bold">entrepreneurs choose us</span>:
                  </p>

                  <ul className="list-disc ml-4">
                    <li>
                      🚀<strong> Strong Brand Recognition</strong>: Be part of a trusted name in the diagnostics industry.
                    </li>
                    <li>
                      🔬 <strong> Advanced Technology & Infrastructure</strong>: Access to the latest diagnostic equipment and lab management systems.
                    </li>
                    <li><strong> 📊 Proven Business Model</strong>: Benefit from a scalable, profitable business structure with consistent support.</li>
                    <li>
                      🎯 <strong> Comprehensive Training & Support</strong>: From operations to marketing, we’ve got you covered.
                    </li>
                    <li>💼 <strong> Low Investment, High Returns</strong>: Affordable entry with great growth potential in the booming healthcare sector.</li>
                    <li>
                      🤝 <strong> Continuous Guidance</strong>: Ongoing operational, technical, and marketing support to help your franchise thrive.
                    </li>
                  </ul>
                </div>
                <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro my-[10px]">
                  Who is an Ideal Franchise Partner for Diagnostics?
                </h2>
                <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A]">
                  We’re looking for <span className="font-bold">passionate, growth-driven individuals or organizations</span> who:
                </p>


                <div className="text-secondary lg:text-[16px] text-[14px]">
                  <ul className="list-disc ml-4">
                    <li>
                      Are committed to <strong> delivering quality healthcare services</strong>.
                    </li>
                    <li>
                      Have a basic understanding of <strong> healthcare or business operations </strong>(not mandatory).
                    </li>
                    <li>
                      Possess a strong <strong> entrepreneurial spirit </strong> and leadership qualities.
                    </li>
                    <li>
                      Are ready to invest in<strong> infrastructure and team building</strong>.
                    </li>
                    <li>Believe in<strong> ethical business practices </strong> and customer-centric values.</li>
                  </ul>
                  <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mt-2">
                    Whether you’re a <span className="font-bold">healthcare professional</span>, <span className="font-bold">entrepreneur</span>, or <span className="font-bold">investor</span>, if you’re eager to <span className="font-bold">make an impact</span>, you’re the perfect fit for <span className="font-bold">Kaivee Healthcare</span>!
                  </p>

                </div>
                <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro my-[10px]">
                  What we offers?
                </h2>
                <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A]">
                  When you partner with <span className="font-bold">Kaivee Healthcare</span>, you get more than just a franchise—you get a <span className="font-bold">complete support system</span>:
                </p>

                <div className="text-secondary lg:text-[16px] text-[14px]">
                  <ul className="list-disc ml-4">

                    <li>
                      🏥 <span className="font-bold">Brand Power:</span> Leverage our trusted name to attract customers effortlessly.
                    </li>
                    <li>
                      🛠️ <span className="font-bold">Setup Assistance:</span> Guidance in selecting the right location, designing the clinic, and procuring equipment.
                    </li>
                    <li>
                      👨‍💼 <span className="font-bold">Training & Development:</span> Hands-on training for your staff in lab operations, customer service, and quality control.
                    </li>
                    <li>
                      📢 <span className="font-bold">Marketing Support:</span> Comprehensive marketing strategies, digital promotions, and local outreach programs.
                    </li>
                    <li>
                      🔍 <span className="font-bold">Quality Assurance:</span> Strict quality protocols and regular audits to maintain high diagnostic standards.
                    </li>
                    <li>
                      💻 <span className="font-bold">Tech-Enabled Solutions:</span> Access to advanced software for smooth operations, billing, and reporting.
                    </li>
                    <li>
                      📈 <span className="font-bold">Growth Opportunities:</span> Scope for expansion into multiple services, health packages, and more.
                    </li>
                  </ul>
                </div>
                <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro my-[10px]">
                  Ready to build a <strong> successful diagnostic </strong> business with us?
                </h2>
                <p className="lg:text-[18px] md:text-[16px] font-semibold text-[14px] text-[#71717A]">
                  Join Kaivee Healthcare Today – Let’s Shape the Future of Diagnostics Together! 🚀                </p>
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
