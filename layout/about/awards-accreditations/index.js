import React, { useEffect, useState } from "react";
import AwardsAccreditaionBanner from "./AwardsAccreditaionBanner";
import Healthcare from "assets/images/about/awards/healthcare 1.png";

import Line from "assets/images/about/ourTeam/Line 304.png";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { GET_ALL_ACCREDITIONS, GET_ALL_AWARD } from "redux/actions/homepage";
import { useRouter } from "next/router";
const renderHTML = (htmlString) => {
  return { __html: htmlString };
};
const AwardsAccreditaionLayout = () => {
  const dispatch = useDispatch();
  const [dataAwards, setDataAwards] = useState([]);
  const [dataAccreditions, setDataAccreditions] = useState([]);
  const router = useRouter();
  console.log("dataAccreditions", dataAccreditions);
  const fetchAllAwards = async () => {
    const res = await dispatch(GET_ALL_AWARD());
    if (res?.success) {
      setDataAwards(res?.data);
    } else {
      setDataAwards([]);
    }
  };

  const fetchAllAccreditions = async () => {
    const res = await dispatch(GET_ALL_ACCREDITIONS());
    if (res?.success) {
      setDataAccreditions(res?.data);
    } else {
      setDataAccreditions([]);
    }
  };

  useEffect(() => {
    fetchAllAwards();
    fetchAllAccreditions();
  }, []);
  return (
    <>
      <section>
        <div>
          <AwardsAccreditaionBanner />
        </div>
        {/* <div className="container bg-white pt-[20px]">
        <div className="mb-[12px]">
          <h1 className="text-black font-semibold lg:text-[26px] text-lg text-center">
          Our Awards & Accreditations Speak for Our Success
          </h1>
         </div>
         </div>  */}
        {/* <div className="absolute top-4 left-4 xl:block hidden">
          <Image
            src={Healthcare.src}
            width={220}
            height={220}
            className="object-cover"
            loading="eager"
          />
        </div> */}
      </section>
      <div className="container bg-white pt-[70px]">
        <div className="mb-[42px]">
          <h1 className="text-black font-semibold lg:text-[26px] text-lg mb-[30px] text-center">
            Our Awards & Accreditations Speak for Our Success
          </h1>
          <h2 className="text-black font-semibold lg:text-[24px] text-lg mb-[32px]">
            Accreditations
          </h2>
          <div className="grid grid-cols-1  sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3 justify-center gap-8">
            {dataAccreditions?.map((item, index) => (
              <div
                onClick={() => router.push(`/about/accreditation/${item?.url}`)}
                key={index}
                className="shadow-md rounded-2xl cursor-pointer"
              >
                <div className="pt-[10px] h-[300px] items-center bg-[#F3F3F3] flex justify-center  rounded-t-2xl">
                  <Image
                    width={200}
                    height={200}
                    className="object-fill h-36 "
                    src={item?.img}
                  />
                </div>
                <div className="p-[24px]">
                  <p className="font-semibold lg:text-[18px]  h-[51px] line-clamp-2 text-[16px] text-center font-source-pro">
                    {item?.title}
                  </p>

                  <div className="flex justify-center items-center my-2">
                    <Image width={280} height={10} alt="line" src={Line.src} />
                  </div>
                  <p
                    className="text-secondary text-center line-clamp-3 text-[14px]"
                    dangerouslySetInnerHTML={renderHTML(item?.description)}
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-[70px]">
          <h2 className="text-black font-semibold lg:text-[24px] text-lg mb-[32px] font-source-pro">
            Awards
          </h2>
          <div className="grid grid-cols-1  sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3 justify-center gap-8">
            {/*  */}
            {dataAwards?.map((item, index) => (
              <div
                onClick={() => router.push(`/about/award/${item?.url}`)}
                key={index}
                className="shadow-md rounded-2xl cursor-pointer"
              >
                <div className="pt-[10px] h-[300px] items-center bg-[#F3F3F3] flex justify-center  rounded-t-2xl">
                  <Image
                    width={200}
                    height={200}
                    className="object-fill h-36 "
                    src={item?.img}
                  />
                </div>
                <div className="p-[24px]">
                  <p className="lg:text-[18px] h-[51px] line-clamp-2 text-[16px] font-semibold text-center font-source-pro">
                    {item?.title || ""}
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <Image width={280} height={10} alt="line" src={Line.src} />
                  </div>
                  <p
                    className="text-secondary text-center line-clamp-3 text-[14px]"
                    dangerouslySetInnerHTML={renderHTML(item?.description)}
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardsAccreditaionLayout;
