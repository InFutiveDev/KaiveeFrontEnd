import Navbar from "components/navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import SpinnerComponent from "components/spinner";
import { GET_ALL_COUPONS } from "redux/actions/coupons";
import BreadCrumb from "components/breadcrumb";
import moment from "moment";
import TopNavbar from "components/topnav";
import { ArrowLeft, ArrowRight } from "react-feather";

const breadcrumblist = [{ name: "Home", path: "/" }];

const CouponLayout = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state?.coupon ?? {});
  const { coupons = { data: { pagination: { total: 0 }, couponData: [] } } } = store;

  const [currentPage, setCurrentPage] = useState(1);
  const count = Math.ceil(coupons?.data?.pagination?.total / 10) || 1;

  useEffect(() => {
    dispatch(GET_ALL_COUPONS(1));
  }, [dispatch]);

  const handlePagination = (page) => {
    dispatch(GET_ALL_COUPONS(page.selected + 1));
    setCurrentPage(page.selected + 1);
  };

  return (
    <>
      <section className="top_navbar">
        <TopNavbar />
      </section>
      <Navbar />
      {!coupons?.data?.couponData?.length ? (
        <SpinnerComponent />
      ) : (
        <div className="coupon-box">
          <div className="coupon-frame-wrapper">
            <div className="coupon-frame">
              <div className="coupon-div container">
                <BreadCrumb active="Coupon" breadcrumblist={breadcrumblist} />
              </div>
              <div className="coupon-frame-2 container">
                {coupons?.data?.couponData?.map((coupon) => (
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
                          <span className="coupon-span">₹{coupon.discount} </span>
                          <span className="coupon-text-wrapper-2">cashback</span>
                        </div>
                      </div>
                    </div>
                    <div className="coupon-frame-4">
                      <div className="coupon-frame-5">
                        <p className="coupon-p">Get 20% Off For 12 Months!</p>
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
                          Valid till {moment(coupon.validity).format("D MMMM YYYY")}
                        </p>
                      ) : (
                        <p className="text-danger">
                          Expired On {moment(coupon.validity).format("D MMMM YYYY")}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <ReactPaginate
                previousLabel={<ArrowLeft />}
                nextLabel={<ArrowRight />}
                pageCount={count}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                activeClassName="active"
                forcePage={currentPage - 1}
                onPageChange={handlePagination}
                pageClassName="page-item"
                nextClassName="page-item next"
                pageLinkClassName="page-link"
                containerClassName="pagination react-paginate justify-content-center my-2 pr-1"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CouponLayout;
