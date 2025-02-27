import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { DropdownItem, DropdownMenu, UncontrolledDropdown } from "reactstrap";

const FacilitiesMobile = ({
  categories,
  isXS,
  setFacilitiesOpen,
  facilitiesOpen,
  closeMenu,
}) => {
  const router = useRouter();
  const [modifyCategfories, setModifyCategfories] = useState([]);
  const [selected, setSelected] = useState("");

  const toggle = () => {
    setFacilitiesOpen(!facilitiesOpen);
    if (!facilitiesOpen) {
      setSelected(null);
    }
  };

  useEffect(() => {
    const filtercategories = categories.map((item) => ({
      ...item,
      child: categories.filter((ele) => item?._id === ele?.perent_category_name),
    }));

    const newFilter = filtercategories.filter(
      (ele) => ele?.perent_category_name == null
    );

    if (newFilter) {
      setModifyCategfories(newFilter);
    }
  }, [categories]); // ✅ Added 'categories' as a dependency

  return (
    <UncontrolledDropdown className="hover-menu">
      <div
        className={`flex justify-between items-start sm:px-0 p-[15px] h-[55px] ${
          facilitiesOpen ? "bg-[#D419580D]" : ""
        } `}
      >
        <p className="cursor-pointer font-[400] !text-[16px] menuText" onClick={toggle}>
          Facilities
        </p>
        <div className="block sm:hidden cursor-pointer">
          {!facilitiesOpen ? (
            <span className="text-[20px]" onClick={toggle}>+</span>
          ) : (
            <span className="text-[20px]" onClick={toggle}>-</span>
          )}
        </div>
      </div>

      <div className="pl-[28px] pt-[2px]">
        <DropdownMenu
          className={`!static ${
            !isXS ? "show-menu" : "!block"
          } m-0 transition-all duration-1000 transform ease-in-out ${
            facilitiesOpen ? "!h-auto" : isXS ? "overflow-hidden !h-0 !p-0 !border-none" : ""
          }`}
        >
          {modifyCategfories.map((category) => (
            <div key={category._id}> {/* ✅ Added unique key */}
              <div className="flex justify-between items-start">
                <Link
                  prefetch
                  onClick={closeMenu}
                  href={`/facilities/${category.category_url}`}
                  className={`transition-all align-middle menuText ${
                    router?.query?.slug == category.category_url && "!text-[#D41958] !font-medium"
                  }`}
                >
                  <DropdownItem className="transition-all hover:bg-[#D41958] text-sm hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                    {category?.category_name}
                  </DropdownItem>
                </Link>

                {category?.child?.length !== 0 && (
                  <div className="block sm:hidden cursor-pointer pr-[20px]">
                    {selected !== category?.category_url ? (
                      <span className="text-[20px]" onClick={() => setSelected(category?.category_url)}>+</span>
                    ) : (
                      <span className="text-[20px]" onClick={() => setSelected(null)}>-</span>
                    )}
                  </div>
                )}
              </div>

              {category?.child?.length ? (
                <div className="px-[20px]">
                  <DropdownMenu
                    className={`!static ${
                      !isXS ? "show-menu" : "!block"
                    } m-0 transition-all duration-1000 transform ease-in-out ${
                      selected == category?.category_url
                        ? "!h-auto"
                        : isXS
                        ? "overflow-hidden !h-0 !p-0 !border-none"
                        : ""
                    }`}
                  >
                    {category?.child.map((item) => (
                      <div key={item._id} className="flex justify-between items-start"> {/* ✅ Used item._id as key */}
                        <Link
                          prefetch
                          href={`/facilities/${item.category_url}`}
                          className={`transition-all align-middle menuText ${
                            router?.query?.slug == item.category_url && "!text-[#D41958] !font-medium"
                          }`}
                          onClick={() => {
                            closeMenu();
                            toggle();
                            setSelected(null);
                          }}
                        >
                          <DropdownItem className="transition-all hover:bg-[#D41958] text-sm hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                            {item?.category_name}
                          </DropdownItem>
                        </Link>
                      </div>
                    ))}
                  </DropdownMenu>
                </div>
              ) : null}
            </div>
          ))}
        </DropdownMenu>
      </div>
    </UncontrolledDropdown>
  );
};

export default FacilitiesMobile;
