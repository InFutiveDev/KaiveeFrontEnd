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
        {/* Breadcrumb Section */}
        <div className="bg-[#8DBD4D] py-1">
          <div className="container mx-auto px-4">
            <section className="flex items-center text-lg">
              <div>Home</div> <span className="mx-2">{">"}</span>
              <div>Disclaimer</div>
            </section>
          </div>
        </div>

        {/* Main Disclaimer Content */}
        <div className="container mx-auto px-4 mt-3">
          <h1 className="text-3xl font-medium text-[#D41958]">Disclaimer</h1>

          {/* Section: Introduction */}
          <section className="mt-3">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="text-gray-500 text-lg mt-2">
              The information provided on the Kaivee Healthcare website, including all text, graphics, images, and other materials, is intended for informational purposes only...
            </p>
          </section>

          {/* Section: Medical Disclaimer */}
          <section className="mt-5">
            <h2 className="text-2xl font-semibold">Medical Disclaimer</h2>
            <ul className="list-disc pl-6 text-gray-500 text-lg mt-3 space-y-3">
              <li>
                <strong>Not a Substitute for Professional Medical Advice:</strong> The content provided on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
              </li>
              <li>
                <strong>Accuracy of Information:</strong> While Kaivee Healthcare strives to provide accurate and up-to-date information, the information provided may not always reflect the most current medical standards or research.
              </li>
              <li>
                <strong>Reliability of Test Results:</strong> We ensure high-quality standards in our diagnostic tests, but variations in results can occur.
              </li>
            </ul>
          </section>

          {/* Section: Liability Disclaimer */}
          <section className="mt-5">
            <h2 className="text-2xl font-semibold">Liability Disclaimer</h2>
            <ul className="list-disc pl-6 text-gray-500 text-lg mt-3 space-y-3">
              <li>
                <strong>Limitation of Liability:</strong> Kaivee Healthcare is not liable for any direct, indirect, incidental, or consequential damages arising from the use of this website.
              </li>
              <li>
                <strong>Third-Party Links:</strong> We may include links to third-party websites. However, we do not control or endorse these external sites.
              </li>
            </ul>
          </section>

          {/* Section: No Guarantee of Results */}
          <section className="mt-5">
            <h2 className="text-2xl font-semibold">No Guarantee of Results</h2>
            <p className="text-gray-500 text-lg mt-3">
              Kaivee Healthcare does not guarantee specific results from the use of our services.
            </p>
          </section>

          {/* Section: Changes to Content */}
          <section className="mt-5">
            <h2 className="text-2xl font-semibold">Changes to Content</h2>
            <p className="text-gray-500 text-lg mt-3">
              We reserve the right to modify or remove any content on this website at our discretion.
            </p>
          </section>

          {/* Section: Governing Law */}
          <section className="mt-5">
            <h2 className="text-2xl font-semibold">Governing Law</h2>
            <p className="text-gray-500 text-lg mt-3">
              This disclaimer is governed by and construed in accordance with the laws of India.
            </p>
          </section>

          {/* Section: Contact Us */}
          <section className="mt-5">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="text-gray-500 text-lg mt-3">
              If you have any questions regarding this Disclaimer, feel free to contact us:
            </p>
            <p className="text-gray-500 text-lg mt-2">📧 <strong>Email:</strong> info@kaiveehealthcare.com</p>
            <p className="text-gray-500 text-lg mt-2">📞 <strong>Phone:</strong> 084483 38674</p>
          </section>
        </div>
      </LazyLoad>
    </>
  );
};

export default Index;
