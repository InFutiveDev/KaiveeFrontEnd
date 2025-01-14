import HealthPackagesLayout from "layout/health-packages";
import React from "react";
import Head from "next/head";
import { MakeProtectedApiCall } from "utility/api";

const HealthPackages = ({ data }) => {
  const metaData = {
    title:
      "Full Body Health Checkup Packages Near Me in Delhi | Kaivee Healthcare",
    description:
      "Heavily discounted full body health checkup packages at low cost that cover all your vital organs to track your health. Book health packages in Delhi.",
    url: "https://www.cityxrayclinic.com/health-packages", // Replace with the canonical URL of the page
    image:
      "https://www.cityxrayclinic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain%20health%20package%201000%20x%20600.9cbd5d33.webp&w=1080&q=100", // Replace with the actual image URL
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
      <HealthPackagesLayout healthPackages={data} />
    </div>
  );
};

export default HealthPackages;
export const getServerSideProps = async (context) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  let data;
  const url = `${baseUrl}/test/getAll-package`;
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
    },
  };
};
