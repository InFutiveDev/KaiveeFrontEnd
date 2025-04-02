import Alternativebanner from "./pulmonologist-banner";
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
        <h1 className="text-3xl font-bold text-[#2D85C9]">
          Consult a Pulmonologist at Kaivee Healthcare
        </h1>
        <p className="mt-4 font-semibold text-2xl text-gray-800">
          Expert Respiratory Care for Breathing Easy and Living Well
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <p className="text-gray-700">
            Healthy lungs are essential for life, but respiratory disorders can significantly affect your quality of life. The Pulmonologists at Kaivee Healthcare specialize in diagnosing and managing lung and respiratory system diseases. Whether you have a chronic cough, asthma, or a complex lung condition, our specialists provide care tailored to help you achieve and maintain healthy breathing.
          </p>
          <p className="mt-4 text-gray-700">
            Our mission is to empower lung health through precision diagnostics, state-of-the-art treatment options, and long-term disease management so that patients can breathe better and live better.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/people-sitting-hospital-corridor-waiting-doctor-patient-clinic-visit-flat-vector-illustration-medicine-healthcare_74855-8507.jpg?updatedAt=1743569781986"
            alt="Pulmonologist Consultation"
            width={500}
            height={250}
            className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* What is a Pulmonologist? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          What Is a Pulmonologist, and What Do They Treat?
        </h2>
        <p className="mt-4 text-gray-700">
          Pulmonologists specialize in treating diseases of the lungs and respiratory system. They manage both acute and chronic lung conditions and work with other specialists when respiratory issues are linked to systemic illnesses.
        </p>
        <p className="mt-4 text-gray-700">
          At Kaivee Healthcare, our Pulmonologists use advanced diagnostic tools, pulmonary function tests (PFTs), imaging techniques, and biomarkers to assess and treat respiratory conditions with evidence-based methods.
        </p>
      </div>

      {/* Conditions Treated */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Respiratory Conditions Treated by Our Pulmonologists
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "🔸 Chronic Obstructive Pulmonary Disease (COPD)", desc: "Treatment for chronic bronchitis and emphysema to improve breathing and prevent complications." },
            { title: "🔸 Asthma", desc: "Holistic asthma management, including trigger identification, medication, and long-term control." },
            { title: "🔸 Lung Infections & Pneumonia", desc: "Diagnosis and treatment of bacterial, viral, and fungal lung infections, including hospital-acquired pneumonia." },
            { title: "🔸 Tuberculosis (TB)", desc: "Screening and treatment of active and latent TB infections to prevent transmission and ensure complete recovery." },
            { title: "🔸 Interstitial Lung Disease (ILD)", desc: "Management of lung diseases causing tissue scarring and inflammation to improve lung function." },
            { title: "🔸 Lung Cancer Treatment", desc: "Detection, biopsy, and coordination with oncologists for comprehensive lung cancer management." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#2D85C9] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pulmonology Tests & Procedures */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Laboratory Tests & Pulmonology Procedures
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "▶ Pulmonary Function Tests (PFTs)", desc: "Spirometry and lung volume tests to assess lung capacity and airflow." },
            { title: "▶ Bronchoscopy", desc: "A procedure using a thin tube to examine the airways and collect tissue or mucus samples." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#2D85C9] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Kaivee Healthcare Pulmonologists? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Kaivee Healthcare Pulmonologists?
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "🟢 Specialist in Complex Lung Diseases", desc: "Our Pulmonologists have expertise in both common and rare lung conditions, ensuring comprehensive respiratory care." },
            { title: "🟢 Advanced Diagnosis & Treatment Facilities", desc: "We use state-of-the-art technology for accurate diagnosis and effective treatment." },
            { title: "🟢 Patient-Centered & Preventative Care", desc: "We emphasize patient education, smoking cessation programs, and allergen avoidance to prevent lung diseases." },
            { title: "🟢 Collaborative Multispecialty Care", desc: "For complex cases, we work with cardiologists, oncologists, and rehabilitation specialists for integrated care." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#2D85C9] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Happens in a Pulmonary Consultation */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">
          What to Expect During a Pulmonary Consultation
        </h2>
        <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
          <li>➡️ A thorough review of your symptoms, medical history, and environmental factors affecting lung health.</li>
          <li>➡️ Specific diagnostic tests such as PFTs, imaging studies, or bronchoscopy to confirm the diagnosis.</li>
          <li>➡️ Personalized treatment plans including medications, inhalers, oxygen therapy, or pulmonary rehabilitation programs.</li>
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



