import BookATestLayout from "layout/book-a-test";
import React from "react";
import Head from "next/head";

const BookATest = ({ data }) => {
  const metaData = {
    title: "Find a Test | Info and Test Cost | Kaivee Healthcare",
    description:
      "Find a test you're looking for and check the price. Search and find test costs, preparation, and other information.",
    url: "/", // Replace with the canonical URL of the page
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
        <meta property="og:type" content="article" />
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
      <BookATestLayout urlData={data} />
    </div>
  );
};

export default BookATest;

export const getServerSideProps = async ({ query }) => {
  return {
    props: {
      data: query || "",
    },
  };
};
