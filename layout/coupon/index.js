const CouponLayout = ({ initialCoupons }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state?.coupon ?? {});
  const [currentPage, setCurrentPage] = useState(1);

  const coupons = initialCoupons || store?.data || { pagination: { total: 0 }, couponData: [] };
  const count = Math.ceil(coupons?.pagination?.total / 10) || 1;

  useEffect(() => {
    if (!initialCoupons) {
      dispatch(GET_ALL_COUPONS(1));
    }
  }, [dispatch, initialCoupons]);

  const handlePagination = (page) => {
    dispatch(GET_ALL_COUPONS(page.selected + 1));
    setCurrentPage(page.selected + 1);
  };

  return (
    <>
      <section className="top_navbar">
        <TopNavbar />
      </section>
      <Navbar />
      {coupons?.couponData?.length ? (
        <div className="coupon-box">
          {/* Render Coupons Here */}
          <ReactPaginate
            previousLabel={<ArrowLeft />}
            nextLabel={<ArrowRight />}
            pageCount={count}
            onPageChange={handlePagination}
            containerClassName="pagination"
          />
        </div>
      ) : (
        <div className="text-center py-5">
          <h3>No Coupons Available</h3>
        </div>
      )}
    </>
  );
};

export default CouponLayout;
