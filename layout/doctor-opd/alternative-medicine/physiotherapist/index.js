import Alternativebanner from "./physiotherapist-banner";
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

      
      <div className="container mx-auto px-4 lg:px-16 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
        Physiotherapy Services at Kaivee Healthcare
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
        Restoring Mobility, Enhancing Strength, and Promoting Recovery
      </h2>

      <p className="mb-4">
        Mechanics is the basis of independence and quality of life. Whether you’re recuperating from an injury,
        coping with a chronic condition, or experiencing stiff joints with age, professional physiotherapy can help
        restore function and reduce pain.
      </p>
      <p className="mb-4">
        Physiotherapy helps to restore movement and function when someone is in injury, illness, or disability at
        the national health care provider, addressing the source of physical limitations—not just their indicators—
        while encouraging patients to have a responsible approach to their rehabilitation.
      </p>

      <div className="flex flex-col lg:flex-row items-start gap-10">

    {/* Left: Text Content */}
    <div className="lg:w-1/2">
      <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Who Needs Physiotherapy?
      </h3>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Athletes recovering from injuries</li>
        <li>Seniors aiming to stay mobile</li>
        <li>Postoperative patients needing guided recovery</li>
        <li>Office workers facing posture-related issues</li>
        <li>People with neurological or developmental movement challenges</li>
        <li>Chronic pain sufferers seeking non-drug solutions</li>
      </ul>
    </div>

    {/* Right: Image */}
    <div className="lg:w-1/2 flex justify-end">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/flat-physiotherapy-doctors-take-care-people-rehab-physical-therapist-orthopedic-help-patient-recovery-after-leg-knee-back-injuries-exercises-with-medical-equipment-rehabilitation-clinic_88138-860.jpg?updatedAt=1744626308026"
        alt="Physiotheraphy at Kaivee Healthcare"
        width={500}
        height={300}
        className="rounded-xl shadow-lg w-[80%] max-w-[500px] transform transition duration-500 hover:scale-105 hover:shadow-xl"
      />
    </div>
  </div>

      <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Our Philosophy of Physical Therapy Treatment
      </h3>
      <p className="mb-4">
        Each patient’s body tells a different story. That’s why we always start our physiotherapy sessions with a
        detailed assessment of strength, balance, flexibility, pain and posture. Based on the results, we create
        customized therapy plans for healing, strengthening, and restoring motion.
      </p>
      <p className="mb-4">
        Be it returning to work, walking without discomfort or getting back to competitive sports, our team supports
        you every step of the way.
      </p>

      <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Conditions and Challenges We Help Treat
      </h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Back and Neck Pain:</strong> Specific exercises and manual therapy for spinal pain and postural issues.
        </li>
        <li>
          <strong>Rehabilitation Following Surgery:</strong> Customized recovery plans post joint replacements or spinal surgeries.
        </li>
        <li>
          <strong>Neurological Rehabilitation and Stroke Recovery:</strong> Mobility and coordination programs for stroke, Parkinson’s, etc.
        </li>
        <li>
          <strong>Sports Injuries:</strong> Taping, exercises, and return-to-play programs.
        </li>
        <li>
          <strong>Joint Stiffness and Arthritis:</strong> Joint mobilization, stretching, and strength training.
        </li>
        <li>
          <strong>Balance and Fall Prevention:</strong> Therapy for seniors or vestibular patients to restore balance.
        </li>
      </ul>

     
      <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Reasons to Choose Kaivee Healthcare’s Physiotherapy Team
      </h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Patient-Centered Programs:</strong> Every plan is unique and progress-driven.</li>
        <li><strong>Multidisciplinary Coordination:</strong> Collaboration with doctors and specialists.</li>
        <li><strong>Modern Achievement Tracking:</strong> Using motion analysis and functional scales.</li>
        <li><strong>Preventive Care Focus:</strong> Education on posture, movement, and injury avoidance.</li>
        <li><strong>Comfortable, Equipped Spaces:</strong> Calming therapy zones with modern tools.</li>
      </ul>

      
  



      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 items-start">
    
    {/* Left: Text Section */}
    <div className="lg:w-2/3">
      <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Get Professional Advice to Begin Your Recovery
      </h3>
      <p>
        Our expert physiotherapists at Kaivee Healthcare are ready to help you regain strength, restore movement,
        and live independently. Let's work together, session by session, toward a healthier and more mobile life.
      </p>
    </div>

    {/* Right: Inquiry Form */}
    <div className="lg:w-1/3 w-full flex justify-end mt-8 lg:mt-0">
      <InquiryForm />
    </div>
  </div>
  {/* Why Choose Section */}
<div className="bg-[#FAFAFA]">
  <WhyChoose data={data} />
</div>

{/* Footer */}
<div className="container">
  <p className="font-semibold text-center">
    Kaivee Healthcare is your trusted partner in health and well-being.
  </p>
</div>
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



