import Alternativebanner from "./genral-medicine";
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
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center mb-8 text-[#8DBD4D]">
        Doctor OPD Services: Expert Consultations with Kaivee Healthcare
      </h1>

      {/* General Medicine Section */}
      <div className="mt-12 bg-[#D419580D] p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          General Medicine: Comprehensive Healthcare for All Ages
        </h2>
        <p className="text-gray-700 text-center mt-4">
          Our experienced general physicians diagnose and treat common health issues, ensuring your well-being.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Fever & Infections</h3>
            <p className="text-gray-600">Treatment for viral, bacterial, and seasonal infections.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Chronic Conditions</h3>
            <p className="text-gray-600">Management of diabetes, hypertension, and heart disease.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Preventive Care</h3>
            <p className="text-gray-600">Routine check-ups, vaccinations, and health screenings.</p>
          </div>
        </div>
      </div>

      {/* Specialty Consultations Section */}
      <div className="mt-12 p-6 rounded-xl shadow-md border border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Specialized Consultations for Advanced Medical Care
        </h2>
        <p className="text-gray-700 text-center mt-4">
          Access expert consultations across multiple specialties for accurate diagnosis and effective treatment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Cardiology</h3>
            <p className="text-gray-600">For heart health, BP management, and cardiac conditions.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Orthopedics</h3>
            <p className="text-gray-600">Bone, joint, and muscle-related treatments.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Neurology</h3>
            <p className="text-gray-600">For stroke recovery, migraines, and neurological disorders.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Gynecology</h3>
            <p className="text-gray-600">Women’s health, pregnancy care, and hormonal issues.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Dermatology</h3>
            <p className="text-gray-600">Skin, hair, and cosmetic treatments.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">ENT (Ear, Nose, Throat)</h3>
            <p className="text-gray-600">Treatment for allergies, sinus issues, and infections.</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      {/* Image Section */}
<div className="flex flex-wrap justify-center gap-6 mt-12">
  <Image
    src="https://ik.imagekit.io/InFutiveTechnology/kaivee/portrait-female-pediatrician-work_23-2151686700.jpg?updatedAt=1742981219205"
    alt="Doctor Consultation"
    width={500}
    height={300}
    className="rounded-xl shadow-md w-[80%] max-w-[500px]"
  />
  <Image
    src="https://ik.imagekit.io/InFutiveTechnology/kaivee/male-doctor-examining-patient_1170-2148.jpg?updatedAt=1742815147139"
    alt="Doctor Consultation"
    width={500}
    height={300}
    className="rounded-xl shadow-md w-[80%] max-w-[500px]"
  />
</div>


      {/* CTA Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Get Quality Medical Advice Anytime, Anywhere
        </h2>
        <p className="text-gray-700 mt-4">
          Whether it’s a minor illness, a routine check-up, or a specialized consultation, our OPD services ensure expert guidance. Book your appointment today!
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



