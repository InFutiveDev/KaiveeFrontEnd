import React from "react";
import LazyLoad from "react-lazyload";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Disclaimer - City X-Ray & Scan Clinic</title>
        <meta
          name="description"
          content="Disclaimer - Diagnostic Laboratory Services at City X-Ray"
        />
      </Head>
      <LazyLoad>
        <div className="container mt-3">
          <div>
            <h1 className="!text-3xl font-medium text-[#D41958]">Disclaimer</h1>
          </div>
          <div className="container mt-3">
            <div>
              <h2 className=" text-[24px] mt-3 font-semibold">
                Introduction
              </h2>
              <p className="text-gray-500 text-[18px] mt-3">
                The information provided on the<strong> Kaivee Healthcare </strong> website, including all text, graphics, images, and other materials, is intended for informational purposes only. By accessing or using our website and services, you agree to the following disclaimer terms. If you do not agree with the terms outlined in this disclaimer, please refrain from using our website.              </p>
            </div>
            <h2 className=" text-[24px] mt-3 font-semibold">
              User Responsibilities
            </h2>
            <div className="mt-3">
              <ul className="list-disc ms-9 text-gray-500 text-[16px]">
                <li>
                  <p >
                    <strong>Not a Substitute for Professional Medical Advice:</strong> The content provided on this website is not intended to be a substitute for<strong> professional medical advice, diagnosis, or treatment</strong>. Always seek the advice of your physician or other qualified healthcare providers with any questions you may have regarding a medical condition.
                  </p>

                </li>
                <li>
                  <p><strong>Use the website and services responsibly</strong>: You agree to use our website and services only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of services.</p>
                </li>
                <li>
                  <p >
                    <strong>Adhere to medical advice</strong>: While we provide comprehensive diagnostic services, please follow any medical advice or guidance given by your healthcare provider.
                  </p>
                </li>
              </ul>
            </div>
            <h2 className=" text-[24px] mt-3 font-semibold">
              Appointments & Bookings
            </h2>
            <div className="mt-3">

              <ul className="list-disc ms-9 text-gray-500 text-[16px]">
                <li>
                  <p >
                    <strong>Booking Process:</strong> Users can book appointments for tests or home collection services through the website or mobile application. By booking, you confirm your understanding and agreement to these Terms and Conditions.s
                  </p>

                </li>
                <li>
                  <p><strong>Home Collection:</strong>: For home collection services, the user agrees to ensure accurate details (address, contact, preferred time) are provided for smooth collection.</p>
                </li>
                <li>
                  <p >
                    <strong>Cancellation/Rescheduling</strong>: You may cancel or reschedule appointments in accordance with our cancellation policy. Please refer to the individual appointment page for further details on rescheduling or cancellation procedures.
                  </p>
                </li>
                <li>
                  <p >
                    <strong>Service Availability</strong>:  Availability of home sample collection or other services may vary by location.
                  </p>
                </li>
              </ul>
            </div>
            <h2 className="text-[24px] mt-3 font-semibold">
              Privacy & Data Protection
            </h2>
            <div className="mt-3">
              <p className="text-gray-500 text-[18px] mt-3">
                We value your privacy and are committed to protecting your personal data. For detailed information on how we collect, use, and protect your data, please refer to our Privacy Policy.
              </p>
            </div>
            <h2 className="text-[24px] mt-3 font-semibold">
              Limitation of Liability
            </h2>
            <div className="mt-3">
              <p className="text-gray-500 text-[18px] mt-3">
                While we strive to provide accurate diagnostic services, Kaivee Healthcare is not responsible for any medical decisions made based on the information provided by our services. The user agrees that Kaivee Healthcare shall not be liable for any loss, injury, or damages resulting from the use of our services, except as required by law.            </p>
            </div>


            <h2 className="text-[24px] mt-3 font-semibold">
              Intellectual Property

            </h2>
            <div className="mt-3">
              <p className="text-gray-500 text-[18px] mt-3">
                The content, logos, designs, and materials on this website are the intellectual property of Kaivee Healthcare. Users may not reproduce, distribute, or use any part of this website for commercial purposes without prior written permission.
              </p>
            </div>

            <h2 className="text-[24px] mt-3 font-semibold">
              Modifications to the Terms and Conditions

            </h2>
            <div className="mt-3">
              <p className="text-gray-500 text-[18px] mt-3">
                Kaivee Healthcare reserves the right to modify, update, or change these Terms and Conditions at any time without prior notice. The most current version of the Terms and Conditions will be available on our website, and it is your responsibility to review them periodically.            </p>
            </div>

            <h2 className="text-[24px] mt-3 font-semibold">
              Governing Law

            </h2>
            <div className="mt-3">
              <p className="text-gray-500 text-[18px] mt-3">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be resolved in the courts of India.
              </p>
            </div>
            <h2 className="text-[24px] mt-3 font-semibold">
              Contact Us

            </h2>
            <div className="mt-3">
              <p className="text-gray-500 text-[18px] mt-3">
                If you have any questions regarding these Terms and Conditions, please feel free to contact us at:
                <p>📧<strong> Email</strong> : info@kaiveehealthcare.com</p>
                <p>📞<strong> Phone</strong> : +91++++++++++</p>
              </p>
            </div>

          </div>
        </div>
      </LazyLoad>
    </>
  );
};

export default Index;
