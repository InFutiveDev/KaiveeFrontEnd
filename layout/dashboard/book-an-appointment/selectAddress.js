import { Edit } from "react-feather";

const SelectAddress = ({
  data,
  handleAddress,
  address,
  setAddressBy,
  setAddressEditOpen,
}) => {
  return (
    <>
      <div className="p-3 border-t">
        <p className="text-lg font-semibold">Select Address</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1  gap-6">
          {data?.map((item, index) => (
            <div
              onClick={() => handleAddress(item?._id)}
              key={index}
              className={`cursor-pointer relative rounded-xl ${
                address == item?._id
                  ? "bg-[#D419580D] border-[1px] border-[#8abc59]"
                  : "bg-white border-[1px] border-[#E4E4E7]"
              } p-2`}
            >
              <p className="text-[#3F3F46] text-base font-semibold">
                City :-{item?.city}
              </p>
              <div className="my-[12px]">
                <span className="text-secondary text-base">
                  {item?.address1}
                </span>
              </div>
              <div className="flex justify-between gap-[12px]">
                <span className="text-secondary text-base">
                  Post Code :-{item?.postCode}
                </span>
              </div>
              <div
                onClick={() => {
                  setAddressEditOpen(true);
                  setAddressBy(item);
                }}
                className="cursor-pointer absolute top-2 right-3"
              >
                <Edit />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectAddress;
