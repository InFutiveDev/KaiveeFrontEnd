import Alternativebanner from "./hematologist-banner";
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
          Consult a Haematologist at Kaivee Healthcare
        </h1>
        <p className="mt-4 font-semibold text-2xl text-gray-800">
          Specialized Blood Disorder Management with Precision and Compassion
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <p className="text-gray-700">
            Blood is essential to all bodily functions—carrying oxygen, fighting infections, and healing wounds. When issues arise, expert care is crucial. At Kaivee Healthcare, our Haematologists diagnose and treat a wide range of blood disorders, including anaemia, clotting disorders, leukaemia, and bone marrow diseases.
          </p>
          <p className="mt-4 text-gray-700">
            Our goal is to provide personalized, cutting-edge treatments to help you achieve the best possible health outcomes.
          </p>
          <p className="mt-4 text-gray-700">
          Our experienced Clinical Haematologists at Kaivee Healthcare specialize in clinical evaluation as well as laboratory analysis providing detailed care that relies on scientific precision and human touch.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/blood-test-covid-19-concept-illustration_114360-2232.jpg?updatedAt=1743575795475"
            alt="Haematology Consultation"
            width={500}
            height={250}
            className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* What Does a Haematologist Do? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          What Does a Haematologist Do?
        </h2>
        <p className="mt-4 text-gray-700">
          A Haematologist is a medical specialist focused on diagnosing and treating blood disorders. These range from benign conditions like anaemia to malignant disorders like leukaemia and lymphoma. 
        </p>
        <p className="mt-4 text-gray-700">
          At Kaivee Healthcare, our experienced Haematologists provide both clinical evaluations and advanced laboratory diagnostics to ensure accurate and timely treatment.
        </p>
      </div>

      {/* Conditions Treated */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Conditions Treated by Our Haematology Team
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "🔸 Anaemia (Iron & Vitamin B12 Deficiency)", desc: "Diagnosis and management of nutritional and hereditary anaemia." },
            { title: "🔸 Bleeding & Clotting Disorders", desc: "Treatment of haemophilia, von Willebrand disease, and deep vein thrombosis (DVT)." },
            { title: "🔸 Leukaemia & Lymphoma", desc: "Advanced cancer care, including chemotherapy and bone marrow transplants." },
            { title: "🔸 Myeloma & Plasma Cell Disorders", desc: "Specialized treatment for multiple myeloma and plasma-related diseases." },
            { title: "🔸 Sickle Cell Disease & Thalassemia", desc: "Chronic management of inherited blood disorders." },
            { title: "🔸 Bone Marrow Failure Syndromes", desc: "Diagnosis and treatment of rare conditions affecting blood cell production." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#2D85C9] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnostic & Therapeutic Services */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Diagnostic & Therapeutic Services in Haematology
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "▶ Complete Blood Count (CBC) & Peripheral Smear", desc: "Comprehensive analysis of red and white blood cells for overall health." },
            { title: "▶ Bone Marrow Aspiration & Biopsy", desc: "Critical test for diagnosing blood cancers and bone marrow disorders." },
            { title: "▶ Coagulation Profile & Clotting Factor Analysis", desc: "Assessing clotting disorders and risks before surgery." },
            { title: "▶ Flow Cytometry & Immunophenotyping", desc: "Advanced blood cancer diagnostics for precise subtyping." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#2D85C9] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Kaivee Healthcare? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Kaivee Healthcare’s Haematology Services?
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "🟢 Specialized Expertise", desc: "From common anaemias to rare blood cancers, our specialists provide precise and effective treatments." },
            { title: "🟢 Comprehensive Blood Disorder Management", desc: "We work with oncologists and transplant teams for integrated treatment of complex conditions." },
            { title: "🟢 On-Site Advanced Lab Support", desc: "Our state-of-the-art lab provides rapid and accurate test results." },
            { title: "🟢 Long-Term Monitoring & Patient Education", desc: "We help patients manage chronic conditions and recognize early warning signs." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#2D85C9] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Healing & Support */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-2/3">
        <h2 className="text-2xl font-semibold text-gray-800">
          A Process of Healing and Rebuilding
        </h2>
        <p className="mt-4 text-gray-700">
          Living with a blood disorder can be challenging, but early diagnosis, expert treatment, and continuous follow-up can significantly improve quality of life. At Kaivee Healthcare, we provide compassionate, evidence-based care tailored to each patient's needs.
        </p>
        <p className="mt-4 text-gray-700">
          Whether you're managing a chronic condition or adjusting to a new diagnosis, our Haematology team is here to support you every step of the way.
        </p>
      </div>

      <div className="lg:w-1/2 flex justify-center">
      <div className="w-full">
    <InquiryForm />
  </div>
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



