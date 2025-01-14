import React, { useRef } from "react";

import { useRouter } from "next/router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import noImageFound from "assets/images/No-Image-Placeholder.jpg";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
const ButtonGroup = ({ onNext, onPrevious }) => {
  return (
    <div className="flex justify-end items-center space-x-2">
      <button
        onClick={onPrevious}
        className="left-button border text-[#fcc42c] hover:text-white bg-white h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowBack />
      </button>
      <button
        onClick={onNext}
        className="text-[#fcc42c] right-button hover:text-white bg-white border  h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowForward />
      </button>
    </div>
  );
};

const HealthRisks = ({
  title,
  data,
  queryString = "str",
  imageKey,
  altImageKey,
  autoPlay,
}) => {
  const router = useRouter();
  const carouselRef = useRef(null);

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const singlePage = (id) => {
    router.push({
      pathname: "/book-a-test",
      query: {
        [queryString]: id,
        filterType: queryString,
      },
    });
  };

  const responsive = {
    // slidesToShow: 4,
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    // tablet: {
    //   breakpoint: { max: 764, min: 464 },
    //   items: 2,
    //   partialVisibilityGutter: 30,
    // },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="md:mt-4 relative w-full ">
      <div className="flex justify-between px-2 items-center w-full">
        <p className="font-semibold lg:text-[32px] md:text-xl">{title}</p>
        <ButtonGroup onPrevious={handlePrevious} onNext={handleNext} />
      </div>
      <div className="row mt-4">
        {data?.length > 0 && (
          <div className="col-md-12 col-sm-12">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              infinite={true}
              draggable={true}
              renderButtonGroupOutside={true}
              ref={carouselRef}
              rewind={false}
              partialVisible
              minimumTouchDrag={80}
              centerMode={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              slidesToSlide={1}
              // centerMode={true}
              autoPlay={autoPlay}
              containerClass="carousel-container"
              className="w-full"
              responsive={responsive}
            >
              {data?.map((item, index) => (
                <div
                  className="px-2 md:px-[20px] h-full cursor-pointer flex justify-center items-center"
                  key={index}
                  onClick={() => singlePage(item._id)}
                >
                  <div className="w-full rounded border-[1px] border-[#FDE8BF]">
                    <div className="py-[12px]">
                      <p className="text-center font-[600] text-[18px] font-source-pro">
                        {Object.keys(item).includes("healthRiskTitle")
                          ? item?.healthRiskTitle
                          : Object.keys(item).includes("perent_category_name")
                          ? item?.category_name
                          : item?.hebitName}
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <Image
                        loading="eager"
                        width={500}
                        height={500}
                        alt={item[altImageKey] || ""}
                        src={item[imageKey] || noImageFound?.src}
                        className="object-cover h-32 !w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthRisks;
