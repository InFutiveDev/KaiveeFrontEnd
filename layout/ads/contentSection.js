import { Phone } from "react-feather";

const ContentSection = ({ data }) => {
  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };
  return (
    <div className="py-7 mt-6 rounded-lg container text-centre mx-auto">
      {/* <h2 className="font-[400] mb-3 sm:text-2xl text-2xl text-gray-900">
        Content Section
      </h2> */}
      <p
        className=" text-[#585981] lg:ml-[32px]  mb-2 justify-content-center text-[18px] font-[400] font-source-pro text-left"
        dangerouslySetInnerHTML={renderHTML(data?.testArticle)}
      />

      <a
        title={data?.phone}
        href={`tel:${data?.phone}`}
        className="rounded-full inline-flex text-gray-800 justify-start items-center px-4 py-1 bg-[#7bb44ceb] phone_number_center_svg"
      >
        <Phone size={20} className="mr-2" /> +{data?.phone} 
      </a>
    </div>
  );
};

export default ContentSection;
