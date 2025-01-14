import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";

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

const Blogs = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="blogs">
      <div className="blogHeading">
        <h2>Latest Blogs</h2>
      </div>

      <div className="container boxblogMain">
        <Slider {...settings} className="carousel">
          <div className="boxBlog">
            <div className="frame-wrapper">
              <div className="frame">
                <img
                  className="city-advanced-health"
                  alt="City advanced health"
                  src="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/city-advanced-health-package-website--1350x1050--1@2x.png"
                />
                <div className="div-wrapper">
                  <div className="div">
                    <div className="frame-2">
                      <div className="frame-3">
                        <div className="text-wrapper">Blog Name</div>
                        <div className="frame-4">
                          <div
                            calendarClassName="iconly-light-outline-instance"
                            className="iconly-light-outline-calendar"
                            fill="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-1-1.svg"
                            fill1="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-5-1.svg"
                            fill2="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-7-1.svg"
                            fill3="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-9-1.svg"
                            fill4="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-11-1.svg"
                            fill5="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-13-1.svg"
                            fill6="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-15-1.svg"
                            fill7="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-17-1.svg"
                            fillClassName="design-component-instance-node"
                            fillClassName1="iconly-light-outline-5"
                            fillClassName2="iconly-light-outline-6"
                            fillClassName3="iconly-light-outline-7"
                            fillClassName4="iconly-light-outline-8"
                            fillClassName5="iconly-light-outline-9"
                            fillClassNameOverride="iconly-light-outline-2"
                            group="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/group-21-1@2x.png"
                            groupClassName="iconly-light-outline-10"
                            img="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-3-1.svg"
                            imgClassName="iconly-light-outline-3"
                            imgClassNameOverride="iconly-light-outline-4"
                            overlapGroupClassName="iconly-light-outline-calendar-instance"
                          />
                          <div className="text-wrapper-2">May 11, 2023</div>
                        </div>
                      </div>
                    </div>
                    <p className="p">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                    <div className="frame-5">
                      <img
                        className="ellipse"
                        alt="Ellipse"
                        src="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/ellipse-3983@2x.png"
                      />
                      <div className="frame-6">
                        <div className="text-wrapper-3">Marvin McKinney</div>
                        <div className="text-wrapper-4">UI/Ux Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boxBlog">
            <div className="frame-wrapper">
              <div className="frame">
                <img
                  className="city-advanced-health"
                  alt="City advanced health"
                  src="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/city-advanced-health-package-website--1350x1050--1@2x.png"
                />
                <div className="div-wrapper">
                  <div className="div">
                    <div className="frame-2">
                      <div className="frame-3">
                        <div className="text-wrapper">Blog Name</div>
                        <div className="frame-4">
                          <div
                            calendarClassName="iconly-light-outline-instance"
                            className="iconly-light-outline-calendar"
                            fill="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-1-1.svg"
                            fill1="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-5-1.svg"
                            fill2="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-7-1.svg"
                            fill3="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-9-1.svg"
                            fill4="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-11-1.svg"
                            fill5="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-13-1.svg"
                            fill6="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-15-1.svg"
                            fill7="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-17-1.svg"
                            fillClassName="design-component-instance-node"
                            fillClassName1="iconly-light-outline-5"
                            fillClassName2="iconly-light-outline-6"
                            fillClassName3="iconly-light-outline-7"
                            fillClassName4="iconly-light-outline-8"
                            fillClassName5="iconly-light-outline-9"
                            fillClassNameOverride="iconly-light-outline-2"
                            group="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/group-21-1@2x.png"
                            groupClassName="iconly-light-outline-10"
                            img="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-3-1.svg"
                            imgClassName="iconly-light-outline-3"
                            imgClassNameOverride="iconly-light-outline-4"
                            overlapGroupClassName="iconly-light-outline-calendar-instance"
                          />
                          <div className="text-wrapper-2">May 11, 2023</div>
                        </div>
                      </div>
                    </div>
                    <p className="p">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                    <div className="frame-5">
                      <img
                        className="ellipse"
                        alt="Ellipse"
                        src="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/ellipse-3983@2x.png"
                      />
                      <div className="frame-6">
                        <div className="text-wrapper-3">Marvin McKinney</div>
                        <div className="text-wrapper-4">UI/Ux Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boxBlog">
            <div className="frame-wrapper">
              <div className="frame">
                <img
                  className="city-advanced-health"
                  alt="City advanced health"
                  src="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/city-advanced-health-package-website--1350x1050--1@2x.png"
                />
                <div className="div-wrapper">
                  <div className="div">
                    <div className="frame-2">
                      <div className="frame-3">
                        <div className="text-wrapper">Blog Name</div>
                        <div className="frame-4">
                          <div
                            calendarClassName="iconly-light-outline-instance"
                            className="iconly-light-outline-calendar"
                            fill="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-1-1.svg"
                            fill1="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-5-1.svg"
                            fill2="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-7-1.svg"
                            fill3="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-9-1.svg"
                            fill4="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-11-1.svg"
                            fill5="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-13-1.svg"
                            fill6="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-15-1.svg"
                            fill7="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-17-1.svg"
                            fillClassName="design-component-instance-node"
                            fillClassName1="iconly-light-outline-5"
                            fillClassName2="iconly-light-outline-6"
                            fillClassName3="iconly-light-outline-7"
                            fillClassName4="iconly-light-outline-8"
                            fillClassName5="iconly-light-outline-9"
                            fillClassNameOverride="iconly-light-outline-2"
                            group="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/group-21-1@2x.png"
                            groupClassName="iconly-light-outline-10"
                            img="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-3-1.svg"
                            imgClassName="iconly-light-outline-3"
                            imgClassNameOverride="iconly-light-outline-4"
                            overlapGroupClassName="iconly-light-outline-calendar-instance"
                          />
                          <div className="text-wrapper-2">May 11, 2023</div>
                        </div>
                      </div>
                    </div>
                    <p className="p">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                    <div className="frame-5">
                      <img
                        className="ellipse"
                        alt="Ellipse"
                        src="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/ellipse-3983@2x.png"
                      />
                      <div className="frame-6">
                        <div className="text-wrapper-3">Marvin McKinney</div>
                        <div className="text-wrapper-4">UI/Ux Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boxBlog">
            <div className="frame-wrapper">
              <div className="frame">
                <img
                  className="city-advanced-health"
                  alt="City advanced health"
                  src="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/city-advanced-health-package-website--1350x1050--1@2x.png"
                />
                <div className="div-wrapper">
                  <div className="div">
                    <div className="frame-2">
                      <div className="frame-3">
                        <div className="text-wrapper">Blog Name</div>
                        <div className="frame-4">
                          <div
                            calendarClassName="iconly-light-outline-instance"
                            className="iconly-light-outline-calendar"
                            fill="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-1-1.svg"
                            fill1="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-5-1.svg"
                            fill2="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-7-1.svg"
                            fill3="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-9-1.svg"
                            fill4="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-11-1.svg"
                            fill5="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-13-1.svg"
                            fill6="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-15-1.svg"
                            fill7="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-17-1.svg"
                            fillClassName="design-component-instance-node"
                            fillClassName1="iconly-light-outline-5"
                            fillClassName2="iconly-light-outline-6"
                            fillClassName3="iconly-light-outline-7"
                            fillClassName4="iconly-light-outline-8"
                            fillClassName5="iconly-light-outline-9"
                            fillClassNameOverride="iconly-light-outline-2"
                            group="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/group-21-1@2x.png"
                            groupClassName="iconly-light-outline-10"
                            img="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-3-1.svg"
                            imgClassName="iconly-light-outline-3"
                            imgClassNameOverride="iconly-light-outline-4"
                            overlapGroupClassName="iconly-light-outline-calendar-instance"
                          />
                          <div className="text-wrapper-2">May 11, 2023</div>
                        </div>
                      </div>
                    </div>
                    <p className="p">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                    <div className="frame-5">
                      <img
                        className="ellipse"
                        alt="Ellipse"
                        src="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/ellipse-3983@2x.png"
                      />
                      <div className="frame-6">
                        <div className="text-wrapper-3">Marvin McKinney</div>
                        <div className="text-wrapper-4">UI/Ux Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boxBlog">
            <div className="frame-wrapper">
              <div className="frame">
                <img
                  className="city-advanced-health"
                  alt="City advanced health"
                  src="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/city-advanced-health-package-website--1350x1050--1@2x.png"
                />
                <div className="div-wrapper">
                  <div className="div">
                    <div className="frame-2">
                      <div className="frame-3">
                        <div className="text-wrapper">Blog Name</div>
                        <div className="frame-4">
                          <div
                            calendarClassName="iconly-light-outline-instance"
                            className="iconly-light-outline-calendar"
                            fill="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-1-1.svg"
                            fill1="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-5-1.svg"
                            fill2="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-7-1.svg"
                            fill3="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-9-1.svg"
                            fill4="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-11-1.svg"
                            fill5="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-13-1.svg"
                            fill6="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-15-1.svg"
                            fill7="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-17-1.svg"
                            fillClassName="design-component-instance-node"
                            fillClassName1="iconly-light-outline-5"
                            fillClassName2="iconly-light-outline-6"
                            fillClassName3="iconly-light-outline-7"
                            fillClassName4="iconly-light-outline-8"
                            fillClassName5="iconly-light-outline-9"
                            fillClassNameOverride="iconly-light-outline-2"
                            group="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/group-21-1@2x.png"
                            groupClassName="iconly-light-outline-10"
                            img="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/fill-3-1.svg"
                            imgClassName="iconly-light-outline-3"
                            imgClassNameOverride="iconly-light-outline-4"
                            overlapGroupClassName="iconly-light-outline-calendar-instance"
                          />
                          <div className="text-wrapper-2">May 11, 2023</div>
                        </div>
                      </div>
                    </div>
                    <p className="p">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                    <div className="frame-5">
                      <img
                        className="ellipse"
                        alt="Ellipse"
                        src="https://generation-sessions.s3.amazonaws.com/8bfa01730d882411ffedd65415ae71c2/img/ellipse-3983@2x.png"
                      />
                      <div className="frame-6">
                        <div className="text-wrapper-3">Marvin McKinney</div>
                        <div className="text-wrapper-4">UI/Ux Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Blogs;
