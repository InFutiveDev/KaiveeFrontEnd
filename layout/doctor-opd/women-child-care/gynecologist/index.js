import Alternativebanner from "./gynecologist-banner";
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
      <div className="container mx-auto px-4 lg:px-16 py-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#C0392B]">
          Expert Gynaecological Care at Kaivee Healthcare
        </h1>
        <p className="mt-4 font-semibold text-2xl text-gray-800">
          Personalized Women's Health Services at Every Stage of Life
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <p className="text-gray-700">
            A woman’s health is a dynamic blend of hormones, physical changes, and emotions that shift over time. At Kaivee Healthcare, our Gynaecologists offer specialized, sensitive, and confidential treatment for all aspects of female reproductive health. 
          </p>
          <p className="mt-4 text-gray-700">
            From adolescent menstrual concerns to menopausal transitions, our team provides personalized care, empowering women with knowledge, preventive health strategies, and access to the best treatments.
          </p>
          <p className="mt-4 text-gray-700">
          Our purpose is a desire to enlighten women, health prevention, wellness and education where our focus will be on providing women with knowledge and access to health care they need in order to better take ownership of their health decisions.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
  <Image
    src="https://ik.imagekit.io/InFutiveTechnology/kaivee/prenatal-care-sonographer-scanning-examining-pregnant-woman-while-expecting-father-looking-monitor-vector-illustration-medical-examination-sonography-ultrasound-test-topics_74855-8535.jpg?updatedAt=1743580786465"
    alt="Gynaecology Consultation"
    width={500}
    height={250}
    className="rounded-xl shadow-lg w-[80%] max-w-[500px] transform transition duration-500 hover:scale-105 hover:shadow-xl"
  />
</div>

      </div>

      {/* Gynaecology Services */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Gynaecology Services at Our Center
        </h2>
        <p className="mt-4 text-gray-700">
          We offer both routine and advanced gynaecological care, ensuring sensitivity and confidentiality for every patient. Our services cater to women from adolescence through post-menopause, addressing both preventive care and complex health conditions.
        </p>
      </div>

      {/* Conditions We Treat */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Conditions We Address
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "🔸 Menstrual Disorders", desc: "Diagnosis of irregular or painful periods caused by hormonal imbalances, PCOS, or fibroids." },
            { title: "🔸 Pelvic Pain & Endometriosis", desc: "Evaluation and treatment of chronic pelvic pain linked to endometriosis or pelvic inflammatory disease." },
            { title: "🔸 Polycystic Ovary Syndrome (PCOS)", desc: "Comprehensive hormonal evaluation, dietary guidance, and long-term PCOS management." },
            { title: "🔸 Uterine Fibroids & Ovarian Cysts", desc: "Minimally invasive treatment options tailored to individual reproductive goals." },
            { title: "🔸 Perimenopause & Menopause", desc: "Hormonal therapy, nutrition counseling, and lifestyle strategies for a smoother transition." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#C0392B] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Preventive & Diagnostic Screenings */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Gynaecologic Screening & Preventive Care
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "▶ Pap Smears & HPV Testing", desc: "Routine cervical cancer screenings with easy follow-up guidelines." },
            { title: "▶ Pelvic Ultrasounds", desc: "Non-invasive imaging of the uterus, ovaries, and reproductive structures." },
            { title: "▶ Breast Health Checks", desc: "Clinical breast exams and mammogram referrals for early cancer detection." },
            { title: "▶ Cancer Risk Evaluation", desc: "Personalized risk assessments and early surveillance for ovarian and uterine cancers." },
            { title: "▶ Preconception Counseling", desc: "Expert guidance for women planning pregnancy, including genetic screening and health optimization." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#C0392B] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Kaivee Healthcare? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          What Sets Kaivee Healthcare Apart?
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "🟢 Whole-Person Care Philosophy", desc: "We consider lifestyle, nutrition, stress, and emotional well-being in every care plan." },
            { title: "🟢 Respectful & Confidential Environment", desc: "We ensure comfort and sensitivity in discussing personal gynaecological concerns." },
            { title: "🟢 Multidisciplinary Approach", desc: "Collaboration with endocrinologists, fertility specialists, and internal medicine doctors for comprehensive care." },
            { title: "🟢 Education-Focused Consultations", desc: "We provide detailed information so patients can make informed health decisions." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#C0392B] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

     {/* When to Visit a Gynaecologist & Enquiry Form */}
<div className="mt-12 flex flex-col lg:flex-row gap-8">
  {/* Left Section: "When to Seek Gynaecological Care" & "Final Call to Action" */}
  <div className="lg:w-2/3">
    {/* When to Seek Gynaecological Care */}
    <h2 className="text-2xl font-semibold text-gray-800">
      When to Seek Gynaecological Care
    </h2>
    <ul className="list-disc pl-6 mt-4 text-gray-700">
      <li>Recurring urinary infections or vaginal discomfort</li>
      <li>Discomfort during intercourse or pelvic pressure</li>
      <li>Irregular or missed periods</li>
      <li>Unusual vaginal discharge or bleeding</li>
      <li>Concerns about contraception or fertility</li>
      <li>Menopausal symptoms interfering with daily life</li>
    </ul>

    {/* Final Call to Action */}
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-800">
        Supportive & Specialized Women’s Healthcare
      </h2>
      <p className="mt-4 text-gray-700">
        At Kaivee Healthcare, we empower women with knowledge, personalized care, and cutting-edge treatments. Whether it’s routine screenings or complex concerns, our team provides compassionate and expert guidance at every step.
      </p>
    </div>
  </div>

  {/* Right Section: Enquiry Form */}
  <div className="lg:w-1/3 flex justify-center">
    <InquiryForm />
  </div>
</div>

  
  <div className="bg-[#FAFAFA]">
        <WhyChoose data={data} />
      </div>
      <div className=" container ">
          <p className="font-semibold text-center">
           Kaivee Healthcare is clearly your best partner at Health & Checkups.

          </p>
        </div>
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



