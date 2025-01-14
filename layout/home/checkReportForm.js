// import ImageVector from "assets/images/home/Report check 312_280.webp";
import Link from "next/link";

const CheckReportForm = () => {
  //
  return (
    <div className="view-report   from-[#fff] to-[#feecd2] shadow min-h-[280px] flex flex-col justify-between p-2 rounded-2xl items-center">
      <p className="text-[#fcb02c] pt-3 font-semibold">
        Click to view your Report
      </p>
      {/* <img src={ImageVector.src} className="h-[200px]" /> */}
      {/* <div className="view-re"></div> */}
      <Link
        target="_blank"
        href="/"
        className="text-white bg-[#FCC42C] hover:bg-[#fcb02c] p-1.5 rounded-lg font-[500] text-base"
      >
        Check Report
      </Link>
    </div>
  );
};

export default CheckReportForm;
