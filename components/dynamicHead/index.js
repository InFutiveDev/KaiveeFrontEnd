import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const DynamicHead = ({ scritpChat = false }) => {
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
      {/* <title>{dynamicMetaTitle?.title || ""}</title>
      <meta name="description" content={dynamicMetaTitle?.description || ""} /> */}

      {/* <!-- Google Console --> */}
      <meta
        name="google-site-verification"
        content="W02fYyVHnRB50LdhbjZgjgu4iKiYm8HWgTXbqW5sW1c"
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="canonical"
        href={`https://www.cityxrayclinic.com${router?.asPath}`}
      ></link>
      {/* <!-- Google Analytics tag (gtag.js) --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VBSMY8PWWH"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N78CGTH');
              `,
        }}
      />
      {/* Google Tag Manager script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "DiagnosticLab",
            "name": "City X-Ray & Scan Clinic Pvt. Ltd.",
            "url": "https://www.cityxrayclinic.com/",
            "logo": "https://www.cityxrayclinic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FappLogo.e921700e.png&w=750&q=100",
            "alternateName": "City X-Ray",
            "sameAs": [
              "https://www.facebook.com/cityxrayclinic/",
              "https://twitter.com/CityXrayClinic",
              "https://www.instagram.com/city_xray/",
              "https://www.youtube.com/c/Cityxrayclinic/",
              "https://www.linkedin.com/company/city-x-ray-scan-clinic/"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "011-2000-2000",
                "contactType": "customer service",
                "email": "lft@cityxrayclinic.com",
                "areaServed": "IN",
                "availableLanguage": [
                  "en",
                  "hi"
                ]
              }
            ]
          }
              `,
        }}
      />
      {!scritpChat ? <script defer src="/chatScript.js" async></script> : ""}
      <script src="/googleScript.js" async></script>
    </Head>
  );
};

export default DynamicHead;
