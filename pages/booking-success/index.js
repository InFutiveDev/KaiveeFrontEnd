import Image from "next/image";
import orderImage from 'assets/images/_.jpeg';
import Navbar from "components/navbar";
import Link from "next/link";

const BookingSuccess = () => {

    return (
        <>
            {/* <Navbar /> */}
            <div className="  my-5 flex flex-col items-center container mx-auto  rounded-xl text-center ">
                <div className="w-full flex justify-center  ">
                    <div className='relative d-flex align-items-center mb-4'>
                    

                        <Image
                        src="https://ik.imagekit.io/InFutiveTechnology/kaivee/appointment-booking-with-man-smartphone_23-2148564095.jpg?updatedAt=1744980082531"
                        alt="booking-success"
                        width={300}
                        height={400}
                        className="rounded-lg object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                        />

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