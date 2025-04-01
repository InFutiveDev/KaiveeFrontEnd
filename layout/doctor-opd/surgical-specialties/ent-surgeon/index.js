import Alternativebanner from "./ent-surgeon-banner";
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

      <div className="container mx-auto px-4 py-8">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#8DBD4D]">
          Consult an ENT Surgeon at Kaivee Healthcare
        </h1>
        <h2 className="mt-2 text-2xl font-bold text-gray-800">
          Specialized Surgical Care for Ear, Nose, and Throat Conditions
        </h2>
        <p className="text-gray-700 mt-1 max-w-2xl mx-auto">
          From chronic sinus infections to hearing problems, our ENT Surgeons provide advanced care 
          to restore function and comfort for both adults and children. We offer a range of surgical treatments 
          for improved breathing, hearing, and voice quality.
        </p>
      </div>

      {/* What Does an ENT Surgeon Do? */}
      <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-6">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">
            What Does an ENT Surgeon Do?
          </h2>
          <p className="text-gray-700 mt-4">
            An ENT Surgeon, also known as an Otolaryngologist, specializes in diagnosing and surgically 
            managing diseases of the ear, nose, throat, head, and neck. Our surgeons handle a variety of 
            cases, from functional issues like hearing loss or breathing difficulties to aesthetic concerns 
            like nasal deformities.
          </p>
          <p className="text-gray-700 mt-4">
          Our surgeons provide advanced care, from complex procedures on the delicate structures of the ear to minimally invasive surgeries of the sinuses, with precision and expertise. Personalized surgical treatments for better breathing, hearing and voice.
        </p>
        <p className="text-gray-700 mt-4">Our ENT Surgeons at Kaivee Healthcare can handle all surgical aspects from the common tonsillectomies to the complex anatomy of the inner ear.</p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/otolaryngologist-concept-illustration_114360-25809.jpg?updatedAt=1743493667517"
            alt="ENT Surgeon Consultation"
            width={500}
            height={300}
            className="rounded-xl shadow-md w-[80%] max-w-[500px]"
          />
        </div>
      </div>

      {/* What We Treat | Our ENT Surgeons */}
      <div className="mt-12 p-6 rounded-xl shadow-md bg-[#D419580D]">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          What We Treat | Our ENT Surgeons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "🔸 Chronic Sinusitis",
              desc: "When medications fail, sinus surgery may be required to relieve facial pain, congestion, and headaches.",
            },
            {
              title: "🔸 Drug-Induced Ototoxicity and Ear Infections",
              desc: "Surgery can restore hearing or prevent complications from conditions like otosclerosis or chronic ear infections.",
            },
            {
              title: "🔸 Tonsils and Adenoids Advances",
              desc: "In children, frequent infections may make tonsil and adenoid removal necessary to improve breathing and comfort.",
            },
            {
              title: "🔸 Voice & Swallowing Disorders",
              desc: "Surgical treatment to reconstruct vocal cords and address throat cancers or swallowing disorders.",
            },
            {
              title: "🔸 Head and Neck Tumors",
              desc: "Removal of non-cancerous or cancerous growths in the throat, neck, or salivary glands, with possible reconstructive surgery.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ENT Surgery Procedures */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          ENT (Otolaryngology) Surgeries at Kaivee Healthcare
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "▶ Functional Endoscopic Sinus Surgery (FESS)",
              desc: "A minimally invasive procedure to treat blocked sinuses and restore normal sinus drainage.",
            },
            {
              title: "▶ Ear Surgery (Tympanoplasty, Mastoidectomy)",
              desc: "Reconstructive surgery to repair perforated eardrums or treat chronic ear infections.",
            },
            {
              title: "▶ Tonsillectomy and Adenoidectomy",
              desc: "Surgical removal of tonsils and adenoids, typically for children with chronic infections or breathing problems.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Kaivee Healthcare’s ENT Surgeons */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Why Choose Kaivee Healthcare’s ENT Surgeons?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: "🟢 Anatomical Surgical Precision",
              desc: "Our ENT surgeons possess a wealth of experience working with the sensitive structures of the head and neck.",
            },
            {
              title: "🟢 Faster Recovery with Minimally Invasive Techniques",
              desc: "We prioritize less invasive surgical methods to minimize pain, scarring, and recovery time.",
            },
            {
              title: "🟢 Comprehensive Care with Head and Neck Specialists",
              desc: "We collaborate with audiologists, speech therapists, and allergy specialists for complete patient care.",
            },
            {
              title: "🟢 Individualized Care Plans",
              desc: "Every procedure is thoroughly discussed with the patient and their family, including risks and recovery plans.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

 
       {/* How to Prepare for Your Appointment */}
       <div className="mt-12 flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-1/2">
          <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center lg:text-left">
            How to Prepare for Your Appointment
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
            {[
              {
                title: "➡️ Diagnostic Evaluation",
                desc: "Comprehensive analysis of imaging tests, lab reports, and medical history.",
              },
              {
                title: "➡️ Exploring Surgical Options",
                desc: "A transparent overview of recommended procedures, risks, and recovery timelines.",
              },
              {
                title: "➡️ Pre-Operative Preparations",
                desc: "Health screenings, lifestyle guidance, and medication adjustments before surgery.",
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
          Ear, Nose & Throat Surgery: Restoring Comfort and Function
        </h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          Kaivee Healthcare’s ENT Surgeons provide exceptional care to enhance hearing, breathing, and overall quality of life, from chronic sinusitis treatment to intricate reconstructive surgeries. We’re here to help you feel better.
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



