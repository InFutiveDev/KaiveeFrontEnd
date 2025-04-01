import Alternativebanner from "./cardiologist-banner";
// import AboutFireImage from "assets/images/about/fireworks 3.svg";
// import AboutUs from "./aboutus";

import OurVersion from "assets/images/about/vision.jpg";
import OurMission from "assets/images/about/mission.png";
import { AboutPattern } from "assets/images/SvgImage";
import img1 from "assets/images/Finalimg/ourValue/Compassion.webp";
import img2 from "assets/images/Finalimg/ourValue/Accountability.webp";
import img3 from "assets/images/Finalimg/ourValue/Executional Excellence.webp";
import img4 from "assets/images/Finalimg/ourValue/Innovation.webp";
import img5 from "assets/images/Finalimg/ourValue/Integrity.webp";

import { AboutTeamwork } from "assets/images/SvgImage";
import WhyChoose from "components/WhyChoose";
import img11 from "assets/images/whychooseus/1.png";
import img22 from "assets/images/whychooseus/2-png.png";
import img33 from "assets/images/whychooseus/icon-3.png";
import img44 from "assets/images/whychooseus/3-png.png";
import img55 from "assets/images/whychooseus/4-png.png";
import img66 from "assets/images/whychooseus/5-png.png";
import img77 from "assets/images/whychooseus/6-png.png";
import img88 from "assets/images/whychooseus/7-png.png";
import Image from "next/image";
import dynamic from "next/dynamic";
const InquiryForm = dynamic(() => import("components/inquiryForm"));

const DoctorOPDLayout = () => {
  return (
    <>
      {/* className="sliders banner_slider_wrap_facilities" */}
      <section>
        {/* className="web-view relative cstm-flexbox flexbox container" */}
        <div>
          <Alternativebanner  />
        </div>
        
      </section>

      <div className="container mx-auto px-4 lg:px-16 py-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#8DBD4D]">
          Consult a Cardiologist at Kaivee Healthcare
        </h1>
        <p className="mt-4 font-semibold text-2xl text-gray-800">
          Expert Care for a Healthy and Strong Heart
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <p className="text-gray-700">
            There is no place in your heart for inferior healthcare, which is why 
            Kaivee Healthcare provides top-tier cardiologists. Whether you're 
            experiencing chest discomfort, shortness of breath, or managing 
            chronic cardiovascular conditions, our specialists offer advanced 
            diagnostics and personalized treatment plans.
          </p>
          <p className="mt-4 text-gray-700">
          Kaivee Healthcare offers comprehensive cardiology services to help you prevent, diagnose, and treat heart conditions at an early stage, ensuring you live a longer, healthier life.
          </p>
          <p className="mt-4 text-gray-700">
          Our Cardiologists at Kaivee Healthcare collaborate with our Cardiac Surgeons, Interventional Cardiologists, and rehabilitation team members to help our patients at every stage of their heart health.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/high-blood-pressure-abstract-concept-illustration_335657-4603.jpg?updatedAt=1743499896367"
            alt="ENT Surgeon Consultation"
            width={500}
            height={250}
            className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* What Does a Cardiologist Do? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          What Does a Cardiologist Do?
        </h2>
        <p className="mt-4 text-gray-700">
          Cardiologists specialize in diagnosing, managing, and preventing heart 
          and blood vessel diseases. They handle hypertension, arrhythmias, 
          heart failure, and coronary artery disease. While they don't perform 
          surgery, they determine when surgical interventions or specialized 
          procedures are necessary.
        </p>
      </div>

      {/* Conditions Treated */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Conditions Our Cardiologists Treat
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "🔸 High Blood Pressure (Hypertension)", desc: "Managing persistent hypertension to prevent heart disease and stroke." },
            { title: "🔸 Coronary Artery Disease (CAD)", desc: "Detecting and treating narrowed arteries to prevent heart attacks." },
            { title: "🔸 Heart Rhythm Disturbances (Arrhythmias)", desc: "Treating abnormal heart rhythms with medication or procedures." },
            { title: "🔸 Heart Failure", desc: "Providing long-term management to improve heart function and quality of life." },
            { title: "🔸 Congenital Heart Disorders", desc: "Long-term care and treatments for congenital heart defects." },
            { title: "🔸 Hyperlipidemia (High Cholesterol)", desc: "Managing cholesterol levels to reduce cardiovascular risk." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnostic Services */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Diagnostic Services Offered
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "▶ Electrocardiogram (ECG)", desc: "Detects heart arrhythmias and past heart attacks." },
            { title: "▶ Echocardiography (Echo)", desc: "Ultrasound imaging to assess heart function and structure." },
            { title: "▶ Treadmill Test (TMT)", desc: "Evaluates heart function during exercise for CAD diagnosis." },
            { title: "▶ Holter Monitoring", desc: "Continuous 24-48 hour monitoring of heart rhythms." },
            { title: "▶ Cardiac Biomarker Testing", desc: "Lab tests to assess heart damage and risk factors." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Kaivee Healthcare */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Trust Kaivee Healthcare’s Cardiologists?
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "🟢 Proven Clinical Expertise", desc: "Highly experienced cardiologists providing advanced treatments." },
            { title: "🟢 Focus on Prevention", desc: "Early detection and lifestyle recommendations to prevent heart disease." },
            { title: "🟢 Advanced Diagnostics", desc: "State-of-the-art diagnostic tools for accurate assessments." },
            { title: "🟢 Comprehensive Care", desc: "Collaborative approach with specialists for holistic treatment." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to See a Cardiologist */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">
            When Should You See a Cardiologist?
          </h2>
          <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
            <li>Chest pain or discomfort</li>
            <li>Shortness of breath with minimal exertion</li>
            <li>Persistent fatigue or dizziness</li>
            <li>Irregular heartbeats (palpitations)</li>
            <li>Swelling in legs or abdomen</li>
            <li>Heart disease risk factors (diabetes, high blood pressure, etc.)</li>
          </ul>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <InquiryForm />
        </div>
      </div>

      <div className="bg-[#FAFAFA]">
        <WhyChoose data={data} />
      </div>
      <div className=" container ">
          <p className="font-semibold text-center">
           Kaivee Healthcare is clearly your best partner at Health & Checkups.

          </p>
        </div>
    </div>
  


 

       
     
    </>
  );
};

export default DoctorOPDLayout;

const data = [
  {
    id: 1,
    title: "NABL Accredited Labs",
    
    icon: <Image src={img33} alt="NABL Accredited Icon" />,
  },
  {
    id: 2,
    title: "Trusted by Leading Doctors & Hospitals",
    
    icon: <Image src={img22} alt="doctors Icon" />,
  },
  {
    id: 3,
    title: "Shortest Reporting Time",
  
    icon: <Image src={img55} alt="time Icon" />,
  },
  {
    id: 4,
    title: "Accurate Test Reports",
   
    icon: <Image src={img44} alt="report Icon" />,
  },
  {
    id: 5,
    title: "Satisfied Customers",
    
    icon: <Image src={img11} alt="customer Icon" />,
  },
  {
    id: 6,
    title: "Most Affordable Prices",
    
    icon: <Image src={img66} alt="NABL Accredited Icon" />,
  },
  {
    id: 7,
    title: "Painless Sample Collection",
    
    icon: <Image src={img77} alt="collection Icon" />,
  },
  {
    id: 8,
    title: "Scientific Orientation",
    
    icon: <Image src={img88} alt="scientific Icon" />,
  },
];



