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
  return (
    <UncontrolledDropdown className="hover-menu">
      <div
        className={`flex justify-between items-start sm:px-0 p-[15px] h-[55px] ${
          facilitiesOpen ? "bg-[#fcc42c]" : ""
        } `}
      >
        <p
          className="cursor-pointer font-[400]  !text-[16px] menuText"
          onClick={toggle}
        >
          Facilities
        </p>
        <div className="block sm:hidden cursor-pointer">
          {!facilitiesOpen ? (
            <span className="text-[20px]" onClick={toggle}>
              +
            </span>
          ) : (
            <span className="text-[20px]" onClick={toggle}>
              -
            </span>
          )}
        </div>
      </div>
      <div className="pl-[28px] pt-[2px]">
        <DropdownMenu
          className={`!static ${
            !isXS ? "show-menu" : "!block"
          }  m-0 transition-all duration-1000 transform ease-in-out  ${
            facilitiesOpen
              ? " !h-auto	"
              : isXS
              ? "overflow-hidden  !h-0  !p-0 !border-none"
              : ""
          } `}
        >
          {modifyCategfories.map((category) => (
            <div>
              <div className="flex justify-between items-start">
                <Link
                  key={category._id}
                  prefetch
                  onClick={closeMenu}
                  href={`/facilities/${category.category_url}`}
                  className={`transition-all align-middle menuText  ${
                    router?.query?.slug == `${category.category_url}` &&
                    "!text-orange !font-medium"
                  }`}
                >
                  <DropdownItem className="transition-all   hover:bg-orange text-sm  hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                    {category?.category_name}
                  </DropdownItem>
                </Link>
                {category?.child?.length !== 0 && (
                  <div className="block sm:hidden cursor-pointer pr-[20px]">
                    {selected !== category?.category_url ? (
                      <span
                        className="text-[20px]"
                        onClick={() => setSelected(category?.category_url)}
                      >
                        +
                      </span>
                    ) : (
                      <span
                        className="text-[20px]"
                        onClick={() => setSelected(null)}
                      >
                        -
                      </span>
                    )}
                  </div>
                )}
              </div>
              {category?.child?.length ? (
                <div className="px-[20px]">
                  <DropdownMenu
                    className={`!static ${
                      !isXS ? "show-menu" : "!block"
                    }  m-0 transition-all duration-1000 transform ease-in-out  ${
                      selected == category?.category_url
                        ? " !h-auto	"
                        : isXS
                        ? "overflow-hidden  !h-0  !p-0 !border-none"
                        : ""
                    } `}
                  >
                    {category?.child.map((item, index) => (
                      <div
                        className="flex justify-between items-start"
                        key={index}
                      >
                        <Link
                          key={item._id}
                          prefetch
                          href={`/facilities/${item.category_url}`}
                          className={`transition-all align-middle menuText  ${
                            router?.query?.slug == `${item.category_url}` &&
                            "!text-orange !font-medium"
                          }`}
                          onClick={() => {
                            closeMenu();
                            toggle();
                            setSelected(null);
                          }}
                        >
                          <DropdownItem className="transition-all   hover:bg-orange text-sm  hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                            {item?.category_name}
                          </DropdownItem>
                        </Link>
                      </div>
                    ))}
                  </DropdownMenu>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </DropdownMenu>
      </div>
    </UncontrolledDropdown>
  );
};

export default FacilitiesMobile;
