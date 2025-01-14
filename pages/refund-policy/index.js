import Footer from "components/footer";
import Navbar from "components/navbar";
import TopNavbar from "components/topnav";
import React from "react";
import Head from "next/head";

const RefundAndCancellationPolicy = () => {
  const metaData = {
    title: "Refund And Cancellation Policy | City X-Ray",
    description:
      "Refund And Cancellation Policy | City X-Ray. Understand our policy on refunds and cancellations.",
    url: "https://www.cityxrayclinic.com/refund-policy", // Replace with the canonical URL of the page
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
              <div className="ml-2">Refund-Policy</div>
            </section>
          </div>
        </div>
        <div className="container mt-3">
          <div>
            <h1 className="!text-[26px] font-medium text-[#fcc42c]">
              Refund And Cancellation Policy
            </h1>
          </div>
          <div className="mt-3">
            <p className="list-disc text-gray-500 text-[16px]">
              All services are non-refundable, but we will be more than happy to
              schedule a corrective service free of charge.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5"></div>
    </div>
  );
};

export default RefundAndCancellationPolicy;
