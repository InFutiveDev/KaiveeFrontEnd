import Ecgbanner from "./partner-banner";
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
import CorporateHealthEnquiry from "components/inquiryForm/CorporateHealthEnquiry";

const PartnerLayout = () => {
  return (
    <>
      {/* className="sliders banner_slider_wrap_facilities" */}
      <section>
        {/* className="web-view relative cstm-flexbox flexbox container" */}
        <div>
          <Ecgbanner />
        </div>
       
      </section>

      <div className="relative bg-gradient-to-r from-pink-50 to-pink-100 py-12">
  {/* Overlay Effect */}
  <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold text-center text-blue-900 mb-12 animate-fadeIn">
      Partner with Us for Health & Wellness
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Section with Image */}
      <div className="relative">
        <img 
          src="https://ik.imagekit.io/InFutiveTechnology/kaivee/fca55337c2049227c603ab596abfa38c%20(1).jpg?updatedAt=1742369731971" 
          alt="Partnership" 
          className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </div>

      {/* Right Section with Content */}
      <div className="space-y-6 animate-slideInRight">
        <h2 className="text-2xl font-semibold text-blue-900">Why Partner with Us?</h2>
        <p className="text-gray-700 leading-relaxed">
          Join hands with us to deliver quality healthcare solutions. We collaborate with medical suppliers, laboratories, and service providers to enhance patient care and wellness.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-800">Partnership Benefits:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Access to a broad patient base</li>
            <li>Collaboration with leading healthcare professionals</li>
            <li>Advanced medical infrastructure</li>
            <li>Opportunities for long-term growth</li>
            <li>Comprehensive support and training</li>
          </ul>
        </div>

        {/* Call-to-Action Button */}
        <a href="/contact-us" className="inline-block">
          <button className="px-6 py-3 bg-[#D41958] text-white rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:bg-blue-700">
            Become a Partner
          </button>
        </a>
      </div>
    </div>
    

    {/* Additional Information Section */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold text-blue-900">Global Network</h3>
        <p className="text-gray-600 mt-2">Join our expansive healthcare network worldwide.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold text-blue-900">Innovation & Research</h3>
        <p className="text-gray-600 mt-2">Collaborate on cutting-edge medical research and innovations.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold text-blue-900">Trusted by Experts</h3>
        <p className="text-gray-600 mt-2">Work with highly reputed healthcare institutions and professionals.</p>
      </div>
    </div>
    <div className="mt-6 col-span-1 h-min   lg:top-[197px] xl:top-[161px]  lg:order-last order-first">
                 
                  <CorporateHealthEnquiry />
                </div>
  </div>
</div>



    </>
  );
};

export default PartnerLayout;

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

