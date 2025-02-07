import React, { memo, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CalendarIcons from "assets/images/home/Calendar.png";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_BLOGS } from "redux/actions/homepage";
import moment from "moment";
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

const HealthBulletin = () => {
  const getBlogs = useSelector((state) => state?.homepage?.getBlogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_ALL_BLOGS());
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
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
      <div className="flex flex-wrap justify-between items-center gap-2 lg:pb-0 pb-3">
        <p className=" lg:text-[32px] text-lg font-source-pro">
          Blog – Health Bulletin & Articles
        </p>
        <a target="_blank" href="https://blog.cityxrayclinic.com/">
          <div className="bg-[#D41958] text-white text-[14px] md:text-[18px] px-2 rounded-md">
            View All
          </div>
        </a>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 p-0">
          <Carousel
            arrows={false}
            infinite={true}
            draggable={true}
            autoPlay={true}
            renderButtonGroupOutside={true}
            containerClass="carousel-container"
            className="w-full h-[50vh] "
            customButtonGroup={<ButtonGroup />}
            responsive={responsive}
          >
            {getBlogs?.map((item) => (
              <div className="my-3 mx-2" key={item?.post_id}>
                <div className="rounded-xl shadow bg-white">
                  <a
                    target="_blank"
                    href={`https://blog.cityxrayclinic.com/${item?.post_url}`}
                    className="rounded-lg"
                  >
                    <img
                      src={item?.post_img}
                      alt="block thumbnial"
                      className="w-full rounded-t-xl h-full max-h-44  object-cover "
                    />
                  </a>

                  <div className="px-2 py-[12px] flex flex-col gap-y-2">
                    <a
                      href={`https://blog.cityxrayclinic.com/${item?.post_url}`}
                      className="rounded-lg"
                      target="_blank"
                    >
                      <p
                        title={item?.post_title}
                        className="font-[600] text-[18px] line-clamp-2 font-source-pro"
                      >
                        {item?.post_title}
                      </p>
                    </a>
                    <div className="min-h-[76px] overflow-hidden ">
                      <span
                        title={item?.small_description}
                        className="font-normal text-[13px]  text-[#52525b] line-clamp-4"
                      >
                        {item?.small_description}
                      </span>
                    </div>
                    {/* <div className="flex flex-wrap gap-1 justify-between">
                      <div className="flex items-center space-x-1 ">
                        <span className="text-gray-500 font-normal text-[14px]">
                          {moment(item?.post_created_at).format(
                            "MMM d, YYYY, h:mm a"
                          )}
                        </span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default memo(HealthBulletin);
