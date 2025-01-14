import ClinicalResearchLayout from "layout/clinical-research";
import React from "react";
import Head from "next/head";

const ClinicalResearch = () => {
  return (
    <div>
      <Head>
        <title>Research and Trials | Clinical Trials | Kaivee Healthcare</title>
        <meta
          name="description"
          content={
            "Kaivee Healthcare's expert team working on day-to-day research and clinical trials in the field of diagnostics for better patient care."
          }
        />
      </Head>
      <ClinicalResearchLayout />
    </div>
  );
};

export default ClinicalResearch;
