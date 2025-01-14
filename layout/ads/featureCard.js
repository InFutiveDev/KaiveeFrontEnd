import ImageOne from "assets/images/ads/fast report.webp";
import ImageTwo from "assets/images/ads/Doctor and staff.webp";
import ImageThree from "assets/images/ads/Support.webp";
import ImageFour from "assets/images/ads/NABL & NABH Certified.webp";
import Image from "next/image";
const FeatureCard = () => {
  return (
    <section className="text-gray-600 mt-0 body-font">
      <div className="container py-5  mx-auto flex items-center">
        <div className="w-full text-center grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          <div className="sm:p-3 p-[8px] w-full shadow rounded-xl gap-[10px] flex items-center bg-[#f6f0d9]">
            {/* <img src="" /> */}
            <Image
              src={ImageOne}
              width={100}
              height={100}
              alt="image"
              className="sm:w-[16%] w-[30px]"
            />
            <h2 className="font-[400] sm:text-[16px] text-[12px] text-gray-900">
              Fast and accurate report
            </h2>
          </div>
          <div className="sm:p-3 p-[8px] w-full shadow rounded-xl flex  gap-[10px] items-center bg-[#f6f0d9]">
            <Image
              src={ImageTwo}
              width={100}
              height={100}
              alt="image"
              className="sm:w-[16%] w-[30px]"
            />
            <h2 className="font-[400] sm:text-[16px] text-[12px] text-gray-900">
              Experienced Doctor and Staff
            </h2>
          </div>
          <div className="sm:p-3 p-[8px] w-full shadow rounded-xl flex gap-[10px]  items-center bg-[#f6f0d9]">
            <Image
              src={ImageThree}
              width={100}
              height={100}
              alt="image"
              className="sm:w-[16%] w-[30px]"
            />

            <h2 className="font-[400] sm:text-[16px] text-[12px] text-gray-900">
              Dedicated support
            </h2>
          </div>
          <div className="sm:p-3 p-[8px] w-full shadow rounded-xl flex gap-[10px]  items-center bg-[#f6f0d9]">
            <Image
              src={ImageFour}
              alt="image"
              className="sm:w-[16%] w-[30px]"
            />

            <h2 className="font-[400] sm:text-[16px] text-[12px] text-gray-900">
              NABL & NABH Certified
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
