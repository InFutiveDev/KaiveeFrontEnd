import { EyeIconYellow } from "assets/images/SvgImage";
import CheckOutLogin from "layout/auth/checkOutLogin";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";

const FacilitesCard = ({ data, cart, handleCartData }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [open, setopen] = useState(false);

  const handleAddToCart = () => {
    let cartData = cart;
    cartData[data?._id || ""] = {
      price: data?.mrp,
      test_name: data?.specialityName,
      offer_price: data?.offer_price,
      collection_type: data?.collection_type,
      _id: data?._id,
    };
    handleCartData(cartData);
    dispatch(UPDATE_CART_QAUNTITY(Object.keys(cartData).length));
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  const handleRemoveCart = () => {
    let cartData = cart;
    if (cartData.hasOwnProperty(data?._id || "")) {
      delete cartData[data?._id || ""];
    }
    handleCartData(cartData);
    dispatch(UPDATE_CART_QAUNTITY(Object.keys(cartData).length));
    localStorage.setItem("cart", JSON.stringify(cartData));
  };
  const checkOutRedirect = () => {
    const userLogedIn = localStorage.getItem("accessToken");
    if (userLogedIn) {
      handleAddToCart();
      router.push("/check-out");
    } else {
      dispatch(LOGIN_MODAL_OPEN(true));
    }
  };

  return (
    <div className="rounded-lg min-h-[150px] flex flex-col  justify-between shadow-md lg:p-[24px] p-2 border border-[#E4E4E7]">
      <div>
        <p className="text-black  line-clamp-2 text-lg font-source-pro">
          {data?.specialityName || "N/A"}
        </p>
        <div className="flex  items-center gap-5 my-[6px]">
          <div>
            <span className="text-[#8DBD4D]  md:text-xl text-lg">
              ₹{data?.offer_price}
            </span>
            {data?.offer_price < data?.mrp && (
              <span className="text-secondary text-[14px] ml-[10px]">
                <del>₹{data?.mrp}</del>
              </span>
            )}
          </div>
          {data?.offer_price < data?.mrp ? (
            <span className="text-[#005E54]  md:text-xl text-lg">
              {(((data?.mrp - data?.offer_price) / data?.mrp) * 100).toFixed()}%
              off
            </span>
          ) : (
            ""
          )}
        </div>
      </div>

      <div>
      {data?.no_of_parameters > 0 ?
            (
              <div className="flex ">
                <span className="text-secondary  text-[14px]">
                  Test parameters :-
                </span>
                <span className="text-[#D41958]  text-[14px]">
                  {data?.no_of_parameters} Test
                </span>
              </div>
            ) : (
              ""
            )}
        {/* {data?.no_of_parameters >= 0 ? (
          ""
        ) : (
          <div className="flex ">
            <span className="text-secondary font-semibold text-[14px]">
              Test parameters :-
            </span>
            <span className="text-orange font-bold text-[14px]">
              {data?.no_of_parameters} Test
            </span>
          </div>
        )} */}
        <div className="my-[16px] grid grid-cols-2 gap-x-2">
          {cart?.hasOwnProperty(data?._id || "") ? (
            <button
              className=" bg-[#8DBD4D] text-white rounded px-[12px] py-[8px] text-xs  !text-[12px]"
              onClick={handleRemoveCart}
            >
              Remove item
            </button>
          ) : (
            <button
              className=" bg-[#D41958] text-white rounded xl:px-[12px] xl:py-[8px] px-[8px] py-[4px] text-xs font-medium !text-[12px]"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          )}
          {open && (
            <CheckOutLogin
              open={open}
              setOpen={setopen}
              redirectUrl={"/check-out"}
            />
          )}
          <button
            onClick={() => {
              checkOutRedirect();
            }}
            className="border-[1px] border-[#D41958] text-[#D41958] bg-white rounded px-[12px] py-[8px]  font-medium !text-[12px]"
          >
            Check out
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              if (data?.package_type === "health-package") {
                router.push(`/health-packages/${data?.test_url}`);
              } else {
                router.push(`/book-a-test/${data?.test_url}`);
              }
            }}
            className="border-[1px] flex gap-[12px] justify-center items-center text-[#D41958] bg-[#D419580D] rounded w-full py-[4px] text-[12px] font-source-pro"
          >
            <EyeIconYellow />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilitesCard;