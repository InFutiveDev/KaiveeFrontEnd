import React, { useMemo, useState, useEffect } from "react";
import CityHealth from "assets/images/health-packages/Lab-Test-Resized (1).jpg";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";
import Image from "next/image";

const HealthPackagesCard = ({ data, cart, handleCartData }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(cart?.hasOwnProperty(data?._id || "")); // Local state

  // Sync local state with cart prop when it changes
  useEffect(() => {
    setIsInCart(cart?.hasOwnProperty(data?._id || ""));
  }, [cart, data?._id]);

  const handleAddToCart = () => {
    let cartData = { ...cart }; // Create a new object to avoid mutating the prop directly
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
    setIsInCart(true); // Update local state immediately
  };

  const handleRemoveCart = () => {
    let cartData = { ...cart };
    if (cartData.hasOwnProperty(data?._id || "")) {
      delete cartData[data?._id || ""];
    }
    handleCartData(cartData);
    dispatch(UPDATE_CART_QAUNTITY(Object.keys(cartData).length));
    localStorage.setItem("cart", JSON.stringify(cartData));
    setIsInCart(false); // Update local state immediately
  };

  const richTagConvert = (richTag) => {
    if (richTag) {
      richTag = richTag.replace(
        /^\s*•/gm,
        (match, offset) => `${offset / 3 + 1}.`
      );
      return richTag
        .replace(/<\/?[^>]+(>|$)/g, "")
        .replace(/ /g, " ")
        .replace(/&/g, "&")
        .replace(/\n/g, " ");
    }
    return "";
  };

  const convertedRichTag = useMemo(() => {
    if (data?.test_pre_test_info) {
      return richTagConvert(data?.test_pre_test_info);
    }
    return "";
  }, [data?.test_pre_test_info]);

  return (
    <div className="rounded-lg shadow-md flex flex-col">
      <div
        className="rounded-lg relative overflow-hidden cursor-pointer"
        onClick={() => router.push(`/health-packages/${data?.test_url}`)}
      >
        <Image
          src={CityHealth.src}
          width={1000}
          height={1000}
          className="object-full h-32 w-full"
        />
      </div>
      <div className="p-[16px]">
        <p
          className="line-clamp-1 max-h-[30px] text-black font-semibold text-[16px] font-source-pro cursor-pointer"
          onClick={() => router.push(`/health-packages/${data?.test_url}`)}
        >
          {data?.specialityName || ""}
        </p>
        <div
          className="!text-secondary my-[10px] text-[15px] line-clamp-2 h-[46px]"
          dangerouslySetInnerHTML={{
            __html: convertedRichTag || ``,
          }}
        />

        <div className="flex items-center gap-5 my-[6px]">
          <div>
            {data?.offer_price && (
              <span className="text-[#7DB440] font-semibold text-xl">
                ₹{data?.offer_price}
              </span>
            )}
            {data?.offer_price < data?.mrp && (
              <span className="text-secondary font-semibold text-[14px] ml-[10px]">
                <del>₹{data?.mrp}</del>
              </span>
            )}
          </div>
          {data?.offer_price < data?.mrp ? (
            <span className="text-[#7DB440] lg:text-[14px] font-semibold">
              {(((data?.mrp - data?.offer_price) / data?.mrp) * 100).toFixed()}%
              off
            </span>
          ) : (
            ""
          )}
        </div>

        <div className="flex gap-x-2 items-center">
          {isInCart ? ( // Use local state instead of cart prop
            <button
              className="bg-[#8DBD4D] w-full text-white rounded-[8px] px-[12px] py-[8px] text-[14px] font-semibold"
              onClick={handleRemoveCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="bg-[#D41958] w-full text-white rounded-[8px] px-[12px] py-[8px] text-[14px] font-semibold"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          )}
          <button
            onClick={() => router.push(`/health-packages/${data?.test_url}`)}
            className="border-[1px] w-full border-[#D41958] text-[#D41958] bg-white rounded-[8px] px-[12px] py-[8px] text-xs font-semibold"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthPackagesCard;