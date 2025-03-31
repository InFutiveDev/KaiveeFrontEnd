import Alternativebanner from "./general-surgeon-banner";

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
{/* Hero Section */}
<section>
  <div>
    <Alternativebanner />
  </div>
</section>

<div className="container mx-auto px-4 py-8">
  {/* Title Section */}
  <div className="text-center">
    <h1 className="text-3xl font-bold text-[#8DBD4D]">
      Consult with an Experienced General Surgeon at Kaivee Healthcare
    </h1>
    <h2 className="mt-2 text-2xl font-bold text-gray-800">
      Expert Surgical Solutions Tailored for Your Health Needs
    </h2>
    <p className="text-gray-700 mt-1 max-w-2xl mx-auto text-center">
      Our General Surgeons provide advanced surgical expertise and compassionate care. From minor procedures to complex abdominal surgeries, we ensure a safe and effective treatment approach.
    </p>
  </div>

   {/* When to See a General Surgeon */}
   <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      When Should You Consult a General Surgeon?
    </h2>

    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mt-6">
      <ul className="list-disc pl-5 space-y-2 text-gray-700 lg:w-1/2">
      <li>Recurrent abdominal pain or swelling.</li>
    <li>Visible or painful lumps (hernia, breast lump, thyroid swelling).</li>
  
    <li>Pain, nausea, or indigestion from gallbladder issues.</li>
    <li>Injuries requiring surgical intervention.</li>
    <li>Unexplained weight loss with digestive issues.</li>
   
    <li>Non-healing wounds, ulcers, or infections requiring surgical treatment.</li>
    <li>Skin and soft tissue cysts, tumors, or abscesses that need removal.</li>
   
    <li>Recurring or severe appendicitis symptoms.</li>
      </ul>

      {/* Image */}
      <div className="flex justify-center lg:w-1/2">
        <Image
          src="https://ik.imagekit.io/InFutiveTechnology/kaivee/ordinary-busy-day-surgeon_329181-19717.jpg?updatedAt=1743422998733"
          alt="General Surgeon Consultation"
          width={500}
          height={300}
          className="rounded-xl shadow-md w-[80%] max-w-[500px]"
        />
      </div>
    </div>
  </div>

  {/* Why Choose Us */}
  <div className="mt-12 p-6 rounded-xl shadow-md bg-[#D419580D]">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Why Choose Kaivee Healthcare for General Surgery?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {[
        {
          title: "Experienced General Surgeons",
          desc: "Our specialists are skilled in various surgical procedures, ensuring expert care for every patient.",
        },
        {
          title: "Advanced Surgical Techniques",
          desc: "We offer minimally invasive laparoscopic surgeries for faster recovery and reduced discomfort.",
        },
        {
          title: "Comprehensive Pre & Post-Operative Care",
          desc: "From initial consultation to recovery, our team provides full guidance and support.",
        },
        {
          title: "Collaboration with Specialists",
          desc: "Our surgeons work with gastroenterologists, oncologists, and other specialists for holistic treatment.",
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
      Conditions Treated by Our General Surgeons
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        "Hernias (inguinal, umbilical, femoral, incisional)",
        "Appendicitis & Appendectomy",
        "Gallbladder Issues (Gallstones, Cholecystitis)",
        "Breast Lumps (Benign & Malignant)",
        "Thyroid Swellings & Surgical Treatments",
        "Skin & Soft Tissue Tumors/Cysts Removal",
        "Varicose Veins Surgery",
        "Intestinal & Abdominal Surgeries",
        "Emergency Trauma & Surgical Biopsies",
      ].map((condition, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-600">{condition}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Surgical Procedures */}
  <div className="mt-12 p-6 rounded-xl shadow-md bg-[#D419580D]">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Essential Surgical Procedures We Perform
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {[
        {
          title: "🔹 Minimally Invasive (Laparoscopic) Surgery",
          desc: "We specialize in laparoscopic surgery for hernia repair, gallbladder removal, and appendectomy, ensuring minimal scarring and faster recovery.",
        },
        {
          title: "🔹 Open Surgeries for Complex Cases",
          desc: "When laparoscopic surgery isn't feasible, we perform open surgeries with precision and safety.",
        },
        {
          title: "🔹 Emergency Surgeries",
          desc: "We provide prompt surgical intervention for appendicitis, trauma, and critical conditions requiring urgent care.",
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
        How to Book a General Surgeon Appointment?
      </h2>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
        {[
          {
            title: "1. Schedule Your Consultation",
            desc: "Book an appointment by calling Kaivee Healthcare or through our website.",
          },
          {
            title: "2. Meet Our General Surgeon",
            desc: "The surgeon will assess your condition and recommend any necessary diagnostic tests.",
          },
          {
            title: "3. Plan Your Surgical Treatment",
            desc: "If surgery is required, we’ll guide you through the procedure, risks, and benefits.",
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






