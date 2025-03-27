import Ecgbanner from "./annual-banner";
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

const AnnualLayout = () => {
  return (
    <>
      {/* className="sliders banner_slider_wrap_facilities" */}
      <section>
        {/* className="web-view relative cstm-flexbox flexbox container" */}
        <div>
          <Ecgbanner />
        </div>
       
      </section>

      
      <div className="container mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#8DBD4D] mb-4">
          Annual Health Check-up – Kaivee Healthcare
        </h1>
        <h2 className="text-2xl font-bold  text-gray-600">
          Proactive Health Monitoring for a Healthier Tomorrow
        </h2>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-[#D419580D] p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700">
          Health often takes a backseat in today is hectic lifestyle — until something goes awry. 
          Regular check-ups can facilitate early diagnosis and treatment of diseases. At Kaivee Healthcare, 
          we offer a variety of preventive care services. Our Annual Health Check-up packages for individuals, 
          families, and corporate employees ensure that you remain informed about your health status throughout the year.
        </p>
        <p className="mt-1 text-lg text-gray-700">
        With this reasoning, the best way is to identify when you indeed have time and what services will suit you best through our thorough Annual Health Check-up packages, which not only help track your current health history and spot any potential risk factors as soon as possible, but also to encourage a proactive approach in you towards health. Whether you're a person wanting to take control of your health or an organization dedicated to employee wellness, Kaivee Healthcare offers easy and affordable solutions.
        </p>
      </div>

      {/* Reasons to Get Annual Health Check-ups */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold  mb-4">
          Reasons to Get Annual Health Check-ups with Kaivee Healthcare
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Customized All-Inclusive Packages",
              description:
                "Our packages are tailored for all age groups, offering everything from basic screenings to advanced diagnostics.",
            },
            {
              title: "Early Detection Saves Lives",
              description:
                "Routine health screenings detect silent killers like diabetes, hypertension, and heart disease in their early stages.",
            },
            {
              title: "Convenient Scheduling & Home Testing",
              description:
                "Book flexible appointments and avail home sample collection services for maximum convenience.",
            },
            {
              title: "Accurate and Timely Reports",
              description:
                "With world-class imaging equipment and expert technicians, we ensure accurate and timely results.",
            },
            {
              title: "Transparent Pricing with No Hidden Fees",
              description:
                "Our affordable health packages come with clear pricing, ensuring you get the best value without surprises.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-black">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What's Included Section */}
      <div className="mt-10 bg-[#D419580D] p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold mb-4">
    Kaivee Healthcare Annual Health Check-ups: What is Included?
  </h2>
  
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
    
    {/* Left Side: List of Health Check-ups */}
    <ul className="list-disc ml-6 text-lg text-gray-700 lg:w-1/2 ">
      <li>Blood Tests: Complete blood count (CBC), blood sugar levels, kidney function tests (KFT), liver function tests (LFT), lipid profile, thyroid profile, etc.</li>
      <li>Urine & Stool Analysis</li>
      <li>Cardiac Health detection: ECG, echocardiography (depends on your package), and blood pressure tests.</li>
      <li>Imaging Tests: Chest X-ray, ultrasound abdomen, and other scans as per advice.</li>
      <li>Pap Smear (for women) & PSA (for men based on age and risk factors)</li>
      <li>Physical Exam: By a well-trained clinician, to include vital sign monitoring and comprehensive medical history review</li>
      <li>Specialist Referral: Also based on findings, we refer clients to specialists — cardiologists, endocrinologists and gynaecologists</li>
    </ul>

    {/* Right Side: Image */}
    <div className="flex-1">
    <img 
      src="https://ik.imagekit.io/InFutiveTechnology/kaivee/flat-hand-drawn-patient-taking-medical-examination_52683-57829_converted%20(1).jpg?updatedAt=1742798300878" 
      alt="Annual Health Check-up" 
      className="w-full max-w-md rounded-lg shadow-lg"
    />
  </div>

  </div>
</div>


      {/* Who Should Get an Annual Health Check-up? */}
      <div className="mt-10 flex flex-col lg:flex-row items-center lg:gap-24 md:gap-15 gap-5 ">
  {/* Left Side - Text Content */}
  <div className="flex-1">
    <h2 className="text-2xl font-semibold mb-4">
      Who Should Go for an Annual Health Check-up?
    </h2>
    <ul className="list-disc ml-6 text-lg text-gray-700">
      <li>Individuals aged over 30 years</li>
      <li>Those with a hereditary history of chronic diseases</li>
      <li>Corporate employees in wellness programs</li>
      <li>Elderly individuals needing regular check-ups</li>
      <li>People with lifestyle risks such as smoking, obesity, or excessive stress</li>
    </ul>
  </div>

  {/* Right Side - Image */}
  <div className="flex justify-center lg:w-1/2">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/appointment-booking-with-calendar_23-2148549799.jpg?updatedAt=1743057917427"
        alt="Annual Health Check-up"
        width={450}
        height={200}
        className="rounded-xl shadow-md  w-[80%] max-w-[300px]"
      />
    </div>
  
</div>


      {/* Corporate Wellness Packages */}
      <div className="mt-10 bg-[#D419580D] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold  mb-4">
          Annual Wellness Packages for Corporates
        </h2>
        <p className="text-lg text-gray-700">
          Kaivee Healthcare provides personalized health check-up packages for organizations, 
          ensuring a healthier workforce. Investing in employee health reduces absenteeism, 
          maintains productivity, and fosters a culture of wellness in the workplace.
        </p>

        {/* Corporate Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[
            "Tailored packages for various employee segments",
            "Special group discounts and wellness programs",
            "End-to-end management from scheduling to report delivery",
            "Confidential and secure employee health data access",
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-gray-600">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold  mb-4">
        Why you should invest in your health with Kaivee Healthcare
        </h2>
        <p className="text-lg text-gray-700">
        At Kaivee Healthcare, an Annual Health Check-up is not just a routine test, but a step towards a healthy and long life. Be sure to keep your health ahead of the curve.
        </p>
       
      </div>
    </div>


    
 

    </>
  );
};

export default AnnualLayout;

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

