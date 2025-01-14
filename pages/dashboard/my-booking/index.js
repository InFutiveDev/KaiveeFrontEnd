import MyBookingLayout from "layout/dashboard/my-booking";
import React from "react";
import Head from "next/head";

const MyBooking = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content={"noindex"} />
      </Head>
      <MyBookingLayout />
    </div>
  );
};

export default MyBooking;
