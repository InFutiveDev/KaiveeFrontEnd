import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import BreadCrumb from "components/breadcrumb";
import CityHealth from "assets/images/health-packages/Lab-Test-Resized (1).jpg";
import { ShareSVG } from "assets/images/SvgImage";
import { HeartSVG } from "assets/images/SvgImage";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import WhyChoose from "components/WhyChoose";
import { ApproveSVG } from "assets/images/SvgImage";
import { CallYellowImg } from "assets/images/SvgImage";
import { useDispatch, useSelector } from "react-redux";
import { GET_TEST_BY_ID } from "redux/actions/test";
import SpinnerComponent from "components/spinner";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";
import img11 from "assets/images/whychooseus/1.png";
import img22 from "assets/images/whychooseus/2-png.png";
import img33 from "assets/images/whychooseus/icon-3.png";
import img44 from "assets/images/whychooseus/3-png.png";
import img55 from "assets/images/whychooseus/4-png.png";
import img66 from "assets/images/whychooseus/5-png.png";
import img77 from "assets/images/whychooseus/6-png.png";
import img88 from "assets/images/whychooseus/7-png.png";
import Image from "next/image";
import { GET_ALL_LAB_DETAIL } from "redux/actions/lab";
import Faqs from "components/faqs";
import Link from "next/link";
import { useRouter } from "next/router";
import { LOGIN_MODAL_OPEN, LOGIN_SUBMIT_REDIRECT } from "redux/actions/auth";
import InquiryForm from "components/inquiryForm";
import CheckOutLogin from "layout/auth/checkOutLogin";

// Import your static image
import staticBannerImage from "assets/images/health-packages/health package 1400x300.webp";  // Adjust the path as needed

const breadcrumblist = [
  { name: "Home", path: "/" },
  {
    name: "Health packages",
    path: "/health-packages",
  },
];

const dataNotToShow = [
  "__v",
  "test_url",
  "updatedAt",
  "package_image_altTag",
  "code",
  "createdAt",
  "_id",
  "number_of_review",
  " number_of_review",
  "package_type",
  "test_pre_test_info",
  "number_of_star",
  "package_image",
  "related_tests",
  "collection_type",
  "featured_test",
  "cat_id",
  "meta_desc",
  "meta_keyword",
  "meta_title",
  "mrp",
  "by_habits",
  "by_healthRisk",
  "offer_price",
  "search_tag",
  "test_name",
  "position",
  "test_price_info",
  "test_components",
  "by_healthRisk",
  "preparation",
  "availablity",
  "test_status",
];
const getTitleOfKeyname = (value) => {
  if (value === "avilability") {
    return "Availability";
  } else if (value) {
    let titleis = value
      ?.replace(/([A-Z])/g, " $1")
      ?.replace(/^./, function (str) {
        return str.toUpperCase();
      });
    return titleis.replace(/_/g, " ");
  }
  return "";
};

const renderHTML = (htmlString) => {
  return { __html: htmlString };
};
const HealthPackagesDetailLayout = ({ id, testInfo }) => {
  console.log("testInfo", testInfo);
  const [cart, setCart] = useState({});
  const dispatch = useDispatch();
  const [updateCart, setUpdateCart] = useState("");

  const store = useSelector((state) => state);
  const [collapse, setCollapse] = useState(false);
  const { test, lab } = store;
  // const { testInfo } = test;
  const [selectedBranch, setSelectedBranch] = useState("{}");
  const router = useRouter();

  const handleCartData = (cartData) => {
    setCart(cartData);
    setUpdateCart(cartData);
  };

  const handleAddToCart = () => {
    let cartData = cart;
    cartData[testInfo?.data[0]?._id || ""] = {
      price: testInfo?.data[0]?.mrp,
      test_name: testInfo?.data[0]?.specialityName,
      offer_price: testInfo?.data[0]?.offer_price,
      collection_type: testInfo?.data[0]?.collection_type,
      _id: testInfo?.data[0]?._id,
    };
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
      dispatch(LOGIN_SUBMIT_REDIRECT("/check-out"));
    }
  };

  const handleRemoveCart = () => {
    let cartData = cart;
    if (cartData.hasOwnProperty(testInfo?.data[0]?._id || "")) {
      delete cartData[testInfo?.data[0]?._id || ""];
    }
    handleCartData(cartData);
    dispatch(UPDATE_CART_QAUNTITY(Object.keys(cartData).length));
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  useEffect(() => {
    if (window.location.hash === "#enquiry_form") {
      const enquiryFormElement = document.getElementById("enquiry_form");
      if (enquiryFormElement) {
        enquiryFormElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
    }
  }, [dispatch, id, updateCart]);

  useEffect(() => {
    dispatch(GET_ALL_LAB_DETAIL());
  }, []);

  useMemo(() => {
    if (testInfo?.data?.length > 0) {
      dispatch({
        type: "GET_DYNAMIC_META_TITLE_DES",
        data: {
          title: testInfo?.data[0]?.meta_title,
          description: testInfo?.data[0]?.meta_desc,
        },
      });
    }
  }, [testInfo]);
  return (
    <>
      {!testInfo ? (
        <SpinnerComponent />
      ) : (
        <div className=" relative ">
          {/* Static Banner Image */}
          <div className="relative w-full h-[250px] md:h-[300px] lg:h-[400px]">
            <Image
              src={staticBannerImage}
              alt="Health Package Banner"
              fill
              priority
              className="object-cover w-full h-full"
              sizes="100vw"
            />
          </div>

          <div className="container py-6">
            <BreadCrumb
              active={id.replaceAll("-", " ")}
              breadcrumblist={breadcrumblist}
            />
            <div className=" relative grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="col-span-2">
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-x-4 gap-y-1">
                  <div className="relative border h-auto md:h-[250px] w-full rounded-md overflow-hidden">
                    <img
                      src={testInfo?.data[0]?.package_image || CityHealth.src}
                      width={"100%"}
                      height={"100%"}
                      className=" object-cover sm:h-44 h-auto "
                    />
                    <div className="absolute top-4 right-4 flex flex-col gap-y-2">
                      <span className="inline-block p-[4px] bg-white rounded">
                        <ShareSVG />
                      </span>
                      <span className="inline-block p-[4px] bg-white rounded">
                        <HeartSVG />
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 shadow-md  p-[16px] md:p-[24px] border border-[#E4E4E7] rounded-[12px]">
                    <p className="text-black text-base md:text-xl font-semibold">
                      {testInfo?.data[0]?.specialityName || ""}
                    </p>
                    <p>
                      <span className="font-semibold text-[16px]">
                        Also Know As:
                      </span>
                      <span className="text-[14px] ml-[8px]">
                        {testInfo?.data[0]?.also_known_as || ""}
                      </span>
                    </p>
                    {/* <div
                      className="text-secondary text-xs"
                      dangerouslySetInnerHTML={{
                        __html: testInfo?.data[0]?.test_pre_test_info,
                      }}
                    /> */}
                    <div className="flex items-center gap-5 my-[6px]">
                      <div>
                        {testInfo?.data[0]?.offer_price && (
                          <span className="text-[#D41958] font-semibold text-xl">
                            ₹{testInfo?.data[0]?.offer_price}
                          </span>
                        )}
                        {testInfo?.data[0]?.offer_price <
                          testInfo?.data[0]?.mrp && (
                            <span className="text-secondary font-semibold text-[14px] ml-[10px]">
                              <del>₹{testInfo?.data[0]?.mrp}</del>
                            </span>
                          )}
                      </div>
                      {testInfo?.data[0]?.offer_price <
                        testInfo?.data[0]?.mrp ? (
                        <span className="text-[#005E54] font-semibold">
                          {(
                            ((testInfo?.data[0]?.mrp -
                              testInfo?.data[0]?.offer_price) /
                              testInfo?.data[0]?.mrp) *
                            100
                          ).toFixed()}
                          % off
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="block sm:hidden mt-2  shadow-md border-[1px] border-[#E4E4E7 rounded-xl p-[16px] md:p-[24px]">
                  <p className="text-black text-[20px] font-semibold">
                    Nearest branch
                  </p>
                  <div className="form-group">
                    <div className="mt-[6px]">
                      <select
                        value={selectedBranch}
                        onChange={(e) => setSelectedBranch(e.target.value)}
                        className="border rounded-lg p-2 w-full focus:outline-none text-[14px] font-poppins font-normal "
                        placeholder="Select City"
                      >
                        <option value={""}>Select Branch</option>
                        {lab?.data?.data?.LabData.map((item, index) => (
                          <option key={index} value={JSON.stringify(item)}>
                            {item?.branch_Name}
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
                  {testInfo?.data?.length > 0 && (
                    <p className="text-secondary lg:text-[18px] text-[14px]">
                      {testInfo?.data[0]?.reporting}
                    </p>
                  )}
                  <div className="flex gap-3 my-[12px]">
                    <ApproveSVG />
                    <span className="text-black text-capitalize text-sm ">
                      {testInfo.data[0]?.collection_type.includes("home")
                        ? "Home Collection / Centre Visit"
                        : "Centre Visit"}
                      {/* {testInfo.data[0]?.collection_type || "Centre Visit"} */}
                    </span>
                  </div>
                  <div className="flex  items-center gap-5 my-[6px]">
                    <div>
                      <span className="text-orange font-semibold text-xl">
                        ₹{testInfo?.data[0]?.offer_price}
                      </span>
                      {testInfo?.data[0]?.offer_price <
                        testInfo?.data[0]?.mrp && (
                          <span className="text-secondary font-semibold text-[14px] ml-[10px]">
                            <del>₹{testInfo?.data[0]?.mrp}</del>
                          </span>
                        )}
                    </div>
                    {testInfo?.data[0]?.offer_price < testInfo?.data[0]?.mrp ? (
                      <span className="text-[#005E54] font-semibold">
                        {(
                          ((testInfo?.data[0]?.mrp -
                            testInfo?.data[0]?.offer_price) /
                            testInfo?.data[0]?.mrp) *
                          100
                        ).toFixed()}
                        % off
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className=" flex gap-x-2 my-[6px]">
                    {cart?.hasOwnProperty(testInfo?.data[0]?._id || "") ? (
                      <button
                        onClick={handleRemoveCart}
                        className="w-full bg-[#D41958] text-white rounded md:px-[12px] md:py-[8px] px-[6px] py-[6px] text-xs font-semibold"
                      >
                        Remove item
                      </button>
                    ) : (
                      <button
                        onClick={handleAddToCart}
                        className="w-full bg-[#D41958] text-white rounded md:px-[12px] md:py-[8px] px-[6px] py-[6px] text-xs font-semibold"
                      >
                        Add To Cart
                      </button>
                    )}

                    <button
                      onClick={checkOutRedirect}
                      className="w-full border-[1px] border-orange text-[#D41958] bg-white rounded md:px-[12px] md:py-[8px] px-[6px] py-[6px] text-xs font-semibold"
                    >
                      Check out
                    </button>
                  </div>
                  <div className="mt-[20px]">
                    <Link
                      href="tel:011-4725-2000"
                      className=" flex gap-2 justify-center items-center text-orange bg-[#FEF6E6] rounded-2xl w-full py-[8px] text-[16px] md:text-[20px]"
                    >
                      <CallYellowImg />
                      Call to Book
                    </Link>
                  </div>
                </div>
                <div className="w-full">
                  <table className="shadow-md w-full mt-2 rounded-xl border-[2x] !border-[#E8E8EB] md:mt-0">
                    <thead>
                      <tr>
                        <th
                          colSpan="2"
                          className="border cursor-pointer p-[16px] md:py-[10px] bg-[#FAFBFC] md:px-[24px] border-slate-600 "
                          onClick={() => setCollapse(!collapse)}
                        >
                          <div className="flex justify-between items-center">
                            <div className="text-base md:text-[20px] ">
                              Additional information
                            </div>
                            <div onClick={() => setCollapse(!collapse)}>
                              {collapse ? (
                                <MdOutlineKeyboardArrowUp className="text-sm md:text-lg" />
                              ) : (
                                <MdOutlineKeyboardArrowDown className="text-sm md:text-lg" />
                              )}
                            </div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    {collapse && testInfo?.data?.[0] && (
                      <tbody>
                        {Object.keys(testInfo?.data[0]).map((keyname) => {
                          // Skip if "no_of_parameters" is falsy
                          if (keyname === "no_of_parameters" && !testInfo?.data[0][keyname]) {
                            return null; // Prevent rendering if the condition is met
                          }

                          return (
                            <Fragment key={keyname}>
                              {!dataNotToShow.includes(keyname) && (
                                <tr className="w-full">
                                  <td className="border border-slate-700 text-sm md:text-[18px] md:py-[10px] md:px-[24px] p-[10px]">
                                    {getTitleOfKeyname(keyname)}
                                  </td>
                                  <td className="border border-slate-700 text-sm md:text-[18px] md:py-[10px] md:px-[24px] p-[10px]">
                                    {testInfo?.data[0][keyname] || (
                                      <span className="text-gray-400">N/A</span>
                                    )}
                                  </td>
                                </tr>
                              )}
                            </Fragment>
                          );
                        })}
                      </tbody>
                    )}

                  </table>
                  <div className="my-6 md:my-8 w-full  flex flex-col">
                    {testInfo?.data[0]?.preparation && (
                      <>
                        <h2 className="text-gray-900 font-semibold">
                          {" "}
                          <span className="border_text"> Preparation</span>
                        </h2>
                        <div
                          className="my-2 text-gray-700 editor_div "
                          dangerouslySetInnerHTML={renderHTML(
                            testInfo?.data[0]?.preparation
                          )}
                        />
                      </>
                    )}
                    {testInfo?.data && testInfo.data[0]?.test_components && (
                      <>
                        <h2 className="text-gray-900 font-semibold">
                          <span className="border_text">Components</span>
                        </h2>
                        <div
                          className="my-2 text-gray-700 editor_div components_editor_div"
                          dangerouslySetInnerHTML={renderHTML(testInfo.data[0].test_components)}
                        />
                      </>
                    )}
                    {testInfo?.data && testInfo.data[0]?.test_pre_test_info && (
                      <>
                        <h2 className="text-gray-900 md:mt-0 mt-[10px] font-semibold">
                          <span className="border_text"> Overview</span>
                        </h2>
                        <div
                          className="my-2 text-gray-700 editor_div md:text-[20px] text-[14px]"
                          dangerouslySetInnerHTML={renderHTML(testInfo.data[0].test_pre_test_info)}
                        />
                      </>
                    )}

                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="hidden sm:block shadow-md border-[1px] border-[#E4E4E7 rounded-xl p-[16px] md:p-[24px]">
                  <p className="text-black text-[20px] font-semibold">
                    Nearest branch
                  </p>
                  <div className="form-group">
                    <div className="mt-[6px]">
                      <select
                        value={selectedBranch}
                        onChange={(e) => setSelectedBranch(e.target.value)}
                        className="border rounded-lg p-2 w-full focus:outline-none text-[14px] font-poppins font-normal "
                        placeholder="Select City"
                      >
                        <option value={""}>Select Branch</option>
                        {lab?.data?.data?.LabData.map((item, index) => (
                          <option key={index} value={JSON.stringify(item)}>
                            {item?.branch_Name}
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
                  {testInfo?.data?.length > 0 && (
                    <p className="text-secondary lg:text-[18px] text-[14px]">
                      {testInfo?.data[0]?.reporting}
                    </p>
                  )}
                  <div className="flex gap-3 my-[12px]">
                    <ApproveSVG />
                    <span className="text-black text-capitalize text-sm ">
                      {testInfo.data[0]?.collection_type.includes("home")
                        ? "Home Collection / Centre Visit"
                        : "Centre Visit"}
                      {/* {testInfo.data[0]?.collection_type || "Centre Visit"} */}
                    </span>
                  </div>
                  <div className="flex  items-center gap-5 my-[6px]">
                    <div>
                      <span className="text-[#7DB440] font-semibold text-xl">
                        ₹{testInfo?.data[0]?.offer_price}
                      </span>
                      {testInfo?.data[0]?.offer_price <
                        testInfo?.data[0]?.mrp && (
                          <span className="text-secondary font-semibold text-[14px] ml-[10px]">
                            <del>₹{testInfo?.data[0]?.mrp}</del>
                          </span>
                        )}
                    </div>
                    {testInfo?.data[0]?.offer_price < testInfo?.data[0]?.mrp ? (
                      <span className="text-[#005E54] font-semibold">
                        {(
                          ((testInfo?.data[0]?.mrp -
                            testInfo?.data[0]?.offer_price) /
                            testInfo?.data[0]?.mrp) *
                          100
                        ).toFixed()}
                        % off
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className=" flex gap-x-2 my-[6px]">
                    {cart?.hasOwnProperty(testInfo?.data[0]?._id || "") ? (
                      <button
                        onClick={handleRemoveCart}
                        className="w-full bg-[#D41958] text-white rounded md:px-[12px] md:py-[8px] px-[6px] py-[6px] text-xs font-semibold"
                      >
                        Remove item
                      </button>
                    ) : (
                      <button
                        onClick={handleAddToCart}
                        className="w-full bg-[#D41958] text-white rounded md:px-[12px] md:py-[8px] px-[6px] py-[6px] text-xs font-semibold"
                      >
                        Add To Cart
                      </button>
                    )}

                    <button
                      onClick={checkOutRedirect}
                      className="w-full border-[1px] border-[#D41958] text-[#D41958] bg-white rounded md:px-[12px] md:py-[8px] px-[6px] py-[6px] text-xs font-semibold"
                    >
                      Check out
                    </button>
                  </div>
                  <div className="mt-[20px]">
                    <Link
                      href="tel:011-4725-2000"
                      className=" flex gap-2 justify-center items-center text-[#D41958] bg-[#D419580D] rounded-2xl w-full py-[8px] text-[16px] md:text-[20px]"
                    >
                      <CallYellowImg />
                      Call to Book
                    </Link>
                  </div>
                </div>
                <div className=" mt-3">
                  <InquiryForm />
                </div>
              </div>
            </div>
          </div>

          {/* {(testInfo?.data[0]?.test_pre_test_info?.length > 0 ||
            testInfo?.data[0]?.test_name?.length > 0) && (
            <div className="bg-[#FAFAFA] py-[20px]">
              <div className="container flex gap-[32px] flex-col my-8">
                {testInfo?.data[0]?.test_pre_test_info && (
                  <div>
                    <p className="lg:text-[32px] text-lg font-semibold lg:mb-[20px] mb-[10px]">
                      {" "}
                      Test Preparation
                    </p>
                    <p className="text-secondary text-xs">
                      {testInfo?.data[0]?.test_name}
                    </p>
                  </div>
                )}
                {testInfo?.data[0]?.test_pre_test_info && (
                  <div>
                    <p className="lg:text-[32px] text-lg font-semibold lg:mb-[20px] mb-[10px]">
                      {" "}
                      Test Description
                    </p>
                    <p
                      className="text-secondary text-xs editor_div"
                      dangerouslySetInnerHTML={renderHTML(
                        testInfo?.data[0]?.test_pre_test_info
                      )}
                    ></p>
                  </div>
                )}
              </div>
            </div>
          )} */}
          <div className=" container mx-auto ">
            <WhyChoose data={data} />
            <Faqs id={id} />
          </div>
        </div>
      )}
    </>
  );
};

const data = [
  {
    id: 1,
    title: "NABL Accredited Labs",
    
    icon: <Image src={img33} alt="NABL Accredited Icon" />,
  },
  {
    id: 2,
    title: "Trusted by Leading Doctors & Hospitals",
    
    icon: <Image src={img22} alt="doctors Icon" />,
  },
  {
    id: 3,
    title: "Shortest Reporting Time",
  
    icon: <Image src={img55} alt="time Icon" />,
  },
  {
    id: 4,
    title: "Accurate Test Reports",
   
    icon: <Image src={img44} alt="report Icon" />,
  },
  {
    id: 5,
    title: "Satisfied Customers",
    
    icon: <Image src={img11} alt="customer Icon" />,
  },
  {
    id: 6,
    title: "100+ Labs",
    
    icon: <Image src={img66} alt="NABL Accredited Icon" />,
  },
  {
    id: 7,
    title: "3000+ Collection Centres",
    
    icon: <Image src={img77} alt="collection Icon" />,
  },
  {
    id: 8,
    title: "Scientific Orientation",
    
    icon: <Image src={img88} alt="scientific Icon" />,
  },
];
export default HealthPackagesDetailLayout;
