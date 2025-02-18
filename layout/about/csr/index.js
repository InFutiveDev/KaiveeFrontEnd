import React from "react";
import CsrBanner from "./CsrBanner";
import CsrImgOne from "assets/images/about/csr/slider/1.jpg";
import CsrImgTwo from "assets/images/about/csr/slider/2.jpg";
import CsrImgThree from "assets/images/about/csr/slider/3.jpg";
import CsrImgFour from "assets/images/about/csr/slider/4.jpg";
import CsrImgFive from "assets/images/about/csr/slider/5.jpg";
import CsrImgSix from "assets/images/about/csr/slider/6.jpg";
import CsrImgSeven from "assets/images/about/csr/slider/7.jpg";
import CsrImgEight from "assets/images/about/csr/slider/8.jpg";
import CsrImgNine from "assets/images/about/csr/slider/9.jpg";
import CsrImgTen from "assets/images/about/csr/slider/10.jpg";
import CsrImgEeleven from "assets/images/about/csr/slider/11.jpg";
import CsrImgTwelve from "assets/images/about/csr/slider/12.jpg";
import CsrImgThirteen from "assets/images/about/csr/slider/13.jpg";
import CsrImgFourteen from "assets/images/about/csr/slider/14.jpg";
// import CsrImgNine from "assets/images/about/csr/Rectangle 27036 (2).png";
// import CsrImgTen from "assets/images/about/csr/Rectangle 27037.png";
// import CsrImgEleven from "assets/images/about/csr/Rectangle 27037 (1).png";
import Image from "next/image";
import Slider from "react-slick";

const images = [
  CsrImgOne, CsrImgTwo, CsrImgThree, CsrImgFour, CsrImgFive,
  CsrImgSix, CsrImgSeven, CsrImgEight, CsrImgNine, CsrImgTen,
  CsrImgEeleven, CsrImgTwelve, CsrImgThirteen, CsrImgFourteen,
  CsrImgSeven,CsrImgThree
];

// Group images into sets of 8 (for 4x2 layout)
const chunkArray = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};
const imageGroups = chunkArray(images, 8); // Each group contains 8 images

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Each slide contains 8 images in 4x2 layout
  slidesToScroll: 1,
  dots: true,
};
  

const CsrLayout = () => {
  return (
    <>
      {/* className="sliders banner_slider_wrap_csr" */}
      <section>
        <div>
          <CsrBanner />
        </div>
      </section>
      <div className="py-[70px] 2xl:pl-[10rem] xl:pl-[4rem] lg:pl-[1rem] pl-[16px]">
        <div className="grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 md:grid-cols-1 gap-3">
          <div className="flex justify-center flex-col md:pb-0 pb-3">
            <h1 className="text-[26px] lg:text-[26px] md:text-[22x] text-black  font-semibold font-source-pro md:mb-3 mb-4">
              Corporate Social Responsibility
            </h1>
            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mb-2">
            Established in 2021, Kaivee Healthcare began its journey with a single collection center in Gurugram. Since then, we've
            evolved and expanded our services, driven by our commitment to providing exceptional healthcare solutions and fostering a culture of well-being.
           </p>
           <h2 className="text-[22px] mt-4">Breaking New Grounds</h2>
            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] mt-4 mb-2">
            The year 2022 marked a pivotal moment in Kaivee Healthcare's journey. seizing an opportunity to serve on a larger scale, Kaivee Healthcare ventured into the B2B sector with Samsung Display Noida. This collaboration not only expanded our reach but also introduced us to new
            avenues of service, conducting antigen and PHP tests with excellence.
            </p>

            

          </div>
          <div className="quality-assurance-slider-main px-4">
      <Slider {...settings}>
        {imageGroups.map((group, index) => (
          <div key={index} className="p-6">
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
              {group.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  width={300}
                  height={270}
                  className="w-full rounded-lg"
                  alt={`CSR Image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
             
          
        </div>
      </div>
      <div className="bg-[#D419580D]">
        <div className="container py-[35px] md:py-[70px]">
          <h2 className="text-[24px] lg:text-[24px] md:text-[18x] md:mb-3 mb-2 font-semibold font-source-pro">
            Other CSR Activities
          </h2>
          <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A] ">
            Fuelled by our dedication to excellence, Kaivee Healthcare rapidly ascended to new heights. From Samsung Electronics to Haier,
            LG, DS Group, Asian Paints, Addverb, and beyond, our services became synonymous with quality and reliability. Beyond PH tests, we ventured into hazardous tests, earning the trust of numerous corporations.
            </p>
           <h2 className="text-[20px] mt-2 mb-2">Diversification and Innovation</h2>
           <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#71717A]" >
           Never content with the status quo, Kaivee HealthCare diversified its
portfolio in 2023. Beyond medical tests, we introduced comprehensive safety training programs accredited by the
Indian Red Cross Society and Skill India. From first-aid to fire safety, ergonomics, and security training, our offerings evolved to meet the dynamic needs of our clientele.
           </p>
          
        </div>
      </div>
      <div className="container py-[35px] md:py-[70px] g-white">
        <h2 className="lg:text-[24px] text-xl font-semibold md:mb-3 mb-2 font-source-pro">
          How We Measure the Impact of Our CSR Initiatives
        </h2>
        <p className="text-secondary lg:text-[18px] text-[14px]">
        As our reach expanded, Kaivee HealthCare remained steadfast in our commitment to quality. In 2023, we fortified our
infrastructure, establishing a corporate office in Sector 16, Noida, alongside our state-of-the-art laboratory in Delta 2,
Greater Noida. Accredited by NABL, our commitment to excellence w a s unwavering.        </p>
        <ul className="list-disc ml-[20px] md:ml-[40px] flex flex-col gap-2 mt-[32px]">
          <li className="text-secondary lg:text-[18px] text-[14px]">
            <strong> HealthCare Services</strong>: Pre-employment health tests, Annual health check-ups, Hazardous testing.
          </li>
          <li className="text-secondary lg:text-[18px] text-[14px]">
            <strong> Safety Training</strong>: First-aid training, Fire safety training, Ergonomics training, and Security training.
          </li>
          <li className="text-secondary lg:text-[18px] text-[14px]">
            <strong> Wellness Program</strong>: Collaboration with Jiva Ayurveda for wellness programs, Free blood donation
            camps in association with Rashtriya Swasthya Sangathan.
          </li>
          <li className="text-secondary lg:text-[18px] text-[14px]">
            <strong> international Medical Tourism</strong>: Kaivee HealthCare International, based in Muscat, Oman, facilitates medical tourism to India, We partner with renowned hospitals
            such as Medanta, Fortis, Apollo, and Manipal Hospital to provide cost- effective healthcare solutions to international clients.
          </li>
          
        </ul>
        <br />
        <p className="lg:text-[18px] md:text-[16px] text-[14px] text-black mb-[6px]">
        In conclusion, Kaivee Healthcare's journey is a testament to our unwavering dedication to excellence, and innovation, community service. From our humble beginnings to our transformative impact On corporations and communities alike, we continue to be a beacon of health and wellness,shaping a brighter, healthier future for all..
        </p>

      </div>
    </>
  );
};

export default CsrLayout;
