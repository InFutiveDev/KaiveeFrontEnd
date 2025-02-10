import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import BreadCrumb from "components/breadcrumb";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Line from "assets/images/book-a-test/Line_304_Pink_Transparent.png";
import FacilitesCard from "components/booktestCard";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { GET_BOOK_A_TEST } from "redux/actions/book-a-test";
import SpinnerComponent from "components/spinner";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "react-feather";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
const breadcrumblist = [{ name: "Home", path: "/" }];

const BookATestLayout = ({ urlData }) => {
  const router = useRouter();
  const initialized = useRef(false);

  // let routeId = router.query?.id || router.query?.search || router.query?.HealthRisk || router.query?.Habit || router?.query?.Categories
  const filterType = router.query.filterType;
  const dispatch = useDispatch();
  const store = useSelector((state) => state.bookTest);
  const { data } = store;
  const storeges = useSelector((state) => state);
  const { category, habit, healthrisk } = storeges;
  const { categories } = category;
  const { healthRisk } = healthrisk;
  const { habits } = habit;
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState({});
  const [packageFilter, setPackageFilter] = useState("");
  const count = Number(Math.ceil(data?.data?.pagination?.total / 12));
  let categoriesData = [
    ...(categories?.data?.categoryData?.filter(
      (ele) => !ele.perent_category_name
    ) || []),
    ...(categories?.data?.categoryData?.filter(
      (ele) => ele?.perent_category_name
    ) || []),
  ];
  const handleCartData = (cartData) => {
    setCart(cartData);
  };

  const handlePagination = (page) => {
    let q = router?.query;
    if (packageFilter === "health-package") {
      router.push({
        pathname: "/book-a-test",
      });
      dispatch(
        GET_BOOK_A_TEST(page.selected + 1, 12, `&str=${packageFilter || ""}`)
      );
    } else if (packageFilter === "") {
      dispatch(
        GET_BOOK_A_TEST(
          page.selected + 1,
          12,
          `&${q?.filterType}=${q[q?.filterType]}`
        )
      );
    } else {
      dispatch(
        GET_BOOK_A_TEST(
          page.selected + 1,
          12,
          `&str=${packageFilter || ""}&${q?.filterType}=${q[q?.filterType]}`
        )
      );
    }
    setCurrentPage(page.selected + 1);
  };

  const handleCategoryFilter = (e, item, categories) => {
    setCurrentPage(0);
    router.push({
      pathname: "/book-a-test",
      query: {
        [categories]: item?._id,
        filterType: categories,
      },
    });
    setPackageFilter("");
    dispatch(GET_BOOK_A_TEST(1, 12, `&${categories}=${item?._id}`));
  };

  const handleAccordionOpen = (categories) => {
    if (router?.query?.filterType === categories) {
      router.push({
        pathname: "/book-a-test",
      });
    } else {
      router.push({
        pathname: "/book-a-test",
        query: {
          [categories]: router.query[categories],
          filterType: categories,
        },
      });
    }
  };

  const handlePackageFilter = (name) => {
    setCurrentPage(1);
    setPackageFilter(name);
    let q = router?.query;
    if (name === "health-package") {
      dispatch(GET_BOOK_A_TEST(1, 12, `&str=${name || ""}`));
      router.push({
        pathname: "/book-a-test",
      });
    } else if (name === "") {
      dispatch(GET_BOOK_A_TEST(1, 12, `&${q?.filterType}=${q[q?.filterType]}`));
    } else {
      dispatch(
        GET_BOOK_A_TEST(
          1,
          12,
          `&str=${name || ""}&${q?.filterType}=${q[q?.filterType]}`
        )
      );
    }
  };

  // useEffect(() => {
  //   let q = router?.query;
  // }, []);

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
    let q = urlData;
    if (q?.filterType) {
      dispatch(GET_BOOK_A_TEST(1, 12, `&${q?.filterType}=${q[q?.filterType]}`));
    } else if (!initialized.current) {
      initialized.current = true;

      dispatch(GET_BOOK_A_TEST(1, 12, ""));
    }
  }, [filterType]);
  console.log("currentPage", currentPage);
  useEffect(() => {
    setCurrentPage(1);
  }, [urlData]);
  return (
    <>
      <div className="mb-4">
        <div className="container">
          <BreadCrumb active="Book a Test" breadcrumblist={breadcrumblist} />
          {!data?.data ? (
            <SpinnerComponent />
          ) : (
            <div className="grid  lg:grid-cols-4 grid-cols-1 items-start gap-6">
              <div className="lg:col-span-1 overflow-hidden rounded-xl border-[1px] border-[#E4E4E7]">
                <div className="text-md flex justify-between items-center py-2 px-[24px] bg-[#D419580D] border-b-[1px] border-[#E4E4E7]">
                  <p className=" font-source-pro ">Filter</p>
                  <button
                    className="text-[16px] bg-[#D41958] text-white rounded-md px-2"
                    onClick={() => {
                      dispatch(GET_BOOK_A_TEST(1, 12, ""));
                      router.push("/book-a-test");
                    }}
                  >
                    Clear
                  </button>
                </div>
                <div className="px-2.5 py-2 ">
                  <div>
                    <div
                      role="button"
                      onClick={() => handleAccordionOpen("Categories")}
                      className="flex gap-3 items-center justify-between"
                    >
                      <p className="text-[18px] source-sans-3">
                        Facilities
                      </p>
                      {filterType === "Categories" ? (
                        <MdOutlineKeyboardArrowUp className="text-lg" />
                      ) : (
                        <MdOutlineKeyboardArrowDown className="text-lg" />
                      )}
                    </div>
                    {filterType === "Categories" && (
                      <div className="my-[20px] max-h-[200px] overflow-y-scroll ">
                        {categoriesData?.map((item, index) => (
                          <div className="flex items-center mr-4" key={index}>
                            <label className="cusmCheckBox">
                              {item?.category_name}
                              <input
                                type="checkbox"
                                checked={router.query?.Categories === item?._id}
                                onChange={(e) =>
                                  handleCategoryFilter(e, item, "Categories")
                                }
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="my-1">
                      <Image
                        src={Line}
                        width={500}
                        height={1}
                        alt="divider line"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      role="button"
                      onClick={() => handleAccordionOpen("Habit")}
                      className="flex gap-3 items-center justify-between"
                    >
                      <p className="text-[18px] source-sans-3">
                        Habit
                      </p>
                      {filterType === "Habit" ? (
                        <MdOutlineKeyboardArrowUp className="text-lg" />
                      ) : (
                        <MdOutlineKeyboardArrowDown className="text-lg" />
                      )}
                    </div>
                    {filterType === "Habit" && (
                      <div className="my-[20px]  max-h-[200px] overflow-y-scroll ">
                        {habits?.data?.map((item, index) => (
                          <div className="flex items-center mr-4" key={index}>
                            <label className="cusmCheckBox">
                              {item?.hebitName}
                              <input
                                type="checkbox"
                                checked={router.query?.Habit === item?._id}
                                onChange={(e) =>
                                  handleCategoryFilter(e, item, "Habit")
                                }
                              />
                              <span className="checkmark" />
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="my-1">
                      <Image
                        src={Line}
                        width={500}
                        height={1}
                        alt="divider line"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      role="button"
                      onClick={() => handleAccordionOpen("HealthRisk")}
                      className="flex gap-3 items-center justify-between"
                    >
                      <p className="text-[18px] source-sans-3">
                        Health Risks
                      </p>
                      {filterType === "HealthRisk" ? (
                        <MdOutlineKeyboardArrowUp className="text-lg" />
                      ) : (
                        <MdOutlineKeyboardArrowDown className="text-lg" />
                      )}
                    </div>
                    {filterType === "HealthRisk" && (
                      <div className="my-[20px]  max-h-[200px] overflow-y-scroll ">
                        {healthRisk?.healthRiskData?.map((item, index) => (
                          <div className="flex items-center mr-4" key={index}>
                            <label className="cusmCheckBox">
                              {item?.healthRiskTitle}
                              <input
                                type="checkbox"
                                checked={router.query?.HealthRisk === item?._id}
                                onChange={(e) =>
                                  handleCategoryFilter(e, item, "HealthRisk")
                                }
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 overflow-hidden rounded-xl border-[1px] border-[#D41958]">
                <div className="bg-[#D419580D] py-1.5 px-3 lg:flex lg:mb-0 mb-3 justify-between items-center">
                  <p className="text-lg text-[#D41958] sm:text-2xl  font-source-pro">
                    Tests
                  </p>
                  <div className="flex flex-wrap gap-2 sm:mb-3 lg:mb-0  justify-start items-center">
                    <p className="text-sm sm:text-xl">Search For</p>
                    <button
                      onClick={() => handlePackageFilter("")}
                      className={`${packageFilter === ""
                        ? "bg-[#8DBD4D] text-black"
                        : "bg-white text-secondary"
                        }  rounded-xl px-[30px] py-[6px] text-sm sm:text-lg`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => handlePackageFilter("lab-test")}
                      className={`${packageFilter === "lab-test"
                        ? "bg-[#8DBD4D] text-black"
                        : "bg-white text-secondary"
                        }  rounded-xl px-[20px] py-[6px] text-sm sm:text-lg `}
                    >
                      Test
                    </button>
                    <button
                      onClick={() => handlePackageFilter("health-package")}
                      className={`${packageFilter === "health-package"
                        ? "bg-green text-black"
                        : "bg-white text-secondary"
                        }  rounded-xl px-[20px] py-[6px] text-sm sm:text-lg`}
                    >
                      Packages
                    </button>
                  </div>
                </div>
                {data?.data?.testData?.length ? (
                  <div className="lg:p-[24px] p-[15px] grid  xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5  ">
                    {data?.data?.testData?.map((item, index) => (
                      <FacilitesCard
                        key={item?._id}
                        data={item}
                        handleCartData={handleCartData}
                        cart={cart}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="container py-[70px] text-center">
                    <span className="no-booking">No Data Found..!!</span>
                  </div>
                )}
                {data?.data?.testData?.length ? (
                  <ReactPaginate
                    previousLabel={
                      <span>
                        <ArrowLeft />
                      </span>
                    }
                    nextLabel={
                      <span>
                        {" "}
                        <ArrowRight />{" "}
                      </span>
                    }
                    pageCount={count || 1}
                    activeClassName="active"
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                    onPageChange={(page) => handlePagination(page)}
                    pageClassName={"page-item"}
                    nextClassName={"page-item next"}
                    pageLinkClassName={"page-link"}
                    containerClassName={
                      "pagination react-paginate justify-content-center my-2 pr-1 font-[500] !text-[18px]"
                    }
                  />
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookATestLayout;
