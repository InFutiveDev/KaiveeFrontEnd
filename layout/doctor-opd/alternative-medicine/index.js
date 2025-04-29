import Alternativebanner from "./alternative-banner";
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

      <div className="container mx-auto px-4 py-8">
  {/* Alternative Medicine & Rehabilitation Section */}
  <div className="mt-12 bg-[#D419580D] p-6 rounded-xl shadow-md">
    <h2 className="text-3xl font-semibold text-[#8DBD4D] text-center">
      Alternative Medicine & Rehabilitation at Kaivee Healthcare
    </h2>
    <p className="text-gray-700 text-center mt-4">
      A Holistic Path to Healing, Recovery, and Balanced Living. Experience the benefits of natural and traditional medicine through expert practitioners in Physiotherapy, Ayurveda, and Homeopathy.
    </p>

    {/* Image and Content Section */}
    <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
  {/* Left Side: Text Content */}
  <div className="lg:w-1/2">
    <h3 className="text-2xl font-semibold text-gray-800">
      An Integrative Approach to Wellness
    </h3>
    <p className="text-gray-700 mt-4">
      Healing doesn't always start or stop with just medication. At Kaivee Healthcare, the Alternative Medicine & Rehabilitation department focuses on a mix of old-school treatment processes delivered beautifully along with the modern immediate responses to recovery, though we see the person as the customer and not the customer as the person.
    </p>
    <ul className="list-disc ml-6 mt-4 text-lg text-gray-700">
      <li>Physiotherapy: Restores mobility, strength, and flexibility post-injury.</li>
      <li>Ayurveda: Detoxification, herbal therapies, and personalized diet plans.</li>
      <li>Homeopathy: Natural remedies for chronic ailments, immune support, and mental well-being.</li>
      <li>Post-Surgical & Sports Rehabilitation: Faster recovery with advanced physiotherapy.</li>
      <li>Breathing, Yoga, & Relaxation Training: Enhancing lung capacity and reducing stress.</li>
      <li>Lifestyle & Diet Counseling: Holistic guidance for long-term health improvement.</li>
    </ul>
  </div>

  {/* Right Side: Image with Effects */}
  <div className="relative flex justify-center lg:w-1/2">
    <div className="group relative overflow-hidden rounded-xl shadow-lg w-[80%] max-w-[500px]">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/homeopathy-abstract-concept-illustration_335657-5036.png?updatedAt=1743147725365"
        alt="Alternative Medicine & Rehabilitation"
        width={500}
        height={300}
        className="rounded-xl transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="text-white text-lg font-semibold">Holistic Healing at Kaivee</p>
      </div>
    </div>
  </div>
</div>

  </div>

  {/* Alternative Medicine Categories */}
  <div className="mt-12 p-6 rounded-xl shadow-md border border-gray-300">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Holistic Healing Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div className="bg-[#D419580D] p-4 rounded-lg shadow">
        <h3 className="font-semibold text-[#D41958] text-lg">Physiotherapy</h3>
        <p className="text-gray-600">
          Improve mobility, recover from injuries, and manage chronic pain with personalized therapy.
        </p>
      </div>
      <div className="bg-[#D419580D] p-4 rounded-lg shadow">
        <h3 className="font-semibold text-[#D41958] text-lg">Ayurveda</h3>
        <p className="text-gray-600">
          Restore balance with herbal treatments, detox therapies, and natural healing practices.
        </p>
      </div>
      <div className="bg-[#D419580D] p-4 rounded-lg shadow">
        <h3 className="font-semibold text-[#D41958] text-lg">Homeopathy</h3>
        <p className="text-gray-600">
          Gentle yet effective remedies that boost immunity and address chronic ailments naturally.
        </p>
      </div>
    </div>
  </div>

   {/* Key Services Section */}
   <div className="mt-12 p-6 rounded-xl shadow-md border border-gray-300">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Key Services Delivered Through This Department
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Service 1 */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">🔸 Body Restoration and Mobility Rehabilitation</h3>
        <p className="text-gray-600 mt-2">
          Personalized physiotherapy programs tackle injuries, surgeries, and illness through rebuilding strength, enhancing movement, and alleviating discomfort.
        </p>
      </div>

      {/* Service 2 */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">🔸 Non-Pharmacological Approaches to Chronic Conditions</h3>
        <p className="text-gray-600 mt-2">
          Homeopathy and Ayurveda provided for a safe and effective relief for joint pain, backache, asthma, migraines, and digestive issues.
        </p>
      </div>

      {/* Service 3 */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">🔸 Immune Support and Detoxification</h3>
        <p className="text-gray-600 mt-2">
          Panchakarma, purificatory and herbal detoxifying therapies, and tailored medicines to restore constitution that builds immunity.
        </p>
      </div>

      {/* Service 4 */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">🔸 Rehab for Respiratory and Neurological Issues</h3>
        <p className="text-gray-600 mt-2">
          Pulmonary rehabilitation and neurophysiologic reconditioning for patients post-stroke, post-trauma, and with chronic respiratory pathologies.
        </p>
      </div>
    </div>
  </div>

  {/* Alternative Medicine Images */}
  <div className="mt-4 bg-gradient-to-b from-[#D419580D] to-[#ffffff] py-12 px-4 rounded-xl shadow-lg">
  <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
    Explore Our Alternative Medicine & Rehabilitation
  </h2>

  <div className="flex flex-wrap justify-center gap-6">
    {/* Physiotherapy Image */}
    <div className="relative group w-[80%] max-w-[500px] overflow-hidden rounded-xl shadow-lg">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/healthcare-concept-clinic_23-2151117902.jpg?updatedAt=1743055248910"
        alt="Physiotherapy Session"
        width={500}
        height={300}
        className="rounded-xl transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="text-white text-lg font-semibold">Physiotherapy Session</p>
      </div>
    </div>

    {/* Homeopathy Consultation Image */}
    <div className="relative group w-[80%] max-w-[500px] overflow-hidden rounded-xl shadow-lg">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/social-caregiver-separating-medicaments-supplements-pills_482257-95248.jpg?updatedAt=1743056532156"
        alt="Homeopathy Consultation"
        width={500}
        height={300}
        className="rounded-xl transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="text-white text-lg font-semibold">Homeopathy Consultation</p>
      </div>
    </div>

    {/* Ayurveda Treatment Image */}
    <div className="relative group w-[80%] max-w-[500px] overflow-hidden rounded-xl shadow-lg">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/close-up-medical-capsules-with-herbs-table_23-2148431497.jpg?updatedAt=1743057049421"
        alt="Ayurveda Treatment"
        width={500}
        height={300}
        className="rounded-xl transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="text-white text-lg font-semibold">Ayurveda Treatment</p>
      </div>
    </div>

    {/* Reiki Therapy Image */}
    <div className="relative group w-[80%] max-w-[500px] overflow-hidden rounded-xl shadow-lg">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/man-visit-rehabilitation-center_23-2150356741.jpg?updatedAt=1743146732554"
        alt="Physiotherapy Session"
        width={500}
        height={300}
        className="rounded-xl transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="text-white text-lg font-semibold">Physiotherapy Session</p>
      </div>
    </div>
  </div>
</div>

  
<div className="mt-8 flex flex-col lg:flex-row items-center gap-8">
    {/* Left Section */}
    <div className="lg:w-2/3 flex flex-col items-center">
    <h3 className="text-2xl font-semibold text-gray-800 text-center">
    Experience the Power of Holistic Healing
      </h3>
      <p className="text-gray-700 mt-4 text-center">
      Recovery isn't only getting rid of symptoms; it's finding fullness again. Whether your goal is pain relief, regained mobility, or simply a more centered existence, you'll find a culture of care, collaboration, and transformation within Kaivee Healthcare's Alternative Medicine & Rehabilitation department.  </p>
      
      <Image
      src="https://ik.imagekit.io/InFutiveTechnology/kaivee/essential-oil-peppermint-bottle-with-fresh-green-peppermint_1150-38022.jpg?updatedAt=1745902022628"
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
</div>



{/* Why Choose Section */}
<div className="bg-[#FAFAFA]">
  <WhyChoose data={data} />
</div>

{/* Footer */}
<div className="container pb-[30px]">
  <p className="font-semibold text-center">
    Kaivee Healthcare is your trusted partner in health and well-being.
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



