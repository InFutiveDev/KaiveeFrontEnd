import Alternativebanner from "./women-child-care";
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

const DoctorOPDLayout = () => {
  return (
    <>
      {/* className="sliders banner_slider_wrap_facilities" */}
      <section>
        {/* className="web-view relative cstm-flexbox flexbox container" */}
        <div>
          <Alternativebanner  />
        </div>
        
      </section>

      {/* <AboutUs /> */}
      <div className="container mx-auto px-4 py-12">
  {/* Hero Section */}
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-[#C0392B]">Women & Child Care at Kaivee Healthcare</h2>
    <p className="text-gray-800 mt-3 text-2xl font-semibold">
      Compassionate Care for Every Generation, From Motherhood to Childhood
    </p>
  </div>

  {/* Introduction */}
  <div className="mt-8 flex flex-col lg:flex-row items-center gap-8">
    <div className="lg:w-1/2">
      <p className="text-gray-700 leading-relaxed">
      Healthcare needs evolve and change throughout different stages of life and few parts of health have a clearer line between them than that of women's and children's health. Kaivee Healthcare - Women & Child Care division, aims to provide continuous, specialized care for women and young ones in a nurturing environment.      </p>
      <p className="text-gray-700 mt-4">
      Covering all stages of life from adolescence to motherhood and from infancy through adolescence, our care model emphasizes prevention, early diagnosis, and personalized treatment. Here, every patient is cared for not just with clinical knowledge, but with heart, with empathy and with a keen atonement to the physical and emotional needs.      </p>
      <p className="text-gray-700 mt-4">We provide footings of care through biologicals, preventive screenings, immunizations, wellness counselling, family planning, and postpartum recovery through our services It ensures each woman and child benefits from individual attention, whether in preventive visits or more complex pathologies.</p>
    </div>
    <div className="lg:w-1/2 flex justify-center">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/portrait-woman-working-healthcare-system-as-pediatrician_23-2151686819.jpg?updatedAt=1743166102863"
        alt="Women and Child Care"
        width={500}
        height={300}
        className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>

  {/* Joint Approach Section */}
  <div className="mt-12 p-6 bg-pink-100 rounded-xl shadow-md border border-pink-300">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">A Joint Approach: Women's and Children's Health</h3>
    <p className="text-gray-700 mt-4 text-center max-w-2xl mx-auto">
      Women's health and children's well-being are interconnected—not just through pregnancy but throughout life.  
      Our collaborative care model ensures coordinated, family-centered healthcare, covering screenings, immunizations, wellness counseling, family planning, and postpartum recovery.
    </p>
  </div>

  {/* Key Focus Areas */}
  <div className="mt-12">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">Focal Points Within the Department</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        { title: "🌿 Adolescent Wellness", desc: "Supporting teens through body changes, menstrual health, nutrition, and emotional well-being." },
        { title: "🤰 Fertility & Preconception Care", desc: "Preconception screenings, nutrition guidance, and assessments for a healthy pregnancy start." },
        { title: "📉 Pregnancy Tracking & Motherhood", desc: "Trimester-specific monitoring, scans, lifestyle advice, and delivery planning." },
        { title: "👶 Newborn & Infant Health", desc: "Growth tracking, immunizations, feeding guidance, and congenital condition screening." },
        { title: "🥗 Childhood Nutrition & Illness Management", desc: "Addressing food intolerances, allergies, and deficiencies with timely intervention." },
        { title: "🔁 Menstrual & Hormonal Health", desc: "Personalized plans for cycle irregularities, PCOS, and perimenopause management." },
        { title: "🌸 Postnatal Care & Recovery", desc: "Lactation counseling, postpartum depression screening, and pelvic floor rehabilitation." }
      ].map((point, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h4 className="font-semibold text-lg">{point.title}</h4>
          <p className="text-gray-600 mt-2">{point.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Image Section */}
         <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/gynecologist-performing-ultrasound-consultation_23-2149353027.jpg?updatedAt=1743166861707", alt: "Surgical Procedure" },
            { src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/father-holds-hand-newly-born-babe-diapers_140725-300.jpg?updatedAt=1743166914858", alt: "Surgical Team" }
          ].map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
              className="rounded-xl shadow-md w-[80%] max-w-[500px] transition-transform duration-500 hover:scale-105"
            />
          ))}
        </div>

  {/* Integrated Services & Specialties */}
  <div className="mt-12 p-6 bg-blue-100 rounded-xl shadow-md border border-blue-300">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">Integrated Services and Specialties</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        "🩺 Gynaecologic & Hormonal Assessments",
        "🤰 Monitoring & Planning for Obstetric Delivery",
        "👶 Neonatal Intensive Care (if needed)",
        "💉 Child Vaccination & Growth Monitoring",
        "👧 Pediatric & Adolescent Health Programs",
        "🌸 Menopause & Midlife Wellness Centers"
      ].map((service, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
          <p className="font-semibold text-gray-700">{service}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Why Families Trust Kaivee Healthcare */}
  <div className="mt-12 p-6 bg-[#8DBD4D0D]">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">Why Families Trust Women & Child Care at Kaivee Healthcare</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
        { title: "🟢 Safe, Friendly & Respectful Space", desc: "Confidential and comfortable consultations for all ages, including sensitive health matters." },
        { title: "🟢 Multigenerational Focus", desc: "Serving grandmothers, mothers, and daughters with age-appropriate care plans." },
        { title: "🟢 Family-Centered Consultations", desc: "Parents are involved at every stage of pediatric and neonatal care." },
        { title: "🟢 Gentle & Inclusive Care", desc: "Clear communication, kind interactions, and patient empowerment at every visit." },
        { title: "🟢 Emergency & High-Risk Support", desc: "Prompt specialized care for high-risk pregnancies and neonatal complications." }
      ].map((reason, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h4 className="font-semibold text-lg">{reason.title}</h4>
          <p className="text-gray-600 mt-2">{reason.desc}</p>
        </div>
      ))}
    </div>
  </div>

  
  <div className="mt-8 flex flex-col lg:flex-row items-center gap-8">
    {/* Left Section */}
    <div className="lg:w-2/3 flex flex-col items-center">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">
    Care That Listens, Supports, and Grows With You
      </h3>
      <p className="text-gray-700 mt-4 text-center">
      From a teenager's first health check to a mother's pregnancy journey to a child's early development,  
      Kaivee Healthcare's Women & Child Care team provides continuous, compassionate, and expert care.  
      We don't just treat—we nurture. We empower families with better health, confidence, and informed decisions at every step.  </p>
      <Image
      src="https://ik.imagekit.io/InFutiveTechnology/kaivee/mother-daughter-spending-time-together-outside-park-mother-s-day_23-2150293152.jpg?updatedAt=1745840125046"
      alt="Doctor Consultation"
      width={500}
      height={300}
      className="rounded-xl shadow-md w-[80%] max-w-[500px] transition-transform duration-500 hover:scale-105 mt-4"
    />
    </div>

    {/* Right Section */}
    <div className="lg:w-1/3 w-full  justify-end">
      <InquiryForm />
    </div>
  </div>
  <div className="bg-[#FAFAFA]">
        <WhyChoose data={data} />
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

export default DoctorOPDLayout;

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



