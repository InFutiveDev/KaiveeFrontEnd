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
import abmbuimg from "assets/images/ambu.gif";
import Image from "next/image";

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

  const isBaseURL = [
    "/about",
    "/about/our-team",
    "/about/quality-assurance",
    "/about/awards-accreditations",
    "/about/csr",
    "/home-care",
    "/home-care/ecg-x-ray"
  ].includes(router.asPath);

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
            {/* <div className="block sm:hidden h-fit">
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
            </div> */}
          </div>
          <Collapse isOpen={isOpen} navbar className="visible">
            <Nav className="menu-item-lists navbar-wrap" navbar>
              <NavItem>
                <Link
                  prefetch
                  className={`transition-all cursor-pointer font-[400] menuText !text-[16px] sm:p-0 p-[16px] inline-block  ${asPath == "/" && "active"
                    }`}
                  href="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown className="hover-menu-about ">
                  <div

                    className={`cursor-pointer flex justify-between items-start sm:p-0 p-[16px]  ${aboutOpen ? "bg-[#7DB440]" : ""
                      } `}
                  >
                    <div
                      className={`transition-all font-[400] menuText !text-[16px]  ${asPath == "" && "active"
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
                      className={`${!isXS ? "show-menu-about" : "!block"
                        }  m-0 transition-all duration-1000 transform ease-in-out ${!isBaseURL ? "mt-[25px]" : ""} ${aboutOpen
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
                        className={`transition-all align-middle menuText   ${asPath == "/about" && "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all  hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          About us
                        </DropdownItem>
                      </Link>

                      <Link
                        prefetch
                        href={`/about/our-team`}
                        onClick={closeMenu}
                        className={`transition-all align-middle menuText  ${asPath == "/about/our-team" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all  hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          Our Team
                        </DropdownItem>
                      </Link>

                      <Link
                        prefetch
                        href={`/about/quality-assurance`}
                        onClick={closeMenu}
                        className={`transition-all align-middle menuText  ${asPath == "/about/quality-assurance" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          Quality Assurance
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/about/awards-accreditations`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${asPath == "/about/awards-accreditations" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                        Awards & Accreditations
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/about/csr`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${asPath == "/about/csr" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
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
                <UncontrolledDropdown className="hover-menu-about ">
                  <div

                    className={`cursor-pointer flex justify-between items-start sm:p-0 p-[16px]  ${aboutOpen ? "bg-[#7DB440]" : ""
                      } `}
                  >
                    <div
                      className={`transition-all font-[400] menuText !text-[16px]  ${asPath == "" && "active"
                        }`}
                    >
                      Home Care
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
                      className={`${!isXS ? "show-menu-about" : "!block"
                        }  m-0 transition-all duration-1000 transform ease-in-out ${!isBaseURL ? "mt-[25px]" : ""} ${aboutOpen
                          ? " !h-auto	"
                          : isXS
                            ? "overflow-hidden  !h-0  !p-0 !border-none"
                            : ""
                        } `}
                    >
                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`transition-all align-middle menuText   ${asPath == "/home-care" && "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all  hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          Nursing Care at Home
                        </DropdownItem>
                      </Link>

                      <Link
                        prefetch
                        href={`/home-care/ecg-x-ray`}
                        onClick={closeMenu}
                        className={`transition-all align-middle menuText  ${asPath == "/home-care/ecg-x-ray" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all  hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          ECG & X-Ray at Home
                        </DropdownItem>
                      </Link>

                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`transition-all align-middle menuText  ${asPath == "/home-care" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          Vaccination at Home
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${asPath == "/home-care" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          Holter Monitoring 
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${asPath == "/home-care" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          Sleep Study
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${asPath == "/home-care" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          ABPM
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${asPath == "/home-care" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          Blood Sample Collection
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${asPath == "/home-care" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          Doctors at Home
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${asPath == "/home-care" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                          Physiotherapy at Home
                        </DropdownItem>
                      </Link>
                    </DropdownMenu>
                  </div>
                </UncontrolledDropdown>
              </NavItem>

              <NavItem>
                <UncontrolledDropdown className="hover-menu-about ">
                  <div

                    className={`cursor-pointer flex justify-between items-start sm:p-0 p-[16px]  ${aboutOpen ? "bg-[#7DB440]" : ""
                      } `}
                  >
                    <div
                      className={`transition-all font-[400] menuText !text-[16px]  ${asPath == "" && "active"
                        }`}
                    >
                      Partnership
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
                      className={`${!isXS ? "show-menu-about" : "!block"
                        }  m-0 transition-all duration-1000 transform ease-in-out ${!isBaseURL ? "mt-[25px]" : ""} ${aboutOpen
                          ? " !h-auto	"
                          : isXS
                            ? "overflow-hidden  !h-0  !p-0 !border-none"
                            : ""
                        } `}
                    >
                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`transition-all align-middle menuText   ${asPath == "/home-care" && "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all  hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                        Partner With Us
                        </DropdownItem>
                      </Link>

                      <Link
                        prefetch
                        href={`/home-care/ecg-x-ray`}
                        onClick={closeMenu}
                        className={`transition-all align-middle menuText  ${asPath == "/home-care/ecg-x-ray" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all  hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                        Become A Vendor
                        </DropdownItem>
                      </Link>

                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`transition-all align-middle menuText  ${asPath == "/home-care" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                        Corporate Tie-up
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${asPath == "/home-care" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                        Franchisee 
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${asPath == "/home-care" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                        Annual Health Check up
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${asPath == "/home-care" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                        International PartnerShip
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${asPath == "/home-care" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                        Clinical Research/Trials
                        </DropdownItem>
                      </Link>
                      <Link
                        prefetch
                        href={`/home-care`}
                        onClick={closeMenu}
                        className={`align-middle menuText  ${asPath == "/home-care" &&
                          "!text-[#D41958] !font-medium"
                          }`}
                      >
                        
                      </Link>
                    </DropdownMenu>
                  </div>
                </UncontrolledDropdown>
              </NavItem>



              
              <NavItem>
                <UncontrolledDropdown className="hover-menu-about ">
                  <div

                    className={`cursor-pointer flex justify-between items-start sm:p-0 p-[16px]  ${aboutOpen ? "bg-[#7DB440]" : ""
                      } `}
                  >
                    <div
                      className={`transition-all font-[400] menuText !text-[16px]  ${asPath == "" && "active"
                        }`}
                    >
                      Doctor&apos;s OPD
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
                      className={`${!isXS ? "show-menu-about" : "!block"
                        }  m-0 transition-all duration-1000 transform ease-in-out ${!isBaseURL ? "mt-[25px]" : ""} ${aboutOpen
                          ? " !h-auto	"
                          : isXS
                            ? "overflow-hidden  !h-0  !p-0 !border-none"
                            : ""
                        } `}
                    >
                      
                      <div className="relative group">
                        <Link
                          prefetch
                          href={`/home-care`}
                          onClick={closeMenu}
                          className={`transition-all align-middle menuText ${asPath == "/home-care" && "!text-[#D41958] !font-medium"}`}
                        >
                          <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                            General Medicine &amp; Specialties
                          </DropdownItem>
                        </Link>

                        {/* Right-Aligned Submenu */}
                        <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg border border-gray-200 rounded-md w-48">
                          <Link
                            href="/home-care/general-physician"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            General Physician
                          </Link>
                          <Link
                            href="/home-care/pediatrician"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Pediatrician
                          </Link>
                          <Link
                            href="/home-care/geriatrician"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Geriatrician
                          </Link>
                        </div>
                      </div>


                      <div className="relative group">
                          <Link
                            prefetch
                            href={`/home-care/ecg-x-ray`}
                            onClick={closeMenu}
                            className={`transition-all align-middle menuText ${asPath == "/home-care/ecg-x-ray" && "!text-[#D41958] !font-medium"}`}
                          >
                            <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                              Surgical Specialties
                            </DropdownItem>
                          </Link>

                          {/* Sub-dropdown for Surgical Specialties */}
                          <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg border border-gray-200 rounded-md w-56">
                            <Link
                              href="/home-care/general-surgeon"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              General Surgeon
                            </Link>
                            <Link
                              href="/home-care/orthopedic-surgeon"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Orthopedic Surgeon
                            </Link>
                            <Link
                              href="/home-care/neurosurgeon"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Neurosurgeon
                            </Link>
                            <Link
                              href="/home-care/cardiac-surgeon"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Cardiac Surgeon
                            </Link>
                            <Link
                              href="/home-care/plastic-cosmetic-surgeon"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Plastic &amp; Cosmetic Surgeon
                            </Link>
                            <Link
                              href="/home-care/ent-surgeon"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              ENT Surgeon
                            </Link>
                          </div>
                        </div>


                        <div className="relative group">
                          <Link
                            prefetch
                            href={`/home-care`}
                            onClick={closeMenu}
                            className={`transition-all align-middle menuText ${asPath == "/home-care" && "!text-[#D41958] !font-medium"}`}
                          >
                            <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                              Super Specialties
                            </DropdownItem>
                          </Link>

                          {/* Submenu */}
                          <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg border border-gray-200 rounded-md w-56 ml-2">
                            <Link href="/home-care/cardiologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Cardiologist
                            </Link>
                            <Link href="/home-care/neurologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Neurologist
                            </Link>
                            <Link href="/home-care/nephrologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Nephrologist
                            </Link>
                            <Link href="/home-care/endocrinologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Endocrinologist
                            </Link>
                            <Link href="/home-care/hepatologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Hepatologist
                            </Link>
                            <Link href="/home-care/rheumatologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Rheumatologist
                            </Link>
                          </div>
                        </div>

                        <div className="relative group">
                            <Link
                              prefetch
                              href={`/home-care`}
                              onClick={closeMenu}
                              className={`align-middle menuText ${asPath == "/home-care" && "!text-[#D41958] !font-medium"}`}
                            >
                              <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                                Other Medical Specialties
                              </DropdownItem>
                            </Link>

                            {/* Submenu */}
                            <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg border border-gray-200 rounded-md w-56 ml-2">
                              <Link href="/home-care/dermatologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Dermatologist
                              </Link>
                              <Link href="/home-care/psychiatrist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Psychiatrist
                              </Link>
                              <Link href="/home-care/pulmonologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Pulmonologist
                              </Link>
                              <Link href="/home-care/gastroenterologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Gastroenterologist
                              </Link>
                              <Link href="/home-care/hematologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Hematologist
                              </Link>
                            </div>
                          </div>

                          <div className="relative group">
                          <Link
                            prefetch
                            href={`/home-care`}
                            onClick={closeMenu}
                            className={`align-middle menuText ${asPath == "/home-care" && "!text-[#D41958] !font-medium"}`}
                          >
                            <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                              Women &amp; Child Care
                            </DropdownItem>
                          </Link>

                          {/* Submenu */}
                          <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg border border-gray-200 rounded-md w-56 ml-2">
                            <Link href="/home-care/gynecologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Gynecologist
                            </Link>
                            <Link href="/home-care/obstetrician" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Obstetrician
                            </Link>
                            <Link href="/home-care/neonatologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Neonatologist
                            </Link>
                          </div>
                        </div>

                        <div className="relative group">
                            <Link
                              prefetch
                              href={`/home-care`}
                              onClick={closeMenu}
                              className={`align-middle menuText ${asPath == "/home-care" && "!text-[#D41958] !font-medium"}`}
                            >
                              <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                                Eye &amp; Dental Care
                              </DropdownItem>
                            </Link>

                            {/* Submenu */}
                            <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg border border-gray-200 rounded-md w-56 ml-2">
                              <Link href="/home-care/opthalmologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Ophthalmologist
                              </Link>
                              <Link href="/home-care/dentist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Dentist
                              </Link>
                              <Link href="/home-care/oral-maxillofacial-surgeon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Oral &amp; Maxillofacial Surgeon
                              </Link>
                            </div>
                          </div>

                          <div className="relative group">
                                <Link
                                  prefetch
                                  href={`/home-care`}
                                  onClick={closeMenu}
                                  className={`align-middle menuText ${asPath == "/home-care" && "!text-[#D41958] !font-medium"}`}
                                >
                                  <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                                    Alternative Medicine &amp; Rehabilitation
                                  </DropdownItem>
                                </Link>

                                {/* Submenu */}
                                <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg border border-gray-200 rounded-md w-56 ml-2">
                                  <Link href="/home-care/physiotherapist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Physiotherapist
                                  </Link>
                                  <Link href="/home-care/homeopathy-doctor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Homeopathy Doctor
                                  </Link>
                                  <Link href="/home-care/ayurveda-doctor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Ayurveda Doctor
                                  </Link>
                                </div>
                              </div>

                     
                     
                    </DropdownMenu>
                  </div>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown className="hover-menu">
                  <Link
                    prefetch
                    onClick={closeMenu}
                    href="/health-packages"
                    className={`transition-all cursor-pointer font-[400] menuText !text-[16px] sm:p-0 p-[15px] inline-block ${asPath?.includes("/health-packages") &&
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
                  className={`transition-all cursor-pointer font-[400] menuText !text-[16px]  sm:p-0 p-[15px] inline-block`}
                  href="/free-home-sample-collection"
                >
                  Book Services
                </Link>
              </NavItem>

             
              <NavItem>
                <a
                  className={`transition-all cursor-pointer font-[400] menuText !text-[16px] sm:p-0 p-[15px] inline-block`}
                  // franchisee
                  href="https://pos2.flashdeal.in/kaivee-blog"
                  target="_blank"
                >
                  Blogs
                </a>
              </NavItem>

              
             
            </Nav>
          </Collapse>
        </NavbarStrap>
      </div>
    </div>
  );
};

export default Bottombar;
