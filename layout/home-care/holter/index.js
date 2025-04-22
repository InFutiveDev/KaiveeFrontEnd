import Ecgbanner from "./holter-banner";
// import AboutFireImage from "assets/images/about/fireworks 3.svg";
// import AboutUs from "./aboutus";

import OurVersion from "assets/images/about/vision.jpg";
import OurMission from "assets/images/about/mission.png";
import { AboutPattern } from "assets/images/SvgImage";
import img1 from "assets/images/home-care/holter.jpg";
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
import dynamic from "next/dynamic";
const InquiryForm = dynamic(() => import("components/inquiryForm"));

const HolterLayout = () => {
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
  {/* Header */}
  <h1 className="text-3xl text-[#8DBD4D] text-center font-bold mb-6">Holter Monitoring at Home</h1>
  <p className="text-[20px] text-gray-700">
    Kaivee Healthcare is Holter Monitoring at Home service provides a practical and convenient solution. Logistics are easy as our team can set multiple Holter monitors on-site, storing a direct channel of your heart's activity on a daily basis in the comfort of your home.
  </p>

  {/* Introduction */}
  <div className="mt-8">
    <h2 className="text-2xl font-semibold">What is Holter Monitoring?</h2>
    <p className="mt-4 text-gray-700">
      A Holter Monitor is a small, portable device that records your heart is electrical activity for 24 to 72 hours or longer. Unlike a traditional ECG, which captures heart rhythms for a few seconds, a Holter continuously collects long-term data, allowing doctors to detect irregularities that might otherwise go unnoticed.
    </p>
  </div>

  {/* How It Works */}
  <div className="mt-8">
    <h2 className="text-2xl font-semibold">How Our Holter Monitoring Service Works</h2>
    <ul className="list-decimal pl-5 space-y-3 mt-4 text-gray-700">
      <li>
        <strong>Schedule an Appointment:</strong> Call or visit the website of Kaivee Healthcare to schedule a time for Holter monitoring. We provide local scheduling to suit your schedule. We will confirm the appointment and guide you through the fitting of the device.
      </li>
      <li>
        <strong>Device Delivery and Setup:</strong> Our healthcare professional will come to your place to set up the Holter monitor and ensure that the electrodes are placed correctly to avoid inaccurate recording. The process is quick, painless, and non-invasive.
      </li>
      <li>
        <strong>Continuous Monitoring:</strong> After the device is connected, you will wear it during your normal activities. This lightweight monitor records your heart is rhythm continuously. Keeping a diary of symptoms and activities helps doctors correlate the findings.
      </li>
      <li>
        <strong>Data Collection and Report:</strong> After the monitoring period, we retrieve the device from your home. The data is analyzed by experienced cardiologists, who provide a detailed report for you and your doctor.
      </li>
    </ul>
  </div>

  {/* Benefits */}
  <div className="mt-8 flex flex-col md:flex-row items-start gap-6">
  {/* Text Section */}
  <div className="md:w-1/2">
    <h2 className="text-2xl font-semibold">Why Choose Holter Monitoring at Home?</h2>
    <ul className="list-disc pl-5 mt-4 text-gray-700">
      <li><strong>Convenient Home-Based Testing:</strong> No need to visit a hospital.</li>
      <li><strong>Professional Setup & Support:</strong> Trained technicians ensure accurate placement.</li>
      <li><strong>Accurate and Reliable Data:</strong> Advanced Holter monitors for precise results.</li>
      <li><strong>Comfort and Privacy:</strong> Monitor your heart health from the comfort of your home.</li>
    </ul>
  </div>
  

  {/* Image Section */}
  <div className="md:w-1/2 flex justify-center">
    <Image src={img1} alt="Holter Home Service" className="rounded-xl shadow-md w-[80%] max-w-[500px]" />
  </div>
</div>


  {/* Eligibility */}
  <div className="mt-8 flex flex-col lg:flex-row gap-10 items-start bg-[#F9FAFB] p-6 rounded-xl shadow">

{/* Left Side: Eligibility List */}
<div className="lg:w-2/3 w-full">
  <h2 className="text-2xl font-semibold text-gray-800">Who is Eligible?</h2>
  <ul className="mt-4 text-gray-700 list-disc pl-5 space-y-2">
    <li>People with irregular heartbeat or palpitations.</li>
    <li>Patients experiencing dizziness, fainting, or chest discomfort.</li>
    <li>Individuals requiring post-procedure or medication adjustment monitoring.</li>
    <li>General cardiac testing as advised by a doctor.</li>
    <li>Unique patient group: Those seen by their cardiologist and advised to monitor arrhythmias over time.</li>
  </ul>

  <h2 className="text-xl font-semibold mt-4">Schedule Your Holter Monitor Appointment Now</h2>
    <p className="mt-2 text-gray-700">
    If your physician has suggested continuous heart monitoring, Kaivee Healthcare has an easy solution. Our Holter Monitoring at Home service guarantees precise testing without interfering with your routine.    </p>
</div>

{/* Right Side: Inquiry Form */}
<div className="lg:w-1/3 w-full">
  <InquiryForm />
</div>

</div>


 
</div>

  <div className="bg-[#FAFAFA]">
         <WhyChoose data={data} />
       </div>

    </>
  );
};

export default HolterLayout;

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

