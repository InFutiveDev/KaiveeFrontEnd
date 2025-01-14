import React from "react";
// import HealthPackagesCategoryLayout from "layout/health-packages/HealthPackagesCategoryLayout";
import HealthPackagesDetailLayout from "layout/health-packages/health-packages-details";
import { MakeProtectedApiCall } from "utility/api";
import Head from "next/head";

const Slug = ({ id, data }) => {
  const metaData = {
    title: data?.[0]?.meta_title || "Kaivee Healthcare HealthPackage",
    description: data?.[0]?.meta_desc || "Healthcare HealthPackage",
  };
  return (
    <div>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
      </Head>
      {/* <HealthPackagesCategoryLayout id={id} /> */}
      <HealthPackagesDetailLayout id={id} testInfo={{ data }} />
    </div>
  );
};

export default Slug;
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
  return {
    props: {
      id: slugContent || null,
      data: data || "",
    },
  };
};
