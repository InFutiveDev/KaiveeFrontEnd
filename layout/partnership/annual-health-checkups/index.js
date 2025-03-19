import Ecgbanner from "./annual-banner";
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

const AnnualLayout = () => {
  return (
    <>
      {/* className="sliders banner_slider_wrap_facilities" */}
      <section>
        {/* className="web-view relative cstm-flexbox flexbox container" */}
        <div>
          <Ecgbanner />
        </div>
       
      </section>

      
      <div className="py-16">
  <div className="container mx-auto px-6">
    {/* Hero Section */}
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-blue-900">Annual Health Check-Ups at Our Clinic</h1>
      <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
        Get a complete health assessment with advanced diagnostics and expert consultations for a healthier life.
      </p>
    </div>

    {/* Image + Content Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Image Section */}
      <div className="relative">
        <img 
          src="https://ik.imagekit.io/InFutiveTechnology/kaivee/15e61adf8c0e947a4e7a398bba5154fc%20(1).jpg?updatedAt=1742370907015" 
          alt="Health Check-Up" 
          className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </div>

      {/* Information Section */}
      <div className="space-y-6 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-blue-900">Comprehensive Health Check-Up</h2>
        <p className="text-gray-700 leading-relaxed">
          Ensure early detection of potential health issues with our state-of-the-art diagnostic tools and professional medical guidance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="font-semibold text-blue-800">✔ Advanced Equipment</h3>
            <p className="text-gray-600 mt-1">Modern diagnostic tools for precise health assessment.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="font-semibold text-blue-800">✔ Early Detection</h3>
            <p className="text-gray-600 mt-1">Identify health risks before they become serious.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="font-semibold text-blue-800">✔ Expert Consultation</h3>
            <p className="text-gray-600 mt-1">Personalized health guidance from specialists.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="font-semibold text-blue-800">✔ Quick Reports</h3>
            <p className="text-gray-600 mt-1">Receive timely and accurate test results.</p>
          </div>
        </div>

        {/* CTA Button */}
        <a href="/contact-us" className="inline-block">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:bg-blue-700">
            Book Your Health Check-Up
          </button>
        </a>
      </div>
    </div>
  </div>


    </div>
 

    </>
  );
};

export default AnnualLayout;

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

const leaders = [
  { name: "Dr. ABC", role: "Director", degree: "MBBS", image: img1 },
  { name: "Dr. XYZ", role: "Senior Consultant", degree: "MBBS", image: img2 },
  { name: "Dr. !@#", role: "Radiologist", degree: "MD in Radiodiagnosis", image: img3 },
  { name: "Dr. 123", role: "Consultant", degree: "MBBS, MD(Radio-diagnosis)", image: img4 },
];

