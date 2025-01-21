// import Link from "next/link";

// import { useEffect, useState, useRef } from "react";

// import { useRouter } from "next/router";

// const TopNavbar = () => {
//   const router = useRouter();
//   const { asPath } = router;
//   const [scroll, setScroll] = useState(0);
//   const headerRef = useRef(null);

//   // const [cartItems, setCartItems] = useState(0);

//   useEffect(() => {
//     const onScroll = () => setScroll(window.scrollY);
//     window.removeEventListener("scroll", onScroll);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const header = headerRef.current;
//     if (scroll >= 130) {
//       header.classList.add("sticky");
//     } else {
//       header.classList.remove("sticky");
//     }
//   }, [scroll]);

//   return (
//     <header
//       ref={headerRef}
//       className={
//         scroll
//           ? "header-nav web-view header-nav-web sticky "
//           : "header-nav web-view header-nav-web cstm-top-nav"
//       }
//     >
//       <div className="container">
//         <div className="menu-items">
//           <div className="close-mobile-menu" style={{ display: "none" }}>
//             <i className="fa fa-times" />
//           </div>
//           <ul className=" flex justify-between items-center w-full pr-4 ">
//             {/* <li>
//               <Link
//                 className={`text-black text-[16px]  hover:border-b-[2px] hover:border-black  ${asPath.includes('/patients') ? 'border-b-[2px] border-black pb-[4px] font-[500]' : ''}`}
//                 href="/"
//               >
//                 Patients
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className={`text-black text-[16px]  hover:border-b-[2px] hover:border-black  ${asPath.includes('/doctors') ? 'border-b-[2px] border-black pb-[4px] font-[500]' : ''}`}
//                 href="/about/our-team">
//                 Doctors
//               </Link>
//             </li> */}
//             <li>
//               <Link
//                 className={`text-black hover:border-b-[2px] hover:border-black text-[16px] ${
//                   asPath.includes("/clinical-research")
//                     ? "border-b-[2px] border-black pb-[4px] font-[500]"
//                     : ""
//                 }`}
//                 href="/clinical-research"
//               >
//                 Clinical Research/Trials
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className={`text-black text-[16px]  hover:border-b-[2px] hover:border-black  ${
//                   asPath.includes("/franchisee")
//                     ? "border-b-[2px] border-black pb-[4px] font-[500]"
//                     : ""
//                 }`}
//                 href="/franchisee"
//               >
//                 Franchise
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className={`text-black text-[16px]  hover:border-b-[2px] hover:border-black  ${
//                   asPath.includes("/corporate-health-enquiry")
//                     ? "border-b-[2px] border-black pb-[4px] font-[500]"
//                     : ""
//                 }`}
//                 href="/corporate-health-enquiry"
//               >
//                 Corporate Tie-Ups
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className={`text-black text-[16px]  hover:border-b-[2px] hover:border-black  ${
//                   asPath.includes("/careers")
//                     ? "border-b-[2px] border-black pb-[4px] font-[500]"
//                     : ""
//                 }`}
//                 href="/careers"
//               >
//                 Careers
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className={`text-black text-[16px]  hover:border-b-[2px] hover:border-black  ${
//                   asPath.includes("/contact-us")
//                     ? "border-b-[2px] border-black pb-[4px] font-[500]"
//                     : ""
//                 }`}
//                 href="/contact-us"
//               >
//                 Contact Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className={`text-black text-[16px]  hover:border-b-[2px] hover:border-black  ${
//                   asPath.includes("/locate-us")
//                     ? "border-b-[2px] border-black pb-[4px] font-[500]"
//                     : ""
//                 }`}
//                 href="/locate-us"
//               >
//                 Locate Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TopNavbar;
