import Ecgbanner from "./ecg-banner";
// import AboutFireImage from "assets/images/about/fireworks 3.svg";
// import AboutUs from "./aboutus";

import OurVersion from "assets/images/about/vision.jpg";
import OurMission from "assets/images/about/mission.png";
import { AboutPattern } from "assets/images/SvgImage";
import img1 from "assets/images/home-care/ecg.jpg";
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

const EcgLayout = () => {
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
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center mb-8 text-[#8DBD4D]">
        ECG & X-Ray at Home: Convenient Diagnostics by Kaivee Healthcare
      </h1>

      {/* Challenge Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            The Challenge: When Getting Tests Done Feels Impossible
          </h2>
          <p className="text-gray-700">
            At times, carrying out basic tests like ECG or X-Ray can be tough. Whether it is chest pain, fatigue, or an injury, these health issues demand urgent care. But transportation issues, long wait times, and crowded hospitals delay essential tests.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Long wait times.</li>
            <li>Crowded hospitals.</li>
            <li>Struggles with mobility.</li>
            <li>Transport problems for elderly or critically ill patients.</li>
          </ul>
        </div>
        <div className="flex justify-center">
  <Image 
    src="https://ik.imagekit.io/InFutiveTechnology/kaivee/monitor-hospital-ward-showing-bmp-from-patient_482257-9697.webp?updatedAt=1743049846157" 
    alt="ECG & X-Ray Home Service" 
    width={500} 
    height={300} 
    className="rounded-xl shadow-md w-[80%] max-w-[500px]" 
  />
</div>

      </div>

      {/* Solution Section */}
      <div className="mt-12 bg-[#D419580D] p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          THE SOLUTION: ECG & X-RAY FACILITIES AT HOME
        </h2>
        <p className="text-gray-700 text-center mt-4">
          Kaivee Healthcare brings professional ECG and Digital X-Ray services to your doorstep. Our trained professionals use advanced, portable equipment to ensure accurate and comfortable diagnostics at home.
        </p>
      </div>

      {/* How It Works */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          How ECG & X-Ray at Home Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
            <h3 className="font-semibold text-lg">Step 1: Book Your Appointment</h3>
            <p className="text-gray-600">Call us or book online at your convenience.</p>
          </div>
          <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
            <h3 className="font-semibold text-lg">Step 2: Technician Visit</h3>
            <p className="text-gray-600">A certified technician arrives with portable equipment.</p>
          </div>
          <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
            <h3 className="font-semibold text-lg">Step 3: Test Completion</h3>
            <p className="text-gray-600">Quick, painless, and non-invasive procedures.</p>
          </div>
          <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
            <h3 className="font-semibold text-lg">Step 4: Results and Reports</h3>
            <p className="text-gray-600">Reports are reviewed by specialists and delivered digitally.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-12 bg-[#D419580D] p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Why Choose Kaivee Healthcare for ECG & X-Ray at Home?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">1.Quick Turnaround</h3>
            <p className="text-gray-600">Get results fast for timely medical decisions.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">2.Certified Technologists</h3>
            <p className="text-gray-600">Trained professionals follow strict medical protocols.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">3.Comfort & Privacy</h3>
            <p className="text-gray-600">Stay home for stress-free diagnostics.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">4.Transparent Pricing</h3>
            <p className="text-gray-600">Affordable, no hidden charges.</p>
          </div>
        </div>
      </div>

      {/* When to Choose ECG & X-Ray at Home */}
      <div className="mt-12 bg-gray-50 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          When Should You Opt for ECG & X-Ray at Home?
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-4">
          <li>Chest pain, palpitations, or breathlessness.</li>
          <li>Mobility challenges or difficulty visiting a diagnostic center.</li>
          <li>Post-surgical recovery requiring regular imaging.</li>
          <li>Elderly patients needing routine monitoring.</li>
          <li>Avoiding crowded hospitals post-COVID.</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Your Health, Your Home: Book ECG & X-Ray Services Now
        </h2>
        <p className="text-gray-700 mt-4">
        There is no reason to hold back on vital diagnostics. You get hospital-grade diagnostics without having to set foot outside, thanks to Kaivee Healthcare is ECG & X-Ray at Home services.        </p>
       
      </div>
    </div>
 

    </>
  );
};

export default EcgLayout;

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

