import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import HomeTestCard from "./hometestCard";

import { useRouter } from "next/router";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <div className="button-group flex  justify-between items-center w-full">
      <button
        disabled={currentSlide === 0}
        onClick={() => previous()}
        className="left-button border text-[#D41958]] hover:text-white bg-white h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowBack />
      </button>
      <button
        onClick={() => goToSlide(currentSlide + 1)}
        className="text-[#D41958] right-button hover:text-white    bg-white border  h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowForward />
      </button>
    </div>
  );
};

const ButtonGroupMenu = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <div className="button-group flex  h-0 justify-between items-center w-full">
      <button
        disabled={currentSlide === 0}
        onClick={() => previous()}
        className="absolute -left-[19px] text-secondary h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={() => goToSlide(currentSlide + 1)}
        className="absolute  md:-right-[41px] sm:right-0 -right-[20px] text-secondary  h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

const HomePopularPackeges = ({
  title,
  navbar,
  handlePackagesTabChange,
  handleTestsTabChange,
  data,
  id,
  handleCartData,
  cart,
  viewAll,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items to display per page
  const totalItems = navbar.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Calculate the index range to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = navbar.slice(startIndex, endIndex);
  const [currentActiveTab, setCurrentActiveTab] = useState("0");
  const router = useRouter();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 764, min: 464 },
      items: 2,
      // partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsiveMenu = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 764, min: 640 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };
  const handleViewMore = () => {
    // if (window.innerWidth <= 640) {
    router.push(
      `/book-a-test?Categories=${currentActiveTab}&filterType=Categories`
    );
    // } else {
    //   router.push(viewAll);
    // }
  };
  const toggle = (item, tab) => {
    if (currentActiveTab !== tab) {
      setCurrentActiveTab(item?._id);
      if (id === "packages") {
        handlePackagesTabChange(item?._id);
      } else if (id === "test") {
        handleTestsTabChange(item?._id);
      }
    }
  };

  useEffect(() => {
    if (id === "packages" && navbar.length !== 0 && currentActiveTab == 0) {
      setCurrentActiveTab(navbar[0]?._id);
      handlePackagesTabChange(navbar[0]?._id);
    } else if (id === "test" && navbar.length !== 0 && currentActiveTab == 0) {
      setCurrentActiveTab(navbar[0]?._id);
      handleTestsTabChange(navbar[0]?._id);
    }
  }, [navbar]);

  return (
    <div className="w-full">
      <div className="relative w-full flex md:!flex-nowrap sm:flex-row	 sm:gap-1 sm:flex-wrap flex-col  sm:items-center items-start md:justify-between  justify-start space-x-3 p-2">
        <div className="inline-flex justify-start">
          <p className="lg:text-[32px] text-xl font-source-pro">
            {title}
          </p>
        </div>
        
        {false && (
          <div className="relative lg:w-1/2 md:w-1/3 sm:w-full w-[50%] ">
            <Carousel
              arrows={false}
              infinite={true}
              draggable={true}
              renderButtonGroupOutside={true}
              containerClass="carousel-container"
              className=" "
              customButtonGroup={<ButtonGroupMenu />}
              responsive={responsiveMenu}
            >
              {navbar?.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      toggle(item, index);
                    }}
                    className=" mx-1"
                  >
                    <p
                      className={`break-words text-center	whitespace-normal lg:text-[14px] md:text-[12px] text-[14px]	 ${
                        currentActiveTab == item?._id
                          ? "text-orange !border-b-2 !border-t-0 !border-r-0 !border-l-0 !border-orange !p-0 font-[600] "
                          : "text-secondary !border-0 !p-0 cursor-pointer "
                      }`}
                    >
                      {Object.keys(item).includes("hebitName")
                        ? item?.hebitName
                        : item?.category_name}
                    </p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        )}

        <div className="sm:relative sm:top-0 sm:right-0 absolute top-8 right-0">
          <button
            onClick={() => {
              handleViewMore();
            }}
            className="bg-[#D41958] sm:w-36 w-fit	text-white sm:text-[14px] text-[12px] rounded-md px-[8px] sm:px-3 lg:px-2 py-1 font-[500] lg:ml-auto ml-0"
          >
            View more
          </button>
        </div>
      </div>
      <div className=" relative w-full ">
        {data?.length > 0 && (
          <Carousel
            arrows={true}
            infinite={true}
            draggable={true}
            renderButtonGroupOutside={true}
            // ref={carouselRef}
            rewind={false}
            partialVisible
            minimumTouchDrag={80}
            centerMode={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            slidesToSlide={1}
            containerClass="carousel-container"
            className="w-full h-[50vh] "
            customLeftArrow={
              <button className="absolute left-0 left-button border text-[#D41958] hover:text-white bg-white h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center">
                <IoMdArrowBack />
              </button>
            }
            customRightArrow={
              <button className="absolute right-0 text-[#D41958] right-button hover:text-white bg-white border  h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center">
                <IoMdArrowForward />
              </button>
            }
            // customButtonGroup={<ButtonGroup />}
            responsive={responsive}
          >
            {data?.map((item) => {
              return (
                <div key={item?._id} className=" p-2 ">
                  <HomeTestCard
                    data={item}
                    cart={cart}
                    handleCartData={handleCartData}
                  />
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default HomePopularPackeges;