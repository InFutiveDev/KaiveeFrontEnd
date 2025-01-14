import ManageMembersLayout from "layout/dashboard/manage-members";
import React from "react";
import Head from "next/head";

const ManageMembers = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content={"noindex"} />
      </Head>
      <ManageMembersLayout />
    </div>
  );
};

export default ManageMembers;
