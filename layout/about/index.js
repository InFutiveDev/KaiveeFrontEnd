import Aboutbanner from "./aboutBanner";
import AboutFireImage from "assets/images/about/fireworks 3.svg";
import AboutUs from "./aboutus";

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

const AboutLayout = () => {
  return (
    <>
      {/* className="sliders banner_slider_wrap_facilities" */}
      <section>
        {/* className="web-view relative cstm-flexbox flexbox container" */}
        <div>
          <Aboutbanner />
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

      <AboutUs />
      <section className="py-4 px-6 bg-[#D419580D]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Know Our Journey</h2>
        <p className=" text-[18px] mt-4 text-gray-600">
          At kaivee HealthCare, we believe in comprehensive services, convenient pick-ups, timely delivery, and an informed follow-up. We make sure that you get quick, accurate, and state-of-the-art services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 space-y-8">
        {/* Right-aligned on desktop */}
        <div className="bg-white p-6 rounded-lg shadow-md md:ml-auto md:max-w-[85%]">
          <h3 className="text-2xl font-semibold text-gray-700">How We Started</h3>
          <p className="text-[18px] mt-2 text-gray-600">
            When we began this journey in 2021, all we wanted was to make quality healthcare accessible to people and to give a sense of convenience with a healthy lifestyle.
          </p>
        </div>

        {/* Left-aligned on desktop */}
        <div className="bg-white p-6 rounded-lg shadow-md md:mr-auto md:max-w-[85%]">
          <h3 className="text-2xl font-semibold text-gray-700">Defining The Problem</h3>
          <p className="text-[18px] mt-2 text-gray-600">
            We have seen the harsh realities of both urban and rural life - from the issue of affordability to the problem of accessibility. Our strong desire to improve the overall well-being of people, by providing them with accurate diagnostics, motivated us to create 'Kaivee HealthCare'. Through our innovative solutions, we strive to ensure that everyone has access to the diagnostic healthcare they need, regardless of their location or financial situation.
          </p>
        </div>

        {/* Right-aligned on desktop */}
        <div className="bg-white p-6 rounded-lg shadow-md md:ml-auto md:max-w-[85%]">
          <h3 className="text-2xl font-semibold text-gray-700">Creating a Pan-India Dx Revolution</h3>
          <p className="text-[18px] mt-2 text-gray-600">
            We believe in the philosophy of preventive health and disease management. In just four short years, we have been able to provide care to many Indians, making us a leader in the field of diagnostics. We are proud to be able to make a positive impact in the lives of so many people.
          </p>
        </div>
      </div>
    </section>

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

        {/* <div className="grid relative items-center md:grid-cols-2 grid-cols-1 lg:gap-[90px] lg:pr-[120px]">
          <div className="">
            <div className="lg:mb-0 mb-8">
              <div className="our-vision lg:pr-0 md:!pr-[16px] pr-0">
                <Image
                  src={OurVersion}
                  // width={"100%"}
                  // width={1000}
                  className="object-cover w-full "
                  alt="our-mission"
                />
              </div>
            </div>
          </div> */}
          {/* <div className="lg:pl-0 md:pl-[100px] pl-0">
            <h2 className="text-black lg:text-[24px] text-xl font-semibold font-source-pro ">
              Our Value
            </h2>
            <p className="text-secondary lg:text-[18px] text-base mt-[16px]">
              At the heart of Kaivee Healthcare lies a strong foundation of <strong>trust</strong>, <strong>integrity</strong>, and <strong>excellence</strong>.
              We put <strong>patients first</strong>, ensuring that every test is conducted with <strong>precision</strong> and <strong>care</strong>.
              Our commitment to <strong>transparency</strong> means no hidden costs—just honest, reliable healthcare services.
              We continuously invest in <strong>innovation</strong>, upgrading our technology and processes to provide the most <strong>accurate</strong> and
              <strong>efficient diagnostic solutions</strong>. With a team of skilled professionals, we uphold the highest standards of <strong>ethics</strong> and <strong>quality</strong>,
              making sure that every report is a reflection of our dedication to <strong>excellence</strong>.
              Because at Kaivee Healthcare, your <strong>health matters the most</strong>.
            </p>
          </div> */}
        </div>
        {/* <div className="absolute top-0 right-0">
          <AboutPattern />
        </div>
        <div className="absolute bottom-0 left-0">
          <AboutPattern />
        </div> */}
      {/* </div> */}



      {/* <div className="bg-white">
        <div className="md:py-[70px] py-[35px] container">
          <h2 className="text-black font-semibold lg:text-[24px] text-xl font-source-pro">Leadership</h2>
          <div className="mt-[32px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:gap-8 md:gap-4 gap-3">
            {leaders.map((leader, index) => (
              <div key={index} className="border rounded-lg p-5 shadow-lg">
                <div className="flex justify-center items-center">
                  <Image src={leader.image} alt={`${leader.name} avatar`} loading="eager" width={140} height={140} className="object-cover" />
                </div>
                <div className="text-center mt-3">
                  <p className="text-black font-source-pro font-semibold text-[24px]">{leader.name}</p>
                  <div className="text-secondary text-[18px] mt-1">{leader.role}</div>
                  <p className="text-secondary text-[16px] mt-3 px-4">{leader.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

        <div className=" container pb-[30px]">
          <p className="font-semibold text-center">
           Kaivee Healthcare is clearly your best partner at Health & Checkups.

          </p>
        </div>
     
    </>
  );
};

export default AboutLayout;

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
    title: "100+ Labs",
    
    icon: <Image src={img66} alt="NABL Accredited Icon" />,
  },
  {
    id: 7,
    title: "3000+ Collection Centres",
    
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

