import BreadCrumb from "components/breadcrumb";
import SpinnerComponent from "components/spinner";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_USER_BOOKINGS,
  GET_USER_BOOKINGS_STATUS,
} from "redux/actions/booking";
import { ArrowLeft, ArrowRight } from "react-feather";
import moment from "moment";
import LazyLoad from "react-lazyload";
import BookingPaymentModal from "components/bookingPaymentModal";

const breadcrumblist = [
  { name: "Home", path: "/" },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
];
const MyBookingLayout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.booking);
  const { userBookings } = store;
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const count = Number(Math.ceil(userBookings?.data?.pagination?.total / 5));
  const [paymentLinksData, setPaymentLinksData] = useState({});
  console.log("userBookings", userBookings);
  const handlePaymentStatus = async (id) => {
    try {
      const res = await dispatch(GET_USER_BOOKINGS_STATUS(id));
      console.log("res------>>>>????", res.data.data);
      if (res?.success && !res?.data?.data?.payment) {
        setPaymentLinksData(res?.data?.data);
        setOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePayNow = () => {
    if (paymentLinksData?.order_id) {
      localStorage.setItem(
        "orderId",
        JSON.stringify(paymentLinksData?.order_id)
      );
    }
    if (paymentLinksData?.finaleData?.payment_links?.web) {
      window.open(paymentLinksData?.finaleData?.payment_links?.web, "_self");
    }
  };
  useEffect(() => {
    dispatch(GET_USER_BOOKINGS(1));
  }, [dispatch]);

  const handlePagination = (page) => {
    dispatch(GET_USER_BOOKINGS(page.selected + 1));
    setCurrentPage(page.selected + 1);
  };

  return (
    <LazyLoad>
      <div className="container py-[70px]">
        <BreadCrumb active="My Booking" breadcrumblist={breadcrumblist} />
        {!userBookings?.data ? (
          <SpinnerComponent />
        ) : (
          <div>
            <div className="rounded-xl border-[1px] border-[#E4E4E7] overflow-hidden ">
              <div className="p-[18px] bg-[#D419580D] ">
                <p className="text-lg font-semibold">Your Bookings</p>
              </div>
              {userBookings?.data?.data?.length ? (
                <>
                  {userBookings?.data?.data?.map((booking, index) => {
                    return (
                      <div className="p-[10px] sm:p-[32px]" key={index}>
                        <div className="bg-[#def3e338] p-[12px] sm:p-[24px] rounded-xl">
                          <div className="flex items-center justify-between pb-[24px] border-b-[1px] border-[#E4E4E7]">
                            <div className="flex gap-1">
                              <span className="text-xl font-semibold">
                                {/* Booking Status :- */}
                                Booking ID :
                              </span>
                              <p className="text-capitalize text-[#D41958]">
                                {booking?.id || ""}
                              </p>
                              {/* <button className="ml-[10px] py-[6px] px-[16px] rounded-full bg-[#E3F2FF] text-[#216FB0]">
                                pending
                              </button> */}
                            </div>
                            
                          </div>
                          <div className="mt-[24px]">
                            <div className="my-[5px] flex justify-start space-x-2">
                              <p className="text-[14px] sm:text-[16px] font-semibold text-[#52525B]">
                                Test :
                              </p>
                              <div className="flex flex-wrap text-[14px] sm:text-[16px]">
                                {booking?.testData
                                  ?.map((test) => {
                                    return test?.test_name;
                                  })
                                  .join(" , ")}
                              </div>
                            </div>
                            <div className="my-[5px] flex justify-start space-x-2">
                              <p className="text-[14px] sm:text-[16px]  font-semibold text-[#52525B]">
                                Collection Type :
                              </p>
                              <div className="flex flex-wrap text-[14px] sm:text-[16px]">
                                {booking?.collectionType == "centre-visit"
                                  ? "Centre visit"
                                  : "Home collection"}
                              </div>
                            </div>
                            <div className="my-[5px] flex justify-start space-x-2">
                              <p className="text-[14px] sm:text-[16px] font-semibold text-[#52525B]">
                                Payment Type :
                              </p>
                              <div className="flex flex-wrap ">
                                <span className="text-[#D41958] text-[14px] sm:text-[16px] font-semibold">
                                  {booking?.paymentType === "cod"
                                    ? "COD"
                                    : "Online"}
                                </span>
                              </div>
                            </div>
                            <div className="my-[5px] flex justify-start space-x-2">
                              <p className="text-[14px] sm:text-[16px] font-semibold text-[#52525B]">
                                Total Amount :
                              </p>
                              <div className="flex flex-wrap text-[14px] sm:text-[16px]">
                                ₹ {booking?.paymentAmount || ""}/-
                              </div>
                            </div>
                            <div className="my-[5px] flex justify-start space-x-2">
                              <p className="text-[14px] sm:text-[16px] font-semibold text-[#52525B]">
                                Payment Status :
                              </p>
                              <div className="flex flex-wrap text-[14px] sm:text-[16px]">
                                {booking?.is_paid ? (
                                  <span className="text-[#37B226]">Paid</span>
                                ) : (
                                  <span className="text-[#FF0B0B]">Unpaid</span>
                                )}
                              </div>
                            </div>
                            <div>
                              <div className="text-[14px] sm:text-[16px] font-semibold text-[#52525B]">
                                Date :{" "}
                                <span className=" text-[14px] sm:text-[16px]">
                                  {/* {booking?.createdAt.split("T")[0]} */}
                                  {moment(booking?.createdAt).format(
                                    "DD-MM-YYYY"
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="flex justify-center py-[70px]">
                  <span className="no-booking">No Bookings Found..!!</span>
                </div>
              )}

              {userBookings?.data?.data?.length ? (
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
                    "pagination react-paginate justify-content-center my-2 pr-1"
                  }
                />
              ) : null}
            </div>
          </div>
        )}
      </div>
      {open && (
        <BookingPaymentModal
          handlePayNow={handlePayNow}
          setOpen={setOpen}
          open={open}
          data={paymentLinksData}
        />
      )}
    </LazyLoad>
  );
};

export default MyBookingLayout;
