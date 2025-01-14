import { CallYellowImg } from "assets/images/SvgImage";
import FacilitesCard from "components/booktestCard";
import BreadCrumb from "components/breadcrumb";
import React, { Fragment, useEffect, useMemo } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
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
import WhyChoose from "components/WhyChoose";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_BYID_BOOK_A_TEST,
  GET_RELETED_BOOK_A_TEST,
} from "redux/actions/book-a-test";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";
import { useState } from "react";
import { useRouter } from "next/router";
import CheckOutLogin from "layout/auth/checkOutLogin";
import { GET_ALL_LAB_DETAIL } from "redux/actions/lab";
import Faqs from "components/faqs";
import Link from "next/link";
import { ApproveSVG } from "assets/images/SvgImage";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";
import InquiryForm from "components/inquiryForm";

const breadcrumblist = [
  { name: "Home", path: "/" },
  { name: "Book A Test", path: "/book-a-test" },
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
  "test_status",
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

const TestDetailsLayout = ({ byidData }) => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState({});
  const router = useRouter();
  let id = router.query["slug"];
  const [open, setOpen] = useState(false);
  const { lab } = useSelector((state) => state);
  const store = useSelector((state) => state.bookTest);
  const [collapse, setCollapse] = useState(false);
  const { reletedData } = store;
  const [selectedBranch, setSelectedBranch] = useState("{}");
  // delete byidData?.package_image_altTag;
  const handleCartData = (cartData) => {
    setCart(cartData);
    dispatch(GET_BYID_BOOK_A_TEST(id));
  };

  const handleAddToCart = () => {
    let cartData = cart;
    cartData[byidData?.data[0]?._id || ""] = {
      price: byidData?.data[0]?.mrp,
      test_name: byidData?.data[0]?.specialityName,
      offer_price: byidData?.data[0]?.offer_price,
      collection_type: byidData?.data[0]?.collection_type,
      _id: byidData?.data[0]?._id,
    };
    handleCartData(cartData);
    dispatch(UPDATE_CART_QAUNTITY(Object.keys(cartData).length));
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  const handleRemoveCart = () => {
    let cartData = cart;
    if (cartData.hasOwnProperty(byidData?.data[0]?._id || "")) {
      delete cartData[byidData?.data[0]?._id || ""];
    }
    handleCartData(cartData);
    dispatch(UPDATE_CART_QAUNTITY(Object.keys(cartData).length));
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
    }
    if (byidData) {
      dispatch(GET_RELETED_BOOK_A_TEST(byidData.data[0]?.cat_id));
    }
  }, [dispatch]);

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

  return (
    <>
      <div>
        <div className="container">
          <BreadCrumb
            active={byidData?.data[0]?.specialityName}
            breadcrumblist={breadcrumblist}
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="col-span-2 ">
              <div className="shadow-md bg-[#FFFFFF] border-[1px] rounded-xl border-[#E4E4E7] p-[16px] md:p-[24px]">
                <h1 className="text-black  font-semibold">
                  {byidData?.data[0]?.specialityName}
                </h1>
                <div className="flex items-center gap-5 mt-[6px]">
                  <div className=" space-x-2 ">
                    <span className="text-orange font-bold text-xl">
                      ₹{byidData?.data[0]?.offer_price || "NaN"}
                    </span>
                    {byidData?.data[0]?.offer_price <
                      byidData?.data[0]?.mrp && (
                      <span className="text-gray-400 font-[300] text-[14px]">
                        <del>₹{byidData?.data[0]?.mrp}</del>
                      </span>
                    )}

                    {byidData?.data[0]?.offer_price < byidData?.data[0]?.mrp ? (
                      <span className="text-[#005E54] text-[14px] font-semibold">
                        {(
                          ((byidData?.data[0]?.mrp -
                            byidData?.data[0]?.offer_price) /
                            byidData?.data[0]?.mrp) *
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
              <div className="block mt-[10px] sm:hidden mb-2 shadow-md rounded-xl bg-white border-[1px] border-[#E4E4E7] p-[16px] md:p-[24px]">
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
                <p className="text-blue-500 text-[14px] mb-[15px]">
                  {byidData?.data[0]?.reporting}
                </p>
                <div className="flex gap-3 my-[12px]">
                  <ApproveSVG />
                  <span className="text-black text-capitalize text-sm ">
                    {byidData?.data[0]?.collection_type.includes("home")
                      ? "Home Collection / Centre Visit"
                      : "Centre Visit"}
                  </span>
                </div>

                <div className="flex  items-center gap-5 mt-[6px]">
                  <div className=" space-x-2 ">
                    <span className="text-orange font-bold text-xl">
                      ₹{byidData?.data[0]?.offer_price || "NaN"}
                    </span>
                    {byidData?.data[0]?.offer_price <
                      byidData?.data[0]?.mrp && (
                      <span className="text-gray-400 font-[300] text-[14px]">
                        <del>₹{byidData?.data[0]?.mrp}</del>
                      </span>
                    )}

                    {byidData?.data[0]?.offer_price < byidData?.data[0]?.mrp ? (
                      <span className="text-[#005E54] text-[14px] font-semibold">
                        {(
                          ((byidData?.data[0]?.mrp -
                            byidData?.data[0]?.offer_price) /
                            byidData?.data[0]?.mrp) *
                          100
                        ).toFixed()}
                        % off
                      </span>
                    ) : (
                      <span />
                    )}
                  </div>
                </div>
                {/* </div> */}
                <div className=" flex gap-x-2 my-[6px]">
                  {cart?.hasOwnProperty(byidData?.data[0]?._id || "") ? (
                    <button
                      onClick={handleRemoveCart}
                      className="w-full bg-orange text-white rounded md:px-[12px] md:py-[8px] px-[8px] py-[6px] text-xs font-semibold"
                    >
                      Remove item
                    </button>
                  ) : (
                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-orange text-white rounded md:px-[12px] md:py-[8px] px-[8px] py-[6px] text-xs font-semibold"
                    >
                      Add To Cart
                    </button>
                  )}
                  {open && (
                    <CheckOutLogin
                      open={open}
                      setOpen={setOpen}
                      redirectUrl={"/check-out"}
                    />
                  )}
                  <button
                    onClick={() => {
                      checkOutRedirect();
                    }}
                    className="w-full border-[1px] border-orange text-orange bg-white rounded px-[12px] py-[8px] text-xs font-semibold"
                  >
                    Check out
                  </button>
                </div>
                <div className="mt-[20px]">
                  <Link
                    href="tel:011-2000-2000"
                    className=" flex gap-2 justify-center items-center text-orange bg-[#FEF6E6] rounded-2xl w-full py-[8px] text-[16px] md:text-[20px]"
                  >
                    <CallYellowImg />
                    Call to Book
                  </Link>
                </div>
              </div>
              <div className="mt-[10px] md:mt-[30px]">
                <table className="shadow-md rounded-xl overflow-hidden border-[2x] !border-[#E8E8EB] w-full">
                  <thead>
                    <tr>
                      <th
                        colSpan="2"
                        className="border cursor-pointer md:py-[10px] bg-[#FAFBFC] p-[16px] md:px-[24px] border-slate-600 "
                        onClick={() => setCollapse(!collapse)}
                      >
                        <div className="flex justify-between items-center">
                          <div className="text-base md:text-[20px]">
                            Additional information
                          </div>
                          <div onClick={() => setCollapse(!collapse)}>
                            {collapse ? (
                              <MdOutlineKeyboardArrowUp className="text-lg" />
                            ) : (
                              <MdOutlineKeyboardArrowDown className="text-lg" />
                            )}
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  {collapse && (
                    <tbody>
                      {Object.keys(byidData?.data[0])?.map((keyname) => {
                        if (
                          keyname === "no_of_parameters" &&
                          !byidData?.data[0][keyname]
                        ) {
                          return;
                        }
                        return (
                          <Fragment key={keyname}>
                            {!dataNotToShow.includes(keyname) && (
                              <tr key={keyname}>
                                <td className="border border-slate-700 text-[18px] py-[10px] px-[24px]">
                                  {getTitleOfKeyname(keyname)}
                                </td>
                                <td className="border border-slate-700 text-[18px] py-[10px] px-[24px]">
                                  {keyname === "test_pre_test_info" ? (
                                    <div
                                      className="text-[18px]"
                                      dangerouslySetInnerHTML={renderHTML(
                                        byidData?.data[0][keyname]
                                      )}
                                    />
                                  ) : (
                                    byidData?.data[0][keyname]
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
                {byidData?.data?.length > 0 ? (
                  <div className="my-3 md:my-4 w-full  flex flex-col md:mt-0 mt-[10px]">
                    {byidData?.data[0]?.preparation && (
                      <>
                        <h2 className="text-gray-900 font-semibold">
                          {" "}
                          <div>
                            {" "}
                            <span className="border_text">Preparation</span>
                          </div>
                        </h2>

                        <div
                          className="my-2 text-gray-700 editor_div "
                          dangerouslySetInnerHTML={renderHTML(
                            byidData?.data[0]?.preparation
                          )}
                        />
                      </>
                    )}
                    {byidData?.data[0]?.test_components && (
                      <>
                        <h2 className="text-gray-900 font-semibold">
                          {" "}
                          <span className="border_text">Components</span>
                        </h2>
                        <div
                          className="my-2 text-gray-700 editor_div components_editor_div"
                          dangerouslySetInnerHTML={renderHTML(
                            byidData?.data[0]["test_components"]
                          )}
                        />
                      </>
                    )}
                    {byidData?.data[0]?.test_pre_test_info && (
                      <>
                        <h2 className="text-gray-900 font-semibold">
                          <span className="border_text"> Overview</span>
                        </h2>
                        {/* md:text-[20px] text-[14px] */}
                        <div
                          className="my-2 text-gray-700 editor_div "
                          dangerouslySetInnerHTML={renderHTML(
                            byidData?.data[0]["test_pre_test_info"]
                          )}
                        />
                      </>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-span-1 h-min  sticky lg:top-[197px] xl:top-[161px]">
              <div className="hidden sm:block mb-2 shadow-md rounded-xl bg-white border-[1px] border-[#E4E4E7] p-[16px] md:p-[24px]">
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
                <p className="text-blue-500 text-[14px] mb-[15px]">
                  {byidData?.data[0]?.reporting}
                </p>
                <div className="flex gap-3 my-[12px]">
                  <ApproveSVG />
                  <span className="text-black text-capitalize text-sm ">
                    {byidData?.data[0]?.collection_type.includes("home")
                      ? "Home Collection / Centre Visit"
                      : "Centre Visit"}
                  </span>
                </div>

                <div className="flex  items-center gap-5 mt-[6px]">
                  <div className=" space-x-2 ">
                    <span className="text-orange font-bold text-xl">
                      ₹{byidData?.data[0]?.offer_price || "NaN"}
                    </span>
                    {byidData?.data[0]?.offer_price <
                      byidData?.data[0]?.mrp && (
                      <span className="text-gray-400 font-[300] text-[14px]">
                        <del>₹{byidData?.data[0]?.mrp}</del>
                      </span>
                    )}

                    {byidData?.data[0]?.offer_price < byidData?.data[0]?.mrp ? (
                      <span className="text-[#005E54] text-[14px] font-semibold">
                        {(
                          ((byidData?.data[0]?.mrp -
                            byidData?.data[0]?.offer_price) /
                            byidData?.data[0]?.mrp) *
                          100
                        ).toFixed()}
                        % off
                      </span>
                    ) : (
                      <span />
                    )}
                  </div>
                </div>
                {/* </div> */}
                <div className=" flex gap-x-2 my-[6px]">
                  {cart?.hasOwnProperty(byidData?.data[0]?._id || "") ? (
                    <button
                      onClick={handleRemoveCart}
                      className="w-full bg-orange text-white rounded md:px-[12px] md:py-[8px] px-[8px] py-[6px] text-xs font-semibold"
                    >
                      Remove item
                    </button>
                  ) : (
                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-orange text-white rounded md:px-[12px] md:py-[8px] px-[8px] py-[6px] text-xs font-semibold"
                    >
                      Add To Cart
                    </button>
                  )}
                  {open && (
                    <CheckOutLogin
                      open={open}
                      setOpen={setOpen}
                      redirectUrl={"/check-out"}
                    />
                  )}
                  <button
                    onClick={() => {
                      checkOutRedirect();
                    }}
                    className="w-full border-[1px] border-orange text-orange bg-white rounded px-[12px] py-[8px] text-xs font-semibold"
                  >
                    Check out
                  </button>
                </div>
                <div className="mt-[20px]">
                  <Link
                    href="tel:011-2000-2000"
                    className=" flex gap-2 justify-center items-center text-orange bg-[#FEF6E6] rounded-2xl w-full py-[8px] text-[16px] md:text-[20px]"
                  >
                    <CallYellowImg />
                    Call to Book
                  </Link>
                </div>
              </div>
              <div className="">
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FAFAFA]">
          <div className="container py-[35px] md:py-[70px]">
            <div>
              <div className="col-span-1 overflow-hidden rounded-xl border-[1px] border-[#E4E4E7]">
                <div className="p-[18px] bg-[#FEF6E6] border-b-[1px] border-[#E4E4E7]">
                  <p className="text-lg font-semibold">Related tests</p>
                </div>
                <div className="p-[16px] md:p-[24px] grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  gap-3">
                  {reletedData?.data?.categoryData?.map((item, index) => (
                    <FacilitesCard
                      key={index}
                      data={item}
                      handleCartData={handleCartData}
                      cart={cart}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2">
          <WhyChoose data={whyChooseData} />
        </div>
        <div className="container">
          {byidData?.data?.length > 0 && <Faqs id={byidData?.data[0]?._id} />}
        </div>
      </div>
    </>
  );
};

const whyChooseData = [
  {
    title: `Team of Experienced  Doctors & Staffs`,
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

export default TestDetailsLayout;
