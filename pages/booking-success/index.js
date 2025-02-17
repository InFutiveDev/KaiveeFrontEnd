import Image from "next/image";
import orderImage from 'assets/images/_.jpeg';
import Navbar from "components/navbar";
import Link from "next/link";

const BookingSuccess = () => {

    return (
        <>
            {/* <Navbar /> */}
            <div className=" min-h-[50vh] my-5 flex flex-col items-center container mx-auto bg-[#D419580D]/20 rounded-xl text-center p-2">
                <div className="w-full flex justify-center  ">
                    <div className='relative d-flex align-items-center'>
                        <Image width={200} height={200} layout='fixed' className="rounded-lg h-32 w-44 object-fill" alt="About" src={orderImage?.src} />
                    </div>
                </div>
                <p className="text-center text-gray-800 text-[16px] font-[500]">
                    Thank you ! Your test has been booked successfully. You will get call from our executive soon.
                </p>
                <div className="my-2 flex justify-start items-center space-x-2">
                    <Link href='/' className=" bg-[#D41958] text-white shadow px-4 py-1 rounded-lg text-[18px]">
                        Home
                    </Link>
                    <Link href='/dashboard/my-booking' className=" bg-white border-[1px] border-[#D41958] text-[#D41958] px-3 py-1 rounded-lg text-[18px]">
                        My Booking
                    </Link>

                </div>
            </div>
            
        </>
    )
}
export default BookingSuccess;