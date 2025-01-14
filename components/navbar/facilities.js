import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Facilities = ({ categories, closeMenu }) => {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const [modifyCategfories, setModifyCategfories] = useState([]);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const toggle = () => setFacilitiesOpen(!facilitiesOpen);
  useEffect(() => {
    // const categoriesCopy = [...categories];
    const filtercategories = categories.map((item) => {
      return {
        ...item,
        child: categories.filter((ele) => {
          return item?._id === ele?.perent_category_name;
        }),
      };
    });
    const newFilter = filtercategories.filter(
      (ele) => ele?.perent_category_name == null
    );
    if (newFilter) {
      setModifyCategfories(newFilter);
    }
  }, []);
  // console.log("router", router?.query?.slug);
  return (
    <div className="group relative ">
      <div className="flex justify-between items-start sm:p-0 p-[15px] ">
        <p className="cursor-pointer font-[400] menuText !text-[16px]">
          Facilities
        </p>
        <div className="block sm:hidden cursor-pointer">
          {!facilitiesOpen ? (
            <span className="text-[20px]" onClick={toggle}>
              {" "}
              +
            </span>
          ) : (
            <span className="text-[20px]" onClick={toggle}>
              -
            </span>
          )}
        </div>
      </div>
      <div className="transition-all z-50 mt-1 min-h-[1.8rem] py-1 px-2 left-0 max-w-min absolute top-3 text-xs text-secondary hidden group-hover:block">
        <svg
          className="absolute rotate-180 text-orange h-3 left-6 mr-3 -top-2"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          space="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
        <div className="relative flex justify-start items-start">
          <div
            // style={{ direction: "rtl" }}
            className="h-60  overflow-y-scroll  min-w-[420px]  parent-menu [::-webkit-scrollbar]:!w-0  [::-webkit-scrollbar]:!h-0  w-full "
          >
            <div className=" shadow-xl rounded bg-white w-[200px] min-w-[200px] border flex flex-col ">
              {modifyCategfories?.map((category) => {
                // if (category?.perent_category_name == null) {
                return (
                  <div
                    key={category._id}
                    // href={category?.category_menu_active ?`/facilities/${category.category_url}`:"/facilities"}

                    className="relative facilities-menu-parent  transition-all"
                    // onMouseOver={() => {
                    //   setSelected(category._id);
                    // }}
                  >
                    <div
                      className={`p-2 relative transition-all cursor-pointer hover:bg-orange  text-[14px] text-gray-700 font-[500] text-start hover:text-gray-700 focus:text-gray-700 hover:font-semibold ${
                        router?.query?.slug === category.category_url
                          ? "text-orange"
                          : ""
                      }`}
                      onClick={() => {
                        if (category?.category_menu_active) {
                          closeMenu();
                          // setSelected(category._id);
                          router.push(`/facilities/${category.category_url}`);
                        }
                      }}
                    >
                      {category?.category_name}
                    </div>
                    {category?.child?.length ? (
                      <ul className="facilities-menu-child top-0  shadow-xl  border rounded bg-white list-none left-[200px] min-w-[200px] max-h-[200px] overflow-y-scroll absolute z-40">
                        {category?.child?.map((item, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              if (item?.category_menu_active) {
                                closeMenu();
                                router.push(`/facilities/${item.category_url}`);
                              }
                            }}
                            className={`${
                              router?.query?.slug === item.category_url
                                ? "text-orange"
                                : ""
                            } p-2 !m-0 relative transition-all cursor-pointer hover:bg-orange !text-[14px] !font-[500] text-start text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold `}
                          >
                            {/* {item.category_url} */}
                            {item.category_name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                );
                // }
              })}
            </div>
          </div>
          {/* {categories?.filter((c) => c?.perent_category_name === selected)
            ?.length > 0 && (
            <div className=" bg-gray-50 border rounded shadow-xl min-w-[200px]  ">
              {categories
                ?.filter((c) => c?.perent_category_name === selected)
                ?.map((category) => {
                  return (
                    <div
                      key={category._id}
                      onClick={() => {
                        if (category?.category_menu_active) {
                          router.push(`/facilities/${category.category_url}`);
                        }
                      }}
                    >
                      <div className="transition-all hover:bg-gray-100 text-[15px] font-[300] text-start p-1 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                        {category.category_name}
                      </div>
                    </div>
                  );
                })}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
