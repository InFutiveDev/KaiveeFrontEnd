import { useState } from "react";
import Laptop from "assets/images/home/Group 1261152534.png";
import PatientImageOne from "assets/images/home/Ellipse 3984.png";
import PatientImageTwo from "assets/images/home/drugs (3) 1.png";

const renderHTML = (htmlString) => {
  return { __html: htmlString };
};
const RelativeService = ({ data }) => {
  // const [readMore, setReadMore] = useState(false);

  return (
    <div className="mb-4">
      <div className="py-7 rounded-lg container mx-auto">
        <h1 className="px-4 font-[400] mb-3  text-[24px]  text-gray-900">
          {data?.title || "This Is the Heading-H1 Related Service..."}
        </h1>
        <div className="bg-[#F7F7FB] rounded-xl grid items-center lg:grid-cols-3 grid-cols-1">
          <div className="col-span-2">
            {/* <p className="lg:ml-[42px]  text-[#585981] lg:w-10/12 p-4 text-[16px] font-[400] font-source-pro">
              {data?.landingPageArticle}
            </p> */}
            <p
              className="lg:ml-[42px]  text-[#585981] lg:w-10/12 p-4 justify-content-center text-[16px] font-[400] font-source-pro mri_scan_list_show "
              dangerouslySetInnerHTML={renderHTML(data?.landingPageArticle)}
            />
          </div>
          <div className="rounded-xl overflow-hidden relative">
            <div>
              <img
                src={data?.contentimage}
                alt={data?.contentimage_altTag || "contanet"}
                className="lg:mx-0 mx-auto w-full lg:h-full md:max-h-[338px]"
              />
            </div>
            {/* <div className="absolute top-2 right-3">
              <img src={PatientImageTwo.src} alt="PatientImageTwo" />
            </div>
            <div className="absolute bottom-0 right-0">
              <img src={PatientImageOne.src} alt="PatientImageOne" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelativeService;
