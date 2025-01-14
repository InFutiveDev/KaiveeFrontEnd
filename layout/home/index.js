// import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Laptop from "assets/images/home/Group 1261152534.png";

import { GET_FEATURED_BY_ID, GET_TEST_BY_HABIT } from "redux/actions/test";

import { GET_ALL_BANNERS } from "redux/actions/banner";
import SpinnerComponent from "components/spinner";

import PatientImageOne from "assets/images/home/Ellipse 3984.png";
import PatientImageTwo from "assets/images/home/drugs (3) 1.png";
// why choose
import img2 from "assets/images/Finalimg/Why Choose Us/10M+ Happy Patients.webp";
import img3 from "assets/images/Finalimg/Why Choose Us/30 Years of Excellence in Diagnostic Health Care.webp";
import img5 from "assets/images/Finalimg/Why Choose Us/Affordable.webp";
import img6 from "assets/images/Finalimg/Why Choose Us/Fast & Accurate Results.webp";
import img7 from "assets/images/Finalimg/Why Choose Us/Free Home Sample Collection.webp";
import img9 from "assets/images/Finalimg/Why Choose Us/Large Menu of Tests Available.webp";
import img8 from "assets/images/Finalimg/Why Choose Us/NABL & NABH Certified Centre.webp";
import img1 from "assets/images/Finalimg/Why Choose Us/Team of Experienced Doctor & Staffs.webp";
import img4 from "assets/images/Finalimg/Why Choose Us/World Class Technology.webp";
import { GET_ALL_HABITS, GET_HABIT_BY_ID } from "redux/actions/habit";
import { GET_ALL_HEALTHRISK } from "redux/actions/healthrisk";
import { GET_ALL_HEALTH_PACKAGES } from "redux/actions/healthPackages";
import Image from "next/image";
import dynamic from "next/dynamic";

const Homebanner = dynamic(() => import("./homeBanner"));
const BookingCard = dynamic(() => import("./bookingCard"));
const Media = dynamic(() => import("./media"));
const OurJourney = dynamic(() => import("./OurJourney"));
const PrintMedia = dynamic(() => import("./printMedia"));
const HomePopularPackeges = dynamic(() => import("./homePopularPackeges"));
const HomePopularTest = dynamic(() => import("./homePopulartest"));
const Facilities = dynamic(() => import("./facilities"));
const HealthRisks = dynamic(() => import("./healthRisks"));
const LatestAnnouncement = dynamic(() => import("./latestAnnouncement"));
const WhyChoose = dynamic(() => import("components/WhyChoose"));
const HealthcareVideos = dynamic(() => import("./healthcareVideos"));
const HealthBulletin = dynamic(() => import("./healthBulletin"));
const AccreditationsAwards = dynamic(() => import("./accreditationsAwards"));
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
  const { getfeaturedbyId } = test;
  const { habits } = habit;
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
  return (
    <>
      {loaderBanner ? (
        <SpinnerComponent />
      ) : (
        <>
          <section className="py-2.5 banner_slider_wrap relative z-[1]  h-[auto] sm:h-[430px] ">
            <div className=" container flex  justify-between items-center h-full">
              <Homebanner />
            </div>
            <div className="backImageBox " />
          </section>
          <div className="bg-[#F7F7FB] py-[12px] px-[24px] flex">
            <marquee
              className="text-[16px] font-medium "
              width="100%"
              direction="left"
            >
              {` Welcome to Kaivee Healthcare. 📢 Book a Test Quick and Queue-Free! Now You Can Book Your Tests, Appointments, and Free Home Collection Online from City X-Ray. || 📢 Kaivee Healthcare Is Also Available On WhatsApp. To Book a Test, Download a Report, or Get Quick Customer Support Just By Sending "Hi" to 9999999999 || 💬 NABH Accreditated Radiological Services as Per Scope | NABL Accreditated Pathological Services as Per Scope`}
            </marquee>
          </div>
          <div className="container">
            <BookingCard packagesId={habits?.data[0]?._id || ""} />
          </div>
          <div className="bg-[#FAFAFA]">
            {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
            <div className="container">
              <div className=" pb-4 py-2">
                <Facilities
                  facilitiedData={categories?.data?.categoryData || []}
                />
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
              <div className=" pb-0 lg:pb-4 pt-2">
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
            <div className=" pb-0 lg:pb-8 py-2 lg:pt-8 pt-4">
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
              <div className=" pb-8 pt-8">
                <HealthRisks
                  altImageKey="home_image_altTag"
                  imageKey="hebit_image"
                  queryString={"Habit"}
                  title={"Test by Health Condition, Habit or Disease"}
                  data={habits?.data?.length !== 0 ? habits?.data : []}
                />
              </div>
            </div>
          </div>
          <div className="container">
            {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
            <div className=" pb-0 lg:pb-8 py-2 pt-8">
              <HealthRisks
                altImageKey="home_image_altTag"
                imageKey="home_image"
                autoPlay={true}
                data={
                  categories?.data?.categoryData?.length !== 0
                    ? categoriesData
                    : []
                }
                queryString={"Categories"}
                title={"Test by Modality / Department"}
              />
            </div>
          </div>
          <div className="bg-[#FAFAFA]">
            <div className="container">
              {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
              <div className=" pb-0 lg:pb-4 py-2 pt-2">
                <LatestAnnouncement />
              </div>
            </div>
          </div>
          <div>
            <WhyChoose data={data} padding={"50px"} />
          </div>
          <div className="bg-[#FAFAFA]">
            <div className="container">
              {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
              <div className=" pb-0 lg:pb-4 py-2 pt-4">
                <HealthcareVideos />
              </div>
            </div>
          </div>

          <div className="container">
            {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
            <div className=" px-2 pb-0 lg:pb-4 py-2 pt-4">
              <div>
                <p className="font-semibold lg:text-[32px] text-xl font-source-pro">
                  Why our Patient recommend us?
                </p>
                <div className="mt-[20px] md:mt-[32px]">
                  <div className="bg-[#F7F7FB] rounded-xl grid items-center lg:grid-cols-3 grid-cols-1">
                    <div className="col-span-2">
                      <p className="lg:ml-[42px]  text-[#585981] lg:w-10/12 p-2 md:p-4 text-[16px] font-[400] font-source-pro">
                        {`Our diagnostic center is consistently recommended by our patients for several compelling reasons. Firstly, we prioritize accuracy and reliability in our diagnostic tests, ensuring that patients receive the most precise results. Secondly, our team of experienced and compassionate healthcare professionals provides personalized care, addressing patients' concerns and offering guidance throughout their journey. Additionally, our state-of-the-art facilities and cutting-edge technology guarantee top-notch healthcare services. Furthermore, we maintain a patient-centric approach, minimizing wait times and streamlining the entire process. Lastly, our commitment to confidentiality and a comfortable `}
                        {!readMore ? (
                          <span>...</span>
                        ) : (
                          <span>
                            environment fosters trust and reassurance among our
                            patients, making us their preferred choice for
                            diagnostic services
                          </span>
                        )}{" "}
                        <span
                          className="font-bold cursor-pointer text-nowrap"
                          onClick={() => setReadMore(!readMore)}
                        >
                          {!readMore ? "Read More" : "Read less"}
                        </span>
                      </p>
                    </div>
                    <div className="bg-[#FCC42C] py-[40px] relative">
                      <div className="lg:-ml-32">
                        <img
                          src={Laptop.src}
                          className="lg:mx-0 mx-auto"
                          alt="Image of a laptop"
                        />
                      </div>
                      <div className="absolute top-2 right-3">
                        <img
                          src={PatientImageTwo.src}
                          alt="Image of a Tablet"
                        />
                      </div>
                      <div className="absolute bottom-0 right-0">
                        <img src={PatientImageOne.src} alt="Image of Circle" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FAFAFA]">
            <div className="container">
              {/* sm:mx-1 lg:mx-2 xl:mx-24 */}
              <div className=" pt-4 pb-2">
                <Testimonial />
              </div>
            </div>
          </div>
          <div className="container">
            {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
            <div className=" pt-4 pb-2">
              <HealthBulletin />
            </div>
          </div>
          <div className="bg-[#FAFAFA]">
            <div className="container">
              {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
              <div className=" pt-4 pb-2">
                <AccreditationsAwards />
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7FB] ">
            {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
            <div className="container">
              <div className="  pt-4 pb-4">
                <Media />
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7FB] ">
            <div className="container">
              {/* sm:ml-1 md:ml-2 lg:ml-1 xl:lg:ml-24 */}
              <div className="  pt-4 pb-4">
                <PrintMedia />
              </div>
            </div>
          </div>
          {/* <div>
            <div className="container  pt-4 pb-4">
              <div className="grid items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
                <div>
                  <Image
                    loading="lazy"
                    src={Mobile.src}
                    width={600}
                    height={600}
                    className="h-[90%] object-fill"
                  />
                </div>
                <div>
                  <p className="md:text-[36px] text-lg font-bold font-source-pro text-center md:!text-left">
                    Presenting the All New City X-
                    <br />
                    Ray Mobile App
                  </p>
                  <div className="text-secondary mt-[8px] text-[14px] font-normal text-center md:!text-left">
                    Amet minim mollit non deserunt
                    <br /> ullamco est sit aliqua dolor do amet
                    <br /> sint.
                  </div>
                  <div className="flex gap-1 mt-[30px] justify-center md:justify-start">
                    <div>
                      <img src={AppStore.src} alt="playstore icon" />
                    </div>
                    <div>
                      <img src={PlayStore.src} alt="playstore icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div>
            <div className="py-[50px] md:py-[70px]">
              <div className="container mb-[50px]">
                <p className="font-semibold pb-4 lg:text-[32px] text-lg font-source-pro">
                  Our Journey
                </p>
                <div className="w-full h-60 lg:h-[600px] md:h-72 sm:h-60">
                  <OurJourney />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FAFAFA] ">
            <div className="container  pt-4 pb-4">
              <div>
                <p className="font-semibold lg:text-[32px] text-lg pb-[6px] font-source-pro">
                  Location
                </p>
                <span className="text-secondary text-[18px]">
                  Select Your Nearest Location
                </span>
              </div>
              <div className="mt-[32px] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="flex items-center justify-between rounded-t-lg  px-[24px] py-[16px] bg-[#FDEDCE]">
                      <select
                        className="w-full bg-transparent text-[18px] font-semibold font-source-pro text-[#71717A] !font-source-pro"
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
                    <div className="rounded-lg bg-white p-3 lg:p-[24px]">
                      <div className="form-group">
                        <label
                          htmlFor="organizationName"
                          className="font-medium text-base lg:text-[18px] "
                        >
                          Address
                        </label>
                        <div className="mt-[6px] text-sm lg:text-[16px] text-gray-800">
                          {locationData[locationActive - 1]?.address}
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="organizationName"
                          className="font-medium text-base lg:text-[18px]"
                        >
                          Service Available
                        </label>
                        <div className="mt-[6px] text-sm lg:text-[16px] text-gray-800">
                          {locationData[locationActive - 1]?.serviceAvailable}
                        </div>
                      </div>
                      <div className="grid gap-4 grid-cols-2 ">
                        <div className="form-group">
                          <label
                            htmlFor="organizationName"
                            className="font-medium text-base lg:text-[18px]"
                          >
                            Contact Number{" "}
                          </label>
                          <div className="mt-[6px] text-sm lg:text-[16px] text-gray-800">
                            {locationData[locationActive - 1]?.contactNumber}
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="organizationName"
                            className="font-medium text-base lg:text-[18px]"
                          >
                            Timing
                          </label>
                          <div className="mt-[6px] text-sm lg:text-[16px] text-gray-800">
                            {locationData[locationActive - 1]?.timing}
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="organizationName"
                          className="font-medium text-base lg:text-[18px]"
                        >
                          Email
                        </label>
                        <div className="mt-[6px] text-sm lg:text-[16px] text-gray-800">
                          {locationData[locationActive - 1]?.email}
                        </div>
                      </div>
                      <div className="mt-[36px]">
                        <a href="">
                          <buttton className="inline-block w-full text-center bg-orange text-white rounded-md  py-[12px] text-base lg:text-[18px] font-[400]">
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
            <div className="container  pt-4 pb-4">
              <h1 className="text-center font-semibold text-lg lg:text-xl xl:text-[26px] font-source-pro text-black">
                ONE-STOP DESTINATION FOR ALL YOUR TEST - BEST DIAGNOSTIC CENTRE
                IN DELHI!
              </h1>
              <div className="text-center">
                <span className="text-secondary text-base lg:text-lg xl:text-[20px]">
                  Advanced diagnostic technology combines superior care – Get
                  all services under one roof.
                </span>
              </div>
              <div className="mt-[32px]">
                <div className="rounded-xl border-[1px] shadow-md border-[#E4E4E7] p-3 md:p-[32px] bg-white">
                  <h2 className="flex items-center gap-[12px] text-orange font-semibold text-base xl:text-[24px] pb-[8px] border-b border-[#E4E4E7]">
                    <ArrowSvgYellow /> Comprehensive Diagnostic Solutions Under
                    One Roof!
                  </h2>
                  <div className="mt-[12px]">
                    <div className="text-secondary text-sm lg:text-[16px] ">
                      Kaivee Healthcare is a trusted diagnostic center in Delhi,
                      offering a complete suite of high-quality, reliable, and
                      accurate diagnostic procedures in Radiology, Pathology,
                      Neurology, and Cardiology – all under one roof.
                    </div>

                    <div className="text-base lg:text-[16px] font-semibold mt-2">
                      Comprehensive Diagnostic Solutions Under One Roof!
                    </div>

                    <div className=" text-sm lg:text-[16px] !mt-2">
                      <span className="text-secondary">
                        When it comes to excellence in diagnostics, Kaivee
                        Healthcare is a name that people count upon for a
                        high-quality, safe, and best diagnostic centre in Delhi.
                        We are a NABL and NABH-certified center, reckoned for
                        our excellent team of doctors & technicians and
                        state-of-the-art equipment. The brainchild of Dr. Ravi
                        Kapoor & Dr. Sunita Kapoor – Directors of City X-ray &
                        Scan Clinic, the diagnostic center is aimed at
                        delivering the highest standards of medical diagnostics
                        services. Our mission is to provide “Care with courtesy,
                        compassion, competence & quality.
                      </span>
                      {!readMore ? (
                        <span className="text-secondary">...</span>
                      ) : (
                        <div>
                          <span className="text-secondary">
                            The brainchild of Dr. Ravi Kapoor & Dr. Sunita
                            Kapoor – Directors of City X-ray & Scan Clinic
                          </span>
                          <h2 className="!text-[24px] my-2 text-[#212529]">
                            Our Services
                          </h2>
                          <p className="font-bold">You’re In Safe Hands!</p>
                          {ourServices?.map((item, index) => {
                            return (
                              <section key={index}>
                                <div className="mt-2 font-semibold">
                                  {item.title}
                                </div>
                                <p className="text-secondary">
                                  {item.description}{" "}
                                </p>
                              </section>
                            );
                          })}
                          <h2 className="!text-[24px] my-2 text-black">
                            Why Choose Us?
                          </h2>
                          <p className="font-bold">
                            Book A Diagnostic Test With City X-Ray & Scan Clinic
                          </p>
                          <p className="text-slate-500 my-2">
                            Here’s what makes us a premier diagnostic centre in
                            Delhi:
                          </p>
                          {whyChooseUs?.map((item, index) => {
                            return <p key={index}>{item.description}</p>;
                          })}
                          <p className="text-slate-500 my-2">
                            City X-Ray & Scan Clinic is your most trusted choice
                            when considering the best diagnostic center near me
                            in Delhi.
                          </p>
                        </div>
                      )}
                      <span
                        className="font-bold cursor-pointer"
                        onClick={() => setReadMore(!readMore)}
                      >
                        {!readMore ? "Read More" : "Read less"}
                      </span>
                    </div>
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
const whyChooseUs = [
  {
    description: `✔India’s most trusted lab featuring cutting-edge, medically-certified equipment and trained professionals`,
  },
  { description: `✔Free home sample collection ` },
  {
    description: `✔Comprehensive & tailored health check-up packages under one roof `,
  },
  { description: `✔Highly qualified doctors and certified technicians ` },
  {
    description: `✔Delhi’s one-of-a-kind PCR lab guarantees high standards of accuracy in testing`,
  },
  { description: `✔Prompt reports; access anywhere and anytime` },
];

const ourServices = [
  {
    id: 1,
    title: "✔ CT Scan",
    description: `We are the #1 choice for 194 slice/sec spiral CT scans in Delhi. We specialize in
  CT scans of the brain, chest, abdomen, and neck along with Angiography
  studies`,
  },
  {
    id: 2,
    title: "✔ Digital X-ray ",
    description: `City X-Ray clinic has state-of-the-art 800 MA digital radiology scanners offering
    high-quality, quick, low-cost scans.`,
  },
  {
    id: 3,
    title: "✔ MRI  ",
    description: `Looking for the best diagnostic center near me for accurate and reliable MRI
    testing? We offer 1.5 and 3 Tesla MRI services that are safe and precise`,
  },
  {
    id: 4,
    title: "✔ Ultrasound  ",
    description: `Our latest 4D ultrasound procedures adhere to world-class industry standards
    and health guidelines. Specializing in the ultrasound of the whole abdomen,
    fetus, etc`,
  },
  {
    id: 5,
    title: "✔ Cardiology Tests ",
    description: `We provide cardiology diagnostic services in Delhi, expertly conducted to detect
    a wide range of heart conditions and diseases.`,
  },
  {
    id: 6,
    title: "✔ Dental Radiology ",
    description: `Dental radiology is an important part of your dental care plan, helping provide
    diagnostic and preventive measures for optimum dental health.`,
  },
  {
    id: 7,
    title: "✔ Molecular Biology  ",
    description: `City X-Ray clinic boasts an advanced molecular lab, specializing in viral testing,
    pathogen testing, HLA B27, and oncology testing.`,
  },
  {
    id: 8,
    title: "✔ Pathology ",
    description: `City X-ray & Scan Clinic specializes in diverse fields of clinical pathology,
    including hematology, biochemistry & immunology, microbiology, cytopathology,
    etc.`,
  },
  {
    id: 9,
    title: "✔ Neuro Physiology  ",
    description: `Get excellent-quality neurology tests done at our center at the best prices. We
    specialise in EEG, NCV, BERA, EMG, VEP & VER.`,
  },
];
const data = [
  {
    title: "Team of Experienced <br /> Doctors & Staffs",
    image: img1,
  },
  {
    title: "10M+ Happy Patients",
    image: img2,
  },
  {
    title: "31 Year of Excellence in <br /> Diagnostic Healthcare",
    image: img3,
  },
  {
    title: "World Class Technology",
    image: img4,
  },
  {
    title: "Fast & Accurate Results",
    image: img6,
  },
  {
    title: "Affordable",
    image: img5,
  },
  {
    title: "Free Home Sample <br /> Collection",
    image: img7,
  },
  {
    title: "NABL & NABH Certified <br /> Centre",
    image: img8,
  },
  {
    title: "Large Menu of Tests <br /> Available ",
    image: img9,
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
        fill="#FCC42C"
      />
      <path
        d="M13.5918 13.7738L10.4834 6.87381C10.1334 6.09881 10.9668 5.31548 11.7168 5.71548L16.5251 8.24881C18.5668 9.32381 18.5668 12.2405 16.5251 13.3155L14.8251 14.2071C14.3668 14.4405 13.8084 14.2488 13.5918 13.7738Z"
        fill="#FCC42C"
      />
    </svg>
  );
};

const locationData = [
  // {
  //   mainTilte: "Naraina",
  //   address:
  //     "A 41/1, Shindi Colony, Naraina Vihar, Naraina, New Delhi, Delhi 110028",
  //   serviceAvailable:
  //     "MRI Scan, CT Scan, Digital X-Ray, Neurology Test, Dental Imaging, Cardiology, Nuclear Imaging, DEXA Scan (BMD), Digital Mammography, Pathology Laboratory, 3D/4D Ultrasound, CT Coronary Angiography",
  //   contactNumber: "011-4725-2000",
  //   timing: "07:30 AM to 11:00 PM",
  //   email: "lft@cityxrayclinic.com",
  //   iframe:
  //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.113490520778!2d77.13685389999999!3d28.626360499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03301d2f8431%3A0x28390e9bc2d6e6b0!2sCity%20X-Ray%20%26%20Scan%20Clinic%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1692600460937!5m2!1sen!2sin",
  // },
  // {
  //   mainTilte: "Tilak Nagar",
  //   address:
  //     "5A/34  Tilak Nagar, Metro Pillar No-492 Near Haldiram Sweets, New Delhi, Delhi-110018",
  //   serviceAvailable:
  //     "MRI Scan, CT Scan, Digital X-Ray, Neurology Test, Dental Imaging, Cardiology, Nuclear Imaging, DEXA Scan (BMD), Digital Mammography, Pathology Laboratory, 3D/4D Ultrasound, CT Coronary Angiography",
  //   contactNumber: "011-4725-2000",
  //   timing: "07:00 AM to 11:00 PM",
  //   email: "lft@cityxrayclinic.com",
  //   // iframe:
  //   //   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.66731111373!2d77.1011643!3d28.6397315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d049e6b2d0ccd%3A0x9a36a2303144f6ab!2sCity%20X-Ray%20%26%20Scan%20Clinic%20Pvt.%20Ltd.%20-%20Tilak%20Nagar!5e0!3m2!1sen!2sin!4v1692600788400!5m2!1sen!2sin",
  //   iframe:
  //     "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14006.66924445492!2d77.1011643!3d28.6397315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d049e6b2d0ccd%3A0x9a36a2303144f6ab!2sCity%20X-Ray%20%26%20Scan%20Clinic%20Pvt.%20Ltd.%20-%20Tilak%20Nagar!5e0!3m2!1sen!2sin!4v1705926071893!5m2!1sen!2sin",
  // },
  // {
  //   mainTilte: "Vikaspuri",
  //   address:
  //     "Terminal, A - 12, Vikaspuri, near Metro Pillar Number 632, near Uttam Nagar, New Delhi, Delhi 110018",
  //   serviceAvailable:
  //     "MRI Scan, CT Scan, Digital X-Ray, Neurology Test, Dental Imaging, Cardiology, Nuclear Imaging, DEXA Scan (BMD), Digital Mammography, Pathology Laboratory, 3D/4D Ultrasound, CT Coronary Angiography",
  //   contactNumber: "011-4725-2000",
  //   timing: "08:00 AM to 8:00 PM",
  //   email: "lft@cityxrayclinic.com",
  //   iframe:
  //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1086096406048!2d77.0685195!3d28.626506799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0521cbfdd29d%3A0xacf278f199bcea9a!2sCity%20X-Ray%20%26%20Scan%20Clinic%20Pvt.%20Ltd.%20-%20Vikaspuri!5e0!3m2!1sen!2sin!4v1692602179245!5m2!1sen!2sin",
  // },
  // {
  //   mainTilte: "Vishnu Garden",
  //   address:
  //     "WZ 283/24A, Block A, Khayala, Vishnu Garden, New Delhi, Delhi, 110018",
  //   serviceAvailable:
  //     "MRI Scan, CT Scan, Digital X-Ray, Neurology Test, Dental Imaging, Cardiology, Nuclear Imaging, DEXA Scan (BMD), Digital Mammography, Pathology Laboratory, 3D/4D Ultrasound, CT Coronary Angiography",
  //   contactNumber: "011-4725-2000",
  //   timing: "08:00 AM to 6:00 PM",
  //   email: "lft@cityxrayclinic.com",
  //   iframe:
  //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.2860372527743!2d77.10192359999999!3d28.6511529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03ea87833a47%3A0x8624a19fbe20d9d8!2sCity%20X-Ray%20%26%20Scan%20Clinic%20Pvt%20Ltd%20-%20Vishnu%20Garden!5e0!3m2!1sen!2sin!4v1692602268821!5m2!1sen!2sin",
  // },
];
