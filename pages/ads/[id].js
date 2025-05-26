import LayoutAds from "layout/ads";
import Head from "next/head";
import { MakeProtectedApiCall } from "utility/api";

const AppAds = ({ data }) => {
  const metaData = {
    title: data?.[0]?.metaTagTitle || "Kaivee Healthcare ads",
    description: data?.[0]?.metaTagDescription || "",
  };
  return (
    <div className="bg-[#fafafa]">
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
      </Head>
      <LayoutAds />
    </div>
  );
};

export default AppAds;
export const getServerSideProps = async (context) => {
  let slugContent = context.params.id;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let data;
  const url = `${baseUrl}/landingData/getById/${slugContent}`;
  const getHeaders = () => {
    return {
      "content-type": "application/json",
    };
  };
  const res = await MakeProtectedApiCall(url, "GET", getHeaders());
  data = res?.data?.data || [];
  return {
    props: {
      data: data || "",
    },
  };
};
