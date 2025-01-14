import { useDispatch } from "react-redux";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";

const AddToCart = ({ test, cart, handleCartData }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    let cartData = cart;
    cartData[test._id] = {
      price: test.mrp,
      test_name: test.specialityName,
      offer_price: test.offer_price,
      collection_type: test?.collection_type,
      _id: test?._id
    };
    handleCartData(cartData);
    dispatch(UPDATE_CART_QAUNTITY(Object.keys(cartData).length));
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  const handleRemoveCart = () => {
    let cartData = cart;
    if (cartData.hasOwnProperty(test._id)) {
      delete cartData[test._id];
    }
    handleCartData(cartData);
    dispatch(UPDATE_CART_QAUNTITY(Object.keys(cartData).length));
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  return (
    <>
      {cart?.hasOwnProperty(test._id) ? (
        <div className="footerbarBox">
          <button className="addToCartButtom" onClick={handleRemoveCart}>
            Remove item
          </button>
        </div>
      ) : (
        <div className="footerbarBox">
          <button className="addToCartButtom" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      )}
    </>
  );
};

export default AddToCart;
