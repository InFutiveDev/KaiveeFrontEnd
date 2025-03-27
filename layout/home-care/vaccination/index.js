import Ecgbanner from "./vaccination-banner";


import img1 from "assets/images/home-care/vac.jpg";
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
      <h1 className="text-3xl font-bold text-[#8DBD4D] text-center mb-8">Vaccination at Home by Kaivee Healthcare</h1>
      <p className="text-center text-gray-700 mb-6">
      At Kaivee Healthcare, we understand the importance of having access to basic health services, such as vaccinations, in the simplest way possible, without the hassle and stress. This is why we deliver our Vaccination at Home service to you. Get timely immunizations in the comfort of your home, without sacrificing safety or quality of care.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">The Challenge: Convenient Immunization</h2>
          <p className="text-gray-700">
            Getting vaccinated is essential for all age groups, but visiting clinics can be time-consuming
            and stressful. Long lines, exposure risks, and busy schedules make timely immunization difficult.
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">How Our Home Vaccination Service Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="font-semibold">1. Schedule an Appointment</h3>
            <p>Book online or call us to set a convenient date and time.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="font-semibold">2. Vaccine Confirmation</h3>
            <p>Our healthcare professional ensures safe transportation and verification before administration.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="font-semibold">3. Professional Administration</h3>
            <p>Our certified nurses follow hygiene protocols and use sterile, one-time-use equipment.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="font-semibold">4. Post-Vaccination Monitoring</h3>
            <p>Immediate supervision, care instructions, and vaccination certification are provided.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-6">
  <div className="md:w-1/2">
    <h2 className="text-2xl font-semibold">Available Vaccines</h2>
    <ul className="list-disc pl-5 space-y-2 mt-4">
      <li>Childhood Immunizations</li>
      <li>Flu & Pneumonia Vaccines</li>
      <li>Hepatitis A & B</li>
      <li>Typhoid & Travel Vaccinations</li>
      <li>HPV & COVID-19 Vaccines</li>
      <li>Tetanus & Rabies Shots</li>
    </ul>
  </div>
  <div className="md:w-1/2 flex justify-center">
    <Image
      src={"https://ik.imagekit.io/InFutiveTechnology/kaivee/patient-getting-vaccine_23-2148801436.jpg?updatedAt=1743050817275"}
      alt="ECG & X-Ray Home Service"
      width={500} 
      height={300} 
      className="rounded-xl shadow-md w-[80%] max-w-[500px]"
    />
  </div>
</div>

      
      <div className="mt-8 bg-[#D419580D] p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Why Choose Kaivee Healthcare?</h2>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li><strong>Convenient & Time-Saving:</strong> No travel, no waiting.</li>
          <li><strong>Comfort & Privacy:</strong> Get vaccinated at home.</li>
          <li><strong>Licensed Professionals:</strong> Certified nurses ensure quality care.</li>
          <li><strong>Strict Cold Chain Maintenance:</strong> Vaccines stored at optimal conditions.</li>
          <li><strong>Safety & Hygiene:</strong> Best infection control measures.</li>
          <li><strong>Instant Documentation:</strong> Vaccination records for health and travel.</li>
        </ul>
      </div>
      
      <div className="mt-8 ">
  <h2 className="text-2xl font-semibold">Who is Eligible?</h2>
  <ul className="mt-4 text-gray-700 list-disc pl-5 space-y-2 text-left inline-block">
    <li>Seniors, children, and people with limited mobility</li>
    <li>Professionals needing flexible scheduling</li>
    <li>Patients with chronic conditions</li>
    <li>Frequent travelers needing destination-based vaccines</li>
  </ul>
</div>

      
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Make an Appointment Today</h2>
        <p className="mt-4 text-gray-700">Don't delay essential vaccinations. Get protected with Kaivee Healthcare's home vaccination service.</p>
        
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

