import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bannerImage from "assets/images/home/home-banner-2-new.jpg";
import bannerImage2 from "assets/images/home/HOME-BANNER-NEW.jpg";
import bannerImage3 from "assets/images/home/HOME-BANNER-3.jpg";


const images = [bannerImage2,bannerImage,bannerImage3];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
  
};


const Homebanner = () => {
  return (
    <section className="bg-white md:px-8 py-6 lg:py-8 lg:!pt-0 lg:!pb-0">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        
        {/* Left Section: Carousel */}
        <div className="flex justify-center w-full lg:w-1/2">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] relative">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              showDots={true}
              arrows={false}
              
            >
              {images.map((image, index) => (
                <div key={index} className="relative w-full h-full"
              >
                  <Image
                    src={image}
                    alt={`Banner ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg position-relative"
                  
                    priority
                    
                  
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg p-5 lg:p-8">
          <h1 className="text-[35px] sm:text-[35px] lg:text-[35px] text-gray-800 leading-normal text-center lg:text-left">
            Your <span className="text-[#8DBD4D]">Trusted Partner</span> in Health  Accurate Tests, Fast Results.
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg lg:text-xl text-center lg:text-left">
            Book blood tests, full-body checkups, and health packages at the convenience of your home or nearest center.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center  justify-end  space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/book-test">
              <button className="bg-[#D41958] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#8DBD4D] w-full sm:w-auto">
                Book a Test
              </button>
            </Link>
            <Link href="/health-packages">
              <button className="border border-[#D41958] text-[#D41958] py-2 px-6 rounded-lg hover:bg-[#8DBD4D] hover:text-white w-full sm:w-auto">
                Explore Health Packages
              </button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center justify-end   space-y-6 sm:space-y-0 sm:space-x-8">
            <div className="text-center">
              <h2 className="text-[24px] sm:text-[24px] font-bold text-gray-800">10k+</h2>
              <p className="text-gray-600 text-sm sm:text-base">Tests Available</p>
            </div>
            <span className="hidden sm:block h-6 w-px bg-gray-300"></span>
            <div className="text-center">
              <h2 className="text-[24px] sm:text-[24px] font-bold text-gray-800">240k+</h2>
              <p className="text-gray-600 text-sm sm:text-base">Patients Benefiting</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(Homebanner);
