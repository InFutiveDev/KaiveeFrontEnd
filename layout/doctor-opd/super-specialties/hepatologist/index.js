import Alternativebanner from "./hepatologist-banner";
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
          Consult a Hepatologist at Kaivee Healthcare
        </h1>
        <p className="mt-4 font-semibold text-2xl text-gray-800">
          Expert Liver and Digestive Health Care for a Better Tomorrow
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <p className="text-gray-700">
            The liver is one of the body’s most vital organs, filtering toxins, processing nutrients, and regulating metabolism. 
            Liver dysfunction can lead to multisystem complications. At Kaivee Healthcare, our Hepatologists specialize in managing 
            diseases of the liver, gallbladder, bile ducts, and pancreas.  
          </p>
          <p className="mt-4 text-gray-700">
            From fatty liver disease to hepatitis and cirrhosis, our specialists guide patients toward better liver health with 
            early identification, diagnosis, and intervention.
          </p>
          <p className="mt-4 text-gray-700">
          Hepatologists at Kaivee Healthcare use our clinical expertise and compassionate nature to help patients with liver disease at every step of the way, from early intervention to advanced therapy.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/hepatologist-concept-doctor-make-liver-examination-hepatectomy-idea-medical-treatment-embolization-therapy-cholescintigraphy-isolated-vector-illustration_613284-2705.jpg?updatedAt=1743503989375"
            alt="Hepatology Consultation"
            width={500}
            height={250}
            className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* What is a Hepatologist? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">What is a Hepatologist and What Do They Do?</h2>
        <p className="mt-4 text-gray-700">
          A Hepatologist is a specialist who diagnoses and treats liver, gallbladder, bile duct, and pancreatic disorders. 
          They manage complex liver diseases that require expert intervention.
        </p>
        <p className="mt-4 text-gray-700">
          At Kaivee Healthcare, our Hepatologists combine clinical expertise with compassionate care to support patients 
          from early intervention to advanced therapy.
        </p>
      </div>

      {/* Conditions Treated */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Liver and Digestive Diseases Treated by Our Hepatologists</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "🔸 Liver Failure & Cirrhosis", desc: "Advanced liver disease management, including portal hypertension and ascites treatment." },
            { title: "🔸 Liver Cancer (Hepatocellular Carcinoma)", desc: "Collaborative care with oncologists and surgical teams for tumor treatment and liver transplants." },
            { title: "🔸 Gallbladder & Bile Duct Diseases", desc: "Diagnosis and treatment of gallstones, cholecystitis, and bile duct obstructions affecting digestion." },
            { title: "🔸 Pancreatic Disorders", desc: "Treatment of pancreatic conditions affecting digestion and metabolism." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tests & Procedures */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Diagnostic & Therapeutic Procedures</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "▶ Liver Function Tests (LFTs)", desc: "Blood tests to measure liver enzyme levels and overall liver health." },
            { title: "▶ FibroScan & Elastography", desc: "Non-invasive imaging to assess liver stiffness, fibrosis, or scarring." },
            { title: "▶ Abdominal Ultrasound & CT Scans", desc: "Imaging to evaluate liver size, structure, tumors, or blockages." },
            { title: "▶ Liver Biopsy", desc: "Tissue sampling for closer examination of liver conditions." },
            { title: "▶ Endoscopic Retrograde Cholangiopancreatography (ERCP)", desc: "Advanced endoscopic imaging to diagnose and treat bile duct and pancreatic disorders." },
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
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Kaivee Healthcare?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "🟢 Expertise in Complex Liver Diseases", desc: "Our dedicated team provides comprehensive, coordinated care for advanced liver conditions." },
            { title: "🟢 Early Diagnosis & Prevention", desc: "We focus on early screening and interventions to halt disease progression and improve outcomes." },
            { title: "🟢 Personalized Treatment Plans", desc: "Tailored care strategies based on medical history, lifestyle, and disease severity." },
            { title: "🟢 Multidisciplinary Collaboration", desc: "Integrated care with dietitians, gastroenterologists, and surgeons for complex liver and digestive disorders." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to See a Hepatologist */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">When Should You See a Hepatologist?</h2>
        <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
          <li>Unrelenting fatigue, weakness, or jaundice</li>
          <li>Abnormal liver function tests</li>
          <li>Swelling or pain in the upper right abdomen</li>
          <li>Unexplained weight loss or loss of appetite</li>
          <li>Dark urine or pale stools</li>
          <li>Yellowing of skin and eyes (jaundice)</li>
        </ul>
      </div>

{/* Inquiry Form Placeholder */}
<div className="lg:w-1/2 flex justify-center">
          <InquiryForm />
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



