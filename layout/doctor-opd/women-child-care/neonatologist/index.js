import Alternativebanner from "./neonatologist-banner";
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
    <h1 className="text-3xl font-bold text-[#C0392B]">
      Advanced Newborn Care by Neonatologists at Kaivee Healthcare
    </h1>
    <p className="mt-4 font-semibold text-2xl text-gray-800">
      Specialized Medical Support for Your Baby’s First Critical Days
    </p>
  </div>

  {/* Introduction Section */}
  <div className="mt-8 flex flex-col lg:flex-row gap-8">
    <div className="lg:w-3/5">
      <p className="text-gray-700">
        The birth of a child is a moment full of hope and joy — but it can also bring anxiety if a baby needs immediate or specialized care. 
        Our expert Neonatologists at Kaivee Healthcare are trained to care for newborns who are premature, medically fragile, or require intensive observation after delivery.
      </p>
      <p className="mt-4 text-gray-700">
        Our neonatal care team combines compassion with leading-edge technology and clinical expertise to provide every infant with the best possible beginning.
      </p>
    </div>
    <div className="flex justify-center lg:w-1/2">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/newborn-care.jpg" 
        alt="Neonatology Care"
        width={500}
        height={250}
        className="rounded-xl shadow-lg w-[80%] max-w-[500px] transform transition duration-500 hover:scale-105 hover:shadow-xl"
      />
    </div>
  </div>

  {/* What Does a Neonatologist Do? */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800">
      What Does a Neonatologist Do?
    </h2>
    <p className="mt-4 text-gray-700">
      A Neonatologist is a specialized pediatrician trained to treat newborns, especially premature babies, those with low birth weight, 
      tongue conditions, or complications at birth. Their work involves stabilizing newborns in the delivery room, providing intensive care, and 
      coordinating long-term health support when necessary.
    </p>
    <p className="mt-4 text-gray-700">
      At Kaivee Healthcare, our Neonatologists lead neonatal resuscitation, developmental monitoring, and family counseling during the earliest—and 
      most crucial—days of life.
    </p>
  </div>

  {/* Conditions We Treat */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800">
      Newborn Conditions with Specialized Care Needs
    </h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "🔸 Preterm Birth (Prematurity)", desc: "Babies born before 37 weeks may have immature organs, feeding difficulties, or breathing issues. Our team ensures they grow strong before discharge." },
        { title: "🔸 Neonatal Infections", desc: "Newborns are vulnerable to infections like sepsis, pneumonia, or meningitis. We provide rapid diagnosis and antibiotic therapy for immediate care." },
        { title: "🔸 Breathing Difficulties", desc: "For conditions like hyaline membrane disease or transient tachypnea, we offer oxygen therapy, ventilators, and non-invasive respiratory support." },
        { title: "🔸 Jaundice (Hyperbilirubinemia)", desc: "Common in newborns, jaundice is managed through phototherapy and careful monitoring to prevent complications." },
        { title: "🔸 Congenital Anomalies", desc: "Early diagnosis of heart defects, cleft palate, or metabolic disorders ensures timely treatment and referrals to specialists." },
        { title: "🔸 Neonatal Hypoglycemia", desc: "Low blood sugar in newborns can affect brain function. Our team closely monitors and corrects it with feeding or IV support." },
      ].map((item, index) => (
        <div key={index} className="p-4 border-l-4 border-[#C0392B] bg-white shadow rounded-lg">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* NICU & Services for Newborns */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800">
      Tools and Services We Have for Newborns Under Our Care
    </h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {[
        { title: "▶ Neonatal Intensive Care Unit (NICU)", desc: "Advanced incubators, monitors, and life-support systems ensure constant, safe care for sick infants." },
        { title: "▶ Newborn Screening & Genetic Testing", desc: "Routine tests detect conditions like thyroid disorders or metabolic issues, allowing early treatment." },
        { title: "▶ Temperature & Nutrition Regulation", desc: "Preemies and sick babies receive special feeding and warmth regulation support." },
        { title: "▶ Family Counseling & Emotional Support", desc: "Parents are actively engaged in their baby’s care, receiving updates and guidance on newborn care at home." },
      ].map((item, index) => (
        <div key={index} className="p-4 border-l-4 border-[#C0392B] bg-white shadow rounded-lg">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Why Parents Trust Our Neonatology Team */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800">
      Here’s Why Parents Trust Our Neonatology Team
    </h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {[
        { title: "🟢 24/7 Neonatology Support", desc: "Neonatologists and trained neonatal nurses are available round-the-clock for urgent procedures and emergencies." },
        { title: "🟢 Multi-Disciplinary Coordination", desc: "We collaborate with pediatric surgeons, geneticists, and specialists for comprehensive newborn care." },
        { title: "🟢 Family-Centered Care", desc: "Parents are vital partners in their baby’s recovery, with transparency and compassion in every decision." },
        { title: "🟢 Safety-First Protocols", desc: "Our NICU follows international infection control and neonatal safety standards for the best care." },
      ].map((item, index) => (
        <div key={index} className="p-4 border-l-4 border-[#C0392B] bg-white shadow rounded-lg">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Final Call to Action & Enquiry Form */}
  <div className="mt-12 flex flex-col lg:flex-row gap-8">
    <div className="lg:w-2/3">
      <h2 className="text-2xl font-semibold text-gray-800">
        Why Early Neonatal Care Is So Important
      </h2>
      <p className="mt-4 text-gray-700">
      The first month of life is the most sensitive medically. Early intervention can prevent chronic sequelae, improve survival rates and establish the basis for healthy development. While a brick healthy little baby might look all good when you take them home, a Neonatologist is watching their vitals ensuring their well-being, and in the case of any concern to keep an eye on them in the specialized environment till the little one changes the world.
      Our Neonatology team at Kaivee Healthcare is dedicated in providing care for small lives requiring skill, patience, and constant attention.      </p>
    </div>
    <div className="lg:w-1/3 flex justify-center">
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



