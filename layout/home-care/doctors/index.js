import Ecgbanner from "./doctor-banner";
// import AboutFireImage from "assets/images/about/fireworks 3.svg";
// import AboutUs from "./aboutus";

import OurVersion from "assets/images/about/vision.jpg";
import OurMission from "assets/images/about/mission.png";
import { AboutPattern } from "assets/images/SvgImage";
import img1 from "assets/images/home-care/doctor.jpg";
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

const DoctorLayout = () => {
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
        Doctors at Home by Kaivee Healthcare
      </h1>
      <div className=" mx-auto p-6">
  {/* Hero Section */}
  <div className="flex flex-col md:flex-row items-center gap-8">
    {/* Text Section */}
    <div className="md:w-1/2 text-left">
      
      <p className="text-[20px] text-gray-700">
        Bringing expert medical care to your doorstep. Whether it is illness, 
        mobility issues, surgery recovery, or elderly care, Kaivee Healthcare 
        provides home doctor visits, ensuring comfort and timely care.
      </p>
      <p className="mt-4 text-[20px] text-gray-700">
        Our experienced doctors provide personalized consultations, accurate 
        diagnoses, and treatment recommendations—all in the comfort of your home.
      </p>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 flex justify-center">
      <Image 
        src={img1} 
        alt="Doctors at Home" 
        className="rounded-xl shadow-md w-[80%] max-w-[500px]"
      />
    </div>
  </div>

  {/* How It Works Section */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
      How Does the Doctors at Home Service Work?
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {/* Step 1 */}
      <div className="p-4 border rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">1. Schedule Your Consultation</h3>
        <p className="text-gray-700 mt-2">
          Contact Kaivee Healthcare by phone or online to book a doctor is home visit. 
          We verify your details and assign a suitable physician.
        </p>
      </div>

      {/* Step 2 */}
      <div className="p-4 border rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">2. Doctor Visit at Home</h3>
        <p className="text-gray-700 mt-2">
          A medical practitioner visits at the scheduled time, conducting a 
          consultation, physical exam, and providing a clear diagnosis.
        </p>
      </div>

      {/* Step 3 */}
      <div className="p-4 border rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">3. On-Site Treatment & Advice</h3>
        <p className="text-gray-700 mt-2">
          The doctor prescribes medications, recommends diagnostic tests, and 
          performs minor procedures like wound dressing or IV fluids if required.
        </p>
      </div>

      {/* Step 4 */}
      <div className="p-4 border rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">4. Follow-Up & Ongoing Care</h3>
        <p className="text-gray-700 mt-2">
          We assist in coordinating lab tests, follow-ups, and further specialist care 
          for complete patient support.
        </p>
      </div>
    </div>
  </div>

  {/* Why Choose Kaivee Healthcare? */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
      Why Kaivee Healthcare for Doctors at Home?
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Benefit 1 */}
      <div className="p-4 border rounded-lg shadow-sm bg-blue-50">
        <h3 className="text-lg font-semibold text-gray-900">Healthcare at Your Doorstep</h3>
        <p className="text-gray-700 mt-2">
          No need to travel to hospitals—get professional medical care in your home.
        </p>
      </div>

      {/* Benefit 2 */}
      <div className="p-4 border rounded-lg shadow-sm bg-blue-50">
        <h3 className="text-lg font-semibold text-gray-900">Qualified Physicians</h3>
        <p className="text-gray-700 mt-2">
          Our experienced doctors specialize in family medicine, chronic disease 
          management, and post-operative care.
        </p>
      </div>

      {/* Benefit 3 */}
      <div className="p-4 border rounded-lg shadow-sm bg-blue-50">
        <h3 className="text-lg font-semibold text-gray-900">Personalized Attention</h3>
        <p className="text-gray-700 mt-2">
          One-on-one consultations ensure proper care, better communication, and 
          customized treatment plans.
        </p>
      </div>

      {/* Benefit 4 */}
      <div className="p-4 border rounded-lg shadow-sm bg-blue-50">
        <h3 className="text-lg font-semibold text-gray-900">Ideal for All Age Groups</h3>
        <p className="text-gray-700 mt-2">
          From pediatric to geriatric care, our services cater to all age groups.
        </p>
      </div>

      {/* Benefit 5 */}
      <div className="p-4 border rounded-lg shadow-sm bg-blue-50">
        <h3 className="text-lg font-semibold text-gray-900">Safe & Hygienic Practices</h3>
        <p className="text-gray-700 mt-2">
          Stringent infection control, PPE use, and sanitized tools ensure safety.
        </p>
      </div>
    </div>
  </div>

  {/* When to Seek Doctors at Home? */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mx-auto mt-12 p-6 bg-[#D419580D] border-l-4 border-[#D41958] rounded-lg">
  
  {/* Left Side: Text Content */}
  <div className="lg:w-1/2">
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      When to Seek Doctors at Home?
    </h2>
    <ul className="list-disc list-inside text-gray-700">
      <li className="mb-2">Seniors with limited mobility.</li>
      <li className="mb-2">Post-surgical recovery requiring continued medical follow-up.</li>
      <li className="mb-2">Chronic disease management (diabetes, hypertension, COPD).</li>
      <li className="mb-2">Acute conditions like fever, infections, or respiratory issues.</li>
      <li className="mb-2">Children needing home treatment for minor illnesses.</li>
      <li className="mb-2">Patients requiring palliative care.</li>
    </ul>
  </div>

  {/* Right Side: Image */}
  <div className="flex justify-center lg:w-1/2">
    <Image 
      src="https://ik.imagekit.io/InFutiveTechnology/kaivee/asian-doctor-talking-senior-caucasian-patient-home-discussing-medication_1098-20695.jpg?updatedAt=1743053803031" 
      alt="ECG & X-Ray Home Service" 
      width={500} 
      height={300} 
      className="rounded-xl shadow-md w-[80%] max-w-[500px]" 
    />
  </div>

</div>


  {/* Call to Action */}
  <div className="mt-12 text-center">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
      Book a Doctor Visit at Home with Kaivee Healthcare Today
    </h2>
    <p className="text-lg text-gray-700 mb-6">
      Avoid the hassle of clinic visits. Get expert medical care at your convenience.We are a team of professionals who provide high-quality medical care in the comfort of your own home.
    </p>
   
  </div>
</div>
<div className="bg-[#FAFAFA]">
         <WhyChoose data={data} />
       </div>

 </div>



     
    
    
 

    </>
  );
};

export default DoctorLayout;

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

