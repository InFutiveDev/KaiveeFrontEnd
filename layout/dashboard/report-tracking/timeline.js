
import ImgOne from "assets/images/dashboard/Frame 32.png";

const bookingStatus = ['Accepted', 'Enroute', 'Reached', 'Collected', 'Sample Delivered']

const TrackTimeline = ({ booking_status }) => {


    return (
        <>
            {booking_status && <div className="w-full my-3">
                <p className="text-lg sm:text-3xl  font-semibold font-source-pro">
                    HOME COLLECTION STATUS
                </p>

                <div className="w-full hidden sm:block">
                    <div className=" w-full flex justify-start">
                        {
                            bookingStatus?.map((item, index) => {
                                return (
                                    <div key={item}>
                                        <div className="flex justify-start items-center gap-2">
                                            <div className="flex justify-start  items-center">
                                                <span className={index <= bookingStatus.indexOf(booking_status) ? "w-2 mt-0.5 h-2 rounded-full bg-orange" : "w-2 mt-0.5 h-2 rounded-full bg-gray-400"} />
                                                <div className={index <= bookingStatus.indexOf(booking_status) ? "w-32 h-1 border-b-2 border-orange border-dashed	" : "w-32 h-1 border-b-2 border-gray-400 border-dashed	"} />
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="flex flex-col items-center">
                                                    <img className={index <= bookingStatus.indexOf(booking_status) ? " w-9 h-9" : " w-9 h-9 mix-blend-luminosity "} alt="icon 1" src={ImgOne.src} />
                                                    <p className="font-[400] text-sm text-center">{item}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-full block sm:hidden">
                    <div className=" w-full flex flex-col">
                        {
                            bookingStatus?.map((item, index) => {
                                return (
                                    <div key={item}>
                                        <div className="flex flex-col items-start gap-2">
                                            <div className="ml-2.5 flex flex-col items-center">
                                                <span className={index <= bookingStatus.indexOf(booking_status) ? "w-2 h-2 rounded-full bg-orange" : "w-2 h-2 rounded-full bg-gray-400"} />
                                                <div className={index <= bookingStatus.indexOf(booking_status) ? "h-32 w-1 border-r-2 border-orange border-dashed	" : "h-32 w-1 border-r-2 border-gray-400 border-dashed	"} />
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="flex flex-col items-start">
                                                    <img className={index <= bookingStatus.indexOf(booking_status) ? " w-9 h-9" : " w-9 h-9 mix-blend-luminosity "} alt="icon 1" src={ImgOne.src} />
                                                    <p className="font-[400] text-sm text-center">{item}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>}
        </>
    )
}

export default TrackTimeline;