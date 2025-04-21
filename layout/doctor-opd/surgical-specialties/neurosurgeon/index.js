import Alternativebanner from "./neurosurgeon-banner";
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
          Consult a Neurosurgeon at Kaivee Healthcare
        </h1>
        <h2 className="mt-2 text-2xl font-bold text-gray-800">
          Advanced Surgical Care for Brain, Spine, and Nerve Conditions
        </h2>
        <p className="text-gray-700 mt-1 max-w-2xl mx-auto">
          Our neurosurgeons specialize in treating complex neurological disorders 
          with precision, advanced technology, and compassionate care.
        </p>
      </div>

      {/* What Does a Neurosurgeon Do */}
      <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-6">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">
            What Does a Neurosurgeon Do?
          </h2>
          <p className="text-gray-700 mt-4">
            A Neurosurgeon is a specialist who diagnoses and treats disorders of 
            the brain, spine, and nervous system. They perform delicate surgeries 
            to restore function, reduce pain, and improve quality of life.
          </p>
          <p className="text-gray-700 mt-4">
          From Saving lives & brain surgeries to Spinal surgeries, Kaivee Healthcare is determined to provide solutions that improve function, reduce pain, and improve quality of life.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/neuroscience-doctor-holding-clipboard-showing-treatment-against-brain-disease-patient-with-eeg-headset-woman-sitting-neurological-scientific-laboratory-treating-nervous-system-dysfunctions_482257-16457.jpg?updatedAt=1743483434423"
            alt="Neurosurgeon Consultation"
            width={500}
            height={300}
            className="rounded-xl shadow-md w-[80%] max-w-[500px]"
          />
        </div>
      </div>

      {/* Conditions Treated */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          What Our Neurosurgeons Treat
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "🔹 Brain Tumours and Lesions",
              desc: "Surgical removal of benign and malignant brain tumours with precision.",
            },
            {
              title: "🔹 Spinal Cord Compression & Injuries",
              desc: "Decompression and stabilization of the spine for trauma, tumours, or degenerative conditions.",
            },
            {
              title: "🔹 Disc Herniation & Sciatica",
              desc: "Surgery to relieve nerve pressure from herniated discs, reducing pain and mobility issues.",
            },
            {
              title: "🔹 Aneurysms & Vascular Malformations",
              desc: "Microsurgical procedures to prevent strokes and hemorrhages.",
            },
            {
              title: "🔹 Congenital Nervous System Disorders",
              desc: "Surgical treatment of conditions like spina bifida and hydrocephalus.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Neurosurgical Procedures */}
      <div className="mt-12 p-6 rounded-xl shadow-md bg-[#D419580D]">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Neurosurgeon at Kaivee Healthcare & Associated Surgical Procedures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "▶ Craniotomy",
              desc: "Temporary removal of part of the skull to access and treat brain conditions.",
            },
            {
              title: "▶ Spinal Fusion & Stabilization",
              desc: "Surgical fusion of vertebrae to stabilize the spine and relieve chronic pain.",
            },
            {
              title: "▶ Endoscopic Neurosurgery",
              desc: "Minimally invasive surgery using a tiny camera to treat pituitary tumours and hydrocephalus.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Why Patients Choose Our Neurosurgeons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: "✅ Highly Specialized Expertise",
              desc: "Our neurosurgeons have years of experience handling complex neurological conditions.",
            },
            {
              title: "✅ Advanced Surgical Technology",
              desc: "We use intraoperative imaging, neuronavigation, and minimally invasive techniques for precision.",
            },
            {
              title: "✅ Complete Pre-Surgical Assessments",
              desc: "Thorough diagnostic imaging (MRI, CT scans) to create a tailored treatment plan.",
            },
            {
              title: "✅ Patient & Family Support",
              desc: "We offer educational guidance and emotional support throughout the surgical process.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to See a Neurosurgeon */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          When Should You See a Neurosurgeon?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            "Recurrent headaches or seizures not controlled by medications.",
            "Numbness, weakness, or paralysis affecting movement.",
            "Persistent back or neck pain with nerve complications (burning, tingling).",
            "Impaired balance or coordination due to spinal or brain conditions.",
            "Known brain tumours or vascular malformations.",
            "Moderate spinal trauma needing surgical stabilization.",
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-600">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How to Book an Appointment */}
      <div className="mt-12 flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-2/3">
          <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center lg:text-left">
            How to Book a Neurosurgeon Consultation?
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
            {[
              "1. Schedule an appointment by calling Kaivee Healthcare or booking online.",
              "2. Consultation with our specialist for diagnosis and treatment recommendations.",
              "3. Get a personalized treatment plan, including surgical or non-surgical options.",
            ].map((item, index) => (
              <div key={index} className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full">
    <InquiryForm />
  </div>
        </div>
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



