import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_LAB_DETAIL } from "redux/actions/lab";

const BookCard = ({ setSendData, sendData, handleSubmit }) => {
  const dateRef = useRef();
  const dispatch = useDispatch();
  const labdata = useSelector((state) => state?.lab?.data);

  useEffect(() => {
    dispatch(GET_ALL_LAB_DETAIL()).then((res) => {
      if (res?.data?.LabData) {
        setSendData({
          ...sendData,
          nearest_centre: res?.data?.LabData[0]?._id,
        });
      }
    });
  }, []);

  const timeSlots = [
    "07:00AM - 08:00AM",
    "08:00AM - 09:00AM",
    "09:00AM - 10:00AM",
    "10:00AM - 11:00AM",
    "11:00AM - 12:00PM",
    "12:00PM - 01:00PM",
    "01:00PM - 02:00PM",
    "02:00PM - 03:00PM",
    "03:00PM - 04:00PM",
    "04:00PM - 05:00PM",
    "05:00PM - 06:00PM",
    "06:00PM - 07:00PM",
    "07:00PM - 08:00PM",
    "08:00PM - 09:00PM",
    "09:00PM - 10:00PM",
    "10:00PM - 11:00PM",
  ];

  // Function to handle input change and enforce character limit
  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value.length <= 120) {
      setSendData({ ...sendData, message_box: value });
    }
  };

  return (
    <div className="pt-2 sm:text-pt-2 lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left md:mb-0">
      <div className="shadow-md rounded-xl border bg-white border-[#E4E4E7] p-3">
        {/* Message Box */}
        <div className="form-group w-full">
          <label htmlFor="message_box" className="text-lg">
            Message Box
          </label>
          <div className="mt-[6px]">
            <textarea
              name="message_box"
              rows="3"
              placeholder="Enter your message(Max 120 characters)"
              value={sendData?.message_box || ""}
              onChange={handleInputChange}
              className="border shadow-md text-xl sm:text-lg rounded-md sm:rounded-2xl w-full p-2 focus:outline-none resize-none"
              maxLength="120"
            />
          </div>
        </div>
        {/* Nearest Center */}
        <div className="form-group w-full">
          <label htmlFor="nearest_centre" className="text-lg">
            Nearest Center
          </label>
          <div className="mt-[6px]">
            <select
              name="nearest_centre"
              onChange={(e) =>
                setSendData({ ...sendData, nearest_centre: e?.target.value })
              }
              value={sendData?.nearest_centre}
              className="border shadow-md text-xl sm:text-lg rounded-md sm:rounded-2xl w-full p-0.5 sm:p-3 focus:outline-none"
            >
              <option value="">Select Branch</option>
              {labdata?.data?.LabData?.map((it) => (
                <option key={it?._id} value={it?._id}>
                  {it?.branch_Name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Appointment Date */}
        <div className="form-group w-full">
          <label htmlFor="appointment_date" className="text-lg sm:text-lg">
            Appointment Date
          </label>
          <div className="mt-[6px]">
            <input
              type="text"
              name="appointment_date"
              placeholder="DD-MM-YYYY"
              ref={dateRef}
              min={new Date().toISOString().split("T")[0]}
              onFocus={() => {
                dateRef.current.type = "date";
              }}
              onBlur={() => {
                dateRef.current.type = "text";
              }}
              onChange={(e) =>
                setSendData({ ...sendData, appointment_date: e?.target.value })
              }
              className="input-date-placeholder border shadow-md w-full p-0.5 sm:p-3 rounded-md sm:rounded-2xl focus:outline-none"
            />
          </div>
        </div>

        {/* Time Dropdown */}
        <div className="form-group w-full">
          <label htmlFor="time" className="text-lg sm:text-lg">
            Time
          </label>
          <div className="mt-[6px]">
            <select
              name="time"
              onChange={(e) =>
                setSendData({ ...sendData, time: e?.target.value })
              }
              value={sendData?.time}
              size={5} // Show 5 visible options, with the rest scrollable
              className="border shadow-md text-xl sm:text-lg rounded-md sm:rounded-2xl w-full p-0.5 sm:p-3 focus:outline-none overflow-y-auto"
            >
              <option value="">Select Time Slot</option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            onClick={handleSubmit}
            className="bg-orange text-white rounded w-full py-[8px] text-xs font-[400]"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
