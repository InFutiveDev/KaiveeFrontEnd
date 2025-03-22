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

     
  {/* Overlay Effect */}
  <div className="container mx-auto px-4 py-12">
  {/* Heading */}
  <h1 className="text-4xl font-bold text-center text-[#8DBD4D] mb-12 animate-fadeIn">
    Partner with Us for Health & Wellness
  </h1>

  {/* Main Content Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left: Image */}
    <div className="relative">
      <img 
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/fca55337c2049227c603ab596abfa38c%20(1).jpg?updatedAt=1742369731971" 
        alt="Partnership" 
        className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
      />
    </div>

    {/* Right: Content */}
    <div className=" animate-slideInRight">
      <h2 className="text-2xl font-semibold text-black">Why Partner with Us?</h2>
      <p className="text-gray-700 leading-relaxed">
      Become a Partner with Kaivee Healthcare Today and Play a Vital Role in Ensuring Community Wellness While Building a Thriving Business. Join forces with us to bring quality healthcare services and solutions to a wider demographic.
      </p>

      <div className="space-y-4 mt-2">
        <h3 className="text-xl font-semibold text-black">Partnership Benefits:</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Access to a broad patient base</li>
          <li>Collaboration with leading healthcare professionals</li>
          <li>Advanced medical infrastructure</li>
          <li>Opportunities for long-term growth</li>
          <li>Comprehensive support and training</li>
        </ul>
      </div>

      {/* CTA Button */}
      {/* <a href="/contact-us" className="inline-block">
        <button className="mt-2 px-6 py-3 bg-[#D41958] text-white rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:bg-[#8DBD4D] ">
          Become a Partner
        </button>
      </a> */}
    </div>
  </div>
  {/* Additional Info Section */}
  <div className="mt-12 flex flex-wrap lg:flex-nowrap gap-8">
  {/* Left Section - Additional Information */}
  <div className="flex-1 flex flex-col justify-center space-y-6">
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold text-black">Global Network</h3>
      <p className="text-gray-600 mt-2">Join our expansive healthcare network worldwide.</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold text-black">Innovation & Research</h3>
      <p className="text-gray-600 mt-2">Collaborate on cutting-edge medical research and innovations.</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold text-black">Trusted by Experts</h3>
      <p className="text-gray-600 mt-2">Work with highly reputed healthcare institutions and professionals.</p>
    </div>
  </div>

  {/* Right Section - Inquiry Form */}
  <div className="flex-1 flex items-center justify-center  p-6 rounded-lg ">
    <CorporateHealthEnquiry />
  </div>
</div>

  {/* Who Can Partner Section */}
  <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-md animate-fadeIn">
    <h2 className="text-2xl font-semibold text-center text-black mb-6">Who Can Partner with Kaivee Healthcare?</h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
      <li className="flex items-center"><span className="text-[#D41958] text-xl mr-2">➢</span> Health professionals seeking to grow their practice.</li>
      <li className="flex items-center"><span className="text-[#D41958] text-xl mr-2">➢</span> Healthcare services entrepreneurs.</li>
      <li className="flex items-center"><span className="text-[#D41958] text-xl mr-2">➢</span> Owners of diagnostic labs looking to associate with a brand.</li>
      <li className="flex items-center"><span className="text-[#D41958] text-xl mr-2">➢</span> Investors interested in getting into healthcare.</li>
      <li className="flex items-center"><span className="text-[#D41958] text-xl mr-2">➢</span> Hospitals and clinics looking to expand their service lines.</li>
      <li className="flex items-center"><span className="text-[#D41958] text-xl mr-2">➢</span> Corporates planning wellness programs for employees.</li>
      <li className="flex items-center"><span className="text-[#D41958] text-xl mr-2">➢</span> NGOs and organizations involved in healthcare outreach.</li>
    </ul>
  </div>

  {/* How to Become a Partner Section */}
  <div className="mt-16 bg-[#D419580D] p-8 rounded-lg shadow-md animate-fadeIn">
    <h2 className="text-2xl font-semibold text-center text-black mb-6">How to Become a Partner?</h2>
    <div className="space-y-4 text-gray-700 text-lg">
      <div className="flex items-start">
        <span className="text-[#D41958] text-xl mr-3">✓</span>
        <p><strong>Express Interest:</strong> Submit your inquiry via our partnership form, phone, or email.</p>
      </div>
      <div className="flex items-start">
        <span className="text-[#D41958] text-xl mr-3">✓</span>
        <p><strong>First Discussion & Proposal:</strong> Our representative will discuss your objectives and recommend the best partnership model.</p>
      </div>
      <div className="flex items-start">
        <span className="text-[#D41958] text-xl mr-3">✓</span>
        <p><strong>Agreement & Onboarding:</strong> Once agreed, we formalize the partnership and provide training.</p>
      </div>
      <div className="flex items-start">
        <span className="text-[#D41958] text-xl mr-3">✓</span>
        <p><strong>Launch & Ongoing Support:</strong> We assist you through the launch process and provide ongoing operational, marketing, and technical support.</p>
      </div>
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

