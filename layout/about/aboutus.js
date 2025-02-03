"user client";
import about from "images/about.png";
import Image from "next/image";
import { useState } from "react";

const AboutUs = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="py-[2rem] md:py-[3rem] lg:py-[4rem] px-[0] mt-0 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[50px] items-center justify-center">
          <div className="">
            <h1 className="text-black lg:text-[26px] text-xl md:mb-[32px] mb-[20px] !font-semibold font-source-pro">
              About US
            </h1>

            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              At <span className="font-bold">Kaivee Healthcare</span>, we are redefining diagnostics with <span className="font-bold">accuracy, efficiency, and patient-centric care. </span>
              As a trusted pathlab, we offer a <span className="font-bold">wide range of medical tests </span>designed to detect diseases early, monitor health conditions, and provide crucial insights for better well-being.



              {!readMore ? (
                <span>...</span>
              ) : (
                <span>
                  <br />
                  <br />
                  With a commitment to<strong> cutting-edge technology, experienced professionals, and stringent quality standards</strong>, we ensure that every report you receive is not just accurate but also timely and reliable. From <strong>routine health screenings to specialized diagnostics</strong>, we make healthcare accessible, affordable, and stress-free.<br></br>



                  <br />
                  Our goal is simple:<strong>to empower individuals and healthcare providers with the right diagnostic insights for better health outcomes</strong> .<br></br>
                  <br></br>

                </span>
              )}{" "}
              <span
                className="font-bold text-[#8DBD4D] cursor-pointer text-nowrap"
                onClick={() => setReadMore(!readMore)}
              >
                {!readMore ? "Read More" : "Read less"}
              </span>
            </p>

            {/* <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mb-[6px]">
              City X-Ray & Scan Clinic has been one of the renowned private Diagnostic set up in Delhi
              since last over three decades. It covers a complete range of diagnostic investigations for
              Pathology, Radiology, Cardiology & Neurology departments – all under one roof.<br /><br />
              Our brand, named the City X-Ray & Scan Clinic, has become synonymous with trust,
              transparency and reliability in the field of diagnostics. We believe that high-quality and
              accurate diagnostics are important for effective patient care and treatment. And
              therefore, we envisioned setting the best industry standards in diagnostic services.<br /><br />
              We excel in providing affordable medical diagnostic services with utmost care and
              professionalism. From science to compassion, we have travelled a long journey in
              ensuring improved health and wellbeing for all. Our NABL and NABH-certified facilities
              are designed to deliver improved accuracy in medical tests and with a faster turnaround
              time. At the same time, our brand has been continuously focusing on combining high
              quality with cost-efficiency and to facilitate improved healthcare and better treatment
              through timely and accurate diagnostic, therapeutic and prognostic data. To create an
              amicable and supportive work environment that focuses on improved collaboration, care
              and productivity. To encourage and empower our people to realise their full potential.<br /><br />
              We are honest. We are committed. We are compassionate. We are willing to go the extra
              mile. We are City X-Ray and Scan clinic. The Diagnosis Specialist
            </p> */}
            {/* <button className="mt-[20px] lg:mt-[36px] bg-orange text-white rounded-xl lg:px-[30px] lg:py-[12px] px-[20px] py-[8px] font-source-pro">
              Get In Touch
            </button> */}
          </div>
          <div className="flex justify-center">
            <Image
              className="  object-cover"
              width={400}
              height={400}
              alt="Mask group"
              src={about.src}
            />
          </div>
        </div>
      </div>
    </section >
  );
};

export default AboutUs;
