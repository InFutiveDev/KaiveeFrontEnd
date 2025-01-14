import React, { useState } from "react";

const OtpComponents = () => {
  const [otp, setOtp] = useState();

  let tabChange = function (val) {
    let ele = document.querySelectorAll(".tab-class");
    if (ele[val - 1].value != "") {
      ele[val]?.focus();
    } else if (ele[val - 1].value == "") {
      ele[val - 2]?.focus();
    }
    let valid = Array.from(ele)?.filter((item) => item?.value === "");
    if (valid?.length === 0) {
      let otp = Array.from(ele)?.map((item) => item?.value);
      setOtp(otp?.join(""));
    } else {
      setOtp(null);
    }
  };
  return (
    <div className="flex gap-2 flex-row items-center">
      <div className="xl:w-[72px] w-[40px] lg:h-12 h-8 ">
        <input
          className="tab-class xl:w-[72px] w-[40px] h-full flex flex-col items-center justify-center text-center outline-none border-b border-orange text-lg bg-white "
          type="text"
          name=""
          id=""
          maxLength={1}
          onKeyUp={(e) => tabChange(1)}
        />
      </div>
      <div className="xl:w-[72px] w-[40px] lg:h-12 h-8 ">
        <input
          className="tab-class xl:w-[72px] w-[40px] h-full flex flex-col items-center justify-center text-center outline-none border-b border-orange text-lg bg-white"
          type="text"
          name=""
          id=""
          maxLength={1}
          onKeyUp={(e) => tabChange(2)}
        />
      </div>
      <div className="xl:w-[72px] w-[40px] lg:h-12 h-8 ">
        <input
          className="tab-class xl:w-[72px] w-[40px] h-full flex flex-col items-center justify-center text-center outline-none border-b border-orange text-lg bg-white"
          type="text"
          name=""
          id=""
          maxLength={1}
          onKeyUp={(e) => tabChange(3)}
        />
      </div>
      <div className="xl:w-[72px] w-[40px] lg:h-12 h-8 ">
        <input
          className="tab-class xl:w-[72px] w-[40px] h-full flex flex-col items-center justify-center text-center outline-none border-b border-orange text-lg bg-white"
          type="text"
          name=""
          id=""
          maxLength={1}
          onKeyUp={(e) => tabChange(4)}
        />
      </div>
      <div className="xl:w-[72px] w-[40px] lg:h-12 h-8 ">
        <input
          className="tab-class xl:w-[72px] w-[40px] h-full flex flex-col items-center justify-center text-center outline-none border-b border-orange text-lg bg-white"
          type="text"
          name=""
          id=""
          maxLength={1}
          onKeyUp={(e) => tabChange(5)}
        />
      </div>
      <div className="xl:w-[72px] w-[40px] lg:h-12 h-8 ">
        <input
          className="tab-class xl:w-[72px] w-[40px] h-full flex flex-col items-center justify-center text-center outline-none border-b border-orange text-lg bg-white"
          type="text"
          name=""
          id=""
          maxLength={1}
          onKeyUp={(e) => tabChange(6)}
        />
      </div>
    </div>
  );
};

export default OtpComponents;
