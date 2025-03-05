import React from "react";
import AwardDetails from "layout/about/awards-accreditations-details";
import Head from "next/head";
import { MakeProtectedApiCall } from "utility/api";

const Page = ({ id, data }) => {
  return (
    <div className="container">
      <Head>
        <title>{data?.meta_title || ""}</title>
        <meta name="description" content={data?.meta_desc || ""} />
      </Head>
      <AwardDetails slug={id} data={data} />
    </div>
  );
};

export default Page;
export const getServerSideProps = async (context) => {
  let slugContent = context.params.slug;
  const baseUrl = "https://pos2.flashdeal.in/kaivee-blog/";
  let data;
  const url = `${baseUrl}api/getAwardByUrl/${slugContent}`;
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
      data: data || {},
    },
  };
};
