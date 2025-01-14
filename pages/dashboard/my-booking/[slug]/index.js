import BookingDetailsLayout from "layout/dashboard/my-booking/bookingDetailsLayout";
import React from "react";

const BookingDetails = ({ id }) => {
  return (
    <div>
      <BookingDetailsLayout id={id} />
    </div>
  );
};

export default BookingDetails;
export const getServerSideProps = async (context) => {
  let slugContent = context.params.slug;

  return {
    props: {
      id: slugContent || null,
    },
  };
};
