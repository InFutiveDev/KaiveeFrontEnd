import React from "react";
import Head from "next/head";
import CsrLayout from "layout/about/csr";

const CSR = () => {
  const metaData = {
    title: "Corporate Social Responsibility - CSR",
    description:
      "Through our CSR initiatives, we are making a positive impact beyond business; we actively uplift the well-being of the communities we serve.",
    url: "https://www.kaiveehealthcare.com/about/csr", // Replace with the canonical URL of the page
    image:
      "https://www.kaiveehealthcare.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FappLogo.eaef1c84.png&w=384&q=100", // Replace with the actual image URL
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
        <meta property="og:site_name" content="Kaivee" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@kaivee" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />
      </Head>
      <CsrLayout />
    </div>
  );
};

export default CSR;
