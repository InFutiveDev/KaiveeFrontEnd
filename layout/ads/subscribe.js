import { useState } from "react";
import { useDispatch } from "react-redux";
import { POST_SUBSCRIBER } from "redux/actions/auth";

const SubscribeAds = ({ data }) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(POST_SUBSCRIBER({ subsriber_email: email })).then((res) => {
      console.log("ress-->>>>>", res);
      if (res?.success) {
        setEmail("");
      }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="py-7 mt-6 flex justify-center items-center flex-col bg-[#F7F7FB] rounded-lg container text-center mx-auto">
        <h2 className="font-[400] mb-3 sm:text-2xl text-2xl text-gray-900">
          SUBSCRIBE
        </h2>
        <p className="lg:ml-[42px]  text-[#585981] lg:w-10/12 text-[20px] font-[400] font-source-pro">
          Stay Up To Date With Our Latest News & Never Miss Out Our New Offers!
        </p>
        <div className=" lg:w-3/4 flex   sm:flex-nowrap flex-col mt-4  gap-2 justify-start sm:items-center items-start space-x-2">
          <input
            type="email"
            className="form-control new_input_add"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <button
            // type="button"
            className="min-w-[170px] w-full h-full py-2  !m-0 rounded-md bg-[#7bb44ceb] "
            disabled={email ? false : true}
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default SubscribeAds;
