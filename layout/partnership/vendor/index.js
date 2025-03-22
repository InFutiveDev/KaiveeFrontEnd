import Ecgbanner from "./vendor-banner";
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

const VendorLayout = () => {
  return (
    <>
      {/* className="sliders banner_slider_wrap_facilities" */}
      <section>
        {/* className="web-view relative cstm-flexbox flexbox container" */}
        <div>
          <Ecgbanner />
        </div>
       
      </section>

      
      <div className="container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold text-center text-[#8DBD4D] mb-8">Become a Vendor - Kaivee Healthcare</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h2 className="text-2xl font-semibold">Expand Your Business by Partnering with Us</h2>
      <p className="text-gray-700 mt-4">
      We partner with trusted, high-quality vendors to provide the best possible healthcare services. Misleading people into thinking you are a re-seller, wholesaler or distributor of a vendor that you are not. If you supply medical equipment, pharmaceuticals, healthcare consumables, or wellness products, we invite you to be part of our vendor network company and take your business to the next level with us.
      </p>

      <div className="mt-6 space-y-4">
        <h3 className="text-xl font-semibold">Who Can Apply as a Vendor?</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Medical equipment suppliers.</li>
          <li>Pharmaceutical companies.</li>
          <li>Manufacturers of PPE and medical consumables.</li>
          <li>Suppliers of lab equipment and reagents.</li>
          <li>Vendors of wellness and fitness products.</li>
        </ul>
      </div>
    </div>

    <div>
      <img 
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/doctor-working-medical-research_23-2149345443%20(1).jpg?updatedAt=1742640711382" 
        alt="Vendor partnership" 
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>
  </div>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img src="https://ik.imagekit.io/InFutiveTechnology/kaivee/bf921693a12f1c0a3aa555998cb6129a.jpg?updatedAt=1742367779515" alt="Medical Supplies" className="w-32 h-32 mx-auto mb-4 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold">Medical Equipment & Supplies</h3>
      <p className="text-gray-600 mt-2">Partner with us to provide top-grade medical tools and devices.</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img src="https://ik.imagekit.io/InFutiveTechnology/kaivee/7fd6368496edbe0f56af69b119703ecf.jpg?updatedAt=1742367856949" alt="Pharmaceutical Products" className="w-32 h-32 mx-auto mb-4 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold">Pharmaceutical Products</h3>
      <p className="text-gray-600 mt-2">Supply high-quality medicines and healthcare essentials.</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img src="https://ik.imagekit.io/InFutiveTechnology/kaivee/b14cdd0b1685f50d670763bdf144e14e.jpg?updatedAt=1742367961299" alt="Technology Solutions" className="w-32 h-32 mx-auto mb-4 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold">Technology & IT Solutions</h3>
      <p className="text-gray-600 mt-2">Enhance patient care with advanced digital health solutions.</p>
    </div>
</div>

<div>

        <h2 className="mt-12 text-2xl font-semibold text-center">Benefits of Becoming a Vendor with Kaivee Healthcare</h2>
        <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>Trusted Healthcare Brand:</strong> Kaivee Healthcare is a renowned name for diagnostics, home healthcare services, and OPD services. Vendors can leverage our reputation in the healthcare industry.</li>
          <li><strong>Diverse Supply Needs:</strong> We require medical equipment, diagnostic supplies, laboratory reagents, PPE, pharmaceuticals, wellness products, and consumables.</li>
          <li><strong>Long-term Sustainable Business Potential:</strong> We provide continuous order flow and long-term contracts, fostering strong partnerships.</li>
          <li><strong>Values Timely Payments and Transparency:</strong> Our procurement system is open for tracking orders and payments.</li>
          <li><strong>Expand Market Reach:</strong> Join thousands of customers and showcase your products with Kaivee Healthcare.</li>
        </ul>
      </div>

{/* Additional Info Section */}
<div className="mt-6 flex flex-wrap lg:flex-nowrap gap-8">
  {/* Left Section - Additional Information */}
  
  <div className="flex-1 flex flex-col justify-center space-y-6">
  <h2 className=" text-2xl font-semibold text-center">Why to Collaborate with Kaivee Healthcare as a Vendor</h2>
    <div className="mt-2 bg-[#D419580D] p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      
      <p className="text-gray-600 mt-2">Access to an expanding health care network.</p>
    </div>

    <div className="bg-[#D419580D] p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
    
      <p className="text-gray-600 mt-2">We are a trustworthy source to deal with and we follow ethical trading practices.</p>
    </div>

    <div className="bg-[#D419580D] p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      
      <p className="text-gray-600 mt-2">Opportunities for long-term business relations.</p>
    </div>
  </div>

  {/* Right Section - Inquiry Form */}
  <div className="flex-1 flex items-center justify-center  p-6 rounded-lg ">
    <CorporateHealthEnquiry />
  </div>
</div>

  <div className="mt-6 text-center">
    <h2 className="text-2xl font-semibold">Let's Build a Better Future Together</h2>
    <p className="text-gray-700 mt-4">
    Kaivee Healthcare is growing and looking for trustworthy partners to grow alongside us. We welcome your business to our circle of trusted businesses, if you share our values of quality and dedication.
    </p>
   

  </div>


 </div>
   
 

    </>
  );
};

export default VendorLayout;

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

