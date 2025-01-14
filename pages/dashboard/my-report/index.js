import MyReportLayout from "layout/dashboard/my-report";
import React from "react";
import Head from "next/head";

const MyReport = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content={"noindex"} />
      </Head>
      <MyReportLayout />
    </div>
  );
};

export default MyReport;
