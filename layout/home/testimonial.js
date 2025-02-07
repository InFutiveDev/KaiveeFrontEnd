import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  const testimonials = [
    {
      text: "I made RT PCR test from this lab.My experience with this lab was wonderful and each process was easy and fast. Highly recommended services.",
      name: "Lokesh Singh",
    },
    {
      text: "Very efficient ad prompt. Have well established contactless transfer of info, receipts and data. Dev from Zen health extends great co-operation and co-ordination.Strongly recommend to avail their services",
      name: "Rahul Vats",
    },
    {
      text: "Recently I got my test done from Zen Health Solutions, I would highly recommend zen health if you are looking for reasonable prices, clean environment with accurate and on-time results. Best services I got ever",
      name: "Sonu Goel",
    },
    {
      text: "Zen Health is a very professional establishment and their services are the best bar none. Also, the reports usually arrive before the expected time. Quite happy and satisfied with my experience with them",
      name: "Sadh Khan",
    },
  ];

  const anotherSetOfTestimonials = [
    {
      text: "I loved how easy it was to book my tests online and get my reports digitally. Great service!.",
      name: "Neha Verma",
    },
    {
      text: "Their staff is courteous and professional, and the test process was quick and painless.",
      name: "Sandeep Rao",
    },
    {
      text: "The home collection service saved me time and effort. Will definitely choose Kaivee Healthcare again!.",
      name: "Meenal Joshi",
    },
    {
      text: "Prompt service, accurate results, and great customer support. I trust Kaivee Healthcare for all my diagnostic needs.",
      name: "Rohit Malhotra",
    },
  ];

  const reversedTestimonials = [...anotherSetOfTestimonials].reverse();

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="text-center ">
        <h2 className="text-3xl lg:text-4xl  text-gray-800 mb-2">
        Happy Customers
        </h2>
        <p className="text-gray-600 lg:text-lg">
        Don't take our word for it. See what customers are saying about us.
        </p>
      </div>

      {/* First Carousel */}
      <div
        className="gap mb-4"
        style={{
          transform: "translateX(40px)",
          transition: "transform 0.3s ease-in-out",
          padding: "0 32px",
        }}
      >
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          transitionDuration={500}
          showDots
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={false}
          rtl
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-lg bg-white border border-gray-100 flex flex-col justify-between"
              style={{
                margin: "20px",
                width: "100%",
                height: "250px",
                overflow: "hidden",
              }}
            >
              <p
                className="text-gray-700 "
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {`${item.text}`}
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 bg-[#D41958] rounded-full flex-shrink-0"></div>
                <div className="mr-4">
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Second Carousel */}
      <div
        className="gap mt-6"
        style={{
          transform: "translateX(-40px)",
          transition: "transform 0.3s ease-in-out",
          padding: "0 32px",
        }}
      >
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          transitionDuration={500}
          showDots
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={false}
        >
          {reversedTestimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-lg bg-white border border-gray-100 flex flex-col justify-between"
              style={{
                margin: "20px",
                width: "100%",
                height: "250px",
                overflow: "hidden",
              }}
            >
              <p
                className="text-gray-700 "
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {`${item.text}`}
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 bg-[#8DBD4D] rounded-full flex-shrink-0"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
