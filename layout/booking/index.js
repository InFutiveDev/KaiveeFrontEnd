import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "reactstrap";
import { useState, useEffect } from "react";
import AddNewAddressModal from "components/addNewAddressModal";
import { useSelector, useDispatch } from "react-redux";
import { GET_USER_ADDRESSES } from "redux/actions/address";
import { GET_TEST_BY_ID } from "redux/actions/test";
import { ADD_USER_BOOKING } from "redux/actions/booking";
import { useRouter } from "next/router";
import { CheckObjectValidation } from "utility/Utils";
import { GET_USER_FAMILY_MEMBERS } from "redux/actions/member";
import { GET_USER_DETAILS } from "redux/actions/auth";
import { GET_ALL_COUPONS } from "redux/actions/coupons";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";
import AddNewMemberModal from "components/addMemberModal";
import SpinnerComponent from "components/spinner";
import successImage from "assets/images/mark.png";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import adduser from "../../assets/images/addperson.svg";
import addsample from "../../assets/images/addsample.svg";
import addwallet from "../../assets/images/wallet.svg";
import axios from "axios";

const BookingLayout = () => {
  const [open, setOpen] = useState("1");
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { address, test, member, auth, coupon } = store;
  const { userAddresses } = address;
  const { testInfo } = test;
  const { userFamilyMembers } = member;
  const router = useRouter();
  const { id } = router.query;
  const [isCouponAdded, setIsCouponAdded] = useState(false);
  const [cartKeys, setCartKeys] = useState([]);
  const [labcolletion, setlabcollections] = useState([]);
  const [payload, setPayload] = useState({
    address: "",
    collectionType: "",
    sampleCollectionDateTime: "",
    memberId: "",
    couponId: "",
    paymentAmount: "",
    testId: null,
    lab_collectionType: null,
  });

  const [bookingAdd, setBookingAdd] = useState();
  const [couponValue, setCoupon] = useState("");
  const [errorKeyName, setErrorKeyName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [islabcollection, setislabcollection] = useState(false);

  const handleRadioButtons = (e) => {
    const { name, value } = e.target;
    if (value === "lab_collection" && name === "collectionType") {
      setislabcollection(true);
    } else if (value === "home_collection" && name === "collectionType") {
      setislabcollection(false);
    }
    if (errorKeyName === name) {
      setErrorKeyName("");
    }
    setPayload({ ...payload, [name]: value });
  };

  useEffect(() => {
    const accesstoken = localStorage.getItem("accessToken");
    axios
      .get(
        "http://3.109.21.245:3004/v1/lab-detail/getAll?page=1&limit=10&str=",
        { headers: { "x-auth-token": `bearer ${accesstoken}` } }
      )
      .then((res) => {
          setlabcollections(res.data?.data?.LabData);
      })
      .catch((e) => console.log(e));
  }, [islabcollection]);

  const toggle = (id) => {
    if (id === "1") {
      setOpen(id);
    } else if (id === "2") {
      const checkValidation = CheckObjectValidation(payload, [
        "address",
        "sampleCollectionDateTime",
        "collectionType",
        "lab_collectionType",
      ]);
      setErrorKeyName(checkValidation.keyname);
      if (checkValidation.isvalid) {
        setOpen(id);
      }
    } else {
      const checkValidation = CheckObjectValidation(payload, []);
      setErrorKeyName(checkValidation.keyname);
      if (checkValidation.isvalid) {
        setOpen(id);
      }
    }
    if (open === id) {
      setOpen();
    }
  };

  const handleNextButton = (id) => {
    if (id === "2") {
      const checkValidation = CheckObjectValidation(payload, [
        "address",
        "sampleCollectionDateTime",
        "collectionType",
        "couponId",
        "testId",
        "paymentAmount",
        "lab_collectionType",
      ]);
      setErrorKeyName(checkValidation.keyname);
      if (checkValidation.isvalid) {
        setOpen(id);
      }
    } else {
      let checkValidation;
      if (payload.collectionType === "lab_collection") {
        checkValidation = CheckObjectValidation(payload, [
          "memberId",
          "couponId",
          "paymentAmount",
          "testId",
        ]);
      } else {
        checkValidation = CheckObjectValidation(payload, [
          "memberId",
          "couponId",
          "paymentAmount",
          "testId",
          "lab_collectionType",
        ]);
      }
      // const checkValidation = CheckObjectValidation(payload, [
      //   "memberId",
      //   "couponId",
      //   "paymentAmount",
      //   "testId",
      // ]);
      setErrorKeyName(checkValidation.keyname);
      if (checkValidation.isvalid) {
        setOpen(id);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errorKeyName === name) {
      setErrorKeyName("");
    }
    setPayload({ ...payload, [name]: value });
  };

  const handleCoupon = async (e) => {
    e.preventDefault();
    if (couponValue !== "") {
      setIsCouponAdded(true);
      setShowError(false);
      const res = await dispatch(GET_ALL_COUPONS(1, couponValue));
      setPayload((prevPayload) => ({
        ...prevPayload,
        couponId: couponValue ? couponValue : "",
      }));
      Disc(res?.success);
    } else {
      setShowError(true);
      setIsCouponAdded(false);
      dispatch(GET_ALL_COUPONS(1, couponValue));
    }
  };

  const handleSubmit = async (e) => {
    if (payload.memberId === "self") {
      delete payload.memberId;
    }
    const checkValidation = CheckObjectValidation(payload, [
      "couponId",
      "lab_collectionType",
    ]);
    setErrorKeyName(checkValidation.keyname);
    if (checkValidation.isvalid) {
      setLoading(true);
      const res = await dispatch(ADD_USER_BOOKING(payload));
      if (res?.success) {
        setBookingAdd(res?.success);
        if (id) {
          if (cartData.hasOwnProperty(id)) {
            delete cartData[id];
          }
          setCart(cartData);
          setCartKeys(Object.keys(cartData));
          dispatch(UPDATE_CART_QAUNTITY(Object.keys(cartData).length));
          localStorage.setItem("cart", JSON.stringify(cartData));
        } else {
          localStorage.setItem("cart", JSON.stringify({}));
          dispatch(UPDATE_CART_QAUNTITY(0));
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  };

  const amountAdd = () => {
    dispatch(GET_USER_ADDRESSES());
    dispatch(GET_USER_DETAILS());
    dispatch(GET_USER_FAMILY_MEMBERS());
    dispatch(GET_ALL_COUPONS(1));
    if (id) {
      dispatch(GET_TEST_BY_ID(id));
    } else {
      const cartData = JSON.parse(localStorage.getItem("cart"));
      if (cartData) {
        let amount = 0;
        Object.keys(cartData).map((key) => {
          if (cartData[key].price) {
            amount += cartData[key].offer_price;
          } else {
            amount += cartData[key].price;
          }
        });
        setPayload((prevPayload) => ({
          ...prevPayload,
          paymentAmount: testInfo?.data[0].mrp ? testInfo?.data[0].mrp : amount,
        }));
        setTotalAmount(amount);
      }
    }
  };

  useEffect(() => {
    amountAdd();
  }, [dispatch, id]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    setCartKeys(Object.keys(cartData));
    setPayload((prevPayload) => ({
      ...prevPayload,
      testId: Object.keys(cartData),
    }));
  }, []);

  const Disc = (success) => {
    if (coupon.coupons?.data.couponData.length > 0 && success) {
      const discountMinus =
        totalAmount - coupon?.coupons?.data?.couponData[0]?.discount;
      setTotalAmount(discountMinus);
    }
  };

  const handleDelete = async () => {
    setCoupon("");
    setIsCouponAdded(false);
    amountAdd();
    // Disc(res.success);
  };

  return (
    <>
     
      {!userAddresses || !userFamilyMembers ? (
        <SpinnerComponent />
      ) : (
        <section
          id="cbz-booking"
          className="loginRegister booking-loginregister"
        >
          <div className="container booking-container">
            <h1>Booking Detail</h1>
            <div className="">
              <div className="">
                <Accordion open={open} toggle={toggle}>
                  <div className="accordion-item">
                    <AccordionHeader targetId="1">
                      {/* <span className="count"></span> */}
                      <div>
                        <Image src={adduser} className="mr-2"></Image>
                        Add Member
                      </div>
                    </AccordionHeader>
                    <AccordionBody className="mt-2" targetId="1">
                      <div className="row address1">
                        <div className="col-md-6 col-12 mb-3">
                          <div className="memberBx">
                            <div className="text">
                              <p className="text-capitalize">
                                <input
                                  onChange={handleRadioButtons}
                                  type="radio"
                                  id="self"
                                  name="memberId"
                                  value="self"
                                />{" "}
                                <label htmlFor="self" className="ml-2 w-auto">
                                  {auth?.logedInUser?.data[0]?.name
                                    ? `${auth?.logedInUser?.data[0]?.name}, `
                                    : ""}
                                  {auth?.logedInUser?.data[0]?.age
                                    ? `${auth?.logedInUser?.data[0]?.age}, `
                                    : ""}
                                  Self
                                  {auth?.logedInUser?.data[0]?.gender
                                    ? `, ${auth?.logedInUser?.data[0]?.gender}`
                                    : ""}
                                </label>
                              </p>
                            </div>
                          </div>
                        </div>{" "}
                        {userFamilyMembers?.data.map((member) => {
                          return (
                            <>
                              <div
                                key={member._id}
                                className="col-md-6 col-12 mb-3"
                              >
                                <div className="memberBx" id="memberId">
                                  <div className="text">
                                    <p className="text-capitalize">
                                      <input
                                        type="radio"
                                        id={member._id}
                                        name="memberId"
                                        value={member._id}
                                        onClick={handleRadioButtons}
                                      />{" "}
                                      <label
                                        className="ml-2 w-auto"
                                        htmlFor={member._id}
                                      >
                                        {member.fullName}, {member.age},{" "}
                                        {member.relation}, {member.gender}
                                      </label>
                                    </p>
                                  </div>
                                </div>
                              </div>{" "}
                            </>
                          );
                        })}
                        {errorKeyName === "memberId" ? (
                          <span className="text-danger col-lg-12">
                            Please select Member
                          </span>
                        ) : null}
                        <div className="col-lg-12 d-sm-flex align-items-center gap-3 accordian-buttons">
                          <AddNewMemberModal />
                          <button
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            className="btnRed mt-0 nextbutton"
                            onClick={() => handleNextButton("2")}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </AccordionBody>
                  </div>
                  <div className="accordion-item">
                    <AccordionHeader targetId="2">
                      {/* <span className="count">2</span> */}
                      <div>
                        <Image src={addsample} className="mr-2"></Image>
                        Add Sample Collection Address, Date &amp; Time
                      </div>
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                      <div className="row address1 collection-row">
                        {userAddresses?.data.length > 0 ? (
                          <div className="col-lg-12 col-12">
                            <div className="d-sm-flex mt-2 user-address-content">
                              <label>Address :</label>
                              <div className="active addresactive ">
                                {userAddresses?.data.map((address) => {
                                  return (
                                    <>
                                      <div key={address._id} className="text">
                                        <p className="name mb-0 d-flex align-items-self-start">
                                          <input
                                            onChange={handleRadioButtons}
                                            type="radio"
                                            id={address._id}
                                            name="address"
                                            value={address._id}
                                          />{" "}
                                          <label
                                            htmlFor={address._id}
                                            className="w-auto mb-0 ml-2"
                                          >
                                            {address.address1},{" "}
                                            {address.address2
                                              ? `${address.address2}, `
                                              : ""}
                                            {address.city}, {address.state}
                                          </label>
                                        </p>
                                      </div>{" "}
                                    </>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {errorKeyName === "address" ? (
                          <span className="text-danger col-lg-12">
                            Please select Address
                          </span>
                        ) : null}
                        <div className="col-lg-12 col-12 my-2">
                          <div className="radioButton collections">
                            <div className="text d-sm-flex align-items-center user-address-content">
                              <label className="collection-title">
                                Collection Type :
                              </label>
                              <div className="addresactive ml-sm-0 d-sm-flex">
                                <p className="name d-flex">
                                  <input
                                    onChange={handleRadioButtons}
                                    type="radio"
                                    id="home_collection"
                                    name="collectionType"
                                    value="home_collection"
                                  />{" "}
                                  <label
                                    htmlFor="home_collection"
                                    className=" mb-0"
                                  >
                                    Home Collection
                                  </label>
                                </p>
                                <p className="name d-flex">
                                  <input
                                    className="ml-sm-2"
                                    onChange={handleRadioButtons}
                                    id="lab_collection"
                                    type="radio"
                                    name="collectionType"
                                    value="lab_collection"
                                  />{" "}
                                  <label
                                    htmlFor="lab_collection"
                                    className=" mb-0"
                                  >
                                    Lab Collection
                                  </label>
                                </p>
                              </div>
                            </div>
                            <div className="text d-sm-flex align-items-center user-address-content">
                              {islabcollection && labcolletion ? (
                                <label className="collection-title">
                                  Lab Collection Type :
                                </label>
                              ) : (
                                ""
                              )}
                              <div
                                className="ml-sm-0"
                                style={{ marginLeft: "0.9rem" }}
                              >
                                {islabcollection && labcolletion
                                  ? labcolletion.map((value) => (
                                      <div
                                        className="name d-flex"
                                        key={value._id}
                                      >
                                        <input
                                          className=""
                                          onChange={handleRadioButtons}
                                          id="lab_collectionType"
                                          type="radio"
                                          name="lab_collectionType"
                                          value={value._id}
                                        />
                                        <label className="w-auto ml-2 mb-0">
                                          {value.branch_Name},{" "}
                                          {value.branch_address},{" "}
                                          {value.branch_location}
                                        </label>
                                      </div>
                                    ))
                                  : ""}
                              </div>
                            </div>
                            {errorKeyName === "lab_collectionType" ? (
                              <span className="text-danger col-lg-12 p-0">
                                Please select Lab Collection Type
                              </span>
                            ) : null}
                            {errorKeyName === "collectionType" ? (
                              <span className="text-danger col-lg-12 p-0">
                                Please select collection type
                              </span>
                            ) : null}
                          </div>
                        </div>{" "}
                        <div className="col-lg-12">
                          <div className="d-sm-flex user-address-content align-items-center">
                            <label className="collection-title w-25">
                              Date & Time :
                            </label>
                            <div className="date ml-sm-2 ml-3 w-100 mt-0">
                              <input
                                type="datetime-local"
                                name="sampleCollectionDateTime"
                                id="sampleCollectionDateTime"
                                onChange={handleChange}
                                placeholder="Select Sample Collection Date"
                                className="dates w-full"
                              />{" "}
                              {errorKeyName === "sampleCollectionDateTime" ? (
                                <span className="text-danger col-lg-12 p-0">
                                  Please select Date and Time
                                </span>
                              ) : null}
                            </div>{" "}
                          </div>
                          {/**/} {/**/}{" "}
                          <div className="note">
                            <p className="collection-choose mb-0">
                              * Choose sample collection date &amp; time to
                              proceed further
                            </p>
                          </div>
                        </div>{" "}
                        <div className="col-lg-12 d-sm-flex align-items-center gap-3 mt-3 accordian-buttons">
                          <AddNewAddressModal />
                          <button
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            className="btnRed mt-0 nextbutton"
                            onClick={() => handleNextButton("3")}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </AccordionBody>
                  </div>
                  <div className="accordion-item">
                    <AccordionHeader targetId="3">
                      {/* <span className="count">3</span> */}
                      <div>
                        <Image src={addwallet} className="mr-2"></Image>
                        Payment Details
                      </div>
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                      <div className="accordion-body p-0">
                        <div className="packDetail border-0 p-0 my-1">
                          <div className="text gap-3 mb-md-2 d-md-flex align-items-center">
                            <span className="w-auto">Apply Coupon here</span>
                            <div className="w-auto position-relative">
                              <input
                                id="coupon"
                                tabIndex={3}
                                aria-describedby="coupon"
                                className="form-select position-relative w-100 coupon-input"
                                name="coupon"
                                onChange={(e) => {
                                  setCoupon(e.target.value);
                                  setIsCouponAdded(false);
                                }}
                                value={couponValue}
                                placeholder="Enter Coupon Code Here"
                              />
                              {couponValue && (
                                <div
                                  className="position-absolute delete-buttons"
                                  onClick={() => handleDelete()}
                                >
                                  <AiOutlineDelete />
                                </div>
                              )}
                            </div>
                            <form className="coupon-code position-relative">
                              <div
                                className="coupon-code-btn"
                                style={{ marginTop: 0 }}
                              >
                                {isCouponAdded &&
                                coupon.coupons?.data?.couponData ? (
                                  <Image
                                    height={40}
                                    width={40}
                                    src={successImage.src}
                                    alt="successImage"
                                  />
                                ) : (
                                  <button
                                    className="btnRed mt-0 newAddress w-auto mr-0"
                                    onClick={handleCoupon}
                                  >
                                    Add Coupon
                                  </button>
                                )}
                              </div>
                            </form>{" "}
                          </div>{" "}
                          {coupon.coupons?.data?.couponData.length === 0 ? (
                            <span className="text-danger">Invalid Coupon</span>
                          ) : null}
                          {showError ? (
                            <span className="text-danger ml-5">
                              Please Add Code
                            </span>
                          ) : null}
                          <div className="totalAmount mt-2">
                            <div>
                              <div className="head align-items-center d-sm-flex mb-2">
                                <p className="mb-0 amount-title">
                                  Total Payable Amount
                                </p>
                                <p className="mb-0 total-amount p-0">
                                  ₹
                                  {testInfo?.data[0].mrp
                                    ? testInfo?.data[0].mrp
                                    : totalAmount}
                                </p>
                              </div>
                            </div>{" "}
                            <div className="content m-0">
                              <button
                                type="submit"
                                className="btnRed submitbutton w-auto"
                                onClick={handleSubmit}
                              >
                                {loading ? "Processing..." : "Complete Order"}
                              </button>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </AccordionBody>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
          {bookingAdd && (
            <div className="container success-book-container">
              <div className="success-books">
                <>
                  <div className="booking-success" style={{ fontSize: "16px" }}>
                    Booking Done Successfully{" "}
                    <img
                      width={"20px"}
                      height={"20px"}
                      src={successImage.src}
                      alt=""
                    />
                  </div>
                  <button
                    className="d-flex align-items-center justify-content-end"
                    onClick={() =>
                      router.push({
                        pathname: "/dashboard",
                        query: {
                          search: "My Bookings",
                        },
                      })
                    }
                  >
                    View Booking
                  </button>
                </>
              </div>
            </div>
          )}
        </section>
      )}
      
    </>
  );
};

export default BookingLayout;
