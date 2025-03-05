import FreeHomeSampleCollectionLayout from "layout/free-home-sample-collection";
import React from "react";
import Head from "next/head";

const FreeHomesSampleCollection = () => {
  const metaData = {
    title: "Blood Test at Home | Free Home Sample Collection",
    description:
      " Our service offers easy and free home blood sample collection. Book now!",
    url: "https://www.kaiveehealthcare.com/free-home-sample-collection", // Replace with the canonical URL of the page
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
        <meta property="og:site_name" content="kaivee healthcare" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Kaivee" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />
      </Head>
      <FreeHomeSampleCollectionLayout />
    </div>
  );
};

export default FreeHomesSampleCollection;
