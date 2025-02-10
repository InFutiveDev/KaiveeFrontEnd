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

            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mb-[6px] leading-[1.5]">
            Kaivee HealthCare is the trustworthy corporate healthcare company in India providing healthcare services to the corporate’s employees all over India. Years of experience and our impeccable services have made us the most prestigious, and trustworthy corporate wellness service provider company in India. Providing the best service in healthcare service to corporates and safeguard the employee is the primary objective of our work.


              {!readMore ? (
                <span>...</span>
              ) : (
                <span>
                  <h2 className="text-[24px] text-black font-semibold mt-4 mb-2">We Strive for a Healthier Tomorrow</h2>
                  <p>Established in 2021, Zen Health Solutions has seen remarkable growth. Starting with a single diagnostic center, today we are proud to have ICMR, NABL and ISO 9001:2015 certified lab, providing quality healthcare and medical services to all our patients across India.</p>

                </span>
              )}{" "}
              <span
                className="font-bold text-[#8DBD4D] cursor-pointer text-nowrap"
                onClick={() => setReadMore(!readMore)}
              >
                {!readMore ? "Read More" : "Read less"}
              </span>
            </p>

           
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
