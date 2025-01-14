import React, { useEffect, useState } from "react";
import ClinicalResearchBanner from "./ClinicalResearchBanner";
import ImagesOne from "assets/images/clinical-research/Frame 1410145648 1.png";
import { Pdfsvg } from "assets/images/SvgImage";
import { DownloadSVG } from "assets/images/SvgImage";
import { FileExplorSVG } from "assets/images/SvgImage";
import { EyeYellowBgSVG } from "assets/images/SvgImage";
import WhyChoose from "components/WhyChoose";
import CRCard from "assets/images/clinical-research/cr-Card.png";
import sectionimg from "assets/images/clinical-research/sectionimg.png";
import HC1 from "assets/images/clinical-research/HC1.png";
import HC2 from "assets/images/clinical-research/HC2.png";
import HC3 from "assets/images/clinical-research/HC3.png";
import CX1 from "assets/images/clinical-research/CX1.png";
import CX2 from "assets/images/clinical-research/CX2.png";
import CX3 from "assets/images/clinical-research/CX3.png";
import CX4 from "assets/images/clinical-research/CX4.png";
import icon1 from "assets/images/clinical-research/icon1.png";
import icon2 from "assets/images/clinical-research/icon2.png";
import icon3 from "assets/images/clinical-research/icon3.png";
import icon4 from "assets/images/clinical-research/icon4.png";
import journery from "assets/images/clinical-research/journey-bg.png";
import playbutton from "assets/images/clinical-research/play-button.png";
import cicon1 from "assets/images/clinical-research/Profile.png";
import cicon2 from "assets/images/clinical-research/bxs_phone-call.png";
import cicon3 from "assets/images/clinical-research/ic_sharp-email.png";
import cicon4 from "assets/images/clinical-research/carbon_location-filled.png";
import readicon from "assets/images/clinical-research/Icon-read.png";
import { FacilitesBooksSvg } from "assets/images/SvgImage";
import test1 from "assets/images/clinical-research/test1.png";
import test2 from "assets/images/clinical-research/test2.png";
import test3 from "assets/images/clinical-research/test3.png";
import test4 from "assets/images/clinical-research/test4.png";
import test5 from "assets/images/clinical-research/test4.png";

//silder
import Slider from "react-slick";
import { PrevIcons } from "assets/images/SvgImage";
import { NextIcons } from "assets/images/SvgImage";
import testimonial1 from "assets/images/clinical-research/testimonial1.png";
import rating from "assets/images/clinical-research/star.png";

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

// why choose
import ImageTwo from "assets/images/Finalimg/Why Choose Us/10M+ Happy Patients.webp";
import ImageThree from "assets/images/Finalimg/Why Choose Us/30 Years of Excellence in Diagnostic Health Care.webp";
import ImageFive from "assets/images/Finalimg/Why Choose Us/Affordable.webp";
import ImageSix from "assets/images/Finalimg/Why Choose Us/Fast & Accurate Results.webp";
import ImageSeven from "assets/images/Finalimg/Why Choose Us/Free Home Sample Collection.webp";
import ImageNine from "assets/images/Finalimg/Why Choose Us/Large Menu of Tests Available.webp";
import ImageEight from "assets/images/Finalimg/Why Choose Us/NABL & NABH Certified Centre.webp";
import ImageOne from "assets/images/Finalimg/Why Choose Us/Team of Experienced Doctor & Staffs.webp";
import ImageFour from "assets/images/Finalimg/Why Choose Us/World Class Technology.webp";
import { useRouter } from "next/router";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";
import { ADD_REASEARCH_FORM } from "redux/actions/inquiry";
import { useDispatch } from "react-redux";
import { CheckObjectValidation } from "utility/Utils";
import { GET_BOOK_A_TEST } from "redux/actions/book-a-test";

const ClinicalResearchLayout = () => {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
  };
  const router = useRouter();
  const [testArray, setTestArray] = useState([]);
  const [errorKeyName, setErrorKeyName] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    your_name: "",
    email: "",
    mobile_number: "",
    write_up: "",
    inquiry_from: "city x-ray website",
  });
  const fetchTest = async () => {
    const res = await dispatch(GET_BOOK_A_TEST(1, 100000, ""));
    console.log("res---->>>>", res);
    if (res?.success) {
      setTestArray(res?.data?.data?.testData || []);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkValidation = CheckObjectValidation(payload, ["patient_email"]);
    setErrorKeyName(checkValidation.keyname);
    if (checkValidation.isvalid) {
      setLoading(true);
      const res = await dispatch(
        ADD_REASEARCH_FORM({
          ...payload,
        })
      );
      if (res?.success) {
        setLoading(false);

        setPayload({
          your_name: "",
          email: "",
          mobile_number: "",
          write_up: "",
          inquiry_from: "city x-ray website",
        });
      } else {
        setLoading(false);

        dispatch(LOGIN_MODAL_OPEN(true));
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errorKeyName === name) {
      setErrorKeyName("");
    }
    setPayload({ ...payload, [name]: value });
  };
  useEffect(() => {
    if (window) {
      setPayload({ ...payload, url: window.location.href });
    }
    fetchTest();
  }, []);
  return (
    <>
      <section className="sliders banner_slider_wrap_clinical cstm-clinicresearch-bg">
        <div className="web-view relative flexbox container">
          <ClinicalResearchBanner />
        </div>
      </section>

      <div className="container  py-[35px] md:py-[70px]">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div>
              <div className="text-black font-semibold lg:text-[32px] text-lg mb-[20px]">
                Introduction of Kaivee{" "}
              </div>
              <p className="text-[#71717A] lg:text-[16px] text-[14px] mb-[10px]">
                Kaivee is a chain of diagnostic centres, providing high quality,
                accredited (NABL & NABH), integrated Radiology & Pathology
                services under one roof. It gains its strength from focus on
                numerous critical pillars like security, transparency,
                reliability and user friendly ambience, that has a significant
                impact in augmenting their brand's reputation and build long
                term client alliance. Kaivee envisioned setting the best
                industry standards in diagnostic services.
              </p>

              <p className="text-[#71717A] lg:text-[16px] text-[14px] mb-[10px]">
                Laboratory at Kaivee offers a comprehensive spectrum of
                Hematology, Immunoassays, Histocytopathology, molecular studies,
                microbiology and serological analysis in conjunction with
                automation, informatics and services and can serve the needs of
                humans today and tomorrow. Followed by Radiology services
                include high end 3T MRI, CT scan with cardiac angiography,
                ultrasound with 3D mode, color doppler, X rays (routine &
                specialised), Mammography, Dexa scan, nuclear scan, dental
                Radiology including CBCT etc. Also available are Cardiology
                diagnostic services like Holter, Echo, Stress Echo and
                neurologic diagnostic services like EEG, EMG, BERA, VER etc.
              </p>

              <p className="text-[#71717A] lg:text-[16px] text-[14px] mb-[10px]">
                At Kaivee, we follow efficient workflow, provide reliable and
                consistent results as well as form scalable solutions. The lab
                follows good internal quality control practices, which are vital
                in generating reliable and reproducible data, which is the
                foundation of scientific outcome, enabling healthcare providers
                to compose informative decisions about patient care . Moreover,
                inferential and expressive analyses have been based on pragmatic
                datasets extracted from authenticated data sources from
                automated systems. By using high-quality QC's, labs can ensure
                the precision, accuracy, and consistency of findings which add
                to the advance of pioneering treatments, new diagnostics
                technologies, and enhancing patient care procedure.
              </p>
              <p className="text-[#71717A] lg:text-[16px] text-[14px] mb-[10px]">
                Diagnostic process is complex, patient centric, followed by
                collaborative activities, which involves information gathering
                from clinical reasoning with the goal of diagnosing a patient's
                health related problems.
              </p>

              <p className="text-[#71717A] lg:text-[16px] text-[14px] mb-[10px]">
                Another aspect of ensuring safety and security of many of the
                hazardous resources in daily usage is imperative due to large
                volumes and ubiquity, using obligatory safety measures by team
                of Kaivee. Diagnostic processes draw on an adaptation of a
                decision making model, which entails the cyclical process of
                information gathering-integration- interpretation, and forming a
                working diagnosis appropriately.
              </p>

              <div className="text-black font-semibold lg:text-[32px] text-lg mt-[20px] mb-[20px]">
                Clinical Studies{" "}
              </div>

              <p className="text-[#71717A] lg:text-[16px] text-[14px] mb-[10px]">
                Clinical studies linking healthy volunteers and patients play an
                imperative role in the progress of novel causes. Clinical
                studies are accomplished to certify that all investigational
                materials are secure and effective. Clinical studies have gained
                insight from scientific and technological progression followed
                by the perception of the necessities of clinical study
                participants. Globally, in the last few decades there has been
                incredible progress in the clinical research and development
                milieu with escalating consideration being paid to the health
                needs of people in resource-limited settings, where most of the
                preventable morbidity and mortality occurs. Clinical research
                escorts to the progression of novel drug, innovative ways to
                treat old and new illness, and new-fangled ways to thwart
                disease in individuals at risk of budding them. Clinical
                research assists clinicians and other healthcare service
                contributors to discover novel ways to avert and treat illness
                in individuals and find out the solutions to un-answered
                questions about health, disease, and human behaviour. Although,
                clinical studies can embrace both non-interventional
                (non-experimental i.e. observational) and interventional
                (experimental) studies but don't engross investigational
                medicinal products.
              </p>
            </div>

            {/* <div>
              <img src={CRCard.src} className="w-full mt-[30px] mb-[40px] " />
            </div> */}

            <div className="testimonial bg-[#FAFAFA] rounded-[16px] p-[22px] md:p-[42px] mb-[32px]">
              <div className="text-[24px] md:text-[32px] font-semibold pb-[33px] mb-md-0 mb-[15px]">
                Testimonial
              </div>

              <div className="container" style={{ width: "100%" }}>
                <Slider
                  {...settings}
                  className="carousel desktop-banner cstm-cr-arrow"
                >
                  <div className="home-slider-swiper">
                    <div className="relative">
                      {/* <img
                        src={testimonial1.src}
                        className="mx-auto mb-[32px]"
                      /> */}
                      {/* <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                        <img
                          src={playbutton.src}
                          className="md:!w-auto !w-[30%] mx-auto"
                        />
                      </div> */}
                    </div>
                    <div>
                      <p className="text-[#585981] lg:text-[16px] text-[14px] mb-[24px]">
                        It has been a pleasure having City Imaging as a contract
                        research organization for the conduct of our
                        bioequivalence studies. Being an independent CRO, it is
                        good to see City Imaging have a wide range of analytical
                        methods and good clinical experience. Looking forward to
                        see the good work continue in the coming years.
                      </p>
                    </div>
                    {/* <div>
                      <div className="flex gap-2 items-center justify-start mb-4">
                        <img src={rating.src} className="w-auto h-auto" />
                        <img src={rating.src} className="w-auto h-auto" />
                        <img src={rating.src} className="w-auto h-auto" />
                        <img src={rating.src} className="w-auto h-auto" />
                        <div className="text-secondary text-[14px]">
                          (10 Reviews)
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="flex gap-4 justify-center items-center mb-[24px]">
                      <img src={test2.src} className="w-auto h-auto" />
                      <img src={test3.src} className="w-auto h-auto" />
                      <img src={test1.src} className="w-auto h-auto" />
                      <img src={test4.src} className="w-auto h-auto" />
                      <img src={test5.src} className="w-auto h-auto" />
                    </div> */}
                    <div className="text-center">
                      <div className="text-[20px] text-[#27272A] font-semibold">
                        Mr. Bhavin Kalra
                      </div>
                      <div className="text-[#A1A1AA] text-[16px] font-medium">
                        Noida
                      </div>
                    </div>
                  </div>
                  <div className="home-slider-swiper">
                    <div className="relative">
                      {/* <img
                        src={testimonial1.src}
                        className="mx-auto mb-[32px]"
                      />
                      <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                        <img
                          src={playbutton.src}
                          className="md:!w-auto !w-[30%] mx-auto"
                        />
                      </div> */}
                    </div>
                    <div>
                      <p className="text-[#585981] lg:text-[16px] text-[14px] mb-[24px]">
                        Our organization has worked with City Imaging for a
                        number of years, and we are continually impressed with
                        the team’s speed of responsiveness to their
                        customers.The Veeda team is available, knowledgeable,
                        and always willing to work through any queries we might
                        have.
                      </p>
                    </div>
                    {/* <div>
                      <div className="flex gap-2 items-center justify-start mb-4">
                        <img src={rating.src} className="w-auto h-auto" />
                        <img src={rating.src} className="w-auto h-auto" />
                        <img src={rating.src} className="w-auto h-auto" />
                        <img src={rating.src} className="w-auto h-auto" />
                        <div className="text-secondary text-[14px]">
                          (10 Reviews)
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 justify-center items-center mb-[24px]">
                      <img src={test2.src} className="w-auto h-auto" />
                      <img src={test3.src} className="w-auto h-auto" />
                      <img src={test1.src} className="w-auto h-auto" />
                      <img src={test4.src} className="w-auto h-auto" />
                      <img src={test5.src} className="w-auto h-auto" />
                    </div> */}
                    <div className="text-center">
                      <div className="text-[20px] text-[#27272A] font-semibold">
                        Dr. Vijay Arora
                      </div>
                      <div className="text-[#A1A1AA] text-[16px] font-medium">
                        Delhi
                      </div>
                    </div>
                  </div>
                  {/* <div className="home-slider-swiper">
                    <div className="grid gap-[50px] justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-1 ">
                      <div className="">
                        <p className="lg:text-5xl text-lg font-bold">
                          Clinical Research ajsdkjasdkjsah
                        </p>
                      </div>
                    </div>
                  </div> */}
                </Slider>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-10 p-0 bg-[#F7F7FB] rounded-s-[11px] !py-[16px] md:!py-[24px] !px-[22px] md:!px-[42px]">
                  <div className="text-black font-semibold lg:text-[32px] text-lg mt-[20px] mb-[20px]">
                    Study Site
                  </div>
                  <p className="text-[#585981] lg:text-[16px] text-[14px] mb-[20px]">
                    The geological location and local population are among the
                    significant aspects to consider when opting a site.
                    Erstwhile responsible factors are turnaround time, the site
                    staff, facility requirements, the study duration and target
                    timelines.
                  </p>
                  <p className="text-[#585981] lg:text-[16px] text-[14px] mb-[10px]">
                    For Sustainability and validation of studies/ technology, we
                    would like to partnering with foremost community and
                    academic medical centres/ institute/ university around the
                    globe..
                  </p>
                </div>
                <div className="col-2 p-0">
                  <img src={sectionimg.src} className="w-full h-full" />
                </div>
              </div>
            </div>

            <div>
              <div className="text-black font-semibold lg:text-[32px] text-lg mt-[20px] mb-[24px]">
                Specialties of Kaivee: <br />
                <span className="text-[#FCC42C]">
                  Comprehensive Health Care
                </span>
              </div>
              <div className="row">
                <div className="col-md-4 col-12 mb-md-0 mb-4">
                  <div className="border border-[#D4D4D4] rounded-[16px] p-2">
                    <div>
                      <img
                        src={HC1.src}
                        className="w-full rounded-[16px] mb-[16px]"
                      />
                    </div>
                    <div className="text-[16px] font-semibold text-[#212121] text-center">
                      Infectious Disease
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12 mb-md-0 mb-4">
                  <div className="border border-[#D4D4D4] rounded-[16px] p-2">
                    <div>
                      <img
                        src={HC2.src}
                        className="w-full rounded-[16px] mb-[16px]"
                      />
                    </div>
                    <div className="text-[16px] font-semibold text-[#212121] text-center">
                      Diabetes and Metabolism
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12 mb-md-0 mb-4">
                  <div className="border border-[#D4D4D4] rounded-[16px] p-2">
                    <div>
                      <img
                        src={HC3.src}
                        className="w-full rounded-[16px] mb-[16px]"
                      />
                    </div>
                    <div className="text-[16px] font-semibold text-[#212121] text-center">
                      Case report/series{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[16px] text-center pb-[32px]">
                <a
                  href="#"
                  className="text-[16px] text-[#FCC42C] font-semibold text-center"
                >
                  View all{" "}
                </a>
              </div>
            </div>

            <div>
              <div className="text-black font-semibold lg:text-[32px] text-lg mt-[20px] mb-[24px] text-left">
                Clinical Expertise
              </div>
              <div className="row">
                <div className="col-md-3 col-12 mb-md-0 mb-4">
                  <div className="border border-[#D4D4D4] rounded-[16px] p-2">
                    <div>
                      <img
                        src={CX1.src}
                        className="w-full rounded-[16px] mb-[16px]"
                      />
                    </div>
                    <div className="text-[16px] font-semibold text-[#212121] text-center">
                      Infectious Disease
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-12 mb-md-0 mb-4">
                  <div className="border border-[#D4D4D4] rounded-[16px] p-2">
                    <div>
                      <img
                        src={CX2.src}
                        className="w-full rounded-[16px] mb-[16px]"
                      />
                    </div>
                    <div className="text-[16px] font-semibold text-[#212121] text-center">
                      Diabetes and Metabolism
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-12 mb-md-0 mb-4">
                  <div className="border border-[#D4D4D4] rounded-[16px] p-2">
                    <div>
                      <img
                        src={CX3.src}
                        className="w-full rounded-[16px] mb-[16px]"
                      />
                    </div>
                    <div className="text-[16px] font-semibold text-[#212121] text-center">
                      Case report/series{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-12 mb-md-0 mb-4">
                  <div className="border border-[#D4D4D4] rounded-[16px] p-2">
                    <div>
                      <img
                        src={CX4.src}
                        className="w-full rounded-[16px] mb-[16px]"
                      />
                    </div>
                    <div className="text-[16px] font-semibold text-[#212121] text-center">
                      Case report/series{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[16px] text-center pb-[32px]">
                <a
                  href="#"
                  className="text-[16px] text-[#FCC42C] font-semibold text-center"
                >
                  View all{" "}
                </a>
              </div>
            </div>

            <div className="cstm-volunteerbg mb-[32px] p-[22px] md:p-[43px]">
              <div className=" text-center">
                <div className="text-[18px] text-[#0A0A0A] font-semibold pb-2">
                  Volunteer Sign-up
                </div>
                <div className="text-[14px] text-[#0A0A0A] font-semibold pb-[37px]">
                  Are Interested in our Clinical Studies/Research/Trials?
                </div>
                <div className="text-[16px] md:text-[24px] text-[#ffffff] font-semibold pb-[15px]">
                  Participate in clinical studies to widen novel diagnostic and
                  clinical treatments and to improvise existing standards of
                  care.
                </div>
                <button className="border border-black rounded-[11px] px-[20px] py-[5px] text-black bg-white text-[12px] font-bold">
                  Sign up now
                </button>
              </div>
            </div>

            <div>
              <div className="text-black font-semibold lg:text-[32px] text-lg mt-[20px] mb-[24px] text-left">
                Publications
              </div>
              <p className="text-[#585981] lg:text-[16px] text-[14px] mb-[10px]">
                Research transparency and sharing our learning's with the
                broader clinical and scientific community is of the utmost
                importance.
              </p>

              <div>
                <div
                  style={{ boxShadow: "2px 2px 8px 0px #0000000A" }}
                  className="border border-[#E4E4E7] rounded-[16px] p-[14px] mb-[14px]"
                >
                  <div className="flex gap-[20px] items-center md:flex-nowrap flex-wrap">
                    <div className="bg-[#FCF6DD] p-3 rounded-[12px]">
                      {" "}
                      <img src={icon1.src} />
                    </div>
                    <div>
                      <div className="text-[16px] text-[#27272A] font-normal">
                        {" "}
                        View our{" "}
                      </div>
                      <div className="text-[16px] text-[#27272A] font-bold">
                        Manuscript/Publication
                      </div>
                    </div>
                    <div className="bg-[#27272A] rounded-[11px] p-2 text-white text-[12px]">
                      +574
                    </div>
                  </div>
                </div>

                <div
                  style={{ boxShadow: "2px 2px 8px 0px #0000000A" }}
                  className="border border-[#E4E4E7] rounded-[16px] p-[14px] mb-[14px]"
                >
                  <div className="flex gap-[20px] items-center md:flex-nowrap flex-wrap">
                    <div className="bg-[#FCF6DD] p-3 rounded-[12px]">
                      {" "}
                      <img src={icon2.src} />
                    </div>
                    <div>
                      <div className="text-[16px] text-[#27272A] font-normal">
                        {" "}
                        View our{" "}
                      </div>
                      <div className="text-[16px] text-[#27272A] font-bold">
                        Presentation
                      </div>
                    </div>
                    <div className="bg-[#27272A] rounded-[11px] p-2 text-white text-[12px]">
                      +574
                    </div>
                  </div>
                </div>

                <div
                  style={{ boxShadow: "2px 2px 8px 0px #0000000A" }}
                  className="border border-[#E4E4E7] rounded-[16px] p-[14px] mb-[14px]"
                >
                  <div className="flex gap-[20px] items-center md:flex-nowrap flex-wrap">
                    <div className="bg-[#FCF6DD] p-3 rounded-[12px]">
                      {" "}
                      <img src={icon3.src} />
                    </div>
                    <div>
                      <div className="text-[16px] text-[#27272A] font-normal">
                        {" "}
                        View our{" "}
                      </div>
                      <div className="text-[16px] text-[#27272A] font-bold">
                        Research Studies
                      </div>
                    </div>
                    <div className="bg-[#27272A] rounded-[11px] p-2 text-white text-[12px]">
                      +574
                    </div>
                  </div>
                </div>

                <div
                  style={{ boxShadow: "2px 2px 8px 0px #0000000A" }}
                  className="border border-[#E4E4E7] rounded-[16px] p-[14px] mb-[14px]"
                >
                  <div className="flex gap-[20px] items-center md:flex-nowrap flex-wrap">
                    <div className="bg-[#FCF6DD] p-3 rounded-[12px]">
                      {" "}
                      <img src={icon4.src} />
                    </div>
                    <div>
                      <div className="text-[16px] text-[#27272A] font-normal">
                        {" "}
                        View our{" "}
                      </div>
                      <div className="text-[16px] text-[#27272A] font-bold">
                        list of Equipment
                      </div>
                    </div>
                    <div className="bg-[#27272A] rounded-[11px] p-2 text-white text-[12px]">
                      +574
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="sticky top-[180px]">
              {/* <div className="mb-[24px]">
                <div
                  className="border border-[#E4E4E7] rounded-[16px] p-[14px]"
                  style={{ boxShadow: "2px 2px 8px 0px #0000000A" }}
                >
                  <div className="text-black font-semibold text-[24px] mb-[20px]">
                    Transparency Policy
                  </div>
                  <div className="text-secondary lg:text-[18px] text-[14px] mb-[20px]">
                    Learn more about our commitment on transparency and
                    publication of clinical study data
                  </div>
                  <div>
                    <button className="bg-[#F5F5F5] text-[16px] text-[#171717] w-full px-[15px] font-medium py-[8px] border border-[#A3A3A3] rounded-[16px] flex justify-between items-center">
                      <div>Read More</div>
                      <div>
                        {" "}
                        <img src={readicon.src} />{" "}
                      </div>
                    </button>
                  </div>
                </div>
              </div> */}

              {/* <div className="mb-[24px]">
                <button
                  onClick={() => router.push("/contact-us")}
                  className="bg-[#FCC42C] text-white px-[20px] py-[8px] rounded-[12px] text-[24px] w-full"
                >
                  Contact Us
                </button>
              </div> */}

              {/* <div className="mb-[24px]">
                <button className="bg-[#ffffff] text-[#FCC42C] border border-[#FCC42C]  px-[20px] py-[8px] rounded-[12px] text-[24px] w-full">
                  Description Form
                </button>
              </div> */}

              <div>
                <div
                  className="border border-[#E4E4E7] bg-white p-[24px] rounded-[24px]"
                  style={{
                    boxShadow: " 0px 4px 10px 0px #00000014",
                  }}
                >
                  <div
                    className="p-[20px] md:p-[23px] rounded-[10px] mb-[12px]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(171, 218, 164, 0.5) -49.9%, rgba(255, 227, 123, 0.5) 156.68%)",
                    }}
                  >
                    <div className="flex justify-center gap-x-2 flex-nowrap items-center">
                      <FacilitesBooksSvg />
                      <p className="text-[#3F3F46]  xl:text-xl lg:text-[18px] md:text-[18px] text-[14px] font-bold font-source-pro">
                        Get in Touch!
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="pb-[16px]">
                      <label className="text-[16px] text-[#3F3F46] font-medium">
                        Your Name
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        name="your_name"
                        value={payload?.your_name}
                        placeholder="Enter Your Name"
                        onChange={handleChange}
                        className="text-[#71717A] text-base border border-[#E5E7EB] rounded-[8px] w-full p-2"
                      />
                      {errorKeyName === "your_name" ? (
                        <p className="text-red-500 text-sm">
                          Please Enter a your name
                        </p>
                      ) : null}
                    </div>

                    {/* <div className="pb-[16px]">
                      <label className="text-[16px] text-[#3F3F46] font-medium">
                        Test
                      </label>{" "}
                      <br />
                      <select
                        name="testfield"
                        value={payload?.testfield}
                        onChange={handleChange}
                        className="text-[#71717A] text-base border border-[#E5E7EB] rounded-[8px] w-full p-2"
                        // size="5"
                      >
                        <option>Select Test</option>
                        {testArray.map((item, index) => (
                          <option
                            key={index}
                            value={item?._id}
                            className="overflow-hidden"
                          >
                            <p className="w-[100px] line-clamp-1">
                              {item?.test_name}
                            </p>
                          </option>
                        ))}
                      </select>
                    </div> */}

                    <div className="pb-[16px]">
                      <label className="text-[16px] text-[#3F3F46] font-medium">
                        Email{" "}
                      </label>{" "}
                      <br />
                      <input
                        type="email"
                        value={payload?.email}
                        name="email"
                        onChange={handleChange}
                        placeholder="Enter Your Email Address"
                        className="text-[#71717A] text-base border border-[#E5E7EB] rounded-[8px] w-full p-2"
                      />
                      {errorKeyName === "email" ? (
                        <p className="text-red-500 text-sm">
                          Please Enter a valid Email
                        </p>
                      ) : null}
                    </div>

                    <div className="pb-[16px]">
                      <label className="text-[16px] text-[#3F3F46] font-medium">
                        Mobile Number{" "}
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        value={payload?.mobile_number}
                        name="mobile_number"
                        id="mobile_number"
                        maxLength="10"
                        placeholder="011-4725-2000"
                        onChange={(e) => {
                          if (/^[0-9\s]*$/.test(e.target?.value)) {
                            handleChange(e);
                          }
                        }}
                        className="text-[#71717A] text-base border border-[#E5E7EB] rounded-[8px] w-full p-2"
                      />
                      {errorKeyName === "mobile_number" ? (
                        <p className="text-red-500 text-sm">
                          Please Enter a your number
                        </p>
                      ) : null}
                    </div>

                    <div className="pb-[16px]">
                      <label className="text-[16px] text-[#3F3F46] font-medium">
                        Write Up{" "}
                      </label>{" "}
                      <br />
                      <textarea
                        value={payload?.message}
                        name="write_up"
                        placeholder="Add your details"
                        rows="5"
                        onChange={handleChange}
                        className="text-[#71717A] text-base border border-[#E5E7EB] rounded-[8px] w-full p-2"
                      ></textarea>
                      {errorKeyName === "write_up" ? (
                        <p className="text-red-500 text-sm">
                          Please Enter a your Inquiry
                        </p>
                      ) : null}
                    </div>
                    <div className="mb-[24px]">
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        id={"btnInquiry"}
                        className="bg-[#FCC42C] text-white px-[20px] py-[8px] rounded-[12px] text-[24px] w-full"
                      >
                        {loading ? "Processing..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section>
        <div className="container">
          <div className="text-black font-semibold lg:text-[32px] text-lg mt-[20px] mb-[24px]">
            Our Journey
          </div>
        </div>
        <div className="relative">
          <img src={journery.src} className="w-full" />
          <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            <img src={playbutton.src} className="md:w-auto w-[30%] mx-auto" />
          </div>
        </div>
      </section> */}

      {/* counter */}
      <section>
        <div className="container py-[35px] md:py-[70px]">
          <div className="row">
            <div className="col-md-3 col-6 mb-md-0 mb-4">
              <div className="xl:text-[100px] md:[90px] text-[40px] text-[#FCC42C] font-bold text-center">
                100+
              </div>
              <div className="lg:text-[22px] text-base text-black font-normal text-center">
                Clinical Studies
              </div>
            </div>
            <div className="col-md-3 col-6 mb-md-0 mb-4">
              <div className="xl:text-[100px] md:[90px] text-[40px] text-[#FCC42C] font-bold text-center">
                22+
              </div>
              <div className="lg:text-[22px] text-base text-black font-normal text-center">
                Publications
              </div>
            </div>
            <div className="col-md-3 col-6 mb-md-0 mb-4">
              <div className="xl:text-[100px] md:[90px] text-[40px] text-[#FCC42C] font-bold text-center">
                25+
              </div>
              <div className="lg:text-[22px] text-base text-black font-normal text-center">
                Clinical Trials
              </div>
            </div>
            <div className="col-md-3 col-6 mb-md-0 mb-4">
              <div className="xl:text-[100px] md:[90px] text-[40px] text-[#FCC42C] font-bold text-center">
                30+
              </div>
              <div className="lg:text-[22px] text-base text-black font-normal text-center">
                Years of Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section>
        <div className="container pt-0 py-[35px] md:py-[70px]">
          <div className="text-black font-semibold lg:text-[32px] text-lg mt-[20px] mb-[5px]">
            Contact Us
          </div>
          <div className="text-[16px] text-[#27272A] mb-[45px]">
            Get in touch with us now!
          </div>
          <div className="row">
            <div className="col-md-5 col-12 mb-md-0 mb-4">
              <div className="contactbg">
                <div className="text-black font-semibold lg:text-[32px] text-lg mt-[20px] mb-[15px]">
                  Contact Information
                </div>
                {/* <div className="text-[16px] text-[#27272A] mb-[60px]">
                  Say something to start a live chat!
                </div> */}
                <div>
                  <div className="flex gap-5 pb-[40px]">
                    <img src={cicon1.src} />
                    <div className="text-base text-[#262626] font-normal">
                      Dr. Aakaar Kapoor{" "}
                    </div>
                  </div>

                  <div className="flex gap-5 pb-[40px]">
                    <img src={cicon2.src} />
                    <a
                      href="tel:98109 27744"
                      className="text-base text-[#262626] font-normal"
                    >
                      98109 27744
                    </a>
                  </div>

                  <div className="flex gap-5 pb-[40px]">
                    <img src={cicon3.src} />
                    <a
                      href="mailto: draakaar@cityxrayclinic.com"
                      className="text-base text-[#262626] font-normal"
                    >
                      draakaar@cityxrayclinic.com
                    </a>
                  </div>

                  <div className="flex gap-5 pb-[40px] items-start">
                    <img src={cicon4.src} />
                    <div className="text-base text-[#262626] font-normal">
                      5A/34, Tilak Nagar, Najafgarh Road,
                      <br /> New Delhi, Delhi-110018
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12">
              <div className="w-full h-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28013.354002208554!2d77.08050953476562!3d28.639673399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d049e6b2d0ccd%3A0x9a36a2303144f6ab!2sCity%20X-Ray%20%26%20Scan%20Clinic%20Pvt.%20Ltd.%20-%20Tilak%20Nagar!5e0!3m2!1sen!2sin!4v1735881936393!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* <div>
                    <button className="bg-[#FCC42C] text-white px-[20px] py-[8px] rounded-[12px] text-base">View Large Mape</button>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div>
        <div className="container  py-[35px] md:py-[70px]">
          <p className="text-black font-semibold lg:text-[32px] text-lg mb-[20px]">
            Research is creating new Knowledge
          </p>
          <div className="flex flex-col gap-y-2">
            <p className="text-secondary lg:text-[18px] text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
            </p>
            <p className="text-secondary lg:text-[18px] text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="container  py-[35px] md:py-[70px]">
          <div className="flex flex-col gap-6">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 rounded-xl shadow-md bg-white lg:p-[40px] p-[15px]">
              <div className="rounded-xl border-[1px] border-[#FFE9BC] lg:p-[24px] p-[15px]">
                <div>
                  <img src={ImagesOne.src} width={"100%"} />
                </div>
                <div className="mt-[10px] flex gap-[10px] justify-between items-center">
                  <div className="lg:flex gap-3 items-center">
                    <div className="lg:mb-0 mb-2">
                      <Pdfsvg />
                    </div>
                    <div>
                      <p className="text-black font-semibold lg:text-lg text-[14px]">
                        Research is creating new Knowledge
                      </p>
                      <span className="text-secondary text-[14px]">
                        1 Page . 1.8 MB . PDF
                      </span>
                    </div>
                  </div>
                  <div>
                    <DownloadSVG />
                  </div>
                </div>
              </div>
              <div className="rounded-xl border-[1px] border-[#FFE9BC] lg:p-[24px] p-[15px]">
                <div className="lg:mb-0 mb-2">
                  <img src={ImagesOne.src} width={"100%"} />
                </div>
                <div className=" mt-[10px] flex justify-between items-center">
                  <div className="lg:flex gap-3  items-center">
                    <div className="lg:mb-0 mb-2">
                      <FileExplorSVG />
                    </div>
                    <div>
                      <p className="text-black font-semibold lg:text-lg text-[14px]">
                        Research is creating new Knowledge
                      </p>
                      <span className="text-secondary text-[14px]">
                        1 Page . 1.8 MB . PDF
                      </span>
                    </div>
                  </div>
                  <div>
                    <EyeYellowBgSVG />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 rounded-xl shadow-md bg-white lg:p-[40px] p-[15px]">
              <div className="rounded-xl border-[1px] border-[#FFE9BC] p-[24px]">
                <div>
                  <img src={ImagesOne.src} width={"100%"} />
                </div>
                <div className=" mt-[10px] flex justify-between items-center">
                  <div className="lg:flex gap-3 items-center">
                    <div className="lg:mb-0 mb-2">
                      <Pdfsvg />
                    </div>
                    <div>
                      <p className="text-black font-semibold lg:text-lg text-[14px]">
                        Research is creating new Knowledge
                      </p>
                      <span className="text-secondary text-[14px]">
                        1 Page . 1.8 MB . PDF
                      </span>
                    </div>
                  </div>
                  <div>
                    <DownloadSVG />
                  </div>
                </div>
              </div>
              <div className="rounded-xl border-[1px] border-[#FFE9BC] p-[24px]">
                <div>
                  <img src={ImagesOne.src} width={"100%"} />
                </div>
                <div className=" mt-[10px] flex justify-between items-center">
                  <div className="lg:flex gap-3 items-center">
                    <div className="lg:mb-0 mb-2">
                      <FileExplorSVG />
                    </div>
                    <div>
                      <p className="text-black font-semibold lg:text-lg text-[14px]">
                        Research is creating new Knowledge
                      </p>
                      <span className="text-secondary text-[14px]">
                        1 Page . 1.8 MB . PDF
                      </span>
                    </div>
                  </div>
                  <div>
                    <EyeYellowBgSVG />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <WhyChoose data={data} />
      </div> */}
    </>
  );
};
const data = [
  {
    title: "Team of Experienced <br /> Doctors & Staffs",
    image: ImageOne,
  },
  {
    title: "10M+ Happy Patients",
    image: ImageTwo,
  },
  {
    title: "31 Year of Excellence in <br /> Diagnostic Healthcare",
    image: ImageThree,
  },
  {
    title: "World Class Technology",
    image: ImageFour,
  },
  {
    title: "Fast & Accurate Results",
    image: ImageSix,
  },
  {
    title: "Affordable",
    image: ImageFive,
  },
  {
    title: "Free Home Sample <br /> Collection",
    image: ImageSeven,
  },
  {
    title: "NABL & NABH Certified <br /> Centre",
    image: ImageEight,
  },
  {
    title: "Large Menu of Tests <br /> Available ",
    image: ImageNine,
  },
];

export default ClinicalResearchLayout;
