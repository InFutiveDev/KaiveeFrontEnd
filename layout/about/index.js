import Aboutbanner from "./aboutBanner";
import AboutFireImage from "assets/images/about/fireworks 3.svg";
import AboutUs from "./aboutus";

import OurVersion from "assets/images/about/vision.png";
import OurMission from "assets/images/about/mission.png";
import { AboutPattern } from "assets/images/SvgImage";
import img1 from "assets/images/Finalimg/ourValue/Compassion.webp";
import img2 from "assets/images/Finalimg/ourValue/Accountability.webp";
import img3 from "assets/images/Finalimg/ourValue/Executional Excellence.webp";
import img4 from "assets/images/Finalimg/ourValue/Innovation.webp";
import img5 from "assets/images/Finalimg/ourValue/Integrity.webp";
import Clint1 from "assets/images/Finalimg/Leadership/Dr. Aakaar Kapoor.webp";
import Clint2 from "assets/images/Finalimg/Leadership/Dr. Ravi Kapoor.webp";
import Clint3 from "assets/images/Finalimg/Leadership/Dr. Sunita Kapoor.webp";
import Clint4 from "assets/images/Finalimg/Leadership/Dr. Apurva Kapoor.webp";
import { AboutTeamwork } from "assets/images/SvgImage";
import WhyChoose from "components/WhyChoose";
import img11 from "assets/images/why choose us/1.png";
import img22 from "assets/images/why choose us/2.png";
import img33 from "assets/images/why choose us/3.png";
import img44 from "assets/images/why choose us/4.png";
import img55 from "assets/images/why choose us/5.png";
import img66 from "assets/images/why choose us/6.png";
import img77 from "assets/images/why choose us/7.png";
import img88 from "assets/images/why choose us/8.png";
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
      <div className="bg-[#FAFAFA]">
        <WhyChoose data={data} />
      </div>
      <div className="bg-white lg:py-[70px] py-[35px] relative container">
        <div className="grid relative items-center md:grid-cols-2 grid-cols-1 lg:gap-[90px] lg:pr-[120px]">
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
          </div>
          <div className="lg:pl-0 md:pl-[100px] pl-0">
            <h2 className="text-black lg:text-[24px] text-xl font-semibold font-source-pro ">
              Our Vision
            </h2>
            <p className="text-secondary lg:text-[18px] text-base mt-[16px]">
              Our vision is to become a premier healthcare diagnostic service
              provider in our community, continuously striving to deliver the
              best in patient care, service excellence and world-class
              technology. We envision being a trusted medical diagnostic
              partner, impacting lives and empowering health.
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
                  className="object-cover  w-full"
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
              To provide high-quality, timely and innovative healthcare
              diagnostic services with the utmost expertise, compassion and
              transparency. By providing quality and affordable diagnostic
              services, we strive to earn the trust of our patrons and ensure
              the advice and care they need.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <AboutPattern />
        </div>
        <div className="absolute bottom-0 left-0">
          <AboutPattern />
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className=" container md:py-[70px] py-[35px]">
          <h2 className="text-black font-semibold lg:text-[24px] text-xl font-source-pro">
            Our Value
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center lg:gap-8 gap-4 mt-[32px]">
            <div className="lg:p-8 !p-4 bg-white shadow-md border-t-4 rounded-2xl border-orange">
              <div>
                <Image
                  width={80}
                  height={80}
                  className=" object-fill "
                  src={img1.src}
                  alt="icon"
                />
              </div>
              <p className="font-semibold lg:text-[24px] text-[16px] mt-[20px] font-source-pro ">
                Compassion
              </p>
              <span className="mt-[8px] lg:text-[16px] text-[14px] leading-[16px] lg:leading-[20px] text-[#626263]">
                City X-Ray embodies compassion in every aspect of our work. We
                understand the emotional and physical challenges our patients
                face, and we approach each interaction with empathy and
                kindness, ensuring that they feel supported and cared for
                throughout their healthcare journey.
              </span>
            </div>
            <div className="lg:p-8 !p-4 bg-white shadow-md border-t-4 rounded-2xl border-orange">
              <div>
                <Image
                  width={80}
                  height={80}
                  className=" object-fill "
                  src={img2.src}
                  alt="icon"
                />
              </div>
              <p className="font-semibold lg:text-[24px] text-[16px] mt-[20px] font-source-pro">
                Accountability
              </p>
              <span className="text-secondary lg:text-[16px] text-[14px] leading-[16px] lg:leading-[20px] mt-[8px] ">
                At our diagnostic center, accountability is at the core of our
                values. We take responsibility for our actions and decisions,
                striving for accuracy and reliability in every test and report
                we provide. Our commitment to accountability ensures that
                patients and healthcare professionals can trust in the precision
                of our diagnostics.
              </span>
            </div>
            <div className="lg:p-8 !p-4 bg-white shadow-md border-t-4 rounded-2xl border-orange">
              <div>
                <Image
                  width={80}
                  height={80}
                  className=" object-fill "
                  src={img5.src}
                  alt="icon"
                />
              </div>
              <p className="font-semibold lg:text-[24px] text-[16px] mt-[20px] font-source-pro">
                Integrity
              </p>
              <span className="text-secondary lg:text-[16px] text-[14px] leading-[16px] lg:leading-[20px] mt-[8px]">
                Integrity is the foundation of our service. We maintain the
                highest ethical standards in all our operations, safeguarding
                patient confidentiality and delivering unbiased, honest results.
                Our unwavering commitment to integrity builds trust and
                credibility with our patients.
              </span>
            </div>
            <div className="lg:p-8 !p-4 bg-white  shadow-md border-t-4 rounded-2xl border-orange">
              <div>
                <AboutTeamwork />
              </div>
              <p className="font-semibold lg:text-[24px] text-[16px] mt-[20px] font-source-pro">
                Teamwork
              </p>
              <span className="text-secondary mt-[8px] lg:text-[16px] text-[14px] leading-[16px] lg:leading-[20px]">
                Collaboration is key to our success. Our dedicated team of
                experts works cohesively to deliver comprehensive diagnostic
                solutions. Through effective communication and a shared
                commitment to excellence, we ensure the seamless integration of
                our services into the broader healthcare ecosystem.
              </span>
            </div>
            <div className="lg:p-8 !p-4  bg-white shadow-md border-t-4 rounded-2xl border-orange">
              <div>
                <Image
                  width={80}
                  height={80}
                  className=" object-fill "
                  src={img4.src}
                  alt="icon"
                />
              </div>
              <p className="font-semibold lg:text-[24px] text-[16px] mt-[20px] font-source-pro">
                Innovation
              </p>
              <span className="text-secondary mt-[8px] lg:text-[16px] text-[14px] leading-[16px] lg:leading-[20px]">
                Embracing cutting-edge technology and methods, we drive
                innovation in diagnostics. We constantly seek to improve and
                expand our capabilities, offering the most advanced and accurate
                tests to benefit patients.
              </span>
            </div>
            <div className="lg:p-8 !p-4  bg-white shadow-md border-t-4 rounded-2xl border-orange">
              <div>
                <Image
                  width={80}
                  height={80}
                  className=" object-fill "
                  src={img3.src}
                  alt="icon"
                />
              </div>
              <p className="font-semibold lg:text-[24px] text-[16px] mt-[20px] font-source-pro">
                Executional Excellence
              </p>
              <span className="text-secondary mt-[8px] lg:text-[16px] text-[14px] leading-[16px] lg:leading-[20px]">
                We pride ourselves on executional excellence, consistently
                delivering timely and precise diagnostic results. Our rigorous
                quality control measures and efficient processes ensure that we
                meet and exceed the expectations of our patients, contributing
                to better patient outcomes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="md:py-[70px] py-[35px] container">
          <h2 className="text-black font-semibold lg:text-[24px] text-xl font-source-pro">
            Leadership
          </h2>
          <div className="mt-[32px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  xl:gap-8 md:gap-4 gap-3">
            <div className="border rounded-[180px]">
              <div className="flex justify-center items-center mt-5">
                <Image
                  src={""}
                  alt="leader avatar "
                  loading="eager"
                  className=" object-fill "
                  width={140}
                  height={140}
                />
              </div>
              <div className="">
                <p className="text-black font-source-pro font-semibold text-[24px] mt-3 text-center">
                  Dr. XYZ
                </p>
                <div className="text-secondary text-[18px] mt-1 text-center px-2">
                  Director
                </div>
                <p className="text-secondary text-[16px] mt-3 text-center pb-20 px-4">
                  MBBS
                </p>
              </div>
            </div>
            <div className="border rounded-[180px]">
              <div className="flex justify-center items-center mt-5">
                <Image
                  src={""}
                  alt="leader2 avatar "
                  loading="eager"
                  className=" object-fill "
                  width={140}
                  height={140}
                />
              </div>
              <div className="">
                <p className="text-black font-source-pro font-semibold text-[24px] mt-3 text-center">
                  Dr ABC
                </p>
                <div className="text-secondary text-[18px] mt-1 text-center px-2">
                  Senior Consultant
                </div>
                <p className="text-secondary text-[16px] mt-3 text-center pb-20 px-4">
                  MBBS
                </p>
              </div>
            </div>
            <div className="border rounded-[180px]">
              <div className="flex justify-center items-center mt-5">
                <Image
                  src={""}
                  alt="leader3 avatar "
                  loading="eager"
                  className=" object-fill "
                  width={140}
                  height={140}
                />
              </div>
              <div className="">
                <p className="text-black font-source-pro font-semibold text-[24px] mt-3 text-center">
                  Dr. 123
                </p>
                <div className="text-secondary text-[18px] mt-1 text-center px-2 ">
                  Radiologist
                </div>
                <p className="text-secondary text-[16px] mt-3 text-center px-4 pb-20">
                  MD in Radiodiagnosis
                </p>
              </div>
            </div>

            <div className="border rounded-[180px]">
              <div className="flex justify-center items-center mt-5">
                <Image
                  src={""}
                  alt="leader4 avatar "
                  loading="eager"
                  className=" object-fill "
                  width={140}
                  height={140}
                />
              </div>
              <div className="">
                <p className="text-black font-source-pro font-semibold text-[24px] mt-3 text-center">
                  Dr. PQR
                </p>
                <div className="text-secondary text-[18px] mt-1 text-center px-2">
                  Consultant
                </div>
                <p className="text-secondary text-[16px] mt-3 text-center pb-20 px-4">
                  MBBS, MD(Radio-diagnosis)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className=" container py-[70px]">
          <p className="font-semibold text-center">
            Promising Good Health For All, Driven By A Passionate Team, Latest
            Technologies, Accurate Test Results
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutLayout;

const data = [
  {
    // id: 1,
    // title: "NABL Accredited Labs",
    // description: "Follows all protocols as per NABL & CAP Guidelines",
    icon: <Image src={img11} alt="NABL Accredited Icon" />,
  },
  {
    id: 2,
    title: "Trusted by Leading Doctors & Hospitals",
    description: "Qualified Pathologist at each lab",
    icon: <Image src={img22} alt="NABL Accredited Icon" />,
  },
  {
    id: 3,
    title: "Shortest Reporting Time",
    description: "Ownership and Innovation",
    icon: <Image src={img33} alt="NABL Accredited Icon" />,
  },
  {
    id: 4,
    title: "Accurate Test Reports",
    description: "Quality checks by Quality Assurance Team",
    icon: <Image src={img44} alt="NABL Accredited Icon" />,
  },
  {
    id: 5,
    title: "1 Crore+ Satisfied Customers",
    description: "Making superior quality diagnostics services",
    icon: <Image src={img55} alt="NABL Accredited Icon" />,
  },
  {
    id: 6,
    title: "100+ Labs",
    description: "Large Network Labs in all the major cities",
    icon: <Image src={img66} alt="NABL Accredited Icon" />,
  },
  {
    id: 7,
    title: "3000+ Collection Centres",
    description: "Expanding our reach and counting",
    icon: <Image src={img77} alt="NABL Accredited Icon" />,
  },
  {
    id: 8,
    title: "Scientific Orientation",
    description: "MD Doctors in Every Lab & State-of-the-Art Machines",
    icon: <Image src={img88} alt="NABL Accredited Icon" />,
  },
];
