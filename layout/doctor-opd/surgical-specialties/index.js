import Alternativebanner from "./surgical-specialties";
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

      {/* <AboutUs /> */}
      <div className="container mx-auto px-4 py-12">
  {/* Hero Section */}
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-[#8DBD4D]">Surgical Specialties at Kaivee Healthcare</h2>
    <p className="text-gray-800 mt-3 text-2xl font-semibold ">
      Advanced Surgical Care with Precision, Safety, and Compassion
    </p>
  </div>

  {/* Introduction */}
  <div className="mt-8 flex flex-col lg:flex-row items-center gap-8">
    <div className="lg:w-1/2">
      <p className="text-gray-700 leading-relaxed">
        For surgery, patients deserve more than clinical expertise—they need clarity, confidence, and coordinated care every step of the way. Our Surgical Specialties department ensures the best outcomes with minimal recovery time through advanced infrastructure and post-operative protocols.
      </p>
      <p className="text-gray-700 mt-4">
        From routine procedures to complex surgeries, we provide individualized, safe, and seamless care driven by transparency, ethics, and medical excellence.
      </p>
    </div>
    <div className="lg:w-1/2 flex justify-center">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/hospital-surgical-operation-composition_1284-65030.jpg?updatedAt=1743159425066"
        alt="Surgical Care"
        width={500}
        height={300}
        className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>

  {/* Key Surgical Services */}
  <div className="mt-12 p-6 bg-gray-100 rounded-xl shadow-md border border-gray-300">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">Key Surgical Services</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        { title: "Minimally Invasive & Laparoscopic Procedures", desc: "Shorter hospital stays and faster recovery for gallbladder removal, appendectomy, and hernia repair." },
        { title: "Emergency Surgical Procedures", desc: "Expert care for trauma, acute abdominal pain, and internal bleeding." },
        { title: "Reconstructive & Corrective Surgeries", desc: "Surgical correction of functional deformities and complications from injuries." },
        { title: "Soft Tissue & Tumor Excision", desc: "Meticulous excision of cysts, benign/malignant tumors with biopsy-based follow-ups." },
        { title: "Preoperative Assessment", desc: "Comprehensive pre-surgery evaluations to assess surgical readiness." }
      ].map((service, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h4 className="font-semibold text-lg">{service.title}</h4>
          <p className="text-gray-600 mt-2">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>

   {/* Image Section */}
   <div className="flex flex-wrap justify-center gap-6 mt-12">
    {[
      { src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/doctors-doing-surgical-procedure-patient_23-2148962499.jpg?updatedAt=1743159660802", alt: "Surgical Procedure" },
      { src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/shot-team-surgeons-performing-surgery-operating-theatre_657921-779.jpg?updatedAt=1743159828809", alt: "Surgical Team" }
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

  {/* Surgical Disciplines */}
  <div className="mt-12">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">One Department, Many Surgical Disciplines</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        { title: "General Surgery", desc: "Abdominal, gastrointestinal, and soft tissue surgeries." },
        { title: "Orthopedic Surgery", desc: "Joint replacements and ligament repairs." },
        { title: "Neurosurgery", desc: "Brain and spine decompression, trauma surgeries." },
        { title: "Cardiothoracic Surgery", desc: "Heart, lung, and vascular surgeries." },
        { title: "ENT Surgery", desc: "Nasal, throat, and ear procedures." },
        { title: "Plastic & Cosmetic Surgery", desc: "Reconstructive and aesthetic precision procedures." }
      ].map((discipline, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h4 className="font-semibold text-[#D41958] text-lg">{discipline.title}</h4>
          <p className="text-gray-600 mt-2">{discipline.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Why Choose Kaivee Healthcare */}
  {/* <div className="mt-12 p-6 bg-blue-100 rounded-xl shadow-md border border-blue-300">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">Why Patients Choose Us</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        { title: "Modern Operating Theatres", desc: "State-of-the-art lighting, digital monitoring, and infection control." },
        { title: "Experienced Surgical Teams", desc: "Senior surgeons, trained nurses, and professional anesthetists." },
        { title: "Transparent Consultations", desc: "We explain procedures, risks, and recovery plans in detail." },
        { title: "Continuous Monitoring & Follow-Up", desc: "Post-surgery wound checks, physiotherapy, and lifestyle advice." },
        { title: "Ethical Decision-Making", desc: "Surgery is only recommended when absolutely necessary." }
      ].map((reason, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h4 className="font-semibold text-lg">{reason.title}</h4>
          <p className="text-gray-600 mt-2">{reason.desc}</p>
        </div>
      ))}
    </div>
  </div> */}

 

  {/* Conclusion */}
  <div className="mt-12 text-center max-w-3xl mx-auto">
    <h3 className="text-2xl font-semibold text-gray-800">Surgery with the Support of Those You Can Trust</h3>
    <p className="text-gray-700 mt-2">
      Surgery can feel overwhelming, but with the right team, it becomes an opportunity for healing. Our Surgical Specialties department is focused on providing safe, advanced, and compassionate care to restore your health and daily life.
    </p>
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



