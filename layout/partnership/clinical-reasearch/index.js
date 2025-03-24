import React, { useEffect, useState } from "react";
import ClinicalResearchBanner from "./clinical-banner";
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
import { FaUsers, FaMicroscope, FaClipboardCheck, FaUserMd, FaShieldAlt } from "react-icons/fa";
import Image from "next/image";
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
    autoplay: true,
    autoplayspeed: 2000,
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
    inquiry_from: "kaivee Healthcare website",
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
          inquiry_from: "kaivee website",
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
          <h2 className="text-3xl font-semibold mb-8">Advancing Medical Innovation Through Strategic Partnerships</h2>
          <p className="lg:text-[18px] md:text-[18px] text-[14px] text-[#71717A]">
          We at Kaivee Healthcare want to be a part of this medical revolution and contribute by being involved with Clinical Research and Trials. This enables our partnership opportunities in this area to offer global market access to the healthcare solutions from pharmaceutical companies, biotechnology firms, research organizations, and academic institutions.     
               </p>
               <p className="lg:text-[18px] md:text-[18px] text-[14px] text-[#71717A]">
               Kaivee Healthcare's mission is to contribute to the development of new drugs, therapies, and medical devices by enabling high-quality clinical research and trials. All trials in which we take part are conducted ethically, safely, and in compliance with national and international regulatory standards.    
             </p>


          {/* <button className="bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors font-medium">
            Learn More About Our Research
          </button> */}
        </div>
      </section>


      {/* Key Stats */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "100+", label: "Clinical Studies" },
            { number: "22+", label: "Publications" },
            { number: "25+", label: "Clinical Trials" },
            { number: "4+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl font-semibold text-pink-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white mx-auto px-4 py-10 flex justify-center">
  <div className="max-w-6xl w-full">
    {/* Title Section */}
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold mb-3">
        Why Choose Kaivee Healthcare for Clinical Research & Trials?
      </h1>
      <p className="text-2xl">
        Advancing medical research with integrity, safety, and innovation.
      </p>
    </div>

    {/* Content Section */}
    <div className="flex flex-col lg:flex-row items-center lg:gap-16 gap-8">
      
      {/* Left: Text Content */}
      <div className="flex-1">
        <ul className="space-y-6 text-lg text-gray-700">
          <li className="flex items-start gap-3">
            <FaUsers className="text-primary text-3xl" />
            <div>
              <h3 className="font-semibold text-xl">Diverse Patient Population Access</h3>
              <p className="mt-1">
                Our wide network of diagnostic centers, outpatient services, and home healthcare facilities
                ensures access to a diverse patient base, facilitating seamless clinical trial recruitment.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <FaMicroscope className="text-primary text-3xl" />
            <div>
              <h3 className="font-semibold text-xl">State-of-the-Art Research Facilities</h3>
              <p className="mt-1">
                Equipped with cutting-edge laboratories, advanced diagnostic tools, and a robust EHR system,
                we support efficient data collection and research studies.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <FaClipboardCheck className="text-primary text-3xl" />
            <div>
              <h3 className="font-semibold text-xl">Adherence to Regulatory Standards</h3>
              <p className="mt-1">
                We strictly follow GCP guidelines and comply with both national and international regulatory requirements,
                ensuring ethical and reliable clinical trials.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <FaUserMd className="text-primary text-3xl" />
            <div>
              <h3 className="font-semibold text-xl">Expert Clinical Research Team</h3>
              <p className="mt-1">
                Our experienced team of investigators, clinical coordinators, and data managers collaborates to ensure
                the success and efficiency of each study.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <FaShieldAlt className="text-primary text-3xl" />
            <div>
              <h3 className="font-semibold text-xl">Commitment to Safety & Ethics</h3>
              <p className="mt-1">
                Patient safety and informed consent are our top priorities. Every trial protocol undergoes
                rigorous ethical review to uphold patient rights and research integrity.
              </p>
            </div>
          </li>
        </ul>
      </div>

       {/* Right: Two Images in Stack */}
       <div className="flex-1 flex flex-col items-center gap-6">
        {/* First Image (New Image) */}
        <Image
          src="https://ik.imagekit.io/InFutiveTechnology/kaivee/gradient-epidemiology-illustration_52683-98615%20(1).jpg?updatedAt=1742818147970"
          alt="Medical Researchers Analyzing Samples"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />

        {/* Second Image (Existing Image) */}
        <Image
          src="https://ik.imagekit.io/InFutiveTechnology/kaivee/scientists-working-modern-laboratory_1262-19876.jpg?updatedAt=1742811924338"
          alt="Clinical Research at Kaivee Healthcare"
          width={500}
          height={350}
          className="rounded-lg shadow-lg"
        />
      </div>

    </div>
  </div>
</section>


      {/* Content Section Above Research Focus Areas */}
      <section className="py-2 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">What Type of Clinical Research Partners does Kaivee Healthcare Embrace?</h2>
          <div className="container mx-auto px-4 py-2">
      

      {/* Partnership List */}
      <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
        <li>
        Pharmaceutical and biopharmaceutical companies that are conducting investigational new drug research.
        </li>
        <li>
        Companies experimenting with new technologies in the healthcare sector.
        </li>
        <li>
        Sites searching for Contract Research Organizations (CROs).
        </li>
        <li>
        Data providers may include: Academic institutions conducting clinical studies.
        </li>
        <li>
        Health units/organizations working on initiatives for prevention and treatment of diseases
        </li>
      </ul>
    </div>

          
        </div>
      </section>


      {/* Research Focus Areas */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Research Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
          {[
  {
    title: "Medical Device Studies",
    content:
      "Test new technology before putting it on market. Kaivee Healthcare tests new technologies in a safe and effective environment with medical device companies.",
    src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/still-life-ophthalmologist-s-office_23-2150917641.jpg?updatedAt=1742814297358",
  },
  {
    title: "Chronic Diseases Clinical Trial(s)",
    content:
      "We operate in various specialty areas, including cardiology, endocrinology, oncology, neurology, and infectious disease, and have extensive experience in the conduct of multicentre clinical research in these areas.",
    src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/male-doctor-examining-patient_1170-2148.jpg?updatedAt=1742815147139", // Add a relevant image URL
  },
  {
    title: "Epidemiological Research",
    content:
      "We advance research that helps describe how disease is distributed and what causes disease in a population, contributing to public health plans.",
    src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/scientist-ppe-suit-taking-notes-clipboard-working-virus-treatment_482257-21578.jpg?updatedAt=1742815505790", // Add a relevant image URL
  },
].map((area, index) => (
  <div
    key={index}
    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
  >
    {/* Image instead of icon */}
    <img
      src={area.src}
      alt={area.title}
      className="w-30 h-16 mb-4 object-cover rounded-full"
    />

    {/* Title */}
    <h3 className="text-xl font-semibold mb-3">{area.title}</h3>

    {/* Description */}
    <p className="text-[14px] text-gray-600">{area.content}</p>
  </div>
))}

          </div>
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Commitment to Quality and Compliance</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {[
              { step: "1", title: "Ethical Considerations", desc: "Informed consent, confidentiality, and protection of rights." },
              { step: "2", title: "Scientific Integrity", desc: "Rigorous standards governing data accuracy, protocol adherence, and outcome reporting" },
              { step: "3", title: "Regulatory Compliance", desc: " Comprehensive compliance with ICH-GCP, DCGI (India) and worldwide regulatory guidelines." },
              { step: "4", title: "Patient-Centric Approach", desc: "Putting participant well-being, safety, and engagement at the core of the trial" },
            ].map((step, index) => (
              <div key={index} className="relative flex-1 text-center p-6 bg-blue-50 rounded-xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-[14px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Kaivee Healthcare: To partner with for clinical research advancement          </h2>
          <p className="lg:text-[18px] md:text-[18px] text-[14px] text-[#71717A]">
          Partner with ethical, efficient and effective clinical trials through Kaivee Healthcare. So, you can play a vital role in medical improvement on a world scale.               </p>
    
        
        </div>
    
     

      {/* Modern Contact Form */}
      <section className="py-8 bg-white">
      
  <div className="container mx-auto px-4">
    {/* Grid Layout for Map and Form */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      
      {/* Left Side - Map */}
      
      <div className="rounded-xl overflow-hidden shadow-xl">
      <h2 className="text-3xl font-semibold  px-2 mb-6 ">Feel free to Reach us</h2>
        <iframe
          className="w-full h-[400px] rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1278876753586!2d77.3960429!3d28.5659222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef823d515f91%3A0xd4d4ace124409340!2sZen%20Health%20Services!5e0!3m2!1sen!2sin!4v1737958352844!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>

      {/* Right Side - Form */}
      <div className=" p-6 rounded-xl ">
       

        <div className="border border-[#E4E4E7] bg-white p-6 rounded-xl">
          <div className="p-4 rounded-lg mb-4" style={{ background: "rgb(199, 229, 247)" }}>
            <div className="flex justify-center gap-x-2 items-center">
              <FacilitesBooksSvg />
              <p className="text-[#3F3F46] font-semibold text-lg">Get in Touch!</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* First Row: Name, Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[16px] font-medium text-gray-700">Your Name *</label>
                <input
                  type="text"
                  name="your_name"
                  value={payload?.your_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Your Name"
                />
                {errorKeyName === "your_name" && (
                  <p className="text-red-500 text-[16px] mt-1">Please enter your name</p>
                )}
              </div>

              <div>
                <label className="block text-[16px] font-medium text-gray-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={payload?.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Your Email"
                />
                {errorKeyName === "email" && (
                  <p className="text-red-500 text-[16px] mt-1">Please enter a valid email</p>
                )}
              </div>
            </div>

            {/* Second Row: Phone & Message */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[16px] font-medium text-gray-700">Mobile Number *</label>
                <input
                  type="text"
                  name="mobile_number"
                  value={payload?.mobile_number}
                  maxLength="10"
                  onChange={(e) =>
                    /^[0-9]*$/.test(e.target.value) && handleChange(e)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Mobile Number"
                />
                {errorKeyName === "mobile_number" && (
                  <p className="text-red-500 text-[16px] mt-1">Please enter a valid number</p>
                )}
              </div>

              <div>
                <label className="block text-[16px] font-medium text-gray-700">Message</label>
                <textarea
                  name="write_up"
                  value={payload?.write_up}
                  onChange={handleChange}
                  
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors font-medium"
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      
    </>
  );
};



export default ClinicalResearchLayout;
