import React, { useEffect, useState } from "react";
import BiomedicalWasteBanner from "./BiomedicalWasteBanner";
import { useDispatch, useSelector } from "react-redux";
import { GET_BIO_WASTE } from "redux/actions/biowaste";
import ReactPaginate from "react-paginate";
import { ArrowLeft, ArrowRight } from "react-feather";

const data = [
  {
    centerName: "Tilak Nagar",
    redBag: "64 Kg",
    yellowBag: "62 Kg",
    sharpBox: "24 Kg",
    blueCardboardBox: "2 Kg",
  },
  {
    centerName: "Vikas Puri",
    redBag: "8 Kg 900 gm",
    yellowBag: "6 Kg 300 gm",
    sharpBox: "2 Kg 100 gm",
    blueCardboardBox: "500 gm",
  },
  {
    centerName: "Vishnu Garden",
    redBag: "955 gm",
    yellowBag: "385 gm",
    sharpBox: "500 gm",
    blueCardboardBox: "Nil",
  },
  {
    centerName: "Naraina Center",
    redBag: "3 Kg 900 gm",
    yellowBag: "1 Kg 510 gm",
    sharpBox: "2 Kg 690 gm",
    blueCardboardBox: "Nil",
  },
];

const BiomedicalWasteLayout = () => {
  var thisYear = new Date().getFullYear();
  var thisMonth = new Date().toLocaleString("default", { month: "long" });
  const [month, setMonth] = useState(thisMonth || "");
  const [year, setYear] = useState(thisYear || "");
  const dispatch = useDispatch();
  const { bioWaste } = useSelector((state) => state.biowaste);
  console.log("bioWaste", bioWaste);
  const count = Number(Math.ceil(bioWaste?.data?.pagination?.total / 12));

  const [currentPage, setCurrentPage] = useState(1);
  const monthsData = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let yearData = [];
  for (var i = 0; i <= 2; i++) {
    var years = thisYear - i;
    yearData.push(years);
  }

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleFilter = () => {
    dispatch(GET_BIO_WASTE(1, 10, month, year));
    setCurrentPage(1);
  };
  const handlePagination = (page) => {
    dispatch(GET_BIO_WASTE(page.selected + 1, 10, month, year));
    setCurrentPage(page.selected + 1);
  };
  useEffect(() => {
    dispatch(GET_BIO_WASTE(1, 10, thisMonth, thisYear));
  }, []);

  return (
    <>
      <section>
        <div>
          <BiomedicalWasteBanner />
        </div>
      </section>
      <div className="w-full bg-pink-50 py-4">
  <h1 className="text-2xl  text-black font-source-pro text-center">
    Select Month and Year to View Biomedical Waste Data
  </h1>

  <div className="mt-6 bg-white shadow-lg rounded-xl p-6 grid lg:grid-cols-2 gap-6">
    {/* Month Selection */}
    <div className="flex flex-col">
      <label className="font-medium text-lg mb-2">Month</label>
      <select
        onChange={handleMonth}
        value={month}
        className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#D41958] transition-all"
      >
        <option value="">Select Month</option>
        {monthsData.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>

    {/* Year Selection */}
    <div className="flex flex-col">
      <label className="font-medium text-lg mb-2">Year</label>
      <select
        onChange={handleYear}
        value={year}
        className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#D41958] transition-all"
      >
        <option value="">Select Year</option>
        {yearData.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  </div>

  {/* Submit Button in Second Row */}
  <div className="mt-6 flex justify-center">
    <button
      onClick={handleFilter}
      className="bg-[#D41958] hover:bg-[#b31548] text-white rounded-lg px-6 py-3 font-medium transition-all"
    >
      Submit
    </button>
  </div>
</div>

      <div className="bg-white">
        <div className="container py-[70px]">
          <h2 className="text-[24px] text-black font-source-pro font-semibold ">
            Monthly Breakdown of Biomedical Waste Data of All Our Centers for
            the Month of {month} {year}
          </h2>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[42px]">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-black uppercase bg-[#8DBD4D]">
                <tr className="Aign-text py-2 TableHeading1">
                  <th className="lg:px-6 lg:py-3 px-2 py-2 whitespace-nowrap font-normal">
                    SR.No
                  </th>
                  <th className="lg:px-6 lg:py-3 px-2 py-2 whitespace-nowrap font-normal">
                    Center
                  </th>
                  <th className="lg:px-6 lg:py-3 px-2 py-2 whitespace-nowrap font-normal">
                    Red Bag
                  </th>
                  <th className="lg:px-6 lg:py-3 px-2 py-2 whitespace-nowrap font-normal">
                    Yellow Bag
                  </th>
                  <th className="lg:px-6 lg:py-3 px-2 py-2 whitespace-nowrap font-normal">
                    Sharp Box
                  </th>
                  <th className="lg:px-6 lg:py-3 px-2 py-2 whitespace-nowrap font-normal">
                    Blue Cardboard Box
                  </th>
                </tr>
              </thead>
              {bioWaste?.data?.wasteData?.length ? (
                <tbody className="Aign-text">
                  {bioWaste?.data?.wasteData?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th className="lg:px-6 lg:py-3 px-2 py-1 text-[14px] font-normal text-black tablerowClass whitespace-nowrap">
                          {index + 1}
                        </th>
                        <td className="lg:px-6 lg:py-3 px-2 py-1 text-[14px] font-normal whitespace-nowrap">
                          {item?.centre_name}
                        </td>
                        <td className="lg:px-6 lg:py-3 px-2 py-1 text-[14px] font-normal whitespace-nowrap">
                          {item?.red_bag}
                        </td>
                        <td className="lg:px-6 lg:py-3 px-2 py-1 text-[14px] font-normal whitespace-nowrap">
                          {item?.yellow_bag}
                        </td>
                        <td className="lg:px-6 lg:py-3 px-2 py-1 text-[14px] font-normal whitespace-nowrap">
                          {item?.sharp_box}
                        </td>
                        <td className="lg:px-6 lg:py-3 px-2 py-1 text-[14px] font-normal whitespace-nowrap">
                          {item?.blue_card_board_box}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : null}
            </table>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BiomedicalWasteLayout;
