import React, { useMemo } from "react";
import CityHealth from "assets/images/health-packages/city advanced health package website (1350x1050) 1.png";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";
import Image from "next/image";
const HealthPackagesCard = ({ data, cart, handleCartData }) => {
  const router = useRouter();

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

  const richTagConvert = (richTag) => {
    if (richTag) {
      richTag = richTag.replace(
        /^\s*•/gm,
        (match, offset) => `${offset / 3 + 1}.`
      );
      return richTag
        .replace(/<\/?[^>]+(>|$)/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
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
    <div className="rounded-lg shadow-md flex flex-col ">
      <div
        className="rounded-lg relative overflow-hidden cursor-pointer"
        onClick={() => router.push(`/health-packages/${data?.test_url}`)}
      >
        <Image
          src={data?.package_image || CityHealth.src}
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

        <div className="flex  items-center gap-5 my-[6px]">
          <div>
            {data?.offer_price && (
              <span className="text-orange font-semibold text-xl">
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
            <span className="text-[#005E54] lg:text-[14px] font-semibold">
              {(((data?.mrp - data?.offer_price) / data?.mrp) * 100).toFixed()}%
              off
            </span>
          ) : (
            ""
          )}
        </div>

        <div className=" flex gap-x-2 items-center">
          {cart?.hasOwnProperty(data?._id || "") ? (
            <button
              className=" bg-[#D41958] w-full text-white rounded-[8px] px-[12px] py-[8px] text-[14px] font-semibold"
              onClick={handleRemoveCart}
            >
              Remove item
            </button>
          ) : (
            <button
              className=" bg-[#D41958] w-full text-white rounded-[8px] px-[12px] py-[8px] text-[14px] font-semibold"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          )}
          <button
            onClick={() => router.push(`/health-packages/${data?.test_url}`)}
            className="border-[1px] w-full border-orange text-orange bg-white rounded-[8px] px-[12px] py-[8px] text-xs font-semibold"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthPackagesCard;
