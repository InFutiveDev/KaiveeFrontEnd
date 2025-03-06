import OurTeamLayout from "layout/about/OurTeam";
import Head from "next/head";

const OurTeam = () => {
  const metaData = {
    title: "Our Doctors - Kaivee Heallthcare",
    description: "Meet Our Expert Team at Kaivee Heallthcare",
    url: "https://www.kaiveehealthcare.com/", // Replace with the canonical URL of the page
    image:
      "https://www.kaiveehealthcare.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FappLogo.eaef1c84.png&w=384&q=100", // Replace with the actual image URL
  };

  return (
    <div>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="robots" content="noindex" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:image" content={metaData.image} />
        <meta property="og:site_name" content="Kaivee" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@kaivee" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />
      </Head>
      <OurTeamLayout />
    </div>
  );
};

export default OurTeam;
