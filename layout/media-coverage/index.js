import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_MEDIA } from "redux/actions/homepage";

const renderHTML = (htmlString) => {
  return { __html: htmlString };
};
const MediaCoverage = () => {
  const getMedia = useSelector((state) => state?.homepage?.getMedia);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_ALL_MEDIA());
  }, []);
  return (
    <div className="container my-4">
      <h1 className="mb-6 text-[#D41958] text-2xl md:text-3xl font-bold text-center">
    Broadcast Media Coverage
  </h1>
      <div className="boxMedia">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
          {getMedia?.map((item) => {
            return (
              <div
                key={item?.id}
                className="w-full relative  news overflow-hidden"
              >
                <div className="frame-2 w-full">
                  <div className="">
                    <a className="w-full" target="_blank" href={item?.yt_link}>
                      <img
                        className="w-[72px] h-[52px] absolute top-[36%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
                        alt="Youtube logo hd"
                        src="https://generation-sessions.s3.amazonaws.com/2d0de78043bc5f4fb9ee798d229f4b85/img/youtube-logo-hd-8-1-2@2x.png"
                      />
                    </a>
                  </div>
                  <a className="w-full" target="_blank" href={item?.yt_link}>
                    <div className="flex justify-center items-center">
                      <img
                        className="w-full h-44  "
                        alt="Youtube logo hd"
                        src={item?.img}
                      />
                    </div>
                  </a>
                  <div className="frame-3">
                    <div className="frame-5">
                      <div className="frame-5">
                        <a
                          className="w-full"
                          target="_blank"
                          href={item?.yt_link}
                        >
                          <p className="text-[16px] h-[47px] line-clamp-2 font-semibold">
                            {item?.title}
                          </p>
                        </a>
                      </div>
                      <div className="h-[40px]">
                        <div
                          className=" line-clamp-2 font-normal text-[13px]  text-[#52525b]"
                          dangerouslySetInnerHTML={renderHTML(
                            item?.description
                          )}
                        />
                      </div>
                      <div className="text-wrapper-3">
                        {moment(item?.post_created_at).format(
                          "MMM d, YYYY, h:mm a"
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;
