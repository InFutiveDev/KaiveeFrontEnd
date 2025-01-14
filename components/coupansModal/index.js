import React from "react";
import { Modal } from "reactstrap";

const CoupansModal = ({
  open,
  setOpen,
  coupon,
  setSelectCoupon,
  selectCoupon,
}) => {
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="sm"
      isOpen={open}
      toggle={() => setOpen(!open)}
      className="login-model-content"
    >
      <div
        id="addNewAddress"
        tabIndex={-1}
        aria-labelledby="addNewAddress"
        className="modal fade show"
        style={{ display: "block" }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 id="addNewAddressLabel" className="modal-title">
                View All Coupans
              </h5>
            </div>{" "}
            <div className="modal-body">
              <div className="formFields profileFields">
                <ul>
                  {coupon?.coupons.data?.couponData.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setOpen(!open);
                        setSelectCoupon(item);
                      }}
                      className="border-2 rounded-lg p-[10px] mt-[10px] cursor-pointer"
                    >
                      {index + 1}. {item?.coupon_code}
                    </li>
                  ))}
                </ul>
              </div>
            </div>{" "}
            <button
              type="button"
              // data-bs-dismiss="modal"
              className="mt-[20px] bg-white text-orange border-[1px] border-orange rounded px-[24px] py-[12px]"
              onClick={() => setOpen(!open)}
            >
              Cancel
            </button>
            {/* <div className="modal-footer accordian-buttons">
             {" "}
              <button
                type="submit"
                onClick={handleSubmit}
                className="mt-[20px] bg-orange text-white rounded px-[24px] py-[12px]"
              >
                {loading ? "Processing..." : "Submit"}
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CoupansModal;
