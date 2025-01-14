// images and icons
import InquiryModal from "components/inquiryModal";
import { useState } from "react";
import { useRouter } from "next/router";
import UploadPrescriptionModal from "components/UploadPrescriptionModal";
import img1 from "../../assets/images/Finalimg/Book/Book a Health Package.webp";
import img2 from "../../assets/images/Finalimg/Book/Book a home collection.webp";
import img3 from "../../assets/images/Finalimg/Book/Book a test.webp";
import img4 from "../../assets/images/Finalimg/Book/Book an Appoinment.webp";
import img5 from "../../assets/images/Finalimg/Facility/Upload Prescription (1).webp";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";

const BookingCard = () => {
  const [openInquiryModal, setOpenInquiryModal] = useState(false);
  const [UploadOpen, setUploadOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);

  const handleInquiryModal = () => {
    setOpenInquiryModal(!openInquiryModal);
  };

  const uploadModal = () => {
    if (auth?.logedInUser) {
      setUploadOpen(true);
    } else {
      dispatch(LOGIN_MODAL_OPEN(true));
    }
  };

  return (
    <>
      {openInquiryModal ? (
        <InquiryModal handleInquiryModal={handleInquiryModal} />
      ) : null}
      <section className="services my-8 lg:my-12 booking-card">
        <div className="boxBookingCard">
          <div className="frame-wrapper sm:px-2 md:px-24 p-2">
            <div className="gap-4 lg:gap-7 grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 text-md ">
              <div
                className="hover:z-40 relative h-full cursor-pointer flex items-center"
                onClick={() => router.push(`/health-packages`)}
              >
                <div className="frame-2">
                  <div>
                    <img src={img1.src} alt="icon " />
                  </div>

                  <div className="frame-3">
                    <div className="text-wrapper text-base lg:text-[24px] ">
                      Book a Health <br />
                      Package
                    </div>
                    <div className="hidden sm:block text">
                      Find from a variety of Health Checkup Packages that is
                      best suitable for you.
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => router.push(`/dashboard/book-an-appointment`)}
                className="hover:z-40 relative h-full cursor-pointer flex items-center"
              >
                <div className="frame-2">
                  <div>
                    <img src={img4.src} alt="img 4" />
                  </div>

                  <div className="frame-3">
                    <div className="text-wrapper">
                      Book an <br />
                      Appointment
                    </div>
                    <div className="hidden sm:block text">
                      Book your appointment online as per your convenience and
                      our team will contact you soon for the confirmation.
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => router.push(`/book-a-test`)}
                className="hover:z-40 relative h-full cursor-pointer flex items-center"
              >
                <div className="frame-2">
                  <div>
                    <img src={img3.src} alt="icon " />
                  </div>

                  <div className="frame-3">
                    <div className="text-wrapper">Book a Test</div>
                    <p className="hidden sm:block text">
                      Book your tests online at best prices from a wide range of
                      test menu.
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => router.push(`/free-home-sample-collection`)}
                className="hover:z-40 relative h-full cursor-pointer flex items-center"
              >
                <div className="frame-2">
                  <div>
                    <img src={img2.src} alt="icon " />
                  </div>

                  <div className="frame-3">
                    <div className="text-wrapper">
                      Book a Home <br /> Collection
                    </div>
                    <p className="hidden sm:block text justify-stretch">
                      Smartly Book Sample Collection service at your Home. Our
                      Phlebotomist shall assist you at your place
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={uploadModal}
                className=" hover:z-40 relative h-full cursor-pointer flex items-center"
              >
                <div className="frame-2">
                  <div>
                    <img src={img5.src} alt="icon " />
                  </div>
                  <div className="frame-3">
                    <p className="text-wrapper">
                      Upload <br /> Prescription
                    </p>
                    <div className="hidden sm:block text">
                      {`Unable to find a test ? Don't Worry! Just upload your prescription and our team will connect with you
                      soon.`}
                    </div>
                  </div>
                </div>
              </div>
              <UploadPrescriptionModal
                setOpen={setUploadOpen}
                open={UploadOpen}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingCard;
