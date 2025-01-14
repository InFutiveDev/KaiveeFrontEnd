import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { GET_ALL_HABITS } from "redux/actions/habit";

const Habits = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
  const dispatch = useDispatch();
  const router = useRouter();
  const store = useSelector((state) => state);
  const { habit } = store;
  const { habits } = habit;

  useEffect(() => {
    dispatch(GET_ALL_HABITS());
  }, [dispatch, router]);
  return (
    <>
      <section className="habits">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="sec-title text-center offer text-center">
                <h2 className="my-0">Habits</h2>
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="carousel-lab-midd">
                <Slider autoplay={false} {...settings} className="carousel">
                  {habits?.data?.map((habit) => {
                    return (
                      <div>
                        <div className="habits-box-wrap">
                          <div className="habits-box">
                            <Image
                              width={500}
                              height={500}
                              src={habit?.hebit_image}
                              alt="banner 1"
                            />
                          </div>
                          <h2>{habit?.hebitName}</h2>
                          <p>{habit?.description}</p>
                          <a href={`/habit/details/${habit._id}`}>View More</a>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Habits;
