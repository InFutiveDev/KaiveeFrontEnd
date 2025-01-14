import React from "react";
import HealthPackagesDetailLayout from "layout/health-packages/health-packages-details";

const Slug = ({ id }) => {
  return (
    <div>
      <HealthPackagesDetailLayout id={id} />
    </div>
  );
};

export default Slug;
export const getServerSideProps = async (context) => {
  let slugContent = context.params.slug;

  return {
    props: {
      id: slugContent || null,
    },
  };
};
