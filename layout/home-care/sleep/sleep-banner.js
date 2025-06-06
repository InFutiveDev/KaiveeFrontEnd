import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import AboutBannerImg from "assets/images/about/aboutBanner.png";
import BreadCrumb from "components/breadcrumb";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import LazyLoad from "react-lazyload";
// import BannerImage from "assets/images/about/About us 1400x300.jpg";
// import MobileImage from "assets/images/about/about us 1000 x 600.webp";
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
  console.log("className", className);
  return (
    <button
      onClick={onClick}
      className={`about-nextarrow ${className}`}
      style={{ ...style }}
    >
      <NextIcons />,
    </button>
  );
};

const breadcrumblist = [{ name: "Home", path: "/" }];
const Sleepbanner = () => {
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
    <div className="w-full">
      <div className="2xl:pl-[10rem] xl:pl-[4rem] lg:pl-[1rem] pl-[16px]">
        <BreadCrumb active="Sleep-Study" breadcrumblist={breadcrumblist} />
      </div>
      <div className="relative w-full  items-center hidden sm:flex">
        <Image
          priority
          quality={80}
          width={2000}
          height={400}
          layout="fixed"
          alt={"about image"}
          className=" object-fill md:mb-0 mb-3  h-auto w-full object-center"
          src={"https://ik.imagekit.io/InFutiveTechnology/kaivee/WhatsApp%20Image%202025-03-26%20at%2016.56.10.jpg?updatedAt=1743047378123?tr=f-auto,q-80"}
        />
      </div>
      <div className="relative w-full  items-center flex  sm:hidden">
        <Image
          priority
          quality={80}
          width={1000}
          height={400}
          layout="fixed"
          alt={"about image"}
          className=" object-fill md:mb-0 mb-3  h-auto w-full object-center "
          src={"https://ik.imagekit.io/InFutiveTechnology/kaivee/WhatsApp%20Image%202025-03-26%20at%2016.56.10.jpg?updatedAt=1743047378123?tr=f-auto,q-80"}
        />
      </div>
    </div>
  );
};


export default Sleepbanner;
