import FreeHomeSampleCollectionLayout from "layout/free-home-sample-collection";
import React from "react";
import Head from "next/head";

const FreeHomesSampleCollection = () => {
  const metaData = {
    title: "Blood Test at Home | Easy Free Home Blood Sample Collection",
    description:
      "Get your blood test done hassle-free! Our service offers easy and free home blood sample collection. Book now!",
    url: "https://www.cityxrayclinic.com/free-home-sample-collection", // Replace with the canonical URL of the page
    image:
      "https://www.cityxrayclinic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffree%20home%20sample%20collcetion%20banner%201400x300.2ab9bc71.webp&w=2048&q=100", // Replace with the actual image URL
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
      <FreeHomeSampleCollectionLayout />
    </div>
  );
};

export default FreeHomesSampleCollection;
