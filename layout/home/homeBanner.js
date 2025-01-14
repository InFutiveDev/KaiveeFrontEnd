import { useSelector } from "react-redux";
import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import dynamic from "next/dynamic";
// import { NextIcons } from "assets/images/SvgImage";
// import { PrevIcons } from "assets/images/SvgImage";
const CheckReportForm = dynamic(() => import("./checkReportForm"));

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <div className="button-group w-full sm:w-[65%] flex lg:justify-between md:justify-between gap-[5px] items-center lg:right-auto md:right-auto  right-0 lg:top-[50%] md:top-[50%] top-[90%] lg:left-auto md:left-auto left-[15px]">
      <button
        disabled={currentSlide === 0}
        onClick={() => previous()}
        className="left-button border text-[#fcc42c] hover:text-white bg-white h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowBack />
        {/* <PrevIcons /> */}
      </button>
      <button
        onClick={() => goToSlide(currentSlide + 1)}
        className="text-[#fcc42c] right-button hover:text-white bg-white border h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowForward />
        {/* <NextIcons /> */}
      </button>
    </div>
  );
};

const Homebanner = () => {
  const banners = useSelector((state) => state?.banner?.banners);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 764, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="w-full sm:w-[65%] ">
        {banners?.bannerData?.length > 0 && (
          <Carousel
            arrows={false}
            infinite={true}
            draggable={true}
            autoPlay={true}
            renderButtonGroupOutside={true}
            containerClass="carousel-container"
            className="w-full h-full"
            customButtonGroup={<ButtonGroup />}
            responsive={responsive}
          >
            {banners?.bannerData?.map((banner) => {
              return (
                <div
                  className="flex justify-start w-full home-page-banner-div  "
                  key={banner?._id}
                >
                  <Image
                    loading="eager"
                    className=" object-cover !w-full !h-full lg:h-[200px]  md:h-[200px] xl:h-[300px] lg:mb-0 mb-[20px]"
                    width={600}
                    height={480}
                    src={banner?.banner_image}
                    alt={banner?.banner_name}
                  />
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
      <div className="checkreport hidden sm:block">
        <CheckReportForm />
      </div>
    </>
  );
};

export default memo(Homebanner);
