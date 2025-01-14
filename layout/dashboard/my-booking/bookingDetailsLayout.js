import React from "react";
import BreadCrumb from "components/breadcrumb";
import Line from "assets/images/dashboard/Line 304.png";
import ImageOne from "assets/images/health-packages/city advanced health package website (1350x1050) 1.png";

const breadcrumblist = [
  { name: "Home", path: "/" },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "My Booking",
    path: "/dashboard/my-booking",
  },
];

const BookingDetailsLayout = ({ id }) => {
  return (
    <>
     
      {/* <TabContainer /> */}
      <div className="container py-[70px]">
        <BreadCrumb active={id} breadcrumblist={breadcrumblist} />
        <div>
          <div className="grid grid-cols-3 items-start gap-5">
            <div className="col-span-2 border-[1px] border-[#E4E4E7] overflow-hidden rounded-xl">
              <div className="py-[18px] px-[24px] bg-[#FFF4E0] border-b-[1px] border-[#E4E4E7] flex justify-between">
                <p className="text-lg font-semibold">Booking Details</p>
                <button className="py-[6px] px-[16px] rounded-full bg-white text-[#FB2F2F]">
                  Pending
                </button>
              </div>
              <div className="p-[24px]">
                <div className="flex justify-between items-center pb-[20px]">
                  <div>
                    <span>Booking Id :- </span>
                    <span>CXR2522141794A</span>
                  </div>
                  <div>
                    <span>Placed on :- </span>
                    <span>2 July 2023</span>
                  </div>
                </div>
                <div>
                  <img src={Line.src} />
                </div>
                <div>
                  <span>Jhone Coper , Dwayn Smith </span>
                </div>
                <div>
                  <span>Addresses :- </span>
                  <span className="text-secondary">
                    2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                  </span>
                </div>
                <div>
                  <span>Payment Methode :- </span>
                  <span className="text-secondary">Crdit/Dabit Card</span>
                </div>
                <div className="my-[20px] rounded-xl bg-[#FAFAFA] border-[1px] border-[#E4E4E7] p-[16px]">
                  <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                      <div>
                        <img src={ImageOne.src} />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">
                          Test / Package Name
                        </p>
                        <span className="text-secondary">
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet{" "}
                        </span>
                        <div>
                          <span>Quntity :- </span>
                          <span className="text-secondary">2</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* <div> */}
                      <span className="text-orange font-bold text-xl">
                        ₹600
                      </span>
                      <span className="text-secondary font-semibold text-sm ml-[10px]">
                        <del>₹170</del>
                      </span>
                      <div className="text-end">
                        <span className="text-[#005E54] font-semibold">
                          50% off
                        </span>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 border-[1px] border-[#E4E4E7] overflow-hidden rounded-xl">
              <div className="py-[18px] px-[24px] bg-[#FFF4E0] border-b-[1px] border-[#E4E4E7]">
                <p className="text-lg font-semibold">Booking Summary</p>
              </div>
              <div className="p-[24px]">
                <div className="flex justify-between">
                  <span>Sub Total : </span>
                  <span className="text-lg font-semibold">₹160</span>
                </div>
                <div className="flex justify-between">
                  <span>Coupon Discount : </span>
                  <span className="text-lg font-semibold">N/A</span>
                </div>
                <div className="flex justify-between">
                  <span>Collection Charges : </span>
                  <span className="text-lg font-semibold">₹160</span>
                </div>
                <div className="my-[20px]">
                  <img src={Line.src} />
                </div>
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Grand Total : </span>
                  <span className="text-lg font-semibold text-orange">
                    ₹160
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default BookingDetailsLayout;
