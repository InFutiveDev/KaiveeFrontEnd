import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
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

const WhyChoose = ({ data, padding = "70px" }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };
  return (
    <div className="container mx-auto lg:px-4 px-2 py-8">
      <h3 className="lg:text-[24px] text-xl font-source-pro font-[600]">
        Why Choose Us
      </h3>
      <div className=" relative sm:w-full w-[80%] sm:mx-0 mx-auto">
        {data?.length > 0 && (
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
            {data?.map((item, index) => (
              <div
                key={index}
                className="rounded-b-xl rounded-t-full h-full p-2"
              >
                <div className="border xl:pt-[34px] xl:px-[24px] lg:pt-[34px] lg:px-[24px] md:pt-[34px] md:px-[24px] pt-[38px] px-[8px] rounded-t-full xl:pb-[24px] lg:pb-[24px] md:pb-[24px] pb-[28px] bg-white">
                  <div className="flex justify-center">
                    <Image
                      loading="eager"
                      width={80}
                      height={80}
                      alt="whychoose icon"
                      src={item?.image.src}
                      className="object-cover w-16 h-16 "
                    />
                  </div>
                </div>
                <div className="relative border-x border-b  bg-[#FCF9F1] rounded-b-xl py-[14px]">
                  <div className="h-[70px]">
                    <p
                      className="text-center font-source-pro absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] lg:text-[16px] md:text-[18px] line-clamp-2 w-full px-[10px] whitespace-normal font-[600]"
                      dangerouslySetInnerHTML={renderHTML(item?.title)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default WhyChoose;
