import BiomedicalWasteLayout from "layout/biomedical-waste";
import React from "react";
import Head from "next/head";

const BiomedicalWaste = () => {
  const metaData = {
    title: "Bio Medical Waste | Medical Waste Management",
    description: "kaivee healthcare manages Bio-Waste safely and legally. Biomedical Waste Management is handled effectively for biological diagnostic waste.",
    url: "https://www.kaiveehealthcare.com/biomedical-waste", // Replace with the canonical URL of the page
    image: "", // Replace with the actual image URL
  };

  return (
    <div>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:type" content="website" />
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
      <BiomedicalWasteLayout />
    </div>
  );
};

export default BiomedicalWaste;
