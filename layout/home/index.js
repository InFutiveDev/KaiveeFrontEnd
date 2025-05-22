// import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Laptop from "assets/images/home/pixelcut-export.png";

import { GET_FEATURED_BY_ID, GET_TEST_BY_HABIT } from "redux/actions/test";

import { GET_ALL_BANNERS } from "redux/actions/banner";
import SpinnerComponent from "components/spinner";

import PatientImageOne from "assets/images/home/Ellipse 3984.png";
import PatientImageTwo from "assets/images/home/drugs (3) 1.png";
// why choose
import img1 from "assets/images/whychooseus/1.png";
import img2 from "assets/images/whychooseus/2-png.png";
import img3 from "assets/images/whychooseus/icon-3.png";
import img4 from "assets/images/whychooseus/3-png.png";
import img5 from "assets/images/whychooseus/4-png.png";
import img6 from "assets/images/whychooseus/5-png.png";
import img7 from "assets/images/whychooseus/6-png.png";
import img8 from "assets/images/whychooseus/7-png.png";
// import img9 from "assets/images/Finalimg/Why Choose Us/World Class Technology.webp";
import { GET_ALL_HABITS, GET_HABIT_BY_ID } from "redux/actions/habit";
import { GET_ALL_HEALTHRISK } from "redux/actions/healthrisk";
import { GET_ALL_HEALTH_PACKAGES } from "redux/actions/healthPackages";
import Image from "next/image";
import dynamic from "next/dynamic";

import icon2 from "assets/images/home/banner/1.png";
import icon3 from "assets/images/home/banner/2.png";
import icon4 from "assets/images/whychooseus/icon-3.png";

import icon6 from "assets/images/home/banner/prescription.png";

const Homebanner = dynamic(() => import("./homeBanner"));
const BookingCard = dynamic(() => import("./bookingCard"));
// const Media = dynamic(() => import("./media"));
// const OurJourney = dynamic(() => import("./OurJourney"));
// const PrintMedia = dynamic(() => import("./printMedia"));
const HomePopularPackeges = dynamic(() => import("./homePopularPackeges"));
const HomePopularTest = dynamic(() => import("./homePopulartest"));
const Facilities = dynamic(() => import("./facilities"));
const HealthRisks = dynamic(() => import("./healthRisks"));
// const LatestAnnouncement = dynamic(() => import("./latestAnnouncement"));
const WhyChoose = dynamic(() => import("components/WhyChoose"));
// const HealthcareVideos = dynamic(() => import("./healthcareVideos"));
const HealthBulletin = dynamic(() => import("./healthBulletin"));
// const AccreditationsAwards = dynamic(() => import("./accreditationsAwards"));
const Testimonial = dynamic(() => import("./testimonial"));

const HomeLayout = () => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState({});
  const [locationActive, setLocationActive] = useState(1);
  const [readMore, setReadMore] = useState(false);
  const [loaderBanner, setLoaderBanner] = useState(false);
  const store = useSelector((state) => state);
  const { category, habit, test, healthrisk, healthPackages } = store;
  const { categories } = category;
  const { healthRisk } = healthrisk;
  const { getAlltest } = test;
  const { habits } = habit;
  const { getfeaturedbyId } = test;
  // console.log("categories--->>>", categories);
  // let categoriesData = [
  //   ...categories?.data?.categoryData?.filter((ele) => ele.category_name),
  //   ...categories?.data?.categoryData?.filter(
  //     (ele) => ele?.perent_category_name
  //   ),
  // ];
  let categoriesData = [
    ...(categories?.data?.categoryData?.filter(
      (ele) => !ele.perent_category_name
    ) || []),
    ...(categories?.data?.categoryData?.filter(
      (ele) => ele?.perent_category_name
    ) || []),
  ];
  const handleCartData = (cartData) => {
    setCart(cartData);
  };
  const handleTestsTabChange = (id) => {
    dispatch(GET_FEATURED_BY_ID(id, 1, ""));
  };

  const handlePackagesTabChange = (id) => {
    dispatch(GET_HABIT_BY_ID(id));
    dispatch(GET_TEST_BY_HABIT(id, 1));
  };

  const handleLocationActive = (id) => {
    setLocationActive(id);
  };

  useEffect(() => {
    setLoaderBanner(true);

    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
    }
    dispatch(GET_ALL_BANNERS()).then((red) => {
      setTimeout(() => {
        setLoaderBanner(false);
      }, 500);
    });
    dispatch(GET_ALL_HEALTHRISK());
    dispatch(GET_ALL_HABITS());
    dispatch(GET_ALL_HEALTH_PACKAGES());
  }, [dispatch]);

  const features = [
    { icon: icon2, label: "Home Collection by Qualified Technicians" },
    { icon: icon3, label: "Exclusive Collection Centres" },
    { icon: icon4, label: "NABL Approved Labs" },

    { icon: icon6, label: "Trusted Doctors" },
  ];
  
  return (
    <>
      {loaderBanner ? (
        <SpinnerComponent />
      ) : (
        <>
          <section className="py-0  banner_slider_wrap relative z-[1] h-[auto] sm:h-[600px]">
          <div className="container md:flex justify-between items-center h-[94%]">

              <Homebanner />
            </div>
            <div className="backImageBox" />
          </section>

        

  <div className="container">
    <div className="mb-3 bg-white bg-opacity-80 rounded-lg">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center 
                      
                      
                      lg:pt-[2px] lg:pl-[100px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex justify-start items-center space-x-2 font-[Poppins] text-sm md:text-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#8DBD4D0D] p-2 rounded-lg"
          >
            <Image
              src={feature.icon}
              alt={feature.label}
              className="w-auto object-contain"
              style={{ height: "70px", width: "70px" }}
            />
            <span className="text-gray-800">{feature.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>





          <div className="bg-[#FAFAFA]">
            <div className="container pt-1 ">
              <BookingCard packagesId={habits?.data[0]?._id || ""} />
            </div>

            <div className="bg-[white]">
              {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
              <div className="container">
                <div className=" pb-0 lg:pb-4 py-2 lg:pt-4 pt-2">
                  <Facilities
                    facilitiedData={categories?.data?.categoryData || []}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
            <div className=" pb-0 lg:pb-4 py-2">
              <HomePopularPackeges
                viewAll="/health-packages"
                title={"Popular Health Packages"}
                id={"packages"}
                handlePackagesTabChange={handlePackagesTabChange}
                navbar={[]}
                handleCartData={handleCartData}
                cart={cart}
                data={healthPackages?.data?.data.categoryData || []}
              />
            </div>
          </div>
          <div className="bg-[#FAFAFA]">
            <div className="container">
              {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
              <div className=" pb-0 lg:pb-4 py-2 lg:pt-4 pt-2">
                <HomePopularTest
                  viewAll="/book-a-test"
                  title={"Popular Test"}
                  id={"test"}
                  handleTestsTabChange={handleTestsTabChange}
                  navbar={categoriesData || []}
                  handleCartData={handleCartData}
                  cart={cart}
                  data={getfeaturedbyId?.data?.categoryData || []}
                />
              </div>
            </div>
          </div>
          <div className="container">
            {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
            <div className=" pb-0 lg:pb-4 py-2 lg:pt-4 pt-2">
              <HealthRisks
                altImageKey="home_image_altTag"
                imageKey="healthRisk_image"
                queryString={"HealthRisk"}
                title={"Test by Health Risks"}
                data={healthRisk?.healthRiskData || []}
              />
            </div>
          </div>
          <div className="bg-[#FAFAFA]">
            <div className="container">
              {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
              <div className=" pb-0 lg:pb-4 py-2 lg:pt-4 pt-2">
                <HealthRisks
                  altImageKey="home_image_altTag"
                  imageKey="hebit_image"
                  queryString={"Habit"}
                  title={"Test by Habit/Condition"}
                  data={habits?.data?.length !== 0 ? habits?.data : []}
                />
              </div>
            </div>
          </div>

          {/* <div className="bg-white">
            <div className="container">
             
              <div className=" pb-0 lg:pb-4 py-2 pt-2">
                <LatestAnnouncement />
              </div>
            </div>
          </div> */}
          <div>
            <WhyChoose data={data} padding={"50px"} />
          </div>

          <div className="w-full">
            <div className="pb-0 lg:pb-4 py-2">
              <div className="bg-[#F7F7FB] rounded-xl grid items-center grid-cols-1 lg:grid-cols-2">
                {/* Image Section - Takes 1/2 width on large screens */}
                <div className="flex justify-center lg:justify-start ">
                  <img
                    src={Laptop.src}
                    className="w-[90%]"
                    alt="Image of a laptop"
                  />
                </div>

                {/* Content Section - Takes 1/2 width on large screens */}
                <div className="p-4 lg:p-6">
                  <p className="text-xl lg:text-[32px] font-source-pro ">
                    Why our Patients Recommend Us?
                  </p>
                  <ul className="list-inside list-disc space-y-2">
                    {[
                      "Trusted Accuracy: Cutting-edge technology ensures precise and reliable test results.",
                      "Fast Turnaround: No long waits—get your reports on time, every time.",
                      "Convenient Home Sample Collection: Healthcare that comes to you.",
                      "Affordable & Transparent Pricing: Quality healthcare with no hidden costs.",
                      "Easy Online Booking & Reports: Schedule tests and access reports from the comfort of your home.",
                      "Hygienic & Safe Practices: We follow strict safety protocols for your well-being.",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="text-[#585981] text-[16px] font-[400]"
                      >
                        {item}
                      </li>
                    ))}
                    {/* Read More / Read Less Button */}
                    <span
                      className="font-bold cursor-pointer text-[#D41958] mt-2 inline-block"
                      onClick={() => setReadMore(!readMore)}
                    >
                      {readMore ? "Read Less ▲" : "Read More ▼"}
                    </span>

                    {/* Conditional Rendering Based on Read More State */}
                    {readMore && (
                      <p className="text-[16px] text-[#585981]">
                        At Kaivee Healthcare, we are committed to providing our
                        patients with the best possible care. We are constantly
                        striving to improve our services and our patient
                        experience. We continually seek feedback from our
                        patients and use it to make our services even better. We
                        also strive to maintain a high level of customer
                        service, so that our patients are able to get the
                        support they need when they need it.
                      </p>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            {/* sm:mx-1 lg:mx-2 xl:mx-24 */}
            <div className=" pt-4 pb-2">
              <Testimonial />
            </div>
          </div>

          <div className="bg-[#FAFAFA]">
            <div className="container">
              {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
              <div className=" pt-4 pb-2">
                <HealthBulletin />
              </div>
            </div>
          </div>

          <div className="bg-[#FAFAFA] py-6 ">
            <div className="container  mx-auto px-4">
              <div>
                <p className=" lg:text-[32px] text-lg pb-2 font-source-pro">
                  Location
                </p>
                <span className="text-secondary text-[18px]">
                  Select Your Nearest Location
                </span>
              </div>
              <div className="mt-8 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="flex items-center justify-between rounded-t-lg px-6 py-4 bg-white border border-gray-200">
                      <select
                        className="w-full bg-transparent text-[18px] font-semibold font-source-pro text-[#71717A] outline-none"
                        value={locationActive}
                        onChange={(e) => handleLocationActive(e.target.value)}
                      >
                        {locationData.map((item, index) => (
                          <option value={index + 1} key={index}>
                            {item?.mainTilte}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="rounded-lg bg-white p-6 border border-gray-200 shadow-sm">
                      <div className="mb-4">
                        <label
                          // htmlFor="organizationName"
                          className="font-medium text-base lg:text-[18px] "
                        >
                          Address
                        </label>
                        <div className="mt-2 text-sm lg:text-[16px] text-gray-800 p-3 bg-gray-100 rounded-md">
                          {locationData[locationActive - 1]?.address}
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          // htmlFor="organizationName"
                          className="font-medium text-base lg:text-[18px]"
                        >
                          Service Available
                        </label>
                        <div className="mt-2 text-sm lg:text-[16px] text-gray-800 p-3 bg-gray-100 rounded-md">
                          {locationData[locationActive - 1]?.serviceAvailable}
                        </div>
                      </div>
                      <div className="grid gap-4 grid-cols-2 ">
                        <div>
                          <label
                            // htmlFor="organizationName"
                            className="font-medium text-base lg:text-[18px]"
                          >
                            Contact Number{" "}
                          </label>
                          <div className="mt-2 text-sm lg:text-[16px] text-gray-800 p-3 bg-gray-100 rounded-md">
                            {locationData[locationActive - 1]?.contactNumber}
                          </div>
                        </div>
                        <div>
                          <label
                            // htmlFor="organizationName"
                            className="font-medium text-base lg:text-[18px]"
                          >
                            Timing
                          </label>
                          <div className="mt-2 text-sm lg:text-[16px] text-gray-800 p-3 bg-gray-100 rounded-md">
                            {locationData[locationActive - 1]?.timing}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label
                          // htmlFor="organizationName"
                          className="font-medium text-base lg:text-[18px]"
                        >
                          Email
                        </label>
                        <div className="mt-2 text-sm lg:text-[16px] text-gray-800 p-3 bg-gray-100 rounded-md">
                          {locationData[locationActive - 1]?.email}
                        </div>
                      </div>
                      <div className="mt-[36px]">
                        <a href="">
                          <buttton className="inline-block w-full text-center bg-[#D41958] text-white rounded-md  py-[12px] text-base lg:text-[18px] font-[400]">
                            Call Us Now
                          </buttton>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {locationActive && (
                    <iframe
                      src={locationData[locationActive - 1]?.iframe}
                      width="100%"
                      height="100%"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7FB]">
            <div className="container pt-4 pb-4">
              <h1 className="text-center  text-lg lg:text-xl xl:text-[26px] font-source-pro text-black">
                ONE-STOP DESTINATION FOR ALL YOUR TEST - BEST DIAGNOSTIC CENTRE
                IN REGION!
              </h1>
              <div className="text-center">
                <span className="text-secondary text-base lg:text-lg xl:text-[20px]">
                  Advanced diagnostic technology combines superior care – Get
                  all services under one roof.
                </span>
              </div>
              <div className="mt-[32px]">
                <div className="rounded-xl border-[1px] shadow-md border-[#E4E4E7] p-3 md:p-[32px] bg-white">
                  <h2 className="flex items-center gap-[12px] text-[#D41958] font-semibold text-base xl:text-[24px] pb-[8px] border-b border-[#E4E4E7]">
                    <ArrowSvgYellow /> Comprehensive Diagnostic Solutions Under
                    One Roof!
                  </h2>
                  <div className="mt-[12px]">
                    <div className="text-secondary text-sm lg:text-[16px]">
                      At <strong>Kaivee Healthcare</strong>, we offer a full
                      spectrum of diagnostic services designed for preventive,
                      routine, and specialized healthcare needs.
                    </div>

                    {/* Read More / Read Less Button */}
                    <span
                      className="font-bold cursor-pointer text-[#D41958] mt-2 inline-block"
                      onClick={() => setReadMore(!readMore)}
                    >
                      {readMore ? "Read Less ▲" : "Read More ▼"}
                    </span>

                    {/* Conditional Rendering Based on Read More State */}
                    {readMore && (
                      <div>
                        <div className="text-base lg:text-[16px] font-semibold mt-2">
                          Blood & Routine Tests
                        </div>
                        <ul className="list-disc pl-5 text-sm lg:text-[16px] text-secondary">
                          <li>Complete Blood Count (CBC)</li>
                          <li>Lipid Profile (Cholesterol, Triglycerides)</li>
                          <li>Liver & Kidney Function Tests</li>
                          <li>
                            Diabetes Screening (HbA1c, Fasting Blood Sugar)
                          </li>
                          <li>Thyroid Function Tests</li>
                        </ul>
                        <div className="text-base lg:text-[16px] font-semibold mt-2">
                          Infection & Disease Panels
                        </div>
                        <ul className="list-disc pl-5 text-sm lg:text-[16px] text-secondary">
                          <li>COVID-19, Dengue, Malaria, and Typhoid Tests</li>
                          <li>Viral & Bacterial Infection Screening</li>
                          <li>STD & STI Panels</li>
                        </ul>
                        <div className="text-base lg:text-[16px] font-semibold mt-2">
                          Full Body Checkups
                        </div>
                        <ul className="list-disc pl-5 text-sm lg:text-[16px] text-secondary">
                          <li>Essential Health Packages for Men & Women</li>
                          <li>Senior Citizen Health Checkups</li>
                          <li>Corporate Health Screenings</li>
                        </ul>
                        <div className="text-base lg:text-[16px] font-semibold mt-2">
                          Specialized Diagnostic Tests
                        </div>
                        <ul className="list-disc pl-5 text-sm lg:text-[16px] text-secondary">
                          <li>
                            Hormone Analysis (PCOS, Fertility, Vitamin D & B12)
                          </li>
                          <li>Allergy Screening</li>
                          <li>Autoimmune & Genetic Testing</li>
                        </ul>
                        <div className="text-base lg:text-[16px] font-semibold mt-2">
                          Wellness & Preventive Health Packages
                        </div>
                        <ul className="list-disc pl-5 text-sm lg:text-[16px] text-secondary">
                          <li>Heart Health Screening</li>
                          <li>Cancer Marker Tests</li>
                          <li>Lifestyle & Nutritional Assessments</li>
                        </ul>
                        <p>
                          Whether it’s a routine test or a specialized
                          diagnostic need,<strong> Kaivee Healthcare </strong>
                          ensures accuracy, efficiency, and care in every
                          report.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};



const data = [
  {
    id: 1,
    title: "NABL Accredited Labs",
    description: "Follows all protocols as per NABL & CAP Guidelines",
    icon: <Image src={img3} alt="NABL Accredited Icon" />,
  },
  {
    id: 2,
    title: "Trusted by Leading Doctors & Hospitals",

    icon: <Image src={img2} alt="doctors Icon" />,
  },
  {
    id: 3,
    title: "Shortest Reporting Time",

    icon: <Image src={img5} alt="time Icon" />,
  },
  {
    id: 4,
    title: "Accurate Test Reports",

    icon: <Image src={img4} alt="report Icon" />,
  },
  {
    id: 5,
    title: "Satisfied Customers",

    icon: <Image src={img1} alt="customer Icon" />,
  },
  {
    id: 6,
    title: "Most Affordable Prices",

    icon: <Image src={img6} alt="NABL Accredited Icon" />,
  },
  {
    id: 7,
    title: "Painless Sample Collection",

    icon: <Image src={img7} alt="collection Icon" />,
  },
  {
    id: 8,
    title: "Scientific Orientation",

    icon: <Image src={img8} alt="scientific Icon" />,
  },
];
export default memo(HomeLayout);

const ArrowSvgYellow = () => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25832 14.9568L3.70832 12.0568C4.10832 11.2485 4.10832 10.3068 3.70832 9.49846L2.25832 6.59012C1.01665 4.10679 3.69165 1.48179 6.14999 2.78179L7.43332 3.46512C7.61665 3.55679 7.75832 3.70679 7.83332 3.89012L12.575 14.4318C12.7667 14.8651 12.5917 15.3735 12.175 15.5901L6.14165 18.7651C3.69165 20.0651 1.01665 17.4401 2.25832 14.9568Z"
        fill="#D41958"
      />
      <path
        d="M13.5918 13.7738L10.4834 6.87381C10.1334 6.09881 10.9668 5.31548 11.7168 5.71548L16.5251 8.24881C18.5668 9.32381 18.5668 12.2405 16.5251 13.3155L14.8251 14.2071C14.3668 14.4405 13.8084 14.2488 13.5918 13.7738Z"
        fill="#D41958"
      />
    </svg>
  );
};

const locationData = [
  {
    mainTilte: "Kaivee HealthCare Noida",
    address: "Noida,K-4, Sector-116, U.P-201305",
    serviceAvailable: "MRI Scan, CT Scan, Digital X-Ray, Neurology Test, etc",
    contactNumber: "+91 88001 33928",
    timing: "24 hours open",
    email: "care@zenhealthsolutions.com",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1183944972404!2d77.3973573!3d28.5662073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0218a5d79d%3A0xb9e21e2afdcc53f6!2sKaivee-%20Zen%20Health%20%7C%20Pathology%20Lab%20%7C%20Diagnostic%20Centre%20%7C%20Healthcare%20Lab%20%7C%20Noida!5e0!3m2!1sen!2sin!4v1747830202578!5m2!1sen!2sin",
  }
];
