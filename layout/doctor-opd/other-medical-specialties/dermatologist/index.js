import Alternativebanner from "./dermatologist-banner";
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
          Consult a Dermatologist at Kaivee Healthcare
        </h1>
        <p className="mt-4 font-semibold text-2xl text-gray-800">
          Comprehensive Skin, Hair, and Nail Care for All Ages
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <p className="text-gray-700">
            Your skin is your body's largest organ and reflects your overall health.  
            Whether you're dealing with chronic skin conditions, hair loss, or cosmetic concerns,  
            our Dermatologists at Kaivee Healthcare provide expert care tailored to your needs.
          </p>
          <p className="mt-4 text-gray-700">
            From common skin issues like acne to complex autoimmune skin disorders,  
            our dermatology team guarantees safe, evidence-based treatments for long-term results.
          </p>
          <p className="mt-4 text-gray-700">
          Kaivee Healthcare - Our expert Dermatologists strive to restore skin health, confidence, and comfort to you with accurate diagnosis and state-of-the-art treatment.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/dermatologist-concept-dermatology-specialist-face-skin-acne-treatment-idea-beauty-health-skin-epidermis-scheme-vector-illustration-cartoon-style_613284-2649.jpg?updatedAt=1743509133058"
            alt="Dermatology Consultation"
            width={500}
            height={250}
            className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* What is a Dermatologist? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          What Is a Dermatologist and How Can They Help?
        </h2>
        <p className="mt-4 text-gray-700">
          Dermatology is the medical field that focuses on diagnosing and treating skin, hair, and nail disorders.  
          Dermatologists also address cosmetic concerns and perform treatments to improve skin health and appearance.
        </p>
        <p className="mt-4 text-gray-700">
          At Kaivee Healthcare, our dermatologists go beyond surface-level symptoms to find the underlying causes,  
          ensuring personalized and effective treatment plans for every patient.
        </p>
      </div>

      {/* Conditions Treated */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Dermatology Conditions Treated by Our Specialists
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "🔸 Acne and Acne Scarring", desc: "Customized solutions for inflamed acne, scarring, and pigmentation." },
            { title: "🔸 Eczema and Dermatitis", desc: "Comprehensive management of chronic skin inflammation like atopic and contact dermatitis." },
            { title: "🔸 Psoriasis", desc: "Autoimmune skin disorder causing rapid skin turnover, scaling, and redness." },
            { title: "🔸 Hair Loss & Scalp Conditions", desc: "Diagnosis and treatment of hair loss, baldness, and scalp infections." },
            { title: "🔸 Skin Allergies and Hives", desc: "Identifying triggers and treating allergic reactions, rashes, and hives." },
            { title: "🔸 Fungal & Bacterial Infections", desc: "Managing skin infections like ringworm, athlete’s foot, and cellulitis." },
            { title: "🔸 Pigmentation Disorders", desc: "Treating melasma, vitiligo, and uneven skin tone issues." },
            { title: "🔸 Nail Disorders", desc: "Solutions for fungal infections, ingrown toenails, and nail psoriasis." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#2D85C9] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Specialized Dermatological Treatments */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Specialized Dermatological Care and Treatments
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "▶ Chemical Peels & Skin Resurfacing", desc: "Non-invasive treatments for pigmentation, acne scars, and uneven skin tone." },
            { title: "▶ Laser Therapy", desc: "Advanced laser treatments for hair reduction, scar revision, and skin rejuvenation." },
            { title: "▶ Dermal Fillers and Botox", desc: "Non-surgical procedures to reduce wrinkles and restore lost facial volume." },
            { title: "▶ Cryotherapy", desc: "Effective treatment for warts, skin tags, and precancerous lesions." },
            { title: "▶ Skin Biopsy & Histopathology", desc: "Accurate diagnosis of suspicious tumors and persistent skin lesions." },
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
          Why Patients Trust Kaivee Healthcare Dermatologists
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "🟢 Detailed Diagnosis & Custom Treatments", desc: "Comprehensive skin evaluations to provide the right therapy for each patient." },
            { title: "🟢 Advanced Technology & Safety Standards", desc: "State-of-the-art laser technology and strict safety protocols in all procedures." },
            { title: "🟢 Clinical & Aesthetic Dermatology Expertise", desc: "Expert care for both medical skin conditions and cosmetic enhancements." },
            { title: "🟢 Long-Term Patient Support & Education", desc: "Guidance on skincare routines, prevention techniques, and lifestyle adjustments." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#2D85C9] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What to Expect at a Dermatology Visit */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">
          What Happens at Your Dermatology Visit?
        </h2>
        <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
          <li>➡️ Thorough Skin Examination & Medical History Assessment</li>
          <p>Our Dermatologist will conduct a thorough evaluation of your skin and symptoms and ask you about your past medical history, family history, and lifestyle factors(such as stress, work, etc.) that could be impacting your condition.</p>
          <li>➡️ Personalized Treatment Plan Based on Diagnosis</li>
          <p>Based on the diagnosis, you'll get a customized plan for treatment, which can include medications, skin care routines, and procedural options.</p>
          <li>➡️ Follow-up Care for Chronic Conditions & Ongoing Support</li>
          <p>Chronic skin conditions require regular follow-ups to reset treatment goals and keep skin healthy over time.</p>
        </ul>
      </div>

      {/* Booking Section */}
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



