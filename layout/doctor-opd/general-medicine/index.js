import Alternativebanner from "./genral-medicine";
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
// import Clint1 from "assets/images/Finalimg/Leadership/Dr. Aakaar Kapoor.webp";
// import Clint2 from "assets/images/Finalimg/Leadership/Dr. Ravi Kapoor.webp";
// import Clint3 from "assets/images/Finalimg/Leadership/Dr. Sunita Kapoor.webp";
// import Clint4 from "assets/images/Finalimg/Leadership/Dr. Apurva Kapoor.webp";
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

      <div className="container mx-auto px-4 py-12">
  {/* Section Header */}
  <div className="text-center">
    <h2 className="text-3xl font-bold text-[#8DBD4D]">General Medicine & Specialties at Kaivee Healthcare</h2>
    <h3 className="text-2xl font-semibold text-gray-800 mt-3 ">Comprehensive Medical Support for Every Stage of Life</h3>
  </div>

  {/* Introduction Section */}
  <div className="mt-8 flex flex-col lg:flex-row items-center gap-8">
    <div className="lg:w-1/2">
      <p className="text-gray-700 leading-relaxed">
        The General Medicine & Specialties department forms the backbone of Kaivee Healthcare's clinical services. Whether diagnosing common ailments or managing chronic diseases, our physicians provide evidence-based care that emphasizes accuracy, early intervention, and patient comfort.
      </p>
      <p className="text-gray-700 mt-4">
      Kaivee Healthcare's General Medicine isn't specific to demographic or disease type. Our team sees a wide range of clinical presentations, and works across specialties to ensure that care delivery is seamless. Be it a patient that walked in with a fever or came for help with chronic fatigue, our systematic diagnostic process means nothing is missed out.      </p>
    </div>
    <div className="lg:w-1/2 flex justify-center">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/medical-prescription-concept-illustration_114360-29561.webp?updatedAt=1743159918839"
        alt="General Medicine"
        width={500}
        height={300}
        className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>

  {/* Key Features Section */}
  <div className="mt-12">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">A Big-Feature Department with Specific Attention</h3>
    <p className="text-gray-700 text-center mt-3">
      Kaivee Healthcare's General Medicine isn't limited to a single demographic or disease type. Our team manages diverse clinical cases and collaborates across specialties for seamless care delivery.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {/* Feature 1 */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h4 className="text-xl font-semibold">Preventive Healthcare</h4>
        <p className="text-gray-700 mt-2">
          Lifestyle counseling, wellness checks, and risk profiling to keep you healthier, longer.
        </p>
      </div>
      {/* Feature 2 */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h4 className="text-xl font-semibold">Comprehensive Diagnosis</h4>
        <p className="text-gray-700 mt-2">
          Our systematic diagnostic process ensures that no underlying condition is overlooked.
        </p>
      </div>
      {/* Feature 3 */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h4 className="text-xl font-semibold">Integrated Care Approach</h4>
        <p className="text-gray-700 mt-2">
          Seamless coordination with specialists for advanced medical care when needed.
        </p>
      </div>
    </div>
  </div>

  {/* Conditions Managed */}
  <div className="mt-12">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">Conditions Commonly Managed</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {[
        { title: "Respiratory + Viral Infections", desc: "Cough, cold, flu, sinusitis, and chest infections are diagnosed and managed efficiently." },
        { title: "Digestive Distress & Food Intolerances", desc: "Acidity, indigestion, and IBS symptoms treated with food-friendly interventions." },
        { title: "Headaches and Body Aches", desc: "We analyze patterns to detect underlying causes and prevent chronic issues." },
        { title: "Allergies & Environmental Triggers", desc: "Diagnosing and managing allergies from food, dust, and skin sensitivities." },
        { title: "Fever and General Weakness", desc: "A systemic approach to fever management and fatigue assessment." },
        { title: "✨ Lifestyle Monitoring & Screening", desc: "Routine health checks including BP, sugar levels, BMI, and heart health markers." }
      ].map((item, index) => (
        <div key={index} className="bg-[#8DBD4D0D] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <p className="text-gray-700 mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Sub-Specialties Section */}
  <div className="mt-12">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">General Medicine Sub-Specialties</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {[
        { title: "General Practitioners", desc: "Specialists in internal medicine, managing chronic conditions and preventive screenings." },
        { title: "Pediatricians", desc: "Care for infants, children, and adolescents, including immunizations and growth tracking." },
        { title: "Geriatricians", desc: "Experts in elder care, mobility support, and age-related health conditions." }
      ].map((item, index) => (
        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <p className="text-gray-700 mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Team Operations */}
  <div className="mt-12">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">How Our Team Operates</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {[
        { title: "▶ Integrated Diagnosis", desc: "Decisions are based on lifestyle, medical history, family risk, and test results." },
        { title: "▶ Clear Care Pathways", desc: "Patients are treated in-house or referred to specialists when necessary." },
        { title: "▶ Preventive Health Focus", desc: "Early identification of health risks and proactive treatment plans." },
        { title: "▶ Easy Access & Follow-Up", desc: "Stay in touch with your physician via in-person or digital consultations." }
      ].map((item, index) => (
        <div key={index} className="bg-[#D419580D] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <p className="text-gray-700 mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>


   {/* IMAGE SECTION */}
   <div className="flex flex-wrap justify-center gap-6 mt-12">
    <Image
      src="https://ik.imagekit.io/InFutiveTechnology/kaivee/portrait-female-pediatrician-work_23-2151686700.jpg?updatedAt=1742981219205"
      alt="Doctor Consultation"
      width={500}
      height={300}
      className="rounded-xl shadow-md w-[80%] max-w-[500px] transition-transform duration-500 hover:scale-105"
    />
    <Image
      src="https://ik.imagekit.io/InFutiveTechnology/kaivee/male-doctor-examining-patient_1170-2148.jpg?updatedAt=1742815147139"
      alt="Doctor Consultation"
      width={500}
      height={300}
      className="rounded-xl shadow-md w-[80%] max-w-[500px] transition-transform duration-500 hover:scale-105"
    />
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



