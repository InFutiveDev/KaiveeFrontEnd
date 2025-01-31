import Footer from "components/footer";
import Navbar from "components/navbar";
import TopNavbar from "components/topnav";
import CorporateHealthLayout from "layout/corporate-health-enquiry";
import React from "react";
import Head from "next/head";

const TermsOfUse = () => {
  const metaData = {
    title: "Terms Of Use - Terms & Conditions | City X-Ray",
    description:
      "Read the terms of use and conditions for City X-Ray. Understand your rights and obligations while using our website.",
    url: "https://www.cityxrayclinic.com/terms-conditions", // Replace with the canonical URL of the page
    image:
      "https://www.cityxrayclinic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FappLogo.e921700e.png&w=750&q=100", // Replace with the actual image URL
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
      </Head>
      <div>
        {/* <section className="top_navbar">
                    <TopNavbar />
                </section>
                <Navbar /> */}
        <div className="bg-[#8DBD4D]">
          <div className="container">
            <section className="d-flex text-lg py-1">
              <div>Home</div> <span className="ml-2">{">"}</span>
              <div className="ml-2">Terms-Conditions</div>
            </section>
          </div>
        </div>
        <div className="container mt-3">
          <div>
            <h1 className="!text-[26px] font-medium text-[#D41958]">
              Terms & Conditions
            </h1>
            <p className="text-gray-500 text-[16px] mt-3">
              {`The Website Owner, including subsidiaries and affiliates ("Website" or "Website Owner" or "we" or "us" or "our") provides the information contained on the website or any of the pages comprising the website ("website") to visitors ("visitors") (cumulatively referred to as "you" or "your" hereinafter) subject to the terms and conditions set out in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of the website.`}
            </p>
          </div>
          <h2 className=" text-[24px] mt-3 font-semibold">
            Terms & Conditions
          </h2>
          <div className="mt-3">
            <ul className="list-disc ms-9 text-gray-500 text-[16px]">
              <li>
                Welcome to our website. If you continue to browse and use this
                website you are agreeing to comply with and be bound by the
                following terms and conditions of use, which together with our
                privacy policy govern Kaivee Healthcare relationship with you in
                relation to this website.
              </li>
              <li>
                {`The term 'City X-ray & Scan Clinic Pvt. Ltd.' or 'us' or 'we' refers to the owner of the website whose registered office is 5A/34, Tilak Nagar, New Delhi-110018. Our company registration number is U85110DL2002PTC117135. The term 'you' refers to the user or viewer of our website.`}
              </li>
            </ul>
          </div>
          <h2 className="text-[24px] mt-3 font-semibold">
            The use of this website is subject to the following terms of use:
          </h2>
          <div className="mt-3">
            <ul className="list-disc ms-9 text-gray-500 text-[16px]">
              <li>
                The content of the pages of this website is for your general
                information and use only. It is subject to change without
                notice.
              </li>
              <li>
                Neither we nor any third parties provide any warranty or
                guarantee as to the accuracy, timeliness, performance,
                completeness or suitability of the information and materials
                found or offered on this website for any particular purpose. You
                acknowledge that such information and materials may contain
                inaccuracies or errors and we expressly exclude liability for
                any such inaccuracies or errors to the fullest extent permitted
                by law.
              </li>
              <li>
                Your use of any information or materials on this website is
                entirely at your own risk, for which we shall not be liable. It
                shall be your own responsibility to ensure that any products,
                services or information available through this website meet your
                specific requirements.
              </li>
              <li>
                This website contains material which is owned by or licensed to
                us. This material includes, but is not limited to, the design,
                layout, look, appearance and graphics. Reproduction is
                prohibited other than in accordance with the copyright notice,
                which forms part of these terms and conditions.
              </li>
              <li>
                All trademarks reproduced in this website which are not the
                property of, or licensed to, the operator are acknowledged on
                the website.
              </li>
              <li>
                Unauthorized use of this website may give rise to a claim for
                damages and/or be a criminal offence.
              </li>
              <li>
                From time to time this website may also include links to other
                websites. These links are provided for your convenience to
                provide further information. They do not signify that we endorse
                the website(s). We have no responsibility for the content of the
                linked website(s).
              </li>
              <li>
                You may not create a link to this website from another website
                or document without the prior written consent from City X-Ray
                and Scan Clinic Pvt. Ltd.
              </li>
              <li>
                Your use of this website and any dispute arising out of such use
                of the website is subject to the laws of India or other
                regulatory authority.
              </li>
            </ul>
          </div>
          <p className="text-lg font-semibold mt-3">
            {`"We shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any transaction, on Account of the Cardholder having exceeded the pre-set limit mutually agreed by us with our acquiring bank from time to time"`}
          </p>
        </div>
      </div>
      <div className="mt-5"></div>
    </div>
  );
};

export default TermsOfUse;
