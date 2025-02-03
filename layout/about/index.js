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
              To be a leading and <strong> trusted name in diagnostics</strong>, making high-quality healthcare<strong>accessible, reliable, and convenient </strong> for everyone.
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
              At<strong> Kaivee Healthcare</strong> , our mission is to make high-quality diagnostics <strong>accessible, accurate, and hassle-free </strong> for everyone. We strive to provide precise test results using<strong> state-of-the-art technology and expert analysis</strong> , ensuring that every diagnosis leads to better health decisions. Our seamless services, including<strong> home sample collection and digital reports</strong> , bring convenience to your healthcare journey. We believe in<strong> affordable diagnostics</strong>, so everyone can prioritize their health without financial burden. Through<strong> preventive screenings and early detection</strong>, we empower individuals to take charge of their well-being and lead healthier lives.
            </p>
          </div>
        </div>

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
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <AboutPattern />
        </div>
        <div className="absolute bottom-0 left-0">
          <AboutPattern />
        </div>
      </div>



      <div className="bg-white">
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
      </div>

      <div className="bg-rgb(199, 229, 247)">
        <div className=" container py-[70px]">
          <p className="font-semibold text-center">
            At Kaivee Healthcare, we believe that quality diagnostics lead to better health decisions. Experience the ease of accurate testing with us today!

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

const leaders = [
  { name: "Dr. ABC", role: "Director", degree: "MBBS", image: img1 },
  { name: "Dr. XYZ", role: "Senior Consultant", degree: "MBBS", image: img2 },
  { name: "Dr. !@#", role: "Radiologist", degree: "MD in Radiodiagnosis", image: img3 },
  { name: "Dr. 123", role: "Consultant", degree: "MBBS, MD(Radio-diagnosis)", image: img4 },
];

