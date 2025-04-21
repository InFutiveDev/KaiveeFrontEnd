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
      Geriatrician Consultation at Kaivee Healthcare
    </h1>
    <h2 className="mt-2 text-2xl font-bold text-gray-800">
      Specialized Healthcare for Senior Citizens with Compassion and Expertise
    </h2>
    <p className="text-gray-700 mt-1 max-w-2xl mx-auto text-center">
      As individuals age, their healthcare needs evolve and become more complex. 
      At Kaivee Healthcare, our expert geriatricians provide personalized, comprehensive care 
      to manage chronic illnesses, address age-related health concerns, and enhance the quality of life for seniors.
    </p>
  </div>

  {/* About Geriatricians */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        What Does a Geriatrician Do?
      </h2>
      <p className="text-gray-700">
        A geriatrician specializes in elderly care, typically for individuals aged 60 and above. 
        They manage multiple medical conditions, coordinate complex medication regimens, 
        and take a holistic approach to treatment, ensuring overall well-being.
      </p>
      <p className="text-gray-700">
        At Kaivee Healthcare, our geriatricians develop personalized care plans 
        focusing on preventive measures, chronic disease management, and maintaining independence.
      </p>
      <p className="text-gray-700">
      Geriatric Medicine services focus on facilitating successful aging, sustaining independence and helping families care for their senior loved ones. We know the particular health challenges that accrue by age and deliver considerate, respectful and dignified treatment.
       </p>
    </div>
    <div className="flex justify-center">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/medical-care-concept-illustration_114360-4921.jpg?updatedAt=1743419740066"
        alt="Geriatrician Consultation"
        width={500}
        height={300}
        className="rounded-xl shadow-md w-[80%] max-w-[500px]"
      />
    </div>
  </div>

  {/* Geriatric Services Section */}
  <div className="mt-12 p-6 rounded-xl shadow-md bg-[#D419580D]">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Geriatric Services We Offer
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        "Comprehensive Health Assessments",
        "Chronic Disease Management (Diabetes, Hypertension, Arthritis, etc.)",
        "Memory & Cognitive Health Support",
        "Mobility & Fall Prevention Programs",
        "Dietary & Nutrition Counseling",
        "Palliative & End-of-Life Care",
        "Medication Review & Optimization",
        "Home-Based Elderly Care & Support",
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
      Why Choose Kaivee Healthcare for Geriatric Care?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {[
        {
          title: "Expertise in Elderly Care",
          desc: "Our geriatricians specialize in managing the complex health needs of seniors with a compassionate approach.",
        },
        {
          title: "Holistic & Respectful Care",
          desc: "We focus on dignity, independence, and personalized treatment plans for our elderly patients.",
        },
        {
          title: "Comprehensive Health Management",
          desc: "From chronic disease management to mental and emotional well-being, we ensure complete geriatric care.",
        },
        {
          title: "Support for Families & Caregivers",
          desc: "We involve family members in healthcare decisions to provide the best support for their senior loved ones.",
        },
        {
          title: "Flexible Consultation Options",
          desc: "Choose between in-clinic visits, home consultations, or telehealth services for convenient geriatric care.",
        },
      ].map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* When to Visit a Geriatrician? */}
  <div className="mt-12 p-6 rounded-xl shadow-md bg-[#D419580D]">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Who Should See a Geriatrician?
    </h2>
    <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-4">
      <li>Older adults with chronic health conditions requiring specialized care.</li>
      <li>Seniors experiencing frequent falls or mobility issues.</li>
      <li>Individuals showing signs of memory loss, dementia, or cognitive decline.</li>
      <li>Older adults on multiple medications who need a prescription review.</li>
      <li>Families seeking palliative or end-of-life care for their loved ones.</li>
      <li>Seniors needing preventive healthcare and wellness plans.</li>
    </ul>
  </div>

  {/* How to Book an Appointment */}
  <div className="mt-12 flex flex-col lg:flex-row items-start gap-8">
    <div className="lg:w-3/4">
      <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center lg:text-left">
        How to Book a Geriatric Consultation?
      </h2>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
        {[
          {
            title: "1. Choose Consultation Type",
            desc: "Opt for in-clinic visits, home-based consultations, or telehealth appointments.",
          },
          {
            title: "2. Schedule Your Appointment",
            desc: "Book via our online portal or contact our helpline for assistance.",
          },
          {
            title: "3. Meet Our Geriatrician",
            desc: "Receive a thorough health assessment and a customized care plan.",
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

    {/* Booking Form */}
    <div className="w-full lg:w-1/2 flex justify-center">
    <div className="w-full">
    <InquiryForm />
  </div>
    </div>
  </div>

  {/* Closing Section */}
  <div className="mt-12 text-center">
    <h2 className="text-2xl font-semibold text-gray-800">
      Promoting Healthy Aging at Kaivee Healthcare
    </h2>
    <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
      At Kaivee Healthcare, we ensure that seniors receive the quality care they deserve. 
      With a focus on comfort, independence, and dignity, our dedicated geriatricians are here for you every step of the way.
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



