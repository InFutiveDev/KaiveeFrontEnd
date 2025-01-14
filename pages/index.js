import Head from "next/head";
import { HomeLayout } from "../layout";

const Home = () => {
  const metaData = {
    title: "Kaivee Healthcare : Best Diagnostic Centre in Delhi-NCR",
    description:
      "Kaivee Healthcare is one of the leading diagnostic centres in Delhi NCR. We provide numerous diagnostic tests in Delhi and are NABL & NABH approved.",
    url: "/", // Replace with the canonical URL of the page
    image: "/",
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
        <meta property="og:site_name" content="Kaivee" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />
      </Head>
      <HomeLayout />
    </div>
  );
};

export default Home;
