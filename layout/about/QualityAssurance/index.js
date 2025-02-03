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
            <h1 className="lg:text-[26px] text-xl text-black font-semibold md:pb-4 pb-2 font-source-pro mb-2">
              Quality Assurance
            </h1>
            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mb-[6px] mb-4">
              <span className="font-bold">Quality</span> is the backbone of effective healthcare decisions. At Kaivee Healthcare, we maintain the highest standards in diagnostics through rigorous <span className="font-bold">quality control measures</span>, advanced <span className="font-bold">technology</span>, and continuous <span className="font-bold">process improvement</span>.
            </p>

            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              Our laboratories are equipped with <span className="font-bold">state-of-the-art equipment</span>, operated by skilled professionals who follow <span className="font-bold">standardized protocols</span> to ensure <span className="font-bold">accuracy</span> at every step—from <span className="font-bold">sample collection</span> to <span className="font-bold">report delivery</span>. We leave no room for errors because we understand the impact that every result has on your <span className="font-bold">health</span>.
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
          <h2 className="lg:text-[26px] text-xl text-black font-semibold md:pb-4 pb-2 font-source-pro mb-2">
            Our Quality Policies
          </h2>
          <p>Our commitment to quality is guided by strict policies that ensure:</p>
          <ul className="list-disc md:ml-[40px] ml-[20px] flex flex-col gap-2 mt-[10px]">
            <li className="lg:text-[18px] text-[14px] text-[#71717A] mb-[6px]">
              🔬 Accuracy & Precision: Every test undergoes multiple checks to guarantee reliable results.
            </li>
            <li className="lg:text-[18px] text-[14px] text-[#71717A] mb-[6px]">
              🩺 Standardized Procedures: We follow globally recognized protocols for sample handling, testing, and reporting.
            </li>
            <li className="lg:text-[18px] text-[14px] text-[#71717A] mb-[6px]">
              👩‍⚕️ Qualified Expertise: Our team includes experienced pathologists, lab technicians, and quality control experts.
            </li>
            <li className="lg:text-[18px] text-[14px] text-[#71717A] mb-[6px]">
              ⚡ Timely Reporting: Fast doesn’t mean compromised—we deliver quick results without sacrificing accuracy.
            </li>
            <li className="lg:text-[18px] text-[14px] text-[#71717A] mb-[6px]">
              📊 Regular Audits: Continuous internal and external audits help us maintain and improve quality standards.
            </li>
            <li className="lg:text-[18px] text-[14px] text-[#71717A] mb-[6px]">
              🧪 Safe & Hygienic Practices: We adhere to strict biosafety measures to protect both samples and staff.
            </li>
          </ul>
        </div>
      </div>
      <div className="py-[35px] md:py-[70px] container  ">
        <h2 className="lg:text-[24px] text-xl font-semibold md:pb-4 pb-2 font-source-pro">
          How We Measure Our Quality Standards?
        </h2>
        <p className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
          We believe in<strong> continuous improvement </strong>, which is why we regularly monitor and evaluate our performance through:
        </p>
        <ul className="list-disc md:ml-[40px] ml-[20px] flex flex-col gap-2 mt-[10px]">
          <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
            <strong> Internal Quality Control (IQC) </strong>: Daily checks to ensure equipment and processes are functioning optimally.
          </li>
          <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
            <strong> External Quality Assessment (EQA) </strong> : Participation in external proficiency testing programs to benchmark our accuracy against national and international standards.
          </li>
          <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
            <strong> Performance Metrics </strong>: Tracking key indicators such as <strong> turnaround time, error rates, and customer satisfaction </strong> to identify areas for improvement.
          </li>
          <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
            <strong> Staff Training & Development </strong>: Ongoing training programs to keep our team updated with the latest diagnostic advancements and quality protocols.
          </li>
          <li className="lg:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
            <strong> Patient Feedback </strong> : We actively seek feedback to improve our services and address concerns promptly.
          </li>
        </ul>
        <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mt-6 mb-[6px]">
          At Kaivee Healthcare, <span className="font-bold">quality</span> is not a one-time goal—it’s an ongoing journey to ensure you receive the most <span className="font-bold">accurate</span>, <span className="font-bold">reliable</span>, and <span className="font-bold">trusted</span> diagnostic services.
        </p>

      </div>
    </>
  );
};

export default QualityAssuranceLayout;
