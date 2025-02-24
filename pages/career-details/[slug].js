import Link from "next/link";
import LocationMap from "assets/career/location.png";
import JobType from "assets/career/JobType.png";
import JobShift from "assets/career/JobShift.png";
import facebook from "assets/career/facebook.png";
import twitter from "assets/career/twitter.png";
import whatsapp from "assets/career/whatsapp.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Head from "next/head";
import {
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import JobApplyModal from "components/JobApplyModal";
import { MakeProtectedApiCall } from "utility/api";

const CareerDetails = ({ id, data }) => {
  const [open, setOpen] = useState(false);
  const SharePageUrl = "http://103.68.40.157:3002/careers";

  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };
  return (
    <div className="container">
      {data?.meta_title && (
        <Head>
          <title>{data?.meta_title}</title>
          <meta name="description" content={data?.meta_description} />
        </Head>
      )}
      <ul className="JobFormMainList">
        <div
          style={{
            backgroundColor: "#f7f7fb",
            borderRadius: 5,
            padding: 10,
            borderWidth: 1,
            borderColor: "#eee",
            marginTop: 20,
            overflow: "hidden",
          }}
        >
          <ul className="CareerBredcum">
            <li>
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="/careers" className="">
                Career
              </Link>
            </li>
            <li>Career Details</li>
          </ul>
        </div>
        <li
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: "#eee",
            marginTop: 20,
            overflow: "hidden",
            borderRadius: 5,
          }}
        >
          <div className="JobBoxLeft">
            <h1 className="JobTitleMain">{data?.job_title}</h1>
            <h3 className="JobExper">
              Experience Required: {data?.Experience_Requirement}
            </h3>
            <ul className="JobSocialLists">
              <li style={{ padding: 10, float: "left" }}>
                <Image
                  src={JobType}
                  width={22}
                  height={22}
                  style={{ width: 18, margin: 5, float: "left" }}
                />
                <span>{data?.job_Type_1}</span>
              </li>
              <li style={{ padding: 10, float: "left" }}>
                <Image
                  src={JobShift}
                  width={22}
                  height={22}
                  style={{ width: 18, margin: 5, float: "left" }}
                />
                <span>{data?.job_Type_2}</span>
              </li>
              <li style={{ padding: 10, float: "left", width: "100%" }}>
                <Image
                  src={LocationMap}
                  width={22}
                  height={22}
                  style={{ width: 18, margin: 5, float: "left" }}
                />
                <span>{data?.Address_2}</span>
              </li>
            </ul>
          </div>
          <div className="JobBoxRight">
            <h3 style={{ marginTop: 0, fontSize: 18 }}>{data?.Contact_No}</h3>
          </div>
          {/* Address and Button */}
          <div
            style={{
              width: "95%",
              float: "left",
              backgroundColor: "#f7f7fb",
              border: 1,
              borderColor: "#eee",
              borderRadius: 5,
              clear: "both",
              margin: 10,
              overflow: "hidden",
            }}
          >
            <div className="JobDetailsAddressLeft">
              <h3 style={{ marginTop: 0, fontSize: 18 }}>
                Openings: {data?.Openings}
              </h3>
            </div>
            <div className="JobDetailsAddressRight">
              <Link
                href="#"
                onClick={() => setOpen(true)}
                className="CareerApply"
              >
                Apply Now
              </Link>
            </div>
          </div>
          {/* Address and Button */}
        </li>
        <JobApplyModal setOpen={setOpen} open={open} jobDetails={data} />
        <div
          style={{
            padding: 20,
            borderWidth: 1,
            borderColor: "#f7f7fb",
            marginTop: 20,
            overflow: "hidden",
            borderRadius: 5,
          }}
        >
          {/* <h2
                style={{
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "#eee",
                  paddingBottom: 10,
                }}
              >
                Job Description
              </h2>
              <div
                className="editor_div"
                style={{ paddingTop: 30, fontSize: 16, lineHeight: 1.5 }}
              >
                <div
                  dangerouslySetInnerHTML={renderHTML(jobDetails?.Job_Description)}
                />
              </div>
            </div> */}
          <div>
            <h2 className="lg:text-[26px] text-lg mb-[16px]">
              Job Description
            </h2>
            <div className="flex flex-col gap-y-2 ">
              {data?.Job_Description !== "null" && (
                <div
                  className="editor_div_carrier"
                  dangerouslySetInnerHTML={{
                    __html: data?.Job_Description,
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div
          style={{
            padding: 20,
            borderWidth: 1,
            borderColor: "#eee",
            marginTop: 20,
            overflow: "hidden",
            borderRadius: 5,
          }}
        >
          <h2 className="SocialTitle">Share Job: </h2>
          <FacebookShareButton
            className="SocialButtonbtn"
            url={SharePageUrl}
            hashtag="https://www.cityxrayclinic.com/careers"
          >
            <Image
              src={facebook}
              className="CareerSocialimg"
              title="Share on Facebook"
            />
          </FacebookShareButton>
          <TwitterShareButton
            className="SocialButtonbtn"
            title="CityXRay Lab"
            url={SharePageUrl}
          >
            <Image
              src={twitter}
              className="CareerSocialimg"
              title="Share on Twitter"
            />
          </TwitterShareButton>

          <WhatsappShareButton
            style={{ margin: 5 }}
            title="CityXRay Lab: "
            url="http://103.68.40.157:3002/careers"
          >
            <Image
              src={whatsapp}
              className="CareerSocialimg"
              title="WhatsApp"
            />
          </WhatsappShareButton>

          {/* <ul className="CareeSocialList">
                        <li>
                            <a href="https://www.facebook.com" target="_black"><Image src={facebook} className="CareerSocialimg" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_black"><Image src={instagram} className="CareerSocialimg" /></a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" target="_black"><Image src={twitter} className="CareerSocialimg" /></a>
                        </li>
                        <li>
                            <a href="https://www.whatsapp.com" target="_black"><Image src={whatsapp} className="CareerSocialimg" /></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com" target="_black"><Image src={share} className="CareerSocialimg" /></a>
                        </li>
                    </ul> */}
        </div>
      </ul>
    </div>
  );
};

export default CareerDetails;
export const getServerSideProps = async (context) => {
  let slugContent = context.params.slug;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let data;
  const url = `${baseUrl}/career/byId/${slugContent}`;
  const getHeaders = () => {
    return {
      "content-type": "application/json",
    };
  };
  const res = await MakeProtectedApiCall(url, "GET", getHeaders());
  data = res?.data?.data?.[0] || {};

  return {
    props: {
      id: slugContent || null,
      data: data || {},
    },
  };
};
