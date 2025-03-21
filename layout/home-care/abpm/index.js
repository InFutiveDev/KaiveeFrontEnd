import Ecgbanner from "./abpm-banner";
// import AboutFireImage from "assets/images/about/fireworks 3.svg";
// import AboutUs from "./aboutus";

import OurVersion from "assets/images/about/vision.jpg";
import OurMission from "assets/images/about/mission.png";
import { AboutPattern } from "assets/images/SvgImage";
import img1 from "assets/images/home-care/abpm.jpg";
import img2 from "assets/images/home-care/abpm2.jpg";
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

const AbpmLayout = () => {
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
      <h1 className="text-3xl font-bold mb-6 text-[#8DBD4D] text-center">
      ABPM (Ambulatory Blood Pressure Monitoring) at Home
    </h1>
      <div className="flex flex-col md:flex-row   mx-auto gap-8 ">
  {/* Text Section */}
  <div className="md:w-1/2 text-left">
    
    
    <p className="text-[20px] text-gray-700">Home Ambulatory Blood Pressure Monitoring (ABPM) at Kaivee Healthcare provides the most reliable option in such cases. Our portable ABPM device takes your blood pressure over a 24-hour period, or longer, in the familiar surroundings of your own home. You are now giving your doctor a lot of information that is helpful for accurate diagnosis and treatment planning.</p>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 flex justify-center">
    <Image 
      src={img1} 
      alt="ABPM at Home" 
      className="rounded-xl shadow-md w-[80%] max-w-[500px]"
    />
  </div>
</div>


  {/* What is ABPM? */}
  <div className="mt-8">
    <h2 className="text-2xl font-semibold">What is Ambulatory Blood Pressure Monitoring (ABPM)?</h2>
    <p className="mt-4 text-gray-700">
      ABPM is a method of measuring blood pressure at multiple intervals over a 24-hour period, including while sleeping.
      Unlike a one-time clinic reading, this approach helps doctors analyze fluctuations and detect conditions like
      white coat hypertension or masked hypertension.
    </p>
  </div>

  {/* How It Works */}
  <div className="mt-8">
    <h2 className="text-2xl font-semibold">How Our At-Home ABPM Works</h2>
    <ul className="list-decimal pl-5 space-y-3 mt-4 text-gray-700">
      <li>
        <strong>Start with a Consultation:</strong> Contact Kaivee Healthcare via our helpline or website. We will discuss your needs
        and schedule an appointment that fits your lifestyle.
      </li>
      <li>
        <strong>Home Visit and Device Fitting:</strong> Our healthcare professional visits your home to fit a lightweight ABPM monitor
        to your waist or shoulder, with a comfortable cuff around your upper arm.
      </li>
      <li>
        <strong>Live Your Day, While We Track:</strong> The monitor records blood pressure at intervals (every 15-30 minutes in the daytime,
        every 30-60 minutes at night). You continue your daily routine without disruption.
      </li>
      <li>
        <strong>Easy Collection and Expert Reporting:</strong> After the monitoring period, our technician retrieves the device. Our specialists
        analyze the data and provide a detailed report for you and your doctor.
      </li>
    </ul>
  </div>

  {/* Why Choose Kaivee Healthcare? */}
  <div className="mt-8 flex flex-col md:flex-row items-start gap-6">
    {/* Image Section */}
    

    {/* Text Section */}
    <div className="md:w-1/2">
      <h2 className="text-2xl font-semibold">Why Choose Kaivee Healthcare?</h2>
      <ul className="list-disc pl-5 mt-4 text-gray-700">
        <li><strong>Day and Night Analysis:</strong> Get a complete picture of blood pressure fluctuations.</li>
        <li><strong>Comfortable & Non-Intrusive Devices:</strong> Lightweight and easy to wear.</li>
        <li><strong>Minimal Disruption:</strong> No hospital visits required, reducing stress and anxiety.</li>
        <li><strong>Reliable & Accurate Readings:</strong> Continuous monitoring provides valuable data for proper diagnosis.</li>
      </ul>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <Image src={img2} alt="Blood Pressure Monitoring" className="rounded-xl shadow-md w-[80%] max-w-[500px]" />
    </div>
  </div>

  {/* Who Should Get ABPM? */}
  <div className="mt-8">
    <h2 className="text-2xl font-semibold">Who Should Consider ABPM at Home?</h2>
    <ul className="list-disc pl-5 mt-4 text-gray-700">
      <li>Individuals with unexplained blood pressure fluctuations.</li>
      <li>Patients suspected of having white coat hypertension.</li>
      <li>Those with masked hypertension (normal clinic readings but high at home).</li>
      <li>People assessing the effectiveness of their hypertension medication.</li>
      <li>Patients with chronic kidney disease, diabetes, or cardiovascular risk factors.</li>
    </ul>
  </div>

  {/* Call to Action */}
  <div className="mt-8 text-center">
    <h2 className="text-xl font-semibold">Take Control of Your Heart Health Today</h2>
    <p className="mt-2 text-gray-700">
      Kaivee Healthcare is ABPM at Home provides accurate insights into your blood pressure without disrupting your daily life.
      Whether it is recommended by your doctor or you're taking a proactive step, our service ensures a stress-free experience.
    </p>
  </div>
</div>

 <div className="bg-[#FAFAFA]">
        <WhyChoose data={data} />
      </div>
     
   
 

    </>
  );
};

export default AbpmLayout;

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

