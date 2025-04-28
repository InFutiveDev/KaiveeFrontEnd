import Alternativebanner from "./super-specialties";
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

      {/* <AboutUs /> */}
      <div className="container mx-auto px-4 py-12">
  {/* Hero Section */}
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-[#8DBD4D]">Super Specialties at Kaivee Healthcare</h2>
    <p className="text-gray-800 font-semibold mt-3 text-2xl">
      Advanced Medical Expertise for Complex Health Conditions
    </p>
  </div>

  {/* Introduction */}
  <div className="mt-8 flex flex-col lg:flex-row items-center gap-8">
    <div className="lg:w-1/2">
      <p className="text-gray-700 leading-relaxed">
        When medical conditions transcend normal diagnosis and treatment, specialized attention is required. Our super-specialists provide in-depth assessment, advanced diagnostics, and expert therapy for complex illnesses that demand focused clinical expertise.
      </p>
      <p className="text-gray-700 mt-4">
        From cardiovascular diseases to neurological disorders, our multidisciplinary teams ensure precision, efficiency, and coordinated care for complex medical cases.
      </p>
    </div>
    <div className="lg:w-1/2 flex justify-center">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/set-doctor-characters_23-2147794810%20(1)%20(1).jpg?updatedAt=1743161236405"
        alt="Super Specialties Team"
        width={500}
        height={300}
        className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>

  

  {/* Super Specialties Disciplines */}
  <div className="mt-12">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">Super Specialty Departments</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        { title: "Cardiology", desc: "Advanced heart care including diagnostics, interventional procedures, and post-cardiac surgery management." },
        { title: "Neurology", desc: "Diagnosis and treatment for stroke, epilepsy, migraines, and neurodegenerative disorders." },
        { title: "Nephrology", desc: "Comprehensive kidney care including dialysis and transplantation follow-up." },
        { title: "Endocrinology", desc: "Management of diabetes, thyroid dysfunction, and hormonal disorders." },
        { title: "Hepatology", desc: "Liver disease treatment, from hepatitis to cirrhosis and metabolic liver disorders." },
        { title: "Rheumatology", desc: "Immunological and joint disorder treatment including arthritis, lupus, and scleroderma." }
      ].map((discipline, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h4 className="font-semibold text-[#D41958] text-lg">{discipline.title}</h4>
          <p className="text-gray-600 mt-2">{discipline.desc}</p>
        </div>
      ))}
    </div>
  </div>
  {/* Image Section */}
     <div className="flex flex-wrap justify-center gap-6 mt-12">
      {[
        { src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/medium-shot-doctor-nurse-looking-radiography_23-2149310018.jpg?updatedAt=1743161642727", alt: "Surgical Procedure" },
        { src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/anatomy-drawing-vintage-style_23-2151782896.jpg?updatedAt=1743162074656", alt: "Surgical Team" }
      ].map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={500}
          height={300}
          className="rounded-xl shadow-md w-[80%] max-w-[500px] transition-transform duration-500 hover:scale-105"
        />
      ))}
    </div>

  {/* Workflow in Super Specialties */}
  <div className="mt-12 p-6 bg-[#D419580D] rounded-xl shadow-md border border-blue-100">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">Our Approach to Complex Conditions</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        { title: "📋 Case Evaluation & History", desc: "Detailed medical history and symptom tracking form the foundation of treatment." },
        { title: "🔬 Diagnostic Testing & Imaging", desc: "ECG, EEG, MRI, CT scans, hormone assays, and more for precise diagnosis." },
        { title: "🧠 Multidisciplinary Consultations", desc: "Super-specialists collaborate with dietitians, physiotherapists, psychologists, and surgeons." },
        { title: "📈 Continuous Monitoring & Adaptation", desc: "Treatment is adjusted based on patient response and new diagnostic insights." }
      ].map((step, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h4 className="font-semibold text-lg">{step.title}</h4>
          <p className="text-gray-600 mt-2">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Why Choose Kaivee Healthcare */}
  <div className="mt-12 p-6 bg-[#8DBD4D0D] rounded-xl shadow-md border border-green-300">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">Why Kaivee Healthcare is a Trusted Super Specialty Center</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        { title: "🩺 Dedicated Expertise", desc: "Our specialists focus solely on their field, honing precision and in-depth knowledge." },
        { title: "📑 Tailored Treatment Plans", desc: "Personalized plans based on patient needs, not generic protocols." },
        { title: "💡 Algorithm-Focused Precision", desc: "We utilize advanced tools for early diagnosis and intelligent treatment." },
        { title: "📚 Patient Education", desc: "We ensure patients understand their condition and treatment options." },
        { title: "🏠 Support Beyond the Clinic", desc: "Post-discharge follow-ups, medication tracking, and digital consultations for chronic disease management." }
      ].map((reason, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h4 className="font-semibold text-lg">{reason.title}</h4>
          <p className="text-gray-600 mt-2">{reason.desc}</p>
        </div>
      ))}
    </div>
  </div>

  
  <div className="mt-8 flex flex-col lg:flex-row items-center gap-8">
  {/* Left Section */}
  <div className="lg:w-2/3 flex flex-col items-center">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">
      Specialized Treatment for All Complex Conditions
    </h3>
    <p className="text-gray-700 mt-4 text-center">
      For conditions that require depth over breadth, Kaivee Healthcare's Super Specialties Department ensures highly focused, collaborative, and compassionate care that prioritizes your long-term health and recovery.
    </p>
    <Image
      src="https://ik.imagekit.io/InFutiveTechnology/kaivee/healthcare-concept-clinic_23-2151117899.jpg?updatedAt=1745836798075"
      alt="Doctor Consultation"
      width={500}
      height={300}
      className="rounded-xl shadow-md w-[80%] max-w-[500px] transition-transform duration-500 hover:scale-105 mt-4"
    />
  </div>

  {/* Right Section */}
  <div className="lg:w-1/3 w-full  justify-end">
    <InquiryForm />
  </div>
</div>
  <div className="bg-[#FAFAFA]">
        <WhyChoose data={data} />
      </div>
      
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



