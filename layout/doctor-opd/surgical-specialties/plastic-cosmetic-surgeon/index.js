import Alternativebanner from "./plastic-cosmetic-surgeon-banner";
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

      <div className="container mx-auto px-4 py-8">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#8DBD4D]">
          Consult a Plastic and Cosmetic Surgeon at Kaivee Healthcare
        </h1>
        <h2 className="mt-2 text-2xl font-bold text-gray-800">
          Reconstructive and Aesthetic Surgery for Enhanced Confidence and Functionality
        </h2>
        <p className="text-gray-700 mt-1 max-w-2xl mx-auto">
          From reconstructive surgery for medical needs to aesthetic enhancements, 
          Plastic & Cosmetic Surgeons at Kaivee Healthcare restore both form and 
          function while boosting confidence. Our board-certified surgeons specialize 
          in precision, artistry, and patient safety.
        </p>
      </div>

      {/* What is a Plastic & Cosmetic Surgeon? */}
      <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-6">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">
            What Is a Plastic & Cosmetic Surgeon?
          </h2>
          <p className="text-gray-700 mt-4">
            A Plastic & Cosmetic Surgeon specializes in surgical modifications to 
            improve or restore the body. Whether reconstructing after trauma, disease, 
            or congenital conditions, or enhancing appearance through cosmetic surgery, 
            our surgeons combine surgical expertise with aesthetic judgment to achieve 
            natural, satisfying results.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/side-view-doctor-checking-patient-before-rhinoplasty_23-2149352178.jpg?updatedAt=1743490794695"
            alt="Plastic & Cosmetic Surgeon Consultation"
            width={500}
            height={300}
            className="rounded-xl shadow-md w-[80%] max-w-[500px]"
          />
        </div>
      </div>

      {/* List of Procedures by Plastic & Cosmetic Surgeons */}
      <div className="mt-12 p-6 rounded-xl shadow-md bg-[#D419580D]">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          The Continuous List of Procedures by Our Plastic & Cosmetic Surgeons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "▶ Rhinoplasty (Nose Reshaping)",
              desc: "Cosmetic surgery to correct deformities of the nasal region.",
            },
            {
              title: "▶ Facelift (Rhytidectomy)",
              desc: "A technique used to minimize signs of aging by firming skin and eliminating excess fat.",
            },
            {
              title: "▶ Blepharoplasty (Eyelid Surgery)",
              desc: "Surgical procedure to refresh the face by removing drooping eyelids and under-eye bags.",
            },
            {
              title: "▶ Liposuction & Body Contouring",
              desc: "Sculpting body areas by removing unwanted fat deposits from areas like the abdomen, thighs, arms, and neck.",
            },
            {
              title: "▶ Breast Surgeries",
              desc: "Breast augmentation, lifts, reductions, and reconstructions based on individual goals and needs.",
            },
            {
              title: "▶ Reconstructive Microsurgery",
              desc: "Advanced techniques for tissue transfer to reconstruct after complex trauma or cancer.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Kaivee Healthcare's Plastic & Cosmetic Surgeons */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Why Choose Kaivee Healthcare’s Plastic & Cosmetic Surgeons?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: "🟢 Medical Expertise Meets Artistic Vision",
              desc: "We combine surgical expertise with aesthetic judgment to deliver natural, harmonious results.",
            },
            {
              title: "🟢 Personalized Surgical Planning",
              desc: "Tailored procedures for each patient's anatomy, goals, and medical factors.",
            },
            {
              title: "🟢 Focus on Patient Safety",
              desc: "State-of-the-art facilities and sterilized surgical instruments ensure maximum safety.",
            },
            {
              title: "🟢 Pre- and Post-Procedure Care",
              desc: "Comprehensive consultations and detailed assessments for a smooth recovery journey.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to See a Plastic & Cosmetic Surgeon */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          When to See a Plastic & Cosmetic Surgeon?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            "Reconstructive surgery for bodily changes from trauma or injury.",
            "Reconstruction after cancer (e.g., breast restoration).",
            "Dissatisfaction with facial or body appearance seeking aesthetic enhancement.",
            "Congenital deformities (e.g., cleft lip, palate, hand deformities).",
            "Management of complicated scars, burns, or tissue loss.",
            "Functional deficits affecting daily life from skin, soft tissue, or musculature issues.",
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-600">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What to Expect Before Your Surgical Consult */}
      <div className="mt-12 flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-1/2">
          <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center lg:text-left">
            What to Expect Before Your Surgical Consult
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
            {[
              {
                title: "➡️ Initial Assessment",
                desc: "An evaluation of your concerns, medical history, and expectations, with photos taken for surgical planning.",
              },
              {
                title: "➡️ Exploring Options and Every Possibility",
                desc: "A thorough discussion of recommended procedures, risks, and recovery timelines to ensure informed consent.",
              },
              {
                title: "➡️ Personalized Treatment Pathway",
                desc: "Development of a customized surgical and postoperative treatment plan tailored to your goals and recovery needs.",
              },
            ].map((item, index) => (
              <div key={index} className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <InquiryForm />
        </div>
      </div>

      {/* Closing Statement */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Expert Surgical Care That Restores Function and Boosts Confidence
        </h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          Kaivee Healthcare's Plastic & Cosmetic Surgeons are dedicated to providing safe, ethical, and high-quality surgical care that enhances self-image and restores function.
        </p>
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



