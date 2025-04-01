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
    <h2 className="text-3xl font-bold text-[#8DBD4D]">Other Medical Specialties at Kaivee Healthcare</h2>
    <p className="text-gray-800 font-semibold mt-3 text-1xl">
      A Multidisciplinary Team for Specialized Conditions Beyond the Conventional Scope
    </p>
  </div>

  {/* Introduction */}
  <div className="mt-8 flex flex-col lg:flex-row items-center gap-8">
    <div className="lg:w-1/2">
      <p className="text-gray-700 leading-relaxed">
      Not all health issues fit into general medicine or surgery. Some need targeted support in areas such as skin health, mental clarity, lung function, or digestive balance. The Other Medical Specialties department at Kaivee Healthcare consists of highly qualified consultants in a range of specialties, offering integrated and focused care for disease and conditions that require a specialist input, long-term management, and individualized treatment.      </p>
      <p className="text-gray-700 mt-4">
        Our team of specialists provides expert care, advanced diagnostics, and tailored treatment plans to ensure seamless healthcare without navigating multiple clinics.
      </p>
    </div>
    <div className="lg:w-1/2 flex justify-center">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/psychologist-concept-illustration_114360-2141.jpg?updatedAt=1743164325864"
        alt="Other Medical Specialties"
        width={500}
        height={300}
        className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>

  {/* Commonly Treated Conditions */}
  <div className="mt-12 p-6 bg-gray-100 rounded-xl shadow-md border border-gray-300">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">Commonly Treated Conditions</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        { title: "Skin, Hair & Nail Disorders", desc: "Expert care for acne, eczema, fungal infections, pigmentation issues, dandruff, and cosmetic dermatology." },
        { title: "Respiratory Disorders", desc: "Comprehensive treatment for asthma, COPD, bronchitis, allergic rhinitis, and other lung-related conditions." },
        { title: "Mental & Behavioral Health", desc: "Psychiatric and psychological support for anxiety, depression, sleep disorders, mood imbalances, and stress management." },
        { title: "Digestive Tract Imbalances", desc: "Diagnosis and treatment for indigestion, food intolerance, acid reflux, chronic constipation, and IBS." },
        { title: "Blood-Related Conditions", desc: "Medical management for anemia, clotting disorders, platelet abnormalities, and hematologic conditions." }
      ].map((condition, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h4 className="font-semibold text-lg">{condition.title}</h4>
          <p className="text-gray-600 mt-2">{condition.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Expert Specialists */}
  <div className="mt-12">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">Meet Our Specialists</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        { title: "🩺 Dermatologists", desc: "Medical and cosmetic skin care experts for chronic and aesthetic skin conditions." },
        { title: "🧠 Psychiatrists", desc: "Mental health specialists offering diagnosis, therapy, and medication management." },
        { title: "💨 Pulmonologists", desc: "Experts in treating lung and airway diseases, ensuring better respiratory health." },
        { title: "🍽️ Gastroenterologists", desc: "Specialists focusing on digestion, absorption, and bowel health." },
        { title: "🩸 Hematologists", desc: "Doctors dedicated to treating blood and bone marrow disorders with precision care." }
      ].map((expert, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h4 className="font-semibold text-lg">{expert.title}</h4>
          <p className="text-gray-600 mt-2">{expert.desc}</p>
        </div>
      ))}
    </div>
  </div>

   {/* Image Section */}
       <div className="flex flex-wrap justify-center gap-6 mt-12">
        {[
          { src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/cosmetologist-applying-mask-face-client-beauty-salon_1303-16770.jpg?updatedAt=1743165374912", alt: "Surgical Procedure" },
          { src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/doctor-performing-medical-research-lab_23-2149335693.jpg?updatedAt=1743165307114", alt: "Surgical Team" }
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

  

  {/* Why Choose Kaivee Healthcare */}
  <div className="mt-12 p-6 bg-[#8DBD4D0D]">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">Why Choose Kaivee Healthcare for Specialized Medical Attention?</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        { title: "🏥 All Specialties Under One Roof", desc: "No need to visit multiple clinics—our coordinated care approach ensures seamless treatment." },
        { title: "⚕️ Non-Surgical Methods", desc: "Most conditions treated here do not require surgery, focusing on long-term management and lifestyle interventions." },
        { title: "🔒 Patient Privacy & Empathy", desc: "Mental health and dermatology cases are handled with discretion, respect, and support." },
        { title: "📚 Therapeutic & Lifestyle Support", desc: "Beyond medical treatment, we provide stress management, skincare guidance, and preventive measures." }
      ].map((reason, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h4 className="font-semibold text-lg">{reason.title}</h4>
          <p className="text-gray-600 mt-2">{reason.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Conclusion */}
  <div className="mt-12 text-center max-w-3xl mx-auto">
    <h3 className="text-2xl font-semibold text-gray-800">Focused Care for Daily Problems and Long-Term Health</h3>
    <p className="text-gray-700 mt-4">
      You shouldn't have to suffer from discomfort, worry, or chronic health problems.  
      If you're facing a condition that doesn't fit the traditional medical mold, let our trusted experts help you reclaim your health—one personalized consultation at a time.
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



