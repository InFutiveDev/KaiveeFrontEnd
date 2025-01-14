import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SpinnerComponent from "components/spinner";
import { GET_USER_BOOKINGS } from "redux/actions/booking";
import moment from "moment/moment";
import ReactPaginate from "react-paginate";
import { ArrowLeft, ArrowRight } from "react-feather";

const MyBookings = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.booking);
  const { userBookings } = store;
  const [currentPage, setCurrentPage] = useState(1);
  const count = Number(Math.ceil(userBookings?.data?.pagination?.total / 5));

  useEffect(() => {
    dispatch(GET_USER_BOOKINGS(1));
  }, [dispatch]);

  const handlePagination = (page) => {
    dispatch(GET_USER_BOOKINGS(page.selected + 1));
    setCurrentPage(page.selected + 1);
  };

  return (
    <>
      {!userBookings?.data ? (
        <SpinnerComponent />
      ) : (
        <>
          <div id="myBookings" className="active">
            <div className="container profileContent p-0">
              <div className="mainContent">
                <div className="head">
                  <p>My Bookings</p>
                </div>{" "}
                <div className="contentInfo mb-3">
                  {userBookings?.data?.data?.length ? (
                    <>
                      {userBookings?.data?.data?.map((booking) => {
                        return (
                          <div key={booking._id} className="bookingInfo">
                            <table className="dashbord-table">
                              <thead className="dashbord-table">
                                <tr className="text-black">
                                  <th className="">Name</th>
                                  <th className="">Address</th>
                                  <th className="">Booked For</th>
                                  <th className="">Amount</th>
                                  <th className="">
                                    Sample Collection Date &amp; Time
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="table_body">
                                <tr className="text-black">
                                  <td className="">
                                    {booking?.testData?.specialityName}
                                  </td>
                                  <td className="">{booking.address}</td>
                                  <td className="">
                                    {booking.memberData?.fullName || "Self"}
                                  </td>
                                  <td className="text-green px-3">
                                    {booking.paymentAmount}
                                  </td>
                                  <td className="text-green px-3">
                                    {moment(
                                      booking.sampleCollectionDateTime
                                    ).format("dddd, Do MMMM, h:mm a")}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <span className="no-booking">No Bookings Found..!!</span>
                    </>
                  )}
                </div>
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
          </div>
        </>
      )}
    </>
  );
};

export default MyBookings;
