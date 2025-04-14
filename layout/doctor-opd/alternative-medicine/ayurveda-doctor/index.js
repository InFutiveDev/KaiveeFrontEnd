import Alternativebanner from "./ayurveda-banner";
// import AboutFireImage from "assets/images/about/fireworks 3.svg";


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
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
        Ayurvedic Healing at Kaivee Healthcare
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
        Ancient Wisdom, Modern Wellness—Balanced the Ayurvedic Way
      </h2>

      <p className="mb-4">
        Ayurveda, India’s ancient system of medicine, is not just a treatment but a lifestyle. Working with highly trained Ayurveda Doctors at Kaivee Healthcare, we know that our centuries-old systems of holistic care seek to find homeostasis, detoxify the body, and energize the mind.
      </p>
      <p className="mb-4">
        Whether you are looking for help with a chronic condition or just want to improve your health and vitality, Ayurvedic care provides natural, sustainable answers that work with your body type.
      </p>

      <div className="flex flex-col lg:flex-row items-start gap-10">

{/* Left: Text Content */}
<div className="lg:w-1/2">
  <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
  Why Choose Ayurveda at Kaivee Healthcare
  </h3>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>Certified Ayurvedic Physicians:</strong> Classical training meets modern diagnostics.</li>
    <li><strong>Custom-Tailored Therapies:</strong> Based on your dosha and personal health goals.</li>
    <li><strong>Safe, High-Quality Herbal Medicines:</strong> Sourced from trusted pharmacies.</li>
    <li><strong>Tranquil Healing Atmosphere:</strong> Peaceful therapy rooms for comfort and calm.</li>
    <li><strong>Integrated Support:</strong> Ayurveda combined with modern diagnostics for best outcomes.</li>
  </ul>
</div>

{/* Right: Image */}
<div className="lg:w-1/2 flex justify-end">
  <Image
    src="https://ik.imagekit.io/InFutiveTechnology/kaivee/flat-design-essential-oil-herb-collection_23-2148811722.jpg?updatedAt=1744629476053"
    alt="Ayurveda at Kaivee Healthcare"
    width={500}
    height={300}
    className="rounded-xl shadow-lg w-[80%] max-w-[500px] transform transition duration-500 hover:scale-105 hover:shadow-xl"
  />
</div>
</div>

      <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        The Foundation of All Ayurveda Care
      </h3>
      <p className="mb-4">
        Ayurvedic practice is built on balancing the three doshas—Vata, Pitta, and Kapha—which regulate the functions of the body. When these energies are out of balance, they can cause disease, pain, or fatigue.
      </p>
      <p className="mb-4">
        Our Ayurveda doctors check your individual prakriti (body type) and present treatments that go beyond treating signs, eliminating foundational issues related to imbalance.
      </p>

      <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Health Conditions Treated by Our Ayurvedic Practitioners
      </h3>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Digestive Disorders:</strong> Acidity, bloating, constipation, and IBS.</li>
        <li><strong>Joint and Muscle Pain:</strong> Arthritis, spondylitis, lower back pain with Abhyanga and Swedana.</li>
        <li><strong>Hormonal Imbalances:</strong> PCOS, thyroid dysfunction, and irregular cycles.</li>
        <li><strong>Skin Conditions:</strong> Acne, eczema, psoriasis treated with Panchakarma and Raktamokshana.</li>
        <li><strong>Stress, Anxiety, and Insomnia:</strong> Treated using Shirodhara, controlled breathing, and herbal tonics.</li>
      </ul>

      
     

     

      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 items-start mt-12">
        {/* Left: Text Section */}
        <div className="lg:w-2/3">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Restore Balance with Ayurvedic Wisdom
          </h3>
          <p>
            If you’re in search of a natural approach to managing chronic health conditions, building resilience or merely feeling more connected to your body, Ayurvedic care provides time-tested, individualized healing. Our Ayurveda Doctors at Kaivee Healthcare walk beside you on a path to wellness that honors tradition while embracing innovation.
          </p>
        </div>

        {/* Right: Inquiry Form */}
        <div className="lg:w-1/3 w-full flex justify-end mt-8 lg:mt-0">
          <InquiryForm />
        </div>
      </div>
      {/* Why Choose Section */}
<div className="bg-[#FAFAFA]">
  <WhyChoose data={data} />
</div>

{/* Footer */}
<div className="container">
  <p className="font-semibold text-center">
    Kaivee Healthcare is your trusted partner in health and well-being.
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



