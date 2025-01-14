import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AddToCart from "components/addToCart";
import { useDispatch, useSelector } from "react-redux";
import { GET_TEST_BY_CATEGORY } from "redux/actions/test";
import { GET_CATEGORY_BY_ID } from "redux/actions/categories";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import SpinnerComponent from "components/spinner";
import BreadCrumb from "components/breadcrumb";
import notFound from "images/undraw_not_found_re_bh2e.svg";
import facilitiescard from "../../assets/images/facilities-card.png";
import socailLinks from "../../assets/images/social-links.svg";
import dc1 from "../../assets/images/group-1410141012@2x.png";
import checkupHealth from "../../assets/images/checkup-health.png";
import { ArrowLeft, ArrowRight } from "react-feather";
const breadcrumblist = [{ name: "Home", path: "/" }];

const CategoryLayout = () => {
  const [id, setid] = useState("");
  const [cart, setCart] = useState({});
  const dispatch = useDispatch();
  const [updateCart, setUpdateCart] = useState("");
  const router = useRouter();
  // const { id } = router.query
  const store = useSelector((state) => state);
  const { test, category } = store;
  const { testsByCategory } = test;

  const handleCartData = (cartData) => {
    setCart(cartData);
    setUpdateCart(cartData);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const count = Number(
    Math.ceil(testsByCategory?.data?.pagination?.total / 10)
  );
  // ** Function in get data on page change
  const handlePagination = (page) => {
    dispatch(GET_TEST_BY_CATEGORY(id, page.selected + 1, ""));
    setCurrentPage(page.selected + 1);
  };
  useEffect(() => {
    if (router.query.id) {
      localStorage.setItem("facilities_category_id", router.query.id);
    }
    setid(localStorage.getItem("facilities_category_id"));
  });

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
    }
    if (id) {
      dispatch(GET_TEST_BY_CATEGORY(id, 1, ""));
      dispatch(GET_CATEGORY_BY_ID(id));
    }
  }, [dispatch, id, updateCart]);

  return (
    <>
      {!category?.category?.data[0] || !testsByCategory?.data?.categoryData ? (
        <SpinnerComponent />
      ) : (
        <div className="web-view-reverse">
          <section className="services-category">
            <div className="container">
              <BreadCrumb active="Category" breadcrumblist={breadcrumblist} />
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <h2 className="text-left text-capitalize title-test">
                    {category.category.data[0].perent_category_name}
                  </h2>
                  <div
                    className="facility-content"
                    dangerouslySetInnerHTML={{
                      __html: category.category.data[0].category_desc,
                    }}
                  />
                </div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  {testsByCategory?.data?.categoryData.length ? (
                    <>
                      {testsByCategory?.data?.categoryData.map((test) => {
                        return (
                          <>
                            <div className="col-6" key={test._id}>
                              <div className="box">
                                <div className="frame-wrapper">
                                  <div className="frame">
                                    <div className="div">
                                      <div className="frame-2">
                                        <Link
                                          href={`/test-details/${test._id}`}
                                        >
                                          <div className="text-wrapperbtn">
                                            {test.specialityName}
                                          </div>
                                        </Link>
                                        <p className="p">
                                          Also Known as key2 loremIpsum
                                        </p>
                                      </div>
                                      <div className="div-wrapper">
                                        <div className="frame-3">
                                          <Image
                                            width={20}
                                            className="discount"
                                            alt="Discount"
                                            src={facilitiescard}
                                          />
                                          <div className="text-wrapper-2">
                                            40% off
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="502"
                                      height="2"
                                      viewBox="0 0 502 2"
                                      fill="none"
                                    >
                                      <path
                                        d="M1 1H501"
                                        stroke="url(#paint0_linear_318_33352)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                      />
                                      <defs>
                                        <linearGradient
                                          id="paint0_linear_318_33352"
                                          x1="1"
                                          y1="1"
                                          x2="500.587"
                                          y2="-13.3586"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop
                                            stopColor="#0CAFF3"
                                            stopOpacity="0.11"
                                          />
                                          <stop
                                            offset="0.514288"
                                            stopColor="#0CAFF3"
                                          />
                                          <stop
                                            offset="1"
                                            stopColor="#0CAFF3"
                                            stopOpacity="0.11"
                                          />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                    <div className="div">
                                      <div className="frame-4">
                                        <div className="frame-5">
                                          <h1 className="h-1">
                                            ₹{test.offer_price}
                                          </h1>
                                          <div className="text-wrapper-3">
                                            ₹{test.mrp}
                                          </div>
                                        </div>
                                      </div>
                                      <AddToCart
                                        test={test}
                                        handleCartData={handleCartData}
                                        cart={cart}
                                      />
                                    </div>
                                    {/* <Image
                                        className="group"
                                        alt="Group"
                                        src={dc1}
                                      /> */}
                                    <Image
                                      className="img"
                                      alt="Group"
                                      src={dc1}
                                    />
                                    <div className="ellipse" />
                                    <div className="ellipse-2" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <div className="col-md-12 col-sm-12 d-flex justify-content-center">
                        <div className="d-flex flex-column align-items-center">
                          <Image
                            height={400}
                            width={400}
                            src={notFound}
                            alt="notFound"
                          />
                          <span>Tests Not Found</span>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 d-flex justify-content-center mb-3"></div>
                    </>
                  )}
                </div>
              </div>
              {testsByCategory?.data?.categoryData.length ? (
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
                  activeClassName="active facility-pagination"
                  forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                  onPageChange={(page) => handlePagination(page)}
                  pageClassName={"page-item"}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={3}
                  nextClassName={"page-item next"}
                  pageLinkClassName={"page-link"}
                  containerClassName={
                    "pagination react-paginate justify-content-center my-4 pr-1"
                  }
                />
              ) : null}
              <div className="col-md-12 col-sm-12">
                <h2 className="text-left text-capitalize title-test">
                  Article
                </h2>
                <div
                  className="facility-content"
                  dangerouslySetInnerHTML={{
                    __html: category.category.data[0].category_article,
                  }}
                />
              </div>
            </div>
          </section>
          <section className="sliders">
            <div className="">
              <div className="boxCategory">
                <div className="frame-wrapper">
                  <div className="frame">
                    <div className="overlap">
                      <div className="div">
                        <h1 className="a-healthy-body-a">
                          A Healthy Body, A Healthy Mind:
                          <br />
                          get A Check-up For Both
                        </h1>
                        <div className="div-wrapper">
                          <div className="text-wrapper">Learn More</div>
                        </div>
                        <Image
                          className="social-links"
                          alt="Social links"
                          src={socailLinks}
                        />
                      </div>
                      <div className="checkup">
                        <div className="overlap-group">
                          <div className="ellipse" />
                          <Image
                            className="checkup-health-care"
                            alt="Checkup health care"
                            src={checkupHealth}
                          />
                        </div>
                      </div>
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

export default CategoryLayout;
