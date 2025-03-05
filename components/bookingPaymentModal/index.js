import React from "react";
import { Modal } from "reactstrap";

const BookingPaymentModal = ({ open, setOpen, handlePayNow, data }) => {
  const handleSubmit = () => {
    handlePayNow();
  };
  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={open}
        toggle={() => setOpen(!open)}
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
              <div className="modal-header justify-center">
                <h5 id="addNewAddressLabel" className="modal-title text-center">
                  Pay Now For Booking ID :- {data?.order_id}
                </h5>
              </div>
              <div className="modal-body">
                <p className="text-capitalize text-center">
                  if you have made payment then ignore please contact kaivee
                  customer care
                </p>
              </div>

              <div className="mb-4 accordian-buttons center-bututon">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className=" bg-orange text-white rounded p-2 py-2"
                >
                  Pay Now ₹ {data?.amount}/-
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookingPaymentModal;
