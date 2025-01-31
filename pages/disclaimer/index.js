import React from "react";
import LazyLoad from "react-lazyload";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Disclaimer - City X-Ray & Scan Clinic</title>
        <meta
          name="description"
          content="Disclaimer - Diagnostic Laboratory Services at City X-Ray"
        />
      </Head>
      <LazyLoad>
        <div className="container mt-3">
          <div>
            <h1 className="!text-3xl font-medium text-[#D41958]">Disclaimer</h1>
          </div>
          <div className="mt-3">
            <ul className="list-disc ms-9 text-gray-500 text-[16px]">
              <li className="pb-2">
                <strong className="font-semibold">
                  www.cityxrayclinic.com
                </strong>{" "}
                makes no representations or warranties of any kind, express or
                implied, as to the operation of the site, the information,
                content, services provided through or in connection with the
                website.
              </li>
              <li className="pb-2">
                The information contained herein is provided for informational
                purposes only and should not be construed as legal advice on any
                subject matter. The content of this site contains general
                information and may not reflect current legal developments,
                verdicts or settlements.
              </li>
              <li className="pb-2">
                By accessing this site, you acknowledge that this information is
                not provided in the course of an attorney-client relationship
                and is not intended to constitute legal advice. This site is not
                intended to be advertising and the author does not wish to
                represent anyone desiring representation based upon viewing this
                site in a state in which the site fails to comply with all laws
                and ethical rules.
              </li>
              <li className="pb-2">
                <strong className="font-semibold">
                  City X-Ray and Scan Clinic Pvt. Ltd.
                </strong>{" "}
                undertakes no warranties of any kind, expressed, or implied for
                services we provide as the above is only for the facilitation of
                smooth payment.
              </li>
            </ul>
          </div>
        </div>
      </LazyLoad>
    </>
  );
};

export default Index;
