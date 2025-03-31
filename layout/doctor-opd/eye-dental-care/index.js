import Alternativebanner from "./eye-dental-care";
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
<div className="container mx-auto px-4 py-8">
  {/* Header Section */}
  <h1 className="text-3xl font-bold text-center mb-4 text-[#8DBD4D]">
    Eye and Dental Care at Kaivee Healthcare
  </h1>
  <p className="text-center font-semibold text-gray-800 text-2xl">
    Two Vital Senses. One Trusted Destination for Vision and Oral Wellness.
  </p>

  {/* Introduction Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        Why Choose Our Eye & Dental Care?
      </h2>
      <p className="text-gray-700">
        Your eyes and oral health play a crucial role in your overall well-being. At Kaivee Healthcare, we offer a holistic approach to vision and dental care, combining expert knowledge, advanced technology, and compassionate service to ensure a lifetime of healthy eyesight and confident smiles.
      </p>
      <p className="text-gray-700">
        Our team of experienced optometrists and dentists are dedicated to providing personalized care tailored to your unique needs. We utilize the latest diagnostic tools and treatment options to ensure you receive the best possible care.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>State-of-the-art diagnostic tools for accurate assessments.</li>
        <li>Preventive care to detect problems before they worsen.</li>
        <li>Customized treatment plans for all age groups.</li>
      </ul>
    </div>
    <div className="flex justify-center">
      <Image
        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/ChatGPT%20Image%20Mar%2031,%202025,%2003_14_48%20PM.webp?updatedAt=1743414369788"
        alt="Eye and Dental Care"
        width={500}
        height={300}
        className="rounded-xl shadow-md w-[80%] max-w-[500px]"
      />
    </div>
  </div>

  {/* Eye Care Services */}
  <div className="mt-12 bg-[#D419580D] p-6 rounded-xl shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Our Eye Care Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg">Vision Testing & Correction</h3>
        <p className="text-gray-600">
          Routine eye exams, prescriptions for glasses and contact lenses, and digital vision tests for refractive errors.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg">Eye Disease Management</h3>
        <p className="text-gray-600">
          Diagnosis and treatment for glaucoma, cataracts, diabetic eye disease, and macular degeneration.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg">Pediatric Eye Evaluation</h3>
        <p className="text-gray-600">
          Early detection and management of conditions like lazy eye (amblyopia) and squint (strabismus) in children.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg">Emergency Eye Consults</h3>
        <p className="text-gray-600">
          Immediate care for eye injuries, infections, or sudden vision loss.
        </p>
      </div>
    </div>
  </div>
  {/* Image Section */}
  <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/eye-test-concept-illustration_114360-23098.webp?updatedAt=1743414635032", alt: "eye testing" },
            { src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/ophthalmologist-vision-correction-clinic-flat-icons-set-with-eye-symbol-abstract-isolated-vector-il_1284-12230.jpg?updatedAt=1743414918514", alt: "eye testing procedure" }
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

  {/* Dental Care Services */}
  <div className="mt-12 bg-[#D419580D] p-6 rounded-xl shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Our Dental Care Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg">Routine Cleaning & Exams</h3>
        <p className="text-gray-600">
          Preventive care including scaling, polishing, and oral hygiene education for all ages.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg">Fillings & Restorations</h3>
        <p className="text-gray-600">
          Natural-looking fillings and crowns to restore damaged teeth.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg">Gum Health & Periodontal Care</h3>
        <p className="text-gray-600">
          Treatment for gingivitis, bleeding gums, and deep cleaning procedures.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg">Cosmetic & Restorative Dentistry</h3>
        <p className="text-gray-600">
          Teeth whitening, smile design, and prosthetic treatments including bridges, dentures, and implants.
        </p>
      </div>
    </div>
  </div>
  {/* Image Section */}
  <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/flat-dental-care-concept-illustration_23-2149002069.jpg?updatedAt=1743415657952", alt: "dental_img" },
            { src: "https://ik.imagekit.io/InFutiveTechnology/kaivee/happy-children-holding-toothpaste-toothbrush-floss-white_1308-108896.jpg?updatedAt=1743416040127", alt: "child teeth" }
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

  {/* How It Works Section */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      How Our Eye & Dental Care Services Work
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
      <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
        <h3 className="font-semibold text-lg">Step 1: Consultation</h3>
        <p className="text-gray-600">Book an appointment with our specialists for an initial evaluation.</p>
      </div>
      <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
        <h3 className="font-semibold text-lg">Step 2: Diagnosis</h3>
        <p className="text-gray-600">Undergo comprehensive screenings and tests for accurate assessment.</p>
      </div>
      <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
        <h3 className="font-semibold text-lg">Step 3: Treatment Plan</h3>
        <p className="text-gray-600">Receive a personalized treatment plan tailored to your needs.</p>
      </div>
      <div className="p-4 border-l-4 border-[#8DBD4D] bg-white shadow rounded-lg">
        <h3 className="font-semibold text-lg">Step 4: Follow-up Care</h3>
        <p className="text-gray-600">Regular check-ups to monitor progress and ensure lasting results.</p>
      </div>
    </div>
  </div>

  {/* CTA Section */}
  <div className="mt-12 text-center">
    <h2 className="text-2xl font-semibold text-gray-800">
      Experience the Best in Eye & Dental Care
    </h2>
    <p className="text-gray-700 mt-4">
      Whether it's a routine check-up, corrective treatment, or emergency care, our specialists are here to help. Book an appointment today at Kaivee Healthcare.
    </p>
  </div>
</div>


      <div className="bg-[#FAFAFA]">
        <WhyChoose data={data} />
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



