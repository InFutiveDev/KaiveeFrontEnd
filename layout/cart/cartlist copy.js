import Image from "next/image";
// import testImage1 from 'assets/images/1.png'
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Login from "layout/auth/login";
import notFound from "images/undraw_not_found_re_bh2e.svg";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/router";

const CartList = () => {
  const [cart, setCart] = useState({});
  const [cartKeys, setCartKeys] = useState([]);
  const store = useSelector((state) => state);
  const { auth } = store;
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
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
    Object.keys(cartData).map((key) => {
      if (cartData[key].offer_price) {
        amount += cartData[key].offer_price;
      } else {
        amount += cartData[key].price;
      }
      totalprice += cartData[key].price;
    });
    settotal(totalprice);
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
      let amount = 0;
      setCart(cartData);
      setCartKeys(Object.keys(cartData));
      setCartItems(Object.keys(cartData).length);
      Object.keys(cartData).map((key) => {
        if (cartData[key].offer_price) {
          amount += cartData[key].offer_price;
        } else {
          amount += cartData[key].price;
        }
      });
      setTotalAmount(amount);
    }
  }, []);

  return (
    <>
      <div className="shopping-cart">
        {cartKeys.length > 0 && (
          <>
            <div className="cart-info-container">
              <div className="header">
                <div className="cart-main">
                  <h3 className="cart-heading">Cart</h3>
                </div>
                <div className="cart-actions">
                  <h5 className="action" onClick={() => router.push(`/tests`)}>
                    Continue Shopping
                  </h5>
                  {cartKeys.length > 0 && (
                    <h5 className="action" onClick={handleRemoveAll}>
                      Remove all
                    </h5>
                  )}
                </div>
              </div>
              {cartKeys.map((key) => {
                return (
                  <div className="cart-items" key={key}>
                    <div>
                      {/* <Image
                          height={80}
                          width={80}
                          src={testImage1}
                          alt="testImage1"
                        /> */}
                    </div>
                    <div className="about">
                      <h1 className="title">{cart[key]?.test_name}</h1>
                      <div className="amount">
                        MRP ₹
                        {cart[key].offer_price ? (
                          <>
                            <span>{cart[key].offer_price}</span>
                            <span
                              className=""
                              style={{
                                textDecoration: "line-through",
                                paddingLeft: "5px",
                                fontSize: "16px",
                                textDecoration: "line-through",
                                color: "rgb(171, 171, 171)",
                                fontWeight: "600",
                              }}
                            >
                              {cart[key].price}{" "}
                            </span>
                          </>
                        ) : (
                          cart[key].price
                        )}
                      </div>
                    </div>
                    <div className="prices"></div>
                    <div>
                      <div
                        className="remove"
                        onClick={() => handleRemoveCart(key)}
                      >
                        <RiDeleteBin6Line />
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <div className="buy-now">
                <div>
                  <h5 className="action" onClick={() => router.push(`/tests`)}>Continue Shopping</h5>
                </div>
              </div> */}
            </div>

            <div className="checkout-container">
              {/* <hr /> */}
              {/* <div className="checkout"> */}
              <div className="total">
                <div>
                  <div className="subtotal">Sub-Total</div>
                  <div className="items">{cartItems} items</div>
                </div>
                <div className="total-amount">₹{totalAmount}</div>
              </div>
              <div className="total">
                <div>
                  <div className="subtotal">Total</div>
                </div>
                <div className="total-amount">₹{total}</div>
              </div>
              {!auth?.logedInUser ? (
                <Login />
              ) : (
                <button className="checkout-button">
                  <Link href={"/booking-details/all"}>Checkout</Link>
                </button>
              )}
              {/* </div> */}
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
    </>
  );
};

export default CartList;
