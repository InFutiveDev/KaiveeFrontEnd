import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "assets/images/home/Screenshot 2025-01-27 at 5.01.10 PM.png"; // Replace with your actual banner image path
import {
  FaStethoscope,
  FaSmile,
  FaAward,
  FaBuilding,
  FaAmbulance,
} from "react-icons/fa";

const Homebanner = () => {
  const features = [
    { icon: <FaStethoscope />, title: "Most Trusted by Doctors" },
    { icon: <FaSmile />, title: "Over 1 Crore Satisfied Customers" },
    { icon: <FaAward />, title: "NABL Approved Labs" },
    { icon: <FaBuilding />, title: "3000+ Exclusive Collection Centres" },
    { icon: <FaAmbulance />, title: "Home Collection Qualified Technicians" },
  ];

  return (
    <section className="bg-white   md:px-10">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={bannerImage}
            alt="Health Banner"
            className="rounded-lg"
            width={550}
            height={250}
          />
        </div>

        {/* Right Section: Content */}
        <div
          className="flex flex-col justify-center bg-white rounded-lg"
          style={{ width: "605px", height: "210px", padding: "20px" }}
        >
          <h1 className="text-[56px] md:text-3xl font-bold text-gray-800 leading-snug">
            Your <span className="text-[#8DBD4D]">Trusted Partner</span> in
            Health – Accurate Tests, Fast Results.
          </h1>

          <p className="mt-3 text-gray-600  md:text-[22px]">
            Book blood tests, full-body checkups, and health packages at the
            convenience of your home or nearest center.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex space-x-4">
            <Link href="/book-test">
              <button className="bg-[#D41958] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#8DBD4D]">
                Book a Test
              </button>
            </Link>
            <Link href="/health-packages">
              <button className="border !border-[#D41958] text-[#D41958] py-2 px-6 rounded-lg hover:bg-[#8DBD4D] hover:text-white">
                Explore Health Packages
              </button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-10 flex space-x-6">
            <div className="text-center">
              <h2 className="text-28px font-bold text-gray-800">10k+</h2>
              <p className="text-16px text-gray-600 text-sm">Tests Available</p>
            </div>
            <span className="hidden sm:block h-5 w-px bg-gray-300"></span>
            <div className="text-center">
              <h2 className="text-28px font-bold text-gray-800">240k+</h2>
              <p className="text-16px text-gray-600 text-sm">
                Patients Benefiting
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      {/* <div className="py-8 mt-4 mb-1 bg-white-50">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-2 text-center">
          {features.map((feature, index) => (
            <div key={index} className=" flex items-center space-y-2">
              <div className="text-2xl text-gray-600">{feature.icon}</div>
              <p className="text-gray-700 text-sm font-small">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default memo(Homebanner);
