import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_TEST_BY_HABIT } from "redux/actions/test";
import { useRouter } from "next/router";
import BreadCrumb from "components/breadcrumb";
import notFound from "images/undraw_not_found_re_bh2e.svg";
import { GET_HEALTHRISK_BY_ID } from "redux/actions/healthrisk";

const breadcrumblist = [{ name: "Home", path: "/" }];

const HealthriskLayout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const store = useSelector((state) => state);
  const { healthrisk } = store;

  useEffect(() => {
    if (id) {
      dispatch(GET_TEST_BY_HABIT(id, 1));
      dispatch(GET_HEALTHRISK_BY_ID(id));
    }
  }, [id, dispatch]);


  return (
    <>
      <div className="web-view-reverse">
        {healthrisk?.healthById?.length > 0 ? (
          healthrisk?.healthById?.map((data) => {
            return (
              <section className="services">
                <div className="container health-risk-container-outer">
                  <BreadCrumb active="Habit" breadcrumblist={breadcrumblist} />
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <h2 className="text-center title-test">
                        {data.healthRiskTitle}
                      </h2>
                    </div>
                    <div className="health-risk-container">
                      <div className="health-image">
                        <img src={data.healthRisk_image} />
                      </div>
                      <div className="health-description">
                        <p>{data.description}</p>
                      </div>
                    </div>
                    {/* <div className="col-md-4 col-sm-4" key={test._id}> */}
                    {/* <div className="cardWrap">
                        <div className="cardWrap-productTitle">
                          
                          {/* <Link href={`/test-details/${test._id}`}>
                            {/* {habit?.habitInfo?.data[0]?.description} =
                          </Link> 
                    </div>
                  </div> */}
                    {/* </div> */}
                    {/* )} */}
                  </div>
                  {
                    // testsByHabit?.data?.testDataByHebbitId.length ? (
                    //   <ReactPaginate
                    //     previousLabel={""}
                    //     nextLabel={""}
                    //     pageCount={count || 1}
                    //     activeClassName="active"
                    //     forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                    //     onPageChange={(page) => handlePagination(page)}
                    //     pageClassName={"page-item"}
                    //     nextClassName={"page-item next"}
                    //     pageLinkClassName={"page-link"}
                    //     containerClassName={
                    //       "pagination react-paginate justify-content-center my-2 pr-1"
                    //     }
                    //   />
                    // ) : null
                  }
                </div>
              </section>
            );
          })
        ) : (
          <>
            <div className="col-md-12 col-sm-12 d-flex justify-content-center">
              <Image height={400} width={400} src={notFound} alt="notFound" />
            </div>
            <div className="col-md-12 col-sm-12 d-flex justify-content-center mb-3">
              <span>Tests Not Found</span>
            </div>
          </>
        )}
        {/* <section className="sliders">
          <div className="inner-banner-top">
            <Image
              height={300}
              width={350}
              object-fit="contain"
              src={HabitBanner.src}
              alt="banner"
            />
          </div>
        </section> */}
      </div>
      {/* )} */}

    </>
  );
};

export default HealthriskLayout;
