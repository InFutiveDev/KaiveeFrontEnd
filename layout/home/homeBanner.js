import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "assets/images/home/693-By-500-image.jpg";
import {
  FaStethoscope,
  FaSmile,
  FaAward,
  FaBuilding,
  FaAmbulance,
} from "react-icons/fa";

const Homebanner = () => {
  return (
    <section className="bg-white px-4 md:px-10 py-4 md:py-6">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6">
        {/* Left Section: Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <div className="w-full h-[300px] md:h-[500px] relative">
            <Image
              src={bannerImage}
              alt="Health Banner"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="w-full md:w-1/2 bg-white rounded-lg p-4 md:p-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug text-center md:text-left">
            Your <span className="text-[#8DBD4D]">Trusted Partner</span> in
            Health – Accurate Tests, Fast Results.
          </h1>

          <p className="mt-3 text-gray-600 text-lg md:text-xl text-center md:text-left">
            Book blood tests, full-body checkups, and health packages at the
            convenience of your home or nearest center.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/book-test">
              <button className="bg-[#D41958] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#8DBD4D] w-full md:w-auto">
                Book a Test
              </button>
            </Link>
            <Link href="/health-packages">
              <button className="border border-[#D41958] text-[#D41958] py-2 px-6 rounded-lg hover:bg-[#8DBD4D] hover:text-white w-full md:w-auto">
                Explore Health Packages
              </button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">10k+</h2>
              <p className="text-gray-600 text-sm">Tests Available</p>
            </div>
            <span className="hidden md:block h-5 w-px bg-gray-300"></span>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">240k+</h2>
              <p className="text-gray-600 text-sm">Patients Benefiting</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(Homebanner);
