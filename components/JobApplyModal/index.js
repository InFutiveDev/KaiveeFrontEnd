import React, { useState } from "react";
import { Input, Modal } from "reactstrap";
import Image from "next/image";
import CancelIcon from "assets/images/login/cancel (2) 1.png";
import { toast } from "react-toastify";
import axios from "axios";

const JobApplyModal = ({ open, setOpen, jobDetails }) => {
  const toggle = () => setOpen(!open);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [experiance, setExperiance] = useState("");
  const [CCompnay, setCCompany] = useState("");
  const [CSalary, setCSalary] = useState("");
  const [ESalary, setESalary] = useState("");
  const [linkedInUrl, setLinkedIn] = useState("");
  const [file, setFile] = useState();

  const uploadResune = async (e) => {
    // console.log("res")
    e.preventDefault();
    if (firstName.length < 2) {
      toast("Please enter first name", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    if (lastName.length < 2) {
      toast("Please enter last name", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    if (!validateEmail(email)) {
      toast("Invalid email format!", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    if (mobile.length !== 10) {
      toast("Mobile number must be 10 digits", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    if (state.length < 2) {
      toast("Enter state name", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    if (city.length < 2) {
      toast("Enter city name", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    if (experiance.length < 2) {
      toast("Select work  experiance", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    if (!CCompnay) {
      toast("Enter current Company", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    if (CSalary.length < 2) {
      toast("Enter current Salary", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    if (ESalary.length < 2) {
      toast("Enter expected Salary", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    if (!file) {
      toast("Please upload your latest resume", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    try {
      const formData = new FormData();
      formData.append("First_name", firstName);
      formData.append("Last_name", lastName);
      formData.append("Email", email);
      formData.append("Mobile", mobile);
      formData.append("State", state);
      formData.append("City", city);
      formData.append("Experince", experiance);
      formData.append("Current_company", CCompnay);
      formData.append("Current_salary", CSalary);
      formData.append("Expected_salary", ESalary);
      formData.append("linkedIn", linkedInUrl);
      formData.append("Cv_document", file);
      formData.append("job_applied", jobDetails?.job_title);

      axios
        .post("https://api.cityxrayclinic.com/v1/carrer-form/add", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          toggle();
          toast.success("Created Successfully");
          e.target.reset();
          setFirstName("");
          setLastName("");
          setEmail("");
          setMobile("");
          setState("");
          setCity("");
          setExperiance("");
          setCCompany("");
          setCSalary("");
          setESalary("");
          setLinkedIn("");
          setFile("");
        })
        .catch(() => {
          toast("Error uploading data", {
            progress: 0,
            progressStyle: { background: "#ff2424" },
          });
        });
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  const handleImageChange = (e) => {
    let eFile = e?.target?.files[0];
    if (eFile) {
      const fileSize = eFile.size;
      const fileSizeMB = fileSize / 1024 ** 2;
      if (fileSizeMB > 1) {
        toast.error("Maximum allowed file size: 1MB");
      } else {
        setFile(eFile);
      }
    }
  };

  return (
    <Modal
      size="md"
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
        <p className="my-2 text-xl  text-gray-700 font-[400]">Apply Job</p>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-3"> */}
        <div className="container">
          <form onSubmit={uploadResune}>
            <div className="JobFormMain">
              <div
                style={{
                  backgroundColor: "#f7f7fb",
                  borderRadius: 5,
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "#eee",
                  marginTop: 20,
                  overflow: "hidden",
                }}
              >
                <ul className="JopApplyForm">
                  <li>
                    <span>First Name*</span>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      placeholder="First Name"
                      required
                    />
                  </li>
                  <li>
                    <span>Last Name*</span>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      placeholder="Last Name"
                      required
                    />
                  </li>
                  <li>
                    <span>Email*</span>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Email"
                      required
                    />
                  </li>
                  <li>
                    <span>Mobile Number*</span>
                    <input
                      type="number"
                      value={mobile}
                      onChange={(e) => {
                        setMobile(e.target.value);
                      }}
                      placeholder="Mobile Number"
                      required
                    />
                  </li>
                  <li>
                    <span>State*</span>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      placeholder="Enter State"
                      required
                    />
                  </li>
                  <li>
                    <span>City*</span>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      placeholder="Enter City"
                      required
                    />
                  </li>
                  <li>
                    <span>Experience*</span>
                    <select
                      value={experiance}
                      onChange={(e) => {
                        setExperiance(e.target.value);
                      }}
                    >
                      <option>Select Experiance</option>
                      <option value="0-2 Year">0-2 Year</option>
                      <option value="2-4 Year">2-4 Year</option>
                      <option value="4-6 Year">4-6 Year</option>
                      <option value="6-8 Year">6-8 Year</option>
                      <option value="8-10 Year">8-10 Year</option>
                      <option value="10+ Year">10+ Year</option>
                    </select>
                  </li>
                  <li>
                    <span>Current Company*</span>
                    <input
                      type="text"
                      value={CCompnay}
                      onChange={(e) => {
                        setCCompany(e.target.value);
                      }}
                      placeholder="Current Company"
                      required
                    />
                  </li>
                  <li>
                    <span>Current Salary*</span>
                    <input
                      type="text"
                      value={CSalary}
                      onChange={(e) => {
                        setCSalary(e.target.value);
                      }}
                      placeholder="Current Salary"
                      required
                    />
                  </li>
                  <li>
                    <span>Expected Salary*</span>
                    <input
                      type="text"
                      value={ESalary}
                      onChange={(e) => {
                        setESalary(e.target.value);
                      }}
                      placeholder="Expected Salary"
                      required
                    />
                  </li>
                  <li>
                    <span>LinkedIn URL</span>
                    <input
                      type="text"
                      value={linkedInUrl}
                      onChange={(e) => {
                        setLinkedIn(e.target.value);
                      }}
                      placeholder="Enter linkedIn url"
                      required
                    />
                  </li>
                  <li>
                    <span>CV Document*</span>
                    <input
                      onChange={(e) => {
                        handleImageChange(e);
                      }}
                      type="file"
                      placeholder="Chosse"
                      required
                    />
                  </li>
                </ul>
                <div style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    // onClick={uploadResune}
                    className="JobApplyBtn"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* </div> */}
      </div>
      {/* </div> */}
      {/* </div> */}
    </Modal>
  );
};

export default JobApplyModal;
