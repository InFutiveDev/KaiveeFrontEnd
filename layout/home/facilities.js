import Image from "next/image";
import img1 from "assets/images/Finalimg/Facility/MRI Scan.webp";
import img12 from "assets/images/Finalimg/Facility/ultrasound.webp";
import img2 from "assets/images/Finalimg/Facility/CT Scan.webp";
import img3 from "assets/images/Finalimg/Facility/digital xray.webp";
import img4 from "assets/images/Finalimg/Facility/Neurology tests.webp";
import img5 from "assets/images/Finalimg/Facility/Dental Imaging.webp";
import img6 from "assets/images/Finalimg/Facility/mammography.webp";
import img7 from "assets/images/Finalimg/Facility/CT coronary angiography.webp";
import img8 from "assets/images/Finalimg/Facility/Cardiology Tests.webp";
import img9 from "assets/images/Finalimg/Facility/nuclear imaging.webp";
import img10 from "assets/images/Finalimg/Facility/BMD.webp";
import img11 from "assets/images/Finalimg/Facility/Laboratory pathology lab.webp";
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

const Facilities = ({ facilitiedData }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const {
    category,
    // habit, auth, test, cart, bookTest
  } = store;
  const { categories } = category;
  const carouselRef = useRef(null);

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const findFacilitiesId = (name) => {
    let findId = categories.data.categoryData.find(
      (item) => item.perent_category_name === name
    );
    if (findId) {
      return findId._id;
    } else {
      return "NAN";
    }
  };

  useEffect(() => {
    dispatch(GET_ALL_HEALTHRISK());
  }, [dispatch]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 764, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="w-full">
      <div className=" relative w-full ">
        <div className="flex justify-between px-2 items-center w-full pb-[10px]">
          <p className="lg:text-[32px]  font-[600] font-source-pro">
            Facilities
          </p>
          <ButtonGroup onPrevious={handlePrevious} onNext={handleNext} />
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            {servicesData?.length > 0 && (
              <Carousel
                arrows={false}
                infinite={true}
                draggable={true}
                renderButtonGroupOutside={true}
                ref={carouselRef}
                containerClass="carousel-container"
                className="w-full h-[36vh] "
                responsive={responsive}
              >
                {servicesData?.map((item, i) => {
                  return (
                    <div key={i + item?.title} className="h-full">
                      <div className="slide ProductServicescard cursor-pointer h-full">
                        <div className="ProductServicesInfo">
                          <div
                            role="button"
                            onClick={() =>
                              router.push(`/facilities/${item?.slug}`)
                            }
                            // onClick={() =>
                            //   router.push(
                            //     {
                            //       pathname: `/facilities/${item?.slug}`,
                            //         query: {
                            //              id: findFacilitiesId(item?.slug),
                            //           },
                            //     },
                            //     `/facilities/${item?.slug}`
                            //   )
                            // }
                            className="ProductServicesImage"
                          >
                            <Image
                              width={60}
                              height={60}
                              loading="eager"
                              src={item?.imageSrc}
                              alt="liver icon"
                              style={{ objectFit: "contain" }}
                              className="w-45"
                            />
                          </div>
                          <div
                            role="button"
                            onClick={() =>
                              router.push(`/facilities/${item?.slug}`)
                            }
                            className="ProductServicesInfoContent"
                          >
                            <h5>{item?.title}</h5>
                            <p className=" leading-normal mt-2 font-normal text-[13px]  text-[#52525b] hide-long-text ">
                              {item?.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            )}
          </div>
        </div>
      </div>
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
    slug: "mri-scan-price-in-delhi",
  },
  {
    title: "CT Scan",
    imageSrc: img2,
    description:
      "Get comprehensive insights into your health with our CT scan services.",
    slug: "ct-scan-price-delhi",
  },
  {
    title: "3D/4D Ultrasound",
    imageSrc: img12,
    description:
      "Experience the wonder of pregnancy with our advanced 3D/4D ultrasound services.",
    slug: "3d-4d-ultrasound-near-me",
  },
  {
    title: "Digital X-Ray",
    imageSrc: img3,
    description:
      "Our digital X-ray services deliver fast and precise imaging, aiding in the swift diagnosis of injuries and illnesses.",
    slug: "digital-x-ray-price",
  },
  {
    title: "CT Coronary Angiography",
    imageSrc: img7,
    description:
      "Prioritize your heart health with our CT coronary angiography.",
    slug: "ct-coronary-angiography-price",
  },
  {
    title: "Mammography",
    imageSrc: img6,
    description:
      "Early detection is key to breast health. Our mammography services offer safe and precise breast imaging, promoting...",
    slug: "mammography-test-price-delhi",
  },
  {
    title: "Dental Imaging",
    imageSrc: img5,
    description:
      "Ensure your oral health with our advanced dental imaging services.",
    slug: "dental-x-ray-near-me",
  },
  {
    title: "Pathology Laboratory",
    imageSrc: img11,
    description:
      "Trust our pathology laboratory for accurate and timely diagnostic services.",
    slug: "best-pathology-lab-in-delhi",
  },
  {
    title: "Nuclear Imaging",
    imageSrc: img9,
    description:
      "Nuclear imaging provides valuable insights into your body's functioning.",
    slug: "nuclear-scan-cost-in-delhi",
  },
  {
    title: "Cardiology Test",
    imageSrc: img8,
    description:
      "Our dedicated cardiology services focus on maintaining your heart's well-being.",
    slug: "cardiology-test-price",
  },
  {
    title: "Neurology Test",
    imageSrc: img4,
    description:
      "Trust our specialized neurology tests to assess your brain and nervous system health.",
    slug: "neurology-test-price-delhi",
  },
  {
    title: "DEXA (BMD)",
    imageSrc: img10,
    description:
      "Bone health is essential, and our DEXA (Bone Mineral Density) scans are a reliable way to assess it.",
    slug: "dexa-bmd-test-price",
  },
  {
    title: "Fibroscan",
    imageSrc: img10,
    description:
      "At City Imaging, we offer comprehensive details about FibroScan test price in Delhi.",
    slug: "fibroscan-test-price",
  },
];
