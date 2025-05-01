import Image from "next/image";
import img1 from "assets/images/Finalimg/Facility/mri-22.jpeg";
import img12 from "assets/images/Finalimg/Facility/ultrasound.avif";
import img2 from "assets/images/Finalimg/Facility/ct-scan.avif";
import img3 from "assets/images/Finalimg/Facility/digital-xray.jpeg";
import img4 from "assets/images/Finalimg/Facility/nuerology.avif";
import img5 from "assets/images/Finalimg/Facility/dental.jpeg";
// import img6 from "assets/images/Finalimg/Facility/mammography.webp";
import img7 from "assets/images/Finalimg/Facility/corinary.jpeg";
import img8 from "assets/images/Finalimg/Facility/ptcet.avif";
import img9 from "assets/images/Finalimg/Facility/nuclear1.jpeg";
import img10 from "assets/images/Finalimg/Facility/dexa.avif";
import img11 from "assets/images/Finalimg/Facility/angio.avif";
import img13 from "assets/images/Finalimg/Facility/Fibroscan.webp";
import { GET_ALL_HEALTHRISK } from "redux/actions/healthrisk";
import { useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

const ButtonGroup = ({ onNext, onPrevious }) => {
  return (
    <div className="flex justify-end items-center space-x-2">
      <button
        onClick={onPrevious}
        className="left-button border text-[#D41958] hover:text-white bg-white h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowBack />
      </button>
      <button
        onClick={onNext}
        className="text-[#D41958] right-button hover:text-white    bg-white border  h-5 w-5 lg:h-8 lg:w-8 rounded-full flex justify-center items-center"
      >
        <IoMdArrowForward />
      </button>
    </div>
  );
};
const Facilities = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { categories } = store.category || {};

  const carouselRef = useRef(null);

  useEffect(() => {
    dispatch(GET_ALL_HEALTHRISK());
  }, [dispatch]);

  // **Fixed Responsive Object (Removed Duplicate "tablet")**
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 4,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  return (
    <section className="w-full">
      {/* Header & Buttons */}
      <div className="flex justify-between px-2 items-center w-full pb-[10px]">
        <p className="lg:text-[32px] ">Facilities</p>
        <ButtonGroup
          onPrevious={() => carouselRef.current?.previous()}
          onNext={() => carouselRef.current?.next()}
        />
      </div>

      {/* Carousel Section */}

      {servicesData.length > 0 && (
        <Carousel
          ref={carouselRef}
          arrows={false}
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all 500ms ease"
          transitionDuration={500}
          containerClass="carousel-container pb-4 pt-[4px]"
          itemClass="px-2 sm:px-3"
          partialVisible={true}
        >
          {servicesData.map((item, index) => (
            <div
              key={index + item?.title}
              className="group bg-white  transition-shadow duration-300 p-4 h-full cursor-pointer"
              role="button"
              onClick={() => router.push(`/facilities/${item?.slug}`)}
            >
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100 group">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    layout="fill"
                    objectFit="unset"
                    quality={100}
                    className="transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-[20px]  text-gray-900 mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  {/* <p className="text-[14px] text-gray-600 line-clamp-3">
                  {item.description}
                </p> */}
                </div>
              </div>
              {/* SVG Separator
                  {index !== servicesData.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="40"
                viewBox="0 0 200 140"
                className="absolute right-[-30px] top-1/2 -translate-y-1/2 z-10"
                aria-hidden="true"
              >
                <path
                  d="M20 80 C 80 30, 120 30, 180 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="text-[#D41958]"
                />
                <polygon 
                  points="177,80 180,74 188,80" 
                  fill="currentColor"
                  className="text-[#D41958]"
                />
                <polygon 
                  points="23,80 22,85 15,80" 
                  fill="currentColor"
                  className="text-[#D41958]"
                />
              </svg>
            )} */}
            </div>
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default Facilities;

const servicesData = [
  {
    title: "MRI Scan",
    imageSrc: img1,
    description:
      "At our facility, we offer MRI scans that provide unparalleled clarity in diagnosing various medical conditions.",
    slug: "mri-scan",
  },
  {
    title: "CT Scan",
    imageSrc: img2,
    description:
      "Get comprehensive insights into your health with our CT scan services.",
    slug: "ct-scan",
  },
  {
    title: "3D/4D Ultrasound",
    imageSrc: img12,
    description:
      "Experience the wonder of pregnancy with our advanced 3D/4D ultrasound services.",
    slug: "ultrasound",
  },
  {
    title: "Digital X-Ray",
    imageSrc: img3,
    description:
      "Our digital X-ray services deliver fast and precise imaging, aiding in the swift diagnosis of injuries and illnesses.",
    slug: "digital-x-ray",
  },
  {
    title: "CT Coronary Angiography",
    imageSrc: img7,
    description:
      "Prioritize your heart health with our CT coronary angiography.",
    slug: "ct-coronary",
  },
  // {
  //   title: "Mammography",
  //   imageSrc: img6,
  //   description:
  //     "Early detection is key to breast health. Our mammography services offer safe and precise breast imaging, promoting...",
  //   slug: "mammography-test-price-delhi",
  // },
  {
    title: "Dental Imaging",
    imageSrc: img5,
    description:
      "Ensure your oral health with our advanced dental imaging services.",
    slug: "Dental-Imaging",
  },
  {
    title: "Angiography",
    imageSrc: img11,
    description:
      "Trust our angiography laboratory for accurate and timely diagnostic services.",
    slug: "angiography",
  },
  {
    title: "Nuclear Medicine",
    imageSrc: img9,
    description:
      "Nuclear imaging provides valuable insights into your body's functioning.",
    slug: "nuclear-mediicine",
  },
  {
    title: "PT CET Scan",
    imageSrc: img8,
    description:
      "Our dedicated pt-cet services focus on maintaining your heart's well-being.",
    slug: "pet-ct",
  },
  // {
  //   title: "Neurology Test",
  //   imageSrc: img4,
  //   description:
  //     "Trust our specialized neurology tests to assess your brain and nervous system health.",
  //   slug: "neurology-test-price-delhi",
  // },
  // {
  //   title: "DEXA (BMD)",
  //   imageSrc: img10,
  //   description:
  //     "Bone health is essential, and our DEXA (Bone Mineral Density) scans are a reliable way to assess it.",
  //   slug: "dexa-bmd-test-price",
  // },
  // {
  //   title: "Fibroscan",
  //   imageSrc: img13,
  //   description:
  //     "At City Imaging, we offer comprehensive details about FibroScan test price in Delhi.",
  //   slug: "fibroscan-test-price",
  // },
];
