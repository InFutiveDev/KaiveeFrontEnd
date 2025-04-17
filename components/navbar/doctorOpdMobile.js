import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { DropdownItem, DropdownMenu, UncontrolledDropdown } from "reactstrap";

const DoctorOpdMobile = ({
  isXS,
  setDoctorOpdOpen,
  doctorOpdOpen,
  closeMenu,
}) => {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  const toggle = () => {
    setDoctorOpdOpen(!doctorOpdOpen);
    if (!doctorOpdOpen) {
      setSelected(null);
    }
  };

  const doctorCategories = [
    {
      id: 1,
      name: "General Medicine & Specialties",
      url: "general-medicine",
      subCategories: [
        { id: 11, name: "General Physician", url: "general-physician" },
        { id: 12, name: "Pediatrician", url: "pediatrician" },
        { id: 13, name: "Geriatrician", url: "geriatrician" },
      ],
    },
    {
      id: 2,
      name: "Surgical Specialties",
      url: "surgical-specialties",
      subCategories: [
        { id: 21, name: "General Surgeon", url: "general-surgeon" },
        { id: 22, name: "Orthopedic Surgeon", url: "orthopedic-surgeon" },
        { id: 23, name: "Neurosurgeon", url: "neurosurgeon" },
        { id: 24, name: "Cardiac Surgeon", url: "cardiac-surgeon" },
        { id: 25, name: "Plastic & Cosmetic Surgeon", url: "plastic-cosmetic-surgeon" },
        { id: 26, name: "ENT Surgeon", url: "ent-surgeon" },
      ],
    },
    {
      id: 3,
      name: "Super Specialties",
      url: "super-specialties",
      subCategories: [
        { id: 31, name: "Cardiologist", url: "cardiologist" },
        { id: 32, name: "Neurologist", url: "neurologist" },
        { id: 33, name: "Nephrologist", url: "nephrologist" },
        { id: 34, name: "Endocrinologist", url: "endocrinologist" },
        { id: 35, name: "Hepatologist", url: "hepatologist" },
        { id: 36, name: "Rheumatologist", url: "rheumatologist" },
      ],
    },
    {
      id: 4,
      name: "Other Medical Specialties",
      url: "other-medical-specialties",
      subCategories: [
        { id: 41, name: "Dermatologist", url: "dermatologist" },
        { id: 42, name: "Psychiatrist", url: "psychiatrist" },
        { id: 43, name: "Pulmonologist", url: "pulmonologist" },
        { id: 44, name: "Gastroenterologist", url: "gastroenterologist" },
        { id: 45, name: "Hematologist", url: "hematologist" },
      ],
    },
    {
      id: 5,
      name: "Women & Child Care",
      url: "women-child-care",
      subCategories: [
        { id: 51, name: "Gynecologist", url: "gynecologist" },
        { id: 52, name: "Obstetrician", url: "obstetrician" },
        { id: 53, name: "Neonatologist", url: "neonatologist" },
      ],
    },
    {
      id: 6,
      name: "Eye & Dental Care",
      url: "eye-dental-care",
      subCategories: [
        { id: 61, name: "Ophthalmologist", url: "ophthalmologist" },
        { id: 62, name: "Dentist", url: "dentist" },
        { id: 63, name: "Oral & Maxillofacial Surgeon", url: "oral-maxillofacial-surgeon" },
      ],
    },
    {
      id: 7,
      name: "Alternative Medicine & Rehabilitation",
      url: "alternative-medicine",
      subCategories: [
        { id: 71, name: "Physiotherapist", url: "physiotherapist" },
        { id: 72, name: "Homeopathy Doctor", url: "homeopathy-doctor" },
        { id: 73, name: "Ayurveda Doctor", url: "ayurveda-doctor" },
      ],
    },
  ];

  return (
    <UncontrolledDropdown className="hover-menu">
      <div
        className={`flex justify-between items-start sm:px-0 p-[15px] h-[55px] ${
          doctorOpdOpen ? "bg-[#D419580D]" : ""
        } `}
      >
        <p className="cursor-pointer font-[400] !text-[16px] menuText" onClick={toggle}>
          Doctor&apos;s OPD
        </p>
        <div className="block sm:hidden cursor-pointer">
          {!doctorOpdOpen ? (
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
            doctorOpdOpen ? "!h-auto" : isXS ? "overflow-hidden !h-0 !p-0 !border-none" : ""
          }`}
        >
          {doctorCategories.map((category) => (
            <div key={category.id}>
              <div className="flex justify-between items-start">
                <Link
                  prefetch
                  onClick={closeMenu}
                  href={`/doctor-opd/${category.url}`}
                  className={`transition-all align-middle menuText ${
                    router?.query?.slug == category.url && "!text-[#D41958] !font-medium"
                  }`}
                >
                  <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                    {category.name}
                  </DropdownItem>
                </Link>

                {category.subCategories?.length > 0 && (
                  <div className="block sm:hidden cursor-pointer pr-[20px]">
                    {selected !== category.url ? (
                      <span className="text-[20px]" onClick={() => setSelected(category.url)}>+</span>
                    ) : (
                      <span className="text-[20px]" onClick={() => setSelected(null)}>-</span>
                    )}
                  </div>
                )}
              </div>

              {category.subCategories?.length > 0 && (
                <div className="px-[20px]">
                  <DropdownMenu
                    className={`!static ${
                      !isXS ? "show-menu" : "!block"
                    } m-0 transition-all duration-1000 transform ease-in-out ${
                      selected == category.url
                        ? "!h-auto"
                        : isXS
                        ? "overflow-hidden !h-0 !p-0 !border-none"
                        : ""
                    }`}
                  >
                    {category.subCategories.map((subCategory) => (
                      <div key={subCategory.id} className="flex justify-between items-start">
                        <Link
                          prefetch
                          href={`/doctor-opd/${category.url}/${subCategory.url}`}
                          className={`transition-all align-middle menuText ${
                            router?.query?.slug == subCategory.url && "!text-[#D41958] !font-medium"
                          }`}
                          onClick={() => {
                            closeMenu();
                            toggle();
                            setSelected(null);
                          }}
                        >
                          <DropdownItem className="transition-all hover:bg-[#D419580D] text-sm text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:font-semibold">
                            {subCategory.name}
                          </DropdownItem>
                        </Link>
                      </div>
                    ))}
                  </DropdownMenu>
                </div>
              )}
            </div>
          ))}
        </DropdownMenu>
      </div>
    </UncontrolledDropdown>
  );
};

export default DoctorOpdMobile;