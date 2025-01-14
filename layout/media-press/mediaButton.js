import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GET_ALL_PRINT_MEDIA_BUTTON } from "redux/actions/homepage";

const MediaButton = ({ id }) => {
  const dispatch = useDispatch();
  const [dataButton, setDataButton] = useState([]);

  const fetchButton = async () => {
    console.log("Fetching data for ID:", id);
    const res = await dispatch(GET_ALL_PRINT_MEDIA_BUTTON(id));
    console.log("API Response:", res);

    if (res?.success) {
      setDataButton(res?.data);
    } else {
      setDataButton([]);
    }
  };

  const handleLink = (item) => {
    if (item?.link) {
      window.open(item?.link, "_blank");
    }
  };

  useEffect(() => {
    setDataButton([]); // Clear previous data when ID changes
    if (id) {
      fetchButton();
    }
  }, [id]); // Add `id` as a dependency

  return (
    <div className="mt-2">
      {dataButton?.map((item) => (
        <button
          onClick={() => handleLink(item)}
          key={item?.id || item?.title} // Use a unique key
          className="bg-[#EBF4FF] rounded-[23px] px-4 py-2 mr-[5px] mb-[5px]"
        >
          {item?.title}
        </button>
      ))}
    </div>
  );
};

export default MediaButton;
