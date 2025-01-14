import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextIcons } from "assets/images/SvgImage";
import { PrevIcons } from "assets/images/SvgImage";
import { memo } from "react";
// import InquiryForm from "components/inquiryForm";
import Image from "next/image";
import LandingInquiryForm from "components/landingPageInquiryForm";

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
const AdsBanner = ({ data }) => {
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
  console.log("data--->>", data);
  return (
    <div className="w-full flex flex-col sm:flex-row md:flex-row justify-start items-center">
      <div className="w-full sm:w-3/4 pb-2">
        <div className="relative w-full  items-center hidden sm:flex">
          <Image
            quality={100}
            width={2000}
            height={200}
            layout="fixed"
            className="object-fill !w-[100%] !h-[100%] object-center"
            alt={data?.landingpageimage_altTag || "About"}
            src={data?.landingpageimage}
          />
        </div>
      </div>
      <div className="checkreport z-50">
        <LandingInquiryForm
          hideUX={true}
          hideEmail={true}
          leads_source={data?.leads_source || "landing"}
        />
      </div>
    </div>
  );
};

export default memo(AdsBanner);
