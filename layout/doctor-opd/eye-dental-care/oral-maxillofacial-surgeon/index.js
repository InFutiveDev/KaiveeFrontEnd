import Alternativebanner from "./oral-maxillofacial-banner";
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
    <h1 className="text-3xl font-bold text-[#346D14]">
      Oral and Maxillofacial Surgery at Kaivee Healthcare
    </h1>
    <p className="mt-4 font-semibold text-2xl text-gray-800">
      Expert Surgical Solutions for Complex Dental and Facial Conditions
    </p>
  </div>

  {/* Introduction Section */}
  <div className="mt-8 flex flex-col lg:flex-row gap-8">
    <div className="lg:w-3/5">
      <p className="text-gray-700">
        Some teeth problems are beyond repair, and no amount of filling or cleaning can save them. Some converge surgical precision, deep anatomical knowledge, and specialized care. That’s when our Oral & Maxillofacial Surgeons come in. At Kaivee Healthcare, we provide complex operative treatments of the mouth, jaw, face, and neck, including removal of impacted teeth and all types of reconstructive surgery.
      </p>
      <p className="mt-4 text-gray-700">
        Equipped with cutting-edge surgical suites, 3D imaging, and a team trained in both dentistry and facial surgery, we offer safe, effective care customized for each patient’s specific needs.
      </p>
    </div>
    <div className="flex justify-center lg:w-1/2">
      <img
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/dentist-assistant-surgery-dental-clinic_140725-7688.jpg?updatedAt=1744617185755"
        alt="Oral Surgery"
        className="rounded-xl shadow-lg w-[80%] max-w-[500px] transform transition duration-500 hover:scale-105 hover:shadow-xl"
      />
    </div>
  </div>

  {/* Surgeon Definition */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800">
      What Is an Oral & Maxillofacial Surgeon?
    </h2>
    <p className="mt-4 text-gray-700">
      An Oral & Maxillofacial Surgeon is a dental specialist who has undergone medical level education and training to perform complicated surgical procedures on the oral cavity and surrounding structures. A bridge between dentistry and surgery, these specialists perform anything from trauma repairs to facial realignment operations. They often collaborate with dentists, orthodontists, ENT specialists, and plastic surgeons.
    </p>
    <p className="mt-4 text-gray-700">
      Your health is on a continuum, and sometimes you need preventive surgery to remain healthy.
    </p>
  </div>

  {/* Conditions Treated */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800">
      Conditions for Which We Offer Surgical Treatments
    </h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "🔸 Impacted Wisdom Teeth", desc: "Extraction of third molars impacted under gum or bone, causing pain or crowding." },
        { title: "🔸 Jaw Misalignment & TMJ Dysfunction", desc: "Surgical correction for structural issues affecting chewing, speaking, or chronic TMJ pain." },
        { title: "🔸 Facial & Dental Trauma", desc: "Repairs for fractured jaws, bones, and soft tissue injuries caused by trauma or accidents." },
        { title: "🔸 Oral Pathologies", desc: "Biopsies and removals of cysts, tumors, or suspicious lesions in the mouth or jaw." },
        { title: "🔸 Bone Grafting for Prosthesis", desc: "Bone grafting for rebuilding jaw structure before dental implants or dentures." },
        { title: "🔸 Maxillofacial Infections", desc: "Treatment and drainage of infections extending into facial structures." },
      ].map((item, index) => (
        <div key={index} className="p-4 border-l-4 border-[#346D14] bg-white shadow rounded-lg">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Surgical Services */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800">
      Surgery Services Provided Safely and Skillfully
    </h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {[
        { title: "▶ Surgical Tooth Extractions", desc: "Removal of compromised, carious, or impacted teeth with minimal discomfort." },
        { title: "▶ Orthognathic (Jaw) Surgery", desc: "Jaw repositioning to improve bite and facial symmetry, often combined with orthodontic care." },
        { title: "▶ Dental Implant Placement", desc: "Surgical insertion of implants for missing teeth, with or without bone grafting." },
        { title: "▶ Biopsy with Oxidizing Agents", desc: "Tissue examination for early cancer detection or pathology diagnosis." },
        { title: "▶ Facial Reconstruction After Trauma", desc: "Reconstruction of facial structures post-trauma, ensuring function and aesthetics." },
      ].map((item, index) => (
        <div key={index} className="p-4 border-l-4 border-[#346D14] bg-white shadow rounded-lg">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Why Kaivee */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800">
      Why Kaivee Healthcare for Surgical Dental Care?
    </h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {[
        { title: "🟢 Dual Expertise in Medicine & Dentistry", desc: "Our surgeons are trained in both fields, ensuring comprehensive treatment from diagnosis to recovery." },
        { title: "🟢 Advanced Imaging & Operating Suite", desc: "We use 3D CBCT and real-time surgical navigation for enhanced safety and precision." },
        { title: "🟢 Pain & Anxiety Control Options", desc: "From local anesthesia to general sedation, tailored to the procedure and your comfort." },
        { title: "🟢 Multi-Specialist Collaboration", desc: "Our team works with ENT, orthodontic, and prosthodontic specialists for complex cases." },
        { title: "🟢 Detailed Aftercare & 24/7 Support", desc: "Aggressive follow-up care, wound instructions, and round-the-clock help for recovery questions." },
      ].map((item, index) => (
        <div key={index} className="p-4 border-l-4 border-[#346D14] bg-white shadow rounded-lg">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Final Call to Action */}
  <div className="mt-12 flex flex-col lg:flex-row gap-8">
    <div className="lg:w-2/3">
      <h2 className="text-2xl font-semibold text-gray-800">
        When Surgery Becomes the Best Option
      </h2>
      <p className="mt-4 text-gray-700">
        Some oral conditions go beyond discomfort — they can seriously affect your quality of life. If you experience persistent jaw pain, difficulty chewing, facial swelling, or have sustained facial trauma, oral & maxillofacial surgery might be the key to lasting relief and function.
      </p>
      <p className="mt-4 text-gray-700">
        At Kaivee Healthcare, our surgical precision meets compassionate care to guide you through diagnosis, treatment, and recovery — transparently and safely.
      </p>
    </div>

    {/* Inquiry Form */}
    <div className="lg:w-1/3 flex justify-center">
      <InquiryForm />
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



