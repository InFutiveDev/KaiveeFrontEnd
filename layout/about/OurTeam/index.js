import React, { useEffect, useState } from "react";
import OurTeamBanner from "./OurTeamBanner";
import Line from "assets/images/about/ourTeam/Line 304.png";

import Image from "next/image";
import { useDispatch } from "react-redux";
import { GET_ALL_OUR_TEAM } from "redux/actions/about";
import ReactPaginate from "react-paginate";
import { ArrowLeft, ArrowRight } from "react-feather";
const renderHTML = (htmlString) => {
  return { __html: htmlString };
};
const OurTeamLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({});
  // con;
  const dispatch = useDispatch();
  const fetchOurTeamData = async (page) => {
    const res = await dispatch(GET_ALL_OUR_TEAM(page));
    if (res?.success) {
      setData(res?.data);
    }
  };
  const count = Number(Math.ceil(data?.pagination?.total / 12));
  // const count = 1;

  // ** Function in get data on page change
  const handlePagination = (page) => {
    fetchOurTeamData(page.selected + 1);
    setCurrentPage(page.selected + 1);
  };

  useEffect(() => {
    fetchOurTeamData(currentPage);
  }, []);
  return (
    <>
      <section>
        <div>
          <OurTeamBanner />
        </div>
      </section>
      <div className="bg-white">
        <div className="py-[70px] container">
          <div className="grid grid-cols-1  sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3 justify-center gap-8">
            {data?.teamData?.map((item, index) => {
              return (
                <div key={index} className="shadow-md rounded-2xl">
                  <div className="bg-[#F3F3F3] flex justify-center  rounded-t-2xl object-cover">
                    <Image
                      width={210}
                      height={210}
                      className=" h-40 object-fill "
                      alt={item.team_name}
                      src={item.team_image || "https://ik.imagekit.io/InFutiveTechnology/kaivee/836.jpg?updatedAt=1741167588322"}
                    />
                  </div>
                  <div className="p-[24px] text-center">
                    <p className="text-[24px] font-semibold font-source-pro">
                      {item.team_name}
                    </p>
                    <p className="text-secondary text-[16px] line-clamp-2 h-[45px] ">
                      {item.team_qualification}
                    </p>
                    <div className="flex justify-center items-center my-2">
                      <Image
                        width={280}
                        height={10}
                        className=""
                        alt="line"
                        src={Line.src}
                      />
                    </div>
                    <div
                      className="text-secondary  line-clamp-4 text-center lg:text-[18px] text-[15px]"
                      dangerouslySetInnerHTML={renderHTML(
                        item.team_description
                      )}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {count ? (
              <ReactPaginate
                previousLabel={
                  <span>
                    <ArrowLeft />
                  </span>
                }
                nextLabel={
                  <span>
                    {" "}
                    <ArrowRight />{" "}
                  </span>
                }
                pageCount={count || 1}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                activeClassName="active"
                forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                onPageChange={(page) => handlePagination(page)}
                pageClassName={"page-item"}
                nextClassName={"page-item next"}
                pageLinkClassName={"page-link"}
                containerClassName={
                  "pagination react-paginate justify-content-center my-2 pr-1 font-[500] !text-[18px] sm:justify-start"
                }
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamLayout;
