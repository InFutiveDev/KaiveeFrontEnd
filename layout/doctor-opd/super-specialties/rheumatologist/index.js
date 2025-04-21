import Alternativebanner from "./rheumatologist-banner";
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
          Consult a Rheumatologist at Kaivee Healthcare
        </h1>
        <p className="mt-4 font-semibold text-2xl text-gray-800">
          Advanced Care for Joint, Muscle, and Autoimmune Conditions
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <p className="text-gray-700">
            Chronic joint pain, muscle stiffness, or fatigue can limit daily activities and lower quality of life. 
            Kaivee Healthcare Rheumatologists specialize in diagnosing and treating disorders of the joints, muscles, and immune system.  
          </p>
          <p className="mt-4 text-gray-700">
            Whether it's arthritis, lupus, or another autoimmune disorder, our specialists provide personalized care to relieve pain, 
            restore movement, and prevent long-term joint damage.
          </p>
          <p className="mt-4 text-gray-700">
          At Kaivee Healthcare, our Rheumatologists utilize advanced diagnostic techniques and contemporary treatment protocols to tackle basic and complicated rheumatic illnesses.
          </p>
          <p className="mt-4 text-gray-700">
          Kaivee Healthcare Rheumatologists are trained to manage intricate autoimmune and inflammatory disorders with accuracy and compassion. We wish to assist patients in staying mobile, pain-free, and leading a full life.
 
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/rheumatology-concept-illustration_114360-9278.jpg?updatedAt=1743505597455"
            alt="Rheumatology Consultation"
            width={500}
            height={250}
            className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* What is a Rheumatologist? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">What is a Rheumatologist and What Do They Treat?</h2>
        <p className="mt-4 text-gray-700">
          Rheumatology is the study of the musculoskeletal system (joints and connective tissues) and the autoimmune system 
          (the body's defense against infections). Conditions often involve pain, inflammation, and degeneration, affecting joints, 
          muscles, and even organs like the lungs, heart, and kidneys.
        </p>
        <p className="mt-4 text-gray-700">
          At Kaivee Healthcare, our Rheumatologists use cutting-edge diagnostic techniques and modern treatment protocols 
          to manage basic and complex rheumatic illnesses.
        </p>
      </div>

      {/* Conditions Treated */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Conditions Treated by Our Rheumatologists</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "🔸 Rheumatoid Arthritis (RA)", desc: "An autoimmune disease that causes chronic joint inflammation, pain, swelling, and potential deformity if untreated." },
            { title: "🔸 Osteoarthritis (OA)", desc: "Degenerative joint disease due to cartilage breakdown, leading to pain and stiffness, commonly in knees, hips, hands, and spine." },
            { title: "🔸 Ankylosing Spondylitis", desc: "A type of arthritis that affects the spine and sacroiliac joints, causing chronic back pain, stiffness, and spinal fusion." },
            { title: "🔸 Systemic Lupus Erythematosus (SLE)", desc: "A complex autoimmune disease that can impact joints, skin, kidneys, heart, and lungs." },
            { title: "🔸 Gout and Pseudogout", desc: "Crystal-induced arthritis leading to sudden, severe joint pain, often in the big toe, knees, or wrists." },
            { title: "🔸 Myositis & Muscle Diseases", desc: "Inflammatory muscle diseases that cause weakness and mobility loss." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnostic Methods */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Diagnostic Methods & Evaluations</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "▶ Full Joint Evaluations", desc: "Comprehensive physical examinations to check for inflammation, swelling, and deformities." },
            { title: "▶ ANA & Autoimmune Panels", desc: "Blood tests to detect antibodies associated with autoimmune diseases like lupus or scleroderma." },
            { title: "▶ Joint Aspiration & Synovial Fluid Analysis", desc: "Fluid extraction from swollen joints to check for crystals (gout) or infections." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Kaivee Healthcare? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Kaivee Healthcare?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "🟢 Expertise in Autoimmune Diseases", desc: "Specialized knowledge in systemic autoimmune disorders affecting multiple organs." },
            { title: "🟢 Comprehensive, Multidisciplinary Care", desc: "Collaboration with physiotherapists, orthopedic specialists, and nephrologists for holistic treatment." },
            { title: "🟢 Early Diagnosis & Prevention", desc: "Early intervention to prevent irreversible joint damage and improve quality of life." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to See a Rheumatologist */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-2/3">
        <h2 className="text-2xl font-semibold text-gray-800">When Should You See a Rheumatologist?</h2>
        <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
          <li>Ongoing joint pain, stiffness, or swelling lasting over six weeks</li>
          <li>Morning stiffness lasting more than 30 minutes</li>
          <li>Unexplained muscle weakness or fatigue</li>
          <li>Skin rashes or ulcers associated with joint symptoms</li>
          <li>Recurring gout or crystal arthritis</li>
          <li>Family history of autoimmune diseases</li>
          <li>Difficulty performing daily tasks due to joint pain</li>
          <li>Unexplained fevers, weight loss, or systemic inflammation</li>
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



