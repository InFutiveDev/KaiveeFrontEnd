import React from "react";
import Head from "next/head";
import MediaCoverage from "layout/media-coverage";

const Mediacoverage = () => {
  const metaData = {
    title: "Media Coverage - Stay Informed with the Latest Media Updates",
    description: "Stay updated with the latest health news and media coverage from our diagnostic center. Get informed and stay ahead on all things related to healthcare.",
    url: "https://www.cityxrayclinic.com/media-coverage", // Replace with the canonical URL of the page
    image: "https://www.cityxrayclinic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FappLogo.e921700e.png&w=750&q=100", // Replace with the actual image URL
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
      <MediaCoverage />
    </div>
  );
};

export default Mediacoverage;
