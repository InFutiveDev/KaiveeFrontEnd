import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_ANNOUNCMENT } from "redux/actions/homepage";
import noImageFound from "assets/images/No-Image-Placeholder.jpg";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
const renderHTML = (htmlString) => {
  return { __html: htmlString };
};
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <div className="button-group flex  justify-between items-center w-full">
      <button
        disabled={currentSlide === 0}
        onClick={() => previous()}
        className="left-button border text-[#D41958] hover:text-white bg-white h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowBack />
      </button>
      <button
        onClick={() => goToSlide(currentSlide + 1)}
        className="text-[#D41958] right-button hover:text-white bg-white border  h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowForward />
      </button>
    </div>
  );
};
const LatestAnnouncement = () => {
  const getAnnouncement = useSelector(
    (state) => state?.homepage?.getAnnouncement
  );
  const dispatch = useDispatch();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
  useEffect(() => {
    dispatch(GET_ALL_ANNOUNCMENT());
  }, []);
  return (
    <div className="p-2">
      <div>
        <p className="font-semibold lg:text-[32px] text-xl">
          Latest Announcement
        </p>
      </div>
      <div className="mt-[32px] ">
        <div className=" relative w-full ">
          <Carousel
            arrows={false}
            infinite={true}
            draggable={true}
            autoPlay={true}
            renderButtonGroupOutside={true}
            containerClass="carousel-container"
            className="w-full  "
            customButtonGroup={<ButtonGroup />}
            responsive={responsive}
          >
            {getAnnouncement?.map((item) => {
              return (
                <a target="_blank" href={item?.url} key={item?.id}>
                  <div className="mx-[4px] rounded-[18px] border-2 p-[12px] hover:border-[#FFB944] border-gray-100 hover:shadow-[6px 6px 24px 0px #0000000A] transition-all ease-in-out cursor-pointer">
                    <div className="flex justify-center ">
                      <Image
                        loading="eager"
                        width={200}
                        height={200}
                        alt="latest icon"
                        src={item?.img || noImageFound?.src}
                        className=" h-32 !w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1 mt-[8px ]">
                      <p className="font-[600] text-[18px] font-source-pro pt-[10px]">
                        {item?.title}
                      </p>
                      <div
                        className="font-source-pro h-[40px] overflow-y-hidden  font-normal text-[13px]  text-[#52525b] line-clamp-2 w-full whitespace-normal "
                        dangerouslySetInnerHTML={renderHTML(item?.description)}
                      />
                    </div>
                  </div>
                </a>
              );
            })}
          </Carousel>
        </div>
        {/* {getAnnouncement?.map((item) => {
          return (
            <div
              key={item?.id}
              className="rounded-[18px] border-2 p-[12px] hover:border-[#FFB944] border-gray-100 hover:shadow-[6px 6px 24px 0px #0000000A] transition-all ease-in-out cursor-pointer"
            >
              <div className="flex justify-center ">
                <Image
                  loading="eager"
                  width={200}
                  height={200}
                  alt="latest icon"
                  src={item?.img || noImageFound?.src}
                  className="object-cover h-32 !w-full"
                />
              </div>
              <div className="flex flex-col gap-y-1 mt-[8px ]">
                <p className="font-[600] text-[18px] font-source-pro pt-[10px]">
                  {item?.title}
                </p>
                <div
                  className="font-source-pro  text-[16px] line-clamp-2 w-full whitespace-normal font-[600]"
                  dangerouslySetInnerHTML={renderHTML(item?.description)}
                />
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default LatestAnnouncement;
