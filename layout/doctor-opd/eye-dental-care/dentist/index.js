import Alternativebanner from "./dentist-banner";

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

     {/* <AboutUs /> */}
     <div className="container mx-auto px-4 lg:px-16 py-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#346D14] wave-animation">
          Comprehensive Dental Services at Kaivee Healthcare
        </h1>
        <p className="mt-4 font-semibold text-2xl text-gray-800">
          Personalized Oral Health Care for a Lifetime of Beautiful Smiles
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <p className="text-gray-700">
            At Kaivee Healthcare, we believe that good oral health is the foundation of overall wellness. 
            Our expert dental team provides advanced and compassionate care to patients of all ages.
          </p>
          <p className="mt-4 text-gray-700">
            Whether it's a routine check-up, cosmetic dentistry, or complex oral surgeries, 
            we ensure precise diagnosis and tailored treatment plans for optimal dental health.
          </p>
          <p className="mt-4 text-gray-700">
          At Kaivee Healthcare, we use state-of-the-art technology such as digital X-rays, laser dentistry, and 3D imaging to deliver precise diagnoses and minimally invasive treatments. Our focus is on patient safety, comfort, and achieving the best possible outcomes for every procedure.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/dentist-man-examining-patient-teeth_1308-94382.jpg?updatedAt=1743594097869"
            alt="Dental Care at Kaivee Healthcare"
            width={500}
            height={300}
            className="rounded-xl shadow-lg w-[80%] max-w-[500px] transform transition duration-500 hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>

      {/* Services We Offer */}
      <div className="mt-12">
  <h2 className="text-2xl font-semibold text-gray-800">Our Dental Services</h2>
  <p className="mt-4 text-gray-700">
    We provide a full range of dental treatments, from preventive care to advanced dental procedures.
  </p>
  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { title: "Preventive Dentistry", desc: "Routine check-ups, cleanings, fluoride treatments, and sealants." },
      { title: "Cosmetic Dentistry", desc: "Teeth whitening, veneers, and smile makeovers." },
      { title: "Orthodontics", desc: "Braces and Invisalign for teeth alignment." },
      { title: "Restorative Dentistry", desc: "Dental fillings, crowns, and bridges." },
      { title: "Root Canal Treatment", desc: "Pain-free root canal therapy." },
      { title: "Gum Disease Treatment", desc: "Gingivitis and periodontitis management." },
      { title: "Pediatric Dentistry", desc: "Gentle care for children’s dental needs." },
      { title: "Dental Implants", desc: "Permanent solutions for missing teeth." },
      { title: "Emergency Dental Care", desc: "Urgent treatment for dental trauma." },
    ].map((item, index) => (
      <div
        key={index}
        className="p-4 border-l-4 border-[#346D14] bg-white shadow rounded-lg flex items-center gap-3"
      >
        {/* Teeth Icon with Effects */}
        <span className="text-2xl transition-transform transform hover:scale-125 animate-bounce">
          🦷
        </span>
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Why Choose Us? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Kaivee Healthcare for Dental Care?
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "🟢 Experienced Dentists", desc: "Expert care for all dental conditions." },
            { title: "🟢 Advanced Dental Technology", desc: "Digital X-rays and laser dentistry." },
            { title: "🟢 Patient-Centered Approach", desc: "Personalized treatment plans." },
            { title: "🟢 Sterile & Safe Environment", desc: "Strict infection control measures." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#346D14] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to See a Dentist */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800">
            When Should You Visit the Dentist?
          </h2>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>Persistent toothache or sensitivity</li>
            <li>Bleeding or swollen gums</li>
            <li>Broken, chipped, or lost teeth</li>
            <li>Bad breath or dry mouth</li>
            <li>Pain while eating or speaking</li>
            <li>Jaw pain or clicking sounds</li>
            <li>Yellowed or stained teeth affecting confidence</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Early detection and treatment can prevent serious dental problems. 
            Don’t wait until pain becomes unbearable—schedule a visit today!
          </p>
        </div>

        {/* Right Section: Enquiry Form */}
        <div className="lg:w-1/3 flex justify-center">
        <div className="w-full">
    <InquiryForm />
  </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="mt-12 text-center bg-[#F9FAFB] p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-gray-800">
          Smile Brighter with Kaivee Healthcare
        </h2>
        <p className="mt-4 text-gray-700">
          Whether it’s preventive care, cosmetic improvements, or restorative treatments, 
          we are here to help you achieve excellent oral health.
        </p>
       
      </div>
      <div className="bg-[#FAFAFA]">
        <WhyChoose data={data} />
      </div>
      
        

        <div className=" container ">
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



