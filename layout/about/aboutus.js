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
              {`Kaivee, a prestigious and distinguished private diagnostic establishment, created and closely supervised by doctors, experts in diagnostic specialities. It has been serving Delhi for over three decades. With NABL and NABH certifications for Laboratory & Radiology respectively, our facility is dedicated to elevating the precision of medical tests and ensuring quicker turnaround times. The facility offers a comprehensive array of investigations spanning Pathology, Radiology, Nuclear Medicine, Cardiology and Neurology . Our brand is widely recognized for embodying trust, transparency and reliability in diagnostics. We strongly believe that accurate and high quality diagnostic plays a crucial role in ensuring effective patient care and treatment. Hence, we aspire to lead the way by establishing unparalleled standards in the field of diagnostic services. `}
              {!readMore ? (
                <span>...</span>
              ) : (
                <span>
                  <br />
                  <br />
                  Our expertise lies in delivering diagnostic services
                  affordably, ensuring the highest standards of care and
                  professionalism. Advancing from personalized care to the
                  application of Science, our collective journey has markedly
                  improved health and well being of the community on a broad
                  scale. Our brand remains dedicated to seamless integration of
                  top tier quality, patient care and efficiency, ultimately
                  promoting better healthcare by ensuring the availability of
                  timely and accurate diagnostic and prognostic data.<br></br>
                  <br></br>
                  We provide door step services to patients like sample
                  collection and testing at our satellite centres, home sample
                  collection facility, large fleet of patient pick up and
                  transport vans, online release of reports to patients etc.
                  <br></br>
                  <br></br>
                  We strive to build a workplace characterized by friendliness
                  and support, with a strong emphasis on improved collaboration,
                  care and productivity. We, at Kaivee pride ourselves on our
                  dedication to honesty, commitment, compassion and going above
                  and beyond, exemplified by our diagnostic specialists.
                  <br></br>
                </span>
              )}{" "}
              <span
                className="font-bold cursor-pointer text-nowrap"
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
    </section>
  );
};

export default AboutUs;
