import React, { useEffect, useState } from "react";
import CovidRTPCRBanner from "./CovidRTPCRBanner";
import { YelloShadoLeftSVG } from "assets/images/SvgImage";
import { YelloShadoCenterSVG } from "assets/images/SvgImage";
import { CallBlackImg } from "assets/images/SvgImage";
import { CallYellowImg } from "assets/images/SvgImage";
import InquiryForm from "components/inquiryForm";
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
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_LAB_DETAIL } from "redux/actions/lab";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import { GET_BY_ID_COVID } from "redux/actions/covid";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";
import { useRouter } from "next/navigation";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";

const CovidRTPCRLayout = ({ data }) => {
  const { lab } = useSelector((state) => state);
  const [selectedBranch, setSelectedBranch] = useState("{}");
  const dispatch = useDispatch();
  const [cart, setCart] = useState({});
  const [updateCart, setUpdateCart] = useState("");
  const router = useRouter();

  const handleCartData = (cartData) => {
    setCart(cartData);
    setUpdateCart(cartData);
  };

  const handleAddToCart = () => {
    let cartData = cart;
    cartData[data._id || ""] = {
      price: data?.mrp,
      test_name: data?.specialityName,
      offer_price: data?.offer_price,
      collection_type: data?.collection_type,
      _id: data?._id,
    };
    handleCartData(cartData);
    dispatch(UPDATE_CART_QAUNTITY(Object.keys(cartData).length));
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  const handleRemoveCart = () => {
    let cartData = cart;
    if (cartData.hasOwnProperty(data?._id || "")) {
      delete cartData[data?._id || ""];
    }
    handleCartData(cartData);
    dispatch(UPDATE_CART_QAUNTITY(Object.keys(cartData).length));
    localStorage.setItem("cart", JSON.stringify(cartData));
  };
  const checkOutRedirect = () => {
    handleAddToCart();
    const userLogedIn = localStorage.getItem("accessToken");
    if (userLogedIn) {
      router.push("/check-out");
    } else {
      dispatch(LOGIN_MODAL_OPEN(true));
    }
  };

  useEffect(() => {
    dispatch(GET_ALL_LAB_DETAIL());
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
    }
    // dispatch(GET_TEST_BY_ID(id));
  }, [updateCart]);
  return (
    <div>
      <section>
        <div>
          <CovidRTPCRBanner />
        </div>
        {/* <div className="absolute top-0 left-0">
          <YelloShadoLeftSVG />
        </div>
        <div className="absolute bottom-0 left-36">
          <YelloShadoCenterSVG />
        </div> */}
      </section>
      <div className="container py-[70px]">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="md:col-span-2">
            <p className="lg:text-[32px] text-lg font-semibold font-source-pro">
              Additional information for covid-19
            </p>
            <div className="my-[30px]">
              <table className="shadow-md border-collapse border border-slate-500 w-full">
                <thead>
                  <tr>
                    <th
                      colSpan="2"
                      className="border px-[10px] py-[4px] md:py-[10px] md:px-[24px] bg-[#FAFBFC] border-slate-600 "
                    >
                      <div className="flex justify-between items-center font-source-pro text-[18px] font-[600]">
                        <span>Additional information</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-700 px-[10px] py-[4px] md:py-[10px] md:px-[24px] text-[14px] text-[#27272A] font-normal">
                      Sample Type
                    </td>
                    <td className="border border-slate-700 px-[10px] py-[4px] md:py-[10px] md:px-[24px] text-[14px] text-[#727578] font-normal">
                      THROAT & NASAL SWAB
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 px-[10px] py-[4px] md:py-[10px] md:px-[24px] text-[14px] text-[#27272A] font-normal">
                      Test Preparation
                    </td>
                    <td className="border border-slate-700 px-[10px] py-[4px] md:py-[10px] md:px-[24px] text-[14px] text-[#727578] font-normal">
                      No preparation required
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 px-[10px] py-[4px] md:py-[10px] md:px-[24px] text-[14px] text-[#27272A] font-normal">
                      Report TAT
                    </td>
                    <td className="border border-slate-700 px-[10px] py-[4px] md:py-[10px] md:px-[24px] text-[14px] text-[#727578] font-normal">
                      4 to 6 hours
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mb-[30px] block md:hidden shadow-md bg-white  border-[1px] border-[#E4E4E7] rounded-xl p-[24px]">
              <p className="text-black lg:text-[20px] text-lg font-semibold font-source-3">
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
                    {/* <option></option> */}
                  </select>
                </div>
              </div>
              <p className="text-[14px]">
                {selectedBranch
                  ? JSON.parse(selectedBranch)?.branch_address
                  : ""}
              </p>
              {lab?.data?.length > 0 && (
                <p className="text-secondary lg:text-[18px] text-[14px]">
                  {lab?.data[0]?.reporting}
                </p>
              )}

              {/* <div className="flex gap-3 my-[12px]">
                <ApproveSVG />
                <span className="text-black text-[16px] font-medium">
                  Home Collection Available
                </span>
              </div> */}
              <div className="flex  items-center gap-5 my-[6px]">
                <div>
                  <span className="text-orange text-[24px] font-[600]">
                    ₹{data?.offer_price}
                  </span>
                  {/* <span className="text-secondary lg:text-[16px] text-sm ml-[10px] font-medium">
                    <del>₹160</del>
                  </span> */}
                </div>

                {/* <div>
                  <span className="text-[#005E54] text-[18px] font-normal">
                    50% off
                  </span>
                </div> */}
              </div>
              <div className=" flex gap-x-2 my-[6px]">
                {cart?.hasOwnProperty(data?._id || "") ? (
                  <button
                    onClick={handleRemoveCart}
                    className="w-full bg-orange text-white rounded md:px-[12px] md:py-[8px] px-[6px] py-[6px] text-xs font-semibold"
                  >
                    Remove item
                  </button>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-orange text-white rounded md:px-[12px] md:py-[8px] px-[6px] py-[6px] text-xs font-semibold"
                  >
                    Add To Cart
                  </button>
                )}

                <button
                  onClick={checkOutRedirect}
                  className="w-full border-[1px] border-orange text-orange bg-white rounded px-[12px] py-[8px] text-[14px] font-medium"
                >
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
            <div>
              <h1 className="text-black font-semibold lg:text-[32px] text-lg mb-[20px] font-source-pro">
                Covid 19 RT PCR Test
              </h1>
              <div className="flex flex-col gap-y-2">
                <p className="text-secondary lg:text-[18px] text-[14px]">
                  The determinant Covid 19 RT PCR Test can be defined as a real
                  time reverse transcription-polymerase chain reaction test, or
                  RT-PCR test, to qualitatively identify nucleic acid in both
                  the upper as well as lower respiratory specimens from
                  SARS-CoV-2. A sample is collected from individuals showing
                  symptoms of Covid-19 or asymptomatic but suspected to have
                  Covid 19. The test results in early detection of Covid 19
                  infection. Labs in Delhi are handling bulk RT PCR tests daily.
                </p>
                <p className="text-secondary lg:text-[18px] text-[14px]">
                  RT PCR Test for Covid 19 is a nasal swab test. It is
                  considered the most reliable and accurate test to diagnose
                  Covid-19. If the test result is negative, that means an
                  individual did not contract Covid-19 when the sample was
                  collected. In Delhi, you can do the RT-PCR Covid-19 test at a
                  certified lab.
                </p>
                <p className="text-secondary lg:text-[18px] text-[14px]">
                  The World Health Organization (WHO) recommends an RT PCR test
                  for Covid 19 that quickly reveals if someone is harbouring the
                  virus within 5 to 6 hours.
                </p>
              </div>
              <p className="text-black font-semibold lg:text-[32px] text-lg mb-[20px] font-source-pro">
                Who Should Get Tested For Covid 19?
              </p>
              <div className="flex flex-col gap-y-2 editor_div">
                <h2 className="text-secondary lg:text-[18px] text-[14px]">
                  Get tested only if you:
                </h2>

                <div className="text-secondary lg:text-[18px] text-[14px]">
                  <ul>
                    <li>
                      Have symptoms of covid-19 such as dry cough, itchy throat,
                      sore throat, fever, and other difficulties.
                    </li>
                    <li>
                      If you were within 6 feet of an individual for more than
                      15 minutes who is covid-19 positive.
                    </li>
                  </ul>
                </div>
                <p className="text-secondary lg:text-[18px] text-[14px]">
                  Look for the Covid-19 RT PCR test near me.
                </p>
              </div>

              <h2 className="text-black font-semibold lg:text-[32px] text-lg mb-[20px] font-source-pro">
                How Does RT PCR Covid-19 Test Work?
              </h2>
              <div className="flex flex-col gap-y-2">
                <p className="text-secondary lg:text-[18px] text-[14px]">
                  There are 3 primary steps to this test:
                </p>
              </div>

              <h3 className="text-black font-semibold lg:text-[25px] text-lg mb-[20px] font-source-pro">
                1. Sample Collection
              </h3>
              <div className="flex flex-col gap-y-2">
                <p className="text-secondary lg:text-[18px] text-[14px]">
                  Your sample is collected with the help of a swab. Respiratory
                  material present in the nose is the sample used for testing
                  covid-19. A swab has a soft tip with a long and flexible stick
                  inserted into the nose. Swabs are of different types,
                  including nasal swabs for collecting samples immediately
                  within the nostrils or nasopharyngeal swabs to go further
                  inside the nasal cavity to collect the sample. Either of these
                  swabs is sufficient to collect material for the Covid 19 RT
                  PCR test. Once collected, the swab would be sealed in the tube
                  and sent to the lab for testing.
                </p>
              </div>

              <h3 className="text-black font-semibold lg:text-[25px] text-lg mb-[20px] font-source-pro">
                2. Extraction
              </h3>
              <div className="flex flex-col gap-y-2">
                <p className="text-secondary lg:text-[18px] text-[14px]">
                  When the lab technologist receives this sample, he performs
                  the extraction process to isolate genetic components from the
                  specimen, which includes genetic materials from viruses
                  present.
                </p>
              </div>

              <h3 className="text-black font-semibold lg:text-[25px] text-lg mb-[20px] font-source-pro">
                3. RT PCR
              </h3>
              <div className="flex flex-col gap-y-2">
                <p className="text-secondary lg:text-[18px] text-[14px]">
                  Thereafter, in this step, special chemicals are used in the RT
                  PCR machine, known as thermal cycler that causes a reaction to
                  make copies of a fraction of the genetic material of the
                  SARS-CoV-2 virus. In this process, a chemical produces
                  fluorescent light if there is a SARS-CoV-2 virus present in
                  the specific sample. The fluorescent is a marker detected by
                  the RT PCR machine following which special software interprets
                  that signal as positive.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 h-min	 sticky lg:top-[197px]">
            <div className="hidden md:block shadow-md bg-white  border-[1px] border-[#E4E4E7] rounded-xl p-[24px]">
              <p className="text-black lg:text-[20px] text-lg font-semibold font-source-3">
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
                    {/* <option></option> */}
                  </select>
                </div>
              </div>
              <p className="text-[14px]">
                {selectedBranch
                  ? JSON.parse(selectedBranch)?.branch_address
                  : ""}
              </p>
              {lab?.data?.length > 0 && (
                <p className="text-secondary lg:text-[18px] text-[14px]">
                  {lab?.data[0]?.reporting}
                </p>
              )}

              {/* <div className="flex gap-3 my-[12px]">
                <ApproveSVG />
                <span className="text-black text-[16px] font-medium">
                  Home Collection Available
                </span>
              </div> */}
              <div className="flex  items-center gap-5 my-[6px]">
                <div>
                  <span className="text-orange text-[24px] font-[600]">
                    ₹{data?.offer_price}
                  </span>
                  {/* <span className="text-secondary lg:text-[16px] text-sm ml-[10px] font-medium">
                    <del>₹160</del>
                  </span> */}
                </div>

                {/* <div>
                  <span className="text-[#005E54] text-[18px] font-normal">
                    50% off
                  </span>
                </div> */}
              </div>
              <div className=" flex gap-x-2 my-[6px]">
                {cart?.hasOwnProperty(data?._id || "") ? (
                  <button
                    onClick={handleRemoveCart}
                    className="w-full bg-orange text-white rounded md:px-[12px] md:py-[8px] px-[6px] py-[6px] text-xs font-semibold"
                  >
                    Remove item
                  </button>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-orange text-white rounded md:px-[12px] md:py-[8px] px-[6px] py-[6px] text-xs font-semibold"
                  >
                    Add To Cart
                  </button>
                )}

                <button
                  onClick={checkOutRedirect}
                  className="w-full border-[1px] border-orange text-orange bg-white rounded px-[12px] py-[8px] text-[14px] font-medium"
                >
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
        <div className="background-image-covid flex justify-center items-center ">
          <div className="flex px-[30px] justify-center items-center flex-col gap-4">
            <p className="text-white text-center lg:text-[40px] text:[40px] font-semibold font-source-pro">
              Your Health Our Happiness
            </p>
            <p className="text-white text-center lg:text-[20px] text-[16px] font-medium">
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
        <div className="container py-[35px] md:py-[70px]">
          <h2 className="text-black font-semibold lg:text-[32px] text-lg mb-[20px] font-source-pro">
            What Does The RT PCR Covid 19 Test Result Indicate?
          </h2>
          <div className="flex flex-col gap-y-2">
            <span className="text-secondary lg:text-[18px] text-[14px] font-normal">
              If the result is positive, it indicates that the person has tested
              positive for Covid-19. Most people generally have mild symptoms.
              They can recover from the condition at home with some medication
              but without classical medical care. However, if symptoms worsen,
              individuals must contact the nearest hospital immediately.
            </span>
            <span className="text-secondary lg:text-[18px] text-[14px]">
              If the result is negative, it indicates that the person has tested
              negative for Covid-19 when the sample was taken. However, the same
              person may be infected with the virus but not enough to be
              detected through the test. For instance, if an individual has
              contracted the virus recently but does not show any symptoms, he
              might have had the infection for over a week before he was tested.
              Remember that testing negative does not mean that the person is
              safe for the now. Anyone can be exposed to this virus even after
              getting tested and spreading the virus too.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="p-2">
          <WhyChoose data={dataWhy} />
        </div>
      </div>
    </div>
  );
};
const dataWhy = [
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
export default CovidRTPCRLayout;
