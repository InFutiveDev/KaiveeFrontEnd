import React from "react";
import Slider from "react-slick";
import EmpanelledCorporatesBannerImg from "assets/images/empanelled-corporates/Rectangle 27053.png";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import BreadCrumb from "components/breadcrumb";

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
const EmpanelledCorporatesBanner = () => {
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
    <div className="" style={{ width: "100%" }}>
      <Slider {...settings} className="carousel desktop-banner about">
        <div className="home-slider-swiper">
          <div className="grid pr-[3rem] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  xl:grid-cols-3 md:grid-cols-1 ">
            <div className="col-span-2">
              <BreadCrumb
                active="Empanelled Corporates & TPA"
                breadcrumblist={breadcrumblist}
              />
              <p className="text-4xl font-bold">
                Insurance For You And Your Happy Family
              </p>
              <p className="text-secondary mt-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor.
              </p>
            </div>
            <div>
              <img src={EmpanelledCorporatesBannerImg.src} />
            </div>
          </div>
        </div>
        <div className="home-slider-swiper">
          <div className="grid pr-[3rem] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  xl:grid-cols-3 md:grid-cols-1 ">
            <div className="col-span-2">
              <BreadCrumb
                active="Empanelled Corporates & TPA"
                breadcrumblist={breadcrumblist}
              />
              <p className="text-4xl font-bold">
                Insurance For You And Your Happy Family
              </p>
              <p className="text-secondary mt-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor.
              </p>
            </div>
            <div>
              <img src={EmpanelledCorporatesBannerImg.src} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default EmpanelledCorporatesBanner;
