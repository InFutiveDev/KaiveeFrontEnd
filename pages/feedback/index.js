import FeedBackLayout from "layout/feedback";
import React from "react";
import Head from "next/head";

const Feedback = () => {
  const metaData = {
    title: "Feedback | Please Share Your Views with Us",
    description:
      "We value your feedback as it enables us to provide you with better service. Kindly share your thoughts with us and help us improve.",
    url: "https://www.cityxrayclinic.com/feedback", // Replace with the canonical URL of the page
    image:
      "https://www.cityxrayclinic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freview%201000%20x%20600.855baa87.webp&w=1080&q=100", // Replace with the actual image URL
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
      <FeedBackLayout />
    </div>
  );
};

export default Feedback;
