import { LinkedinSVG } from "assets/images/SvgImage";
import { HealthInstagramSVG } from "assets/images/SvgImage";
import { HealthFacebookSVG } from "assets/images/SvgImage";
import HealthTwiter from "assets/images/icon/img1.png";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";
import CancelIcon from "assets/images/login/cancel (2) 1.png";
import BookIcon from "assets/images/footer/Group.png";
import HomeIcon from "assets/images/footer/home (6) 1.png";
import CallIcon from "assets/images/footer/phone-call 1.png";
import ReportIcon from "assets/images/footer/report (1) 1.png";
import { WhatsappSVG } from "assets/images/SvgImage";

import { File, Phone, Settings, X } from "react-feather";
import { RiTestTubeFill } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import Image from "next/image";

const Footer = () => {
  const store = useSelector((state) => state);
  const { category } = store;
  const { categories } = category;
  const [count, setCount] = useState(9);
  const [collapse, setCollapse] = useState(false);
  // console.log("categories", categories);
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://api.whatsapp.com/send/?phone=%2B9220817222&text=Hi+Kaivee+HealthCare"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <WhatsappSVG className="w-10 h-10 text-white" />
        </a>
      </div>

      <div className=" footer-bg relative">
        {!collapse ? (
          <div className="fixed right-0 top-[50%] z-[111111111]">
            <div
              className="bg-[#D41958] hidden shadow-2xl px-1.5 py-2 rounded-l-full relative cursor-pointer"
              onClick={() => setCollapse(!collapse)}
            >
              <div className="text-white flex justify-start items-center space-x-1">
                {" "}
                <Settings />
              </div>
            </div>
          </div>
        ) : (
          <div className="fixed right-0 top-[32%] z-[111111111]">
            <div className="setting-sticiky shadow-lg  h-[400px] w-[280px] rounded-l-full ">
              <div
                className="absolute rounded-full shadow-xl bg-[#FFFFFF] flex justify-center items-center h-12 w-12 right-1  top-[42%]  cursor-pointer"
                onClick={() => setCollapse(false)}
              >
                <spna>
                  {" "}
                  <Image src={CancelIcon} width={24} height={24} alt="cancel" />
                </spna>
              </div>
              <a
                href="tel:01147252000"
                className="flex flex-col  space-x-3 absolute cursor-pointer justify-center items-center left-[171px] top-[30px] text-white"
              >
                <div className="flex justify-center items-center shadow-lg bg-[#8D8D8D] rounded-full  w-12 h-12 ">
                  <Image src={CallIcon} width={24} height={24} alt="cancel" />
                </div>
                <span className="text-white text-[15px] !m-0">Call</span>
              </a>

              <a
                href="/book-a-test"
                target="_blank"
                className=" space-x-3 absolute cursor-pointer  flex-col flex justify-start items-center left-[44px] top-[88px] text-white"
              >
                <div className="flex justify-center items-center shadow-lg bg-[#8D8D8D] rounded-full  w-12 h-12 ">
                  <Image src={BookIcon} width={24} height={24} alt="cancel" />
                </div>
                <span className="text-white text-[15px] !m-0">
                  {" "}
                  Book a Test
                </span>
              </a>
              
              <a
                href="/free-home-sample-collection"
                target="_blank"
                className=" space-x-3 flex flex-col justify-start items-center absolute cursor-pointer left-[136px] bottom-[35px] text-white"
              >
                <div className="flex justify-center items-center shadow-lg bg-[#8D8D8D] rounded-full  w-12 h-12 ">
                  <Image src={HomeIcon} width={24} height={24} alt="cancel" />
                </div>
                <span className="text-white text-[15px] !m-0">
                  {" "}
                  Home Collection
                </span>
              </a>
            </div>
          </div>
        )}

        <div className="container py-[40px]">
          <div className="relative">
            <div className="grid pb-[24px] border-b-[1px] border-[#CEC6B3] lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-[20px] xl:gap-x-24 gap-y-5 lg:gap-y-10">
              <div>
                <div className="font-bold text-base">FACILITIES</div>
                <ul className="text-[14px] mt-[12px] flex flex-col lg:gap-3 gap-1">
                  {categories?.data?.categoryData
                    .filter((ele) => ele?.perent_category_name == null)
                    ?.slice(0, count)
                    .map((item, index) => (
                      <li key={index}>
                        <Link
                          as={`/facilities/${item.category_url}`}
                          href={{
                            pathname: `/facilities/[slug]`,
                            query: {
                              id: item.category_url,
                              title: item.perent_category_name,
                            },
                          }}
                          passHref
                        >
                          {item?.category_name}
                        </Link>
                      </li>
                    ))}
                  {count === 9 && (
                    <li
                      className="font-bold cursor-pointer"
                      onClick={() => setCount(20)}
                    >
                      View more...
                    </li>
                  )}
                  {/* {count === 20 && (
                    <li>
                      <Link href={"/biomedical-waste"}>Biomedical Waste</Link>
                    </li>
                  )} */}
                  {count === 20 && (
                    <li
                      className="font-bold cursor-pointer"
                      onClick={() => setCount(9)}
                    >
                      View Less...
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <div className="font-bold text-base">QUICK LINKS</div>
                <ul className="text-[14px] mt-[12px] flex flex-col lg:gap-3 gap-1">
                  {/* <li>
                    <Link href="/empanelled-corporates-TPA">
                      Empanelled Corporates & TPA
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/feedback">Give Feedback</Link>
                  </li>
                  <li>
                    <Link href="/biomedical-waste">Bio-waste</Link>
                  </li>
                  <li>
                    <Link href="/media-coverage">Media coverage</Link>
                  </li>
                  <li>
                    <Link href="/print-media-coverage">News</Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-base">ABOUT US</div>
                <ul className="text-[14px] mt-[12px] flex flex-col lg:gap-3 gap-1">
                  <li>
                    {" "}
                    <Link href="/about">About us</Link>
                  </li>
                  <li>
                    <Link href="/about/our-team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/about/quality-assurance">
                      Quality Assurance
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/csr">CSR</Link>
                  </li>
                  <li>
                    <Link href="/about/awards-accreditations">
                      Awards & Accreditations
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-base">CONTACT US</div>
                <ul className="text-[14px] mt-[12px] flex flex-col lg:gap-3 gap-1">
                  <li>
                    <Link href="/corporate-health-enquiry">
                      Corporate Health Enquiry
                    </Link>
                  </li>
                  <li>
                    <Link href="/clinical-research">Clinical Research</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/locate-us">Locate Us</Link>
                  </li>
                  <li>
                    <Link href="/franchisee">Become Franchise</Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-base">OTHER LINKS</div>
                <ul className="text-[14px] mt-[12px] flex flex-col lg:gap-3 gap-1">
                  {/* <li> */}
                  {/* <Link href="/covid-19-rt-pcr-test">Covid 19</Link> */}
                  {/* <Link href="/covid-19-pcr-h2">Covid 19</Link>
                  </li> */}
                  {/* <li>
                    <Link href="/covid-19/COVID-19-vaccination">
                      COVID-19 Vaccination
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/free-home-sample-collection">
                      Free Home Sample <br /> Collection
                    </Link>
                  </li>
                  <li>
                    <Link href="/health-packages">Health Package</Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between pt-[24px]">
            <span className=" text-[14px] font-normal">
              © 2025 Kaivee Healthcare All Rights Reserved!
            </span>
            <ul className="flex flex-wrap  ">
              <li className="text-[14px] font-normal px-[6px]  border-r-[1px] border-[#27272A]">
                <Link href="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li className="text-[14px] font-normal px-[6px] border-r-[1px] border-[#27272A]">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="text-[14px] font-normal px-[6px] border-r-[1px] border-[#27272A]">
                <Link href="/disclaimer">Disclaimer</Link>
              </li>
              <li className="text-[14px] font-normal px-[6px]">
                <Link href="/refund-policy">Refund & Cancellation Policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex  md:justify-start sm:justify-start justify-start gap-[16px] mt-[24px]">
            <div>
              <a href="https://www.instagram.com/kaivee.in/" target="_black">
                <HealthInstagramSVG />
              </a>
            </div>
            <div className="flex items-center">
              <a href="https://twitter.com/" target="_black">
                <Image
                  src={HealthTwiter}
                  alt="twitter"
                  width={6}
                  height={6}
                  className="w-6 h-6 rounded-full bg-[#E1E0D5] p-[1]"
                />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/kaivee.in/" target="_black">
                <HealthFacebookSVG />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/" target="_black">
                <LinkedinSVG />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
