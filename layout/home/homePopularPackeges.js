import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import HomePackegesCard from "./homePackegesCard";

import { useRouter } from "next/router";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <div className="button-group flex  justify-between items-center w-full h-0">
      <button
        disabled={currentSlide === 0}
        onClick={() => previous()}
        className="left-button border text-[#fcc42c] hover:text-white bg-white h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowBack />
      </button>
      <button
        onClick={() => goToSlide(currentSlide + 1)}
        className="text-[#fcc42c] right-button hover:text-white    bg-white border  h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowForward />
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
      // partialVisibilityGutter: 40,
    },
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
      <div className="w-full flex items-center justify-between space-x-3 p-2">
        <div className=" inline-flex justify-start  lg:w-[560px] md:w-[560px] w-[420px]">
          <p className=" lg:text-[32px] text-xl font-source-pro">
            {title}
          </p>
        </div>

        {navbar.length !== 0 && (
          <div className="w-full flex items-center justify-start space-x-2">
            <button
              className="w-10 h-10 z-30 "
              onClick={() => handlePageChange(currentPage - 1)}
            >
              {"<"}
            </button>
            <Nav
              tabs
              className="!border-0  space-x-2  font-[400] flex items-center cstm-navbar overflow-x-scroll overflow-y-hidden flex-nowrap whitespace-nowrap overflow-scroll max-w-[460px] pr-10"
            >
              {visibleItems?.map((item, index) => (
                <NavItem key={index}>
                  <NavLink
                    className={` ${
                      currentActiveTab == item?._id
                        ? "text-orange !border-b-2 !border-t-0 !border-r-0 !border-l-0 !border-orange !p-0 font-[600] text-[16px]"
                        : "text-secondary !border-0 !p-0 cursor-pointer text-[16px]"
                    }`}
                    onClick={() => {
                      toggle(item, index);
                    }}
                  >
                    {Object.keys(item).includes("hebitName")
                      ? item?.hebitName
                      : item?.category_name}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
            <button
              className="w-10 h-10 z-30 "
              onClick={() => handlePageChange(currentPage + 1)}
            >
              {">"}
            </button>
          </div>
        )}
        <button
          onClick={() => router.push(viewAll)}
          className="bg-[#D41958] w-36 text-white lg:text-[14px] md:text-[14px] text-[12px] rounded-md px-2 lg:px-2 py-1 font-[500]"
        >
          View more
        </button>
      </div>
      <div className=" relative w-full ">
        {data?.length > 0 && (
          <Carousel
            arrows={false}
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
            customButtonGroup={<ButtonGroup />}
            responsive={responsive}
          >
            {data?.map((item) => {
              return (
                <div key={item?._id} className=" p-2 ">
                  <HomePackegesCard
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
