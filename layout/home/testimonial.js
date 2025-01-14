import React, { useState } from "react";
import Slider from "react-slick";
import { QuoteSVG } from "assets/images/SvgImage";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import img1 from "assets/images/Finalimg/clinet/Akash Gupta.webp";
import img2 from "assets/images/Finalimg/clinet/Gurpreet Singh.webp";
import img3 from "assets/images/Finalimg/clinet/Neeraj Kumar.webp";

const RightArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button onClick={onClick} className={className} style={{ ...style }}>
      <PrevIcons />,
    </button>
  );
};

const LeftArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button onClick={onClick} className={className} style={{ ...style }}>
      <NextIcons />,
    </button>
  );
};

const Testimonial = () => {
  const [isActive, setActive] = useState(0);
  let settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
  };
  const active = (index) => {
    setActive(index);
  };
  return (
    <div className="relative">
      <div>
        <p className="font-semibold lg:text-[32px] text-xl px-2 font-source-pro">
          Testimonial
        </p>
      </div>
      <div>
        <Slider {...settings}>
          <div>
            <div className="grid  grid-cols-1 md:grid-cols-3  justify-start items-center space-x-6 p-3">
              <div className=" col-span-1 sm:mx-auto w-full">
                <div className="h-full ">
                  <video
                    className="w-full object-fill  "
                    loop
                    autoPlay={true}
                    muted
                    // video link here
                    src={"/"}
                    controls
                  />
                </div>
              </div>
              <div className="col-span-2 flex justify-between lg:justify-around items-center flex-col h-full w-full ">
                <div className="w-full flex justify-start md:pb-0 pb-2">
                  <QuoteSVG />
                </div>
                <div className="flex justify-center flex-col">
                  <div className="font-poppins">
                    {testimonial.map((item, index) => {
                      return (
                        isActive === index && (
                          <div key={index}>
                            <p className="text-2xl pb-2">{item.name}</p>
                            <p className="text-gray-500 font-[400] !text-[14px] lg:text-[18px] pb-2">
                              {item.description}
                            </p>
                          </div>
                        )
                      );
                    })}
                  </div>
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-start gap-1">
                    {testimonial.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="d-flex flex-col justify-center items-center"
                        >
                          <div
                            className="mb-2 flex justify-start items-center space-x-4"
                            onClick={() => active(index)}
                          >
                            <img
                              alt="other user avatar"
                              src={item.img}
                              className={`md:h-14 md:w-14 h-10 w-10 ${
                                isActive === index
                                  ? "Testimonial-img-active"
                                  : ""
                              }`}
                            />
                          </div>
                          {/* {isActive === index ? (
                            <p className="text-sm">{item.name}</p>
                          ) : (
                            <div className="" />
                          )} */}
                        </div>
                      );
                    })}
                  </div>
                  <QuoteSVG />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
const testimonial = [
  {
    id: 1,
    name: "Patient1",
    img: img1.src,
    description:
      "I have had a lovely experience with Kaivee. The staff is very friendly and very assertive. They help and guide people with best possible way. Receptionists are extremely polite and humble. They give special attention to elderly people and pregnant ladies. Kudos to the entire team.",
  },
  {
    id: 3,
    name: "Patient2",
    img: img2.src,
    description:
      "Good service and very professional and efficient staff. Ms. Neha ma’am was wonderful with her work & their staff is also very nice & helpful. I would say one of the best X ray clinic in west Delhi.",
  },
  {
    id: 2,
    name: "Patient3",
    img: img3.src,
    description:
      "Nice diagnostic centre in Delhi. I am feeling good because I got best quality radiology services here. I have done my 3 Tesla MRI Scan, CT Scan test, CBCT dental test from Kaivee. Cost is affordable. Staff is very professional and cooperative.",
  },
];
