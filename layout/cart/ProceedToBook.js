import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import CartItemCard from "./cartItemCard";
import { X } from "react-feather";

const ProceedToBook = ({ cart, handleRemoveCart, collecttionType }) => {
  const [open, setIsOpen] = useState(false);
  const [centreVisitValidation, setCentreVisitValidation] = useState([]);
  const router = useRouter();

  console.log("collecttionType", collecttionType);
  console.log("cart", cart);
  const handleProceed = () => {
    // find centre visit  test
    let getListOfItems = Object.values(cart).filter(
      (it) => it?.collection_type !== "home-collection"
    );
    console.log("getListOfItems", getListOfItems, collecttionType);
    if (collecttionType === "home-collection" && getListOfItems.length > 0) {
      setIsOpen(true);
      setCentreVisitValidation(getListOfItems);
    } else {
      router.push("/check-out");
    }
  };

  const rmItem = (itemId) => {
    let rm = centreVisitValidation?.filter((it) => it?._id !== itemId);
    setCentreVisitValidation(rm);
    handleRemoveCart(itemId);
  };

  return (
    <>
      <button className="cart-frame-19 cursor-pointer " onClick={handleProceed}>
        <div className="cart-text-wrapper-13">Proceed To Book</div>
      </button>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        size="sm"
        centered
        isOpen={open}
        toggle={() => setIsOpen(!open)}
        className="login-model-content"
      >
        <ModalBody>
          <div className="cart-div min-h-[100px] rounded-xl">
            <div className="w-full rounded-t-lg flex justify-end items-center">
              {/* <div className="cart-text-wrapper-3">Remove Centre Visit Test</div> */}
              <button
                onClick={() => setIsOpen(!open)}
                className="bg-red-200 flex justify-center items-center rounded-full h-7 w-7 p-1"
              >
                <X size={16} color="red" />
              </button>
            </div>
            {/* <div className="w-full p-2 ">
                            {centreVisitValidation?.map((item) => {
                                return (
                                    <Fragment key={item?._id}>
                                        <CartItemCard
                                            item={item}
                                            handleRemoveCart={rmItem}
                                            keyname={item?._id} />
                                    </Fragment>
                                );
                            })}
                        </div> */}
            <p className="text-gray-700 text-xl font-medium text-center p-2">
              The Tests in your cart cannot be booked for Home Collection.
            </p>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProceedToBook;
