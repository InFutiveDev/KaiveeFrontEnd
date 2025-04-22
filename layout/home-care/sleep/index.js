import Sleepbanner from "./sleep-banner";



import img1 from "assets/images/home-care/sleep.jpg";
import img2 from "assets/images/Finalimg/ourValue/Accountability.webp";
import img3 from "assets/images/Finalimg/ourValue/Executional Excellence.webp";
import img4 from "assets/images/Finalimg/ourValue/Innovation.webp";
import img5 from "assets/images/Finalimg/ourValue/Integrity.webp";

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

const SleepLayout = () => {
  return (
    <>
      {/* className="sliders banner_slider_wrap_facilities" */}
      <section>
        {/* className="web-view relative cstm-flexbox flexbox container" */}
        <div>
          <Sleepbanner />
        </div>
       
      </section>

      
      <div className="container mx-auto px-4 py-8">
     
  {/* Header */}
  <h1 className="text-3xl font-bold text-[#8DBD4D] text-center mb-6">Sleep Study at Home</h1>
  <p className="text-[20px] text-gray-700 text-center">
    Kaivee Healthcare is Sleep Study at Home service helps diagnose sleep disorders 
    from the comfort of your home. Our expert team and advanced equipment ensure 
    accurate results without hospital visits.
  </p>

  {/* What is a Sleep Study? */}
  <div className="mt-8">
    <h2 className="text-2xl font-semibold">What is a Sleep Study?</h2>
    <p className="mt-4 text-gray-700">
      Polysomnography, also known as a Sleep Study, tracks breath patterns, heartbeats, 
      oxygen levels, brainwaves, and body movements. The data helps diagnose sleep disorders 
      like obstructive sleep apnea, insomnia, and other conditions affecting sleep quality.
    </p>
  </div>

  {/* How It Works */}
  <div className="mt-8">
    <h2 className="text-2xl font-semibold">How Our At-Home Sleep Study Works</h2>
    <ul className="list-decimal pl-5 space-y-3 mt-4 text-gray-700">
      <li>
        <strong>Schedule an Appointment:</strong> Call Kaivee Healthcare or book online to set up your home sleep study.
      </li>
      <li>
        <strong>Equipment Delivery and Setup:</strong> A trained technician will install sensors to track your breathing, 
        heart rate, oxygen levels, and movements.
      </li>
      <li>
        <strong>Overnight Monitoring:</strong> Sleep with the portable device in your own bed for natural and uninterrupted tracking.
      </li>
      <li>
        <strong>Data Collection and Reporting:</strong> Our specialists analyze the data and provide a detailed report to you and your doctor.
      </li>
    </ul>
  </div>

  {/* Why Choose Kaivee Healthcare? */}
  <div className="mt-8 flex flex-col md:flex-row items-start gap-6">
    {/* Text Section */}
    <div className="md:w-1/2">
      <h2 className="text-2xl font-semibold">Why Choose Kaivee Healthcare?</h2>
      <ul className="list-disc pl-5 mt-4 text-gray-700">
        <li><strong>Comfort of Your Own Home:</strong> No need for hospital stays.</li>
        <li><strong>Portable & Accurate Devices:</strong> Lightweight, user-friendly, and reliable.</li>
        <li><strong>Expert Setup & Assistance:</strong> Trained professionals ensure proper device placement.</li>
        <li><strong>Privacy & Convenience:</strong> No stress of hospital environments.</li>
        <li><strong>Fast & Reliable Results:</strong> Reports analyzed by sleep specialists and delivered promptly.</li>
      </ul>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 flex justify-center">
      <Image src={img1} alt="Sleep Study at Home" className="rounded-xl shadow-md w-[80%] max-w-[500px]" />
    </div>
  </div>

  {/* Who Needs a Sleep Study? */}
  <div className="mt-8 bg-[#D419580D] p-6 rounded-xl shadow flex flex-col lg:flex-row gap-10 items-start">

  {/* Left Side: Content */}
  <div className="lg:w-2/3 w-full">
    <h2 className="text-2xl font-semibold text-gray-800">
      Who Should Get a Sleep Study at Home?
    </h2>
    <ul className="list-disc pl-5 mt-4 text-gray-700 space-y-2">
      <li>People who snore loudly or experience gasping during sleep.</li>
      <li>Individuals with excessive daytime sleepiness or trouble focusing.</li>
      <li>Those with hypertension or heart disease linked to sleep disorders.</li>
      <li>Patients advised by their doctor to check for sleep apnea.</li>
      <li>Anyone suffering from insomnia or restless sleep patterns.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-4">Schedule Your At-Home Sleep Study Now</h2>
    <p className="mt-2 text-gray-700">
      If you or a loved one is struggling with sleep issues, do not delay diagnosis. 
      Kaivee Healthcare is Sleep Study at Home makes it easy and convenient.
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




     
   
 

    </>
  );
};

export default SleepLayout;

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

