import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import dynamic from "next/dynamic";
const CheckReportForm = dynamic(() => import("./checkReportForm"));

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

const Banner = ({ banners }) => {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
  };

  return (
    <>
      <Slider {...settings} className="carousel desktop-banner">
        {banners?.data?.bannerData?.map((banner) => {
          return (
            <div key={banner._id} className="home-slider-swiper">
              <Image
                width={1500}
                height={500}
                style={{ objectFit: "contain" }}
                src={banner?.banner_image}
                alt={banner._id}
              />
            </div>
          );
        })}
      </Slider>
      <CheckReportForm />
    </>
  );
};

export default Banner;
