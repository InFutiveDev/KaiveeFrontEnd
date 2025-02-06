import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  const testimonials = [
    {
      text: "Kaivee Healthcare made my health check-up seamless! Their home collection service was a lifesaver, and my reports were ready in no time!.",
      name: "Riya Sharma",
    },
    {
      text: "Accurate results, professional staff, and a smooth experience—Kaivee Healthcare is my go-to lab!.",
      name: "Anil Mehta",
    },
    {
      text: "The whole process, from booking to receiving reports, was effortless. Highly recommended!.",
      name: "Priya Kapoor",
    },
    {
      text: "Affordable, reliable, and hygienic. Kaivee Healthcare exceeded my expectations!.",
      name: "Vikram Singh",
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
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          Trusted by Leading Medical Practices
        </h2>
        <p className="text-gray-600 lg:text-lg">
          See how clinics and hospitals are transforming their workflows with our platform.
        </p>
      </div>

      {/* First Carousel */}
      <div
        className="mb-14"
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
                {`"${item.text}"`}
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
        className="mt-6"
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
                {`"${item.text}"`}
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
