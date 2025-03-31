import Alternativebanner from "./orthopedic-surgeon-banner";
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
      Consult an Orthopaedic Surgeon at Kaivee Healthcare
    </h1>
    <h2 className="mt-2 text-2xl font-bold text-gray-800">
      Precision Care for Bones, Joints, and Muscles
    </h2>
    <p className="text-gray-700 mt-1 max-w-2xl mx-auto text-center">
      Whether you have chronic joint pain, a sports injury, or require surgical correction of fractures, our expert team offers state-of-the-art care to restore mobility and improve your quality of life.
    </p>
  </div>

  {/* What is an Orthopaedic Surgeon */}
  <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-6">
    <div className="lg:w-1/2">
      <h2 className="text-2xl font-semibold text-gray-800">
        What Is an Orthopaedic Surgeon?
      </h2>
      <p className="text-gray-700 mt-4">
        An Orthopaedic Surgeon is a highly trained physician specializing in surgical and non-surgical treatments for bones, joints, muscles, ligaments, and tendons. From fixing fractures to joint replacements, they help restore mobility and reduce pain.
      </p>
      <p className="text-gray-700 mt-4">
      With our orthopaedic surgeons having years of experience in treating both normal and special orthopaedic conditions effectively with minimum pain and quick recovery, Kaivee Healthcare are also their on your side.      </p>
    </div>
    <div className="flex justify-center lg:w-1/2">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/orthopedic-concept-illustration_114360-8817.jpg?updatedAt=1743424873239"
        alt="Orthopaedic Surgeon Consultation"
        width={500}
        height={300}
        className="rounded-xl shadow-md w-[80%] max-w-[500px]"
      />
    </div>
  </div>

  {/* Treatments and Specializations */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Where Our Orthopaedic Surgeons Change Lives
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        {
          title: "🔸 Joint Reconstruction & Replacement",
          desc: "Our specialists perform knee, hip, and shoulder replacements using advanced prosthetic implants for enhanced mobility.",
        },
        {
          title: "🔸 Trauma Surgery & Fracture Management",
          desc: "Precision fracture fixation with plates, screws, and rods to ensure proper healing and function.",
        },
        {
          title: "🔸 Spinal Surgery",
          desc: "Treatment for herniated discs, spinal instability, and chronic back pain through surgical intervention.",
        },
        {
          title: "🔸 Sports Injury Repair",
          desc: "Expert ligament reconstruction (ACL, PCL), tendon repair, and arthroscopy to restore full function.",
        },
        {
          title: "🔸 Pediatric Orthopaedics",
          desc: "Specialized care for congenital deformities like clubfoot, hip dysplasia, and limb abnormalities.",
        },
      ].map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Advanced Surgical Solutions */}
  <div className="mt-12 p-6 rounded-xl shadow-md bg-[#D419580D]">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Offering Customized Surgical Solutions
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        {
          title: "▶ Minimally Invasive Arthroscopy",
          desc: "Small incisions and specialized equipment for precise joint treatments with minimal downtime.",
        },
        {
          title: "▶ Joint Resurfacing & Replacement",
          desc: "Partial or total joint replacements to relieve pain and restore function.",
        },
        {
          title: "▶ Spinal Decompression & Fusion",
          desc: "Surgical correction to relieve nerve compression and stabilize the spine.",
        },
        {
          title: "▶ Deformity Corrections",
          desc: "Corrective surgery for bow legs, knock knees, and limb discrepancies with detailed precision.",
        },
      ].map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Why Choose Us */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      What Makes Our Orthopaedic Surgeons Different?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {[
        {
          title: "✅ Experience With All Age Groups",
          desc: "We treat everyone—from children with birth defects to elderly patients needing joint replacements.",
        },
        {
          title: "✅ Comprehensive Rehabilitation",
          desc: "Our specialists work with physiotherapists and pain management experts for holistic recovery.",
        },
        {
          title: "✅ Patient-Centered Approach",
          desc: "We ensure that you understand your procedure, risks, and expected outcomes to make informed decisions.",
        },
      ].map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  

  {/* How to Book an Appointment */}
  <div className="mt-12 flex flex-col lg:flex-row items-start gap-8">
    <div className="lg:w-1/2">
      <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center lg:text-left">
        How to Book an Orthopaedic Surgeon Appointment?
      </h2>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
        {[
          {
            title: "1. Schedule Your Consultation",
            desc: "Book an appointment by calling Kaivee Healthcare or through our website.",
          },
          {
            title: "2. Meet Our Specialist",
            desc: "The surgeon will evaluate your condition and recommend further diagnostic tests if needed.",
          },
          {
            title: "3. Get a Personalized Treatment Plan",
            desc: "Based on the diagnosis, our experts will guide you through surgical or non-surgical options.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg"
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Inquiry Form */}
    <div className="w-full lg:w-1/2 flex justify-center">
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



