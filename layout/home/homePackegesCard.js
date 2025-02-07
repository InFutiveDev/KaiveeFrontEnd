/* eslint-disable @next/next/no-img-element */
import React from "react";
import CityHealth from "assets/images/health-packages/city advanced health package website (1350x1050) 1.png";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";
import { useDispatch } from "react-redux";
import { StarSVG } from "assets/images/SvgImage";
import { HalfStarSVG } from "assets/images/SvgImage";
import Link from "next/link";
import Image from "next/image";

const HomePackegesCard = ({ data, cart, handleCartData }) => {
  const dispatch = useDispatch();

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
    <div className="rounded-xl shadow-md w-full">
      <Link
        href={`/health-packages/${data?.test_url}`}
        className="cursor-pointer"
      >
        <div className="rounded-lg relative overflow-hidden ">
          <Image
            loading="eager"
            //  className=" object-cover "
            width={500}
            height={500}
            src={data?.package_image || CityHealth.src}
            // width={"100%"}
            // height={"100%"}
            className="object-cover h-32 !w-full"
            alt={data?.package_image_altTag}
          />
        </div>
      </Link>
      <div className="p-[16px]">
        <Link
          href={`/health-packages/${data?.test_url}`}
          className="cursor-pointer"
        >
          <p className="fixed-height-text text-black  text-[18px] font-source-pro ">
            {data?.specialityName || "Package Name"}
          </p>
        </Link>
        <div className="mt-[10px] flex gap-[8px]">
          <div className="flex gap-1">
            {Array.from(
              { length: Number(data?.number_of_star) },
              (v, i) => i
            )?.map((item, i) => {
              return (
                <span key={i}>
                  <StarSVG />
                </span>
              );
            })}
          </div>
          <span className="text-[14px] text-gray-400">
            ({data[" number_of_review"] || data["number_of_review"]} Reviews)
          </span>
        </div>
        <div className="flex gap-5 items-center mt-[12px] mb-[16px]">
          {data?.offer_price ? (
            <>
              <div className="flex justify-start space-x-2 items-center">
                <span className="offerprice">₹{data?.offer_price}</span>
                {data?.offer_price < data?.mrp && (
                  <span className="text-gray-400 font-[300] text-[14px]">
                    <del>₹{data?.mrp}</del>
                  </span>
                )}
                {data?.offer_price < data?.mrp ? (
                  <span className="text-[#005E54] font-semibold">
                    {(
                      ((data?.mrp - data?.offer_price) / data?.mrp) *
                      100
                    ).toFixed()}
                    % off
                  </span>
                ) : (
                  ""
                )}
              </div>

              {!data && data.price - data.offer_price === 0 && (
                <span
                  className="netprice"
                  style={{ textDecoration: "line-through" }}
                >
                  ₹{data?.price}
                </span>
              )}
            </>
          ) : (
            <span className="offerprice">₹{data?.price}</span>
          )}
        </div>
        <div className="flex justify-start">
          {cart?.hasOwnProperty(data?._id || "") ? (
            <button
              className="w-full  bg-[#D41958] text-white rounded-md px-[12px] py-[8px] text-[14px] font-[400]"
              onClick={handleRemoveCart}
            >
              Remove item
            </button>
          ) : (
            <button
              className="w-full  bg-[#D41958] text-white rounded-md px-[12px] py-[8px] text-[14px] font-[400] "
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePackegesCard;
