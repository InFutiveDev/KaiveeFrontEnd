import Image from "next/image";
// images and logo
import logo from "images/appLogo.png";
import Link from "next/link";
import Login from "layout/auth/login";
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { GET_ALL_CATEGORIES } from "redux/actions/categories";
import { GET_ALL_HABITS } from "redux/actions/habit";
import { GET_USER_DETAILS } from "redux/actions/auth";
import { useRouter } from "next/router";
import { UPDATE_CART_QAUNTITY } from "redux/actions/cart";
import { GET_ALL_HEALTHRISK } from "redux/actions/healthrisk";
import { UserIconSVG } from "assets/images/SvgImage";
import { GET_BOOK_A_TEST } from "redux/actions/book-a-test";
import Bottombar from "./bottombar";
import { Search } from "react-feather";
import abmbuimg from "assets/images/ambu.gif";


const Navbar = () => {
  const [filterDataShow, setFilterDataShow] = useState(false);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  // const { asPath } = router;
  const store = useSelector((state) => state);
  const { auth, test, cart, bookTest } = store;
  // const { categories } = category;
  const { testsSuggestions } = test;
  const [scroll, setScroll] = useState(0);
  const [userLogin, setUserLogin] = useState(false);
  const headerRef = useRef(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch({ type: "GET_USER_DETAILS", data: null });
    auth.logedInUser = null;
    setUserLogin(false);
    setIsOpen(false);
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchText) {
      setFilterDataShow(false);
      router.push({
        pathname: "/book-a-test",
        query: {
          str: searchText,
          filterType: "str",
        },
      });
      if (testsSuggestions?.data) {
        const pagination = testsSuggestions?.data?.pagination;
        dispatch({
          type: "GET_ALL_TESTS_SUGGESTION",
          data: {
            data: {
              testData: null,
              pagination: {
                limit: pagination?.limit,
                offset: pagination?.offset,
                total: pagination?.total - 1,
              },
            },
          },
        });
      }
    }
  };

  useEffect(() => {
    const header = headerRef.current;
    if (scroll >= 130) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }, [scroll]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.length > 2) {
      dispatch(GET_BOOK_A_TEST(1, 12, `&str=${e.target.value}`));
      setFilterDataShow(true);
    }
  };

  useEffect(() => {
    dispatch(GET_ALL_CATEGORIES());
    dispatch(GET_ALL_HABITS());
    dispatch(GET_ALL_HEALTHRISK());
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setUserLogin(true);
      dispatch(GET_USER_DETAILS());
    }
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      dispatch(UPDATE_CART_QAUNTITY(Object.keys(cartData).length));
    }
    if (router.query.search) {
      setSearchText(router.query.search);
    }
  }, [dispatch, router]);

  return (
    <header
      ref={headerRef}
      className={
        scroll
          ? "header-nav web-view header-nav-web sticky"
          : "header-nav web-view header-nav-web lg:sticky bg-white  top-[0px] z-[1000]"
      }
    >
      <div className="  sm:container mx-auto">
        <div className="navigation_bar">
          <div className="  sm:pb-0 w-full sm:w-auto flex justify-between items-center">
            <div className="logo-main">
              <Link href="/">
                <Image
                  height={90}
                  width={259}
                  quality={100}
                  layout="fixed"
                  className="h-[120px]  object-contain object-center rounded"
                  alt="About"
                  src={logo?.src}
                />
              </Link>
            </div>
            <div className="flex">
              <div className="cart-icon block sm:hidden">
                <Link href={"/cart"} className="align-middle loginbutton">
                  <div className="relative">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.00012 1.3791e-07C0.447837 1.3791e-07 0.00012207 0.447715 0.00012207 1C0.00012207 1.55228 0.447837 2 1.00012 2H2.77942C2.92502 2 3.06692 2.04581 3.18503 2.13095C3.30314 2.21608 3.39147 2.33622 3.43751 2.47435L6.7345 12.3672C6.88091 12.8064 6.89952 13.2793 6.78723 13.7285L6.51575 14.8164C6.1174 16.4098 7.35771 18 9.00012 18H21.0001C21.5524 18 22.0001 17.5523 22.0001 17C22.0001 16.4477 21.5524 16 21.0001 16H9.00012C8.61074 16 8.36076 15.6805 8.4552 15.3027L8.65993 14.485C8.69462 14.3465 8.77462 14.2235 8.88722 14.1356C8.99981 14.0477 9.13854 14 9.28137 14H20.0001C20.4307 14.0002 20.8131 13.7248 20.9493 13.3164L23.6154 5.31641C23.8313 4.66862 23.349 3.99969 22.6661 4H6.55481C6.40921 4 6.2673 3.95419 6.14919 3.86906C6.03107 3.78392 5.94274 3.66379 5.8967 3.52566L4.94934 0.683594C4.81308 0.275155 4.43069 -0.000224972 4.00012 1.3791e-07H1.00012ZM8.00012 19C6.89555 19 6.00012 19.8954 6.00012 21C6.00012 22.1046 6.89555 23 8.00012 23C9.10469 23 10.0001 22.1046 10.0001 21C10.0001 19.8954 9.10469 19 8.00012 19ZM20.0001 19C18.8956 19 18.0001 19.8954 18.0001 21C18.0001 22.1046 18.8956 23 20.0001 23C21.1047 23 22.0001 22.1046 22.0001 21C22.0001 19.8954 21.1047 19 20.0001 19Z"
                        fill="#52525B"
                      />
                    </svg>
                    <div className="lg:-top-[15px] md:-top[9px] -top-[12px] absolute -right-[7px] text-[12px]">
                      <span className="bg-[#7DB440] text-white lg:px-[6px] lg:py-[1px] md:px-[5px] px-[4px] block rounded-full ">
                        {cart?.cartQuantity}
                      </span>
                    </div>
                  </div>
                  <span className="cartText">Cart</span>
                </Link>
              </div>
              <div className="login-btn-wrap block sm:hidden">
                <a className="loginbutton ">
                  {userLogin || auth?.logedInUser ? (
                    <UncontrolledDropdown className=" hover-menu">
                      <div onClick={() => setIsOpen(true)}>
                        <UserIconSVG />
                      </div>
                      {isOpen && (
                        <DropdownMenu className="custom-dropdown-menu show-menu m-0">
                          <div>
                            <Link
                              href={`/dashboard`}
                              onClick={() => setIsOpen(false)}
                            >
                              Dashboard
                            </Link>
                          </div>
                          <div>
                            <Link href={`/`} onClick={handleLogout}>
                              Logout
                            </Link>
                          </div>
                        </DropdownMenu>
                      )}
                    </UncontrolledDropdown>
                  ) : (
                    <Login type={"home"} />
                  )}
                </a>
              </div>
            </div>
          </div>
          <div className="search-contain">
            <form onSubmit={handleSubmit}>
              <div className="search-bar searchDashbord">
                <input
                  type="search"
                  className="searchMain font-[400] placeholder:text-gray-500"
                  placeholder="Search Test & Packages"
                  value={searchText}
                  onChange={handleSearch}
                  onBlur={() => {
                    setTimeout(() => {
                      setFilterDataShow(false);
                    }, 300);
                  }}
                />
                <button
                  type="submit"
                  className="bg-[#D41958] px-2 py-1.5 flex justify-center items-center rounded-r-md text-white text-xl "
                >
                  <Search name="search-outline" />
                </button>

                {bookTest?.data?.data?.testData && filterDataShow ? (
                  <div className="search-result shadow-remove">
                    <ul>
                      {bookTest?.data?.data?.testData.length ? (
                        <>
                          {bookTest?.data?.data?.testData.map((test, index) => {
                            return (
                              <li key={index}>
                                <Link
                                  className="menuText py-[8px]"
                                  href={
                                    test.package_type === "health-package"
                                      ? `/health-packages/${test.test_url}`
                                      : `/book-a-test/${test.test_url}`
                                  }
                                >
                                  {test.specialityName}
                                </Link>
                              </li>
                            );
                          })}
                        </>
                      ) : (
                        <li className="text-danger shadow-remove box-hover">
                          <Link className="menuText shadow-remove " href={"#"}>
                            No Tests Found
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                ) : null}
              </div>
            </form>
          </div>
          <div className="profile  sm:w-auto ml-10 sm:ml-2">
              <div className="w-full flex items-center gap-2 sm:gap-3">
                
                <Image
                  src={abmbuimg}
                  alt="Ambulance"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />

                {/* Title on the right */}
                <span className="text-sm sm:text-base font-medium text-black">
                 Ambulance
                </span>
              </div>
            </div>
          <div className="profile w-full sm:w-auto">
            <div className="w-full flex flex-wrap  justify-between sm:justify-start ">
              <div className="phone">
                <a href="tel:9289088633">
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8263 11.9883L12.6038 11.7225C12.0701 11.6583 11.5451 11.8508 11.1688 12.245L9.55882 13.9317C7.08255 12.6117 5.05254 10.4942 3.79253 7.89083L5.41129 6.195C5.78755 5.80083 5.9713 5.25083 5.91005 4.69167L5.65629 2.38167C5.55129 1.45583 4.80754 0.759167 3.91503 0.759167H2.40128C1.41252 0.759167 0.590015 1.62083 0.651266 2.65667C1.11502 10.485 7.0913 16.7367 14.5551 17.2225C15.5439 17.2867 16.3664 16.425 16.3664 15.3892V13.8033C16.3751 12.8775 15.7101 12.0983 14.8263 11.9883V11.9883Z"
                      fill="#52525B"
                    />
                  </svg>
                  <span className="">9289088633</span>
                </a>
              </div>
              <span className="hidden sm:block h-5 w-px bg-gray-300"></span>
              {/* <div className="track">
                <Link href={"/dashboard/report-tracking"}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_231_3966)">
                      <path
                        d="M20.1751 13.8375C19.7626 13.5 19.2751 13.2 18.7876 12.975C18.7126 12.9375 18.6001 12.9 18.5251 12.8625C18.2626 12.75 17.9626 12.675 17.6626 12.6C17.2876 12.525 16.8751 12.4875 16.4626 12.4875H14.9251C14.6251 13.3875 13.4626 14.0625 12.0001 14.0625C10.5376 14.0625 9.33762 13.3875 9.07512 12.4875H7.53762C7.16262 12.4875 6.75012 12.525 6.33762 12.6C6.03762 12.675 5.73762 12.75 5.47512 12.8625C5.40012 12.9 5.28762 12.9375 5.21262 12.975C4.68762 13.2 4.23762 13.5 3.82512 13.8375C3.18762 14.3625 2.66262 15.0375 2.28762 15.7875C1.91262 16.575 1.72512 17.4 1.72512 18.3C1.72512 19.8375 2.96262 21.1125 4.53762 21.1125H6.03762V16.8C6.03762 15.6375 6.97512 14.7 8.13762 14.7H15.9001C17.0626 14.7 18.0001 15.6375 18.0001 16.8V21.075H19.5001C21.0376 21.075 22.3126 19.8375 22.3126 18.2625C22.2751 16.5375 21.5251 14.925 20.1751 13.8375ZM15.8626 15.5625H8.13762C7.42512 15.5625 6.86262 16.125 6.86262 16.8375V22.7625C6.86262 23.475 7.42512 24.0375 8.13762 24.0375H15.9001C16.6126 24.0375 17.1751 23.475 17.1751 22.7625V16.8C17.1376 16.125 16.5751 15.5625 15.8626 15.5625ZM13.1626 18.8625L12.0001 17.85L10.8376 18.8625C10.7251 18.975 10.5376 19.0125 10.3876 18.9375C10.2376 18.8625 10.1251 18.7125 10.1251 18.5625V16.8375C10.1251 16.6125 10.3126 16.425 10.5376 16.425C10.7626 16.425 10.9501 16.6125 10.9501 16.8375V17.625L11.6626 16.9875C11.8126 16.8375 12.0751 16.8375 12.2251 16.9875L12.9376 17.625V16.8375C12.9376 16.6125 13.1251 16.425 13.3501 16.425C13.5751 16.425 13.7626 16.6125 13.7626 16.8375V18.5625C13.7626 18.7125 13.6501 18.8625 13.5001 18.9375C13.4626 18.975 13.3876 18.975 13.3126 18.975C13.3126 18.975 13.2376 18.9375 13.1626 18.8625ZM15.8626 23.2125H13.8751C13.6501 23.2125 13.4626 23.025 13.4626 22.8C13.4626 22.575 13.6501 22.3875 13.8751 22.3875H15.8626C16.0876 22.3875 16.2751 22.575 16.2751 22.8C16.3126 23.025 16.1251 23.2125 15.8626 23.2125ZM15.8626 21.4875H13.8751C13.6501 21.4875 13.4626 21.3 13.4626 21.075C13.4626 20.85 13.6501 20.6625 13.8751 20.6625H15.8626C16.0876 20.6625 16.2751 20.85 16.2751 21.075C16.3126 21.3 16.1251 21.4875 15.8626 21.4875ZM12.1876 11.8125C11.3251 11.8125 10.5376 11.5875 9.82512 11.2125V12.0375C9.82512 12.5625 10.7251 13.2 11.9626 13.2C13.2376 13.2 14.1001 12.6 14.1001 12.0375V11.4C13.5376 11.6625 12.9001 11.8125 12.1876 11.8125ZM15.5251 6.7125C15.3001 6.7125 15.1126 6.675 14.9251 6.5625C13.2751 5.5875 11.1001 5.5875 9.41262 6.5625C9.22512 6.675 9.03762 6.7125 8.81262 6.7125C8.51262 6.7125 8.25012 6.6 8.06262 6.45V6.8625C8.06262 9.1125 9.90012 10.9875 12.1876 10.9875C14.3251 10.9875 16.0501 9.375 16.2751 7.3125C16.2751 7.125 16.2751 6.9375 16.3126 6.75V6.45C16.0876 6.6 15.8251 6.7125 15.5251 6.7125ZM7.20012 5.7375C7.01262 5.85 6.93762 6.075 6.93762 6.3C6.93762 6.525 7.05012 6.7125 7.23762 6.825C7.20012 6.4125 7.20012 6.0375 7.20012 5.7375ZM12.1876 3.9C10.7626 3.9 9.37512 4.35 8.21262 5.1375C8.28762 5.2875 8.40012 5.475 8.47512 5.625C8.58762 5.8125 8.85012 5.925 9.00012 5.8125C9.97512 5.25 11.0626 4.95 12.1876 4.95C13.3126 4.95 14.4001 5.25 15.3751 5.8125C15.5626 5.925 15.8251 5.8125 15.9376 5.625C16.0126 5.4375 16.1251 5.2875 16.2001 5.1375C15.0001 4.35 13.6126 3.9 12.1876 3.9ZM13.6501 0H10.7251C9.26262 0 8.06262 1.2 8.06262 2.6625V4.2375C9.30012 3.4875 10.7251 3.075 12.1876 3.075C13.6501 3.075 15.0751 3.4875 16.3126 4.2375V2.6625C16.3126 1.2 15.1126 0 13.6501 0ZM17.1751 5.7375V6.75V6.825C17.3251 6.7125 17.4376 6.525 17.4751 6.3C17.4376 6.075 17.3251 5.85 17.1751 5.7375Z"
                        fill="#52525B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_231_3966">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[#D41958]">Track My Sample</span>
                </Link>
              </div> */}
              <div className="login-btn-wrap hidden sm:block hover-menu">
                <a className="loginbutton ">
                  {userLogin || auth?.logedInUser ? (
                    <UncontrolledDropdown className=" ">
                      <UserIconSVG />
                      <DropdownMenu className="custom-dropdown-menu show-menu m-0">
                        <div>
                          <Link href={`/dashboard`}>Dashboard</Link>
                        </div>
                        <div>
                          <Link href={`/`} onClick={handleLogout}>
                            Logout
                          </Link>
                        </div>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  ) : (
                    <Login type={"home"} />
                  )}
                </a>
              </div>
              <div className="cart-icon hidden sm:block">
                <Link href={"/cart"} className="align-middle loginbutton">
                  <div className="relative">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.00012 1.3791e-07C0.447837 1.3791e-07 0.00012207 0.447715 0.00012207 1C0.00012207 1.55228 0.447837 2 1.00012 2H2.77942C2.92502 2 3.06692 2.04581 3.18503 2.13095C3.30314 2.21608 3.39147 2.33622 3.43751 2.47435L6.7345 12.3672C6.88091 12.8064 6.89952 13.2793 6.78723 13.7285L6.51575 14.8164C6.1174 16.4098 7.35771 18 9.00012 18H21.0001C21.5524 18 22.0001 17.5523 22.0001 17C22.0001 16.4477 21.5524 16 21.0001 16H9.00012C8.61074 16 8.36076 15.6805 8.4552 15.3027L8.65993 14.485C8.69462 14.3465 8.77462 14.2235 8.88722 14.1356C8.99981 14.0477 9.13854 14 9.28137 14H20.0001C20.4307 14.0002 20.8131 13.7248 20.9493 13.3164L23.6154 5.31641C23.8313 4.66862 23.349 3.99969 22.6661 4H6.55481C6.40921 4 6.2673 3.95419 6.14919 3.86906C6.03107 3.78392 5.94274 3.66379 5.8967 3.52566L4.94934 0.683594C4.81308 0.275155 4.43069 -0.000224972 4.00012 1.3791e-07H1.00012ZM8.00012 19C6.89555 19 6.00012 19.8954 6.00012 21C6.00012 22.1046 6.89555 23 8.00012 23C9.10469 23 10.0001 22.1046 10.0001 21C10.0001 19.8954 9.10469 19 8.00012 19ZM20.0001 19C18.8956 19 18.0001 19.8954 18.0001 21C18.0001 22.1046 18.8956 23 20.0001 23C21.1047 23 22.0001 22.1046 22.0001 21C22.0001 19.8954 21.1047 19 20.0001 19Z"
                        fill="#52525B"
                      />
                    </svg>
                    <div className="-top-[12px] absolute -right-[7px] text-[12px]">
                      <span className="bg-[#D41958] text-white lg:px-[6px] lg:py-[1px] md:px-[5px] px-[4px] block rounded-full ">
                        {cart?.cartQuantity}
                      </span>
                    </div>
                  </div>
                  {/* <span className="cartText">Cart</span> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottombar />
    </header>
  );
};

export default Navbar;
