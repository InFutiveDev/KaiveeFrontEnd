import FranchiseeLayout from "layout/franchisee";
import React from "react";
import Head from "next/head";

const Franchisee = () => {
  const metaData = {
    title: "Franchise | Become A Partner - Kaivee Healthcare",
    description:
      "Partner with a Leading Diagnostic Center in Delhi. Explore Franchise Opportunities for Mutual Growth and Success. Contact Us Today",
    url: "https://www.kaiveehealthcare.com/", // Replace with the canonical URL of the page
    image: "/", // Replace with the actual image URL
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
        <meta property="og:site_name" content="Kaivee Healthcare" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Kaivee" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />
      </Head>
      <FranchiseeLayout />
    </div>
  );
};

export default Franchisee;
