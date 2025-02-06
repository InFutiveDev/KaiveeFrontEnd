import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomePackegesCard from "./homePackegesCard";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <div className="button-group flex justify-between items-center w-full h-0">
      <button
        disabled={currentSlide === 0}
        onClick={previous}
        className="left-button border text-[#fcc42c] hover:text-white bg-white h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowBack />
      </button>
      <button
        onClick={() => goToSlide(currentSlide + 1)}
        className="text-[#fcc42c] right-button hover:text-white bg-white border h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowForward />
      </button>
    </div>
  );
};

const HomePopularTest = ({
  title,
  handleTestsTabChange,
  data = [],
  id,
  handleCartData,
  cart,
  viewAll,
}) => {
  const [currentActiveTab, setCurrentActiveTab] = useState("0");

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 764, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  useEffect(() => {
    if (id === "test" && data.length > 0 && currentActiveTab === "0") {
      setCurrentActiveTab(data[0]?._id);
      handleTestsTabChange(data[0]?._id);
    }
  }, [data, id]);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between space-x-3 p-2">
        <p className="font-semibold lg:text-[32px] text-xl font-source-pro">{title}</p>
        <button
          onClick={() => window.location.href = viewAll} // Redirect to view all page
          className="bg-[#D41958] w-36 text-white lg:text-[14px] md:text-[14px] text-[12px] rounded-md px-2 lg:px-2 py-1 font-[500]"
        >
          View more
        </button>
      </div>
      <div className="relative w-full">
        {data.length > 0 && (
          <Carousel
            arrows={false}
            infinite
            draggable
            renderButtonGroupOutside
            partialVisible
            slidesToSlide={1}
            containerClass="carousel-container"
            className="w-full h-[50vh]"
            customButtonGroup={<ButtonGroup />}
            responsive={responsive}
          >
            {data.map((item) => (
              <div key={item?._id} className="p-2">
                <HomePackegesCard
                  data={item}
                  cart={cart}
                  handleCartData={handleCartData}
                />
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default HomePopularTest;
