import React from "react";
import Head from "next/head";
import { MediaPressLayout } from "layout";
import { MakeProtectedApiCall } from "utility/api";

const MediaPress = ({ data }) => {
  return (
    <div>
      <Head>
        <title>News & Print Media Coverages | City X-Ray</title>
        <meta
          name="description"
          content={"News & print media coverages, e-news article | City X-Ray"}
        />
      </Head>
      <MediaPressLayout data={data} />
    </div>
  );
};

export default MediaPress;

export const getServerSideProps = async (context) => {
  const baseUrl = "https://blog.cityxrayclinic.com/";

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
