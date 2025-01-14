import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GET_TEST_BY_ID } from "redux/actions/test";

const CartItemCard = ({
  keyname,
  handleRemoveCart,
  item,
  setUpdatedAPICartData,
  updatedAPICartData,
}) => {
  const dispatch = useDispatch();
  const [itemInfo, setItemInfo] = useState(null);

  const asyncCallApi = async () => {
    if (item) {
      setItemInfo(item);
    } else {
      let res = await dispatch(GET_TEST_BY_ID(keyname));
      if (res?.data?.data?.length > 0) {
        console.log("updatedAPICartData", res?.data?.data[0], keyname);
        setUpdatedAPICartData({
          ...updatedAPICartData,
          [keyname]: res.data.data[0],
        });
        setItemInfo(res?.data?.data[0]);
      }
    }
  };

  useEffect(() => {
    asyncCallApi();
  }, []);
  console.log("itemInfo--->>", itemInfo);
  return (
    <div className="w-full p-2 mb-2 shadow-sm rounded-xl ">
      <div className="flex justify-between items-start gap-[2px]">
        <div className="flex justify-start items-center space-x-2">
          {itemInfo?.collection_type === "home-collection" ? (
            <span className="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </span>
          ) : (
            <span className="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </span>
          )}
          <p className="text-[13px] sm:text-[16px] line-clamp-2   text-capitalize ">
            {itemInfo?.test_name}
          </p>
        </div>

        <h1 className="cart-text-wrapper-5">
          {itemInfo?.offer_price ? (
            <>
              <div className="flex justify-start space-x-2 items-center">
                <span className="offerprice  text-[14px] sm:text-[20px]">
                  ₹{itemInfo?.offer_price}
                </span>
                {itemInfo?.offer_price < itemInfo?.mrp && (
                  <span className="text-gray-400 font-[300] text-[14px]">
                    <del>₹{itemInfo?.mrp}</del>
                  </span>
                )}
                {itemInfo?.offer_price < itemInfo?.mrp ? (
                  <span className="text-[#005E54] font-semibold text-[20px] sm:text-[28px]">
                    {(
                      ((itemInfo?.mrp - itemInfo?.offer_price) /
                        itemInfo?.mrp) *
                      100
                    ).toFixed()}
                    % off
                  </span>
                ) : (
                  ""
                )}
              </div>

              {!item && itemInfo.price - itemInfo.offer_price === 0 && (
                <span
                  className="netprice"
                  style={{ textDecoration: "line-through" }}
                >
                  ₹{itemInfo?.price}
                </span>
              )}
            </>
          ) : (
            <span className="offerprice text-[14px] sm:text-[20px]">
              ₹{itemInfo?.price}
            </span>
          )}
        </h1>
      </div>

      <div className="flex justify-between mt-1 items-center">
        <p className="text-gray-600 text-sm text-capitalize font-[400]">
          {itemInfo?.collection_type.includes("home")
            ? "Home Collection / Centre Visit"
            : "Centre Visit"}
          {/* {itemInfo?.collection_type || "Centre Visit"} */}
        </p>
        <button onClick={() => handleRemoveCart(keyname)}>
          <img
            className="cart-delete"
            alt="Delete"
            src="https://generation-sessions.s3.amazonaws.com/7804905ce906f3d47d0420c6e4b9151c/img/delete--12--1-1.svg"
          />
          <div className="cart-text-wrapper-6"></div>
        </button>
      </div>
    </div>
  );
};

export default memo(CartItemCard);
