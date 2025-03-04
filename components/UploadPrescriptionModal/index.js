import React, { useState } from "react";
import { Input, Modal } from "reactstrap";
import ImageOne from "assets/images/dashboard/precription.png";
import PDFImage from "assets/images/dashboard/PDFIcon.png";
import { DeleteSVG } from "assets/images/SvgImage";
import { useDispatch } from "react-redux";
import { POST_PRESCRIPTION } from "redux/actions/uploadPrescription";
import { CheckObjectValidation } from "utility/Utils";
import Image from "next/image";
import CancelIcon from "assets/images/login/cancel (2) 1.png";
import { toast } from "react-toastify";

const UploadPrescriptionModal = ({ open, setOpen }) => {
  const toggle = () => setOpen(!open);
  const dispatch = useDispatch();
  const [sendData, setSendData] = useState({
    patient_name: "",
    age: "",
    add_prescription: [],
    dob: "",
    gender: "Male",
  });
  const [errorKeyName, setErrorKeyName] = useState("");

  const [loading, setLoading] = useState(false);

  function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (errorKeyName === name) {
      setErrorKeyName("");
    }
    if (name == "dob") {
      if (value) {
        console.log("age---", calculateAge(value));
        setSendData({
          ...sendData,
          [name]: value,
          age: calculateAge(value),
        });
      }
    } else {
      setSendData({ ...sendData, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    let file = e?.target?.files[0];
    if (file) {
      const fileSize = file.size;
      const fileSizeMB = fileSize / 1024 ** 2;
      if (fileSizeMB > 5) {
        toast.error("Maximum allowed file size: 5MB");
      } else {
        setSendData({
          ...sendData,
          add_prescription: [...sendData?.add_prescription, file],
        });
      }
    }
  };
  function objectToFormData(obj) {
    const formData = new FormData();

    Object.entries(obj).forEach(([key, value]) => {
      // console.log("dfdfdfdfdfd", key, value);
      if (key === "add_prescription") {
        value.forEach((ele) => {
          formData.append(key, ele);
        });
      } else {
        formData.append(key, value);
      }
    });

    return formData;
  }
  const handleDelete = (index) => {
    const copyImage = [...sendData.add_prescription];
    copyImage.splice(index, 1);
    setSendData({ sendData, add_prescription: copyImage });
  };
  const handleSubmit = () => {
    const checkValidation = CheckObjectValidation(sendData, [
      "add_prescription",
      "dob",
    ]);
    setErrorKeyName(checkValidation.keyname);
    console.log("checkValidation.isvalid", checkValidation);
    if (checkValidation.isvalid) {
      setLoading(true);

      const fData = objectToFormData({ ...sendData });
      dispatch(POST_PRESCRIPTION(fData)).then((res) => {
        setLoading(false);
        if (res?.data?.status === 200) {
          toggle();
          setSendData({
            patient_name: "",
            age: "",
            add_prescription: [],
            dob: "",
            gender: "Male",
          });
        }
      });
    }
  };
  return (
    <Modal
      size="xl"
      centered
      isOpen={open}
      toggle={toggle}
      className="upload_Modal rounded-xl"
    >
      <div className="p-3 overflow-hidden ">
        <div
          className="absolute top-6 right-6 cursor-pointer"
          onClick={() => toggle()}
        >
          <Image src={CancelIcon} width={20} height={20} alt="cancel" />
        </div>
        <p className="my-2 text-xl font-semibold text-black font-[400]">
          Upload Prescription
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-[20px] shadow-sm bg-white rounded-xl border-2 flex flex-col gap-2">
            <div>
              <label htmlFor="" className="mb-0">
                Patient Name
              </label>
              <div className="mt-[6px]">
                <input
                  type="text"
                  id="patient_name"
                  name="patient_name"
                  onChange={handleChange}
                  value={sendData?.patient_name}
                  // required
                  className="form-group border shadow-none font-[300] rounded-md w-full p-1.5 placeholder:font-[300] focus:outline-none mb-0"
                  placeholder="Patient Name"
                />
                {errorKeyName === "patient_name" ? (
                  <span className="text-danger">Patient Name is Required</span>
                ) : null}
              </div>
            </div>
            <section className="grid gap-2 grid-cols-1 md:grid-cols-2">
              <div>
                <label htmlFor="organizationName" className="mb-0">
                  Date of Birth
                </label>
                <div className="mt-[6px]">
                  <input
                    type="date"
                    name="dob"
                    value={sendData?.dob}
                    max={new Date().toISOString().split("T")[0]}
                    onChange={handleChange}
                    className="form-group border shadow-none font-[300] rounded-md w-full p-1.5 placeholder:font-[300] focus:outline-none mb-0"
                  />
                </div>
                {errorKeyName === "dob" ? (
                  <span className="text-danger">Date of Birth is Required</span>
                ) : null}
              </div>
              <div className="pl-1">
                <label htmlFor="" className="mb-0">
                  Age
                </label>
                <div className="mt-[6px]">
                  <input
                    type="number"
                    id="age"
                    name="age"
                    onChange={handleChange}
                    value={sendData?.age}
                    readOnly
                    required
                    className="form-group border shadow-none font-[300] rounded-md w-full p-1.5 placeholder:font-[300] focus:outline-none mb-0"
                    placeholder="Enter Age"
                  />
                </div>
                {errorKeyName === "age" ? (
                  <span className="text-danger">Age is Required</span>
                ) : null}
              </div>
            </section>
            <div>
              <label htmlFor="" className="mb-0">
                Gender
              </label>
              <div className="mt-[6px]">
                <select
                  name="gender"
                  onChange={handleChange}
                  value={sendData?.gender || "Select"}
                  className="form-group border shadow-sm rounded-[10px] px-1 w-full py-[12px] focus:outline-none text-[16px]"
                >
                  <option value={"Select"} disabled>
                    Select Gender
                  </option>
                  <option value={"Male"}>Male</option>
                  <option value={"Female"}>Female</option>
                  <option value={"Other"}>Other</option>
                </select>
              </div>
              {errorKeyName === "gender" ? (
                <span className="text-danger">Gender is Required</span>
              ) : null}
            </div>
          </div>
          <div className="shadow-md bg-white p-[20px] rounded-xl border-2">
            <label htmlFor="">Add Prescription</label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Image src={ImageOne} className=" Prescription icon" alt="Prescription icon"  />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    .SVG, .PNG, .JPG , .WEBP
                  </p>
                </div>
                <input
                  onChange={handleImageChange}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 grid-cols-2  gap-2">
              {sendData?.add_prescription &&
                sendData?.add_prescription.map((item, index) => (
                  <div
                    key={index}
                    className=" mt-[20px] bg-[#F7F8F8] overflow-hidden rounded-[16px] h-[150px]"
                  >
                    <div className="relative h-full">
                      <Image
                        src={
                          item?.type.includes("pdf")
                            ? PDFImage.src
                            : URL.createObjectURL(item)
                        }
                        alt="add_prescription"
                        // height={"100%"}
                        width={150} // Add width
                        height={150} // Add height
                        className="h-full w-full object-cover"
                      />
                      {item?.type.includes("pdf") && (
                        <p className="line-clamp-2 text-lg">{item?.name}</p>
                      )}
                      <div
                        onClick={() => {
                          handleDelete(index);
                        }}
                        className="cursor-pointer absolute top-[10px] right-[10px]"
                      >
                        <DeleteSVG />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-[20px] bg-[#D41958] text-white rounded w-full py-[8px]"
            >
              {loading ? "Processing..." : "Submit"}
            </button>
          </div>
        </div>
        <div className="p-2 md:p-4">
          <p className="text-black font-semibold text-[20px] md:text-[25px] mb-[5px] pt-[20px]">
            PRESCRIPTION GUIDE
          </p>
          <p className="text-secondary text-[16px]">
            Our reports will be available online for a period of 7 days from the
            date given on your report collection slip. After that, you can
            collect the report from your nearest City Center Online reports
            cannot be accessed in following cases:
          </p>
          <ul className="list-disc text-[16px] flex flex-col gap-2 mt-[15px]">
            <li className="text-secondary">
              Ensure suggested tests are Cleary Visible in the image
            </li>
            <li className="text-secondary">
              Don’t crop out any part of the image
            </li>
            <li className="text-secondary">Avoid blurred image</li>
            <li className="text-secondary">Insurance clients</li>
            <li className="text-secondary">
              Supported files type: jpeg , jpg , png , pdf
            </li>
            <li className="text-secondary">Maximum allowed file size: 5MB</li>
          </ul>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </Modal>
  );
};

export default UploadPrescriptionModal;
