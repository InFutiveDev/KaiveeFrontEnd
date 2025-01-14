import AwardsAccreditaionLayout from "layout/about/awards-accreditations";
import React from "react";
import Head from "next/head";

const AwardsAccreditaion = () => {
  const metaData = {
    title: "Award-Winning Diagnostic Centre | Accreditations & Recognitions",
    description: "Explore our accreditations, certifications, and award - City X-Ray",
    url: "https://www.cityxrayclinic.com/about/awards-accreditations", // Replace with the canonical URL of the page
    image: "https://www.cityxrayclinic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAward%20%26%20accredation%201000%20x%20600.f0005deb.webp&w=1080&q=100", // Replace with the actual image URL
  };

  return (
    <div>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta http-equiv="Content-Language" content="en-IN" />

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
      <AwardsAccreditaionLayout />
    </div>
  );
};

export default AwardsAccreditaion;
