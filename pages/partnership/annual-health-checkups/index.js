import EcgLayout from "../../../layout/partnership/annual-health-checkups/index";
import { useEffect, useState } from "react";
import Head from "next/head";

const AnnualHealth = () => {
  const [metaData, setMetaData] = useState({
    title: "Annual Health Check Ups at Kaivee Healthcare.",
    description:
      "Annual Health Check Ups Kaivee Healthcare | Various Home Care Specialist in Delhi-NCR",
    url: "https://www.kaiveehealthcare.com/annual-health-checkups", // Replace with the canonical URL of the page
    image:
      "https://www.kaiveehealthcare.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FappLogo.eaef1c84.png&w=384&q=100",
  });

  useEffect(() => {
    document.title = metaData.title;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) metaDescription.setAttribute("content", metaData.description);
  }, [metaData]); // Runs when metaData changes

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
        <meta property="og:site_name" content="Kaivee Healthcare" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@KaiveeHealthcare" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />
      </Head>

      <EcgLayout />
    </div>
  );
};

export default AnnualHealth;