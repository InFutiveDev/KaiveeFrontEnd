import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  const testimonials = [
    {
      text: "When I signed up with Lendwise it was a no-brainer. It’s been one of the best decisions I’ve made to ensure my finances are on point.",
      name: "Alex Bergwin",
      position: "Accounting at MakeShip",
    },
    {
      text: "When I signed up with Lendwise it was a no-brainer. It’s been one of the best decisions I’ve made to ensure my finances are on point.",
      name: "Alex Bergwin",
      position: "Accounting at MakeShip",
    },
    {
      text: "When I signed up with Lendwise it was a no-brainer. It’s been one of the best decisions I’ve made to ensure my finances are on point.",
      name: "Alex Bergwin",
      position: "Accounting at MakeShip",
    },
    {
      text: "When I signed up with Lendwise it was a no-brainer. It’s been one of the best decisions I’ve made to ensure my finances are on point.",
      name: "Alex Bergwin",
      position: "Accounting at MakeShip",
    },
    {
      text: "When I signed up with Lendwise it was a no-brainer. It’s been one of the best decisions I’ve made to ensure my finances are on point.",
      name: "Alex Bergwin",
      position: "Accounting at MakeShip",
    },
  ];

  const anotherSetOfTestimonials = [
    {
      text: "The service provided has completely transformed my financial management! I couldn’t be more pleased with the results.",
      name: "Jamie Smith1",
      position: "Marketing Director at GlobalTech",
    },
    {
      text: "Lendwise has simplified my budgeting and made managing my finances so much easier. Highly recommend!",
      name: "Sophie Liu2",
      position: "Finance Manager at SpeedyCorp",
    },
    {
      text: "A game-changer for managing my financial health. Lendwise has become an essential part of my workflow.",
      name: "David Green3",
      position: "Business Consultant at Green Solutions",
    },
    {
      text: "When I signed up with Lendwise it was a no-brainer. It’s been one of the best decisions I’ve made to ensure my finances are on point.",
      name: "Alex Bergwin",
      position: "Accounting at MakeShip",
    },
  ];

  // Reverse the array to start iteration from the end
  const reversedTestimonials = [...anotherSetOfTestimonials].reverse();

  // Carousel settings
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="bg-white py-14 px-6 lg:px-24">
      <div className="text-center mb-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          Trusted by Leading Medical Practices
        </h2>
        <p className="text-gray-600 lg:text-lg">
          See how clinics and hospitals are transforming their workflows with our platform.
        </p>
      </div>

      {/* First Carousel - Move Right */}
      <div
        className="mb-14"
        style={{
          transform: "translateX(40px)",
          transition: "transform 0.3s ease-in-out",
          padding: "0 32px", // Added padding around the carousel
        }}
      >
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={false} // Disable arrows
          rtl={true}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-lg bg-white border border-gray-100"
              style={{
                margin: "20px", // Space between items
                width: "100%", // Constant width
                height: "auto", // Constant height
              }}
            >
              <p className="text-gray-700 mb-6">{`"${item.text}"`}</p>
              <div className="flex items-center">
                <div className="h-10 w-10 bg-[#D41958] rounded-full flex-shrink-0"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Second Carousel - Move Left */}
      <div
        className="mt-6"
        style={{
          transform: "translateX(-40px)", // Increased left shift
          transition: "transform 0.3s ease-in-out",
          padding: "0 32px", // Added padding around the carousel

        }}
      >
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={false} // Disable arrows
          
        >
          {reversedTestimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-lg bg-white border border-gray-100"
              style={{
                margin: "20px", // Space between items
                width: "100%", // Constant width
                height: "auto", // Constant height
              }}
            >
              <p className="text-gray-700 mb-6">{`"${item.text}"`}</p>
              <div className="flex items-center">
                <div className="h-10 w-10 bg-[#8DBD4D] rounded-full flex-shrink-0"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* View More Button */}
      {/* <div className="text-center mt-8">
        <button className="px-8 py-3 text-white bg-[#D41958] rounded-lg shadow-lg hover:bg-pink-600">
          View More →
        </button>
      </div> */}
    </section>
  );
};

export default Testimonial;
