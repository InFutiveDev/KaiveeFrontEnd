import Ecgbanner from "./bloodsample-banner";
// import AboutFireImage from "assets/images/about/fireworks 3.svg";
// import AboutUs from "./aboutus";

import OurVersion from "assets/images/about/vision.jpg";
import OurMission from "assets/images/about/mission.png";
import { AboutPattern } from "assets/images/SvgImage";
import img1 from "assets/images/home-care/blood.jpg";
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

const BloodSampleLayout = () => {
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
      <h1 className="text-3xl font-bold mb-4 text-center text-[#8DBD4D]">
      Blood Sample Collection at Home
    </h1>
      <div className="flex flex-col md:flex-row items-center  mx-auto gap-8">
  {/* Text Section */}
  <div className="md:w-1/2 text-left">
   
    <p className="text-[20px] text-gray-700">
      Blood tests are essential for detecting health issues, monitoring treatments, 
      or routine health checkups. However, visiting a lab can be inconvenient, 
      especially for seniors or individuals with mobility restrictions.
    </p>
    <p className="mt-4 text-lg text-gray-700">
      Kaivee Healthcare provides at-home blood sample collection, ensuring a 
      hassle-free, hygienic, and professional experience. Our expert phlebotomists 
      collect samples at your convenience, eliminating the need for lab visits.
    </p>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 flex justify-center">
    <Image 
      src={img1} 
      alt="Blood Sample Collection at Home" 
      className="rounded-xl shadow-md w-[80%] max-w-[500px]"
    />
  </div>
</div>

{/* Steps Section */}
<div className="  mx-auto mt-12">
  <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
    How Home Blood Sample Collection Works
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    {/* Step 1 */}
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">1. Easy Appointment Scheduling</h3>
      <p className="text-gray-700 mt-2">
        Book an appointment via call or website. Our team confirms your 
        schedule and provides fasting or preparation guidelines.
      </p>
    </div>

    {/* Step 2 */}
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">2. Sample Collection at Home</h3>
      <p className="text-gray-700 mt-2">
        Our expert phlebotomist arrives on time with sterile equipment. The 
        collection process is quick, hygienic, and comfortable.
      </p>
    </div>

    {/* Step 3 */}
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">3. Secure Transportation & Testing</h3>
      <p className="text-gray-700 mt-2">
        Samples are securely packed and sent to accredited labs for analysis, 
        ensuring accuracy and safety.
      </p>
    </div>

    {/* Step 4 */}
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">4. Quick Report Delivery</h3>
      <p className="text-gray-700 mt-2">
        Receive reports via email, online portals, or directly from your doctor, 
        ensuring privacy and prompt follow-up.
      </p>
    </div>
  </div>
  <div className=" mx-auto mt-12 p-6 bg-[#D419580D] border-l-4 border-[#D41958] rounded-lg">
  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
    What You Should Know About Home Sample Collection
  </h2>
  <ul className="list-disc list-inside text-gray-700">
    <li className="mb-2">Older patients who value the familiarity of home-based services.</li>
    <li className="mb-2">People with chronic illness needing frequent examinations.</li>
    <li className="mb-2">Individuals with restricted mobility or those recovering from surgery.</li>
    <li className="mb-2">Professionals who are pressed for time and need flexibility.</li>
    <li className="mb-2">Parents seeking child-friendly services for pediatric tests.</li>
  </ul>
</div>

</div>

     
    </div>
 <div className="bg-[#FAFAFA]">
         <WhyChoose data={data} />
       </div>

    </>
  );
};

export default BloodSampleLayout;

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

