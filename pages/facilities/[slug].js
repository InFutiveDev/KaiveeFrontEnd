import React from "react";
import Head from "next/head";
import { MakeProtectedApiCall } from "utility/api";
import { FacilitiesCategoryLayout } from "layout";

const Slug = ({ data, id }) => {
  // Assuming the data contains fields for OG and Twitter meta tags
  const metaData = {
    title: data?.[0]?.meta_title || "Kaivee Healthcare Facility",
    description: data?.[0]?.meta_desc || "Healthcare Facility",
    url: `https://www.cityxrayclinic.com/facilities/${
      data?.[0]?.category_url || "default"
    }`, // Default URL
    image: `https://www.cityxrayclinic.com/facilities/${
      data?.[0]?.category_image || "default"
    }`, // Default image
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
      <FacilitiesCategoryLayout id={id} category={data} />
      {/* <HomeLayout /> */}
    </div>
  );
};

export default Slug;

export const getServerSideProps = async (context) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  let slugUrl = context.params?.slug;
  let data;
  const url = `${baseUrl}/category/get-byId/${slugUrl}`;
  const getHeaders = () => {
    return {
      "content-type": "application/json",
    };
  };
  const res = await MakeProtectedApiCall(url, "GET", getHeaders());
  data = res?.data?.data || {};

  return {
    props: {
      data: data || "",
      id: slugUrl || "",
    },
  };
};
