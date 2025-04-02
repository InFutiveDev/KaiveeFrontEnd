import Alternativebanner from "./ophthalmologist-banner";
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

     {/* <AboutUs /> */}
     <div className="container mx-auto px-4 lg:px-16 py-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#346D14]">
          Ophthalmology Services at Kaivee Healthcare
        </h1>
        <p className="mt-4 font-semibold text-2xl text-gray-800">
          Precision Eye Care Backed by Clinical Excellence
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <p className="text-gray-700">
            Good eyesight is crucial for navigating life, yet many individuals ignore early signs of eye conditions until it's too late. At Kaivee Healthcare, our trained specialists provide precise diagnoses, medical treatment, and advanced surgical solutions to preserve and restore vision.
          </p>
          <p className="mt-4 text-gray-700">
            We offer comprehensive eye care services, from routine exams to complex procedures for conditions such as glaucoma and cataracts, using state-of-the-art technology and medical expertise.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/ophthalmologists-check-patients-vision_107791-13471%20(1).jpg?updatedAt=1743592439879"
            alt="Ophthalmology Consultation"
            width={500}
            height={250}
            className="rounded-xl shadow-lg w-[80%] max-w-[500px] transform transition duration-500 hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>

      {/* Conditions Treated */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Eye Conditions We Treat
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "🔸 Refractive Errors", desc: "Diagnosis and correction of myopia, hyperopia, and astigmatism with glasses, contacts, or LASIK." },
            { title: "🔸 Cataracts", desc: "Surgical removal of cloudy lenses with premium intraocular lens implantation." },
            { title: "🔸 Glaucoma", desc: "Pressure control through medication, laser treatments, or surgery to prevent optic nerve damage." },
            { title: "🔸 Age-Related Macular Degeneration", desc: "Early detection and management to preserve central vision." },
            { title: "🔸 Dry Eye Syndrome", desc: "Customized treatment for chronic eye irritation and inflammation due to tear production issues." },
            { title: "🔸 Eye Infections & Injuries", desc: "Emergency treatment for infections, corneal abrasions, and foreign object injuries." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#346D14] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ophthalmology Services */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Diagnostic & Surgical Services
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "👉 Comprehensive Eye Examinations", desc: "Routine and specialized exams to detect eye diseases early." },
            { title: "👉 Tonometry & Visual Field Testing", desc: "Measuring eye pressure and peripheral vision for glaucoma screening." },
            { title: "👉 Cataract Surgery & IOL Implantation", desc: "Safe and effective vision restoration through intraocular lens implants." },
            { title: "👉 Advanced Laser Procedures", desc: "High-precision laser treatments for glaucoma, retinal issues, and secondary cataracts." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#346D14] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Kaivee Healthcare? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Trust Kaivee Healthcare for Your Eye Care?
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "🟢 General & Subspecialty Ophthalmologists", desc: "Expert care in retina, cornea, glaucoma, and pediatric ophthalmology." },
            { title: "🟢 Cutting-Edge Diagnostic Tools", desc: "Utilizing digital retinal imaging, corneal topography, and advanced testing for precision care." },
            { title: "🟢 Personalized Vision Plans", desc: "Every patient receives a tailored plan for corrective lenses, medical therapy, or surgery." },
            { title: "🟢 Eye Care for All Ages", desc: "From pediatric eye exams to senior vision health, we cater to all generations." },
            { title: "🟢 Patient Comfort & Safety", desc: "We follow strict sterilization and safety protocols for all treatments." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#346D14] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800">
            Prioritize Your Vision Health
          </h2>
          <p className="mt-4 text-gray-700">
            Even small changes in vision clarity or eye strain could be early warning signs of serious conditions. Regular checkups ensure that your eyes remain healthy and any issues are caught early.
          </p>
          <p className="mt-4 text-gray-700">
          Lifelong vision care with you and Kaivee Healthcare ophthalmologists. And with early screenings, expert treatments and a compassionate team on your side, eye health challenges will never be something you take on alone.          </p>
        </div>

        {/* Enquiry Form */}
        <div className="lg:w-1/3 flex justify-center">
          <InquiryForm />
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#FAFAFA]">
        <WhyChoose data={data} />
      </div>
      <div className="container mt-6">
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



