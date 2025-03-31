import Alternativebanner from "./pediatrician-banner";
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

     
      <div className="container mx-auto px-4 py-8">
  {/* Title Section */}
  <div className="text-center">
    <h1 className="text-3xl font-bold text-[#8DBD4D]">
      Pediatrician Consultation at Kaivee Healthcare
    </h1>
    <h2 className="mt-2 text-2xl font-bold text-gray-800">
      Specialized Care for Your Child’s Health and Well-being
    </h2>
    <p className="text-gray-700 mt-1 max-w-2xl mx-auto text-center">
      We understand that children have unique medical needs, requiring specialized care. From newborn check-ups to managing chronic illnesses, our expert pediatricians ensure your child's optimal growth and well-being through compassionate, professional care.
    </p>
  </div>

  {/* About Pediatricians */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        What Does a Pediatrician Do?
      </h2>
      <p className="text-gray-700">
        A Pediatrician is a medical expert specializing in child health from birth to adolescence. They diagnose and treat childhood illnesses, monitor developmental milestones, and provide preventive care like immunizations and screenings.
      </p>
      <p className="text-gray-700">
        At Kaivee Healthcare, our Pediatricians provide personalized care, ensuring your child’s physical, cognitive, and emotional well-being.
      </p>
    </div>
    <div className="flex justify-center">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/portrait-female-pediatrician-work_23-2151686792.jpg?updatedAt=1743418093242"
        alt="Pediatrician Consultation"
        width={500}
        height={300}
        className="rounded-xl shadow-md w-[80%] max-w-[500px]"
      />
    </div>
  </div>

  {/* Pediatric Services Section */}
  <div className="mt-12 p-6 rounded-xl shadow-md bg-[#D419580D]">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Pediatric Services We Offer
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        "Newborn Care and Screening",
        "Vaccination and Immunization",
        "Monitoring Growth and Development",
        "Nutritional Counseling",
        "Management of Common Pediatric Illnesses",
        "Long-term Condition Management (Asthma, Diabetes, Epilepsy)",
        "Speech and Language Development Concerns",
        "Adolescent Health & Puberty Counseling",
      ].map((service, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-600">{service}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Why Choose Kaivee Healthcare? */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Why Choose Kaivee Healthcare for Pediatric Services?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {[
        {
          title: "Expert Pediatricians",
          desc: "Our experienced pediatricians provide specialized care with a compassionate approach.",
        },
        {
          title: "Child-Friendly Environment",
          desc: "We ensure a comfortable, stress-free environment for children during medical visits.",
        },
        {
          title: "Holistic Approach",
          desc: "We focus on preventive care, including nutrition, immunization, and overall wellness.",
        },
        {
          title: "Parental Support",
          desc: "Our doctors educate and support parents in making informed decisions for their child's health.",
        },
        {
          title: "Flexible Consultation Options",
          desc: "Choose between in-clinic visits or home consultations for your child’s healthcare needs.",
        },
      ].map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* When to Visit a Pediatrician? */}
  <div className="mt-12 p-6 rounded-xl shadow-md bg-[#D419580D]">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      When Should You Visit a Pediatrician?
    </h2>
    <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-4">
      <li>For newborn check-ups and vaccinations.</li>
      <li>When a child frequently falls sick (cold, cough, fever).</li>
      <li>If there are concerns about growth or developmental delays.</li>
      <li>For managing allergies, asthma, and chronic conditions.</li>
      <li>For adolescent health issues like puberty-related concerns.</li>
      <li>To get expert advice on nutrition, hygiene, and healthy habits.</li>
    </ul>
  </div>

  {/* How to Book an Appointment */}
  <div className="mt-12 flex flex-col lg:flex-row items-start gap-8">
    <div className="lg:w-1/2">
      <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center lg:text-left">
        How to Book a Pediatric Consultation?
      </h2>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 mt-6">
        {[
          {
            title: "1. Choose Consultation Type",
            desc: "Pick between in-clinic pediatric visits or home consultations.",
          },
          {
            title: "2. Schedule Your Appointment",
            desc: "Book through our online portal or call our helpline.",
          },
          {
            title: "3. Consult a Specialist",
            desc: "Meet with our pediatricians for a thorough evaluation and treatment plan.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg"
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Inquiry Form */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <InquiryForm />
    </div>
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



