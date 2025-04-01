import Alternativebanner from "./cardiac-surgeon-banner";
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

      <div className="container mx-auto px-4 py-8">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#8DBD4D]">
          Consult a Cardiac Surgeon at Kaivee Healthcare
        </h1>
        <h2 className="mt-2 text-2xl font-bold text-gray-800">
          Surgical Expertise for Complex Heart Conditions
        </h2>
        <p className="text-gray-700 mt-1 max-w-2xl mx-auto">
          The heart, the engine of the human body, requires expert surgical intervention 
          for severe conditions. Our highly qualified cardiac surgeons at Kaivee Healthcare 
          perform complex procedures to restore cardiovascular health and enhance quality of life.
        </p>
      </div>

      {/* Role of a Cardiac Surgeon */}
      <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-6">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Role of a Cardiac Surgeon
          </h2>
          <p className="text-gray-700 mt-4">
            A cardiac surgeon specializes in heart and major blood vessel surgeries. They perform 
            life-saving interventions such as bypass surgeries and valve replacements to treat 
            coronary artery disease, congenital heart defects, and other cardiac conditions.
          </p>
          <p className="text-gray-700 mt-4">
            At Kaivee Healthcare, our cardiac surgeons work alongside a multidisciplinary team, 
            ensuring seamless care from diagnosis through recovery. Their expertise in complex 
            heart procedures has helped countless patients lead healthier lives.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/person-holding-anatomic-heart-model-educational-purpose_23-2149894496.jpg?updatedAt=1743484887616"
            alt="Cardiac Surgeon Consultation"
            width={500}
            height={300}
            className="rounded-xl shadow-md w-[80%] max-w-[500px]"
          />
        </div>
      </div>

      {/* Heart Surgery Done at Kaivee Healthcare */}
      <div className="mt-12 p-6 rounded-xl shadow-md bg-[#D419580D]">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Heart Surgery Done at Kaivee Healthcare
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "▶ Coronary Artery Bypass Grafting (CABG)",
              desc: "Bypass surgery to restore blood flow in severe coronary artery disease cases.",
            },
            {
              title: "▶ Repair and Replacement of Heart Valves",
              desc: "Surgical interventions to restore normal valve function using prosthetic or biological replacements.",
            },
            {
              title: "▶ Aortic Aneurysm Repair",
              desc: "Open and endovascular techniques to prevent aneurysm rupture and related complications.",
            },
            {
              title: "▶ Invasive Cardiac Surgery",
              desc: "Advanced procedures with minimal incisions, reducing recovery time and surgical trauma.",
            },
            {
              title: "▶ Surgery for Congenital Heart Defects",
              desc: "Specialized treatment for heart anomalies in pediatric and adult patients.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Kaivee Healthcare's Cardiac Surgeons */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Why Trust Kaivee Healthcare’s Cardiac Surgeons?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: "🟢 Proficient in Special Procedures",
              desc: "Expertise in high-risk and complex heart surgeries for patients with underlying health conditions.",
            },
            {
              title: "🟢 Next-Level Surgical Technologies",
              desc: "Cutting-edge tools like 3D imaging, robotic-assisted surgery, and intraoperative monitoring.",
            },
            {
              title: "🟢 A Multidisciplinary Cardiac Team",
              desc: "Collaboration between surgeons, cardiologists, anesthetists, and critical care specialists.",
            },
            {
              title: "🟢 Focus on Patient Safety & Recovery",
              desc: "Personalized surgical plans with rehabilitation guidance for faster recovery.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to See a Cardiac Surgeon */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          When Should You See a Cardiac Surgeon?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            "Advanced coronary artery disease diagnosis.",
            "Symptoms of valve disease such as breathlessness, chest pain, or fainting.",
            "Congenital heart defect requiring surgical intervention.",
            "Presence of an aortic aneurysm needing urgent medical attention.",
            "Referred for surgical evaluation after angiogram, echocardiogram, or MRI.",
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-600">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How to Prepare for Your Appointment */}
      <div className="mt-12 flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-1/2">
          <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center lg:text-left">
            How to Prepare for Your Appointment
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
            {[
              {
                title: "➡️ Diagnostic Evaluation",
                desc: "Comprehensive analysis of imaging tests, lab reports, and medical history.",
              },
              {
                title: "➡️ Exploring Surgical Options",
                desc: "A transparent overview of recommended procedures, risks, and recovery timelines.",
              },
              {
                title: "➡️ Pre-Operative Preparations",
                desc: "Health screenings, lifestyle guidance, and medication adjustments before surgery.",
              },
            ].map((item, index) => (
              <div key={index} className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <InquiryForm />
        </div>
      </div>

      {/* Closing Statement */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Your Heart Is in Expert Hands
        </h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          Kaivee Healthcare is committed to delivering world-class cardiac care with a patient-first approach.
        </p>
      </div>
    </div>
      <div className="bg-[#FAFAFA]">
        <WhyChoose data={data} />
      </div>
      
        



      

        <div className=" container pb-[30px]">
          <p className="font-semibold text-center">
           Kaivee Healthcare is clearly your best partner at Health & Checkups.

          </p>
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



