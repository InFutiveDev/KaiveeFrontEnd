import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";
import UploadPrescriptionModal from "components/UploadPrescriptionModal";
import { useState } from "react";
import Image from "next/image";

import img1 from "../../assets/images/home-icon/4 icon/package.png";
import img2 from "../../assets/images/home-icon/4 icon/appointment.png";
import img3 from "../../assets/images/home-icon/4 icon/book-a-test.png";
import img4 from "../../assets/images/home-icon/4 icon/collection.png";
import img5 from "../../assets/images/home-icon/4 icon/upload.png";

const ServicesSection = () => {
  const [UploadOpen, setUploadOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);

  const uploadModal = () => {
    if (auth?.logedInUser) {
      setUploadOpen(true);
    } else {
      dispatch(LOGIN_MODAL_OPEN(true));
    }
  };

  return (
    <>
      <section className="my-16 lg:my-20 text-center">
        {/* Heading */}
        <h2 className="mt-10 text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
          From <span className="text-[#8DBD4D]">Tests to </span> 
          <span className="text-[#8DBD4D]">Prescriptions</span>, We’ve Got You Covered
        </h2>

        {/* Image Section */}
        <div className="grid gap-6 md:gap-8 lg:gap-14 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 mx-auto w-full ">
          {/* Service Items */}
          {[
            { img: img1, text: "Book a Health Package", link: "/health-packages" },
            { img: img2, text: "Book an Appointment", link: "/dashboard/book-an-appointment" },
            { img: img3, text: "Book a Test", link: "/book-a-test" },
            { img: img4, text: "Book a Home Collection", link: "/free-home-sample-collection" },
            { img: img5, text: "Upload Prescription", link: "", action: uploadModal },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer group transition-transform transform hover:scale-105"
              onClick={service.action || (() => router.push(service.link))}
            >
              <div className="relative w-24 sm:w-28 h-24 sm:h-28 flex items-center justify-center bg-gray-100 rounded-full shadow-lg hover:bg-gray-200 transition-all">
                <Image src={service.img} alt={service.text} className="w-16 sm:w-20 transition-opacity duration-300 group-hover:opacity-80" />
              </div>
              <p className="text-gray-700 text-sm sm:text-base font-medium mt-2 group-hover:text-[#D41958] transition-colors duration-300">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <UploadPrescriptionModal setOpen={setUploadOpen} open={UploadOpen} />
      </section>
    </>
  );
};

export default ServicesSection;
