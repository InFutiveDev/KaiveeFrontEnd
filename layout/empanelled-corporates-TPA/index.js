import React from "react";
import EmpanelledCorporatesBanner from "./EmpanelledCorporatesBanner";
import SideImg from "assets/images/empanelled-corporates/qqquad 1.png";
import NorthernRailway from "assets/images/empanelled-corporates/northern-railway-removebg-preview 1.png";
import Ireda from "assets/images/empanelled-corporates/erada-removebg-preview 1.png";
import IndianOil from "assets/images/empanelled-corporates/01-Indian-Oil-Corporation-Limited-removebg-preview 1.png";
import Line from "assets/images/empanelled-corporates/Line 304.png";
import CorporateImg from "assets/images/empanelled-corporates/Rectangle 17983.png";

const EmpanelledCorporatesLayout = () => {
  return (
    <>
      <section className="relative overflow-hidden sliders banner_slider_wrap_empanelled">
        <div className="web-view relative flexbox container">
          <EmpanelledCorporatesBanner />
        </div>
        <div className="absolute top-0 left-0">
          <img src={SideImg.src} />
        </div>
      </section>
      <div className="container py-[70px]">
        <div className="text-3xl font-semibold">
          Empanelled Corporate/TPA (Third Party Administrator) – The Backbone of
          Efficient Healthcare Management
        </div>
        <span className="text-secondary">
          Empanelled Corporate and TPAs play a pivotal role in the healthcare
          industry, facilitating the seamless and effective management of
          medical services. These entities act as intermediaries, bridging the
          gap between healthcare providers, such as hospitals and clinics, and
          insurance companies or corporations offering healthcare benefits to
          their employees or beneficiaries.
        </span>

        <div className="text-secondary pt-2">
          The concept of empanelment refers to the process of formally enlisting
          healthcare providers, such as hospitals, diagnostic centers, and
          physicians, within the network of a TPA, ensuring that a pre-arranged
          and mutually beneficial relationship exists. This relationship is
          essential for a myriad of reasons:
        </div>
        <ul className="text-secondary ml-3">
          <li>
            <samp className="font-semibold text-black">
              1. Streamlined Healthcare Services:
            </samp>{" "}
            Empanelled corporate/TPA networks streamline healthcare delivery.
            Patients can access quality healthcare services within the network,
            and healthcare providers are assured of a regular influx of patients
            through insurance partnerships.
          </li>
          <li>
            <samp className="font-semibold text-black">
              2. Cost-Efficiency:{" "}
            </samp>{" "}
            By negotiating favorable terms and pricing with empanelled
            healthcare providers, TPAs can help reduce healthcare costs for both
            the insurer and the beneficiaries. This cost efficiency is crucial
            in a time when healthcare expenses continue to rise.
          </li>
          <li>
            <samp className="font-semibold text-black">
              3. Efficient Claims Management:{" "}
            </samp>{" "}
            TPAs are responsible for processing insurance claims on behalf of
            the insurance company or corporate client. Empanelled healthcare
            providers ensure that claims are processed promptly and accurately,
            minimizing disputes and delays.
          </li>
          <li>
            <samp className="font-semibold text-black">
              4. Quality Control:{" "}
            </samp>{" "}
            Empanelment typically involves a thorough vetting process, ensuring
            that only high-quality healthcare providers are included in the
            network. This helps maintain and improve healthcare standards.
          </li>
          <li>
            <samp className="font-semibold text-black">
              5. Choice and Accessibility:
            </samp>{" "}
            : Empanelment networks often offer beneficiaries a wide range of
            healthcare providers to choose from, enhancing accessibility and
            choice for medical care.
          </li>
          <li>
            <samp className="font-semibold text-black">
              6. Administrative Ease:{" "}
            </samp>{" "}
            Corporations offering healthcare benefits can outsource the
            cumbersome administrative tasks of managing healthcare claims and
            benefits to TPAs, allowing them to focus on their core business
            operations.
          </li>
        </ul>
        <div className="text-secondary pt-2">
          In conclusion, empanelled corporate/TPA networks are indispensable in
          modern healthcare management. They facilitate the efficient and
          cost-effective delivery of healthcare services, benefiting both
          insurers and beneficiaries. By ensuring quality, choice, and
          accessibility, they act as the backbone of healthcare management,
          allowing corporations to provide valuable health benefits while
          reducing administrative burdens. In an era where healthcare is a
          critical concern for individuals and organizations alike, empanelled
          corporate/TPA networks play a pivotal role in enhancing the overall
          healthcare experience.
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="container py-[70px]">
          <div>
            <p className="text-lg font-semibold">
              PSU & Government Empanelment
            </p>
            <div className="rounded-xl shadow-md bg-white p-[42px]">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
                <div className=" shadow-sm rounded-xl border-[1px] border-[#FFE9BC] p-[24px]">
                  <div className=" h-[180px] items-center flex justify-center py-[15px] bg-[#EFEFF0] rounded-md">
                    <img src={NorthernRailway.src} />
                  </div>
                  <p className="mt-[10px] text-lg text-center font-semibold">
                    Northern Railway
                  </p>
                </div>
                <div className="shadow-sm  rounded-xl border-[1px] border-[#FFE9BC] p-[24px]">
                  <div className=" h-[180px] items-center flex justify-center py-[15px] bg-[#EFEFF0] rounded-md">
                    <img src={Ireda.src} />
                  </div>
                  <p className="mt-[10px] text-lg text-center font-semibold">
                    Ireda
                  </p>
                </div>
                <div className="shadow-sm  rounded-xl border-[1px] border-[#FFE9BC] p-[24px]">
                  <div className=" h-[180px] items-center flex justify-center py-[15px] bg-[#EFEFF0] rounded-md">
                    <img src={IndianOil.src} />
                  </div>
                  <p className="mt-[10px] text-lg text-center font-semibold">
                    Indial Oil
                  </p>
                </div>
              </div>
              <div className="my-[30px]">
                <img src={Line.src} />
              </div>
              <div className="flex justify-center">
                <ol className="list-decimal flex flex-col gap-y-2">
                  <li className="text-secondary">
                    Name of PSU & Government Empanelment
                  </li>
                  <li className="text-secondary">
                    Name of PSU & Government Empanelment
                  </li>
                  <li className="text-secondary">
                    Name of PSU & Government Empanelment
                  </li>
                </ol>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="container py-[70px]">
          <div>
            <p className="text-lg font-semibold">
              CORPORATE, TPA & INSURANCE PANEL
            </p>
            <div className="rounded-xl shadow-md bg-white p-[42px]">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
                <div className=" shadow-sm rounded-xl border-[1px] border-[#FFE9BC] p-[24px]">
                  <div className=" h-[180px] items-center flex justify-center py-[15px] bg-[#EFEFF0] rounded-md">
                    <img src={CorporateImg.src} />
                  </div>
                  <p className="mt-[10px] text-lg text-center font-semibold">
                    Name of Corporate, TPA & Insurance Panel
                  </p>
                </div>
                <div className="shadow-sm  rounded-xl border-[1px] border-[#FFE9BC] p-[24px]">
                  <div className=" h-[180px] items-center flex justify-center py-[15px] bg-[#EFEFF0] rounded-md">
                    <img src={CorporateImg.src} />
                  </div>
                  <p className="mt-[10px] text-lg text-center font-semibold">
                    Name of Corporate, TPA & Insurance Panel
                  </p>
                </div>
                <div className="shadow-sm  rounded-xl border-[1px] border-[#FFE9BC] p-[24px]">
                  <div className=" h-[180px] items-center flex justify-center py-[15px] bg-[#EFEFF0] rounded-md">
                    <img src={CorporateImg.src} />
                  </div>
                  <p className="mt-[10px] text-lg text-center font-semibold">
                    Name of Corporate, TPA & Insurance Panel
                  </p>
                </div>
              </div>
              <div className="my-[30px]">
                <img src={Line.src} />
              </div>
              <div className="flex justify-center">
                <ol className="list-decimal flex flex-col gap-y-2">
                  <li className="text-secondary">
                    Name of PSU & Government Empanelment
                  </li>
                  <li className="text-secondary">
                    Name of PSU & Government Empanelment
                  </li>
                  <li className="text-secondary">
                    Name of PSU & Government Empanelment
                  </li>
                </ol>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpanelledCorporatesLayout;
