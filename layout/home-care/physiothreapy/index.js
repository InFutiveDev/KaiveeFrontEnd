import Ecgbanner from "./physiotherapy-banner";
// import AboutFireImage from "assets/images/about/fireworks 3.svg";
// import AboutUs from "./aboutus";

import OurVersion from "assets/images/about/vision.jpg";
import OurMission from "assets/images/about/mission.png";
import { AboutPattern } from "assets/images/SvgImage";
import img1 from "assets/images/home-care/physio.jpg";
import img2 from "assets/images/home-care/physio2.jpg";
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

const PhysioLayout = () => {
  return (
    <>
      {/* className="sliders banner_slider_wrap_facilities" */}
      <section>
        {/* className="web-view relative cstm-flexbox flexbox container" */}
        <div>
          <Ecgbanner />
        </div>
       
      </section>

      
      <div className="container mx-auto  py-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#8DBD4D]">
        Physiotherapy at Home by Kaivee Healthcare  
      </h1>
      <div className=" mx-auto p-6">
  {/* Hero Section */}
  <div className="flex flex-col md:flex-row items-center gap-8">
    {/* Text Section */}
    <div className="md:w-1/2 text-left">
    <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
    Personalized Rehabilitation in the Comfort of Your Home
    </h2>
      <p className="text-lg text-gray-700">
        Personalized rehabilitation in the comfort of your home. Whether 
        recovering from surgery, an injury, or dealing with chronic pain, 
        Kaivee Healthcare provides expert physiotherapy sessions at your convenience.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        Our experienced physiotherapists create customized treatment plans 
        to help restore mobility, reduce pain, and improve overall well-being.
      </p>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 flex justify-center">
      <Image 
        src={img1} 
        alt="Physiotherapy at Home" 
        className="rounded-xl shadow-md w-[80%] max-w-[500px]"
      />
    </div>
  </div>

  {/* How It Works Section */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
      How Does Home Physiotherapy Work?
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {/* Step 1 */}
      <div className="p-4 border rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">1. Book an Appointment Easily</h3>
        <p className="text-gray-700 mt-2">
          Contact Kaivee Healthcare by phone or online to schedule your physiotherapy 
          session at a time that suits you.
        </p>
      </div>

      {/* Step 2 */}
      <div className="p-4 border rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">2. Initial Assessment & Therapy Plan</h3>
        <p className="text-gray-700 mt-2">
          A physiotherapist assesses your condition, medical history, and physical abilities 
          to create a personalized treatment plan.
        </p>
      </div>

      {/* Step 3 */}
      <div className="p-4 border rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">3. Convenient Therapy Sessions</h3>
        <p className="text-gray-700 mt-2">
          Regular therapy sessions guide you through exercises, manual techniques, 
          and rehabilitation methods under professional supervision.
        </p>
      </div>

      {/* Step 4 */}
      <div className="p-4 border rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">4. Progress Monitoring & Adjustments</h3>
        <p className="text-gray-700 mt-2">
          Treatment is adjusted based on recovery progress to ensure effective rehabilitation 
          and long-term mobility improvements.
        </p>
      </div>
    </div>
  </div>

  {/* Why Choose Kaivee Healthcare? */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
      Why Choose Kaivee Healthcare for Home Physiotherapy?
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Benefit 1 */}
      <div className="p-4 border rounded-lg shadow-sm bg-blue-50">
        <h3 className="text-lg font-semibold text-gray-900">Personalized Treatment Plans</h3>
        <p className="text-gray-700 mt-2">
          Custom programs tailored to your specific health condition, recovery goals, and lifestyle.
        </p>
      </div>

      {/* Benefit 2 */}
      <div className="p-4 border rounded-lg shadow-sm bg-blue-50">
        <h3 className="text-lg font-semibold text-gray-900">One-on-One Focused Attention</h3>
        <p className="text-gray-700 mt-2">
          Direct supervision ensures exercises are performed correctly for maximum effectiveness.
        </p>
      </div>

      {/* Benefit 3 */}
      <div className="p-4 border rounded-lg shadow-sm bg-blue-50">
        <h3 className="text-lg font-semibold text-gray-900">Comfort & Convenience</h3>
        <p className="text-gray-700 mt-2">
          Get expert care without the stress of traveling or clinic wait times.
        </p>
      </div>

      {/* Benefit 4 */}
      <div className="p-4 border rounded-lg shadow-sm bg-blue-50">
        <h3 className="text-lg font-semibold text-gray-900">Certified & Experienced Therapists</h3>
        <p className="text-gray-700 mt-2">
          Our trained professionals handle orthopedic, neurological, and post-surgical rehabilitation.
        </p>
      </div>

      {/* Benefit 5 */}
      <div className="p-4 border rounded-lg shadow-sm bg-blue-50">
        <h3 className="text-lg font-semibold text-gray-900">Safe & Hygienic Practices</h3>
        <p className="text-gray-700 mt-2">
          Our therapists follow strict hygiene measures for a clean and risk-free treatment.
        </p>
      </div>

      <div className="p-4 border rounded-lg shadow-sm bg-blue-50">
    <h3 className="text-lg font-semibold text-gray-900">Affordable & Transparent Pricing</h3>
    <p className="text-gray-700 mt-2">
      We offer cost-effective physiotherapy sessions without hidden fees, ensuring quality care is accessible to everyone.
    </p>
  </div>
    </div>
  </div>

  {/* Who Should Consider Home Physiotherapy? */}
  <div className="mx-auto mt-12 p-6 bg-[#D419580D] border-l-4 border-[#D41958] rounded-lg">
  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
    Who Should Consider Home Physiotherapy?
  </h2>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    {/* Text Section */}
    <div className="md:w-2/3">
      <ul className="list-disc list-inside text-gray-700">
        <li className="mb-2">Patients recovering from orthopedic surgeries (e.g., joint replacements).</li>
        <li className="mb-2">Individuals with chronic pain, arthritis, or musculoskeletal disorders.</li>
        <li className="mb-2">Stroke survivors needing neurological rehabilitation.</li>
        <li className="mb-2">Seniors with mobility challenges and balance issues.</li>
        <li className="mb-2">Athletes recovering from sports injuries.</li>
        <li className="mb-2">Patients needing post-injury rehabilitation programs.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-900 mt-4">
      Book Your Home Physiotherapy Session Today!
    </h2>
    <p className="text-xl text-gray-700 mt-2">
    For those who require physiotherapy support yet find it challenging to travel, Kaivee Healthcare is Physiotherapy at Home service is the perfect option. Our skilled therapists are here to assist you in regaining strength, mobility, and confidence—all from the comfort of home!
    </p>
    </div>

   
    {/* Right Side: Inquiry Form */}
<div className="lg:w-1/3 w-full">
  <InquiryForm />
</div>
  </div>
</div>


  {/* Call to Action */}
  <div className="mt-12 text-center">
    
    
  </div>
  <div className="bg-[#FAFAFA]">
         <WhyChoose data={data} />
       </div>
</div>

    </div>


    </>
  );
};

export default PhysioLayout;

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

