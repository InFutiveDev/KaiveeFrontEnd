import { Evidencesvg } from "assets/images/SvgImage";
import { ClinicalStudysvg } from "assets/images/SvgImage";
import { Healthsvg } from "assets/images/SvgImage";
import { Medicationsvg } from "assets/images/SvgImage";
import { Analysisvg } from "assets/images/SvgImage";
import React from "react";
import Slider from "react-slick";
import ClinicalBannerImage from "assets/images/clinical-research/Group 1410140916.png";
import ClinicalBannerImage2 from "assets/images/clinical-research/clinic-research-banner.png";

import BreadCrumb from "components/breadcrumb";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";

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
const breadcrumblist = [{ name: "Home", path: "/" }];
const ClinicalResearchBanner = () => {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
  };
  return (
    <div className="container" style={{ width: "100%" }}>
      <Slider {...settings} className="carousel desktop-banner about">
        <div className="home-slider-swiper">
          <div className="grid gap-[50px] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-1 ">
            <div className="">
              <BreadCrumb
                active="Clinical Research"
                breadcrumblist={breadcrumblist}
              />
              <p className="lg:text-5xl text-lg font-bold">Clinical Research <br /> Trials</p>
              {/* <p className="text-secondary lg:text-[18px] text-[14px] mt-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              </p> */}
              {/* <div className="flex flex-wrap gap-6 mt-[30px] items-center">
                <div className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <Analysisvg />
                  </div>
                  <p className=" font-semibold">Analysis</p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <Evidencesvg />
                  </div>
                  <p className=" font-semibold">Evidence</p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <ClinicalStudysvg />
                  </div>
                  <p className=" font-semibold">Clinical Study</p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <Medicationsvg />
                  </div>
                  <p className=" font-semibold">Medication</p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <Healthsvg />
                  </div>
                  <p className=" font-semibold">Health</p>
                </div>
              </div> */}
            </div>
            <div className="flex lg:justify-end">
              <img src={ClinicalBannerImage2.src} className="w-auto" />
            </div>
          </div>
        </div>
        {/* <div className="home-slider-swiper">
          <div className="grid gap-[50px] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-1 ">
            <div className="">
              <BreadCrumb
                active="Clinical Research"
                breadcrumblist={breadcrumblist}
              />
              <p className="lg:text-5xl text-lg font-bold">Clinical Research</p>
              <p className="text-secondary lg:text-[18px] text-[14px] mt-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              </p>
              <div className="flex flex-wrap gap-6 mt-[30px] items-center">
                <div className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <Analysisvg />
                  </div>
                  <p className=" font-semibold">Analysis</p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <Evidencesvg />
                  </div>
                  <p className=" font-semibold">Evidence</p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <ClinicalStudysvg />
                  </div>
                  <p className=" font-semibold">Clinical Study</p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <Medicationsvg />
                  </div>
                  <p className=" font-semibold">Medication</p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <Healthsvg />
                  </div>
                  <p className=" font-semibold">Health</p>
                </div>
              </div>
            </div>
            <div className="flex lg:justify-end">
              <img src={ClinicalBannerImage.src} className="w-auto" />
            </div>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};

export default ClinicalResearchBanner;
