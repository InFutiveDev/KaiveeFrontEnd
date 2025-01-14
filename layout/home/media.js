import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_MEDIA } from "redux/actions/homepage";
import moment from "moment";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
const renderHTML = (htmlString) => {
  return { __html: htmlString };
};
const ButtonGroup = ({ next, previous, goToSlide, length, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  console.log("length=====", length);
  return (
    <div className="button-group flex  justify-between items-center w-full">
      <button
        disabled={currentSlide === 0}
        onClick={() => previous()}
        className="left-button border bg-white h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <PrevIcons />
      </button>
      <button
        disabled={length <= 3 ? true : false}
        onClick={() => goToSlide(currentSlide + 1)}
        className=" bg-[#fcc42c] text-white h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <NextIcons />
      </button>
    </div>
  );
};
const Media = () => {
  const getMedia = useSelector((state) => state?.homepage?.getMedia);
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
    dispatch(GET_ALL_MEDIA());
  }, []);

  return (
    <div className="boxMedia">
      <div className="frame-wrapper">
        <div className="group">
          <div className="px-2 flex flex-wrap justify-between">
            <div className="font-semibold lg:text-[32px] text-lg font-source-pro">
              Broadcast Media Coverage
            </div>
            <div className="flex gap-3 items-center cursor-pointer">
              <Link
                href="/media-coverage"
                className="text-[#A1A1AA] md:text-lg text-base font-medium"
              >
                View All
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
              {getMedia?.length > 0 && (
                <Carousel
                  arrows={true}
                  infinite={true}
                  draggable={true}
                  autoPlay={true}
                  minimumTouchDrag={80}
                  renderButtonGroupOutside={true}
                  centerMode={false}
                  slidesToSlide={1}
                  containerClass="carousel-container"
                  className="w-full  "
                  customLeftArrow={
                    <button className="absolute left-0 left-button border text-[#fcc42c] hover:text-white bg-white h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center">
                      <IoMdArrowBack />
                    </button>
                  }
                  customRightArrow={
                    <button className="absolute right-0 text-[#fcc42c] right-button hover:text-white bg-white border  h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center">
                      <IoMdArrowForward />
                    </button>
                  }
                  // customButtonGroup={<ButtonGroup length={getMedia?.length} />}
                  responsive={responsive}
                >
                  {getMedia?.map((item) => {
                    return (
                      <div
                        key={item?.id}
                        className=" news overflow-hidden mx-[4px]"
                      >
                        <div className="frame-2 ">
                          <div className="">
                            <a
                              className="w-full"
                              target="_blank"
                              href={item?.yt_link}
                            >
                              <img
                                className="w-[72px] h-[52px] absolute top-[36%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
                                alt="Youtube logo hd"
                                src="https://generation-sessions.s3.amazonaws.com/2d0de78043bc5f4fb9ee798d229f4b85/img/youtube-logo-hd-8-1-2@2x.png"
                              />
                            </a>
                          </div>
                          <a
                            className="w-full"
                            target="_blank"
                            href={item?.yt_link}
                          >
                            <div className="flex justify-center items-center">
                              <img
                                className="w-full h-44  "
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
                                  target="_blank"
                                  href={item?.yt_link}
                                >
                                  <p className="text-[16px] h-[47px] line-clamp-2 font-semibold">
                                    {item?.title}
                                  </p>
                                </a>
                              </div>
                              <div className="h-[40px]">
                                <div
                                  className=" line-clamp-2 font-normal text-[13px]  text-[#52525b]"
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
                  })}
                </Carousel>
              )}
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default memo(Media);
