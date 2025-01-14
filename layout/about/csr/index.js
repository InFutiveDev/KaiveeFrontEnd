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
            <h1 className="text-[26px] lg:text-[26px] md:text-[22x] text-black  font-semibold font-source-pro md:mb-3 mb-2">
              Corporate Social Responsibility
            </h1>
            <p className="text-secondary lg:text-[16px] text-[14px] ">
              City X-Ray & Scan Clinic is committed to building a happier and
              healthier society through our constant drive towards Corporate
              Social Responsibility. Our vision is to educate the unprivileged,
              spread social awareness and enhance the lives of millions through
              high-quality, preventive and affordable health care initiatives.
            </p>
            <p className="text-secondary lg:text-[16px] text-[14px]">
              City X-Ray & Scan Clinic has always fulfilled its societal
              responsibilities, making a positive impact through knowledge and
              awareness. This begins with promoting the importance of health for
              individual and the wellness of society at large.
            </p>
            <p className="text-secondary lg:text-[16px] text-[14px]">
              Our CSR policy expresses the mechanisms and principles we follow
              to undertake different CSR programs/activities as mentioned
              herewith.
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
          <p className="text-secondary lg:text-[16px] text-[14px]">
            Under our CSR initiatives, we support multiple projects in diverse
            fields such as:
          </p>
          <ul className="list-disc ml-[20px] md:ml-[40px] flex flex-col gap-2 mt-[10px]">
            <li className="text-secondary lg:text-[16px] text-[14px]">
              Promoting and funding projects under the Swachh Bharat Abhiyan in
              West Delhi
            </li>
            <li className="text-secondary lg:text-[16px] text-[14px]">
              Supporting various animal welfare organisations for the treatment
              and rehabilitation of stray animals
            </li>
            <li className="text-secondary lg:text-[16px] text-[14px]">
              Supporting special children in our communities through societal
              awareness and proper education
            </li>
            <li className="text-secondary lg:text-[16px] text-[14px]">
              Promoting tree plantations in different areas of West Delhi with
              the objective to make the planet a better place to live in.
            </li>
          </ul>
        </div>
      </div>
      <div className="container py-[35px] md:py-[70px] g-white">
        <h2 className="lg:text-[24px] text-xl font-semibold md:mb-3 mb-2 font-source-pro">
          How We Measure Our Quality Standards?
        </h2>
        <p className="text-secondary lg:text-[16px] text-[14px]">
          Being a top-tier and trusted healthcare diagnostic centre in Delhi, we
          use different quality indicators. This enables us to constantly
          monitor our Quality Assurance programme, upgrade our systems and
          procedures, and maintain high levels of efficiency & accuracy. These
          include:
        </p>
        <ul className="list-disc ml-[20px] md:ml-[40px] flex flex-col gap-2 mt-[32px]">
          <li className="text-secondary lg:text-[16px] text-[14px]">
            Recalled patients log
          </li>
          <li className="text-secondary lg:text-[16px] text-[14px]">
            Regular customer feedback
          </li>
          <li className="text-secondary lg:text-[16px] text-[14px]">
            Clinicians feedback
          </li>
          <li className="text-secondary lg:text-[16px] text-[14px]">
            Interobserver log
          </li>
          <li className="text-secondary lg:text-[16px] text-[14px]">
            Adverse reaction log
          </li>
          <li className="text-secondary lg:text-[16px] text-[14px]">
            Delayed reports
          </li>
          <li className="text-secondary lg:text-[16px] text-[14px]">
            TAT monitoring
          </li>
        </ul>
        <br />
        <p className="text-secondary lg:text-[16px] text-[14px]">
          These quality indicators pave the way for continuous improvement,
          optimizing our processes and achieving higher patient satisfaction
        </p>
      </div>
    </>
  );
};

export default CsrLayout;
