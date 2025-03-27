import Alternativebanner from "./geriatrician-banner";
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

      {/* <AboutUs /> */}
     <div className="container mx-auto px-4 py-8">
  {/* Header Section */}
  <h1 className="text-3xl font-bold text-center mb-8 text-[#8DBD4D]">
    Doctor OPD Services: Expert Consultations with Kaivee Healthcare
  </h1>

  {/* About OPD Services Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        Why Choose OPD Services?
      </h2>
      <p className="text-gray-700">
        Visiting a hospital for regular checkups and minor treatments can be time-consuming and stressful. With Kaivee Healthcare is OPD services, you get access to experienced doctors, personalized consultations, and expert medical guidance—all from the comfort of your home or nearby OPD centers.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Convenient doctor consultations without long waiting hours.</li>
        <li>Timely diagnosis and treatment for various health conditions.</li>
        <li>Medical care tailored to your needs.</li>
      </ul>
    </div>
    <div className="flex justify-center">
  <Image 
    src="https://ik.imagekit.io/InFutiveTechnology/kaivee/medium-shot-middle-aged-doctor-explaining-diagnosis-via-tablet-pc_1098-19316.jpg?updatedAt=1742885226340"
    alt="Doctor Consultation"
    width={500} 
    height={300} 
    className="rounded-xl shadow-md w-[80%] max-w-[500px]"
  />
</div>
  </div>

  {/* OPD Services Benefits Section */}
  <div className="mt-12 bg-[#D419580D] p-6 rounded-xl shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      What We Offer in OPD Services
    </h2>
    <p className="text-gray-700 text-center mt-4">
      Our OPD services provide accessible, high-quality medical care through professional consultations and diagnostic support.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg">General Physician Consultation</h3>
        <p className="text-gray-600">For common illnesses, infections, and routine check-ups.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg">Specialist Consultations</h3>
        <p className="text-gray-600">Access to experts in cardiology, orthopedics, neurology, and more.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg">Diagnostics & Lab Tests</h3>
        <p className="text-gray-600">Convenient blood tests, X-rays, and health screenings.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg">Chronic Disease Management</h3>
        <p className="text-gray-600">Expert guidance for diabetes, hypertension, and other chronic conditions.</p>
      </div>
    </div>
  </div>

  {/* How It Works Section */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      How Our OPD Service Works
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
      <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
        <h3 className="font-semibold text-lg">Step 1: Appointment Booking</h3>
        <p className="text-gray-600">Schedule a consultation with a doctor of your choice.</p>
      </div>
      <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
        <h3 className="font-semibold text-lg">Step 2: Consultation</h3>
        <p className="text-gray-600">Get expert advice from qualified doctors via in-person visits or online.</p>
      </div>
      <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
        <h3 className="font-semibold text-lg">Step 3: Diagnostic Support</h3>
        <p className="text-gray-600">Receive lab tests or imaging as recommended by the doctor.</p>
      </div>
      <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
        <h3 className="font-semibold text-lg">Step 4: Follow-up Care</h3>
        <p className="text-gray-600">Continuous monitoring and future consultations as needed.</p>
      </div>
    </div>
  </div>

  {/* When Should You Use OPD Services? */}
  <div className="mt-12 bg-[#D419580D] p-6 rounded-xl shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      When Should You Visit an OPD?
    </h2>
    <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-4">
      <li>For routine health check-ups and preventive care.</li>
      <li>When experiencing symptoms like fever, cough, or stomach pain.</li>
      <li>For chronic disease management and prescription refills.</li>
      <li>To consult a specialist for a specific health concern.</li>
      <li>For post-operative follow-ups and ongoing medical guidance.</li>
    </ul>
  </div>

  {/* CTA Section */}
  <div className="mt-12 text-center">
    <h2 className="text-2xl font-semibold text-gray-800">
      Get Quality Medical Advice Anytime, Anywhere
    </h2>
    <p className="text-gray-700 mt-4">
      Whether it’s a minor illness, a routine health check-up, or a chronic condition, our OPD services ensure expert guidance at your convenience. Book an appointment today with Kaivee Healthcare.
    </p>
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



