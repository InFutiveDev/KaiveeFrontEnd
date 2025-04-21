import Alternativebanner from "./neurologist-banner";
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
          Consult a Neurologist at Kaivee Healthcare
        </h1>
        <p className="mt-4 font-semibold text-2xl text-gray-800">
          Specialized Diagnosis and Treatment for Brain, Spine, and Nerve Disorders
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <p className="text-gray-700">
            Neurological disorders can significantly impact daily life, affecting memory, 
            movement, cognition, and behavior. Whether you're experiencing chronic conditions 
            like migraines or new, unexplained symptoms such as numbness, our expert neurologists 
            provide accurate diagnoses and personalized treatment plans.
          </p>
          <p className="mt-4 text-gray-700">
            We use advanced neurodiagnostic tools and compassionate care to help you 
            manage complex neurological conditions and improve your quality of life.
          </p>
          <p className="mt-4 text-gray-700">
          Our Neurologists guide you towards understanding what could possibly be the root cause of the symptoms using advanced imaging, electrophysiological tests, and clinical evaluations, followed by customized treatment plans at Kaivee Healthcare.
        </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/neurologist-concept-doctor-examine-human-brain-idea-doctor-caring-about-patient-health-medical-mri-diagnosis-consultation-vector-illustration-cartoon-style_613284-2421.jpg?updatedAt=1743501084687"
            alt="Neurology Consultation"
            width={500}
            height={250}
            className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* What is a Neurologist? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">What is a Neurologist?</h2>
        <p className="mt-4 text-gray-700">
          Neurologists specialize in diagnosing and treating disorders of the 
          brain, spinal cord, peripheral nerves, and muscles. While they do not 
          perform surgery, they play a crucial role in identifying conditions 
          that may require surgical intervention.
        </p>
      </div>

      {/* Conditions Treated */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Conditions Our Neurologists Treat</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "🔸 Stroke and TIA", desc: "Comprehensive stroke recovery and risk prevention strategies." },
            { title: "🔸 Epilepsy and Seizures", desc: "Personalized medication and lifestyle recommendations." },
            { title: "🔸 Parkinson’s & Movement Disorders", desc: "Therapies for tremors, stiffness, and muscle control issues." },
            { title: "🔸 Multiple Sclerosis (MS)", desc: "Long-term autoimmune CNS disorder management." },
            { title: "🔸 Chronic Headaches & Migraines", desc: "Tailored treatments and preventive strategies." },
            { title: "🔸 Neuropathy & Nerve Disorders", desc: "Diagnosis and treatment for nerve pain and damage." },
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
        <h2 className="text-2xl font-semibold text-gray-800">Diagnostic Services We Offer</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "▶ Electroencephalogram (EEG)", desc: "Detects abnormal brain activity for epilepsy evaluation." },
            { title: "▶ Nerve Conduction Studies (NCS) & EMG", desc: "Tests nerve and muscle function for neuromuscular disorders." },
            { title: "▶ MRI & CT Brain Imaging", desc: "Reveals tumors, strokes, MS, and brain abnormalities." },
            { title: "▶ Cognitive Function Testing", desc: "Assesses memory, reasoning, and cognitive abilities." },
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
        <h2 className="text-2xl font-semibold text-gray-800">Why Trust Kaivee Healthcare’s Neurologists?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "🟢 Expertise in Neurological Diagnoses", desc: "Specialists in evaluating and managing complex disorders." },
            { title: "🟢 Advanced Testing & Imaging", desc: "State-of-the-art diagnostic technology for precise results." },
            { title: "🟢 Personalized Treatment Plans", desc: "Tailored therapies for every patient’s condition." },
            { title: "🟢 Holistic Patient Support", desc: "Comprehensive care including emotional and rehabilitative support." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to See a Neurologist */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800">When Should You See a Neurologist?</h2>
          <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
            <li>Frequent or severe headaches/migraines</li>
            <li>Fainting spells, dizziness, or blackouts</li>
            <li>Muscle weakness, tremors, or movement issues</li>
            <li>Numbness, tingling, or loss of sensation</li>
            <li>Memory loss, confusion, or behavioral changes</li>
          </ul>
        </div>
       
          {/* Inquiry Form Placeholder */}
          <div className="lg:w-1/2 flex justify-center">
          <div className="w-full">
    <InquiryForm />
  </div>
        </div>
     
      </div>
      <div className="bg-[#FAFAFA]">
        <WhyChoose data={data} />
      </div>


 

        <div className=" container">
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



