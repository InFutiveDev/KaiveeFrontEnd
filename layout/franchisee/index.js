import React from "react";
import FranchiseeBanner from "./FranchiseeBanner";
import WhyChoose from "components/WhyChoose";
// why choose
import ImageTwo from "assets/images/Finalimg/Why Choose Us/10M+ Happy Patients.webp";
import ImageThree from "assets/images/Finalimg/Why Choose Us/30 Years of Excellence in Diagnostic Health Care.webp";
import ImageFive from "assets/images/Finalimg/Why Choose Us/Affordable.webp";
import ImageSix from "assets/images/Finalimg/Why Choose Us/Fast & Accurate Results.webp";
import ImageSeven from "assets/images/Finalimg/Why Choose Us/Free Home Sample Collection.webp";
import ImageNine from "assets/images/Finalimg/Why Choose Us/Large Menu of Tests Available.webp";
import ImageEight from "assets/images/Finalimg/Why Choose Us/NABL & NABH Certified Centre.webp";
import ImageOne from "assets/images/Finalimg/Why Choose Us/Team of Experienced Doctor & Staffs.webp";
import ImageFour from "assets/images/Finalimg/Why Choose Us/World Class Technology.webp";
import InquiryForm from "components/inquiryForm";
import FranchiseeForm from "./FranchiseeForm";

const FranchiseeLayout = () => {
  return (
    <div>
      <section>
        <div>
          <FranchiseeBanner />
        </div>
      </section>
      <div className="container py-[70px]">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-8">
          <div className="lg:col-span-2">
            <div>
              <h1 className="text-[18px] lg:text-[26px] md:text-[22x] text-black  font-semibold font-source-pro mb-[20px]">
                Become a Clinic Franchise
              </h1>
              {/* <p className="text-black font-semibold lg:text-[32px] text-lg mb-[20px]"></p> */}
              <div className="flex flex-col gap-y-2 mb-[35px]">
                <p className="text-secondary lg:text-[16px] text-[14px]">
                  The medical diagnostics market in India is expected to grow at
                  a steady rate of 15% CAGR. Clinic has been one of the renowned
                  private Diagnostic set up in Delhi since last over two
                  decades. It covers a complete range of diagnostic
                  investigations for Pathology, Radiology, Cardiology &
                  Neurology departments – all under one roof.
                </p>
                <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro my-[10px]">
                  Why join hands with us?
                </h2>
                <p className="text-black font-semibold lg:text-[26px] text-lg "></p>
                <div className="text-secondary lg:text-[16px] text-[14px]">
                  <ul className="list-disc ml-4">
                    <li>
                      Pride of associating with us, an established and credible
                      brand in healthcare industry.
                    </li>
                    <li>
                      Franchisee gets all support and encouragement to grow with
                      the Organization.
                    </li>
                    <li>A trusted name of world-class technology.</li>
                    <li>
                      Managed by professionals with years of experience oversee
                      the chain
                    </li>
                  </ul>
                </div>
                <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro my-[10px]">
                  Who is an ideal franchisee of Diagnostics?
                </h2>

                <div className="text-secondary lg:text-[16px] text-[14px]">
                  <ul className="list-disc ml-4">
                    <li>
                      Preferred phlebotomist, doctors, and medical experienced
                      background healthcare professionals.
                    </li>
                    <li>
                      He/She who can join as a partner, commit time to grow the
                      business with the goal of becoming a successful
                      entrepreneur.
                    </li>
                    <li>
                      Approx having 100-250 sq. ft. area on Ground Floor in
                      Delhi or NCR whether leased, rented or owned with toilet
                      facility.
                    </li>
                    <li>
                      Minimum investment required of Rs. 50,000 to Rs. 2Lakhs
                    </li>
                    <li>Franchise/Brand Fee: Rs. 50,000 Security deposit.</li>
                  </ul>
                </div>
                <h2 className="text-[16px] lg:text-[24px] md:text-[18x]  font-semibold font-source-pro my-[10px]">
                  What we offers?
                </h2>

                <div className="text-secondary lg:text-[16px] text-[14px]">
                  <ul className="list-disc ml-4">
                    <li>
                      Franchisee business model with multiple options for
                      earning
                    </li>
                    <li>
                      Supporting services including logistics, consumables,
                      software licenses, and marketing support.
                    </li>
                    <li>
                      Wide range of tests menu by us, from routine to
                      specialized tests.
                    </li>
                    <li>
                      Marketing support through leaflets, camps, health checks,
                      RWA initiatives and advertising.
                    </li>
                    <li>
                      Franchisee customer care support– complaints and
                      grievances handling
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="h-min  sticky lg:top-[197px] xl:top-[161px]">
            <FranchiseeForm />
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto lg:px-4 px-2 py-8">
          <WhyChoose data={data} />
        </div>
      </div>
    </div>
  );
};
const data = [
  {
    title: "Team of Experienced <br /> Doctors & Staffs",
    image: ImageOne,
  },
  {
    title: "10M+ Happy Patients",
    image: ImageTwo,
  },
  {
    title: "31 Year of Excellence in <br /> Diagnostic Healthcare",
    image: ImageThree,
  },
  {
    title: "World Class Technology",
    image: ImageFour,
  },
  {
    title: "Fast & Accurate Results",
    image: ImageSix,
  },
  {
    title: "Affordable",
    image: ImageFive,
  },
  {
    title: "Free Home Sample <br /> Collection",
    image: ImageSeven,
  },
  {
    title: "NABL & NABH Certified <br /> Centre",
    image: ImageEight,
  },
  {
    title: "Large Menu of Tests <br /> Available ",
    image: ImageNine,
  },
];

export default FranchiseeLayout;
