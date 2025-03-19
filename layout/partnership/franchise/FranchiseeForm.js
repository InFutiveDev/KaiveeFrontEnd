import { useEffect, useState } from "react";
import { CheckObjectValidation } from "utility/Utils";
import { useDispatch } from "react-redux";
import { ADD_NEW_CORPORATE, ADD_NEW_INQUIRY } from "redux/actions/inquiry";
import { FacilitesBooksSvg } from "assets/images/SvgImage";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";

const FranchiseeForm = ({ hideUX = false, leads_source = "" }) => {
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("Submitting data");
    const your_name = event.target.your_name.value;
    const phone_number = event.target.phone_number.value;
    const your_email = event.target.your_email.value;
    const select_location = event.target.select_location.value;
    const select_options = event.target.select_options.value;
    const your_message = event.target.your_message.value;

    const data = {
      your_name,
      phone_number,
      your_email,
      select_location,
      select_options,
      your_message,
    };

    const validateEmail = (your_email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(your_email);
    };

    if (!validateEmail(your_email)) {
      toast("Invalid email format!", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    if (phone_number.length !== 10) {
      toast("Mobile number must be 10 digits!", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    if (select_location.length < 2) {
      toast("Select work  experiance", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    if (select_options.length < 2) {
      toast("Select work  experiance", {
        progress: 0,
        progressStyle: { background: "#ff2424" },
      });
      return;
    }
    if (localStorage.getItem("accessToken")) {
      axios
        .post("https://api.cityxrayclinic.com/v1/franchise/add-franchise", data)
        .then((response) => {
          console.log(response);
          event.target.reset();
          toast.success("Created Successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      dispatch(LOGIN_MODAL_OPEN(true));
      console.log("User not logged in");
    }
  };

  return (
    <>
      <div>
        <div className="shadow-md bg-white border border-[#E4E4E7] h-auto rounded-xl">
          {!hideUX && (
            <div className="facilities-enquiry rounded-xl p-2 md:p-3 m-2">
              <div className="flex justify-center gap-x-2 flex-nowrap items-center">
                <FacilitesBooksSvg />
                <p className="text-[#3F3F46]  xl:text-xl lg:text-[18px] md:text-[18px] text-[14px] font-bold font-source-pro">
                  Connect with us for Franchisee
                </p>
              </div>
            </div>
          )}
          <div className="col-md-12 form-group mb-2">
            <form onSubmit={submitHandler}>
              <ul className="franchiseeForm">
                <li>
                  <span>Full Name*</span>
                  <input
                    type="text"
                    id="your_name"
                    name="your_name"
                    placeholder="name"
                    className="form-control rounded placeholder:font-[300] placeholder:text-[14px]"
                    required
                  />
                </li>
                <li>
                  <span>Mobile*</span>
                  <input
                    type="number"
                    id="phone_number"
                    name="phone_number"
                    placeholder="mobile"
                    maxLength="10"
                    onInput={(e) => {e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);}}
                    className="form-control rounded placeholder:font-[300] placeholder:text-[14px]"
                    required
                  />
                </li>
                <li>
                  <span>Email*</span>
                  <input
                    type="text"
                    id="your_email"
                    name="your_email"
                    placeholder="email"
                    className="form-control rounded placeholder:font-[300] placeholder:text-[14px]"
                    required
                  />
                </li>
                <li>
                  <span>Location*</span>
                  <select
                    id="select_location"
                    name="select_location"
                    // text-[#71717A] text-base border border-[#E5E7EB] rounded-[8px]
                    className=" rounded placeholder:font-[300]  border border-[#E5E7EB] bg-white placeholder:text-[14px] w-full p-2"
                    required
                  >
                    <option value="">Select Location</option>
                    <option value="East Delhi">East Delhi</option>
                    <option value="North Delhi">North Delhi</option>
                    <option value="South Delhi">South Delhi</option>
                    <option value="West Delhi">West Delhi</option>
                    <option value="Central Delhi">Central Delhi</option>
                    <option value="Faridabad">Faridabad</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    <option value="Gurugram">Gurugram</option>
                  </select>
                </li>
                <li>
                  <span>Option*</span>
                  <select
                    id="select_options"
                    name="select_options"
                    className=" rounded placeholder:font-[300]  border border-[#E5E7EB] bg-white placeholder:text-[14px] w-full p-2"
                    required
                  >
                    <option value="">Select Options</option>
                    <option value="Business Partners">Business Partners</option>
                    <option value="Franchisee PCC">Franchisee PCC</option>
                    <option value="At Doctor Chamber">At Doctor Chamber</option>
                    <option value="Hospital Lab Management">
                      Hospital Lab Management
                    </option>
                    <option value="Pick Up Point">Pick Up Point</option>
                  </select>
                </li>
                <li>
                  <span>Message*</span>
                  <textarea
                    type="text"
                    rows={2}
                    id="your_message"
                    className="form-control rounded placeholder:font-[300] placeholder:text-[14px]"
                    name="your_message"
                    placeholder="message"
                    required
                  />
                </li>
                <button type="submit" className="franchiseeFormBtn">
                  Submit
                </button>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FranchiseeForm;
