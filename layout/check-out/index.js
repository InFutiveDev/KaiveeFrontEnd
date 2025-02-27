import BreadCrumb from "components/breadcrumb";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import EditImgActive from "assets/images/check-out/download_45x45.png";
import LineImg from "assets/images/check-out/Line_304_Pink_Transparent.png";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { ADD_USER_BOOKING } from "redux/actions/booking";
import { GET_USER_DETAILS } from "redux/actions/auth";
import { GET_USER_FAMILY_MEMBERS } from "redux/actions/member";
import { GET_USER_ADDRESSES } from "redux/actions/address";
import EditAddressModal from "components/editAddress";
import AddNewAddressModal from "components/addNewAddressModal";
import { APPLY_COUPON, GET_ALL_COUPONS } from "redux/actions/coupons";
import CoupansModal from "components/coupansModal";
import { useRouter } from "next/router";
import CheckOutAddMemeberModal from "components/checkOutAddMemberModal";
import CheckOutEditMemeberModal from "components/checkOutEditMemberModal";
import BookingConfirm from "./bookingConfirm";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";
import { AlertError } from "utility/api";
import { useRef } from "react";
import moment from "moment";

const breadcrumblist = [{ name: "Home", path: "/" }];
const CheckOutLayout = () => {
  const [sendData, setSendData] = useState({
    memberId: "",
    address: "",
    collectionType: "Lab Collection",
    couponId: "",
    testId: [],
    sampleCollectionDateTime: "",
    timeslot: "",
    paymentAmount: 0,
  });
  const memberRef = useRef(null);

  const [cart, setCart] = useState({});
  const [open, setOpen] = useState(false);
  const [selectCoupon, setSelectCoupon] = useState(null);
  const [couponOpen, setCouponOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [discoutnAmount, setdiscoutnAmount] = useState(0);
  const [coupanDiscount, setCoupanDiscount] = useState(0);
  const [paymentType, setPaymentType] = useState(""); // remove cod in value
  const router = useRouter();
  const store = useSelector((state) => state);
  // const { auth } = store;
  const { coupon } = store;
  const { member, address } = store;
  const { userAddresses } = address;
  const [singalAddress, setSingalAddress] = useState(null);
  const { userFamilyMembers } = member;
  const [step, setStep] = useState(1);
  const [memberOpen, setMemberOpen] = useState(false);
  const [selectedAccordOpen, setSelectedAccordOpen] = useState("selectMember");
  const [memberEditOpen, setMemberEditOpen] = useState(false);
  const [memeberBy, setMemeberBy] = useState(null);
  const [selectMember, setSelectMember] = useState(null);
  const [payable, setPayable] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [collectionType, setCollectionsType] = useState("centre-visit");

  const dispatch = useDispatch();

  const handleConfirmBooking = async () => {
    let getListOfItems = Object.values(cart).filter(
      (it) => it?.collection_type !== "home-collection"
    );

    if (!sendData.memberId && !sendData.address) {
      document.body.scrollTop = 0;
      AlertError("Please select member and address");
    } else if (!sendData?.memberId) {
      document.body.scrollTop = 0;
      AlertError("Please select member ");
    } else if (!sendData?.address) {
      document.getElementById("address").scrollIntoView({ block: "center" });
      setStep(2);
      AlertError("Please select  address");
    } else if (!paymentType) {
      AlertError("Please select  payment type");
    } else if (
      collectionType === "home-collection" &&
      getListOfItems.length > 0
    ) {
      AlertError(
        "The Tests in your cart cannot be booked for Home Collection."
      );
    } else {
      let res = await dispatch(
        ADD_USER_BOOKING({
          ...sendData,
          paymentAmount: payable,
          collectionType: collectionType,
          paymentType: paymentType,
        })
      );

      if (paymentType === "cod") {
        if (res?.success) {
          setCart({});
          localStorage.removeItem("cart");
          dispatch(UPDATE_CART_QAUNTITY(0));
        }
      } else {
        if (res?.success) {
          localStorage.setItem(
            "orderId",
            JSON.stringify(res?.data?.data?.order_id)
          );
          window.open(res?.data?.data?.short_url, "_self");
        }
      }

      return res;
    }
  };

  const handleFamilyMembers = (item) => {
    setSelectMember(item);
    setSendData({ ...sendData, memberId: item?._id });
  };
  const handleAddress = (item) => {
    setSendData({ ...sendData, address: item?._id });
  };

  useEffect(() => {
    const userLogedIn = localStorage.getItem("accessToken");
    if (!userLogedIn) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    dispatch(GET_USER_DETAILS());
    dispatch(GET_USER_FAMILY_MEMBERS());
    dispatch(GET_USER_ADDRESSES());
  }, [dispatch]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      let discount = 0;
      let amount = 0;
      setCart(cartData);
      Object.keys(cartData).map((key) => {
        if (cartData[key].offer_price) {
          discount += cartData[key].offer_price;
        } else {
          discount += cartData[key].price;
        }
        amount += cartData[key].price;
      });
      setdiscoutnAmount(discount);
      setTotalAmount(amount);
      setSendData({
        ...sendData,
        testId: Object.keys(cartData),
        paymentAmount: discount,
      });
    }

    dispatch(GET_ALL_COUPONS(1, ""));
  }, []);

  useEffect(() => {
    if (
      discoutnAmount - coupanDiscount <= 500 &&
      collectionType === "home-collection"
    ) {
      setPayable(discoutnAmount - coupanDiscount + 100);
    } else {
      setPayable(discoutnAmount - coupanDiscount);
    }
  }, [coupanDiscount, discoutnAmount, collectionType]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Use localStorage here
      const typeOfCollection = localStorage.getItem("collecttionType");
      setCollectionsType(typeOfCollection || "centre-visit");
    }
  }, []);
  console.log("userFamilyMembers", cart);
  const applyCoupan = async () => {
    let payload = {
      couponCode,
      totalCartAmount: payable,
    };
    let res = await dispatch(APPLY_COUPON(payload));
    if (res?.finalAmount) {
      setPayable(res?.finalAmount);
      setCoupanDiscount(res?.discountAmount);
    }
  };

  return (
    <>
      <div className="container py-[70px]">
        <BreadCrumb active="Check Out" breadcrumblist={breadcrumblist} />
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-2 my-3">
          <div className="flex flex-col gap-4">
            <div className="shadow-md bg-white border-[1px] border-[#D41958] overflow-hidden rounded-xl">
              <div className="py-[18px] px-[24px] bg-[#D419580D] border-b-[1px] items-center border-[#E4E4E7] flex justify-between">
                <p ref={memberRef} className="text-lg font-semibold">
                  1. Add/Select Member
                </p>
                {selectedAccordOpen === "selectMember" ? (
                  <button onClick={() => setSelectedAccordOpen("")}>
                    <MdKeyboardArrowUp className="text-lg" />
                  </button>
                ) : (
                  <button onClick={() => setSelectedAccordOpen("selectMember")}>
                    <MdKeyboardArrowDown className="text-lg" />
                  </button>
                )}
              </div>
              {selectedAccordOpen === "selectMember" && (
                <div className="p-2">
                  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-2 my-3">
                    {userFamilyMembers?.data?.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleFamilyMembers(item)}
                        className={`cursor-pointer relative rounded-xl ${
                          sendData.memberId == item?._id
                            ? "bg-[#D419580D] border-[1px] border-[#D41958]"
                            : "bg-white border-[1px] border-[#E4E4E7]"
                        }  p-[24px]`}
                      >
                        <p className="text-[#3F3F46] text-base font-semibold">
                          {item?.fullName}
                        </p>
                        <div className="my-[12px]">
                          <span className="text-secondary text-capitalize text-base">
                            {item?.relation == "self" ||
                            item?.relation == "other"
                              ? item?.relation
                              : item?.fullName}{" "}
                          </span>
                          <span className="text-secondary text-base">
                            +91{item?.phone}
                          </span>
                        </div>

                        <div className="flex flex-wrap justify-between gap-[12px]">
                          <span className="text-secondary text-capitalize text-base">
                            Relation :-{item?.relation}
                          </span>
                          <span className="text-secondary text-base">
                            Age :- {item?.age}
                          </span>
                        </div>
                        <div
                          onClick={() => {
                            setMemberEditOpen(true);
                            setMemeberBy(item);
                          }}
                          className="cursor-pointer absolute top-2 right-3"
                        >
                          <img src={EditImgActive.src} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-[40px] flex justify-center gap-3">
                    <button
                      className="flex gap-1 items-center bg-[#D41958] text-white rounded px-[16px] py-[10px] text-xs font-semibold"
                      onClick={() => setMemberOpen(true)}
                    >
                      <AiOutlinePlus className="text-lg" /> Add Member
                    </button>
                    <button
                      disabled={sendData?.memberId ? false : true}
                      onClick={() => setStep(2)}
                      className="flex gap-1 items-center border-[1px] border-[#D41958] text-[#D41958] bg-white rounded px-[16px] py-[10px] text-xs font-semibold"
                    >
                      Next <BsArrowRight className="text-lg" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="shadow-md bg-white border-[1px] border-[#D41958] overflow-hidden rounded-xl">
              <div className="py-[18px] px-[24px] bg-[#D419580D] border-b-[1px] items-center border-[#E4E4E7] flex justify-between">
                <p id="address" className="text-lg font-semibold">
                  2. Add Address/Appointment Details
                </p>
                {step === 2 ? (
                  <button onClick={() => setStep(1)}>
                    <MdKeyboardArrowUp className="text-lg" />
                  </button>
                ) : (
                  <button onClick={() => setStep(2)}>
                    <MdKeyboardArrowDown className="text-lg" />
                  </button>
                )}
              </div>
              {step === 2 && (
                <div className="p-3">
                  <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6">
                    {userAddresses?.data?.map((item, index) => (
                      <div key={index}>
                        <div
                          onClick={() => handleAddress(item)}
                          className={`cursor-pointer relative rounded-xl ${
                            sendData.address == item?._id
                              ? "bg-[#D419580D] border-[1px] border-[#D41958]"
                              : "bg-white border-[1px] border-[#E4E4E7]"
                          } p-2`}
                        >
                          <p className="text-[#3F3F46] text-base font-semibold">
                            City :-{item?.city}
                          </p>
                          <div className="my-[12px]">
                            <span className="text-secondary text-base">
                              {item?.address1}
                            </span>
                          </div>
                          <div className="flex justify-between gap-[12px]">
                            <span className="text-secondary text-base">
                              Post Code :-{item?.postCode}
                            </span>
                          </div>
                          <div
                            onClick={() => {
                              setEditOpen(true);
                              setSingalAddress(item);
                            }}
                            className="cursor-pointer absolute top-2 right-3"
                          >
                            <img src={EditImgActive.src} alt="edit icon" />
                          </div>
                        </div>
                        {/* {collectionType === "home-collection" ? (
                          <p className="text-secondary text-base">
                            {item?.date_add
                              ? moment(new Date(item?.date_add)).format(
                                  "DD-MM-YYYY"
                                )
                              : ""}{" "}
                            {item?.time}
                          </p>
                        ) : (
                          ""
                        )} */}
                      </div>
                    ))}
                  </div>
                  <div className="my-3" />
                  

                  <div className="mt-[40px] flex justify-center  gap-3">
                    <button
                      className="flex gap-1 items-center bg-[#D41958] text-white rounded px-[16px] py-[10px] text-xs font-semibold"
                      onClick={() => setOpen(true)}
                    >
                      <AiOutlinePlus className="text-lg" /> Add Address
                    </button>
                  </div>
                </div>
              )}
              <div className="my-1" />
            </div>
          </div>
          <div>
            <div className="shadow-md bg-white border-[1px] border-[#D41958] overflow-hidden rounded-xl">
              <div className="py-[16px] px-[24px] bg-[#D419580D] border-b-[1px]  border-[#E4E4E7] ">
                <p className="text-lg font-semibold">Cart Summary</p>
              </div>
              <div className="p-[24px]">
                {selectMember && (
                  <div className="mb-2 px-[24px] py-[16px] bg-[#FAFAFA] rounded-xl border-[1px] border-[#ECECEC]">
                    <p className="text-base text-black">
                      {selectMember?.fullName.charAt(0).toUpperCase() +
                        selectMember?.fullName.slice(1).toLowerCase()}{" "}
                      |{" "}
                      {selectMember?.relation.charAt(0).toUpperCase() +
                        selectMember?.relation.slice(1).toLowerCase()}{" "}
                      |{" "}
                      {selectMember?.gender.charAt(0).toUpperCase() +
                        selectMember?.gender.slice(1).toLowerCase()}{" "}
                      | {selectMember?.age} years
                    </p>
                  </div>
                )}
                <div>
                  <div className="flex items-center border rounded-lg shadow mb-2">
                    <input
                      onChange={(e) => setCouponCode(e?.target.value?.trim())}
                      type="text"
                      className="font-[200] w-full p-1.5 outline-none  text-gray-700"
                      placeholder="Enter Coupon code"
                    />
                    <button
                      onClick={applyCoupan}
                      className="flex gap-1 items-center bg-[#D41958] text-white rounded px-[16px] py-[10px] mr-1 text-xs font-semibold"
                    >
                      Apply
                    </button>
                  </div>
                  <div className="w-full relative overflow-x-auto">
                    <table className="w-full mb-4 text-sm text-left">
                      <thead className="text-lg">
                        <tr>
                          <th className="py-1">
                            <span className="font-[500] py-2 text-[16px] ">
                              Test Name
                            </span>
                          </th>
                          <th className="px-2 py-1 text-right ">
                            <span className="font-[500] py-2 text-[16px] ">
                              Offer Price / MRP
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.values(cart)?.map((item, index) => (
                          <tr key={index} className="bg-white border-t">
                            <th
                              scope="row"
                              className="font-medium py-2  text-[16px] text-gray-900 whitespace-nowrap "
                            >
                              <span className="text-[16px] font-[300]">
                                {item.test_name}
                              </span>
                            </th>
                            <td className="px-2 py-1 text-right">
                              <div className="space-x-1 ">
                                <span className="offerprice text-[18px]">
                                  ₹{item?.offer_price}
                                </span>
                                {item?.price > item?.offer_price && (
                                  <span className="text-gray-400 font-[300] text-[14px]">
                                    <del>₹{item?.price}</del>
                                  </span>
                                )}
                                {item?.offer_price < item?.price ? (
                                  <span className="text-[#005E54] font-semibold">
                                    {(
                                      ((item?.price - item?.offer_price) /
                                        item?.price) *
                                      100
                                    ).toFixed()}{" "}
                                    % off
                                  </span>
                                ) : (
                                  ""
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mb-[24px] flex justify-center">
                    <img src={LineImg.src} alt="line icon" />
                  </div>

                  <div className="mb-[16px] flex gap-3 justify-between">
                    <span className="text-[18px] font-medium ">
                      Sub Total :
                    </span>
                    <div>
                      <span className="text-lg font-semibold text-[#D41958]">
                        ₹{discoutnAmount}
                      </span>
                    </div>
                  </div>

                  {/* <div className="mb-[16px] flex gap-3 justify-between">
                    <span className="text-xl">Offer Discount :</span>
                    <div>
                      <span className="text-lg font-semibold ">
                        ₹{coupanDiscount + (totalAmount - discoutnAmount)}
                      </span>
                    </div>
                  </div> */}

                  <div className="mb-[16px] flex gap-3 justify-between">
                    <span className="text-[18px] ">Coupon Discount</span>
                    <div>
                      <span className="text-lg font-semibold ">
                        -₹{coupanDiscount}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-[16px] py-[12px] rounded-xl ">
                    <span className="text-[18px] font-medium">
                      Collection Charges
                    </span>
                    <div>
                      <span className="text-lg font-semibold text-[#D41958]">
                        ₹{" "}
                        {collectionType === "home-collection"
                          ? discoutnAmount - coupanDiscount <= 500
                            ? 100
                            : 0
                          : 0}
                      </span>
                    </div>
                  </div>
                  <div className="mb-[16px] border-t-[2px] border-[#12C644] border-dashed flex gap-3 py-[12px] justify-between">
                    <span className="text-[18px] font-medium text-[#20A946]">
                      Total Savings
                    </span>
                    <div>
                      <span className="text-lg font-semibold text-[#20A946]">
                        ₹{coupanDiscount + (totalAmount - discoutnAmount)}
                      </span>
                    </div>
                  </div>
                  <div className="mb-[16px] flex gap-3 justify-between">
                    <span className="text-[18px] font-medium">
                      Total Payable
                    </span>
                    <div>
                      <span className="text-lg font-semibold text-[#D41958]">
                        ₹{payable}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className=" w-full flex justify-start space-x-2">
                      <p className="name space-x-1">
                        <input
                          checked={collectionType === "centre-visit"}
                          type="checkbox"
                          // disabled
                          //remove disable attribute
                          id="home_collection"
                          name="collectionType"
                          value="home_collection"
                          onChange={(e) =>
                            setCollectionsType(
                              e.target.checked
                                ? "centre-visit"
                                : "home-collection"
                            )
                          }
                        />{" "}
                        <label
                          htmlFor="home_collection"
                          className=" mb-0 checked-text text-red-400 text-[16px] font-source-pro"
                        >
                          Centre Visit
                        </label>
                      </p>
                      <p className="name space-x-1 ">
                        <input
                          // disabled
                          className="ml-sm-2 mr-2"
                          id="lab_collection"
                          checked={collectionType === "home-collection"}
                          type="checkbox"
                          name="collectionType"
                          value="lab_collection"
                          onChange={(e) =>
                            setCollectionsType(
                              e.target.checked
                                ? "home-collection"
                                : "centre-visit"
                            )
                          }
                        />{" "}
                        <label
                          htmlFor="lab_collection"
                          className=" mb-0 checked-text text-red-400 text-[16px] font-source-pro"
                        >
                          Home Collection
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center space-x-2">
                      <input
                        className=""
                        id="cod"
                        type="checkbox"
                        name="collectionType"
                        value="cod"
                        checked={paymentType === "cod"}
                        onChange={(e) =>
                          setPaymentType(e.target.checked ? "cod" : "online")
                        }
                      />{" "}
                      <label
                        htmlFor="cod"
                        className=" mb-0 checked-text text-[18px] font-source-pro"
                      >
                        COD
                      </label>
                      {/* <input
                        className="ml-sm-2"
                        id="payment Type"
                        type="checkbox"
                        name="collectionType"
                        value="payment Type"
                        checked={paymentType === "online"}
                        onChange={(e) =>
                          setPaymentType(e.target.checked ? "online" : "cod")
                        }
                      />{" "}
                      <label
                        htmlFor="payment Type"
                        className=" mb-0 checked-text text-[18px] font-source-pro"
                      >
                        Online Payment
                      </label> */}
                    </div>
                  </div>
                  {collectionType === "home-collection" ? (
                    <div>
                      {/* Date Section */}
                      <div className="grid gap-2 grid-cols-1">
                        <div>
                          <p className="text-[16px] text-gray-700">Date</p>
                          <div className="flex gap-[6px]">
                            <input
                              type="date"
                              id="date_add"
                              placeholder="date_add"
                              name="date_add"
                              value={moment(
                                new Date(sendData?.sampleCollectionDateTime)
                              ).format("YYYY-MM-DD")}
                              min={moment(new Date()).format("YYYY-MM-DD")} // Prevents past dates
                              required
                              onChange={(e) =>
                                setSendData({
                                  ...sendData,
                                  sampleCollectionDateTime: e.target.value,
                                })
                              }
                              className="text-gray-900 border rounded-lg font-[300] text-[16px] p-1 w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="my-2" />

                      {/* Time Slot Section */}
                      <div>
                        <select
                          required="required"
                          tabIndex={3}
                          className="form-select radius"
                          name="relation"
                          value={sendData?.timeslot}
                          onChange={(e) => {
                            setSendData({
                              ...sendData,
                              timeslot: e.target.value,
                            });
                            e.target.size = 1; // Collapse dropdown immediately after selection
                          }}
                          onClick={(e) => {
                            e.target.size = 5; // Show 5 options on click
                          }}
                          onBlur={(e) => {
                            setTimeout(() => {
                              // Delay the collapse to prevent early collapse
                              e.target.size = 1; // Collapse list on blur
                            }, 100); // Wait a bit after clicking to avoid the immediate collapse
                          }}
                          style={{ position: "relative" }} // Ensures dropdown does not affect the layout
                        >
                          <option value="">Select Time Slot</option>
                          {[
                            "07:00 AM - 07:30 AM",
                            "07:30 AM - 08:00 AM",
                            "08:00 AM - 08:30 AM",
                            "08:30 AM - 09:00 AM",
                            "09:00 AM - 09:30 AM",
                            "09:30 AM - 10:00 AM",
                            "10:00 AM - 10:30 AM",
                            "10:30 AM - 11:00 AM",
                            "11:00 AM - 11:30 AM",
                            "11:30 AM - 12:00 PM",
                            "12:00 PM - 12:30 PM",
                            "12:30 PM - 01:00 PM",
                            "01:00 PM - 01:30 PM",
                            "01:30 PM - 02:00 PM",
                            "02:00 PM - 02:30 PM",
                            "02:30 PM - 03:00 PM",
                            "03:00 PM - 03:30 PM",
                            "03:30 PM - 04:00 PM",
                            "04:00 PM - 04:30 PM",
                            "04:30 PM - 05:00 PM",
                            "05:00 PM - 05:30 PM",
                            "05:30 PM - 06:00 PM",
                          ].map((slot, index) => (
                            <option key={index} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="my-2">
                    {/* {sendData.memberId && sendData.address ? ( */}
                    <BookingConfirm
                      blur={
                        sendData.memberId && sendData.address ? false : true
                      }
                      handleConfirmBooking={handleConfirmBooking}
                    />
                    {/* ) : (
                      ""
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <AddNewAddressModal dateShow={false} setOpen={setOpen} open={open} />
      )}
      {editOpen && (
        <EditAddressModal
          setOpen={setEditOpen}
          open={editOpen}
          dateShow={false}
          address={singalAddress}
        />
      )}

      {couponOpen && (
        <CoupansModal
          coupon={coupon}
          setOpen={setCouponOpen}
          open={couponOpen}
          setSelectCoupon={setSelectCoupon}
          selectCoupon={selectCoupon}
        />
      )}
      {memberEditOpen && (
        <CheckOutEditMemeberModal
          setOpen={setMemberEditOpen}
          open={memberEditOpen}
          member={memeberBy}
        />
      )}
      {memberOpen && (
        <CheckOutAddMemeberModal setOpen={setMemberOpen} open={memberOpen} />
      )}
    </>
  );
};

export default CheckOutLayout;