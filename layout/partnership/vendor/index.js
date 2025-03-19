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
  <h1 className="text-3xl font-bold text-center mb-8">Become Our Trusted Vendor Partner</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h2 className="text-2xl font-semibold">Grow Your Business with Us</h2>
      <p className="text-gray-700 mt-4">
        Join our network of trusted vendors and expand your reach in the healthcare industry.  
        We collaborate with suppliers offering high-quality medical products, pharmaceuticals,  
        and technology solutions to enhance patient care.
      </p>

      <div className="mt-6 space-y-4">
        <h3 className="text-xl font-semibold">Why Partner With Us?</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Access a broad customer base, including clinics and hospitals</li>
          <li>Reliable partnership with a growing healthcare brand</li>
          <li>Seamless procurement and supply chain integration</li>
          <li>Opportunities for long-term collaboration and innovation</li>
        </ul>
      </div>
    </div>

    <div>
      <img 
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/c98b74db259ccfa79e013e1f63abab5a%20(1).jpg?updatedAt=1742367668334" 
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


  <div className="mt-12 text-center">
    <h2 className="text-2xl font-semibold">Let's Build a Better Future Together</h2>
    <p className="text-gray-700 mt-4">
      We are committed to fostering strong vendor partnerships that drive innovation  
      and enhance healthcare services. Join us today and grow with our network.
    </p>
    <a href="/contact-us" className="mt-6 inline-block">
  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
    Become a Vendor
  </button>
</a>

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

