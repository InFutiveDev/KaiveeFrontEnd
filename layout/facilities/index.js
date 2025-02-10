import React, { memo, useEffect, useMemo, useState } from "react";
import { Searchicon } from "assets/images/SvgImage";
import { GalleryImg2 } from "assets/images/SvgImage";
import { CallBlackImg } from "assets/images/SvgImage";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { GET_TEST_BY_CATEGORY } from "redux/actions/test";
import book1 from "assets/images/Finalimg/Book/Book a Health Package.webp";
import book2 from "assets/images/Finalimg/Book/Book an Appoinment.webp";
import book3 from "assets/images/Finalimg/Book/Book a test.webp";
import ReactPaginate from "react-paginate";
import { ArrowLeft, ArrowRight } from "react-feather";
import dynamic from "next/dynamic";
const Faqs = dynamic(() => import("components/faqs"));
const FacilitiesBanner = dynamic(() => import("./FacilitiesBanner"));
const FacilitesCard = dynamic(() => import("components/facilitiesCard"));
const InquiryForm = dynamic(() => import("components/inquiryForm"));

const FacilitiesCategoryLayout = ({ id, category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState({});
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const router = useRouter();
  const store = useSelector((state) => state);
  const {
    test,
    // category: { category },
  } = store;
  const { testsByCategory } = test;

  const handleCartData = (cartData) => {
    setCart(cartData);
  };

  const count = Number(
    Math.ceil(testsByCategory?.data?.pagination?.total / 10)
  );
  // ** Function in get data on page change
  const handlePagination = (page) => {
    dispatch(GET_TEST_BY_CATEGORY(category[0]?._id, page.selected + 1, search));
    setCurrentPage(page.selected + 1);
  };

  const handleChangeSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    dispatch(GET_TEST_BY_CATEGORY(category[0]?._id, 1, value));
  };
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
    }
    if (category?.length > 0) {
      dispatch(GET_TEST_BY_CATEGORY(category[0]?._id, 1, search));
    }
  }, [dispatch, category]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
    }
  }, [dispatch]);

  // Scroll to enquiry form if hash is present in the URL
  useEffect(() => {
    if (window.location.hash === "#enquiry_form") {
      const enquiryFormElement = document.getElementById("enquiry_form");
      if (enquiryFormElement) {
        enquiryFormElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  // useEffect(() => {
  //   if (category?.length > 0 && category[0]?.category_menu_active === 0) {
  //     router.push("/error");
  //   }
  // }, [category]);

  console.log("category", category);
  return (
    <div>
      {category?.length > 0 && category[0]?.category_menu_active === 1 ? (
        <div>
          <section className="mb-3">
            {category?.length > 0 && (
              <FacilitiesBanner category={category[0]} />
            )}
          </section>

          {category?.length > 0 && (
            <div className="container ">
              <div className=" grid lg:grid-cols-3 grid-cols-1 gap-2 ">
                <div className="col-span-2">
                  <div>
                    <h1 className="text-black font-semibold lg:text-[32px] text-lg mb-[20px]">
                      {category[0]?.category_name}
                    </h1>
                    <div className="flex flex-col gap-y-2 ">
                      {category[0]?.category_desc !== "null" && (
                        <div
                          className="editor_div_facilites"
                          dangerouslySetInnerHTML={{
                            __html: category[0]?.category_desc,
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="mt-[30px]">
                    <div className="border shadow-sm  p-1 rounded-md flex justify-start items-center space-x-2 ">
                      <div className="w-5 h-5">
                        <Searchicon />
                      </div>
                      <input
                        type="text"
                        value={search}
                        onChange={(e) => handleChangeSearch(e)}
                        className=" placeholder:font-[200] w-full placeholder:text-[16px] "
                        placeholder="Search here Test Category/Subcategory"
                      />
                    </div>
                  </div>
                  <div className="mt-[30px]">
                    <p className="text-black font-semibold lg:text-[32px] text-lg mb-[30px]">
                      Related Tests
                    </p>
                    <div>
                      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-4">
                        {(testsByCategory?.data?.categoryData || []).map(
                          (item, index) => (
                            <FacilitesCard
                              data={item}
                              handleCartData={handleCartData}
                              cart={cart}
                              key={index}
                            />
                          )
                        )}
                      </div>
                      {count ? (
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
                            "pagination react-paginate justify-content-center my-2 pr-1 font-[500] !text-[18px] sm:justify-start"
                          }
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  {category[0]?.category_article !== "null" && (
                    <div
                      className="editor_div_facilites"
                      dangerouslySetInnerHTML={{
                        __html: category[0]?.category_article,
                      }}
                    />
                  )}
                </div>

                <div className="w-full h-min	 sticky lg:top-[197px] xl:top-[161px] flex lg:justify-center items-start mb-[30px]">
                  <InquiryForm />
                </div>
              </div>
            </div>
          )}

          <div className="bg-[#FAFAFA] ">
            <div className="py-[35px] md:py-[70px]  container">
              <p className="text-black font-semibold lg:text-[32px] text-xl md:mb-[32px] mb-[20px]">
                Tests Sub - Categories
              </p>
              <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 md:gap-6 gap-3">
                <div
                  className="rounded-2xl border-[1px] border-[#E4E4E7] bg-white shadow-md p-[16px] lg:p-[24px] cursor-pointer"
                  onClick={() => router.push(`/health-packages`)}
                >
                  <div className="flex gap-3 xl:items-start lg:items-center items-start">
                    <div className="rounded-lg bg-[#FCF6DD] p-[5px] md:p-[10px] md:w-72 w-[9rem]">
                      <img src={book1.src} alt="" className="w-72" />
                    </div>
                    <div>
                      <p className="text-black font-semibold xl:text-[20px] lg:text-[18px] text-[14px]">
                        Book a Health Package
                      </p>
                      <p className="text-secondary xl:text-[18px] lg:text-[15px] text-[13px]">
                        Health Checkup is early detection of potentially
                        life-threatening diseases or conditions.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="rounded-2xl border-[1px] border-[#E4E4E7] bg-white shadow-md p-[16px] lg:p-[24px] cursor-pointer"
                  onClick={() => router.push(`/dashboard/book-an-appointment`)}
                >
                  <div className="flex gap-3 xl:items-start lg:items-center items-start">
                    <div className="rounded-lg bg-[#FCF6DD] p-[5px] md:p-[10px] md:w-72 w-[9rem]">
                      <img src={book2.src} alt="" className="w-72" />
                    </div>
                    <div>
                      <p className="text-black font-semibold xl:text-[20px] lg:text-[18px] text-[14px]">
                        Book an Appointment
                      </p>
                      <p className="text-secondary xl:text-[18px] lg:text-[15px] text-[13px]">
                        Our online appointment booking system enhances patient
                        safty and satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="rounded-2xl border-[1px] border-[#E4E4E7] bg-white  shadow-md p-[16px] lg:p-[24px] cursor-pointer "
                  onClick={() => router.push(`/book-a-test`)}
                >
                  <div className="flex gap-3 xl:items-start lg:items-center items-start">
                    <div className="rounded-lg bg-[#FCF6DD] p-[5px] md:p-[10px] w-[7rem] md:w-56 ">
                      <img src={book3.src} alt="" className="w-56" />
                    </div>
                    <div>
                      <p className="text-black font-semibold xl:text-[20px] lg:text-[18px] text-[14px]">
                        Book a Test
                      </p>
                      <p className="text-secondary xl:text-[18px] lg:text-[15px] text-[13px]">
                        Find and Book all Pathology & Radiology tests info and
                        cost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background-image-health h-[40vh] lg:h-[50vh] md:h-[40vh] sm:h-[40vh]  flex justify-center items-center  mb-[20px]">
            <div className="flex lg:px-[30px] px-[12px] justify-center items-center flex-col gap-4">
              <p className="text-white text-center lg:text-[40px] text:[26px] font-bold font-source-pro">
                Your Health Our Happiness
              </p>
              <p className="text-white text-center lg:text-[20px] text-[16px]">
                Didn't find what you were looking for! Click to call us now.
              </p>
              <div className="flex gap-2">
                {/* <button className=" flex gap-x-1 md:gap-x-2 justify-center items-center text-blacke font-medium bg-orange rounded py-[10px] lg:px-[24px] px-[10px] lg:text-[18px] text-[14px]">
                  <GalleryImg2 />
                  Add Image
                </button> */}
                {/* <button className="flex gap-x-1 md:gap-x-2 justify-center items-center text-orange bg-white rounded py-[10px] lg:px-[24px] px-[10px] lg:text-[18px] text-[14px]">
                  <CallYellowImg />
                  Call Now
                </button> */}
                <Link
                  href="tel:011-2000-2000"
                  className="flex gap-x-1 md:gap-x-2 justify-center items-center text-blacke font-medium bg-[#D41958] rounded py-[10px] lg:px-[24px] px-[10px] lg:text-[18px] text-[14px]"
                >
                  <CallBlackImg />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            {category?.[0]?._id && <Faqs id={category?.[0]?._id} />}
          </div>
          {/* <div className="container py-[35px] md:py-[70px]">
            <p className="text-black font-semibold lg:text-[32px] text-xl mb-[20px]">
              FAQ
            </p>
            <AccordionComponents />
          </div> */}
        </div>
      ) : (
        <div className="h-96">
          <div className="flex items-center justify-center w-full h-1/2">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(FacilitiesCategoryLayout);
