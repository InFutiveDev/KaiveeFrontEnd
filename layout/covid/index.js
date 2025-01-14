import news12 from "images/news-12.jpg";
// import covid from "images/cdf.jpg";
import right from "images/right.jpg";
import Image from "next/image";
import AddToCart from "components/addToCart";
import { useState } from "react";

const CovidLayout = () => {
  const [cart, setCart] = useState({});

  const handleCartData = (cartData) => {
    setCart(cartData);
  };

  return (
    <>
      <section className="services mt-0 pt-0">
        <div className="covid">
          <figure>
            <Image
              width={"100%"}
              className="w-full covid-banner"
              src={covid?.src}
              alt="news 12"
            />
          </figure>
          {/* <BreadCrumb active="Covid" breadcrumblist={breadcrumblist} /> */}
          <div className="container covid-container pt-3 m-auto ">
            <div className="row m-auto">
              <div className="col-sm-12 text-center">
                {/* <h2 className="heading-main">Covid 19 RT PCR Test</h2> */}
                <h3>Covid 19 RT PCR Test</h3>
              </div>

              <div
                className="col-sm-12 row m-0 my-4 p-0 covid-tests-container"
                style={{ rowGap: "1.5rem" }}
              >
                {["1", "2", "3"].map((index) => (
                  <div
                    key={index}
                    className="blog-list-repeat col-md-4 col-12 col-sm-6 py-0"
                  >
                    <div className="inner-box p-0">
                      <figure>
                        <Image
                          width={"100%"}
                          height={"auto"}
                          src={news12?.src}
                          alt="news 12"
                        />
                      </figure>
                      <div
                        className="bg-white p-3 covid-test-package"
                        style={{ display: "grid", gap: "0.65rem" }}
                      >
                        <h1 className="p-0 mb-0">
                          Polymerase Chain Reaction (PCR) Tests
                        </h1>
                        <div className="covid-package-description">
                          <span>Description</span>
                          <p className="p-0 m-0">
                            Polymerase chain reaction (abbreviated PCR) is a
                            laboratory technique for rapidly producing
                            (amplifying) millions to billions of copies of a
                            specific segment of DNA,
                          </p>
                        </div>
                        <ul className="p-0 mb-0">
                          <li className="d-flex">
                            <figure className="m-0 d-flex align-items-center">
                              <Image
                                width={"20px"}
                                src={right?.src}
                                alt="news 12"
                              />
                            </figure>
                            Compelete blood count test
                          </li>
                          <li className="d-flex">
                            <figure className="m-0 d-flex align-items-center">
                              <Image
                                width={"20px"}
                                src={right?.src}
                                alt="news 12"
                              />
                            </figure>
                            Liver function test
                          </li>
                        </ul>
                        <div className="btn-box p-0 covidbutton footerbarBox">
                          <span>₹ 250</span>
                          <AddToCart
                            test={{
                              _id: "1",
                              mrp: "250",
                              specialityName:
                                "Polymerase Chain Reaction (PCR) Tests",
                            }}
                            handleCartData={handleCartData}
                            cart={cart}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-sm-12 mt-2">
                <p>
                  The determinant Covid 19 RT PCR Test can be defined as a real
                  time reverse transcription-polymerase chain reaction test, or
                  RT-PCR test, to qualitatively identify nucleic acid in both
                  the upper as well as lower respiratory specimens from
                  SARS-CoV-2. A sample is collected from individuals showing
                  symptoms of Covid-19 or asymptomatic but suspected to have
                  Covid 19. The test results in early detection of Covid 19
                  infection. Labs in Delhi are handling bulk RT PCR tests daily.
                </p>
                <p>
                  RT PCR Test for Covid 19 is a nasal swab test. It is
                  considered the most reliable and accurate test to diagnose
                  Covid-19. If the test result is negative, that means an
                  individual did not contract Covid-19 when the sample was
                  collected. In Delhi, you can do the RT-PCR Covid-19 test at a
                  certified lab.
                </p>
                <p>
                  The World Health Organization (WHO) recommends an RT PCR test
                  for Covid 19 that quickly reveals if someone is harbouring the
                  virus within 5 to 6 hours.
                </p>
                <h3 className="h5">Who Should Get Tested for Covid 19?</h3>
                <p className="list-title">Get tested only if you:</p>
                <ul className="ps-4" style={{ paddingLeft: "20px" }}>
                  <li>
                    Have symptoms of covid-19 such as dry cough, itchy throat,
                    sore throat, fever, and other difficulties
                  </li>
                  <li>
                    If you were within 6 feet of an individual for more than 15
                    minutes who is covid-19 positive
                  </li>
                </ul>
                <p>Look for the Covid-19 RT PCR test near me.</p>
                <h3 className="h5">How does RT PCR Covid-19 Test Work?</h3>
                <p className="list-title">
                  There are 3 primary steps to this test:
                </p>
                <ol style={{ paddingLeft: "20px" }}>
                  <li>
                    <strong>Sample Collection:</strong>&nbsp;Your sample is
                    collected with the help of a swab. Respiratory material
                    present in the nose is the sample used for testing covid-19.
                    A swab has a soft tip with a long and flexible stick
                    inserted into the nose. Swabs are of different types,
                    including nasal swabs for collecting samples immediately
                    within the nostrils or nasopharyngeal swabs to go further
                    inside the nasal cavity to collect the sample. Either of
                    these swabs is sufficient to collect material for the Covid
                    19 RT PCR test. Once collected, the swab would be sealed in
                    the tube and sent to the lab for testing.&nbsp;
                  </li>
                  <li>
                    <strong>Extraction:</strong>&nbsp;When the lab technologist
                    receives this sample, he performs the extraction process to
                    isolate genetic components from the specimen, which includes
                    genetic materials from viruses present.
                  </li>
                  <li>
                    <strong>RT PCR:</strong>&nbsp;Thereafter, in this step,
                    special chemicals are used in the RT PCR machine, known as
                    thermal cycler that causes a reaction to make copies of a
                    fraction of the genetic material of the SARS-CoV-2 virus. In
                    this process, a chemical produces fluorescent light if there
                    is a SARS-CoV-2 virus present in the specific sample. The
                    fluorescent is a marker detected by the RT PCR machine
                    following which special software interprets that signal as
                    positive.
                  </li>
                </ol>
                <h3 className="mt-3 h5">
                  What Does the RT PCR Covid 19 Test Result Indicate?
                </h3>
                <p>
                  If the result is positive, it indicates that the person has
                  tested positive for Covid-19. Most people generally have mild
                  symptoms. They can recover from the condition at home with
                  some medication but without classical medical care. However,
                  if symptoms worsen, individuals must contact the nearest
                  hospital immediately.
                </p>
                <p>
                  If the result is negative, it indicates that the person has
                  tested negative for Covid-19 when the sample was taken.
                  However, the same person may be infected with the virus but
                  not enough to be detected through the test. For instance, if
                  an individual has contracted the virus recently but does not
                  show any symptoms, he might have had the infection for over a
                  week before he was tested. Remember that testing negative does
                  not mean that the person is safe for the now. Anyone can be
                  exposed to this virus even after getting tested and spreading
                  the virus too.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CovidLayout;
