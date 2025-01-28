import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  Navbar as NavbarStrap,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import Facilities from "./facilities";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import FacilitiesMobile from "./facilitiesMobile";

const Bottombar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isXS, setisXS] = useState(false);

  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setAboutOpen(false);
      setFacilitiesOpen(false);
    }
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const toggleAbout = () => setAboutOpen(!aboutOpen);
  const router = useRouter();
  const { asPath } = router;
  const store = useSelector((state) => state);
  const {
    category: { categories },
  } = store;
  const handleResize = () => {
    if (window.innerWidth <= 640) {
      setisXS(true);
      console.log("heyyyyyyyyyyyy");
      // toggleOtherDrawer();
    } else {
      setisXS(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="nav-bg">
      <div
        className="container sm:px-[15px] 
        px-[0px] "
      >
        <NavbarStrap light expand="lg">
          <div className="  p-[5px] hamburger-container lg:hidden flex justify-between items-center w-full ">
            <div className="nav-bar block lg:hidden">
              <input
                className="checkbox"
                type="checkbox"
                checked={isOpen}
                name=""
                id=""
                onChange={toggle}
              />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
            </div>
            {/* <NavbarToggler onClick={toggle} /> */}
            <div className="block sm:hidden h-fit">
              <a
                className={`transition-all cursor-pointer font-[400] menuText !text-[16px] download_report_button`}
                // franchisee
                href="http://203.115.101.226/citylab/Design/online_lab"
                target="_blank"
              >
                <span>Download Report</span> &nbsp;
                <img
                  src="https://ik.imagekit.io/tdebolwrx/download%20Icon.png?updatedAt=1714451562620"
                  alt="Icon"
                ></img>
              </a>
            </div>
          </div>
          <Collapse isOpen={isOpen} navbar className="visible">
            <Nav className="menu-item-lists navbar-wrap" navbar>
              <NavItem>
                <Link
                  prefetch
                  className={`transition-all cursor-pointer font-[400] menuText !text-[16px] sm:p-0 p-[15px] inline-block  ${
                    asPath == "/" && "active"
                  }`}
                  href="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown className="hover-menu-about">
                  <div
                    className={`flex justify-between items-start sm:p-0 p-[15px]  ${
                      aboutOpen ? "bg-[#7DB440]" : ""
                    } `}
                  >
                    <div
                      className={`transition-all font-[400] menuText !text-[16px]  ${
                        asPath == "" && "active"
                      }`}
                    >
                      About Us
                    </div>
                    <div className="block sm:hidden cursor-pointer">
                      {!aboutOpen ? (
                        <span className="text-[20px]" onClick={toggleAbout}>
                          {" "}
                          +
                        </span>
                      ) : (
                        <span className="text-[20px]" onClick={toggleAbout}>
                          -
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="pl-[28px] pt-[2px]">
                    <DropdownMenu
                      className={`${
                        !isXS ? "show-menu-about" : "!block"
                      }  m-0 transition-all duration-1000 transform ease-in-out  ${
                        aboutOpen
                          ? " !h-auto	"
                          : isXS
                          ? "overflow-hidden  !h-0  !p-0 !border-none"
                          : ""
                      } `}
                    >
                      <Link
                        prefetch
                        href={`/about`}
                        onClick={closeMenu}
                        className={`transition-all align-middle menuText  ${
                          asPath == "/about" && "!text-[#D41958] !font-medium"
                        }`}
                      >
                        <DropdownItem className="transition-all  hover:bg-[#D41958] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          About us
                        </DropdownItem>
                      </Link>

                      <Link
                        prefetch
                        href={`/about/our-team`}
                        onClick={closeMenu}
                        className={`transition-all align-middle menuText  ${
                          asPath == "/about/our-team" &&
                          "!text-[#D41958] !font-medium"
                        }`}
                      >
                        <DropdownItem className="transition-all  hover:bg-[#D41958] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          Our Team
                        </DropdownItem>
                      </Link>

                      <Link
                        prefetch
                        href={`/about/quality-assurance`}
                        onClick={closeMenu}
                        className={`transition-all align-middle menuText  ${
                          asPath == "/about/quality-assurance" &&
                          "!text-[#D41958] !font-medium"
                        }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D41958] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          Quality Assurance
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/about/awards-accreditations`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${
                          asPath == "/about/awards-accreditations" &&
                          "!text-[#D41958] !font-medium"
                        }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D41958] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          Awards & Accreditations
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/about/csr`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${
                          asPath == "/about/csr" &&
                          "!text-[#D41958] !font-medium"
                        }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D41958] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          CSR
                        </DropdownItem>
                      </Link>
                    </DropdownMenu>
                  </div>
                </UncontrolledDropdown>
              </NavItem>
              {categories?.data?.categoryData && (
                <NavItem>
                  {!isXS ? (
                    <Facilities
                      categories={categories?.data.categoryData}
                      closeMenu={closeMenu}
                    />
                  ) : (
                    <FacilitiesMobile
                      categories={categories?.data.categoryData}
                      isXS={isXS}
                      closeMenu={closeMenu}
                      setFacilitiesOpen={setFacilitiesOpen}
                      facilitiesOpen={facilitiesOpen}
                    />
                  )}
                </NavItem>
              )}
              <NavItem>
                <UncontrolledDropdown className="hover-menu">
                  <Link
                    prefetch
                    onClick={closeMenu}
                    href="/health-packages"
                    className={`transition-all cursor-pointer font-[400] menuText !text-[16px] sm:p-0 p-[15px] inline-block ${
                      asPath?.includes("/health-packages") &&
                      "active text-[#D41958] border-b-2 "
                    }`}
                  >
                    Health Packages
                  </Link>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <Link
                  prefetch
                  onClick={closeMenu}
                  className={`transition-all cursor-pointer font-[400] menuText !text-[16px]  sm:p-0 p-[15px] inline-block ${
                    asPath == "/book-a-test" && "active"
                  }`}
                  href="/book-a-test"
                >
                  Book a Test
                </Link>
              </NavItem>
             
              {/* <NavItem>
                <UncontrolledDropdown className="hover-menu">
                  <div
                    className={`transition-all cursor-pointer font-[400] menuText !text-[16px] ${
                      asPath?.includes("/covid-19") &&
                      "active text-[#D41958] border-b-2 border-[#f7a70b]"
                    }`}
                  >
                    Covid-19
                  </div>
                  <DropdownMenu className="show-menu m-0">
                    <>
                      <Link
                        prefetch
                        className={`transition-all font-[400] menuText  ${
                          asPath == `/covid-19/covid-19-RT-PCR` &&
                          "!text-[#D41958] !font-medium"
                        }`}
                        href={`/covid-19/covid-19-RT-PCR`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D41958] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          Covid 19 RT-PCR
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        className={`transition-all font-[400] menuText  ${
                          asPath == `/covid-19/COVID-19-vaccination` &&
                          "!text-[#D41958] !font-medium"
                        }`}
                        href={`/covid-19/COVID-19-vaccination`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D41958] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          COVID-19 Vaccination
                        </DropdownItem>
                      </Link>
                    </>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem> */}
              <NavItem>
                <a
                  className={`transition-all cursor-pointer font-[400] menuText !text-[16px] sm:p-0 p-[15px] inline-block`}
                  // franchisee
                  href="/"
                  target="_blank"
                >
                  Blogs
                </a>
              </NavItem>
              <NavItem>
                <Link
                  prefetch
                  onClick={closeMenu}
                  className={`transition-all cursor-pointer font-[400] menuText !text-[16px] sm:p-0 p-[15px] inline-block ${
                    asPath == "/print-media-coverage" && "active"
                  }`}
                  href="/locate-us"
                >
                  Locate
                </Link>
              </NavItem>

              <NavItem>
                <Link
                  prefetch
                  onClick={closeMenu}
                  className={` cursor-pointer font-[400] menuText !text-[16px]  sm:p-0 p-[15px] inline-block ${
                    asPath == "/feedback" && "active"
                  }`}
                  href="/feedback"
                >
                  Feedback
                </Link>
              </NavItem>
              <NavItem className="block lg:hidden">
                <Link
                  prefetch
                  onClick={closeMenu}
                  className={` cursor-pointer font-[400] menuText !text-[16px] sm:p-0 p-[15px] inline-block ${
                    asPath == "/contact-us" && "active"
                  }`}
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </NavbarStrap>
      </div>
    </div>
  );
};

export default Bottombar;
