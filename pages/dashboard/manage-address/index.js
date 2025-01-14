import ManageAddressLayout from "layout/dashboard/manageAddress";
import React from "react";
// import LazyLoad from "react-lazyload";
import Head from "next/head";

const ManageAddress = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content={"noindex"} />
      </Head>
      <ManageAddressLayout />
    </div>
  );
};

export default ManageAddress;
