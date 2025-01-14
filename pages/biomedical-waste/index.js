import BiomedicalWasteLayout from "layout/biomedical-waste";
import React from "react";
import Head from "next/head";

const BiomedicalWaste = () => {
  const metaData = {
    title: "Bio Medical Waste | Medical Waste Management",
    description: "City X-Ray manages Bio-Waste safely and legally. Biomedical Waste Management is handled effectively for biological diagnostic waste.",
    url: "https://www.cityxrayclinic.com/biomedical-waste", // Replace with the canonical URL of the page
    image: "https://www.cityxrayclinic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbio%20medical%20%20waste%201000%20x%20600.69d90592.webp&w=1080&q=100", // Replace with the actual image URL
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
        <meta property="og:site_name" content="City X-Ray" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@CityXrayClinic" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />
      </Head>
      <BiomedicalWasteLayout />
    </div>
  );
};

export default BiomedicalWaste;
