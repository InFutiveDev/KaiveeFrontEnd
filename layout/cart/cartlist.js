import { useState, useEffect, Fragment, memo } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Login from "layout/auth/login";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";
import CartItemCard from "./cartItemCard";
import ProceedToBook from "./ProceedToBook";
import ShareWhatsApp from "./shareOnWhatsapp";

const CartList = () => {
  const [cart, setCart] = useState({});
  const [cartKeys, setCartKeys] = useState([]);
  const store = useSelector((state) => state);
  const { auth } = store;
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalMRP, setTotalMRP] = useState(0);
  const [discoutnAmount, setdiscoutnAmount] = useState(0);
  const [collecttionType, setCollectionsType] = useState("centre-visit");
  const [payable, setPayable] = useState(0);
  const [updatedAPICartData, setUpdatedAPICartData] = useState({});

  const handleRemoveCart = (testId) => {
    let cartData = cart;
    if (cartData.hasOwnProperty(testId)) {
      delete cartData[testId];
    }
    setCart({ ...cartData });
    setCartKeys(Object.keys(cartData));
    let amount = 0;
    let discount = 0;
    let mrp = 0;
    Object.keys(cartData).map((key) => {
      if (cartData[key]?.offer_price) {
        discount += cartData[key]?.offer_price;
      }
      //  else {
      //   discount += cartData[key]?.price;
      // }
      amount += cartData[key]?.offer_price;
      mrp += cartData[key]?.price;
    });
    setTotalAmount(amount);
    setTotalMRP(mrp);
    setdiscoutnAmount(mrp - discount);
    dispatch(UPDATE_CART_QAUNTITY(Object.keys(cartData).length));
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Use localStorage here
      localStorage.setItem("collecttionType", collecttionType);
      cart;
    }
  }, [collecttionType]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      let discount = 0;
      let amount = 0;
      let mrp = 0;
      setCart(cartData);
      console.log("cartData--->>", cartData);
      setCartKeys(Object.keys(cartData));
      Object.keys(cartData).map((key) => {
        if (cartData[key]?.offer_price) {
          discount += cartData[key]?.price - cartData[key]?.offer_price;
        } else {
          discount += 0;
        }
        amount += cartData[key]?.offer_price;
        mrp += cartData[key]?.price;
      });
      setdiscoutnAmount(discount);
      setTotalAmount(amount);
      console.log("mrp-----///", mrp);
      setTotalMRP(mrp);
    }
  }, []);

  useEffect(() => {
    if (totalAmount <= 500 && collecttionType === "home-collection") {
      setPayable(totalAmount + 100);
    } else {
      setPayable(totalAmount);
    }
  }, [discoutnAmount, collecttionType, totalAmount]);
  // useEffect(() => {
  //   const datacheck = Object.keys(updatedAPICartData);
  //   if (datacheck.length) {
  //     localStorage.setItem("cart", JSON.stringify(updatedAPICartData));
  //   }
  // }, [updatedAPICartData]);
  console.log("cartKeys", updatedAPICartData);
  return (
    <>
      <div className="cart-box">
        <div id="cart-item-wrapper" className="cart-frame-wrapper">
          {cartKeys?.length > 0 ? (
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-2 my-3">
              <div className="border cart-div ">
                <div className="bg-[#fff4e0] border-b w-full p-2 rounded-t-lg flex justify-between items-center">
                  <div className="cart-text-wrapper-3">Test Details </div>
                  <Link href="/book-a-test" className="AddMore">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="24"
                      viewBox="0 0 12 24"
                      fill="none"
                    >
                      <path
                        d="M6 6C5.73478 6 5.48043 6.10536 5.29289 6.29289C5.10536 6.48043 5 6.73478 5 7V11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8946 0.734784 13 1 13H5V17C5 17.2652 5.10536 17.5196 5.29289 17.7071C5.48043 17.8946 5.73478 18 6 18C6.26522 18 6.51957 17.8946 6.70711 17.7071C6.89464 17.5196 7 17.2652 7 17V13H11C11.2652 13 11.5196 12.8946 11.7071 12.7071C11.8946 12.5196 12 12.2652 12 12C12 11.7348 11.8946 11.4804 11.7071 11.2929C11.5196 11.1054 11.2652 11 11 11H7V7C7 6.73478 6.89464 6.48043 6.70711 6.29289C6.51957 6.10536 6.26522 6 6 6Z"
                        fill="white"
                      />
                    </svg>{" "}
                    <span className="text-base">Add More Test</span>
                  </Link>
                </div>
                <div className="w-full p-2 ">
                  {cartKeys?.map((key) => {
                    return (
                      <Fragment key={key}>
                        <CartItemCard
                          handleRemoveCart={handleRemoveCart}
                          keyname={key}
                          updatedAPICartData={updatedAPICartData}
                          setUpdatedAPICartData={setUpdatedAPICartData}
                        />
                      </Fragment>
                    );
                  })}
                </div>
              </div>
              <div className="cart-frame-133 ">
                <div className="cart-div-wrapper">
                  <div className="cart-text-wrapper-7">Cart Summary</div>
                </div>
                <div className="cart-frame-141">
                  <div className="cart-frame-15">
                    <div className="cart-frame-16">
                      <div className="cart-text-wrapper-8">Total M.R.P</div>
                      <div className="cart-text-wrapper-9">₹{totalMRP}</div>
                    </div>
                    <div className="cart-frame-16">
                      <div className="cart-text-wrapper-8">
                        Offer Discount :
                      </div>
                      <div className="cart-text-wrapper-9">
                        ₹{discoutnAmount}
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="464"
                      height="2"
                      viewBox="0 0 464 2"
                      fill="none"
                    >
                      <path
                        d="M1 1H463"
                        stroke="url(#paint0_linear_850_8136)"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_850_8136"
                          x1="1"
                          y1="1"
                          x2="462.674"
                          y2="-11.2605"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F7A708" stopOpacity="0.1" />
                          <stop offset="0.514288" stopColor="#F7A708" />
                          <stop
                            offset="1"
                            stopColor="#F7A708"
                            stopOpacity="0.1"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="cart-frame-16">
                      <div className="cart-text-wrapper-10">Sub Total:</div>
                      <div className="cart-text-wrapper-11">₹{totalAmount}</div>
                    </div>

                    <div className="w-full flex justify-between mb-[16px] py-[12px] rounded-xl ">
                      <span className="text-xl font-medium">
                        Collection Charges
                      </span>
                      <div>
                        <span className="text-lg font-semibold text-orange">
                          ₹{" "}
                          {collecttionType === "home-collection" &&
                          totalAmount <= 500
                            ? 100
                            : 0}
                        </span>
                      </div>
                    </div>

                    <div className=" w-100 d-flex justify-start">
                      <p className="name d-flex2">
                        <input
                          checked={collecttionType === "centre-visit"}
                          type="checkbox"
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
                          className=" mb-0 checked-text text-black text-lg font-source-pro"
                        >
                          Centre Visit
                        </label>
                      </p>
                      <p className="name d-flex">
                        <input
                          className="ml-sm-2 mr-2"
                          id="lab_collection"
                          checked={collecttionType === "home-collection"}
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
                          className=" mb-0 checked-text font-source-pro"
                        >
                          Home Collection
                        </label>
                      </p>
                    </div>
                    <div className="checkBoldTextflex flex w-full">
                      <div className="cart-text-wrapper-8 font-source-pro">
                        {" "}
                        Total Payable
                      </div>
                      <div className="cart-text-wrapper-11">₹{payable}</div>
                    </div>
                  </div>
                  <div className="cart-frame-17 flex justify-center w-full">
                    {!auth?.logedInUser ? (
                      <Login href={"/check-out"} />
                    ) : (
                      <ProceedToBook
                        collecttionType={collecttionType}
                        handleRemoveCart={handleRemoveCart}
                        cart={cart}
                      />
                    )}
                    <div className="cart-frame-18 cursor-pointer">
                      <div className="cart-text-wrapper-12">
                        <ShareWhatsApp
                          payableAmount={payable}
                          cartData={cart}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm -mt-2 text-red-400">
                    Home collection charges are applicable below 500 of sub.
                    Total and will add charges in Total Payable
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className=" container mx-auto my-3 w-full flex flex-col items-center justify-center  min-h-[300px] shadow rounded-lg">
              <p className="text-md py-2 text-gray-400">Empty Cart</p>
              <Link href="/book-a-test" className="AddMore">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="24"
                  viewBox="0 0 12 24"
                  fill="none"
                >
                  <path
                    d="M6 6C5.73478 6 5.48043 6.10536 5.29289 6.29289C5.10536 6.48043 5 6.73478 5 7V11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8946 0.734784 13 1 13H5V17C5 17.2652 5.10536 17.5196 5.29289 17.7071C5.48043 17.8946 5.73478 18 6 18C6.26522 18 6.51957 17.8946 6.70711 17.7071C6.89464 17.5196 7 17.2652 7 17V13H11C11.2652 13 11.5196 12.8946 11.7071 12.7071C11.8946 12.5196 12 12.2652 12 12C12 11.7348 11.8946 11.4804 11.7071 11.2929C11.5196 11.1054 11.2652 11 11 11H7V7C7 6.73478 6.89464 6.48043 6.70711 6.29289C6.51957 6.10536 6.26522 6 6 6Z"
                    fill="white"
                  />
                </svg>{" "}
                <span className="text-base">Add Tests</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(CartList);
