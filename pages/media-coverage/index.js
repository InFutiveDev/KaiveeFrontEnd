import React from "react";
import Head from "next/head";
import MediaCoverage from "layout/media-coverage";

const Mediacoverage = () => {
  const metaData = {
    title: "Media Coverage - Stay Informed with the Latest Media Updates",
    description: "Stay updated with the latest health news and media coverage from our diagnostic center. Get informed and stay ahead on all things related to healthcare.",
    url: "https://pos2.flashdeal.in/kaivee-blog/media-coverage", // Replace with the canonical URL of the page
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
        <meta property="og:type" content="article" />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:image" content={metaData.image} />
        <meta property="og:site_name" content="Kaivee" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />
      </Head>
      <MediaCoverage />
    </div>
  );
};

export default Mediacoverage;
