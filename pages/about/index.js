import { AboutLayout } from "../../layout";
import Head from "next/head";

const Home = () => {
  const metaData = {
    title: "About City X-Ray and Scan Clinic Pvt. Ltd.",
    description: "About Kaivee Healthcare | The Radiology & Pathology Specialist in Delhi-Ncr",
    url: `https://www.kaiveehealthcare.com/`, // Replace with the canonical URL of the page
    image: "", // Replace with the actual image URL
  };

  return (
    <div>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:image" content={metaData.image} />
        <meta property="og:site_name" content="City X-Ray" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@CityXrayClinic" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />

        {/* Set the language attribute */}
      </Head>
      <AboutLayout />
    </div>
  );
};

export default Home;
