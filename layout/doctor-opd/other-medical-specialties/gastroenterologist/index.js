import Alternativebanner from "./gastroenterologist-banner";
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
          Consult a Gastroenterologist at Kaivee Healthcare
        </h1>
        <p className="mt-4 font-semibold text-2xl text-gray-800">
          Comprehensive Digestive Health Care for a Better Quality of Life
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <p className="text-gray-700">
            Your gut health is a crucial part of your overall wellness, yet many people struggle with digestive disorders daily. At Kaivee Healthcare, our expert Gastroenterologists provide specialized care for conditions affecting the stomach, intestines, liver, pancreas, and gallbladder.
          </p>
          <p className="mt-4 text-gray-700">
            Our approach combines advanced diagnostics, minimally invasive treatments, and evidence-based medicine to help improve digestive health and overall well-being.
          </p>
          <p className="mt-4 text-gray-700">
          Our personalized, evidence-based treatment plans identify the underlying factors to gastrointestinal disorders, and support long-term digestive health.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/gut-health-concept-illustration_114360-8988.jpg?updatedAt=1743570647619"
            alt="Gastroenterology Consultation"
            width={500}
            height={250}
            className="rounded-xl shadow-md w-[80%] max-w-[500px] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* What is a Gastroenterologist? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          What Is a Gastroenterologist and What Do They Treat?
        </h2>
        <p className="mt-4 text-gray-700">
          A Gastroenterologist is a physician specializing in diagnosing and treating conditions of the gastrointestinal (GI) tract and associated organs. Their expertise ranges from managing routine digestive concerns to performing advanced diagnostic and therapeutic procedures.
        </p>
        <p className="mt-4 text-gray-700">
          At Kaivee Healthcare, we leverage state-of-the-art diagnostic tools and minimally invasive techniques to evaluate and treat a variety of GI disorders effectively.
        </p>
      </div>

      {/* Conditions Treated */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Conditions We Treat for Digestive and Gastrointestinal Health
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "🔸 Gastroesophageal Reflux Disease (GERD)", desc: "Management of chronic acid reflux, esophagus irritation, and acidity with lifestyle changes and medications." },
            { title: "🔸 Peptic Ulcers & Gastritis", desc: "Treatment for stomach ulcers and irritation to prevent complications like bleeding." },
            { title: "🔸 Irritable Bowel Syndrome (IBS)", desc: "Dietary therapy and medications for abdominal pain, bloating, diarrhea, and constipation." },
            { title: "🔸 Inflammatory Bowel Disease (IBD)", desc: "Comprehensive care for Crohn’s disease and ulcerative colitis, aiming to control inflammation and prevent flare-ups." },
            { title: "🔸 Liver Diseases", desc: "Management of hepatitis, fatty liver disease, and cirrhosis in coordination with hepatologists." },
            { title: "🔸 Pancreatitis", desc: "Diagnosis and treatment of acute and chronic pancreatitis, including digestive enzyme deficiency management." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#2D85C9] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnostic & Therapeutic Procedures */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Diagnostic & Therapeutic Procedures Offered
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "▶ Upper Gastrointestinal Endoscopy (EGD)", desc: "Minimally invasive visualization of the esophagus, stomach, and duodenum." },
            { title: "▶ Colonoscopy", desc: "A vital screening test for colorectal cancer, allowing for polyp removal." },
            { title: "▶ Endoscopic Retrograde Cholangiopancreatography (ERCP)", desc: "Specialized imaging for bile and pancreatic duct conditions like stones and strictures." },
            { title: "▶ Capsule Endoscopy", desc: "Non-invasive imaging of the small intestine using a swallowable capsule camera." },
            { title: "▶ Liver Elastography (FibroScan)", desc: "Non-invasive measurement of liver stiffness for fibrosis and cirrhosis assessment." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#2D85C9] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Kaivee Healthcare Gastroenterologists? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Kaivee Healthcare Gastroenterologists?
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "🟢 Expertise in Complex GI Disorders", desc: "Our specialists use advanced, evidence-based techniques to manage both common and rare digestive conditions." },
            { title: "🟢 Advanced Endoscopic & Non-Invasive Diagnostics", desc: "State-of-the-art endoscopy and imaging technologies ensure precise diagnoses and safe procedures." },
            { title: "🟢 Personalized Digestive Health Plans", desc: "Tailored care plans that include diet modifications, medications, and follow-ups for long-term digestive wellness." },
            { title: "🟢 Multidisciplinary & Holistic Care", desc: "We collaborate with dietitians, surgeons, hepatologists, and oncologists to provide integrated GI care." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#2D85C9] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Happens in a Gastroenterology Consultation */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">
          What to Expect During a Gastroenterology Consultation
        </h2>
        <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
          <li>➡️ A thorough review of your medical, dietary, and family history to assess digestive concerns.</li>
          <li>➡️ Targeted diagnostic tests such as endoscopy, colonoscopy, imaging studies, or lab work.</li>
          <li>➡️ A personalized treatment plan including medications, diet recommendations, and follow-up care.</li>
        </ul>
      </div>

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



