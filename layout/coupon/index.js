import Navbar from "components/navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import SpinnerComponent from "components/spinner";
import { GET_ALL_COUPONS } from "redux/actions/coupons";
import BreadCrumb from "components/breadcrumb";
import moment from "moment";
import TopNavbar from "components/topnav";
const breadcrumblist = [{ name: "Home", path: "/" }];
import { ArrowLeft, ArrowRight } from "react-feather";

const CouponLayout = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.coupon);
  const { coupons } = store;
  const [currentPage, setCurrentPage] = useState(1);
  const count = Number(Math.ceil(coupons?.data?.pagination?.total / 10));
  const handlePagination = (page) => {
    dispatch(GET_ALL_COUPONS(page.selected + 1));
    setCurrentPage(page.selected + 1);
  };

  useEffect(() => {
    dispatch(GET_ALL_COUPONS(1));
  }, [dispatch]);

  return (
    <>
      <section className="top_navbar">
        <TopNavbar />
      </section>

      <Navbar />
      {!coupons?.data ? (
        <SpinnerComponent />
      ) : (
        <div className="coupon-box ">
          <div className="coupon-frame-wrapper ">
            <div className="coupon-frame ">
              <div className="coupon-div container">
                <BreadCrumb active="Coupon" breadcrumblist={breadcrumblist} />
              </div>
              <div className="coupon-frame-2 container ">
                {coupons?.data?.couponData.map((coupon, i) => {
                  return (
                    <div className="coupon-frame-3" key={coupon._id}>
                      <div className="coupon-ellipse" />
                      <img
                        className="coupon-special-offer"
                        alt="Special offer"
                        src="https://generation-sessions.s3.amazonaws.com/9b4ff53975125c8691ad184b4a466460/img/special-offer-1.svg"
                      />
                      <img
                        className="coupon-line"
                        alt="Line"
                        src="https://generation-sessions.s3.amazonaws.com/9b4ff53975125c8691ad184b4a466460/img/line-275-2.svg"
                      />
                      <div className="coupon-div-wrapper">
                        <div className="coupon-element-cashback-wrapper">
                          <div className="coupon-element-cashback">
                            <span className="coupon-span">
                              ₹{coupon.discount}{" "}
                            </span>
                            <span className="coupon-text-wrapper-2">
                              cashback
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="coupon-frame-4">
                        <div className="coupon-frame-5">
                          <p className="coupon-p">
                            Get 20% Off For <br></br> 12 Months !
                          </p>
                          <div className="coupon-frame-6">
                            <img
                              className="coupon-group"
                              alt="Group"
                              src="https://generation-sessions.s3.amazonaws.com/9b4ff53975125c8691ad184b4a466460/img/group-1261152541-2@2x.png"
                            />
                            <div className="coupon-text-wrapper-3">
                              {coupon.discount}
                            </div>
                          </div>
                        </div>

                        {moment() <= moment(coupon.validity) ? (
                          <p className="coupon-valid-till">
                            Valid till{" "}
                            {moment(coupon.validity).format("D MMMM YYYY")}
                          </p>
                        ) : (
                          <p className="text-danger">
                            Expired On{" "}
                            {moment(coupon.validity).format("D MMMM YYYY")}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CouponLayout;
