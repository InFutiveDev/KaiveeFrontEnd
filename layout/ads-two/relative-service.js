import { useState } from "react";

const renderHTML = (htmlString) => {
  return { __html: htmlString };
};
const RelativeService = ({ data }) => {
  // const [readMore, setReadMore] = useState(false);

  return (
    <div className="mb-4">
      <div className="py-7 rounded-lg container mx-auto">
        <h1 className="px-4 font-[400] mb-3  text-[24px]  text-gray-900 text-center">
          {data?.title || "This Is the Heading-H1 Related Service..."}
        </h1>
        <div className="bg-[#F7F7FB] rounded-xl grid items-center lg:grid-cols-3 grid-cols-1">
          <div className="rounded-xl overflow-hidden relative">
            <div>
              <img
                src={data?.contentimage}
                alt={data?.contentimage_altTag || "contanet"}
                className="lg:mx-0 mx-auto w-full lg:h-full md:max-h-[338px]"
              />
            </div>
          </div>
          <div className="col-span-2">
            {/* <p className="lg:ml-[42px]  text-[#585981] lg:w-10/12 p-4 text-[16px] font-[400] font-source-pro">
              {data?.landingPageArticle}
            </p> */}
            <p
              className="lg:ml-[42px]  text-[#585981] lg:w-10/12 p-4 justify-content-center text-[16px] font-[400] font-source-pro mri_scan_list_show "
              dangerouslySetInnerHTML={renderHTML(data?.landingPageArticle)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelativeService;
