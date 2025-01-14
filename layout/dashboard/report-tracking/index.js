import React, { useEffect } from "react";
import BreadCrumb from "components/breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { GET_REPORT_TRACKING } from "redux/actions/booking";
import TrackTimeline from "./timeline";
import { GET_USER_DETAILS } from "redux/actions/auth";

const breadcrumblist = [
  { name: "Home", path: "/" },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
];

const ReportTrackingLayout = () => {
  const dispatch = useDispatch();
  const getReportTracking = useSelector(
    (state) => state?.booking?.getReportTracking
  );
  const user = useSelector((state) => state?.auth?.logedInUser);

  useEffect(() => {
    dispatch(GET_USER_DETAILS());
  }, []);

  useEffect(() => {
    if (user?.data?.length > 0) {
      let mobile = user?.data[0]?.mobile;
      dispatch(GET_REPORT_TRACKING(mobile));
    }
  }, [user]);
  console.log("getReportTracking", getReportTracking);
  return (
    <>
      <div className="container">
        <BreadCrumb active="Report Tracking" breadcrumblist={breadcrumblist} />
        <section className="w-full">
          {getReportTracking?.data?.length > 0 ? (
            getReportTracking?.data?.map((report, i) => {
              return (
                <details
                  key={report?.booking_id}
                  className="mb-3 border bg-white p-2 rounded-xl shadow-lg group mx-auto open:!max-h-full transition-[max-height] duration-500 overflow-hidden"
                >
                  <summary className="w-full flex justify-between items-center outline-none text-[18px] font-normal cursor-pointer focus:underline focus:text-orange marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]">
                    <span className="ml-4">{report?.name}</span>{" "}
                    <span className="text-gray-500">
                      Order Id ({report?.order_unique_code})
                    </span>
                  </summary>
                  <hr className="my-2 scale-x-150" />
                  <div className="text-sm -m-4 -mt-2 p-4 bg-gray-50">
                    <table className="border-[1px]  border-[#EFF1F5] w-full">
                      <tbody>
                        <tr>
                          <td className="border text-black w-32 border-[#EFF1F5] text-sm sm:text-lg  p-2 font-[500]">
                            Patient Name
                          </td>
                          <td className="border text-secondary border-[#EFF1F5]text-sm sm:text-lg  p-2">
                            {report?.name}
                          </td>
                        </tr>
                        <tr>
                          <td className="border text-black w-32 border-[#EFF1F5] text-sm sm:text-lg  p-2 font-[500]">
                            Age
                          </td>
                          <td className="border text-secondary border-[#EFF1F5]text-sm sm:text-lg  p-2">
                            {report?.age}
                          </td>
                        </tr>
                        <tr>
                          <td className="border text-black w-32 border-[#EFF1F5] text-sm sm:text-lg  p-2 font-[500]">
                            Gender
                          </td>
                          <td className="border text-secondary border-[#EFF1F5]text-sm sm:text-lg  p-2">
                            {report?.gender}
                          </td>
                        </tr>
                        <tr>
                          <td className="border text-black w-32 border-[#EFF1F5] text-sm sm:text-lg  p-2 font-[500]">
                            Order ID
                          </td>
                          <td className="border text-secondary  border-[#EFF1F5] text-sm sm:text-lg  p-2">
                            {report?.order_unique_code}
                          </td>
                        </tr>
                        <tr>
                          <td className="border text-black w-32 border-[#EFF1F5] text-sm sm:text-lg  p-2 font-[500]">
                            Slot{" "}
                          </td>
                          <td className="border text-secondary  border-[#EFF1F5] text-sm sm:text-lg  p-2">
                            {report?.test_date} {report?.time_slot}
                          </td>
                        </tr>
                        <tr>
                          <td className="border text-black w-32 border-[#EFF1F5] text-sm sm:text-lg  p-2 font-[500]">
                            Address
                          </td>
                          <td className="border text-secondary  border-[#EFF1F5] text-sm sm:text-lg  p-2">
                            {report?.address}
                          </td>
                        </tr>
                        <tr>
                          <td className="border text-black w-32 border-[#EFF1F5] text-sm sm:text-lg  p-2 font-[500]">
                            Remark
                          </td>
                          <td className="border text-secondary  border-[#EFF1F5] text-sm sm:text-lg  p-2">
                            {report?.remark}
                          </td>
                        </tr>
                        <tr>
                          <td className="border text-black  w-44 border-[#EFF1F5] text-sm sm:text-lg  p-2 font-[500]">
                            Delivery Charge
                          </td>
                          <td className="border text-secondary  border-[#EFF1F5] text-sm sm:text-lg  p-2">
                            ₹{report?.delivery_charge}/-
                          </td>
                        </tr>
                        <tr>
                          <td className="border text-black w-32 border-[#EFF1F5] text-sm sm:text-lg  p-2 font-[500]">
                            Total amount
                          </td>
                          <td className="border text-secondary  border-[#EFF1F5] text-sm sm:text-lg  p-2">
                            ₹{report?.delivery_charge}/-
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <TrackTimeline booking_status={report?.booking_status} />
                  </div>
                </details>
              );
            })
          ) : (
            <div className="w-full h-56 flex justify-center items-center ">
              <p>No Record Found for you !</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default ReportTrackingLayout;
