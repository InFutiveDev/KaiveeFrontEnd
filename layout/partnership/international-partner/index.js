import Ecgbanner from "./international-banner";
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
import CorporateHealthEnquiry from "components/inquiryForm/CorporateHealthEnquiry";

const InternationalLayout = () => {
  return (
    <>
      {/* className="sliders banner_slider_wrap_facilities" */}
      <section>
        {/* className="web-view relative cstm-flexbox flexbox container" */}
        <div>
          <Ecgbanner />
        </div>
       
      </section>

      <div className="container mx-auto px-4 py-10">
      {/* Section: Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#8DBD4D] mb-3">
          International Partnership - Kaivee Healthcare
        </h1>
        <h2 className="text-2xl  font-bold text-gray-600">
          Expanding Global Healthcare Excellence Together
        </h2>
      </div>

      {/* Section: Intro with Image */}
      <div className="flex flex-col lg:flex-row items-center lg:gap-16 gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">About Kaivee Healthcare</h2>
          <p className="text-lg text-gray-700">
          About Kaivee Healthcare We believe that healthcare should not know any borders. Through our International Partnership Program, we aspire to partner with global healthcare providers, hospitals, diagnostic laboratories, medical technology companies, and healthcare organizations to facilitate improved delivery of healthcare services across nations.
          </p>
          <p className="mt-1 text-lg text-gray-700">
          We are committed to helping find partners who realize these goals to our shared vision of affordable, teaming providers that are committed to the communities they serve worldwide. These partnership models are tailored toward both businesses that aim to expand their healthcare services in India, as well as those looking to work on cross-border initiatives.          </p>
        </div>

        {/* Right - Image */}
        <div className="flex-1">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/top-view-hands-holding-stethoscope-with-globe_23-2148630389.jpg?updatedAt=1742802153802"
            alt="International Healthcare Partnership"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section: Why Partner with Kaivee Healthcare */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Why Partner with Kaivee Healthcare Internationally?</h2>
        <ul className="list-disc ml-6 text-lg text-gray-700 space-y-3">
          <li><b>Expanding Healthcare Market Reach:</b>  By partnering with Kaivee Healthcare, you can gain access to one of the largest and fastest-growing healthcare markets on the planet.</li>
          <li><b>Brand Credibility & Trust:</b> Kaivee Healthcare has earned a reputation for its patient-centric philosophy, ethical conduct, and excellence in healthcare delivery. </li>
          <li><b>Real-time Monitoring:</b> From Diagnostics, at-home treatment, outpatient consults and wellness programs, there are many avenues for international collaborations, joint ventures and service integration.</li>
          <li><b>Technology-Driven Healthcare:</b> We have adopted such innovations as telemedicine platforms, electronic health records (EHR), and AI-driven diagnostics. By operating on technology, we could be efficient and scale up for international partners.</li>
          <li><b>Comprehensive Support:</b> Through our partner program, we provide all the necessary information about regulatory landscape, licensing, service protocols and operational standards to enable global partners to operate with ease, in India.</li>
        </ul>
      </div>

      {/* Section: Who Can Join */}
      <div className="mt-12 flex flex-col lg:flex-row items-center lg:gap-16 gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Who Can Partner with Us?</h2>
          <ul className="list-disc ml-6 text-lg text-gray-700 space-y-3">
            <li>Foreign diagnostic companies entering the Indian market.</li>
            <li>Hospitals seeking cross-border patient referrals.</li>
            <li>MedTech & Healthcare IT companies expanding into India.</li>
            <li>Wellness and preventive healthcare organizations.</li>
            <li>Medical universities and training institutions.</li>
            <li>NGOs & government agencies focused on global health initiatives.</li>
          </ul>
        </div>
        

        {/* Right - Image */}
        {/* <div className="flex-1">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/international-trade-concept-illustration_114360-9661.jpg?updatedAt=1742801825006"
            alt="Global Healthcare Collaboration"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div> */}
        <div className="flex-1 flex items-center justify-center  p-6 rounded-lg ">
    <CorporateHealthEnquiry />
  </div>
      </div>

      {/* Section: Key Areas of Collaboration */}
      <div className="mt-12 bg-[#D419580D] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Key Areas of Collaboration</h2>
        <ul className="list-disc ml-6 text-lg text-gray-700 space-y-3">
          <li><b>Diagnostic Services:</b> Our joint engagement model is to have diagnostic centers through us or to process samples and provide reports.</li>
          <li><b>Telemedicine & Virtual Consultations:</b> Work together to expand fellows telehealth services, providing touchdown for patients to access specialized care &/or second opinion in front of leading international specialists.</li>
          <li><b>Training & Development:</b> Conduct information sharing, clinical training programs, and workshops in collaboration with international medical institutions for Indian healthcare professionals.</li>
          <li><b>Clinical Research & Trials:</b> Collaborate on clinical research projects, drug trials, and data-driven healthcare innovations in accordance with international regulatory and ethical guidelines.</li>
        </ul>
      </div>

      {/* Section: Benefits of Partnering */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">International Partnership Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold ">Fast-Growing Healthcare Marketplace</h3>
            <p className="text-gray-700 mt-2">Leverage India’s booming healthcare demand for diagnostics and wellness programs.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold ">Trusted Healthcare Provider</h3>
            <p className="text-gray-700 mt-2">Work with a highly reputed healthcare brand with a patient-centric approach.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold ">Operational & Regulatory Support</h3>
            <p className="text-gray-700 mt-2">Guidance on navigating India’s complex healthcare landscape and regulations.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold ">Cross-Border Knowledge Exchange</h3>
            <p className="text-gray-700 mt-2">Benefit from knowledge sharing, patient referrals, and co-branded marketing.</p>
          </div>
        </div>
      </div>

      {/* Section: Partnership Process */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">How to Partner with Kaivee Healthcare?</h2>
        <ol className="list-decimal ml-6 text-lg text-gray-700 space-y-3">
          <li><b>Submit Your Expression of Interest (EOI):</b> Reach out to our International Relations Team via email or online form. Provide your organization's profile and partnership goals.</li>
          <li><b>Initial Meeting & Proposal Discussion:</b> Team meets to configure a video call to establish partnership, target goals, common vision, and values.</li>
          <li><b>Proposal Review & Agreement:</b> After which we prepare a detailed proposal that covers scope, partnership model, responsibilities, and commercial terms, leading into a formal agreement</li>
          <li><b>Launch & Operational Activation:</b> Our operations team will partner with your organization to help you launch services, oversee operations, and create an effortless experience for both parties.</li>
        </ol>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Partner with Kaivee Healthcare to Make a Difference in Healthcare Worldwide</h2>
        <p className="text-lg text-gray-600 mb-4">
        Kaivee Healthcare partners internationally. Join us. We can partner, create, grow and provide high-quality care across borders.
        </p>
        
      </div>
     
    </div>

    </>
  );
};

export default InternationalLayout;

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

