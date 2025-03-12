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
      <h1 className="text-3xl font-bold text-center mb-8">Nursing Care at Home</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Nursing Care  Services</h2>
          <p className="text-gray-700">
            Get professional Nursing Care services in the comfort of your home. Our experienced technicians bring state-of-the-art equipment to your doorstep, ensuring accurate diagnostics with maximum convenience.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Benefits:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Convenient home service</li>
              <li>Professional healthcare technicians</li>
              <li>State-of-the-art portable equipment</li>
              <li>Quick report delivery</li>
              <li>24/7 service availability</li>
            </ul>
          </div>
        </div>
</div>
</div>
      <div className="bg-[#FAFAFA]">
        <WhyChoose data={data} />
      </div>
      <div className="bg-white lg:py-[35px] py-[35px] relative container">
        <div className="grid relative items-center md:grid-cols-2 grid-cols-1 lg:gap-[90px] lg:pr-[120px]">
          <div className="">
            <div className="lg:mb-0 mb-8">
              <div className="our-vision lg:pr-0 md:!pr-[16px] pr-0">
                <Image
                  src={OurVersion}
                  // width={"100%"}
                  // width={1000}
                  className="object-cover w-[80%] max-w-[500px] rounded-2xl shadow-md"
                  alt="our-mission"
                />
              </div>
            </div>
          </div>
          <div className="lg:pl-0 md:pl-[100px] pl-0">
            <h2 className="text-black lg:text-[24px] text-xl font-semibold font-source-pro ">
              Our Vision
            </h2>
            <p className="text-secondary lg:text-[18px] text-base mt-[16px]">
            We are committed to delivering exceptional patient-centered healthcare solutions that provide the highest quality, service, and access to in-home and ambulatory care from highly trained medical professionals and aides. Our goal is to ensure each patient receives the best care possible, giving them the attention and care they deserve.
            </p>
          </div>
        </div>
        <div className="grid relative items-center xl:mt-28 lg:mt-10 mt-8 md:grid-cols-2 grid-cols-1 lg:gap-[90px] xl:pl-[120px] lg:pl-auto md:pl-auto  md:order-1 order-2">
          <div className="md:order-2">
            <div className="">
              <div className="our-mission flex justify-end lg:pl-0 md:!pl-[16px] pl-0 md:mb-0 mb-4">
                <Image
                  src={OurMission}
                  // width={"100%"}
                  className="object-cover  w-[80%] max-w-[500px] rounded-2xl shadow-md"
                  alt="our-mission"
                />
              </div>
            </div>
          </div>
          <div className="lg:pl-[16px] md:pl-0 pl-0 lg:mb-0 mb-8 ">
            <h2 className="text-black lg:text-[24px] text-xl font-semibold font-source-pro">
              Our Mission
            </h2>
            <p className="text-secondary lg:text-[18px] text-base mt-[16px]">
            As a trusted and quality-focused partner for health care around the world, Kaivee HealthCare is committed to delivering an exceptional experience to our customers. We strive to provide the highest quality of service, tailored to meet the unique needs of each individual and organization. Our goal is to ensure that everyone who chooses us as their health care partner is provided with the best possible service and assistance. With our team of experienced professionals and a personalized approach, we strive to provide the best care and support for our clients.
             </p>
          </div>
        </div>

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

