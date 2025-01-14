import Image from "next/image";
import { useEffect, useState } from "react";
import AddToCart from "components/addToCart";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_TEST } from "redux/actions/test";
import ReactPaginate from "react-paginate";
import SpinnerComponent from "components/spinner";
import { useRouter } from "next/router";
import BreadCrumb from "components/breadcrumb";
import notFound from "images/undraw_not_found_re_bh2e.svg";
import labexperiment from "assets/images/labexperiment.svg";
import { ArrowLeft, ArrowRight, Eye } from "react-feather";

const breadcrumblist = [{ name: "Home", path: "/" }];

const TestLayout = () => {
  const [cart, setCart] = useState({});
  const dispatch = useDispatch();
  const [updateCart, setUpdateCart] = useState("");
  const store = useSelector((state) => state);
  const { test } = store;
  const { tests } = test;
  const router = useRouter();
  let query = router.query;

  const handleCartData = (cartData) => {
    setCart(cartData);
    setUpdateCart(cartData);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const count = Number(Math.ceil(tests?.data?.pagination?.total / 10));
  // ** Function in get data on page change
  const handlePagination = (page) => {
    dispatch(GET_ALL_TEST(page.selected + 1));
    setCurrentPage(page.selected + 1);
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
    }
    dispatch(GET_ALL_TEST(1, query.search));
  }, [dispatch, updateCart, query]);

  return (
    <>
      {!tests?.data?.testData ? (
        <SpinnerComponent />
      ) : (
        <div className="web-view-reverse">
          <section className="services">
            <div className="container">
              <BreadCrumb active="Tests" breadcrumblist={breadcrumblist} />
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <h2 className="text-start title-test">All Tests</h2>
                </div>
                {tests?.data?.testData.length ? (
                  <>
                    {tests?.data?.testData.map((test) => {
                      return (
                        <div
                          className="col-lg-4 col-md-6 col-sm-12"
                          key={test._id}
                        >
                          <div
                            className="cardWrap py-3 test-cardwrap"
                            style={{ padding: "10px", borderRadius: "40px" }}
                          >
                            {/* <div className="cardWrap-productTitle">
                              <Link href={`/test-details/${test._id}`}>
                                {test.specialityName}
                              </Link>
                            </div> */}
                            {test._id !== test.offer_price ? (
                              <div className="footerbarBox title-footerbarbox">
                                <span
                                  style={{
                                    borderRadius: "20px",
                                  }}
                                  className="test-offertext"
                                >
                                  {(test.mrp - test.offer_price) / 100}% off
                                </span>
                              </div>
                            ) : (
                              ""
                            )}
                            <div
                              className="test-title"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                              onClick={() =>
                                router.push(`/test-details/${test._id}`)
                              }
                            >
                              <span>{test.specialityName}</span>
                              {test._id !== test.offer_price ? (
                                <div className="footerbarBox title-footerbarbox">
                                  <span
                                    style={{
                                      borderRadius: "20px",
                                      backgroundColor: "lightgreen",
                                    }}
                                    className="test-offertext"
                                  >
                                    ₹ {test.mrp}
                                  </span>
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                            <ul className="border-0">
                              <li>
                                <ion-icon
                                  name="checkmark-circle"
                                  aria-hidden="true"
                                  style={{ color: "red" }}
                                />{" "}
                                URINE R/E
                              </li>
                              <li>
                                <ion-icon
                                  name="checkmark-circle"
                                  aria-hidden="true"
                                  style={{ color: "red" }}
                                />{" "}
                                KFT (SST)
                              </li>
                              <li>
                                <ion-icon
                                  name="checkmark-circle"
                                  aria-hidden="true"
                                  style={{ color: "red" }}
                                />{" "}
                                TFT [FT3,FT4,TSH] (SST)
                              </li>
                              <li>
                                <ion-icon
                                  name="checkmark-circle"
                                  aria-hidden="true"
                                  style={{ color: "red" }}
                                />{" "}
                                LIPID PROFILE (SST)
                              </li>
                            </ul>
                            <div className="p-0 justify-content-start"></div>
                            <div className="footerbarBox p-0 justify-content-start">
                              <div className="footerbarBox">
                                <button
                                  className="viewmore-btn"
                                  onClick={() =>
                                    router.push(`/test-details/${test._id}`)
                                  }
                                >
                                  <Eye />
                                </button>
                              </div>
                              <div className="test-addtocartbutton">
                                <AddToCart
                                  test={test}
                                  handleCartData={handleCartData}
                                  cart={cart}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <div className="col-md-12 col-sm-12 d-flex justify-content-center">
                      <Image
                        height={400}
                        width={400}
                        src={notFound}
                        alt="notFound"
                      />
                    </div>
                    <div className="col-md-12 col-sm-12 d-flex justify-content-center mb-3">
                      <span>Tests Not Found</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            {tests?.data?.testData.length ? (
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
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                activeClassName="active"
                forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                onPageChange={(page) => handlePagination(page)}
                pageClassName={"page-item"}
                nextClassName={"page-item next"}
                pageLinkClassName={"page-link"}
                containerClassName={
                  "pagination react-paginate justify-content-center my-2 pr-1"
                }
              />
            ) : null}
          </section>
          <section className="sliders">
            <div className="inner-banner-top">
              <div className="boxTest">
                <div className="frame-wrapper">
                  <div className="frame">
                    <div className="div">
                      <h1 className="text-wrapper">Services</h1>
                      <p className="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                    </div>
                    <div style={{ marginLeft: "25%;" }}>
                      <Image src={labexperiment} alt="banner" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <img src={InnnerBanner} alt="banner" /> */}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default TestLayout;
