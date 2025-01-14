import Footer from "components/footer";
import Navbar from "components/navbar";
import TopNavbar from "components/topnav";
import React from "react";
import Head from "next/head";

const PrivacyPolicy = () => {
  const metaData = {
    title: "Privacy Policy | City X-Ray",
    description:
      "Privacy Policy | City X-Ray. Learn how we protect your privacy and handle your personal information.",
    url: "https://www.cityxrayclinic.com/privacy-policy", // Replace with the canonical URL of the page
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
        <div className="bg-[#fcc42c]">
          <div className="container">
            <section className="d-flex text-lg py-1">
              <div>Home</div> <span className="ml-2">{">"}</span>
              <div className="ml-2">privacy-policy</div>
            </section>
          </div>
        </div>
        <div className="container mt-3">
          <div>
            <h1 className="!text-[26px] font-medium text-[#fcc42c]">
              Privacy Policy
            </h1>
          </div>
          <div className="mt-3">
            <ul className="ms-9 text-gray-500 text-[16px]">
              <li className="pb-2">
                City Xray and Scan Clinic Pvt. Ltd. is committed to protect your
                privacy. It is important for us that our patients and the
                visitors to our site retain their privacy while taking advantage
                of the services that we offer. We employ the highest levels of
                security to keep your personal information strictly
                confidential.
              </li>
              <li className="pb-2">
                We will not disclose or sell any of your personal information,
                including your name, address, age, sex or medical history to any
                third party without your permission.
              </li>
              <li className="pb-2">
                Although we use cookie technology to help users navigate our
                site efficiently, we never use cookies to store personal
                information, such as credit card numbers. Please be aware, that
                our site contains links to other sites and that the privacy
                practices of other sites may differ from those of City Xray and
                Scan Clinic Pvt. Ltd. If you have any additional questions or
                concerns regarding our privacy policies, please email us at
                web@cityxrayclinic.com and we'll respond within 48 hours.
              </li>
              <li className="pb-2">
                We reserve the right to change or update these policies at any
                time upon reasonable notice, effective immediately upon posting
                to this site.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5">{/* <Footer /> */}</div>
    </div>
  );
};

export default PrivacyPolicy;
