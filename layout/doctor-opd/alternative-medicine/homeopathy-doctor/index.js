import Alternativebanner from "./homeopathy-banner";
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
  <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
    Homeopathy Services at Kaivee Healthcare
  </h1>
  <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
    Gentle Healing That Treats the Root, Not Just the Symptoms
  </h2>

  <p className="mb-4">
    Modern life often brings chronic diseases that don’t always respond to traditional health interventions — or that come with unpleasant side effects. Homeopathy provides a tested alternative for those who want a natural, holistic, and side-effect-free way to health.
  </p>
  <p className="mb-4">
    Kaivee Healthcare Homeopathy Doctors are certified, experienced, and practicing classical & contemporary homeopathy to treat your acute and chronic problem in natural safe effective and tailor-made way.
  </p>
  <p className="mb-4">
    This gentle system of medicine activates the body’s own natural healing processes, promoting long-term balance and harmony between our mind, body and environment.
  </p>

  <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">How Homeopathy Works</h3>
  <p className="mb-4">
    The principle of homeopathy is “like cures like.” A healthy person would take a small amount of a substance that causes symptoms and, in potentized doses, it can cure a sick person with similar symptoms.
  </p>
  <p className="mb-4">
    Treatment is tailored not only to the illness but to the person as a whole. Consideration is given to lifestyle, emotional state and past health history before prescribing the right remedy.
  </p>
  <p className="mb-4">
    At Kaivee Healthcare, our homeopaths spend time listening, observing, and understanding before they prescribe — ensuring that the remedy selected is just the right fit for your individual constitution.
  </p>

  <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Conditions Our Homeopathy Doctors Often Treat</h3>
  <ul className="list-disc list-inside space-y-2 mb-6">
    <li><strong>Respiratory Issues:</strong> Asthma, allergic rhinitis, sinusitis and recurrent colds respond well to homeopathic medicines which gradually reduce the need for conventional medicines.</li>
    <li><strong>Digestive Complaints:</strong> Gastritis, acid reflux, constipation, IBS, and indigestion are resolved by treating the physical symptoms, emotional stressors, and food habits together.</li>
    <li><strong>Skin Disorders:</strong> Deep-acting remedies that address internal and external imbalances are used to treat eczema, psoriasis, acne, and urticaria.</li>
    <li><strong>Hormonal and Menstrual Disturbances:</strong> Homeopathy helps with PMS, PCOS, and thyroid dysfunction by supporting hormonal balance naturally.</li>
    <li><strong>Joint and Muscle Pain:</strong> Effective for arthritis, back pain, and muscle soreness—improving mobility through non-inflammatory treatment.</li>
    <li><strong>Anxiety, Depression, and Sleep Disorders:</strong> A safe non-addictive approach to support emotional and mental health.</li>
    <li><strong>Childhood Conditions:</strong> Safe for all ages. Treats recurrent infections, behavioral issues, teething, and bed-wetting naturally.</li>
  </ul>

  <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">What Happens During a Consultation</h3>
  <ul className="list-disc list-inside space-y-2 mb-6">
    <li><strong>In-Depth Case-Taking:</strong> A detailed analysis of your emotional, physical, dietary, and sleep patterns to understand your health story.</li>
    <li><strong>Choosing the Correct Treatment:</strong> Remedies are personalized to match the total symptom profile.</li>
    <li><strong>Non-Invasive & Painless:</strong> Given in sweet pills or drops, ideal for everyone from infants to seniors.</li>
    <li><strong>Remedial Variation & Follow-Ups:</strong> Adjusted over time with regular check-ins to ensure continued progress.</li>
  </ul>

 

  <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">A Path Toward Sustainable Wellness</h3>
  <p className="mb-4">
    If you're seeking a medical approach that listens, understands, and heals naturally — without side effects — homeopathy could be your answer. It brings together ancient principles with modern insight, guiding you toward lasting wellness.
  </p>

  <div className="flex flex-col lg:flex-row lg:justify-between gap-10 items-start">
    <div className="lg:w-2/3">
      <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Get Personalized Homeopathic Advice
      </h3>
      <p>
        Whether you’re dealing with a chronic condition or looking for a holistic approach, our certified homeopaths are here to help. Book a consultation to discover remedies that work with your body — not against it.
      </p>
    </div>
    <div className="lg:w-1/3 w-full flex justify-end mt-8 lg:mt-0 pt-[60px]">
    <div className="w-full">
    <InquiryForm />
  </div>
    </div>
  </div>
  {/* Why Choose Section */}
<div className="bg-[#FAFAFA]">
  <WhyChoose data={data} />
</div>

{/* Footer */}
<div className="container ">
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



