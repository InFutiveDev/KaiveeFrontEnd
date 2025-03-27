import Alternativebanner from "./general-physician";
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
{/* Hero Section */}
<section>
  <div>
    <Alternativebanner />
  </div>
</section>

<div className="container mx-auto px-4 py-8">
  {/* Title */}
  <div className="text-center">
    <h1 className="text-3xl font-bold text-[#8DBD4D]">
      General Physician Consultation at Kaivee Healthcare
    </h1>
    <h2 className="mt-2 text-2xl font-bold text-gray-800">
      Your First Step Towards Better Health
    </h2>
    <p className="text-gray-700 mt-1 max-w-2xl mx-auto text-center">
    Our General Physicians (GPs) are your first point of contact at Kaivee Healthcare for medical advice, diagnosis and treatment for all kinds of health issues. From a common fever to chronic conditions such as diabetes or general preventive health check-ups, some of our GP'S provide detailed and attentive patient-centric review and treatment for any health condition.
    </p>
  </div>

  {/* Why Choose Us Section */}
  <div className="mt-12 p-6 rounded-xl shadow-md bg-[#D419580D]">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Why Choose Kaivee Healthcare for General Physician Services?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {[
        {
          title: "Experienced Medical Professionals",
          desc: "Our GPs have vast experience in diagnosing and treating a wide range of medical issues.",
        },
        {
          title: "Comprehensive Consultations",
          desc: "We provide in-depth consultations to understand symptoms, medical history, and lifestyle.",
        },
        {
          title: "Continuity of Care",
          desc: "We offer long-term health maintenance and treatment follow-ups for chronic conditions.",
        },
        {
          title: "Coordination with Specialists",
          desc: "If needed, we refer you to top specialists in our network for advanced care.",
        },
      ].map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Conditions Treated */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Conditions We Treat
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        "Fever, Cold & Flu",
        "Respiratory Issues (Asthma, Bronchitis)",
        "Gastrointestinal Problems (Indigestion, Acid Reflux)",
        "Hypertension & Diabetes Management",
        "Skin Conditions (Rashes, Infections)",
        "Headaches & Migraines",
        "Minor Injuries & Wound Care",
        "Annual Check-ups & Preventive Care",
      ].map((condition, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-600">{condition}</p>
        </div>
      ))}
    </div>
  </div>

  {/* When to See a Doctor */}
  <div className="mt-12 p-6 rounded-xl shadow-md bg-[#D419580D]">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      When Should You See a General Physician?
    </h2>

    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mt-6">
      {/* List */}
      <ul className="list-disc pl-5 space-y-2 text-gray-700 lg:w-1/2">
        <li>People suffering from common ailments like body aches, fever, infections.</li>
        <li>Patients with chronic diseases such as diabetes and hypertension.</li>
        <li> People looking for preventive health check-ups and general wellness advice.</li>
        <li>Older people with ongoing needs for health monitoring.</li>
        <li>Those who require referrals to specialized care.</li>
        <li>Routine health check-ups for busy individuals.</li>
      </ul>

      {/* Image */}
      <div className="flex justify-center lg:w-1/2">
        <Image
          src="https://ik.imagekit.io/InFutiveTechnology/kaivee/portrait-female-pediatrician-work_23-2151686700.jpg?updatedAt=1742981219205"
          alt="Doctor Consultation"
          width={500}
          height={300}
          className="rounded-xl shadow-md w-[80%] max-w-[500px]"
        />
      </div>
    </div>
  </div>

  {/* How to Book an Appointment */}
  <div className="mt-12 flex flex-col lg:flex-row items-start gap-8">
    <div className="lg:w-1/2">
      <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center lg:text-left">
        How to Book a General Physician Appointment?
      </h2>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 mt-6">
        {[
          {
            title: "1. Pick Your Method of Appointment",
            desc: "Choose an OPD appointment or a home visit as per your convenience.",
          },
          {
            title: "2. Schedule Your Appointment",
            desc: "We also have a helpline and an online website where you can book a schedule.",
          },
          {
            title: "3. Schedule an Appointment with Our General Practitioner",
            desc: "Interact with professional physicians, talk about what is bothering you and obtain a complete assessment.",
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

    {/* Form */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <InquiryForm />
    </div>
  </div>
</div>

{/* Why Choose Us Component */}
<div className="bg-[#FAFAFA]">
  <WhyChoose data={data} />
</div>

<div className="container pb-[30px] text-center">
  <p className="font-semibold">
    Kaivee Healthcare is your best partner for health & checkups.
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



