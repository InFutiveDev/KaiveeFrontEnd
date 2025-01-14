import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "components/breadcrumb";
import { GET_ALL_PRINT_MEDIA } from "redux/actions/homepage";
import MediaButton from "./mediaButton";

const breadcrumblist = [{ name: "Home", path: "/" }];

const renderHTML = (htmlString) => {
  return { __html: htmlString };
};

const MediaSection = () => {
  const dispatch = useDispatch();
  const getPrintMedia = useSelector((state) => state?.homepage?.getPrintMedia);

  // State to manage pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the total number of pages
  const totalPages = Math.ceil(getPrintMedia?.length / itemsPerPage);

  // Get the current data to display based on the page
  const currentData = getPrintMedia?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    dispatch(GET_ALL_PRINT_MEDIA());
  }, [dispatch]);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Helper function to generate pagination numbers with ellipses
  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 7; // Adjust this value to control the number of visible pages

    if (totalPages <= maxVisiblePages) {
      // If the total number of pages is less than or equal to maxVisiblePages, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show the first page
      pages.push(1);

      // Show pages around the current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        // If the current page is near the start, show the first few pages
        startPage = 2;
        endPage = 4;
      } else if (currentPage >= totalPages - 2) {
        // If the current page is near the end, show the last few pages
        startPage = totalPages - 3;
        endPage = totalPages - 1;
      }

      // Add ellipses before startPage if needed
      if (startPage > 2) {
        pages.push("...");
      }

      // Add visible pages in between
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipses after endPage if needed
      if (endPage < totalPages - 1) {
        pages.push("...");
      }

      // Always show the last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="media-sect-box container">
      <div className="media-sect-frame-wrapper">
        <div className="media-sect-frame">
          <div className="media-sect-div">
            <BreadCrumb
              active="Print Media Coverage"
              breadcrumblist={breadcrumblist}
            />
          </div>
          {/* Display the current page data */}
          {currentData?.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E4E4E7] p-9 rounded-[24px] my-4"
            >
              <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center gap-14 ">
                <div>
                  <img
                    className="lg:w-full md:w-[70%] sm:w-1/2 max-h-60 h-full"
                    src={item?.img}
                    alt="news & media "
                  />
                </div>
                <div>
                  <p className="text-[24px] font-semibold text-black">
                    {item?.title}
                  </p>
                  <span
                    className="mt-[5px] text-[16px] text-[#71717A]"
                    dangerouslySetInnerHTML={renderHTML(item?.description)}
                  />
                  <MediaButton id={item?.id} />
                </div>
              </div>
            </div>
          ))}

          {/* Pagination Controls */}
          <div className="pagination-controls flex justify-center">
            <button
              className="px-4 py-2 mr-2 text-white rounded"
              style={{ backgroundColor: "#FFD176" }}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {/* Render pagination numbers */}
            {renderPagination().map((page, index) =>
              typeof page === "number" ? (
                <button
                  key={index}
                  className={`px-4 py-2 mx-1 rounded ${
                    currentPage === page ? "text-white" : "text-black"
                  }`}
                  style={{
                    backgroundColor:
                      currentPage === page ? "#FFD176" : "#E4E4E7",
                  }}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ) : (
                <span key={index} className="px-2">
                  ...
                </span>
              )
            )}

            <button
              className="px-4 py-2 ml-2 text-white rounded"
              style={{ backgroundColor: "#FFD176" }}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
