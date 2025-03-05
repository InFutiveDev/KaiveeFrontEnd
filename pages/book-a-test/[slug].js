import TestDetailsLayout from "layout/book-a-test/test-details";
import Head from "next/head";
import React from "react";
import { MakeProtectedApiCall } from "utility/api";

const TestDetails = ({ data }) => {
  const metaData = {
    title: data?.[0]?.meta_title || "Maivee Healthcare tests",
    description: data?.[0]?.meta_desc || "Healthcare tests",
    url: `https://www.kaiveehealthcare.com//${
      data?.[0]?.test_url || "default"
    }`, // Replace with actual URL logic
    image:
      "", // Replace with actual image URL
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
        <meta name="twitter:site" content="@KaiveeHealthcare" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />
      </Head>
      <TestDetailsLayout byidData={{ data }} />
    </div>
  );
};

export default TestDetails;

export const getServerSideProps = async (context) => {
  let slugContent = context.params.slug;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let data;
  const url = `${baseUrl}/test/get-test-byId/${slugContent}`;
  const getHeaders = () => {
    return {
      "content-type": "application/json",
    };
  };
  const res = await MakeProtectedApiCall(url, "GET", getHeaders());
  data = res?.data?.data || {};

  if (
    !res?.data?.data?.length ||
    res?.data?.data?.[0]?.package_type === "health-package"
  ) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data || "",
    },
  };
};
