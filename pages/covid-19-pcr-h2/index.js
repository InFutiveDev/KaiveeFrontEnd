// import CovidLayout from "layout/covid";
import Head from "next/head";
import CovidRTPCRLayout from "layout/covidProduct/covidRTPCR";
import { MakeProtectedApiCall } from "utility/api";

const Covid = ({ data }) => {
  console.log("data", data);
  return (
    <div>
      <Head>
        <title>
          Covid 19 RT PCR Test price in Delhi - Book and Download Report Online
        </title>
        <meta
          name="description"
          content={
            "Covid 19 RT PCR Test price in Delhi Near me at Kaivee with affordable price. Book your slot now and get easy access to download report online"
          }
        />
      </Head>
      <CovidRTPCRLayout data={data} />
      {/* <CovidLayout /> */}
    </div>
  );
};

export default Covid;
export const getServerSideProps = async (context) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  let data;
  const url = `${baseUrl}/test/get-test-byId/650bd19a262063d6536c5a00`;
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
