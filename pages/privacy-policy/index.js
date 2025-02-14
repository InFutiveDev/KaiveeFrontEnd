import Footer from "components/footer";
import Navbar from "components/navbar";
import TopNavbar from "components/topnav";
import React from "react";
import Head from "next/head";

const PrivacyPolicy = () => {
  const metaData = {
    title: "Privacy Policy | Kaivee Healthcare",
    description:
      "Privacy Policy | Kaivee Healthcare. Learn how we protect your privacy and handle your personal information.",
    url: "", // Replace with the canonical URL of the page
    image:
      "", // Replace with the actual image URL
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
        <meta property="og:site_name" content="" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
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
              <div className="ml-2">privacy-policy</div>
            </section>
          </div>
        </div>
        <div className="container mt-3">
          <div>
            <h1 className="!text-[26px] font-medium text-[#D41958]">
              Privacy Policy
            </h1>
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
              <p>📞<strong> Phone</strong> : 084483 38674</p>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">{/* <Footer /> */}</div>
    </div>
  );
};

export default PrivacyPolicy;
