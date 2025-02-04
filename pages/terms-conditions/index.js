import Footer from "components/footer";
import Navbar from "components/navbar";
import TopNavbar from "components/topnav";
import CorporateHealthLayout from "layout/corporate-health-enquiry";
import React from "react";
import Head from "next/head";

const TermsOfUse = () => {
  const metaData = {
    title: "Terms Of Use - Terms & Conditions | City X-Ray",
    description:
      "Read the terms of use and conditions for City X-Ray. Understand your rights and obligations while using our website.",
    url: "https://www.cityxrayclinic.com/terms-conditions", // Replace with the canonical URL of the page
    image:
      "https://www.cityxrayclinic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FappLogo.e921700e.png&w=750&q=100", // Replace with the actual image URL
  };

  return (
    <div>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:image" content={metaData.image} />
        <meta property="og:site_name" content="City X-Ray" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@CityXrayClinic" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />
      </Head>
      <div>
        {/* <section className="top_navbar">
                    <TopNavbar />
                </section>
                <Navbar /> */}
        <div className="bg-[#8DBD4D]">
          <div className="container">
            <section className="d-flex text-lg py-1">
              <div>Home</div> <span className="ml-2">{">"}</span>
              <div className="ml-2">Terms-Conditions</div>
            </section>
          </div>
        </div>
        <div className="container mt-3">
          <div>
            <h1 className="!text-[26px] font-medium text-[#D41958]">
              Terms & Conditions
            </h1>
            <p className="text-gray-500 text-[18px] mt-3">
              Welcome to<strong> Kaivee Healthcare </strong> ! By accessing and using our website and services, you agree to be bound by the following<strong> Terms and Conditions</strong>. Please read these terms carefully before using our services. If you do not agree with these terms, please refrain from using our website.
            </p>
          </div>
          <h2 className=" text-[24px] mt-3 font-semibold">
            User Responsibilities
          </h2>
          <div className="mt-3">
            <p className="text-gray-500 text-[18px] ">By using our services, you agree to:</p>
            <ul className="list-disc ms-9 text-gray-500 text-[16px]">
              <li>
                <p >
                  <strong>Provide accurate information:</strong> All information you provide must be true, complete, and accurate.
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


        </div>

      </div>
      <div className="mt-5"></div>
    </div>
  );
};

export default TermsOfUse;
