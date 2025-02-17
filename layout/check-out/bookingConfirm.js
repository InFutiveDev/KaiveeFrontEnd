import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const BookingConfirm = ({ handleConfirmBooking, blur }) => {
  const route = useRouter();
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    let res = await handleConfirmBooking();
    if (res?.success) {
      if (res?.data?.data?.payment_method === "online") {
        sessionStorage.setItem("pendingOrderId", res?.data?.data?.id);
        sessionStorage.setItem("paymentPending", "true");
        window.location.href = res?.data?.data?.payment_url;
      } else {
        route.push(`/booking-success?orderId=${res?.data?.data?.id}`);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <button
        disabled={loading}
        className={`${
          blur ? "opacity-60" : "opacity-100"
        } w-full bg-[#D41958] text-white rounded py-[10px] text-xs font-semibold`}
        onClick={handleConfirm}
      >
        {loading ? "Processing..." : "Confirm Booking"}
      </button>
    </>
  );
};

export default BookingConfirm;