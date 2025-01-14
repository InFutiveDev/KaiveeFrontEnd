import Image from "next/image";
import doctor1 from "../../assets/images/doctor1.svg";
import medicalmask from "../../assets/images/medicalmask.svg";
import hospitalbed from "../../assets/images/hospitalbed.svg";
import trophy1 from "../../assets/images/trophy1.svg";

const AboutMe = () => {
  return (
    <>
      <section className="aboutme">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="about-content-sec">
                <div className="sec-title offer">
                  <h2>COMPANY OVERVIEW</h2>
                  <p>
                    Star imaging &amp; path lab's mission is to use world class
                    technology to give in depth &amp; latest studies for better
                    diagnostic approach. Our continuous effort is to create
                    healthy community by bringing health awareness and moving
                    from reactive to preventive health care and early detection
                    for all age groups and gender. In past years, we have
                    ensured world class diagnostics to Delhi/NCR and our vision
                    is to raise our own bar by continuous efforts to bring
                    service excellence, patient care and latest technology at
                    affordable prices for all.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="about_image-sec">
                <Image
                  width={450}
                  height={450}
                  src="https://www.cityxrayclinic.in/assets/img/star-imaging-path-lab-bijwasan-delhi-gtf4.jpg"
                  alt="logo"
                  // layout='responsive'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="boxStatistics">
          <div className="frame-wrapper">
            <div className="frame">
              <h2>Key Statistics</h2>
              <div className="div">
                <div className="frame-2">
                  <Image src={doctor1} alt="award1"></Image>
                  <div className="frame-3">
                    <div className="how-it-works">200</div>
                    <div className="how-it-works-wrapper">
                      <div className="h-how-it-works">Doctors</div>
                    </div>
                  </div>
                </div>

                <div className="frame-2">
                  <Image src={medicalmask} alt="award1"></Image>
                  <div className="frame-3">
                    <div className="how-it-works">29000+</div>
                    <div className="how-it-works-wrapper">
                      <div className="h-how-it-works">Happy Patients</div>
                    </div>
                  </div>
                </div>

                <div className="frame-2">
                  <Image src={hospitalbed} alt="award1"></Image>

                  <div className="frame-3">
                    <div className="how-it-works">1000</div>
                    <div className="how-it-works-wrapper">
                      <div className="h-how-it-works">Medical Beds</div>
                    </div>
                  </div>
                </div>

                <div className="frame-2">
                  <Image src={trophy1} alt="award1"></Image>
                  <div className="frame-3">
                    <div className="how-it-works">1000</div>
                    <div className="how-it-works-wrapper">
                      <div className="h-how-it-works">Winning Awards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
