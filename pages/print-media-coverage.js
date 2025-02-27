import React from "react";
import Head from "next/head";
import { MediaPressLayout } from "layout";
import { MakeProtectedApiCall } from "utility/api";

const MediaPress = ({ data }) => {
  return (
    <div>
      <Head>
        <title>News & Print Media Coverages</title>
        <meta
          name="description"
          content={"News & print media coverages, e-news article"}
        />
      </Head>
      <MediaPressLayout data={data} />
    </div>
  );
};

export default MediaPress;

export const getServerSideProps = async (context) => {
  const baseUrl = "https://pos2.flashdeal.in/kaivee-blog/";

  let data;
  const url = `${baseUrl}api/getPrintMedia`;
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
