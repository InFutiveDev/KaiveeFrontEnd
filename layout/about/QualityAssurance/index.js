import React from "react";
import QualityAssuranceBanner from "./QualityAssuranceBanner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideImgOne from "assets/images/about/qualityAssurance/slideOne/Rectangle 27041.png";
import slideImgTwo from "assets/images/about/qualityAssurance/slideOne/Rectangle 27040.png";
import slideImgThree from "assets/images/about/qualityAssurance/slideOne/Rectangle 27042.png";
import slideImgFour from "assets/images/about/qualityAssurance/slideOne/Rectangle 27035.png";
import slideImgFive from "assets/images/about/qualityAssurance/slideTwo/Rectangle 27038.png";
import slideImgSix from "assets/images/about/qualityAssurance/slideTwo/Rectangle 27035 (1).png";
import slideImgSeven from "assets/images/about/qualityAssurance/slideTwo/Rectangle 27036.png";
import slideImgEight from "assets/images/about/qualityAssurance/slideTwo/Rectangle 27037.png";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import Image from "next/image";

const RightArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button onClick={onClick} className={className} style={{ ...style }}>
      <PrevIcons />,
    </button>
  );
};

const LeftArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button onClick={onClick} className={className} style={{ ...style }}>
      <NextIcons />,
    </button>
  );
};

const QualityAssuranceLayout = () => {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
  };
  return (
    <>
      <section>
        <div>
          <QualityAssuranceBanner />
        </div>
      </section>
      <div className="py-[35px] md:py-[70px] 2xl:pl-[10rem] xl:pl-[4rem] lg:pl-[1rem] pl-[16px]">
        <div className="grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-1 gap-10">
          <div>
            <h1 className="lg:text-[26px] text-xl text-black font-semibold md:pb-4 pb-2 font-source-pro">
              Quality Assurance
            </h1>
            <p className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              {`“Quality is never an accident. It is always the result of high intention, sincere effort,
intelligent direction and skilful execution. It represents the wise choice of many
alternatives.” – Willa A Foster.
`}
            </p>
            <p className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              At City X-Ray & Scan Clinic, we firmly believe this and therefore,
              we have a strong Quality Assurance programme behind the success of
              our diagnostic clinic. And we maintain the highest standards of
              quality through all aspects of our operation – from preparing the
              patient to sample collection, analysis, reporting and dispatch.
            </p>
            <p className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              At our diagnostic centre and laboratory, “quality” is the way of
              optimum functioning. It directs us to deliver reliable and
              accurate results, every time. Even for routine tests, we insist on
              achieving the highest standards of precision. Every professional
              and every process at City X-Ray & Scan Clinic upholds quality,
              making us the most trusted choice for healthcare diagnostic
              services in Delhi. In addition to our stringent internal quality
              programmes, we strive to achieve the most prestigious
              accreditations which is a testimony of the high levels of quality
              we maintain.
            </p>
          </div>
          <div className="quality-assurance-slider-main md:py-[103px] py-[50px] overflow-hidden">
            <Slider {...settings} className="carousel quality_assurance">
              <div className="flex flex-col ">
                <div className="flex gap-5">
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgOne.src}
                      alt="Quality Assurance Img 1"
                    />
                  </div>
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgTwo.src}
                      alt="Quality Assurance Img 2"
                    />
                  </div>
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgThree.src}
                      alt="Quality Assurance Img 3"
                    />
                  </div>
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgFour.src}
                      alt="Quality Assurance Img 4"
                    />
                  </div>
                </div>
                <div className="flex gap-5 mt-[10px]">
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgFive.src}
                      alt="Quality Assurance Img 5"
                    />
                  </div>
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgSix.src}
                      alt="Quality Assurance Img 6"
                    />
                  </div>
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgSeven.src}
                      alt="Quality Assurance Img 7"
                    />
                  </div>
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgEight.src}
                      alt="Quality Assurance Img 8"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex gap-5">
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgOne.src}
                      alt="Q A slide One"
                    />
                  </div>
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgTwo.src}
                      alt="Q A slide Two"
                    />
                  </div>
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgThree.src}
                      alt="Q A slide Three"
                    />
                  </div>
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgFour.src}
                      alt="Q A slide Four"
                    />
                  </div>
                </div>
                <div className="flex gap-5 mt-[10px]">
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgFive.src}
                      alt="Q A slide Five"
                    />
                  </div>
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgSix.src}
                      alt="Q A slide Six"
                    />
                  </div>
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgSeven.src}
                      alt="Q A slide Seven"
                    />
                  </div>
                  <div>
                    <Image
                      className=" object-cover w-40"
                      loading="eager"
                      width={150}
                      height={150}
                      src={slideImgEight.src}
                      alt="Q A slide Eight"
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="container py-[35px] md:py-[70px]">
          <h2 className="lg:text-[24px] text-xl font-semibold md:pb-4 pb-2 Our Quality Policie font-source-pro">
            Our Quality Policies
          </h2>
          <ul className="list-disc md:ml-[40px] ml-[20px] flex flex-col gap-2 mt-[10px]">
            <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              All the diagnostic testing we perform strictly adheres to a
              Standard Operating Procedures (SOP) which clearly outline what,
              how and who could do the test
            </li>
            <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              Fully automated high-tech pathology centre and state-of-the-art
              molecular and genetic lab that meet international standards
            </li>
            <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              We have partnered with only fully accredited vendors to use the
              most advanced and medically-certified equipment and technologies
            </li>
            <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              Our internal quality check team ensures all equipment and devices
              used for medical diagnostic testing are correctly calibrated and
              reviewed at all times
            </li>
            <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              Continuous quality improvement through constantly monitoring and
              ensuring ensures that the customers receive high-quality care
            </li>
            <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              Our internal quality check team ensures all equipment and devices
              used for medical diagnostic testing are correctly calibrated and
              reviewed at all times
            </li>
            <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              Continuous quality improvement through constantly monitoring and
              ensuring ensures that the customers receive high-quality care
            </li>
          </ul>
        </div>
      </div>
      <div className="py-[35px] md:py-[70px] container  ">
        <h2 className="lg:text-[24px] text-xl font-semibold md:pb-4 pb-2 font-source-pro">
          How We Measure Our Quality Standards?
        </h2>
        <p className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
          Being a top-tier and trusted healthcare diagnostic centre in Delhi, we
          use different quality indicators. This enables us to constantly
          monitor our Quality Assurance programme, upgrade our systems and
          procedures, and maintain high levels of efficiency & accuracy. These
          include:
        </p>
        <ul className="list-disc md:ml-[40px] ml-[20px] flex flex-col gap-2 mt-[10px]">
          <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
            Recalled patients log
          </li>
          <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
            Regular customer feedback
          </li>
          <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
            Clinicians feedback
          </li>
          <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
            Interobserver log
          </li>
          <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
            Adverse reaction log
          </li>
          <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
            Delayed reports
          </li>
          <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
            TAT monitoring
          </li>
        </ul>
        <p className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
          These quality indicators pave the way for continuous improvement,
          optimizing our processes and achieving higher patient satisfaction
        </p>
      </div>
    </>
  );
};

export default QualityAssuranceLayout;
