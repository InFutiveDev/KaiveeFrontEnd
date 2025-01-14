import Image from "next/image";
import Link from "next/link";
import logo from "images/appLogo.png";
import { Phone } from "react-feather";

const Navbar = ({ data }) => {
  return (
    
      <div className="bg-[#f7f7f7] shadow">

        <div className="container flex gap-4 justify-between items-center">

        <div className="container flex justify-between items-center">

          <div className="logo-main mobile-view">
            <Link href="/">
              <Image
                height={200}
                width={200}
                quality={100}
                layout="fixed"
                className="h-[65px] md:h-[65px] object-contain object-center rounded"
                alt="About"
                loading="eager"
                src={logo?.src}
              />
            </Link>
          </div>

          <div className="bg-yellow-300 px-2 py-1 rounded-full">
            <Link href={`tel:${data?.mobile_landing}`}>
              <div className="space-x-2 text-[16px] flex justify-start items-center">
                <Phone size={19} />
                <span>+{data?.mobile_landing}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
   </div>
  );
};
export default Navbar;
