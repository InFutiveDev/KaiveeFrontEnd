import React, { useState } from "react";
import Slider from "react-slick";
import { QuoteSVG } from "assets/images/SvgImage";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import img1 from "assets/images/Finalimg/clinet/Akash Gupta.webp";
import img2 from "assets/images/Finalimg/clinet/Gurpreet Singh.webp";
import img3 from "assets/images/Finalimg/clinet/Neeraj Kumar.webp";

// const RightArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <button onClick={onClick} className={className} style={{ ...style }}>
//       <PrevIcons />,
//     </button>
//   );
// };

// const LeftArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <button onClick={onClick} className={className} style={{ ...style }}>
//       <NextIcons />,
//     </button>
//   );
// };

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
    {
      text: "When I signed up with Lendwise it was a no-brainer. It’s been one of the best decisions I’ve made to ensure my finances are on point.",
      name: "Alex Bergwin",
      position: "Accounting at MakeShip",
    },
  ];

  return (
    <section className="bg-white py-14 px-6 lg:px-24">
      <div className="text-center mb-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          Trusted by Leading Medical Practices
        </h2>
        <p className="text-gray-600 lg:text-lg">
          See how clinics and hospitals are transforming their workflows with
          our platform.
        </p>
      </div>

      <div className="grid gap-10 lg:gap-12 xl:gap-14 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="p-6 shadow-lg rounded-lg bg-white border border-gray-100"
          >
            <p className="text-gray-700 mb-6">{`"${item.text}"`}</p>
            <div className="flex items-center">
              <div className="h-10 w-10 bg-pink-200 rounded-full flex-shrink-0"></div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-600">
          View More →
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
const testimonial = [
  {
    id: 1,
    name: "Patient1",
    img: "",
    description:
      "I have had a lovely experience with Kaivee. The staff is very friendly and very assertive. They help and guide people with best possible way. Receptionists are extremely polite and humble. They give special attention to elderly people and pregnant ladies. Kudos to the entire team.",
  },
  {
    id: 3,
    name: "Patient2",
    img: "",
    description:
      "Good service and very professional and efficient staff. Ms. Neha ma’am was wonderful with her work & their staff is also very nice & helpful. I would say one of the best X ray clinic in west Delhi.",
  },
  {
    id: 2,
    name: "Patient3",
    img: "",
    description:
      "Nice diagnostic centre in Delhi. I am feeling good because I got best quality radiology services here. I have done my 3 Tesla MRI Scan, CT Scan test, CBCT dental test from Kaivee. Cost is affordable. Staff is very professional and cooperative.",
  },
];
