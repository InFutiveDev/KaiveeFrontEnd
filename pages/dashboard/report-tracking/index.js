import ReportTrackingLayout from "layout/dashboard/report-tracking";
import React from "react";
import Head from "next/head";

const ReportTracking = () => {
  return (
    <div>
      <Head>
        <title>
          Track Sample - Monitor Progress & Status Updates 
        </title>
        <meta
          name="description"
          content={
            "Keep tabs on your sample's journey with City X-Ray's Track Sample feature. Stay informed about progress and status updates effortlessly"
          }
        />
        <meta name="robots" content="noindex" />
      </Head>
      <ReportTrackingLayout />
    </div>
  );
};

export default ReportTracking;
