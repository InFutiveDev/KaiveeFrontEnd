import Navbar from "components/navbar";
import TopNavbar from "components/topnav";
import Link from "next/link";
import LocationMap from "assets/career/location.png";
import JobType from "assets/career/JobType.png";
import JobShift from "assets/career/JobShift.png";
import MainBanner from "assets/career/banner.jpg";
import MainBanner1 from "assets/career/banner1.webp";
import MainBanner2 from "assets/career/banner2.webp";
import whatsapp from "assets/career/whatsapp.png";
import allShare from "assets/career/share.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { Key } from "react-feather";
import Head from "next/head";
import {
  EmailIcon,
  EmailShareButton,
  OKIcon,
  OKShareButton,
  WhatsappShareButton,
} from "react-share";
import ReactPaginate from "react-paginate";
import { ArrowLeft, ArrowRight } from "react-feather";

const LocateUs = () => {
  const [labDetails, setLabDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(0);

  const handleSendEmail = (item) => {
    const body = `Branch Name :- ${item?.branch_Name}
    Address:- ${item?.branch_address}
    Timing:- ${item?.timing}
    `;
    const mailtoLink = `mailto:?subject=&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    axios.get("https://api.kaiveehealthcare.com/v1/lab-detail/getAll").then((res) => {
      setLabDetails(res.data.data.LabData);
      setTotalPages(Math.ceil(res.data.data.LabData.length / itemsPerPage));
      console.log(res.data.data.LabData);
    });
  }, [itemsPerPage]);

  useEffect(() => {
    const paginatedLabDetails = labDetails.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [currentPage, labDetails, itemsPerPage]);

  const metaData = {
    title: "Locate a Kaivee Healtcare Diagnostic Centre Near You in Delhi",
    description:
      "Kaivee Healtcare is a trusted diagnostic centre in Delhi. Find the nearest Diagnostic centre near you.",
    url: "", // Replace with the canonical URL of the page
    image: "/",
  };

  const handlePageChange = (page) => {
    setCurrentPage(page.selected + 1);
  };

  const paginatedLabDetails = labDetails.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:image" content={metaData.image} />
        <meta property="og:site_name" content="Kaivee Healtcare" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Kaivee Healtcare" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />
      </Head>
      <div className="container">
        <h1 className="CareerHeadding CareerHeaddingMain">Our Presence</h1>
        <div className="LocateMainBox">
          <ul className="ContactUsBox">
            {paginatedLabDetails.map((item) => (
              <li key={item._id}>
                <div className="ContactUsBoxInner">
                  <div className="MapBox">
                    <iframe
                      src={item.map_url}
                      title={`Map of ${item.branch_Name}`}
                    ></iframe>
                  </div>
                  <div className="LabContactDetails">
                    <h2>{item.branch_Name}</h2>
                    <h5>{item.branch_address}</h5>
                    <h3>
                      <strong>Email: </strong>
                      <span>{item.email}</span>
                    </h3>
                    <h3>
                      <strong>Timing: </strong>
                      <span>{item.timing}</span>
                    </h3>
                    <div>
                      <Link
                        href={`tel:${item.contact_number}`}
                        className="labContactBtn"
                      >
                        Call Us Now
                      </Link>
                      <div className="LocateUsSocial flex justify-end items-center">
                        <WhatsappShareButton
                          style={{ margin: 5 }}
                          title="Kaivee Healtcare Lab Address: "
                          url={metaData.url}
                        >
                          <Image
                            src={whatsapp}
                            className="CareerSocialimg"
                            title="WhatsApp"
                            alt="Share on WhatsApp"
                          />
                        </WhatsappShareButton>
                        <Image
                          src={allShare}
                          title="Share"
                          width={35}
                          height={35}
                          alt="Share"
                          onClick={() => {
                            handleSendEmail(item);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
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
            onPageChange={handlePageChange}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            pageCount={totalPages}
            renderOnZeroPageCount={null}
            pageClassName={"page-item"}
            nextClassName={"page-item next"}
            pageLinkClassName={"page-link"}
            containerClassName={
              "pagination react-paginate justify-content-center my-2 pr-1 font-[500] !text-[18px] sm:justify-start"
            }
            activeClassName="active"
          />
        </div>
      </div>
    </>
  );
};

export default LocateUs;
