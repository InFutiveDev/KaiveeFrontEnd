import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";
import UploadPrescriptionModal from "components/UploadPrescriptionModal";
import { useState } from "react";
import Image from "next/image";

import img1 from "../../assets/images/Finalimg/Book/Book a Health Package.webp";
import img2 from "../../assets/images/Finalimg/Book/Book a home collection.webp";
import img3 from "../../assets/images/Finalimg/Book/Book a test.webp";
import img4 from "../../assets/images/Finalimg/Book/Book an Appoinment.webp";
import img5 from "../../assets/images/Finalimg/Facility/Upload Prescription (1).webp";

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
        <h2 className="mt-12 text-[42px] lg:text-3xl font-bold mb-8">
          From <span className="text-green-500">Tests</span> to{" "}
          <span className="text-green-500">Prescriptions</span>, We’ve Got You
          Covered
        </h2>

        <div className="grid gap-6 md:gap-8 lg:gap-12 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-2">
          {/* Health Package */}
          <div
            className="flex flex-col items-center"
            onClick={() => router.push(`/health-packages`)}
          >
            <Image src={img1} alt="Health Package" className="w-16 mb-4" />
          </div>
          {/* Appointment */}
          <div
            className="flex flex-col items-center"
            onClick={() => router.push(`/dashboard/book-an-appointment`)}
          >
            <Image src={img2} alt=" Appointment" className="w-16 mb-4" />
          </div>
          {/* Test */}
          <div
            className="flex flex-col items-center"
            onClick={() => router.push(`/book-a-test`)}
          >
            <Image src={img3} alt="Book a Test" className="w-16 mb-4" />
          </div>
          {/* Home Collection */}
          <div
            className="flex flex-col items-center"
            onClick={() => router.push(`/free-home-sample-collection`)}
          >
            <Image src={img4} alt=" Home Collection" className="w-16 mb-4" />
          </div>
          {/* Upload Prescription */}
          <div className="flex flex-col items-center" onClick={uploadModal}>
            <Image src={img5} alt="Upload Prescription" className="w-16 mb-4" />
          </div>
        </div>
        <UploadPrescriptionModal setOpen={setUploadOpen} open={UploadOpen} />
      </section>
    </>
  );
};

export default ServicesSection;
