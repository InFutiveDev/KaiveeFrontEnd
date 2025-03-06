import Navbar from "components/navbar";
import TopNavbar from "components/topnav";
import Link from "next/link";
import LocationMap from "assets/career/location.png";
import BreadCrumb from "components/breadcrumb";
import JobType from "assets/career/JobType.png";
import JobShift from "assets/career/JobShift.png";
import MainBanner from "assets/career/banner.jpg";
import MainBanner1 from "assets/career/banner1.webp";
// import MainBanner2 from "assets/career/banner2.webp";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";


const breadcrumblist = [{ name: "Home", path: "/" }];
const Careers = () => {
  const [myJobs, setmyJobs] = useState();
  useEffect(() => {
    axios.get("https://api.kaiveehealthcare.com/v1/career/get-carrer").then((res) => {
      setmyJobs(res.data.data.careerData);
      console.log(res.data.data.careerData);
    });
  }, []);
  console.log("myJobs", myJobs);
  return (
    <>
    <div className="2xl:pl-[10rem] xl:pl-[4rem] lg:pl-[1rem] pl-[16px]">
            <BreadCrumb active="Careers" breadcrumblist={breadcrumblist} />
          </div>
      <Head>
        <title>Latest Job Vacancy Openings in Delhi - Career</title>
        <meta
          name="description"
          content="Apply for the latest job vacancy openings in Delhi, and various job opportunities in the Diagnostic field."
        />
      </Head>
      <div className="CareerBannerWeb">
        <Image
          src={MainBanner1}
          alt="Career Banner"
          style={{ width: "100%" }}
        />
      </div>
      <div className="CareerBannerMob">
        <Image
          src={MainBanner1}
          alt="Career Banner Mob"
          style={{ width: "100%" }}
        />
      </div>
      <div className="container">
        <h1 className="CareerHeadding">
          Find a Job & Grow Your Career with Kaivee Healtcare
        </h1>
        <ul style={{ width: "80%", margin: "2%", marginLeft: "10%" }}>
          {myJobs
            ?.filter((ele) => ele?.Job_Status === "Active")
            .map((item, key) => {
              return (
                <li
                  key={item._id}
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
                    <h3 className="JobTitleMain">{item.job_title} </h3>
                    <ul style={{ display: "inline", flexDirection: "row" }}>
                      <li style={{ padding: 10, float: "left" }}>
                        <Image
                          src={LocationMap}
                          width={22}
                          height={22}
                          style={{ width: 18, margin: 5, float: "left" }}
                          alt="Location"
                        />
                        <span>{item.Address_1}</span>
                      </li>
                      <li style={{ padding: 10, float: "left" }}>
                        <Image
                          src={JobType}
                          width={22}
                          height={22}
                          style={{ width: 18, margin: 5, float: "left" }}
                          alt="Job Type"
                        />
                        <span>{item.job_Type_1}</span>
                      </li>
                      <li style={{ padding: 10, float: "left" }}>
                        <Image
                          src={JobShift}
                          width={22}
                          height={22}
                          style={{ width: 18, margin: 5, float: "left" }}
                          alt="Job Shift"
                        />
                        <span>{item.job_Type_2}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="JobBoxRight">
                    <Link
                      className="CareerButton bg-[#D41958]  hover:text-black"
                      href={`/career-details/${item.job_title_url}`}
                    >
                      View Job
                    </Link>
                    <h3 style={{ marginTop: 20, fontSize: 16 }}>
                      Job Posted: {item.job_posted}
                    </h3>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Careers;
