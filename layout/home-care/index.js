 import Nursingbanner from "./nursing-care/nursing-banner";
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

const HomeCareLayout = () => {
  return (
    <>
      {/* className="sliders banner_slider_wrap_facilities" */}
      <section>
        {/* className="web-view relative cstm-flexbox flexbox container" */}
        <div>
          <Nursingbanner />
        </div>
        {/* <div className="absolute left-[-20px] top-0">
          <Image width={180} height={180} className="w-full object-fill" src={AboutFireImage.src} />
        </div>
        <div className="absolute left-64 bottom-0">
          <Image width={180} height={180} className="w-full object-fill" src={AboutFireImage.src} />
        </div>
        <div className="absolute -right-8 bottom-0">
          <Image width={180} height={180} className="w-full object-fill" src={AboutFireImage.src} />
        </div> */}
      </section>

      {/* <AboutUs /> */}
      <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center mb-8 text-[#8DBD4D]">
        Nursing Care at Home: Compassionate Support from Kaivee Healthcare
      </h1>

      {/* Challenge Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            The Challenge: When Home Becomes a Hospital Room
          </h2>
          <p className="text-gray-700">
          Nursing a loved one after an operation, coping with chronic illness, navigating the challenges of elder care — all can take an emotional and physical toll. A long hospital stay can be stressful, expensive, and unpleasant — for both the patient and the family.
          You want your loved one to feel safe and comforted, but you have concerns:          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Am I doing enough?</li>
            <li>What if I forget a medication?</li>
            <li>How do I handle wound care or injections?</li>
          </ul>
        </div>
        <div className="flex justify-center">
        <Image 
    src="https://ik.imagekit.io/InFutiveTechnology/kaivee/portrait-female-pediatrician-work_23-2151686783.webp?updatedAt=1743051634795" 
    alt="ECG & X-Ray Home Service" 
    width={500} 
    height={300} 
    className="rounded-xl shadow-md w-[80%] max-w-[500px]" 
  />        </div>
      </div>

      {/* Nursing Care at Home Section */}
      <div className="mt-12 bg-[#D419580D] p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Professional Nursing Care at Home
        </h2>
        <p className="text-gray-700 text-center mt-4">
          Kaivee Healthcare brings professional nursing services to your home, ensuring expert care in a comfortable environment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Personalized Care</h3>
            <p className="text-gray-600">Receive expert medical attention from highly trained nurses at home.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Safety First</h3>
            <p className="text-gray-600">Strict hygiene and infection control measures ensure the best care.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Customized Care Plans</h3>
            <p className="text-gray-600">Each plan is tailored to the patient is needs and family preferences.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Affordable Packages</h3>
            <p className="text-gray-600">Quality home nursing at transparent and flexible pricing.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          How Our Nursing Care Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
            <h3 className="font-semibold text-lg">Step 1: Assessment</h3>
            <p className="text-gray-600">Conducting an Assessment and Developing a Plan.</p>
          </div>
          <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
            <h3 className="font-semibold text-lg">Step 2: Nurse Assignment</h3>
            <p className="text-gray-600">A qualified nurse is assigned based on medical requirements.</p>
          </div>
          <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
            <h3 className="font-semibold text-lg">Step 3: Home Care</h3>
            <p className="text-gray-600">The nurse provides care, including medication, wound dressing, and IV therapy.</p>
          </div>
          <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
            <h3 className="font-semibold text-lg">Step 4: Ongoing Monitoring</h3>
            <p className="text-gray-600">We keep families and doctors updated with regular reports.</p>
          </div>
        </div>
      </div>

      {/* When Do You Need Home Nursing? */}
      <div className="mt-12 bg-[#D419580D] p-6 rounded-xl shadow-md flex flex-col lg:flex-row gap-10 items-start">

{/* Left Side: Content */}
<div className="lg:w-2/3 w-full">
  <h2 className="text-2xl font-semibold text-gray-800 text-center lg:text-left">
    When Do You Need Nursing Care at Home?
  </h2>
  <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-4">
    <li>After extensive surgery (orthopaedic, cardiac, etc.) involving post-operative care.</li>
    <li>For older family members that require daily health check-ups.</li>
    <li>In recovery after injury or stroke.</li>
    <li>For patients needing palliative or end-of-life care.</li>
    <li>Chronic conditions like diabetes, hypertension, or COPD require professional interventions at home.</li>
  </ul>
  <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Allow Kaivee Healthcare Help You and Your Family is Health Journey
        </h2>
        <p className="text-gray-700 mt-4">
        Your family should receive quality care and you should have peace of mind. That is you can have both with Kaivee Healthcare is Nursing Care at Home.
Our trained professionals deliver hospital-level expertise in the comfort and safety of your own home.
You can trust us to offer compassionate support that is specific to your loved one is health needs.
        </p>
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
      
        



      

        <div className=" container pb-[30px]">
          <p className="font-semibold text-center">
           Kaivee Healthcare is clearly your best partner at Health & Checkups.

          </p>
        </div>
     
    </>
  );
};

export default HomeCareLayout;

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

