import Alternativebanner from "./nephrologist-banner";
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
          Consult a Nephrologist at Kaivee Healthcare
        </h1>
        <p className="mt-4 font-semibold text-2xl text-gray-800">
          Comprehensive Kidney Care for Long-Term Health and Wellness
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <p className="text-gray-700">
            Your kidneys perform critical tasks in keeping your body in balance and healthy. When disease or injury 
            affects these vital organs, quick and specialized diagnosis and care are key. At Kaivee Healthcare, our 
            super-specialized and well-trained Nephrologists diagnose, manage, and treat various kidney-related diseases.
          </p>
          <p className="mt-4 text-gray-700">
          Specialists within our three practice sites offer customized kidney care to protect kidney health and enhance well-being regardless to the disease process: chronic kidney disease, complex electrolyte disorders, etc.
          </p>
          <p className="mt-4 text-gray-700">
          At Kaivee Healthcare, our Nephrologists work closely with dietitians, endocrinologists and vascular surgeon to provide an integrated approach to Kidney care.Whether you need early-stage management or advanced treatment like dialysis, our team is dedicated to helping 
            you maximize kidney function.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/liver-concept-illustration_114360-26412.jpg?updatedAt=1743501957399"
            alt="Nephrology Consultation"
            width={500}
            height={250}
            className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* What is a Nephrologist? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">What Is a Nephrologist and What Do They Do?</h2>
        <p className="mt-4 text-gray-700">
          Nephrology is a subspecialty of internal medicine that focuses on diagnosing and treating kidney disease 
          and hypertension. Nephrologists handle conditions that affect kidney function and cause imbalances in the 
          body's fluids, electrolytes, and blood pressure. They also manage dialysis treatment and prepare patients 
          for kidney transplantation when necessary.
        </p>
      </div>

      {/* Conditions Treated */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Common Kidney Conditions Treated by Our Nephrologists</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "🔸 Chronic Kidney Disease (CKD)", desc: "Long-term management to slow progression and prevent complications." },
            { title: "🔸 Acute Kidney Injury (AKI)", desc: "Rapid kidney failure diagnosis and treatment for recovery." },
            { title: "🔸 Glomerulonephritis", desc: "Treatment for kidney inflammation caused by autoimmune disorders or infections." },
            { title: "🔸 Kidney Stones", desc: "Prevention and management of recurrent kidney stones." },
            { title: "🔸 Blood Pressure & Kidney Health", desc: "Hypertension management to maintain kidney function." },
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
        <h2 className="text-2xl font-semibold text-gray-800">Tests & Procedures Performed by Nephrologists</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "▶ Renal Function Tests", desc: "Measures kidney filtration efficiency through blood and urine analysis." },
            { title: "▶ 24-Hour Urine Analysis", desc: "Evaluates protein loss, kidney stone risk, and waste clearance." },
            { title: "▶ Renal Ultrasound & Doppler Imaging", desc: "Non-invasive imaging to assess kidney structure and blood flow." },
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
        <h2 className="text-2xl font-semibold text-gray-800">Why Patients Trust Kaivee Healthcare’s Nephrologists</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "🟢 Massive Experience in Kidney Disease Treatment", desc: "Expert care for managing complex kidney diseases while preserving function." },
            { title: "🟢 Prevention and Early Detection Emphasis", desc: "Proactive strategies to prevent disease progression and dialysis need." },
            { title: "🟢 Dialysis with a Patient-Centered Lens", desc: "Tailored dialysis plans with compassionate monitoring and care." },
            { title: "🟢 Multispecialty Collaboration for Complex Cases", desc: "Integration with cardiologists, endocrinologists, and surgeons for holistic care." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to See a Nephrologist */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-2/3">
        <h2 className="text-2xl font-semibold text-gray-800">When Should You See a Nephrologist?</h2>
        <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
          <li>High creatinine or urea levels in blood tests</li>
          <li>Swelling in the legs, ankles, or around the eyes</li>
          <li>Uncontrolled high blood pressure</li>
          <li>Foamy or bloody urine</li>
          <li>History of recurrent kidney stones or UTIs</li>
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



