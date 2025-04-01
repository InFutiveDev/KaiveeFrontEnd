import Alternativebanner from "./psychiatrist-banner";
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
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#2D85C9]">
          Consult a Psychiatrist at Kaivee Healthcare
        </h1>
        <p className="mt-4 font-semibold text-2xl text-gray-800">
          Compassionate Mental Health Care for a Balanced and Fulfilling Life
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <p className="text-gray-700">
            Mental wellness is an essential part of overall health. At Kaivee Healthcare, our psychiatrists offer professional and compassionate care, helping people manage emotional challenges, stress, and psychiatric disorders. Whether you’re struggling with anxiety, depression, or more complex conditions, we provide confidential and comprehensive care tailored to your individual needs.
          </p>
          <p className="mt-4 text-gray-700">
            We strive to create a safe, non-judgmental space for patients, fostering an environment where they can feel supported as they work towards restoration and emotional well-being.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="https://ik.imagekit.io/InFutiveTechnology/kaivee/psychiatrist-concept-mental-health-diagnostic-doctor-treating-human-mind-psychological-test-help-thoughts-emotions-analysis-vector-illustration-cartoon-style_613284-2839.jpg?updatedAt=1743512108593"
            alt="Psychiatrist Consultation"
            width={500}
            height={250}
            className="rounded-xl shadow-md w-[80%] max-w-[500px]"
          />
        </div>
      </div>

      {/* What is a Psychiatrist? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Who Is a Psychiatrist and What Do They Treat?
        </h2>
        <p className="mt-4 text-gray-700">
          A Psychiatrist is a licensed physician who specializes in diagnosing, treating, and preventing mental, emotional, and behavioral disorders. Psychiatrists are trained to prescribe medications and provide psychotherapy, offering various treatment options.
        </p>
        <p className="mt-4 text-gray-700">
          At Kaivee Healthcare, our psychiatrists adopt a holistic approach, combining medical, psychological, and lifestyle factors to improve mental health.
        </p>
      </div>

      {/* Conditions Treated */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Common Mental Health Conditions We Treat
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "🔸 Depression & Mood Disorders", desc: "Treatment for ongoing sadness, mood instability, and lack of interest." },
            { title: "🔸 Anxiety Disorders", desc: "Cognitive-behavioral therapy (CBT) and medications for generalized anxiety and panic attacks." },
            { title: "🔸 Bipolar Disorder", desc: "Treatment for mood swings, from depression to mania, focusing on long-term stability." },
            { title: "🔸 Schizophrenia & Psychotic Disorders", desc: "Management of perception and cognition disorders with a combination of medication and therapy." },
            { title: "🔸 Obsessive-Compulsive Disorder (OCD)", desc: "Therapy to help patients cope with intrusive thoughts and compulsive behaviors." },
            { title: "🔸 PTSD", desc: "Treatment to help patients recover from trauma and reduce symptoms like flashbacks and nightmares." },
            { title: "🔸 ADHD", desc: "Evaluation and treatment for attention issues, hyperactivity, and impulse control." },
            { title: "🔸 Substance Abuse", desc: "Detox plans and therapy for those affected by drug, alcohol, or substance use." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#2D85C9] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Psychiatric Treatments */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Psychiatric Therapies & Treatments
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "▶ Psychopharmacology", desc: "Tailored psychiatric medication management and careful monitoring." },
            { title: "▶ Cognitive Behavioral Therapy (CBT)", desc: "Research-based therapy focused on changing unhealthy thinking patterns." },
            { title: "▶ Psychotherapy", desc: "Insight-oriented therapy designed to help patients overcome emotional challenges." },
            { title: "▶ Family and Couples Therapy", desc: "Therapy focused on relational dynamics and communication within families and couples." },
            { title: "▶ Substance Abuse Rehabilitation", desc: "Comprehensive care, including medication, therapy, and counseling for substance use disorders." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#2D85C9] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Kaivee Healthcare Psychiatrists? */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Kaivee Healthcare Psychiatrists?
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { title: "🟢 Skilled in Managing Complex Mental Health Issues", desc: "Our psychiatrists have experience handling both standard and complex disorders with compassion." },
            { title: "🟢 Confidential & Non-Judgmental Space", desc: "A safe, judgment-free environment where patients can seek help without fear of stigmatization." },
            { title: "🟢 Collaborative Treatment Approach", desc: "We work with psychologists, counselors, and medical staff for a full-spectrum approach to mental health." },
            { title: "🟢 Focus on Long-Term Mental Wellness", desc: "We emphasize sustainable mental health through medication, psychotherapy, and lifestyle interventions." },
          ].map((item, index) => (
            <div key={index} className="p-4 border-l-4 border-[#2D85C9] bg-white shadow rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What to Expect During a Psychiatric Consultation */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">
          What Happens During a Psychiatric Consultation?
        </h2>
        <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
          <li>➡️ A thorough examination of your medical, psychological, and family history to determine your mental health concerns.</li>
          <li>➡️ Design of a personalized treatment plan, including medication, therapy, or lifestyle changes.</li>
          <li>➡️ Continuous monitoring and regular follow-ups to ensure the effectiveness of treatment and make adjustments as needed.</li>
        </ul>
      </div>

      <div className="lg:w-1/2 flex justify-center">
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



