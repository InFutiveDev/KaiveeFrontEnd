import LoginWithOtp from "components/LoginWithOtp";
import React from "react";
import { Modal } from "reactstrap";

const CheckOutLogin = ({ open, setOpen, redirectUrl }) => {
  return (
    <div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        // style={{ maxWidth: "800px", width: "100%" }}
        size="sm"
        centered
        isOpen={open}
        toggle={() => setOpen(!open)}
        className="login-model-content"
      >
        <LoginWithOtp setOpen={setOpen} redirectUrl={redirectUrl} />
      </Modal>
    </div>
  );
};

export default CheckOutLogin;
