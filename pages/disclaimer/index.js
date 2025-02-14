import React from "react";
import LazyLoad from "react-lazyload";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Disclaimer - Kaivee Healthcare</title>
        <meta
          name="description"
          content="Disclaimer - Diagnostic Laboratory Services at Kaivee Healthcare"
        />
      </Head>
      <LazyLoad>
        <div className="container mt-3">
          <div>
            <h1 className="!text-3xl font-medium text-[#D41958]">Disclaimer</h1>
          </div>
          <div className="container mt-3">
            <div>
              <h2 className=" text-[24px] mt-3 font-semibold">
                Introduction
              </h2>
              <p className="text-gray-500 text-[18px] mt-3">
                The information provided on the Kaivee Healthcare  website, including all text, graphics, images, and other materials, is intended for informational purposes only. By accessing or using our website and services, you agree to the following disclaimer terms. If you do not agree with the terms outlined in this disclaimer, please refrain from using our website.              </p>
            </div>
            <h2 className=" text-[24px] mt-3 font-semibold">
              Medical Disclaimer
            </h2>
            <div className="mt-3">
              <ul className="list-disc ms-9 text-gray-500 text-[18px]">
                <li>
                  <p >
                    <strong>Not a Substitute for Professional Medical Advice:</strong> The content provided on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare providers with any questions you may have regarding a medical condition.
                  </p>

                </li>
                <li>
                  <p><strong>Accuracy of Information</strong>: While Kaivee Healthcare strives to provide accurate and up-to-date information, the information provided may not always reflect the most current medical standards or research. We make no representations or warranties regarding the completeness or accuracy of the information on this website.
                  </p>
                </li>
                <li>
                  <p >
                    <strong>Reliability of Test Results</strong>: We ensure the highest quality standards in our diagnostic tests and procedures. However, due to the nature of medical tests, there can be errors or variations in results. Kaivee Healthcare is not responsible for any decisions made based on test results. Always consult a healthcare professional for interpretation of diagnostic test results.                    .
                  </p>
                </li>
              </ul>
            </div>
            <h2 className=" text-[24px] mt-3 font-semibold">
              Liability Disclaimer
            </h2>
            <div className="mt-3">

              <ul className="list-disc ms-9 text-gray-500 text-[18px]">
                <li>
                  <p >
                    <strong>Limitation of Liability:</strong> Kaivee Healthcare will not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use of, or inability to use, this website or any services offered by us. This includes, without limitation, any errors or omissions in the content, loss of data, or loss of income or profits.                    .
                  </p>

                </li>
                <li>
                  <p><strong>Third-Party Links:</strong>: Our website may contain links to third-party websites for informational purposes. Kaivee Healthcare does not control or endorse these external websites, and we are not responsible for their content, practices, or privacy policies. Use of any third-party links is at your own risk..</p>
                </li>
              </ul>
            </div>
            <h2 className="text-[24px] mt-3 font-semibold">
              No Guarantee of Results
            </h2>
            <div className="mt-3">
              <p className="text-gray-500 text-[18px] mt-3">
                Kaivee Healthcare does not guarantee specific results from the use of our services. Every individual’s health and response to diagnostic services vary, and we do not guarantee that our services will achieve any particular health outcome.
              </p>
              <p className="text-gray-500 text-[18px] mt-3">
                The effectiveness of our services depends on several factors, including individual health conditions, adherence to prescribed procedures, and follow-up care.
              </p>
            </div>
            <h2 className="text-[24px] mt-3 font-semibold">
              Changes to Content
            </h2>
            <div className="mt-3">
              <p className="text-gray-500 text-[18px] mt-3">
                We reserve the right to modify, update, or remove any content on this website at our discretion. The information provided is subject to change without notice.
              </p>
              <p className="text-gray-500 text-[18px] mt-3">
                We also reserve the right to update this disclaimer page at any time. Any changes will be reflected on this page with an updated date. Please review this page periodically to stay informed about the latest terms.              </p>
            </div>
            <h2 className="text-[24px] mt-3 font-semibold">
              Governing Law

            </h2>
            <div className="mt-3">
              <p className="text-gray-500 text-[18px] mt-3">
                This disclaimer shall be governed by and construed in accordance with the laws of India. Any disputes arising from the use of our website or services shall be resolved in the courts of India.              </p>
            </div>




            <h2 className="text-[24px] mt-3 font-semibold">
              Contact Us

            </h2>
            <div className="mt-3">
              <p className="text-gray-500 text-[18px] mt-3">
                If you have any questions regarding this Disclaimer or need further clarification, please feel free to contact us at:
                <p>📧<strong> Email</strong> : info@kaiveehealthcare.com</p>
                <p>📞<strong> Phone</strong> : 084483 38674</p>
              </p>
            </div>
            <div>

            </div>
          </div>
          <div className="mt-5"></div>
        </div>
      </LazyLoad>
    </>
  );
};

export default Index;
