import React, { useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_HEALTHCARE } from "redux/actions/homepage";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <div className="button-group flex  justify-between items-center w-full">
      <button
        disabled={currentSlide === 0}
        onClick={() => previous()}
        className="left-button border text-[#fcc42c] hover:text-white bg-white h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowBack />
      </button>
      <button
        onClick={() => goToSlide(currentSlide + 1)}
        className="text-[#fcc42c] right-button hover:text-white bg-white border  h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowForward />
      </button>
    </div>
  );
};

const HealthcareVideos = () => {
  const getHealthCare = useSelector((state) => state?.homepage?.getHealthCare);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_ALL_HEALTHCARE(1));
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 764, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="relative px-2">
      <div className="flex justify-between items-center">
        <p className="font-semibold lg:text-[32px] text-xl font-source-pro">
          Healthcare Videos
        </p>
        <Link
          // href="/healthcare-video"
          //  href="https://flashdeal.in/demo/cityx-blog/healthcare-video.html"
          href="/"
          className="text-[#A1A1AA] md:text-lg text-base font-medium"
        >
          View All
        </Link>
        {/* <a
          target="_blank"
          // href="https://flashdeal.in/demo/cityx-blog/healthcare.html"
        >
          <div className="bg-orange text-white text-[18px] px-2 rounded-md md:mr-4">
            View All
          </div>
        </a> */}
      </div>
      <div className="relative w-full">
        {getHealthCare?.data?.length > 0 && (
          <Carousel
            arrows={false}
            infinite={true}
            draggable={true}
            renderButtonGroupOutside={true}
            containerClass="carousel-container"
            className="w-full"
            customButtonGroup={<ButtonGroup />}
            responsive={responsive}
          >
            {getHealthCare?.data.map((item, index) => (
              <a
                target="_blank"
                href={item?.yt_link}
                className="p-2.5"
                key={item?.id}
              >
                <div className="shadow-md m-1 pt-3 rounded-xl bg-white cursor-pointer">
                  <div className="md:pb-3 pb-1">
                    <p className="h-[60px] line-clamp-2 px-2 text-start  whitespace-normal font-semibold text-md font-source-pro text-[#3A3E44]">
                      {item?.title}
                    </p>
                  </div>
                  <div className="relative p-1.5  overflow-hidden">
                    <img
                      // loading="eager"
                      alt="world thyroid icon"
                      src={item?.img}
                      className=" !w-full   rounded-xl"
                      // width={150}
                      // height={150}
                    />
                  </div>
                </div>
              </a>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default HealthcareVideos;
