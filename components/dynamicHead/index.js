import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const DynamicHead = ({ scritpChat = false, favicon = "/favicon.ico" }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const dynamicMetaTitle = useSelector(
    (state) => state?.manageCommonVarReducer?.dynamicMetaTitle
  );

  useMemo(() => {
    dispatch({ type: "GET_DYNAMIC_META_TITLE_DES", data: {} });
  }, [router?.pathname]);

  return (
    <Head>
      {/* Meta tags for SEO */}
      {/* <meta name="google-site-verification" content="W02fYyVHnRB50LdhbjZgjgu4iKiYm8HWgTXbqW5sW1c" /> */}
      
      {/* Dynamic Favicon */}
      <link rel="icon" href={favicon} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`https://www.dummywebsite.com${router?.asPath}`} />
      
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/"></script>
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N78CGTH');
          `,
        }}
      /> */}
      
      {/* Structured Data for SEO (Dummy Data) */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dummy Website",
            "url": "https://www.dummywebsite.com",
            "logo": "https://www.dummywebsite.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-123-4567",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://www.facebook.com/dummywebsite",
              "https://twitter.com/dummywebsite",
              "https://www.instagram.com/dummywebsite"
            ]
          }
          `,
        }}
      /> */}
      
      {/* Chat Scripts */}
      {!scritpChat ? <script defer src="/chatScript.js" async></script> : ""}
      <script src="/googleScript.js" async></script>
    </Head>
  );
};

export default DynamicHead;
