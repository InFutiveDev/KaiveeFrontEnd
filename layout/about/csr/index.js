import React from "react";
import CsrBanner from "./CsrBanner";
import CsrImgOne from "assets/images/about/csr/Rectangle 27038.png";
import CsrImgTwo from "assets/images/about/csr/Rectangle 27038 (1).png";
import CsrImgThree from "assets/images/about/csr/Rectangle 27038 (2).png";
import CsrImgFour from "assets/images/about/csr/Rectangle 27035.png";
import CsrImgFive from "assets/images/about/csr/Rectangle 27035 (1).png";
import CsrImgSix from "assets/images/about/csr/Rectangle 27035 (2).png";
import CsrImgSeven from "assets/images/about/csr/Rectangle 27036.png";
import CsrImgEight from "assets/images/about/csr/Rectangle 27036 (1).png";
import CsrImgNine from "assets/images/about/csr/Rectangle 27036 (2).png";
import CsrImgTen from "assets/images/about/csr/Rectangle 27037.png";
import CsrImgEleven from "assets/images/about/csr/Rectangle 27037 (1).png";
import Image from "next/image";

const CsrLayout = () => {
  return (
    <>
      {/* className="sliders banner_slider_wrap_csr" */}
      <section>
        <div>
          <CsrBanner />
        </div>
      </section>
      <div className="py-[70px] 2xl:pl-[10rem] xl:pl-[4rem] lg:pl-[1rem] pl-[16px]">
        <div className="grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-1 gap-3">
          <div className="flex justify-center flex-col md:pb-0 pb-3">
            <h1 className="text-[26px] lg:text-[26px] md:text-[22x] text-black  font-semibold font-source-pro md:mb-3 mb-4">
              Corporate Social Responsibility
            </h1>
            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mb-2">
              Our commitment to <span className="font-bold">health</span> doesn’t stop at diagnostics. Through our <span className="font-bold">CSR initiatives</span>, we aim to contribute to the greater good of society by focusing on <span className="font-bold">healthcare accessibility</span>, <span className="font-bold">education</span>, and <span className="font-bold">environmental sustainability</span>.
            </p>

            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mb-2">
              We actively engage in programs that support:
              <ul className="list-disc pl-6 mt-2">
                <li><span className="font-bold">Free Health Camps</span> for underprivileged communities</li>
                <li><span className="font-bold">Awareness Drives</span> on preventive healthcare</li>
                <li><span className="font-bold">Support for Local Healthcare Facilities</span> with medical equipment and resources</li>
                <li><span className="font-bold">Educational Programs</span> promoting health literacy and early detection</li>
              </ul>
            </p>

            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] ">
              Our goal is simple: to make <span className="font-bold">quality healthcare</span> affordable, accessible, and impactful for all, especially for those who need it the most.
            </p>

          </div>
          <div className="quality-assurance-slider-main px-[73px]">
            <div className="grid grid-cols-3 grid-flow-row-9 grid-flow-row-dense gap-4">
              <div className="row-span-1">
                <Image
                  src={CsrImgOne}
                  width={200}
                  height={170}
                  className="w-full"
                  alt="CsrImgOne"
                />
              </div>
              <div className="row-span-2">
                <Image
                  src={CsrImgTwo}
                  width={200}
                  height={170}
                  className="w-full"
                  alt="CsrImgTwo"
                />
              </div>
              <div className="row-span-2">
                <Image
                  src={CsrImgThree}
                  width={200}
                  height={170}
                  className="w-full"
                  alt="CsrImgThree"
                />
              </div>
              <div className="row-span-3">
                <Image
                  src={CsrImgFour}
                  width={200}
                  height={170}
                  className="w-full"
                  alt="CsrImgFour"
                />
              </div>
              <div className="row-span-3">
                <Image
                  src={CsrImgFive}
                  width={200}
                  height={170}
                  className="w-full"
                  alt="CsrImgFive"
                />
              </div>
              <div className="row-span-3">
                <Image
                  src={CsrImgSix}
                  width={200}
                  height={170}
                  className="w-full"
                  alt="CsrImgSix"
                />
              </div>

              <div className="row-span-3">
                <Image
                  src={CsrImgSeven}
                  width={200}
                  height={170}
                  className="w-full"
                  alt="CsrImgSeven"
                />
              </div>
              <div className="row-span-4">
                <Image
                  src={CsrImgEight}
                  width={200}
                  height={170}
                  className="w-full"
                  alt="CsrImgEight"
                />
              </div>
              <div className="row-span-3">
                <Image
                  src={CsrImgNine}
                  width={200}
                  height={170}
                  className="w-full"
                  alt="CsrImgNine"
                />
              </div>
              <div className="row-span-2">
                <Image
                  src={CsrImgTen}
                  width={200}
                  height={170}
                  className="w-full"
                  alt="CsrImgTen"
                />
              </div>
              <div className="row-span-1 col-end-4">
                <Image
                  src={CsrImgEleven}
                  width={200}
                  height={170}
                  className="w-full"
                  alt="CsrImgEleven"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="container py-[35px] md:py-[70px]">
          <h2 className="text-[24px] lg:text-[24px] md:text-[18x] md:mb-3 mb-2 font-semibold font-source-pro">
            Other CSR Activities
          </h2>
          <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
            In addition to <span className="font-bold">healthcare-focused initiatives</span>, we’re proud to support a range of activities that contribute to <span className="font-bold">social welfare</span> and <span className="font-bold">environmental sustainability</span>, including:
          </p>

          <ul className="list-disc ml-[20px] md:ml-[40px] flex flex-col gap-2 mt-[10px]">
            <li className="text-secondary lg:text-[16px] text-[14px]">
              🌱 <strong> Environmental Responsibility</strong>: Promoting eco-friendly lab practices, reducing waste, and supporting green initiatives.
            </li>
            <li className="text-secondary lg:text-[16px] text-[14px]">
              🎓 <strong> Education for All</strong>: Scholarships and learning programs for students pursuing careers in healthcare and science.
            </li>
            <li className="text-secondary lg:text-[16px] text-[14px]">
              🤝 <strong> Community Engagement</strong>: Partnering with local organizations for blood donation camps, health awareness seminars, and wellness workshops.
            </li>
            <li className="text-secondary lg:text-[16px] text-[14px]">
              💊 <strong> Healthcare Support During Crises</strong>: Providing diagnostic support and medical aid during health emergencies and natural disasters.
            </li>
          </ul>
        </div>
      </div>
      <div className="container py-[35px] md:py-[70px] g-white">
        <h2 className="lg:text-[24px] text-xl font-semibold md:mb-3 mb-2 font-source-pro">
          How We Measure the Impact of Our CSR Initiatives
        </h2>
        <p className="text-secondary lg:text-[16px] text-[14px]">
          We believe in creating measurable, lasting change. To ensure our efforts are effective, we regularly track:
        </p>
        <ul className="list-disc ml-[20px] md:ml-[40px] flex flex-col gap-2 mt-[32px]">
          <li className="text-secondary lg:text-[16px] text-[14px]">
            <strong> Community Reach</strong>: The number of people and communities positively impacted by our programs.
          </li>
          <li className="text-secondary lg:text-[16px] text-[14px]">
            <strong> Health Outcomes</strong>: Improvements in health awareness, early detection rates, and access to diagnostics.
          </li>
          <li className="text-secondary lg:text-[16px] text-[14px]">
            <strong> Sustainability Metrics</strong>: Reduction in our environmental footprint through eco-friendly practices.
          </li>
          <li className="text-secondary lg:text-[16px] text-[14px]">
            <strong> Feedback Mechanisms</strong>: Gathering insights from beneficiaries and partners to refine and improve our initiatives.
          </li>
          <li className="text-secondary lg:text-[16px] text-[14px]">
            <strong> Partnership Effectiveness</strong>: Collaborating with NGOs, government bodies, and local organizations to amplify our impact.
          </li>
        </ul>
        <br />
        <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
          At Kaivee Healthcare, we believe that <span className="font-bold">healthy communities</span> build a <span className="font-bold">healthier future</span>. Our <span className="font-bold">CSR journey</span> reflects our dedication to not just diagnosing health issues, but also driving meaningful change in the world around us.
        </p>

      </div>
    </>
  );
};

export default CsrLayout;
