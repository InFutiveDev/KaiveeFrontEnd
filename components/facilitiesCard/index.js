import { EyeIconYellow } from "assets/images/SvgImage";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";

const FacilitesCard = ({ data, cart, handleCartData }) => {
  const dispatch = useDispatch();
  const router = useRouter();
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

  return (
    <div className=" flex  flex-col justify-between w-full rounded-2xl shadow-md p-2 border border-[#E4E4E7]">
      <div>
        <div className="pb-[5px] md:pb-[10px]">
          <p className="text-black font-semibold lg:text-[18px] text-[14px] font-source-pro">
            {data?.specialityName || "Neurology"}
          </p>
        </div>

        <div className="flex  items-center gap-5 my-[6px]">
          <div>
            <span className="text-orange font-bold text-[20px]">
              ₹{data?.offer_price || data?.mrp}
            </span>
            {data?.offer_price < data?.mrp && (
              <span className="text-secondary font-semibold text-[14px] ml-[10px]">
                <del>₹{data?.mrp}</del>
              </span>
            )}
          </div>
          {data?.offer_price ? (
            <div>
              {data?.mrp - data?.offer_price !== 0 && (
                <span className="text-[#005E54] font-semibold">
                  {(
                    ((data?.mrp - data?.offer_price) / data?.mrp) *
                    100
                  ).toFixed()}
                  % off
                  {/* {(data?.mrp - data?.offer_price) / 100}% off */}
                </span>
              )}
            </div>
          ) : (
            <div>
              <span className="text-[#D01212] font-semibold  text-[16px]">
                0% off
              </span>
            </div>
          )}
        </div>
        {/* {data?.no_of_parameters !== 0 && (
          <div className="flex mb-2">
            <span className="text-[#9A9A9A] font-medium text-[14px]">
              Test parameters :-
            </span>
            <span className="text-orange font-medium text-[14px]">
              {data?.no_of_parameters || 0} Test
            </span>
          </div>
        )} */}

        {data?.no_of_parameters <= 0 ? (
          ""
        ) : (
          <div className="flex mb-2">
            <span className="text-[#9A9A9A] font-medium text-[14px]">
              Test parameters :-
            </span>
            <span className="text-orange font-medium text-[14px]">
              {data?.no_of_parameters} Test
            </span>
          </div>
        )}
      </div>

      <div className="grid gap-2 grid-cols-2 pb-2">
        {cart?.hasOwnProperty(data?._id || "") ? (
          <button
            className=" bg-orange text-white rounded-lg  py-2 text-[12px] font-medium "
            onClick={handleRemoveCart}
          >
            Remove item
          </button>
        ) : (
          <button
            className=" bg-orange text-white rounded-lg text-[12px]  font-medium px-2"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        )}
        <button
          onClick={() => {
            handleAddToCart();
            setTimeout(() => {
              router.push("/check-out");
            }, 200);
          }}
          className="border-[1px] border-orange text-orange bg-white rounded-lg px-3 py-2 font-medium text-[12px]"
        >
          Check out
        </button>
      </div>
      <div>
        <button
          onClick={() => router.push(`/book-a-test/${data?.test_url}`)}
          className="border-[1px] flex gap-3 justify-center items-center text-orange bg-[#FEF6E6] rounded-lg w-full px-3 py-2 text-[12px] font-medium"
        >
          <EyeIconYellow />
          View Details
        </button>
      </div>
    </div>
  );
};

export default FacilitesCard;
