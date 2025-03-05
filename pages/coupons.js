import CouponLayout from "layout/coupon"; // Ensure correct import path

const Coupons = ({ coupons }) => {
  return <CouponLayout initialCoupons={coupons} />;
};

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/coupons`);

    if (!res.ok) {
      throw new Error("Failed to fetch coupons");
    }

    const coupons = await res.json();

    // Return an empty object if coupons are missing
    return {
      props: { coupons: coupons?.data?.couponData?.length ? coupons : { data: { couponData: [] } } },
    };
  } catch (error) {
    console.error("Error fetching coupons:", error);
    return { props: { coupons: { data: { couponData: [] } } } }; // Return empty coupons on error
  }
}

export default Coupons;
