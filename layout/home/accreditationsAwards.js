import React, { memo, useEffect, useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_AWARDS } from "redux/actions/homepage";
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
        className="text-[#fcc42c] right-button hover:text-white bg-white border  h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowForward />
      </button>
    </div>
  );
};

const AccreditationsAwards = () => {
  const [open, setOpen] = useState(null);
  const getAwards = useSelector((state) => state?.homepage?.getAwards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_ALL_AWARDS());
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
  console.log("getAwards", getAwards);

  return (
    <>
      <div className=" mx-auto relative lg:px-4 px-2 md:py-8">
        <div>
          <p className="font-semibold lg:text-[32px] text-lg font-source-pro">
            Accreditations & Awards
          </p>
        </div>
        <div>
          {getAwards?.length > 0 && (
            <Carousel
              arrows={false}
              infinite={true}
              draggable={true}
              renderButtonGroupOutside={true}
              containerClass="carousel-container"
              className="w-full h-full"
              customButtonGroup={<ButtonGroup />}
              responsive={responsive}
            >
              {getAwards?.map((item, index) => {
                return (
                  <div
                    key={index + item?.id}
                    className="p-2 mx-1 md:mx-2 my-3 rounded-md"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div
                        role="button"
                        onClick={() => setOpen(item)}
                        className="relative md:w-full sm:w-[70%] w-full justify-center flex items-center bg-[#FFF0DD] p-[20px] lg:p-[25px]  xl:p-[20px] 2xl:p-[30px] rounded-[24px] h-[211px] md:h-[180px] xl:h-[260px] border border-[#FFE2BB]"
                      >
                        <Image
                          width={200}
                          height={200}
                          layout="fixed"
                          className="rounded-lg h-full object-contain w-full object-center"
                          alt={item?.title}
                          src={item?.img}
                        />
                      </div>

                      <div className="py-[12px] flex flex-col gap-y-1 md:gap-y-2 justify-center">
                        <div
                          title={item?.title}
                          className="text-center line-clamp-2 font-semibold text-sm md:text-lg font-source-pro "
                        >
                          <Link
                            href={
                              item?.type == "1"
                                ? `/about/award/${item?.url}`
                                : `/about/accreditation/${item?.url}`
                            }
                          >
                            {item?.title}
                          </Link>
                        </div>
                        {/* <div
                          className="text-center line-clamp-2 text-lg "
                          dangerouslySetInnerHTML={renderHTML(
                            item?.description
                          )}
                        /> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          )}
        </div>
      </div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        className=" bg-transparent"
        centered
        isOpen={open !== null}
        toggle={() => setOpen(null)}
      >
        <ModalBody>
          <div className="relative w-full h-[50vh]  d-flex align-items-center">
            <Image
              width={400}
              height={200}
              layout="fixed"
              className="rounded-lg h-full object-contain w-full object-center"
              alt={open?.title}
              src={open?.img}
            />
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default memo(AccreditationsAwards);
