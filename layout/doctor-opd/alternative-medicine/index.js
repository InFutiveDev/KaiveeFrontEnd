import Alternativebanner from "./alternative-banner";
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

{/* Alternative Medicine Section */}
<div className="mt-12 bg-[#D419580D] p-6 rounded-xl shadow-md">
  <h2 className="text-2xl font-semibold text-gray-800 text-center">
    Alternative Medicine: Holistic Healing for Your Well-Being
  </h2>
  <p className="text-gray-700 text-center mt-4">
    Experience the benefits of natural and traditional medicine with our expert practitioners in Physiotherapy, Ayurveda, and Homeopathy.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    
    {/* Physiotherapy */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg">Physiotherapy</h3>
      <p className="text-gray-600">
        Improve mobility, recover from injuries, and manage chronic pain with personalized physical therapy sessions.
      </p>
    </div>

    {/* Ayurveda */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg">Ayurveda</h3>
      <p className="text-gray-600">
        Restore balance with herbal treatments, detox therapies, and lifestyle recommendations based on ancient Ayurvedic principles.
      </p>
    </div>

    {/* Homeopathy */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg">Homeopathy</h3>
      <p className="text-gray-600">
        Gentle yet effective remedies that boost immunity and address chronic ailments through natural healing techniques.
      </p>
    </div>
    
  </div>
</div>

{/* Alternative Medicine Images */}
<div className="flex flex-wrap justify-center gap-6 mt-12">
  <Image
    src="https://ik.imagekit.io/InFutiveTechnology/kaivee/healthcare-concept-clinic_23-2151117902.jpg?updatedAt=1743055248910"
    alt="Physiotherapy Session"
    width={500}
    height={300}
    className="rounded-xl shadow-md w-[80%] max-w-[500px]"
  />
  <Image
    src="https://ik.imagekit.io/InFutiveTechnology/kaivee/social-caregiver-separating-medicaments-supplements-pills_482257-95248.jpg?updatedAt=1743056532156"
    alt="Homeopathy Consultation"
    width={500}
    height={300}
    className="rounded-xl shadow-md w-[80%] max-w-[500px]"
  />
  <Image
    src="https://ik.imagekit.io/InFutiveTechnology/kaivee/close-up-medical-capsules-with-herbs-table_23-2148431497.jpg?updatedAt=1743057049421"
    alt="Ayurveda Treatment"
    width={500}
    height={300}
    className="rounded-xl shadow-md  w-[80%] max-w-[500px]"
  />
  <Image
    src="https://ik.imagekit.io/InFutiveTechnology/kaivee/person-conducting-reiki-therapy_23-2149403910.jpg?updatedAt=1743057512218"
    alt="Ayurveda Treatment"
    width={500}
    height={300}
    className="rounded-xl shadow-md  w-[80%] max-w-[500px]"
  />
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



