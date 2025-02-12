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
      <section>
        <div>
          <ClinicalResearchBanner />
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Advancing Healthcare Through Reliable Clinical Research</h2>
          <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A]">
            At <span className="font-bold">Kaivee Healthcare</span>, we’re committed to driving medical progress through <span className="font-bold">ethical, precise, and data-driven clinical research</span> that shapes the future of healthcare.
          </p>


          {/* <button className="bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors font-medium">
            Learn More About Our Research
          </button> */}
        </div>
      </section>


      {/* Key Stats */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "100+", label: "Clinical Studies" },
            { number: "22+", label: "Publications" },
            { number: "25+", label: "Clinical Trials" },
            { number: "30+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-pink-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section Above Research Focus Areas */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Clinical Research Matters</h2>
          <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A]">
            <span className="font-bold">Kaivee Healthcare</span> isn’t just a trusted name in diagnostics—we’re also at the forefront of <span className="font-bold">clinical research and development</span>. Our state-of-the-art facilities, combined with a team of experienced researchers, enable us to conduct high-quality <span className="font-bold">clinical studies</span> that contribute to new medical discoveries, improved treatments, and patient care innovations.
          </p>
          <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A]">
            We collaborate with <span className="font-bold">pharmaceutical companies</span>, <span className="font-bold">healthcare institutions</span>, and <span className="font-bold">research organizations</span> to ensure our studies meet the highest standards of <span className="font-bold">ethics, accuracy, and reliability</span>.
          </p>

          {/* <button className="bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors font-medium">
            Learn More About Our Research
          </button> */}
        </div>
      </section>


      {/* Research Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Research Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Infectious Diseases",
                content: "Pioneering research in emerging pathogens and treatment protocols",
                icon: HC1
              },
              {
                title: "Metabolic Disorders",
                content: "Advanced studies in diabetes and metabolic syndrome management",
                icon: HC2
              },
              {
                title: "Clinical Trials",
                content: "Comprehensive phase I-IV clinical trial management",
                icon: HC3
              }
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img src={area.icon.src} alt={area.title} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Research Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {[
              { step: "1", title: "Study Design", desc: "Protocol development & feasibility" },
              { step: "2", title: "Regulatory Approval", desc: "Ethics committee & regulatory compliance" },
              { step: "3", title: "Participant Recruitment", desc: "Screening & enrollment management" },
              { step: "4", title: "Data Analysis", desc: "Advanced analytics & reporting" },
            ].map((step, index) => (
              <div key={index} className="relative flex-1 text-center p-6 bg-blue-50 rounded-xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Trusted By Researchers</h2>
          <Slider {...settings} className="px-12">
            {data.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={rating.src} className="w-5 h-5 mr-1" />
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Modern Contact Form */}
      <section className="py-16 bg-white">
        <div className="w-full px-4">
          <div className=" mx-auto bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Partner With Us</h2>

            {/* Original Enquiry Form */}
            <div className="border border-[#E4E4E7] bg-white p-[24px] rounded-[24px] w-full">
              <div
                className="p-[20px] md:p-[23px] rounded-[10px] mb-[12px]"
                style={{
                  background: "rgb(199, 229, 247)"
                }}
              >
                <div className="flex justify-center gap-x-2 flex-nowrap items-center">
                  <FacilitesBooksSvg />
                  <p className="text-[#3F3F46] xl:text-xl lg:text-[18px] md:text-[18px] text-[14px] font-bold font-source-pro">
                    Get in Touch!
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* First Row: Name, Email, Phone */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="your_name"
                      value={payload?.your_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter Your Name"
                    />
                    {errorKeyName === "your_name" && (
                      <p className="text-red-500 text-sm mt-1">Please enter your name</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={payload?.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter Your Email"
                    />
                    {errorKeyName === "email" && (
                      <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Mobile Number *
                    </label>
                    <input
                      type="text"
                      name="mobile_number"
                      value={payload?.mobile_number}
                      maxLength="10"
                      onChange={(e) =>
                        /^[0-9]*$/.test(e.target.value) && handleChange(e)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter Mobile Number"
                    />
                    {errorKeyName === "mobile_number" && (
                      <p className="text-red-500 text-sm mt-1">Please enter a valid number</p>
                    )}
                  </div>
                </div>

                {/* Second Row: Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="write_up"
                    value={payload?.write_up}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Interactive Map Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1278876753586!2d77.3960429!3d28.5659222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef823d515f91%3A0xd4d4ace124409340!2sZen%20Health%20Services!5e0!3m2!1sen!2sin!4v1737958352844!5m2!1sen!2sin"
            // ... existing map props
            ></iframe>
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
    // avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Dr. Rohan Mehta",
    role: "Clinical Researcher",
    quote: "Kaivee Healthcare’s dedication to ethical research practices and data accuracy has been exceptional. Their team’s expertise and professionalism have significantly contributed to the success of our trials.",
    rating: { src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Star_icon_2.svg" }  // Star image URL for rating
  },
  {
    // avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Anita Sharma",
    role: "Pharma Partner",
    quote: "Partnering with Kaivee for our clinical studies has been a seamless experience. Their attention to detail, strict quality protocols, and efficient processes are truly commendable.",
    rating: { src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Star_icon_2.svg" }
  },
  {
    // avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Rahul Verma",
    role: "Study Participant:",
    quote: "As a participant in one of Kaivee’s clinical trials, I was impressed by the care and transparency throughout the process. I felt safe and well-informed at every stage.",
    rating: { src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Star_icon_2.svg" }
  },
  {
    // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Dr. Priya Nair",
    role: "Project Manager",
    quote: "Kaivee’s commitment to scientific integrity and patient safety sets them apart. Their clinical research team is both knowledgeable and responsive.",
    rating: { src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Star_icon_2.svg" }
  },

];


export default ClinicalResearchLayout;
