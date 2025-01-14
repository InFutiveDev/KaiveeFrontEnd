import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Login from "layout/auth/login";
import notFound from "images/undraw_not_found_re_bh2e.svg";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/router";
import { RiEditBoxFill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import { RiEditFill } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
import { RiEditCircleFill } from "react-icons/ri";
import { RiEditCircleLine } from "react-icons/ri";

const CartList = () => {
  const [cart, setCart] = useState({});
  const [cartKeys, setCartKeys] = useState([]);
  const store = useSelector((state) => state);
  const { auth } = store;
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [disconunt, setdiscount] = useState(0);
  const [total, settotal] = useState(0);
  const router = useRouter();

  const handleRemoveCart = (testId) => {
    let cartData = cart;
    if (cartData.hasOwnProperty(testId)) {
      delete cartData[testId];
    }
    setCart(cartData);
    setCartKeys(Object.keys(cartData));
    let amount = 0;
    let totalprice = 0;
    let discountprice = 0;
    Object.keys(cartData).map((key) => {
      if (cartData[key].offer_price) {
        amount += cartData[key].offer_price;
        discountprice += cartData[key].price - cartData[key].offer_price;
      } else {
        amount += cartData[key].price;
      }
      totalprice += cartData[key].price;
    });
    settotal(totalprice);
    setdiscount(discountprice);
    setTotalAmount(amount);
    dispatch(UPDATE_CART_QAUNTITY(Object.keys(cartData).length));
    localStorage.setItem("cart", JSON.stringify(cartData));
  };
  const handleRemoveAll = () => {
    setCart({});
    setCartKeys([]);
    dispatch(UPDATE_CART_QAUNTITY(0));
    localStorage.setItem("cart", JSON.stringify({}));
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      let totalprice = 0;
      let amount = 0;
      let discountprice = 0;
      setCart(cartData);
      setCartKeys(Object.keys(cartData));
      setCartItems(Object.keys(cartData).length);
      Object.keys(cartData).map((key) => {
        if (cartData[key].offer_price) {
          amount += cartData[key].offer_price;
          discountprice += cartData[key].price - cartData[key].offer_price;
        } else {
          amount += cartData[key].price;
        }
        totalprice += cartData[key].price;
      });
      setdiscount(discountprice);
      settotal(totalprice);
      setTotalAmount(amount);
    }
  }, []);

  return (
    <>
      <div className="shopping-cart-main">
        <div className="shopping-cart">
          {cartKeys.length > 0 && (
            <>
              <div className="cart-info-container">
                <div className="header">
                  <div className="cart-main">
                    <h3 className="cart-heading">Cart</h3>
                  </div>
                  <div className="cart-actions">
                    {/* <h5 className="action" onClick={() => router.push(`/tests`)}>
                      <RiEditBoxLine />
                    </h5> */}
                    {/* {cartKeys.length > 0 &&
                      <h5 className="action" onClick={handleRemoveAll}>
                        <RiDeleteBin6Line />
                      </h5>} */}
                  </div>
                </div>
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th scope="col">Package/Test Name</th>
                      <th scope="col">Discount Price</th>
                      <th scope="col">Net Price</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="tbody">
                    {cartKeys.map((key) => {
                      return (
                        <tr className="cart-items" key={key}>
                          <td className="title">{cart[key]?.test_name}</td>
                          <td>
                            {cart[key].offer_price
                              ? `₹${cart[key].offer_price}`
                              : "-"}
                          </td>
                          <td>₹{cart[key].price}</td>
                          <td
                            className="remove"
                            onClick={() => handleRemoveCart(key)}
                          >
                            <RiDeleteBin6Line />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {/* <div className="cart-item-main">
                  {
                    cartKeys.map((key) => {
                      return (
                        <div className="cart-items" key={key}>
                          <div>
                            <Image
                              height={80}
                              width={80}
                              src={testImage1}
                              alt="testImage1"
                            />
                          </div>
                          <div className="about">
                            <h1 className="title">{cart[key]?.test_name}</h1>
                            <div className="amount">MRP ₹
                              {
                                cart[key].offer_price ? <>
                                  <span>{cart[key].offer_price}</span>
                                  <span
                                    className=""
                                    style={{
                                      textDecoration: "line-through",
                                      paddingLeft: "5px",
                                      fontSize: '16px',
                                      textDecoration: "line-through",
                                      color: "rgb(171, 171, 171)",
                                      fontWeight: "600"
                                    }} >{cart[key].price} </span>
                                </> : cart[key].price
                              }
                            </div>
                          </div>
                          <div className="prices"></div>
                          <div>
                            <div className="remove" onClick={() => handleRemoveCart(key)}>
                              <RiDeleteBin6Line />
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                </div> */}
                {/* <div>
                  <button></button>
                </div> */}
              </div>

              <div className="checkout-container">
                <div className="total">
                  <div className="items">Cart Total({cartItems}) </div>
                </div>
                <div className="price-container">
                  <div className="pricetotal">
                    <div className="">Total</div>
                    <div className="priceamount">₹{total}</div>
                  </div>
                  <div className="pricetotal">
                    <div className="">Dicount Price</div>
                    <div className="priceamount">₹{disconunt}</div>
                  </div>
                  <div className="pricetotal payable-amount">
                    <div className="">Grand Total</div>
                    <div className="priceamount">₹{totalAmount}</div>
                  </div>
                </div>
                {!auth?.logedInUser ? (
                  <Login />
                ) : (
                  <button className="checkout-button">
                    <Link href={"/booking-details/all"}>Checkout</Link>
                  </button>
                )}
              </div>
            </>
          )}

          {cartKeys.length <= 0 && (
            <>
              <div className="col-md-12 col-sm-12 d-flex justify-content-center">
                <Image
                  className="d-flex m-auto"
                  height={400}
                  width={400}
                  src={notFound}
                  alt="notFound"
                />
              </div>
              <div className="col-md-12 col-sm-12 d-flex justify-content-center mb-3">
                <span>Your Cart is Empty</span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartList;
