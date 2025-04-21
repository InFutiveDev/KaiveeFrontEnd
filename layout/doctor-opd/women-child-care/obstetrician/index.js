import Alternativebanner from "./obstetrician-banner";
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

      <div className="conatiner max-w-7xl mx-auto px-6 lg:px-12 py-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#C0392B]">
          Obstetric Care You Can Trust at Kaivee Healthcare
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800">
          Dedicated Support Through Every Stage of Pregnancy
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-12 flex flex-col lg:flex-row gap-12">
        {/* Left Content - Description */}
        <div className="lg:w-2/3 space-y-6">
          <p className="text-gray-700">
            Bringing new life into the world is an amazing adventure—one that
            deserves skilled care, careful monitoring, and constant
            reassurance. Our Obstetricians at Kaivee Healthcare are dedicated
            to supporting women at every stage of their pregnancy journey,
            from preconception to postpartum care.
          </p>
          <p className="text-gray-700">
          We respect that each pregnancy is unique. That's why our care is characterized by personalization, comfort, and clinical excellence.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">
            Distinctive Features of Our Obstetric Services
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>24/7 obstetric coverage for emergencies and early labor</li>
            <li>Comprehensive maternal and fetal monitoring</li>
            <li>High-risk pregnancy management and care</li>
            <li>Labor and delivery support with family involvement</li>
            <li>Postpartum recovery and emotional well-being support</li>
          </ul>
        </div>

        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/cartoon-dia-internacional-de-la-obstetricia-y-la-embarazada-illustration_23-2148996499%20(1).jpg?updatedAt=1743587291670"
            alt="Gynaecology Consultation"
            width={500}
            height={250}
            className="rounded-xl shadow-lg w-[80%] max-w-[500px] transform transition duration-500 hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Areas of Focus in Maternity Care
        </h2>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[
            {
              title: "Preconception Planning",
              desc: "Health assessment, lifestyle recommendations, and nutritional management for those wishing to conceive.",
            },
            {
              title: "Antenatal Monitoring",
              desc: "Regular pregnancy check-ups to track fetal growth and maternal wellness.",
            },
            {
              title: "High-Risk Pregnancy Management",
              desc: "Specialized care for pregnancies affected by medical conditions.",
            },
            {
              title: "Labor & Delivery Support",
              desc: "Expert team handling both vaginal deliveries and C-sections.",
            },
            {
              title: "Postpartum Recovery",
              desc: "Guidance on physical recovery, mental health, and breastfeeding support.",
            },
            {
              title: "Fetal Scans & Diagnostics",
              desc: "Ultrasounds, NST, and anomaly scans to ensure a healthy pregnancy.",
            },
          ].map((service, index) => (
            <div key={index} className="p-6 bg-[#C0392B0D] rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-700 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-4 text-gray-700 p-8 rounded-lg flex flex-col lg:flex-row items-center lg:items-start">
  {/* Left Section: Text Content */}
  <div className="lg:w-2/3">
    <h2 className="text-2xl font-semibold text-gray-800">
      Typical Pregnancy Symptoms We Help Guide You Through
    </h2>
    <p className="mt-4 text-gray-700">
      Physical and hormonal changes during pregnancy can be uncomfortable or concerning. Our Obstetricians assist with the management and relief of:
    </p>
    <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
      <li><strong>Nausea or vomiting</strong> (morning sickness)</li>
      <li><strong>Pelvic pain and back pain</strong></li>
      <li><strong>Swelling</strong> in the legs, feet, or hands</li>
      <li><strong>Extreme fatigue</strong>, trouble breathing, or dizziness</li>
      <li><strong>Stomach problems</strong> such as acid reflux, heartburn, or indigestion</li>
      <li><strong>Anxiety or sleep disturbances</strong></li>
      <li><strong>Braxton-Hicks contractions</strong> (false labor signs)</li>
    </ul>
    <p className="mt-4 text-gray-700">
      All symptoms are carefully monitored to ensure healthy pregnancy progression, or treated immediately if concerning.
    </p>
  </div>

  {/* Right Section: Enquiry Form */}
  <div className="lg:w-1/3 mt-6 lg:mt-0 flex justify-end">
  <div className="w-full">
    <InquiryForm />
  </div>
  </div>
</div>
<div className="bg-[#FAFAFA]">
        <WhyChoose data={data} />
      </div>


      <div className=" container">
          <p className="font-semibold text-center">
           Kaivee Healthcare is clearly your best partner at Health & Checkups.

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



