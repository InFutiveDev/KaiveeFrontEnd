import React, { useEffect, useState } from "react";
import CovidVaccnationBannerImg from "assets/images/covid/13104643_5163690 1.png";
import InquiryForm from "components/inquiryForm";
import { CallBlackImg } from "assets/images/SvgImage";
import { CallYellowImg } from "assets/images/SvgImage";
import { ApproveSVG } from "assets/images/SvgImage";
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
import BreadCrumb from "components/breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_LAB_DETAIL } from "redux/actions/lab";
import Link from "next/link";
import Image from "next/image";
import LazyLoad from "react-lazyload";
import { useRouter } from "next/router";
import CovidVaccinationBanner from "./CovidVaccinationBanner";

const breadcrumblist = [
  { name: "Home", path: "/" },
  { name: "Covid 19", path: "/" },
];
const CovidVaccinationLayout = () => {
  const { lab, auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedBranch, setSelectedBranch] = useState("{}");
  console.log("auth-->>", auth);

  const handleRedirect = () => {
    if (auth.logedInUser) {
      router.push("/dashboard/book-an-appointment");
    } else {
      dispatch({ type: "LOGIN_MODAL_OPEN", data: true });
    }
  };
  useEffect(() => {
    dispatch(GET_ALL_LAB_DETAIL());
  }, []);

  return (
    <LazyLoad>
      {/* className="relative overflow-hidden  bg-[#FFE5B2]" */}
      <section>
        <div>
          <CovidVaccinationBanner />
        </div>
        {/* <div className="container">
          <BreadCrumb
            active="COVID-19 Vaccination"
            breadcrumblist={breadcrumblist}
          />
          <div className="flex justify-center">
            <Image
              loading="eager"
              width={450}
              height={450}
              className=" h-56 "
              src={CovidVaccnationBannerImg.src}
            />
          </div>
        </div> */}
      </section>
      <div className="container py-[70px]">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <div className="lg:col-span-2">
            <div className="shadow-md p-[24px]">
              <p className="lg:text-[32px] text-lg font-semibold  mb-[10px] font-source-pro">
                How Do I Schedule A COVID-19 Vaccine Appointment?
              </p>
              <ul className="pl-4 text-secondary  mb-[6px] text-[14px] font-normal">
                <li className="list-disc pt-2">
                  {" "}
                  {`Is it your first dose? Everyone ages 6 months and up can now get the COVID-19
vaccine. The Pfizer and Moderna vaccines are approved for emergency use by
the FDA and CDC for those ages 6 months to 15 years. It's fully approved for
those ages 16 and older. The Moderna vaccine is fully approved for those 18 and
older, and the Johnson & Johnson vaccine is authorized for those 18 and older.`}
                </li>
                <li className="list-disc pt-2">
                  Do you need a booster? Studies show that COVID-19 vaccine
                  protection decreases over time. Boosters offer extra
                  protection, especially against severe illness that can lead to
                  a hospital stay or even dying from the virus.
                </li>
                <li className="list-disc pt-2">{`Here is when the FDA and CDC recommend boosters, based on your age and
which vaccine(s) you've already received:`}</li>
                <li className="list-disc pt-2">
                  Ages 5 to 11 can get a booster dose of the Pfizer vaccine at
                  least five months after the completion of their initial
                  series. Immune-compromised children can get a booster (fourth
                  dose).
                </li>
                <li className="list-disc pt-2">{`Ages 12+ can get a booster dose of the Pfizer vaccine at least five months after
their second dose. If they're immune-compromised, they can get a second
booster.`}</li>
                <li className="list-disc pt-2">{`Ages 18+ can get a booster dose of either the Pfizer or Moderna vaccine at least
five months after their second dose. If they're immune-compromised, they can
get a second booster at least four months after their first booster. Those who got
the one-dose Johnson & Johnson vaccine can get a booster of any COVID vaccine
at least two months after their first dose.`}</li>
                <li className="list-disc pt-2">
                  Ages 50+ can get a second booster of the Pfizer or Moderna
                  vaccine at least four months after their first booster.
                </li>
                <li className="list-disc pt-2">
                  You can receive a booster dose of the Pfizer vaccine at
                  Cleveland Clinic. We are not currently offering the Moderna or
                  Johnson & Johnson vaccines. Pfizer booster doses can be
                  scheduled five months after your second dose.
                </li>
                <li className="list-disc pt-2">
                  If you received your first two doses of a COVID-19 vaccine not
                  approved in the U.S., you can schedule a Pfizer third dose or
                  booster dose with us
                </li>
                <li className="list-disc pt-2">
                  Are you immunocompromised? The FDA and CDC have approved
                  additional doses of the COVID-19 vaccine for certain people
                  with compromised immune systems.
                </li>
                <li className="list-disc pt-2">
                  {" "}
                  Adults ages 18 and over who received a three-dose series of
                  the Moderna or Pfizer vaccine may receive a booster (fourth
                  dose) of the vaccine at least three months after their third
                  dose.
                </li>
                <li className="list-disc pt-2">
                  Adults who received the one-dose Johnson & Johnson vaccine
                  should receive a second dose of either the Moderna or Pfizer
                  vaccine at least four weeks after their initial dose. A
                  booster dose (third dose) of the Moderna or Pfizer vaccine is
                  recommended at least two months after the second dose.
                </li>
                <li className="list-disc pt-2">
                  Children ages 12 to 17 who received three doses of the Pfizer
                  vaccine may receive a fourth dose of the vaccine at least
                  three months after their third dose
                </li>
                <li className="list-disc pt-2">
                  Children ages 5 to 11 can receive a fourth dose of the Pfizer
                  vaccine at least five months after their third dose.
                </li>
                <li className="list-disc pt-2">{`Extra doses can provide added protection from severe illness or death from
COVID-19 in patients who may have a weakened response to vaccination due to
certain medical conditions or medications. If you're eligible for additional doses
and have questions, we encourage you to speak with your healthcare provider`}</li>
                <li className="list-disc pt-2">
                  Pfizer third doses for those who are immunocompromised can be
                  scheduled 28 days after your second dose.
                </li>
              </ul>
            </div>
          </div>
          <div className="h-min  sticky lg:top-[197px] xl:top-[161px]">
            <div className="shadow-md bg-white rounded-[24px] p-[24px] border border-[#E4E4E7]">
              <button
                onClick={() => handleRedirect()}
                className=" text-orange bg-[#FEF6E6] rounded-2xl w-full py-[8px] mb-[20px] font-source-pro text-[20px] font-semibold"
              >
                Book an Appointment
              </button>
              <p className="text-black font-semibold text-[20px] font-source-3 ">
                Nearest branch
              </p>
              <div className="form-group">
                <div className="mt-[6px]">
                  <select
                    value={selectedBranch}
                    className="border rounded-lg p-2 w-full focus:outline-none text-[14px] font-poppins font-normal "
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    placeholder="Select City"
                  >
                    <option value={""}>Select Branch</option>
                    {lab?.data?.data?.LabData.map((item, index) => (
                      <option key={index} value={JSON.stringify(item)}>
                        {item.branch_Name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <p className="text-[14px]">
                {selectedBranch
                  ? JSON.parse(selectedBranch)?.branch_address
                  : ""}
              </p>
              <p className="text-secondary text-[14px]">
                {/* This package/Test is available on Mon,Wed beetween{" "} */}
              </p>
              <div className="flex gap-3 my-[12px]">
                <ApproveSVG />
                <span className="text-black text-[16px] font-medium">
                  Home Collection Available
                </span>
              </div>
              <div className="flex  items-center gap-5 my-[6px]">
                <div>
                  <span className="text-orange font-semibold text-[24px] ">
                    ₹600
                  </span>
                  <span className="text-secondary font-medium text-[16px] ml-[10px]">
                    <del>₹160</del>
                  </span>
                </div>

                <div>
                  <span className="text-[#005E54] font-normal text-[18px]">
                    50% off
                  </span>
                </div>
              </div>
              <div className=" flex gap-x-2 my-[6px] ">
                <button
                  // onClick={handleAddToCart}
                  className="w-full bg-orange text-white rounded px-[12px] py-[8px] font-medium text-[14px]"
                >
                  Add To Cart
                </button>

                <button className="w-full border-[1px] border-orange text-orange bg-white rounded px-[12px] py-[8px] text-[14px] font-medium">
                  Check out
                </button>
              </div>
              <div className="mt-[20px]">
                <Link
                  href="tel:011-4725-2000"
                  className=" flex gap-2 justify-center items-center text-orange bg-[#FEF6E6] rounded-2xl w-full py-[8px]"
                >
                  <CallYellowImg />
                  Call to Book
                </Link>
              </div>
            </div>
            <div className="mt-[30px]">
              <InquiryForm />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="background-image-covid-vaccination flex justify-center items-center ">
          <div className="flex px-[30px] justify-center items-center flex-col gap-4">
            <p className="text-white text-center lg:text-[40px] text:[26px] font-semibold font-source-pro ">
              Your Health Our Happiness
            </p>
            <p className="text-white text-center lg:text-[20px] text-[16px] font-normal">
              Didn't find what you were looking for! Click to call us now.
            </p>
            <div className="flex gap-2">
              <Link
                href="tel:011-2000-2000"
                className="flex gap-x-1 md:gap-x-2 justify-center items-center text-blacke font-medium bg-orange rounded py-[10px] lg:px-[24px] px-[10px] lg:text-[18px] text-[14px]"
              >
                <CallBlackImg />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container py-[70px]">
          <p className="text-black font-semibold lg:text-[32px] text-lg mb-[20px] font-source-pro ">
            How Do I Schedule A COVID-19 Vaccine Appointment?
          </p>
          <div className="flex flex-col gap-y-2">
            <span className="text-secondary lg:text-[18px] text-[14px] font-normal">
              Is it your first dose? Everyone ages 6 months and up can now get
              the COVID-19 vaccine. The Pfizer and Moderna vaccines are approved
              for emergency use by the FDA and CDC for those ages 6 months to 15
              years. It's fully approved for those ages 16 and older. The
              Moderna vaccine is fully approved for those 18 and older, and the
              Johnson & Johnson vaccine is authorized for those 18 and older.
            </span>
            <span className="text-secondary lg:text-[18px] text-[14px] font-normal">
              Do you need a booster? Studies show that COVID-19 vaccine
              protection decreases over time. Boosters offer extra protection,
              especially against severe illness that can lead to a hospital stay
              or even dying from the virus.
            </span>
            <span className="text-secondary lg:text-[18px] text-[14px] font-normal">
              Here is when the FDA and CDC recommend boosters, based on your age
              and which vaccine(s) you've already received:
            </span>
            <span className="text-secondary lg:text-[18px] text-[14px] font-normal">
              Ages 5 to 11 can get a booster dose of the Pfizer vaccine at least
              five months after the completion of their initial series.
              Immune-compromised children can get a booster (fourth dose).
            </span>
            <span className="text-secondary lg:text-[18px] text-[14px] font-normal">
              Ages 18+ can get a booster dose of either the Pfizer or Moderna
              vaccine at least five months after their second dose. If they're
              immune-compromised, they can get a second booster at least four
              months after their first booster. Those who got the one-dose
              Johnson & Johnson vaccine can get a booster of any COVID vaccine
              at least two months after their first dose.
            </span>{" "}
            <span className="text-secondary lg:text-[18px] text-[14px] font-normal">
              You can receive a booster dose of the Pfizer vaccine at Cleveland
              Clinic. We are not currently offering the Moderna or Johnson &
              Johnson vaccines. Pfizer booster doses can be scheduled five
              months after your second dose.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="p-2">
          <WhyChoose data={data} />
        </div>
      </div>
    </LazyLoad>
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
export default CovidVaccinationLayout;
