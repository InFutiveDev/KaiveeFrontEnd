import Alternativebanner from "./endocrinologist-banner";
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
          Consult an Endocrinologist at Kaivee Healthcare
        </h1>
        <p className="mt-4 font-semibold text-2xl text-gray-800">
          Expert Hormonal Care for Balanced Health and Well-being
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <p className="text-gray-700">
            Hormones control almost every function in the human body, from metabolism to growth, mood, and reproduction. 
            Any disruption in this delicate balance can lead to complex health issues. At Kaivee Healthcare, our specialists 
            provide individualized care for all hormonal conditions, whether it's diabetes, thyroid dysfunction, or osteoporosis.
          </p>
          <p className="mt-4 text-gray-700">
            Our goal is to restore hormonal balance and help patients achieve energetic and high-quality health through 
            evidence-based treatments.
          </p>
          <p className="mt-4 text-gray-700">
          At Kaivee Healthcare, our Endocrinologists use the newest diagnostic tools and treatment options to manage both simple and complex endocrine diseases.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/endocrinologist-concept-thyroid-examination-doctor-examine-hormone-glucose-idea-health-medical-treatment-isolated-flat-vector-illustration_613284-2675.jpg?updatedAt=1743503016054"
            alt="Endocrinology Consultation"
            width={500}
            height={250}
            className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* What is an Endocrinologist? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">What to Know About an Endocrinologist</h2>
        <p className="mt-4 text-gray-700">
          An Endocrinologist is a medical specialist focused on the endocrine system—the glands and hormones that regulate 
          metabolism, growth, and reproduction. They diagnose and treat diseases resulting from hormonal imbalances, gland 
          dysfunction, and metabolic disorders.
        </p>
        <p className="mt-4 text-gray-700">
          At Kaivee Healthcare, our Endocrinologists use cutting-edge diagnostic tools and treatment options to manage 
          both simple and complex endocrine diseases.
        </p>
      </div>

      {/* Conditions Treated */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Hormonal & Gland Conditions Our Endocrinologists Treat</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "🔸 Diabetes Mellitus (Type 1, Type 2 & Gestational)", desc: "Comprehensive diabetes management including blood sugar monitoring, insulin therapy, and lifestyle changes." },
            { title: "🔸 Thyroid Disorders", desc: "Diagnosis and treatment of hyperthyroidism, hypothyroidism, thyroid nodules, and autoimmune thyroid diseases like Hashimoto’s and Graves’ disease." },
            { title: "🔸 Adrenal Gland Disorders", desc: "Management of Addison’s disease, Cushing’s syndrome, and adrenal tumors affecting cortisol and hormone production." },
            { title: "🔸 Osteoporosis & Bone Metabolism Disorders", desc: "Screening and management of osteoporosis and other bone-related hormonal imbalances." },
            { title: "🔸 Polycystic Ovary Syndrome (PCOS)", desc: "Hormonal therapy for irregular menstruation, weight gain, and infertility associated with PCOS." },
            { title: "🔸 Pituitary Gland Disorders", desc: "Treatment for pituitary tumors, hormone deficiencies, and excess hormone conditions." },
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
        <h2 className="text-2xl font-semibold text-gray-800">Diagnostic & Therapeutic Services</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "▶ Thyroid Ultrasound & Fine Needle Aspiration (FNA)", desc: "Non-invasive assessment and biopsy techniques for thyroid nodules and malignancy risk." },
            { title: "▶ Bone Mineral Density (BMD) Testing", desc: "Evaluation of bone quality and fracture risk, crucial for osteoporosis management." },
            { title: "▶ Continuous Glucose Monitoring (CGM)", desc: "Real-time blood glucose monitoring for personalized diabetes management." },
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
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Kaivee Healthcare for Endocrinology?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "🔵 Expertise in Complex Endocrine Disorders", desc: "Our Endocrinologists specialize in treating difficult-to-diagnose hormonal diseases and metabolic disorders." },
            { title: "🟢 Personalized Treatment Plans", desc: "Each care plan is tailored to individual needs, considering medical history, disease severity, and lifestyle preferences." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to See an Endocrinologist */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">When Should You See an Endocrinologist?</h2>
        <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
          <li>Unexplained weight loss or gain</li>
          <li>Extreme fatigue or weakness</li>
          <li>Signs of thyroid imbalance (heat/cold intolerance, hair loss)</li>
          <li>Irregular periods or infertility concerns</li>
          <li>Persistent thirst and frequent urination</li>
          <li>Weak or fractured bones</li>
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



