import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_PRINT_MEDIA } from "redux/actions/homepage";
import moment from "moment";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
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
        className="left-button border text-[#fcc42c] hover:text-white bg-white h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowBack />
      </button>
      <button
        onClick={() => goToSlide(currentSlide + 1)}
        className=" text-[#fcc42c] right-button hover:text-white    bg-white border  h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowForward />
      </button>
    </div>
  );
};
const PrintMedia = () => {
  const getPrintMedia = useSelector((state) => state?.homepage?.getPrintMedia);
  const dispatch = useDispatch();
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
      breakpoint: { max: 1024, min: 764 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  useEffect(() => {
    dispatch(GET_ALL_PRINT_MEDIA());
  }, []);
  return (
    <div className="boxMedia">
      <div className="frame-wrapper">
        <div className="group">
          <div className="px-2 flex flex-wrap justify-between">
            <p className="font-semibold lg:text-[32px] text-lg font-source-pro">
              Print Media Coverage
            </p>
            <div className="flex gap-3 items-center cursor-pointer">
              <Link
                 target="_blank"
                href="/print-media-coverage"
                className="text-[#A1A1AA] md:text-lg text-base font-medium"
              >
                {/* <div > */}
                View All
                {/* </div> */}
              </Link>
              <div>
                <MdOutlineKeyboardArrowRight
                  className={"text-2xl text-[#A1A1AA]"}
                />
              </div>
            </div>
          </div>
          <div className="px-2 mt-[32px] ">
            <div className=" relative w-full ">
              {getPrintMedia?.length > 0 && (
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
                  {getPrintMedia?.map((item) => {
                    return (
                      <div
                        key={item?.id}
                        className=" news overflow-hidden mx-[4px]"
                      >
                        <div className="frame-2 ">
                          <a
                            className="w-full"
                            target="_blank"
                            rel="nofollow"
                            // href={item?.link}
                          >
                            <div className="flex justify-center items-center">
                              <img
                                className="w-full max-h-52 h-full "
                                alt="Youtube logo hd"
                                src={item?.img}
                              />
                            </div>
                          </a>
                          <div className="frame-3">
                            <div className="frame-5">
                              <div className="frame-5">
                                <a
                                  className="w-full"
                                  rel="nofollow"
                                  target="_blank"
                                  // href={item?.link}
                                >
                                  <p className="text-[16px] h-[47px] line-clamp-2 font-semibold">
                                    {item?.title}
                                  </p>
                                </a>
                              </div>
                              <div className="h-[40px]">
                                <div
                                  className=" line-clamp-2 font-normal text-[13px] text-[#52525b] "
                                  dangerouslySetInnerHTML={renderHTML(
                                    item?.description
                                  )}
                                />
                              </div>
                              {/* <div className="text-wrapper-3">
                                {moment(item?.post_created_at).format(
                                  "MMM d, YYYY, h:mm a"
                                )}
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              )}
            </div>
            {/* {getPrintMedia?.length > 0 &&
              getPrintMedia?.map((item) => {
                return (
                  <div key={item?.id} className="w-full news overflow-hidden">
                    <div className="frame-2 w-full">
                      <a
                        className="w-full"
                        target="_blank"
                        rel="nofollow"
                        href={item?.link}
                      >
                        <div className="flex justify-center items-center">
                          <img
                            className="w-full h-52 object-cover "
                            alt="Youtube logo hd"
                            src={item?.img}
                          />
                        </div>
                      </a>
                      <div className="frame-3">
                        <div className="frame-5">
                          <div className="frame-5">
                            <a
                              className="w-full"
                              rel="nofollow"
                              target="_blank"
                              href={item?.link}
                            >
                              <p className="text-[18px] line-clamp-1 font-semibold">
                                {item?.title}
                              </p>
                            </a>
                          </div>
                          <div className="h-12">
                            <div
                              className=" line-clamp-2 text-lg "
                              dangerouslySetInnerHTML={renderHTML(
                                item?.description
                              )}
                            />
                          </div>
                          <div className="text-wrapper-3">
                            {moment(item?.post_created_at).format(
                              "MMM d, YYYY, h:mm a"
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })} */}
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default memo(PrintMedia);
